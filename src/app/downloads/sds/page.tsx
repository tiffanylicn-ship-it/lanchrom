import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety Data Sheet (SDS) Downloads | LANCHROM™",
  description: "Download GHS-compliant 16-section Safety Data Sheets for LANCHROM solvents and chemicals.",
  alternates: { canonical: "https://www.lanchrom.com/downloads/sds" },
};

export default function SDSPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#8A8782] mb-3">
            <Link href="/downloads" className="hover:text-[#3C6E71]">Downloads</Link> {" › "} <span className="text-[#5C5A55]">Safety Data Sheet</span>
          </div>
          <h1 className="text-3xl font-bold text-[#2B2A28] mb-3">Safety Data Sheets (SDS)</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">GHS-compliant 16-section Safety Data Sheets — the document your EHS team and customs broker need for safe handling, storage, and international transport.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#2B2A28] mb-5">Standard 16-section GHS format</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 text-sm">
            {["1. Identification", "2. Hazard identification", "3. Composition / information", "4. First-aid measures", "5. Fire-fighting measures", "6. Accidental release", "7. Handling & storage", "8. Exposure controls / PPE", "9. Physical & chemical properties", "10. Stability & reactivity", "11. Toxicological information", "12. Ecological information", "13. Disposal considerations", "14. Transport (UN/IMDG)", "15. Regulatory information", "16. Other information"].map(s => (
              <div key={s} className="bg-[#FBFAF8] border border-[#EFEDE8] rounded-lg px-3 py-2 text-[#5C5A55] text-xs">{s}</div>
            ))}
          </div>
          <div className="bg-[#EBF2F2] rounded-xl p-6 mb-8">
            <h3 className="font-bold text-[#2B2A28] mb-2">Languages available</h3>
            <p className="text-[#5C5A55] text-sm">SDS documents are available in English (default) and Chinese. Arabic, Spanish, and French translations available on request for specific products.</p>
          </div>
          <Link href="/contact?type=sds" className="btn-fill">Request an SDS</Link>
        </div>
      </section>
    </div>
  );
}
