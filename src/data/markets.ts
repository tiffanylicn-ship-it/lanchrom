// ============================================================
// LANCHROM™ — Export Market Pages (by country)
// ============================================================
//
// SHARED_EXPORT_TERMS below reflects standing company policy that
// applies uniformly across all 10 markets (confirmed by the business
// owner): shipped from Ningbo/Shanghai, 7–30 day transit depending on
// destination and mode, all four incoterms supported, full document
// set provided, and an established hazmat/DG export process for
// flammable solvents (UN1648 etc.). MOQ and payment terms are
// intentionally quoted per inquiry rather than fixed — the page
// reflects that honestly instead of inventing a number.
//
// Country-specific case references (customer examples) are NOT yet
// provided — that section still renders an honest "contact us" state
// per country until real (even anonymized) references are supplied.

export interface MarketInfo {
  slug: string;
  countryName: string;
  region: "North America" | "Europe" | "South Asia" | "Southeast Asia" | "Middle East" | "Europe & Central Asia" | "East Asia" | "Africa" | "Latin America";
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;

  // --- Factual / operational fields ---
  shippingPorts?: string[];          // e.g. ["Nhava Sheva (JNPT)", "Mundra"]
  shippingLeadTimeSea?: string;      // e.g. "18–22 days, FOB Shanghai to JNPT"
  shippingLeadTimeAir?: string;      // e.g. "4–6 days"
  incoterms?: string[];              // e.g. ["FOB Shanghai", "CIF", "EXW"]
  importCertifications?: string[];   // e.g. ["CDSCO import license (buyer-held)", "BIS"]
  minimumOrderValue?: string;        // e.g. "$3,000 USD or 1×20ft LCL"
  paymentTerms?: string[];           // e.g. ["30% deposit, 70% before shipment", "L/C at sight"]
  localLanguageSupport?: boolean;
  hazmatExportNotes?: string;        // country-specific UN/IMDG or customs notes for flammable solvents
  caseReference?: string;            // anonymized customer example, e.g. "a generic drug manufacturer in Gujarat"

  // --- Relevant product categories for this market (editorial, safe to set now) ---
  relevantCategories: string[]; // category slugs
}

// Applied to every market below via spread. Origin ports, transit time
// range, incoterms, document set, and hazmat process are the same
// company-wide; only relevantCategories and (eventually) country-specific
// certifications/case references differ per market.
const SHARED_EXPORT_TERMS: Pick<MarketInfo, "shippingPorts" | "shippingLeadTimeSea" | "shippingLeadTimeAir" | "incoterms" | "importCertifications" | "hazmatExportNotes"> = {
  shippingPorts: ["Ningbo", "Shanghai"],
  shippingLeadTimeSea: "7–30 days transit, depending on destination port and routing — confirmed at quote",
  shippingLeadTimeAir: "Available for sample and urgent orders — confirmed at quote",
  incoterms: ["EXW", "FOB", "CIF", "DDP"],
  importCertifications: ["Certificate of Analysis (CoA)", "Safety Data Sheet (SDS/MSDS)", "Certificate of Origin", "Fumigation Certificate (where required)"],
  hazmatExportNotes: "Established export process for UN-classified flammable solvents (e.g. UN1648 acetonitrile, UN1170 ethanol), including DG documentation and compliant packaging.",
};

