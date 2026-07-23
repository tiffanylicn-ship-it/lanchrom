import type { Metadata } from "next";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Fermentation Analysis Mobile Phase | Organic Acid & Sugar HPLC | LANCHROM™",
  description: "Ready-to-use HPLC mobile phase for fermentation QC: lactic acid, citric acid, acetic acid, malic acid, succinic acid, glucose, fructose. 5L-20L flex bags, nitrogen-sealed.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/mobile-phase/fermentation-analysis" },
};

const ANALYTES = [
  { name: "Lactic Acid", use: "Dairy, lactic acid production, silage QC" },
  { name: "Citric Acid", use: "Citric acid fermentation, beverage QC" },
  { name: "Acetic Acid", use: "Vinegar, fermentation byproduct monitoring" },
  { name: "Malic Acid", use: "Wine, fruit fermentation" },
  { name: "Succinic Acid", use: "Bio-based chemical production" },
  { name: "Glucose", use: "Substrate consumption monitoring" },
  { name: "Fructose", use: "Sugar profile analysis" },
  { name: "Pyruvic Acid", use: "Metabolic intermediate tracking" },
];

const SECTORS = [
  { name: "Lactic Acid Production", detail: "Monitor substrate consumption and lactic acid titer through fermentation cycles." },
  { name: "Baijiu / Huangjiu (Chinese Liquor)", detail: "Organic acid profile is a core quality marker in traditional fermentation QC." },
  { name: "Wine & Grape Fermentation", detail: "Track malic acid, tartaric acid, and sugar conversion during fermentation." },
  { name: "Dairy Fermentation", detail: "Lactic and acetic acid monitoring in yogurt and cheese starter culture QC." },
  { name: "Bioethanol Production", detail: "Glucose, fructose, and ethanol yield tracking through the fermentation process." },
  { name: "Vinegar Production", detail: "Acetic acid concentration verification for product release." },
];

export default function FermentationAnalysisPage() {
  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[
        { label: "Solutions", href: "/solutions" },
        { label: "Mobile Phase", href: "/solutions/mobile-phase" },
        { label: "Fermentation Analysis" },
      ]} />

      <EditorialPageHero
        eyebrow="Featured Solution"
        title="Mobile phase, pre-made, for fermentation quality control"
        description="Our 0.005N sulfuric acid mobile phase comes pre-filtered, pH-verified, and nitrogen-sealed in 5L-20L flex bags - connect it directly to your HPLC pump and start running organic acid and sugar analysis without a prep room."
        image="/images/backgrounds/organic-acid-mobile-phase.png"
        imageAlt="Organic acid mobile phase for fermentation analysis"
      >
        <Link href="/contact?type=sample&product=organic-acid-mobile-phase" className="rounded-md bg-[#0A514C] px-5 py-3 text-sm font-bold text-white hover:bg-[#083E3B]">Get free sample</Link>
        <Link href="/contact?type=quote&product=organic-acid-mobile-phase" className="rounded-md border border-[#7EA99F] bg-white/70 px-5 py-3 text-sm font-bold text-[#0A514C]">Request quote</Link>
      </EditorialPageHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-16 md:py-20">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <div className="flex-1 min-w-0 space-y-14">

          {/* What it detects */}
          <section>
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-2">What it detects</h2>
            <p className="text-[#5C5A55] mb-8 max-w-2xl">Run on an ion-exclusion column (Aminex HPX-87H or equivalent) with RI or UV detection.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ANALYTES.map(a => (
                <div key={a.name} className="card-flat p-4">
                  <h3 className="font-bold text-[#2B2A28] text-sm mb-1">{a.name}</h3>
                  <p className="text-[#8A8782] text-xs">{a.use}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Specifications */}
          <section className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-6">Specifications</h2>
            <table className="w-full border-collapse max-w-2xl">
              <tbody>
                {[
                  ["H₂SO₄ Concentration", "0.005N (±2%)"],
                  ["pH", "2.2 ± 0.1"],
                  ["Water Quality", "TOC < 50 ppb, Resistivity > 18 MΩ·cm"],
                  ["Filtration", "0.2 µm membrane filtered"],
                  ["Packaging Atmosphere", "Nitrogen-filled"],
                  ["Available Sizes", "5L · 7L · 10L · 20L flex bag"],
                ].map(([param, val]) => (
                  <tr key={param} className="border-b border-[#EFEDE8]">
                    <td className="py-3 text-sm font-semibold text-[#2B2A28] w-1/2">{param}</td>
                    <td className="py-3 text-sm text-[#5C5A55]">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Industries */}
          <section>
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-8">Where it's used</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {SECTORS.map(s => (
                <div key={s.name} className="border border-[#EFEDE8] rounded-xl p-5">
                  <h3 className="font-bold text-[#2B2A28] text-sm mb-2">{s.name}</h3>
                  <p className="text-[#5C5A55] text-sm leading-relaxed">{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Column compatibility */}
          <section className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-6">Column compatibility</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { col: "Aminex HPX-87H", app: "Organic acids, sugars, alcohols — the most common ion-exclusion column for fermentation QC" },
                { col: "Bio-Rad Fermentation Monitoring", app: "Purpose-built for complete fermentation profile analysis" },
                { col: "Shodex SH-1011", app: "High-temperature operation for sugar analysis" },
                { col: "Rezex ROA-Organic Acid H+", app: "Weak organic acid HPLC analysis" },
              ].map(item => (
                <div key={item.col} className="bg-white border border-[#EFEDE8] rounded-lg p-4">
                  <p className="font-semibold text-[#2B2A28] text-sm">{item.col}</p>
                  <p className="text-[#8A8782] text-xs mt-1">{item.app}</p>
                </div>
              ))}
            </div>
            <p className="text-[#8A8782] text-sm mt-6">Using a different column? <Link href="/contact" className="text-[#3C6E71] font-semibold hover:underline">Tell us your method</Link> and we'll verify compatibility or formulate a custom variant.</p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-3">Skip the prep room</h2>
            <p className="text-[#5C5A55] mb-7 max-w-lg mx-auto">Request a sample and run it on your method this week.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/contact?type=sample&product=organic-acid-mobile-phase" className="btn-fill">Get free sample</Link>
              <Link href="/products/mobile-phase-bags" className="btn-line">See all mobile phase products</Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
