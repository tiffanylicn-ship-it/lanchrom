import type { Metadata } from "next";
import Link from "next/link";
import DistributorApplicationForm from "./DistributorApplicationForm";

export const metadata: Metadata = {
  title: "Apply to Become a LANCHROM Distributor",
  description: "Submit your company, territory, customer coverage, warehousing and chemical import capabilities for LANCHROM distributor review.",
  alternates: { canonical: "https://www.lanchrom.com/distributor-program/apply" },
  robots: { index: true, follow: true },
};

interface Props {
  searchParams: Promise<{ territory?: string | string[] }>;
}

export default async function DistributorApplicationPage({ searchParams }: Props) {
  const query = await searchParams;
  const initialTerritory = Array.isArray(query.territory) ? query.territory[0] : query.territory ?? "";

  return (
    <main className="bg-[#F4F8F6] text-[#183A35]">
      <section className="border-b border-[#C9DBD3] bg-[#073B3E] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/distributor-program" className="text-xs font-bold uppercase tracking-[0.18em] text-[#83DECA] hover:text-white">← Distributor Program</Link>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight !text-white md:text-5xl">Apply to become a LANCHROM distributor</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#D5EAE5]">Give us enough detail to understand your market reach, technical capability and proposed route to market. Commercial terms are discussed only after the initial review.</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.68fr_1.32fr] lg:px-8">
          <aside className="h-fit border border-[#D7E5DF] bg-white p-6 lg:sticky lg:top-24">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">What we assess</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#60736D]">
              {["Customer and industry coverage", "Technical sales capability", "Import and regulatory readiness", "Warehousing and local delivery", "Portfolio fit and channel conflicts", "Forecast and account-development plan"].map(item => <li key={item} className="flex gap-3 border-b border-[#E3ECE8] pb-3"><span className="font-bold text-[#0E918C]">✓</span>{item}</li>)}
            </ul>
            <div className="mt-6 bg-[#F3F8F5] p-4 text-xs leading-5 text-[#667972]">Applications are reviewed individually. Exclusivity, pricing, samples, credit, territory and appointment require separate written approval.</div>
          </aside>

          <div className="border border-[#D7E5DF] bg-white p-6 shadow-sm sm:p-9 md:p-12">
            <DistributorApplicationForm initialTerritory={initialTerritory} />
          </div>
        </div>
      </section>
    </main>
  );
}
