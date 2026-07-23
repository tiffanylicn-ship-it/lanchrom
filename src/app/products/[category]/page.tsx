import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCategorySlugs, getCategoryInfo, GROUP_LABELS } from "@/data/categories";
import {
  getCategoryPath,
  getProductLineBySlug,
  getProductLineStaticParams,
} from "@/data/product-line-pages";
import ProductCategoryOverview from "@/components/product/ProductCategoryOverview";
import ProductLineOverview from "@/components/product/ProductLineOverview";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    ...getAllCategorySlugs().map((category) => ({ category })),
    ...getProductLineStaticParams(),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const line = getProductLineBySlug(category);

  if (line) {
    const info = GROUP_LABELS[line.group];
    return {
      title: `${info.label} | LANCHROM Product Catalog`,
      description: info.tagline,
      alternates: { canonical: `https://www.lanchrom.com/products/${line.slug}` },
    };
  }

  const info = getCategoryInfo(category);
  if (!info) return { title: "Category Not Found | LANCHROM" };
  return {
    title: info.seoTitle,
    description: info.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com${getCategoryPath(info)}` },
  };
}

export default async function ProductCategoryOrLinePage({ params }: Props) {
  const { category } = await params;
  const line = getProductLineBySlug(category);
  if (line) return <ProductLineOverview line={line} />;

  const info = getCategoryInfo(category);
  if (!info) notFound();
  return <ProductCategoryOverview info={info} />;
}
