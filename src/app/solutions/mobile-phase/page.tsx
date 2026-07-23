import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
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

const SPECIFICATION_CHECKS = [
  ["Method composition", "Solvent ratio, buffer species, concentration, target pH and acceptable preparation tolerance."],
  ["Instrument compatibility", "HPLC or LC-MS detector, column chemistry, wetted materials and required blank performance."],
  ["Bag and connection", "5 L to 20 L format, port type, tubing compatibility and expected consumption after opening."],
  ["Release documents", "Lot-specific CoA, formulation traceability, filtration record and any method-specific qualification data."],
];

export default function MobilePhaseIndexPage() {
  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: "Mobile Phase" }]} />

      <EditorialPageHero
        eyebrow="Solutions"
        title="Mobile Phase, Pre-Made"
        description="Pre-filtered, pH-verified, nitrogen-sealed mobile phase in 5L-20L flex bags. Connect directly to your pump - no prep room, no batch-to-batch variability from manual preparation."
        image="/images/backgrounds/gradient-mobile-phase-optimization.jpg"
        imageAlt="Ready-to-use mobile phase preparation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-16 md:py-20">
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

        <section className="mt-12 border-y border-[#DCE7E2] py-9" aria-labelledby="mobile-phase-specification-title">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E918C]">Before requesting a formulation</p>
          <h2 id="mobile-phase-specification-title" className="mt-2 text-2xl font-bold text-[#203D38]">What to specify for a ready-to-use mobile phase</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#5C6E69]">
            A useful quotation starts with the analytical method rather than the bag size. Share the current SOP or the details below so composition, filtration, packaging and release tests can be aligned from the first qualification lot.
          </p>
          <div className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-2">
            {SPECIFICATION_CHECKS.map(([title, description]) => (
              <div key={title} className="border-l-2 border-[#8CC7BB] pl-5">
                <h3 className="font-bold text-[#1D403A]">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#63736F]">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact?type=quote" className="btn-fill">Request a mobile phase quote</Link>
            <Link href="/applications/mobile-phase-buffer-prep" className="btn-line">Mobile phase preparation guide</Link>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}
