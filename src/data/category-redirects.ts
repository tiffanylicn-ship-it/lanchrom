import {
  LEGACY_CATEGORY_ALIASES,
  PRODUCT_CATEGORY_DEFINITIONS,
  PRODUCT_GROUPS,
} from "./product-taxonomy";

const categoryBySlug = new Map(
  PRODUCT_CATEGORY_DEFINITIONS.map((category) => [category.slug, category]),
);

const redirectMap = new Map<string, string>();

for (const category of PRODUCT_CATEGORY_DEFINITIONS) {
  redirectMap.set(
    `/products/${category.slug}`,
    `/products/${PRODUCT_GROUPS[category.group].slug}/${category.slug}`,
  );
}

for (const [legacySlug, canonicalSlug] of Object.entries(LEGACY_CATEGORY_ALIASES)) {
  const category = categoryBySlug.get(canonicalSlug);
  if (!category) {
    throw new Error(`Unknown canonical category for legacy route: ${legacySlug} -> ${canonicalSlug}`);
  }

  redirectMap.set(
    `/products/${legacySlug}`,
    `/products/${PRODUCT_GROUPS[category.group].slug}/${category.slug}`,
  );
}

export const CATEGORY_REDIRECTS = Array.from(
  redirectMap,
  ([source, destination]) => ({ source, destination }),
);
