import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About LANCHROM | Solvent Manufacturing",
  description: "LANCHROM — 15+ years manufacturing electronic and pharmaceutical grade solvents. 20+ production lines, Sulzer internals, 3ppt metal purity, sub-3nm particle control.",
  alternates: { canonical: "https://www.lanchrom.com/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image
          src="/images/hero/lcms-solvent-factory-manufacturer.png"
          alt="LANCHROM LCMS solvent factory manufacturer"
          fill
          sizes="100vw"
          className="object-contain object-right p-0 md:p-2"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">About LANCHROM</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">
            15+ Years of Precision Solvent Manufacturing
          </h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            LANCHROM is a specialist manufacturer of electronic-grade and pharmaceutical-grade
            chemical solvents, with over 15 years of production experience and a product catalog
            spanning 209 grades across electronic materials and pharmaceutical science.
          </p>
        </div>
      </section>

      {/* Two core business domains */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div className="p-7 rounded-2xl border border-[#E6E3DD] bg-[#FBFAF8]">
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-[#3C6E71] mb-3">Electronic Materials</p>
            <h2 className="text-xl font-bold text-[#2B2A28] mb-3">Electronic-Grade Solvents</h2>
            <p className="text-[#5C5A55] text-sm leading-relaxed mb-4">
              Over a dozen electronic-grade solvents including IPA, PGME, PGMEA, and more — serving
              photoresist processing, chip manufacturing, stripping solution production, and precision
              cleaning applications across the semiconductor supply chain.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["IPA", "PGME", "PGMEA", "NMP", "DMC", "Acetone", "Ethanol"].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 bg-[#EBF2F2] text-[#3C6E71] rounded font-medium">{s}</span>
              ))}
            </div>
          </div>
          <div className="p-7 rounded-2xl border border-[#E6E3DD] bg-[#FBFAF8]">
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-[#3C6E71] mb-3">Pharmaceutical Science</p>
            <h2 className="text-xl font-bold text-[#2B2A28] mb-3">HPLC, LC-MS & Life Science Reagents</h2>
            <p className="text-[#5C5A55] text-sm leading-relaxed mb-4">
              HPLC reagents, LC-MS reagents, and life science products meeting the demands of
              high-performance liquid chromatography, DNA synthesis, and broader life science
              applications — with purity controlled at the ppm and ppt level.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["HPLC", "LC-MS", "GC", "Pharma USP/EP", "Karl Fischer", "Standards"].map(s => (
                <span key={s} className="text-xs px-2 py-0.5 bg-[#EBF2F2] text-[#3C6E71] rounded font-medium">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production base */}
      <section className="py-14 relative overflow-hidden bg-[#F5F8FC] border-y border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#0E918C] mb-2">2026 Production Base — Zhejiang, China</p>
          <h2 className="text-2xl font-bold text-[#0A1628] mb-6">World-Class Equipment, Proprietary Process</h2>
          <div className="grid md:grid-cols-2 gap-10 mb-8">
            <div>
              <p className="text-[#475569] leading-relaxed mb-5">
                The new Zhejiang production base features over 20 production lines — 10 large-scale lines
                plus specialty ultra-high-purity lines with annual capacity ranging from 100,000 to 500,000
                liters depending on product grade.
              </p>
              <p className="text-[#475569] leading-relaxed">
                All equipment is sourced from top-tier international suppliers: column internals and
                structured packing from Sulzer (Switzerland), fluid transfer equipment from Morimoto
                (Japan), and Nikkiso pumps — the same pump supplier used in ASML lithography machines.
                The entire production process is managed through a fully automated control system.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { t: "Low-Temperature Crystallization & Evaporation", d: "Advanced process technology removes sub-3nm insoluble particles — fewer than 7 per liter — a capability developed through long-term proprietary R&D." },
                { t: "3 PPT Metal Ion Purity", d: "Metal ion content controlled to 3 parts per trillion (3/100,000,000,000) — exceeding the requirements of the most demanding semiconductor and pharmaceutical applications." },
                { t: "Custom Formulation Capability", d: "Based on 15+ years of accumulated R&D, we can formulate solvents with specific impurity profiles tailored to individual customer process requirements." },
              ].map(item => (
                <div key={item.t} className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6DBFC2] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#0A1628] text-sm">{item.t}</h4>
                    <p className="text-[#64748B] text-xs mt-0.5">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { n: "20+", d: "Production lines" },
              { n: "209", d: "Product grades" },
              { n: "3 PPT", d: "Metal ion purity" },
              { n: "≤ 7/L", d: "Sub-3nm particles" },
            ].map(item => (
              <div key={item.n} className="bg-white rounded-xl border border-[#DDE7EE] p-4 text-center shadow-sm">
                <div className="text-xl font-bold text-[#0E918C]">{item.n}</div>
                <p className="text-[#64748B] text-xs mt-1">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-6">How we work with you</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "01", t: "Sample first", d: "Qualify the product against your method before committing to volume" },
              { n: "02", t: "Full documentation", d: "CoA, SDS (GHS), TDS, Certificate of Origin with every order" },
              { n: "03", t: "Private label", d: "Your brand on our product from 50 units — label language of your choice" },
              { n: "04", t: "Fast response", d: "Quotes within 1 business day, OEM configurations within 2" },
            ].map(item => (
              <div key={item.n} className="p-5 rounded-xl border border-[#E6E3DD]">
                <span className="w-7 h-7 rounded-lg bg-[#3C6E71] text-white text-[10px] font-bold flex items-center justify-center mb-3">{item.n}</span>
                <h3 className="font-bold text-[#2B2A28] text-sm mb-1.5">{item.t}</h3>
                <p className="text-[#8A8782] text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F4F0] border-t border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-3">See the engineering behind it</h2>
          <p className="text-[#5C5A55] mb-6">Take a closer look at our manufacturing process, QC lab, and filling facility.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/manufacturing" className="btn-fill">Explore Manufacturing</Link>
            <Link href="/contact?type=sample" className="btn-line">Request a Sample</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
