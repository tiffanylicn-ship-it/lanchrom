import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./globals-brand.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import SiteChatWidget from "@/components/layout/SiteChatWidget";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "LANCHROM™ | Precision Solvents for Analytical Science", template: "%s | LANCHROM™" },
  description: "Factory-direct HPLC, LC-MS, GC grade solvents, mobile phase solutions, reagent kits, and custom packaging. GMP certified. Free samples available.",
  metadataBase: new URL("https://www.lanchrom.com"),
  openGraph: {
    type: "website", locale: "en_US", url: "https://www.lanchrom.com", siteName: "LANCHROM™",
    title: "LANCHROM™ | Precision Solvents for Analytical Science",
    description: "Factory-direct HPLC, LC-MS, GC solvents. Free samples. Custom packaging. OEM services.",
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org", "@type": "Organization",
            "name": "LANCHROM™", "url": "https://www.lanchrom.com",
            "description": "Factory-direct manufacturer of HPLC, LC-MS, GC grade solvents.",
            "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "email": "sales@lanchrom.com" },
            "areaServed": ["US","EU","IN","VN","TH","MY","ID","AE"],
          })}}
        />
      </head>
      <body style={{ margin: 0, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Script id="hs-script" src="//js.hs-scripts.com/246539586.js" strategy="afterInteractive" />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
              `}
            </Script>
          </>
        )}
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
      </body>
    </html>
  );
}
