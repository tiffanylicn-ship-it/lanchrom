import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Food Safety Testing Mobile Phase | LANCHROM™",
  description: "Ready-to-use mobile phase for pesticide residue, veterinary drug, and food contaminant HPLC analysis.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/mobile-phase/food-safety" },
};

export default function FoodSafetyMobilePhasePage() {
  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[
        { label: "Solutions", href: "/solutions" },
        { label: "Mobile Phase", href: "/solutions/mobile-phase" },
        { label: "Food Safety Testing" },
      ]} />

      <EditorialPageHero
        eyebrow="Mobile Phase"
        title="Food Safety Testing Mobile Phase"
        description="Pre-made mobile phase systems for pesticide residue, veterinary drug residue, and mycotoxin analysis - paired with our SPE cleanup cartridges for a complete sample-to-injection workflow."
        image="/images/backgrounds/pesticide-residue-analysis.png"
        imageAlt="Food safety and pesticide residue analysis"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-16 md:py-20">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Application areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Pesticide Residue (Multi-Residue)", use: "Broad-spectrum LC-MS/MS screening on fruit and vegetable matrices" },
              { name: "Veterinary Drug Residue", use: "Tetracycline, sulfonamide, and quinolone class screening in animal products" },
              { name: "Mycotoxin Analysis", use: "Aflatoxin B1/G1 and related mycotoxin quantification" },
              { name: "Sweetener & Additive Analysis", use: "Saccharin, cyclamate, acesulfame-K quantification" },
            ].map(item => (
              <div key={item.name} className="card-flat p-5">
                <h3 className="font-semibold text-[#2B2A28] text-sm mb-1">{item.name}</h3>
                <p className="text-[#8A8782] text-xs">{item.use}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8 flex-wrap">
            <Link href="/contact?type=quote" className="btn-fill">Request a quote</Link>
            <Link href="/products/spe-products" className="btn-line">See SPE cleanup products</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
