import Link from "next/link";
import { getCategorySectionsByGroup, GROUP_LABELS } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import {
  getCategoryPath,
  type ProductLinePageInfo,
} from "@/data/product-line-pages";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import ProductSidebar from "./ProductSidebar";
import { getProductTheme, getProductThemeStyle } from "@/data/product-themes";

interface ProductLineOverviewProps {
  line: ProductLinePageInfo;
}

export default function ProductLineOverview({ line }: ProductLineOverviewProps) {
  const info = GROUP_LABELS[line.group];
  const sections = getCategorySectionsByGroup(line.group);
  const lineTheme = getProductTheme(line.group);

  return (
    <div className="product-theme-page bg-white" style={getProductThemeStyle(lineTheme)}>
      <SectionBreadcrumb theme={lineTheme} items={[{ label: "Products", href: "/products" }, { label: info.label }]} />

      <EditorialPageHero
        eyebrow="Product Line"
        title={info.label}
        description={info.tagline}
        image={line.image}
        imageAlt={line.imageAlt}
        theme={lineTheme}
        productLayout
      />

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <ProductSidebar />
        <main className="min-w-0 flex-1">
          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.slug} id={section.slug} className="scroll-mt-44">
                <div className="mb-7 border-b border-[var(--product-theme-line)] pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--product-theme-accent)]">Browse by requirement</p>
                  <h2 className="mt-2 text-3xl font-bold text-[var(--product-theme-ink)]">{section.name}</h2>
                </div>
                <div className="space-y-10">
                {section.categories.map((category) => {
              const products = getProductsByCategory(category.slug);
              const categoryPath = getCategoryPath(category);
              const categoryTheme = getProductTheme(line.group, category.slug);

              return (
                <article key={category.slug} className="product-category-theme" style={getProductThemeStyle(categoryTheme)}>
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <Link href={categoryPath} className="group min-w-0">
                      <h2 className="text-2xl font-bold text-[#2B2A28] transition-colors group-hover:text-[var(--product-theme-primary)]">
                        {category.name}
                        <span className="ml-2 text-sm font-normal text-[#8A8782]">({products.length} products)</span>
                      </h2>
                    </Link>
                    <Link href={categoryPath} className="text-sm font-semibold text-[var(--product-theme-primary)] hover:underline">
                      View category &rarr;
                    </Link>
                  </div>
                  <p className="mb-6 max-w-3xl text-base leading-8 text-[#5C5A55]">{category.description}</p>

                  {products.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {products.slice(0, 6).map((product) => (
                        <Link
                          key={`${product.category}-${product.slug}`}
                          href={product._id === "electronic-ipa" ? "/products/electronic-grade-ipa" : `/products/${product.category}/${product.slug}`}
                          className="product-theme-card block rounded-lg border bg-white p-4 transition-all"
                        >
                          <h3 className="mb-1 text-base font-semibold text-[#2B2A28]">{product.name}</h3>
                          {product.cas && <p className="font-mono text-xs text-[#8A8782]">CAS: {product.cas}</p>}
                        </Link>
                      ))}
                      {products.length > 6 && (
                        <Link
                          href={categoryPath}
                          className="flex items-center justify-center rounded-lg border border-dashed border-[#D9D6CF] p-4 text-sm font-semibold text-[#3C6E71] hover:bg-[#FBFAF8]"
                        >
                          +{products.length - 6} more &rarr;
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div className="border-l-2 border-[#9BCBC1] pl-4 text-sm leading-7 text-[#667873]">
                      Product pages are being prepared. Contact sales for current specifications, samples, and lead time.
                    </div>
                  )}
                </article>
              );
                })}
                </div>
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
