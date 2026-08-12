// ============================================================
// LANCHROM™ — Global TypeScript Types
// ============================================================

// ── Product Types ──────────────────────────────────────────
export type ProductGrade =
  | "hplc" | "hplc-gradient" | "lcms" | "uplc" | "gc"
  | "spectroscopic" | "anhydrous" | "prep" | "pharma-usp"
  | "pharma-ep" | "electronic" | "food-grade" | "kosher-halal";

export type ProductCategory = string;

export interface ProductSpec {
  parameter: string;
  value: string;
  testMethod?: string;
}

export interface PackagingOption {
  volume: string;      // e.g. "1L"
  volumeMl: number;   // e.g. 1000
  container: "hdpe" | "amber-glass" | "fluoropolymer" | "ss-drum" | "flex-bag";
  minQty: number;
  available: boolean;
}

export interface Product {
  _id?: string;
  name: string;
  slug?: string;
  cas?: string;
  formula?: string;
  mw?: string;
  category: ProductCategory;
  /** Original category retained so previously published URLs keep resolving. */
  legacyCategory?: string;
  legacyCategories?: string[];
  legacySlugs?: string[];
  /** Additional catalog views in which this multi-grade product is listed. */
  catalogCategories?: string[];
  /** Customer-facing grade names shown on the consolidated product page. */
  availableGrades?: string[];
  grades?: ProductGrade[];
  shortDescription?: string;
  description?: string;
  specifications?: ProductSpec[];
  applications?: string[];
  packaging?: PackagingOption[];
  packSizes?: string[]; // simplified pack sizes when full PackagingOption isn't needed
  image?: string;
  images?: string[];
  featured?: boolean;
  coaAvailable?: boolean;
  tdsAvailable?: boolean;
  sdsAvailable?: boolean;
  coaStatus?: "available" | "request-only";
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[]; // one primary SEO phrase per product
  unNumber?: string;
  hazmatClass?: string;
  isHazmat?: boolean;
  ichClass?: string;
  pde?: string;
  physicalProperties?: Record<string, string>;
}

// ── Form Types ─────────────────────────────────────────────
export interface SampleRequestForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  productOfInterest: string;
  gradeRequired: string;
  packagingSize: string;
  samplePurpose: string;
  annualVolume: string;
  currentSupplier?: string;
  notes?: string;
  recaptchaToken: string;
  sourceProduct?: string;
  sourceUrl?: string;
}

export interface QuoteRequestForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  productOfInterest: string;
  gradeRequired: string;
  packagingSize: string;
  quantity: string;
  annualVolume: string;
  targetDelivery?: string;
  notes?: string;
  recaptchaToken: string;
  sourceProduct?: string;
  sourceUrl?: string;
}

export interface OEMQuoteForm {
  // Step 1 — Product
  product: string;
  grade: string;
  customSpec?: string;
  // Step 2 — Packaging
  bottleType: "hdpe" | "amber-glass" | "fluoropolymer" | "ss-drum" | "flex-bag";
  volumePerUnit: string;
  unitsPerOrder: number;
  // Step 3 — Label
  labelType: "your-brand" | "lanchrom" | "no-label";
  labelLanguage: string;
  // Step 4 — Documents
  coaHeader: "your-company" | "lanchrom";
  sdsFormat: string[];
  additionalDocs: string[];
  // Step 5 — Logistics
  destinationCountry: string;
  incoterms: "FOB" | "CIF" | "DDP" | "EXW";
  targetTimeline: string;
  // Step 6 — Contact
  company: string;
  email: string;
  firstName: string;
  lastName: string;
  recaptchaToken: string;
}

export interface DownloadForm {
  email: string;
  company: string;
  productSlug: string;
  fileType: "coa" | "tds" | "sds";
  recaptchaToken: string;
}

// ── HubSpot Types ──────────────────────────────────────────
export interface HubSpotContact {
  email: string;
  firstname: string;
  lastname: string;
  company: string;
  country: string;
  phone?: string;
  // Custom properties
  product_interest?: string;
  annual_purchase_volume?: string;
  sample_purpose?: string;
  industry?: string;
  inquiry_type?: string;
  source_product?: string;
  source_url?: string;
  current_supplier?: string;
}

export interface HubSpotDeal {
  dealname: string;
  pipeline: string;
  dealstage: string;
  amount?: number;
  closedate?: string;
  // Custom
  product_interest?: string;
  inquiry_notes?: string;
}

// ── FAQ Types ──────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ── Navigation Types ───────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  badge?: string;
  icon?: string;
}

// ── API Response Types ─────────────────────────────────────
export interface ApiResponse<T = void> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}
