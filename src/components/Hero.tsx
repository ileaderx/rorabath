"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="flex min-h-[90vh] items-center justify-center bg-gradient-to-b from-[#F4EFEB] to-[#EDE7E3] px-5 py-16 text-center"
    >
      <FadeIn className="max-w-[800px]">
        <h1 className="mb-5 text-[2.8rem] leading-tight font-bold text-heading">
          {t.hero.titlePrefix} <span className="text-accent">{t.brand}</span>
        </h1>
        <p className="mb-8 text-[1.1rem] text-body">{t.hero.subtitle}</p>
        <a
          href="#about"
          className="inline-block rounded-md bg-accent px-6 py-3 font-bold text-white transition-colors hover:bg-accent-dark"
        >
          {t.hero.btn}
        </a>
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/hero.webp"
            alt={t.hero.imageAlt}
            width={500}
            height={333}
            priority
            className="w-full max-w-[500px] rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
          />
        </div>
      </FadeIn>
    </section>
  );
}
