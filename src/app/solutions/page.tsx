import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionSidebar from "@/components/layout/SectionSidebar";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Solutions | Fermentation Analysis, Reagent Kits, Custom Packaging | LANCHROM",
  description: "Mobile phase solutions, custom reagent kits, custom packaging, and OEM services for analytical laboratories.",
  alternates: { canonical: "https://www.lanchrom.com/solutions" },
};


const solutionCards = [
  { title: "Fermentation Analysis", description: "Ready-to-use mobile phase for organic acid and sugar QC.", href: "/solutions/mobile-phase/fermentation-analysis" },
  { title: "Mobile Phase Solutions", description: "Pre-made, nitrogen-sealed flex bags for pharma and food safety QC.", href: "/solutions/mobile-phase" },
  { title: "Reagent Kits", description: "Custom-assembled kits for specific workflows.", href: "/solutions/reagent-kits" },
  { title: "Custom Packaging", description: "Private label, small-pack, and OEM bottling.", href: "/solutions/custom-packaging" },
];

const solutionDetails = [
  {
    id: "beyond-catalog",
    title: "Beyond the Catalog",
    description: "Not every workflow fits a standard catalog SKU. LANCHROM builds configurable reagent and packaging solutions around your SOPs, instruments, and batch sizes, so you get exactly what you need without compromise.",
    scenarios: ["Method transfer between multiple sites or instruments", "Non-standard concentrations or specialized solvent blends", "QC labs with unique SOP or regulatory requirements", "Projects that sit between catalog and fully custom development"],
    sellingPoints: ["Tailored formulations matched to your method", "Flexible batch sizes from pilot to production", "Consistent lot-to-lot quality and full traceability", "Technical support from method development through delivery"],
  },
  {
    id: "fermentation",
    title: "Fermentation Analysis",
    description: "Ready-to-use mobile phases and reagents for organic acid, sugar, and metabolite monitoring in fermentation and cell-culture processes.",
    scenarios: ["Biopharma fermentation process monitoring and QC", "Food and beverage yeast, sugar, and organic acid analysis", "Cell-culture metabolite profiling", "Organic acid quantification in biological samples"],
    sellingPoints: ["Pre-adjusted pH and ionic strength for reproducible runs", "Validated compatibility with common HPLC columns", "Nitrogen-sealed packaging preserves stability", "Reduces preparation time and batch-to-batch variability"],
  },
  {
    id: "mobile-phase",
    title: "Mobile Phase Solutions",
    description: "Pre-made, nitrogen-blanketed mobile phases in flexible packaging designed for high-throughput HPLC and LC-MS workflows.",
    scenarios: ["Pharmaceutical stability and release testing", "Food safety residue and contaminant screening", "Environmental pollutant analysis by LC-MS", "Routine HPLC/LC-MS batch release and verification"],
    sellingPoints: ["High-purity solvents, salts, and buffers", "Nitrogen-sealed flex bags minimize oxidation", "Ready-to-connect formats reduce handling steps", "Lot traceability with CoA and documentation support"],
  },
  {
    id: "reagent-kits",
    title: "Reagent Kits",
    description: "Custom-assembled kits combine the exact reagents, solvents, and consumables your workflow needs in one package.",
    scenarios: ["Multi-step sample preparation workflows", "Standardized assay kits across sites", "Contract labs running client-specific methods", "Training and onboarding sample sets"],
    sellingPoints: ["All components matched to your specific method", "Reduces procurement complexity", "Single-lot coordination where required", "Private-label and custom documentation options"],
  },
  {
    id: "custom-packaging",
    title: "Custom Packaging",
    description: "Private-label, small-pack, and OEM bottling services that protect product integrity and reinforce your brand.",
    scenarios: ["OEM and white-label reagent product lines", "Small-batch specialty reagents", "Field kits and portable formats", "Distributor-specific packaging requirements"],
    sellingPoints: ["Inert gas sealing for sensitive reagents", "Amber, fluorinated, and compatible bottle options", "Custom labels and regulatory text", "Scalable from pilot volumes to full production"],
  },
];

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image src="/images/backgrounds/product-solutions.png" alt="LANCHROM product solutions" fill sizes="100vw" className="object-contain object-right p-0 md:p-2" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">Solutions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Beyond the Catalog</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">Ready-to-use mobile phase, custom reagent kits, and packaging configured around how your lab actually works.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <main className="flex-1 min-w-0 py-12">
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {solutionCards.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-xl border border-[#EFEDE8] bg-white p-5 hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all">
                <h2 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] mb-2">{item.title}</h2>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>

          <div className="space-y-12">
            {solutionDetails.map((detail) => (
              <section key={detail.id} id={detail.id} className="scroll-mt-24 border-t border-[#EFEDE8] pt-9">
                <h2 className="text-xl md:text-2xl font-bold text-[#2B2A28] mb-3">{detail.title}</h2>
                <p className="text-[#5C5A55] leading-relaxed mb-6 max-w-3xl">{detail.description}</p>
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="rounded-lg bg-[#F7FAFC] border border-[#E2E8F0] p-5">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#0E918C] mb-4">Applicable Scenarios</h3>
                    <ul className="space-y-2.5">
                      {detail.scenarios.map((scenario) => (
                        <li key={scenario} className="flex items-start gap-3 text-sm text-[#5C5A55]"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0E918C] flex-shrink-0" />{scenario}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-[#FBF0EB] border border-[#ECCFC1] p-5">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-[#B5654A] mb-4">Key Selling Points</h3>
                    <ul className="space-y-2.5">
                      {detail.sellingPoints.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-[#5C5A55]"><span className="text-[#B5654A] font-bold">✓</span>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
