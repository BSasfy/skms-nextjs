import { env } from "@/env";

type SiteverifyResult = {
  success: boolean;
  "error-codes"?: string[];
};

/**
 * When TURNSTILE_SECRET_KEY is set, require a valid Cloudflare Turnstile token.
 * When unset (local/dev without keys), skip — honeypot + rate limits still apply.
 */
export async function verifyTurnstileToken(
  token: string | undefined,
  remoteip?: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const secret = env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { ok: true };
  }

  if (!token || token.trim().length === 0 || token.length > 2048) {
    return {
      ok: false,
      error: "Please complete the security check and try again.",
    };
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
          ...(remoteip && remoteip !== "unknown" ? { remoteip } : {}),
        }),
      },
    );

    const result = (await response.json()) as SiteverifyResult;
    if (!result.success) {
      console.error("Turnstile siteverify failed:", result["error-codes"]);
      return {
        ok: false,
        error: "Security check failed. Please try again.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("Turnstile siteverify request failed:", error);
    return {
      ok: false,
      error: "Security check failed. Please try again.",
    };
  }
}
