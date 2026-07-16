import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Custom Reagent Kits | LANCHROM™",
  description: "Custom-assembled reagent kits for HPLC method development, cell cryopreservation, GMP disinfection, and Karl Fischer water determination. Minimum 10 kits.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/reagent-kits" },
};

const KITS = [
  {
    name: "HPLC Method Development Kit",
    contents: "Acetonitrile (HPLC) · Methanol (HPLC) · IPA (HPLC) · 0.1% Formic Acid · Water (HPLC)",
    use: "Everything needed to start reversed-phase method development without ordering five separate products.",
  },
  {
    name: "Cell Cryopreservation Kit",
    contents: "DMSO (Cell Therapy Grade, 100mL) · Cryovial tubes · Freezing protocol reference sheet",
    use: "Standard 10% DMSO cryoprotection setup for CAR-T, stem cell, and PBMC banking workflows.",
  },
  {
    name: "GMP Disinfection Kit",
    contents: "IPA 70% (USP) · Ethanol 75% (USP) · Spray bottles · Cleanroom wipes",
    use: "Ready-to-deploy cleanroom and equipment disinfection set for GMP manufacturing areas.",
  },
  {
    name: "Karl Fischer Water Determination Kit",
    contents: "Two-component KF reagent · Anhydrous methanol · Water standard (1.0 mg/g)",
    use: "Complete titration setup for solvent and raw material water content QC.",
  },
  {
    name: "TLC Analysis Starter Kit",
    contents: "Silica gel TLC plates (25) · 3 common developing solvents · Iodine chamber",
    use: "For labs running qualitative botanical or reaction-monitoring TLC without a full solvent inventory.",
  },
  {
    name: "Fermentation QC Starter Kit",
    contents: "0.005N H₂SO₄ mobile phase (5L) · pH buffer standards · Sample vials",
    use: "Drop-in starter set for labs beginning organic acid HPLC monitoring on a new fermentation line.",
  },
];

export default function ReagentKitsPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/solutions" className="hover:text-[#3C6E71]">Solutions</Link> {" › "}
          <span className="text-[#5C5A55]">Reagent Kits</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Solutions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Custom Reagent Kits</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Rather than ordering five products separately for one workflow, we assemble them into a single
            kit — with one CoA set, one shipment, and configuration to your exact components and concentrations.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
          <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Common kit configurations</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {KITS.map(kit => (
              <div key={kit.name} className="card-flat p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{kit.name}</h3>
                <p className="text-[#8A8782] text-xs mb-3 leading-relaxed">{kit.contents}</p>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{kit.use}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-8 mt-12">
            <h2 className="text-xl font-bold text-[#2B2A28] mb-3">Building your own kit</h2>
            <p className="text-[#5C5A55] mb-6 max-w-2xl">
              None of these match your exact workflow? Tell us your method and target components —
              minimum order is 10 kits, and first-time kit design takes 2–3 weeks.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact?type=quote" className="btn-fill">Request a custom kit quote</Link>
              <Link href="/oem/quote-calculator" className="btn-line">Private label your kit</Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
