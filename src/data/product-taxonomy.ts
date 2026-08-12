import type { ProductGrade } from "@/types";

export const PRODUCT_GROUP_ORDER = [
  "high-purity-solvents",
  "ready-to-use-solutions",
  "standards-reagents",
  "chromatography-sample-prep",
  "life-science-workflow",
  "pharma-food-materials",
] as const;

export type ProductGroupKey = (typeof PRODUCT_GROUP_ORDER)[number];

export interface ProductGroupDefinition {
  label: string;
  tagline: string;
  slug: string;
  image: string;
  imageAlt: string;
}

export interface ProductCategoryDefinition {
  slug: string;
  name: string;
  shortName: string;
  group: ProductGroupKey;
  section: string;
  tagline: string;
  description: string;
  bannerImage?: string;
}

export const PRODUCT_GROUPS: Record<ProductGroupKey, ProductGroupDefinition> = {
  "high-purity-solvents": {
    label: "High-Purity Solvents & Chemicals",
    tagline: "Browse analytical, gradient, LC-MS, pharmaceutical, electronic, anhydrous, preparative and trace-analysis grades",
    slug: "high-purity-solvents",
    image: "/images/product-lines/lanchrom-hplc-lcms.jpg",
    imageAlt: "High-purity analytical and process solvents",
  },
  "ready-to-use-solutions": {
    label: "Ready-to-Use Solutions",
    tagline: "Prepared mobile phases, volatile buffers, solvent blends and application-specific analysis kits",
    slug: "ready-to-use-solutions",
    image: "/images/product-lines/mobile-phase-bags.jpg",
    imageAlt: "Ready-to-use mobile phase solutions",
  },
  "standards-reagents": {
    label: "Reference Standards & Analytical Reagents",
    tagline: "Calibration standards, titration solutions, ICH Q3D materials and Karl Fischer reagents",
    slug: "reference-standards-analytical-reagents",
    image: "/images/product-lines/standard-solutions.jpg",
    imageAlt: "Reference standards and analytical reagents",
  },
  "chromatography-sample-prep": {
    label: "Chromatography & Sample Preparation",
    tagline: "TLC and HPTLC products, SPE cartridges, QuEChERS and selective cleanup products",
    slug: "chromatography-sample-preparation",
    image: "/images/product-lines/spectroscopic-nmr-solvents.jpg",
    imageAlt: "Chromatography and sample-preparation products",
  },
  "life-science-workflow": {
    label: "Life Science & Workflow Kits",
    tagline: "Microbiology, environmental monitoring, cell processing and configured laboratory workflows",
    slug: "life-science-workflow-kits",
    image: "/images/product-lines/life-science-reagents-v2.jpg",
    imageAlt: "Life science reagents and workflow kits",
  },
  "pharma-food-materials": {
    label: "Pharmaceutical, Food & Laboratory Materials",
    tagline: "True pharmaceutical excipients, food-grade chemicals and functional laboratory materials",
    slug: "pharmaceutical-food-laboratory-materials",
    image: "/images/product-lines/pharmaceutical-excipients.jpg",
    imageAlt: "Pharmaceutical, food and laboratory materials",
  },
};

const category = (
  slug: string,
  name: string,
  shortName: string,
  group: ProductGroupKey,
  section: string,
  tagline: string,
  description: string,
  bannerImage?: string,
): ProductCategoryDefinition => ({ slug, name, shortName, group, section, tagline, description, bannerImage });

