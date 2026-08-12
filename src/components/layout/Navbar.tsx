"use client";
import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavGroupItem { label: string; href: string; badge?: string; }
interface NavGroup { heading: string; href: string; items: NavGroupItem[]; }

const PRODUCTS_NAV: { col1: NavGroup[]; col2: NavGroup[]; col3: NavGroup[] } = {
  col1: [
    { heading: "High-Purity Solvents & Chemicals", href: "/products/high-purity-solvents", items: [
      { label: "Analytical & Chromatography Grades", href: "/products/high-purity-solvents#analytical-and-chromatography-grades" },
      { label: "Spectroscopy & NMR", href: "/products/high-purity-solvents#spectroscopy-and-nmr" },
      { label: "Manufacturing & Regulated Grades", href: "/products/high-purity-solvents#manufacturing-and-regulated-grades" },
      { label: "Trace Analysis Chemicals", href: "/products/high-purity-solvents#trace-analysis-chemicals" },
      { label: "AR & GR Laboratory Reagents", href: "/products/high-purity-solvents#laboratory-reagent-grades", badge: "NEW" },
    ]},
    { heading: "Ready-to-Use Solutions", href: "/products/ready-to-use-solutions", items: [
      { label: "Prepared LC / LC-MS Mobile Phases", href: "/products/ready-to-use-solutions#prepared-lc-lc-ms-mobile-phases" },
      { label: "Application-Specific Solutions", href: "/products/ready-to-use-solutions#application-specific-solutions" },
    ]},
  ],
  col2: [
    { heading: "Reference Standards & Reagents", href: "/products/reference-standards-analytical-reagents", items: [
      { label: "Reference Standards & Calibration", href: "/products/reference-standards-analytical-reagents#reference-standards-and-calibration" },
      { label: "Pharmaceutical Compliance Standards", href: "/products/reference-standards-analytical-reagents#pharmaceutical-compliance-standards" },
      { label: "Water Determination Reagents", href: "/products/reference-standards-analytical-reagents#water-determination-reagents" },
    ]},
    { heading: "Chromatography & Sample Preparation", href: "/products/chromatography-sample-preparation", items: [
      { label: "Planar Chromatography", href: "/products/chromatography-sample-preparation#planar-chromatography" },
      { label: "Sample Preparation & Cleanup", href: "/products/chromatography-sample-preparation#sample-preparation-and-cleanup" },
    ]},
  ],
  col3: [
    { heading: "Life Science & Workflow Kits", href: "/products/life-science-workflow-kits", items: [
      { label: "Microbiology & Monitoring", href: "/products/life-science-workflow-kits#microbiology-and-monitoring" },
      { label: "Cell Processing & Cryopreservation", href: "/products/life-science-workflow-kits#cell-processing-and-cryopreservation" },
      { label: "Configured Workflow Kits", href: "/products/life-science-workflow-kits#configured-workflow-kits" },
    ]},
    { heading: "Pharmaceutical, Food & Lab Materials", href: "/products/pharmaceutical-food-laboratory-materials", items: [
      { label: "Pharmaceutical Ingredients", href: "/products/pharmaceutical-food-laboratory-materials#pharmaceutical-ingredients" },
      { label: "Food Ingredients", href: "/products/pharmaceutical-food-laboratory-materials#food-ingredients" },
      { label: "Laboratory & Process Materials", href: "/products/pharmaceutical-food-laboratory-materials#laboratory-and-process-materials" },
    ]},
  ],
};

const SOLUTIONS_NAV = [
  { label: "Fermentation Analysis", href: "/solutions/mobile-phase/fermentation-analysis", badge: "NEW" },
  { label: "Reagent Kits", href: "/solutions/reagent-kits" },
  { label: "Custom Packaging", href: "/solutions/custom-packaging" },
  { label: "Mobile Phase Solutions", href: "/solutions/mobile-phase" },
  { label: "OEM & Private Label", href: "/oem" },
];

