// ============================================================
// LANCHROM™ — Guides (long-form, 5000-8000 words each)
// ============================================================
// Unlike Knowledge Center (short structured-block articles) and
// Applications/Industries (data-driven from a single template), each
// Guide is substantial enough that it gets its own page file under
// src/app/guides/[slug]/page.tsx with the prose written directly in
// JSX — easier to read and edit a 6000-word piece as its own file
// than as escaped strings in a shared data array.
//
// This file is just the index/metadata used by the guides listing
// page and for cross-linking — it does NOT contain the article body.

export interface GuideInfo {
  slug: string;
  title: string;
  h1: string;
  excerpt: string;
  seoDescription: string;
  readingTime: string; // e.g. "18 min read"
  category: "solvent-guides" | "buying-guides" | "operational-guides" | "technique-guides";
}

export const GUIDES: Record<string, GuideInfo> = {
  "complete-guide-to-hplc-solvents": {
    slug: "complete-guide-to-hplc-solvents",
    title: "The Complete Guide to HPLC Solvents",
    h1: "The Complete Guide to HPLC Solvents",
    excerpt: "Everything that determines whether an HPLC solvent works for your method — grade systems, the solvents themselves, mobile phase chemistry, troubleshooting, and how to buy without overpaying.",
    seoDescription: "The complete guide to HPLC solvents: grades, UV cutoff, common solvents compared, mobile phase prep, troubleshooting, and buying guide.",
    readingTime: "22 min read",
    category: "solvent-guides",
  },
  "complete-guide-to-lcms-solvents": {
    slug: "complete-guide-to-lcms-solvents",
    title: "The Complete Guide to LC-MS Solvents",
    h1: "The Complete Guide to LC-MS Solvents",
    excerpt: "What actually separates LC-MS grade from HPLC grade, how ionization mode shapes solvent and additive choice, and a practical framework for qualifying a new lot.",
    seoDescription: "The complete guide to LC-MS solvents: MS-blank testing, trace metals, additive selection by ionization mode, and lot qualification.",
    readingTime: "20 min read",
    category: "solvent-guides",
  },
  "mobile-phase-handbook": {
    slug: "mobile-phase-handbook",
    title: "The Mobile Phase Handbook",
    h1: "The Mobile Phase Handbook",
    excerpt: "A practical reference for buffer chemistry, pH and ionic strength, gradient design, filtration and degassing, troubleshooting, and ready-to-use mobile phase systems.",
    seoDescription: "Mobile phase handbook: buffer chemistry, pH selection, gradient design, filtration, degassing, and troubleshooting common mobile phase problems.",
    readingTime: "19 min read",
    category: "operational-guides",
  },
  "chromatography-solvent-buying-guide": {
    slug: "chromatography-solvent-buying-guide",
    title: "Chromatography Solvent Buying Guide",
    h1: "Chromatography Solvent Buying Guide",
    excerpt: "How to evaluate a solvent supplier, what's actually worth paying more for, packaging and logistics considerations, and questions to ask before switching suppliers.",
    seoDescription: "How to buy chromatography solvents: supplier evaluation, grade vs. price tradeoffs, packaging options, and switching suppliers without method disruption.",
    readingTime: "16 min read",
    category: "buying-guides",
  },
  "oem-laboratory-solvent-guide": {
    slug: "oem-laboratory-solvent-guide",
    title: "OEM & Private Label Laboratory Solvent Guide",
    h1: "OEM & Private Label Laboratory Solvent Guide",
    excerpt: "What's involved in private-labeling laboratory solvents — minimum order quantities, documentation, packaging options, and how to evaluate a manufacturing partner.",
    seoDescription: "OEM and private label laboratory solvent guide: MOQs, documentation requirements, packaging customization, and manufacturer evaluation.",
    readingTime: "15 min read",
    category: "buying-guides",
  },
  "complete-guide-to-gc-solvents": {
    slug: "complete-guide-to-gc-solvents",
    title: "The Complete Guide to GC Solvents",
    h1: "The Complete Guide to GC Solvents",
    excerpt: "Everything you need to know about solvents for gas chromatography — grade specifications, residue testing, common GC solvents compared, and how to avoid interference peaks.",
    seoDescription: "GC solvents guide: grade specifications, residue on evaporation, solvent selection for GC-FID and GC-MS, and troubleshooting interference peaks.",
    readingTime: "14 min read",
    category: "technique-guides",
  },
  "electronic-grade-solvents-semiconductor-guide": {
    slug: "electronic-grade-solvents-semiconductor-guide",
    title: "Electronic Grade Solvents for Semiconductor Manufacturing",
    h1: "Electronic Grade Solvents for Semiconductor Manufacturing",
    excerpt: "Sub-ppb trace metals, particle control to 3nm, and static-free handling — what semiconductor fabs need from their solvent supplier.",
    seoDescription: "Electronic grade solvents for semiconductor manufacturing: SEMI specifications, trace metal control, particle limits, and supplier qualification.",
    readingTime: "16 min read",
    category: "technique-guides",
  },
  "karl-fischer-moisture-analysis-guide": {
    slug: "karl-fischer-moisture-analysis-guide",
    title: "Karl Fischer Moisture Analysis: The Complete Guide",
    h1: "Karl Fischer Moisture Analysis Guide",
    excerpt: "Volumetric vs coulometric, one-component vs two-component reagents, sample handling, and troubleshooting — everything for accurate water content determination.",
    seoDescription: "Karl Fischer moisture analysis guide: volumetric and coulometric methods, reagent selection, sample preparation, and troubleshooting.",
    readingTime: "15 min read",
    category: "technique-guides",
  },
  "spe-sample-preparation-guide": {
    slug: "spe-sample-preparation-guide",
    title: "SPE Sample Preparation: From Sorbent Selection to Method Optimization",
    h1: "SPE Sample Preparation Guide",
    excerpt: "How to choose the right SPE sorbent, optimize loading and elution conditions, and troubleshoot common problems — for food safety, environmental, and pharmaceutical applications.",
    seoDescription: "SPE solid phase extraction guide: C18, HLB, ion exchange, and mixed-mode sorbent selection, method development, and troubleshooting.",
    readingTime: "14 min read",
    category: "technique-guides",
  },
  "fermentation-analysis-complete-guide": {
    slug: "fermentation-analysis-complete-guide",
    title: "Fermentation Analysis: Organic Acids, Sugars & Process Monitoring",
    h1: "Fermentation Analysis Complete Guide",
    excerpt: "HPLC methods for organic acid and sugar analysis in fermentation — column selection, mobile phase preparation, detector choice, and industry-specific applications.",
    seoDescription: "Fermentation analysis guide: organic acid and sugar HPLC methods, Aminex columns, mobile phase preparation, and applications in dairy, wine, beer, and bio-based materials.",
    readingTime: "17 min read",
    category: "technique-guides",
  },
};

export function getGuideInfo(slug: string): GuideInfo | undefined {
  return GUIDES[slug];
}

export function getAllGuideSlugs(): string[] {
  return Object.keys(GUIDES);
}
