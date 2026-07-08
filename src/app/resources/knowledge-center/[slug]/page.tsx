import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getKnowledgeArticle, getAllKnowledgeArticleSlugs, KNOWLEDGE_ARTICLES } from "@/data/knowledge-articles";
import { KNOWLEDGE_BATCH3 } from "@/data/knowledge-articles-batch3";
import { KNOWLEDGE_BATCH4 } from "@/data/knowledge-articles-batch4";
import { getCategoryInfo } from "@/data/categories";
import type { ContentBlock } from "@/data/knowledge-articles";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllKnowledgeArticleSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) return { title: "Not Found | LANCHROM™" };
  return {
    title: `${article.title} | LANCHROM™`,
    description: article.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com/resources/knowledge-center/${slug}` },
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">{block.text}</p>;
    case "h2":
      return <h2 className="text-xl font-bold text-[#2B2A28] mt-10 mb-4">{block.text}</h2>;
    case "list":
      return (
        <ul className="space-y-2.5 mb-6">
          {block.items.map(item => (
            <li key={item} className="flex items-start gap-2.5 text-[#3D3B37] text-[0.98rem] leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3C6E71] mt-2.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div className="my-7 px-5 py-4 rounded-xl bg-[#FBFAF8] border-l-2 border-[#B5654A]">
          <p className="text-xs font-bold uppercase tracking-wider text-[#B5654A] mb-1.5">{block.title}</p>
          <p className="text-[#5C5A55] text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "product-links":
      return (
        <div className="my-8 flex flex-wrap gap-3">
          {block.categories.map(slug => {
            const cat = getCategoryInfo(slug);
            if (!cat) return null;
            return (
              <Link
                key={slug}
                href={`/products/${slug}`}
                className="px-4 py-2 rounded-full text-sm font-medium border border-[#E6E3DD] text-[#3C6E71] hover:border-[#3C6E71] hover:bg-[#FBFAF8] transition-colors"
              >
                {cat.name} →
              </Link>
            );
          })}
        </div>
      );
  }
}

const CATEGORY_LABELS: Record<string, string> = {
  definitions: "Definitions",
  grades: "Solvent Grades",
  compliance: "Compliance & Documentation",
  technique: "Technique",
  "mobile-phase": "Mobile Phase",
  "selection-guides": "Selection Guides",
};

export default async function KnowledgeArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getKnowledgeArticle(slug);
  if (!article) notFound();

  const related = (article.relatedArticles ?? [])
    .map(s => KNOWLEDGE_ARTICLES[s] ?? KNOWLEDGE_BATCH3[s] ?? KNOWLEDGE_BATCH4[s])
    .filter(Boolean);

  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/resources/knowledge-center" className="hover:text-[#3C6E71]">Knowledge Center</Link> {" › "}
          <span className="text-[#5C5A55]">{article.h1}</span>
        </div>
      </div>

      <section className="py-12 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">{CATEGORY_LABELS[article.category]}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28]">{article.h1}</h1>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {article.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] flex gap-3 flex-wrap">
            <Link href="/contact?type=sample" className="btn-fill">Get Free Sample</Link>
            <Link href="/resources/knowledge-center" className="btn-line">Browse Knowledge Center</Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-12 bg-[#FBFAF8] border-t border-[#E6E3DD]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-5">Related Articles</h2>
            <div className="space-y-3">
              {related.map(r => (
                <Link key={r.slug} href={`/resources/knowledge-center/${r.slug}`} className="group flex items-center justify-between py-3.5 px-4 bg-white border border-[#EFEDE8] rounded-xl hover:border-[#C9DBD9] transition-colors">
                  <span className="font-semibold text-[#2B2A28] text-sm group-hover:text-[#3C6E71] transition-colors">{r.h1}</span>
                  <span className="text-[#C9DBD9] group-hover:text-[#3C6E71] group-hover:translate-x-1 transition-all text-lg flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