export const PRODUCT_CATEGORY_DEFINITIONS: ProductCategoryDefinition[] = [
  category("hplc-grade-solvents", "HPLC Grade Solvents", "HPLC", "high-purity-solvents", "Analytical & Chromatography Grades", "Low UV absorbance for routine analytical HPLC", "HPLC-grade solvents controlled for UV transparency, water, non-volatile residue and chromatographic interference.", "/images/product-lines/hplc-solvents.jpg"),
  category("gradient-grade-solvents", "Gradient Grade Solvents", "Gradient", "high-purity-solvents", "Analytical & Chromatography Grades", "Low baseline drift for demanding gradient methods", "Gradient-tested solvents with tighter control of UV background and impurity peaks as organic-phase strength changes.", "/images/product-lines/hplc-solvents.jpg"),
  category("lcms-grade-solvents", "LC-MS Grade Solvents", "LC-MS", "high-purity-solvents", "Analytical & Chromatography Grades", "Low MS background for bioanalysis and proteomics", "LC-MS solvents controlled for non-volatile residue, metal ions, ion suppression and mass-spectrometry blank performance.", "/images/product-lines/lcms-solvents.jpg"),
  category("lcms-mobile-phase-additives", "LC-MS Mobile Phase Additives", "LC-MS Additives", "high-purity-solvents", "Analytical & Chromatography Grades", "Volatile acids and buffers prepared for LC-MS", "LC-MS-compatible formic acid, ammonium acetate and ammonium formate solutions for reproducible ionization.", "/images/product-lines/lcms-solvents.jpg"),
  category("uplc-grade-solvents", "UPLC Grade Solvents", "UPLC", "high-purity-solvents", "Analytical & Chromatography Grades", "Ultra-low particulate solvent quality", "UPLC-grade solvents filtered and controlled to protect high-pressure columns, frits and sensitive detectors.", "/images/product-lines/lanchrom-hplc-lcms.jpg"),
  category("gc-grade-solvents", "GC Grade Solvents", "GC", "high-purity-solvents", "Analytical & Chromatography Grades", "Low volatile background for GC and GC-MS", "Gas-chromatography solvents verified for low volatile interference and consistent residue-analysis performance.", "/images/product-lines/gc-solvents.jpg"),
  category("spectroscopic-grade-solvents", "Spectroscopic Grade Solvents", "Spectroscopic", "high-purity-solvents", "Spectroscopy & NMR", "Low optical absorbance for spectroscopy", "High-purity solvents selected for UV-Vis and optical methods where background absorbance directly affects measurement quality.", "/images/product-lines/spectroscopic-nmr-solvents.jpg"),
  category("deuterated-nmr-solvents", "Deuterated NMR Solvents", "NMR", "high-purity-solvents", "Spectroscopy & NMR", "High isotopic purity for NMR spectroscopy", "Deuterated solvents and starter sets for structure elucidation, method development and pharmaceutical QC.", "/images/product-lines/spectroscopic-nmr-solvents.jpg"),
  category("pharmaceutical-grade-solvents", "Pharmaceutical Grade Solvents", "Pharma", "high-purity-solvents", "Manufacturing & Regulated Grades", "USP, EP and controlled manufacturing applications", "Pharmaceutical and process solvents organized separately from excipients, with grade and documentation requirements stated at product level.", "/images/product-lines/pharmaceutical-grade.jpg"),
  category("electronic-semiconductor-grade-chemicals", "Electronic & Semiconductor Grade Chemicals", "Electronic", "high-purity-solvents", "Manufacturing & Regulated Grades", "Trace-controlled chemistry for electronics", "Electronic-grade solvents and chemicals for wafer cleaning, advanced packaging, batteries and materials processing.", "/images/product-lines/lanchrom-semiconductor.jpg"),
  category("anhydrous-solvents", "Anhydrous Solvents", "Anhydrous", "high-purity-solvents", "Manufacturing & Regulated Grades", "Low-water solvents for moisture-sensitive synthesis", "Anhydrous solvents with controlled water content and protective packaging for water-sensitive reactions and processing.", "/images/product-lines/lanchrom-packaging.jpg"),
  category("preparative-grade-solvents", "Preparative & Bulk Solvents", "Preparative", "high-purity-solvents", "Manufacturing & Regulated Grades", "Cost-effective purity for preparative chromatography", "Preparative-grade and bulk solvents for large-scale purification, production chromatography and high-volume solvent programs.", "/images/product-lines/lanchrom-distillation.jpg"),
  category("trace-analysis-chemicals", "Trace Analysis Chemicals", "Trace Analysis", "high-purity-solvents", "Trace Analysis Chemicals", "Acids, oxidants, solvents and water for trace analysis", "Trace-analysis chemicals for ICP-MS digestion, elemental analysis and contamination-controlled semiconductor workflows.", "/images/product-lines/trace-analysis-grade.jpg"),
  category("general-laboratory-reagent-chemicals", "AR & GR Laboratory Reagents", "AR / GR", "high-purity-solvents", "Laboratory Reagent Grades", "Analytical-reagent and guaranteed-reagent chemicals", "AR and GR solvents and chemicals for general analytical testing, synthesis, extraction and routine laboratory workflows.", "/images/product-lines/lanchrom-packaging.jpg"),

  category("acidified-mobile-phases", "Acidified Mobile Phases", "Acidified", "ready-to-use-solutions", "Prepared LC / LC-MS Mobile Phases", "Formic, acetic and sulfuric acid solutions", "Pre-filtered acidified aqueous and organic mobile phases for routine LC, LC-MS and organic-acid methods.", "/images/product-lines/mobile-phase-bags.jpg"),
  category("buffer-mobile-phases", "Buffer Mobile Phases", "Buffers", "ready-to-use-solutions", "Prepared LC / LC-MS Mobile Phases", "Ammonium and phosphate buffer systems", "Prepared ammonium acetate, ammonium formate and phosphate buffers for reproducible chromatography.", "/images/product-lines/mobile-phase-bags.jpg"),
  category("mobile-phase-solvent-blends", "Organic / Aqueous Solvent Blends", "Solvent Blends", "ready-to-use-solutions", "Prepared LC / LC-MS Mobile Phases", "Fixed-ratio solvent blends", "Ready-to-use acetonitrile/water and methanol/water blends for controlled laboratory and pharmacopeial workflows.", "/images/product-lines/mobile-phase-bags.jpg"),
  category("application-specific-mobile-phase-kits", "Application-Specific Mobile Phase Kits", "Method Kits", "ready-to-use-solutions", "Application-Specific Solutions", "Configured solutions for fermentation, food and pharmaceutical analysis", "Mobile-phase kits organized by customer workflow, including organic acids, sugars, fermentation and food-and-beverage QC.", "/images/product-lines/mobile-phase-bags.jpg"),

  category("elemental-ionic-standards", "Elemental & Ionic Standards", "Elemental Standards", "standards-reagents", "Reference Standards & Calibration", "ICP, AAS, anion and cation standards", "Single- and multi-element standards plus ionic calibration materials for ICP, AAS and ion chromatography.", "/images/product-lines/standard-solutions.jpg"),
  category("physicochemical-calibration-standards", "Physicochemical Calibration Standards", "Calibration", "standards-reagents", "Reference Standards & Calibration", "pH, conductivity and instrument-performance standards", "Standards for pH, conductivity, UV-Vis, TOC, turbidity, color and refractive-index verification.", "/images/product-lines/standard-solutions.jpg"),
  category("volumetric-titration-standards", "Volumetric & Titration Standards", "Titration", "standards-reagents", "Reference Standards & Calibration", "Acid-base, complexometric, redox and precipitation standards", "Volumetric solutions and primary standards for routine titration and laboratory quality control.", "/images/product-lines/standard-solutions.jpg"),
  category("ich-q3d-elemental-impurities", "ICH Q3D Elemental Impurity Standards", "ICH Q3D", "standards-reagents", "Pharmaceutical Compliance Standards", "USP <232>/<233> and ICH Q3D workflows", "Class 1, 2A, 2B, 3 and full-panel elemental impurity standards for regulated pharmaceutical testing.", "/images/product-lines/trace-analysis-grade.jpg"),
  category("karl-fischer-reagents", "Karl Fischer Reagents", "Karl Fischer", "standards-reagents", "Water Determination Reagents", "Volumetric and coulometric water analysis", "Karl Fischer titrants, solvents, anolytes, catholytes and water standards grouped as analytical reagents rather than consumables."),

  category("tlc-hptlc-products", "TLC / HPTLC Products", "TLC / HPTLC", "chromatography-sample-prep", "Planar Chromatography", "Plates, chambers and visualization products", "Silica, HPTLC, reversed-phase and preparative plates plus chambers and visualization products."),
  category("spe-sample-cleanup", "SPE & Sample Cleanup", "SPE", "chromatography-sample-prep", "Sample Preparation & Cleanup", "SPE, QuEChERS and immunoaffinity cleanup", "Silica, polymeric, mixed-mode and selective sample-cleanup products for analytical workflows."),

  category("microbiology-environmental-monitoring", "Microbiology & Environmental Monitoring", "Microbiology", "life-science-workflow", "Microbiology & Monitoring", "Culture media, pathogen detection and cleanroom monitoring", "Culture media, ready plates, pathogen identification, ATP testing and cleanroom environmental-monitoring products.", "/images/product-lines/life-science-reagents.jpg"),
  category("cell-culture-cryopreservation", "Cell Culture & Cryopreservation", "Cell Processing", "life-science-workflow", "Cell Processing & Cryopreservation", "DMSO-based freezing and cell-processing workflows", "Cryopreservation, cell-therapy and cell-washing products for CAR-T, PBMC and stem-cell workflows.", "/images/product-lines/life-science-reagents-v2.jpg"),
  category("laboratory-workflow-kits", "Laboratory Workflow Kits", "Workflow Kits", "life-science-workflow", "Configured Workflow Kits", "Chromatography, fermentation, microbiology and process kits", "Configured multi-component sets grouped by the workflow a customer is trying to run, not by a generic kit label.", "/images/product-lines/reagent-kits.jpg"),

  category("pharmaceutical-excipients", "Pharmaceutical Excipients", "Excipients", "pharma-food-materials", "Pharmaceutical Ingredients", "True excipients and formulation aids", "Glycerol, propylene glycol, PEG, mannitol, polysorbate and related formulation materials separated from process solvents.", "/images/product-lines/pharmaceutical-excipients.jpg"),
  category("food-grade-chemicals", "Food Grade Chemicals", "Food Grade", "pharma-food-materials", "Food Ingredients", "FCC-oriented food and beverage chemicals", "Food-grade acids and functional ingredients with relevant documentation and certification options.", "/images/product-lines/pharmaceutical-excipients.jpg"),
  category("laboratory-process-materials", "Laboratory & Process Materials", "Lab Materials", "pharma-food-materials", "Laboratory & Process Materials", "Drying, separation, filtration and analytical materials", "Molecular sieves, ion-exchange materials, filter aids, analytical tablets and specialty laboratory materials.", "/images/product-lines/lanchrom-packaging.jpg"),
];

