import type { Metadata } from "next";
import Link from "next/link";
import { getGuideInfo } from "@/data/guides";
import { GH2, GP, GList, GCallout, GTable, GProductLinks, GuideTOC } from "@/components/guides/GuideComponents";

const info = getGuideInfo("karl-fischer-moisture-analysis-guide")!;
export const metadata: Metadata = { title: `${info.title} | LANCHROM™`, description: info.seoDescription, alternates: { canonical: "https://www.lanchrom.com/guides/karl-fischer-moisture-analysis-guide" } };

const TOC = [
  { id: "what-is-kf", label: "What Is Karl Fischer Titration?" },
  { id: "volumetric-vs-coulometric", label: "Volumetric vs Coulometric" },
  { id: "one-vs-two-component", label: "One-Component vs Two-Component Reagents" },
  { id: "sample-preparation", label: "Sample Preparation & Introduction" },
  { id: "reagent-selection", label: "Matching Reagent to Sample" },
  { id: "calibration-verification", label: "Calibration & Verification" },
  { id: "troubleshooting", label: "Troubleshooting Common Problems" },
  { id: "maintenance", label: "Titrator Maintenance & Best Practices" },
  { id: "pharmacopeial", label: "Pharmacopeial Requirements" },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]"><Link href="/guides" className="hover:text-[#3C6E71]">Guides</Link> {" › "} <span className="text-[#5C5A55]">{info.h1}</span></div></div>
      <section className="py-12 border-b border-[#E6E3DD] bg-[#FBFAF8]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="tag-line mb-3">{info.readingTime}</p><h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">{info.h1}</h1><p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.excerpt}</p></div></section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[240px_1fr] gap-10">
        <GuideTOC items={TOC} />
        <article className="min-w-0">
          <GP>Karl Fischer titration is the standard method for determining water content in a wide range of materials — from pharmaceutical raw materials and solvents to petroleum products, food ingredients, and battery electrolytes. It's specific to water (unlike loss-on-drying, which measures all volatiles), sensitive to the ppm level, and applicable to solids, liquids, and gases. This guide covers everything a practicing analyst needs to run reliable KF determinations: method selection, reagent choice, sample handling, calibration, and troubleshooting.</GP>

          <GH2 id="what-is-kf">What Is Karl Fischer Titration?</GH2>
          <GP>Karl Fischer titration is a chemical titration that exploits the stoichiometric reaction between water and a reagent system containing iodine, sulfur dioxide, a base, and an alcohol solvent. Water reacts with iodine on a 1:1 molar basis — one mole of water consumes one mole of iodine — and the endpoint is detected electrochemically (biamperometric detection) when free iodine appears in solution, indicating that all available water has been consumed. The amount of iodine consumed, measured either by volume of reagent delivered (volumetric) or by electrochemical generation of iodine (coulometric), is directly proportional to the water content of the sample.</GP>

          <GH2 id="volumetric-vs-coulometric">Volumetric vs Coulometric</GH2>
          <GTable headers={["Parameter", "Volumetric KF", "Coulometric KF"]} rows={[
            ["Water range", "100 ppm to 100% (0.01% to 100%)", "1 ppm to 5% (0.0001% to 5%)"],
            ["Iodine source", "Added as liquid reagent from a burette", "Generated electrochemically in situ"],
            ["Typical samples", "Solvents, APIs, excipients, oils", "Anhydrous solvents, gases, battery electrolytes"],
            ["Precision", "Good (±0.1% at higher levels)", "Excellent (±1 ppm at low levels)"],
            ["Consumable cost", "Lower per test", "Higher per test (electrode solution)"],
          ]} />
          <GCallout title="Note">Rule of thumb: if expected water content is above 100 ppm (0.01%), use volumetric. If below 100 ppm, use coulometric. In the 50-200 ppm overlap zone, either works — coulometric gives better precision, volumetric is faster.</GCallout>

          <GH2 id="one-vs-two-component">One-Component vs Two-Component Reagents</GH2>
          <GP>One-component (composite) reagents contain all reactive components — iodine, SO₂, base, and solvent — in a single bottle. They're simpler to use (one bottle to manage) and adequate for most routine applications. Two-component systems separate the solvent from the titrant, providing better stability (longer shelf life once opened) and the ability to customize the solvent for difficult matrices — oils, ketones, aldehydes — that interfere with the standard reagent chemistry.</GP>
          <GP>For most pharmaceutical and chemical QC applications, a one-component volumetric reagent is the standard choice. Switch to a two-component system when analyzing ketones or aldehydes (which undergo side reactions with the standard methanol-based solvent), when analyzing very viscous samples that need a specialized dissolving medium, or when the titrator sits idle for extended periods and reagent stability becomes important.</GP>

          <GH2 id="sample-preparation">Sample Preparation & Introduction</GH2>
          <GP>The single most common source of KF error is moisture pickup during sample handling. Atmospheric moisture condenses on cool surfaces, absorbs into hygroscopic materials, and transfers from improperly dried glassware — all at levels that are significant relative to the measurement. Sample preparation for KF must minimize every opportunity for the sample to contact atmospheric moisture between weighing and introduction into the titration vessel.</GP>
          <GList items={[
            "Weigh samples quickly in tared, pre-dried containers — minimize open-air exposure",
            "Use a syringe with a needle to inject liquid samples through the titration vessel septum",
            "For solids: dissolve in a dry co-solvent (KF-grade methanol) before injection, or use a direct-heating oven accessory",
            "For hygroscopic materials: weigh in a glove bag or dry box if available",
            "Always run a drift check before starting — the titrator should show a stable, low moisture drift (<10 µg/min) before sample introduction",
          ]} />

          <GH2 id="reagent-selection">Matching Reagent to Sample</GH2>
          <GTable headers={["Sample Type", "Recommended Reagent System", "Notes"]} rows={[
            ["Solvents (methanol, acetone, etc.)", "Standard one-component", "Direct injection, no preparation needed"],
            ["Pharmaceutical APIs/excipients", "Standard one-component", "Dissolve in KF-grade methanol first"],
            ["Oils and fats", "Two-component with chloroform co-solvent", "Improve dissolution, prevent emulsion"],
            ["Ketones and aldehydes", "Two-component with ketone-free solvent", "Standard reagent gives high results due to side reactions"],
            ["Battery electrolytes (anhydrous)", "Coulometric with specialized anolyte", "Ultra-low water; use coulometric method"],
          ]} />

          <GH2 id="calibration-verification">Calibration & Verification</GH2>
          <GP>KF titrators are calibrated (or more precisely, the reagent titer is determined) using a certified water standard — a material with a known, precisely certified water content. The most common standard is a methanol-based solution certified at 1.0 mg/g (1000 ppm) or 10.0 mg/g (10000 ppm) water content, traceable to a national metrology standard. Titer determination should be performed at least daily, or each time a new bottle of reagent is opened.</GP>
          <GP>In regulated environments (GMP, ISO 17025), the titer determination result itself is a controlled measurement — it must fall within an acceptable range of the expected value (typically ±5% of nominal), and the %RSD of replicate determinations must meet a defined criterion (typically ≤0.5%). If either criterion fails, the reagent should not be used until the root cause is identified.</GP>

          <GH2 id="troubleshooting">Troubleshooting Common Problems</GH2>
          <GTable headers={["Problem", "Likely Cause", "Solution"]} rows={[
            ["High drift that won't stabilize", "Moisture leaking into the titration vessel", "Check septum, desiccant tubes, and all joints"],
            ["Titer drifting over days", "Reagent degradation from moisture absorption", "Replace reagent, check bottle seal"],
            ["Erratic results, poor precision", "Inconsistent sample introduction", "Standardize injection technique, check syringe"],
            ["Results too high for ketone samples", "Side reaction with methanol", "Switch to ketone-free two-component reagent"],
            ["Endpoint never reached", "Sample contains a strong reducing agent", "Consult reagent manufacturer for alternative chemistry"],
          ]} />

          <GH2 id="maintenance">Titrator Maintenance & Best Practices</GH2>
          <GList items={[
            "Replace the molecular sieve desiccant in the drying tube regularly — a saturated desiccant provides no moisture protection",
            "Clean the electrode with KF-grade methanol between different sample types",
            "Replace the vessel septum when it shows visible needle marks — each puncture is a potential leak path",
            "Perform a blank determination (solvent only, no sample) at the start of each day to verify system baseline",
            "Record the daily drift rate — an increasing trend over time indicates a developing leak in the system",
          ]} />

          <GH2 id="pharmacopeial">Pharmacopeial Requirements</GH2>
          <GP>USP &lt;921&gt; and EP 2.5.12 both describe Karl Fischer titration as the standard method for water determination in pharmaceutical materials. Both monographs specify that the reagent system and titration conditions must be validated for the specific material being tested — a requirement that reflects the reality that different matrices (APIs, excipients, formulated products) can behave very differently in the KF reaction, and a method that works for one material may give inaccurate results for another without re-validation.</GP>

          <GProductLinks categories={["karl-fischer", "anhydrous-solvents"]} />
        </article>
      </div>
    </div>
  );
}
