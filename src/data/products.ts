// ============================================================
// LANCHROM™ — Core Product Data
// (Will be migrated to Sanity CMS — this serves as seed data)
// ============================================================

import type { Product } from "@/types";
import { PRODUCTS_EXTRA } from "./products-extra";
import { PRODUCTS_BATCH3 } from "./products-batch3";
import { PRODUCTS_ELEMENTAL_IMPURITIES } from "./products-elemental-impurities";
import { PRODUCTS_CATALOG_V2 } from "./products-catalog-v2";
import { PRODUCT_ENRICHMENTS } from "./products-enrichment";
import { PRODUCTS_EXCEL_IMPORT } from "./products-excel-import";

export const PRODUCTS_CORE: Product[] = [
  // ── HPLC Grade Acetonitrile ──────────────────────────────
  {
    _id: "hplc-acetonitrile",
    name: "Acetonitrile",
    slug: "acetonitrile",
    cas: "75-05-8",
    formula: "CH₃CN",
    mw: "41.05",
    category: "hplc-solvents",
    grades: ["hplc", "hplc-gradient", "lcms", "uplc"],
    shortDescription: "The #1 HPLC mobile phase solvent. UV cutoff 190 nm. Available in HPLC Gradient, LC-MS, and UPLC grades with sub-ppb metal ion content.",
    specifications: [
      { parameter: "Purity (GC)", value: "≥ 99.9%", testMethod: "GC" },
      { parameter: "UV Cutoff", value: "190 nm", testMethod: "UV" },
      { parameter: "Water (KF)", value: "≤ 0.010%", testMethod: "Karl Fischer" },
      { parameter: "Residue on Evaporation", value: "≤ 1 ppm", testMethod: "Gravimetric" },
      { parameter: "Gradient Baseline", value: "< 0.01 AU/cm @ 210 nm", testMethod: "UV gradient" },
      { parameter: "Metal Ions (HPLC)", value: "≤ 5 ppb total", testMethod: "ICP-MS" },
      { parameter: "Metal Ions (LC-MS)", value: "< 1 ppb total", testMethod: "ICP-MS" },
      { parameter: "MS Blank Test (LC-MS)", value: "Passes", testMethod: "LC-MS" },
      { parameter: "ICH Q3C Class", value: "Class 2 (PDE 4.1 mg/day)", testMethod: "—" },
    ],
    applications: [
      "Reversed-phase HPLC mobile phase",
      "LC-MS/MS bioanalytical methods",
      "Plasma protein precipitation (PK/PD studies)",
      "Peptide synthesis purification (GLP-1, semaglutide)",
      "Drug release QC testing",
      "TCM herbal fingerprinting",
      "UPLC ultra-fast separations",
    ],
    packaging: [
      { volume: "1L", volumeMl: 1000, container: "hdpe", minQty: 1, available: true },
      { volume: "2.5L", volumeMl: 2500, container: "hdpe", minQty: 1, available: true },
      { volume: "4L", volumeMl: 4000, container: "hdpe", minQty: 1, available: true },
      { volume: "20L", volumeMl: 20000, container: "hdpe", minQty: 1, available: true },
      { volume: "200L", volumeMl: 200000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true,
    coaAvailable: false,
    tdsAvailable: false,
    sdsAvailable: false,
    coaStatus: "request-only",
    isHazmat: true,
    unNumber: "UN 1648",
    hazmatClass: "Class 3 · PG II",
    ichClass: "2",
    pde: "4.1 mg/day",
    physicalProperties: {
      appearance: "Clear, colorless liquid",
      odor: "Faint, ether-like",
      density: "0.786 g/mL @ 20°C",
      refractiveIndex: "1.3441 @ 20°C",
      boilingPoint: "81.6°C",
      meltingPoint: "-45°C",
      flashPoint: "2°C (closed cup)",
      solubility: "Miscible with water and most organic solvents",
      storageConditions: "15–25°C, tightly sealed, away from oxidizers and open flame",
      shelfLife: "24 months from manufacture date, unopened",
    },
    seoTitle: "HPLC Grade Acetonitrile Manufacturer | LC-MS Grade MeCN | LANCHROM™",
    seoDescription: "Factory-direct HPLC and LC-MS grade acetonitrile. UV cutoff 190nm, gradient grade, sub-ppb metals. Free samples. Request quote.",
    keywords: ["HPLC grade acetonitrile", "LC-MS acetonitrile", "MeCN HPLC", "acetonitrile manufacturer", "UPLC acetonitrile"],
  },

  // ── HPLC Grade Methanol ───────────────────────────────────
  {
    _id: "hplc-methanol",
    name: "Methanol",
    slug: "methanol",
    cas: "67-56-1",
    formula: "CH₃OH",
    mw: "32.04",
    category: "hplc-solvents",
    grades: ["hplc", "hplc-gradient", "lcms", "gc"],
    shortDescription: "High-purity methanol for HPLC and LC-MS. UV cutoff 205 nm. Lower viscosity than acetonitrile for faster column equilibration.",
    specifications: [
      { parameter: "Purity (GC)", value: "≥ 99.9%", testMethod: "GC" },
      { parameter: "UV Cutoff", value: "205 nm", testMethod: "UV" },
      { parameter: "Water (KF)", value: "≤ 0.010%", testMethod: "Karl Fischer" },
      { parameter: "Residue on Evaporation", value: "≤ 1 ppm", testMethod: "Gravimetric" },
      { parameter: "Acetone + Aldehydes", value: "≤ 30 ppm", testMethod: "GC" },
      { parameter: "Metal Ions (LC-MS)", value: "< 1 ppb total", testMethod: "ICP-MS" },
      { parameter: "ICH Q3C Class", value: "Class 2 (PDE 30 mg/day)", testMethod: "—" },
    ],
    applications: [
      "Reversed-phase HPLC mobile phase",
      "LC-MS compatible mobile phase modifier",
      "Normal-phase HPLC (with hexane/heptane)",
      "GC headspace analysis diluent",
      "Protein precipitation reagent",
    ],
    packaging: [
      { volume: "1L", volumeMl: 1000, container: "hdpe", minQty: 1, available: true },
      { volume: "2.5L", volumeMl: 2500, container: "hdpe", minQty: 1, available: true },
      { volume: "4L", volumeMl: 4000, container: "hdpe", minQty: 1, available: true },
      { volume: "20L", volumeMl: 20000, container: "hdpe", minQty: 1, available: true },
      { volume: "200L", volumeMl: 200000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true,
    coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "UN 1230", hazmatClass: "Class 3 / 6.1 · PG II",
    ichClass: "2", pde: "30 mg/day",
    seoTitle: "HPLC Grade Methanol Manufacturer | LC-MS Methanol | LANCHROM™",
    seoDescription: "High-purity HPLC and LC-MS grade methanol. UV cutoff 205nm. Factory-direct supply. Free samples available.",
    keywords: ["HPLC methanol", "LC-MS grade methanol", "methanol HPLC grade", "methanol manufacturer"],
  },

  // ── HPLC Grade IPA ────────────────────────────────────────
  {
    _id: "hplc-ipa",
    name: "Isopropanol (IPA)",
    slug: "ipa",
    cas: "67-63-0",
    formula: "C₃H₈O",
    mw: "60.10",
    category: "hplc-solvents",
    grades: ["hplc", "lcms", "pharma-usp", "pharma-ep", "electronic"],
    shortDescription: "Multi-grade IPA covering HPLC, pharma USP/EP, and electronic semiconductor applications. From chiral HPLC to GMP cleanroom disinfection.",
    specifications: [
      { parameter: "Purity (HPLC)", value: "≥ 99.9%", testMethod: "GC" },
      { parameter: "Purity (Pharma)", value: "≥ 99.5%", testMethod: "GC" },
      { parameter: "Purity (Electronic)", value: "≥ 99.9%", testMethod: "GC" },
      { parameter: "UV Cutoff", value: "205 nm", testMethod: "UV" },
      { parameter: "Water (HPLC)", value: "≤ 0.02%", testMethod: "Karl Fischer" },
      { parameter: "Metal Ions (Electronic)", value: "< 1 ppb total (ICP-MS)", testMethod: "ICP-MS" },
      { parameter: "Particles (Electronic)", value: "< 5/mL @ ≥0.2 µm", testMethod: "Particle counter" },
      { parameter: "ICH Q3C Class", value: "Class 3 (PDL 50 mg/day)", testMethod: "—" },
    ],
    applications: [
      "Normal-phase and chiral HPLC mobile phase",
      "GMP cleanroom disinfection (70% solution)",
      "Semiconductor wafer cleaning (electronic grade)",
      "Injectable pharmaceutical co-solvent",
      "Bioreactor and aseptic equipment cleaning",
      "HPLC instrument flushing and storage",
    ],
    packaging: [
      { volume: "1L", volumeMl: 1000, container: "hdpe", minQty: 1, available: true },
      { volume: "2.5L", volumeMl: 2500, container: "hdpe", minQty: 1, available: true },
      { volume: "4L", volumeMl: 4000, container: "hdpe", minQty: 1, available: true },
      { volume: "20L", volumeMl: 20000, container: "hdpe", minQty: 1, available: true },
      { volume: "200L", volumeMl: 200000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true,
    coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: true, unNumber: "UN 1219", hazmatClass: "Class 3 · PG II",
    ichClass: "3",
    seoTitle: "HPLC Grade IPA Manufacturer | Pharmaceutical & Electronic Grade Isopropanol",
    seoDescription: "Factory-direct HPLC, pharma USP/EP, and electronic grade IPA. Chiral HPLC to GMP disinfection. Free samples.",
    keywords: ["HPLC IPA", "isopropanol pharmaceutical grade", "IPA electronic grade", "IPA manufacturer"],
  },

  // ── DMSO ──────────────────────────────────────────────────
  {
    _id: "pharma-dmso",
    name: "DMSO (Dimethyl Sulfoxide)",
    slug: "dmso",
    cas: "67-68-5",
    formula: "C₂H₆OS",
    mw: "78.13",
    category: "pharma-grade",
    grades: ["pharma-usp"],
    shortDescription: "Cell therapy and USP grade DMSO. Standard cryoprotectant for CAR-T, stem cells, and PBMC at 10% concentration. Endotoxin-tested. Non-hazmat shipping.",
    specifications: [
      { parameter: "Purity (GC)", value: "≥ 99.9%", testMethod: "GC" },
      { parameter: "Water (KF)", value: "≤ 0.10% (1000 ppm)", testMethod: "Karl Fischer" },
      { parameter: "Endotoxin (Cell Therapy)", value: "< 0.25 EU/mL", testMethod: "LAL" },
      { parameter: "Color (APHA)", value: "≤ 10", testMethod: "Visual" },
      { parameter: "Refractive Index (20°C)", value: "1.4780–1.4790", testMethod: "Refractometry" },
      { parameter: "Acidity", value: "≤ 0.0003 meq/g", testMethod: "Potentiometry" },
    ],
    applications: [
      "Cell cryopreservation — 10% standard (CAR-T, HSC, iPSC, PBMC)",
      "AAV gene therapy transduction enhancer (5–7%)",
      "HTS compound library dissolution",
      "API synthesis polar aprotic solvent",
      "Transdermal penetration enhancer",
      "RIMSO-50 API (interstitial cystitis)",
    ],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "amber-glass", minQty: 1, available: true },
      { volume: "500mL", volumeMl: 500, container: "amber-glass", minQty: 1, available: true },
      { volume: "1L", volumeMl: 1000, container: "hdpe", minQty: 1, available: true },
      { volume: "5L", volumeMl: 5000, container: "hdpe", minQty: 1, available: true },
      { volume: "25L", volumeMl: 25000, container: "hdpe", minQty: 1, available: true },
      { volume: "200L", volumeMl: 200000, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true,
    coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    ichClass: "not-applicable",
    seoTitle: "DMSO Cell Therapy Grade USP | Cryopreservation DMSO Manufacturer | LANCHROM™",
    seoDescription: "Cell therapy and USP grade DMSO. Endotoxin <0.25 EU/mL. CAR-T, stem cell, PBMC cryopreservation standard. Non-hazmat. Free samples.",
    keywords: ["DMSO cell therapy grade", "cryopreservation DMSO", "DMSO USP manufacturer", "DMSO CAR-T"],
  },

  // ── Organic Acid Mobile Phase Bag ─────────────────────────
  {
    _id: "mobile-phase-organic-acid",
    name: "Organic Acid Analysis Mobile Phase — 0.005N H₂SO₄",
    slug: "organic-acid-mobile-phase",
    cas: "7664-93-9",
    category: "mobile-phase-bags",
    grades: ["hplc"],
    shortDescription: "Ready-to-use 0.005N sulfuric acid mobile phase for HPLC detection of lactic acid, citric acid, acetic acid, malic acid, succinic acid, glucose, and fructose in fermentation samples.",
    specifications: [
      { parameter: "H₂SO₄ Concentration", value: "0.005N (±2%)", testMethod: "Titration" },
      { parameter: "Water Quality", value: "TOC < 50 ppb, Resistivity > 18 MΩ·cm", testMethod: "TOC/Conductivity" },
      { parameter: "pH", value: "2.2 ± 0.1", testMethod: "pH meter" },
      { parameter: "Filtration", value: "0.2 µm membrane filtered", testMethod: "Visual" },
      { parameter: "Packaging Atmosphere", value: "Nitrogen-filled", testMethod: "—" },
      { parameter: "Compatible Columns", value: "Aminex HPX-87H, Bio-Rad, Shodex SH-1011", testMethod: "—" },
    ],
    applications: [
      "Lactic acid detection in fermentation broth",
      "Citric acid quantification (citric acid fermentation QC)",
      "Acetic acid monitoring in vinegar/fermentation",
      "Malic acid and succinic acid analysis",
      "Glucose and fructose simultaneous determination",
      "Pyruvic acid and formic acid detection",
      "Wine organic acid profiling",
      "Dairy fermentation quality control",
      "Bioethanol fermentation monitoring",
    ],
    packaging: [
      { volume: "5L", volumeMl: 5000, container: "flex-bag", minQty: 1, available: true },
      { volume: "7L", volumeMl: 7000, container: "flex-bag", minQty: 1, available: true },
      { volume: "10L", volumeMl: 10000, container: "flex-bag", minQty: 1, available: true },
      { volume: "20L", volumeMl: 20000, container: "flex-bag", minQty: 1, available: true },
    ],
    featured: true,
    coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "Organic Acid HPLC Mobile Phase | 0.005N H₂SO₄ | Fermentation Analysis | LANCHROM™",
    seoDescription: "Ready-to-use 0.005N sulfuric acid mobile phase for organic acid HPLC analysis. Detects lactic, citric, acetic, malic, succinic acids, glucose and fructose. 5L–20L flex bags.",
    keywords: ["organic acid mobile phase", "0.005N sulfuric acid HPLC", "lactic acid HPLC detection", "fermentation analysis mobile phase", "Aminex HPX-87H mobile phase"],
  },
];

function autoSlug(name: string): string {
  return name.toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .replace(/--+/g, "-");
}

const RAW_PRODUCTS: Product[] = [
  ...PRODUCTS_CORE,
  ...PRODUCTS_EXTRA,
  ...PRODUCTS_BATCH3,
  ...PRODUCTS_ELEMENTAL_IMPURITIES,
  ...PRODUCTS_CATALOG_V2,
  ...PRODUCTS_EXCEL_IMPORT,
];
const RAW_PRODUCTS_DEDUPED: Product[] = Array.from(
  RAW_PRODUCTS.reduce((map, product) => {
    const slug = product.slug || autoSlug(product.name);
    const key = `${product.category}/${slug}`;
    if (!map.has(key)) {
      map.set(key, product);
    } else {
      const existing = map.get(key)!;
      map.set(key, {
        ...product,
        ...existing,
        slug,
        specifications: [
          ...(existing.specifications || []),
          ...(product.specifications || []).filter(spec =>
            !(existing.specifications || []).some(item => item.parameter === spec.parameter && item.value === spec.value)
          ),
        ],
        applications: Array.from(new Set([...(existing.applications || []), ...(product.applications || [])])),
        packSizes: Array.from(new Set([...(existing.packSizes || []), ...(product.packSizes || [])])),
        keywords: Array.from(new Set([...(existing.keywords || []), ...(product.keywords || [])])),
      });
    }
    return map;
  }, new Map<string, Product>()).values()
);

export const PRODUCTS: Product[] = RAW_PRODUCTS_DEDUPED.map(p => {
  const slug = p.slug || autoSlug(p.name);
  const enrichment = PRODUCT_ENRICHMENTS[slug] || {};
  const productIdentity = `${p.name} ${slug}`.toLowerCase();
  const isMethanolProduct = /(^|[^a-z])methanol([^a-z]|$)/.test(productIdentity);
  const isEthanolProduct = /(^|[^a-z])ethanol([^a-z]|$)/.test(productIdentity);
  const isIpaProduct = /(^|[^a-z])ipa([^a-z]|$)/.test(productIdentity) || productIdentity.includes("isopropanol") || productIdentity.includes("isopropyl");
  const normalizedImage = isMethanolProduct
    ? undefined
    : isEthanolProduct
      ? "/images/Ethanol-hplc-lcms-gc-purity-label.png"
      : isIpaProduct
        ? "/images/IPA-electronic-hplc-lcms-gc-purity-label.png"
        : enrichment.image || p.image;

  return {
    ...p,
    ...enrichment,
    // Ensure these fields always have values (enrichment overrides, then defaults)
    slug,
    _id: p._id || slug,
    shortDescription: enrichment.shortDescription || p.shortDescription || p.name,
    specifications: enrichment.specifications || p.specifications,
    applications: enrichment.applications || p.applications,
    cas: enrichment.cas || p.cas,
    formula: enrichment.formula || p.formula,
    mw: enrichment.mw || p.mw,
    image: normalizedImage,
    images: isMethanolProduct ? undefined : p.images,
    featured: p.featured ?? false,
    isHazmat: enrichment.isHazmat ?? p.isHazmat ?? false,
    unNumber: enrichment.unNumber || p.unNumber,
    hazmatClass: enrichment.hazmatClass || p.hazmatClass,
    coaAvailable: p.coaAvailable ?? false,
    tdsAvailable: p.tdsAvailable ?? false,
    sdsAvailable: p.sdsAvailable ?? false,
    coaStatus: p.coaStatus ?? "request-only",
    seoDescription: enrichment.seoDescription || p.seoDescription,
  };
});
export function getProductBySlug(slug: string, category?: string) {
  if (category) return PRODUCTS.find(p => p.slug === slug && p.category === category);
  return PRODUCTS.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return PRODUCTS.filter(p => p.category === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return PRODUCTS
    .filter(p => p._id !== product._id && (p.category === product.category || (p.grades ?? []).some(g => (product.grades ?? []).includes(g))))
    .slice(0, limit);
}