export const LEGACY_CATEGORY_ALIASES: Record<string, string> = {
  "hplc-solvents": "hplc-grade-solvents",
  "lcms-solvents": "lcms-grade-solvents",
  "uplc-solvents": "uplc-grade-solvents",
  "gc-solvents": "gc-grade-solvents",
  "spectroscopic-solvents": "spectroscopic-grade-solvents",
  "anhydrous-solvents": "anhydrous-solvents",
  "prep-solvents": "preparative-grade-solvents",
  "trace-analysis-grade": "trace-analysis-chemicals",
  "pharma-grade": "pharmaceutical-grade-solvents",
  "electronic-grade": "electronic-semiconductor-grade-chemicals",
  excipients: "pharmaceutical-excipients",
  "food-grade": "food-grade-chemicals",
  "lab-consumable-chemicals": "laboratory-process-materials",
  "mobile-phase-bags": "application-specific-mobile-phase-kits",
  "standard-solutions": "elemental-ionic-standards",
  "elemental-impurities": "ich-q3d-elemental-impurities",
  "karl-fischer": "karl-fischer-reagents",
  "tlc-products": "tlc-hptlc-products",
  "spe-products": "spe-sample-cleanup",
  "nmr-deuterated": "deuterated-nmr-solvents",
  "deuterated-nmr": "deuterated-nmr-solvents",
  "life-science-reagents": "microbiology-environmental-monitoring",
  "cell-culture-reagents": "cell-culture-cryopreservation",
  "reagent-kits": "laboratory-workflow-kits",
};

