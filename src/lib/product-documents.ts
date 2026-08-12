import type { Product } from "@/types";

const DOWNLOADABLE_PRODUCT_CATEGORIES = new Set([
  "hplc-grade-solvents",
  "pharmaceutical-grade-solvents",
  "acidified-mobile-phases",
  "buffer-mobile-phases",
  "application-specific-mobile-phase-kits",
]);

function safeDocumentSlug(product: Pick<Product, "slug">) {
  return product.slug || "product";
}

export function getProductDocumentLinks(product: Pick<Product, "category" | "slug">) {
  if (!DOWNLOADABLE_PRODUCT_CATEGORIES.has(product.category)) return null;
  const slug = safeDocumentSlug(product);
  const base = `/documents/products/${product.category}/${slug}`;
  return {
    tds: `${base}/LANCHROM-${slug}-TDS.pdf`,
    specification: `${base}/LANCHROM-${slug}-Specification.pdf`,
  };
}
