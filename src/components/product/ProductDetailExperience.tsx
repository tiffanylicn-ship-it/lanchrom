import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Download,
  FileCheck2,
  FileText,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import type { Product } from "@/types";
import type { CategoryInfo } from "@/data/categories";
import { GROUP_LABELS } from "@/data/categories";
import { getProductLinePath } from "@/data/product-line-pages";
import { getProductDocumentLinks } from "@/lib/product-documents";
import {
  getProductTheme,
  getProductThemeStyle,
  PRODUCT_THEME_TOKENS,
} from "@/data/product-themes";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import ProductInquiryForm from "@/app/products/electronic-grade-ipa/ProductInquiryForm";
import styles from "@/app/products/electronic-grade-ipa/product-page.module.css";

const gradeLabels: Record<string, string> = {
  hplc: "HPLC Grade",
  "hplc-gradient": "HPLC Gradient Grade",
  lcms: "LC-MS Grade",
  uplc: "UPLC Grade",
  gc: "GC Grade",
  spectroscopic: "Spectroscopic Grade",
  anhydrous: "Anhydrous Grade",
  prep: "Preparative Grade",
  "pharma-usp": "USP Grade",
  "pharma-ep": "EP Grade",
  electronic: "Electronic Grade",
  "food-grade": "Food Grade",
  "kosher-halal": "Kosher / Halal",
};

const qualitySteps = ["Raw materials", "Purification", "Filtration", "Sampling", "Testing", "Packaging", "Shipment"];

function applicationImage(categorySlug?: string) {
  if (categorySlug === "electronic-semiconductor-grade-chemicals") return "/images/backgrounds/semiconductor.png";
  if (["lcms-grade-solvents", "lcms-mobile-phase-additives"].includes(categorySlug || "")) return "/images/backgrounds/lc-ms-analysis-solvents.png";
  if (["hplc-grade-solvents", "gradient-grade-solvents", "uplc-grade-solvents", "preparative-grade-solvents"].includes(categorySlug || "")) return "/images/backgrounds/hplc-analysis-solvents.png";
  if (["pharmaceutical-grade-solvents", "pharmaceutical-excipients", "cell-culture-cryopreservation"].includes(categorySlug || "")) return "/images/backgrounds/pharmaceutical-manufacturing.png";
  if (["acidified-mobile-phases", "buffer-mobile-phases", "mobile-phase-solvent-blends", "application-specific-mobile-phase-kits"].includes(categorySlug || "")) return "/images/backgrounds/mobile-phase-buffer-preparation.jpg";
  return "/images/backgrounds/product-solutions.png";
}

function productHref(product: Product) {
  return product._id === "electronic-ipa"
    ? "/products/electronic-grade-ipa"
    : `/products/${product.category}/${product.slug}`;
}

