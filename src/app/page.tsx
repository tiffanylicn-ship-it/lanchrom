import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/home/RevealOnScroll";

export const metadata: Metadata = {
  title: "LANCHROM | HPLC, LC-MS & OEM Solvents Manufacturer",
  description:
    "Factory-direct HPLC, LC-MS, spectroscopy and OEM solvents for laboratory and industrial use.",
  alternates: { canonical: "https://www.lanchrom.com" },
};

const M = "var(--font-montserrat), sans-serif";

const HOME_HERO_SLIDES = [
  {
    href: "/manufacturing",
    src: "/images/backgrounds/factory-tanker-fleet-2.jpg",
    alt: "LANCHROM manufacturing facility and tanker fleet",
    label: "Manufacturing",
  },
  {
    href: "/about",
    src: "/images/hero/lcms-solvent-factory-manufacturer.png",
    alt: "LANCHROM solvent manufacturing campus",
    label: "About",
  },
  {
    href: "/products",
    src: "/images/hero/product-solutions.png",
    alt: "LANCHROM high-purity solvent products",
    label: "Products",
  },
  {
    href: "/guides",
    src: "/images/hero/solvents-production-lines.png",
    alt: "LANCHROM solvent production lines",
    label: "Guides",
  },
  {
    href: "/oem",
    src: "/images/hero/oem-product-lineup.png",
    alt: "LANCHROM OEM solvent product lineup",
    label: "OEM",
  },
];

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

