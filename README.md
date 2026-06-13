# Rora Bath — Company Website

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion. Migrated from the original static HTML/CSS/JS site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Contact form (Resend)

The form posts to `/api/contact`, which sends email server-side via [Resend](https://resend.com).

1. Create a free Resend account and API key.
2. Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`.
3. Verify your sending domain in Resend, then set `CONTACT_FROM_EMAIL` (e.g. `noreply@rorabath.com`).

Until the key is set, the form returns "Email service not configured" (503) — by design, no credentials live in the browser (the old SMTP.js approach exposed them).

## Languages

English/Arabic toggle in the navbar (client-side, persisted in `localStorage`). Arabic switches the whole document to RTL. All copy lives in `src/lib/i18n/translations.ts`.

## Structure

```
src/
  app/            # routes: / , /privacy , /terms , /api/contact, sitemap, robots
  components/     # Navbar, Footer, Hero, About, Services, Portfolio, Contact, LegalPage, FadeIn
  lib/i18n/       # translations + LanguageProvider context
public/images/    # logo, hero, about, project photos
```

## Deployment (Vercel)

Push to GitHub (`ileaderx/rorabath`), import in Vercel, add the three env vars from `.env.example` in Project Settings → Environment Variables. No other config needed.
