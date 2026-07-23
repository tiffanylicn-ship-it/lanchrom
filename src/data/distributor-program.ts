export interface DistributorMarket {
  slug: string;
  country: string;
  region: string;
  url: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  pageType: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  summary: string;
  demand: string[];
  internalLinks: { label: string; href: string }[];
}

const sharedLinks = [
  { label: "HPLC Solvents", href: "/products/hplc-solvents" },
  { label: "LC-MS Solvents", href: "/products/lcms-solvents" },
  { label: "Mobile Phase Solutions", href: "/solutions/mobile-phase" },
  { label: "OEM & Private Label", href: "/oem" },
];

export const DISTRIBUTOR_MARKETS: DistributorMarket[] = [
  {
    slug: "india",
    country: "India",
    region: "South Asia",
    url: "/distributor-program/india",
    seoTitle: "HPLC Solvent Supplier India | Distributor Program | LANCHROM",
    metaDescription: "Become a LANCHROM distributor in India for HPLC solvents, HPLC ethanol, LC-MS solvents and ready-to-use mobile phase products.",
    h1: "HPLC Solvent Supplier & Distributor Program in India",
    pageType: "Distributor recruitment landing page",
    primaryKeyword: "HPLC Solvent Supplier India",
    secondaryKeywords: ["HPLC Ethanol India", "Mobile Phase India", "Analytical Solvent India"],
    summary: "We are seeking technically capable distribution partners serving pharmaceutical QC, CRO, testing and research laboratories across India.",
    demand: ["HPLC and LC-MS solvents", "HPLC ethanol and methanol", "Ready-to-use mobile phase", "OEM laboratory packaging"],
    internalLinks: [...sharedLinks, { label: "India Export Market", href: "/markets/india" }],
  },
  {
    slug: "vietnam",
    country: "Vietnam",
    region: "Southeast Asia",
    url: "/distributor-program/vietnam",
    seoTitle: "HPLC Solvent Vietnam | Distributor Program | LANCHROM",
    metaDescription: "Partner with LANCHROM in Vietnam to supply HPLC and analytical solvents to pharmaceutical, food safety and environmental laboratories.",
    h1: "HPLC & Analytical Solvent Distributor Program in Vietnam",
    pageType: "Distributor recruitment landing page",
    primaryKeyword: "HPLC Solvent Vietnam",
    secondaryKeywords: ["Analytical Solvent Vietnam", "LC-MS Solvent Vietnam", "Mobile Phase Vietnam"],
    summary: "We are recruiting a Vietnam partner with established laboratory relationships and the ability to support solvent handling, documentation and local delivery.",
    demand: ["Analytical solvent supply", "Pharmaceutical QC support", "Food and environmental testing", "Local stock and technical response"],
    internalLinks: [...sharedLinks, { label: "Vietnam Export Market", href: "/markets/vietnam" }],
  },
  {
    slug: "thailand",
    country: "Thailand",
    region: "Southeast Asia",
    url: "/distributor-program/thailand",
    seoTitle: "HPLC Solvent Thailand | Distributor Program | LANCHROM",
    metaDescription: "Apply to distribute LANCHROM HPLC, LC-MS and analytical solvents in Thailand with factory documentation and export support.",
    h1: "HPLC Solvent Supplier & Distributor Program in Thailand",
    pageType: "Distributor recruitment landing page",
    primaryKeyword: "HPLC Solvent Thailand",
    secondaryKeywords: ["Analytical Solvent Thailand", "Mobile Phase Thailand", "LC-MS Solvent Thailand"],
    summary: "LANCHROM is seeking a Thailand distributor serving analytical laboratories, universities, pharmaceutical plants and contract testing organizations.",
    demand: ["HPLC solvent distribution", "LC-MS and spectroscopy grades", "Pharmaceutical laboratory supply", "Sample and method support"],
    internalLinks: [...sharedLinks, { label: "Thailand Export Market", href: "/markets/thailand" }],
  },
  {
    slug: "malaysia",
    country: "Malaysia",
    region: "Southeast Asia",
    url: "/distributor-program/malaysia",
    seoTitle: "HPLC Solvent Malaysia | Distributor Program | LANCHROM",
    metaDescription: "Grow with LANCHROM as an HPLC solvent distributor in Malaysia for analytical labs, electronics and pharmaceutical quality control.",
    h1: "HPLC Solvent Supplier & Distributor Program in Malaysia",
    pageType: "SEO market and distributor landing page",
    primaryKeyword: "HPLC Solvent Malaysia",
    secondaryKeywords: ["Analytical Solvent Malaysia", "LC-MS Solvent Malaysia", "Electronic Grade Solvent Malaysia"],
    summary: "We welcome Malaysia distribution partners with access to analytical, pharmaceutical and electronics customers requiring controlled-purity solvents.",
    demand: ["HPLC and LC-MS solvents", "Electronic-grade chemicals", "Export documentation", "Local technical sales coverage"],
    internalLinks: [...sharedLinks, { label: "Malaysia Export Market", href: "/markets/malaysia" }],
  },
  {
    slug: "indonesia",
    country: "Indonesia",
    region: "Southeast Asia",
    url: "/distributor-program/indonesia",
    seoTitle: "HPLC Solvent Indonesia | Distributor Program | LANCHROM",
    metaDescription: "Join the LANCHROM distributor program in Indonesia for HPLC, LC-MS and laboratory solvents with OEM and export support.",
    h1: "HPLC & Laboratory Solvent Distributor Program in Indonesia",
    pageType: "Distributor recruitment landing page",
    primaryKeyword: "HPLC Solvent Indonesia",
    secondaryKeywords: ["Analytical Solvent Indonesia", "Laboratory Solvent Distributor Indonesia", "LC-MS Solvent Indonesia"],
    summary: "We are looking for an Indonesia partner able to reach pharmaceutical, food, environmental and industrial testing laboratories across key commercial regions.",
    demand: ["Laboratory solvent distribution", "Food and environmental testing", "Industrial laboratory supply", "Import and local logistics capability"],
    internalLinks: [...sharedLinks, { label: "Indonesia Export Market", href: "/markets/indonesia" }],
  },
];

export function getDistributorMarket(slug: string) {
  return DISTRIBUTOR_MARKETS.find(market => market.slug === slug);
}

export function getDistributorMarketSlugs() {
  return DISTRIBUTOR_MARKETS.map(market => market.slug);
}
