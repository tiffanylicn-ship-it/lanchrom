import Link from "next/link";
import { getCategoriesByGroup, GROUP_LABELS } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import {
  getCategoryPath,
  type ProductLinePageInfo,
} from "@/data/product-line-pages";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import ProductSidebar from "./ProductSidebar";

interface ProductLineOverviewProps {
  line: ProductLinePageInfo;
}

export default function ProductLineOverview({ line }: ProductLineOverviewProps) {
  const info = GROUP_LABELS[line.group];
  const categories = getCategoriesByGroup(line.group);

  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[{ label: "Products", href: "/products" }, { label: info.label }]} />

      <EditorialPageHero
        eyebrow="Product Line"
        title={info.label}
        description={info.tagline}
        image={line.image}
        imageAlt={line.imageAlt}
      />

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <ProductSidebar />
        <main className="min-w-0 flex-1">
          <div className="space-y-10">
            {categories.map((category) => {
              const products = getProductsByCategory(category.slug);
              const categoryPath = getCategoryPath(category);

              return (
                <section key={category.slug} className="border-b border-[#E6E3DD] pb-10 last:border-0 last:pb-0">
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                    <Link href={categoryPath} className="group min-w-0">
                      <h2 className="text-xl font-bold text-[#2B2A28] transition-colors group-hover:text-[#3C6E71]">
                        {category.name}
                        <span className="ml-2 text-sm font-normal text-[#8A8782]">({products.length} products)</span>
                      </h2>
                    </Link>
                    <Link href={categoryPath} className="text-xs font-semibold text-[#3C6E71] hover:underline">
                      View category &rarr;
                    </Link>
                  </div>
                  <p className="mb-5 max-w-3xl text-sm leading-7 text-[#5C5A55]">{category.description}</p>

                  {products.length > 0 ? (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {products.slice(0, 6).map((product) => (
                        <Link
                          key={`${product.category}-${product.slug}`}
                          href={`/products/${product.category}/${product.slug}`}
                          className="block rounded-lg border border-[#EFEDE8] p-4 transition-colors hover:border-[#C9DBD9]"
                        >
                          <h3 className="mb-0.5 text-sm font-semibold text-[#2B2A28]">{product.name}</h3>
                          {product.cas && <p className="font-mono text-[10px] text-[#8A8782]">CAS: {product.cas}</p>}
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
                </section>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
