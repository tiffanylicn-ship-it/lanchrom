import Link from "next/link";
import { getProductsByCategory } from "@/data/products";
import type { CategoryInfo } from "@/data/categories";
import { GROUP_LABELS } from "@/data/categories";
import {
  getProductLineForCategory,
  getProductLinePath,
} from "@/data/product-line-pages";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import ProductSidebar from "./ProductSidebar";

interface ProductCategoryOverviewProps {
  info: CategoryInfo;
}

export default function ProductCategoryOverview({ info }: ProductCategoryOverviewProps) {
  const products = getProductsByCategory(info.slug);
  const line = getProductLineForCategory(info.slug);
  const groupInfo = GROUP_LABELS[info.group];

  return (
    <div className="bg-white">
      <SectionBreadcrumb
        items={[
          { label: "Products", href: "/products" },
          { label: groupInfo.label, href: getProductLinePath(info.group) },
          { label: info.name },
        ]}
      />

      <EditorialPageHero
        eyebrow={info.shortName}
        title={info.name}
        description={info.description}
        image={info.bannerImage || line?.image}
        imageAlt={info.name}
      />

      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <ProductSidebar />
        <main className="min-w-0 flex-1">
          {products.length === 0 ? (
            <div className="py-4">
              {info.comingSoonItems && info.comingSoonItems.length > 0 ? (
                <div className="max-w-2xl">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.06em] text-[#B5654A]">Coming soon to this category</p>
                  <p className="mb-6 text-sm leading-relaxed text-[#5C5A55]">
                    Full product pages for this line are in progress. Contact us for samples, specifications, or lead time on any item below.
                  </p>
                  <ul className="mb-8 space-y-2.5">
                    {info.comingSoonItems.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#2B2A28]">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#C9DBD9]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-fill inline-flex">Contact Sales for Availability</Link>
                </div>
              ) : (
                <div className="py-16 text-center">
                  <p className="text-[#8A8782]">Products in this category are being added. Contact us for current availability.</p>
                  <Link href="/contact" className="btn-fill mt-6 inline-flex">Contact Sales</Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={`${product.category}-${product.slug}`}
                  href={`/products/${product.category}/${product.slug}`}
                  className="card-flat p-5 transition-colors hover:border-[#C9DBD9]"
                >
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {(product.grades ?? []).slice(0, 2).map((grade) => (
                      <span key={grade} className="rounded-full bg-[#E8F0EF] px-2 py-0.5 text-[10px] font-bold uppercase text-[#2C5154]">
                        {grade}
                      </span>
                    ))}
                  </div>
                  <h2 className="mb-1 font-bold text-[#2B2A28]">{product.name}</h2>
                  {product.cas && <p className="mb-2 font-mono text-xs text-[#8A8782]">CAS: {product.cas}</p>}
                  <p className="line-clamp-2 text-sm text-[#5C5A55]">{product.shortDescription}</p>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
