import { CATEGORIES, GROUP_LABELS, type CategoryInfo } from "./categories";

export type ProductGroup = keyof typeof GROUP_LABELS;

export interface ProductLinePageInfo {
  group: ProductGroup;
  slug: string;
  image: string;
  imageAlt: string;
}

export const PRODUCT_LINE_PAGES: Record<ProductGroup, ProductLinePageInfo> = {
  "pharma-solvents": {
    group: "pharma-solvents",
    slug: "pharmaceutical-grade-solvents",
    image: "/images/product-lines/pharmaceutical-grade.jpg",
    imageAlt: "Pharmaceutical grade solvent quality control",
  },
  "analytical-solvents": {
    group: "analytical-solvents",
    slug: "analytical-solvents",
    image: "/images/product-lines/lanchrom-hplc-lcms.jpg",
    imageAlt: "HPLC and LC-MS analytical laboratory",
  },
  "mobile-phase": {
    group: "mobile-phase",
    slug: "ready-to-use-mobile-phase-bags",
    image: "/images/product-lines/mobile-phase-bags.jpg",
    imageAlt: "Ready-to-use mobile phase bags",
  },
  standards: {
    group: "standards",
    slug: "standard-solutions-reference-materials",
    image: "/images/product-lines/standard-solutions.jpg",
    imageAlt: "Standard solutions and reference materials laboratory",
  },
  "reagent-kits": {
    group: "reagent-kits",
    slug: "reagent-kits-custom-sets",
    image: "/images/product-lines/reagent-kits.jpg",
    imageAlt: "Laboratory reagent kits and custom sets",
  },
  consumables: {
    group: "consumables",
    slug: "chromatography-consumables",
    image: "/images/product-lines/spectroscopic-nmr-solvents.jpg",
    imageAlt: "Chromatography consumables and NMR solvents",
  },
  "life-science": {
    group: "life-science",
    slug: "life-science-products",
    image: "/images/product-lines/life-science-reagents-v2.jpg",
    imageAlt: "Life science reagent laboratory",
  },
  excipients: {
    group: "excipients",
    slug: "pharmaceutical-excipients-food-grade",
    image: "/images/product-lines/pharmaceutical-excipients.jpg",
    imageAlt: "Pharmaceutical excipients laboratory",
  },
};

export function getProductLineByGroup(group: string): ProductLinePageInfo | undefined {
  return PRODUCT_LINE_PAGES[group as ProductGroup];
}

export function getProductLineBySlug(slug: string): ProductLinePageInfo | undefined {
  return Object.values(PRODUCT_LINE_PAGES).find((line) => line.slug === slug);
}

export function getProductLineForCategory(categorySlug: string): ProductLinePageInfo | undefined {
  const category = CATEGORIES[categorySlug];
  return category ? PRODUCT_LINE_PAGES[category.group] : undefined;
}

export function getProductLinePath(group: ProductGroup): string {
  return `/products/${PRODUCT_LINE_PAGES[group].slug}`;
}

export function getCategoryPath(category: Pick<CategoryInfo, "slug" | "group"> | string): string {
  const info = typeof category === "string" ? CATEGORIES[category] : category;
  if (!info) return `/products/${typeof category === "string" ? category : category.slug}`;
  return `${getProductLinePath(info.group)}/${info.slug}`;
}

export function getProductLineStaticParams() {
  return Object.values(PRODUCT_LINE_PAGES).map((line) => ({ category: line.slug }));
}

export function getNestedCategoryStaticParams() {
  return Object.values(CATEGORIES).map((category) => ({
    category: PRODUCT_LINE_PAGES[category.group].slug,
    slug: category.slug,
  }));
}
