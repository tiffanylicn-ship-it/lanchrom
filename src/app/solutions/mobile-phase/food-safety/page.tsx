import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Food Safety Testing Mobile Phase | LANCHROM™",
  description: "Ready-to-use mobile phase for pesticide residue, veterinary drug, and food contaminant HPLC analysis.",
  alternates: { canonical: "https://www.lanchrom.com/solutions/mobile-phase/food-safety" },
};

export default function FoodSafetyMobilePhasePage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/solutions/mobile-phase" className="hover:text-[#3C6E71]">Mobile Phase</Link> {" › "}
          <span className="text-[#5C5A55]">Food Safety Testing</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Mobile Phase</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Food Safety Testing Mobile Phase</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Pre-made mobile phase systems for pesticide residue, veterinary drug residue, and mycotoxin
            analysis — paired with our SPE cleanup cartridges for a complete sample-to-injection workflow.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-6">Application areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Pesticide Residue (Multi-Residue)", use: "Broad-spectrum LC-MS/MS screening on fruit and vegetable matrices" },
              { name: "Veterinary Drug Residue", use: "Tetracycline, sulfonamide, and quinolone class screening in animal products" },
              { name: "Mycotoxin Analysis", use: "Aflatoxin B1/G1 and related mycotoxin quantification" },
              { name: "Sweetener & Additive Analysis", use: "Saccharin, cyclamate, acesulfame-K quantification" },
            ].map(item => (
              <div key={item.name} className="card-flat p-5">
                <h3 className="font-semibold text-[#2B2A28] text-sm mb-1">{item.name}</h3>
                <p className="text-[#8A8782] text-xs">{item.use}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8 flex-wrap">
            <Link href="/contact?type=quote" className="btn-fill">Request a quote</Link>
            <Link href="/products/spe-products" className="btn-line">See SPE cleanup products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
