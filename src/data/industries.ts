export interface IndustryInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  products: string[];
  seoTitle: string;
  seoDescription: string;
}

export const INDUSTRIES: Record<string, IndustryInfo> = {
  pharmaceutical: {
    slug: "pharmaceutical", name: "Pharmaceutical Manufacturing",
    tagline: "USP/EP solvents and excipients for API synthesis through finished dosage",
    description: "From API synthesis solvents to injectable excipients and GMP cleanroom disinfection — pharmacopoeial-grade chemicals with full ICH Q3C documentation for every stage of drug manufacturing.",
    products: ["Pharma Grade Solvents", "Excipients", "Karl Fischer Reagents", "Standard Solutions"],
    seoTitle: "Pharmaceutical Grade Solvents & Excipients | LANCHROM™",
    seoDescription: "USP/EP solvents and excipients for pharmaceutical manufacturing. API synthesis, injectable co-solvents, GMP disinfection. ICH Q3C documented.",
  },
  biotechnology: {
    slug: "biotechnology", name: "Biotechnology & Cell Therapy",
    tagline: "Cell therapy grade DMSO, mRNA-LNP solvents, biologic formulation excipients",
    description: "Cryopreservation, gene therapy, and biologic formulation demand a different impurity profile than standard pharma grade — endotoxin control, sub-ppb metals, and cGMP documentation built in.",
    products: ["DMSO Cell Therapy Grade", "Anhydrous Ethanol", "Anhydrous THF", "Polysorbate 80"],
    seoTitle: "Cell Therapy & Biotech Grade Solvents | LANCHROM™",
    seoDescription: "DMSO cell therapy grade, mRNA-LNP solvents, biologic formulation excipients. Endotoxin-controlled, cGMP documented.",
  },
  fermentation: {
    slug: "fermentation", name: "Fermentation Industry",
    tagline: "Ready-to-use mobile phase for organic acid and sugar QC analysis",
    description: "Lactic acid, citric acid, bioethanol, traditional liquor, dairy, and wine fermentation all rely on organic acid HPLC profiling — our pre-made mobile phase bags skip the prep room entirely.",
    products: ["Mobile Phase Bags", "Organic Acid Mobile Phase", "Standard Solutions"],
    seoTitle: "Fermentation Industry HPLC Mobile Phase | LANCHROM™",
    seoDescription: "Ready-to-use mobile phase for fermentation QC: lactic acid, citric acid, sugar analysis. Pre-filtered flex bags.",
  },
  "food-beverage": {
    slug: "food-beverage", name: "Food & Beverage Manufacturing",
    tagline: "FCC food-grade acidulants, preservatives, and additives",
    description: "Citric acid, malic acid, tartaric acid, sodium benzoate, and food-grade glycerol — manufactured to FCC specification with kosher and halal certification available, for food and beverage production lines.",
    products: ["Food Grade Chemicals", "Citric Acid", "Glycerol Food Grade"],
    seoTitle: "Food Grade Chemicals FCC Kosher Halal | LANCHROM™",
    seoDescription: "FCC food-grade acidulants and additives. Citric acid, malic acid, sodium benzoate. Kosher/halal certified.",
  },
  "food-testing": {
    slug: "food-testing", name: "Food Safety Testing Labs",
    tagline: "GC and HPLC solvents for pesticide, veterinary drug, and additive residue analysis",
    description: "Pesticide multi-residue, veterinary drug, and food additive testing runs on GC and HPLC methods that demand clean baselines — low-residue solvents and SPE cleanup products built for QuEChERS and multi-residue workflows.",
    products: ["GC Solvents", "SPE Products", "Standard Solutions", "Mobile Phase Bags"],
    seoTitle: "Solvents for Food Safety & Pesticide Residue Testing | LANCHROM™",
    seoDescription: "GC and HPLC grade solvents for food safety labs. Pesticide residue, veterinary drug, additive testing. QuEChERS-compatible SPE products.",
  },
  environmental: {
    slug: "environmental", name: "Environmental Testing",
    tagline: "ICP/AAS standards and trace-grade solvents for water and soil analysis",
    description: "Certified reference standards and trace-metal-controlled solvents for environmental laboratories running ICP-MS, AAS, and HPLC methods on water, soil, and air samples.",
    products: ["ICP Standard Solutions", "AAS Standards", "GC Solvents"],
    seoTitle: "Environmental Testing Standards & Solvents | LANCHROM™",
    seoDescription: "ICP and AAS standard solutions, trace-grade solvents for environmental water and soil testing laboratories.",
  },
  cro: {
    slug: "cro", name: "CRO / Bioanalytical Labs",
    tagline: "LC-MS bioanalytical solvents and method validation reagents",
    description: "Sub-ppb metal content, MS-blank certified solvents for bioanalytical method development and GLP study sample analysis at contract research organizations running pharmacokinetic and toxicokinetic studies.",
    products: ["LC-MS Solvents", "Standard Solutions", "SPE Products"],
    seoTitle: "CRO Bioanalytical LC-MS Solvents | LANCHROM™",
    seoDescription: "LC-MS grade solvents for CRO bioanalytical methods. Sub-ppb metals, MS-blank certified, GLP-compatible documentation.",
  },
  "contract-laboratories": {
    slug: "contract-laboratories", name: "Contract Testing Laboratories",
    tagline: "Multi-method solvent supply for third-party testing labs covering food, environmental, and consumer product analysis",
    description: "Third-party contract labs run HPLC, GC, ICP, and titration methods across whatever sample type walks through the door that week — we supply the full solvent and standard-solution range from one source instead of juggling multiple suppliers per method.",
    products: ["HPLC Solvents", "GC Solvents", "Standard Solutions", "Karl Fischer Reagents", "SPE Products"],
    seoTitle: "Solvent Supplier for Contract Testing Labs | LANCHROM™",
    seoDescription: "Multi-method solvent and reagent supply for contract testing laboratories. HPLC, GC, ICP standards, Karl Fischer — one supplier, full documentation.",
  },
  universities: {
    slug: "universities", name: "Universities & Teaching Labs",
    tagline: "Small-pack solvents and reagents for academic and research labs",
    description: "Lab-pack sizing from 100mL, no minimum order, and fast sample turnaround for academic research groups and teaching laboratories that need to qualify a product before committing budget.",
    products: ["HPLC Solvents", "TLC Products", "Standard Solutions"],
    seoTitle: "Research Lab Solvents & Reagents | LANCHROM™",
    seoDescription: "Small-pack solvents for university and teaching labs. No minimum order, fast samples, factory-direct pricing.",
  },
  "research-institutes": {
    slug: "research-institutes", name: "National & Research Institutes",
    tagline: "Bulk-volume solvent supply with full documentation for long-term institutional contracts",
    description: "National laboratories and research institutes running multi-year programs need consistent batch-to-batch purity and a supplier that can scale from pilot quantities to ongoing bulk supply — with the full CoA/SDS archive a government procurement process requires.",
    products: ["HPLC Solvents", "Standard Solutions", "Elemental Impurities (ICH Q3D)", "Reagent Kits"],
    seoTitle: "Bulk Solvent Supply for Research Institutes | LANCHROM™",
    seoDescription: "Bulk-volume HPLC solvents and standard solutions for national laboratories and research institutes. Full documentation for institutional procurement.",
  },
  semiconductor: {
    slug: "semiconductor", name: "Semiconductor & Electronics",
    tagline: "SEMI-spec electronic grade solvents for wafer cleaning and advanced packaging",
    description: "Sub-ppb metal ion content, particle-controlled solvents engineered specifically for the impurity tolerances of semiconductor fabrication.",
    products: ["Electronic Grade IPA", "Electronic Grade Ethanol"],
    seoTitle: "Electronic Grade Solvents for Semiconductor | LANCHROM™",
    seoDescription: "SEMI-spec electronic grade IPA and ethanol for wafer cleaning. Sub-ppb metal ions, CFD-engineered purification.",
  },
  cosmetics: {
    slug: "cosmetics", name: "Cosmetics & Personal Care",
    tagline: "Cosmetic-grade solvents and excipients for formulation and QC",
    description: "Glycerol, propylene glycol, and ethanol formulated to cosmetic-grade purity for product formulation, plus HPLC solvents for preservative and active-ingredient QC testing in personal care manufacturing.",
    products: ["Excipients", "Food Grade Chemicals", "HPLC Solvents"],
    seoTitle: "Cosmetic Grade Solvents & Excipients | LANCHROM™",
    seoDescription: "Cosmetic-grade glycerol, propylene glycol, ethanol for formulation. HPLC solvents for preservative and active-ingredient QC.",
  },
  "clinical-diagnostics": {
    slug: "clinical-diagnostics", name: "Clinical Diagnostics & IVD",
    tagline: "LC-MS solvents and standard solutions for clinical mass spec assays",
    description: "LC-MS/MS clinical assays — vitamin D, immunosuppressants, steroid panels — demand the same MS-blank certified solvents as bioanalytical CROs, with batch consistency that protects assay calibration over time.",
    products: ["LC-MS Solvents", "Standard Solutions", "Mobile Phase Bags"],
    seoTitle: "LC-MS Solvents for Clinical Diagnostics | LANCHROM™",
    seoDescription: "MS-blank certified LC-MS solvents for clinical diagnostic and IVD mass spectrometry assays. Batch-consistent for calibration stability.",
  },
  "petrochemical-qc": {
    slug: "petrochemical-qc", name: "Petrochemical & Industrial QC",
    tagline: "Karl Fischer reagents and GC solvents for moisture and purity QC",
    description: "Karl Fischer titration for moisture content, GC solvents for purity and trace-impurity analysis — quality control chemicals for petrochemical, polymer, and industrial chemical manufacturing labs.",
    products: ["Karl Fischer Reagents", "GC Solvents", "Standard Solutions"],
    seoTitle: "Karl Fischer & GC Solvents for Industrial QC | LANCHROM™",
    seoDescription: "Karl Fischer reagents and GC grade solvents for petrochemical and industrial quality control laboratories. Moisture and purity analysis.",
  },
  "agriculture-agrochemical": {
    slug: "agriculture-agrochemical", name: "Agriculture & Agrochemical",
    tagline: "GC/HPLC solvents for pesticide formulation QC and residue method development",
    description: "Agrochemical formulators and residue method labs need both ends of the supply chain — GC solvents for active ingredient purity QC, and SPE/standard solutions for residue method validation on treated crops.",
    products: ["GC Solvents", "SPE Products", "Standard Solutions"],
    seoTitle: "Solvents for Agrochemical QC & Residue Analysis | LANCHROM™",
    seoDescription: "GC and HPLC solvents for agrochemical formulation QC and pesticide residue method development. SPE products for crop residue analysis.",
  },
  "water-utilities": {
    slug: "water-utilities", name: "Water Treatment & Utilities",
    tagline: "ICP/AAS standards and titration reagents for drinking water and wastewater labs",
    description: "Municipal and industrial water utilities run routine ICP, AAS, and titration methods for regulatory compliance — certified standard solutions and titration reagents sized for high-throughput routine testing.",
    products: ["Standard Solutions", "Karl Fischer Reagents", "Elemental Impurities (ICH Q3D)"],
    seoTitle: "Standard Solutions for Water Treatment Labs | LANCHROM™",
    seoDescription: "ICP/AAS standard solutions and titration reagents for drinking water and wastewater utility laboratories. Regulatory compliance testing.",
  },
  "veterinary-animal-health": {
    slug: "veterinary-animal-health", name: "Veterinary & Animal Health",
    tagline: "HPLC and LC-MS solvents for veterinary drug formulation and residue QC",
    description: "Veterinary pharmaceutical manufacturers and animal-health QC labs need the same pharmacopoeial rigor as human drug manufacturing, plus residue-method solvents for withdrawal-period and food-safety testing.",
    products: ["Pharma Grade Solvents", "LC-MS Solvents", "Standard Solutions"],
    seoTitle: "Solvents for Veterinary Pharmaceutical QC | LANCHROM™",
    seoDescription: "HPLC and LC-MS grade solvents for veterinary drug formulation, QC, and residue testing. USP/EP documented.",
  },
  "specialty-chemical-distributors": {
    slug: "specialty-chemical-distributors", name: "Specialty Chemical Distributors",
    tagline: "Factory-direct private label and bulk supply for regional distributors",
    description: "Regional chemical distributors serving local labs need a factory-direct source they can private-label or resell — full OEM packaging support plus the documentation set their own customers expect.",
    products: ["Reagent Kits", "Standard Solutions", "HPLC Solvents"],
    seoTitle: "Factory-Direct Supply for Chemical Distributors | LANCHROM™",
    seoDescription: "OEM and private label solvent supply for specialty chemical distributors. Factory-direct pricing, full documentation, custom packaging.",
  },
  "battery-materials": {
    slug: "battery-materials", name: "Battery & New Energy Materials",
    tagline: "Anhydrous and electronic grade solvents for electrolyte and electrode QC",
    description: "Lithium battery electrolyte formulation and electrode material QC demand moisture-controlled anhydrous solvents and trace-metal-clean reagents — the same purity discipline as semiconductor processing, applied to battery materials manufacturing.",
    products: ["Anhydrous Solvents", "Electronic Grade IPA", "Karl Fischer Reagents"],
    seoTitle: "Anhydrous Solvents for Battery Materials QC | LANCHROM™",
    seoDescription: "Anhydrous and electronic grade solvents for lithium battery electrolyte formulation and electrode material QC. Moisture-controlled, trace-metal-clean.",
  },
  "forensic-toxicology": {
    slug: "forensic-toxicology", name: "Forensic & Toxicology Labs",
    tagline: "LC-MS solvents and standard solutions for forensic drug and toxicology screening",
    description: "Forensic toxicology and drug-testing laboratories need chain-of-custody-grade documentation alongside MS-blank certified LC-MS solvents — every batch traceable for cases that may face courtroom scrutiny.",
    products: ["LC-MS Solvents", "Standard Solutions", "SPE Products"],
    seoTitle: "LC-MS Solvents for Forensic Toxicology Labs | LANCHROM™",
    seoDescription: "MS-blank certified LC-MS solvents and standard solutions for forensic and toxicology laboratories. Full batch traceability and documentation.",
  },
};

export function getIndustryInfo(slug: string) { return INDUSTRIES[slug]; }
export function getAllIndustrySlugs() { return Object.keys(INDUSTRIES); }
