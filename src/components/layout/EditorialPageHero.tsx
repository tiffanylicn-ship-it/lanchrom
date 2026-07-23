import Image from "next/image";
import type { ReactNode } from "react";

interface EditorialPageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}

export default function EditorialPageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: EditorialPageHeroProps) {
  return (
    <section className="editorial-page-hero relative min-h-[520px] overflow-hidden border-b border-[#C9DBD3] bg-[#EAF4EF] md:min-h-[560px]">
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
      <div className="editorial-page-mask absolute inset-0 bg-[#EAF4EF]" />
      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 md:min-h-[560px] lg:px-8">
        <div className="editorial-page-copy">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E918C]">{eyebrow}</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0A302E] md:text-[2.15rem] lg:text-4xl">{title}</h1>
          <p className="mt-5 text-[15px] leading-relaxed text-[#42615A] md:text-base">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
