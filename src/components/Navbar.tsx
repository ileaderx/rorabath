"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Locale } from "@/lib/i18n/translations";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/#about", label: t.nav.about },
    { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#contact", label: t.nav.contact },
    { href: "/privacy", label: t.nav.privacy },
    { href: "/terms", label: t.nav.terms },
  ];

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-[0_2px_10px_rgba(44,78,143,0.2)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-4">
        <Link href="/" aria-label={t.brand} className="shrink-0">
          <Image
            src="/images/logo.png"
            alt={t.brand}
            width={40}
            height={40}
            priority
            className="h-10 w-10 object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative pb-1 font-medium text-[#F4EFEB] transition-colors after:absolute after:bottom-0 after:start-0 after:h-0.5 after:w-full after:scale-x-0 after:rounded after:bg-[#8EA9E1] after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="block cursor-pointer text-2xl text-[#F4EFEB] md:hidden"
            aria-label={t.nav.menuLabel}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>

          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            aria-label={t.nav.langLabel}
            className="cursor-pointer rounded-md border border-gray-300 bg-surface-alt px-2.5 py-1.5 text-[0.95rem] text-gray-900 focus:outline-none"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-full bg-[#F4EFEB] p-6 shadow-[0_8px_20px_rgba(44,78,143,0.15)] md:hidden"
          >
            <ul className="flex w-full flex-col gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block w-full px-4 py-3 font-medium text-primary hover:text-primary-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