const ABOUT_NAV = [
  { label: "About LANCHROM™", href: "/about" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Distributor Program", href: "/distributor-program" },
];

const APPLICATIONS_NAV = [
  { label: "HPLC Analysis", href: "/applications/hplc-analysis" },
  { label: "LC-MS Analysis", href: "/applications/lcms-analysis" },
  { label: "Pharmaceutical Analysis", href: "/applications/pharmaceutical-analysis" },
  { label: "Food Safety Testing", href: "/applications/food-safety-testing" },
  { label: "Environmental Analysis", href: "/applications/environmental-analysis" },
  { label: "Pesticide Residue", href: "/applications/pesticide-residue-analysis" },
  { label: "ICP-MS Elemental", href: "/applications/icp-ms-elemental-analysis" },
  { label: "Karl Fischer Moisture", href: "/applications/karl-fischer-moisture-analysis" },
];

type MenuKey = "products" | "solutions" | "applications" | "about";

type SimpleDropdownProps = {
  items: { label: string; href: string; badge?: string }[];
  viewAllHref: string;
  viewAllLabel: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function SimpleDropdown({ items, viewAllHref, viewAllLabel, onMouseEnter, onMouseLeave }: SimpleDropdownProps) {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="absolute z-50 top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#E6E3DD] p-2.5 mt-1">
      {items.map(item => (
        <Link key={item.href} href={item.href} className="flex items-center justify-between text-[15px] text-[#5C5A55] hover:text-[#003D91] hover:bg-[#FBFAF8] px-3 py-1.5 rounded-md transition-colors">
          <span>{item.label}</span>
          {item.badge && <span className="text-[9px] font-bold bg-[#E8F0EF] text-[#003D91] px-1.5 py-0.5 rounded">{item.badge}</span>}
        </Link>
      ))}
      <div className="mt-1.5 pt-1.5 border-t border-[#EFEDE8]">
        <Link href={viewAllHref} className="block text-[15px] font-semibold text-[#003D91] px-3 py-1.5 rounded-md hover:bg-[#FBFAF8]">{viewAllLabel}</Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const CLOSE_DELAY_MS = 300;

  const openNow = useCallback((menu: MenuKey) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpenMenu(menu);
  }, []);
  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), CLOSE_DELAY_MS);
  }, []);
  const cancelClose = useCallback(() => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  }, []);

  const navLinkClass = "text-[#5C5A55] hover:text-[#003D91] text-[15px] font-medium px-3 py-2 rounded-md hover:bg-[#FBFAF8] transition-colors";

  return (
    <header className={`${isHome ? "home-page-header" : "sticky top-0 bg-[#EAF4EF]/95 backdrop-blur-md"} z-50 border-b border-[#C9DBD3] shadow-[0_1px_0_rgba(10,81,76,0.04)]`}>
      <div className="border-b border-[#D8E5DF] bg-white/45">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-3 min-h-9 py-1 text-xs text-[#71817C]">
          <a href="mailto:info@lanchrom.com" className="hidden hover:text-[#003D91] transition-colors sm:inline">info@lanchrom.com</a>
          <span className="hidden h-3 w-px bg-[#C8D8D1] sm:block" aria-hidden="true" />
          <Link href="/contact" className="rounded px-2 py-1 font-bold uppercase tracking-[0.08em] text-[#0A514C] hover:bg-white hover:text-[#003D91]">
            Contact
          </Link>
          <span className="h-3 w-px bg-[#C8D8D1]" aria-hidden="true" />
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 gap-6">
          <Link href="/" className="notranslate flex items-center flex-shrink-0" translate="no">
            <div className="leading-tight">
              <Image src="/images/brand/lanchrom-logo.png" alt="LANCHROM™" width={944} height={181} className="h-11 sm:h-12 w-auto" priority />
              <span className="text-[#8A8782] text-[11px] block text-center font-medium tracking-wide mt-0.5">ANALYTICAL SCIENCE</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5 ml-4 flex-1">
            {/* Products */}
            <div className="relative" onMouseEnter={() => openNow("products")} onMouseLeave={scheduleClose}>
              <Link href="/products" className={navLinkClass + " flex items-center gap-1"}>Products <span className="text-[10px] mt-0.5">▾</span></Link>
              {openMenu === "products" && (
                <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute z-50 top-full left-0 w-[900px] bg-white rounded-xl shadow-xl border border-[#E6E3DD] p-6 grid grid-cols-3 gap-6 mt-1">
                  {[PRODUCTS_NAV.col1, PRODUCTS_NAV.col2, PRODUCTS_NAV.col3].map((col, ci) => (
                    <div key={ci} className="space-y-5">
                      {col.map(group => (
                        <div key={group.heading}>
                          <Link href={group.href} className="text-[11px] font-bold text-[#8A8782] uppercase tracking-wider mb-2 block hover:text-[#003D91] transition-colors">{group.heading} →</Link>
                          <div className="space-y-0.5">{group.items.map(item => (
                            <Link key={item.href} href={item.href} className="flex items-center justify-between text-[14.5px] text-[#5C5A55] hover:text-[#003D91] hover:bg-[#FBFAF8] px-2.5 py-1.5 rounded-md transition-colors">
                              <span>{item.label}</span>
                              {item.badge && <span className="text-[9px] font-bold bg-[#E8F0EF] text-[#003D91] px-1.5 py-0.5 rounded">{item.badge}</span>}
                            </Link>
                          ))}</div>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="col-span-3 pt-3 border-t border-[#EFEDE8]"><Link href="/products" className="text-sm font-semibold text-[#003D91] hover:text-[#2C5154]">View All Products →</Link></div>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div className="relative" onMouseEnter={() => openNow("solutions")} onMouseLeave={scheduleClose}>
              <Link href="/solutions" className={navLinkClass + " flex items-center gap-1"}>Solutions <span className="text-[10px] mt-0.5">▾</span></Link>
              {openMenu === "solutions" && <SimpleDropdown items={SOLUTIONS_NAV} viewAllHref="/solutions" viewAllLabel="All Solutions →" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} />}
            </div>

            {/* Applications */}
            <div className="relative" onMouseEnter={() => openNow("applications")} onMouseLeave={scheduleClose}>
              <Link href="/applications" className={navLinkClass + " flex items-center gap-1"}>Applications <span className="text-[10px] mt-0.5">▾</span></Link>
              {openMenu === "applications" && <SimpleDropdown items={APPLICATIONS_NAV} viewAllHref="/applications" viewAllLabel="All 31 Applications →" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} />}
            </div>

            {/* About Us (merged with Manufacturing) */}
            <div className="relative" onMouseEnter={() => openNow("about")} onMouseLeave={scheduleClose}>
              <Link href="/about" className={navLinkClass + " flex items-center gap-1"}>About Us <span className="text-[10px] mt-0.5">▾</span></Link>
              {openMenu === "about" && (
                <div onMouseEnter={cancelClose} onMouseLeave={scheduleClose} className="absolute z-50 top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-[#E6E3DD] p-2.5 mt-1">
                  {ABOUT_NAV.map(item => (
                    <Link key={item.href} href={item.href} className="block text-[15px] text-[#5C5A55] hover:text-[#003D91] hover:bg-[#FBFAF8] px-3 py-2 rounded-md transition-colors">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <form action="/search" className="relative">
              <input
                name="q"
                placeholder="Search products..."
                className="w-44 xl:w-56 border border-[#D8E2EA] rounded-lg px-3 py-2 text-xs text-[#334155] focus:outline-none focus:border-[#0E918C]"
              />
            </form>
            {!isHome && (
              <Link href="/contact?type=sample" className="bg-[#003D91] text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-[#002D6B] transition-colors whitespace-nowrap">Get Free Sample</Link>
            )}
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden ml-auto text-[#2B2A28] p-2">
            <span className="text-xl">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden bg-[#F3F8F5] border-t border-[#C9DBD3] px-4 pb-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {[
            { label: "All Products", href: "/products" },
            { label: "High-Purity Solvents & Chemicals", href: "/products/high-purity-solvents" },
            { label: "Ready-to-Use Solutions", href: "/products/ready-to-use-solutions" },
            { label: "Reference Standards & Reagents", href: "/products/reference-standards-analytical-reagents" },
            { label: "Chromatography & Sample Preparation", href: "/products/chromatography-sample-preparation" },
            { label: "Life Science & Workflow Kits", href: "/products/life-science-workflow-kits" },
            { label: "Pharmaceutical, Food & Lab Materials", href: "/products/pharmaceutical-food-laboratory-materials" },
            { label: "Solutions", href: "/solutions" },
            { label: "Applications", href: "/applications" },
            { label: "OEM & Custom Packaging", href: "/oem" },
            { label: "About Us", href: "/about" },
            { label: "Manufacturing", href: "/manufacturing" },
            { label: "Distributor Program", href: "/distributor-program" },
            { label: "Industries", href: "/industries" },
            { label: "Markets", href: "/markets" },
            { label: "Guides", href: "/guides" },
            { label: "Downloads", href: "/downloads" },
            { label: "Contact", href: "/contact" },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block text-[#5C5A55] hover:text-[#003D91] text-[16px] py-3 border-b border-[#EFEDE8]">{item.label}</Link>
          ))}
          {!isHome && (
            <Link href="/contact?type=sample" onClick={() => setMobileOpen(false)} className="block bg-[#3C6E71] text-white text-[16px] font-bold px-4 py-3.5 rounded-lg text-center mt-4">Get Free Sample</Link>
          )}
        </div>
      )}
    </header>
  );
}
