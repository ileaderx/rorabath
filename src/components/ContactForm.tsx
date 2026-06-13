"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

export default function ContactForm() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("invalid");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const f = t.contact.form;
  const inputClasses =
    "w-full rounded-lg border border-gray-300 p-3 text-[0.95rem] focus:border-accent focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col text-start" noValidate>
      <label htmlFor="contact-name" className="mb-1.5 font-semibold text-heading">
        {f.name}
      </label>
      <input
        id="contact-name"
        name="name"
        type="text"
        autoComplete="name"
        required
        className={`${inputClasses} mb-5`}
      />

      <label htmlFor="contact-email" className="mb-1.5 font-semibold text-heading">
        {f.email}
      </label>
      <input
        id="contact-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        className={`${inputClasses} mb-5`}
      />

      <label htmlFor="contact-message" className="mb-1.5 font-semibold text-heading">
        {f.message}
      </label>
      <textarea
        id="contact-message"
        name="message"
        rows={5}
        required
        className={`${inputClasses} mb-5`}
      />

      <button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer rounded-lg bg-primary p-3 text-[#F4EFEB] transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? f.sending : f.send}
      </button>

      <p role="status" aria-live="polite" className="mt-3 min-h-6 text-sm">
        {status === "success" && <span className="text-green-700">{f.success}</span>}
        {status === "error" && <span className="text-red-700">{f.error}</span>}
        {status === "invalid" && <span className="text-red-700">{f.required}</span>}
      </p>
    </form>
  );
}
