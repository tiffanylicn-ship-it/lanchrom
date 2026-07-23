import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, getCategoriesByGroup, GROUP_LABELS } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { getCategoryPath, getProductLinePath } from "@/data/product-line-pages";
import ProductSidebar from "@/components/product/ProductSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";

export const metadata: Metadata = {
  title: "Product Catalog | HPLC, LC-MS, GC Solvents & Reagents | LANCHROM",
  description: "Full catalog organized into 8 product lines — pharmaceutical solvents, analytical solvents, mobile phase bags, standards, reagent kits, consumables, life science, and excipients.",
  alternates: { canonical: "https://www.lanchrom.com/products" },
};

const GROUP_ORDER: (keyof typeof GROUP_LABELS)[] = [
  "pharma-solvents", "analytical-solvents", "mobile-phase", "standards",
  "reagent-kits", "consumables", "life-science", "excipients",
];

const LINE_COLORS: Record<string, string> = {
  "pharma-solvents": "#3C6E71", "analytical-solvents": "#2C7A7B",
  "mobile-phase": "#B5654A", "standards": "#4A7EAA",
  "reagent-kits": "#7B5EA7", "consumables": "#4A8B5C",
  "life-science": "#C4845F", "excipients": "#6B7280",
};

export default function ProductsIndexPage() {
  const totalProducts = PRODUCTS.length;
  const totalCategories = Object.keys(CATEGORIES).length;

  return (
    <div className="bg-white">
      <EditorialPageHero
        eyebrow="Product Catalog"
        title={`8 Product Lines - ${totalCategories} Categories - ${totalProducts}+ SKUs`}
        description="From pharmaceutical-grade solvents to ready-to-use mobile phase bags, certified reference standards, and chromatography consumables - organized into 8 focused product lines."
        image="/images/product-lines/factory2.png"
        imageAlt="LANCHROM solvent production and dispatch facility"
      />

      {/* Main content with sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <ProductSidebar />
        <div className="flex-1 min-w-0 py-16 md:py-20">
          {GROUP_ORDER.map((groupKey, idx) => {
            const categories = getCategoriesByGroup(groupKey);
            if (categories.length === 0) return null;
            const info = GROUP_LABELS[groupKey];
            const color = LINE_COLORS[groupKey] || "#3C6E71";

            return (
              <div key={groupKey} className={`${idx > 0 ? "mt-10 pt-8 border-t border-[#E6E3DD]" : ""}`} id={groupKey}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <Link href={getProductLinePath(groupKey)} className="group">
                    <h2 className="text-lg font-bold transition-colors group-hover:opacity-80" style={{ color }}>{info.label}</h2>
                  </Link>
                </div>
                <p className="text-[#5C5A55] text-sm mb-5 ml-[18px]">{info.tagline}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categories.map(cat => (
                    <Link
                      key={cat.slug}
                      href={getCategoryPath(cat)}
                      className="group block p-5 rounded-xl border border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all"
                    >
                      <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors mb-1">{cat.name}</h3>
                      <p className="text-[#8A8782] text-xs leading-relaxed">{cat.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="border-t border-[#DCE7E2] bg-[#F5FAF8]">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[420px]">
            <Image
              src="/images/product-lines/lanchrom-global-logistics.jpg"
              alt="Global solvent logistics and bulk chemical transport"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-center px-6 py-12 sm:px-10 lg:px-14">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Bulk Supply &amp; Global Logistics</p>
              <h2 className="mt-3 text-2xl font-bold text-[#173A35] md:text-3xl">From laboratory packs to production-scale supply</h2>
              <p className="mt-5 text-sm leading-7 text-[#526660] md:text-base">
                Product lines can be configured for laboratory bottles, drums, IBCs, and selected bulk programs. Documentation, hazardous-goods handling, and export coordination are aligned with the requested solvent grade and destination market.
              </p>
              <Link href="/contact?type=quote" className="btn-fill mt-7 inline-flex">Discuss Bulk Supply</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F5F4F0] border-t border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-3">Need something not listed?</h2>
          <p className="text-[#5C5A55] text-sm mb-5">Custom formulations, OEM packaging, and special grades available.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact?type=quote" className="btn-fill">Request a Quote</Link>
            <Link href="/oem" className="btn-line">OEM Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
