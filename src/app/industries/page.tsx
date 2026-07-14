import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES } from "@/data/industries";
import SectionSidebar from "@/components/layout/SectionSidebar";

export const metadata: Metadata = {
  title: "Industries We Serve | LANCHROM",
  description: "Pharmaceutical, biotechnology, fermentation, food testing, environmental, CRO, forensic, semiconductor, and 12+ more industries served with factory-direct solvents.",
  alternates: { canonical: "https://www.lanchrom.com/industries" },
};

export default function IndustriesIndexPage() {
  const industryNav = Object.values(INDUSTRIES).map((ind) => ({ href: `/industries/${ind.slug}`, label: ind.name, sublabel: ind.tagline }));

  return (
    <div className="bg-white">
      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image
          src="/images/categories/applications.jpg"
          alt="Applications across pharmaceutical, biotechnology, food testing, and environmental analysis"
          fill
          sizes="100vw"
          className="object-contain object-right p-0 md:p-2"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">Industries</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Who We Serve</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Different labs need different impurity profiles. We tailor grade, packaging, and documentation to your industry's specific requirements.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <SectionSidebar title="Industries" baseHref="/industries" items={industryNav} accent="#3C6E71" />
        <main className="flex-1 min-w-0 py-12">
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
