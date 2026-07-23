import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getApplicationInfo, getAllApplicationSlugs, getApplicationNavItems } from "@/data/applications";
import { getCategoryInfo } from "@/data/categories";
import { getIndustryInfo } from "@/data/industries";
import { PAGE_BACKGROUNDS } from "@/data/backgrounds";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return getAllApplicationSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getApplicationInfo(slug);
  if (!info) return { title: "Not Found | LANCHROM" };
  return {
    title: `${info.title} | LANCHROM`,
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
  const showSolventScanLink = ["hplc-analysis", "lcms-analysis", "gradient-mobile-phase-optimization"].includes(slug);

  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[{ label: "Applications", href: "/applications" }, { label: info.h1 }]} />

      <EditorialPageHero
        eyebrow="Application"
        title={info.h1}
        description={info.description}
        image={PAGE_BACKGROUNDS[slug]}
        imageAlt={info.h1}
      >
        <Link href="/contact?type=sample" className="rounded-md bg-[#0A514C] px-5 py-3 text-sm font-bold text-white hover:bg-[#083E3B]">Get Free Sample</Link>
        <Link href="/contact?type=quote" className="rounded-md border border-[#7EA99F] bg-white/70 px-5 py-3 text-sm font-bold text-[#0A514C]">Request a Quote</Link>
      </EditorialPageHero>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
          <SectionSidebar title="Applications" baseHref="/applications" items={getApplicationNavItems()} accent="#3C6E71" />
          <div className="flex-1 min-w-0">
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

          <section className="mb-12 border-y border-[#DCE7E2] py-9" aria-labelledby="application-checklist-title">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E918C]">Method qualification</p>
            <h2 id="application-checklist-title" className="mt-2 text-2xl font-bold text-[#203D38]">Selection checklist for {info.h1}</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[#5C6E69]">
              Use the method requirement to define the solvent or reagent specification, then confirm performance with a representative sample and the current lot documentation.
            </p>
            <ol className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-2">
              {[
                ["01", "Define the detector risk", "Set acceptance criteria for UV absorbance, MS background, residue, trace metals or titration accuracy before comparing grades."],
                ["02", "Match preparation and container", "Confirm filtration, water control, closure compatibility and pack size for the actual workflow and consumption rate."],
                ["03", "Review lot-specific evidence", "Use the batch CoA and supporting blank or suitability data, not the product grade name alone."],
                ["04", "Run the method blank", "Qualify the lot using the same instrument, additives, column, source settings and acquisition window used for samples."],
              ].map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[2.25rem_1fr] gap-3">
                  <span className="font-extrabold text-[#0A514C]">{number}</span>
                  <div>
                    <h3 className="font-bold text-[#203D38]">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-[#63736F]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            {showSolventScanLink && (
              <Link href="/resources/blog/lcms-solvent-background-comparison" className="mt-7 inline-block border-b border-[#0A514C] pb-1 text-sm font-bold text-[#0A514C]">
                Review HPLC methanol and acetonitrile Q1 scan data
              </Link>
            )}
          </section>

          <div className="flex gap-3 flex-wrap">
            <Link href="/contact?type=sample" className="btn-fill">Get free sample</Link>
            <Link href="/products" className="btn-line">Browse all products</Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
