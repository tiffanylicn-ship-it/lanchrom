import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/home/RevealOnScroll";
import { INDUSTRIES_NAV, MARKETS_NAV } from "@/data/nav-links";

export const metadata: Metadata = {
  title: "LANCHROM| HPLC, LC-MS & OEM Solvents Manufacturer",
  description: "Factory-direct HPLC, LC-MS, spectroscopy and OEM solvents. Acetonitrile, Methanol, IPA, THF and custom mobile phases for laboratory and industrial use.",
  alternates: { canonical: "https://www.lanchrom.com" },
};

const M = "var(--font-montserrat), sans-serif";

const HOME_HERO_SLIDES = [
  {
    href: "/manufacturing",
    src: "/images/backgrounds/production-process2.png",
    alt: "LANCHROM solvent production process",
    label: "Manufacturing",
  },
  {
    href: "/about",
    src: "/images/hero/lcms-solvent-factory-manufacturer.png",
    alt: "LANCHROM LCMS solvent factory manufacturer",
    label: "About LANCHROM",
  },
  {
    href: "/products",
    src: "/images/hero/product-solutions.png",
    alt: "LANCHROM product solutions",
    label: "Products",
  },
  {
    href: "/guides",
    src: "/images/hero/solvents-production-lines.png",
    alt: "LANCHROM solvents production lines",
    label: "Guides",
  },
  {
    href: "/oem",
    src: "/images/hero/solvents-oem-services.png",
    alt: "LANCHROM solvents OEM services",
    label: "OEM & Private Label",
  },
];

