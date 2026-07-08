import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/home/RevealOnScroll";

export const metadata: Metadata = {
  title: "LANCHROM™ | HPLC, LC-MS & OEM Solvents Manufacturer",
  description: "Factory-direct HPLC, LC-MS, spectroscopy and OEM solvents. Acetonitrile, Methanol, IPA, THF and custom mobile phases for laboratory and industrial use.",
  alternates: { canonical: "https://www.lanchrom.com" },
};

const M = "'Montserrat', sans-serif";

export default function HomePage() {
  return (
    <>
      {/* ═══ SCREEN 1 — HERO (fix4: brighter title) ═══ */}
      <RevealOnScroll>
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/gmp-cleanroom.jpg" alt="LANCHROM GMP clean room" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <p className="text-[#00B7C7] text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: M }}>HPLC · LC-MS · GC · Electronic Grade Solvents</p>
          <h1 className="text-3xl md:text-5xl font-bold text-[#F8FAFC] leading-tight mb-6 max-w-2xl" style={{ fontFamily: M }}>
            High-Purity Solvents for Analytical Labs &amp; Electronic Manufacturing
          </h1>
          <p className="text-[#DDEAF7] text-lg mb-8 max-w-xl">
            Factory-direct chromatography solvents, OEM mobile phase solutions, and selected electronic-grade chemicals with reliable documentation and global export support.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10 text-sm">
            {["HPLC & LC-MS Grades", "UV Cutoff Qualified", "Low Residue ≤1 ppm",
              "CoA / SDS Available", "OEM & Private Label", "Global Regulatory Support"
            ].map(item => (
              <span key={item} className="text-white flex items-center gap-2"><span className="text-[#00B7C7]">✓</span> {item}</span>
            ))}
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link href="/contact?type=sample" className="bg-[#0E918C] text-white font-bold px-7 py-3 rounded-lg hover:bg-[#0A7A76] transition-colors text-sm" style={{ fontFamily: M }}>Get Free Sample</Link>
            <Link href="/products" className="border border-white/40 text-white font-bold px-7 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm" style={{ fontFamily: M }}>Browse Catalog</Link>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 2 — PRODUCT LINES (fix3: categories + key products, no icons) ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.18]">
          <Image src="/images/hero/WEBPIC2.jpg" alt="LANCHROM analytical solvent product chemistry background" fill className="object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FBFF]/95 via-[#F8FBFF]/88 to-[#F8FBFF]/70" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: M }}>Core Product Portfolio</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628]" style={{ fontFamily: M }}>Find the Right Solvent Faster</h2>
              <p className="text-[#475569] text-sm mt-3 max-w-2xl">Choose by product line or jump directly to high-demand solvents for analytical labs, OEM brands and process customers.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/contact?type=quote" className="bg-[#003D91] text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-[#002D6B] transition-colors">Request Quote</Link>
              <Link href="/downloads" className="border border-[#CBD5E1] text-[#003D91] text-xs font-bold px-4 py-2.5 rounded-lg hover:border-[#00B7C7] transition-colors">Download SDS / CoA</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {[
              { name: "Acetonitrile", href: "/products/hplc-solvents/acetonitrile", tag: "HPLC / LC-MS" },
              { name: "Methanol", href: "/products/hplc-solvents/methanol", tag: "HPLC / LC-MS" },
              { name: "IPA", href: "/products/hplc-solvents/isopropanol-ipa", tag: "HPLC / Electronic" },
              { name: "Ethanol", href: "/products/hplc-solvents/hplc-grade-ethanol", tag: "HPLC / Biology" },
              { name: "THF", href: "/products/hplc-solvents/hplc-grade-thf-tetrahydrofuran", tag: "HPLC / Process" },
              { name: "DCM", href: "/products/hplc-solvents/hplc-grade-dichloromethane-dcm", tag: "Extraction" },
              { name: "PGMEA", href: "/products/electronic-grade", tag: "Electronic" },
              { name: "NMP", href: "/products/process-solvents", tag: "Battery / Process" },
            ].map(p => (
              <Link key={p.name} href={p.href} className="group bg-white border border-[#E2E8F0] rounded-xl p-4 hover:border-[#00B7C7] hover:shadow-md transition-all">
                <p className="text-[#0A1628] font-bold text-sm group-hover:text-[#003D91]" style={{ fontFamily: M }}>{p.name}</p>
                <p className="text-[#0E918C] text-[10px] font-semibold mt-1">{p.tag}</p>
              </Link>
            ))}
          </div>
          <div className="space-y-8">
            {[
              { title: "HPLC Solvents", href: "/products/hplc-solvents", products: [
                { name: "Acetonitrile", grade: "Gradient Grade", cas: "75-05-8" },
                { name: "Methanol", grade: "HPLC Grade", cas: "67-56-1" },
                { name: "Ethanol", grade: "Gradient Grade", cas: "64-17-5" },
                { name: "IPA", grade: "HPLC Grade", cas: "67-63-0" },
                { name: "n-Hexane", grade: "NP-HPLC", cas: "110-54-3" },
                { name: "THF", grade: "BHT Stabilized", cas: "109-99-9" },
              ]},
              { title: "LC-MS Solvents", href: "/products/lcms-solvents", products: [
                { name: "Acetonitrile", grade: "LC-MS Ultra", cas: "75-05-8" },
                { name: "Methanol", grade: "LC-MS Ultra", cas: "67-56-1" },
                { name: "IPA", grade: "LC-MS Grade", cas: "67-63-0" },
                { name: "Water (Ultrapure)", grade: "TOC<5ppb", cas: "7732-18-5" },
                { name: "0.1% Formic Acid", grade: "LC-MS Ready", cas: "64-18-6" },
              ]},
              { title: "Spectroscopy & GC Solvents", href: "/products/spectroscopic-solvents", products: [
                { name: "Acetonitrile", grade: "UV 190nm", cas: "75-05-8" },
                { name: "Methanol", grade: "UV 205nm", cas: "67-56-1" },
                { name: "n-Hexane", grade: "GC Residue", cas: "110-54-3" },
                { name: "Toluene", grade: "GC Grade", cas: "108-88-3" },
                { name: "Chloroform", grade: "Spectroscopic", cas: "67-66-3" },
              ]},
              { title: "Electronic Grade Solvents", href: "/products/electronic-grade", products: [
                { name: "IPA", grade: "SEMI Grade", cas: "67-63-0" },
                { name: "PGME", grade: "Electronic", cas: "107-98-2" },
                { name: "PGMEA", grade: "Electronic", cas: "108-65-6" },
                { name: "Acetone", grade: "Electronic", cas: "67-64-1" },
              ]},
              { title: "OEM & Mobile Phase", href: "/oem", products: [
                { name: "0.005N H₂SO₄ Bag", grade: "Fermentation QC", cas: "" },
                { name: "0.1% Formic Acid Bag", grade: "LC-MS Ready", cas: "" },
                { name: "Private Label Service", grade: "MOQ 50 units", cas: "" },
                { name: "Custom Packaging", grade: "500mL–200L", cas: "" },
              ]},
            ].map(cat => (
              <div key={cat.title}>
                <div className="flex items-center justify-between mb-3">
                  <Link href={cat.href} className="group">
                    <h3 className="text-lg font-bold text-[#003D91] group-hover:text-[#0E918C] transition-colors" style={{ fontFamily: M }}>{cat.title}</h3>
                  </Link>
                  <Link href={cat.href} className="text-[#0E918C] text-xs font-semibold hover:underline hidden sm:block">View all →</Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {cat.products.map(p => (
                    <div key={p.name} className="bg-white border border-[#E2E8F0] rounded-lg p-3 hover:border-[#00B7C7] transition-colors">
                      <p className="text-[#0A1628] font-semibold text-xs">{p.name}</p>
                      <p className="text-[#00B7C7] text-[10px] font-medium">{p.grade}</p>
                      {p.cas && <p className="text-[#94A3B8] text-[9px] font-mono mt-0.5">{p.cas}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 3 — QUALITY METRICS ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ fontFamily: M }}>Quality Advantage</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-12 text-center" style={{ fontFamily: M }}>Ultra High Purity Standards</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "99.998%", label: "Ultra High Purity", sub: "GC assay verified" },
              { metric: "≤0.004%", label: "Ultra Low Water", sub: "Karl Fischer tested" },
              { metric: "≤0.02 ppb", label: "Ultra Low Metal", sub: "ICP-MS verified" },
              { metric: "≤1 pcs/ml", label: "Ultra Low Particle", sub: "@ 0.5μm detection" },
            ].map(item => (
              <div key={item.label} className="text-center p-6 rounded-xl bg-[#F5F8FC] border border-[#E2E8F0]">
                <div className="text-3xl md:text-4xl font-bold text-[#003D91] mb-2" style={{ fontFamily: M }}>{item.metric}</div>
                <div className="text-[#0A1628] font-semibold text-sm mb-1">{item.label}</div>
                <div className="text-[#64748B] text-xs">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ FACILITY SHOWCASE — 3 real photos ═══ */}
      <RevealOnScroll>
      <section className="bg-[#0A1628] py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image src="/images/hplc-lab.jpg" alt="LANCHROM HPLC analytical laboratory" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">Analytical Laboratory</p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image src="/images/factory-panorama.jpg" alt="LANCHROM production facility and fleet" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">Production Facility</p>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image src="/images/testing-room.jpg" alt="LANCHROM QC Testing Room" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-semibold">QC Testing Room</p>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 4 — PACKAGING ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: M }}>Packaging</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10" style={{ fontFamily: M }}>From Lab Pack to Industrial Scale</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { t: "Amber Glass Bottle", sizes: "500mL · 1L · 2.5L", desc: "Analytical-grade solvents for lab bench use" },
              { t: "HDPE Bottle", sizes: "4L · 5L · 7L", desc: "White HDPE containers for routine volume" },
              { t: "Industrial Packaging", sizes: "20L · 25L · 200L", desc: "Drums and containers for process-scale use" },
              { t: "OEM Packaging", sizes: "Custom Label · CoA · Spec", desc: "Private label from 50 units, your brand" },
            ].map(item => (
              <div key={item.t} className="rounded-xl bg-white border border-[#E2E8F0] p-6 hover:shadow-md transition-shadow">
                <Image src="/images/brand/icon-droplet.png" alt="" width={40} height={40} className="w-9 h-9 mb-4" />
                <h3 className="font-bold text-[#0A1628] mb-1 text-sm" style={{ fontFamily: M }}>{item.t}</h3>
                <p className="text-[#003D91] font-semibold text-xs mb-2">{item.sizes}</p>
                <p className="text-[#64748B] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 6 — QC PROCESS (fix2: 7 individual step cards with cropped photos) ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ fontFamily: M }}>Quality Control</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10 text-center" style={{ fontFamily: M }}>7-Stage Quality Control Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {[
              { n: "01", title: "Raw Materials", img: "/images/qc/raw-materials.jpg", points: ["Qualified suppliers", "Incoming inspection", "Full traceability"] },
              { n: "02", title: "Distillation", img: "/images/qc/distillation.jpg", points: ["Multi-stage precision", "Low-temp crystallization", "Impurity removal"] },
              { n: "03", title: "Filtration", img: "/images/qc/filtration.jpg", points: ["Multi-layer precision", "Remove ≥3nm particles", "Integrity monitoring"] },
              { n: "04", title: "Filling", img: "/images/qc/filling.jpg", points: ["Class 100 cleanroom", "Closed system filling", "Contamination prevention"] },
              { n: "05", title: "Testing", img: "/images/qc/testing.jpg", points: ["Comprehensive QC", "Advanced instruments", "Each batch verified"] },
              { n: "06", title: "Packaging", img: "/images/qc/packaging-cropped.jpg", points: ["Clean & durable", "Nitrogen purging", "Secure sealing"] },
              { n: "07", title: "Shipment", img: "/images/qc/shipment.jpg", points: ["Global distribution", "Safe delivery", "Full documentation"] },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image src={step.img} alt={step.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#0E918C] text-white text-[10px] font-bold flex items-center justify-center">{step.n}</div>
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-[#0A1628] text-xs mb-2" style={{ fontFamily: M }}>{step.title}</h3>
                  <ul className="space-y-0.5">
                    {step.points.map(p => (
                      <li key={p} className="text-[#64748B] text-[9px] flex gap-1"><span className="text-[#00B7C7]">•</span> {p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            {[
              { label: "Batch Consistency", note: "Lot-to-lot testing and retained batch records" },
              { label: "Clean Packaging", note: "Cleanroom filling, nitrogen purging, and secure sealing" },
              { label: "Document Support", note: "CoA, SDS, and export documentation available per shipment" },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-xl border border-[#E2E8F0] p-4">
                <div className="text-[#0A1628] font-bold text-sm" style={{ fontFamily: M }}>{s.label}</div>
                <div className="text-[#64748B] text-[10px] mt-1 leading-relaxed">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 7 — OEM SERVICES ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2" style={{ fontFamily: M }}>OEM Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10" style={{ fontFamily: M }}>Your Brand, Our Quality</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Private Label", d: "Your brand name, logo, and label design on our products. MOQ from 50 units.", items: ["Custom label design", "Multi-language support", "Your CoA header"] },
              { t: "Custom Packaging", d: "Choose container type, volume, and closure system.", items: ["500mL to 200L", "Glass, HDPE, or flex bag", "Cap/liner selection"] },
              { t: "Contract Manufacturing", d: "Custom formulations and special-grade production.", items: ["Custom purity levels", "Specific additive control", "Dedicated production runs"] },
            ].map(item => (
              <div key={item.t} className="bg-[#F5F8FC] border border-[#E2E8F0] rounded-xl p-6">
                <h3 className="text-[#0A1628] font-bold text-lg mb-2" style={{ fontFamily: M }}>{item.t}</h3>
                <p className="text-[#64748B] text-sm mb-4">{item.d}</p>
                <ul className="space-y-1.5">
                  {item.items.map(li => (<li key={li} className="text-[#334155] text-xs flex gap-2"><span className="text-[#00B7C7]">✓</span> {li}</li>))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {[
              { t: "Global Distribution", d: "Export to 25+ countries, DG documentation, CIF/FOB terms" },
              { t: "Regulatory Documentation", d: "CoA per lot, GHS SDS, TDS, Certificate of Origin" },
              { t: "Quality Assurance", d: "ISO 9001, GMP compliance, batch traceability" },
            ].map(item => (
              <div key={item.t} className="bg-[#F5F8FC] border border-[#E2E8F0] rounded-xl p-5">
                <h3 className="text-[#0A1628] font-bold text-sm mb-1" style={{ fontFamily: M }}>{item.t}</h3>
                <p className="text-[#64748B] text-xs">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 8 — INDUSTRIES ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ fontFamily: M }}>Industries Served</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10 text-center" style={{ fontFamily: M }}>Trusted Across Industries</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { t: "Semiconductor", d: "Electronic-grade IPA, PGME, PGMEA for photoresist and wafer processing", href: "/industries/semiconductor" },
              { t: "Pharmaceutical", d: "USP/EP grade solvents for drug manufacturing and QC testing", href: "/industries/pharmaceutical" },
              { t: "Analytical Laboratory", d: "HPLC, LC-MS, GC solvents for contract testing and research", href: "/industries/contract-laboratories" },
              { t: "Biotechnology", d: "Life science reagents, cell culture grade DMSO, process solvents", href: "/industries/biotechnology" },
            ].map(item => (
              <Link key={item.t} href={item.href} className="group bg-white rounded-xl border border-[#E2E8F0] p-6 hover:border-[#00B7C7] hover:shadow-md transition-all">
                <h3 className="font-bold text-[#0A1628] mb-2 group-hover:text-[#003D91]" style={{ fontFamily: M }}>{item.t}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{item.d}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6"><Link href="/industries" className="text-[#003D91] font-semibold text-sm">All 20 Industries →</Link></div>
        </div>
      </section>
      </RevealOnScroll>

      {/* ═══ SCREEN 9 — INQUIRY CTA (was screen 10, removed certifications) ═══ */}
      <RevealOnScroll>
      <section className="py-16 bg-[#EEF6FB] border-t border-[#D7E7F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-4" style={{ fontFamily: M }}>Ready to Get Started?</h2>
          <p className="text-[#475569] mb-10 max-w-lg mx-auto">Request a free sample, download documentation, or get a custom quotation.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Get A Free Sample", href: "/contact?type=sample" },
              { label: "Request CoA", href: "/downloads/coa" },
              { label: "Request Quotation", href: "/contact?type=quote" },
              { label: "OEM Solution", href: "/oem" },
            ].map(item => (
              <Link key={item.label} href={item.href} className="bg-white hover:bg-[#F8FBFF] border border-[#CFE1EC] rounded-xl px-4 py-4 text-[#003D91] text-sm font-semibold transition-colors shadow-sm" style={{ fontFamily: M }}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>
    </>
  );
}
