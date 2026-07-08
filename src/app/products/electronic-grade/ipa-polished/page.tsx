import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ultra-Polished Electronic Grade IPA | ≤5 PPT Metal Ions | LANCHROM™",
  description: "Electronic grade isopropanol with ultra-low UV absorbance, ≤50ppm water content, and trace metal polishing to ≤5 PPT. CFD-engineered distillation for batch-to-batch consistency. For semiconductor wafer cleaning.",
  alternates: { canonical: "https://www.lanchrom.com/products/electronic-grade/ipa-polished" },
};

const SPECS = [
  { param: "Purity (GC)", value: "≥ 99.999999%", note: "8-nines purity" },
  { param: "Water Content (KF)", value: "≤ 50 ppm" },
  { param: "UV Absorbance @ 201nm", value: "≤ 0.42 AU" },
  { param: "UV Absorbance @ 230nm", value: "≤ 0.013 AU" },
  { param: "UV Absorbance @ 250nm", value: "≤ 0.004 AU" },
  { param: "Formaldehyde (impurity)", value: "≤ 0.00006%" },
  { param: "Trace Metal Ions (polished)", value: "≤ 5 PPT" },
  { param: "Acetone Content", value: "Not detected" },
];

const BATCH_DATA = [
  { lot: "Lot A", purity: "99.99994%", formaldehyde: "0.00006%" },
  { lot: "Lot B", purity: "99.99996%", formaldehyde: "0.00004%" },
  { lot: "Lot C", purity: "99.99995%", formaldehyde: "0.00005%" },
];

