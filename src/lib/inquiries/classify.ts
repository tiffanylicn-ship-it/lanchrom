type InquiryInput = {
  productOfInterest?: string;
  gradeRequired?: string;
  packagingSize?: string;
  quantity?: string;
  annualVolume?: string;
  country?: string;
  samplePurpose?: string;
  notes?: string;
};

export type InquiryClassification = {
  priority: "HIGH" | "NORMAL";
  productCategory: string;
  region: string;
  tags: string[];
};

function normalize(input: InquiryInput) {
  return [
    input.productOfInterest,
    input.gradeRequired,
    input.packagingSize,
    input.quantity,
    input.annualVolume,
    input.country,
    input.samplePurpose,
    input.notes,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function detectProductCategory(text: string) {
  if (/lc-?ms|mass spectrom/.test(text)) return "LC-MS";
  if (/hplc|chromatograph|gradient/.test(text)) return "HPLC";
  if (/\bgc\b|gas chromatograph/.test(text)) return "GC";
  if (/electronic|semiconductor|wafer|pgmea|pgme/.test(text)) return "ELECTRONIC";
  if (/pharma|usp|ep grade|excipient/.test(text)) return "PHARMA";
  if (/nmr|deuterated|spectroscop/.test(text)) return "NMR";
  if (/standard solution|reference standard|titration/.test(text)) return "STANDARDS";
  if (/oem|private label|custom label/.test(text)) return "OEM";
  return "GENERAL";
}

function detectRegion(country = "") {
  const value = country.trim().toLowerCase();
  if (["india", "vietnam", "thailand", "malaysia", "indonesia", "south korea", "japan"].includes(value)) {
    return "ASIA";
  }
  if (["united states", "canada", "mexico"].includes(value)) return "NORTH-AMERICA";
  if (["germany", "united kingdom", "france", "netherlands", "switzerland"].includes(value)) {
    return "EUROPE";
  }
  if (["uae", "saudi arabia"].includes(value)) return "MIDDLE-EAST";
  if (value === "australia") return "OCEANIA";
  return value ? value.toUpperCase().replace(/\s+/g, "-") : "GLOBAL";
}

export function classifyInquiry(input: InquiryInput): InquiryClassification {
  const text = normalize(input);
  const annualVolume = input.annualVolume || "";
  const highValue =
    annualVolume.includes("$50,000") ||
    annualVolume.includes("> $200,000") ||
    /\b(200l|ibc|drum|bulk|container load)\b/.test(text);

  const productCategory = detectProductCategory(text);
  const region = detectRegion(input.country);
  const tags = [productCategory, region];

  if (/oem|private label|custom label/.test(text)) tags.push("OEM");
  if (/distributor|agent|distribution/.test(text)) tags.push("DISTRIBUTOR");
  if (highValue) tags.push("HIGH-VALUE");

  return {
    priority: highValue ? "HIGH" : "NORMAL",
    productCategory,
    region,
    tags: Array.from(new Set(tags)),
  };
}
