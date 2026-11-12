import { NextResponse } from "next/server";
import { z } from "zod";
import { env } from "@/env";
import { subscribeToNewsletter } from "@/server/brevo";
import {
  checkRateLimit,
  failsAntiSpam,
  getClientIp,
  isTrustedBrowserOrigin,
} from "@/server/form-guard";

const bodySchema = z.object({
  email: z.string().trim().email().max(254),
  company: z.string().max(200).optional().default(""),
  formStartedAt: z.number().optional(),
});

export async function POST(request: Request) {
  if (!env.BREVO_API_KEY || !env.BREVO_NEWSLETTER_LIST_ID) {
    return NextResponse.json(
      { error: "Newsletter signup is not configured yet." },
      { status: 503 },
    );
  }

  if (!isTrustedBrowserOrigin(request)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 403 });
  }

  const ip = getClientIp(request);
  const ipLimit = checkRateLimit(`newsletter:ip:${ip}`, {
    limit: 8,
    windowMs: 15 * 60 * 1000,
  });
  if (!ipLimit.ok) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
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
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const data = parsed.data;

  if (
    failsAntiSpam({
      company: data.company,
      formStartedAt: data.formStartedAt,
      minFillMs: 1200,
    })
  ) {
    return NextResponse.json({ ok: true });
  }

  const emailKey = data.email.toLowerCase();
  const emailLimit = checkRateLimit(`newsletter:email:${emailKey}`, {
    limit: 3,
    windowMs: 60 * 60 * 1000,
  });
  if (!emailLimit.ok) {
    return NextResponse.json(
      { error: "Too many attempts for this email. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(emailLimit.retryAfterSec) },
      },
    );
  }

  try {
    const result = await subscribeToNewsletter({
      email: data.email,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Brevo newsletter request failed:", error);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 502 },
    );
  }
}
