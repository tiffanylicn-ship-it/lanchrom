import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Mobile Phase Solutions | Ready-to-Use HPLC Buffers | LANCHROM™",
  description: "Pre-made, nitrogen-sealed HPLC mobile phase in 5L-20L flex bags for pharmaceutical QC, food safety, and fermentation analysis.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/mobile-phase" },
};

const USE_CASES = [
  { name: "Fermentation Analysis", desc: "Organic acid and sugar profiling for fermentation QC labs.", href: "/solutions/mobile-phase/fermentation-analysis", featured: true },
  { name: "Pharmaceutical QC", desc: "USP/EP-compliant mobile phase for drug substance and product release testing.", href: "/solutions/mobile-phase/pharma-qc" },
  { name: "Food Safety Testing", desc: "Pesticide residue and contaminant analysis mobile phase systems.", href: "/solutions/mobile-phase/food-safety" },
];

export default function MobilePhaseIndexPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/solutions" className="hover:text-[#3C6E71]">Solutions</Link> {" › "}
          <span className="text-[#5C5A55]">Mobile Phase</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Solutions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Mobile Phase, Pre-Made</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Pre-filtered, pH-verified, nitrogen-sealed mobile phase in 5L–20L flex bags. Connect directly
            to your pump — no prep room, no batch-to-batch variability from manual preparation.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-14">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <div className="flex-1 min-w-0">
        <div className="space-y-3 mb-14">
          {USE_CASES.map(uc => (
            <Link key={uc.href} href={uc.href} className={`group flex items-center justify-between py-5 px-5 border rounded-xl transition-all ${uc.featured ? "border-[#ECCFC1] bg-[#FBF0EB] hover:bg-[#F5E3DA]" : "border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8]"}`}>
              <div>
                <h3 className={`font-bold transition-colors ${uc.featured ? "text-[#B5654A]" : "text-[#2B2A28] group-hover:text-[#3C6E71]"}`}>{uc.name}</h3>
                <p className="text-[#8A8782] text-sm mt-0.5">{uc.desc}</p>
              </div>
              <span className="text-lg flex-shrink-0">→</span>
            </Link>
          ))}
        </div>

        <div className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-3">Why pre-made over in-house prep</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { t: "Consistency", d: "Every bag is filtered to the same 0.2µm spec and pH-verified before sealing — no variation between whoever prepared it that day." },
              { t: "Time", d: "Skip weighing, mixing, filtering, and degassing. Connect the bag and start the run." },
              { t: "Documentation", d: "Each batch ships with a CoA showing actual concentration and pH — useful for method validation records." },
            ].map(item => (
              <div key={item.t}>
                <h3 className="font-semibold text-[#2B2A28] text-sm mb-1.5">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
