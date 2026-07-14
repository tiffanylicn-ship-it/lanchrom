import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Manufacturing & Engineering | LANCHROM",
  description: "Inside LANCHROM's solvent manufacturing facility — CFD-optimized distillation, controlled-environment filling, and full-spectrum analytical QC.",
  alternates: { canonical: "https://www.lanchrom.com/manufacturing" },
};

const SECTIONS = [
  {
    href: "/manufacturing/factory",
    title: "Factory & Production Facility",
    tagline: "Purpose-built for high-purity solvent production",
    desc: "One-directional material flow, segregated hazmat storage, dedicated production lines by grade tier, and explosion-proof infrastructure for flammable solvent manufacturing.",
  },
  {
    href: "/manufacturing/distillation-system",
    title: "Distillation & Purification System",
    tagline: "CFD-optimized tray and packing engineering",
    desc: "Computationally modeled tray geometry eliminates inactive zones and vapor channeling — the engineering difference between commodity-grade and electronic-grade purity consistency.",
  },
  {
    href: "/manufacturing/clean-filling",
    title: "Clean Filling & Packaging",
    tagline: "Controlled-environment filling lines",
    desc: "HEPA-filtered air, grade-dedicated filling equipment, inline 0.1-0.45µm filtration, and container/closure materials tested for extractables — protecting purity from column to customer.",
  },
  {
    href: "/manufacturing/qc-laboratory",
    title: "QC Laboratory & Analytical Testing",
    tagline: "Full-spectrum testing before every batch ships",
    desc: "HPLC, GC, ICP-MS, Karl Fischer, UV-Vis, particle counting — every batch tested across multiple independent methods by an organizationally independent QC team.",
  },
];

export default function ManufacturingPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image
          src="/images/backgrounds/production-process2.png"
          alt="LANCHROM production process"
          fill
          sizes="100vw"
          className="object-contain object-right p-0 md:p-2"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">Manufacturing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">Engineering-Led Purification</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            We do not buy standard distillation columns off the shelf. Every tray and packing geometry is
            computationally modeled and optimized for the specific impurity profile we remove - the
            difference between commodity-grade and electronic-grade solvent starts here.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {SECTIONS.map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="group block p-6 rounded-2xl border border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#8A8782] mb-1.5">{s.tagline}</p>
                  <h2 className="text-xl font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors mb-2">{s.title}</h2>
                  <p className="text-[#5C5A55] text-sm leading-relaxed max-w-2xl">{s.desc}</p>
                </div>
                <span className="text-[#C9DBD9] group-hover:text-[#3C6E71] group-hover:translate-x-1 transition-all text-lg flex-shrink-0 mt-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-14 bg-[#FBFAF8] border-t border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-3">See the engineering behind every batch</h2>
          <p className="text-[#5C5A55] mb-6">Request a sample with full CoA to verify our quality claims for yourself.</p>
          <Link href="/contact?type=sample" className="btn-fill inline-block">Get Free Sample</Link>
        </div>
      </section>
    </div>
  );
}
