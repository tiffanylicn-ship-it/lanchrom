import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Download, FileCheck2, FileText, FlaskConical, ShieldCheck } from "lucide-react";
import SectionBreadcrumb from "@/components/layout/SectionBreadcrumb";
import ProductInquiryForm from "./ProductInquiryForm";
import styles from "./product-page.module.css";

export const metadata: Metadata = {
  title: "Electronic Grade IPA | High Purity Isopropanol Manufacturer | LANCHROM™",
  description: "LANCHROM Electronic Grade IPA provides high-purity isopropanol for semiconductor cleaning, CMP, advanced packaging, and precision electronics manufacturing.",
  keywords: ["Electronic Grade IPA"],
  alternates: { canonical: "https://www.lanchrom.com/products/electronic-grade-ipa" },
  openGraph: {
    title: "Electronic Grade IPA | LANCHROM™",
    description: "High-purity isopropanol for semiconductor and precision cleaning applications.",
    url: "https://www.lanchrom.com/products/electronic-grade-ipa",
    type: "website",
    images: [{ url: "/images/product-pages/electronic-grade-ipa/og.png", width: 1728, height: 909, alt: "LANCHROM Electronic Grade IPA for semiconductor cleaning" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electronic Grade IPA | LANCHROM™",
    description: "High-purity isopropanol for semiconductor and precision cleaning applications.",
    images: ["/images/product-pages/electronic-grade-ipa/og.png"],
  },
};

const metrics = [
  { value: "≥99.99%", label: "Purity", note: "High-purity solvent" },
  { value: "Controlled", label: "Water content", note: "Process monitored" },
  { value: "ppb level", label: "Metal impurities", note: "Trace-metal control" },
  { value: "Advanced", label: "Particle control", note: "Clean handling" },
];

const specificationRows = [
  ["Appearance", "Clear, colorless liquid"],
  ["Purity", "≥99.99%"],
  ["Water", "Controlled"],
  ["Residue after evaporation", "Controlled"],
  ["Metal ions", "ppb-level control"],
];

const applications = [
  { number: "01", title: "Wafer cleaning", text: "Fast-drying precision cleaning for critical wafer surfaces." },
  { number: "02", title: "CMP process", text: "Controlled solvent performance for process support and cleaning." },
  { number: "03", title: "Advanced packaging", text: "Clean handling for high-density semiconductor assembly." },
  { number: "04", title: "Electronics manufacturing", text: "Reliable cleaning across precision electronics production." },
];

const qualitySteps = ["Raw materials", "Purification", "Filtration", "Sampling", "Testing", "Packaging", "Shipment"];

const relatedProducts = [
  { name: "Electronic Grade Ethanol", description: "Precision cleaning solvent", href: "/contact?type=quote&product=electronic-grade-ethanol" },
  { name: "PGMEA", description: "Photoresist process solvent", href: "/products/pharma-grade/pgmea-propylene-glycol-methyl-ether-acetate" },
  { name: "NMP", description: "Materials processing solvent", href: "/products/pharma-grade/nmp-n-methyl-2-pyrrolidone" },
  { name: "HPLC Grade IPA", description: "Chromatography solvent", href: "/products/hplc-solvents/ipa" },
  { name: "High Purity Acetone", description: "Cleaning and laboratory use", href: "/products/gc-solvents/gc-grade-acetone" },
];

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "LANCHROM Electronic Grade IPA",
  description: "High-purity isopropanol for semiconductor cleaning, CMP, advanced packaging, and precision electronics manufacturing.",
  brand: { "@type": "Brand", name: "LANCHROM" },
  manufacturer: { "@type": "Organization", name: "Zhejiang LANJING Chemical Materials Co., Ltd." },
  category: "Electronic Grade Solvent",
  material: "Isopropanol",
  image: "https://www.lanchrom.com/images/product-pages/electronic-grade-ipa/hero.jpg",
  url: "https://www.lanchrom.com/products/electronic-grade-ipa",
};

export default function ElectronicGradeIPAPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <SectionBreadcrumb theme="electronic" items={[
        { label: "Products", href: "/products" },
        { label: "Electronic Chemicals", href: "/products/pharmaceutical-grade-solvents/electronic-grade" },
        { label: "Electronic Grade IPA" },
      ]} />

      <section className={styles.hero}>
        <Image
          src="/images/product-pages/electronic-grade-ipa/hero.jpg"
          alt="High-purity IPA container in a semiconductor cleanroom"
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={`${styles.shell} ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <div className={styles.badges}><span>Semiconductor grade</span><span>High purity solvent</span></div>
            <p className={styles.eyebrow}>LANCHROM™ Electronic Chemicals</p>
            <h1>Electronic Grade IPA</h1>
            <p className={styles.heroDescription}>Ultra high purity isopropanol for semiconductor and precision cleaning applications.</p>
            <p className={styles.heroMeta}><span>CAS 67-63-0</span><span>C₃H₈O</span><span>Purity ≥99.99%</span></p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="#inquiry">Get free sample <FlaskConical aria-hidden="true" /></Link>
              <Link className={styles.secondaryButton} href="#inquiry">Request quote <ArrowRight aria-hidden="true" /></Link>
              <a className={styles.heroDocumentLink} href="/documents/products/hplc-grade-solvents/ipa/LANCHROM-ipa-TDS.pdf" download>Download TDS <Download aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className={`${styles.shell} ${styles.heroProof}`}>
          <div><strong>Direct</strong><span>Manufacturer supply</span></div>
          <div><strong>Batch</strong><span>Document traceability</span></div>
          <div><strong>Global</strong><span>Export support</span></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.overview}`} id="overview">
        <div className={`${styles.shell} ${styles.overviewGrid}`}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Product 01 / Electronic chemicals</p>
            <h2>Product overview</h2>
            <p>LANCHROM™ Electronic Grade IPA is a high-purity isopropanol developed for semiconductor manufacturing and advanced cleaning applications.</p>
            <p>Optimized purification and controlled production support excellent drying performance, low residue characteristics, and consistent impurity control.</p>
          </div>
          <aside className={styles.infoCard} aria-label="Product identity">
            <p>Product identity</p>
            <dl>
              <div><dt>Chemical name</dt><dd>Isopropanol</dd></div>
              <div><dt>CAS</dt><dd>67-63-0</dd></div>
              <div><dt>Formula</dt><dd>C₃H₈O</dd></div>
              <div><dt>Grade</dt><dd>Electronic Grade</dd></div>
              <div><dt>Application</dt><dd>Semiconductor cleaning</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tint}`} id="specifications">
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div><p className={styles.eyebrow}>Technical confidence</p><h2>Key specifications</h2></div>
            <p>Designed around the impurity controls that matter most in precision manufacturing.</p>
          </div>
          <div className={styles.metricGrid}>
            {metrics.map((metric, index) => (
              <article className={styles.metricCard} key={metric.label}>
                <span>0{index + 1}</span><strong>{metric.value}</strong><h3>{metric.label}</h3><p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className={styles.specificationTable}>
            <div className={styles.tableHeading}><h3>Typical specification</h3><span>Representative values</span></div>
            <div className={styles.tableScroll}>
              <table><thead><tr><th>Parameter</th><th>Specification</th></tr></thead><tbody>
                {specificationRows.map(([parameter, value]) => <tr key={parameter}><td>{parameter}</td><td>{value}</td></tr>)}
              </tbody></table>
            </div>
            <p className={styles.controlNote}>Final values must be confirmed in the approved grade-specific specification and batch COA.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="applications">
        <div className={styles.shell}>
          <div className={styles.splitHeading}>
            <div><p className={styles.eyebrow}>Where performance matters</p><h2>Applications</h2></div>
            <p>From wafer surfaces to advanced packaging, controlled solvent quality supports process consistency.</p>
          </div>
          <figure className={styles.applicationImage}>
            <Image src="/images/product-pages/electronic-grade-ipa/applications.jpg" alt="Wafer cleaning, CMP, advanced packaging and electronics manufacturing" fill sizes="(max-width: 768px) 100vw, 1200px" />
          </figure>
          <div className={styles.applicationGrid}>
            {applications.map((application) => <article key={application.title}><span>{application.number}</span><h3>{application.title}</h3><p>{application.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`} id="manufacturing">
        <div className={`${styles.shell} ${styles.manufacturingGrid}`}>
          <figure className={styles.manufacturingImage}><Image src="/images/product-pages/electronic-grade-ipa/manufacturing.jpg" alt="High-purity solvent purification facility" fill sizes="(max-width: 900px) 100vw, 54vw" /></figure>
          <div className={styles.manufacturingCopy}>
            <p className={styles.eyebrow}>Manufacturer advantage</p><h2>Built around process control</h2>
            <p className={styles.lede}>Production capability and documented controls support stable supply—not just product availability.</p>
            <div className={styles.advantageList}>
              <article><span>01</span><div><h3>Advanced purification</h3><p>Multi-stage processes are designed to remove trace impurities and improve solvent consistency.</p></div></article>
              <article><span>02</span><div><h3>Process control</h3><p>A controlled manufacturing environment supports stable batch performance.</p></div></article>
              <article><span>03</span><div><h3>Quality traceability</h3><p>Batch documentation and quality records support technical review and customer requirements.</p></div></article>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.quality}`} id="quality">
        <div className={`${styles.shell} ${styles.qualityGrid}`}>
          <div className={styles.qualityCopy}><p className={styles.eyebrow}>Quality assurance</p><h2>Seven controlled stages</h2><p>Each batch moves through a documented sequence from incoming materials to export shipment.</p><div className={styles.testTags}><span>GC</span><span>Karl Fischer</span><span>ICP-MS</span><span>Particle analysis</span><span>UV analysis</span></div></div>
          <figure className={styles.qualityImage}><Image src="/images/product-pages/electronic-grade-ipa/quality-control.jpg" alt="Chemist testing high-purity solvent in an analytical laboratory" fill sizes="(max-width: 900px) 100vw, 58vw" /></figure>
          <ol className={styles.processFlow}>{qualitySteps.map((step, index) => <li key={step}><span>{index + 1}</span>{step}</li>)}</ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.tint}`} id="packaging">
        <div className={styles.shell}>
          <div className={styles.splitHeading}><div><p className={styles.eyebrow}>Supply formats</p><h2>Packaging options</h2></div><p>Laboratory quantities through manufacturing-scale supply, with controlled packaging selection.</p></div>
          <figure className={styles.packagingImage}><Image src="/images/product-pages/electronic-grade-ipa/packaging.jpg" alt="Chemical packaging lineup from laboratory bottles to IBC tank" fill sizes="(max-width: 768px) 100vw, 1200px" /></figure>
          <div className={styles.packagingGrid}>{["500 mL", "1 L", "2.5 L", "5 L", "20 L", "IBC"].map((size, index) => <div key={size}><strong>{size}</strong><span>{index < 3 ? "Laboratory" : index < 5 ? "Production" : "Bulk supply"}</span></div>)}</div>
          <p className={styles.controlNote}>Container material and closure are qualified according to product compatibility, purity, transport, and shelf-life requirements.</p>
        </div>
      </section>

      <section className={styles.section} id="documents">
        <div className={styles.shell}>
          <div className={styles.splitHeading}><div><p className={styles.eyebrow}>Product documentation</p><h2>Technical documents</h2></div><p>Download the consolidated IPA reference files. Request the current market-specific SDS and batch-specific COA when qualifying or purchasing.</p></div>
          <div className={styles.documentGrid}>
            <article><FileText aria-hidden="true" /><p>Product information</p><h3>Technical Datasheet</h3><a href="/documents/products/hplc-grade-solvents/ipa/LANCHROM-ipa-TDS.pdf" download>Download TDS <Download aria-hidden="true" /></a></article>
            <article><FileCheck2 aria-hidden="true" /><p>Batch release</p><h3>Certificate of Analysis</h3><Link href="/downloads/coa?product=Electronic%20Grade%20IPA">Request COA <ArrowRight aria-hidden="true" /></Link></article>
            <article><ShieldCheck aria-hidden="true" /><p>Market-specific safety</p><h3>Safety Data Sheet</h3><Link href="/downloads/sds?product=Electronic%20Grade%20IPA">Request SDS <ArrowRight aria-hidden="true" /></Link></article>
            <article className={styles.controlledDocument}><FileCheck2 aria-hidden="true" /><p>Grade scope and test items</p><h3>Product Specification</h3><a href="/documents/products/hplc-grade-solvents/ipa/LANCHROM-ipa-Specification.pdf" download>Download summary <Download aria-hidden="true" /></a></article>
          </div>
          <p className={styles.documentNote}>Reference PDFs consolidate the available IPA grade and package scope. Final release values are governed by the approved grade specification and batch COA.</p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.related}`} id="related-products">
        <div className={styles.shell}>
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Explore the portfolio</p><h2>Related products</h2></div>
          <div className={styles.relatedGrid}>{relatedProducts.map((product) => <Link key={product.name} href={product.href}><span>Related product</span><h3>{product.name}</h3><p>{product.description}</p><ArrowRight aria-hidden="true" /></Link>)}</div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.inquiry}`} id="inquiry">
        <div className={`${styles.shell} ${styles.inquiryGrid}`}>
          <div className={styles.inquiryCopy}>
            <div className={styles.inquiryHeading}>
              <p className={styles.eyebrow}>One clear request form</p>
              <h2>Sample, quote, or technical support</h2>
            </div>
            <div className={styles.inquiryIntro}>
              <p>Choose one request type, add your application details, and send everything from a single form.</p>
              <div className={styles.inquiryPromise}><Check aria-hidden="true" /><span><strong>One business day</strong>Typical response time</span></div>
            </div>
          </div>
          <ProductInquiryForm />
        </div>
      </section>
    </div>
  );
}
