// ============================================================
// LANCHROM™ Products — Catalog Expansion Batch 5
// Corresponds to the 8-line master catalog plan.
// ============================================================
import type { Product } from "@/types";

export const PRODUCTS_CATALOG_V2: Product[] = [
  // ── Line 1: Pharmaceutical Grade Solvents (new pack sizes & new chemicals) ──
  { name: "Toluene", category: "pharma-grade", cas: "108-88-3", packSizes: ["4L", "25L", "200L"], featured: false },
  { name: "2-Butanone (MEK)", category: "pharma-grade", cas: "78-93-3", packSizes: ["4L", "25L"], featured: false },
  { name: "Cyclohexanone", category: "pharma-grade", cas: "108-94-1", packSizes: ["4L", "25L"], featured: false },
  { name: "n-Butanol", category: "pharma-grade", cas: "71-36-3", packSizes: ["4L", "25L"], featured: false },
  { name: "Ethylene Glycol Monoethyl Ether", category: "pharma-grade", cas: "110-80-5", packSizes: ["4L", "25L"], featured: false },
  { name: "PGME (Propylene Glycol Methyl Ether)", category: "pharma-grade", cas: "107-98-2", packSizes: ["1L", "4L", "25L", "200L"], featured: false },
  { name: "PGMEA (Propylene Glycol Methyl Ether Acetate)", category: "pharma-grade", cas: "108-65-6", packSizes: ["1L", "4L", "25L", "200L"], featured: false },
  { name: "DMC (Dimethyl Carbonate)", category: "pharma-grade", cas: "616-38-6", packSizes: ["2.5L", "4L", "25L", "200L"], featured: false },
  { name: "NMP (N-Methyl-2-pyrrolidone)", category: "pharma-grade", cas: "872-50-4", packSizes: ["1L", "4L", "25L", "200L"], featured: false },

  // ── Line 2.1: HPLC Grade Solvents (expanded pack sizes) ──
  { name: "HPLC Grade Ethanol", category: "hplc-solvents", cas: "64-17-5", packSizes: ["1L", "2.5L", "4L", "20L", "200L"], featured: false },
  { name: "HPLC Grade n-Hexane", category: "hplc-solvents", cas: "110-54-3", packSizes: ["1L", "4L", "20L", "200L"], featured: false },
  { name: "HPLC Grade n-Heptane", category: "hplc-solvents", cas: "142-82-5", packSizes: ["1L", "4L", "20L", "200L"], featured: false },
  { name: "HPLC Grade Ethyl Acetate", category: "hplc-solvents", cas: "141-78-6", packSizes: ["1L", "2.5L", "4L", "20L", "200L"], featured: false },
  { name: "HPLC Grade Dichloromethane (DCM)", category: "hplc-solvents", cas: "75-09-2", packSizes: ["2.5L", "4L", "20L"], featured: false },
  { name: "HPLC Grade THF (Tetrahydrofuran)", category: "hplc-solvents", cas: "109-99-9", packSizes: ["1L", "4L", "20L"], featured: false },
  { name: "HPLC Grade Acetone", category: "hplc-solvents", cas: "67-64-1", packSizes: ["2.5L", "4L", "20L"], featured: false },

  // ── Line 2.2: LC-MS Grade (new products) ──
  { name: "LC-MS Grade Water (Ultrapure)", category: "lcms-solvents", cas: "7732-18-5", packSizes: ["1L", "4L"], featured: false },
  { name: "LC-MS Grade Formic Acid 0.1% in Water", category: "lcms-solvents", cas: "64-18-6", packSizes: ["500mL", "1L"], featured: false },
  { name: "LC-MS Grade Ammonium Acetate 10mM", category: "lcms-solvents", cas: "631-61-8", packSizes: ["500mL", "1L"], featured: false },
  { name: "LC-MS Grade Ammonium Formate 10mM", category: "lcms-solvents", cas: "540-69-2", packSizes: ["500mL", "1L"], featured: false },

  // ── Line 2.3: GC Grade (new solvents) ──
  { name: "GC Grade Acetone", category: "gc-solvents", cas: "67-64-1", packSizes: ["1L", "4L", "20L"], featured: false },
  { name: "GC Grade Ethyl Acetate", category: "gc-solvents", cas: "141-78-6", packSizes: ["1L", "4L", "20L"], featured: false },
  { name: "GC Grade Dichloromethane", category: "gc-solvents", cas: "75-09-2", packSizes: ["1L", "4L"], featured: false },
  { name: "GC Grade Methanol", category: "gc-solvents", cas: "67-56-1", packSizes: ["1L", "4L"], featured: false },
  { name: "GC Grade IPA", category: "gc-solvents", cas: "67-63-0", packSizes: ["1L", "4L"], featured: false },
  { name: "GC Grade Toluene", category: "gc-solvents", cas: "108-88-3", packSizes: ["1L", "4L"], featured: false },
  { name: "GC Grade Xylene", category: "gc-solvents", cas: "1330-20-7", packSizes: ["1L", "4L"], featured: false },

  // ── Line 2.4: Spectroscopic Grade ──
  { name: "Spectroscopic Grade Chloroform", category: "spectroscopic-solvents", cas: "67-66-3", packSizes: ["1L", "2.5L"], featured: false },
  { name: "Spectroscopic Grade n-Hexane", category: "spectroscopic-solvents", cas: "110-54-3", packSizes: ["1L", "4L"], featured: false },
  { name: "Spectroscopic Grade DCM", category: "spectroscopic-solvents", cas: "75-09-2", packSizes: ["1L", "4L"], featured: false },

  // ── Line 2.5: Trace Analysis Grade ──
  { name: "Trace Analysis Grade Nitric Acid 65%", category: "trace-analysis-grade", cas: "7697-37-2", packSizes: ["500mL", "1L"], featured: false },
  { name: "Trace Analysis Grade Hydrochloric Acid 37%", category: "trace-analysis-grade", cas: "7647-01-0", packSizes: ["500mL", "1L"], featured: false },
  { name: "Trace Analysis Grade Hydrofluoric Acid", category: "trace-analysis-grade", cas: "7664-39-3", packSizes: ["500mL"], featured: false },
  { name: "Trace Analysis Grade Hydrogen Peroxide 30%", category: "trace-analysis-grade", cas: "7722-84-1", packSizes: ["500mL", "1L"], featured: false },
  { name: "Trace Analysis Grade Acetonitrile", category: "trace-analysis-grade", cas: "75-05-8", packSizes: ["1L", "4L"], featured: false },
  { name: "Trace Analysis Grade Water", category: "trace-analysis-grade", cas: "7732-18-5", packSizes: ["1L", "4L"], featured: false },

  // ── Line 3.1: Mobile Phase Bags — General ──
  { name: "0.1% Formic Acid in Water — Bag", category: "mobile-phase-bags", cas: "64-18-6", packSizes: ["5L", "10L", "20L"], featured: false },
  { name: "0.1% Formic Acid in Acetonitrile — Bag", category: "mobile-phase-bags", cas: "64-18-6", packSizes: ["5L", "10L", "20L"], featured: false },
  { name: "0.1% Formic Acid in Methanol — Bag", category: "mobile-phase-bags", cas: "64-18-6", packSizes: ["5L", "10L"], featured: false },
  { name: "0.1% Acetic Acid in Water — Bag", category: "mobile-phase-bags", cas: "64-19-7", packSizes: ["5L", "10L"], featured: false },
  { name: "10mM Ammonium Acetate in Water — Bag", category: "mobile-phase-bags", cas: "631-61-8", packSizes: ["5L", "10L"], featured: false },
  { name: "10mM Ammonium Formate in Water — Bag", category: "mobile-phase-bags", cas: "540-69-2", packSizes: ["5L", "10L"], featured: false },
  { name: "20mM KH₂PO₄ Buffer pH 2.5 — Bag", category: "mobile-phase-bags", cas: "7778-77-0", packSizes: ["5L", "10L"], featured: false },
  { name: "0.01N H₂SO₄ Mobile Phase — Bag", category: "mobile-phase-bags", cas: "7664-93-9", packSizes: ["5L", "7L", "10L"], featured: false },
  { name: "5mM H₂SO₄ Mobile Phase — Bag", category: "mobile-phase-bags", cas: "7664-93-9", packSizes: ["5L", "7L"], featured: false },
  { name: "Acetonitrile/Water 50:50 USP — Bag", category: "mobile-phase-bags", cas: "75-05-8", packSizes: ["5L", "10L"], featured: false },
  { name: "Methanol/Water 70:30 USP — Bag", category: "mobile-phase-bags", cas: "67-56-1", packSizes: ["5L", "10L"], featured: false },

  // ── Line 3.2: Fermentation Analysis Mobile Phase ──
  { name: "Sugar Analysis Mobile Phase Kit (for Ca²⁺ column)", category: "mobile-phase-bags", packSizes: ["5L", "7L", "10L"], featured: false },
  { name: "Dairy Fermentation Analysis Kit (acid + sugar)", category: "mobile-phase-bags", packSizes: ["7L × 2"], featured: false },
  { name: "Wine Analysis Mobile Phase Kit", category: "mobile-phase-bags", packSizes: ["7L × 2"], featured: false },
  { name: "Vinegar Fermentation Analysis Kit", category: "mobile-phase-bags", packSizes: ["5L"], featured: false },
  { name: "Soy Sauce Fermentation Analysis Kit", category: "mobile-phase-bags", packSizes: ["7L"], featured: false },
  { name: "Antibiotic Fermentation Analysis Kit", category: "mobile-phase-bags", packSizes: ["7L", "10L"], featured: false },
  { name: "PHA/Lactic Acid Bio-Material Analysis Kit", category: "mobile-phase-bags", packSizes: ["5L", "7L"], featured: false },

  // ── Line 4: Standard Solutions ──
  { name: "ICP Multi-Element Standard (23 elements, 10mg/L)", category: "standard-solutions", packSizes: ["100mL", "500mL"], featured: false },
  { name: "ICP Multi-Element Standard (23 elements, 100mg/L)", category: "standard-solutions", packSizes: ["100mL"], featured: false },
  { name: "AAS Single-Element Standards (1000mg/L)", category: "standard-solutions", packSizes: ["100mL"], featured: false },
  { name: "Anion Standard Mix (F⁻/Cl⁻/NO₃⁻/SO₄²⁻)", category: "standard-solutions", packSizes: ["100mL"], featured: false },
  { name: "pH 4.00 Buffer Standard", category: "standard-solutions", packSizes: ["250mL", "500mL"], featured: false },
  { name: "pH 6.86 Buffer Standard", category: "standard-solutions", packSizes: ["250mL", "500mL"], featured: false },
  { name: "pH 7.00 Buffer Standard", category: "standard-solutions", packSizes: ["250mL", "500mL"], featured: false },
  { name: "pH 9.18 Buffer Standard", category: "standard-solutions", packSizes: ["250mL", "500mL"], featured: false },
  { name: "Conductivity Standard 84 μS/cm", category: "standard-solutions", packSizes: ["250mL"], featured: false },
  { name: "Conductivity Standard 1413 μS/cm", category: "standard-solutions", packSizes: ["250mL"], featured: false },
  { name: "NaOH Standard Solution 0.1mol/L", category: "standard-solutions", packSizes: ["500mL", "1L"], featured: false },
  { name: "HCl Standard Solution 0.1mol/L", category: "standard-solutions", packSizes: ["500mL", "1L"], featured: false },
  { name: "EDTA Standard Solution 0.01mol/L", category: "standard-solutions", packSizes: ["500mL"], featured: false },
  { name: "KMnO₄ Standard Solution 0.02mol/L", category: "standard-solutions", packSizes: ["500mL"], featured: false },
  { name: "AgNO₃ Standard Solution 0.1mol/L", category: "standard-solutions", packSizes: ["250mL", "500mL"], featured: false },
  { name: "UV-Vis Wavelength Calibration Solution", category: "standard-solutions", packSizes: ["100mL"], featured: false },
  { name: "TOC Standard Solution", category: "standard-solutions", packSizes: ["100mL", "500mL"], featured: false },
  { name: "Turbidity Standard (Formazin)", category: "standard-solutions", packSizes: ["100mL"], featured: false },

  // ── Line 5: Reagent Kits ──
  { name: "HPLC Mobile Phase Starter Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "LC-MS Mobile Phase Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Organic Acid Detection 7L Bag Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: true },
  { name: "Sugar + Organic Acid Full Analysis Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Pesticide Residue Solvent Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "TLC Analysis Starter Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Trace Metal Analysis Kit (ICP)", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Karl Fischer Moisture Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "GMP Disinfection Solvent Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Cell Cryopreservation Kit (DMSO)", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Lactic Acid Fermentation Monitoring Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Wine Analysis Full Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Dairy Fermentation QC Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },
  { name: "Amino Acid Fermentation Analysis Kit", category: "reagent-kits", packSizes: ["1 kit"], featured: false },

  // ── Line 6.1: TLC ──
  { name: "Silica Gel G TLC Plates (20×20cm)", category: "tlc-products", packSizes: ["25 plates", "50 plates"], featured: false },
  { name: "HPTLC Plates (10×10cm)", category: "tlc-products", packSizes: ["25 plates"], featured: false },
  { name: "Reverse Phase C18 TLC Plates", category: "tlc-products", packSizes: ["25 plates"], featured: false },
  { name: "Preparative PLC Plates (1mm thick)", category: "tlc-products", packSizes: ["10 plates"], featured: false },
  { name: "TLC Staining Reagent Set", category: "tlc-products", packSizes: ["1 set"], featured: false },

  // ── Line 6.2: SPE Cartridges ──
  { name: "C18 SPE Cartridge (500mg/6mL)", category: "spe-products", packSizes: ["30 pcs", "100 pcs"], featured: false },
  { name: "C8 SPE Cartridge (200mg/3mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "NH₂ SPE Cartridge (500mg/6mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "SAX SPE Cartridge (500mg/6mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "SCX SPE Cartridge (500mg/6mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "HLB SPE Cartridge (200mg/6mL)", category: "spe-products", packSizes: ["30 pcs", "100 pcs"], featured: false },
  { name: "MAX Mixed Anion SPE (150mg/6mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "MCX Mixed Cation SPE (150mg/6mL)", category: "spe-products", packSizes: ["30 pcs"], featured: false },
  { name: "QuEChERS Cleanup Salt Pack (15mL)", category: "spe-products", packSizes: ["50 pcs"], featured: false },
  { name: "Immunoaffinity Column (Aflatoxin)", category: "spe-products", packSizes: ["25 pcs"], featured: false },

  // ── Line 6.3: Karl Fischer ──
  { name: "KF Volumetric Reagent (One-Component)", category: "karl-fischer", packSizes: ["500mL", "1L"], featured: false },
  { name: "KF Volumetric Reagent (Two-Component Solvent)", category: "karl-fischer", packSizes: ["500mL"], featured: false },
  { name: "KF Volumetric Reagent (Two-Component Titrant)", category: "karl-fischer", packSizes: ["500mL"], featured: false },
  { name: "KF Coulometric Anolyte", category: "karl-fischer", packSizes: ["500mL"], featured: false },
  { name: "KF Coulometric Catholyte", category: "karl-fischer", packSizes: ["250mL"], featured: false },
  { name: "KF Water Standard 1.0 mg/g", category: "karl-fischer", packSizes: ["10mL × 5"], featured: false },
  { name: "KF-Grade Methanol (Anhydrous)", category: "karl-fischer", cas: "67-56-1", packSizes: ["1L", "4L"], featured: false },

  // ── Line 6.4: Deuterated NMR Solvents ──
  { name: "Chloroform-d (CDCl₃) ≥99.8%D", category: "nmr-deuterated", cas: "865-49-6", packSizes: ["0.75mL×10", "25mL", "100mL"], featured: false },
  { name: "DMSO-d6 ≥99.9%D", category: "nmr-deuterated", cas: "2206-27-1", packSizes: ["0.75mL×10", "25mL"], featured: false },
  { name: "D₂O (Deuterium Oxide) ≥99.9%D", category: "nmr-deuterated", cas: "7789-20-0", packSizes: ["5mL", "25mL", "100mL"], featured: false },
  { name: "Methanol-d4 (CD₃OD) ≥99.8%D", category: "nmr-deuterated", cas: "811-98-3", packSizes: ["0.75mL×10", "25mL"], featured: false },
  { name: "Acetone-d6 ≥99.5%D", category: "nmr-deuterated", cas: "666-52-4", packSizes: ["0.75mL×10", "25mL"], featured: false },
  { name: "Benzene-d6 (C₆D₆) ≥99.6%D", category: "nmr-deuterated", cas: "1076-43-3", packSizes: ["0.75mL×10", "10mL"], featured: false },
  { name: "Acetonitrile-d3 (CD₃CN) ≥99.8%D", category: "nmr-deuterated", cas: "2206-26-0", packSizes: ["0.75mL×10", "25mL"], featured: false },
  { name: "DCM-d2 (CD₂Cl₂) ≥99.8%D", category: "nmr-deuterated", cas: "1665-00-5", packSizes: ["0.75mL×10"], featured: false },
  { name: "NMR Deuterated Solvent Starter Set (8 solvents)", category: "nmr-deuterated", packSizes: ["1 set"], featured: false },

  // ── Line 7: Life Science ──
  { name: "Dehydrated Culture Media (General Purpose)", category: "life-science-reagents", packSizes: ["500g", "5kg"], featured: false },
  { name: "Cleanroom Environmental Monitoring Plates", category: "life-science-reagents", packSizes: ["10 plates", "20 plates"], featured: false },
  { name: "Ready-Poured Agar Plates (TSA)", category: "life-science-reagents", packSizes: ["10 plates", "20 plates"], featured: false },
  { name: "Chromogenic Media (Pathogen ID)", category: "life-science-reagents", packSizes: ["500g"], featured: false },
  { name: "PCR Pathogen Detection Kit", category: "life-science-reagents", packSizes: ["1 kit"], featured: false },
  { name: "ATP Hygiene Rapid Test Kit", category: "life-science-reagents", packSizes: ["50 swabs"], featured: false },

  // ── Line 8: Excipients & Food Grade additions ──
  { name: "Molecular Sieve 3A/4A/5A", category: "lab-consumable-chemicals", packSizes: ["500g", "2.5kg"], featured: false },
  { name: "Diatomaceous Earth (Celite)", category: "lab-consumable-chemicals", packSizes: ["500g", "2.5kg"], featured: false },
  { name: "Kjeldahl Tablets", category: "lab-consumable-chemicals", packSizes: ["100 tablets", "500 tablets"], featured: false },
  { name: "Ion Exchange Resin", category: "lab-consumable-chemicals", packSizes: ["500g", "5kg"], featured: false },
  { name: "Nitrocellulose", category: "lab-consumable-chemicals", packSizes: ["500g"], featured: false },
];
