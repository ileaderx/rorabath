"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const socials = [
    { label: t.footer.social.facebook, href: "https://www.facebook.com/profile.php?id=61587006760897" },
    { label: t.footer.social.instagram, href: "https://www.instagram.com/rora.bath/" },
  ];

  return (
    <footer className="border-t border-[#DFD9D5] bg-primary text-center text-[#F4EFEB]">
      <div className="mx-auto max-w-[1200px] px-8 py-8">
        <p className="text-xl font-bold">{t.brand}</p>
        <p className="mt-2 text-sm text-[#8EA9E1]">
          &copy; {year} {t.brand}. {t.footer.rights}
        </p>
        <ul className="mt-4 flex justify-center gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="transition-colors hover:text-accent">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
