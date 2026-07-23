import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import EditorialPageHero from "@/components/layout/EditorialPageHero";

export const metadata: Metadata = {
  title: "Guides | LANCHROM",
  description: "In-depth guides on HPLC and LC-MS solvents, mobile phase chemistry, solvent buying, and OEM laboratory supply.",
  alternates: { canonical: "https://www.lanchrom.com/guides" },
};

const CATEGORY_LABELS: Record<string, string> = {
  "solvent-guides": "Solvent Guides",
  "buying-guides": "Buying Guides",
  "operational-guides": "Operational Guides",
};

export default function GuidesIndexPage() {
  const guides = Object.values(GUIDES);

  return (
    <div className="bg-white">
      <EditorialPageHero
        eyebrow="Guides"
        title="In-Depth Guides"
        description="Longer reference pieces for when you need the full picture - not just a definition, but the reasoning, the tradeoffs, and the practical detail behind it."
        image="/images/backgrounds/solvents-production-lines.png"
        imageAlt="LANCHROM solvents production lines"
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {guides.map(g => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="group block p-6 rounded-2xl border border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8782]">{CATEGORY_LABELS[g.category]}</span>
                <span className="text-[#C9DBD9]">·</span>
                <span className="text-[10px] font-medium text-[#8A8782]">{g.readingTime}</span>
              </div>
              <h2 className="text-xl font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors mb-2">{g.h1}</h2>
              <p className="text-[#5C5A55] text-sm leading-relaxed">{g.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
