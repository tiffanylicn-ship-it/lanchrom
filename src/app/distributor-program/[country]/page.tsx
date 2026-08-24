import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  DISTRIBUTOR_MARKETS,
  getDistributorMarket,
  getDistributorMarketSlugs,
} from "@/data/distributor-program";

interface Props {
  params: Promise<{ country: string }>;
}

const defaultBuyerExpectations = [
  "Representative specifications and documents before customer qualification",
  "Responsive quotation, sample and technical follow-up",
  "Traceable order, batch and complaint communication",
  "Reliable local stock and delivery planning",
];

const defaultPartnerRequirements = [
  "Established relationships with analytical, pharmaceutical or industrial laboratories",
  "Capability to manage responsible local storage, documentation and delivery",
  "Technical sales coverage for product selection and qualification follow-up",
  "A territory plan covering target accounts, launch products and inventory",
];

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
    keywords: [market.primaryKeyword],
    alternates: { canonical: `https://www.lanchrom.com${market.url}` },
    openGraph: {
      title: market.seoTitle,
      description: market.metaDescription,
      url: `https://www.lanchrom.com${market.url}`,
      type: "website",
    },
    other: { "page-type": market.pageType, "primary-keyword": market.primaryKeyword },
  };
}

export default async function DistributorMarketPage({ params }: Props) {
  const { country } = await params;
  const market = getDistributorMarket(country);
  if (!market) notFound();

  const applicationHref = `/distributor-program/apply?territory=${encodeURIComponent(market.country)}`;
  const relatedMarkets = DISTRIBUTOR_MARKETS
    .filter(item => item.slug !== market.slug && item.marketGroup === market.marketGroup)
    .slice(0, 8);
  const buyerExpectations = market.buyerExpectations ?? defaultBuyerExpectations;
  const partnerRequirements = market.partnerRequirements ?? defaultPartnerRequirements;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: market.h1,
    description: market.metaDescription,
    provider: { "@type": "Organization", name: "LANCHROM", url: "https://www.lanchrom.com" },
    areaServed: market.country,
    serviceType: "Laboratory chemical distributor partnership program",
    url: `https://www.lanchrom.com${market.url}`,
  };

  return (
    <main className="bg-white text-[#183A35]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div className="border-b border-[#DCE8E3] bg-[#F7FAF8]">
        <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-[#6A7C76] sm:px-6 lg:px-8">
          <Link href="/distributor-program" className="font-semibold text-[#0A514C] hover:text-[#0E918C]">Distributor Program</Link>
          <span className="mx-2">/</span>{market.country}
        </div>
      </div>

      <section className="relative min-h-[540px] overflow-hidden border-b border-[#C9DBD3] bg-[#062C32]">
        <Image src="/images/hero/product-solutions.png" alt={`LANCHROM analytical solvent distribution opportunity for ${market.country}`} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,40,45,0.98)_0%,rgba(7,66,67,0.94)_52%,rgba(7,66,67,0.58)_76%,rgba(7,66,67,0.35)_100%)]" />
        <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#83DECA]">{market.region} · {market.isRegionalHub ? "regional partner hub" : "distributor opportunity"}</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] !text-white md:text-6xl">{market.h1}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D5EAE5] md:text-lg">{market.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={applicationHref} className="rounded-md bg-[#3FAE7A] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#318E64]">Apply for {market.country}</Link>
              <Link href="/downloads" className="rounded-md border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20">Review Documentation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DCE8E3] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Market opportunity</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">A focused route to qualified accounts</h2>
            <p className="mt-5 text-sm leading-7 text-[#60736D]">{market.marketOpportunity ?? "We support a local-partner model for account development, qualification documents, quotation follow-up and repeat supply."}</p>
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

      <section className="bg-[#F3F8F5] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Buyer expectations</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0A302E]">What the local channel must deliver</h2>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-[#61736D]">
                {buyerExpectations.map(item => (
                  <li key={item} className="flex gap-3 border-b border-[#D7E5DF] pb-4">
                    <span className="font-bold text-[#0E918C]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Partner profile</p>
              <h2 className="mt-3 text-2xl font-extrabold text-[#0A302E]">What makes a strong partner</h2>
              <ul className="mt-7 space-y-4 text-sm leading-6 text-[#61736D]">
                {partnerRequirements.map(item => (
                  <li key={item} className="flex gap-3 border-b border-[#D7E5DF] pb-4">
                    <span className="font-bold text-[#0E918C]">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {market.regulatoryContext && (
        <section className="border-y border-[#DCE8E3] bg-white py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Compliance readiness</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">Plan responsibilities before launch</h2>
            </div>
            <div className="border-l-4 border-[#3FAE7A] bg-[#F4F9F7] p-6 md:p-8">
              <p className="text-sm leading-7 text-[#536A63]">{market.regulatoryContext}</p>
              {market.officialResources && market.officialResources.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {market.officialResources.map(resource => (
                    <a key={resource.href} href={resource.href} target="_blank" rel="noreferrer" className="rounded-md border border-[#BFD6CD] bg-white px-4 py-2.5 text-xs font-bold text-[#0A514C] hover:border-[#0E918C]">{resource.label} ↗</a>
                  ))}
                </div>
              )}
              <p className="mt-6 text-xs leading-5 text-[#71847E]">This page supports commercial planning and is not a certification or legal opinion. Product and territory requirements must be verified before supply.</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F3F8F5] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A302E]">Related products and capabilities</h2>
              <p className="mt-4 text-sm leading-7 text-[#60736D]">Use these pages to review the initial product and service scope before submitting your company profile.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {market.internalLinks.map(link => (
                  <Link key={link.href} href={link.href} className="border border-[#C9DBD3] bg-white px-4 py-3 text-sm font-bold text-[#0A514C] hover:border-[#0E918C] hover:text-[#0E918C]">{link.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A302E]">Other {market.marketGroup} opportunities</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {relatedMarkets.map(item => (
                  <Link key={item.slug} href={item.url} className="group border border-[#C9DBD3] bg-white p-4 hover:border-[#0E918C]">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#70847E]">{item.region}</span>
                    <span className="mt-1 block text-sm font-bold text-[#0A514C] group-hover:text-[#0E918C]">{item.country} →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-[#0A514C] px-6 py-8 text-white md:flex md:items-center md:justify-between md:px-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9FE2D2]">Next step</p>
              <h2 className="mt-2 text-2xl font-extrabold">Tell us how you cover {market.country}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#D3E9E3]">Share your customer base, technical team, import capability, warehousing and launch plan. Commercial terms are reviewed only after qualification.</p>
            </div>
            <Link href={applicationHref} className="mt-6 inline-flex shrink-0 rounded-md bg-[#3FAE7A] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#318E64] md:ml-8 md:mt-0">Apply for Distribution</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
