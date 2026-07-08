import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryInfo, getAllIndustrySlugs } from "@/data/industries";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllIndustrySlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getIndustryInfo(slug);
  if (!info) return { title: "Not Found | LANCHROM™" };
  return {
    title: info.seoTitle,
    description: info.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const info = getIndustryInfo(slug);
  if (!info) notFound();

  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/industries" className="hover:text-[#3C6E71]">Industries</Link> {" › "}
          <span className="text-[#5C5A55]">{info.name}</span>
        </div>
      </div>

      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Industry</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">{info.name}</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Relevant Products</h2>
          <div className="flex flex-wrap gap-3">
            {info.products.map(p => (
              <span key={p} className="px-4 py-2 rounded-full text-sm font-medium border border-[#E6E3DD] text-[#5C5A55]">{p}</span>
            ))}
          </div>
          <div className="mt-10 flex gap-3">
            <Link href="/contact?type=sample" className="btn-fill">Get free sample</Link>
            <Link href="/products" className="btn-line">Browse all products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
