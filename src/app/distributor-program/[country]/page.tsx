import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DISTRIBUTOR_MARKETS, getDistributorMarket, getDistributorMarketSlugs } from "@/data/distributor-program";

interface Props { params: Promise<{ country: string }>; }

export function generateStaticParams() {
  return getDistributorMarketSlugs().map(country => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const market = getDistributorMarket(country);
  if (!market) return { title: "Distributor Market Not Found | LANCHROM" };
  return {
    title: market.seoTitle,
    description: market.metaDescription,
    keywords: [market.primaryKeyword, ...market.secondaryKeywords],
    alternates: { canonical: `https://www.lanchrom.com${market.url}` },
    other: { "page-type": market.pageType, "primary-keyword": market.primaryKeyword },
  };
}

export default async function DistributorMarketPage({ params }: Props) {
  const { country } = await params;
  const market = getDistributorMarket(country);
  if (!market) notFound();

  return (
    <main className="bg-white text-[#183A35]">
      <div className="border-b border-[#DCE8E3] bg-[#F7FAF8]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-[#6A7C76] sm:px-6 lg:px-8">
          <Link href="/distributor-program" className="font-semibold text-[#0A514C] hover:text-[#0E918C]">Distributor Program</Link>
          <span className="mx-2">/</span>{market.country}
        </div>
      </div>

      <section className="relative min-h-[440px] overflow-hidden border-b border-[#C9DBD3] bg-[#EAF4EF]">
        <Image src="/images/hero/product-solutions.png" alt={`LANCHROM analytical solvents for ${market.country}`} fill priority sizes="100vw" className="object-cover object-right" />
        <div className="absolute inset-y-0 left-0 w-[82%] bg-[linear-gradient(145deg,rgba(234,244,239,0.99),rgba(216,238,228,0.96))] [clip-path:polygon(0_0,78%_0,62%_100%,0_100%)]" />
        <div className="relative mx-auto flex min-h-[440px] max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">{market.region} distributor opportunity</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#0A302E] md:text-5xl">{market.h1}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#42615A]">{market.summary}</p>
            <Link href="/contact?type=quote" className="mt-7 inline-block rounded-md bg-[#0A514C] px-5 py-3 text-sm font-bold text-white hover:bg-[#083E3B]">Discuss {market.country} Distribution</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DCE8E3] py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Market focus</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">What customers need</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#60736D]">We support a local-partner model for account development, samples, technical documents, quotation follow-up and repeat supply.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {market.demand.map((item, index) => (
              <div key={item} className="border-l-2 border-[#0E918C] bg-[#F5F9F7] p-5">
                <span className="text-xs font-bold text-[#0E918C]">0{index + 1}</span>
                <h3 className="mt-2 text-base font-bold text-[#173C36]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8F5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A302E]">SEO page specification</h2>
              <dl className="mt-6 divide-y divide-[#D7E5DF] border-y border-[#D7E5DF] text-sm">
                {[ ["URL", market.url], ["SEO Title", market.seoTitle], ["Meta Description", market.metaDescription], ["H1", market.h1], ["Page Type", market.pageType], ["Primary Keyword", market.primaryKeyword], ["Secondary Keywords", market.secondaryKeywords.join(", ")] ].map(([label, value]) => (
                  <div key={label} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr]">
                    <dt className="font-bold text-[#3C5952]">{label}</dt><dd className="text-[#61736D]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A302E]">Related products and pages</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#60736D]">Internal links connect this country page with product, solution, OEM and export-market content.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {market.internalLinks.map(link => <Link key={link.href} href={link.href} className="border border-[#C9DBD3] bg-white px-4 py-3 text-sm font-bold text-[#0A514C] hover:border-[#0E918C] hover:text-[#0E918C]">{link.label}</Link>)}
              </div>
              <div className="mt-9 border-t border-[#C9DBD3] pt-7">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#70847E]">Other distributor markets</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {DISTRIBUTOR_MARKETS.filter(item => item.slug !== market.slug).map(item => <Link key={item.slug} href={item.url} className="text-sm font-bold text-[#0A514C] hover:text-[#0E918C]">{item.country}</Link>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
