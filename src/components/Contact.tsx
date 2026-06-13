"use client";

import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import {
  EMAIL,
  MANAGEMENT_EMAIL,
  PHONE_1_DISPLAY,
  PHONE_1_TEL,
  PHONE_2_DISPLAY,
  PHONE_2_TEL,
} from "@/lib/i18n/translations";

export default function Contact() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: "📍",
      label: t.contact.addressLabel,
      content: <p className="text-sm leading-relaxed text-body">{t.contact.address}</p>,
    },
    {
      icon: "📞",
      label: t.contact.phoneLabel,
      content: (
        <div className="flex flex-col gap-1">
          <a href={`tel:${PHONE_1_TEL}`} dir="ltr" className="text-sm text-body underline hover:text-heading">
            {PHONE_1_DISPLAY}
          </a>
          <a href={`tel:${PHONE_2_TEL}`} dir="ltr" className="text-sm text-body underline hover:text-heading">
            {PHONE_2_DISPLAY}
          </a>
        </div>
      ),
    },
    {
      icon: "✉️",
      label: t.contact.emailLabel,
      content: (
        <a href={`mailto:${EMAIL}`} className="text-sm text-body underline hover:text-heading">
          {EMAIL}
        </a>
      ),
    },
    {
      icon: "👤",
      label: t.contact.managementLabel,
      content: (
        <a href={`mailto:${MANAGEMENT_EMAIL}`} className="text-sm text-body underline hover:text-heading">
          {MANAGEMENT_EMAIL}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="bg-surface-alt px-5 py-20">
      <FadeIn className="mx-auto max-w-[1200px]">
        <h2 className="mb-4 text-center text-[2.2rem] font-bold text-heading">
          {t.contact.title}
        </h2>
        <p className="mx-auto mb-10 max-w-[700px] text-center leading-relaxed text-body">
          {t.contact.intro}
        </p>

        {/* Centered contact form */}
        <div className="mx-auto mb-14 max-w-[620px]">
          <ContactForm />
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon, label, content }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-sm"
            >
              <span className="mb-3 text-3xl">{icon}</span>
              <h3 className="mb-2 font-bold text-heading">{label}</h3>
              {content}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
