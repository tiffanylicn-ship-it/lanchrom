import type { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES, getIndustryNavItems } from "@/data/industries";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";

export const metadata: Metadata = {
  title: "Industries We Serve | LANCHROM",
  description: "Pharmaceutical, biotechnology, fermentation, food testing, environmental, CRO, forensic, semiconductor, and 12+ more industries served with factory-direct solvents.",
  alternates: { canonical: "https://www.lanchrom.com/industries" },
};

export default function IndustriesIndexPage() {
  const industryNav = getIndustryNavItems();

  return (
    <div className="bg-white">
      <EditorialPageHero
        eyebrow="Industries"
        title="Who We Serve"
        description="Different labs need different impurity profiles. We tailor grade, packaging, and documentation to your industry's specific requirements."
        image="/images/categories/applications.jpg"
        imageAlt="Applications across pharmaceutical, biotechnology, food testing, and environmental analysis"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <SectionSidebar title="Industries" baseHref="/industries" items={industryNav} accent="#3C6E71" />
        <main className="flex-1 min-w-0 py-16 md:py-20">
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.values(INDUSTRIES).map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group flex items-center justify-between py-5 px-5 border border-[#EFEDE8] rounded-xl hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all">
                <div>
                  <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors">{ind.name}</h3>
                  <p className="text-[#8A8782] text-sm mt-0.5">{ind.tagline}</p>
                </div>
                <span className="text-[#C9DBD9] group-hover:text-[#3C6E71] group-hover:translate-x-1 transition-all text-lg flex-shrink-0 ml-3">→</span>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
