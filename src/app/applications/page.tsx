import type { Metadata } from "next";
import Link from "next/link";
import { APPLICATIONS } from "@/data/applications";

export const metadata: Metadata = {
  title: "Applications | LANCHROM™",
  description: "Solvents and standard solutions organized by analytical method — HPLC, LC-MS, GC, pesticide residue, organic acid, water testing, and more.",
  alternates: { canonical: "https://www.lanchrom.com/applications" },
};

export default function ApplicationsIndexPage() {
  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Applications</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Solvents By Analytical Method</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Find the right grade by what you're measuring — from routine HPLC method development to
            trace-level LC-MS bioanalysis and multi-residue pesticide screening.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
