import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoriesByGroup, GROUP_LABELS, type CategoryInfo } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import ProductSidebar from "@/components/product/ProductSidebar";

const VALID_GROUPS = Object.keys(GROUP_LABELS);

interface Props {
  params: Promise<{ group: string }>;
}

export async function generateStaticParams() {
  return VALID_GROUPS.map(group => ({ group }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params;
  const info = GROUP_LABELS[group as keyof typeof GROUP_LABELS];
  if (!info) return { title: "Product Line Not Found | LANCHROM™" };
  return {
    title: `${info.label} | LANCHROM™ Product Catalog`,
    description: info.tagline,
    alternates: { canonical: `https://www.lanchrom.com/products/line/${group}` },
  };
}

export default async function ProductLinePage({ params }: Props) {
  const { group } = await params;
  const info = GROUP_LABELS[group as keyof typeof GROUP_LABELS];
  if (!info) notFound();

  const categories = getCategoriesByGroup(group as CategoryInfo["group"]);

  return (
    <div className="bg-white">
      <div className="sticky top-20 md:top-28 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-left text-[#8A8782]">
          <Link href="/products" className="hover:text-[#3C6E71]">Products</Link> {" › "}
          <span className="text-[#5C5A55] font-medium">{info.label}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <ProductSidebar />
        <div className="flex-1 min-w-0">
          <section className="py-12">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2B2A28] mb-2">{info.label}</h1>
            <p className="text-[#5C5A55] text-lg mb-10 max-w-2xl">{info.tagline}</p>

            <div className="space-y-10">
              {categories.map(cat => {
                const products = getProductsByCategory(cat.slug);
                return (
                  <div key={cat.slug}>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <Link href={`/products/${cat.slug}`} className="group">
                        <h2 className="text-lg font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors">
                          {cat.name}
                          <span className="text-[#8A8782] text-sm font-normal ml-2">({products.length} products)</span>
                        </h2>
                      </Link>
                      <Link href={`/products/${cat.slug}`} className="text-[#3C6E71] text-xs font-semibold hover:underline">
                        View all →
                      </Link>
                    </div>
                    <p className="text-[#8A8782] text-sm mb-4">{cat.tagline}</p>
                    {products.length > 0 && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {products.slice(0, 6).map(p => (
                          <Link key={p.slug} href={`/products/${p.category}/${p.slug}`} className="block p-4 rounded-lg border border-[#EFEDE8] hover:border-[#C9DBD9] transition-colors">
                            <h3 className="font-semibold text-[#2B2A28] text-sm mb-0.5">{p.name}</h3>
                            {p.cas && <p className="text-[#8A8782] text-[10px] font-mono">CAS: {p.cas}</p>}
                          </Link>
                        ))}
                        {products.length > 6 && (
                          <Link href={`/products/${cat.slug}`} className="flex items-center justify-center p-4 rounded-lg border border-dashed border-[#D9D6CF] text-[#3C6E71] text-sm font-semibold hover:bg-[#FBFAF8]">
                            +{products.length - 6} more →
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
