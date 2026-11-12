"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCookieConsent,
  setCookieConsent,
  type CookieConsent,
} from "./cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);
  }, []);

  const choose = (value: CookieConsent) => {
    setCookieConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie choices"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[10000] border-t border-gray-700 bg-[#181818] text-[#FFFBF2] shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
    >
      <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="max-w-2xl text-sm leading-relaxed text-[#FFFBF2]/90">
          Optional cookies help us measure ads.{" "}
          <Link
            href="/privacy#cookies"
            className="font-semibold text-white underline underline-offset-2 hover:text-blue-300"
          >
            Privacy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="rounded-lg border border-[#FFFBF2]/40 px-5 py-2.5 text-sm font-semibold text-[#FFFBF2] transition-colors hover:bg-white/10"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-lg bg-[#1C67B1] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
