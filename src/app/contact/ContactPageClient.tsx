"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

const SampleModal = dynamic(() => import("@/components/forms/SampleModal"), { ssr: false });
const QuoteModal = dynamic(() => import("@/components/forms/QuoteModal"), { ssr: false });

function ContactContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const product = searchParams.get("product") || "";
  const [sampleOpen, setSampleOpen] = useState(type === "sample");
  const [quoteOpen, setQuoteOpen] = useState(type === "quote");

  return (
    <div className="bg-white">
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <button onClick={() => setSampleOpen(true)} className="text-left card-flat p-6 hover:border-[#C9DBD9] transition-colors">
              <h3 className="font-bold text-[#2B2A28] mb-2">Get a Free Sample</h3>
              <p className="text-[#8A8782] text-sm mb-4">Qualify our product for your application before committing to a bulk order.</p>
              <span className="text-[#3C6E71] font-semibold text-sm">Request sample →</span>
            </button>

            <button onClick={() => setQuoteOpen(true)} className="text-left card-flat p-6 hover:border-[#C9DBD9] transition-colors">
              <h3 className="font-bold text-[#2B2A28] mb-2">Request a Quote</h3>
              <p className="text-[#8A8782] text-sm mb-4">Get pricing for your specific product, packaging, and volume requirements.</p>
              <span className="text-[#3C6E71] font-semibold text-sm">Request quote →</span>
            </button>

            <Link href="/oem/quote-calculator" className="card-flat p-6 hover:border-[#C9DBD9] transition-colors">
              <h3 className="font-bold text-[#2B2A28] mb-2">OEM &amp; Private Label</h3>
              <p className="text-[#8A8782] text-sm mb-4">Configure custom packaging, labeling, and documentation for your brand.</p>
              <span className="text-[#3C6E71] font-semibold text-sm">OEM calculator →</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mt-16 pt-12 border-t border-[#EFEDE8]">
            <div>
              <h3 className="font-bold text-[#2B2A28] mb-4">Direct Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#8A8782] text-xs uppercase tracking-wide mb-0.5">Sales &amp; Quotes</p>
                  <a href="mailto:info@lanchrom.com" className="text-[#3C6E71] font-medium hover:underline">info@lanchrom.com</a>
                </div>
                <div>
                  <p className="text-[#8A8782] text-xs uppercase tracking-wide mb-0.5">Technical Support</p>
                  <a href="mailto:tech@lanchrom.com" className="text-[#3C6E71] font-medium hover:underline">tech@lanchrom.com</a>
                </div>
                <div>
                  <p className="text-[#8A8782] text-xs uppercase tracking-wide mb-0.5">Response Time</p>
                  <p className="text-[#2B2A28] font-medium">1 business day</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#2B2A28] mb-4">Before You Reach Out</h3>
              <ul className="space-y-2 text-sm text-[#5C5A55]">
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Have your product/grade requirement ready</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Know your approximate annual volume</li>
                <li className="flex gap-2"><span className="text-[#3C6E71]">→</span> Note your destination country for shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SampleModal isOpen={sampleOpen} onClose={() => setSampleOpen(false)} prefilledProduct={product} />
      <QuoteModal isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} prefilledProduct={product} />
    </div>
  );
}

export default function ContactPageClient() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-[#8A8782]">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}

