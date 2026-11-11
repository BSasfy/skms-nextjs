"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || !formRef.current) {
      setStatus("error");
      setErrorMessage(
        "Email is not configured yet. Please email info@scotkravmaga.co.uk instead.",
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong sending your message. Please try again or email info@scotkravmaga.co.uk.",
      );
    }
  };

  return (
    <form ref={formRef} onSubmit={sendMessage} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClass}
            placeholder="Your first name"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClass}
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputClass}
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a subject
          </option>
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
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={inputClass}
          placeholder="Tell us more about what you're looking for..."
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          value="yes"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label
          htmlFor="newsletter"
          className="ml-2 block text-sm text-gray-700"
        >
          I would like to receive updates about SKMS classes and events
        </label>
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-800">
          Message sent — we&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm font-medium text-red-800">
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
