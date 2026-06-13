import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing the use of the Rora Bath website and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPage page="terms" />;
}
