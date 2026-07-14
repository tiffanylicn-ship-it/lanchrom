import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Factory & Production Facility | LANCHROM™",
  description: "Inside LANCHROM's solvent manufacturing facility — production capacity, environmental controls, hazmat infrastructure, and quality certifications.",
  alternates: { canonical: "https://www.lanchrom.com/manufacturing/factory" },
};

export default function FactoryPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/manufacturing" className="hover:text-[#3C6E71]">Manufacturing</Link> {" › "}
          <span className="text-[#5C5A55]">Factory & Production Facility</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Manufacturing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">Factory & Production Facility</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Purpose-built for high-purity solvent production — from raw material receiving through distillation,
            filling, and warehousing, every stage is designed around the contamination control requirements of
            analytical-grade and electronic-grade output.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-5">Facility Overview</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The production facility is organized around a one-directional material flow — raw materials enter at
            one end, pass through purification and filling in a controlled sequence, and finished goods exit at
            the other end without crossing paths with incoming material. This layout isn't decorative; it's the
            structural basis for contamination control, ensuring that every product at every stage moves forward
            through progressively cleaner environments rather than cycling back through areas that handle
            lower-purity material.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 my-8">
            {[
              { t: "Raw Material Receiving & Storage", d: "Segregated receiving area with dedicated storage for different solvent classes — flammable, corrosive, and oxidizing materials stored separately per NFPA and GHS requirements. Incoming material is quarantined and sampled before release into production." },
              { t: "Distillation & Purification", d: "Multiple distillation columns with CFD-optimized tray and packing geometry, capable of running different solvents on independent lines without cross-contamination. Dedicated columns for electronic-grade products that never contact lower-grade material." },
              { t: "Clean Filling Area", d: "Temperature and humidity-controlled filling environment with HEPA-filtered air supply. Filling lines are dedicated by grade tier to prevent cross-contamination between product grades." },
              { t: "Finished Goods Warehouse", d: "Climate-controlled storage with segregated areas by hazard class and product grade. FIFO (first-in-first-out) inventory management ensures oldest stock ships first, maximizing remaining shelf life at the customer's receiving dock." },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Hazardous Material Infrastructure</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Manufacturing, storing, and shipping flammable organic solvents requires infrastructure that most
            general-purpose chemical facilities don't have — explosion-proof electrical systems throughout
            production areas, automated fire suppression designed for flammable liquid environments, vapor
            detection and ventilation systems, and spill containment that meets or exceeds local environmental
            protection requirements.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            International shipment of dangerous goods (DG) adds another layer — UN-rated packaging, proper
            marking and labeling per IMDG code for ocean freight, and dangerous goods declarations prepared by
            trained, certified DG staff. Our export team handles DG documentation for every shipment as standard
            practice, not as a special service that requires extra lead time or cost.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Production Capacity & Flexibility</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            Production scheduling balances two priorities that are often in tension: the efficiency of long,
            uninterrupted production runs for high-volume standard products (HPLC grade acetonitrile, methanol,
            IPA) and the flexibility to accommodate smaller, custom, or OEM orders without disrupting the main
            production flow. Dedicated smaller-scale equipment handles trial batches, private-label runs, and
            low-volume specialty grades without requiring the main production lines to stop and changeover.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            This separation means a customer ordering 50 cases of private-labeled HPLC grade methanol doesn't
            need to wait for a gap in the production schedule for a high-volume product they're not ordering —
            the two manufacturing streams operate independently, each with its own equipment and scheduling.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Environmental & Safety Certifications</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The facility operates under the environmental, safety, and quality management standards required by
            both Chinese national regulations and the international markets we export to — including waste
            solvent recovery and recycling, atmospheric emission control, wastewater treatment, and occupational
            health monitoring for production staff working with volatile organic compounds. Environmental
            compliance isn't a separate initiative from production quality; the same process discipline that
            keeps impurities out of the product keeps emissions within regulated limits.
          </p>

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] flex gap-3 flex-wrap">
            <Link href="/manufacturing/distillation-system" className="btn-line">Distillation System →</Link>
            <Link href="/manufacturing/clean-filling" className="btn-line">Clean Filling →</Link>
            <Link href="/manufacturing/qc-laboratory" className="btn-line">QC Laboratory →</Link>
            <Link href="/contact?type=sample" className="btn-fill">Request a Sample</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
