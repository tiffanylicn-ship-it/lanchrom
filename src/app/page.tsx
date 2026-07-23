import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HomeHeroSlideshow from "@/components/home/HomeHeroSlideshow";
import IntegratedSolutions from "@/components/home/IntegratedSolutions";

export const metadata: Metadata = {
  title: "LANCHROM | HPLC, LC-MS & OEM Solvents Manufacturer",
  description:
    "Factory-direct HPLC, LC-MS, spectroscopy and OEM solvents for laboratory and industrial use.",
  alternates: { canonical: "https://www.lanchrom.com" },
};

const M = "var(--font-montserrat), sans-serif";

const PRODUCT_CATEGORIES = [
  {
    name: "HPLC Solvents",
    href: "/products/hplc-solvents",
    img: "/images/cards/hplc-solvents-card.jpg",
    note: "Gradient, isocratic and UV-qualified grades",
    products: [
      { name: "Acetonitrile", href: "/products/hplc-solvents/acetonitrile" },
      { name: "Methanol", href: "/products/hplc-solvents/methanol" },
      { name: "Isopropanol (IPA)", href: "/products/hplc-solvents/ipa" },
      { name: "n-Hexane", href: "/products/hplc-solvents/hexane" },
      { name: "Ethyl Acetate", href: "/products/hplc-solvents/ethyl-acetate" },
    ],
  },
  {
    name: "LC-MS Solvents",
    href: "/products/lcms-solvents",
    img: "/images/cards/lcms-solvents-card.jpg",
    note: "Low ion suppression and trace-metal control",
    products: [
      { name: "Acetonitrile — LC-MS Grade", href: "/products/lcms-solvents/acetonitrile" },
      { name: "LC-MS Water (Ultrapure)", href: "/products/lcms-solvents/lc-ms-grade-water-ultrapure" },
      { name: "Ammonium Acetate 10mM", href: "/products/lcms-solvents/lc-ms-grade-ammonium-acetate-10mm" },
      { name: "Ammonium Formate 10mM", href: "/products/lcms-solvents/lc-ms-grade-ammonium-formate-10mm" },
    ],
  },
  {
    name: "Spectroscopy",
    href: "/products/spectroscopic-solvents",
    img: "/images/cards/spectroscopy-solvents-card.jpg",
    note: "Low absorbance solvents for optical analysis",
    products: [
      { name: "Spectroscopic Grade Chloroform", href: "/products/spectroscopic-solvents/spectroscopic-grade-chloroform" },
      { name: "Spectroscopic Grade n-Hexane", href: "/products/spectroscopic-solvents/spectroscopic-grade-n-hexane" },
      { name: "Spectroscopic Grade DCM", href: "/products/spectroscopic-solvents/spectroscopic-grade-dcm" },
    ],
  },
  {
    name: "Electronic Chemicals",
    href: "/products/electronic-grade",
    img: "/images/cards/electronic-chemicals-card.jpg",
    note: "Ultra-high purity for wafer and display processes",
    products: [
      { name: "Ethanol — Electronic Grade", href: "/products/electronic-grade/ethanol" },
      { name: "Isopropanol (IPA)", href: "/products/pharma-grade/ipa" },
      { name: "PGME", href: "/products/pharma-grade/pgme-propylene-glycol-methyl-ether" },
      { name: "PGMEA", href: "/products/pharma-grade/pgmea-propylene-glycol-methyl-ether-acetate" },
    ],
  },
];

const QC_STEPS = [
  { n: "01", title: "Raw Materials", img: "/images/qc/raw-materials.jpg", note: "Qualified suppliers and incoming inspection" },
  { n: "02", title: "Distillation", img: "/images/qc/distillation.jpg", note: "Multi-stage precision impurity removal" },
  { n: "03", title: "Filtration", img: "/images/qc/filtration.jpg", note: "Fine-particle control and monitoring" },
  { n: "04", title: "Clean Filling", img: "/images/qc/filling.jpg", note: "Closed-system cleanroom filling" },
  { n: "05", title: "Batch Testing", img: "/images/qc/testing.jpg", note: "Instrument testing for every batch" },
  { n: "06", title: "Shipment", img: "/images/qc/packaging-sitechat.png", note: "Secure sealing and export documentation" },
];