export const MARKETS: Record<string, MarketInfo> = {

  "united-states": {
    slug: "united-states", countryName: "United States", region: "North America",
    tagline: "HPLC, LC-MS, and OEM solvent supply for US laboratories and distributors",
    description: "Factory-direct HPLC, LC-MS, mobile phase, and OEM/private-label solvents for US pharmaceutical QC, CRO/CDMO, environmental, food testing, and laboratory distribution channels.",
    seoTitle: "HPLC Solvent Supplier USA | LC-MS Solvents | LANCHROM™",
    seoDescription: "Factory-direct HPLC and LC-MS solvents for the United States. OEM packaging, CoA/SDS support, and DG export from China.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "18–30 days via Ningbo/Shanghai to Los Angeles, Long Beach, New York/New Jersey, Houston, or Savannah",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — OSHA/GHS 16-section format",
      "Certificate of Origin — available on request",
      "DG declaration and IMDG documentation for flammable solvents",
      "Private-label documentation support for distributors and OEM buyers",
    ],
    relevantCategories: ["hplc-solvents", "lcms-solvents", "mobile-phase-bags", "pharma-grade", "electronic-grade"],
  },
  canada: {
    slug: "canada", countryName: "Canada", region: "North America",
    tagline: "Analytical solvents for Canadian pharma, environmental, and food testing labs",
    description: "HPLC, LC-MS, and GC solvents for Canadian pharmaceutical QC, cannabis testing, environmental monitoring, food safety, and academic research laboratories.",
    seoTitle: "HPLC Solvent Supplier Canada | LANCHROM™",
    seoDescription: "HPLC, LC-MS and GC solvents shipped to Canada with CoA, SDS and DG export documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "18–28 days via Ningbo/Shanghai to Vancouver, Prince Rupert, or Montreal via transshipment",
    relevantCategories: ["hplc-solvents", "lcms-solvents", "gc-solvents", "standard-solutions"],
  },
  mexico: {
    slug: "mexico", countryName: "Mexico", region: "North America",
    tagline: "Chromatography solvents for Mexico's pharmaceutical, food, and industrial QC labs",
    description: "Factory-direct HPLC and GC grade solvents for Mexican pharmaceutical manufacturing, food export testing, environmental labs, and industrial quality control.",
    seoTitle: "HPLC Solvent Supplier Mexico | LANCHROM™",
    seoDescription: "Factory-direct chromatography solvents shipped to Mexico. HPLC, LC-MS, GC solvents and OEM packaging available.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "22–32 days via Ningbo/Shanghai to Manzanillo, Lazaro Cardenas, or Veracruz",
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade", "food-grade"],
  },
  germany: {
    slug: "germany", countryName: "Germany", region: "Europe",
    tagline: "HPLC and LC-MS solvent supply for Germany's pharma, chemical, and analytical labs",
    description: "Analytical-grade solvents for German pharmaceutical QC, chemical manufacturing, contract laboratories, environmental testing, and distributor private-label programs.",
    seoTitle: "HPLC Solvent Supplier Germany | LANCHROM™",
    seoDescription: "HPLC and LC-MS solvents shipped to Germany. CoA/SDS, OEM packaging, and DG documentation support.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "28–38 days via Ningbo/Shanghai to Hamburg, Bremerhaven, or Rotterdam gateway",
    importCertifications: ["Certificate of Analysis (CoA)", "EU-format Safety Data Sheet support", "Certificate of Origin", "DG documentation under IMDG rules", "REACH/CLP documentation support available by inquiry"],
    relevantCategories: ["hplc-solvents", "lcms-solvents", "pharma-grade", "trace-analysis-grade"],
  },
  netherlands: {
    slug: "netherlands", countryName: "Netherlands", region: "Europe",
    tagline: "Rotterdam gateway supply for European analytical solvent distribution",
    description: "HPLC, LC-MS, GC, and OEM solvent supply through the Netherlands for EU laboratory distributors, pharma QC labs, and environmental testing networks.",
    seoTitle: "HPLC Solvent Supplier Netherlands | LANCHROM™",
    seoDescription: "Factory-direct analytical solvents shipped to Rotterdam for EU distributors and laboratories.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "28–36 days via Ningbo/Shanghai to Rotterdam",
    importCertifications: ["Certificate of Analysis (CoA)", "EU-format Safety Data Sheet support", "Certificate of Origin", "DG documentation under IMDG rules", "REACH/CLP documentation support available by inquiry"],
    relevantCategories: ["hplc-solvents", "lcms-solvents", "mobile-phase-bags", "pharma-grade"],
  },
  italy: {
    slug: "italy", countryName: "Italy", region: "Europe",
    tagline: "Analytical and process solvents for Italy's pharma and food testing sectors",
    description: "Chromatography solvents for Italian pharmaceutical QC, nutraceuticals, food testing, environmental laboratories, and industrial distributors.",
    seoTitle: "HPLC Solvent Supplier Italy | LANCHROM™",
    seoDescription: "HPLC, LC-MS and GC solvents shipped to Italy via Genoa or La Spezia with CoA/SDS support.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "28–38 days via Ningbo/Shanghai to Genoa, La Spezia, or Trieste",
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade", "food-grade"],
  },
  france: {
    slug: "france", countryName: "France", region: "Europe",
    tagline: "LC-MS and HPLC solvents for French pharma, cosmetics, and testing labs",
    description: "Analytical solvents for French pharmaceutical QC, cosmetics testing, food safety laboratories, environmental analysis, and OEM/private-label distributors.",
    seoTitle: "HPLC Solvent Supplier France | LANCHROM™",
    seoDescription: "Factory-direct HPLC and LC-MS solvents shipped to France with CoA, SDS and DG export documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "30–40 days via Ningbo/Shanghai to Le Havre, Fos-sur-Mer, or Antwerp gateway",
    relevantCategories: ["hplc-solvents", "lcms-solvents", "standard-solutions", "pharma-grade"],
  },
  "united-kingdom": {
    slug: "united-kingdom", countryName: "United Kingdom", region: "Europe",
    tagline: "Analytical solvents for UK pharma QC, CRO, and environmental labs",
    description: "HPLC, LC-MS, and GC solvent supply for UK pharmaceutical QC, CROs, university labs, environmental testing, and laboratory distributors.",
    seoTitle: "HPLC Solvent Supplier UK | LANCHROM™",
    seoDescription: "HPLC, LC-MS and GC solvents shipped to the United Kingdom with CoA, SDS and DG documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "28–38 days via Ningbo/Shanghai to Felixstowe, Southampton, or London Gateway",
    relevantCategories: ["hplc-solvents", "lcms-solvents", "gc-solvents", "standard-solutions"],
  },
  poland: {
    slug: "poland", countryName: "Poland", region: "Europe",
    tagline: "Chromatography solvent supply for Poland's pharma, food, and contract labs",
    description: "Factory-direct HPLC and GC solvents for Polish pharmaceutical manufacturing, food export testing, contract laboratories, and regional distributors.",
    seoTitle: "HPLC Solvent Supplier Poland | LANCHROM™",
    seoDescription: "HPLC and GC grade solvents shipped to Poland through Hamburg, Gdansk, or Rotterdam routes.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "30–42 days via Ningbo/Shanghai to Gdansk, Hamburg, or Rotterdam gateway",
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade", "mobile-phase-bags"],
  },
  india: {
    slug: "india",
    countryName: "India",
    region: "South Asia",
    tagline: "HPLC and pharma-grade solvent supply for India's pharmaceutical and CRO sector",
    description: "Factory-direct HPLC, LC-MS, and pharmaceutical-grade solvents for India's pharmaceutical manufacturing, generic drug, and contract research sector.",
    seoTitle: "HPLC Solvent Supplier India | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharma grade solvents shipped to India. Acetonitrile, methanol, IPA for pharmaceutical QC and CRO labs.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "12–18 days via Ningbo/Shanghai to JNPT (Nhava Sheva), Mundra, or Chennai",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific, required by CDSCO for pharma-grade imports",
      "Safety Data Sheet (SDS) — GHS-compliant, 16-section format accepted by Indian customs",
      "Certificate of Origin — required for preferential tariff under RCEP or bilateral agreements",
      "Fumigation Certificate — ISPM-15 compliant for wooden pallet shipments",
      "FSSAI compliance documentation — required if importing food-grade chemicals for food industry use",
      "Drug import license — buyer-held, required for pharmaceutical-grade solvents imported for drug manufacturing",
      "BIS certification — may be required for certain chemical products under mandatory BIS schemes",
    ],
    hazmatExportNotes: "India customs requires detailed UN classification, proper shipping name, and packing group on all DG documentation. Flammable solvents (Class 3) require NOC from PESO (Petroleum and Explosives Safety Organisation) for import. We prepare all DG documentation per IMDG code for sea freight to Indian ports.",
    relevantCategories: ["hplc-solvents", "lcms-solvents", "pharma-grade", "standard-solutions"],
  },
  vietnam: {
    slug: "vietnam",
    countryName: "Vietnam",
    region: "Southeast Asia",
    tagline: "Analytical solvents for Vietnam's growing pharmaceutical and food testing sector",
    description: "HPLC and GC grade solvents for Vietnam's pharmaceutical manufacturing, food safety testing, and environmental monitoring laboratories.",
    seoTitle: "HPLC Solvent Supplier Vietnam | LANCHROM™",
    seoDescription: "Factory-direct HPLC and GC grade solvents shipped to Vietnam. For pharmaceutical QC, food testing, and environmental labs.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "gc-solvents", "food-grade"],
  },
  thailand: {
    slug: "thailand",
    countryName: "Thailand",
    region: "Southeast Asia",
    tagline: "Chromatography solvents for Thailand's food export and pharmaceutical QC labs",
    description: "HPLC, GC, and mobile phase solutions for Thailand's food export testing, pharmaceutical manufacturing, and agricultural residue analysis laboratories.",
    seoTitle: "HPLC Solvent Supplier Thailand | LANCHROM™",
    seoDescription: "Factory-direct chromatography solvents shipped to Thailand. For food export testing, pharma QC, and pesticide residue analysis.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "gc-solvents", "spe-products"],
  },
  malaysia: {
    slug: "malaysia",
    countryName: "Malaysia",
    region: "Southeast Asia",
    tagline: "Pharma and food-grade solvents with halal-certified options for Malaysia",
    description: "HPLC grade solvents and food/pharma excipients for Malaysia's pharmaceutical and food manufacturing sector, with halal certification available.",
    seoTitle: "HPLC Solvent Supplier Malaysia | LANCHROM™",
    seoDescription: "Factory-direct HPLC solvents and halal-certified excipients shipped to Malaysia. For pharmaceutical and food manufacturing QC.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "pharma-grade", "excipients", "food-grade"],
  },
  indonesia: {
    slug: "indonesia",
    countryName: "Indonesia",
    region: "Southeast Asia",
    tagline: "HPLC and mobile phase solutions for Indonesia's fermentation and food industry",
    description: "Ready-to-use mobile phase and HPLC grade solvents for Indonesia's fermentation, food & beverage, and pharmaceutical testing laboratories.",
    seoTitle: "HPLC Solvent Supplier Indonesia | LANCHROM™",
    seoDescription: "Factory-direct HPLC solvents and mobile phase bags shipped to Indonesia. For fermentation QC and food & beverage testing.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "mobile-phase-bags", "food-grade"],
  },
  philippines: {
    slug: "philippines",
    countryName: "Philippines",
    region: "Southeast Asia",
    tagline: "Chromatography solvents for the Philippines' pharmaceutical and food testing labs",
    description: "HPLC and GC grade solvents for the Philippines' pharmaceutical manufacturing, food safety, and environmental testing laboratories.",
    seoTitle: "HPLC Solvent Supplier Philippines | LANCHROM™",
    seoDescription: "Factory-direct chromatography solvents shipped to the Philippines. For pharmaceutical QC and food safety testing labs.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "gc-solvents", "standard-solutions"],
  },
  uae: {
    slug: "uae",
    countryName: "United Arab Emirates",
    region: "Middle East",
    tagline: "Analytical solvents distributed through Jebel Ali for the GCC region",
    description: "HPLC, LC-MS, and pharma grade solvents shipped to the UAE, serving as a re-export and distribution hub for laboratories across the GCC region.",
    seoTitle: "HPLC Solvent Supplier UAE | LANCHROM™",
    seoDescription: "Factory-direct HPLC and LC-MS grade solvents shipped to UAE. Jebel Ali distribution for GCC pharmaceutical and testing labs.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "14–20 days via Ningbo/Shanghai to Jebel Ali (Dubai)",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific with lot number",
      "Safety Data Sheet (SDS) — GHS format, Arabic/English",
      "Certificate of Origin — Chamber of Commerce attested",
      "UAE Ministry of Interior approval — required for certain controlled hazardous chemicals",
      "Halal certification — available for food-grade and pharmaceutical excipients",
    ],
    relevantCategories: ["hplc-solvents", "lcms-solvents", "pharma-grade"],
  },
  "saudi-arabia": {
    slug: "saudi-arabia",
    countryName: "Saudi Arabia",
    region: "Middle East",
    tagline: "SFDA-aligned pharma grade solvents for Saudi Arabia's pharmaceutical sector",
    description: "Pharmaceutical and HPLC grade solvents for Saudi Arabia's pharmaceutical manufacturing and quality control laboratories.",
    seoTitle: "HPLC Solvent Supplier Saudi Arabia | LANCHROM™",
    seoDescription: "Factory-direct pharma and HPLC grade solvents shipped to Saudi Arabia. For pharmaceutical manufacturing and QC labs.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "16–22 days via Ningbo/Shanghai to Jeddah or Dammam",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific, SFDA may review for pharma-grade imports",
      "Safety Data Sheet (SDS) — Arabic translation required for Saudi customs clearance",
      "SASO conformity certificate — SABER platform registration may be required",
      "SFDA registration — required for pharmaceutical-grade solvents and excipients",
      "Certificate of Origin — may require Saudi Embassy legalization",
      "Halal certification — required for food-grade and pharmaceutical excipients",
    ],
    relevantCategories: ["hplc-solvents", "pharma-grade", "standard-solutions"],
  },
  turkey: {
    slug: "turkey",
    countryName: "Turkey",
    region: "Europe & Central Asia",
    tagline: "Chromatography solvents bridging European and Central Asian lab supply chains",
    description: "HPLC, GC, and pharma grade solvents for Turkey's pharmaceutical manufacturing and food export testing sector.",
    seoTitle: "HPLC Solvent Supplier Turkey | LANCHROM™",
    seoDescription: "Factory-direct chromatography solvents shipped to Turkey. For pharmaceutical QC and food export testing labs.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade"],
  },
  "south-korea": {
    slug: "south-korea",
    countryName: "South Korea",
    region: "East Asia",
    tagline: "Electronic and LC-MS grade solvents for South Korea's semiconductor and pharma sectors",
    description: "Electronic grade and LC-MS solvents for South Korea's semiconductor manufacturing and pharmaceutical bioanalytical laboratories.",
    seoTitle: "HPLC Solvent Supplier South Korea | LANCHROM™",
    seoDescription: "Factory-direct electronic grade and LC-MS solvents shipped to South Korea. For semiconductor and pharmaceutical labs.",
    ...SHARED_EXPORT_TERMS,
    relevantCategories: ["electronic-grade", "lcms-solvents", "hplc-solvents"],
  },
  "pakistan": {
    slug: "pakistan", countryName: "Pakistan", region: "South Asia",
    tagline: "Pharmaceutical and food-grade solvents for Pakistan's growing API and food processing industries",
    description: "HPLC and pharma-grade solvents plus food-grade chemicals for Pakistan's pharmaceutical manufacturing hubs in Karachi, Lahore, and Islamabad.",
    seoTitle: "HPLC Solvent Supplier Pakistan | LANCHROM™",
    seoDescription: "Factory-direct HPLC, pharma-grade solvents and food-grade chemicals shipped to Pakistan. Ningbo/Shanghai to Karachi.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["hplc-solvents", "pharma-grade", "food-grade", "standard-solutions"],
  },
  "bangladesh": {
    slug: "bangladesh", countryName: "Bangladesh", region: "South Asia",
    tagline: "Pharmaceutical solvents for Bangladesh's generic drug manufacturing sector",
    description: "USP/EP grade solvents and excipients for Bangladesh's rapidly growing pharmaceutical industry centered in Dhaka and Chittagong.",
    seoTitle: "Pharmaceutical Solvent Supplier Bangladesh | LANCHROM™",
    seoDescription: "Factory-direct USP/EP grade solvents for Bangladesh pharmaceutical manufacturers. Full documentation, DG export handled.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["pharma-grade", "hplc-solvents", "excipients"],
  },
  "japan": {
    slug: "japan", countryName: "Japan", region: "East Asia",
    tagline: "Electronic-grade and LC-MS solvents meeting Japan's stringent semiconductor and pharmaceutical standards",
    description: "Sub-ppb trace metal solvents for Japan's semiconductor fabs and LC-MS bioanalytical laboratories — SEMI-spec electronic grade and MS-blank certified LC-MS grade.",
    seoTitle: "Electronic Grade Solvent Supplier Japan | LANCHROM™",
    seoDescription: "SEMI-spec electronic grade and LC-MS solvents for Japan. Sub-ppb metals, particle-controlled, factory-direct.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["electronic-grade", "lcms-solvents", "trace-analysis-grade"],
  },
  "egypt": {
    slug: "egypt", countryName: "Egypt", region: "Africa",
    tagline: "HPLC and GC solvents for Egypt's pharmaceutical, food testing, and petrochemical QC sectors",
    description: "Analytical-grade solvents for Egypt's pharmaceutical QC labs, food safety testing centers, and petrochemical quality control — shipped CIF Alexandria or Port Said.",
    seoTitle: "HPLC Solvent Supplier Egypt | LANCHROM™",
    seoDescription: "Factory-direct HPLC and GC grade solvents shipped to Egypt. CIF Alexandria/Port Said, full DG documentation.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["hplc-solvents", "gc-solvents", "standard-solutions", "karl-fischer"],
  },
  "nigeria": {
    slug: "nigeria", countryName: "Nigeria", region: "Africa",
    tagline: "Pharmaceutical-grade solvents and excipients for Nigeria's growing pharma and food manufacturing sectors",
    description: "USP/EP grade solvents and food-grade chemicals for Nigeria's pharmaceutical manufacturers and food processing laboratories — shipped to Lagos and Apapa port.",
    seoTitle: "Pharma Solvent Supplier Nigeria | LANCHROM™",
    seoDescription: "Factory-direct pharmaceutical and food-grade chemicals shipped to Nigeria. USP/EP documented, DG export handled.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["pharma-grade", "food-grade", "hplc-solvents", "excipients"],
  },
  "south-africa": {
    slug: "south-africa", countryName: "South Africa", region: "Africa",
    tagline: "Analytical-grade solvents for South Africa's mining, pharmaceutical, and environmental testing laboratories",
    description: "HPLC, ICP-MS standards, and trace-analysis grade acids for South Africa's mining assay labs, pharmaceutical QC, and environmental testing — shipped to Durban or Cape Town.",
    seoTitle: "Analytical Solvent Supplier South Africa | LANCHROM™",
    seoDescription: "Factory-direct HPLC solvents and ICP standards shipped to South Africa. For mining, pharma, and environmental labs.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["hplc-solvents", "trace-analysis-grade", "elemental-impurities", "standard-solutions"],
  },
  "brazil": {
    slug: "brazil", countryName: "Brazil", region: "Latin America",
    tagline: "HPLC and pharma-grade solvents for Brazil's pharmaceutical, food, and environmental testing sectors",
    description: "Analytical and pharmaceutical-grade solvents for Brazil's large pharmaceutical manufacturing sector and ANVISA-regulated QC laboratories — shipped FOB/CIF to Santos or Paranaguá.",
    seoTitle: "HPLC Solvent Supplier Brazil | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharma-grade solvents shipped to Brazil. Full documentation for ANVISA compliance.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["hplc-solvents", "pharma-grade", "gc-solvents", "standard-solutions"],
  },
  "kazakhstan": {
    slug: "kazakhstan", countryName: "Kazakhstan", region: "Europe & Central Asia",
    tagline: "Analytical solvents for Kazakhstan's mining assay labs and petrochemical QC testing",
    description: "ICP standards, Karl Fischer reagents, and HPLC solvents for Kazakhstan's mining and natural resources QC sector — shipped via Ningbo to Aktau or overland via rail.",
    seoTitle: "Analytical Solvent Supplier Kazakhstan | LANCHROM™",
    seoDescription: "Factory-direct analytical solvents and ICP standards shipped to Kazakhstan. For mining assay and petrochemical QC.",
    ...SHARED_EXPORT_TERMS, relevantCategories: ["trace-analysis-grade", "standard-solutions", "karl-fischer", "hplc-solvents"],
  },
  "kenya": {
    slug: "kenya", countryName: "Kenya", region: "Africa",
    tagline: "Analytical and pharmaceutical solvents for Kenya's growing pharmaceutical and food testing sectors",
    description: "HPLC and pharma-grade solvents for Kenya's pharmaceutical manufacturing (particularly generic drug production), food export testing, and university research laboratories.",
    seoTitle: "HPLC Solvent Supplier Kenya | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharmaceutical solvents shipped to Kenya. CIF Mombasa, full DG and customs documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "22–30 days via Ningbo/Shanghai to Mombasa",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS compliant",
      "Certificate of Origin — required for customs tariff classification",
      "Kenya Bureau of Standards (KEBS) compliance — import standards mark (ISM) may be required",
      "Pharmacy and Poisons Board registration — for pharmaceutical-grade solvents used in drug manufacturing",
      "Pre-Export Verification of Conformity (PVoC) — required for certain chemical imports before shipment",
    ],
    relevantCategories: ["hplc-solvents", "pharma-grade", "standard-solutions", "food-grade"],
  },
  "colombia": {
    slug: "colombia", countryName: "Colombia", region: "Latin America",
    tagline: "HPLC and GC solvents for Colombia's pharmaceutical, food safety, and environmental laboratories",
    description: "Analytical-grade solvents for Colombia's pharmaceutical QC (INVIMA-regulated), food export testing, and environmental monitoring — shipped CIF Buenaventura or Cartagena.",
    seoTitle: "HPLC Solvent Supplier Colombia | LANCHROM™",
    seoDescription: "Factory-direct HPLC and GC solvents shipped to Colombia. Full documentation for INVIMA compliance.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "28–35 days via Ningbo/Shanghai to Buenaventura or Cartagena",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS compliant, Spanish translation required",
      "INVIMA registration — required for pharmaceutical-grade solvents and excipients",
      "Certificate of Origin — required for customs clearance and preferential tariff consideration",
      "Chemical import license — may be required from Colombian Ministry of Environment for certain controlled chemicals",
    ],
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade", "standard-solutions"],
  },
  "sri-lanka": {
    slug: "sri-lanka", countryName: "Sri Lanka", region: "South Asia",
    tagline: "Pharmaceutical and analytical solvents for Sri Lanka's pharmaceutical and export testing sectors",
    description: "HPLC and pharma-grade solvents for Sri Lanka's pharmaceutical manufacturing, tea/spice export testing, and university research laboratories — shipped via Colombo port.",
    seoTitle: "HPLC Solvent Supplier Sri Lanka | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharmaceutical solvents shipped to Sri Lanka. CIF Colombo.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "10–15 days via Ningbo/Shanghai to Colombo",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS compliant",
      "Certificate of Origin — required for customs and BOI (Board of Investment) duty concessions",
      "NMRA approval — National Medicines Regulatory Authority clearance for pharmaceutical-grade imports",
      "Import license from Controller of Imports and Exports — required for hazardous chemical imports",
    ],
    relevantCategories: ["hplc-solvents", "pharma-grade", "gc-solvents"],
  },
  "morocco": {
    slug: "morocco", countryName: "Morocco", region: "Africa",
    tagline: "HPLC and food-grade solvents for Morocco's pharmaceutical and food export industries",
    description: "Analytical and pharmaceutical-grade solvents for Morocco's pharmaceutical manufacturing sector and food quality testing labs serving the EU agricultural export market.",
    seoTitle: "HPLC Solvent Supplier Morocco | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharmaceutical solvents shipped to Morocco. CIF Casablanca, full documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "20–28 days via Ningbo/Shanghai to Casablanca or Tangier Med",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS compliant, French translation preferred for customs",
      "Certificate of Origin — required for customs clearance",
      "Moroccan Ministry of Health approval — for pharmaceutical-grade imports",
      "ONSSA compliance — for food-grade chemicals destined for food processing or testing",
      "Halal certification — available for food-grade and excipient products",
    ],
    relevantCategories: ["hplc-solvents", "pharma-grade", "food-grade", "standard-solutions"],
  },
  "argentina": {
    slug: "argentina", countryName: "Argentina", region: "Latin America",
    tagline: "HPLC and pharma-grade solvents for Argentina's pharmaceutical and agricultural testing sectors",
    description: "Analytical solvents for Argentina's pharmaceutical manufacturing, veterinary drug QC, and large-scale agricultural residue testing — shipped CIF Buenos Aires.",
    seoTitle: "HPLC Solvent Supplier Argentina | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharma grade solvents shipped to Argentina. ANMAT documentation support.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "30–38 days via Ningbo/Shanghai to Buenos Aires",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS compliant, Spanish translation required",
      "ANMAT registration — required for pharmaceutical-grade solvents used in drug manufacturing",
      "Certificate of Origin — required for Mercosur preferential tariff",
      "Argentine customs import permit (SIMI) — advance import declaration required for chemical products",
      "SENASA clearance — for food-grade chemicals destined for food industry use",
    ],
    relevantCategories: ["hplc-solvents", "gc-solvents", "pharma-grade", "spe-products"],
  },
  "iran": {
    slug: "iran", countryName: "Iran", region: "Middle East",
    tagline: "Analytical solvents for Iran's large pharmaceutical manufacturing and academic research sector",
    description: "HPLC and pharma-grade solvents for Iran's substantial domestic pharmaceutical manufacturing industry and its extensive university research laboratory network.",
    seoTitle: "HPLC Solvent Supplier Iran | LANCHROM™",
    seoDescription: "Factory-direct HPLC and pharmaceutical solvents for Iran. Pharma-grade, analytical-grade, full documentation.",
    ...SHARED_EXPORT_TERMS,
    shippingLeadTimeSea: "18–25 days via Ningbo/Shanghai to Bandar Abbas",
    importCertifications: [
      "Certificate of Analysis (CoA) — batch-specific",
      "Safety Data Sheet (SDS) — GHS format",
      "Certificate of Origin — required for customs clearance",
      "Iran FDA registration — for pharmaceutical-grade solvents and excipients",
      "Standard mark of Iran (ISIRI) — may be required for certain chemical product categories",
    ],
    hazmatExportNotes: "Iran shipments require careful compliance verification with current international trade regulations. Contact our export team for current shipping route and documentation guidance specific to Iran.",
    relevantCategories: ["hplc-solvents", "pharma-grade", "standard-solutions", "excipients"],
  },
};

