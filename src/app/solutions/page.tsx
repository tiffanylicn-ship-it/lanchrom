import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions | Fermentation Analysis, Reagent Kits, Custom Packaging | LANCHROM™",
  description: "Mobile phase solutions, custom reagent kits, custom packaging, and OEM services for analytical laboratories.",
  alternates: { canonical: "https://www.lanchrom.com/solutions" },
};

export default function SolutionsIndexPage() {
  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Solutions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Beyond the Catalog</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Ready-to-use mobile phase, custom reagent kits, and packaging configured around how you actually work.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {[
            { name: "Fermentation Analysis", tagline: "Ready-to-use mobile phase for organic acid and sugar QC", href: "/solutions/mobile-phase/fermentation-analysis", featured: true },
            { name: "Mobile Phase Solutions", tagline: "Pre-made, nitrogen-sealed flex bags for pharma and food safety QC", href: "/solutions/mobile-phase" },
            { name: "Reagent Kits", tagline: "Custom-assembled kits for specific workflows", href: "/solutions/reagent-kits" },
            { name: "Custom Packaging", tagline: "Private label, small-pack, and OEM bottling", href: "/solutions/custom-packaging" },
          ].map(s => (
            <Link key={s.href} href={s.href} className={`group flex items-center justify-between py-5 px-5 border rounded-xl transition-all ${s.featured ? "border-[#ECCFC1] bg-[#FBF0EB] hover:bg-[#F5E3DA]" : "border-[#EFEDE8] hover:border-[#C9DBD9] hover:bg-[#FBFAF8]"}`}>
              <div>
                <h3 className={`font-bold transition-colors ${s.featured ? "text-[#B5654A]" : "text-[#2B2A28] group-hover:text-[#3C6E71]"}`}>{s.name}</h3>
                <p className="text-[#8A8782] text-sm mt-0.5">{s.tagline}</p>
              </div>
              <span className="text-lg flex-shrink-0">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
