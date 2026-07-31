"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const M = "var(--font-montserrat), sans-serif";

type SolutionPanel = {
  title: string;
  eyebrow: string;
  href: string;
  image: string;
  alt: string;
  description: string;
  items: string[];
  maskClassName?: string;
  copyClassName?: string;
};

const PANELS: SolutionPanel[] = [
  {
    title: "Applications",
    eyebrow: "Solvents by analytical method",
    href: "/applications",
    image: "/images/backgrounds/application-back.jpg",
    alt: "Analytical applications for chromatography and spectroscopy",
    description: "Match solvent purity, UV cutoff and residue specifications to the instrument and method you use.",
    items: ["HPLC & LC-MS analysis", "GC sample preparation", "ICP-MS & trace analysis"],
  },
  {
    title: "OEM Service",
    eyebrow: "Your brand, our manufacturing system",
    href: "/oem",
    image: "/images/hero/oem-product-lineup.png",
    alt: "LANCHROM OEM and private label solvent lineup",
    description: "Build a private-label solvent line with controlled specifications, documentation and export-ready production.",
    items: ["Private label from 50 units", "Custom purity and formulations", "CoA, SDS and multilingual labels"],
  },
  {
    title: "Packaging",
    eyebrow: "From lab pack to industrial scale",
    href: "/solutions/custom-packaging",
    image: "/images/product-lines/lanchrom-packaging.jpg",
    alt: "Custom solvent packaging formats",
    description: "Select the container, closure and filling format that fits laboratory, production or distribution workflows.",
    items: ["500 mL to 200 L", "Amber glass, HDPE and drums", "Nitrogen purging and clean filling"],
    maskClassName: "home-service-mask--packaging",
    copyClassName: "home-service-copy--packaging",
  },
];

export default function IntegratedSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="home-flow-section home-flow-left-gray py-16 md:py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <p className="home-section-kicker" style={{ fontFamily: M }}>Integrated Solutions</p>
          <h2 className="home-section-title mx-auto" style={{ fontFamily: M }}>From method selection to finished pack</h2>
        </div>

        <nav className="mb-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 md:gap-x-16" aria-label="Integrated solutions">
          {PANELS.map((panel, index) => (
            <Link
              key={panel.title}
              href={panel.href}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`border-b-2 px-2 py-3 text-base font-extrabold uppercase tracking-[0.14em] transition-colors ${
                activeIndex === index
                  ? "border-[#0E918C] text-[#0A514C]"
                  : "border-transparent text-[#5F6F6A] hover:border-[#0E918C] hover:text-[#0A514C]"
              }`}
              style={{ fontFamily: M }}
            >
              {panel.title}
            </Link>
          ))}
        </nav>

        <div className="relative min-h-[650px] overflow-hidden rounded-md border border-[#B9D2C9] bg-[#DDEDE6] shadow-[0_20px_60px_rgba(28,72,64,0.12)] md:min-h-[560px]">
          {PANELS.map((panel, index) => (
            <article
              key={panel.title}
              className={`absolute inset-0 transition-opacity duration-500 ${
                activeIndex === index ? "z-10 opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={activeIndex !== index}
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover object-right"
                priority={index === 0}
              />
              <div className={`home-service-mask ${panel.maskClassName ?? ""} absolute inset-0 z-[1]`} aria-hidden="true" />
              <div className={`home-service-copy ${panel.copyClassName ?? ""} relative z-10 flex min-h-[650px] flex-col justify-center px-6 py-12 sm:px-8 md:min-h-[560px] md:px-10 lg:px-12`}>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#0E918C] md:text-base">{panel.eyebrow}</p>
                <h3 className="text-3xl font-extrabold leading-tight text-[#0A302E] md:text-4xl" style={{ fontFamily: M }}>{panel.title}</h3>
                <p className="mt-5 text-base leading-7 text-[#284D46] md:text-lg">{panel.description}</p>
                <ul className="mt-6 space-y-3">
                  {panel.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold leading-6 text-[#294842] md:text-base">
                      <span className="h-2 w-2 flex-none bg-[#0E918C]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={panel.href} className="mt-7 w-fit border-b border-[#0E918C] pb-1 text-base font-bold text-[#0A514C] hover:text-[#0E918C]">
                  Explore {panel.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
