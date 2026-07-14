import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = {
  "Products by Grade": [
    { label: "HPLC Solvents", href: "/products/hplc-solvents" },
    { label: "LC-MS Solvents", href: "/products/lcms-solvents" },
    { label: "UPLC Solvents", href: "/products/uplc-solvents" },
    { label: "GC Solvents", href: "/products/gc-solvents" },
    { label: "Pharma Grade USP/EP", href: "/products/pharma-grade" },
    { label: "Electronic Grade", href: "/products/electronic-grade" },
    { label: "Mobile Phase Bags", href: "/products/mobile-phase-bags" },
    { label: "Standard Solutions", href: "/products/standard-solutions" },
  ],
  "Solutions": [
    { label: "Fermentation Analysis", href: "/solutions/mobile-phase/fermentation-analysis" },
    { label: "Reagent Kits", href: "/solutions/reagent-kits" },
    { label: "Custom Packaging", href: "/solutions/custom-packaging" },
    { label: "OEM & Private Label", href: "/oem" },
    { label: "OEM Quote Calculator", href: "/oem/quote-calculator" },
    { label: "SPE Products", href: "/products/spe-products" },
    { label: "TLC Products", href: "/products/tlc-products" },
  ],
  "Industries": [
    { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
    { label: "Biotechnology", href: "/industries/biotechnology" },
    { label: "Fermentation", href: "/industries/fermentation" },
    { label: "Food Safety Testing", href: "/industries/food-testing" },
    { label: "Environmental", href: "/industries/environmental" },
    { label: "CRO / Bioanalytical", href: "/industries/cro" },
    { label: "All 20 Industries →", href: "/industries" },
    { label: "Applications →", href: "/applications" },
    { label: "Export Markets →", href: "/markets" },
  ],
  "Resources": [
    { label: "Knowledge Center", href: "/resources/knowledge-center" },
    { label: "In-Depth Guides", href: "/guides" },
    { label: "Downloads (TDS/SDS/CoA)", href: "/downloads" },
    { label: "Manufacturing", href: "/manufacturing" },
    { label: "FAQ Center", href: "/resources/faq" },
    { label: "Technical Blog", href: "/resources/blog" },
    { label: "About LANCHROM™", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#E8F5F2] text-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="block mb-3">
              <Image
                src="/images/brand/lanchrom-logo.png"
                alt="LANCHROM™"
                width={944}
                height={181}
                className="h-6 w-auto"
              />
              <span className="text-[#64748B] text-[9px] block mt-1 tracking-wider">ANALYTICAL SCIENCE</span>
            </Link>
            <p className="text-[#475569] text-xs leading-relaxed mb-4 max-w-xs">
              Factory-direct manufacturer of HPLC, LC-MS, GC grade solvents, mobile phase solutions, reagent kits, and OEM packaging.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#475569] mb-4">
              <a href="mailto:sales@lanchrom.com" className="hover:text-[#00B7C7] transition-colors">sales@lanchrom.com</a>
              <a href="https://www.lanchrom.com" className="hover:text-[#00B7C7] transition-colors">lanchrom.com</a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["GMP", "USP/EP", "ISO 9001", "Kosher"].map(cert => (
                <span key={cert} className="text-[9px] font-bold px-1.5 py-0.5 bg-white/8 border border-white/12 rounded text-white/50">{cert}</span>
              ))}
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[#0E918C] text-[11px] font-bold uppercase tracking-wider mb-3">{heading}</h4>
              <ul className="space-y-1.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[#475569] hover:text-[#0E918C] text-xs transition-colors leading-snug">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#CDE5DF] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[#64748B]">
          <p>© 2025 LANCHROM™. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#0E918C] transition-colors">Privacy</Link>
            <Link href="/sitemap.xml" className="hover:text-[#0E918C] transition-colors">Sitemap</Link>
            <Link href="/contact" className="hover:text-[#0E918C] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
