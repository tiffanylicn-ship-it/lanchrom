import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FlaskConical } from "lucide-react";
import { getProductBySlug, getRelatedProducts, PRODUCTS } from "@/data/products";
import { getCategoryInfo, GROUP_LABELS } from "@/data/categories";
import {
  getNestedCategoryStaticParams,
  getProductLineBySlug,
  getProductLinePath,
} from "@/data/product-line-pages";
import ProductStickyPanel from "@/components/product/ProductStickyPanel";
import ProductCategoryOverview from "@/components/product/ProductCategoryOverview";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...PRODUCTS.map(p => ({ category: p.category, slug: p.slug })),
    ...getNestedCategoryStaticParams(),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const line = getProductLineBySlug(category);
  const nestedCategory = getCategoryInfo(slug);

  if (line && nestedCategory?.group === line.group) {
    return {
      title: nestedCategory.seoTitle,
      description: nestedCategory.seoDescription,
      alternates: { canonical: `https://www.lanchrom.com/products/${line.slug}/${nestedCategory.slug}` },
    };
  }

  const product = getProductBySlug(slug, category);
  if (!product) return { title: "Product Not Found | LANCHROM™" };
  return {
    title: product.seoTitle || `${product.name} | LANCHROM™`,
    description: product.seoDescription || product.shortDescription,
    alternates: { canonical: `https://www.lanchrom.com/products/${category}/${slug}` },
  };
}

const GRADE_LABELS: Record<string, string> = {
  hplc: "HPLC Grade", "hplc-gradient": "HPLC Gradient", lcms: "LC-MS Grade", uplc: "UPLC Grade",
  gc: "GC Grade", spectroscopic: "Spectroscopic", anhydrous: "Anhydrous", prep: "Prep Grade",
  "pharma-usp": "USP Grade", "pharma-ep": "EP Grade", electronic: "Electronic Grade",
  "food-grade": "Food Grade", "kosher-halal": "Kosher/Halal",
};

