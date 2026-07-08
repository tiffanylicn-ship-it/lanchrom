import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMarketInfo, getAllMarketSlugs } from "@/data/markets";
import { getCategoryInfo } from "@/data/categories";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllMarketSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getMarketInfo(slug);
  if (!info) return { title: "Not Found | LANCHROM™" };
  return {
    title: info.seoTitle,
    description: info.seoDescription,
    alternates: { canonical: `https://www.lanchrom.com/markets/${slug}` },
  };
}

export default async function MarketPage({ params }: Props) {
  const { slug } = await params;
  const info = getMarketInfo(slug);
  if (!info) notFound();

  const hasLogistics = info.shippingLeadTimeSea || info.shippingLeadTimeAir || (info.shippingPorts?.length ?? 0) > 0;
  const hasIncoterms = (info.incoterms?.length ?? 0) > 0;
  const hasCerts = (info.importCertifications?.length ?? 0) > 0;
  const hasCommercial = info.minimumOrderValue || (info.paymentTerms?.length ?? 0) > 0;

  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/markets" className="hover:text-[#3C6E71]">Markets</Link> {" › "}
          <span className="text-[#5C5A55]">{info.countryName}</span>
        </div>
      </div>

      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">{info.region}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">HPLC Solvent Supplier — {info.countryName}</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.description}</p>
          <div className="mt-7 flex gap-3 flex-wrap">
            <Link href="/contact?type=quote" className="btn-fill">Request a Quote</Link>
            <Link href="/contact?type=sample" className="btn-line">Get Free Sample</Link>
          </div>
        </div>
      </section>

      {/* Logistics & shipping — only renders fields that have been confirmed */}
      <section className="py-14 border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Shipping &amp; Logistics</h2>
          {hasLogistics || hasIncoterms ? (
            <>
            <div className="grid sm:grid-cols-3 gap-6">
              {info.shippingPorts && info.shippingPorts.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Origin Ports (China)</p>
                  <p className="text-[#2B2A28] text-sm">{info.shippingPorts.join(", ")}</p>
                </div>
              )}
              {info.shippingLeadTimeSea && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Sea Freight</p>
                  <p className="text-[#2B2A28] text-sm">{info.shippingLeadTimeSea}</p>
                </div>
              )}
              {info.shippingLeadTimeAir && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Air Freight</p>
                  <p className="text-[#2B2A28] text-sm">{info.shippingLeadTimeAir}</p>
                </div>
              )}
              {hasIncoterms && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Incoterms Supported</p>
                  <p className="text-[#2B2A28] text-sm">{info.incoterms!.join(", ")}</p>
                </div>
              )}
            </div>
            {info.hazmatExportNotes && (
              <div className="mt-8 pt-6 border-t border-[#EFEDE8]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Hazmat / Dangerous Goods Export</p>
                <p className="text-[#2B2A28] text-sm leading-relaxed max-w-2xl">{info.hazmatExportNotes}</p>
              </div>
            )}
            </>
          ) : (
            <p className="text-[#8A8782] text-sm">
              Shipping routes and lead times to {info.countryName} depend on order volume and destination port.{" "}
              <Link href="/contact" className="text-[#3C6E71] font-semibold hover:underline">Contact us</Link> for current transit times.
            </p>
          )}
        </div>
      </section>

      {/* Certifications & import documentation */}
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Certifications &amp; Import Documentation</h2>
          {hasCerts ? (
            <ul className="grid sm:grid-cols-2 gap-3">
              {info.importCertifications!.map(cert => (
                <li key={cert} className="flex items-start gap-2.5 text-sm text-[#2B2A28]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3C6E71] mt-1.5 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[#8A8782] text-sm">
              We provide CoA, MSDS/SDS, and Certificate of Origin with every shipment.{" "}
              <Link href="/contact" className="text-[#3C6E71] font-semibold hover:underline">Contact us</Link> to confirm
              specific import documentation required for {info.countryName}.
            </p>
          )}
        </div>
      </section>

      {/* Commercial terms */}
      <section className="py-14 border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Order Terms</h2>
          {hasCommercial ? (
            <div className="grid sm:grid-cols-2 gap-6">
              {info.minimumOrderValue && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Minimum Order</p>
                  <p className="text-[#2B2A28] text-sm">{info.minimumOrderValue}</p>
                </div>
              )}
              {info.paymentTerms && info.paymentTerms.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Payment Terms</p>
                  <p className="text-[#2B2A28] text-sm">{info.paymentTerms.join(" · ")}</p>
                </div>
              )}
            </div>
          ) : (
            <p className="text-[#8A8782] text-sm">
              Minimum order quantity and payment terms depend on your product mix, packaging, and shipping method —
              send us an inquiry and we'll respond with the best shipping plan and order structure for {info.countryName}.{" "}
              <Link href="/contact?type=quote" className="text-[#3C6E71] font-semibold hover:underline">Request a quote</Link> to get started.
            </p>
          )}
        </div>
      </section>

      {/* Customer reference — only shown once a real (even anonymized) example is provided */}
      {info.caseReference && (
        <section className="py-10 bg-[#FBFAF8] border-b border-[#E6E3DD]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-wider text-[#8A8782] mb-2">Customer Reference</p>
            <p className="text-[#2B2A28] text-sm max-w-2xl leading-relaxed">{info.caseReference}</p>
          </div>
        </section>
      )}

      {/* Relevant products */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Popular Categories for {info.countryName}</h2>
          <div className="flex flex-wrap gap-3 mb-10">
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
          <div className="flex gap-3 flex-wrap">
            <Link href="/contact?type=sample" className="btn-fill">Get free sample</Link>
            <Link href="/products" className="btn-line">Browse all products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
