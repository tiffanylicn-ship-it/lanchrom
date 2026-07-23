import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionSidebar from "@/components/layout/SectionSidebar";
import EditorialPageHero from "@/components/layout/EditorialPageHero";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import { SOLUTION_NAV_GROUPS } from "@/data/solutions-nav";

export const metadata: Metadata = {
  title: "Custom Packaging & Private Label | LANCHROM™",
  description: "Small-pack lab sizes from 100mL, private label from 50 units. Custom bottle types, label languages, and CoA branding.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/custom-packaging" },
};

const PACK_SIZES = [
  { vol: "100mL", note: "Trial / qualification" },
  { vol: "250mL", note: "Small lab volume" },
  { vol: "500mL", note: "Routine lab use" },
  { vol: "1L", note: "Standard lab pack" },
  { vol: "2.5L", note: "High-frequency use" },
  { vol: "4L", note: "Bench-scale bulk" },
  { vol: "20–25L", note: "Departmental supply" },
  { vol: "200L / IBC", note: "Manufacturing scale" },
];

const PACKAGING_STEPS = [
  ["01", "Amber glass bottle", "Protects light-sensitive HPLC solvents and supports stable storage."],
  ["02", "Tamper-evident closure", "An airtight black screw cap limits evaporation and provides visible seal integrity."],
  ["03", "Molded pulp insert", "A fitted fiber insert absorbs handling shock and separates each bottle in transit."],
  ["04", "Four-bottle arrangement", "Four 1 L bottles are secured upright in an individual compartment system."],
  ["05", "Heavy-duty carton", "Corrugated construction is selected for stacking strength and export handling."],
  ["06", "Sealed export pack", "The carton is closed, labeled and prepared with handling and batch identification."],
];

export default function CustomPackagingPage() {
  return (
    <div className="bg-white">
      <SectionBreadcrumb items={[{ label: "Solutions", href: "/solutions" }, { label: "Custom Packaging" }]} />

      <EditorialPageHero
        eyebrow="Solutions"
        title="Order From 100mL. Your Label. Our Quality."
        description="We hold lab-pack sizes in stock specifically so you don't have to commit to a drum before qualifying a product - and we'll put your name on the bottle once you do."
        image="/images/backgrounds/oem-bottle-pic.png"
        imageAlt="LANCHROM custom packaging and private-label bottles"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-8 py-16 md:py-20">
        <SectionSidebar title="Solutions" baseHref="/solutions" groups={SOLUTION_NAV_GROUPS} accent="#B5654A" />
        <div className="flex-1 min-w-0 space-y-14">

          {/* Pack sizes */}
          <section>
            <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Standard packaging sizes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PACK_SIZES.map(p => (
                <div key={p.vol} className="border border-[#EFEDE8] rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-[#3C6E71]">{p.vol}</div>
                  <div className="text-[#8A8782] text-xs mt-1">{p.note}</div>
                </div>
              ))}
            </div>
            <p className="text-[#8A8782] text-sm mt-4">Not every product is available in every size — check the packaging selector on individual product pages for confirmed options.</p>
          </section>

          <section aria-labelledby="packaging-process-title">
            <div className="mb-6 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0E918C]">Export-ready protection</p>
              <h2 id="packaging-process-title" className="mt-2 text-2xl font-bold text-[#2B2A28]">Six-step acetonitrile packaging process</h2>
              <p className="mt-3 leading-relaxed text-[#5C5A55]">
                Our standard 4 x 1 L acetonitrile pack combines solvent-compatible amber glass, a tamper-evident closure,
                molded pulp protection and a reinforced export carton. The system is designed to protect bottle integrity,
                preserve product identification and simplify receiving inspection for laboratories and distributors.
              </p>
            </div>

            <figure className="overflow-hidden rounded-lg border border-[#D7E3DE] bg-[#F5FAF8]">
              <Image
                src="/images/solutions/packaging-process.jpg"
                alt="LANCHROM six-step acetonitrile packaging and quality assurance process"
                width={1600}
                height={1070}
                sizes="(min-width: 1280px) 900px, (min-width: 768px) 70vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-[#D7E3DE] px-5 py-3 text-xs leading-relaxed text-[#667973]">
                Standard export configuration shown: four 1 L amber glass bottles. Final container and carton specifications are confirmed by solvent, destination and transport mode.
              </figcaption>
            </figure>

            <ol className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {PACKAGING_STEPS.map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-[#DDE8E3] pt-4">
                  <span className="text-lg font-extrabold text-[#0A514C]">{number}</span>
                  <div>
                    <h3 className="font-bold text-[#203D38]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#66736F]">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Private label */}
          <section className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-xl font-bold text-[#2B2A28] mb-4">Private label, from 50 units</h2>
              <p className="text-[#5C5A55] leading-relaxed mb-5">
                Most customers move to private label on their first reorder, once a product is qualified.
                We configure the bottle, label design and language, and which name appears on the CoA header.
              </p>
              <ul className="space-y-2 text-sm text-[#5C5A55]">
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Your brand label or ours — your choice</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> CoA and SDS branded to your company</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> English, Chinese, Hindi, Arabic, or multi-language labels</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> GMP, kosher, halal, and REACH documentation on request</li>
              </ul>
            </div>
            <div className="bg-white border border-[#E6E3DD] rounded-xl p-6">
              <h3 className="font-bold text-[#2B2A28] mb-3">Configure your order</h3>
              <p className="text-[#8A8782] text-sm mb-5">Use our calculator to specify product, container, label, and destination. No pricing is shown online — our team follows up with a detailed quote.</p>
              <Link href="/oem/quote-calculator" className="btn-fill w-full justify-center">OEM Quote Calculator</Link>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-bold text-[#2B2A28] mb-3">Want to test it small first?</h2>
            <p className="text-[#5C5A55] mb-6">Request a free sample before committing to a packaging configuration.</p>
            <Link href="/contact?type=sample" className="btn-fill inline-flex">Get free sample</Link>
          </section>

        </div>
      </div>
    </div>
  );
}
