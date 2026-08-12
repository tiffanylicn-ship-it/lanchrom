import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { PRODUCTS } from "../src/data/products";
import { getCategoryInfo, GROUP_LABELS } from "../src/data/categories";

const outputPath = resolve(process.argv[2] || "tmp/pdfs/product-document-data.json");
mkdirSync(dirname(outputPath), { recursive: true });

const records = PRODUCTS.map((product) => {
  const category = getCategoryInfo(product.category);
  return {
    ...product,
    categoryName: category?.name || product.category,
    productLine: category ? GROUP_LABELS[category.group].label : "LANCHROM Product Portfolio",
  };
});

writeFileSync(outputPath, JSON.stringify(records, null, 2), "utf8");
console.log(`Exported ${records.length} product document records to ${outputPath}`);
