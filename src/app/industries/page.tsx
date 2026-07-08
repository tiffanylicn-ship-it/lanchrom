import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { INDUSTRIES } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | LANCHROM™",
  description: "Pharmaceutical, biotechnology, fermentation, food testing, environmental, CRO, forensic, semiconductor, and 12+ more industries served with factory-direct solvents.",
  alternates: { canonical: "https://www.lanchrom.com/industries" },
};

export default function IndustriesIndexPage() {
  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-center">
            <div>
              <p className="tag-line mb-3">Industries</p>
              <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Who We Serve</h1>
              <p className="text-[#5C5A55] text-lg max-w-2xl">Different labs need different impurity profiles. We tailor grade, packaging, and documentation to your industry's specific requirements.</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#E6E3DD]">
              <Image
                src="/images/categories/applications.jpg"
                alt="Applications across pharmaceutical, biotechnology, food testing, and environmental analysis"
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
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.values(INDUSTRIES).map(ind => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="group flex items-center justify-between py-5 px-5 border border-[#EFEDE8] rounded-xl hover:border-[#C9DBD9] hover:bg-[#FBFAF8] transition-all">
                <div>
                  <h3 className="font-bold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors">{ind.name}</h3>
                  <p className="text-[#8A8782] text-sm mt-0.5">{ind.tagline}</p>
                </div>
                <span className="text-[#C9DBD9] group-hover:text-[#3C6E71] group-hover:translate-x-1 transition-all text-lg flex-shrink-0 ml-3">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
