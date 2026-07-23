"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sent");
  }

  const fieldClasses =
    "mt-1 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none transition focus:border-brand";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input required name="name" type="text" placeholder="Your name" className={fieldClasses} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input required name="email" type="email" placeholder="you@example.com" className={fieldClasses} />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Message
        <textarea
          required
          name="message"
          rows={4}
          placeholder="How can I help?"
          className={fieldClasses}
        />
      </label>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          Send Message
        </button>
        {status === "sent" ? (
          <span className="text-sm font-medium text-brand">Thanks! I&apos;ll get back to you soon.</span>
        ) : null}
      </div>
    </form>
  );
}
