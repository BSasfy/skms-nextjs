"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export default function WomenOnlyPageViews() {
  useEffect(() => {
    type Fbq = ((...args: unknown[]) => void) & {
      callMethod?: (...a: unknown[]) => void;
      queue: unknown[];
      push?: unknown;
      loaded?: boolean;
      version?: string;
    };
    (function (
      f: Window,
      b: Document,
      e: string,
      v: string,
      n?: Fbq,
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
      } as Fbq;
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
    if (window.fbq) {
      window.fbq("init", "1546687536439784");
      window.fbq("track", "PageView");
    }
  }, []);
  return null;
  // <>
  //   <noscript>
  //     {/* eslint-disable-next-line @next/next/no-img-element -- 1x1 tracking pixel fallback when JS is disabled */}
  //     <img
  //       height="1"
  //       width="1"
  //       alt=""
  //       src="https://www.facebook.com/tr?id=1546687536439784&ev=PageView
  // &noscript=1"
  //     />
  //   </noscript>
  // </>
}
