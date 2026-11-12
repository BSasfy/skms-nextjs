import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env";
import { subscribeToNewsletter } from "@/server/brevo";

const bodySchema = z.object({
  email: z.string().trim().email(),
});

export async function POST(request: Request) {
  if (!env.BREVO_API_KEY || !env.BREVO_NEWSLETTER_LIST_ID) {
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

  try {
    const result = await subscribeToNewsletter({
      email: parsed.data.email,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status },
      );
    }

    return NextResponse.json({
      ok: true,
      alreadySubscribed: result.alreadySubscribed === true,
    });
  } catch (error) {
    console.error("Brevo newsletter request failed:", error);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
