import { env } from "@/env";

type BrevoResult =
  | { ok: true; alreadySubscribed?: boolean }
  | { ok: false; status: number; error: string };

async function brevoFetch(path: string, init: RequestInit) {
  const apiKey = env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY is not configured");
  }

  return fetch(`https://api.brevo.com/v3${path}`, {
    ...init,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
      ...(init.headers ?? {}),
    },
  });
}

function contactAttributes({
  firstName,
  lastName,
}: {
  firstName?: string;
  lastName?: string;
}) {
  const attributes: Record<string, string> = {};
  if (firstName) attributes.FIRSTNAME = firstName;
  if (lastName) attributes.LASTNAME = lastName;
  return attributes;
}

/** Create/update a Brevo contact (no list) so {{ contact.FIRSTNAME }} works in templates. */
export async function upsertBrevoContact({
  email,
  firstName,
  lastName,
  clearEmailBlacklist = false,
}: {
  email: string;
  firstName?: string;
  lastName?: string;
  clearEmailBlacklist?: boolean;
}): Promise<void> {
  const attributes = contactAttributes({ firstName, lastName });

  const response = await brevoFetch("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: email.toLowerCase(),
      updateEnabled: true,
      ...(clearEmailBlacklist ? { emailBlacklist: false } : {}),
      ...(Object.keys(attributes).length > 0 ? { attributes } : {}),
    }),
  });

  if (!response.ok && response.status !== 204) {
    const data = await response.json().catch(() => null);
    console.error("Brevo upsert contact error:", response.status, data);
  }
}

/**
 * Newsletter unsubscribe can block transactional mail from the same sender.
 * Clear that block so contact-form auto-replies still go through.
 */
async function unblockTransactionalContact(email: string): Promise<void> {
  const response = await brevoFetch(
    `/smtp/blockedContacts/${encodeURIComponent(email.toLowerCase())}`,
    { method: "DELETE" },
  );

  // 404 = not blocked — fine
  if (!response.ok && response.status !== 404) {
    const data = await response.json().catch(() => null);
    console.error(
      "Brevo unblock transactional contact error:",
      response.status,
      data,
    );
  }
}

export async function sendContactAutoreply({
  email,
  firstName,
}: {
  email: string;
  firstName: string;
}): Promise<void> {
  const templateId = env.BREVO_CONTACT_AUTOREPLY_TEMPLATE_ID;
  if (!templateId) {
    console.warn(
      "Skipping contact auto-reply — BREVO_CONTACT_AUTOREPLY_TEMPLATE_ID missing.",
    );
    return;
  }

  // Ensure contact.FIRSTNAME is set, and newsletter unsubscribe doesn't block this
  await upsertBrevoContact({
    email,
    firstName,
    clearEmailBlacklist: true,
  });
  await unblockTransactionalContact(email);

  const response = await brevoFetch("/smtp/email", {
    method: "POST",
    body: JSON.stringify({
      templateId,
      to: [
        {
          email: email.toLowerCase(),
          name: firstName,
        },
      ],
      // Also pass params in case the template uses params.FIRSTNAME
      params: {
        FIRSTNAME: firstName,
      },
    }),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    console.error("Brevo contact auto-reply error:", response.status, data);
  }
}

export async function subscribeToNewsletter({
  email,
  firstName,
  lastName,
}: {
  email: string;
  firstName?: string;
  lastName?: string;
}): Promise<BrevoResult> {
  const listId = env.BREVO_NEWSLETTER_LIST_ID;
  if (!listId) {
    return {
      ok: false,
      status: 503,
      error: "Newsletter signup is not configured yet.",
    };
  }

  const attributes = contactAttributes({ firstName, lastName });

  // Clear any prior unsubscribe block so they can receive list mail again
  await unblockTransactionalContact(email);

  const response = await brevoFetch("/contacts", {
    method: "POST",
    body: JSON.stringify({
      email: email.toLowerCase(),
      listIds: [listId],
      updateEnabled: true,
      emailBlacklist: false,
      ...(Object.keys(attributes).length > 0 ? { attributes } : {}),
    }),
  });

  if (response.status === 201) {
    return { ok: true };
  }

  // updateEnabled: true returns 204 when the contact already existed
  if (response.status === 204 || response.ok) {
    return { ok: true, alreadySubscribed: true };
  }

  const data = (await response.json().catch(() => null)) as {
    code?: string;
    message?: string;
  } | null;

  if (
    response.status === 400 &&
    (data?.code === "duplicate_parameter" ||
      data?.message?.toLowerCase().includes("already"))
  ) {
    return { ok: true, alreadySubscribed: true };
  }

  console.error("Brevo add-to-list error:", response.status, data);
  return {
    ok: false,
    status: 502,
    error: "Could not subscribe right now. Please try again.",
  };
}
