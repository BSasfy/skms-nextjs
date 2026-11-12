import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env";
import {
  sendContactAutoreply,
  subscribeToNewsletter,
} from "@/server/brevo";
import {
  checkRateLimit,
  failsAntiSpam,
  getClientIp,
  isTrustedBrowserOrigin,
} from "@/server/form-guard";
import {
  CONTACT_SUBJECT_LABELS,
  CONTACT_SUBJECTS,
} from "@/app/components/contact-modal/contact-subjects";

const bodySchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().default(""),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional().default(""),
  subject: z.enum(CONTACT_SUBJECTS),
  message: z.string().trim().min(1).max(5000),
  newsletter: z.boolean().optional().default(false),
  company: z.string().max(200).optional().default(""),
  formStartedAt: z.number().optional(),
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const apiKey = env.BREVO_API_KEY;
  const senderEmail = env.BREVO_SENDER_EMAIL;
  const toEmail = env.BREVO_CONTACT_TO_EMAIL ?? "info@scotkravmaga.co.uk";

  if (!apiKey || !senderEmail) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 503 },
    );
  }

  if (!isTrustedBrowserOrigin(request)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  const ip = getClientIp(request);
  const ipLimit = checkRateLimit(`contact:ip:${ip}`, {
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });
  if (!ipLimit.ok) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(ipLimit.retryAfterSec) },
      },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form and try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Soft success for bots — don't tip them off
  if (
    failsAntiSpam({
      company: data.company,
      formStartedAt: data.formStartedAt,
      minFillMs: 2500,
    })
  ) {
    return NextResponse.json({ ok: true });
  }

  const emailKey = data.email.toLowerCase();
  const emailLimit = checkRateLimit(`contact:email:${emailKey}`, {
    limit: 3,
    windowMs: 60 * 60 * 1000,
  });
  if (!emailLimit.ok) {
    return NextResponse.json(
      { error: "Too many messages from this email. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(emailLimit.retryAfterSec) },
      },
    );
  }

  const subjectLabel = CONTACT_SUBJECT_LABELS[data.subject] ?? data.subject;
  const fullName = [data.firstName, data.lastName].filter(Boolean).join(" ");

  const textLines = [
    `New website message from ${fullName}`,
    "",
    `Subject: ${subjectLabel}`,
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Newsletter opt-in: ${data.newsletter ? "yes" : "no"}`,
    "",
    "Message:",
    data.message,
  ];

  const html = `
    <h2>New website message</h2>
    <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
    <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone || "—")}</p>
    <p><strong>Newsletter opt-in:</strong> ${data.newsletter ? "yes" : "no"}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
  `;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "SKMS Website",
          email: senderEmail,
        },
        to: [{ email: toEmail, name: "SKMS" }],
        replyTo: {
          email: data.email,
          name: fullName,
        },
        subject: `[SKMS contact] ${subjectLabel} — ${fullName}`,
        textContent: textLines.join("\n"),
        htmlContent: html,
      }),
    });

    if (!response.ok) {
      const errorBody = (await response.json().catch(() => null)) as unknown;
      console.error("Brevo contact email error:", response.status, errorBody);
      return NextResponse.json(
        {
          error:
            "Something went wrong sending your message. Please try again or email info@scotkravmaga.co.uk.",
        },
        { status: 502 },
      );
    }

    await sendContactAutoreply({
      email: data.email,
      firstName: data.firstName,
    });

    if (data.newsletter) {
      const listResult = await subscribeToNewsletter({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName || undefined,
      });

      if (!listResult.ok) {
        console.error(
          "Brevo contact newsletter opt-in error:",
          listResult.status,
          listResult.error,
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Brevo contact request failed:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your message. Please try again or email info@scotkravmaga.co.uk.",
      },
      { status: 502 },
    );
  }
}
