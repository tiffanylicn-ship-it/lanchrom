import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, getRelatedProducts, PRODUCTS } from "@/data/products";
import { getCategoryInfo } from "@/data/categories";
import {
  getNestedCategoryStaticParams,
  getProductLineBySlug,
} from "@/data/product-line-pages";
import ProductCategoryOverview from "@/components/product/ProductCategoryOverview";
import ProductDetailExperience from "@/components/product/ProductDetailExperience";
import { isProductRedirectSource } from "@/data/product-redirects";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...PRODUCTS
      .filter((product) => !isProductRedirectSource(`/products/${product.category}/${product.slug}`))
      .map((product) => ({ category: product.category, slug: product.slug })),
    ...getNestedCategoryStaticParams(),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const line = getProductLineBySlug(category);
  const nestedCategory = getCategoryInfo(slug);

  if (line && nestedCategory?.group === line.group) {
    return {
      title: `${nestedCategory.name} | LANCHROM`,
      description: nestedCategory.seoDescription,
      keywords: [nestedCategory.name],
      alternates: { canonical: `https://www.lanchrom.com/products/${line.slug}/${nestedCategory.slug}` },
    };
  }

  const product = getProductBySlug(slug, category);
  if (!product) return { title: "Product Not Found | LANCHROM™" };
  return {
    title: `${product.keywords?.[0] || product.name} | LANCHROM™`,
    description: product.seoDescription || product.shortDescription,
    keywords: product.keywords?.slice(0, 1),
    alternates: { canonical: `https://www.lanchrom.com/products/${product.category}/${product.slug}` },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const line = getProductLineBySlug(category);
  const nestedCategory = getCategoryInfo(slug);

  if (line && nestedCategory?.group === line.group) {
    return <ProductCategoryOverview info={nestedCategory} />;
  }

  const product = getProductBySlug(slug, category);
  if (!product) notFound();

  return (
    <ProductDetailExperience
      product={product}
      categoryInfo={getCategoryInfo(product.category)}
      related={getRelatedProducts(product, 5)}
    />
  );
}
