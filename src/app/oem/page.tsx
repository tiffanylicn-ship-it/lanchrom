import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OEM & Private Label Solvents | LANCHROM",
  description: "Private label, contract manufacturing, and custom formulation services. Configure your own brand packaging from 50 units.",
  alternates: { canonical: "https://www.lanchrom.com/oem" },
};

export default function OEMIndexPage() {
  return (
    <div className="bg-white">
      <section className="relative min-h-[430px] py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC] overflow-hidden flex items-center">
        <Image
          src="/images/backgrounds/solvents-oem-services.png"
          alt="LANCHROM solvents OEM services"
          fill
          sizes="100vw"
          className="object-contain object-right p-0 md:p-2"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7FAFC_0%,rgba(247,250,252,0.96)_31%,rgba(247,250,252,0.72)_50%,rgba(247,250,252,0.22)_68%,rgba(247,250,252,0)_100%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <p className="tag-line mb-3">OEM &amp; Private Label</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Your Brand, Our Manufacturing</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">From 50 units, we'll put your label on the bottle, your name on the CoA, and your choice of documentation in the box.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { t: "Private Label", d: "Your brand on standard packaging — bottle, label, and CoA header all configured to your specification." },
              { t: "Contract Manufacturing", d: "Custom formulation at scale, manufactured exclusively for your distribution under your quality agreement." },
              { t: "Custom Formulation", d: "Specific blends, concentrations, or buffer systems not in our standard catalog — formulated to your method." },
              { t: "Distributor Program", d: "Standing inventory arrangements and volume pricing for regional distributors in target markets." },
            ].map(item => (
              <div key={item.t} className="card-flat p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#FBFAF8] border border-[#E6E3DD] rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-[#2B2A28] mb-2">Ready to configure an order?</h2>
            <p className="text-[#5C5A55] mb-6">Use our calculator to specify product, packaging, label, and logistics. We'll follow up with a detailed quote — no pricing is shown online.</p>
            <Link href="/oem/quote-calculator" className="btn-fill inline-flex">OEM Quote Calculator</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
