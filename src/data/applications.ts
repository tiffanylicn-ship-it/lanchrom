// ============================================================
// LANCHROM™ — Application Pages
// ============================================================
// Unlike Industries (organized by buyer's business/sector), Applications
// are organized by analytical method or testing workflow — "what are you
// trying to measure" rather than "what industry are you in". The two
// link to each other (an application page can point at relevant
// industries and vice versa) but intentionally hold separate content
// so neither reads as a re-skin of the other.

export interface ApplicationInfo {
  slug: string;
  title: string;        // <title> tag — e.g. "HPLC Solvents For Pharmaceutical Analysis"
  h1: string;            // on-page H1 — e.g. "Pharmaceutical Analysis Using HPLC Solvents"
  tagline: string;
  description: string;
  seoDescription: string;
  relevantCategories: string[]; // category slugs
  relevantIndustries?: string[]; // industry slugs, for cross-linking
}

export const APPLICATIONS: Record<string, ApplicationInfo> = {
  "hplc-analysis": {
    slug: "hplc-analysis",
    title: "HPLC Solvents For Method Development &amp; Routine Analysis",
    h1: "HPLC Analysis Solvents",
    tagline: "Gradient and isocratic grade solvents for reliable retention time and peak shape",
    description: "HPLC method development and routine QC both depend on solvent consistency batch to batch — drift in water content, UV cutoff, or trace impurities shows up as retention time shift or ghost peaks long before anyone suspects the mobile phase.",
    seoDescription: "HPLC grade acetonitrile, methanol, IPA for method development and routine analysis. UV-tested, gradient grade. Factory-direct, free samples.",
    relevantCategories: ["hplc-solvents", "mobile-phase-bags", "standard-solutions"],
    relevantIndustries: ["pharmaceutical", "cro", "contract-laboratories"],
  },
  "lcms-analysis": {
    slug: "lcms-analysis",
    title: "LC-MS Grade Solvents For Bioanalytical &amp; Trace Analysis",
    h1: "LC-MS Analysis Solvents",
    tagline: "Sub-ppb metal, MS-blank certified solvents for sensitive mass spec methods",
    description: "LC-MS sensitivity lives or dies on background noise — sodium and potassium adducts, polymer leachates, and trace metal contamination from an ordinary HPLC-grade solvent can bury a low-abundance analyte peak entirely.",
    seoDescription: "LC-MS grade acetonitrile, methanol, water. Metal ions under 1ppb, MS-blank certified. For bioanalytical and trace-level LC-MS/MS methods.",
    relevantCategories: ["lcms-solvents", "elemental-impurities", "standard-solutions"],
    relevantIndustries: ["cro", "clinical-diagnostics", "forensic-toxicology"],
  },
  "pharmaceutical-analysis": {
    slug: "pharmaceutical-analysis",
    title: "HPLC Solvents For Pharmaceutical Analysis",
    h1: "Pharmaceutical Analysis Using HPLC Solvents",
    tagline: "USP/EP compendial solvents for API, dissolution, and impurity testing",
    description: "Compendial methods (USP, EP, ICH) specify solvent grade for a reason — assay and impurity results need to hold up under regulatory review, which means every reagent in the method needs documented purity, not just 'good enough' for today's run.",
    seoDescription: "USP/EP grade HPLC solvents for pharmaceutical API, dissolution, and impurity testing. ICH Q3C documented, full CoA per batch.",
    relevantCategories: ["pharma-grade", "hplc-solvents", "elemental-impurities", "standard-solutions"],
    relevantIndustries: ["pharmaceutical", "cro"],
  },
  "food-safety-testing": {
    slug: "food-safety-testing",
    title: "Solvents For Food Safety &amp; Contaminant Testing",
    h1: "Food Safety Testing Solvents",
    tagline: "GC and HPLC solvents for pesticide, mycotoxin, and additive screening",
    description: "Food safety labs run multi-residue pesticide screens, mycotoxin panels, and additive quantitation back to back on the same instrument — clean baselines and low solvent blank values keep false positives out of a result that could trigger a recall.",
    seoDescription: "GC and HPLC grade solvents for food safety testing — pesticide residue, mycotoxin, and additive analysis. Low-residue, batch documented.",
    relevantCategories: ["gc-solvents", "spe-products", "standard-solutions"],
    relevantIndustries: ["food-testing", "food-beverage"],
  },
  "environmental-analysis": {
    slug: "environmental-analysis",
    title: "Solvents &amp; Standards For Environmental Analysis",
    h1: "Environmental Analysis Solvents &amp; Standards",
    tagline: "ICP/AAS standards and trace-grade solvents for soil, air, and water methods",
    description: "Environmental methods (EPA, ISO, GB) span ICP-MS metals panels, GC volatile organics, and HPLC semi-volatiles in the same lab — standardizing on one solvent and standard-solution supplier simplifies method validation across all three.",
    seoDescription: "ICP/AAS standard solutions and trace-grade solvents for environmental soil, air, and water analysis. EPA/ISO method compatible.",
    relevantCategories: ["standard-solutions", "elemental-impurities", "gc-solvents", "trace-analysis-grade"],
    relevantIndustries: ["environmental", "water-utilities"],
  },
  "water-testing": {
    slug: "water-testing",
    title: "Standard Solutions For Drinking Water &amp; Wastewater Testing",
    h1: "Water Testing Standard Solutions",
    tagline: "ICP, AAS, and titration standards for routine water quality compliance",
    description: "Routine water testing runs the same compliance panel — metals, hardness, chlorine demand, organic carbon — week after week, which means standard solution consistency matters more than novelty; the same calibration curve needs to hold for years.",
    seoDescription: "ICP, AAS, and titration standard solutions for drinking water and wastewater compliance testing. Certified, batch-traceable.",
    relevantCategories: ["standard-solutions", "karl-fischer"],
    relevantIndustries: ["water-utilities", "environmental"],
  },
  "organic-acid-analysis": {
    slug: "organic-acid-analysis",
    title: "HPLC Mobile Phase For Organic Acid Analysis",
    h1: "Organic Acid Analysis Mobile Phase",
    tagline: "Ready-to-use sulfuric acid mobile phase for fermentation and food QC",
    description: "Lactic, citric, acetic, and malic acid profiling on an Aminex-type column runs on dilute sulfuric acid mobile phase — pre-filtered, degassed flex bags skip the prep-room titration and 0.45µm filtration most labs still do by hand.",
    seoDescription: "Ready-to-use dilute sulfuric acid mobile phase for organic acid HPLC analysis. Pre-filtered, degassed, Aminex-column compatible.",
    relevantCategories: ["mobile-phase-bags", "standard-solutions"],
    relevantIndustries: ["fermentation", "food-beverage"],
  },
  "pesticide-residue-analysis": {
    slug: "pesticide-residue-analysis",
    title: "GC Solvents For Pesticide Residue Analysis",
    h1: "Pesticide Residue Analysis Solvents",
    tagline: "QuEChERS-compatible solvents and SPE cleanup for multi-residue methods",
    description: "Multi-residue pesticide screening on GC-MS/MS depends on a clean QuEChERS extraction and cleanup — residual matrix interference from a lower-grade solvent shows up as elevated baseline noise exactly where low-level residues need to be quantified.",
    seoDescription: "GC grade solvents and SPE products for QuEChERS pesticide residue analysis. Multi-residue method compatible, low matrix interference.",
    relevantCategories: ["gc-solvents", "spe-products"],
    relevantIndustries: ["food-testing", "agriculture-agrochemical"],
  },
  "gc-sample-preparation": {
    slug: "gc-sample-preparation",
    title: "GC Solvents For Sample Preparation &amp; Extraction",
    h1: "GC Sample Preparation Solvents",
    tagline: "Low-residue extraction solvents that won't show up as ghost peaks",
    description: "Liquid-liquid extraction and solvent-based cleanup ahead of GC analysis only works if the extraction solvent itself doesn't contribute peaks — residue grade matters as much for sample prep as it does for the final injection solvent.",
    seoDescription: "GC grade extraction solvents for sample preparation — hexane, ethyl acetate, DCM. Low residue, no interfering peaks.",
    relevantCategories: ["gc-solvents", "spe-products"],
    relevantIndustries: ["environmental", "food-testing", "petrochemical-qc"],
  },
  "cannabis-analysis": {
    slug: "cannabis-analysis",
    title: "HPLC &amp; GC Solvents For Cannabis Potency &amp; Residual Testing",
    h1: "Cannabis Analysis Solvents",
    tagline: "Potency, terpene, pesticide, and residual solvent testing reagents",
    description: "Cannabis testing labs run cannabinoid potency on HPLC, terpene and residual solvent panels on GC-headspace, and pesticide multi-residue screens — three different method types that all depend on the same underlying solvent purity discipline.",
    seoDescription: "HPLC and GC grade solvents for cannabis potency, terpene, residual solvent, and pesticide testing. Method-validated purity.",
    relevantCategories: ["hplc-solvents", "gc-solvents", "standard-solutions"],
    relevantIndustries: ["food-testing", "contract-laboratories"],
  },
  "icp-ms-elemental-analysis": {
    slug: "icp-ms-elemental-analysis",
    title: "Trace Acids &amp; Standards For ICP-MS Elemental Analysis",
    h1: "ICP-MS Elemental Analysis Reagents",
    tagline: "Trace-metal grade acids and certified element standards for ppb-level detection",
    description: "ICP-MS detection limits in the low-ppt range are only as clean as the digestion acid and calibration standard behind them — trace-metal grade nitric and hydrochloric acid keep the instrument blank from becoming the limiting factor.",
    seoDescription: "Trace metal grade nitric and hydrochloric acid, certified ICP standards for ICP-MS elemental analysis. Sub-ppb background.",
    relevantCategories: ["trace-analysis-grade", "elemental-impurities", "standard-solutions"],
    relevantIndustries: ["environmental", "pharmaceutical", "water-utilities"],
  },
  "ich-q3d-elemental-impurities": {
    slug: "ich-q3d-elemental-impurities",
    title: "Element Standards For ICH Q3D Elemental Impurity Testing",
    h1: "ICH Q3D Elemental Impurity Testing",
    tagline: "Class 1/2A/2B/3 element standards mapped to ICH Q3D(R2) and USP &lt;232&gt;/&lt;233&gt;",
    description: "Elemental impurity risk assessment under ICH Q3D(R2) requires testing against a specific 24-element list grouped by toxicity class — using standards mapped directly to those classes instead of a generic multi-element mix keeps the validation paperwork simple.",
    seoDescription: "ICH Q3D Class 1/2A/2B/3 element standards for elemental impurity risk assessment. USP <232>/<233> and EP 5.20 compliant.",
    relevantCategories: ["elemental-impurities", "trace-analysis-grade"],
    relevantIndustries: ["pharmaceutical", "veterinary-animal-health"],
  },
  "karl-fischer-moisture-analysis": {
    slug: "karl-fischer-moisture-analysis",
    title: "Karl Fischer Reagents For Moisture Content Analysis",
    h1: "Karl Fischer Moisture Analysis",
    tagline: "Volumetric and coulometric titration reagents for water content determination",
    description: "Moisture specification failures are often a titration reagent problem in disguise — reagent titer drift from age or moisture pickup during storage shows up as inconsistent results long before anyone questions the sample itself.",
    seoDescription: "Karl Fischer volumetric and coulometric reagents for moisture content analysis. Stable titer, batch-certified water standard included.",
    relevantCategories: ["karl-fischer"],
    relevantIndustries: ["pharmaceutical", "petrochemical-qc", "battery-materials"],
  },
  "nmr-sample-preparation": {
    slug: "nmr-sample-preparation",
    title: "Deuterated Solvents For NMR Sample Preparation",
    h1: "NMR Sample Preparation Solvents",
    tagline: "High isotopic purity deuterated solvents for clean, interference-free spectra",
    description: "Residual proton signal from a deuterated solvent shows up directly in the spectrum it's meant to be invisible in — isotopic purity above 99.8atom%D keeps the solvent peak from masking analyte signals in the same chemical shift region.",
    seoDescription: "Deuterated NMR solvents — CDCl3, DMSO-d6, D2O, CD3OD. 99.8%+ isotopic purity for clean, interference-free spectra.",
    relevantCategories: ["nmr-deuterated"],
    relevantIndustries: ["pharmaceutical", "research-institutes", "universities"],
  },
  "uv-vis-spectroscopy": {
    slug: "uv-vis-spectroscopy",
    title: "Low UV Absorbance Solvents For UV-Vis Spectroscopy",
    h1: "UV-Vis Spectroscopy Solvents",
    tagline: "Spectroscopic grade solvents with minimal background absorbance",
    description: "A spectroscopic baseline is only flat if the solvent itself doesn't absorb in the measurement window — UV cutoff below 205nm keeps the blank from interfering with low-wavelength chromophores.",
    seoDescription: "Spectroscopic grade solvents with low UV absorbance for UV-Vis spectroscopy. Clean baseline below 210nm.",
    relevantCategories: ["spectroscopic-solvents"],
    relevantIndustries: ["pharmaceutical", "research-institutes"],
  },
  "dissolution-testing": {
    slug: "dissolution-testing",
    title: "USP Grade Solvents For Dissolution Testing",
    h1: "Dissolution Testing Solvents",
    tagline: "Compendial-grade buffers and solvents for USP dissolution apparatus methods",
    description: "Dissolution method robustness depends on dissolution medium consistency — buffer pH drift or solvent-grade variability between batches can shift release profiles enough to produce an out-of-specification result that has nothing to do with the actual tablet.",
    seoDescription: "USP grade buffers and solvents for dissolution testing apparatus methods. Consistent pH, compendial documentation.",
    relevantCategories: ["pharma-grade", "standard-solutions"],
    relevantIndustries: ["pharmaceutical"],
  },
  "cell-cryopreservation": {
    slug: "cell-cryopreservation",
    title: "cGMP DMSO For Cell Cryopreservation",
    h1: "Cell Cryopreservation Reagents",
    tagline: "cGMP-grade DMSO and pre-formulated freezing solutions for cell therapy",
    description: "Cryopreservation outcomes for CAR-T, stem cell, and PBMC workflows depend on DMSO purity and consistency — endotoxin control and cGMP documentation matter as much as the freezing protocol itself for clinical-grade cell products.",
    seoDescription: "cGMP-grade DMSO and cryopreservation kits for CAR-T, stem cell, and PBMC freezing. Endotoxin-controlled, cGMP documented.",
    relevantCategories: ["cell-culture-reagents"],
    relevantIndustries: ["biotechnology", "clinical-diagnostics"],
  },
  "mobile-phase-buffer-prep": {
    slug: "mobile-phase-buffer-prep",
    title: "Ready-To-Use Buffers For HPLC Mobile Phase Preparation",
    h1: "Mobile Phase Buffer Preparation",
    tagline: "Pre-filtered, degassed buffer bags that skip the daily prep-room routine",
    description: "Daily mobile phase preparation is a recurring source of method variability — pH adjustment error, incomplete filtration, and inconsistent degassing all disappear when the buffer arrives pre-made and QC-certified in a ready-to-connect bag.",
    seoDescription: "Pre-filtered, degassed HPLC mobile phase buffer bags. Skip daily prep-room buffer making — ready to connect, QC-certified.",
    relevantCategories: ["mobile-phase-bags"],
    relevantIndustries: ["pharmaceutical", "contract-laboratories"],
  },
  "tlc-method-development": {
    slug: "tlc-method-development",
    title: "TLC Plates &amp; Developing Solvents For Method Development",
    h1: "TLC Method Development",
    tagline: "Silica gel and reverse-phase TLC plates with matched developing solvent systems",
    description: "Thin-layer chromatography remains the fastest way to scout a separation before committing to HPLC method development — plate uniformity and developing solvent purity determine whether Rf values reproduce from one run to the next.",
    seoDescription: "TLC plates and developing solvents for rapid method scouting. Silica gel, reverse-phase, and HPTLC formats available.",
    relevantCategories: ["tlc-products"],
    relevantIndustries: ["universities", "pharmaceutical"],
  },
  "spe-sample-cleanup": {
    slug: "spe-sample-cleanup",
    title: "SPE Cartridges For Sample Cleanup &amp; Extraction",
    h1: "SPE Sample Cleanup",
    tagline: "C18, HLB, and mixed-mode SPE cartridges for matrix cleanup ahead of LC or GC",
    description: "Solid-phase extraction cleanup removes matrix interferences before they reach the column — choosing the right sorbent chemistry (C18 for reversed-phase, HLB for broad-spectrum, mixed-mode for ionizable analytes) is most of what determines recovery.",
    seoDescription: "C18, HLB, and mixed-mode SPE cartridges for sample cleanup ahead of LC-MS or GC-MS analysis. QuEChERS compatible.",
    relevantCategories: ["spe-products"],
    relevantIndustries: ["food-testing", "environmental", "clinical-diagnostics"],
  },
  "veterinary-drug-residue": {
    slug: "veterinary-drug-residue",
    title: "LC-MS Solvents For Veterinary Drug Residue Testing",
    h1: "Veterinary Drug Residue Testing",
    tagline: "MS-blank certified solvents for antibiotic and hormone residue screening",
    description: "Veterinary drug residue testing in meat, milk, and eggs runs the same trace-level LC-MS/MS methods as human bioanalysis — withdrawal-period compliance depends on detection limits low enough to catch sub-MRL residues reliably.",
    seoDescription: "LC-MS grade solvents for veterinary drug residue testing — antibiotics, hormones, anthelmintics. MS-blank certified.",
    relevantCategories: ["lcms-solvents", "standard-solutions"],
    relevantIndustries: ["veterinary-animal-health", "food-testing"],
  },
  "mycotoxin-analysis": {
    slug: "mycotoxin-analysis",
    title: "HPLC &amp; LC-MS Solvents For Mycotoxin Analysis",
    h1: "Mycotoxin Analysis Solvents",
    tagline: "Immunoaffinity SPE and LC-MS solvents for aflatoxin and mycotoxin panels",
    description: "Mycotoxin screening — aflatoxins, ochratoxin A, zearalenone — runs on immunoaffinity column cleanup followed by HPLC-fluorescence or LC-MS/MS, both of which depend on solvent purity to keep detection limits at the low-ppb levels regulations require.",
    seoDescription: "HPLC and LC-MS solvents for mycotoxin analysis. Immunoaffinity SPE columns for aflatoxin, ochratoxin A screening.",
    relevantCategories: ["hplc-solvents", "lcms-solvents", "spe-products"],
    relevantIndustries: ["food-testing", "agriculture-agrochemical"],
  },
  "forensic-drug-screening": {
    slug: "forensic-drug-screening",
    title: "LC-MS Solvents For Forensic Drug &amp; Toxicology Screening",
    h1: "Forensic Drug Screening Solvents",
    tagline: "Chain-of-custody documented LC-MS solvents for forensic toxicology",
    description: "Forensic drug screening results may face courtroom scrutiny years after the test is run — full batch traceability and documentation on every solvent and standard solution matters as much as the analytical result itself.",
    seoDescription: "LC-MS grade solvents and standards for forensic drug and toxicology screening. Full batch traceability for chain-of-custody documentation.",
    relevantCategories: ["lcms-solvents", "standard-solutions"],
    relevantIndustries: ["forensic-toxicology"],
  },
  "clinical-mass-spec": {
    slug: "clinical-mass-spec",
    title: "LC-MS Solvents For Clinical Mass Spectrometry Assays",
    h1: "Clinical Mass Spectrometry Solvents",
    tagline: "Batch-consistent LC-MS solvents for vitamin D, steroid, and immunosuppressant panels",
    description: "Clinical LC-MS/MS assays run the same calibration curve for months at a time — batch-to-batch solvent consistency protects assay calibration stability in a way that matters more in a clinical lab than almost anywhere else.",
    seoDescription: "LC-MS grade solvents for clinical diagnostic mass spectrometry — vitamin D, steroid panels, immunosuppressants. Batch-consistent.",
    relevantCategories: ["lcms-solvents", "standard-solutions"],
    relevantIndustries: ["clinical-diagnostics"],
  },
  "electrolyte-moisture-control": {
    slug: "electrolyte-moisture-control",
    title: "Anhydrous Solvents For Battery Electrolyte Moisture Control",
    h1: "Battery Electrolyte Moisture Control",
    tagline: "Karl Fischer titration and anhydrous solvents for electrolyte QC",
    description: "Lithium battery electrolyte performance is moisture-sensitive at the ppm level — anhydrous solvent handling and Karl Fischer verification at every stage of formulation keeps water content from degrading cell performance and safety.",
    seoDescription: "Anhydrous solvents and Karl Fischer reagents for lithium battery electrolyte moisture control QC.",
    relevantCategories: ["anhydrous-solvents", "karl-fischer"],
    relevantIndustries: ["battery-materials"],
  },
  "semiconductor-wafer-cleaning": {
    slug: "semiconductor-wafer-cleaning",
    title: "Electronic Grade Solvents For Wafer Cleaning",
    h1: "Semiconductor Wafer Cleaning Solvents",
    tagline: "SEMI-spec IPA and ethanol with sub-ppb metal ion content",
    description: "Wafer cleaning and rinse steps are a direct contamination pathway onto the device surface — SEMI-grade solvent specifications exist because even sub-ppb metal ion levels can affect device yield at advanced process nodes.",
    seoDescription: "SEMI-spec electronic grade IPA and ethanol for semiconductor wafer cleaning. Sub-ppb metal ions, particle-controlled.",
    relevantCategories: ["electronic-grade"],
    relevantIndustries: ["semiconductor"],
  },
  "cosmetic-formulation-qc": {
    slug: "cosmetic-formulation-qc",
    title: "HPLC Solvents For Cosmetic Preservative &amp; Active QC",
    h1: "Cosmetic Formulation QC",
    tagline: "HPLC solvents for preservative, active-ingredient, and stability testing",
    description: "Cosmetic preservative efficacy and active-ingredient quantitation both run on routine HPLC methods — the same solvent-grade discipline as pharmaceutical QC, applied to a faster-moving product category.",
    seoDescription: "HPLC grade solvents for cosmetic preservative and active-ingredient QC testing. Stability and potency analysis.",
    relevantCategories: ["hplc-solvents", "excipients"],
    relevantIndustries: ["cosmetics"],
  },
  "reagent-kit-method-validation": {
    slug: "reagent-kit-method-validation",
    title: "Pre-Configured Reagent Kits For Method Validation",
    h1: "Reagent Kits For Method Validation",
    tagline: "Multi-component kits assembled around a single validated workflow",
    description: "Method validation requires every reagent in the method documented and qualified together — pre-configured kits ship as a single traceable order instead of assembling components from separate purchase orders with separate lot numbers.",
    seoDescription: "Pre-assembled reagent kits for HPLC method validation, cryopreservation, and QC workflows. Single order, full traceability.",
    relevantCategories: ["reagent-kits"],
    relevantIndustries: ["pharmaceutical", "contract-laboratories"],
  },
  "titration-volumetric-analysis": {
    slug: "titration-volumetric-analysis",
    title: "Standard Solutions For Titration &amp; Volumetric Analysis",
    h1: "Titration &amp; Volumetric Analysis",
    tagline: "NaOH, HCl, EDTA, and KMnO4 standard solutions for classical wet chemistry",
    description: "Classical titration methods — acid-base, complexometric, redox — remain the backbone of routine QC in labs that don't need (or can't afford) instrumental methods for every test; standard solution titer accuracy is the whole method.",
    seoDescription: "NaOH, HCl, EDTA, KMnO4 standard solutions for titration and volumetric analysis. Certified titer, batch-traceable.",
    relevantCategories: ["standard-solutions"],
    relevantIndustries: ["petrochemical-qc", "water-utilities", "specialty-chemical-distributors"],
  },
  "gradient-mobile-phase-optimization": {
    slug: "gradient-mobile-phase-optimization",
    title: "HPLC Solvents For Gradient Mobile Phase Optimization",
    h1: "Gradient Mobile Phase Optimization",
    tagline: "Gradient-grade acetonitrile and methanol with consistent UV cutoff for clean baselines",
    description: "Gradient method optimization is sensitive to UV cutoff and trace impurity drift between solvent lots — a baseline rise during a gradient run is more often a solvent-quality issue than a column problem, and gradient-grade solvent removes that variable.",
    seoDescription: "Gradient grade HPLC acetonitrile and methanol for clean baselines during gradient elution. Consistent UV cutoff, low trace impurities.",
    relevantCategories: ["hplc-solvents", "uplc-solvents"],
    relevantIndustries: ["pharmaceutical", "contract-laboratories"],
  },
  "uplc-high-throughput-analysis": {
    slug: "uplc-high-throughput-analysis",
    title: "UPLC Solvents For High-Throughput Sub-2-Micron Analysis",
    h1: "UPLC High-Throughput Analysis",
    tagline: "Ultra-low particulate, 0.1µm filtered solvents protecting sub-2µm column frits",
    description: "Sub-2-micron UPLC columns operate at backpressures and frit tolerances that make particulate contamination a much bigger problem than it is in conventional HPLC — 0.1µm filtration isn't optional at this column chemistry.",
    seoDescription: "Ultra-low particulate UPLC grade solvents, 0.1µm filtered, for sub-2-micron column high-throughput analysis.",
    relevantCategories: ["uplc-solvents"],
    relevantIndustries: ["pharmaceutical", "cro", "clinical-diagnostics"],
  },
};

export function getApplicationInfo(slug: string): ApplicationInfo | undefined {
  return APPLICATIONS[slug];
}

export function getAllApplicationSlugs(): string[] {
  return Object.keys(APPLICATIONS);
}

// Flat, sublabel-free nav items for the persistent sidebar — shared by the
// index page and every individual application page so the list only lives
// in one place and stays in sync.
export function getApplicationNavItems() {
  return Object.values(APPLICATIONS).map(app => ({ href: `/applications/${app.slug}`, label: app.h1 }));
}
