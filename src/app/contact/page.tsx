import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact LANCHROM™ | Request Sample, Quote, or Technical Support",
  description: "Get in touch with LANCHROM™ for sample requests, quotes, OEM inquiries, or technical support. 1 business day response time.",
  alternates: { canonical: "https://www.lanchrom.com/contact" },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
