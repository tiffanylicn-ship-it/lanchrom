export const PRODUCT_ROUTE_ALIASES = {
  "application-specific-mobile-phase-kits/wine-analysis-mobile-phase-kit":
    "application-specific-mobile-phase-kits/wine-analysis-mobile-phase",
  "laboratory-workflow-kits/gmp-disinfection-solvent-kit":
    "laboratory-workflow-kits/gmp-disinfection-kit",
  "laboratory-workflow-kits/cell-cryopreservation-kit-dmso":
    "laboratory-workflow-kits/cell-cryopreservation-kit",
  "laboratory-workflow-kits/dmso":
    "laboratory-workflow-kits/cell-cryopreservation-kit",
  "pharmaceutical-grade-solvents/dimethyl-sulfoxide-dmso":
    "pharmaceutical-grade-solvents/dmso",
  "pharmaceutical-grade-solvents/propylene-glycol-methyl-ether-pgme":
    "pharmaceutical-grade-solvents/pgme",
  "pharmaceutical-grade-solvents/propylene-glycol-methyl-ether-acetate-pgmea":
    "pharmaceutical-grade-solvents/pgmea",
  "pharmaceutical-grade-solvents/dimethyl-carbonate-dmc":
    "pharmaceutical-grade-solvents/dimethyl-carbonate",
  "deuterated-nmr-solvents/deuterium-oxide-d2o":
    "deuterated-nmr-solvents/d2o",
  "pharmaceutical-grade-solvents/n-methyl-pyrrolidone-nmp":
    "pharmaceutical-grade-solvents/nmp",
  "pharmaceutical-grade-solvents/diethanolamine-dea":
    "pharmaceutical-grade-solvents/diethanolamine",
  "spe-sample-cleanup/c18-spe-cartridge":
    "spe-sample-cleanup/spe-c18-cartridges",
  "spe-sample-cleanup/c8-spe-cartridge":
    "spe-sample-cleanup/c8-spe-cartridge-200mg-3ml",
  "spe-sample-cleanup/nh2-spe-cartridge":
    "spe-sample-cleanup/nh-spe-cartridge-500mg-6ml",
  "spe-sample-cleanup/max-mixed-anion-spe":
    "spe-sample-cleanup/max-mixed-anion-spe-150mg-6ml",
  "spe-sample-cleanup/mcx-mixed-cation-spe":
    "spe-sample-cleanup/mcx-mixed-cation-spe-150mg-6ml",
  "karl-fischer-reagents/volumetric-karl-fischer-reagent-two-component":
    "karl-fischer-reagents/kf-volumetric-reagent",
} as const;

export const PRODUCT_REDIRECTS = Object.entries(PRODUCT_ROUTE_ALIASES).map(
  ([source, destination]) => ({
    source: `/products/${source}`,
    destination: `/products/${destination}`,
  }),
);

const PRODUCT_REDIRECT_SOURCE_PATHS = new Set(
  PRODUCT_REDIRECTS.map(({ source }) => source),
);

export function isProductRedirectSource(path: string) {
  return PRODUCT_REDIRECT_SOURCE_PATHS.has(path);
}
