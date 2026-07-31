import type { Metadata } from "next";
import Image from "next/image";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact LANCHROM™",
  description: "Contact LANCHROM for solvent samples, quotations and OEM enquiries. Our sales team replies within one business day.",
  keywords: ["contact LANCHROM"],
  alternates: { canonical: "https://www.lanchrom.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="overflow-hidden border-b border-[#C9DBD3] bg-[#EAF4EF]">
        <div className="mx-auto grid max-w-7xl lg:min-h-[440px] lg:grid-cols-[0.88fr_1.12fr]">
          <div className="flex items-center px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
            <div>
              <p className="tag-line mb-3">Get in Touch</p>
              <h1 className="mb-4 text-3xl font-bold text-[#173A35] md:text-5xl">Contact LANCHROM</h1>
              <p className="max-w-xl text-base leading-7 text-[#526660] md:text-lg">
                Tell us the solvent, grade, packaging and destination you need. Our team responds within one business day.
              </p>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-[440px]">
            <Image
              src="/images/contact-lanchrom-team.png"
              alt="LANCHROM team at an analytical science exhibition"
              fill
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <ContactPageClient />
    </>
  );
}
