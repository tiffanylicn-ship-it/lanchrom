import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryInfo, getAllIndustrySlugs, getIndustryNavItems } from "@/data/industries";
import Image from "next/image";
import { PAGE_BACKGROUNDS } from "@/data/backgrounds";
import SectionSidebar from "@/components/layout/SectionSidebar";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllIndustrySlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getIndustryInfo(slug);
  if (!info) return { title: "Not Found | LANCHROM" };
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

      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        {PAGE_BACKGROUNDS[slug] && (
          <>
            <Image
              src={PAGE_BACKGROUNDS[slug]}
              alt={info.name}
              fill
              sizes="100vw"
              className="object-contain object-right p-0 md:p-2"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
          </>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">Industry</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">{info.name}</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          <SectionSidebar title="Industries" baseHref="/industries" items={getIndustryNavItems()} accent="#3C6E71" />
          <div className="flex-1 min-w-0">
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
        </div>
      </section>
    </div>
  );
}
