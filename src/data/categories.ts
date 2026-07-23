// ============================================================
// LANCHROM™ — Product Category Metadata
// ============================================================

export interface CategoryInfo {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  group: "pharma-solvents" | "analytical-solvents" | "mobile-phase" | "standards" | "reagent-kits" | "consumables" | "life-science" | "excipients";
  bannerImage?: string;
  /** Named SKUs planned for this category but not yet published as full
   *  product pages — shown as a preview list on an otherwise-empty
   *  category page so it reads as "coming soon" rather than blank. */
  comingSoonItems?: string[];
}

export const CATEGORIES: Record<string, CategoryInfo> = {
  "hplc-solvents": {
    slug: "hplc-solvents",
    name: "HPLC Solvents",
    shortName: "HPLC",
    tagline: "Gradient and standard grade, for routine and demanding separations",
    description: "High-performance liquid chromatography mobile phase solvents, tested for UV transparency, low water content, and gradient-grade baseline stability.",
    seoTitle: "HPLC Grade Solvents Manufacturer | Acetonitrile, Methanol, IPA | LANCHROM™",
    seoDescription: "Factory-direct HPLC grade solvents — acetonitrile, methanol, IPA, hexane, heptane. UV-tested, gradient grade available. Free samples, 1-day quote response.",
  group: "analytical-solvents",
  bannerImage: "/images/product-lines/hplc-solvents.jpg",
  },
  "lcms-solvents": {
    slug: "lcms-solvents",
    name: "LC-MS Solvents",
    shortName: "LC-MS",
    tagline: "Sub-ppb metal content, MS-blank certified",
    description: "Mass spectrometry compatible solvents with metal ion content below 1 ppb and verified MS blank performance for the most demanding bioanalytical methods.",
    seoTitle: "LC-MS Grade Solvents | Sub-ppb Metal Content | LANCHROM™",
    seoDescription: "LC-MS grade acetonitrile, methanol, IPA, water. Metal ions <1ppb, MS blank tested. For bioanalytical and pharmaceutical LC-MS/MS methods.",
  group: "analytical-solvents",
  bannerImage: "/images/product-lines/lcms-solvents.jpg",
  },
  "uplc-solvents": {
    slug: "uplc-solvents",
    name: "UPLC Solvents",
    shortName: "UPLC",
    tagline: "Ultra-low particulate, filtered to 0.1µm",
    description: "Ultra-high-performance liquid chromatography solvents filtered to sub-micron particle specification to protect UPLC column integrity and frit life.",
    seoTitle: "UPLC Grade Solvents | 0.1µm Filtered | LANCHROM™",
    seoDescription: "UPLC grade acetonitrile, methanol, water. Filtered to 0.1µm for column protection in ultra-high-performance liquid chromatography.",
  group: "analytical-solvents",
  bannerImage: "/images/product-lines/lanchrom-hplc-lcms.jpg",
  },
  "gc-solvents": {
    slug: "gc-solvents",
    name: "GC Solvents",
    shortName: "GC",
    tagline: "RESI grade, free of GC-interfering peaks",
    description: "Gas chromatography solvents verified free of trace volatile impurities that would otherwise appear as interfering peaks in sensitive GC and GC-MS methods.",
    seoTitle: "GC Grade Solvents Manufacturer | RESI Grade | LANCHROM™",
    seoDescription: "GC grade hexane, acetone, ethyl acetate, DCM, methanol, toluene. RESI grade, free of GC-interfering peaks. Factory-direct.",
  group: "analytical-solvents",
  bannerImage: "/images/product-lines/gc-solvents.jpg",
  },
  "spectroscopic-solvents": {
    slug: "spectroscopic-solvents",
    name: "Spectroscopic / NMR Solvents",
    shortName: "Spectroscopic",
    tagline: "UV-grade and deuterated solvents for spectroscopy",
    description: "UV-transparent solvents for spectrophotometric methods, and deuterated solvents for NMR spectroscopy at industry-standard isotopic purity.",
    seoTitle: "Spectroscopic & NMR Deuterated Solvents | LANCHROM™",
    seoDescription: "UV-grade spectroscopic solvents and deuterated NMR solvents — CDCl3, DMSO-d6, D2O, CD3OD. High isotopic purity, small-pack available.",
  group: "analytical-solvents",
  bannerImage: "/images/product-lines/spectroscopic-nmr-solvents.jpg",
  },
  "anhydrous-solvents": {
    slug: "anhydrous-solvents",
    name: "Anhydrous Solvents",
    shortName: "Anhydrous",
    tagline: "Water content below 50 ppm, nitrogen-sealed",
    description: "Moisture-sensitive synthesis solvents with guaranteed low water content, packaged under nitrogen to maintain anhydrous condition through transport and storage.",
    seoTitle: "Anhydrous Solvents | <50ppm Water | LANCHROM™",
    seoDescription: "Anhydrous ethanol, acetonitrile, THF, methanol. Water content <50ppm, nitrogen-sealed packaging for moisture-sensitive synthesis.",
  group: "pharma-solvents",
  bannerImage: "/images/product-lines/lanchrom-packaging.jpg",
  },
  "prep-solvents": {
    slug: "prep-solvents",
    name: "Prep / Bulk Solvents",
    shortName: "Prep",
    tagline: "Industrial-scale purity for preparative chromatography",
    description: "Bulk preparative-grade solvents for large-scale purification, balancing high purity with the economics of industrial-volume chromatography.",
    seoTitle: "Preparative Grade Bulk Solvents | LANCHROM™",
    seoDescription: "Prep grade acetonitrile and methanol for preparative HPLC at industrial scale. Drum and IBC packaging.",
  group: "pharma-solvents",
  bannerImage: "/images/product-lines/lanchrom-distillation.jpg",
  },
  "trace-analysis-grade": {
    slug: "trace-analysis-grade",
    name: "Trace Analysis Grade",
    shortName: "Trace Analysis",
    tagline: "Ultra-pure acids and reagents for ICP-MS and semiconductor digestion",
    description: "Trace-metal-grade nitric, hydrochloric, and hydrofluoric acid, plus hydrogen peroxide and ultrapure water, for ICP-MS sample digestion, elemental analysis, and semiconductor-grade wet processing where trace contamination directly limits detection.",
    seoTitle: "Trace Metal Grade Acids for ICP-MS | LANCHROM™",
    seoDescription: "Trace analysis grade nitric acid, hydrochloric acid, hydrofluoric acid, hydrogen peroxide, ultrapure water. For ICP-MS digestion and semiconductor processing.",
    group: "analytical-solvents",
    bannerImage: "/images/product-lines/trace-analysis-grade.jpg",
    comingSoonItems: [
      "Trace Analysis Grade Nitric Acid (65%) — ICP-MS digestion",
      "Trace Analysis Grade Hydrochloric Acid (37%) — elemental analysis",
      "Trace Analysis Grade Hydrofluoric Acid — semiconductor digestion",
      "Trace Analysis Grade Hydrogen Peroxide (30%) — digestion aid",
      "Trace Analysis Grade Acetonitrile — LC-MS/MS",
      "Trace Analysis Grade Ultrapure Water — ICP/AAS dilution",
    ],
  },
  "pharma-grade": {
    slug: "pharma-grade",
    name: "Pharmaceutical Grade",
    shortName: "Pharma",
    tagline: "USP, EP, and ICH Q3C compliant",
    description: "Pharmacopoeial-grade solvents manufactured to USP and EP monograph specifications, with full ICH Q3C residual solvent documentation.",
    seoTitle: "Pharmaceutical Grade Solvents USP EP | LANCHROM™",
    seoDescription: "USP/EP pharmaceutical grade IPA, ethanol, acetone, DMSO, DCM. Full ICH Q3C documentation, GMP manufactured.",
  group: "pharma-solvents",
  bannerImage: "/images/product-lines/pharmaceutical-grade.jpg",
  },
  "electronic-grade": {
    slug: "electronic-grade",
    name: "Electronic Grade",
    shortName: "Electronic",
    tagline: "SEMI specification, sub-ppb metal ions",
    description: "Semiconductor-grade solvents manufactured to SEMI specifications with trace metal control to single-digit ppb and below for wafer-cleaning applications.",
    seoTitle: "Electronic Grade Solvents SEMI Spec | LANCHROM™",
    seoDescription: "Electronic grade IPA, ethanol, methanol. SEMI spec, <1ppb metal ions. For semiconductor wafer cleaning and advanced packaging.",
  group: "pharma-solvents",
  bannerImage: "/images/product-lines/lanchrom-semiconductor.jpg",
  },
  "excipients": {
    slug: "excipients",
    name: "Pharmaceutical Excipients",
    shortName: "Excipients",
    tagline: "Glycerol, PEG, polysorbate, and more",
    description: "USP/EP-grade pharmaceutical excipients for injectable, oral, and topical formulations, with kosher and halal certification available.",
    seoTitle: "Pharmaceutical Excipients USP EP | LANCHROM™",
    seoDescription: "Glycerol, propylene glycol, PEG series, mannitol, sorbitol, polysorbate 80, benzyl alcohol. USP/EP grade excipients.",
  group: "excipients",
  bannerImage: "/images/product-lines/pharmaceutical-excipients.jpg",
  },
  "food-grade": {
    slug: "food-grade",
    name: "Food Grade Chemicals",
    shortName: "Food Grade",
    tagline: "FCC compliant, kosher and halal certified",
    description: "Food-grade acidulants, preservatives, and additives manufactured to FCC specifications with full kosher and halal certification available.",
    seoTitle: "Food Grade Chemicals FCC | Kosher Halal | LANCHROM™",
    seoDescription: "Food grade citric acid, tartaric acid, malic acid, sodium benzoate, glycerol. FCC compliant, kosher/halal certified.",
  group: "excipients",
  bannerImage: "/images/product-lines/pharmaceutical-excipients.jpg",
  },
  "lab-consumable-chemicals": {
    slug: "lab-consumable-chemicals",
    name: "Lab Consumable Chemicals",
    shortName: "Lab Consumables",
    tagline: "Molecular sieves, ion exchange resins, filter aids, and drying agents",
    description: "Supporting chemicals for sample preparation and process workflows — molecular sieves, ion exchange resins, diatomaceous earth filter aids, and Kjeldahl tablets — that don't fit a solvent or reagent-kit category but show up on the same purchase order.",
    seoTitle: "Molecular Sieves, Ion Exchange Resin, Filter Aids | LANCHROM™",
    seoDescription: "Lab consumable chemicals: molecular sieves 3A/4A/5A, ion exchange resins, diatomaceous earth, Kjeldahl tablets. Factory-direct.",
    group: "excipients",
    bannerImage: "/images/product-lines/lanchrom-packaging.jpg",
    comingSoonItems: [
      "Molecular Sieves (3A / 4A / 5A) — drying and separation",
      "Ion Exchange Resins — pharmaceutical and industrial grade",
      "Diatomaceous Earth — filtration aid",
      "Kjeldahl Tablets — protein analysis catalyst",
      "Nitrocellulose — industrial grade",
    ],
  },
  "standard-solutions": {
    slug: "standard-solutions",
    name: "Standard Solutions",
    shortName: "Standards",
    tagline: "ICP, AAS, pH, and titration reference standards",
    description: "Certified reference standard solutions for ICP-MS, AAS, pH calibration, conductivity, and volumetric titration — traceable and batch-documented.",
    seoTitle: "ICP AAS pH Standard Solutions | LANCHROM™",
    seoDescription: "Certified ICP standard solutions, AAS standards, pH buffers, conductivity standards, titration reagents. Traceable reference materials.",
  group: "standards",
  bannerImage: "/images/product-lines/standard-solutions.jpg",
  },
  "elemental-impurities": {
    slug: "elemental-impurities",
    name: "Elemental Impurities Standards",
    shortName: "Elemental Impurities",
    tagline: "ICH Q3D / USP <232><233> compliant single and multi-element standards",
    description: "Certified single- and multi-element standard solutions mapped to the ICH Q3D(R2) Class 1, 2A, 2B, and 3 elemental impurity list, for risk assessment and routine ICP-MS/ICP-OES testing under USP <232>/<233> and EP 5.20.",
    seoTitle: "ICH Q3D Elemental Impurities Standards | USP 232 233 | LANCHROM™",
    seoDescription: "ICH Q3D Class 1/2A/2B/3 elemental impurity standards for ICP-MS. USP <232>/<233> and EP 5.20 compliant. As, Cd, Hg, Pb, Co, V, Ni, and full PDE-mapped series.",
    group: "standards",
    bannerImage: "/images/product-lines/trace-analysis-grade.jpg",
  },
  "karl-fischer": {
    slug: "karl-fischer",
    name: "Karl Fischer Reagents",
    shortName: "Karl Fischer",
    tagline: "Volumetric and coulometric water determination reagents",
    description: "Single and two-component Karl Fischer reagents for volumetric titration, plus coulometric anode and cathode solutions for trace water analysis.",
    seoTitle: "Karl Fischer Reagents | Water Content Titration | LANCHROM™",
    seoDescription: "Karl Fischer volumetric and coulometric reagents for water content determination. Single-component, two-component, and water standards.",
  group: "consumables",
  },
  "tlc-products": {
    slug: "tlc-products",
    name: "TLC Products",
    shortName: "TLC",
    tagline: "Silica, HPTLC, reversed-phase, and preparative plates",
    description: "Thin-layer chromatography plates across silica gel, high-performance, reversed-phase C18, cellulose, and alumina stationary phases.",
    seoTitle: "TLC Plates Silica HPTLC C18 | LANCHROM™",
    seoDescription: "TLC plates: silica gel, HPTLC, reversed-phase C18, cellulose, alumina, preparative. For pharmaceutical and natural product analysis.",
  group: "consumables",
  },
  "spe-products": {
    slug: "spe-products",
    name: "SPE Products",
    shortName: "SPE",
    tagline: "C18, HLB, mixed-mode, and QuEChERS cartridges",
    description: "Solid-phase extraction cartridges for sample cleanup across pesticide residue, veterinary drug, and pharmaceutical bioanalytical workflows.",
    seoTitle: "SPE Cartridges C18 HLB QuEChERS | LANCHROM™",
    seoDescription: "SPE solid-phase extraction cartridges: C18, HLB, mixed-mode MCX/MAX, QuEChERS kits, immunoaffinity columns.",
  group: "consumables",
  },
  "mobile-phase-bags": {
    slug: "mobile-phase-bags",
    name: "Mobile Phase Bags",
    shortName: "Mobile Phase",
    tagline: "Ready-to-use, nitrogen-sealed, 5L–20L flex bags",
    description: "Pre-prepared, pre-filtered mobile phase solutions in nitrogen-sealed flexible bags — for pharma QC, food safety, and fermentation analysis labs that want to skip the prep room.",
    seoTitle: "Ready-to-Use HPLC Mobile Phase Bags | LANCHROM™",
    seoDescription: "Pre-made HPLC mobile phase in 5L-20L flex bags. Formic acid, sulfuric acid, ammonium buffers, organic acid analysis. Nitrogen-sealed.",
  group: "mobile-phase",
  bannerImage: "/images/product-lines/mobile-phase-bags.jpg",
  },
  "nmr-deuterated": {
    slug: "nmr-deuterated",
    name: "Deuterated NMR Solvents",
    shortName: "NMR",
    tagline: "CDCl₃, DMSO-d6, D₂O, and the full deuterated series",
    description: "High isotopic purity deuterated solvents for NMR spectroscopy — ampouled and bulk packaging across the standard solvent series used in structure elucidation and QC.",
    seoTitle: "Deuterated NMR Solvents CDCl3 DMSO-d6 | LANCHROM™",
    seoDescription: "Deuterated NMR solvents: CDCl3, DMSO-d6, D2O, CD3OD, CD3CN, C6D6. High isotopic purity, ampoule and bulk packaging.",
    group: "consumables",
    bannerImage: "/images/product-lines/spectroscopic-nmr-solvents.jpg",
  },
  "life-science-reagents": {
    slug: "life-science-reagents",
    name: "Life Science Reagents",
    shortName: "Life Science",
    tagline: "Culture media, microbial detection kits, and GMP environmental monitoring",
    description: "Dehydrated culture media, chromogenic identification media, PCR-based pathogen detection, and cleanroom environmental monitoring products for microbiology and QC labs.",
    seoTitle: "Microbiology Culture Media & Detection Kits | LANCHROM™",
    seoDescription: "Dehydrated culture media, PCR pathogen detection kits, GMP cleanroom environmental monitoring media, ATP hygiene testing.",
    group: "life-science",
    bannerImage: "/images/product-lines/life-science-reagents.jpg",
  },
  "reagent-kits": {
    slug: "reagent-kits",
    name: "Reagent Kits",
    shortName: "Kits",
    tagline: "Pre-assembled kits for HPLC, cryopreservation, and QC workflows",
    description: "Multi-component kits assembled around a specific workflow — HPLC method development, cell cryopreservation, Karl Fischer titration, and fermentation QC — shipped as a single configured order.",
    seoTitle: "Custom Reagent Kits for HPLC & Lab Workflows | LANCHROM™",
    seoDescription: "Pre-assembled reagent kits: HPLC starter kits, cell cryopreservation kits, Karl Fischer kits, fermentation QC kits. Minimum 10 kits.",
    group: "reagent-kits",
    bannerImage: "/images/product-lines/reagent-kits.jpg",
  },
  "cell-culture-reagents": {
    slug: "cell-culture-reagents",
    name: "Cell Culture & Cryopreservation Reagents",
    shortName: "Cell Culture",
    tagline: "cGMP-grade DMSO, cryopreservation kits, and cell processing solvents",
    description: "Cryopreservation and cell-processing reagents for cell and gene therapy manufacturing — cGMP-grade DMSO, pre-configured freezing solutions, and washing solvents for CAR-T, stem cell, and PBMC workflows.",
    seoTitle: "cGMP DMSO & Cell Cryopreservation Reagents | LANCHROM™",
    seoDescription: "cGMP-grade DMSO for cell cryopreservation, CAR-T freezing kits, PBMC cryopreservation reagents. For cell and gene therapy manufacturing.",
    group: "life-science",
    bannerImage: "/images/product-lines/life-science-reagents-v2.jpg",
    comingSoonItems: [
      "Cell Cryopreservation Kit — cGMP DMSO 100mL + cryo vials + CoA",
      "CAR-T Process-Grade Freezing Kit — cGMP DMSO 500mL + 10% pre-formulated cryo solution",
      "PBMC Cryopreservation Kit — DMSO 50mL + FBS-grade freezing medium + vials",
      "Cell Washing Solvent Kit — PBS buffer + 70% ethanol + IPA",
    ],
  },
};

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return CATEGORIES[slug];
}