export default function PolishedIPAPage() {
  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/products" className="hover:text-[#3C6E71]">Products</Link> ›{" "}
          <Link href="/products/electronic-grade" className="hover:text-[#3C6E71]">Electronic Grade</Link> ›{" "}
          <span className="text-[#5C5A55]">Ultra-Polished IPA</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-[#E8F0EF] text-[#3C6E71] text-xs font-bold px-3 py-1 rounded-full mb-4">
            Semiconductor Wafer Cleaning Grade
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2B2A28] mb-3 tracking-tight">
            Ultra-Polished Electronic Grade Isopropanol
          </h1>
          <p className="text-[#5C5A55] text-lg max-w-3xl leading-relaxed">
            Trace-metal polished to ≤5 PPT. UV-clean to 201nm. CFD-engineered distillation eliminates the impurities that cause wafer defects — metal ion contamination, dissolved gases, and heat-sensitive residues.
          </p>
        </div>
      </section>

      {/* Why wafer cleaning demands more */}
      <section className="py-14 bg-[#FAFBFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#2B2A28] mb-2">Why Standard IPA Fails Wafer-Cleaning Specs</h2>
          <p className="text-[#5C5A55] mb-8 max-w-3xl">Semiconductor wafers are cleaned before photolithography, after exposure, before high-temperature diffusion, and after wet etching. Each step demands different impurity tolerances:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { issue: "Trace Metal Ions", impact: "Alter transistor threshold voltage; sodium and iron ions are especially damaging at sub-ppb levels." },
              { issue: "Dissolved Oxygen / CO₂", impact: "Forms a native oxide layer on the silicon surface, degrading device performance and yield." },
              { issue: "Silicon / Boron Residue", impact: "Causes wafer defects and unwanted doping if not fully removed from solvent stream." },
              { issue: "Particulates & Microorganisms", impact: "Sub-micron particles cause surface defects; organic matter can create p-n junction leakage." },
            ].map(item => (
              <div key={item.issue} className="bg-white border border-[#E6E3DD] rounded-xl p-5">
                <h3 className="font-bold text-[#2B2A28] text-sm mb-2">{item.issue}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-extrabold text-[#2B2A28] mb-6">Technical Specifications</h2>
              <table className="w-full border-collapse">
                <tbody>
                  {SPECS.map((s, i) => (
                    <tr key={s.param} className={i % 2 === 0 ? "bg-[#FAFBFC]" : ""}>
                      <td className="py-3 px-4 text-sm font-semibold text-[#2B2A28] border-b border-[#EFEDE8] w-1/2">{s.param}</td>
                      <td className="py-3 px-4 text-sm text-[#5C5A55] border-b border-[#EFEDE8]">
                        {s.value} {s.note && <span className="text-[#8A8782] text-xs">({s.note})</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <h3 className="text-lg font-bold text-[#2B2A28] mt-10 mb-4">3-Batch Consistency Study</h3>
              <p className="text-[#5C5A55] text-sm mb-4">Independent GC analysis across three production lots demonstrates batch-to-batch reproducibility — critical for semiconductor fabs that require qualified, stable supply.</p>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#2B2A28]">
                    <th className="py-2.5 px-4 text-xs font-bold text-white text-left">Batch</th>
                    <th className="py-2.5 px-4 text-xs font-bold text-white text-left">GC Purity</th>
                    <th className="py-2.5 px-4 text-xs font-bold text-white text-left">Formaldehyde</th>
                  </tr>
                </thead>
                <tbody>
                  {BATCH_DATA.map((b, i) => (
                    <tr key={b.lot} className={i % 2 === 0 ? "bg-[#FAFBFC]" : ""}>
                      <td className="py-2.5 px-4 text-sm font-semibold text-[#2B2A28] border-b border-[#EFEDE8]">{b.lot}</td>
                      <td className="py-2.5 px-4 text-sm text-[#3C6E71] font-bold border-b border-[#EFEDE8]">{b.purity}</td>
                      <td className="py-2.5 px-4 text-sm text-[#5C5A55] border-b border-[#EFEDE8]">{b.formaldehyde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <div className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-xl p-6 sticky top-24">
                <h3 className="font-bold text-[#2B2A28] mb-4">Key Performance Benefits</h3>
                <ul className="space-y-3 text-sm text-[#5C5A55]">
                  <li className="flex gap-2"><span className="text-[#3C6E71] font-bold">✓</span> Extends precision filter cartridge lifespan by 33%+ — fewer impurities means less filter clogging</li>
                  <li className="flex gap-2"><span className="text-[#3C6E71] font-bold">✓</span> Reduces static buildup from rapid pipeline transfer, preventing product quality drift</li>
                  <li className="flex gap-2"><span className="text-[#3C6E71] font-bold">✓</span> Ultra-low temperature crystallization process prevents heat-sensitive impurity formation</li>
                  <li className="flex gap-2"><span className="text-[#3C6E71] font-bold">✓</span> No detectable acetone — eliminates a common industrial-IPA byproduct</li>
                </ul>
                <Link href="/contact?type=sample&product=electronic-ipa-polished" className="block text-center bg-[#3C6E71] text-white font-bold text-sm py-3 rounded-lg hover:bg-[#2C5154] transition-colors mt-6">
                  Get Free Sample
                </Link>
                <Link href="/contact?type=quote&product=electronic-ipa-polished" className="block text-center border border-[#D9D6CF] text-[#5C5A55] font-semibold text-sm py-2.5 rounded-lg hover:bg-white transition-colors mt-2">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="py-14 bg-[#FAFBFC] border-y border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#2B2A28] mb-2">CFD-Verified Distillation Process</h2>
          <p className="text-[#5C5A55] mb-8 max-w-3xl">Every distillation tray is modeled with computational fluid dynamics before installation — verifying velocity distribution and eliminating inactive zones that would otherwise compromise purity.</p>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-[#E6E3DD] p-6">
              <h3 className="font-bold text-[#2B2A28] text-sm mb-3">What gets modeled</h3>
              <ul className="space-y-2 text-sm text-[#5C5A55]">
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Velocity field across multiple tray cross-sections</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Liquid distribution uniformity at the inlet nozzle plane</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Vertical velocity components at downstream comparison points</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-[#E6E3DD] p-6">
              <h3 className="font-bold text-[#2B2A28] text-sm mb-3">Why it matters</h3>
              <p className="text-sm text-[#5C5A55] leading-relaxed">Confirming uniform flow distribution before hardware is built is the difference between a purity claim that holds on a good batch and one that holds across every batch. This is the basis for the 99.99995%+ consistency we report.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#2B2A28] mb-8">Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Pre-lithography wafer cleaning and rinsing",
              "Post-exposure development residue removal",
              "Pre-diffusion high-temperature process cleaning",
              "Post wet-etch surface cleaning",
              "Advanced packaging flux and bump cleaning",
              "Precision instrument and chamber cleaning",
            ].map(app => (
              <div key={app} className="flex items-start gap-3 p-4 border border-[#EFEDE8] rounded-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3C6E71] mt-2 flex-shrink-0" />
                <p className="text-sm text-[#5C5A55]">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#2B2A28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Qualify our electronic grade IPA for your fab</h2>
          <p className="text-[#8A8782] mb-6 max-w-xl mx-auto">Full CoA with every batch. Custom packaging from 1L to 200L. Nitrogen-blanketed containers for moisture-sensitive transport.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact?type=sample&product=electronic-ipa-polished" className="bg-white text-[#2B2A28] font-bold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors">Get Free Sample</Link>
            <Link href="/oem/quote-calculator" className="border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">OEM Quote Calculator</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
