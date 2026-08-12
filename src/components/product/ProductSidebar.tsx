"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getCategoriesByGroup, getCategorySectionsByGroup, GROUP_LABELS, PRODUCT_GROUP_ORDER, type ProductGroupKey } from "@/data/categories";
import { getCategoryPath, getProductLinePath } from "@/data/product-line-pages";
import { getProductTheme, PRODUCT_THEME_TOKENS } from "@/data/product-themes";

function colorStyle(groupKey: ProductGroupKey, categorySlug?: string): CSSProperties {
  const tokens = PRODUCT_THEME_TOKENS[getProductTheme(groupKey, categorySlug)];
  return {
    "--nav-theme-primary": tokens.primary,
    "--nav-theme-accent": tokens.accent,
    "--nav-theme-soft": tokens.soft,
    "--nav-theme-line": tokens.line,
    "--nav-theme-metallic": tokens.metallic,
    "--nav-theme-ink": tokens.ink,
  } as CSSProperties;
}

function ProductGroup({ groupKey }: { groupKey: ProductGroupKey }) {
  const pathname = usePathname();
  const categories = getCategoriesByGroup(groupKey);
  const sections = getCategorySectionsByGroup(groupKey);
  const info = GROUP_LABELS[groupKey];
  const pathSegments = pathname.split("/");
  const groupPath = getProductLinePath(groupKey);
  const groupActive = pathname === groupPath || categories.some((category) => pathSegments.includes(category.slug));
  const [open, setOpen] = useState(groupActive);

  if (categories.length === 0) return null;

  return (
    <section className={`product-sidebar-group ${groupActive ? "is-active" : ""}`} style={colorStyle(groupKey)}>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} className="product-sidebar-group-button">
        <span className="product-sidebar-group-mark" aria-hidden="true" />
        <span className="product-sidebar-group-label">{info.label}</span>
        <span className={`product-sidebar-chevron ${open ? "is-open" : ""}`} aria-hidden="true">▾</span>
      </button>

      <div className={`product-sidebar-collapse ${open ? "is-open" : ""}`}>
        <div className="product-sidebar-collapse-inner">
          <Link href={groupPath} className="product-sidebar-line-link">View product line <span aria-hidden="true">→</span></Link>
          {sections.map((section) => (
            <div key={section.slug} className="product-sidebar-section">
              <p className="product-sidebar-section-label">{section.name}</p>
              <ul className="product-sidebar-category-list">
                {section.categories.map((category) => {
                  const active = pathSegments.includes(category.slug);
                  return (
                    <li key={category.slug} style={colorStyle(groupKey, category.slug)}>
                      <Link href={getCategoryPath(category)} className={`product-sidebar-category-link ${active ? "is-active" : ""}`}>
                        <span className="product-sidebar-category-mark" aria-hidden="true" />
                        <span>{category.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProductSidebar() {
  return (
    <nav className="product-sidebar sticky top-[156px] hidden max-h-[calc(100vh-194px)] w-[300px] flex-shrink-0 self-start overflow-y-auto pr-4 pb-8 lg:block" aria-label="Product catalog navigation">
      <Link href="/products" className="product-sidebar-all">
        <span>All Product Lines</span><span aria-hidden="true">→</span>
      </Link>
      <div className="product-sidebar-groups">
        {PRODUCT_GROUP_ORDER.map((groupKey) => <ProductGroup key={groupKey} groupKey={groupKey} />)}
      </div>
    </nav>
  );
}
