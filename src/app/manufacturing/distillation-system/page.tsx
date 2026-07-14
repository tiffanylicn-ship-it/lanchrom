import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Distillation & Purification System | LANCHROM™",
  description: "CFD-optimized distillation columns with custom tray geometry and structured packing — the engineering behind consistent analytical and electronic grade purity.",
  alternates: { canonical: "https://www.lanchrom.com/manufacturing/distillation-system" },
};

export default function DistillationSystemPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/manufacturing" className="hover:text-[#3C6E71]">Manufacturing</Link> {" › "}
          <span className="text-[#5C5A55]">Distillation & Purification System</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Manufacturing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">Distillation & Purification System</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Every distillation column in this facility was designed around the specific impurity profile it needs
            to remove — not bought off a catalog page and adapted after the fact.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-5">Why Standard Column Designs Fall Short</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            A standard distillation column, purchased from an equipment supplier and installed with default tray
            or packing specifications, works well enough for commodity-grade solvent production where the purity
            target is 99% or 99.5%. At analytical-grade specifications (99.9%+) and especially at electronic-grade
            (99.999%+), the inefficiencies built into a standard design become the limiting factor — not the
            chemistry of the separation itself, but the fluid dynamics of how vapor and liquid actually interact
            on each tray or packing surface.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 my-8">
            {[
              { t: "Inactive Zones", d: "Standard tray designs leave 15-25% of the tray surface area functionally unused — liquid stagnates in edge regions where vapor-liquid contact is poor, reducing effective separation per tray." },
              { t: "Vapor Channeling", d: "Uneven liquid distribution across the tray surface creates low-resistance paths where vapor bypasses the liquid layer entirely, carrying impurities upward without the separation contact that should remove them." },
              { t: "Weeping & Entrainment", d: "At the wrong operating conditions, liquid drops through holes meant for vapor (weeping) or vapor carries liquid droplets upward (entrainment) — both short-circuit the separation mechanism." },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-5">
                <h3 className="font-bold text-[#2B2A28] text-sm mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">CFD-Optimized Tray Engineering</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Computational Fluid Dynamics (CFD) modeling allows us to simulate vapor and liquid flow patterns
            across a tray surface before any metal is cut — identifying dead zones, channeling paths, and
            hydraulic gradient problems computationally, then redesigning the tray geometry to eliminate them.
            The result is a tray where the effective mass-transfer area approaches the total tray area, rather
            than the 75-85% typical of standard designs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            {[
              { t: "Optimized Bubbling Area", d: "Perforation patterns sized and positioned to maximize vapor-liquid contact while minimizing jet flooding. The bubbling zone extends closer to the tray edges than standard designs allow, recovering the inactive area that standard trays waste." },
              { t: "Redesigned Downcomers", d: "Downcomer geometry controls liquid return from each tray to the one below — our design reduces the backup and flooding risk that limits throughput on standard trays, allowing higher vapor velocities (and therefore higher throughput) without sacrificing separation." },
              { t: "Reduced Hydraulic Gradient", d: "Lower-crest outlet weirs and flow-path geometry changes reduce the liquid height difference across the tray surface, which reduces the pressure-driven liquid gradient that causes uneven vapor distribution on standard trays." },
              { t: "Push-Valve Tray Inlets", d: "The inlet region of each tray uses a push-valve geometry that converts the kinetic energy of incoming liquid into horizontal distribution across the tray surface, rather than allowing it to cascade directly to the downcomer without full tray contact." },
            ].map(item => (
              <div key={item.t} className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-xl p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Structured Packing for High-Purity Applications</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            For the highest purity requirements — electronic-grade solvents where trace metal contamination at
            the sub-ppb level is the specification target — we use structured packing sections in addition to
            (or instead of) trays. Structured packing provides higher mass-transfer efficiency per unit column
            height than trays, which means more theoretical separation stages in the same column length — critical
            when the last few ppm of impurity removal requires the highest possible number of equilibrium stages.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The packing material itself is selected for chemical inertness — stainless steel or specialized alloys
            that won't leach metal ions into the solvent stream during the distillation process. For solvents
            destined for trace-metal-sensitive applications (ICP-MS work, semiconductor processing), this
            material-of-construction decision is as important as the separation engineering itself, because a
            column that purifies organic impurities beautifully while introducing trace chromium or nickel from
            its own packing material defeats the purpose.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Multi-Column Configuration</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Different solvents have different impurity profiles and different separation challenges. Acetonitrile
            purification is a different engineering problem than methanol purification, which is different again
            from IPA or ethanol. Rather than running all solvents through a single general-purpose column (which
            means either over-engineering for the easy solvents or under-engineering for the hard ones), we
            operate multiple columns, each configured for the specific thermodynamic and mass-transfer
            characteristics of the solvent family it handles.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Dedicated columns for electronic-grade products are the most extreme example of this specialization —
            these columns never process lower-grade material, never share a feed line with commodity-grade
            production, and are maintained under a stricter cleaning and inspection protocol than general-purpose
            columns. The cross-contamination risk from a shared column processing technical-grade material one
            week and electronic-grade the next is a risk we eliminate by design rather than managing by procedure.
          </p>

          <div className="my-8 px-6 py-5 rounded-xl bg-[#FBFAF8] border-l-2 border-[#B5654A]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B5654A] mb-2">The result</p>
            <p className="text-[#5C5A55] text-sm leading-relaxed">
              Batch-to-batch purity consistency at 99.99%+ GC purity for standard analytical grades, and sub-ppb
              trace metal content for electronic grades — not because we got lucky on a particular production run,
              but because the separation engineering is designed to produce that consistency as a matter of
              routine rather than exception.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] flex gap-3 flex-wrap">
            <Link href="/manufacturing/clean-filling" className="btn-line">Clean Filling →</Link>
            <Link href="/manufacturing/qc-laboratory" className="btn-line">QC Laboratory →</Link>
            <Link href="/contact?type=sample" className="btn-fill">Request a Sample</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