export default function HomePage() {
  return (
    <div className="home-flow-page">
      <HomeHeroSlideshow />

      <div className="home-flow-continuum">
        <section className="home-flow-section home-flow-right-green py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="home-section-kicker" style={{ fontFamily: M }}>Core Product Portfolio</p>
                <h2 className="home-section-title" style={{ fontFamily: M }}>Find the right solvent faster</h2>
                <p className="home-section-copy">Choose by analytical grade, instrument platform or process requirement.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact?type=quote" className="rounded-md bg-[#0A514C] px-5 py-3 text-xs font-bold text-white hover:bg-[#083E3B]">Request Quote</Link>
                <Link href="/products" className="rounded-md border border-[#8FB8AD] bg-white/70 px-5 py-3 text-xs font-bold text-[#0A514C] hover:bg-white">All Products</Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCT_CATEGORIES.map((category) => (
                <div key={category.name} className="group relative min-h-[300px] overflow-hidden rounded-md bg-[#0A302E] shadow-sm">
                  <Link href={category.href} className="absolute inset-0 z-10" aria-label={`View ${category.name}`}>
                    <Image src={category.img} alt={category.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[#0E918C]/50 backdrop-blur-[1px]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-200 group-hover:opacity-0">
                      <h3 className="text-2xl font-extrabold text-[#D9FFF6] [text-shadow:0_1px_4px_rgba(4,58,54,0.45)]" style={{ fontFamily: M }}>{category.name}</h3>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-white/95 [text-shadow:0_1px_3px_rgba(4,58,54,0.45)]">{category.note}</p>
                    </div>
                  </Link>

                  {/* Hover-reveal: key products for this category, each its own link */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end bg-[#0A514C]/90 p-5 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <h3 className="mb-3 text-lg font-extrabold text-white" style={{ fontFamily: M }}>{category.name}</h3>
                    <ul className="space-y-1.5">
                      {category.products.map((p) => (
                        <li key={p.href}>
                          <Link href={p.href} className="block text-sm font-semibold text-white/90 hover:text-[#5FD4DC] hover:underline underline-offset-2">
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link href={category.href} className="mt-4 text-xs font-bold uppercase tracking-wide text-[#5FD4DC] hover:text-white">View all →</Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { stat: "99.998%", label: "Purity" },
                { stat: "Low ppm", label: "Water control" },
                { stat: "ppt level", label: "Metal control" },
                { stat: "ISO / GMP", label: "Quality system" },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#0E918C] bg-white/75 px-4 py-3 backdrop-blur-sm">
                  <div className="text-xl font-extrabold text-[#0A514C]" style={{ fontFamily: M }}>{item.stat}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-[#60736D]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <IntegratedSolutions />

        <section className="home-flow-section home-flow-right-yellow py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="home-section-kicker" style={{ fontFamily: M }}>Quality Control</p>
              <h2 className="home-section-title" style={{ fontFamily: M }}>Six controlled stages, one dependable batch</h2>
              <p className="home-section-copy">Every lot moves through a documented path from incoming material to export-ready shipment.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {QC_STEPS.map((step) => (
                <div key={step.n} className="overflow-hidden rounded-md border border-[#DCE4DF] bg-white/90 shadow-sm">
                  <div className="relative aspect-[4/3]">
                    <Image src={step.img} alt={step.title} fill sizes="(min-width: 1280px) 17vw, 33vw" className="object-cover" />
                    <span className="absolute left-3 top-3 bg-[#0A514C] px-2 py-1 text-xs font-bold text-white">{step.n}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-[#193A35]" style={{ fontFamily: M }}>{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#697872]">{step.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-flow-section home-flow-left-green py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="home-section-kicker" style={{ fontFamily: M }}>Industries Served</p>
              <h2 className="home-section-title mx-auto" style={{ fontFamily: M }}>Purity systems built for demanding industries</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Semiconductor", text: "Electronic-grade IPA, PGME and PGMEA for wafer processing.", href: "/industries/semiconductor" },
                { title: "Pharmaceutical", text: "Monograph-tested solvents for drug manufacturing and QC.", href: "/industries/pharmaceutical" },
                { title: "Analytical Labs", text: "HPLC, LC-MS and GC solvents for testing and research.", href: "/industries/contract-laboratories" },
                { title: "Biotechnology", text: "Life-science reagents and controlled process solvents.", href: "/industries/biotechnology" },
              ].map((item) => (
                <Link key={item.title} href={item.href} className="group min-h-[190px] border-t-4 border-[#0E918C] bg-white/85 p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <h3 className="text-lg font-bold text-[#173C36] group-hover:text-[#0E918C]" style={{ fontFamily: M }}>{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#61726D]">{item.text}</p>
                  <span className="mt-6 block text-xs font-bold uppercase tracking-wider text-[#0A514C]">View industry</span>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/industries" className="border-b border-[#0A514C] pb-1 text-sm font-bold text-[#0A514C]">View all industries</Link>
            </div>
          </div>
        </section>

        <section className="home-flow-section home-flow-cta py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="home-section-kicker" style={{ fontFamily: M }}>Start a conversation</p>
                <h2 className="home-section-title max-w-2xl" style={{ fontFamily: M }}>Samples, documentation and custom quotations</h2>
                <p className="home-section-copy max-w-xl">Tell us your solvent, grade, packaging and destination. Our team will help define the next step.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact?type=sample" className="rounded-md bg-[#0A514C] px-5 py-3 text-sm font-bold text-white hover:bg-[#083E3B]">Get A Free Sample</Link>
                <Link href="/contact?type=quote" className="rounded-md border border-[#0A514C]/45 bg-white/55 px-5 py-3 text-sm font-bold text-[#0A514C] hover:bg-white">Request Quotation</Link>
                <Link href="/downloads" className="rounded-md border border-[#0A514C]/45 bg-white/55 px-5 py-3 text-sm font-bold text-[#0A514C] hover:bg-white">CoA / SDS</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
