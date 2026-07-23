import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DISTRIBUTOR_MARKETS } from "@/data/distributor-program";

export const metadata: Metadata = {
  title: "Global Distributor Program | HPLC Solvents | LANCHROM",
  description: "Become a LANCHROM distributor for HPLC, LC-MS and analytical solvents in India, Vietnam, Thailand, Malaysia or Indonesia.",
  alternates: { canonical: "https://www.lanchrom.com/distributor-program" },
};

const support = [
  ["Factory-direct portfolio", "HPLC, LC-MS, spectroscopy and electronic-grade products from one manufacturing partner."],
  ["Sales enablement", "Product data, application content, samples and documentation for local customer development."],
  ["Flexible market entry", "Distributor packaging, OEM options and product planning aligned to your market."],
  ["Export support", "CoA, SDS, origin documentation and shipment coordination for regulated laboratory products."],
];

export default function DistributorProgramPage() {
  return (
    <main className="bg-white text-[#183A35]">
      <section className="relative min-h-[500px] overflow-hidden border-b border-[#C9DBD3] bg-[#EAF4EF]">
        <Image src="/images/hero/lcms-solvent-factory-manufacturer.png" alt="LANCHROM solvent manufacturing facility" fill priority sizes="100vw" className="object-cover object-right" />
        <div className="absolute inset-y-0 left-0 w-full bg-[#EAF4EF] [clip-path:polygon(0_0,66%_0,52%_100%,0_100%)] md:w-[76%]" />
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0E918C]">Global partner network</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-[#0A302E] md:text-5xl">LANCHROM Distributor Program</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#42615A]">Build your local analytical-solvent business with a factory-direct manufacturer, documented quality systems and practical technical support.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=quote" className="rounded-md bg-[#0A514C] px-5 py-3 text-sm font-bold text-white hover:bg-[#083E3B]">Apply to Become a Distributor</Link>
              <a href="mailto:info@lanchrom.com" className="rounded-md border border-[#7EA99F] bg-white/70 px-5 py-3 text-sm font-bold text-[#0A514C]">info@lanchrom.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DCE8E3] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Priority markets</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">Local partners wanted</h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5A706A]">We are actively seeking partners in India, Vietnam, Thailand and Indonesia, while developing the Malaysia market through focused search and channel outreach.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {DISTRIBUTOR_MARKETS.map(market => (
              <Link key={market.slug} href={market.url} className="group border-t-4 border-[#0E918C] bg-[#F4F9F7] p-5 transition-colors hover:bg-[#E5F2ED]">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#70847E]">{market.region}</p>
                <h3 className="mt-3 text-xl font-extrabold text-[#173C36] group-hover:text-[#0E918C]">{market.country}</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#60736D]">{market.primaryKeyword}</p>
                <span className="mt-7 block text-xs font-bold uppercase text-[#0A514C]">View market</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8F5] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Partner support</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">A practical route to market</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#5A706A]">The program is designed for laboratory suppliers that can combine local relationships with technical product handling and responsive service.</p>
            </div>
            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {support.map(([title, text], index) => (
                <div key={title} className="border-l-2 border-[#0E918C] pl-5">
                  <span className="text-xs font-bold text-[#0E918C]">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-[#173C36]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#60736D]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