interface TaxonomyInput {
  name: string;
  category: string;
  grades?: ProductGrade[];
  availableGrades?: string[];
}

export interface ProductTaxonomyPlacement {
  primaryCategory: string;
  catalogCategories: string[];
}

function includesAny(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

function isSpeProduct(name: string) {
  return includesAny(name, [" spe", "spe ", "quechers", "immunoaffinity", "hlb", "mixed anion", "mixed cation", "sax ", "scx ", "c18 ", "c8 ", "nh₂"]);
}

function isKarlFischerProduct(name: string) {
  return includesAny(name, ["karl fischer", "kf ", "kf-", "coulometric", "volumetric", "water standard"]);
}

function isNmrProduct(name: string) {
  return includesAny(name, ["deuterated", "chloroform-d", "dmso-d6", "d₂o", "methanol-d4", "acetone-d6", "benzene-d6", "acetonitrile-d3", "dichloromethane-d2", "nmr standard"]);
}

function isTrueExcipient(name: string) {
  return name.startsWith("glycerol") || name === "propylene glycol" || name.includes("peg 400") || name.includes("mannitol") || name.includes("polysorbate");
}

function isLaboratoryMaterial(name: string) {
  return includesAny(name, ["molecular sieve", "ion exchange", "diatomaceous", "kjeldahl", "nitrocellulose"]);
}

export function classifyProductTaxonomy(product: TaxonomyInput): ProductTaxonomyPlacement {
  const name = product.name.toLowerCase();
  const legacy = product.category;
  const isCanonicalCategory = PRODUCT_CATEGORY_DEFINITIONS.some((category) => category.slug === legacy);
  let primaryCategory = LEGACY_CATEGORY_ALIASES[legacy] || (isCanonicalCategory ? legacy : "laboratory-process-materials");

  if (legacy === "lcms-solvents" && includesAny(name, ["formic acid", "ammonium acetate", "ammonium formate"])) {
    primaryCategory = "lcms-mobile-phase-additives";
  } else if (legacy === "mobile-phase-bags") {
    if (includesAny(name, ["sugar", "wine", "baijiu", "huangjiu", "dairy", "vinegar", "soy sauce", "fermentation", "antibiotic", "pha", "lactic acid", "organic acid", "bio-material"])) {
      primaryCategory = "application-specific-mobile-phase-kits";
    } else if (includesAny(name, ["ammonium", "phosphate", "kh₂po₄", "dipotassium", "buffer"])) {
      primaryCategory = "buffer-mobile-phases";
    } else if (includesAny(name, ["acetonitrile/water", "methanol/water"])) {
      primaryCategory = "mobile-phase-solvent-blends";
    } else {
      primaryCategory = "acidified-mobile-phases";
    }
  } else if (legacy === "standard-solutions") {
    if (includesAny(name, ["icp", "aas", "anion", "cation"])) primaryCategory = "elemental-ionic-standards";
    else if (includesAny(name, ["ph ", "ph 4", "ph 6", "ph 7", "ph 9", "ph 10", "conductivity", "uv-vis", "toc", "turbidity", "color standard", "refractive index"])) primaryCategory = "physicochemical-calibration-standards";
    else primaryCategory = "volumetric-titration-standards";
  } else if (legacy === "tlc-products") {
    if (isSpeProduct(name)) primaryCategory = "spe-sample-cleanup";
    else if (isKarlFischerProduct(name)) primaryCategory = "karl-fischer-reagents";
    else if (isNmrProduct(name)) primaryCategory = "deuterated-nmr-solvents";
    else primaryCategory = "tlc-hptlc-products";
  } else if (legacy === "excipients") {
    if (isTrueExcipient(name)) primaryCategory = "pharmaceutical-excipients";
    else if (isLaboratoryMaterial(name)) primaryCategory = "laboratory-process-materials";
    else primaryCategory = "pharmaceutical-grade-solvents";
  }

  const catalogCategories = new Set<string>([primaryCategory]);
  const grades = new Set(product.grades || []);
  const availableGrades = new Set((product.availableGrades || []).map((grade) => grade.toLowerCase()));
  if (legacy === "hplc-solvents") catalogCategories.add("hplc-grade-solvents");
  if (grades.has("hplc-gradient")) catalogCategories.add("gradient-grade-solvents");
  if (grades.has("lcms") && primaryCategory !== "lcms-mobile-phase-additives") catalogCategories.add("lcms-grade-solvents");
  if (grades.has("uplc")) catalogCategories.add("uplc-grade-solvents");
  if (grades.has("gc")) catalogCategories.add("gc-grade-solvents");
  if (grades.has("prep")) catalogCategories.add("preparative-grade-solvents");
  if (grades.has("pharma-usp") || grades.has("pharma-ep")) catalogCategories.add("pharmaceutical-grade-solvents");
  if (grades.has("electronic")) catalogCategories.add("electronic-semiconductor-grade-chemicals");
  if (["g2", "g3", "g4", "g5"].some((grade) => availableGrades.has(grade))) catalogCategories.add("electronic-semiconductor-grade-chemicals");
  if (availableGrades.has("ar") || availableGrades.has("gr")) catalogCategories.add("general-laboratory-reagent-chemicals");

  return { primaryCategory, catalogCategories: Array.from(catalogCategories) };
}

export function normalizeCatalogProductName(name: string) {
  return name.toLowerCase()
    .replace(/isopropyl alcohol|isopropanol/g, "ipa")
    .replace(/dichloromethane/g, "dcm")
    .replace(/tetrahydrofuran/g, "thf")
    .replace(/dimethyl sulfoxide/g, "dmso")
    .replace(/propylene glycol methyl ether acetate/g, "pgmea")
    .replace(/propylene glycol methyl ether/g, "pgme")
    .replace(/dimethyl carbonate/g, "dmc")
    .replace(/n-methyl-?2?-?pyrrolidone|n-methyl pyrrolidone/g, "nmp")
    .replace(/hplc grade|for hplc/g, "hplc")
    .replace(/lc-ms grade|for lc-ms/g, "lcms")
    .replace(/gc grade|for gc/g, "gc")
    .replace(/spectroscopic grade|for spectroscopy/g, "spectroscopy")
    .replace(/trace analysis grade|for trace analysis/g, "trace")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export function slugifyTaxonomyLabel(label: string) {
  return label.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
