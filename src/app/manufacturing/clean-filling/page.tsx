import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clean Filling & Packaging | LANCHROM™",
  description: "Controlled-environment filling lines with HEPA-filtered air, inline filtration, and grade-dedicated equipment — protecting purity from column to customer.",
  alternates: { canonical: "https://www.lanchrom.com/manufacturing/clean-filling" },
};

export default function CleanFillingPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/manufacturing" className="hover:text-[#3C6E71]">Manufacturing</Link> {" › "}
          <span className="text-[#5C5A55]">Clean Filling & Packaging</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Manufacturing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">Clean Filling & Packaging</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Purifying a solvent to sub-ppb trace metal content means nothing if particulate contamination,
            plasticizer leaching, or ambient dust enters during the filling step. Clean filling is where
            purification meets packaging — and where many solvent manufacturers quietly lose the purity their
            distillation process created.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-5">Why Filling Environment Matters</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            A solvent that exits the distillation column at 99.999% purity with sub-ppb metal content can be
            measurably contaminated by the time it reaches the customer's bench — not from a dramatic
            manufacturing failure, but from the accumulation of small contamination sources between the column
            outlet and the bottle cap: ambient particulates settling into open containers during filling, trace
            metals leaching from valve seals or gasket materials, plasticizer migration from bottle cap liners,
            or even fingerprint-level sodium transfer from handling bare glass bottles without gloves.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Each of these contamination pathways is individually small. Collectively, in an uncontrolled filling
            environment, they can degrade a solvent from electronic-grade to merely HPLC-grade purity between the
            column and the shipping dock. Clean filling infrastructure exists specifically to control every one
            of these pathways — not by extraordinary manual care (which doesn't scale reliably across shifts and
            personnel), but by environmental engineering that makes contamination structurally difficult rather
            than procedurally forbidden.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Environmental Controls</h2>
          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { t: "HEPA-Filtered Air Supply", d: "The filling area operates under positive pressure with HEPA-filtered supply air, preventing ambient particulates from entering the space. Particle counts are monitored continuously during filling operations, not just verified at commissioning." },
              { t: "Temperature & Humidity Control", d: "Controlled temperature prevents condensation on cold glass or metal surfaces (a moisture contamination pathway), and stable humidity reduces static charge buildup that attracts airborne particles to container surfaces." },
              { t: "Grade-Dedicated Filling Lines", d: "Electronic-grade and LC-MS-grade products are filled on dedicated equipment that never handles lower-grade material — eliminating the cross-contamination risk inherent in shared-line production with grade changeovers." },
              { t: "Personnel Protocols", d: "Filling area staff follow gowning and gloving protocols designed to prevent the human-origin contamination (skin oils, fibers, sodium from fingerprints) that becomes measurable at trace-analysis purity levels." },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Inline Filtration</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Every solvent passes through a final inline filter immediately before entering the bottle — the last
            barrier between the purified product and the sealed container. Filter pore size is matched to the
            product grade: 0.45µm for standard HPLC grade, 0.22µm for UPLC grade, and 0.1µm for electronic-grade
            products where the customer's sub-2-micron column frits or semiconductor processing equipment has
            essentially zero tolerance for particulate contamination.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Filter membrane chemistry is selected for chemical compatibility with each solvent — PTFE for most
            organic solvents, PVDF for aqueous solutions — and filters are integrity-tested before each filling
            campaign to confirm they haven't been damaged during installation or sterilization. A filter that
            passes a standard specification but has a pinhole defect that bypasses the rated pore size will
            deliver particulate-contaminated product that passes every chemical purity test but fails the
            customer's own particulate specification — a failure mode that inline filter integrity testing
            specifically prevents.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Container & Closure Selection</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The container itself is part of the product's purity story — not just an inert vessel. Glass bottles
            are standard for most analytical-grade solvents, but even glass has implications: borosilicate glass
            can leach trace sodium (especially from new, unconditioned glass), and colored glass (amber, for
            light-sensitive solvents) uses metal oxide colorants that are a potential contamination source for
            trace-metal-sensitive grades. Container selection for each product considers these material
            interactions, not just mechanical convenience.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Cap and closure materials are equally important — and more often the contamination source than the
            bottle itself. Cap liners can leach plasticizers, adhesives, or stabilizers into the solvent during
            storage, particularly for aggressive solvents like dichloromethane or THF. LC-MS-grade products use
            cap and liner materials specifically tested for extractable and leachable content against the solvent
            they'll be in contact with, not just a generic "solvent-compatible" designation.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Packaging Formats</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {[
              { t: "100mL – 1L Glass", d: "Lab-pack sizes for sample evaluation, teaching labs, and low-volume applications" },
              { t: "2.5L – 4L Glass", d: "Standard bench-use format for routine analytical HPLC and GC work" },
              { t: "5L – 20L Flex Bags", d: "Ready-to-use mobile phase in collapsible bags with direct-connect fittings" },
              { t: "20L – 200L Drums", d: "High-volume formats for process use and high-throughput laboratories" },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-5">
                <h3 className="font-bold text-[#2B2A28] text-sm mb-1.5">{item.t}</h3>
                <p className="text-[#8A8782] text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Labeling & Traceability</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Every filled container is labeled with the product identity, grade, lot number, manufacture date,
            expiry or retest date, and relevant hazard markings per GHS requirements. Lot numbers are traceable
            back through the production chain to the specific distillation batch, raw material lots, and QC test
            records — a traceability chain that supports any downstream investigation or audit, whether it's a
            customer complaint, a regulatory inspection, or an internal quality review.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            For private-label and OEM orders, the labeling system switches to the customer's artwork and branding
            while maintaining the same underlying lot traceability structure — the label changes, but the
            traceability behind it doesn't.
          </p>

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] flex gap-3 flex-wrap">
            <Link href="/manufacturing/qc-laboratory" className="btn-line">QC Laboratory →</Link>
            <Link href="/manufacturing/factory" className="btn-line">Factory Overview →</Link>
            <Link href="/contact?type=sample" className="btn-fill">Request a Sample</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
