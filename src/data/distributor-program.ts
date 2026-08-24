export type DistributorMarketGroup = "Europe" | "North America" | "Asia Pacific";

export interface DistributorResource {
  label: string;
  href: string;
}

export interface DistributorMarket {
  slug: string;
  country: string;
  region: string;
  marketGroup: DistributorMarketGroup;
  isRegionalHub?: boolean;
  url: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  pageType: string;
  primaryKeyword: string;
  summary: string;
  marketOpportunity?: string;
  demand: string[];
  buyerExpectations?: string[];
  partnerRequirements?: string[];
  regulatoryContext?: string;
  officialResources?: DistributorResource[];
  internalLinks: { label: string; href: string }[];
}

const sharedLinks = [
  { label: "HPLC Solvents", href: "/products/high-purity-solvents/hplc-grade-solvents" },
  { label: "LC-MS Solvents", href: "/products/high-purity-solvents/lcms-grade-solvents" },
  { label: "Mobile Phase Solutions", href: "/solutions/mobile-phase" },
  { label: "OEM & Private Label", href: "/oem" },
];

const echaResources: DistributorResource[] = [
  { label: "ECHA: distributor responsibilities", href: "https://echa.europa.eu/web/guest/distributor-communication-supply-chain-responsibilities" },
  { label: "ECHA: safety data sheets", href: "https://echa.europa.eu/safety-data-sheets" },
];

const europeRequirements = [
  "A registered business with an established laboratory, pharmaceutical or specialty-chemical customer base",
  "Documented capability for local import, storage, dangerous-goods handling and delivery",
  "Technical sales coverage for qualification samples, supplier questionnaires and complaint follow-up",
  "A territory plan covering target accounts, launch products, forecast assumptions and local inventory",
];

const northAmericaRequirements = [
  "Established access to laboratories, pharmaceutical quality teams or specialty-chemical buyers",
  "Capability to coordinate importer-of-record, chemical inventory and hazard-communication responsibilities",
  "Suitable warehousing or a qualified third-party logistics arrangement for regulated products",
  "A measurable territory plan covering target accounts, initial portfolio and demand forecast",
];

const europeRegulatory = "Market entry should begin with a product-by-product review of importer and supply-chain roles, SDS and label languages, and applicable REACH and CLP duties. Final obligations depend on the substance, use, quantity and territory and must be confirmed before launch.";

const defineMarket = (
  market: Omit<DistributorMarket, "url" | "pageType" | "partnerRequirements" | "officialResources" | "internalLinks"> & {
    pageType?: string;
    partnerRequirements?: string[];
    officialResources?: DistributorResource[];
    marketLink?: { label: string; href: string };
  },
): DistributorMarket => ({
  ...market,
  url: `/distributor-program/${market.slug}`,
  pageType: market.pageType ?? (market.isRegionalHub ? "Regional distributor recruitment hub" : "Country distributor recruitment landing page"),
  partnerRequirements: market.partnerRequirements ?? (market.marketGroup === "Europe" ? europeRequirements : market.marketGroup === "North America" ? northAmericaRequirements : undefined),
  officialResources: market.officialResources ?? (market.marketGroup === "Europe" ? echaResources : undefined),
  internalLinks: [...sharedLinks, ...(market.marketLink ? [market.marketLink] : [])],
});

