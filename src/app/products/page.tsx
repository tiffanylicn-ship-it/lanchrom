import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CATEGORIES, getCategoriesByGroup, GROUP_LABELS } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import ProductSidebar from "@/components/product/ProductSidebar";

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
      {/* Hero with product solutions background */}
      <section className="relative overflow-hidden min-h-[460px] flex items-center bg-[#F7FAFC]">
        <div className="absolute inset-0">
          <Image src="/images/backgrounds/product-solutions.png" alt="LANCHROM product solutions" fill priority className="object-contain object-right p-0 md:p-2" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 w-full">
          <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#0E918C] mb-3">Product Catalog</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            8 Product Lines - {totalCategories} Categories - {totalProducts}+ SKUs
          </h1>
          <p className="text-[#334155] text-lg max-w-2xl leading-relaxed">
            From pharmaceutical-grade solvents to ready-to-use mobile phase bags, certified reference
            standards, and chromatography consumables - organized into 8 focused product lines.
          </p>
        </div>
      </section>

      {/* Main content with sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <ProductSidebar />
        <div className="flex-1 min-w-0 py-10">
          {GROUP_ORDER.map((groupKey, idx) => {
            const categories = getCategoriesByGroup(groupKey);
            if (categories.length === 0) return null;
            const info = GROUP_LABELS[groupKey];
            const color = LINE_COLORS[groupKey] || "#3C6E71";

            return (
              <div key={groupKey} className={`${idx > 0 ? "mt-10 pt-8 border-t border-[#E6E3DD]" : ""}`} id={groupKey}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                  <Link href={`/products/line/${groupKey}`} className="group">
                    <h2 className="text-lg font-bold transition-colors group-hover:opacity-80" style={{ color }}>{info.label}</h2>
                  </Link>
                </div>
                <p className="text-[#5C5A55] text-sm mb-5 ml-[18px]">{info.tagline}</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {categories.map(cat => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
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

      <section className="py-12 bg-[#F5F4F0] border-t border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