export function getAllCategorySlugs(): string[] {
  return Object.keys(CATEGORIES);
}

export function getCategoriesByGroup(group: CategoryInfo["group"]): CategoryInfo[] {
  return Object.values(CATEGORIES).filter(c => c.group === group);
}

export const GROUP_LABELS: Record<CategoryInfo["group"], { label: string; tagline: string }> = {
  "pharma-solvents": { label: "Pharmaceutical Grade Solvents", tagline: "USP/EP, anhydrous, electronic, and prep-grade solvents for manufacturing and QC" },
  "analytical-solvents": { label: "HPLC / GC Analytical Solvents", tagline: "HPLC, LC-MS, UPLC, GC, spectroscopic, and trace analysis grades" },
  "mobile-phase": { label: "Ready-to-Use Mobile Phase Bags", tagline: "Pre-filtered, nitrogen-sealed flex bags for routine and fermentation analysis" },
  standards: { label: "Standard Solutions & Reference Materials", tagline: "ICP/AAS element standards, pH/conductivity, titration, and calibration solutions" },
  "reagent-kits": { label: "Reagent Kits & Custom Sets", tagline: "Pre-assembled kits for HPLC, fermentation, cell biology, and GMP workflows" },
  consumables: { label: "Chromatography Consumables", tagline: "TLC plates, SPE cartridges, Karl Fischer reagents, deuterated NMR solvents" },
  "life-science": { label: "Life Science Reagents", tagline: "Culture media, cell cryopreservation, and microbial detection products" },
  excipients: { label: "Pharmaceutical Excipients & Food Grade", tagline: "USP/EP excipients, FCC food-grade chemicals, and laboratory consumables" },
};
