import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Data Sheet (TDS) Downloads | LANCHROM™",
  description: "Download technical data sheets for LANCHROM solvents — full specifications, storage conditions, packaging, and application guidance.",
  alternates: { canonical: "https://www.lanchrom.com/downloads/tds" },
};

export default function TDSPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#8A8782] mb-3">
            <Link href="/downloads" className="hover:text-[#3C6E71]">Downloads</Link> {" › "} <span className="text-[#5C5A55]">Technical Data Sheet</span>
          </div>
          <h1 className="text-3xl font-bold text-[#2B2A28] mb-3">Technical Data Sheets (TDS)</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Complete product specifications, physical properties, storage conditions, and recommended applications — the reference document for method development and supplier qualification.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-5">What a TDS includes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {[
              { t: "Chemical Identity", d: "IUPAC name, CAS number, molecular formula, molecular weight" },
              { t: "Grade Specifications", d: "Full spec table: assay, water content, UV cutoff, NVR, trace metals" },
              { t: "Physical Properties", d: "Density, boiling point, melting point, refractive index, flash point" },
              { t: "Storage & Handling", d: "Recommended storage temperature, light sensitivity, shelf life" },
              { t: "Packaging Options", d: "Available volumes, container materials, closure types" },
              { t: "Applications", d: "Recommended analytical methods and industry applications" },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-5">
                <h3 className="font-bold text-[#2B2A28] text-sm mb-1.5">{item.t}</h3>
                <p className="text-[#8A8782] text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5C5A55] text-sm mb-6">Direct product-level TDS downloads currently cover pharmaceutical-grade solvents, HPLC analytical solvents, and ready-to-use mobile phase bags. Each PDF consolidates the product's available package sizes and grade scope. Other product documents remain available on request.</p>
          <Link href="/downloads#document-library" className="btn-fill">Browse all TDS files</Link>
        </div>
      </section>
    </div>
  );
}
