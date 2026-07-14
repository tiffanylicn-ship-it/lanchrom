import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | LANCHROM™",
  description: "LANCHROM privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: "https://www.lanchrom.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-[#2B2A28] mb-3">Privacy Policy</h1>
          <p className="text-[#8A8782] text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm text-[#5C5A55]">
          <h2 className="text-lg font-bold text-[#2B2A28]">Information We Collect</h2>
          <p>When you submit a form on our website (sample request, quote request, contact form, or OEM inquiry), we collect the information you provide — typically your name, company name, email address, phone number, and details about the products or services you're interested in. We also collect basic analytics data (page views, referral source) through Google Analytics to understand how our website is used.</p>

          <h2 className="text-lg font-bold text-[#2B2A28] mt-8">How We Use Your Information</h2>
          <p>We use the information you provide to respond to your inquiry, send you the samples or documents you requested, follow up on quote requests, and maintain our customer relationship management system (HubSpot CRM). We do not sell, rent, or share your contact information with third parties for their marketing purposes.</p>

          <h2 className="text-lg font-bold text-[#2B2A28] mt-8">Cookies and Analytics</h2>
          <p>Our website uses Google Analytics (GA4) to collect anonymized usage data, and Google reCAPTCHA v3 to prevent spam submissions. These services may set cookies in your browser. You can disable cookies through your browser settings, though this may affect form submission functionality.</p>

          <h2 className="text-lg font-bold text-[#2B2A28] mt-8">Data Retention</h2>
          <p>We retain your contact information and inquiry history in our CRM system for as long as there is a legitimate business relationship or potential relationship. You can request deletion of your data at any time by emailing sales@lanchrom.com.</p>

          <h2 className="text-lg font-bold text-[#2B2A28] mt-8">Contact</h2>
          <p>For any questions about this privacy policy or your data, contact us at sales@lanchrom.com.</p>
        </div>
      </section>
    </div>
  );
}
