import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import EditorialPageHero from "@/components/layout/EditorialPageHero";

export const metadata: Metadata = {
  title: "FAQ | LANCHROM™ — Solvent Grades, Shipping, Custom Packaging",
  description: "Answers to common questions about HPLC/LC-MS solvent grades, custom packaging, OEM services, shipping and hazmat classification, and quality documentation.",
  alternates: { canonical: "https://www.lanchrom.com/resources/faq" },
};

const FAQ_DATA = [
  {
    category: "Solvent Grades",
    items: [
      { q: "What's the difference between HPLC grade and LC-MS grade?", a: "HPLC grade controls UV transparency and gradient baseline stability — the requirements for routine liquid chromatography. LC-MS grade adds a second layer of control: metal ion content below 1 ppb and a verified MS blank test, because trace metals and organic residues that are invisible to a UV detector will still show up as background noise or adduct formation in a mass spectrometer." },
      { q: "Is UPLC solvent really different from HPLC solvent?", a: "The chemistry is identical — what changes is particulate filtration. UPLC systems use sub-2µm column particles and correspondingly narrow frits, so even particles that wouldn't bother a standard HPLC column can cause backpressure spikes or frit clogging. UPLC grade solvents are filtered to 0.1µm rather than the 0.2µm typical of standard HPLC grade." },
      { q: "What does \"electronic grade\" actually mean?", a: "It means the solvent meets SEMI specifications for semiconductor manufacturing — sub-ppb trace metal content (verified by ICP-MS), particle counts below 5 per mL at 0.2µm, and no detectable dissolved gas or heat-sensitive residue. This is a different impurity profile than pharmaceutical grade, which focuses more on organic impurities and water content." },
      { q: "Why does ICH Q3C classification matter for my solvent choice?", a: "ICH Q3C sorts solvents into three classes by toxicity: Class 1 (avoid entirely), Class 2 (limited use, strict residual limits), and Class 3 (low toxicity, generous limits — acetone, ethanol, IPA fall here). If you're manufacturing a drug product, your synthetic route's solvent choice directly affects your residual solvent testing burden and regulatory filing complexity." },
    ],
  },
  {
    category: "Packaging & Ordering",
    items: [
      { q: "What's your minimum order quantity?", a: "It depends on format. Standard lab-pack sizes (100mL–4L) have no minimum — order a single bottle to qualify a product. Bulk drums start at one 200L unit. Custom reagent kits require a minimum of 10 kits. Private-label packaging requires 50 units per SKU." },
      { q: "Can I get a sample before committing to a bulk order?", a: "Yes — this is the normal way to start. Most customers request 500mL to 2L of a product, run it through their method, and only place a bulk order once it's qualified. Samples ship with the same CoA and SDS as a full order." },
      { q: "Do you offer private label / OEM packaging?", a: "Yes, from 50 units per SKU. You choose the bottle type, your label design and language, whether the CoA carries your company name or ours, and which compliance documents to include. Use the OEM Quote Calculator to configure an order — we don't display pricing online, so a member of our team will follow up with a detailed quote." },
      { q: "How long does a custom reagent kit take to put together?", a: "2–3 weeks for a first-time kit design, since we need to source and verify each component together. Reorders of an established kit configuration ship in the same timeframe as standard bulk orders." },
    ],
  },
  {
    category: "Shipping & Compliance",
    items: [
      { q: "Which of your products are non-hazmat?", a: "Glycerol, propylene glycol, DMSO, PEG series, mannitol, polysorbate, and most food-grade acids (citric, tartaric, malic, succinic) ship without any DG declaration — this is usually the fastest and cheapest part of an order to clear customs. Solvents like acetonitrile, IPA, ethanol, hexane, and THF are Class 3 flammable liquids and do require hazmat handling." },
      { q: "Do you ship to Southeast Asia and the Middle East?", a: "Yes — these are core markets for us, alongside India. We work with freight forwarders experienced in DG sea freight to these regions and can advise on the typical customs documentation your country requires." },
      { q: "What documentation comes with every order?", a: "A batch-specific Certificate of Analysis with actual test results, and a current Safety Data Sheet in GHS format. ICH Q3C residual solvent documentation, kosher/halal certificates, and GMP compliance statements are available on request — use the Download CoA or Download TDS buttons on any product page." },
    ],
  },
  {
    category: "Fermentation & Mobile Phase",
    items: [
      { q: "What's the advantage of pre-made mobile phase over preparing it in-house?", a: "Consistency and time. Mobile phase prepared in-house varies slightly batch to batch depending on who made it and how carefully it was filtered and degassed — which can shift retention times in a method that's supposed to be reproducible. Our flex-bag mobile phase is pre-filtered to 0.2µm, pH-verified, and nitrogen-sealed, so every bag is identical and ready to connect directly to your pump." },
      { q: "Which HPLC columns is your organic acid mobile phase compatible with?", a: "It's formulated for ion-exclusion columns commonly used in fermentation analysis — Aminex HPX-87H, Bio-Rad's fermentation monitoring columns, Shodex SH-1011, and Rezex ROA-Organic. If you're using a different column, tell us the brand and we can verify compatibility or formulate a variant." },
      { q: "Can you formulate a custom mobile phase for a specific fermentation process?", a: "Yes. If your QC method targets a specific set of analytes not covered by our standard organic acid mobile phase, describe your method (column, detector, target compounds) and we'll quote a custom formulation." },
    ],
  },
  {
    category: "LC-MS Solvent Background & Qualification",
    items: [
      { q: "What does an LC-MS Q1 solvent scan tell me?", a: "A Q1 full scan shows ions detected while the solvent blank is introduced under a defined source and acquisition method. It can reveal persistent background ions, clusters, extractables, and other signals that may raise chemical noise or form adducts. The result is most useful when the supplier lot, reference solvent, system blank, source settings, and intensity scale are documented together." },
      { q: "Does a cleaner-looking Q1 scan prove that a solvent is LC-MS grade?", a: "No. A sparse scan is useful screening evidence, but a solvent grade should be supported by a complete specification and batch CoA covering the parameters relevant to the method, such as water, residue, UV absorbance, trace metals, and MS background. Final suitability must be confirmed in the customer's instrument and mobile-phase composition." },
      { q: "How should I compare HPLC-grade methanol or acetonitrile blanks?", a: "Use the same instrument, source settings, tubing, additives, flow rate, acquisition window, and displayed axis scale. Start with a system blank, then compare equal volumes of each solvent lot. Look beyond the maximum peak: compare the number and location of persistent ions, the high-mass background, baseline stability, and whether any signal overlaps the analyte or internal standard." },
      { q: "Are LANCHROM solvent scan results batch-specific?", a: "Yes. The published comparison is an internal screening example for the displayed samples and conditions, not a universal performance guarantee. Request the current lot CoA and, when required, a representative sample so your laboratory can run its own solvent blank and method suitability test before routine use." },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      <EditorialPageHero
        eyebrow="Resources"
        title="Frequently Asked Questions"
        description="Common questions about solvent grades, packaging, shipping, and our fermentation analysis solutions."
      />
      <FAQClient sections={FAQ_DATA} />
    </div>
  );
}
