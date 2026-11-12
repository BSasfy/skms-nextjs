"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  type CookieConsent,
} from "../../cookies/cookie-consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...a: unknown[]) => void;
  queue: unknown[];
  push?: unknown;
  loaded?: boolean;
  version?: string;
};

function getFbq(): FbqFn | undefined {
  return window.fbq as FbqFn | undefined;
}

function loadMetaPixel() {
  if (typeof window === "undefined") return;

  const existing = getFbq();
  if (existing) {
    existing("track", "PageView");
    return;
  }

  (function (
    f: Window,
    b: Document,
    e: string,
    v: string,
    n?: FbqFn,
    t?: HTMLScriptElement,
    s?: Element,
  ) {
    if (f.fbq) return;
    const stub = function (...args: unknown[]) {
      if (stub.callMethod) {
        (stub.callMethod as (...a: unknown[]) => void).call(stub, ...args);
      } else {
        stub.queue.push(args);
      }
    } as FbqFn;
    stub.queue = [];
    n = f.fbq = stub;
    f._fbq ??= n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    t = b.createElement(e) as HTMLScriptElement;
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    if (s?.parentNode) s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js",
  );

  const fbq = getFbq();
  fbq?.("init", "1546687536439784");
  fbq?.("track", "PageView");
}

export default function WomenOnlyPageViews() {
  useEffect(() => {
    const maybeLoad = (consent: CookieConsent | null = getCookieConsent()) => {
      if (consent === "accepted") loadMetaPixel();
    };

    maybeLoad();

    const onConsent = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsent>).detail;
      maybeLoad(detail);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
  }, []);

  return null;
}
