"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Floating CTA — replaces the static "Ready to source" band that used to
 * sit at the top of the footer. Stays out of the way until the visitor has
 * scrolled past the midpoint of the page, then slides in from the bottom.
 * Hides again once the real footer scrolls into view (so it never sits on
 * top of the footer's own links), and can be dismissed manually.
 */
export default function FloatingCTA() {
  const [pastMidpoint, setPastMidpoint] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setPastMidpoint(scrollY / docHeight > 0.5);
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);

    const footerEl = document.querySelector("footer");
    let observer: IntersectionObserver | undefined;
    if (footerEl) {
      observer = new IntersectionObserver(
        ([entry]) => setFooterVisible(entry.isIntersecting),
        { rootMargin: "0px 0px -10% 0px" }
      );
      observer.observe(footerEl);
    }

    return () => {
      window.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      observer?.disconnect();
    };
  }, []);

  const visible = pastMidpoint && !footerVisible;

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 sm:pb-5 transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
      role="complementary"
      aria-label="Sourcing call to action"
      aria-hidden={!visible}
    >
      <div className="max-w-3xl mx-auto bg-white border border-[#E6E3DD] shadow-[0_8px_30px_rgba(43,42,40,0.12)] rounded-2xl px-5 py-4 sm:px-6 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-[#2B2A28] font-bold text-sm sm:text-base leading-tight">
              Ready to source your analytical solvents?
            </h3>
            <p className="text-[#8A8782] text-xs mt-0.5 hidden sm:block">
              Factory-direct supply. Free samples. Full documentation. 1-day response.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap justify-center flex-shrink-0">
            <Link
              href="/contact?type=sample"
              className="bg-[#3C6E71] text-white font-bold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#2C5154] transition-colors whitespace-nowrap"
            >
              Get Free Sample
            </Link>
            <Link
              href="/contact?type=quote"
              className="border border-[#D9D6CF] text-[#5C5A55] font-semibold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg hover:bg-[#FBFAF8] transition-colors whitespace-nowrap"
            >
              Request Quote
            </Link>
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="text-[#8A8782] hover:text-[#2B2A28] text-lg leading-none px-1.5 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
