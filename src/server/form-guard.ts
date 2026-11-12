const ALLOWED_HOSTS = new Set([
  "scotkravmaga.co.uk",
  "www.scotkravmaga.co.uk",
  "localhost",
  "127.0.0.1",
]);

type RateBucket = {
  count: number;
  resetAt: number;
};

/** Best-effort in-memory limiter (per server instance). */
const rateBuckets = new Map<string, RateBucket>();

function hostFromUrl(value: string | null): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

function isAllowedHost(hostname: string | null): boolean {
  if (!hostname) return false;
  if (ALLOWED_HOSTS.has(hostname)) return true;
  // Local Next.js / preview deploys
  if (hostname.endsWith(".vercel.app")) return true;
  if (hostname.endsWith(".localhost")) return true;
  return false;
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  return realIp && realIp.length > 0 ? realIp : "unknown";
}

/** Reject cross-site browser posts; allow missing Origin on non-browser clients only when Referer is ok/absent in same cases we still rate-limit. */
export function isTrustedBrowserOrigin(request: Request): boolean {
  const originHost = hostFromUrl(request.headers.get("origin"));
  if (originHost) return isAllowedHost(originHost);

  const refererHost = hostFromUrl(request.headers.get("referer"));
  if (refererHost) return isAllowedHost(refererHost);

  // No Origin/Referer — common for some privacy tools; still rate-limited + honeypot
  return true;
}

export function checkRateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  const existing = rateBuckets.get(key);

  if (!existing || existing.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true };
  }

  if (existing.count >= limit) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  return { ok: true };
}

export type AntiSpamInput = {
  /** Honeypot — must be empty for humans */
  company?: string;
  /** Client timestamp when the form mounted */
  formStartedAt?: number;
  /** Minimum time a real user needs to complete the form */
  minFillMs: number;
};

/**
 * Silent bot checks. Callers should respond like a soft success when this fails
 * so scrapers learn less.
 */
export function failsAntiSpam({
  company,
  formStartedAt,
  minFillMs,
}: AntiSpamInput): boolean {
  if (typeof company === "string" && company.trim().length > 0) {
    return true;
  }

  if (typeof formStartedAt !== "number" || !Number.isFinite(formStartedAt)) {
    return true;
  }

  const age = Date.now() - formStartedAt;
  // Too fast = bot; absurdly old/future = replay / clock skew abuse
  if (age < minFillMs || age > 1000 * 60 * 60 * 6) {
    return true;
  }

  return false;
}
