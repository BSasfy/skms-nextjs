"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import ContactForm from "@/app/contact-us/contact-form";
import { useContactModal } from "./contact-modal-context";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

function getFocusableElements(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true" &&
      element.tabIndex !== -1,
  );
}

export default function ContactModal() {
  const { isOpen, closeContactModal, defaultSubject } = useContactModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeContactModal();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = getFocusableElements(dialogRef.current);
      if (focusable.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !dialogRef.current.contains(active)) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (active === last || !dialogRef.current.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    const scrollY = window.scrollY;
    const html = document.documentElement;
    const { body } = document;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    const focusFrame = window.requestAnimationFrame(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;

      // Prefer the first real form control (skip close button / honeypot).
      const focusable = getFocusableElements(dialog);
      const firstField = focusable.find(
        (element) =>
          element instanceof HTMLInputElement ||
          element instanceof HTMLTextAreaElement ||
          element instanceof HTMLSelectElement,
      );
      (firstField ?? focusable[0] ?? dialog).focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.scrollTo(0, scrollY);
      previouslyFocusedRef.current?.focus();
      previouslyFocusedRef.current = null;
    };
  }, [isOpen, closeContactModal]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999]">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close contact form"
        className="absolute inset-0 bg-black/60"
        onClick={closeContactModal}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4 sm:p-6">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="pointer-events-auto flex max-h-[min(90dvh,52rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl outline-none"
        >
          <div className="flex shrink-0 items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 sm:px-8">
            <div>
              <p className="text-sm font-semibold tracking-wide text-red-600 uppercase">
                Get in touch
              </p>
              <h2
                id={titleId}
                className="mt-1 text-2xl font-bold text-gray-900"
              >
                Send us a message
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={closeContactModal}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5 sm:px-8">
            <ContactForm
              key={defaultSubject}
              idPrefix="modal-"
              messageRows={4}
              defaultSubject={defaultSubject}
              onSuccess={closeContactModal}
            />
          </div>

          <p className="shrink-0 border-t border-gray-100 px-6 py-4 text-center text-sm text-gray-500 sm:px-8">
            Prefer email?{" "}
            <a
              href="mailto:info@scotkravmaga.co.uk"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              info@scotkravmaga.co.uk
            </a>
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}
