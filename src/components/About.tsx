"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-surface px-5 py-20 text-center">
      <FadeIn className="mx-auto max-w-[700px]">
        <h2 className="mb-5 text-[2.2rem] font-bold text-heading">
          {t.about.title}
        </h2>
        <p className="mb-5 leading-relaxed text-body">{t.about.text}</p>
        <ul className="mb-8 space-y-2.5">
          {t.about.points.map((point) => (
            <li key={point} className="text-gray-800">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <Image
            src="/images/about.jpg"
            alt={t.about.imageAlt}
            width={400}
            height={267}
            loading="lazy"
            className="mt-5 w-full max-w-[400px] rounded-xl shadow-[0_6px_16px_rgba(0,0,0,0.15)]"
          />
        </div>
      </FadeIn>
    </section>
  );
}
