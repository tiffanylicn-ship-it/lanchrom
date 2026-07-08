// ============================================================
// LANCHROM™ — Elemental Impurities Standards
// ICH Q3D(R2) / USP <232><233> / EP 5.20 compliant element standards
// ============================================================

import type { Product } from "@/types";

export const PRODUCTS_ELEMENTAL_IMPURITIES: Product[] = [

  // ── ICH Q3D Class 1 — Mandatory in every risk assessment ──
  {
    _id: "ei-class1-mix",
    name: "ICH Q3D Class 1 Element Standard Mix (As, Cd, Hg, Pb)",
    slug: "ich-q3d-class1-standard",
    category: "elemental-impurities",
    grades: ["hplc"],
    shortDescription: "Certified 4-element standard covering all ICH Q3D Class 1 elemental impurities — arsenic, cadmium, mercury, and lead — concentrated at PDE-relevant levels for oral, parenteral, and inhalation risk assessment.",
    specifications: [
      { parameter: "Elements", value: "As, Cd, Hg, Pb" },
      { parameter: "ICH Q3D Class", value: "Class 1 (toxic regardless of route)" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L, 1000 mg/L" },
      { parameter: "Matrix", value: "2–5% HNO₃ (Hg stabilized with trace HCl)" },
      { parameter: "Traceability", value: "Certified reference material, NIST-traceable" },
      { parameter: "Certificate", value: "Batch-specific CoA with measurement uncertainty" },
    ],
    applications: [
      "ICH Q3D(R2) risk assessment — Class 1 elements",
      "USP <232>/<233> compendial testing",
      "EP 5.20 elemental impurities",
      "ICP-MS calibration for oral, parenteral, inhalation routes",
      "Raw material and excipient elemental screening",
    ],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
      { volume: "500mL", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICH Q3D Class 1 Element Standard | As Cd Hg Pb | LANCHROM™",
    seoDescription: "Certified ICH Q3D Class 1 elemental impurity standard — arsenic, cadmium, mercury, lead. USP <232>/<233> compliant. ICP-MS ready, batch CoA.",
    keywords: ["ICH Q3D Class 1 standard", "elemental impurity standard arsenic cadmium mercury lead", "USP 232 233 standard", "ICP-MS elemental impurity calibration"],
  },

  // ── ICH Q3D Class 2A — high probability of occurrence ─────
  {
    _id: "ei-class2a-mix",
    name: "ICH Q3D Class 2A Element Standard Mix (Co, Ni, V)",
    slug: "ich-q3d-class2a-standard",
    category: "elemental-impurities",
    grades: ["hplc"],
    shortDescription: "Certified 3-element standard for ICH Q3D Class 2A elements — cobalt, nickel, vanadium — the elements with high probability of occurrence in drug substances and products, requiring assessment regardless of route.",
    specifications: [
      { parameter: "Elements", value: "Co, Ni, V" },
      { parameter: "ICH Q3D Class", value: "Class 2A (high occurrence probability)" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L, 1000 mg/L" },
      { parameter: "Matrix", value: "2–5% HNO₃" },
      { parameter: "Traceability", value: "Certified reference material, NIST-traceable" },
    ],
    applications: [
      "ICH Q3D(R2) risk assessment — Class 2A elements",
      "Catalyst residue screening (Ni, Co from hydrogenation)",
      "Stainless steel equipment leaching studies",
      "ICP-MS/ICP-OES calibration",
    ],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
      { volume: "500mL", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICH Q3D Class 2A Standard | Cobalt Nickel Vanadium | LANCHROM™",
    seoDescription: "ICH Q3D Class 2A elemental impurity standard — cobalt, nickel, vanadium. For catalyst residue and equipment leaching risk assessment.",
    keywords: ["ICH Q3D Class 2A standard", "cobalt nickel vanadium ICP standard", "catalyst residue elemental standard"],
  },

  // ── ICH Q3D Class 2B — low probability, route-dependent ───
  {
    _id: "ei-class2b-mix",
    name: "ICH Q3D Class 2B Precious Metal Standard Mix",
    slug: "ich-q3d-class2b-standard",
    category: "elemental-impurities",
    grades: ["hplc"],
    shortDescription: "Certified multi-element standard for ICH Q3D Class 2B elements — Ag, Au, Ir, Os, Pd, Pt, Rh, Ru, Se, Tl — assessed only where intentionally added, typically from precious-metal catalysts.",
    specifications: [
      { parameter: "Elements", value: "Ag, Au, Ir, Os, Pd, Pt, Rh, Ru, Se, Tl" },
      { parameter: "ICH Q3D Class", value: "Class 2B (low occurrence, assess if intentionally added)" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L" },
      { parameter: "Matrix", value: "2–5% HNO₃ / HCl per element stability" },
      { parameter: "Traceability", value: "Certified reference material, NIST-traceable" },
    ],
    applications: [
      "Precious metal catalyst residue testing (Pd, Pt, Rh cross-coupling catalysts)",
      "ICH Q3D(R2) Class 2B risk assessment when catalysts are used in synthesis",
      "API process residue screening",
    ],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICH Q3D Class 2B Precious Metal Standard | LANCHROM™",
    seoDescription: "ICH Q3D Class 2B standard — Pd, Pt, Rh, Ru, Os, Ir, Ag, Au, Se, Tl. For precious metal catalyst residue testing in API manufacturing.",
    keywords: ["ICH Q3D Class 2B standard", "palladium platinum catalyst residue standard", "precious metal ICP standard"],
  },

  // ── ICH Q3D Class 3 — assess only if intentionally added ──
  {
    _id: "ei-class3-mix",
    name: "ICH Q3D Class 3 Element Standard Mix (Ba, Cr, Cu, Li, Mo, Sb, Sn)",
    slug: "ich-q3d-class3-standard",
    category: "elemental-impurities",
    grades: ["hplc"],
    shortDescription: "Certified 7-element standard for ICH Q3D Class 3 elements, assessed for oral route of administration or where intentionally added during manufacturing.",
    specifications: [
      { parameter: "Elements", value: "Ba, Cr, Cu, Li, Mo, Sb, Sn" },
      { parameter: "ICH Q3D Class", value: "Class 3 (relatively low toxicity, oral route assessment)" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L, 1000 mg/L" },
      { parameter: "Matrix", value: "2–5% HNO₃" },
      { parameter: "Traceability", value: "Certified reference material, NIST-traceable" },
    ],
    applications: [
      "ICH Q3D(R2) risk assessment — Class 3 elements",
      "Excipient and container-closure leaching studies",
      "Oral solid dosage form elemental screening",
    ],
    packaging: [
      { volume: "100mL", volumeMl: 100, container: "hdpe", minQty: 1, available: true },
      { volume: "500mL", volumeMl: 500, container: "hdpe", minQty: 1, available: true },
    ],
    featured: false, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICH Q3D Class 3 Element Standard | Ba Cr Cu Li Mo Sb Sn | LANCHROM™",
    seoDescription: "ICH Q3D Class 3 elemental impurity standard. Barium, chromium, copper, lithium, molybdenum, antimony, tin. Oral route risk assessment.",
    keywords: ["ICH Q3D Class 3 standard", "chromium copper tin antimony ICP standard"],
  },

  // ── Full ICH Q3D Panel — all 24 elements in one kit ───────
  {
    _id: "ei-full-panel",
    name: "ICH Q3D Full Panel Standard Kit (24 Elements, Classes 1–3)",
    slug: "ich-q3d-full-panel-kit",
    category: "elemental-impurities",
    grades: ["hplc"],
    shortDescription: "Complete ICH Q3D(R2) elemental impurity panel in one configured kit — all Class 1, 2A, 2B, and 3 elements, individually certified and ready for a single comprehensive risk assessment or compendial validation study.",
    specifications: [
      { parameter: "Total Elements", value: "24 (full ICH Q3D Class 1/2A/2B/3 list)" },
      { parameter: "Kit Format", value: "4 sub-mixes by class, individually certified" },
      { parameter: "Concentration Options", value: "10 mg/L, 100 mg/L per element" },
      { parameter: "Documentation", value: "Consolidated CoA package, PDE cross-reference table included" },
      { parameter: "Traceability", value: "NIST-traceable certified reference material" },
    ],
    applications: [
      "Comprehensive ICH Q3D(R2) risk assessment in a single order",
      "USP <232>/<233> and EP 5.20 method validation",
      "ICP-MS/ICP-OES multi-element method development",
      "Annual compendial requalification testing",
    ],
    packaging: [
      { volume: "Kit (4 × 100mL)", volumeMl: 400, container: "hdpe", minQty: 1, available: true },
    ],
    featured: true, coaAvailable: false, tdsAvailable: false, sdsAvailable: false, coaStatus: "request-only",
    isHazmat: false,
    seoTitle: "ICH Q3D Full Panel Standard Kit 24 Elements | LANCHROM™",
    seoDescription: "Complete ICH Q3D(R2) elemental impurity standard kit — all 24 Class 1/2A/2B/3 elements. USP <232>/<233>, EP 5.20 compliant. Single configured order.",
    keywords: ["ICH Q3D full panel standard", "USP 232 233 element kit", "elemental impurities ICP-MS kit", "ICH Q3D 24 element standard"],
  },
];
