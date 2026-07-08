import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certificate of Analysis (CoA) Downloads | LANCHROM™",
  description: "Request batch-specific Certificates of Analysis for any LANCHROM product. Each CoA includes actual measured test data, not typical values.",
  alternates: { canonical: "https://www.lanchrom.com/downloads/coa" },
};

export default function CoAPage() {
  return (
    <div className="bg-white">
      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#8A8782] mb-3">
            <Link href="/downloads" className="hover:text-[#3C6E71]">Downloads</Link> {" › "} <span className="text-[#5C5A55]">Certificate of Analysis</span>
          </div>
          <h1 className="text-3xl font-bold text-[#2B2A28] mb-3">Certificate of Analysis (CoA)</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Batch-specific test data for every lot — not template values, but the actual numbers measured for your specific batch.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-bold text-[#2B2A28] mb-4">What every CoA includes</h2>
              <div className="space-y-3 text-sm text-[#5C5A55]">
                {["Product name, grade, and CAS number", "Lot/batch number matching the bottle label", "Manufacturing and expiry/retest dates", "Full specification table with actual measured values", "Test methods for each parameter (GC, KF, UV, ICP-MS)", "QC reviewer signature and release date"].map(item => (
                  <div key={item} className="flex gap-2"><span className="text-[#3C6E71] font-bold flex-shrink-0">→</span> {item}</div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#2B2A28] mb-4">How to request</h2>
              <div className="space-y-4">
                {[
                  { n: "01", t: "From a product page", d: "Visit any product page and click 'Request CoA' with the lot number from your bottle label" },
                  { n: "02", t: "By email", d: "Email sales@lanchrom.com with the product name and lot number — reply within 1 business day" },
                  { n: "03", t: "Pre-shipment", d: "CoAs are sent by email before shipment arrives, so you can review before receiving" },
                ].map(item => (
                  <div key={item.n} className="flex gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#3C6E71] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">{item.n}</span>
                    <div><h3 className="font-semibold text-[#2B2A28] text-sm">{item.t}</h3><p className="text-[#8A8782] text-xs mt-0.5">{item.d}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-[#E6E3DD]">
            <Link href="/contact?type=coa" className="btn-fill">Request a CoA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
