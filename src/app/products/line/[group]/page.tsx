import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GROUP_LABELS } from "@/data/categories";
import { getProductLineByGroup } from "@/data/product-line-pages";
import ProductLineOverview from "@/components/product/ProductLineOverview";

const VALID_GROUPS = Object.keys(GROUP_LABELS);

interface Props {
  params: Promise<{ group: string }>;
}

export async function generateStaticParams() {
  return VALID_GROUPS.map((group) => ({ group }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params;
  const line = getProductLineByGroup(group);
  if (!line) return { title: "Product Line Not Found | LANCHROM" };
  const info = GROUP_LABELS[line.group];
  return {
    title: `${info.label} | LANCHROM Product Catalog`,
    description: info.tagline,
    alternates: { canonical: `https://www.lanchrom.com/products/${line.slug}` },
  };
}

export default async function LegacyProductLinePage({ params }: Props) {
  const { group } = await params;
  const line = getProductLineByGroup(group);
  if (!line) notFound();
  return <ProductLineOverview line={line} />;
}
