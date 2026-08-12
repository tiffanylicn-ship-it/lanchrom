import { getCategoryInfo, type CategoryInfo } from "./categories";
import {
  PRODUCT_CATEGORY_DEFINITIONS,
  PRODUCT_GROUP_ORDER,
  PRODUCT_GROUPS,
  type ProductGroupKey,
} from "./product-taxonomy";

export type ProductGroup = ProductGroupKey;

export interface ProductLinePageInfo {
  group: ProductGroup;
  slug: string;
  image: string;
  imageAlt: string;
}

export const PRODUCT_LINE_PAGES: Record<ProductGroup, ProductLinePageInfo> = Object.fromEntries(
  PRODUCT_GROUP_ORDER.map((group) => [
    group,
    {
      group,
      slug: PRODUCT_GROUPS[group].slug,
      image: PRODUCT_GROUPS[group].image,
      imageAlt: PRODUCT_GROUPS[group].imageAlt,
    },
  ]),
) as Record<ProductGroup, ProductLinePageInfo>;

const LEGACY_PRODUCT_LINE_ALIASES: Record<string, ProductGroup> = {
  "pharmaceutical-grade-solvents": "high-purity-solvents",
  "analytical-solvents": "high-purity-solvents",
  "ready-to-use-mobile-phase-bags": "ready-to-use-solutions",
  "standard-solutions-reference-materials": "standards-reagents",
  "reagent-kits-custom-sets": "life-science-workflow",
  "chromatography-consumables": "chromatography-sample-prep",
  "life-science-products": "life-science-workflow",
  "pharmaceutical-excipients-food-grade": "pharma-food-materials",
};

export function getProductLineByGroup(group: string): ProductLinePageInfo | undefined {
  return PRODUCT_LINE_PAGES[group as ProductGroup];
}

export function getProductLineBySlug(slug: string): ProductLinePageInfo | undefined {
  const canonical = Object.values(PRODUCT_LINE_PAGES).find((line) => line.slug === slug);
  if (canonical) return canonical;
  const group = LEGACY_PRODUCT_LINE_ALIASES[slug];
  return group ? PRODUCT_LINE_PAGES[group] : undefined;
}

export function getProductLineForCategory(categorySlug: string): ProductLinePageInfo | undefined {
  const category = getCategoryInfo(categorySlug);
  return category ? PRODUCT_LINE_PAGES[category.group] : undefined;
}

export function getProductLinePath(group: ProductGroup): string {
  return `/products/${PRODUCT_LINE_PAGES[group].slug}`;
}

export function getCategoryPath(category: Pick<CategoryInfo, "slug" | "group"> | string): string {
  const info = typeof category === "string" ? getCategoryInfo(category) : category;
  if (!info) return `/products/${typeof category === "string" ? category : category.slug}`;
  return `${getProductLinePath(info.group)}/${info.slug}`;
}

export function getProductLineStaticParams() {
  return Object.values(PRODUCT_LINE_PAGES).map((line) => ({ category: line.slug }));
}

export function getNestedCategoryStaticParams() {
  return PRODUCT_CATEGORY_DEFINITIONS.map((category) => ({
    category: PRODUCT_LINE_PAGES[category.group].slug,
    slug: category.slug,
  }));
}
