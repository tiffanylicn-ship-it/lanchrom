import type { Metadata } from "next";
import Link from "next/link";
import { getGuideInfo } from "@/data/guides";
import { GH2, GP, GList, GCallout, GTable, GProductLinks, GuideTOC } from "@/components/guides/GuideComponents";

const info = getGuideInfo("spe-sample-preparation-guide")!;
export const metadata: Metadata = { title: `${info.title} | LANCHROM™`, description: info.seoDescription, alternates: { canonical: "https://www.lanchrom.com/guides/spe-sample-preparation-guide" } };

const TOC = [
  { id: "what-is-spe", label: "What SPE Does and Why" },
  { id: "sorbent-chemistry", label: "Sorbent Chemistry Overview" },
  { id: "choosing-sorbent", label: "Choosing the Right Sorbent" },
  { id: "cartridge-format", label: "Cartridge Format & Sizing" },
  { id: "four-step-procedure", label: "The 4-Step SPE Procedure" },
  { id: "method-development", label: "Method Development Strategy" },
  { id: "quecers", label: "QuEChERS: Dispersive SPE for Food Safety" },
  { id: "troubleshooting", label: "Troubleshooting SPE Problems" },
  { id: "solvents-for-spe", label: "Choosing Solvents for SPE" },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]"><Link href="/guides" className="hover:text-[#3C6E71]">Guides</Link> {" › "} <span className="text-[#5C5A55]">{info.h1}</span></div></div>
      <section className="py-12 border-b border-[#E6E3DD] bg-[#FBFAF8]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="tag-line mb-3">{info.readingTime}</p><h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">{info.h1}</h1><p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.excerpt}</p></div></section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[240px_1fr] gap-10">
        <GuideTOC items={TOC} />
        <article className="min-w-0">
          <GP>Solid Phase Extraction (SPE) is the most widely used sample preparation technique in analytical chemistry — it concentrates target analytes, removes matrix interferences, and converts the sample into a solvent compatible with the downstream analytical method, all in a single workflow that takes minutes rather than the hours required by older liquid-liquid extraction methods. This guide covers sorbent selection, method development, and troubleshooting for the sorbent types and applications most relevant to pharmaceutical, food safety, and environmental testing.</GP>

          <GH2 id="what-is-spe">What SPE Does and Why</GH2>
          <GP>SPE works by selectively retaining target analytes (or selectively retaining matrix interferences) on a solid sorbent packed in a cartridge, while the sample matrix passes through. The retained compounds are then eluted with a small volume of a stronger solvent, producing a concentrated, clean extract ready for chromatographic analysis. The three main purposes of SPE are: cleanup (removing matrix components that interfere with detection), concentration (increasing analyte concentration from a dilute sample to a detectable level), and solvent exchange (converting the sample from one solvent to another that's compatible with the analytical method).</GP>

          <GH2 id="sorbent-chemistry">Sorbent Chemistry Overview</GH2>
          <GTable headers={["Sorbent Type", "Chemistry", "Retains", "Primary Applications"]} rows={[
            ["C18 (ODS)", "Octadecyl bonded silica", "Non-polar to moderately polar compounds", "Drug analysis, environmental organics"],
            ["C8", "Octyl bonded silica", "Similar to C18, weaker retention", "Mid-polarity compounds, faster elution"],
            ["HLB", "Polymeric (hydrophilic-lipophilic balance)", "Broad polarity range", "Multi-residue methods, general-purpose"],
            ["SAX", "Quaternary amine (strong anion exchange)", "Acidic compounds (anions)", "Organic acids, phospholipid removal"],
            ["SCX", "Sulfonic acid (strong cation exchange)", "Basic compounds (cations)", "Basic drugs, amines"],
            ["MAX", "Mixed-mode (HLB + anion exchange)", "Acidic analytes from complex matrices", "Acidic pesticides, metabolites"],
            ["MCX", "Mixed-mode (HLB + cation exchange)", "Basic analytes from complex matrices", "Basic drugs in biological fluids"],
            ["NH₂", "Amino bonded silica", "Polar, weakly basic", "Sugars, organic acids, lipid classes"],
            ["PSA (primary-secondary amine)", "Amine-functionalized", "Fatty acids, sugars, pigments", "QuEChERS cleanup"],
          ]} />

          <GH2 id="choosing-sorbent">Choosing the Right Sorbent</GH2>
          <GP>Sorbent selection follows a logical decision tree based on two questions: what is your analyte's chemistry (polarity, charge state at the loading pH), and what do you want the SPE to accomplish (retain the analyte and elute matrix, or retain the matrix and let the analyte pass through)?</GP>
          <GList items={[
            "Non-polar to moderately polar analytes from aqueous samples → C18 or HLB",
            "Broad polarity range, multi-analyte methods → HLB (polymeric, wider range than C18)",
            "Acidic analytes from complex biological matrices → MAX (mixed-mode anion)",
            "Basic drugs from plasma, urine, or blood → MCX (mixed-mode cation)",
            "QuEChERS pesticide residue methods → PSA/C18/GCB dispersive SPE",
            "Mycotoxin analysis → immunoaffinity columns (antibody-based, highly selective)",
          ]} />

          <GH2 id="cartridge-format">Cartridge Format & Sizing</GH2>
          <GP>SPE cartridges come in various formats (tubes, 96-well plates, disk-format, dispersive) and sorbent masses (30mg to 10g). The sorbent mass determines the cartridge's loading capacity — how much analyte (and matrix) it can retain before the most weakly retained components begin to break through. As a starting point, use a sorbent mass of approximately 20× the expected total mass of analyte plus retained matrix components. For most analytical applications, 100-500mg cartridges are standard; for trace-level environmental water analysis, 200mg-1g cartridges handle the larger sample volumes required.</GP>

          <GH2 id="four-step-procedure">The 4-Step SPE Procedure</GH2>
          <GP>Regardless of sorbent chemistry, most SPE methods follow the same four-step sequence: condition, load, wash, elute. Each step has a specific purpose, and skipping or under-optimizing any step degrades the final result.</GP>
          <GList items={[
            "Condition — wet the sorbent with a strong solvent (methanol for C18/HLB), then equilibrate with a solvent matching the sample matrix (water for aqueous samples). Activates the sorbent surface for retention.",
            "Load — pass the sample through the cartridge at a controlled flow rate. Target analytes are retained on the sorbent; most of the matrix passes through to waste.",
            "Wash — rinse the loaded cartridge with a weak solvent that removes residual matrix without eluting the analytes. The wash solvent strength must be optimized — too weak removes nothing useful, too strong starts eluting analytes.",
            "Elute — pass a small volume of strong solvent through the cartridge to release the retained analytes into a collection vessel. The eluent is the final extract submitted for analysis.",
          ]} />

          <GH2 id="method-development">Method Development Strategy</GH2>
          <GP>SPE method development is a systematic optimization of the four steps above, typically done by varying one parameter at a time while measuring recovery and cleanup efficiency. Start with the sorbent manufacturer's recommended generic protocol for your application class, then optimize the wash and elution solvents to maximize the separation between your analytes and the matrix interferences.</GP>
          <GCallout title="Note">The most common method development mistake is optimizing only recovery (how much analyte comes out) without evaluating cleanup (how much matrix comes out alongside it). A method with 95% recovery but poor cleanup can produce worse quantitative results than a method with 80% recovery and excellent cleanup, because matrix effects in the downstream analysis may bias the result more than the 20% recovery loss.</GCallout>

          <GH2 id="quecers">QuEChERS: Dispersive SPE for Food Safety</GH2>
          <GP>QuEChERS (Quick, Easy, Cheap, Effective, Rugged, Safe) is a simplified sample preparation method originally developed for multi-residue pesticide analysis in fruits and vegetables, now widely adopted for a broad range of food safety applications. Unlike conventional SPE which uses a cartridge, QuEChERS uses dispersive SPE — sorbent material (PSA, C18, GCB) is mixed directly into the extract in a centrifuge tube, and the cleanup happens by mixing rather than by flowing through a packed bed.</GP>
          <GP>The QuEChERS workflow consists of two steps: a salting-out extraction (sample + acetonitrile + MgSO₄ + NaCl, shake and centrifuge) followed by a dispersive cleanup (extract + PSA/C18 sorbent, shake and centrifuge). The entire process takes 15-20 minutes and requires no specialized equipment beyond a centrifuge.</GP>

          <GH2 id="troubleshooting">Troubleshooting SPE Problems</GH2>
          <GTable headers={["Problem", "Likely Cause", "Solution"]} rows={[
            ["Low recovery", "Analyte not retained during loading, or not eluted completely", "Check loading pH; increase elution solvent strength or volume"],
            ["High matrix background", "Wash solvent too weak", "Increase wash solvent strength incrementally"],
            ["Variable recovery between replicates", "Flow rate too fast during loading", "Reduce flow rate; ensure cartridge never dries during load/wash"],
            ["Cartridge clogs or slow flow", "Particulate matter in sample", "Pre-filter sample through 0.45µm before loading"],
            ["Analyte found in waste fraction", "Breakthrough — sorbent capacity exceeded", "Increase sorbent mass or reduce sample volume"],
          ]} />

          <GH2 id="solvents-for-spe">Choosing Solvents for SPE</GH2>
          <GP>SPE solvents should be at least HPLC grade for conditioning, washing, and elution steps — any impurity in the elution solvent will concentrate alongside the analyte when the eluate is dried down. For GC analysis of the eluate, use GC grade elution solvents (low residue on evaporation). For LC-MS analysis, use LC-MS grade solvents for the final elution step to avoid introducing metal ions and non-volatile residue that cause ion suppression.</GP>

          <GProductLinks categories={["spe-products", "hplc-solvents", "gc-solvents"]} />
        </article>
      </div>
    </div>
  );
}