export default function ProductDetailExperience({
  product,
  categoryInfo,
  related,
}: {
  product: Product;
  categoryInfo?: CategoryInfo;
  related: Product[];
}) {
  const theme = getProductTheme(categoryInfo?.group, categoryInfo?.slug || product.category);
  const tokens = PRODUCT_THEME_TOKENS[theme];
  const themeStyle = {
    ...getProductThemeStyle(theme),
    "--product-navy": tokens.primary,
    "--product-navy-deep": tokens.ink,
    "--product-blue": tokens.accent,
    "--product-silver": tokens.metallic,
    "--product-line": tokens.line,
    "--product-tint": tokens.soft,
    "--product-ink": tokens.ink,
    "--product-muted": "#5D7182",
  } as CSSProperties;

  const grades = product.availableGrades?.length
    ? product.availableGrades
    : (product.grades || []).map((grade) => gradeLabels[grade] || grade);
  const primaryGrade = categoryInfo?.slug === "hplc-grade-solvents"
    ? grades.find((grade) => /isocratic/i.test(grade)) || grades[0]
    : grades[0] || categoryInfo?.name || "High Purity Grade";
  const specifications = product.specifications || [];
  const priorityTerms = /purity|water|metal|residue|assay|particle|uv cutoff/i;
  const metrics = [...specifications]
    .sort((a, b) => Number(priorityTerms.test(b.parameter)) - Number(priorityTerms.test(a.parameter)))
    .slice(0, 4);
  const applications = (product.applications?.length ? product.applications : [
    categoryInfo?.tagline || "Laboratory and production workflows",
    "Quality-controlled chemical processing",
    "Technical method development",
    "Validated manufacturing support",
  ]).slice(0, 8);
  const packaging = product.packaging?.length
    ? product.packaging.slice(0, 6).map((item) => ({ size: item.volume, note: item.container.replaceAll("-", " ") }))
    : (product.packSizes || ["Laboratory pack", "Production pack", "Bulk supply"]).slice(0, 6).map((size) => ({ size, note: "Available on request" }));
  const heroImage = categoryInfo?.bannerImage || "/images/products-hero.jpg";
  const documentLinks = getProductDocumentLinks(product);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `LANCHROM ${product.name}`,
    description: product.shortDescription,
    brand: { "@type": "Brand", name: "LANCHROM" },
    manufacturer: { "@type": "Organization", name: "Zhejiang LANJING Chemical Materials Co., Ltd." },
    category: categoryInfo?.name || product.category,
    url: `https://www.lanchrom.com/products/${product.category}/${product.slug}`,
  };

  return (
    <div className={styles.page} style={themeStyle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <SectionBreadcrumb
        theme={theme}
        items={[
          { label: "Products", href: "/products" },
          ...(categoryInfo ? [{ label: GROUP_LABELS[categoryInfo.group].label, href: getProductLinePath(categoryInfo.group) }] : []),
          ...(categoryInfo ? [{ label: categoryInfo.name, href: `${getProductLinePath(categoryInfo.group)}/${categoryInfo.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <section className={styles.hero}>
        <Image src={heroImage} alt={categoryInfo?.name || product.name} fill priority sizes="100vw" className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={`${styles.shell} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <div className={styles.badges}>
              {(grades.length ? grades : [primaryGrade]).slice(0, 2).map((grade) => <span key={grade}>{grade}</span>)}
            </div>
            <p className={styles.eyebrow}>LANCHROM™ {categoryInfo?.shortName || "High Purity Chemicals"}</p>
            <h1 className={product.name.length > 32 ? styles.longHeroTitle : undefined}>{product.name}</h1>
            <p className={styles.heroDescription}>{product.shortDescription || categoryInfo?.description}</p>
            <p className={styles.heroMeta}>
              {product.cas && <span>CAS {product.cas}</span>}
              {product.formula && <span>{product.formula}</span>}
              {product.mw && <span>MW {product.mw}</span>}
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#inquiry">Get free sample <FlaskConical aria-hidden="true" /></Link>
              <Link className={styles.secondaryButton} href="#inquiry">Request quote <ArrowRight aria-hidden="true" /></Link>
              <Link className={styles.heroDocumentLink} href="#documents">Technical documents <Download aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
        <div className={`${styles.shell} ${styles.heroProof}`}>
          <div><strong>Direct</strong><span>Manufacturer supply</span></div>
          <div><strong>Batch</strong><span>Document traceability</span></div>
          <div><strong>Global</strong><span>Export support</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.overview}`}>
        <div className={`${styles.shell} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>{categoryInfo?.name || "Product portfolio"}</p>
            <h2>Product overview</h2>
            <p>{product.shortDescription || categoryInfo?.description}</p>
            <p>{categoryInfo?.description || "Manufactured with controlled processing, documented testing, and packaging selected for product compatibility and global supply."}</p>
            {product.availableGrades && product.availableGrades.length > 0 && (
              <div className={styles.availableGrades}>
                <strong>Available grades</strong>
                <div>{product.availableGrades.map((grade) => <span key={grade}>{grade}</span>)}</div>
              </div>
            )}
          </div>
          <aside className={styles.infoCard} aria-label="Product identity">
            <p>Product identity</p>
            <dl>
              <div><dt>Product</dt><dd>{product.name}</dd></div>
              {product.cas && <div><dt>CAS</dt><dd>{product.cas}</dd></div>}
              {product.formula && <div><dt>Formula</dt><dd>{product.formula}</dd></div>}
              {product.mw && <div><dt>Molecular weight</dt><dd>{product.mw}</dd></div>}
              <div><dt>Grade</dt><dd>{primaryGrade}</dd></div>
              <div><dt>Category</dt><dd>{categoryInfo?.name || product.category}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {specifications.length > 0 && (
        <section className={`${styles.section} ${styles.tint}`} id="specifications">
          <div className={styles.shell}>
            <div className={styles.splitHeading}>
              <div><p className={styles.eyebrow}>Technical confidence</p><h2>Key specifications</h2></div>
              <p>Representative parameters for technical review and product qualification.</p>
            </div>
            {metrics.length > 0 && (
              <div className={styles.metricGrid}>
                {metrics.map((metric, index) => (
                  <article className={styles.metricCard} key={`${metric.parameter}-${index}`}>
                    <span>0{index + 1}</span><strong>{metric.value}</strong><h3>{metric.parameter}</h3><p>{metric.testMethod || "Controlled specification"}</p>
                  </article>
                ))}
              </div>
            )}
            <div className={styles.specificationTable}>
              <div className={styles.tableHeading}><h3>Typical specification</h3><span>Current approved values on request</span></div>
              <div className={styles.tableScroll}>
                <table><thead><tr><th>Parameter</th><th>Specification</th><th>Method</th></tr></thead><tbody>
                  {specifications.map((spec) => <tr key={`${spec.parameter}-${spec.value}`}><td>{spec.parameter}</td><td>{spec.value}</td><td>{spec.testMethod || "—"}</td></tr>)}
                </tbody></table>
              </div>
              <p className={styles.controlNote}>Final release values are confirmed in the approved grade-specific specification and batch COA.</p>
            </div>
          </div>
        </section>
      )}

      <section className={styles.section} id="applications">
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div><p className={styles.eyebrow}>Where performance matters</p><h2>Applications</h2></div>
            <p>Application fit should be confirmed against the required method, process, impurity limits, and regulatory environment.</p>
          </div>
          <figure className={styles.applicationImage}>
            <Image src={applicationImage(categoryInfo?.slug)} alt={`${product.name} applications`} fill sizes="(max-width: 768px) 100vw, 1200px" />
          </figure>
          <div className={styles.applicationGrid}>
            {applications.map((application, index) => <article key={`${application}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><h3>{application}</h3><p>Technical support is available for qualification, documentation, and packaging selection.</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`${styles.shell} ${styles.manufacturingGrid}`}>
          <figure className={styles.manufacturingImage}><Image src="/images/product-lines/lanchrom-distillation.jpg" alt="LANCHROM high-purity chemical manufacturing" fill sizes="(max-width: 900px) 100vw, 54vw" /></figure>
          <div className={styles.manufacturingCopy}>
            <p className={styles.eyebrow}>Manufacturer advantage</p><h2>Built around process control</h2>
            <p className={styles.lede}>Controlled processing and documented quality systems support stable supply from qualification through routine purchasing.</p>
            <div className={styles.advantageList}>
              <article><span>01</span><div><h3>Controlled production</h3><p>Production steps are aligned with the purity, compatibility, and handling requirements of each product family.</p></div></article>
              <article><span>02</span><div><h3>Analytical verification</h3><p>Grade-relevant testing supports batch release and technical review.</p></div></article>
              <article><span>03</span><div><h3>Export-ready supply</h3><p>Packaging, documentation, and logistics support global customer requirements.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.quality}`}>
        <div className={`${styles.shell} ${styles.qualityGrid}`}>
          <div className={styles.qualityCopy}><p className={styles.eyebrow}>Quality assurance</p><h2>Seven controlled stages</h2><p>Each batch follows a documented sequence from incoming materials through release and shipment.</p><div className={styles.testTags}><span>Identity</span><span>Purity</span><span>Water</span><span>Impurities</span><span>Documentation</span></div></div>
          <figure className={styles.qualityImage}><Image src="/images/lab-qc.jpg" alt="LANCHROM quality control laboratory" fill sizes="(max-width: 900px) 100vw, 58vw" /></figure>
          <ol className={styles.processFlow}>{qualitySteps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tint}`} id="packaging">
        <div className={styles.shell}>
          <div className={styles.splitHeading}><div><p className={styles.eyebrow}>Supply formats</p><h2>Packaging options</h2></div><p>Availability depends on product compatibility, grade, order volume, and destination market.</p></div>
          <figure className={styles.packagingImage}><Image src="/images/product-lines/lanchrom-packaging.jpg" alt="LANCHROM chemical packaging options" fill sizes="(max-width: 768px) 100vw, 1200px" /></figure>
          <div className={styles.packagingGrid}>{packaging.map((item) => <div key={`${item.size}-${item.note}`}><strong>{item.size}</strong><span>{item.note}</span></div>)}</div>
          <p className={styles.controlNote}>Container material and closure are selected according to product compatibility, purity, transport, and shelf-life requirements.</p>
        </div>
      </section>

      <section className={styles.section} id="documents">
        <div className={styles.shell}>
          <div className={styles.splitHeading}><div><p className={styles.eyebrow}>Product documentation</p><h2>Technical documents</h2></div><p>Download product-level reference files. Request the current market-specific SDS and batch-specific COA when qualifying or purchasing.</p></div>
          <div className={styles.documentGrid}>
            <article><FileText aria-hidden="true" /><p>Product information</p><h3>Technical Datasheet</h3><a href={documentLinks.tds} download>Download TDS <Download aria-hidden="true" /></a></article>
            <article><FileCheck2 aria-hidden="true" /><p>Batch release</p><h3>Certificate of Analysis</h3><Link href={`/downloads/coa?product=${encodeURIComponent(product.name)}`}>Request COA <ArrowRight aria-hidden="true" /></Link></article>
            <article><ShieldCheck aria-hidden="true" /><p>Safety information</p><h3>Safety Data Sheet</h3><Link href={`/downloads/sds?product=${encodeURIComponent(product.name)}`}>Request SDS <ArrowRight aria-hidden="true" /></Link></article>
            <article className={styles.controlledDocument}><FileCheck2 aria-hidden="true" /><p>Grade scope and test items</p><h3>Product Specification</h3><a href={documentLinks.specification} download>Download summary <Download aria-hidden="true" /></a></article>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className={`${styles.section} ${styles.related}`}>
          <div className={styles.shell}>
            <div className={styles.sectionHeading}><p className={styles.eyebrow}>Explore the portfolio</p><h2>Related products</h2></div>
            <div className={styles.relatedGrid}>{related.slice(0, 5).map((item) => <Link key={`${item.category}-${item.slug}`} href={productHref(item)}><span>Related product</span><h3>{item.name}</h3><p>{item.shortDescription}</p><ArrowRight aria-hidden="true" /></Link>)}</div>
          </div>
        </section>
      )}

      <section className={`${styles.section} ${styles.inquiry}`} id="inquiry">
        <div className={`${styles.shell} ${styles.inquiryGrid}`}>
          <div className={styles.inquiryCopy}>
            <div className={styles.inquiryHeading}><p className={styles.eyebrow}>One clear request form</p><h2>Sample, quote, or technical support</h2></div>
            <div className={styles.inquiryIntro}><p>Choose one request type, add your application details, and send everything from a single form.</p><div className={styles.inquiryPromise}><Check aria-hidden="true" /><span><strong>One business day</strong>Typical response time</span></div></div>
          </div>
          <ProductInquiryForm productName={product.name} gradeLabel={primaryGrade} gradeOptions={product.availableGrades} />
        </div>
      </section>
    </div>
  );
}
