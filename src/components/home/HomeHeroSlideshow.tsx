"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const M = "var(--font-montserrat), sans-serif";

const SLIDES = [
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

export default function HomeHeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const isLockedRef = useRef(false);

  useEffect(() => {
    if (isLocked) return;

    const timer = window.setInterval(() => {
      if (isLockedRef.current) return;
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isLocked]);

  const selectSlide = (index: number) => {
    isLockedRef.current = true;
    setActiveIndex(index);
    setIsLocked(true);
  };

  return (
    <section className="home-hero-stage relative min-h-[100svh] overflow-hidden bg-[#DCE7E4] lg:min-h-[88vh]">
      {SLIDES.map((slide, index) => (
        <Link
          key={slide.href}
          href={slide.href}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeIndex === index ? "z-[1] opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-label={`Open ${slide.label}`}
          aria-hidden={activeIndex !== index}
          tabIndex={activeIndex === index ? 0 : -1}
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

      <div className="absolute inset-x-0 top-0 z-20 px-4 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        <nav className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-1 sm:gap-x-10 lg:gap-x-14" aria-label="Homepage feature slides">
          {SLIDES.map((slide, index) => (
            <Link
              key={slide.label}
              href={slide.href}
              onMouseEnter={() => selectSlide(index)}
              onFocus={() => selectSlide(index)}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`border-b-2 px-1 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-all sm:text-sm ${
                activeIndex === index
                  ? "border-[#5FD4DC] text-[#D9FFF6]"
                  : "border-transparent text-white/85 hover:border-[#5FD4DC] hover:text-[#D9FFF6]"
              }`}
            >
              {slide.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center pointer-events-none lg:min-h-[88vh]">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
          <div className="min-w-0 max-w-[calc(100vw-2rem)] pointer-events-auto sm:max-w-xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#E9FFFA] sm:text-sm" style={{ fontFamily: M }}>
              HPLC / LC-MS / GC / Electronic Grade Solvents
            </p>
            <h1 className="mb-6 break-words text-[2rem] font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl" style={{ fontFamily: M }}>
              <span className="text-[#F28C28] [text-shadow:0_2px_12px_rgba(77,35,5,0.38)]">High-Purity Solvents</span>{" "}for Analytical Labs &amp; Electronic Manufacturing
            </h1>
            <p className="mb-8 max-w-lg break-words text-base leading-relaxed text-[#F3FFFC] sm:text-lg">
              Factory-direct solvent solutions with dependable documentation, flexible packaging and global export support.
            </p>
            <div className="mb-9 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 text-base font-extrabold uppercase text-[#FFAA45] sm:grid-cols-2 sm:text-lg">
              {["HPLC & LC-MS grades", "UV cutoff qualified", "Low residue control", "CoA / SDS available"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 flex-none bg-[#F28C28]" />
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
    </section>
  );
}
