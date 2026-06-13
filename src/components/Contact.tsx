"use client";

import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n/translations";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-surface-alt px-5 py-20">
      <FadeIn className="mx-auto max-w-[1200px]">
        <h2 className="mb-4 text-center text-[2.2rem] font-bold text-heading">
          {t.contact.title}
        </h2>
        <p className="mx-auto mb-10 max-w-[700px] text-center leading-relaxed text-body">
          {t.contact.intro}
        </p>

        <div className="flex flex-wrap items-start justify-center gap-10">
          <div className="min-w-[280px] flex-1 basis-[400px]">
            <ContactForm />
          </div>

          <address className="flex-1 basis-[300px] text-center text-[0.95rem] not-italic leading-7 text-body">
            <p className="font-bold text-heading">{t.contact.companyName}</p>
            <p>{t.contact.companyType}</p>
            <p>
              <strong className="text-heading">{t.contact.addressLabel}</strong>{" "}
              {t.contact.address}
            </p>
            <p>
              <strong className="text-heading">{t.contact.phoneLabel}</strong>{" "}
              <a href={`tel:${PHONE_TEL}`} dir="ltr" className="text-black underline">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <strong className="text-heading">{t.contact.emailLabel}</strong>{" "}
              <a href={`mailto:${EMAIL}`} className="text-black underline">
                {EMAIL}
              </a>
            </p>
          </address>
        </div>
      </FadeIn>
    </section>
  );
}
