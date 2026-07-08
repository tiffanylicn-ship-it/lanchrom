import type { Metadata } from "next";
import Link from "next/link";
import { getGuideInfo } from "@/data/guides";
import { GH2, GP, GList, GCallout, GTable, GProductLinks, GuideTOC } from "@/components/guides/GuideComponents";

const info = getGuideInfo("complete-guide-to-gc-solvents")!;

export const metadata: Metadata = {
  title: `${info.title} | LANCHROM™`,
  description: info.seoDescription,
  alternates: { canonical: "https://www.lanchrom.com/guides/complete-guide-to-gc-solvents" },
};

const TOC = [
  { id: "what-gc-grade-means", label: "What \"GC Grade\" Actually Means" },
  { id: "gc-vs-hplc-grade", label: "GC Grade vs HPLC Grade — The Key Differences" },
  { id: "common-gc-solvents", label: "Common GC Solvents Compared" },
  { id: "solvent-role-in-gc", label: "The Role of Solvent in GC Analysis" },
  { id: "residue-on-evaporation", label: "Residue on Evaporation: The Critical Spec" },
  { id: "choosing-for-gc-ms", label: "Choosing Solvents for GC-MS" },
  { id: "headspace-gc-solvents", label: "Solvents for Headspace GC" },
  { id: "sample-preparation", label: "Extraction & Sample Preparation" },
  { id: "storage-and-handling", label: "Storage, Handling & Contamination Prevention" },
  { id: "troubleshooting", label: "Troubleshooting GC Solvent Problems" },
];

