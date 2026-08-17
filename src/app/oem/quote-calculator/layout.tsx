import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OEM Quote Calculator | LANCHROM™",
  description: "Configure a private-label or OEM laboratory solvent request, including grade, packaging, labeling, documentation, and delivery requirements.",
  alternates: { canonical: "https://www.lanchrom.com/oem/quote-calculator" },
};

export default function OEMQuoteCalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
