import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

export default function WomenOnlyPageViews() {
  useEffect(() => {
    console.log("WomenOnlyPageViews");
    // Add Facebook Pixel script
    type Fbq = ((...args: unknown[]) => void) & {
      callMethod?: unknown;
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
      const stub: Fbq = function () {
        (stub as Fbq).callMethod
          ? ((stub as Fbq).callMethod as (...a: unknown[]) => void).apply(
              stub,
              Array.from(arguments),
            )
          : (stub as Fbq).queue.push(arguments);
      } as Fbq;
      (stub as Fbq).queue = [];
      n = f.fbq = stub;
      if (!f._fbq) f._fbq = n;
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
    window.fbq && window.fbq("init", "1546687536439784");
    window.fbq && window.fbq("track", "PageView");
    console.log("WomenOnlyPageViews - finished");
  }, []);
  return (
    <>
      <noscript>
        <img
          height="1"
          width="1"
          src="https://www.facebook.com/tr?id=1546687536439784&ev=PageView
    &noscript=1"
        />
      </noscript>
    </>
  );
}
