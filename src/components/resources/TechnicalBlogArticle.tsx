import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { TechnicalBlogArticle as TechnicalBlogArticleData } from "@/data/technical-blog-europe";

export default function TechnicalBlogArticle({ article }: { article: TechnicalBlogArticleData }) {
  const url = `https://www.lanchrom.com/resources/blog/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    keywords: article.primaryKeyword,
    author: { "@type": "Organization", name: "LANCHROM Technical Team" },
    publisher: { "@type": "Organization", name: "LANCHROM", url: "https://www.lanchrom.com" },
    mainEntityOfPage: url,
    inLanguage: "en",
  };

  return (
    <div className="technical-blog-page bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="border-b border-[#D7E2E8] bg-[#EDF4F7]">
        <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-[#5D7182] sm:px-6 lg:px-8">
          <Link href="/resources/blog" className="font-semibold text-[#0B4F83] hover:underline">Technical Blog</Link>
          <span className="px-2">/</span><span>{article.shortTitle}</span>
        </div>
      </div>

      <header className="technical-blog-hero">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="technical-blog-hero-meta"><span>{article.tag}</span><small>{article.readingTime}</small></div>
          <p className="technical-blog-keyword">SEO focus: {article.primaryKeyword}</p>
          <h1>{article.title}</h1>
          <p className="technical-blog-lede">{article.intro}</p>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <section className="technical-blog-pain-grid" aria-labelledby="customer-pain-points">
          <div className="technical-blog-section-heading"><p>Customer priorities</p><h2 id="customer-pain-points">The problems buyers need solved</h2></div>
          <div className="technical-blog-pain-cards">
            {article.painPoints.map((item, index) => <div key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.detail}</p></div>)}
          </div>
        </section>

        <div className="technical-blog-content">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}><CheckCircle2 aria-hidden="true" />{point}</li>)}</ul>}
            </section>
          ))}
        </div>

        <aside className="technical-blog-case">
          <p>{article.caseStudy.label}</p><h2>{article.caseStudy.title}</h2><div className="technical-blog-case-grid"><div><h3>Context</h3><p>{article.caseStudy.context}</p></div><div><h3>Qualification actions</h3><ol>{article.caseStudy.actions.map((action, index) => <li key={action}><span>{index + 1}</span>{action}</li>)}</ol></div></div><div className="technical-blog-case-result"><strong>Resulting control approach</strong><p>{article.caseStudy.result}</p></div>
        </aside>

        <section className="technical-blog-checklist">
          <div className="technical-blog-section-heading"><p>Use at supplier review</p><h2>Implementation checklist</h2></div>
          <div>{article.checklist.map((item) => <p key={item}><CheckCircle2 aria-hidden="true" />{item}</p>)}</div>
        </section>

        <section className="technical-blog-sources">
          <h2>Primary European references</h2>
          <p>Use the current official text and your organisation&apos;s regulatory assessment when applying these references.</p>
          <div>{article.sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noreferrer">{source.label}<ExternalLink aria-hidden="true" /></a>)}</div>
        </section>

        <div className="technical-blog-actions">
          {article.productLinks.map((item, index) => <Link key={item.href} href={item.href} className={index === 0 ? "btn-fill" : "btn-line"}>{item.label}<ArrowRight aria-hidden="true" /></Link>)}
        </div>
      </article>
    </div>
  );
}
