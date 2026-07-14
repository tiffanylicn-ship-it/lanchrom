import type { Metadata } from "next";
import Link from "next/link";

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

export default function CustomPackagingPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/solutions" className="hover:text-[#3C6E71]">Solutions</Link> {" › "}
          <span className="text-[#5C5A55]">Custom Packaging</span>
        </div>
      </div>

      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Solutions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Order From 100mL. Your Label. Our Quality.</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            We hold lab-pack sizes in stock specifically so you don't have to commit to a drum before
            qualifying a product — and we'll put your name on the bottle once you do.
          </p>
        </div>
      </section>

      {/* Pack sizes */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* Private label */}
      <section className="py-14 bg-[#FBFAF8] border-y border-[#E6E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-start">
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
        </div>
      </section>

      <section className="py-14 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-3">Want to test it small first?</h2>
          <p className="text-[#5C5A55] mb-6">Request a free sample before committing to a packaging configuration.</p>
          <Link href="/contact?type=sample" className="btn-fill inline-flex">Get free sample</Link>
        </div>
      </section>
    </div>
  );
}
