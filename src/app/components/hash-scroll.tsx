"use client";

import { useEffect } from "react";

/** Scrolls to the URL hash target after client navigation (Next soft nav often skips this). */
export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const scroll = () => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // Wait a frame so layout (and sticky header offset via scroll-mt) is ready.
    const frame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frame);
  }, []);

  return null;
}
