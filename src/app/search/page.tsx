import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Product Search | LANCHROM™",
  description: "Search the LANCHROM product catalog by solvent, grade, product name, or application.",
  alternates: { canonical: "https://www.lanchrom.com/search" },
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const query = (resolvedSearchParams.q || "").trim().toLowerCase();
  const results = query
    ? PRODUCTS.filter(p => `${p.name} ${p.slug} ${p.shortDescription || ""}`.toLowerCase().includes(query)).slice(0, 50)
    : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#0A1628] mb-6">Search Products</h1>
      <form className="mb-8">
        <input name="q" defaultValue={resolvedSearchParams.q || ""} placeholder="Search solvent, grade, product..." className="w-full border rounded-lg px-4 py-3" />
      </form>
      {query && (
        <div className="grid md:grid-cols-2 gap-3">
          {results.map(product => (
            <Link key={product._id} href={`/products/${product.category}/${product.slug}`} className="border rounded-lg p-4 hover:border-[#0E918C]">
              <div className="font-bold text-[#0A1628]">{product.name}</div>
              <div className="text-sm text-[#64748B]">{product.shortDescription}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
