import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryInfo, getAllIndustrySlugs, getIndustryNavItems } from "@/data/industries";
import { PAGE_BACKGROUNDS } from "@/data/backgrounds";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";

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
      <SectionBreadcrumb items={[{ label: "Industries", href: "/industries" }, { label: info.name }]} />
      <EditorialPageHero eyebrow="Industry" title={info.name} description={info.description} image={PAGE_BACKGROUNDS[slug]} imageAlt={info.name} />

      <section className="py-16 md:py-20">
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
