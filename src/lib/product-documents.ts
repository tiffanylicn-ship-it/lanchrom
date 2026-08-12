import type { Product } from "@/types";

function safeDocumentSlug(product: Pick<Product, "slug">) {
  return product.slug || "product";
}

export function getProductDocumentLinks(product: Pick<Product, "category" | "slug">) {
  const slug = safeDocumentSlug(product);
  const base = `/documents/products/${product.category}/${slug}`;
  return {
    tds: `${base}/LANCHROM-${slug}-TDS.pdf`,
    specification: `${base}/LANCHROM-${slug}-Specification.pdf`,
  };
}
