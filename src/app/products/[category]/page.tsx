import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductsByCategory } from "@/data/products";
import { getCategoryInfo, getAllCategorySlugs } from "@/data/categories";
import ProductSidebar from "@/components/product/ProductSidebar";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllCategorySlugs().map(category => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const info = getCategoryInfo(category);
  if (!info) return { title: "Category Not Found | LANCHROM™" };
  return {
    title: info.seoTitle,
    description: info.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com/products/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const info = getCategoryInfo(category);
  if (!info) notFound();

  const products = getProductsByCategory(category);

  return (
    <div className="bg-white">
      <div className="sticky top-20 md:top-28 z-30 bg-white/95 backdrop-blur-sm border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-left text-[#8A8782]">
          <Link href="/products" className="hover:text-[#3C6E71]">Products</Link> {" › "}
          <span className="text-[#5C5A55] font-medium">{info.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <ProductSidebar />
        <div className="flex-1 min-w-0">

      <section className="py-12">
        <div>
          {info.bannerImage ? (
            <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
              <div>
                <p className="tag-line mb-3">{info.shortName}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">{info.name}</h1>
                <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E3DD]">
                <Image
                  src={info.bannerImage}
                  alt={info.name}
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2A28]/30 via-transparent to-transparent" />
              </div>
            </div>
          ) : (
            <>
              <p className="tag-line mb-3">{info.shortName}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">{info.name}</h1>
              <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
            </>
          )}
        </div>
      </section>

      <section className="py-12">
        <div>
          {products.length === 0 ? (
            <div className="py-4">
              {info.comingSoonItems && info.comingSoonItems.length > 0 ? (
                <div className="max-w-2xl">
                  <p className="text-xs font-bold tracking-[0.06em] uppercase text-[#B5654A] mb-3">Coming soon to this category</p>
                  <p className="text-[#5C5A55] text-sm mb-6 leading-relaxed">
                    Full product pages for this line are in progress. Here's what's planned — contact us for samples,
                    specifications, or lead time on any item below.
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {info.comingSoonItems.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#2B2A28]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C9DBD9] mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-fill inline-flex">Contact Sales for Availability</Link>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-[#8A8782]">Products in this category are being added. Contact us for current availability.</p>
                  <Link href="/contact" className="btn-fill inline-flex mt-6">Contact Sales</Link>
                </div>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map(p => (
                <Link key={p._id} href={`/products/${p.category}/${p.slug}`} className="card-flat p-5 hover:border-[#C9DBD9] transition-colors">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {(p.grades ?? []).slice(0, 2).map(g => (
                      <span key={g} className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#E8F0EF] text-[#2C5154]">{g}</span>
                    ))}
                  </div>
                  <h3 className="font-bold text-[#2B2A28] mb-1">{p.name}</h3>
                  {p.cas && <p className="text-[#8A8782] text-xs font-mono mb-2">CAS: {p.cas}</p>}
                  <p className="text-[#5C5A55] text-sm line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
        </div>{/* end flex-1 */}
      </div>{/* end flex container */}
    </div>
  );
}
