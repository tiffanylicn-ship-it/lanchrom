// ============================================================
// Product Enrichment Data — adds specs, apps, descriptions to
// products that were added with minimal data in catalog-v2.
// Merged by slug in products.ts
// ============================================================

interface ProductEnrichment {
  image?: string;
  shortDescription?: string;
  cas?: string;
  formula?: string;
  mw?: string;
  specifications?: { parameter: string; value: string; testMethod?: string }[];
  applications?: string[];
  isHazmat?: boolean;
  unNumber?: string;
  hazmatClass?: string;
  seoDescription?: string;
}

export const PRODUCT_ENRICHMENTS: Record<string, ProductEnrichment> = {
  // ── PHARMA-GRADE NEW PRODUCTS ─────────────────────────────
  "toluene": {
    image: "/images/products/toluene.svg",
    shortDescription: "Reagent/pharma grade toluene for synthesis, extraction, and process applications",
    cas: "108-88-3", formula: "C₇H₈", mw: "92.14",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.5%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.03%", testMethod: "Karl Fischer" },
      { parameter: "Refractive index (20°C)", value: "1.496 – 1.498" },
      { parameter: "Density (20°C)", value: "0.865 – 0.870 g/mL" },
      { parameter: "Residue on evaporation", value: "≤ 5 mg/L" },
    ],
    applications: ["Organic synthesis solvent", "Normal-phase HPLC mobile phase component", "Paint and coating formulations", "Extraction solvent for pharmaceutical intermediates"],
    isHazmat: true, unNumber: "UN1294", hazmatClass: "3",
    seoDescription: "Reagent grade toluene for synthesis and extraction. CAS 108-88-3. Available in 4L and 25L.",
  },
  "2-butanone-mek": {
    shortDescription: "Reagent grade methyl ethyl ketone (MEK) for synthesis and cleaning applications",
    cas: "78-93-3", formula: "C₄H₈O", mw: "72.11",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.5%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.1%", testMethod: "Karl Fischer" },
      { parameter: "Density (20°C)", value: "0.804 – 0.806 g/mL" },
    ],
    applications: ["Industrial solvent and degreaser", "Coating and adhesive formulations", "Chemical synthesis intermediate"],
    isHazmat: true, unNumber: "UN1193", hazmatClass: "3",
  },
  "n-butanol": {
    shortDescription: "Pharma/reagent grade n-butanol for extraction and synthesis",
    cas: "71-36-3", formula: "C₄H₁₀O", mw: "74.12",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.5%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.1%", testMethod: "Karl Fischer" },
      { parameter: "Density (20°C)", value: "0.809 – 0.811 g/mL" },
      { parameter: "Boiling point", value: "117 – 118°C" },
    ],
    applications: ["Pharmaceutical extraction solvent", "Organic synthesis", "Butyl ester preparation", "Paint and coating solvent"],
    isHazmat: true, unNumber: "UN1120", hazmatClass: "3",
  },
  "pgme-propylene-glycol-methyl-ether": {
    image: "/images/products/pgme-propylene-glycol-methyl-ether.svg",
    shortDescription: "Electronic/pharma grade PGME — photoresist solvent for semiconductor manufacturing",
    cas: "107-98-2", formula: "C₄H₁₀O₂", mw: "90.12",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.05%", testMethod: "Karl Fischer" },
      { parameter: "Metal ions (Na)", value: "≤ 10 ppt", testMethod: "ICP-MS" },
      { parameter: "Metal ions (Fe)", value: "≤ 10 ppt", testMethod: "ICP-MS" },
      { parameter: "Particles ≥ 0.5µm", value: "≤ 25/mL", testMethod: "Liquid particle counter" },
    ],
    applications: ["Photoresist solvent in semiconductor lithography", "Wafer cleaning and edge bead removal", "Electronic chemical formulation", "Pharmaceutical process solvent"],
    isHazmat: true, unNumber: "UN1993", hazmatClass: "3",
    seoDescription: "Electronic grade PGME for semiconductor manufacturing. Sub-10ppt metal ions. CAS 107-98-2.",
  },
  "pgmea-propylene-glycol-methyl-ether-acetate": {
    image: "/images/products/pgmea-propylene-glycol-methyl-ether-acetate.svg",
    shortDescription: "Electronic grade PGMEA — primary photoresist solvent for IC manufacturing",
    cas: "108-65-6", formula: "C₆H₁₂O₃", mw: "132.16",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.03%", testMethod: "Karl Fischer" },
      { parameter: "Metal ions (total)", value: "≤ 100 ppt", testMethod: "ICP-MS" },
      { parameter: "Particles ≥ 0.5µm", value: "≤ 25/mL" },
    ],
    applications: ["Photoresist coating solvent", "Edge bead remover in lithography", "Semiconductor wafer cleaning"],
    isHazmat: true, unNumber: "UN1993", hazmatClass: "3",
  },
  "dmc-dimethyl-carbonate": {
    image: "/images/products/dmc-dimethyl-carbonate.svg",
    shortDescription: "Battery/pharma grade DMC for electrolyte formulation and green chemistry applications",
    cas: "616-38-6", formula: "C₃H₆O₃", mw: "90.08",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 30 ppm", testMethod: "Karl Fischer" },
      { parameter: "Density (20°C)", value: "1.069 – 1.073 g/mL" },
    ],
    applications: ["Lithium-ion battery electrolyte co-solvent", "Green chemistry replacement for phosgene/DMS", "Pharmaceutical synthesis intermediate"],
    isHazmat: true, unNumber: "UN1161", hazmatClass: "3",
  },
  "nmp-n-methyl-2-pyrrolidone": {
    image: "/images/products/nmp-n-methyl-2-pyrrolidone.svg",
    shortDescription: "High-purity NMP for pharmaceutical process chemistry, polymer dissolution, electronics cleaning, and lithium-ion battery materials",
    cas: "872-50-4", formula: "C₅H₉NO", mw: "99.13",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.8%", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.05%", testMethod: "Karl Fischer" },
      { parameter: "Color (APHA)", value: "≤ 20", testMethod: "Visual" },
      { parameter: "Residue on evaporation", value: "≤ 10 ppm", testMethod: "Gravimetric" },
      { parameter: "Acidity", value: "≤ 0.005%", testMethod: "Titration" },
    ],
    applications: [
      "API process solvent and reaction medium",
      "Polymer dissolution for PVDF, PI, and engineering plastics",
      "Lithium-ion battery cathode slurry solvent",
      "Electronics cleaning and stripping formulations",
      "Specialty coating and membrane production",
    ],
    isHazmat: true, unNumber: "UN1993", hazmatClass: "Class 3 · PG III",
    seoDescription: "High-purity NMP, CAS 872-50-4, for pharma synthesis, polymer dissolution, battery materials, and electronics cleaning. 1L to 200L packaging.",
  },

  // ── HPLC GRADE SOLVENTS ───────────────────────────────────
  "hplc-grade-ethanol": {
    image: "/images/Ethanol-hplc-lcms-gc-purity-label.png",
    shortDescription: "HPLC gradient grade ethanol with UV cutoff 205nm for reversed-phase and normal-phase chromatography",
    cas: "64-17-5", formula: "C₂H₅OH", mw: "46.07",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "UV cutoff", value: "205 nm" },
      { parameter: "UV absorbance @210nm", value: "≤ 0.40 AU", testMethod: "UV-Vis" },
      { parameter: "UV absorbance @254nm", value: "≤ 0.01 AU", testMethod: "UV-Vis" },
      { parameter: "Water content", value: "≤ 0.05%", testMethod: "Karl Fischer" },
      { parameter: "Gradient suitability", value: "Pass", testMethod: "Gradient test" },
      { parameter: "Residue on evaporation", value: "≤ 3 mg/L" },
    ],
    applications: ["Reversed-phase HPLC mobile phase", "Normal-phase HPLC", "Sample preparation and dilution", "UV-Vis spectrophotometry solvent"],
    isHazmat: true, unNumber: "UN1170", hazmatClass: "3",
    seoDescription: "HPLC gradient grade ethanol, UV cutoff 205nm. For chromatography mobile phase. CAS 64-17-5.",
  },
  "hplc-grade-n-hexane": {
    image: "/images/products/hplc-grade-n-hexane.svg",
    shortDescription: "HPLC grade n-hexane for normal-phase chromatography and chiral separations",
    cas: "110-54-3", formula: "C₆H₁₄", mw: "86.18",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.0% (n-hexane isomer)", testMethod: "GC-FID" },
      { parameter: "UV absorbance @210nm", value: "≤ 0.30 AU" },
      { parameter: "Water content", value: "≤ 0.01%" },
      { parameter: "Residue on evaporation", value: "≤ 1 mg/L" },
    ],
    applications: ["Normal-phase HPLC mobile phase", "Chiral HPLC (with IPA modifier)", "Lipid class separation", "Preparative chromatography"],
    isHazmat: true, unNumber: "UN1208", hazmatClass: "3",
  },
  "hplc-grade-thf-tetrahydrofuran": {
    image: "/images/products/hplc-grade-thf-tetrahydrofuran.svg",
    shortDescription: "HPLC grade THF with BHT stabilizer for GPC/SEC and general HPLC applications",
    cas: "109-99-9", formula: "C₄H₈O", mw: "72.11",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "BHT stabilizer", value: "~250 ppm" },
      { parameter: "UV cutoff", value: "212 nm" },
      { parameter: "Water content", value: "≤ 0.03%", testMethod: "Karl Fischer" },
      { parameter: "Peroxide content", value: "≤ 10 ppm" },
    ],
    applications: ["GPC/SEC mobile phase (polymer MW analysis)", "Reversed-phase HPLC (high elution strength)", "Polymer dissolution"],
    isHazmat: true, unNumber: "UN2056", hazmatClass: "3",
  },

  // ── LC-MS GRADE ───────────────────────────────────────────
  "lc-ms-grade-water-ultrapure": {
    image: "/images/products/lc-ms-grade-water-ultrapure.svg",
    shortDescription: "LC-MS grade ultrapure water with TOC <5ppb and resistivity 18.2MΩ for mass spectrometry",
    cas: "7732-18-5", formula: "H₂O", mw: "18.02",
    specifications: [
      { parameter: "TOC", value: "< 5 ppb" },
      { parameter: "Resistivity", value: "18.2 MΩ·cm" },
      { parameter: "Metal ions (Na)", value: "< 1 ppb", testMethod: "ICP-MS" },
      { parameter: "Metal ions (K)", value: "< 1 ppb", testMethod: "ICP-MS" },
      { parameter: "MS blank test", value: "Pass (no significant peaks)" },
      { parameter: "Particles ≥ 0.22µm", value: "< 10/mL" },
    ],
    applications: ["LC-MS/MS mobile phase aqueous component", "LC-MS blank and rinse", "Ultra-trace analytical dilutions", "ICP-MS sample preparation"],
  },
  "lc-ms-grade-formic-acid-0-1-in-water": {
    image: "/images/products/lc-ms-grade-formic-acid-0-1-in-water.svg",
    shortDescription: "0.1% formic acid in LC-MS grade water — ready-to-use positive-mode ESI mobile phase",
    cas: "64-18-6",
    specifications: [
      { parameter: "Formic acid concentration", value: "0.1% (v/v) ± 0.005%" },
      { parameter: "Metal ions (Na)", value: "< 1 ppb", testMethod: "ICP-MS" },
      { parameter: "UV transparency @210nm", value: "Pass" },
      { parameter: "MS blank test", value: "Pass" },
    ],
    applications: ["Positive-mode ESI-MS aqueous mobile phase", "Proteomics and metabolomics", "Pharmaceutical bioanalysis LC-MS/MS"],
  },

  // ── GC GRADE ──────────────────────────────────────────────
  "gc-grade-acetone": {
    image: "/images/products/gc-grade-acetone.svg",
    shortDescription: "GC grade acetone with low residue on evaporation for gas chromatographic analysis",
    cas: "67-64-1", formula: "C₃H₆O", mw: "58.08",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.8%", testMethod: "GC-FID" },
      { parameter: "Residue on evaporation", value: "≤ 1 mg/L" },
      { parameter: "GC blank", value: "No interfering peaks", testMethod: "GC-FID" },
      { parameter: "Water content", value: "≤ 0.1%" },
    ],
    applications: ["GC sample dissolution", "Equipment cleaning between GC runs", "QuEChERS extraction co-solvent", "General laboratory rinsing"],
    isHazmat: true, unNumber: "UN1090", hazmatClass: "3",
  },
  "gc-grade-toluene": {
    image: "/images/products/gc-grade-toluene.svg",
    shortDescription: "GC grade toluene for PAH analysis and high-boiling-point compound dissolution",
    cas: "108-88-3", formula: "C₇H₈", mw: "92.14",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.8%", testMethod: "GC-FID" },
      { parameter: "Residue on evaporation", value: "≤ 1 mg/L" },
      { parameter: "GC blank", value: "No interfering peaks" },
    ],
    applications: ["PAH (polycyclic aromatic hydrocarbon) analysis", "Dissolution of high-boiling compounds", "GC-MS applications", "Semi-volatile organic compound analysis"],
    isHazmat: true, unNumber: "UN1294", hazmatClass: "3",
  },

  // ── TRACE ANALYSIS GRADE ──────────────────────────────────
  "trace-analysis-grade-nitric-acid-65": {
    image: "/images/products/trace-analysis-grade-nitric-acid-65.svg",
    shortDescription: "Ultra-pure 65% nitric acid for ICP-MS sample digestion with sub-ppb metal content",
    cas: "7697-37-2", formula: "HNO₃", mw: "63.01",
    specifications: [
      { parameter: "Assay", value: "65.0 – 67.0%", testMethod: "Titration" },
      { parameter: "Na", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Fe", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "K", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Ca", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Al", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Pb", value: "≤ 0.05 ppb", testMethod: "ICP-MS" },
    ],
    applications: ["ICP-MS sample digestion", "ICP-OES sample preparation", "Semiconductor material analysis", "Environmental heavy metal testing"],
    isHazmat: true, unNumber: "UN2031", hazmatClass: "8",
    seoDescription: "Trace analysis grade nitric acid 65% for ICP-MS. Sub-ppb metals. CAS 7697-37-2.",
  },
  "trace-analysis-grade-hydrochloric-acid-37": {
    image: "/images/products/trace-analysis-grade-hydrochloric-acid-37.svg",
    shortDescription: "Ultra-pure 37% hydrochloric acid for trace element analysis with sub-ppb metal content",
    cas: "7647-01-0", formula: "HCl", mw: "36.46",
    specifications: [
      { parameter: "Assay", value: "36.5 – 38.0%", testMethod: "Titration" },
      { parameter: "Na", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Fe", value: "≤ 0.1 ppb", testMethod: "ICP-MS" },
      { parameter: "Residue on evaporation", value: "≤ 1 ppm" },
    ],
    applications: ["ICP-MS/ICP-OES sample preparation", "Acid digestion (aqua regia component)", "AAS standard matrix matching", "Trace metal analysis"],
    isHazmat: true, unNumber: "UN1789", hazmatClass: "8",
  },

  // ── MOBILE PHASE BAGS ─────────────────────────────────────
  "0-1-formic-acid-in-water-bag": {
    image: "/images/products/0-1-formic-acid-in-water-bag.svg",
    shortDescription: "0.1% formic acid in ultrapure water — pre-filtered, nitrogen-sealed mobile phase bag for LC-MS",
    specifications: [
      { parameter: "Formic acid concentration", value: "0.1% (v/v)" },
      { parameter: "Filtration", value: "0.22 µm membrane filtered" },
      { parameter: "Packaging", value: "Nitrogen-sealed collapsible aluminum foil laminate bag" },
      { parameter: "Shelf life", value: "12 months (sealed)" },
    ],
    applications: ["LC-MS positive-mode ESI mobile phase A", "Proteomics and metabolomics workflows", "Routine pharmaceutical bioanalysis"],
  },
  "0-1-formic-acid-in-acetonitrile-bag": {
    shortDescription: "0.1% formic acid in LC-MS grade acetonitrile — organic mobile phase B for LC-MS",
    specifications: [
      { parameter: "Formic acid concentration", value: "0.1% (v/v)" },
      { parameter: "Acetonitrile purity", value: "LC-MS grade" },
      { parameter: "Filtration", value: "0.22 µm" },
      { parameter: "Packaging", value: "Nitrogen-sealed bag" },
    ],
    applications: ["LC-MS organic mobile phase B", "Gradient LC-MS methods", "High-throughput bioanalytical screening"],
  },
  "10mm-ammonium-acetate-in-water-bag": {
    shortDescription: "10mM ammonium acetate in ultrapure water — LC-MS compatible buffer mobile phase bag",
    specifications: [
      { parameter: "Ammonium acetate concentration", value: "10 mM ± 0.5 mM" },
      { parameter: "pH", value: "~6.8" },
      { parameter: "Filtration", value: "0.22 µm" },
      { parameter: "MS compatibility", value: "Volatile buffer, ESI compatible" },
    ],
    applications: ["LC-MS buffered mobile phase (positive and negative mode)", "HILIC chromatography", "Metabolomics methods requiring pH control"],
  },
  "0-01n-h-so-mobile-phase-bag": {
    shortDescription: "0.01N sulfuric acid mobile phase bag for ion-exclusion HPLC organic acid analysis",
    specifications: [
      { parameter: "H₂SO₄ concentration", value: "0.01N (5mM)" },
      { parameter: "pH", value: "~1.8" },
      { parameter: "Filtration", value: "0.22 µm membrane" },
      { parameter: "Degassing", value: "Vacuum degassed, nitrogen sealed" },
    ],
    applications: ["Ion-exclusion HPLC (Aminex HPX-87H)", "Organic acid quantitation in fermentation", "Sugar analysis in food and beverage"],
  },

  // ── STANDARD SOLUTIONS ────────────────────────────────────
  "icp-multi-element-standard-23-elements-10mg-l": {
    image: "/images/products/icp-multi-element-standard-23-elements-10mg-l.svg",
    shortDescription: "ICP multi-element standard containing 23 elements at 10mg/L in dilute nitric acid matrix",
    specifications: [
      { parameter: "Elements", value: "Ag, Al, As, Ba, Be, Bi, Ca, Cd, Co, Cr, Cu, Fe, Ga, In, K, Li, Mg, Mn, Na, Ni, Pb, Se, Zn" },
      { parameter: "Concentration", value: "10.0 ± 0.5 mg/L each element" },
      { parameter: "Matrix", value: "2-5% HNO₃" },
      { parameter: "Traceability", value: "Certified, traceable to NIST SRM" },
    ],
    applications: ["ICP-OES multi-element calibration", "ICP-MS semi-quantitative screening", "Environmental water analysis", "Food safety heavy metal screening"],
  },
  "ph-7-00-buffer-standard": {
    image: "/images/products/ph-7-00-buffer-standard.svg",
    shortDescription: "pH 7.00 buffer standard for pH meter calibration, certified ±0.01 at 25°C",
    specifications: [
      { parameter: "pH value (25°C)", value: "7.00 ± 0.01" },
      { parameter: "Temperature coefficient", value: "Specified on CoA" },
      { parameter: "Color coding", value: "Green (per DIN)" },
      { parameter: "Traceability", value: "Traceable to NIST/PTB" },
    ],
    applications: ["pH meter calibration (daily)", "QC instrument verification", "Buffer slope check (with pH 4.00)"],
  },
  "naoh-standard-solution-0-1mol-l": {
    shortDescription: "0.1 mol/L sodium hydroxide volumetric standard for acid-base titration",
    specifications: [
      { parameter: "Concentration", value: "0.1000 ± 0.0005 mol/L" },
      { parameter: "Titer factor", value: "Certified on CoA" },
      { parameter: "Shelf life", value: "12 months sealed" },
    ],
    applications: ["Acid-base titration of pharmaceutical APIs", "Acidity determination in food and beverage", "Total acid number (TAN) in petroleum"],
  },

  // ── KARL FISCHER ──────────────────────────────────────────
  "kf-volumetric-reagent-one-component": {
    image: "/images/products/kf-volumetric-reagent-one-component.svg",
    shortDescription: "One-component Karl Fischer volumetric reagent for routine water content determination",
    specifications: [
      { parameter: "Water equivalence", value: "~5 mg H₂O/mL (Composite 5)" },
      { parameter: "Solvent system", value: "Methanol-based" },
      { parameter: "Suitable for", value: "Volumetric KF titrators (all brands)" },
      { parameter: "Shelf life", value: "12 months (sealed), 3 months (opened)" },
    ],
    applications: ["Routine water determination in solvents, APIs, excipients", "Pharmaceutical QC (USP <921>)", "Chemical raw material incoming QC"],
  },
  "kf-water-standard-1-0-mg-g": {
    shortDescription: "Certified 1.0 mg/g water standard for Karl Fischer titrator titer verification",
    specifications: [
      { parameter: "Water content", value: "1.00 ± 0.05 mg/g (certified)", testMethod: "Karl Fischer" },
      { parameter: "Matrix", value: "Methanol-based" },
      { parameter: "Ampoule", value: "5 × 10mL sealed glass ampoules" },
      { parameter: "Traceability", value: "Traceable to national standard" },
    ],
    applications: ["Daily KF titrator titer determination", "KF system suitability verification", "Quality audit documentation"],
  },

  // ── SPE CARTRIDGES ────────────────────────────────────────
  "c18-spe-cartridge-500mg-6ml": {
    image: "/images/products/c18-spe-cartridge-500mg-6ml.svg",
    shortDescription: "C18 reversed-phase SPE cartridge for extraction of non-polar to moderately polar analytes from aqueous samples",
    specifications: [
      { parameter: "Sorbent", value: "Octadecyl (C18) bonded silica" },
      { parameter: "Sorbent mass", value: "500 mg" },
      { parameter: "Tube volume", value: "6 mL" },
      { parameter: "Particle size", value: "40-60 µm" },
      { parameter: "End-capped", value: "Yes" },
    ],
    applications: ["Drug analysis in biological fluids", "Pesticide residue extraction from water", "Environmental organic pollutant concentration", "Food safety contaminant testing"],
  },
  "hlb-spe-cartridge-200mg-6ml": {
    image: "/images/products/hlb-spe-cartridge-200mg-6ml.svg",
    shortDescription: "HLB polymeric SPE cartridge for broad-spectrum extraction across a wide polarity range",
    specifications: [
      { parameter: "Sorbent", value: "Hydrophilic-Lipophilic Balance (HLB) copolymer" },
      { parameter: "Sorbent mass", value: "200 mg" },
      { parameter: "Tube volume", value: "6 mL" },
      { parameter: "pH stability", value: "0-14" },
    ],
    applications: ["Multi-residue pesticide extraction", "Pharmaceutical metabolite isolation", "Environmental micro-pollutant concentration", "Veterinary drug residue testing"],
  },
  "quechers-cleanup-salt-pack-15ml": {
    shortDescription: "QuEChERS dispersive SPE cleanup tubes with PSA/C18 for pesticide residue analysis",
    specifications: [
      { parameter: "Contents", value: "150mg MgSO₄ + 25mg PSA + 25mg C18" },
      { parameter: "Tube", value: "15 mL centrifuge tube" },
      { parameter: "Method", value: "EN 15662 / AOAC 2007.01" },
    ],
    applications: ["Pesticide residue cleanup in fruits and vegetables", "Veterinary drug residue cleanup", "Mycotoxin analysis sample preparation"],
  },

  // ── NMR DEUTERATED ────────────────────────────────────────
  "chloroform-d-cdcl-99-8-d": {
    image: "/images/products/chloroform-d-cdcl-99-8-d.svg",
    shortDescription: "Deuterated chloroform (CDCl₃) ≥99.8 atom%D — the most widely used NMR solvent",
    cas: "865-49-6", formula: "CDCl₃", mw: "120.38",
    specifications: [
      { parameter: "Isotopic purity", value: "≥ 99.8 atom%D" },
      { parameter: "Chemical purity", value: "≥ 99.8%" },
      { parameter: "Residual CHCl₃ peak", value: "δ 7.26 ppm (¹H)" },
      { parameter: "Stabilizer", value: "Silver foil (0.03% w/w)" },
    ],
    applications: ["Routine ¹H and ¹³C NMR spectroscopy", "Structure elucidation", "Purity determination by qNMR", "Reaction monitoring"],
  },
  "dmso-d6-99-9-d": {
    image: "/images/products/dmso-d6-99-9-d.svg",
    shortDescription: "Deuterated DMSO (DMSO-d6) ≥99.9 atom%D for polar compound NMR",
    cas: "2206-27-1", formula: "(CD₃)₂SO", mw: "84.17",
    specifications: [
      { parameter: "Isotopic purity", value: "≥ 99.9 atom%D" },
      { parameter: "Chemical purity", value: "≥ 99.9%" },
      { parameter: "Residual DMSO peak", value: "δ 2.50 ppm (¹H)" },
      { parameter: "Water content", value: "≤ 0.02%" },
    ],
    applications: ["NMR of polar and ionic compounds", "Pharmaceutical API structure confirmation", "Polymer NMR analysis"],
  },
  // ── Products with images but no prior enrichment ────────
  "acetonitrile": {
    image: "/images/products/acetonitrile.svg",
    seoDescription: "HPLC gradient grade acetonitrile, UV cutoff 190nm. For LC-MS and HPLC mobile phase. CAS 75-05-8.",
  },
  "methanol": {
    image: "/images/Ethanol-hplc-lcms-gc-purity-label.png",
    seoDescription: "HPLC grade methanol, UV cutoff 205nm. For chromatography and mobile phase. CAS 67-56-1.",
  },
  "isopropanol-ipa": {
    image: "/images/IPA-electronic-hplc-lcms-gc-purity-label.png",
    seoDescription: "HPLC grade isopropanol (IPA) for chromatography, extraction, and cleaning. CAS 67-63-0.",
  },
  "dmso-dimethyl-sulfoxide": {
    image: "/images/products/dmso-dimethyl-sulfoxide.svg",
    seoDescription: "USP/cell culture grade DMSO for cryopreservation and pharmaceutical applications. CAS 67-68-5.",
  },
  "hplc-grade-ethyl-acetate": {
    image: "/images/products/hplc-grade-ethyl-acetate.svg",
    shortDescription: "HPLC grade ethyl acetate for normal-phase chromatography and extraction",
    cas: "141-78-6", formula: "C₄H₈O₂", mw: "88.11",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.8%", testMethod: "GC-FID" },
      { parameter: "UV cutoff", value: "256 nm" },
      { parameter: "Water content", value: "≤ 0.02%", testMethod: "Karl Fischer" },
      { parameter: "Residue on evaporation", value: "≤ 3 mg/L" },
    ],
    applications: ["Normal-phase HPLC", "Flash chromatography", "Liquid-liquid extraction", "Preparative chromatography"],
    isHazmat: true, unNumber: "UN1173", hazmatClass: "3",
  },
  "hplc-grade-dichloromethane-dcm": {
    image: "/images/products/hplc-grade-dichloromethane-dcm.svg",
    shortDescription: "HPLC prep grade dichloromethane for preparative and normal-phase chromatography",
    cas: "75-09-2", formula: "CH₂Cl₂", mw: "84.93",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.9%", testMethod: "GC-FID" },
      { parameter: "UV cutoff", value: "233 nm" },
      { parameter: "Water content", value: "≤ 0.02%", testMethod: "Karl Fischer" },
      { parameter: "Residue on evaporation", value: "≤ 2 mg/L" },
    ],
    applications: ["Preparative HPLC", "Normal-phase chromatography", "Liquid-liquid extraction", "Flash chromatography"],
    isHazmat: true, unNumber: "UN1593", hazmatClass: "6.1",
  },
  "gc-grade-n-hexane": {
    image: "/images/products/gc-grade-n-hexane.svg",
    shortDescription: "GC grade n-hexane with low residue for pesticide analysis and extraction",
    cas: "110-54-3", formula: "C₆H₁₄", mw: "86.18",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.0% (n-hexane)", testMethod: "GC-FID" },
      { parameter: "Residue on evaporation", value: "≤ 1 mg/L" },
      { parameter: "GC blank", value: "No interfering peaks" },
    ],
    applications: ["Pesticide residue analysis", "Fat and oil extraction", "GC-MS semi-volatile analysis", "QuEChERS extraction"],
    isHazmat: true, unNumber: "UN1208", hazmatClass: "3",
  },
  "lc-ms-grade-ammonium-acetate-10mm": {
    image: "/images/products/lc-ms-grade-ammonium-acetate-10mm.svg",
    shortDescription: "10mM ammonium acetate in LC-MS grade water — volatile buffer for ESI-MS",
    cas: "631-61-8",
    specifications: [
      { parameter: "Concentration", value: "10 mM ± 0.5 mM" },
      { parameter: "Metal ions (Na)", value: "< 1 ppb", testMethod: "ICP-MS" },
      { parameter: "MS blank test", value: "Pass" },
    ],
    applications: ["LC-MS buffered mobile phase", "HILIC chromatography", "Both positive and negative ESI modes"],
  },
  "spectroscopic-grade-chloroform": {
    image: "/images/products/spectroscopic-grade-chloroform.svg",
    shortDescription: "Spectroscopic grade chloroform for UV-Vis spectrophotometry and IR analysis",
    cas: "67-66-3", formula: "CHCl₃", mw: "119.38",
    specifications: [
      { parameter: "Assay (GC)", value: "≥ 99.8%", testMethod: "GC-FID" },
      { parameter: "UV cutoff", value: "245 nm" },
      { parameter: "UV absorbance @260nm", value: "≤ 0.05 AU" },
      { parameter: "Stabilizer", value: "~1% ethanol" },
    ],
    applications: ["UV-Vis spectrophotometry solvent", "IR spectroscopy", "NMR sample preparation", "Polymer characterization"],
    isHazmat: true, unNumber: "UN1888", hazmatClass: "6.1",
  },
};
