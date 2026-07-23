import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/products";
import { getAllCategorySlugs } from "@/data/categories";
import { getAllIndustrySlugs } from "@/data/industries";
import { getAllApplicationSlugs } from "@/data/applications";
import { getAllMarketSlugs } from "@/data/markets";
import { getAllGuideSlugs } from "@/data/guides";
import { getAllKnowledgeArticleSlugs } from "@/data/knowledge-articles";
import { getDistributorMarketSlugs } from "@/data/distributor-program";
import { getCategoryPath, PRODUCT_LINE_PAGES } from "@/data/product-line-pages";

const BASE_URL = "https://www.lanchrom.com";

type Entry = MetadataRoute.Sitemap[number];

function entry(path: string, changeFrequency: Entry["changeFrequency"], priority: number): Entry {
  return { url: `${BASE_URL}${path}`, lastModified: new Date(), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Entry[] = [
    entry("/", "weekly", 1.0),
    entry("/about", "monthly", 0.7),
    entry("/contact", "monthly", 0.6),
    entry("/products", "weekly", 0.9),
    entry("/solutions", "weekly", 0.8),
    entry("/solutions/mobile-phase", "monthly", 0.7),
    entry("/solutions/mobile-phase/fermentation-analysis", "monthly", 0.7),
    entry("/solutions/mobile-phase/food-safety", "monthly", 0.7),
    entry("/solutions/mobile-phase/pharma-qc", "monthly", 0.7),
    entry("/solutions/reagent-kits", "monthly", 0.7),
    entry("/solutions/custom-packaging", "monthly", 0.7),
    entry("/industries", "weekly", 0.8),
    entry("/applications", "weekly", 0.8),
    entry("/markets", "monthly", 0.7),
    entry("/distributor-program", "monthly", 0.8),
    entry("/manufacturing", "monthly", 0.7),
    entry("/manufacturing/clean-filling", "monthly", 0.5),
    entry("/manufacturing/distillation-system", "monthly", 0.5),
    entry("/manufacturing/factory", "monthly", 0.5),
    entry("/manufacturing/qc-laboratory", "monthly", 0.5),
    entry("/oem", "monthly", 0.7),
    entry("/oem/quote-calculator", "monthly", 0.6),
    entry("/guides", "weekly", 0.7),
    entry("/resources/blog", "weekly", 0.6),
    entry("/resources/blog/lcms-solvent-background-comparison", "monthly", 0.7),
    entry("/resources/faq", "monthly", 0.6),
    entry("/resources/knowledge-center", "weekly", 0.7),
    entry("/downloads", "monthly", 0.5),
    entry("/downloads/coa", "monthly", 0.5),
    entry("/downloads/sds", "monthly", 0.5),
    entry("/downloads/tds", "monthly", 0.5),
    entry("/downloads/certificates", "monthly", 0.5),
    entry("/products/electronic-grade/ipa-polished", "monthly", 0.6),
    entry("/search", "yearly", 0.3),
    entry("/privacy", "yearly", 0.2),
  ];

  const productLines: Entry[] = Object.values(PRODUCT_LINE_PAGES).map(line =>
    entry(`/products/${line.slug}`, "weekly", 0.7)
  );

  const productCategories: Entry[] = getAllCategorySlugs().map(slug =>
    entry(getCategoryPath(slug), "weekly", 0.8)
  );

  const productDetails: Entry[] = PRODUCTS.map(p =>
    entry(`/products/${p.category}/${p.slug}`, "monthly", 0.7)
  );

  const industries: Entry[] = getAllIndustrySlugs().map(slug =>
    entry(`/industries/${slug}`, "monthly", 0.6)
  );

  const applications: Entry[] = getAllApplicationSlugs().map(slug =>
    entry(`/applications/${slug}`, "monthly", 0.6)
  );

  const markets: Entry[] = getAllMarketSlugs().map(slug =>
    entry(`/markets/${slug}`, "monthly", 0.5)
  );

  const distributorMarkets: Entry[] = getDistributorMarketSlugs().map(slug =>
    entry(`/distributor-program/${slug}`, "monthly", 0.7)
  );

  const guides: Entry[] = getAllGuideSlugs().map(slug =>
    entry(`/guides/${slug}`, "monthly", 0.6)
  );

  const knowledgeArticles: Entry[] = getAllKnowledgeArticleSlugs().map(slug =>
    entry(`/resources/knowledge-center/${slug}`, "monthly", 0.5)
  );

  return [
    ...staticPages,
    ...productLines,
    ...productCategories,
    ...productDetails,
    ...industries,
    ...applications,
    ...markets,
    ...distributorMarkets,
    ...guides,
    ...knowledgeArticles,
  ];
}
