"use client";

import FadeIn from "./FadeIn";
import PortfolioCard from "./PortfolioCard";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="bg-surface px-5 py-20">
      <FadeIn className="mx-auto max-w-[1200px] text-center">
        <h2 className="mb-4 text-[2.2rem] font-bold text-heading max-md:text-[1.8rem]">
          {t.portfolio.title}
        </h2>
        <p className="mx-auto mb-12 max-w-[700px] leading-relaxed text-body max-md:text-[0.95rem]">
          {t.portfolio.intro}
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.projects.map((project) => (
            <PortfolioCard key={project.title} {...project} />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