export function getMarketInfo(slug: string): MarketInfo | undefined {
  return MARKETS[slug];
}

export function getAllMarketSlugs(): string[] {
  return Object.keys(MARKETS);
}

// ============================================================
// REMAINING ITEMS — items 1–4 below are now confirmed and applied
// via SHARED_EXPORT_TERMS above (same policy for all 10 markets).
// Still open:
// ============================================================
//
// 5. MOQ / PAYMENT: Confirmed as policy — quoted per inquiry rather
//    than published as a fixed number, since the best shipping/order
//    structure depends on product mix and destination. The page
//    reflects this honestly (routes to "Request a Quote") rather
//    than displaying a number. If a standard minimum (e.g. "$3,000
//    or 1×20ft LCL") should be published instead, provide it and
//    we'll add it per country or company-wide.
// 6. CASE REFERENCES: Not yet provided. Once available (even
//    anonymized, e.g. "a generic drug manufacturer in Gujarat"),
//    add via the `caseReference` field on the relevant country
//    entry and the page will display it.
// 7. COUNTRY-SPECIFIC CERTIFICATION NUANCES: SHARED_EXPORT_TERMS
//    covers the documents LANCHROM provides (CoA/SDS/CoO/fumigation).
//    If any country requires the BUYER to separately hold a specific
//    import license (e.g. India's CDSCO, Saudi SFDA registration),
//    that's worth noting per-country via `importCertifications`
//    override so buyers know what's on them vs. what LANCHROM supplies.
//
// ============================================================
