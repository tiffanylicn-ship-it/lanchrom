import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, getCategorySectionsByGroup, GROUP_LABELS, PRODUCT_GROUP_ORDER } from "@/data/categories";
import { getProductsByCategory, PRODUCTS } from "@/data/products";
import { getCategoryPath, getProductLinePath } from "@/data/product-line-pages";
import ProductSidebar from "@/components/product/ProductSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import { getProductTheme, getProductThemeStyle } from "@/data/product-themes";

export const metadata: Metadata = {
  title: "Analytical Solvent Catalog | LANCHROM",
  description: "Explore LANCHROM analytical solvents organized by product line, grade and laboratory workflow.",
  keywords: ["analytical solvent catalog"],
  alternates: { canonical: "https://www.lanchrom.com/products" },
};

export default function ProductsIndexPage() {
  const totalProducts = PRODUCTS.length;
  const totalCategories = Object.keys(CATEGORIES).length;

  return (
    <div className="product-theme-page bg-white" style={getProductThemeStyle("analytical")}>
      <EditorialPageHero
        eyebrow="Product Catalog"
        title={`6 Product Lines - ${totalCategories} Categories - ${totalProducts}+ Products`}
        description="Find products by workflow, grade, or application across six clear product lines, with multi-grade chemicals consolidated into one technical page."
        image="/images/hero/oem-product-design-hplc-lcms.png"
        imageAlt="OEM product design, HPLC and LC-MS laboratory capabilities"
        theme="analytical"
        productLayout
      />

      {/* Main content with sidebar */}
      <div className="products-index-layout max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <ProductSidebar />
        <main className="products-index-content flex-1 min-w-0 py-16 md:py-20">
          {PRODUCT_GROUP_ORDER.map((groupKey) => {
            const sections = getCategorySectionsByGroup(groupKey);
            if (sections.length === 0) return null;
            const info = GROUP_LABELS[groupKey];
            const groupTheme = getProductTheme(groupKey);

            return (
              <section key={groupKey} className="products-index-group" id={groupKey} style={getProductThemeStyle(groupTheme)}>
                <div className="products-index-group-header">
                  <div>
                    <p>Product line</p>
                    <Link href={getProductLinePath(groupKey)}><h2>{info.label}</h2></Link>
                  </div>
                  <Link href={getProductLinePath(groupKey)} className="products-index-view-line">View product line <span aria-hidden="true">→</span></Link>
                </div>
                <p className="products-index-tagline">{info.tagline}</p>

                {sections.map((section) => (
                  <div key={section.slug} id={`${groupKey}-${section.slug}`} className="products-index-section">
                    <div className="products-index-section-heading">
                      <span>{section.name}</span>
                    </div>
                    <div className="products-index-category-grid">
                  {section.categories.map(cat => {
                    const isElectronicGrade = cat.slug === "electronic-semiconductor-grade-chemicals";
                    const categoryTheme = getProductTheme(groupKey, cat.slug);
                    const productCount = getProductsByCategory(cat.slug).length;
                    return (
                      <article
                        key={cat.slug}
                        className="products-index-category-card"
                        style={getProductThemeStyle(categoryTheme)}
                      >
                        <Link href={getCategoryPath(cat)} className="products-index-category-main">
                          <div className="products-index-category-meta">
                            <span>{cat.shortName}</span>
                            <small>{productCount} {productCount === 1 ? "product" : "products"}</small>
                          </div>
                          <h3>{cat.name}</h3>
                          <p>{cat.tagline}</p>
                          <span className="products-index-category-arrow" aria-hidden="true">→</span>
                        </Link>
                        {isElectronicGrade && (
                          <Link
                            href="/products/electronic-grade-ipa"
                            className="products-index-featured-product"
                          >
                            <span>
                              <small>Featured product</small>
                              <strong>Electronic Grade IPA</strong>
                            </span>
                            <span aria-hidden="true">→</span>
                          </Link>
                        )}
                      </article>
                    );
                  })}
                    </div>
                  </div>
                ))}
              </section>
            );
          })}
        </main>
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