export default function HomePage() {
  return (
    <>
      {/* --- SCREEN 1 - HERO (full-bleed background slideshow, LCY-style) --- */}
      <section className="home-hero-stage relative min-h-[100svh] lg:min-h-[88vh] overflow-hidden bg-[#0A1628]">
        {HOME_HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.href}
            className="home-hero-slide absolute inset-0"
            style={{ animationDelay: `${index * 5}s`, opacity: index === 0 ? 1 : 0 }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Gradient overlay for text legibility, matching a full-bleed corporate hero */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,22,40,0.55)_0%,rgba(10,22,40,0.35)_35%,rgba(10,22,40,0.75)_100%)]" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col min-h-[100svh] lg:min-h-[88vh]">
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
              <div className="max-w-2xl">
                <p className="text-[#5FD4DC] text-sm font-semibold tracking-wider uppercase mb-4" style={{ fontFamily: M }}>HPLC · LC-MS · GC · Electronic Grade Solvents</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-6" style={{ fontFamily: M }}>
                  High-Purity Solvents for Analytical Labs &amp; Electronic Manufacturing
                </h1>
                <p className="text-white/85 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                  Factory-direct HPLC, LC-MS, GC and OEM solvent solutions with reliable documentation and export support.
                </p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-10 text-sm max-w-lg">
                  {["HPLC & LC-MS Grades", "UV Cutoff Qualified", "Low Residue < ppm",
                    "CoA / SDS Available", "OEM & Private Label", "Global Regulatory Support"
                  ].map(item => (
                    <span key={item} className="text-white flex items-center gap-2"><span className="text-[#5FD4DC]">✓</span> {item}</span>
                  ))}
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/contact?type=sample" className="bg-[#0E918C] text-white font-bold px-7 py-3.5 rounded-lg hover:bg-[#0DA8A2] transition-colors text-sm" style={{ fontFamily: M }}>Get Free Sample</Link>
                  <Link href="/products" className="border border-white/40 text-white bg-white/10 backdrop-blur-sm font-bold px-7 py-3.5 rounded-lg hover:bg-white/20 transition-colors text-sm" style={{ fontFamily: M }}>Browse Catalog</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide tabs, overlaid at the bottom of the hero */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 sm:pb-10">
            <div className="flex flex-wrap gap-2">
              {HOME_HERO_SLIDES.map(slide => (
                <Link key={slide.label} href={slide.href} className="home-hero-tab rounded-md bg-white/12 border border-white/25 backdrop-blur-sm px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-white hover:text-[#003D91] transition-colors">
                  {slide.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SCREEN 2 - PRODUCT LINES (fix3: categories + key products, no icons) --- */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { name: "HPLC Solvents", href: "/products/hplc-solvents", tag: "Analytical" },
              { name: "LC-MS Solvents", href: "/products/lcms-solvents", tag: "Bioanalysis" },
              { name: "Electronic Grade", href: "/products/electronic-grade", tag: "Semiconductor" },
              { name: "OEM & Mobile Phase", href: "/oem", tag: "Custom Supply" },
            ].map(p => (
              <Link key={p.name} href={p.href} className="group bg-white/90 border border-[#DCE7EE] rounded-xl p-4 hover:border-[#00B7C7] hover:shadow-md transition-all">
                <p className="text-[#0A1628] font-bold text-sm group-hover:text-[#003D91]" style={{ fontFamily: M }}>{p.name}</p>
                <p className="text-[#0E918C] text-[10px] font-semibold mt-1">{p.tag}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* --- FACILITY SHOWCASE - 3 real photos --- */}
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

      {/* --- SCREEN 4 - PACKAGING --- */}
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

      {/* --- SCREEN 6 - QC PROCESS (fix2: 7 individual step cards with cropped photos) --- */}
      <RevealOnScroll>
      <section className="py-16 bg-[#F5F8FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ fontFamily: M }}>Quality Control</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10 text-center" style={{ fontFamily: M }}>7-Stage Quality Control Process</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {[
              { n: "01", title: "Raw Materials", img: "/images/qc/raw-materials.jpg", points: ["Qualified suppliers", "Incoming inspection", "Full traceability"] },
              { n: "02", title: "Distillation", img: "/images/qc/distillation.jpg", points: ["Multi-stage precision", "Low-temp crystallization", "Impurity removal"] },
              { n: "03", title: "Filtration", img: "/images/qc/filtration.jpg", points: ["Multi-layer precision", "Remove <=nm particles", "Integrity monitoring"] },
              { n: "04", title: "Filling", img: "/images/qc/filling.jpg", points: ["Class 100 cleanroom", "Closed system filling", "Contamination prevention"] },
              { n: "05", title: "Testing", img: "/images/qc/testing.jpg", points: ["Comprehensive QC", "Advanced instruments", "Each batch verified"] },
              { n: "06", title: "Packaging", img: "/images/qc/packaging-sitechat.png", points: ["Clean & durable", "Nitrogen purging", "Secure sealing"] },
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
                      <li key={p} className="text-[#64748B] text-[9px] flex gap-1"><span className="text-[#00B7C7]">-</span> {p}</li>
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

      {/* --- SCREEN 7 - OEM SERVICES --- */}
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

      {/* --- SCREEN 8 - INDUSTRIES --- */}
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

      {/* --- EXPLORE MORE (Industries / Markets / Guides / Downloads — moved off the top nav) --- */}
      <RevealOnScroll>
      <section className="py-16 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#00B7C7] text-xs font-bold tracking-widest uppercase mb-2 text-center" style={{ fontFamily: M }}>Explore More</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-10 text-center" style={{ fontFamily: M }}>Industries, Markets, Guides &amp; Downloads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold text-[#0A1628] text-sm mb-3" style={{ fontFamily: M }}>Industries</h3>
              <ul className="space-y-2 mb-3">
                {INDUSTRIES_NAV.slice(0, 5).map(item => (
                  <li key={item.href}><Link href={item.href} className="text-[#475569] text-sm hover:text-[#0E918C] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
              <Link href="/industries" className="text-[#003D91] font-semibold text-sm">All Industries →</Link>
            </div>
            <div>
              <h3 className="font-bold text-[#0A1628] text-sm mb-3" style={{ fontFamily: M }}>Export Markets</h3>
              <ul className="space-y-2 mb-3">
                {MARKETS_NAV.slice(0, 5).map(item => (
                  <li key={item.href}><Link href={item.href} className="text-[#475569] text-sm hover:text-[#0E918C] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
              <Link href="/markets" className="text-[#003D91] font-semibold text-sm">All Markets →</Link>
            </div>
            <div>
              <h3 className="font-bold text-[#0A1628] text-sm mb-3" style={{ fontFamily: M }}>Guides</h3>
              <ul className="space-y-2 mb-3">
                {[
                  { label: "The Complete Guide to HPLC Solvents", href: "/guides/complete-guide-to-hplc-solvents" },
                  { label: "The Mobile Phase Handbook", href: "/guides/mobile-phase-handbook" },
                  { label: "Chromatography Solvent Buying Guide", href: "/guides/chromatography-solvent-buying-guide" },
                ].map(item => (
                  <li key={item.label}><Link href={item.href} className="text-[#475569] text-sm hover:text-[#0E918C] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
              <Link href="/guides" className="text-[#003D91] font-semibold text-sm">All Guides →</Link>
            </div>
            <div>
              <h3 className="font-bold text-[#0A1628] text-sm mb-3" style={{ fontFamily: M }}>Downloads</h3>
              <ul className="space-y-2 mb-3">
                {[
                  { label: "Certificates of Analysis (CoA)", href: "/downloads/coa" },
                  { label: "Safety Data Sheets (SDS)", href: "/downloads/sds" },
                  { label: "Technical Data Sheets (TDS)", href: "/downloads/tds" },
                ].map(item => (
                  <li key={item.label}><Link href={item.href} className="text-[#475569] text-sm hover:text-[#0E918C] transition-colors">{item.label}</Link></li>
                ))}
              </ul>
              <Link href="/downloads" className="text-[#003D91] font-semibold text-sm">All Downloads →</Link>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      {/* --- SCREEN 9 - INQUIRY CTA (was screen 10, removed certifications) --- */}
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
