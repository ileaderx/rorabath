"use client";

import FadeIn from "./FadeIn";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="px-5 py-20">
      <FadeIn className="mx-auto max-w-[1200px] text-center">
        <h2 className="mb-4 text-[2.2rem] font-bold text-heading">
          {t.services.title}
        </h2>
        <p className="mx-auto mb-12 max-w-[600px] text-[1.1rem] text-body">
          {t.services.intro}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
