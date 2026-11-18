"use client";

import { useEffect, useId, useRef } from "react";
import { env } from "@/env";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const SCRIPT_LOAD_TIMEOUT_MS = 12_000;

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
      size?: "normal" | "flexible" | "compact";
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }
  if (window.turnstile) {
    return Promise.resolve();
  }
  if (scriptPromise) {
    return scriptPromise;
  }

  scriptPromise = new Promise((resolve, reject) => {
    let settled = false;

    const finishOk = () => {
      if (settled) return;
      settled = true;
      if (window.turnstile) {
        resolve();
        return;
      }
      scriptPromise = null;
      reject(new Error("Turnstile loaded without API"));
    };

    const finishErr = () => {
      if (settled) return;
      settled = true;
      scriptPromise = null;
      reject(new Error("Failed to load Turnstile"));
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`,
    );

    if (existing) {
      if (window.turnstile) {
        finishOk();
        return;
      }
      // load may already have fired — don't hang forever waiting for it
      if (
        existing.dataset.loaded === "true" ||
        existing.dataset.error === "true"
      ) {
        if (window.turnstile) {
          finishOk();
        } else {
          finishErr();
        }
        return;
      }

      const timeoutId = window.setTimeout(finishErr, SCRIPT_LOAD_TIMEOUT_MS);

      existing.addEventListener(
        "load",
        () => {
          window.clearTimeout(timeoutId);
          existing.dataset.loaded = "true";
          finishOk();
        },
        { once: true },
      );
      existing.addEventListener(
        "error",
        () => {
          window.clearTimeout(timeoutId);
          existing.dataset.error = "true";
          finishErr();
        },
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;

    const timeoutId = window.setTimeout(finishErr, SCRIPT_LOAD_TIMEOUT_MS);

    script.onload = () => {
      window.clearTimeout(timeoutId);
      script.dataset.loaded = "true";
      finishOk();
    };
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      script.dataset.error = "true";
      finishErr();
    };
    document.head.appendChild(script);
  });

  return scriptPromise;
}

export function isTurnstileConfigured(): boolean {
  return Boolean(env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

export default function TurnstileWidget({
  onTokenChange,
  resetSignal = 0,
  className = "",
}: {
  onTokenChange: (token: string | null) => void;
  /** Increment to force a widget reset (e.g. after submit). */
  resetSignal?: number;
  className?: string;
}) {
  const siteKey = env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const reactId = useId();

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      return;
    }

    let cancelled = false;

    const mount = async () => {
      try {
        await loadTurnstileScript();
        if (cancelled || !containerRef.current || !window.turnstile) {
          return;
        }

        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }

        containerRef.current.innerHTML = "";
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          callback: (token) => onTokenChangeRef.current(token),
          "expired-callback": () => onTokenChangeRef.current(null),
          "error-callback": () => onTokenChangeRef.current(null),
        });
      } catch (error) {
        console.error("Turnstile mount error:", error);
        onTokenChangeRef.current(null);
      }
    };

    void mount();

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, reactId]);

  useEffect(() => {
    if (!resetSignal || !widgetIdRef.current || !window.turnstile) {
      return;
    }
    window.turnstile.reset(widgetIdRef.current);
    onTokenChangeRef.current(null);
  }, [resetSignal]);

  if (!siteKey) {
    return null;
  }

  return (
    <div className={className}>
      <div ref={containerRef} />
    </div>
  );
}
