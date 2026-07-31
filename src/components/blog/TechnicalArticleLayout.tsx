import type { ReactNode } from "react";
import Link from "next/link";

interface RelatedLink {
  href: string;
  label: string;
}

interface TechnicalArticleLayoutProps {
  title: string;
  eyebrow: string;
  summary: string;
  canonical: string;
  datePublished: string;
  readingTime: string;
  relatedLinks: RelatedLink[];
  children: ReactNode;
}

export default function TechnicalArticleLayout({
  title,
  eyebrow,
  summary,
  canonical,
  datePublished,
  readingTime,
  relatedLinks,
  children,
}: TechnicalArticleLayoutProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: summary,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: "LANCHROM Technical Team",
    },
    publisher: {
      "@type": "Organization",
      name: "LANCHROM",
      url: "https://www.lanchrom.com",
    },
    mainEntityOfPage: canonical,
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="border-b border-[#DCE7E2] bg-[#E8F5F2]">
        <div className="mx-auto max-w-5xl px-4 py-3 text-xs text-[#52706A] sm:px-6 lg:px-8">
          <Link href="/resources/blog" className="font-semibold hover:text-[#0E918C]">
            Technical Blog
          </Link>
          <span className="px-2">/</span>
          <span>{eyebrow}</span>
        </div>
      </div>

      <header className="border-b border-[#DCE7E2] bg-[#F5FAF8] py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0E918C]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-[#173A35] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#526660]">
            {summary}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#71817C]">
            LANCHROM Technical Team · {readingTime}
          </p>
        </div>
      </header>

      <article className="py-12 md:py-16">
        <div className="article-prose mx-auto max-w-5xl space-y-10 px-4 text-[1.02rem] leading-8 text-[#3F5550] sm:px-6 lg:px-8">
          {children}

          <aside className="border-y border-[#B9D9D1] bg-[#EAF6F2] px-6 py-7">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E918C]">
              Practical note
            </p>
            <p className="mt-2 text-sm leading-7 text-[#49615B]">
              Use this article as a purchasing and laboratory workflow guide. Final
              acceptance limits should follow the product&apos;s current lot
              documentation and the requirements of your validated method.
            </p>
          </aside>

          <div className="flex flex-wrap gap-3 border-t border-[#DCE7E2] pt-8">
            {relatedLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={index === 0 ? "btn-fill" : "btn-line"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
