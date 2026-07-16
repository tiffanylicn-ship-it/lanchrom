import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Pharmaceutical QC Mobile Phase | LANCHROM™",
  description: "USP/EP-compliant ready-to-use mobile phase for drug substance and product release HPLC testing. Nitrogen-sealed flex bags.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/mobile-phase/pharma-qc" },
};

export default function PharmaQCMobilePhasePage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/solutions/mobile-phase" className="hover:text-[#3C6E71]">Mobile Phase</Link> {" › "}
          <span className="text-[#5C5A55]">Pharmaceutical QC</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Mobile Phase</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Pharmaceutical QC Mobile Phase</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            USP/EP-compliant mobile phase systems for drug substance and product release testing, pre-prepared
            to eliminate the prep-room variability that complicates method validation records.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-14">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Common configurations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Acetonitrile / Water (50:50)", use: "USP general method mobile phase" },
              { name: "Methanol / Water (70:30)", use: "EP general method mobile phase" },
              { name: "Acetonitrile / 0.1% Phosphoric Acid (50:50)", use: "Cardiovascular API analysis (e.g. amlodipine class)" },
              { name: "Acetonitrile / 10mM KH₂PO₄ (40:60)", use: "Proton-pump inhibitor API analysis" },
              { name: "Methanol / 0.05M Phosphate Buffer", use: "Macrolide antibiotic analysis" },
            ].map(item => (
              <div key={item.name} className="card-flat p-5">
                <h3 className="font-semibold text-[#2B2A28] text-sm mb-1">{item.name}</h3>
                <p className="text-[#8A8782] text-xs">{item.use}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5C5A55] text-sm mt-8">Need a configuration not listed here? Tell us your monograph or in-house method and we'll formulate it.</p>
          <div className="flex gap-3 mt-6 flex-wrap">
            <Link href="/contact?type=quote" className="btn-fill">Request a quote</Link>
            <Link href="/products/mobile-phase-bags" className="btn-line">See all mobile phase products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
