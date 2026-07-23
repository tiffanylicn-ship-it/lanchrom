import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact LANCHROM™ | Request Sample, Quote, or Technical Support",
  description: "Get in touch with LANCHROM™ for sample requests, quotes, OEM inquiries, or technical support. 1 business day response time.",
  alternates: { canonical: "https://www.lanchrom.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-[#E6E3DD] bg-[#FBFAF8] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Get in Touch</p>
          <h1 className="mb-3 text-3xl font-bold text-[#2B2A28] md:text-4xl">Contact LANCHROM</h1>
          <p className="max-w-xl text-lg text-[#5C5A55]">
            Sample requests, quotes, OEM inquiries, or technical questions; our team responds within one business day.
          </p>
        </div>
      </section>
      <ContactPageClient />
    </>
  );
}