const PHYSICAL_PROPERTY_ROWS: { key: keyof NonNullable<import("@/types").Product["physicalProperties"]>; label: string }[] = [
  { key: "appearance", label: "Appearance" },
  { key: "odor", label: "Odor" },
  { key: "density", label: "Density" },
  { key: "refractiveIndex", label: "Refractive Index" },
  { key: "boilingPoint", label: "Boiling Point" },
  { key: "meltingPoint", label: "Melting Point" },
  { key: "flashPoint", label: "Flash Point" },
  { key: "pH", label: "pH" },
  { key: "solubility", label: "Solubility" },
  { key: "storageConditions", label: "Storage Conditions" },
  { key: "shelfLife", label: "Shelf Life" },
];

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const line = getProductLineBySlug(category);
  const nestedCategory = getCategoryInfo(slug);
  if (line && nestedCategory?.group === line.group) {
    return <ProductCategoryOverview info={nestedCategory} />;
  }

  const product = getProductBySlug(slug, category);
  if (!product) notFound();

  const categoryInfo = getCategoryInfo(category);
  const related = getRelatedProducts(product, 4);

  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[
        { label: "Products", href: "/products" },
        ...(categoryInfo ? [{ label: GROUP_LABELS[categoryInfo.group].label, href: getProductLinePath(categoryInfo.group) }] : []),
        { label: categoryInfo?.name || category, href: categoryInfo ? `${getProductLinePath(categoryInfo.group)}/${categoryInfo.slug}` : `/products/${category}` },
        { label: product.name },
      ]} />

      <EditorialPageHero
        eyebrow={categoryInfo?.shortName || "Product"}
        title={product.name}
        description={product.shortDescription || `Technical specifications, documentation, and packaging options for ${product.name}.`}
        image={categoryInfo?.bannerImage}
        imageAlt={categoryInfo?.name || product.name}
      >
        <div className="flex flex-wrap items-center gap-2 text-sm text-[#42615A]">
          {(product.grades ?? []).map(g => (
            <span key={g} className="rounded-full bg-white/75 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#0A514C]">
              {GRADE_LABELS[g] || g}
            </span>
          ))}
          {product.cas && <span className="ml-1 font-mono">CAS: {product.cas}</span>}
        </div>
      </EditorialPageHero>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">
            {/* Main content */}
            <div>
              <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[#8A8782] mb-6 font-mono">
                {product.cas && <span>CAS: {product.cas}</span>}
                {product.formula && <span>{product.formula}</span>}
                {product.mw && <span>MW: {product.mw}</span>}
                {!product.isHazmat && <span className="font-sans font-bold text-[#B5654A]">Non-Hazmat</span>}
              </div>

              {/* Product image */}
              <div className="mb-12">
                {product.image ? (
                  <div className="flex justify-center bg-[#FBFAF8] rounded-xl border border-[#E6E3DD] p-6">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={520}
                      className="max-h-[400px] w-auto object-contain"
                    />
                  </div>
                ) : product.images && product.images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {product.images.map((src, i) => (
                      <div key={src} className="relative aspect-square rounded-xl border border-[#E6E3DD] overflow-hidden bg-[#FBFAF8]">
                        <Image
                          src={src}
                          alt={`${product.name} — photo ${i + 1}`}
                          fill
                          sizes="(min-width: 640px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[16/7] rounded-xl border border-dashed border-[#D9D6CF] bg-[#FBFAF8] flex flex-col items-center justify-center gap-2">
                    <FlaskConical className="w-7 h-7 text-[#C9DBD9]" />
                    <p className="text-[#8A8782] text-xs font-medium">Product photography coming soon</p>
                  </div>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Technical Specifications</h2>
                <table className="w-full border-collapse">
                  <tbody>
                    {(product.specifications ?? []).map((spec, i) => (
                      <tr key={spec.parameter} className={i % 2 === 0 ? "bg-[#FBFAF8]" : ""}>
                        <td className="py-3 px-4 text-sm font-semibold text-[#2B2A28] border-b border-[#EFEDE8] w-1/2">{spec.parameter}</td>
                        <td className="py-3 px-4 text-sm text-[#5C5A55] border-b border-[#EFEDE8]">
                          {spec.value}
                          {spec.testMethod && <span className="text-[#8A8782] text-xs ml-2">({spec.testMethod})</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Physical / chemical properties — general reference data,
                  shown only when present so older product entries without
                  this data don't render an empty section. */}
              {product.physicalProperties && Object.values(product.physicalProperties).some(Boolean) && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Physical &amp; Chemical Properties</h2>
                  <table className="w-full border-collapse">
                    <tbody>
                      {PHYSICAL_PROPERTY_ROWS.filter(row => product.physicalProperties?.[row.key]).map((row, i) => (
                        <tr key={row.key} className={i % 2 === 0 ? "bg-[#FBFAF8]" : ""}>
                          <td className="py-3 px-4 text-sm font-semibold text-[#2B2A28] border-b border-[#EFEDE8] w-1/2">{row.label}</td>
                          <td className="py-3 px-4 text-sm text-[#5C5A55] border-b border-[#EFEDE8]">{product.physicalProperties?.[row.key]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Applications */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Applications</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(product.applications ?? []).map(app => (
                    <div key={app} className="flex items-start gap-3 p-3.5 border border-[#EFEDE8] rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3C6E71] mt-2 flex-shrink-0" />
                      <p className="text-sm text-[#5C5A55]">{app}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping info */}
              <div className="mb-12">
                <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Shipping &amp; Compliance</h2>
                <div className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-xl p-5 grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#8A8782] text-xs font-semibold uppercase tracking-wide mb-1">Hazmat Classification</p>
                    <p className="text-[#2B2A28] font-medium">{product.isHazmat ? `${product.unNumber} · ${product.hazmatClass}` : "Not regulated — non-hazmat"}</p>
                  </div>
                  {product.ichClass && product.ichClass !== "not-applicable" && (
                    <div>
                      <p className="text-[#8A8782] text-xs font-semibold uppercase tracking-wide mb-1">ICH Q3C Class</p>
                      <p className="text-[#2B2A28] font-medium">Class {product.ichClass} {product.pde && `· PDE ${product.pde}`}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Related products */}
              {related.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Related Products</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {related.map(r => (
                      <Link key={r._id} href={`/products/${r.category}/${r.slug}`} className="block p-4 border border-[#EFEDE8] rounded-lg hover:border-[#C9DBD9] transition-colors">
                        <h3 className="font-semibold text-[#2B2A28] text-sm mb-1">{r.name}</h3>
                        <p className="text-[#8A8782] text-xs line-clamp-2">{r.shortDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky sidebar */}
            <div>
              <ProductStickyPanel product={product} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
