import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  DISTRIBUTOR_MARKET_GROUPS,
  getDistributorMarketsByGroup,
} from "@/data/distributor-program";

export const metadata: Metadata = {
  title: "Global Laboratory Chemical Distributor Program | LANCHROM",
  description: "Join the LANCHROM distributor program for analytical solvents, laboratory chemicals and private-label supply across Europe, North America and Asia Pacific.",
  keywords: ["laboratory chemical distributor program"],
  alternates: { canonical: "https://www.lanchrom.com/distributor-program" },
  openGraph: {
    title: "LANCHROM Global Distributor Program",
    description: "A qualification-led partner program for analytical solvent and laboratory chemical distributors.",
    url: "https://www.lanchrom.com/distributor-program",
    type: "website",
  },
};

const groupDescriptions = {
  Europe: "Priority pharmaceutical, life-science and analytical markets with country-specific document and channel planning.",
  "North America": "Qualified importer-distributors for US and Canadian laboratory, pharmaceutical and private-label channels.",
  "Asia Pacific": "Established growth markets for analytical laboratories, pharmaceutical QC and technical distribution.",
};

const support = [
  ["Focused launch portfolio", "Select products and pack sizes around validated local demand instead of importing an undifferentiated catalogue."],
  ["Qualification support", "Coordinate representative specifications, SDS and CoA documents for customer and distributor review."],
  ["Private-label pathway", "Discuss distributor branding, packaging and documentation only after technical and commercial scope is agreed."],
  ["Supply planning", "Build forecasts, stock policy and shipment planning around the territory's qualified opportunities."],
];

const process = [
  ["Submit your profile", "Share territory, served industries, sales coverage, warehousing, import capability and expected portfolio."],
  ["Capability review", "LANCHROM reviews market fit, technical coverage, channel conflicts and information still required."],
  ["Portfolio validation", "Both teams define target applications, qualification priorities and the document plan for shortlisted products."],
  ["Commercial discussion", "Pricing, samples, forecast, territory and any exclusivity request are reviewed separately and require written approval."],
];

export default function DistributorProgramPage() {
  return (
    <main className="bg-white text-[#183A35]">
      <section className="relative min-h-[560px] overflow-hidden border-b border-[#C9DBD3] bg-[#EAF4EF]">
        <Image src="/images/hero/lanchrom-global-logistics.png" alt="LANCHROM laboratory chemical distribution and global logistics" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,44,50,0.97)_0%,rgba(6,58,61,0.94)_44%,rgba(6,58,61,0.56)_67%,rgba(6,58,61,0.18)_100%)]" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7DDFCC]">Global partner network</p>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] !text-white md:text-6xl">Build a trusted laboratory chemical business in your market</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#D9ECE8] md:text-lg">LANCHROM works with technically capable distributors that can support product qualification, local stock, responsible chemical handling and long-term customer development.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/distributor-program/apply" className="rounded-md bg-[#3FAE7A] px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#318E64]">Apply for Distribution</Link>
              <a href="mailto:sales@lanchrom.com?subject=LANCHROM%20Distributor%20Program" className="rounded-md border border-white/45 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20">sales@lanchrom.com</a>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#BBD8D2]">Submitting an application does not create an appointment, territory reservation or exclusivity commitment.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DCE8E3] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Priority partner markets</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E] md:text-4xl">Europe, North America and Asia Pacific</h2>
            <p className="mt-4 text-base leading-7 text-[#5A706A]">Regional hubs introduce the channel strategy. Country pages explain buyer expectations, partner requirements and local compliance topics without making automatic market-access claims.</p>
          </div>

          <div className="mt-12 space-y-14">
            {DISTRIBUTOR_MARKET_GROUPS.map(group => {
              const markets = getDistributorMarketsByGroup(group);
              return (
                <section key={group} aria-labelledby={`market-${group.replaceAll(" ", "-").toLowerCase()}`}>
                  <div className="flex flex-col gap-2 border-b border-[#DCE8E3] pb-5 md:flex-row md:items-end md:justify-between">
                    <div>
                      <h3 id={`market-${group.replaceAll(" ", "-").toLowerCase()}`} className="text-2xl font-extrabold text-[#0A302E]">{group}</h3>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-[#60736D]">{groupDescriptions[group]}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#0E918C]">{markets.length} market pages</span>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {markets.map(market => (
                      <Link key={market.slug} href={market.url} className={`group relative min-h-52 overflow-hidden border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${market.isRegionalHub ? "border-[#0E918C] bg-[#0A514C] text-white" : "border-[#D7E5DF] bg-[#F6FAF8]"}`}>
                        {market.isRegionalHub && <span className="absolute right-0 top-0 bg-[#3FAE7A] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Regional hub</span>}
                        <p className={`text-[11px] font-bold uppercase tracking-[0.14em] ${market.isRegionalHub ? "text-[#9FE2D2]" : "text-[#70847E]"}`}>{market.region}</p>
                        <h4 className={`mt-4 text-xl font-extrabold ${market.isRegionalHub ? "text-white" : "text-[#173C36] group-hover:text-[#0E918C]"}`}>{market.country}</h4>
                        <p className={`mt-4 text-xs leading-5 ${market.isRegionalHub ? "text-[#D0E7E1]" : "text-[#60736D]"}`}>{market.primaryKeyword}</p>
                        <span className={`mt-8 block text-xs font-bold uppercase tracking-[0.1em] ${market.isRegionalHub ? "text-[#9FE2D2]" : "text-[#0A514C]"}`}>View opportunity →</span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F8F5] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Partner support</p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">A qualification-led route to market</h2>
              <p className="mt-4 text-sm leading-7 text-[#5A706A]">The program is designed for distributors that can combine local relationships with responsible product handling, technical follow-up and documented customer approval.</p>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {support.map(([title, text], index) => (
                <div key={title} className="border-l-2 border-[#0E918C] pl-5">
                  <span className="text-xs font-bold text-[#0E918C]">0{index + 1}</span>
                  <h3 className="mt-2 text-lg font-bold text-[#173C36]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#60736D]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#DCE8E3] bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0E918C]">Application process</p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#0A302E]">Clear steps before any appointment</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {process.map(([title, text], index) => (
              <div key={title} className="border border-[#D7E5DF] bg-[#F8FBF9] p-6">
                <span className="text-3xl font-extrabold text-[#8BCFBD]">0{index + 1}</span>
                <h3 className="mt-6 text-lg font-bold text-[#173C36]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#60736D]">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/distributor-program/apply" className="inline-flex rounded-md bg-[#0A514C] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#083E3B]">Start Distributor Application</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
