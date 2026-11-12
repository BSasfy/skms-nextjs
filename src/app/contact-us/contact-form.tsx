"use client";

import Link from "next/link";
import { useRef, useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500";

type FormStatus = "idle" | "sending" | "success" | "error";

function formString(formData: FormData, key: string, fallback = "") {
  const value = formData.get(key);
  return typeof value === "string" ? value : fallback;
}

export default function ContactForm({
  idPrefix = "",
  messageRows = 6,
  onSuccess,
}: {
  idPrefix?: string;
  messageRows?: number;
  onSuccess?: () => void;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formStartedAtRef = useRef(Date.now());
  const fieldId = (name: string) => `${idPrefix}${name}`;

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName: formString(formData, "firstName"),
          lastName: formString(formData, "lastName"),
          email: formString(formData, "email"),
          phone: formString(formData, "phone"),
          subject: formString(formData, "subject", "general-inquiry"),
          message: formString(formData, "message"),
          newsletter: formData.get("newsletter") === "yes",
          company: formString(formData, "company"),
          formStartedAt: formStartedAtRef.current,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          data?.error ??
            "Something went wrong sending your message. Please try again or email info@scotkravmaga.co.uk.",
        );
        return;
      }

      setStatus("success");
      form.reset();
      formStartedAtRef.current = Date.now();
      if (onSuccess) {
        window.setTimeout(onSuccess, 3500);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again or email info@scotkravmaga.co.uk.",
      );
    }
  };

  return (
    <form onSubmit={sendMessage} className="space-y-6">
      {/* Honeypot — leave empty */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={fieldId("company")}>Company</label>
        <input
          type="text"
          id={fieldId("company")}
          name="company"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId("firstName")}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id={fieldId("firstName")}
            name="firstName"
            required
            className={inputClass}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label
            htmlFor={fieldId("lastName")}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id={fieldId("lastName")}
            name="lastName"
            className={inputClass}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor={fieldId("email")}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address *
          </label>
          <input
            type="email"
            id={fieldId("email")}
            name="email"
            required
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor={fieldId("phone")}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id={fieldId("phone")}
            name="phone"
            className={inputClass}
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor={fieldId("subject")}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Subject *
        </label>
        <select
          id={fieldId("subject")}
          name="subject"
          required
          className={inputClass}
          defaultValue="general-inquiry"
        >
          <option value="trial-class">Book a Trial Class</option>
          <option value="beginners-course">Beginners Course Information</option>
          <option value="private-lessons">Private Lessons</option>
          <option value="membership">Membership Information</option>
          <option value="general-inquiry">General Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor={fieldId("message")}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          required
          rows={messageRows}
          className={inputClass}
          placeholder="Tell us more about what you're looking for..."
        />
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3">
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id={fieldId("newsletter")}
            name="newsletter"
            value="yes"
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor={fieldId("newsletter")} className="block text-sm">
            <span className="font-semibold text-blue-900">
              Subscribe to the SKMS newsletter
            </span>
            <span className="mt-0.5 block text-blue-800">
              Optional. Class news, beginners courses, and events — unsubscribe
              anytime. See our{" "}
              <Link
                href="/privacy"
                className="font-semibold underline hover:text-blue-950"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>
      </div>

      {status === "success" && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-800"
        >
          Message sent — we&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-lg bg-red-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
