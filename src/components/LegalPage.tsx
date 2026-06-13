"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/i18n/translations";

interface LegalPageProps {
  page: "privacy" | "terms";
}

/**
 * Shared renderer for the Privacy Policy and Terms & Conditions pages.
 * Content lives in the translations dictionary (EN + AR).
 */
export default function LegalPage({ page }: LegalPageProps) {
  const { t } = useLanguage();
  const doc = t[page];

  return (
    <main className="mx-auto max-w-[1200px] p-8 max-md:p-4">
      <article
        aria-labelledby={`${page}-title`}
        className="rounded-[10px] bg-surface-alt p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)] sm:p-8"
      >
        <h1 id={`${page}-title`} className="mb-2 text-[2rem] font-bold text-heading">
          {doc.title}
        </h1>
        <p className="mb-4 text-[0.95rem] text-body-soft">
          {doc.effectiveDate} <strong>{doc.effectiveDateValue}</strong>
        </p>
        <p className="mb-4 leading-relaxed text-gray-900">{doc.intro}</p>

        {doc.sections.map((section) => (
          <section key={section.title} className="mt-5">
            <h2 className="mb-2 text-2xl font-semibold text-heading">
              {section.title}
            </h2>
            {section.text && (
              <p className="leading-relaxed text-body">{section.text}</p>
            )}
            {section.list && (
              <ul className="ms-5 mt-2 list-disc space-y-1.5 text-body">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-5">
          <h2 className="mb-3 text-2xl font-semibold text-heading">
            {doc.contactTitle}
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="min-w-[220px] flex-1 rounded-lg border border-gray-200 bg-white p-3">
              <strong>{t.contact.companyName}</strong>
              <br />
              {t.contact.companyType}
            </div>
            <div className="min-w-[220px] flex-1 rounded-lg border border-gray-200 bg-white p-3">
              <strong>{t.contact.addressLabel}</strong>
              <br />
              {t.contact.address}
            </div>
            <div className="min-w-[220px] flex-1 rounded-lg border border-gray-200 bg-white p-3">
              <strong>{t.contact.phoneLabel}</strong>
              <br />
              <a href={`tel:${PHONE_TEL}`} dir="ltr" className="text-accent">
                {PHONE_DISPLAY}
              </a>
            </div>
            <div className="min-w-[220px] flex-1 rounded-lg border border-gray-200 bg-white p-3">
              <strong>{t.contact.emailLabel}</strong>
              <br />
              <a href={`mailto:${EMAIL}`} className="text-accent">
                {EMAIL}
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
