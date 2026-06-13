import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE_URL = "https://rorabath.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rora Bath — Sanitary Ware & General Trading",
    template: "%s — Rora Bath",
  },
  description:
    "Rora Bath provides innovative solutions in sanitary ware retail, combining quality bathroom and plumbing products with excellent service. Based in Saida, Daraa, Syria.",
  keywords: [
    "sanitary ware",
    "bathroom products",
    "plumbing",
    "general trading",
    "Rora Bath",
    "Syria",
    "Daraa",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rora Bath",
    title: "Rora Bath — Sanitary Ware & General Trading",
    description:
      "Quality bathroom and plumbing products with excellent service, fast delivery, and product guarantees.",
    images: [{ url: "/images/hero.webp", width: 1200, height: 630, alt: "Rora Bath sanitary ware products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rora Bath — Sanitary Ware & General Trading",
    description:
      "Quality bathroom and plumbing products with excellent service.",
    images: ["/images/hero.webp"],
  },
  icons: { icon: "/images/logo.png" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rora Bath",
  description:
    "Sanitary ware retail company providing bathroom and plumbing products and services.",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/hero.webp`,
  telephone: "+963996679261",
  email: "sales@rorabath.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saida",
    addressRegion: "Daraa",
    addressCountry: "SY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