const SERVICE_PANELS = [
  {
    title: "Applications",
    eyebrow: "Solvents by analytical method",
    href: "/applications",
    image: "/images/backgrounds/application-back.jpg",
    alt: "Analytical applications for chromatography and spectroscopy",
    description:
      "Match solvent purity, UV cutoff and residue specifications to the instrument and method you use.",
    items: ["HPLC & LC-MS analysis", "GC sample preparation", "ICP-MS & trace analysis"],
  },
  {
    title: "OEM Service",
    eyebrow: "Your brand, our manufacturing system",
    href: "/oem",
    image: "/images/hero/oem-product-lineup.png",
    alt: "LANCHROM OEM and private label solvent lineup",
    description:
      "Build a private-label solvent line with controlled specifications, documentation and export-ready production.",
    items: ["Private label from 50 units", "Custom purity and formulations", "CoA, SDS and multilingual labels"],
  },
  {
    title: "Packaging",
    eyebrow: "From lab pack to industrial scale",
    href: "/solutions/custom-packaging",
    image: "/images/backgrounds/oem-bottle-pic.png",
    alt: "Custom solvent packaging formats",
    description:
      "Select the container, closure and filling format that fits laboratory, production or distribution workflows.",
    items: ["500 mL to 200 L", "Amber glass, HDPE and drums", "Nitrogen purging and clean filling"],
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
      <section className="home-hero-stage relative min-h-[100svh] lg:min-h-[88vh] overflow-hidden bg-[#DCE7E4]">
        {HOME_HERO_SLIDES.map((slide, index) => (
          <Link
            key={slide.href}
            href={slide.href}
            className="home-hero-slide absolute inset-0"
            style={{ animationDelay: `${index * 5}s`, opacity: index === 0 ? 1 : 0 }}
            aria-label={`Open ${slide.label}`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={index === 0}
            />
          </Link>
        ))}

        <div className="home-hero-green-wash absolute inset-y-0 left-0 z-[2]" aria-hidden="true" />

        <div className="relative z-10 flex min-h-[100svh] flex-col lg:min-h-[88vh] pointer-events-none">
          <div className="flex flex-1 items-center">
            <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
              <div className="max-w-xl pointer-events-auto">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#E9FFFA] sm:text-sm" style={{ fontFamily: M }}>
                  HPLC / LC-MS / GC / Electronic Grade Solvents
                </p>
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: M }}>
                  <span className="text-[#5FD4DC]">High-Purity Solvents</span> for Analytical Labs &amp; Electronic Manufacturing
                </h1>
                <p className="mb-8 max-w-lg text-base leading-relaxed text-[#F3FFFC] sm:text-lg">
                  Factory-direct solvent solutions with dependable documentation, flexible packaging and global export support.
                </p>
                <div className="mb-9 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2 text-sm text-white">
                  {["HPLC & LC-MS grades", "UV cutoff qualified", "Low residue control", "CoA / SDS available"].map((item) => (
                    <span key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5FD4DC]" />
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact?type=sample" className="rounded-md bg-[#083E3B] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#062D2B]" style={{ fontFamily: M }}>
                    Get Free Sample
                  </Link>
                  <Link href="/products" className="rounded-md border border-white/70 bg-white/15 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25" style={{ fontFamily: M }}>
                    Browse Catalog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 sm:pb-10 lg:px-8 pointer-events-auto">
            <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 sm:gap-x-10 lg:gap-x-14" aria-label="Homepage feature slides">
              {HOME_HERO_SLIDES.map((slide) => (
                <Link key={slide.label} href={slide.href} className="home-hero-tab border-b-2 border-transparent px-1 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition-all hover:border-[#5FD4DC] hover:text-[#5FD4DC] sm:text-sm">
                  {slide.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <RevealOnScroll>
        <section className="home-flow-section home-flow-right-green py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]" style={{ fontFamily: M }}>Core Product Portfolio</p>
                <h2 className="text-3xl font-extrabold text-[#0A302E] md:text-4xl" style={{ fontFamily: M }}>Find the right solvent faster</h2>
                <p className="mt-4 text-sm text-[#52645F]">Choose by analytical grade, instrument platform or process requirement.</p>
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
                    {/* Brand-green wash behind the title so it stays legible over any photo, at a lighter 60% opacity instead of a heavy dark fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E918C]/60 via-[#0E918C]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-200 group-hover:opacity-0">
                      <h3 className="text-2xl font-extrabold text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.55)]" style={{ fontFamily: M }}>{category.name}</h3>
                      <p className="mt-2 text-xs font-medium leading-relaxed text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">{category.note}</p>
                    </div>
                  </Link>

                  {/* Hover-reveal: key products for this category, each its own link */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end bg-[#0A302E]/92 p-5 opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100 group-hover:pointer-events-auto">
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
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="home-service-stage home-flow-section home-flow-left-gray py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0E918C]" style={{ fontFamily: M }}>Integrated Solutions</p>
              <h2 className="text-4xl font-extrabold text-[#102E2B] md:text-5xl" style={{ fontFamily: M }}>From method selection to finished pack</h2>
            </div>

            <nav className="home-service-tabs mb-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 md:gap-x-16" aria-label="Integrated solutions">
              {SERVICE_PANELS.map((panel) => (
                <Link key={panel.title} href={panel.href} className="home-service-tab border-b-2 border-transparent px-2 py-3 text-base font-extrabold uppercase tracking-[0.14em] text-[#5F6F6A] transition-colors hover:border-[#0E918C] hover:text-[#0A514C]" style={{ fontFamily: M }}>
                  {panel.title}
                </Link>
              ))}
            </nav>

            <div className="home-service-panels relative min-h-[620px] overflow-hidden rounded-md border border-[#CAD9D4] bg-white/85 shadow-[0_20px_60px_rgba(28,72,64,0.10)] backdrop-blur-sm md:min-h-[540px]">
              {SERVICE_PANELS.map((panel, index) => (
                <article key={panel.title} className={`home-service-panel absolute inset-0 grid md:grid-cols-[0.88fr_1.12fr] ${index === 0 ? "is-default" : ""}`}>
                  <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:px-12">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#0E918C]">{panel.eyebrow}</p>
                    <h3 className="text-4xl font-extrabold text-[#0A302E] md:text-5xl" style={{ fontFamily: M }}>{panel.title}</h3>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-[#536862]">{panel.description}</p>
                    <ul className="mt-6 space-y-3">
                      {panel.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-base font-semibold text-[#294842]">
                          <span className="h-2 w-2 bg-[#0E918C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href={panel.href} className="mt-8 w-fit border-b border-[#0E918C] pb-1 text-base font-bold text-[#0A514C] hover:text-[#0E918C]">Explore {panel.title}</Link>
                  </div>
                  <div className="relative min-h-[240px] bg-[#ECF4F1] md:min-h-full">
                    <Image src={panel.image} alt={panel.alt} fill sizes="(min-width: 768px) 56vw, 100vw" className="object-contain object-right" />
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/95 to-transparent" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="home-flow-section home-flow-right-yellow py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#8C7427]" style={{ fontFamily: M }}>Quality Control</p>
              <h2 className="text-3xl font-extrabold text-[#28352F] md:text-4xl" style={{ fontFamily: M }}>Six controlled stages, one dependable batch</h2>
              <p className="mt-4 text-sm text-[#67736D]">Every lot moves through a documented path from incoming material to export-ready shipment.</p>
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
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="home-flow-section home-flow-left-green py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]" style={{ fontFamily: M }}>Industries Served</p>
              <h2 className="text-3xl font-extrabold text-[#0A302E] md:text-4xl" style={{ fontFamily: M }}>Purity systems built for demanding industries</h2>
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
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="home-flow-section home-flow-cta py-16 md:py-20">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9FFF1]" style={{ fontFamily: M }}>Start a conversation</p>
                <h2 className="max-w-2xl text-3xl font-extrabold text-white md:text-4xl" style={{ fontFamily: M }}>Samples, documentation and custom quotations</h2>
                <p className="mt-4 max-w-xl text-sm text-white/75">Tell us your solvent, grade, packaging and destination. Our team will help define the next step.</p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/contact?type=sample" className="rounded-md bg-white px-5 py-3 text-sm font-bold text-[#0A514C] hover:bg-[#E7F7F1]">Get A Free Sample</Link>
                <Link href="/contact?type=quote" className="rounded-md border border-white/45 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">Request Quotation</Link>
                <Link href="/downloads" className="rounded-md border border-white/45 px-5 py-3 text-sm font-bold text-white hover:bg-white/10">CoA / SDS</Link>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>
    </div>
  );
}
