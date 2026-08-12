import Image from "next/image";
import type { ReactNode } from "react";
import { getProductThemeStyle, type ProductThemeName } from "@/data/product-themes";

interface EditorialPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  theme?: ProductThemeName;
  productLayout?: boolean;
}

export default function EditorialPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
  theme = "pharma",
  productLayout = false,
}: EditorialPageHeroProps) {
  return (
    <section className={`editorial-page-hero product-themed-hero relative min-h-[520px] overflow-hidden border-b md:min-h-[560px] ${productLayout ? "product-catalog-hero" : ""}`} style={getProductThemeStyle(theme)}>
      {image && (
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      )}
      <div className="editorial-page-mask product-themed-mask absolute inset-0" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[560px] lg:px-8">
        <div className={`editorial-page-copy ${productLayout ? "product-catalog-copy" : ""}`}>
          <p className="product-themed-eyebrow text-sm font-bold uppercase tracking-[0.18em]">{eyebrow}</p>
          <h1 className="product-themed-title mt-4 text-4xl font-extrabold leading-[1.08] md:text-5xl lg:text-[3.4rem]">{title}</h1>
          <p className="product-themed-description mt-5 text-[17px] leading-8 md:text-lg">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
