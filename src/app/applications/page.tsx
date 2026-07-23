import type { Metadata } from "next";
import Link from "next/link";
import { APPLICATIONS, getApplicationNavItems } from "@/data/applications";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";

export const metadata: Metadata = {
  title: "Analytical Applications | HPLC, LC-MS & GC Solvents | LANCHROM",
  description: "Choose HPLC, LC-MS, GC, ICP-MS and spectroscopy solvents by analytical method, detection mode, blank requirement and sample-preparation workflow.",
  alternates: { canonical: "https://www.lanchrom.com/applications" },
};

const METHOD_SELECTION_GUIDE = [
  ["HPLC and UPLC analysis", "Prioritize UV cutoff, gradient baseline, water and particulate filtration. UPLC methods also require tighter particle control."],
  ["LC-MS and bioanalysis", "Review solvent-background screening, trace metals, adduct risk and lot consistency before low-level quantitation."],
  ["GC and extraction workflows", "Focus on residue after evaporation, interfering peaks and compatibility with liquid-liquid extraction or headspace methods."],
  ["ICP-MS and elemental analysis", "Use trace-metal grade acids, certified standards and containers qualified for ppb-to-ppt work."],
];

export default function ApplicationsIndexPage() {
  const applicationNav = getApplicationNavItems();

  return (
    <div className="bg-white">
      <EditorialPageHero
        eyebrow="Applications"
        title="Solvents By Analytical Method"
        description="Find the right grade by what you are measuring - from routine HPLC method development to trace-level LC-MS bioanalysis and multi-residue pesticide screening."
        image="/images/backgrounds/application-back.jpg"
        imageAlt="LANCHROM analytical method applications"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <SectionSidebar title="Applications" baseHref="/applications" items={applicationNav} accent="#3C6E71" />
        <main className="flex-1 min-w-0 py-16 md:py-20">
          <section className="mb-12 border-b border-[#DCE7E2] pb-10" aria-labelledby="method-selection-title">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E918C]">Method-first selection</p>
            <h2 id="method-selection-title" className="mt-2 text-2xl font-bold text-[#203D38]">Choose solvent quality by detector and blank requirement</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#5C6E69]">
              A grade name is useful only when it maps to the analytical risk. Start with the detector, expected concentration, sample preparation and documentation requirement, then qualify the selected lot in the method.
            </p>
            <div className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-2">
              {METHOD_SELECTION_GUIDE.map(([title, description]) => (
                <div key={title} className="border-l-2 border-[#8CC7BB] pl-5">
                  <h3 className="font-bold text-[#1D403A]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#63736F]">{description}</p>
                </div>
              ))}
            </div>
            <Link href="/resources/blog/lcms-solvent-background-comparison" className="mt-7 inline-block border-b border-[#0A514C] pb-1 text-sm font-bold text-[#0A514C]">
              See the LC-MS solvent background comparison
            </Link>
          </section>

          <h2 className="mb-5 text-xl font-bold text-[#203D38]">Browse all analytical applications</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.values(APPLICATIONS).map(app => (
              <Link key={app.slug} href={`/applications/${app.slug}`} className="group flex items-center justify-between py-5 px-5 border border-[#EFEDE8] rounded-xl hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all">
                <div>
                  <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors">{app.h1}</h3>
                  <p className="text-[#8A8782] text-sm mt-0.5">{app.tagline}</p>
                </div>
                <span className="text-[#C9DBD9] group-hover:text-[#3C6E71] group-hover:translate-x-1 transition-all text-lg flex-shrink-0 ml-3">→</span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
