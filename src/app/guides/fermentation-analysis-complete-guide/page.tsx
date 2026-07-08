import type { Metadata } from "next";
import Link from "next/link";
import { getGuideInfo } from "@/data/guides";
import { GH2, GP, GCallout, GTable, GProductLinks, GuideTOC } from "@/components/guides/GuideComponents";

const info = getGuideInfo("fermentation-analysis-complete-guide")!;
export const metadata: Metadata = { title: `${info.title} | LANCHROM™`, description: info.seoDescription, alternates: { canonical: "https://www.lanchrom.com/guides/fermentation-analysis-complete-guide" } };

const TOC = [
  { id: "why-fermentation-analysis", label: "Why Fermentation Analysis Matters" },
  { id: "target-analytes", label: "Target Analytes in Fermentation" },
  { id: "column-selection", label: "Column Selection: Ion Exclusion Chromatography" },
  { id: "mobile-phase", label: "Mobile Phase: Dilute Sulfuric Acid" },
  { id: "detection-methods", label: "Detection: RI vs UV" },
  { id: "industry-applications", label: "Industry-Specific Applications" },
  { id: "method-parameters", label: "Typical Method Parameters" },
  { id: "ready-to-use", label: "Ready-to-Use Mobile Phase Systems" },
  { id: "troubleshooting", label: "Troubleshooting Fermentation Methods" },
  { id: "advanced", label: "Advanced: Chiral Lactic Acid & Bio-Materials" },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]"><Link href="/guides" className="hover:text-[#3C6E71]">Guides</Link> {" › "} <span className="text-[#5C5A55]">{info.h1}</span></div></div>
      <section className="py-12 border-b border-[#E6E3DD] bg-[#FBFAF8]"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"><p className="tag-line mb-3">{info.readingTime}</p><h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">{info.h1}</h1><p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.excerpt}</p></div></section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[240px_1fr] gap-10">
        <GuideTOC items={TOC} />
        <article className="min-w-0">
          <GP>Fermentation is one of the oldest biotechnologies — and its quality control requirements have never been more demanding. Whether you're producing lactic acid for bioplastics, monitoring organic acid profiles in wine, tracking sugar consumption in antibiotic fermentation, or verifying glucose conversion in bioethanol production, the analytical method at the core is almost always the same: HPLC with an ion-exclusion column, dilute sulfuric acid mobile phase, and refractive index or UV detection. This guide covers the complete methodology from column selection through mobile phase preparation, with practical application notes for the most common fermentation industries.</GP>

          <GH2 id="why-fermentation-analysis">Why Fermentation Analysis Matters</GH2>
          <GP>Fermentation processes produce a complex mixture of organic acids, residual sugars, alcohols, and other metabolites — and the relative concentrations of these components determine whether the fermentation is proceeding as intended. A lactic acid fermentation that's accumulating acetic acid is contaminated or stressed. A wine fermentation where malic acid isn't converting to lactic acid has a stuck malolactic fermentation. An antibiotic fermentation that isn't consuming glucose at the expected rate may have a viability problem. In every case, the analytical data from HPLC monitoring provides the information needed to diagnose and correct the process in real time, rather than discovering the problem after the batch is already finished and potentially lost.</GP>

          <GH2 id="target-analytes">Target Analytes in Fermentation</GH2>
          <GTable headers={["Category", "Common Analytes", "Detection"]} rows={[
            ["Organic acids", "Lactic, acetic, citric, succinic, malic, tartaric, pyruvic, oxalic, propionic, butyric", "UV 210nm + RI"],
            ["Sugars", "Glucose, fructose, sucrose, maltose, lactose, xylose", "RI only"],
            ["Alcohols", "Ethanol, glycerol, butanediol, propanediol", "RI only"],
            ["Amino acids", "Glutamic acid, lysine, threonine, alanine", "UV (post-column derivatization)"],
            ["Process indicators", "Ammonia, phosphate, acetaldehyde", "Various detectors"],
          ]} />

          <GH2 id="column-selection">Column Selection: Ion Exclusion Chromatography</GH2>
          <GP>The workhorse column for fermentation analysis is the sulfonated polystyrene-divinylbenzene ion-exclusion column in the hydrogen (H⁺) form — generically referred to as an "organic acid column" and most commonly recognized by the Bio-Rad Aminex HPX-87H trade name. Functionally equivalent columns are available from several manufacturers (Shodex SH-1011, Phenomenex Rezex ROA-Organic, Transgenomic ION-300) and all operate on the same separation mechanism: ion exclusion combined with size exclusion and hydrophobic interaction.</GP>
          <GP>The H⁺-form column separates organic acids by their degree of ionization at the mobile phase pH — strongly ionized acids (like sulfuric acid, which is fully ionized) are excluded from the resin pores and elute quickly, while weakly ionized organic acids (like lactic acid, pKa 3.86) partially enter the pores and are retained longer. Uncharged molecules like sugars and alcohols are separated primarily by size exclusion and hydrophobic interaction, with larger molecules eluting before smaller ones.</GP>

          <GH2 id="mobile-phase">Mobile Phase: Dilute Sulfuric Acid</GH2>
          <GP>The standard mobile phase for H⁺-form ion exclusion columns is dilute sulfuric acid — typically 0.005N (2.5mM) to 0.01N (5mM) H₂SO₄ in ultrapure water. The acid serves two purposes: it maintains the column in the H⁺ form (preventing gradual conversion to other cation forms by the sample matrix), and it sets the pH that controls the ionization-based separation mechanism for organic acids.</GP>
          <GCallout title="Note">Mobile phase preparation is the most common source of day-to-day variability in fermentation analysis methods. Diluting concentrated sulfuric acid to 0.005N requires precise measurement of a very small volume of a dangerous, viscous liquid into a large volume of water. A 5% error in the acid concentration produces a measurable shift in organic acid retention times — not enough to lose a peak, but enough to fail system suitability criteria on a validated method. Ready-to-use mobile phase bags eliminate this variability entirely.</GCallout>

          <GH2 id="detection-methods">Detection: RI vs UV</GH2>
          <GP>Most fermentation HPLC methods use two detectors in series: UV at 210nm (which detects organic acids via their carboxyl group absorbance) followed by RI (which detects everything, including sugars and alcohols that have no UV absorbance). The UV detector provides better sensitivity and specificity for organic acids; the RI detector provides universal detection for sugars and alcohols that UV cannot see. Using both detectors in series gives a complete picture of the fermentation profile from a single injection.</GP>
          <GP>A critical practical note: RI detection is inherently incompatible with gradient elution (because the changing mobile phase composition continuously shifts the RI baseline). Ion exclusion methods use isocratic elution — a single, fixed mobile phase composition for the entire run — which is why RI detection works well here but not in reversed-phase HPLC gradients.</GP>

          <GH2 id="industry-applications">Industry-Specific Applications</GH2>
          <GTable headers={["Industry", "Key Analytes", "Column", "Notes"]} rows={[
            ["Lactic acid production", "L-lactic acid, glucose, acetic acid", "Aminex HPX-87H", "Monitor substrate consumption and product purity"],
            ["Dairy fermentation", "Lactic acid, citric acid, lactose, glucose", "Aminex HPX-87H", "Track starter culture activity"],
            ["Wine & brewing", "Tartaric, malic, citric, lactic acid + ethanol + sugars", "Aminex HPX-87H", "Monitor malolactic fermentation"],
            ["Vinegar production", "Acetic acid, ethanol, glucose", "Aminex HPX-87H", "Track acetification progress"],
            ["Soy sauce", "Organic acids + amino acids + sugars", "HPX-87H + C18", "Multi-method approach"],
            ["Bioethanol", "Glucose, fructose, ethanol, glycerol, acetic acid", "Aminex HPX-87H", "Track conversion efficiency"],
            ["PHA/bioplastics", "3-hydroxybutyric acid, lactic acid, glucose", "HPX-87H + chiral", "Monitor substrate and product"],
            ["Amino acid fermentation", "Glutamic acid, lysine, glucose", "HPX-87H + amino acid", "Production monitoring"],
            ["Antibiotic fermentation", "Glucose, lactic acid, ammonium", "Aminex HPX-87H", "Feed and metabolite tracking"],
          ]} />

          <GH2 id="method-parameters">Typical Method Parameters</GH2>
          <GTable headers={["Parameter", "Typical Setting", "Notes"]} rows={[
            ["Column", "Aminex HPX-87H (300×7.8mm) or equivalent", "Guard column recommended"],
            ["Mobile phase", "0.005N H₂SO₄ (isocratic)", "Pre-filtered, degassed, or bag system"],
            ["Flow rate", "0.5-0.6 mL/min", "Lower flow = better resolution, longer run"],
            ["Column temperature", "50-65°C", "Higher temp improves peak shape for sugars"],
            ["Detection", "UV 210nm + RI (in series)", "UV for acids, RI for sugars/alcohols"],
            ["Injection volume", "10-20 µL", "Filter samples through 0.22µm before injection"],
            ["Run time", "30-60 min", "Depends on analyte range and flow rate"],
          ]} />

          <GH2 id="ready-to-use">Ready-to-Use Mobile Phase Systems</GH2>
          <GP>For laboratories running fermentation analysis daily — particularly food and beverage QC labs where the analysts may not have formal chemistry training — ready-to-use mobile phase bags eliminate the preparation step entirely. The bag contains pre-mixed 0.005N H₂SO₄ (or other specified concentration) that has been filtered through 0.22µm membrane, degassed, and sealed under nitrogen in a collapsible aluminum-foil laminate bag. The bag connects directly to the HPLC inlet line and collapses as liquid is consumed, maintaining a nitrogen blanket over the mobile phase throughout its use.</GP>
          <GP>The advantages are consistency (every bag is identical — no analyst-to-analyst preparation variability), convenience (no daily mobile phase preparation), and shelf life (sealed bags are stable for 6-12 months vs 24-48 hours for a hand-prepared buffered solution sitting in a bottle on the bench). The per-liter cost is higher than the raw materials for hand preparation, but the total cost comparison including analyst time, consumables, and investigation time from prep-related method failures typically favors the bag system for any lab running the method more than a few times per week.</GP>

          <GH2 id="troubleshooting">Troubleshooting Fermentation Methods</GH2>
          <GTable headers={["Problem", "Likely Cause", "Solution"]} rows={[
            ["Retention times drifting", "Mobile phase concentration inconsistent", "Switch to pre-made mobile phase; verify acid concentration"],
            ["Poor sugar peak shape", "Column temperature too low", "Increase to 60-65°C; check column heater"],
            ["Co-eluting peaks", "Column degradation or wrong acid concentration", "Replace guard column; verify mobile phase concentration"],
            ["RI baseline noisy", "Air bubbles, temperature fluctuation", "Degas mobile phase; stabilize lab temperature"],
            ["Unexpected peaks", "Fermentation byproducts or contamination", "Run standards to identify; check sample preparation"],
          ]} />

          <GH2 id="advanced">Advanced: Chiral Lactic Acid & Bio-Materials</GH2>
          <GP>Some applications require separation of L-lactic acid from D-lactic acid — the two enantiomers that are chemically identical except for their optical rotation. This matters for bioplastics (PLA manufacturing requires specific L/D ratios for material properties) and for pharmaceutical applications (where enantiomeric purity affects biological activity). Standard Aminex HPX-87H columns cannot separate enantiomers; chiral columns (specifically designed ligand-exchange or polysaccharide-based chiral columns) are required, with a different mobile phase system (typically copper sulfate solution or modified organic-aqueous mixtures).</GP>
          <GP>For PHA (polyhydroxyalkanoate) and other bio-based materials, the analytical challenge extends beyond simple organic acid profiling to include quantitation of specific hydroxy acids (3-hydroxybutyric acid, 3-hydroxyvaleric acid) that are the monomeric building blocks of the polymer. These analyses often combine the standard Aminex method (for process monitoring) with a GC method (for precise polymer composition determination after methanolysis).</GP>

          <GProductLinks categories={["mobile-phase-bags", "reagent-kits", "hplc-solvents"]} />
        </article>
      </div>
    </div>
  );
}
