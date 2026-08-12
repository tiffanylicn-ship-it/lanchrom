// ============================================================
// LANCHROM™ — Product category metadata generated from the
// canonical six-line taxonomy.
// ============================================================

import {
  LEGACY_CATEGORY_ALIASES,
  PRODUCT_CATEGORY_DEFINITIONS,
  PRODUCT_GROUP_ORDER,
  PRODUCT_GROUPS,
  slugifyTaxonomyLabel,
  type ProductCategoryDefinition,
  type ProductGroupKey,
} from "./product-taxonomy";

export interface CategoryInfo extends ProductCategoryDefinition {
  seoTitle: string;
  seoDescription: string;
  comingSoonItems?: string[];
}

export const CATEGORIES: Record<string, CategoryInfo> = Object.fromEntries(
  PRODUCT_CATEGORY_DEFINITIONS.map((definition) => [
    definition.slug,
    {
      ...definition,
      seoTitle: `${definition.name} | LANCHROM™`,
      seoDescription: definition.description,
    },
  ]),
) as Record<string, CategoryInfo>;

export const GROUP_LABELS: Record<ProductGroupKey, { label: string; tagline: string }> = Object.fromEntries(
  PRODUCT_GROUP_ORDER.map((group) => [
    group,
    { label: PRODUCT_GROUPS[group].label, tagline: PRODUCT_GROUPS[group].tagline },
  ]),
) as Record<ProductGroupKey, { label: string; tagline: string }>;

export interface CategorySection {
  name: string;
  slug: string;
  categories: CategoryInfo[];
}

export function getCanonicalCategorySlug(slug: string) {
  return LEGACY_CATEGORY_ALIASES[slug] || slug;
}

export function getCategoryInfo(slug: string): CategoryInfo | undefined {
  return CATEGORIES[getCanonicalCategorySlug(slug)];
}

export function getAllCategorySlugs() {
  return Object.keys(CATEGORIES);
}

export function getCategoriesByGroup(group: ProductGroupKey) {
  return PRODUCT_CATEGORY_DEFINITIONS
    .filter((category) => category.group === group)
    .map((category) => CATEGORIES[category.slug]);
}

export function getCategorySectionsByGroup(group: ProductGroupKey): CategorySection[] {
  const sections = new Map<string, CategoryInfo[]>();
  getCategoriesByGroup(group).forEach((category) => {
    const items = sections.get(category.section) || [];
    items.push(category);
    sections.set(category.section, items);
  });

  return Array.from(sections, ([name, categories]) => ({
    name,
    slug: slugifyTaxonomyLabel(name),
    categories,
  }));
}

export { PRODUCT_GROUP_ORDER };
export type { ProductGroupKey };