export default function Page() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/guides" className="hover:text-[#3C6E71]">Guides</Link> {" › "} <span className="text-[#5C5A55]">{info.h1}</span>
        </div>
      </div>
      <section className="py-12 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">{info.readingTime}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">{info.h1}</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">{info.excerpt}</p>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-[240px_1fr] gap-10">
        <GuideTOC items={TOC} />
        <article className="min-w-0">
          <GP>Gas chromatography is fundamentally different from liquid chromatography in the role that solvent plays. In HPLC, the solvent is the mobile phase — it's actively participating in the separation throughout the entire run. In GC, the solvent is primarily a sample vehicle: it dissolves the sample for injection, evaporates in the inlet, and plays no further role in the separation itself. This distinction is why GC-grade and HPLC-grade solvents are tested against completely different criteria, and why using one where the other is specified can cause problems that aren't immediately obvious.</GP>

          <GH2 id="what-gc-grade-means">What "GC Grade" Actually Means</GH2>
          <GP>A GC-grade solvent has been tested specifically for the characteristics that matter in gas chromatographic analysis: low residue on evaporation (because the solvent evaporates in the inlet and any non-volatile contamination stays behind to accumulate), absence of interfering peaks in a blank GC run (because any volatile impurity in the solvent will produce its own peak in the chromatogram, potentially co-eluting with analytes of interest), and adequate overall purity for reproducible injection behavior.</GP>
          <GP>What GC grade typically does not test for — and this is the key difference from HPLC grade — is UV transparency. A GC-grade solvent might have UV absorbance characteristics that would make it unacceptable for HPLC-UV work, because no one is detecting UV absorbance in a GC analysis. Conversely, an HPLC-grade solvent might have residue-on-evaporation levels that are fine for a flowing liquid system but would accumulate unacceptably in a GC inlet over hundreds of injections.</GP>

          <GH2 id="gc-vs-hplc-grade">GC Grade vs HPLC Grade — The Key Differences</GH2>
          <GTable headers={["Parameter", "GC Grade Focus", "HPLC Grade Focus"]} rows={[
            ["Primary purity test", "GC chromatographic blank (no interfering peaks)", "UV cutoff wavelength"],
            ["Residue testing", "Residue on evaporation — critical", "Non-volatile residue — tested but less critical"],
            ["Water content", "Tested but less critical (evaporates)", "Critical for mobile phase reproducibility"],
            ["Trace metals", "Not typically specified", "Specified for LC-MS grade"],
            ["UV absorbance", "Not tested", "Primary specification parameter"],
          ]} />
          <GP>The practical implication is straightforward: use GC grade for GC applications and HPLC grade for HPLC applications. Using HPLC grade for GC work is safe but wasteful (you're paying for UV testing you don't need). Using GC grade for HPLC work is risky (the UV transparency might not meet your detection requirements).</GP>

          <GH2 id="common-gc-solvents">Common GC Solvents Compared</GH2>
          <GP>The choice of GC solvent depends on the analyte's solubility, the inlet conditions, and the detector being used. Each solvent has different boiling point, polarity, and expansion volume characteristics that affect injection behavior.</GP>
          <GTable headers={["Solvent", "BP (°C)", "Polarity", "Best For"]} rows={[
            ["n-Hexane", "69", "Non-polar", "Hydrocarbon analysis, pesticide residues, lipid extracts"],
            ["Dichloromethane", "40", "Mid-polar", "Semi-volatile organics, chlorinated compounds"],
            ["Acetone", "56", "Polar", "Polar volatile organics, general-purpose rinsing"],
            ["Ethyl acetate", "77", "Mid-polar", "Pesticide residue methods, QuEChERS extracts"],
            ["Methanol", "65", "Polar", "Polar analytes, residual solvent testing blanks"],
            ["Toluene", "111", "Non-polar", "High-boiling analytes, PAH analysis"],
            ["Xylene", "138-144", "Non-polar", "High-boiling analytes, mineral oil analysis"],
            ["IPA", "82", "Polar", "Polar analytes, cleaning validation samples"],
          ]} />

          <GH2 id="solvent-role-in-gc">The Role of Solvent in GC Analysis</GH2>
          <GP>When a liquid sample is injected into a GC inlet (typically at 200-300°C), the solvent rapidly vaporizes and expands — a 1µL injection of methanol produces roughly 500µL of vapor at typical inlet conditions. This vapor expansion is what transfers the analytes from the liquid phase onto the head of the GC column, where the actual separation begins. The solvent vapor then passes through the column quickly (it's much more volatile than most analytes) and exits through the detector as a large "solvent front" peak at the beginning of the chromatogram.</GP>
          <GP>Because the solvent evaporates completely in the inlet, any non-volatile contamination in the solvent — dissolved solids, non-volatile organic residue, trace metals — does not evaporate. Instead, it accumulates in the inlet liner, on the glass wool packing, and on the first few centimeters of the column head, injection after injection. This is why residue on evaporation is the single most important specification for a GC solvent: it directly predicts how fast contamination will accumulate in your inlet system.</GP>

          <GH2 id="residue-on-evaporation">Residue on Evaporation: The Critical Spec</GH2>
          <GP>Residue on evaporation (ROE) is measured by evaporating a known volume of solvent under controlled conditions (temperature, airflow) and weighing the remaining solid residue. The result is expressed in mg/L or ppm. For GC-grade solvents, typical specifications range from 1 to 5 mg/L; for higher-purity grades, below 1 mg/L.</GP>
          <GCallout title="Note">A solvent with 5 mg/L ROE that's used for 100 injections of 1µL each deposits only 0.5µg of residue in total — which sounds trivial. But that residue is concentrated in a small area (the inlet liner), and over weeks of daily use, it accumulates to visible contamination levels that affect peak shape, quantitative accuracy, and system suitability. A 1 mg/L ROE solvent accumulates that contamination 5× more slowly.</GCallout>

          <GH2 id="choosing-for-gc-ms">Choosing Solvents for GC-MS</GH2>
          <GP>GC-MS adds an additional constraint beyond standard GC: the mass spectrometer will detect and identify any volatile impurity in the solvent that elutes within the chromatographic run, even if it doesn't interfere with a specific analyte's retention time. This means that a solvent which produces a "clean" chromatogram on GC-FID (where only a few types of compounds give measurable signal) may show dozens of detectable impurity peaks on GC-MS (where essentially everything that ionizes is detected).</GP>
          <GP>For GC-MS work, use GC-MS grade solvents where available, or at minimum verify that the solvent produces an acceptably clean blank on your specific GC-MS system. Running a solvent blank at the beginning of each analytical sequence is standard practice for GC-MS, and comparing it against a reference blank from your method validation is the most direct way to confirm that the current solvent lot isn't contributing unexpected background.</GP>

          <GH2 id="headspace-gc-solvents">Solvents for Headspace GC</GH2>
          <GP>Headspace GC analysis samples the vapor above a heated liquid sample rather than injecting the liquid directly. The solvent's role here is to dissolve or suspend the sample matrix (often a solid pharmaceutical material, a polymer, or a food product) so that volatile analytes can partition into the headspace during the incubation step. The solvent itself should have a boiling point significantly different from the analytes of interest, and ideally should not produce peaks in the retention time windows of the target compounds.</GP>
          <GP>For ICH Q3C residual solvent testing (USP &lt;467&gt;), the specified dissolution solvent is typically DMSO, DMF, or water, depending on the sample's solubility. The choice is defined by the pharmacopeial method and is not discretionary — but the grade of the dissolution solvent matters, because any volatile impurity in the dissolution solvent will contribute to the headspace and potentially interfere with the residual solvent determination.</GP>

          <GH2 id="sample-preparation">Extraction & Sample Preparation</GH2>
          <GP>Many GC analyses begin with a solvent extraction step — liquid-liquid extraction (LLE), solid-liquid extraction, or QuEChERS — where the solvent's role is to selectively dissolve analytes from a sample matrix. The extract is then typically concentrated by evaporation before injection, which means any impurity in the extraction solvent concentrates proportionally alongside the analytes.</GP>
          <GList items={[
            "For LLE: use at least GC grade for the extraction solvent, since it will be concentrated before analysis",
            "For QuEChERS: acetonitrile is the standard extraction solvent; GC or HPLC grade is appropriate",
            "For cleanup (SPE, alumina, Florisil): use GC grade for all elution solvents",
            "Always run a procedural blank (solvent through the complete extraction process) alongside samples",
          ]} />

          <GH2 id="storage-and-handling">Storage, Handling & Contamination Prevention</GH2>
          <GP>GC solvents are more susceptible to contamination from plasticizers and environmental volatiles than HPLC solvents, because GC detects volatile contaminants that would be invisible to a UV detector. Common contamination sources include plastic cap liners (phthalate plasticizers are easily detected by GC-MS), laboratory ambient air (cleaning product residues, marker pen vapors), and cross-contamination from shared glassware or dispensing equipment.</GP>
          <GList items={[
            "Store bottles capped when not in active use — even a few minutes of exposure to laboratory air introduces detectable levels of ambient volatiles",
            "Use glass bottles with PTFE-lined caps; avoid plastic containers for GC-grade solvents",
            "Dedicate volumetric glassware to GC work — trace contamination from HPLC buffers or other chemicals is persistent",
            "For GC-MS work: bake-out new glass syringes and autosampler vials before first use",
          ]} />

          <GH2 id="troubleshooting">Troubleshooting GC Solvent Problems</GH2>
          <GP>The most common GC problems attributable to solvent quality are ghost peaks (peaks present in the blank that aren't your analytes), gradual baseline rise (contamination accumulation in the inlet), and poor peak shape for early-eluting compounds (inlet degradation from residue buildup). Systematic troubleshooting starts with running a fresh solvent blank and comparing it against a reference blank from the method's last known-good condition.</GP>
          <GTable headers={["Symptom", "Likely Solvent Cause", "First Action"]} rows={[
            ["Ghost peaks in blank", "Volatile impurities in solvent lot", "Run blank with new solvent lot"],
            ["Rising baseline over days", "High ROE accumulating in inlet", "Replace inlet liner, try lower-ROE solvent"],
            ["Poor peak shape (early peaks)", "Inlet liner contamination", "Replace liner, evaluate ROE of current solvent"],
            ["New peaks after solvent change", "Different impurity profile in new lot/brand", "Compare lot CoAs, run side-by-side blanks"],
          ]} />

          <GProductLinks categories={["gc-solvents", "spe-products"]} />
        </article>
      </div>
    </div>
  );
}
