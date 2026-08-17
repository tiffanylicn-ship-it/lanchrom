import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TechnicalBlogArticle from "@/components/resources/TechnicalBlogArticle";
import { EUROPE_HPLC_ARTICLES, getEuropeHplcArticle } from "@/data/technical-blog-europe";

interface Props { params: Promise<{ slug: string }>; }

export function generateStaticParams() {
  return EUROPE_HPLC_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getEuropeHplcArticle(slug);
  if (!article) return { title: "Article Not Found | LANCHROM" };
  const url = `https://www.lanchrom.com/resources/blog/${article.slug}`;
  return {
    title: `${article.title} | LANCHROM™`,
    description: article.description,
    keywords: [article.primaryKeyword],
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.title, description: article.description, url },
  };
}

export default async function EuropeHplcTechnicalArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getEuropeHplcArticle(slug);
  if (!article) notFound();
  return <TechnicalBlogArticle article={article} />;
}
