// ============================================================
// LANCHROM™ — Extended Product Data (Batch 3)
// Standard Solutions, Karl Fischer, Mobile Phase, NMR, Fermentation
// ============================================================

import type { Product } from "@/types";

export const PRODUCTS_BATCH3: Product[] = [

  // ── ICP Multi-Element Standard ────────────────────────────
  {
    _id: "std-icp-multi",
    name: "ICP Multi-Element Standard Solution (23 Elements)",
    slug: "icp-multi-element-standard",
    category: "standard-solutions",
    grades: ["hplc"],
    shortDescription: "Certified multi-element calibration standard for ICP-OES and ICP-MS, covering 23 common environmental and food-safety target elements.",
    specifications: [
      { parameter: "Element Count", value: "23 elements" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L" },
      { parameter: "Matrix", value: "2-5% HNO₃" },
      { parameter: "Traceability", value: "Certified reference material" },
    ],
    applications: ["ICP-OES/ICP-MS calibration", "Environmental water/soil testing", "Food safety heavy metal screening"],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
      { volume: "500mL", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICP Multi-Element Standard Solution 23 Elements | LANCHROM™",
    seoDescription: "Certified 23-element ICP standard solution for ICP-OES/MS calibration. Environmental and food safety testing.",
    keywords: ["ICP standard solution", "multi-element calibration standard", "ICP-MS standard"],
  },

  // ── AAS Standard Series ───────────────────────────────────
  {
    _id: "std-aas-single",
    name: "AAS Single-Element Standard Solutions (Full Series)",
    slug: "aas-standard-solutions",
    category: "standard-solutions",
    grades: ["hplc"],
    shortDescription: "Atomic absorption single-element standards across the full periodic series at 1000 mg/L, for AAS instrument calibration.",
    specifications: [
      { parameter: "Concentration", value: "1000 mg/L" },
      { parameter: "Elements Available", value: "Full series — Na, K, Ca, Mg, Fe, Cu, Zn, Pb, Cd, Cr, Ni, Mn, and more" },
      { parameter: "Matrix", value: "Dilute acid, element-specific" },
    ],
    applications: ["AAS instrument calibration", "Environmental testing", "Food and agricultural testing"],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "AAS Standard Solutions Full Element Series | LANCHROM™",
    seoDescription: "Atomic absorption single-element standard solutions, 1000mg/L, full periodic series. For AAS calibration.",
    keywords: ["AAS standard solution", "atomic absorption standard", "1000mg/L element standard"],
  },

  // ── Conductivity Standard ─────────────────────────────────
  {
    _id: "std-conductivity",
    name: "Conductivity Standard Solutions",
    slug: "conductivity-standards",
    category: "standard-solutions",
    grades: ["hplc"],
    shortDescription: "Certified conductivity calibration standards at 84, 1413, and 12880 µS/cm for conductivity meter verification.",
    specifications: [
      { parameter: "84 µS/cm Standard", value: "84 ± 1 µS/cm @ 25°C" },
      { parameter: "1413 µS/cm Standard", value: "1413 ± 10 µS/cm @ 25°C" },
      { parameter: "12880 µS/cm Standard", value: "12880 ± 100 µS/cm @ 25°C" },
    ],
    applications: ["Conductivity meter calibration", "Water quality testing", "Pharmaceutical water system QC"],
    packaging: [{ volume: "250mL", volumeMl: 250, container: "hdpe", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Conductivity Standard Solutions | LANCHROM™",
    seoDescription: "Certified conductivity standards 84/1413/12880 µS/cm for meter calibration and water system QC.",
    keywords: ["conductivity standard solution", "conductivity calibration"],
  },

  // ── Titration Standards bundle ────────────────────────────
  {
    _id: "std-titration-naoh",
    name: "NaOH Volumetric Standard Solution",
    slug: "naoh-standard-solution",
    cas: "1310-73-2",
    category: "standard-solutions",
    grades: ["hplc"],
    shortDescription: "Standardized sodium hydroxide titrant at 0.1mol/L and 1mol/L for acid-base titration and method validation.",
    specifications: [
      { parameter: "Concentration Options", value: "0.1 mol/L, 1 mol/L" },
      { parameter: "Standardization", value: "Traceable to primary standard" },
    ],
    applications: ["Acid-base titration", "Pharmacopeial assay methods", "QC method validation"],
    packaging: [
      { volume: "500mL", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
      { volume: "1L", volumeMl: 1000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "NaOH Volumetric Standard Solution | LANCHROM™",
    seoDescription: "Standardized NaOH titrant 0.1mol/L and 1mol/L for acid-base titration and method validation.",
    keywords: ["NaOH standard solution", "sodium hydroxide titrant"],
  },

  // ── pH Buffer Standards (already exists as ph-buffer-standards, leaving as is) ──

  // ── Karl Fischer — Single Component ───────────────────────
  {
    _id: "kf-single-component",
    name: "Karl Fischer Reagent — Volumetric (Single Component)",
    slug: "kf-single-component-reagent",
    category: "karl-fischer",
    grades: ["hplc"],
    shortDescription: "Single-component (composite) Karl Fischer titrant combining iodine, sulfur dioxide, and base in one solution for simplified volumetric titration.",
    specifications: [
      { parameter: "Titer", value: "5 mg H₂O/mL (typical)" },
      { parameter: "Format", value: "Single-bottle composite reagent" },
    ],
    applications: ["Solvent water content QC", "Simplified volumetric KF titration", "Raw material moisture testing"],
    packaging: [{ volume: "1L", volumeMl: 1000, container: "amber-glass", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "UN 1170", hazmatClass: "Class 3 · PG II",
    seoTitle: "Karl Fischer Single-Component Reagent | LANCHROM™",
    seoDescription: "Single-component composite Karl Fischer titrant for simplified volumetric water determination.",
    keywords: ["Karl Fischer single component", "composite KF reagent"],
  },

  // ── Karl Fischer Coulometric ───────────────────────────────
  {
    _id: "kf-coulometric",
    name: "Karl Fischer Coulometric Reagent Set (Anode / Cathode)",
    slug: "kf-coulometric-reagent",
    category: "karl-fischer",
    grades: ["hplc"],
    shortDescription: "Anode and cathode solution pair for coulometric Karl Fischer titration, for trace water determination below 0.1%.",
    specifications: [
      { parameter: "Detection Range", value: "10 ppm – 5%" },
      { parameter: "Anode Solution", value: "500mL" },
      { parameter: "Cathode Solution", value: "250mL" },
    ],
    applications: ["Trace water determination in solvents and gases", "Pharmaceutical raw material QC", "Electronic-grade solvent moisture verification"],
    packaging: [{ volume: "500mL + 250mL set", volumeMl: 750, container: "amber-glass", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "UN 1170", hazmatClass: "Class 3 · PG II",
    seoTitle: "Karl Fischer Coulometric Reagent Anode Cathode | LANCHROM™",
    seoDescription: "Coulometric Karl Fischer anode/cathode reagent set for trace water determination 10ppm-5%.",
    keywords: ["coulometric Karl Fischer", "KF anode cathode reagent"],
  },

  // ── Mobile Phase: Sulfuric Acid 0.005N (already have organic-acid-mobile-phase, add 0.01N variant) ──
  {
    _id: "mp-sulfuric-01n",
    name: "0.01N Sulfuric Acid Mobile Phase",
    slug: "sulfuric-acid-01n-mobile-phase",
    cas: "7664-93-9",
    category: "mobile-phase-bags",
    grades: ["hplc"],
    shortDescription: "Higher-concentration ion-exclusion mobile phase for organic acid HPLC, an alternative to 0.005N for methods requiring sharper peak resolution.",
    specifications: [
      { parameter: "H₂SO₄ Concentration", value: "0.01N (±2%)" },
      { parameter: "pH", value: "1.8 ± 0.1" },
      { parameter: "Filtration", value: "0.2 µm membrane filtered" },
      { parameter: "Packaging Atmosphere", value: "Nitrogen-filled" },
    ],
    applications: ["Organic acid HPLC analysis", "Ion-exclusion chromatography", "Fermentation QC"],
    packaging: [
      { volume: "5L", volumeMl: 5000, container: "flex-bag", minQty: 1, available: true },
      { volume: "10L", volumeMl: 10000, container: "flex-bag", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "0.01N Sulfuric Acid Mobile Phase | LANCHROM™",
    seoDescription: "Ready-to-use 0.01N sulfuric acid mobile phase for organic acid HPLC. Nitrogen-sealed flex bags.",
    keywords: ["0.01N sulfuric acid mobile phase", "organic acid HPLC mobile phase"],
  },

  // ── Mobile Phase: Sugar Analysis ──────────────────────────
  {
    _id: "mp-sugar-analysis",
    name: "Sugar Analysis Mobile Phase",
    slug: "sugar-analysis-mobile-phase",
    category: "mobile-phase-bags",
    grades: ["hplc"],
    shortDescription: "Ready-to-use mobile phase formulated for HPLC sugar analysis — glucose, fructose, sucrose, maltose, and lactose — on calcium-form ion-exchange columns.",
    specifications: [
      { parameter: "Composition", value: "Ultra-pure water, degassed and filtered" },
      { parameter: "Filtration", value: "0.2 µm membrane filtered" },
      { parameter: "Compatible Columns", value: "Aminex HPX-87P, Ca²⁺-form columns" },
      { parameter: "Packaging Atmosphere", value: "Nitrogen-filled" },
    ],
    applications: ["Glucose/fructose/sucrose quantification", "Maltose and lactose analysis", "Sugar conversion monitoring in fermentation"],
    packaging: [
      { volume: "5L", volumeMl: 5000, container: "flex-bag", minQty: 1, available: true },
      { volume: "7L", volumeMl: 7000, container: "flex-bag", minQty: 1, available: true },
      { volume: "10L", volumeMl: 10000, container: "flex-bag", minQty: 1, available: true },
    ],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Sugar Analysis Mobile Phase HPLC | Glucose Fructose | LANCHROM™",
    seoDescription: "Ready-to-use HPLC mobile phase for sugar analysis — glucose, fructose, sucrose, lactose. Aminex HPX-87P compatible.",
    keywords: ["sugar analysis mobile phase", "glucose fructose HPLC", "Aminex HPX-87P mobile phase"],
  },

  // ── Wine Analysis Mobile Phase Kit ────────────────────────
  {
    _id: "mp-wine-analysis",
    name: "Wine Analysis Mobile Phase Kit",
    slug: "wine-analysis-mobile-phase",
    category: "mobile-phase-bags",
    grades: ["hplc"],
    shortDescription: "Two-bag system for complete wine fermentation profiling — organic acids (tartaric, malic, citric, lactic) plus sugar and ethanol conversion tracking.",
    specifications: [
      { parameter: "Format", value: "2 × 7L flex bags (acid + sugar mobile phase)" },
      { parameter: "Detects", value: "Tartaric, malic, citric, lactic acid; glucose, fructose, ethanol" },
      { parameter: "Compatible Columns", value: "Aminex HPX-87H with RI detection" },
    ],
    applications: ["Wine fermentation QC", "Malolactic fermentation monitoring", "Grape must sugar tracking"],
    packaging: [{ volume: "7L × 2 bag set", volumeMl: 14000, container: "flex-bag", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Wine Analysis HPLC Mobile Phase Kit | LANCHROM™",
    seoDescription: "Two-bag mobile phase system for wine organic acid and sugar/ethanol HPLC analysis. Aminex HPX-87H compatible.",
    keywords: ["wine analysis mobile phase", "malolactic fermentation HPLC", "tartaric malic acid HPLC"],
  },

  // ── Baijiu / Chinese Liquor Analysis Kit ──────────────────
  {
    _id: "mp-baijiu-analysis",
    name: "Baijiu / Huangjiu Organic Acid Analysis Mobile Phase",
    slug: "baijiu-organic-acid-mobile-phase",
    category: "mobile-phase-bags",
    grades: ["hplc"],
    shortDescription: "Mobile phase formulated for the organic acid profile central to Chinese liquor (baijiu/huangjiu) quality control — acetic, lactic, citric, and succinic acid.",
    specifications: [
      { parameter: "Detects", value: "Acetic acid, lactic acid, citric acid, succinic acid, malic acid" },
      { parameter: "Column Type", value: "C18 reversed-phase" },
      { parameter: "Filtration", value: "0.2 µm membrane filtered" },
    ],
    applications: ["Baijiu organic acid profiling", "Huangjiu fermentation QC", "Traditional liquor quality control"],
    packaging: [
      { volume: "5L", volumeMl: 5000, container: "flex-bag", minQty: 1, available: true },
      { volume: "7L", volumeMl: 7000, container: "flex-bag", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Baijiu Organic Acid Mobile Phase HPLC | LANCHROM™",
    seoDescription: "Ready-to-use mobile phase for baijiu/huangjiu organic acid HPLC QC. Acetic, lactic, citric, succinic acid detection.",
    keywords: ["baijiu HPLC mobile phase", "Chinese liquor organic acid analysis", "huangjiu QC mobile phase"],
  },

  // ── NMR Deuterated — CDCl3 ─────────────────────────────────
  {
    _id: "nmr-cdcl3",
    name: "Deuterated Chloroform (CDCl₃)",
    slug: "cdcl3",
    cas: "865-49-6",
    category: "nmr-deuterated",
    grades: ["hplc"],
    shortDescription: "The most widely used NMR solvent — high isotopic purity CDCl₃ with TMS reference standard, ampouled or bulk.",
    specifications: [
      { parameter: "Isotopic Purity", value: "≥ 99.8 atom% D" },
      { parameter: "TMS Reference", value: "0.03% v/v (standard)" },
      { parameter: "Water Content", value: "≤ 0.02%" },
    ],
    applications: ["Routine ¹H and ¹³C NMR spectroscopy", "Structure elucidation", "Reaction monitoring"],
    packaging: [
      { volume: "0.75mL × 10 ampoules", volumeMl: 7.5, container: "amber-glass", minQty: 1, available: true },
      { volume: "25mL", volumeMl: 25, container: "amber-glass", minQty: 1, available: true },
      { volume: "100mL", volumeMl: 100, container: "amber-glass", minQty: 1, available: true },
    ],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "UN 1888", hazmatClass: "Class 6.1 · PG III",
    seoTitle: "Deuterated Chloroform CDCl3 NMR Solvent | LANCHROM™",
    seoDescription: "High isotopic purity CDCl3 ≥99.8 atom%D for NMR spectroscopy. Ampoule and bulk packaging with TMS reference.",
    keywords: ["CDCl3 NMR solvent", "deuterated chloroform", "NMR solvent supplier"],
  },

  // ── NMR Deuterated — DMSO-d6 ───────────────────────────────
  {
    _id: "nmr-dmso-d6",
    name: "Deuterated DMSO (DMSO-d6)",
    slug: "dmso-d6",
    cas: "2206-27-1",
    category: "nmr-deuterated",
    grades: ["hplc"],
    shortDescription: "High-polarity deuterated solvent for NMR analysis of polar and water-soluble compounds, including peptides and pharmaceutical salts.",
    specifications: [
      { parameter: "Isotopic Purity", value: "≥ 99.9 atom% D" },
      { parameter: "Water Content", value: "≤ 0.02%" },
    ],
    applications: ["NMR of polar/ionic compounds", "Pharmaceutical salt characterization", "Peptide structure analysis"],
    packaging: [
      { volume: "0.75mL × 10 ampoules", volumeMl: 7.5, container: "amber-glass", minQty: 1, available: true },
      { volume: "25mL", volumeMl: 25, container: "amber-glass", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Deuterated DMSO-d6 NMR Solvent | LANCHROM™",
    seoDescription: "High isotopic purity DMSO-d6 for NMR of polar compounds, pharmaceutical salts, and peptides.",
    keywords: ["DMSO-d6 NMR", "deuterated DMSO", "NMR solvent polar compounds"],
  },

  // ── NMR Deuterated — D2O ───────────────────────────────────
  {
    _id: "nmr-d2o",
    name: "Deuterium Oxide (D₂O)",
    slug: "d2o",
    cas: "7789-20-0",
    category: "nmr-deuterated",
    grades: ["hplc"],
    shortDescription: "Heavy water for NMR analysis of water-soluble compounds, biomolecules, and aqueous-phase reaction monitoring.",
    specifications: [
      { parameter: "Isotopic Purity", value: "≥ 99.9 atom% D" },
      { parameter: "Conductivity", value: "Low, suitable for biomolecule NMR" },
    ],
    applications: ["Water-soluble compound NMR", "Biomolecule structure analysis", "Aqueous reaction monitoring"],
    packaging: [
      { volume: "5mL", volumeMl: 5, container: "amber-glass", minQty: 1, available: true },
      { volume: "25mL", volumeMl: 25, container: "amber-glass", minQty: 1, available: true },
      { volume: "100mL", volumeMl: 100, container: "amber-glass", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Deuterium Oxide D2O NMR Grade | LANCHROM™",
    seoDescription: "High purity D2O ≥99.9 atom%D for NMR of water-soluble compounds and biomolecules.",
    keywords: ["D2O NMR grade", "deuterium oxide", "heavy water NMR"],
  },

  // ── TLC HPTLC Plates ──────────────────────────────────────
  {
    _id: "tlc-hptlc",
    name: "HPTLC Plates (High Performance)",
    slug: "hptlc-plates",
    category: "tlc-products",
    grades: ["hplc"],
    shortDescription: "High-performance thin-layer chromatography plates with finer particle size for sharper spot resolution than conventional TLC.",
    specifications: [
      { parameter: "Layer", value: "Silica gel 60, fine particle" },
      { parameter: "Plate Size", value: "10×10cm, 20×10cm" },
      { parameter: "Resolution", value: "Higher than conventional TLC" },
    ],
    applications: ["Pharmaceutical impurity profiling", "Botanical fingerprint analysis requiring high resolution", "Quantitative densitometry"],
    packaging: [{ volume: "25 plates", volumeMl: 0, container: "hdpe", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "HPTLC Plates High Performance TLC | LANCHROM™",
    seoDescription: "High-performance TLC plates for sharper resolution. Pharmaceutical and botanical fingerprint analysis.",
    keywords: ["HPTLC plates", "high performance TLC", "TLC plates fine particle"],
  },

  // ── SPE HLB ────────────────────────────────────────────────
  {
    _id: "spe-hlb",
    name: "SPE HLB Cartridges",
    slug: "spe-hlb-cartridges",
    category: "spe-products",
    grades: ["hplc"],
    shortDescription: "Hydrophilic-lipophilic balanced polymeric sorbent for broad-spectrum pesticide residue and multi-class compound extraction.",
    specifications: [
      { parameter: "Sorbent", value: "Polymeric HLB (PSDVB)" },
      { parameter: "Bed Mass / Volume", value: "200mg/6mL" },
    ],
    applications: ["Broad-spectrum pesticide residue screening", "Multi-class pharmaceutical extraction", "Environmental water sample cleanup"],
    packaging: [{ volume: "100 cartridges", volumeMl: 0, container: "hdpe", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "SPE HLB Cartridges Pesticide Residue | LANCHROM™",
    seoDescription: "HLB solid-phase extraction cartridges for broad-spectrum pesticide residue and multi-class extraction.",
    keywords: ["SPE HLB cartridge", "pesticide residue extraction", "polymeric SPE sorbent"],
  },

  // ── QuEChERS Kit ──────────────────────────────────────────
  {
    _id: "spe-quechers",
    name: "QuEChERS Extraction & Cleanup Kit",
    slug: "quechers-kit",
    category: "spe-products",
    grades: ["hplc"],
    shortDescription: "Quick, Easy, Cheap, Effective, Rugged, Safe extraction salt and dispersive cleanup kit for fruit and vegetable pesticide residue analysis.",
    specifications: [
      { parameter: "Extraction Salts", value: "MgSO₄, NaCl (AOAC or EN method)" },
      { parameter: "Cleanup Sorbent", value: "PSA, C18, GCB combinations available" },
      { parameter: "Format", value: "15mL pre-weighed tubes" },
    ],
    applications: ["Fruit and vegetable pesticide residue extraction", "GB/EU/EPA multi-residue method sample prep"],
    packaging: [{ volume: "50 tubes", volumeMl: 0, container: "hdpe", minQty: 1, available: true }],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "QuEChERS Extraction Cleanup Kit | LANCHROM™",
    seoDescription: "QuEChERS pesticide residue extraction and dispersive cleanup kit. AOAC/EN method compatible, pre-weighed tubes.",
    keywords: ["QuEChERS kit", "pesticide residue extraction kit", "dispersive SPE cleanup"],
  },

  // ── Life Science — Dehydrated Culture Medium ──────────────
  {
    _id: "ls-culture-medium",
    name: "Granular Dehydrated Culture Medium (General Series)",
    slug: "dehydrated-culture-medium",
    category: "life-science-reagents",
    grades: ["hplc"],
    shortDescription: "General-purpose dehydrated culture media in granular format for routine microbiological testing across food, water, and pharmaceutical QC.",
    specifications: [
      { parameter: "Format", value: "Granular, free-flowing" },
      { parameter: "Reconstitution", value: "Autoclave-ready" },
      { parameter: "Shelf Life", value: "24 months unopened" },
    ],
    applications: ["Routine microbiological testing", "Total viable count", "Pharmaceutical environmental monitoring"],
    packaging: [
      { volume: "500g", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
      { volume: "5kg", volumeMl: 5000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Dehydrated Culture Medium Granular | LANCHROM™",
    seoDescription: "Granular dehydrated culture media for routine microbiology testing. Food, water, pharma QC applications.",
    keywords: ["dehydrated culture medium", "granular culture media", "microbiology testing media"],
  },

  // ── Life Science — GMP Environmental Monitoring ───────────
  {
    _id: "ls-env-monitoring",
    name: "GMP Cleanroom Environmental Monitoring Kit",
    slug: "gmp-environmental-monitoring-kit",
    category: "life-science-reagents",
    grades: ["hplc"],
    shortDescription: "Contact plates and air-sampling culture media for GMP cleanroom environmental monitoring across A/B/C/D grade zones.",
    specifications: [
      { parameter: "Format", value: "90mm contact (RODAC) plates, air sampling media" },
      { parameter: "Neutralizers", value: "Available for disinfectant residue neutralization" },
    ],
    applications: ["GMP A/B/C/D grade cleanroom monitoring", "Surface hygiene verification", "Aseptic process validation"],
    packaging: [{ volume: "30 plates / set", volumeMl: 0, container: "hdpe", minQty: 1, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "GMP Cleanroom Environmental Monitoring Kit | LANCHROM™",
    seoDescription: "Contact plates and air sampling media for GMP A/B/C/D cleanroom environmental monitoring.",
    keywords: ["GMP environmental monitoring", "cleanroom contact plates", "RODAC plates"],
  },

  // ── Life Science — PCR Pathogen Detection ─────────────────
  {
    _id: "ls-pcr-kit",
    name: "PCR Pathogen Detection Kit",
    slug: "pcr-pathogen-detection-kit",
    category: "life-science-reagents",
    grades: ["hplc"],
    shortDescription: "PCR-based rapid detection kit for foodborne pathogens including Salmonella, E. coli O157, and Listeria monocytogenes.",
    specifications: [
      { parameter: "Targets", value: "Salmonella spp., E. coli O157, Listeria monocytogenes" },
      { parameter: "Format", value: "48-test or 96-test kit" },
      { parameter: "Turnaround", value: "Same-day result" },
    ],
    applications: ["Food safety pathogen screening", "Environmental swab testing", "Raw material incoming QC"],
    packaging: [
      { volume: "48 tests", volumeMl: 0, container: "hdpe", minQty: 1, available: true },
      { volume: "96 tests", volumeMl: 0, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "PCR Pathogen Detection Kit Food Safety | LANCHROM™",
    seoDescription: "PCR rapid detection kit for Salmonella, E. coli O157, Listeria. Food safety pathogen screening, same-day results.",
    keywords: ["PCR pathogen detection kit", "Salmonella PCR test", "food safety pathogen testing"],
  },

  // ── Reagent Kit Product — HPLC Starter Kit ────────────────
  {
    _id: "kit-hplc-starter",
    name: "HPLC Mobile Phase Starter Kit",
    slug: "hplc-mobile-phase-starter-kit",
    category: "reagent-kits",
    grades: ["hplc"],
    shortDescription: "Acetonitrile, methanol, IPA, and 0.1% formic acid bundled into a single starter configuration for new HPLC method development.",
    specifications: [
      { parameter: "Contents", value: "Acetonitrile HPLC 2.5L · Methanol HPLC 2.5L · Water HPLC 2.5L · 0.1% Formic Acid 100mL" },
      { parameter: "Documentation", value: "Single consolidated CoA set" },
    ],
    applications: ["New HPLC method development", "Laboratory startup solvent inventory"],
    packaging: [{ volume: "Kit (4 components)", volumeMl: 7600, container: "hdpe", minQty: 10, available: true }],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "Mixed — see SDS", hazmatClass: "Class 3",
    seoTitle: "HPLC Mobile Phase Starter Kit | LANCHROM™",
    seoDescription: "Acetonitrile, methanol, IPA, formic acid bundled for HPLC method development. Minimum 10 kits.",
    keywords: ["HPLC starter kit", "HPLC mobile phase kit", "HPLC method development kit"],
  },

  // ── Reagent Kit Product — Cell Cryopreservation Kit ───────
  {
    _id: "kit-cell-cryo",
    name: "Cell Cryopreservation Kit (DMSO)",
    slug: "cell-cryopreservation-kit",
    category: "reagent-kits",
    grades: ["pharma-usp"],
    shortDescription: "Cell therapy grade DMSO paired with cryovial tubes for CAR-T, stem cell, and PBMC cryopreservation workflows.",
    specifications: [
      { parameter: "Contents", value: "DMSO (Cell Therapy Grade) 100mL · Cryovial tubes (external screw cap) × 10" },
      { parameter: "DMSO Endotoxin", value: "< 0.25 EU/mL" },
    ],
    applications: ["CAR-T cell cryopreservation", "Stem cell banking", "PBMC cryopreservation"],
    packaging: [{ volume: "Kit (DMSO + tubes)", volumeMl: 100, container: "amber-glass", minQty: 10, available: true }],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Cell Cryopreservation Kit DMSO | LANCHROM™",
    seoDescription: "Cell therapy grade DMSO and cryovial tubes for CAR-T, stem cell, PBMC cryopreservation. Minimum 10 kits.",
    keywords: ["cell cryopreservation kit", "DMSO cryopreservation kit", "CAR-T cryo kit"],
  },

  // ── Reagent Kit Product — Karl Fischer Kit ────────────────
  {
    _id: "kit-karl-fischer",
    name: "Karl Fischer Water Determination Kit",
    slug: "karl-fischer-kit",
    category: "reagent-kits",
    grades: ["hplc"],
    shortDescription: "Complete titration setup bundling KF reagent, anhydrous methanol, and water standard for solvent and raw material moisture QC.",
    specifications: [
      { parameter: "Contents", value: "Two-component KF reagent 500mL · Anhydrous methanol 1L · Water standard (1.0mg/g) 5mL" },
    ],
    applications: ["Solvent water content QC", "Raw material moisture testing", "Method validation setup"],
    packaging: [{ volume: "Kit (3 components)", volumeMl: 1505, container: "amber-glass", minQty: 10, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "Mixed — see SDS", hazmatClass: "Class 3",
    seoTitle: "Karl Fischer Water Determination Kit | LANCHROM™",
    seoDescription: "Complete KF titration kit: reagent, anhydrous methanol, water standard. For solvent moisture QC.",
    keywords: ["Karl Fischer kit", "water determination kit", "KF titration starter kit"],
  },

  // ── Reagent Kit Product — Fermentation QC Starter Kit ─────
  {
    _id: "kit-fermentation-starter",
    name: "Fermentation QC Starter Kit",
    slug: "fermentation-qc-starter-kit",
    category: "reagent-kits",
    grades: ["hplc"],
    shortDescription: "Drop-in starter configuration for labs beginning organic acid HPLC monitoring on a new fermentation line — mobile phase, standards, and consumables.",
    specifications: [
      { parameter: "Contents", value: "0.005N H₂SO₄ mobile phase 5L · pH buffer standards · Sample vials × 100" },
    ],
    applications: ["New fermentation line QC setup", "Lactic acid / citric acid production QC", "Training and method validation"],
    packaging: [{ volume: "Kit (mobile phase + standards)", volumeMl: 5750, container: "flex-bag", minQty: 10, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Fermentation QC Starter Kit | LANCHROM™",
    seoDescription: "Drop-in fermentation QC kit: mobile phase, pH standards, sample vials. For new fermentation line setup.",
    keywords: ["fermentation QC kit", "fermentation starter kit", "organic acid HPLC starter kit"],
  },

  // ── GMP Disinfection Kit ──────────────────────────────────
  {
    _id: "kit-gmp-disinfection",
    name: "GMP Disinfection Solvent Kit",
    slug: "gmp-disinfection-kit",
    category: "reagent-kits",
    grades: ["pharma-usp"],
    shortDescription: "Ready-to-deploy cleanroom and equipment disinfection set combining 75% ethanol and 70% IPA for GMP manufacturing areas.",
    specifications: [
      { parameter: "Contents", value: "75% Ethanol (USP) 1L · 70% IPA (USP) 500mL" },
    ],
    applications: ["GMP cleanroom disinfection", "Equipment surface sanitization", "Aseptic processing area cleaning"],
    packaging: [{ volume: "Kit (2 components)", volumeMl: 1500, container: "hdpe", minQty: 10, available: true }],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "Mixed — see SDS", hazmatClass: "Class 3",
    seoTitle: "GMP Disinfection Solvent Kit | LANCHROM™",
    seoDescription: "75% ethanol and 70% IPA disinfection kit for GMP cleanroom and equipment sanitization.",
    keywords: ["GMP disinfection kit", "cleanroom disinfection ethanol IPA"],
  },
];
