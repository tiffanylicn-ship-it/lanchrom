import type { CSSProperties } from "react";
import type { ProductGroup } from "./product-line-pages";

export type ProductThemeName = "analytical" | "lcms" | "electronic" | "pharma" | "industrial";

export const PRODUCT_THEME_TOKENS: Record<ProductThemeName, {
  primary: string;
  accent: string;
  metallic: string;
  soft: string;
  line: string;
  ink: string;
}> = {
  analytical: {
    primary: "#0B4F83",
    accent: "#2C79B5",
    metallic: "#D5E3EC",
    soft: "#EAF3F9",
    line: "#BFD5E4",
    ink: "#0A2D47",
  },
  lcms: {
    primary: "#092F5A",
    accent: "#6E87A3",
    metallic: "#D2D9E1",
    soft: "#E9EEF4",
    line: "#BECAD6",
    ink: "#102D4A",
  },
  electronic: {
    primary: "#082F55",
    accent: "#8295A8",
    metallic: "#D7DDE2",
    soft: "#E2E9EE",
    line: "#ACBDC9",
    ink: "#102B43",
  },
  pharma: {
    primary: "#216B4B",
    accent: "#38A169",
    metallic: "#DCEAE3",
    soft: "#EAF5EF",
    line: "#BFDBC9",
    ink: "#173C2C",
  },
  industrial: {
    primary: "#36566D",
    accent: "#768F9F",
    metallic: "#D7DEE2",
    soft: "#EDF1F3",
    line: "#C5D0D6",
    ink: "#263D4D",
  },
};

export function getProductTheme(group?: ProductGroup, categorySlug?: string): ProductThemeName {
  if (categorySlug === "electronic-semiconductor-grade-chemicals") return "electronic";
  if (["lcms-grade-solvents", "lcms-mobile-phase-additives"].includes(categorySlug || "")) return "lcms";
  if (["pharmaceutical-grade-solvents", "pharmaceutical-excipients", "food-grade-chemicals"].includes(categorySlug || "")) return "pharma";
  if (["preparative-grade-solvents", "laboratory-process-materials", "tlc-hptlc-products", "spe-sample-cleanup"].includes(categorySlug || "")) return "industrial";
  if (["chromatography-sample-prep", "pharma-food-materials"].includes(group || "")) return "industrial";
  if (group === "life-science-workflow") return "pharma";
  return "analytical";
}

export function getProductThemeStyle(theme: ProductThemeName): CSSProperties {
  const tokens = PRODUCT_THEME_TOKENS[theme];
  const fixedGradient = theme === "electronic"
    ? { start: "#1769AA", middle: "#C7CDD3", end: "#31B77A" }
    : { start: tokens.primary, middle: tokens.metallic, end: tokens.accent };
  return {
    "--product-theme-primary": tokens.primary,
    "--product-theme-accent": tokens.accent,
    "--product-theme-metallic": tokens.metallic,
    "--product-theme-soft": tokens.soft,
    "--product-theme-line": tokens.line,
    "--product-theme-ink": tokens.ink,
    "--product-theme-gradient-start": fixedGradient.start,
    "--product-theme-gradient-middle": fixedGradient.middle,
    "--product-theme-gradient-end": fixedGradient.end,
  } as CSSProperties;
}
