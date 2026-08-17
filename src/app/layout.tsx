import type { Metadata } from "next";
import "./globals.css";
import "./globals-brand.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SiteChatWidget from "@/components/layout/SiteChatWidget";
import PrivacyConsent from "@/components/analytics/PrivacyConsent";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default: "LANCHROM™ | Precision Solvents for Analytical Science", template: "%s | LANCHROM™" },
  description: "LANCHROM manufactures high-purity solvents with documented quality, flexible packaging and global export support.",
  metadataBase: new URL("https://www.lanchrom.com"),
  openGraph: {
    type: "website", locale: "en_US", url: "https://www.lanchrom.com", siteName: "LANCHROM™",
    title: "LANCHROM™ | Precision Solvents for Analytical Science",
    description: "High-purity solvents with documented quality, flexible packaging and global export support.",
  },
  twitter: { card: "summary_large_image", title: "LANCHROM™", description: "Precision Solvents for Analytical Science" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="google-consent-defaults" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization",
            "name": "LANCHROM™", "url": "https://www.lanchrom.com",
            "description": "Manufacturer of high-purity solvents for analytical science.",
            "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "sales@lanchrom.com" },
            "areaServed": ["US","EU","IN","VN","TH","MY","ID","AE"],
          })}}
        />
      </head>
      <body style={{ margin: 0, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="afterInteractive"
          />
        )}
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <SiteChatWidget />
        <PrivacyConsent />
      </body>
    </html>
  );
}
