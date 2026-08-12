import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";
import { getCategoryInfo, GROUP_LABELS } from "@/data/categories";
import { getProductDocumentLinks } from "@/lib/product-documents";
import ProductDocumentLibrary from "./ProductDocumentLibrary";

export const metadata: Metadata = {
  title: "Product Documents | LANCHROM™",
  description: "Search and download LANCHROM product TDS and specification summaries, organized by product line, category, product name, and CAS number.",
  alternates: { canonical: "https://www.lanchrom.com/downloads" },
};

export default function DownloadsPage() {
  const rows = PRODUCTS.flatMap((product) => {
    const category = getCategoryInfo(product.category);
    const documents = getProductDocumentLinks(product);
    if (!documents) return [];
    return [{
      id: product._id || `${product.category}-${product.slug}`,
      name: product.name,
      cas: product.cas,
      category: product.category,
      categoryName: category?.name || product.category,
      productLine: category ? GROUP_LABELS[category.group].label : "High-Purity Chemicals",
      productHref: product._id === "electronic-ipa" ? "/products/electronic-grade-ipa" : `/products/${product.category}/${product.slug}`,
      tdsHref: documents.tds,
      specificationHref: documents.specification,
    }];
  }).sort((a, b) => a.productLine.localeCompare(b.productLine) || a.categoryName.localeCompare(b.categoryName) || a.name.localeCompare(b.name));

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="absolute inset-0">
          <Image src="/images/WEBPIC4.jpg" alt="LANCHROM analytical solvent documentation background" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-white/72" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="tag-line mb-3">Documentation</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#102A43] mb-3">Downloads</h1>
          <p className="text-[#334155] text-lg max-w-2xl">
            Search the priority product portfolio and directly download product-level TDS and specification summaries.
            Market-specific SDS files and batch-specific COA documents remain available on request.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { t: `${rows.length} Product TDS Files`, d: "Priority downloads for pharmaceutical-grade solvents, HPLC analytical solvents, and ready-to-use mobile phase bags." },
              { t: `${rows.length} Specification Summaries`, d: "Representative test items, grade scope, packaging, and release-document guidance for supplier qualification." },
              { t: "Controlled Documents", d: "Request the current destination-specific SDS, batch COA, or controlled grade specification from the product page." },
            ].map(item => (
              <div key={item.t} className="card-flat p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div><p className="tag-line mb-2">Document library</p><h2 className="text-2xl md:text-3xl font-bold text-[#102A43]">Browse by product</h2></div>
            <Link href="/products" className="btn-line inline-flex">View product catalog</Link>
          </div>
          <ProductDocumentLibrary rows={rows} />
        </div>
      </section>
    </div>
  );
}
