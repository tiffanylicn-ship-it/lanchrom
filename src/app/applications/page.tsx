import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { APPLICATIONS, getApplicationNavItems } from "@/data/applications";
import SectionSidebar from "@/components/layout/SectionSidebar";

export const metadata: Metadata = {
  title: "Applications | LANCHROM",
  description: "Solvents and standard solutions organized by analytical method — HPLC, LC-MS, GC, pesticide residue, organic acid, water testing, and more.",
  alternates: { canonical: "https://www.lanchrom.com/applications" },
};

export default function ApplicationsIndexPage() {
  const applicationNav = getApplicationNavItems();

  return (
    <div className="bg-white">
      <section className="relative min-h-[460px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image
          src="/images/backgrounds/application-back.jpg"
          alt="LANCHROM analytical method applications"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.9)_22%,rgba(247,250,252,0.55)_42%,rgba(247,250,252,0.12)_62%,rgba(247,250,252,0)_82%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">Applications</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Solvents By Analytical Method</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Find the right grade by what you are measuring - from routine HPLC method development to
            trace-level LC-MS bioanalysis and multi-residue pesticide screening.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8">
        <SectionSidebar title="Applications" baseHref="/applications" items={applicationNav} accent="#3C6E71" />
        <main className="flex-1 min-w-0 py-12">
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.values(APPLICATIONS).map(app => (
              <Link key={app.slug} href={`/applications/${app.slug}`} className="group flex items-center justify-between py-5 px-5 border border-[#EFEDE8] rounded-xl hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all">
                <div>
                  <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors">{app.h1}</h3>
                  <p className="text-[#8A8782] text-sm mt-0.5">{app.tagline}</p>
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
