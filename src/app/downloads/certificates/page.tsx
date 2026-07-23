import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quality Certificates & Compliance Documents | LANCHROM™",
  description: "Download quality system certificates, ISO documentation, GMP compliance letters, and export certificates for LANCHROM products.",
  alternates: { canonical: "https://www.lanchrom.com/downloads/certificates" },
};

export default function CertificatesPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs text-[#8A8782] mb-3">
            <Link href="/downloads" className="hover:text-[#3C6E71]">Downloads</Link> {" › "} <span className="text-[#5C5A55]">Certificates</span>
          </div>
          <h1 className="text-3xl font-bold text-[#2B2A28] mb-3">Quality Certificates & Compliance</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Facility-level quality system certificates, export documentation, and compliance letters — the documents your supplier qualification team needs.</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { t: "ISO 9001 Quality Management", d: "Facility-level QMS certification covering design, manufacturing, testing, and distribution of chemical solvents and reagents." },
              { t: "GMP Compliance Letter", d: "Statement of GMP compliance for pharmaceutical-grade products, confirming manufacturing practices align with cGMP requirements." },
              { t: "Certificate of Origin", d: "Issued per shipment — confirms country of manufacture for customs clearance and preferential tariff applications." },
              { t: "Fumigation Certificate", d: "ISPM-15 compliant fumigation certification for wooden pallet shipments, required by most importing countries." },
              { t: "Dangerous Goods Declaration", d: "UN/IMDG code compliant DG documentation for ocean freight of flammable and corrosive chemical shipments." },
              { t: "Halal / Kosher Certification", d: "Available for food-grade and pharmaceutical excipient products — process-level certification confirming compliant manufacturing." },
            ].map(item => (
              <div key={item.t} className="border border-[#E6E3DD] rounded-xl p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{item.t}</h3>
                <p className="text-[#8A8782] text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[#5C5A55] text-sm mb-6">All certificates are available by email. For supplier qualification packages (multiple documents bundled), contact info@lanchrom.com.</p>
          <Link href="/contact?type=certificates" className="btn-fill">Request Certificates</Link>
        </div>
      </section>
    </div>
  );
}
