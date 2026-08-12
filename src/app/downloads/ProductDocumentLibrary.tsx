"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Download, FileCheck2, FileText, Search } from "lucide-react";

export interface ProductDocumentRow {
  id: string;
  name: string;
  cas?: string;
  category: string;
  categoryName: string;
  productLine: string;
  productHref: string;
  tdsHref: string;
  specificationHref: string;
}

export default function ProductDocumentLibrary({ rows }: { rows: ProductDocumentRow[] }) {
  const [query, setQuery] = useState("");
  const [productLine, setProductLine] = useState("all");
  const [visibleCount, setVisibleCount] = useState(36);
  const productLines = useMemo(() => Array.from(new Set(rows.map((row) => row.productLine))), [rows]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesLine = productLine === "all" || row.productLine === productLine;
      const matchesQuery = !needle || `${row.name} ${row.cas || ""} ${row.categoryName}`.toLowerCase().includes(needle);
      return matchesLine && matchesQuery;
    });
  }, [productLine, query, rows]);
  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="document-library" className="downloads-library">
      <div className="downloads-library-toolbar">
        <label className="downloads-library-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Search product documents</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(36); }} placeholder="Search product, CAS or category" />
        </label>
        <label className="downloads-library-filter">
          <span>Product line</span>
          <select value={productLine} onChange={(event) => { setProductLine(event.target.value); setVisibleCount(36); }}>
            <option value="all">All product lines</option>
            {productLines.map((line) => <option key={line}>{line}</option>)}
          </select>
        </label>
      </div>

      <div className="downloads-library-status">
        <p><strong>{filtered.length}</strong> products with downloadable TDS and specification files</p>
        {(query || productLine !== "all") && <button type="button" onClick={() => { setQuery(""); setProductLine("all"); setVisibleCount(36); }}>Clear filters</button>}
      </div>

      {visible.length > 0 ? (
        <div className="downloads-library-grid">
          {visible.map((row) => (
            <article key={row.id} className="downloads-product-card">
              <div className="downloads-product-card-copy">
                <p>{row.categoryName}</p>
                <h2>{row.name}</h2>
                {row.cas && <span>CAS {row.cas}</span>}
              </div>
              <div className="downloads-product-actions">
                <a href={row.tdsHref} download><FileText aria-hidden="true" /><span><strong>Product TDS</strong><small>PDF - all pack sizes</small></span><Download aria-hidden="true" /></a>
                <a href={row.specificationHref} download><FileCheck2 aria-hidden="true" /><span><strong>Specification</strong><small>PDF - reference summary</small></span><Download aria-hidden="true" /></a>
                <Link href={row.productHref}>View product page <span aria-hidden="true">→</span></Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="downloads-library-empty"><h2>No matching documents</h2><p>Try a product name, CAS number, or another product line.</p></div>
      )}

      {visibleCount < filtered.length && (
        <div className="downloads-library-more"><button type="button" onClick={() => setVisibleCount((count) => count + 36)}>Show 36 more documents</button></div>
      )}
    </section>
  );
}
