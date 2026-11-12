import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env";

const bodySchema = z.object({
  email: z.string().trim().email(),
});

export async function POST(request: Request) {
  const apiKey = env.BREVO_API_KEY;
  const listId = env.BREVO_NEWSLETTER_LIST_ID;

  if (!apiKey || !listId) {
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 503 },
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
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const email = parsed.data.email.toLowerCase();

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (response.ok || response.status === 204) {
      return NextResponse.json({ ok: true });
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
      return NextResponse.json({ ok: true, alreadySubscribed: true });
    }

    console.error("Brevo newsletter error:", response.status, data);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  } catch (error) {
    console.error("Brevo newsletter request failed:", error);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
