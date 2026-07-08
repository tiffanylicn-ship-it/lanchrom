import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Downloads | TDS, SDS, CoA, Certificates | LANCHROM™",
  description: "Download technical data sheets, safety data sheets, certificates of analysis, and quality certificates for LANCHROM™ products.",
  alternates: { canonical: "https://www.lanchrom.com/downloads" },
};

export default function DownloadsPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden py-20 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="absolute inset-0">
          <Image src="/images/WEBPIC4.jpg" alt="LANCHROM analytical solvent documentation background" fill priority className="object-cover object-center" />
          <div className="absolute inset-0 bg-white/72" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="tag-line mb-3">Documentation</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#102A43] mb-3">Downloads</h1>
          <p className="text-[#334155] text-lg max-w-2xl">
            Technical data sheets, safety data sheets, and certificates of analysis for any product.
            Documents are sent by email — visit a product page and use the Download CoA or Download TDS buttons.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { t: "Certificates of Analysis", d: "Batch-specific test results for any product. Request from the product page." },
              { t: "Technical Data Sheets", d: "Full specification sheets including storage, handling, and shelf life." },
              { t: "Quality Certificates", d: "GMP statements, ISO 9001, kosher and halal certificates available on request." },
            ].map(item => (
              <div key={item.t} className="card-flat p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Browse by product</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PRODUCTS.slice(0, 12).map(p => (
              <Link key={p._id} href={`/products/${p.category}/${p.slug}`} className="flex items-center justify-between px-4 py-3 border border-[#EFEDE8] rounded-lg hover:border-[#C9DBD9] transition-colors text-sm">
                <span className="text-[#2B2A28] font-medium">{p.name}</span>
                <span className="text-[#8A8782] text-xs">→</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/products" className="btn-line inline-flex">View full catalog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
