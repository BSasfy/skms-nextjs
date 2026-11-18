import { env } from "@/env";
import { isAllowedHostname } from "@/server/form-guard";

const SITEVERIFY_TIMEOUT_MS = 3_000;

type SiteverifyResult = {
  success: boolean;
  hostname?: string;
  "error-codes"?: string[];
};

type TurnstileConfig =
  | { mode: "off" }
  | { mode: "on"; secret: string }
  | { mode: "misconfigured" };

/**
 * Turnstile is on only when both the public site key and secret are set.
 * One without the other is a misconfiguration (broken forms or unverified tokens).
 * Leave both blank locally — honeypot + rate limits still apply.
 */
function getTurnstileConfig(): TurnstileConfig {
  const secret = env.TURNSTILE_SECRET_KEY;
  const siteKey = env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const hasSecret = Boolean(secret);
  const hasSiteKey = Boolean(siteKey);

  if (hasSecret && hasSiteKey && secret) {
    return { mode: "on", secret };
  }
  if (!hasSecret && !hasSiteKey) {
    return { mode: "off" };
  }

  console.error(
    "Turnstile misconfigured: set both NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY, or leave both blank.",
  );
  return { mode: "misconfigured" };
}

export type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; error: string; status: 400 | 503 };

/**
 * When both Turnstile keys are set, require a valid Cloudflare token.
 * When both are unset (local/dev), skip — honeypot + rate limits still apply.
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  remoteip?: string,
): Promise<TurnstileVerifyResult> {
  const config = getTurnstileConfig();

  if (config.mode === "off") {
    return { ok: true };
  }

  if (config.mode === "misconfigured") {
    return {
      ok: false,
      error: "Security check is not configured correctly. Please try again later.",
      status: 503,
    };
  }

  if (!token || token.trim().length === 0 || token.length > 2048) {
    return {
      ok: false,
      error: "Please complete the security check and try again.",
      status: 400,
    };
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), SITEVERIFY_TIMEOUT_MS);

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          secret: config.secret,
          response: token,
          ...(remoteip && remoteip !== "unknown" ? { remoteip } : {}),
        }),
        signal: controller.signal,
      },
    );

    const result = (await response.json()) as SiteverifyResult;
    if (!result.success) {
      console.error("Turnstile siteverify failed:", result["error-codes"]);
      return {
        ok: false,
        error: "Security check failed. Please try again.",
        status: 400,
      };
    }

    const hostname = result.hostname?.toLowerCase();
    if (!isAllowedHostname(hostname ?? null)) {
      console.error("Turnstile hostname rejected:", result.hostname);
      return {
        ok: false,
        error: "Security check failed. Please try again.",
        status: 400,
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Turnstile siteverify request failed:", error);
    return {
      ok: false,
      error: "Security check failed. Please try again.",
      status: 400,
    };
  } finally {
    clearTimeout(timeoutId);
  }
}
