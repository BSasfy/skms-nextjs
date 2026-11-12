"use client";

import Link from "next/link";
import { useId, useRef, useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function NewsletterSignup({
  className = "mb-12 rounded-lg bg-blue-50 p-6",
}: {
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const formStartedAtRef = useRef(Date.now());
  const companyFieldId = useId();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const companyValue = formData.get("company");
    const company = typeof companyValue === "string" ? companyValue : "";

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email,
          company,
          formStartedAt: formStartedAtRef.current,
        }),
      });
      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error ?? "Could not subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list — thanks!");
      setEmail("");
      formStartedAtRef.current = Date.now();
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Please try again.");
    }
  };

  return (
    <div className={className}>
      <h3 className="mb-4 text-xl font-bold text-blue-900">
        Want to keep up-to-date with SKMS?
      </h3>
      <p className="mb-4 text-blue-800">Subscribe to our newsletter</p>
      <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
        >
          <label htmlFor={companyFieldId}>Company</label>
          <input
            type="text"
            id={companyFieldId}
            name="company"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your Email Address"
          disabled={status === "sending"}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="mt-3 text-sm font-medium text-green-800"
        >
          {message}
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="mt-3 text-sm font-medium text-red-800">
          {message}
        </p>
      )}
      <p className="mt-3 text-sm text-blue-800">
        We use your email for the SKMS newsletter only. Unsubscribe anytime.{" "}
        <Link href="/privacy" className="font-semibold underline hover:text-blue-950">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