export const DISTRIBUTOR_MARKETS: DistributorMarket[] = [
  defineMarket({
    slug: "europe", country: "Europe", region: "European Union & selected European markets", marketGroup: "Europe", isRegionalHub: true,
    seoTitle: "Laboratory Chemical Distributor Europe | LANCHROM",
    metaDescription: "Explore the LANCHROM European distributor program for analytical solvents, laboratory chemicals, technical documents and private-label supply.",
    h1: "Laboratory Chemical Distributor Program for Europe",
    primaryKeyword: "laboratory chemical distributor Europe",
    summary: "LANCHROM is developing a selective European partner network for analytical solvents, mobile-phase solutions and documented private-label supply.",
    marketOpportunity: "The program is intended for technically capable distributors that can translate a factory-direct portfolio into locally stocked, documented and responsive supply for laboratories and regulated industries.",
    demand: ["HPLC and LC-MS solvents", "Pharmaceutical and contract laboratory supply", "Ready-to-use mobile phases", "Private-label and distributor packaging"],
    buyerExpectations: ["Batch-level CoA access and specification review", "Controlled SDS and label-language planning", "Supplier qualification and change-control communication", "Reliable local stock, quotations and technical response"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "European Export Markets", href: "/markets" },
  }),
  defineMarket({
    slug: "germany", country: "Germany", region: "DACH", marketGroup: "Europe",
    seoTitle: "HPLC Solvent Distributor Germany | LANCHROM",
    metaDescription: "Apply to represent LANCHROM analytical solvents in Germany for pharmaceutical QC, contract laboratories and specialist laboratory supply.",
    h1: "Analytical Solvent Distributor Program in Germany",
    primaryKeyword: "HPLC solvent distributor Germany",
    summary: "We are seeking a German partner with technical sales capability and established access to pharmaceutical QC, CRO, environmental and industrial laboratories.",
    marketOpportunity: "A strong German partner can differentiate through precise product qualification, fast document response and a disciplined local inventory plan rather than competing on price alone.",
    demand: ["HPLC and LC-MS qualification", "Pharmaceutical QC and contract testing", "Trace analysis and environmental labs", "OEM laboratory packaging"],
    buyerExpectations: ["German-language document planning where required", "Batch traceability and supplier questionnaires", "Clear change-control and complaint routing", "Predictable local availability"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Germany Supply Market", href: "/markets/germany" },
  }),
  defineMarket({
    slug: "switzerland", country: "Switzerland", region: "DACH", marketGroup: "Europe",
    seoTitle: "Laboratory Chemical Distributor Switzerland | LANCHROM",
    metaDescription: "Discuss a LANCHROM distribution partnership for Swiss pharmaceutical, life-science and analytical laboratory customers.",
    h1: "Laboratory Chemical Distributor Program in Switzerland",
    primaryKeyword: "laboratory chemical distributor Switzerland",
    summary: "LANCHROM welcomes specialist Swiss partners serving pharmaceutical, biotech, precision analytical and research laboratories.",
    marketOpportunity: "The preferred model combines technically credible account coverage with disciplined multilingual document planning and high service levels for qualification-led accounts.",
    demand: ["Pharmaceutical and biotech QC", "HPLC and LC-MS applications", "Research and precision analysis", "Small-pack and private-label programs"],
    buyerExpectations: ["Complete batch and specification review", "Multilingual SDS and label planning", "Responsive technical communication", "Qualified storage and delivery"],
    regulatoryContext: "Swiss chemical requirements are administered separately from EU REACH. Product classification, labelling, SDS language and importer responsibilities should be reviewed against Swiss rules before supply begins.",
    officialResources: [{ label: "Swiss FOPH: chemicals legislation", href: "https://www.bag.admin.ch/en/chemicals-legislation" }],
    marketLink: { label: "Pharmaceutical Industry", href: "/industries/pharmaceutical" },
  }),
  defineMarket({
    slug: "france", country: "France", region: "Western Europe", marketGroup: "Europe",
    seoTitle: "HPLC Solvent Distributor France | LANCHROM",
    metaDescription: "Apply to represent LANCHROM HPLC and LC-MS solvents in France for pharma, cosmetics, food and environmental laboratories.",
    h1: "HPLC & LC-MS Solvent Distributor Program in France",
    primaryKeyword: "HPLC solvent distributor France",
    summary: "We are looking for a French distributor with strong technical relationships across pharmaceutical QC, cosmetics testing, food safety and environmental analysis.",
    marketOpportunity: "The partnership should focus on documented analytical grades, responsive French-market support and a clear route from sample qualification to repeat supply.",
    demand: ["HPLC and LC-MS solvents", "Cosmetics and pharmaceutical testing", "Food and environmental analysis", "French-market private label"],
    buyerExpectations: ["French-language controlled documents where required", "Lot documentation and method suitability", "Fast quality-team response", "Local stock for repeat products"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "France Supply Market", href: "/markets/france" },
  }),
  defineMarket({
    slug: "netherlands", country: "Netherlands", region: "Benelux", marketGroup: "Europe",
    seoTitle: "Analytical Solvent Distributor Netherlands | LANCHROM",
    metaDescription: "Build a LANCHROM analytical solvent distribution program in the Netherlands for Benelux laboratories and European supply networks.",
    h1: "Analytical Solvent Distributor Program in the Netherlands",
    primaryKeyword: "analytical solvent distributor Netherlands",
    summary: "LANCHROM is seeking a Netherlands-based partner able to combine Benelux laboratory sales with structured import, warehousing and regional distribution.",
    marketOpportunity: "The Netherlands can support local analytical customers and a broader European channel when stock ownership, documentation and territory boundaries are clearly defined.",
    demand: ["Benelux laboratory distribution", "HPLC and LC-MS solvents", "European stock and fulfilment", "OEM and private-label programs"],
    buyerExpectations: ["Transparent stock and lead-time communication", "EU document and label-language planning", "Batch documents during approval", "Defined quality escalation"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Netherlands Supply Market", href: "/markets/netherlands" },
  }),
  defineMarket({
    slug: "united-kingdom", country: "United Kingdom", region: "United Kingdom & Ireland", marketGroup: "Europe",
    seoTitle: "HPLC Solvent Distributor UK | LANCHROM",
    metaDescription: "Apply to become a LANCHROM distributor in the UK for HPLC, LC-MS and laboratory solvent customers.",
    h1: "HPLC & Laboratory Solvent Distributor Program in the UK",
    primaryKeyword: "HPLC solvent distributor UK",
    summary: "We are seeking a UK partner with technical coverage for pharmaceutical QC, CRO, environmental, university and specialist laboratory customers.",
    marketOpportunity: "The preferred model pairs an experienced local importer and technical sales team with a focused launch portfolio and documented account-conversion process.",
    demand: ["HPLC, LC-MS and GC solvents", "Pharmaceutical QC and CRO supply", "University and environmental labs", "Private-label chemicals"],
    buyerExpectations: ["English SDS and structured documents", "Supplier qualification follow-up", "Local stock or qualified fulfilment", "Separate UK and EU responsibilities"],
    regulatoryContext: "UK REACH and GB CLP operate separately from EU REACH and CLP. The GB importer role, registration position, labelling and SDS duties should be reviewed for each launch product.",
    officialResources: [{ label: "HSE: UK REACH explained", href: "https://www.hse.gov.uk/reach/about.htm" }, { label: "HSE: supplying chemicals in Great Britain", href: "https://www.hse.gov.uk/chemicals/manufacture-supply.htm" }],
    marketLink: { label: "United Kingdom Supply Market", href: "/markets/united-kingdom" },
  }),
  defineMarket({
    slug: "belgium", country: "Belgium", region: "Benelux", marketGroup: "Europe",
    seoTitle: "Laboratory Chemical Distributor Belgium | LANCHROM",
    metaDescription: "Discuss LANCHROM analytical solvent distribution in Belgium for pharma, biotech, contract and university laboratories.",
    h1: "Laboratory Chemical Distributor Program in Belgium",
    primaryKeyword: "laboratory chemical distributor Belgium",
    summary: "LANCHROM welcomes Belgian partners serving pharmaceutical, biotech, contract testing, university and cross-border Benelux accounts.",
    marketOpportunity: "A successful partner will manage multilingual customer communication and focus on approval-led products where documentation and batch consistency matter.",
    demand: ["Pharma and biotech laboratories", "HPLC and LC-MS solvents", "Contract and university labs", "Benelux programs"],
    buyerExpectations: ["Territory-appropriate language planning", "CoA, SDS and specification review", "Quality questionnaires", "Reliable local response"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Biotechnology Industry", href: "/industries/biotechnology" },
  }),
  defineMarket({
    slug: "ireland", country: "Ireland", region: "Northern Europe", marketGroup: "Europe",
    seoTitle: "Pharmaceutical Solvent Distributor Ireland | LANCHROM",
    metaDescription: "Apply to represent LANCHROM analytical and pharmaceutical laboratory solvents for Ireland's pharma, biotech and contract testing sectors.",
    h1: "Pharmaceutical Laboratory Solvent Distributor Program in Ireland",
    primaryKeyword: "pharmaceutical solvent distributor Ireland",
    summary: "We are seeking an Irish partner with access to pharmaceutical manufacturing, biotech quality laboratories, CRO/CDMO sites and specialist buyers.",
    marketOpportunity: "The commercial focus is qualification-led supply for quality-sensitive accounts, supported by fast document exchange and disciplined follow-up.",
    demand: ["Pharmaceutical QC solvents", "HPLC and LC-MS grades", "Biotech and contract laboratories", "Supplier qualification"],
    buyerExpectations: ["Clear specifications and representative documents", "Quality questionnaires", "Sample coordination", "Reliable replenishment planning"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Pharmaceutical Industry", href: "/industries/pharmaceutical" },
  }),
  defineMarket({
    slug: "denmark", country: "Denmark", region: "Nordics", marketGroup: "Europe",
    seoTitle: "Laboratory Chemical Distributor Denmark | LANCHROM",
    metaDescription: "Develop LANCHROM analytical solvent distribution in Denmark for life-science, pharmaceutical and environmental laboratories.",
    h1: "Laboratory Chemical Distributor Program in Denmark",
    primaryKeyword: "laboratory chemical distributor Denmark",
    summary: "LANCHROM is looking for a technically focused Danish distributor serving life-science, pharmaceutical, food and environmental laboratories.",
    marketOpportunity: "The route to market should prioritize a compact, high-relevance portfolio and high-quality technical service rather than a broad undifferentiated catalogue.",
    demand: ["Life-science analytical labs", "HPLC and LC-MS solvents", "Food and environmental testing", "Small-pack distribution"],
    buyerExpectations: ["Technical product selection", "Controlled documents", "Responsible local delivery", "Fast procurement response"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Contract Laboratories", href: "/industries/contract-laboratories" },
  }),
  defineMarket({
    slug: "sweden", country: "Sweden", region: "Nordics", marketGroup: "Europe",
    seoTitle: "Analytical Solvent Distributor Sweden | LANCHROM",
    metaDescription: "Apply to represent LANCHROM analytical solvents in Sweden for pharmaceutical, environmental and research laboratories.",
    h1: "Analytical Solvent Distributor Program in Sweden",
    primaryKeyword: "analytical solvent distributor Sweden",
    summary: "We welcome a Swedish partner with technical sales coverage across pharmaceutical, environmental, academic and industrial laboratories.",
    marketOpportunity: "The partnership should emphasize documented quality, practical sustainability discussions and dependable supply for repeat analytical workflows.",
    demand: ["HPLC and LC-MS solvents", "Environmental trace analysis", "Pharmaceutical QC", "Research laboratory supply"],
    buyerExpectations: ["Swedish-market document planning", "Transparent packaging information", "Quality response processes", "Repeat-method inventory"],
    regulatoryContext: europeRegulatory,
    marketLink: { label: "Environmental Testing", href: "/industries/environmental" },
  }),
  defineMarket({
    slug: "north-america", country: "North America", region: "United States & Canada", marketGroup: "North America", isRegionalHub: true,
    seoTitle: "High Purity Solvent Distributor North America | LANCHROM",
    metaDescription: "Explore LANCHROM distribution opportunities in the United States and Canada for analytical solvents and private-label laboratory chemicals.",
    h1: "High-Purity Solvent Distributor Program for North America",
    primaryKeyword: "high purity solvent distributor North America",
    summary: "LANCHROM is building a focused North American network for analytical solvents, qualification-driven accounts and private-label laboratory supply.",
    marketOpportunity: "The program is designed for importers and specialty distributors that can manage local regulatory roles, dangerous-goods logistics, technical selling and documented customer approval.",
    demand: ["HPLC and LC-MS solvents", "Pharmaceutical QC and CRO supply", "Environmental and food-testing labs", "OEM and private-label programs"],
    buyerExpectations: ["Lot documentation and supplier qualification", "OSHA/WHMIS communication planning", "Importer and inventory review", "Local stock and technical follow-up"],
    regulatoryContext: "United States and Canadian market access requires separate product-level reviews. The importer or supplier should confirm applicable TSCA or WHMIS duties, hazard communication and bilingual requirements where applicable before launch.",
    officialResources: [{ label: "US EPA: chemical import requirements", href: "https://www.epa.gov/tsca-import-export-requirements/tsca-requirements-importing-chemicals" }, { label: "Health Canada: WHMIS supplier guidance", href: "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/occupational-health-safety/workplace-hazardous-materials-information-system/supplier-hazard-communication-requirements-whmis/guidance.html" }],
    marketLink: { label: "North American Export Markets", href: "/markets" },
  }),
  defineMarket({
    slug: "united-states", country: "United States", region: "North America", marketGroup: "North America",
    seoTitle: "HPLC Solvent Distributor USA | LANCHROM",
    metaDescription: "Apply to represent LANCHROM HPLC and LC-MS solvents in the United States for pharma, CRO, environmental and laboratory markets.",
    h1: "HPLC & LC-MS Solvent Distributor Program in the USA",
    primaryKeyword: "HPLC solvent distributor USA",
    summary: "We are seeking qualified US importers and specialty distributors serving pharmaceutical QC, CRO/CDMO, environmental, food-testing and research laboratories.",
    marketOpportunity: "The preferred partner can combine importer-of-record capability with technical account development, supplier qualification support and reliable regional fulfilment.",
    demand: ["HPLC and LC-MS solvents", "Pharma QC and CRO/CDMO supply", "Environmental and food testing", "Private-label packaging"],
    buyerExpectations: ["Representative documents before qualification", "Batch-specific CoA access", "OSHA hazard communication", "Defined quality escalation"],
    regulatoryContext: "The US importer or authorized agent is responsible for applicable TSCA import certification, while manufacturers and importers have hazard-communication duties under OSHA rules. Product status and intended use must be reviewed before shipment.",
    officialResources: [{ label: "US EPA: TSCA import requirements", href: "https://www.epa.gov/tsca-import-export-requirements/tsca-requirements-importing-chemicals" }, { label: "OSHA: Hazard Communication", href: "https://www.osha.gov/hazcom/" }],
    marketLink: { label: "United States Supply Market", href: "/markets/united-states" },
  }),
  defineMarket({
    slug: "canada", country: "Canada", region: "North America", marketGroup: "North America",
    seoTitle: "HPLC Solvent Distributor Canada | LANCHROM",
    metaDescription: "Apply to distribute LANCHROM HPLC, LC-MS and laboratory solvents in Canada with qualification and document support.",
    h1: "HPLC & Laboratory Solvent Distributor Program in Canada",
    primaryKeyword: "HPLC solvent distributor Canada",
    summary: "LANCHROM welcomes Canadian partners serving pharmaceutical, environmental, food-testing, cannabis-testing, academic and industrial laboratories.",
    marketOpportunity: "A strong partner will combine technical selling and regional fulfilment with disciplined bilingual hazard-communication planning for the selected products.",
    demand: ["HPLC, LC-MS and GC solvents", "Environmental and food testing", "Pharma and research labs", "Private-label programs"],
    buyerExpectations: ["Bilingual label and SDS planning where required", "Batch documentation", "Qualified DG storage", "Responsive technical support"],
    regulatoryContext: "Canadian supplier responsibilities should be reviewed under WHMIS for each hazardous product. Health Canada guidance notes bilingual label and SDS information requirements alongside federal and local workplace duties.",
    officialResources: [{ label: "Health Canada: WHMIS supplier guidance", href: "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/occupational-health-safety/workplace-hazardous-materials-information-system/supplier-hazard-communication-requirements-whmis/guidance.html" }],
    marketLink: { label: "Canada Supply Market", href: "/markets/canada" },
  }),
  ...[
    ["india", "India", "South Asia", "HPLC Solvent Supplier India", "HPLC Solvent Supplier & Distributor Program in India", "We are seeking technically capable partners serving pharmaceutical QC, CRO, testing and research laboratories across India.", ["HPLC and LC-MS solvents", "HPLC ethanol and methanol", "Ready-to-use mobile phase", "OEM laboratory packaging"]],
    ["vietnam", "Vietnam", "Southeast Asia", "HPLC Solvent Vietnam", "HPLC & Analytical Solvent Distributor Program in Vietnam", "We are recruiting a Vietnam partner with established laboratory relationships and local delivery capability.", ["Analytical solvent supply", "Pharmaceutical QC support", "Food and environmental testing", "Local stock and technical response"]],
    ["thailand", "Thailand", "Southeast Asia", "HPLC Solvent Thailand", "HPLC Solvent Supplier & Distributor Program in Thailand", "LANCHROM is seeking a Thailand distributor serving analytical laboratories, universities and pharmaceutical plants.", ["HPLC solvent distribution", "LC-MS and spectroscopy grades", "Pharmaceutical laboratory supply", "Sample and method support"]],
    ["malaysia", "Malaysia", "Southeast Asia", "HPLC Solvent Malaysia", "HPLC Solvent Supplier & Distributor Program in Malaysia", "We welcome Malaysia partners with access to analytical, pharmaceutical and electronics customers.", ["HPLC and LC-MS solvents", "Electronic-grade chemicals", "Export documentation", "Local technical sales coverage"]],
    ["indonesia", "Indonesia", "Southeast Asia", "HPLC Solvent Indonesia", "HPLC & Laboratory Solvent Distributor Program in Indonesia", "We are looking for an Indonesia partner able to reach pharmaceutical, food and industrial testing laboratories.", ["Laboratory solvent distribution", "Food and environmental testing", "Industrial laboratory supply", "Import and logistics capability"]],
  ].map(([slug, country, region, primaryKeyword, h1, summary, demand]) => defineMarket({
    slug: slug as string,
    country: country as string,
    region: region as string,
    marketGroup: "Asia Pacific",
    seoTitle: `${primaryKeyword as string} | LANCHROM`,
    metaDescription: `Apply to represent LANCHROM analytical solvent products in ${country as string} with factory-direct commercial and documentation support.`,
    h1: h1 as string,
    primaryKeyword: primaryKeyword as string,
    summary: summary as string,
    demand: demand as string[],
    marketLink: { label: `${country as string} Export Market`, href: `/markets/${slug as string}` },
  })),
];

export const DISTRIBUTOR_MARKET_GROUPS: DistributorMarketGroup[] = ["Europe", "North America", "Asia Pacific"];

export function getDistributorMarket(slug: string) {
  return DISTRIBUTOR_MARKETS.find(market => market.slug === slug);
}

export function getDistributorMarketSlugs() {
  return DISTRIBUTOR_MARKETS.map(market => market.slug);
}

export function getDistributorMarketsByGroup(group: DistributorMarketGroup) {
  return DISTRIBUTOR_MARKETS.filter(market => market.marketGroup === group);
}
