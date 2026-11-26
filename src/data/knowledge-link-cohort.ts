// First measurable internal-link cohort selected from the 2026-11-26 GSC review.
// Keep this explicit so the 20-page experiment can be audited, measured, and
// rolled back without changing article copy or applying site-wide heuristics.
export const CURATED_KNOWLEDGE_LINKS: Record<string, readonly string[]> = {
  "what-is-column-equilibration": [
    "what-is-column-dead-volume",
    "what-is-resolution-chromatography",
  ],
  "what-is-system-suitability": [
    "what-is-column-equilibration",
    "what-is-resolution-chromatography",
  ],
  "what-is-resolution-chromatography": [
    "what-is-column-dead-volume",
    "what-is-linearity",
  ],
  "what-is-column-dead-volume": [
    "what-is-column-equilibration",
    "what-is-resolution-chromatography",
  ],
  "what-is-isocratic-elution": [
    "what-is-column-equilibration",
    "what-is-reagent-kit",
  ],
  "what-is-linearity": [
    "what-is-blank-subtraction",
    "what-is-trace-analysis-grade",
  ],
  "what-is-blank-subtraction": [
    "what-is-linearity",
    "what-is-trace-analysis-grade",
  ],
  "what-is-refractive-index-detection": [
    "what-is-sample-derivatization",
    "what-is-blank-subtraction",
  ],
  "what-is-sample-derivatization": [
    "what-is-refractive-index-detection",
    "what-is-deuterated-solvent",
  ],
  "what-is-trace-analysis-grade": [
    "what-is-blank-subtraction",
    "what-is-deuterated-solvent",
  ],
  "what-is-uv-cutoff": [
    "what-is-non-volatile-residue",
    "what-is-hplc-grade-ipa",
  ],
  "what-is-non-volatile-residue": [
    "what-is-uv-cutoff",
    "what-is-anhydrous-solvent",
  ],
  "what-is-hplc-grade-ethanol": [
    "what-is-uv-cutoff",
    "what-is-anhydrous-solvent",
  ],
  "what-is-hplc-grade-ipa": [
    "what-is-uv-cutoff",
    "what-is-non-volatile-residue",
  ],
  "what-is-anhydrous-solvent": [
    "what-is-non-volatile-residue",
    "what-is-hplc-grade-ipa",
  ],
  "what-is-deuterated-solvent": [
    "what-is-trace-analysis-grade",
    "what-is-sample-derivatization",
    "what-is-non-volatile-residue",
  ],
  "what-is-mobile-phase": [
    "mobile-phase-stability-how-long-is-too-long",
    "what-is-reagent-kit",
    "what-is-isocratic-elution",
  ],
  "mobile-phase-stability-how-long-is-too-long": [
    "what-is-mobile-phase",
    "mobile-phase-degassing",
  ],
  "mobile-phase-degassing": [
    "what-is-mobile-phase",
    "mobile-phase-stability-how-long-is-too-long",
  ],
  "what-is-reagent-kit": [
    "what-is-mobile-phase",
    "what-is-isocratic-elution",
  ],
};

export function getCuratedKnowledgeLinks(slug: string): readonly string[] {
  return CURATED_KNOWLEDGE_LINKS[slug] ?? [];
}
