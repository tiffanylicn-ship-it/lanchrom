import type { Metadata } from "next";
import Link from "next/link";
import { getGuideInfo } from "@/data/guides";
import { GH2, GP, GList, GCallout, GTable, GProductLinks, GuideTOC } from "@/components/guides/GuideComponents";

const info = getGuideInfo("electronic-grade-solvents-semiconductor-guide")!;

export const metadata: Metadata = {
  title: `${info.title} | LANCHROM™`,
  description: info.seoDescription,
  alternates: { canonical: "https://www.lanchrom.com/guides/electronic-grade-solvents-semiconductor-guide" },
};

const TOC = [
  { id: "why-electronic-grade", label: "Why Electronic Grade Exists" },
  { id: "semi-specifications", label: "SEMI Specifications Explained" },
  { id: "trace-metals", label: "Trace Metal Control at the PPT Level" },
  { id: "particle-control", label: "Particle Control Below 3nm" },
  { id: "key-solvents", label: "Key Electronic-Grade Solvents" },
  { id: "applications", label: "Semiconductor Process Applications" },
  { id: "packaging-handling", label: "Packaging & Ultra-Clean Handling" },
  { id: "supplier-qualification", label: "Qualifying an Electronic-Grade Supplier" },
  { id: "cost-purity-tradeoff", label: "The Cost-Purity Tradeoff" },
  { id: "future-trends", label: "Future Trends: Sub-2nm Nodes" },
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
          <GP>The difference between "high purity" and "electronic grade" isn't a marketing distinction — it's a full order of magnitude in contamination control. Analytical-grade HPLC solvents typically specify trace metals at the parts-per-billion (ppb) level; electronic-grade solvents for semiconductor manufacturing specify them at parts-per-trillion (ppt). That 1000× difference reflects the reality that a single metal ion deposited on a wafer during a critical process step can create a defect that kills a chip — and at modern node sizes, the tolerance for such defects is essentially zero.</GP>

          <GH2 id="why-electronic-grade">Why Electronic Grade Exists</GH2>
          <GP>Semiconductor manufacturing uses chemical solvents at multiple process steps: photoresist coating and stripping, wafer cleaning, developing, and edge bead removal. At each step, any contaminant in the solvent that deposits on the wafer surface becomes a potential defect source. As semiconductor node sizes shrink from 7nm to 5nm to 3nm and beyond, the definition of "contaminant" becomes progressively more stringent — particles that were invisible at 14nm become yield-killing defects at 3nm.</GP>
          <GP>Electronic-grade solvents exist because standard analytical-grade solvents — even very good ones — contain trace levels of metals, particles, and non-volatile residue that are far above what semiconductor processes can tolerate. The purification, testing, packaging, and handling infrastructure required to achieve and maintain electronic-grade purity is fundamentally different from what analytical-grade production requires.</GP>

          <GH2 id="semi-specifications">SEMI Specifications Explained</GH2>
          <GP>SEMI (Semiconductor Equipment and Materials International) publishes specification standards for electronic-grade chemicals, organized into tiers that correspond to increasingly stringent purity requirements. The most commonly referenced are SEMI C7 (for IPA) and SEMI C8 (for general process chemicals), with specification tiers typically ranging from Grade 1 (least stringent) through Grade 5 or higher (most stringent).</GP>
          <GTable headers={["Parameter", "Analytical Grade (typical)", "Electronic Grade (SEMI Tier 3+)"]} rows={[
            ["Trace metals (individual)", "< 10-100 ppb", "< 10-100 ppt (1000× lower)"],
            ["Trace metals (total)", "< 1 ppm", "< 1 ppb"],
            ["Particle count (≥0.5µm)", "Not specified", "< 25 per mL"],
            ["Particle count (≥0.1µm)", "Not specified", "< 100 per mL"],
            ["Non-volatile residue", "< 5 ppm", "< 1 ppm"],
            ["Water content", "< 0.05%", "< 0.01% (or lower)"],
          ]} />

          <GH2 id="trace-metals">Trace Metal Control at the PPT Level</GH2>
          <GP>Achieving and verifying trace metal content at the parts-per-trillion level requires ICP-MS analysis with extreme sample handling precautions — the measurement itself is as challenging as the purification. A fingerprint on a sample container can introduce more sodium than the specification allows in the entire container of solvent. Every surface the solvent contacts during production, testing, and packaging must be confirmed not to contribute detectable metal contamination.</GP>
          <GCallout title="Note">At LANCHROM, metal ion purity is controlled to 3 parts per trillion (3 parts per 100,000,000,000) — achieved through proprietary low-temperature crystallization and multi-stage purification technology refined over 15+ years of R&D. This level of control exceeds the requirements of current leading-edge semiconductor nodes.</GCallout>

          <GH2 id="particle-control">Particle Control Below 3nm</GH2>
          <GP>Particle contamination in electronic-grade solvents is measured by liquid particle counters capable of detecting particles down to 50nm or smaller. At the most advanced purification level, our process removes insoluble particles below 3nm in size — fewer than 7 particles per liter — a capability that requires not just filtration but advanced crystallization and evaporation techniques that physically separate sub-nanometer contaminants from the solvent matrix.</GP>
          <GP>Standard filtration (even at 0.1µm) cannot achieve this level of particle removal, because the particles in question are orders of magnitude smaller than any practical filter pore size. The removal mechanism is thermodynamic (differential solubility during crystallization) rather than mechanical (size exclusion by a filter), which is why the process technology is fundamentally different from what analytical-grade production uses.</GP>

          <GH2 id="key-solvents">Key Electronic-Grade Solvents</GH2>
          <GTable headers={["Solvent", "CAS", "Primary Semiconductor Application"]} rows={[
            ["IPA (Isopropanol)", "67-63-0", "Wafer drying, cleaning, photoresist edge bead removal"],
            ["PGME (1-Methoxy-2-propanol)", "107-98-2", "Photoresist solvent, developer rinse"],
            ["PGMEA", "108-65-6", "Photoresist solvent, edge bead remover"],
            ["NMP (N-Methyl-2-pyrrolidone)", "872-50-4", "Photoresist stripping, cleaning"],
            ["Acetone", "67-64-1", "General cleaning, photoresist removal"],
            ["Ethanol", "64-17-5", "Cleaning, process solvent"],
            ["DMC (Dimethyl carbonate)", "616-38-6", "Battery electrolyte, green solvent replacement"],
          ]} />

          <GH2 id="applications">Semiconductor Process Applications</GH2>
          <GP>Electronic-grade solvents are used across the semiconductor fabrication workflow. In lithography, PGME and PGMEA are the primary solvents in photoresist formulations — the resist is dissolved in solvent, spin-coated onto the wafer, and the solvent evaporates to leave a uniform resist film. Any particle or metal contamination in the solvent transfers directly to the resist film and potentially to the patterned wafer surface. In cleaning and stripping, IPA and NMP remove residual photoresist, organic contamination, and process byproducts from wafer surfaces between process steps — again with the requirement that the cleaning solvent itself must not introduce contamination that it's supposed to be removing.</GP>

          <GH2 id="packaging-handling">Packaging & Ultra-Clean Handling</GH2>
          <GP>Electronic-grade solvents require packaging materials that won't leach contaminants into the solvent during storage. Standard glass bottles with standard cap liners are inadequate — glass can leach sodium and boron, and standard cap liners contain plasticizers that migrate into aggressive solvents. Electronic-grade packaging typically uses fluoropolymer-lined containers, ultra-clean HDPE, or specially treated glass, with closures and fittings designed for contamination-free dispensing.</GP>
          <GP>The packaging is not just a container — it's part of the product's purity specification. A solvent that meets electronic-grade specifications at the time of filling can degrade to analytical-grade purity during storage if the packaging materials are not compatible with the required purity level.</GP>

          <GH2 id="supplier-qualification">Qualifying an Electronic-Grade Supplier</GH2>
          <GList items={[
            "Request actual lot-specific CoA data — not typical or guaranteed specifications — for the metal panel relevant to your process",
            "Ask for particle count data, including the detection limit of the particle counter used",
            "Visit the production facility if possible, or request a video tour of the clean filling area",
            "Evaluate change notification practices — how will you be informed of any process or raw material changes?",
            "Request retention sample availability — can you re-test a retained sample from a historical lot if an issue arises?",
            "Confirm that the production line for electronic-grade products is dedicated and never handles lower-grade material",
          ]} />

          <GH2 id="cost-purity-tradeoff">The Cost-Purity Tradeoff</GH2>
          <GP>Electronic-grade solvents cost significantly more per liter than analytical-grade equivalents — typically 3-10× more, depending on the purity tier and the specific solvent. The premium reflects the additional purification steps, the dedicated production equipment, the ultra-clean packaging, and the more extensive analytical testing required for each lot. For semiconductor manufacturers, this cost is negligible relative to the value of the wafers being processed — a single wafer at advanced nodes can be worth thousands of dollars, and yield loss from solvent contamination far exceeds the cost of the solvent itself.</GP>

          <GH2 id="future-trends">Future Trends: Sub-2nm Nodes</GH2>
          <GP>As the semiconductor industry moves toward sub-2nm process nodes with gate-all-around (GAA) transistor architectures, the purity requirements for process chemicals will continue to tighten. Metal contamination specifications that are currently at the 10-100 ppt level for individual elements may need to move to single-digit ppt or below. Particle specifications may need to extend to smaller size ranges than current liquid particle counters can reliably measure. These trends drive continuous improvement in both purification technology and analytical measurement capability — and they favor suppliers who invest in proprietary process R&D rather than relying on commercially available standard equipment.</GP>

          <GProductLinks categories={["electronic-grade", "pharma-grade"]} />
        </article>
      </div>
    </div>
  );
}
