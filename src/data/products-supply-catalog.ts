import type { Product, ProductGrade } from "@/types";

export interface SupplyCatalogEntry {
  name: string;
  slug: string;
  cas: string;
  formula?: string;
  availableGrades: string[];
  category: string;
  grades: ProductGrade[];
  applications: string[];
}

const FULL_SOLVENT_GRADES = ["Pharma", "G2", "G3", "G4", "G5", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"];
const ELECTRONIC_PHARMA_AR = ["Pharma", "G2", "G3", "G4", "G5", "AR"];
const HPLC_SOLVENT_FLAGS: ProductGrade[] = ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep", "electronic"];
const ELECTRONIC_FLAGS: ProductGrade[] = ["pharma-usp", "pharma-ep", "electronic"];

export const SUPPLY_CATALOG: SupplyCatalogEntry[] = [
  { name: "Isopropanol (IPA)", slug: "ipa", cas: "67-63-0", formula: "C₃H₈O", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["HPLC and LC-MS mobile phase", "Semiconductor and precision cleaning", "Pharmaceutical manufacturing", "Moisture-sensitive synthesis"] },
  { name: "Acetonitrile", slug: "acetonitrile", cas: "75-05-8", formula: "C₂H₃N", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["HPLC, preparative HPLC and LC-MS", "Pharmaceutical analysis", "Electronic materials processing", "Organic synthesis"] },
  { name: "Ethanol", slug: "ethanol", cas: "64-17-5", formula: "C₂H₆O", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Chromatography and extraction", "Pharmaceutical processing", "Electronic cleaning", "Moisture-sensitive synthesis"] },
  { name: "Methanol", slug: "methanol", cas: "67-56-1", formula: "CH₄O", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["HPLC, preparative HPLC and LC-MS", "Bioanalysis and proteomics", "Pharmaceutical research", "Electronic processing"] },
  { name: "PGME (Propylene Glycol Methyl Ether)", slug: "pgme", cas: "107-98-2", formula: "C₄H₁₀O₂", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Photoresist and electronic materials", "Pharmaceutical processing", "Coatings and precision cleaning"] },
  { name: "PGMEA (Propylene Glycol Methyl Ether Acetate)", slug: "pgmea", cas: "108-65-6", formula: "C₆H₁₂O₃", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Photoresist formulation", "Semiconductor materials", "Pharmaceutical and coatings processing"] },
  { name: "Dimethyl Carbonate (DMC)", slug: "dimethyl-carbonate", cas: "616-38-6", formula: "C₃H₆O₃", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Lithium-battery materials", "Pharmaceutical processing", "Organic synthesis"] },
  { name: "Dichloromethane (DCM)", slug: "dichloromethane", cas: "75-09-2", formula: "CH₂Cl₂", availableGrades: ["Pharma", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"], category: "hplc-grade-solvents", grades: ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep"], applications: ["Chromatography and extraction", "Pharmaceutical synthesis", "Preparative purification"] },
  { name: "Ethyl Acetate", slug: "ethyl-acetate", cas: "141-78-6", formula: "C₄H₈O₂", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Chromatography and extraction", "Pharmaceutical processing", "Electronic and materials processing"] },
  { name: "n-Propyl Acetate", slug: "n-propyl-acetate", cas: "109-60-4", formula: "C₅H₁₀O₂", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Pharmaceutical processing", "Electronics and coatings", "Extraction"] },
  { name: "n-Butyl Acetate", slug: "n-butyl-acetate", cas: "123-86-4", formula: "C₆H₁₂O₂", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Chromatography", "Electronic materials", "Pharmaceutical and coatings processing"] },
  { name: "Chloroform", slug: "chloroform", cas: "67-66-3", formula: "CHCl₃", availableGrades: ["Pharma", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"], category: "hplc-grade-solvents", grades: ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep"], applications: ["HPLC and LC-MS workflows", "Pharmaceutical extraction", "Preparative purification"] },
  { name: "Toluene", slug: "toluene", cas: "108-88-3", formula: "C₇H₈", availableGrades: ["Pharma", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"], category: "hplc-grade-solvents", grades: ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep"], applications: ["Chromatography", "Pharmaceutical synthesis", "Extraction and materials processing"] },
  { name: "Acetone", slug: "acetone", cas: "67-64-1", formula: "C₃H₆O", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Chromatography and laboratory cleaning", "Pharmaceutical processing", "Electronic cleaning", "Extraction"] },
  { name: "Petroleum Ether", slug: "petroleum-ether", cas: "8032-32-4", availableGrades: ["Pharma", "AR"], category: "pharmaceutical-grade-solvents", grades: ["pharma-usp"], applications: ["Extraction", "Pharmaceutical processing", "General laboratory use"] },
  { name: "Tetrahydrofuran (THF)", slug: "tetrahydrofuran", cas: "109-99-9", formula: "C₄H₈O", availableGrades: ["Pharma", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"], category: "hplc-grade-solvents", grades: ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep"], applications: ["Chromatography", "Pharmaceutical synthesis", "Polymer and moisture-sensitive chemistry"] },
  { name: "n-Heptane", slug: "n-heptane", cas: "142-82-5", formula: "C₇H₁₆", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Normal-phase chromatography", "Extraction", "Electronic and pharmaceutical processing"] },
  { name: "n-Hexane", slug: "n-hexane", cas: "110-54-3", formula: "C₆H₁₄", availableGrades: FULL_SOLVENT_GRADES, category: "hplc-grade-solvents", grades: HPLC_SOLVENT_FLAGS, applications: ["Normal-phase chromatography", "Extraction", "Electronic and pharmaceutical processing"] },
  { name: "Cyclohexane", slug: "cyclohexane", cas: "110-82-7", formula: "C₆H₁₂", availableGrades: ["Pharma", "HPLC Prep", "HPLC Gradient", "HPLC Isocratic", "LC-MS", "Anhydrous", "AR", "GR"], category: "hplc-grade-solvents", grades: ["hplc", "hplc-gradient", "lcms", "anhydrous", "prep", "pharma-usp", "pharma-ep"], applications: ["Chromatography", "Extraction", "Pharmaceutical synthesis"] },
  { name: "NMP (N-Methyl-2-pyrrolidone)", slug: "nmp", cas: "872-50-4", formula: "C₅H₉NO", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Battery and electronic materials", "Pharmaceutical processing", "Polymer and coatings processing"] },
  { name: "Diethanolamine (DEA)", slug: "diethanolamine", cas: "111-42-2", formula: "C₄H₁₁NO₂", availableGrades: ["Pharma", "G2", "G3", "G4", "G5"], category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Pharmaceutical processing", "Electronic materials", "Organic synthesis"] },
  { name: "DMSO (Dimethyl Sulfoxide)", slug: "dmso", cas: "67-68-5", formula: "C₂H₆OS", availableGrades: ELECTRONIC_PHARMA_AR, category: "pharmaceutical-grade-solvents", grades: ELECTRONIC_FLAGS, applications: ["Pharmaceutical and cell-processing workflows", "Electronic materials", "Organic synthesis"] },
  { name: "0.005N Sulfuric Acid Mobile Phase", slug: "organic-acid-mobile-phase", cas: "7664-93-9", formula: "H₂SO₄ in H₂O", availableGrades: ["HPLC Prep", "HPLC Gradient", "HPLC Isocratic"], category: "acidified-mobile-phases", grades: ["hplc", "hplc-gradient", "prep"], applications: ["Organic-acid HPLC", "Fermentation analysis", "Food and beverage quality control"] },
  { name: "0.01N Sulfuric Acid Mobile Phase", slug: "sulfuric-acid-01n-mobile-phase", cas: "7664-93-9", formula: "H₂SO₄ in H₂O", availableGrades: ["HPLC Prep", "HPLC Gradient", "HPLC Isocratic"], category: "acidified-mobile-phases", grades: ["hplc", "hplc-gradient", "prep"], applications: ["Organic-acid HPLC", "Ion-exclusion chromatography", "Fermentation quality control"] },
];

export const PRODUCTS_SUPPLY_CATALOG: Product[] = SUPPLY_CATALOG.map((entry) => ({
  _id: `supply-${entry.slug}`,
  name: entry.name,
  slug: entry.slug,
  cas: entry.cas,
  formula: entry.formula,
  category: entry.category,
  grades: entry.grades,
  availableGrades: entry.availableGrades,
  shortDescription: `${entry.name} is available in ${entry.availableGrades.join(", ")} grades, consolidated on one product page for straightforward technical review and quotation.`,
  specifications: [
    { parameter: "Available grades", value: entry.availableGrades.join(" / "), testMethod: "Grade-specific specification" },
    { parameter: "Batch documentation", value: "COA available", testMethod: "Quality release" },
    { parameter: "Technical documents", value: "TDS and SDS available on request", testMethod: "Document control" },
  ],
  applications: entry.applications,
  packSizes: ["1L", "4L", "20L", "200L", "IBC / bulk on request"],
  featured: false,
  coaAvailable: false,
  tdsAvailable: false,
  sdsAvailable: false,
  coaStatus: "request-only",
  seoTitle: `${entry.name} Grades and Supply | LANCHROM™`,
  seoDescription: `${entry.name} available in ${entry.availableGrades.join(", ")} grades. Request specifications, COA, SDS, samples and quotation.`,
  keywords: [`${entry.name} supplier`],
}));

export function getSupplyCatalogEntry(product: Pick<Product, "name" | "slug" | "cas">): SupplyCatalogEntry | undefined {
  const identity = `${product.name} ${product.slug || ""}`.toLowerCase();
  if (identity.includes("0.005n") || identity.includes("0.005 n") || identity.includes("organic-acid-mobile-phase")) {
    return SUPPLY_CATALOG.find((entry) => entry.slug === "organic-acid-mobile-phase");
  }
  if (identity.includes("0.01n") || identity.includes("0.01 n") || identity.includes("sulfuric-acid-01n")) {
    return SUPPLY_CATALOG.find((entry) => entry.slug === "sulfuric-acid-01n-mobile-phase");
  }
  if (product.cas === "7664-93-9") return undefined;
  if (identity.includes("n-propyl acetate/n-butyl acetate") || identity.includes("n-hexane/n-heptane")) return undefined;
  return SUPPLY_CATALOG.find((entry) => entry.cas === product.cas);
}
