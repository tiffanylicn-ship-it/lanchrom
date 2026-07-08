import type { Metadata } from "next";
import Link from "next/link";
import { KNOWLEDGE_ARTICLES } from "@/data/knowledge-articles";
import { KNOWLEDGE_BATCH3 } from "@/data/knowledge-articles-batch3";
import { KNOWLEDGE_BATCH4 } from "@/data/knowledge-articles-batch4";

export const metadata: Metadata = {
  title: "Knowledge Center | LANCHROM™",
  description: "Short-form explainers and reference articles on HPLC, LC-MS, and mobile phase fundamentals — what terms mean and how to apply them.",
  alternates: { canonical: "https://www.lanchrom.com/resources/knowledge-center" },
};

const CATEGORY_ORDER = ["definitions", "grades", "compliance", "technique", "mobile-phase", "selection-guides"] as const;
const CATEGORY_LABELS: Record<string, string> = {
  definitions: "Definitions",
  grades: "Solvent Grades",
  compliance: "Compliance & Documentation",
  technique: "Technique",
  "mobile-phase": "Mobile Phase",
  "selection-guides": "Selection Guides",
};

export default function KnowledgeCenterPage() {
  const articles = [...Object.values(KNOWLEDGE_ARTICLES), ...Object.values(KNOWLEDGE_BATCH3), ...Object.values(KNOWLEDGE_BATCH4)];

  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Resources</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Knowledge Center</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">
            Short, practical explainers on HPLC, LC-MS, and mobile phase fundamentals — what the terms on a
            spec sheet actually mean and how to apply them.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {CATEGORY_ORDER.map(cat => {
            const inCategory = articles.filter(a => a.category === cat);
            if (inCategory.length === 0) return null;
            return (
              <div key={cat} className="mb-10 last:mb-0">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-4">{CATEGORY_LABELS[cat]}</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {inCategory.map(a => (
                    <Link
                      key={a.slug}
                      href={`/resources/knowledge-center/${a.slug}`}
                      className="group block p-5 rounded-xl border border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all"
                    >
                      <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors mb-1.5">{a.h1}</h3>
                      <p className="text-[#8A8782] text-sm leading-relaxed">{a.excerpt}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#E6E3DD] text-center">
          <p className="text-[#8A8782] text-sm mb-4">Have a term you'd like explained? Ask our technical team.</p>
          <Link href="/contact" className="btn-line inline-flex">Ask a question</Link>
        </div>
      </section>
    </div>
  );
}
