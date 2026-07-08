import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationInfo, getAllApplicationSlugs } from "@/data/applications";
import { getCategoryInfo } from "@/data/categories";
import { getIndustryInfo } from "@/data/industries";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllApplicationSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getApplicationInfo(slug);
  if (!info) return { title: "Not Found | LANCHROM™" };
  return {
    title: `${info.title} | LANCHROM™`,
    description: info.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com/applications/${slug}` },
  };
}

export default async function ApplicationPage({ params }: Props) {
  const { slug } = await params;
  const info = getApplicationInfo(slug);
  if (!info) notFound();

  const relatedIndustries = (info.relevantIndustries ?? [])
    .map(s => getIndustryInfo(s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/applications" className="hover:text-[#3C6E71]">Applications</Link> {" › "}
          <span className="text-[#5C5A55]">{info.h1}</span>
        </div>
      </div>

      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Application</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">{info.h1}</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <Link href="/contact?type=sample" className="btn-fill">Get Free Sample</Link>
            <Link href="/contact?type=quote" className="btn-line">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Relevant Products</h2>
          <div className="flex flex-wrap gap-3 mb-12">
            {info.relevantCategories.map(slug => {
              const cat = getCategoryInfo(slug);
              if (!cat) return null;
              return (
                <Link
                  key={slug}
                  href={`/products/${slug}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-[#E6E3DD] text-[#5C5A55] hover:border-[#3C6E71] hover:text-[#3C6E71] transition-colors"
                >
                  {cat.name}
                </Link>
              );
            })}
          </div>

          {relatedIndustries.length > 0 && (
            <>
              <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Common In These Industries</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {relatedIndustries.map(ind => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="px-4 py-2 rounded-full text-sm font-medium border border-[#E6E3DD] text-[#5C5A55] hover:border-[#B5654A] hover:text-[#B5654A] transition-colors"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="flex gap-3 flex-wrap">
            <Link href="/contact?type=sample" className="btn-fill">Get free sample</Link>
            <Link href="/products" className="btn-line">Browse all products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
