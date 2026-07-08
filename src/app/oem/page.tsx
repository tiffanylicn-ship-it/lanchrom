import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "OEM & Private Label Solvents | LANCHROM™",
  description: "Private label, contract manufacturing, and custom formulation services. Configure your own brand packaging from 50 units.",
  alternates: { canonical: "https://www.lanchrom.com/oem" },
};

export default function OEMIndexPage() {
  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
            <div>
              <p className="tag-line mb-3">OEM &amp; Private Label</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Your Brand, Our Manufacturing</h1>
              <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">From 50 units, we'll put your label on the bottle, your name on the CoA, and your choice of documentation in the box.</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E3DD]">
              <Image
                src="/images/categories/oem-services.jpg"
                alt="OEM private label packaging — custom manufacturing tailored to your brand"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B2A28]/30 via-transparent to-transparent" />
            </div>
          </div>
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
