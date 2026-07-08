// Knowledge Center Batch 3 — 72 articles to bring total from 28 to 100
import type { KnowledgeArticle } from "./knowledge-articles";

export const KNOWLEDGE_BATCH3: Record<string, KnowledgeArticle> = {
  // ── DEFINITIONS: chromatography modes ─────────────────────
  "what-is-reversed-phase-hplc": {
    slug: "what-is-reversed-phase-hplc", title: "What Is Reversed-Phase HPLC?", h1: "What Is Reversed-Phase HPLC?", category: "definitions",
    excerpt: "Reversed-phase HPLC uses a non-polar stationary phase and a polar mobile phase — the most common separation mode in modern analytical chemistry.",
    seoDescription: "Reversed-phase HPLC explained: how non-polar stationary phases and polar mobile phases separate analytes, and why it dominates routine analysis.",
    content: [
      { type: "p", text: "Reversed-phase HPLC separates compounds based on their relative hydrophobicity — more hydrophobic compounds interact more strongly with the non-polar stationary phase (typically C18 or C8 bonded silica) and are retained longer, while more polar compounds prefer the polar mobile phase and elute earlier. This is 'reversed' relative to normal-phase chromatography, where the stationary phase is polar and the mobile phase is non-polar." },
      { type: "h2", text: "Why reversed-phase dominates routine analysis" },
      { type: "list", items: ["Compatible with aqueous samples — most biological, pharmaceutical, and environmental samples are water-based", "Excellent reproducibility — C18 columns from major manufacturers are well-characterized and consistent", "Wide selectivity range — organic modifier percentage, pH, and buffer choice all tune retention independently", "Compatible with both UV and MS detection without restrictions"] },
      { type: "product-links", categories: ["hplc-solvents", "lcms-solvents"] },
    ], relatedArticles: ["what-is-mobile-phase", "hplc-solvent-selection-guide"],
  },
  "what-is-normal-phase-hplc": {
    slug: "what-is-normal-phase-hplc", title: "What Is Normal-Phase HPLC?", h1: "What Is Normal-Phase HPLC?", category: "definitions",
    excerpt: "Normal-phase HPLC uses a polar stationary phase (typically bare silica) with a non-polar mobile phase — suited to separating structurally similar compounds by polarity.",
    seoDescription: "Normal-phase HPLC explained: polar stationary phase, non-polar mobile phase, typical solvents, and when to use it over reversed-phase.",
    content: [
      { type: "p", text: "Normal-phase HPLC was historically the 'original' mode of liquid chromatography — a polar adsorbent (bare silica or alumina) as the stationary phase, with a non-polar solvent system (hexane, heptane, with polar modifiers like ethyl acetate or IPA) as the mobile phase. Compounds are separated by their polarity: more polar analytes interact more strongly with the polar stationary phase and are retained longer." },
      { type: "h2", text: "When normal-phase is the right choice" },
      { type: "list", items: ["Separating structural isomers or closely related compounds that differ primarily in polarity rather than hydrophobicity", "Chiral separations — most polysaccharide-based chiral columns operate in normal-phase mode", "Lipid class separations in lipidomics and fat chemistry", "Preparative purification where the analyte is more soluble in non-polar solvents"] },
      { type: "product-links", categories: ["hplc-solvents", "spectroscopic-solvents"] },
    ], relatedArticles: ["what-is-reversed-phase-hplc", "what-is-hplc-grade-ipa"],
  },
  "what-is-gradient-elution": {
    slug: "what-is-gradient-elution", title: "What Is Gradient Elution?", h1: "What Is Gradient Elution?", category: "definitions",
    excerpt: "Gradient elution changes mobile phase composition during a run to separate compounds across a wide polarity range in a single injection.",
    seoDescription: "Gradient elution in HPLC explained: how it works, when to use it vs isocratic, and why solvent grade matters more for gradients.",
    content: [
      { type: "p", text: "Gradient elution programmatically changes the mobile phase composition over the course of an HPLC run — typically increasing the organic solvent percentage over time in reversed-phase work. This compresses the elution window for late-eluting compounds while maintaining resolution for early ones, allowing a single run to cover a much wider range of analyte polarities than any fixed (isocratic) composition could." },
      { type: "h2", text: "Why solvent grade matters more for gradients" },
      { type: "p", text: "During a gradient, the detector sees a continuously changing solvent background. If the two solvents being mixed have even slightly different UV absorbance or trace impurity profiles, the changing ratio produces a sloping or stepped baseline — which is why gradient-grade solvent exists as a distinct tier above standard HPLC grade, with tighter matching requirements between the organic and aqueous components." },
      { type: "product-links", categories: ["hplc-solvents"] },
    ], relatedArticles: ["what-is-mobile-phase", "hplc-solvent-selection-guide"],
  },
  "what-is-isocratic-elution": {
    slug: "what-is-isocratic-elution", title: "What Is Isocratic Elution?", h1: "What Is Isocratic Elution?", category: "definitions",
    excerpt: "Isocratic elution holds mobile phase composition constant — simpler, more reproducible, but limited to samples with a narrow polarity range.",
    seoDescription: "Isocratic elution explained: constant mobile phase composition, advantages over gradient, and when it's the better choice.",
    content: [
      { type: "p", text: "Isocratic elution uses a single, fixed mobile phase composition for the entire HPLC run. The main advantages are simplicity (no gradient pump programming, no re-equilibration time between injections) and reproducibility (fewer variables to control run-to-run). The main limitation is that a single composition optimized for early-eluting compounds leaves late-eluting ones taking impractically long to emerge, and vice versa." },
      { type: "h2", text: "When isocratic is the better choice" },
      { type: "list", items: ["The analytes of interest have similar polarities and elute within a narrow window", "Method transfer between instruments is a priority — isocratic methods are less sensitive to system dwell volume differences", "Throughput matters — no re-equilibration time means the next injection can start immediately", "The method needs to run on a simpler pump system without gradient capability"] },
      { type: "product-links", categories: ["hplc-solvents"] },
    ], relatedArticles: ["what-is-gradient-elution", "what-is-mobile-phase"],
  },
  "what-is-hilic": {
    slug: "what-is-hilic", title: "What Is HILIC Chromatography?", h1: "What Is HILIC?", category: "definitions",
    excerpt: "HILIC separates very polar compounds that don't retain on reversed-phase columns — using a polar stationary phase with a high-organic mobile phase.",
    seoDescription: "HILIC (Hydrophilic Interaction Liquid Chromatography) explained: how it retains polar compounds, typical mobile phases, and LC-MS compatibility.",
    content: [
      { type: "p", text: "Hydrophilic Interaction Liquid Chromatography (HILIC) is a separation mode for highly polar compounds that are too water-soluble to retain on a conventional C18 reversed-phase column. It uses a polar stationary phase (bare silica, amide, or zwitterionic bonded phases) with a mobile phase that's predominantly organic (typically 60-95% acetonitrile), with a small aqueous component that forms a water-rich layer on the stationary phase surface where polar analytes partition." },
      { type: "h2", text: "Why HILIC is increasingly popular" },
      { type: "list", items: ["Retains metabolites, sugars, amino acids, and nucleotides that reversed-phase can't hold", "High organic mobile phase content is excellent for ESI-MS sensitivity — the opposite of the high-aqueous content that suppresses ESI in reversed-phase", "Often the only practical option for polar, hydrophilic analytes in metabolomics and clinical assays"] },
      { type: "product-links", categories: ["hplc-solvents", "lcms-solvents"] },
    ], relatedArticles: ["what-is-reversed-phase-hplc", "lcms-solvent-selection-guide"],
  },
  "what-is-chiral-hplc": {
    slug: "what-is-chiral-hplc", title: "What Is Chiral HPLC?", h1: "What Is Chiral HPLC?", category: "definitions",
    excerpt: "Chiral HPLC separates enantiomers — mirror-image molecules that standard reversed-phase columns can't distinguish.",
    seoDescription: "Chiral HPLC explained: chiral stationary phases, typical mobile phases (hexane/IPA), and why enantiomeric purity matters in pharma.",
    content: [
      { type: "p", text: "Chiral HPLC separates enantiomers — stereoisomers that are mirror images of each other and have identical physical and chemical properties except for their interaction with other chiral molecules (including biological targets, which is why enantiomeric purity matters in pharmaceutical development). Standard reversed-phase columns can't distinguish enantiomers because C18 stationary phase isn't chiral; separation requires a chiral stationary phase (CSP) that interacts differently with each enantiomer." },
      { type: "h2", text: "Common chiral column and mobile phase combinations" },
      { type: "list", items: ["Polysaccharide-based CSPs (cellulose or amylose derivatives) — most widely used, typically with hexane/heptane + IPA or ethanol", "Pirkle-type CSPs — synthetic chiral selectors, broader solvent compatibility", "Reversed-phase chiral — some CSPs work in aqueous/organic mobile phases, enabling direct injection of aqueous samples"] },
      { type: "product-links", categories: ["hplc-solvents"] },
    ], relatedArticles: ["what-is-normal-phase-hplc", "what-is-hplc-grade-ipa"],
  },
  "what-is-preparative-hplc": {
    slug: "what-is-preparative-hplc", title: "What Is Preparative HPLC?", h1: "What Is Preparative HPLC?", category: "definitions",
    excerpt: "Preparative HPLC purifies milligrams to grams of material — scaling up the separation principle from analytical to collection.",
    seoDescription: "Preparative HPLC explained: scale-up from analytical, column sizing, solvent consumption, and prep-grade solvent economics.",
    content: [
      { type: "p", text: "Preparative HPLC uses the same separation principles as analytical HPLC but at a larger scale — the goal isn't to detect and quantify a compound, but to physically collect and recover purified material, typically at milligram to multi-gram quantities. Columns are wider (10-50mm ID vs. 4.6mm for analytical), flow rates are proportionally higher, and solvent consumption per run is correspondingly larger." },
      { type: "h2", text: "Why prep-grade solvent economics matter" },
      { type: "p", text: "At preparative flow rates, a single purification campaign can consume tens of liters of solvent in a day. The cost difference between HPLC grade and prep/bulk grade becomes very visible at this consumption rate, and since preparative work typically uses UV or RI detection (not MS), the additional purity of HPLC grade over prep grade is rarely needed — making prep-grade solvent the appropriate and more economical choice for most preparative applications." },
      { type: "product-links", categories: ["prep-solvents", "hplc-solvents"] },
    ], relatedArticles: ["hplc-solvent-selection-guide"],
  },
  "what-is-anhydrous-solvent": {
    slug: "what-is-anhydrous-solvent", title: "What Is Anhydrous Solvent?", h1: "What Is Anhydrous Solvent?", category: "definitions",
    excerpt: "Anhydrous solvents are dried to extremely low water content — essential for moisture-sensitive reactions and Karl Fischer calibration.",
    seoDescription: "Anhydrous solvent explained: water content specifications, drying methods, and applications requiring moisture control below 50ppm.",
    content: [
      { type: "p", text: "Anhydrous solvent is solvent that has been dried to a very low residual water content — typically below 50ppm (0.005%) and in some cases below 10ppm — for use in applications where even trace moisture interferes with the chemistry. Common applications include moisture-sensitive organic synthesis (Grignard reactions, lithium chemistry), Karl Fischer titration where the titration solvent itself must not contribute measurable water, and battery electrolyte formulation where water content at the ppm level affects cell performance." },
      { type: "h2", text: "How anhydrous grade differs from standard HPLC grade" },
      { type: "p", text: "Standard HPLC grade solvents are tested for water content but not held to the extremely tight limits that anhydrous grade requires. A typical HPLC grade methanol might specify water content below 0.05% (500ppm); anhydrous grade methanol would specify below 0.005% (50ppm) or tighter. The purification process includes additional drying steps (molecular sieve treatment, distillation from drying agents) that standard HPLC grade production doesn't require." },
      { type: "product-links", categories: ["anhydrous-solvents", "karl-fischer"] },
    ], relatedArticles: ["what-is-karl-fischer-titration", "what-is-hplc-grade-ethanol"],
  },
  // ── DEFINITIONS: product types ────────────────────────────
  "what-is-deuterated-solvent": {
    slug: "what-is-deuterated-solvent", title: "What Is A Deuterated Solvent?", h1: "What Is A Deuterated Solvent?", category: "definitions",
    excerpt: "Deuterated solvents replace hydrogen with deuterium for NMR spectroscopy — the solvent's proton signal disappears, leaving a clean spectrum.",
    seoDescription: "Deuterated NMR solvents explained: isotopic purity, common choices (CDCl3, DMSO-d6, D2O), and residual solvent peaks.",
    content: [
      { type: "p", text: "A deuterated solvent is one in which some or all of the hydrogen atoms have been replaced with deuterium (²H or D) — a heavier isotope of hydrogen. The primary use is in NMR spectroscopy, where deuterium's different nuclear spin properties make it 'invisible' to a standard proton NMR experiment, allowing the dissolved analyte's proton signals to be observed without a massive solvent peak dominating the spectrum." },
      { type: "h2", text: "Isotopic purity and residual solvent peaks" },
      { type: "p", text: "No deuteration process achieves 100% replacement — residual protonated solvent molecules always remain, producing a small 'residual solvent peak' in the proton spectrum at a characteristic chemical shift. Higher isotopic purity (99.8% vs 99.5% atom%D) means a smaller residual peak, which matters most when analyte signals happen to fall near the residual solvent chemical shift." },
      { type: "product-links", categories: ["nmr-deuterated"] },
    ], relatedArticles: ["what-is-spectroscopic-grade-solvent"],
  },
  "what-is-mobile-phase-bag": {
    slug: "what-is-mobile-phase-bag", title: "What Is A Ready-to-Use Mobile Phase Bag?", h1: "What Is A Mobile Phase Bag?", category: "definitions",
    excerpt: "Pre-filtered, pre-degassed mobile phase in collapsible bags — skips daily preparation, eliminates prep-related variability.",
    seoDescription: "Ready-to-use mobile phase bags explained: how they work, what's inside, and when they're worth the premium over hand-prepared mobile phase.",
    content: [
      { type: "p", text: "A ready-to-use mobile phase bag is a pre-mixed, pre-filtered, pre-degassed mobile phase solution delivered in a collapsible flexible bag (typically aluminum-foil laminate) with a connector fitting that attaches directly to the HPLC system's solvent inlet line. The bag collapses as liquid is withdrawn, minimizing headspace and air ingress — which means the mobile phase inside stays degassed and uncontaminated throughout its use, unlike a bottle that gains headspace with every use." },
      { type: "h2", text: "When bags make economic sense" },
      { type: "p", text: "The per-liter cost of pre-made mobile phase is higher than the raw materials for hand preparation, but the total cost comparison needs to include analyst time for daily preparation, filter and membrane consumables, investigation time from prep-related variability, and the risk cost of a batch-to-batch inconsistency causing a method failure. For high-throughput routine methods run daily by rotating staff, bags typically pay for themselves through consistency improvement alone." },
      { type: "product-links", categories: ["mobile-phase-bags"] },
    ], relatedArticles: ["how-to-prepare-mobile-phase", "what-is-mobile-phase"],
  },
  // ── TECHNIQUE: analytical methods ─────────────────────────
  "what-is-gc": {
    slug: "what-is-gc", title: "What Is Gas Chromatography (GC)?", h1: "What Is Gas Chromatography?", category: "technique",
    excerpt: "GC separates volatile compounds in the gas phase — different from HPLC in phase, temperature programming, and solvent role.",
    seoDescription: "Gas chromatography (GC) explained: how it works, difference from HPLC, typical detectors, and the role of solvent in GC analysis.",
    content: [
      { type: "p", text: "Gas chromatography separates volatile and semi-volatile compounds by vaporizing the sample at the injector and carrying the gas-phase analytes through a column using an inert carrier gas (helium, hydrogen, or nitrogen). Separation happens because different compounds interact differently with the column's stationary phase coating at a given temperature — compounds that interact more strongly are retained longer." },
      { type: "h2", text: "How solvent fits into GC analysis" },
      { type: "p", text: "Unlike HPLC where the solvent is the mobile phase doing the separating, in GC the solvent is primarily a sample vehicle — it dissolves the sample for injection, then evaporates in the injector before the actual separation begins. This is why GC grade solvent testing focuses on residue-on-evaporation and the absence of interfering peaks, rather than the UV transparency that HPLC grade testing emphasizes." },
      { type: "product-links", categories: ["gc-solvents"] },
    ], relatedArticles: ["what-is-gc-grade-solvent", "gc-solvent-selection-guide"],
  },
  "what-is-aas": {
    slug: "what-is-aas", title: "What Is Atomic Absorption Spectroscopy (AAS)?", h1: "What Is AAS?", category: "technique",
    excerpt: "AAS measures individual metal elements by their absorption of element-specific light — simpler than ICP-MS but limited to one element at a time.",
    seoDescription: "Atomic absorption spectroscopy (AAS) explained: flame and graphite furnace modes, standard solutions, and comparison to ICP-MS.",
    content: [
      { type: "p", text: "Atomic Absorption Spectroscopy (AAS) measures the concentration of a specific metal element by atomizing the sample (in a flame or graphite furnace) and measuring how much element-specific light it absorbs. Each element absorbs at a unique wavelength, which makes AAS highly selective — but also means it can only measure one element per run, unlike ICP-MS which measures many elements simultaneously." },
      { type: "h2", text: "Standard solutions in AAS" },
      { type: "p", text: "AAS calibration uses certified single-element standard solutions at known concentrations — the same standard solution product line used for ICP calibration, typically at 1000mg/L stock concentration diluted to working levels. The standard's matrix (acid type and concentration) needs to match the sample's matrix for accurate results." },
      { type: "product-links", categories: ["standard-solutions"] },
    ], relatedArticles: ["what-is-icp-ms", "what-is-trace-analysis-grade"],
  },
  "what-is-uv-vis-spectrophotometry": {
    slug: "what-is-uv-vis-spectrophotometry", title: "What Is UV-Vis Spectrophotometry?", h1: "What Is UV-Vis Spectrophotometry?", category: "technique",
    excerpt: "UV-Vis measures how much light a solution absorbs at specific wavelengths — the workhorse of routine concentration measurement in most labs.",
    seoDescription: "UV-Vis spectrophotometry explained: Beer-Lambert law, cuvette measurements, and why spectroscopic grade solvents matter for blanking.",
    content: [
      { type: "p", text: "UV-Vis spectrophotometry measures the absorbance of ultraviolet or visible light by a solution at one or more wavelengths, and uses that measurement (via the Beer-Lambert relationship) to determine the concentration of a light-absorbing compound. It's one of the simplest and most widely used quantitative analytical techniques, found in virtually every laboratory from teaching labs to pharmaceutical QC." },
      { type: "h2", text: "Why solvent grade matters for UV-Vis" },
      { type: "p", text: "The solvent used to dissolve the sample and as the reference blank directly affects the measurement — any absorbance from the solvent itself at the measurement wavelength biases the result. Spectroscopic grade solvents are specifically tested for minimal background absorbance across the UV-Vis range, making them the appropriate choice for quantitative spectrophotometric work." },
      { type: "product-links", categories: ["spectroscopic-solvents"] },
    ], relatedArticles: ["what-is-spectroscopic-grade-solvent"],
  },
  "what-is-dissolution-testing": {
    slug: "what-is-dissolution-testing", title: "What Is Dissolution Testing?", h1: "What Is Dissolution Testing?", category: "technique",
    excerpt: "Dissolution testing measures how fast an active ingredient releases from a solid dosage form — a critical pharmaceutical QC test with strict solvent requirements.",
    seoDescription: "Dissolution testing explained: USP apparatus types, dissolution media, and why pharma-grade solvents matter for this QC test.",
    content: [
      { type: "p", text: "Dissolution testing measures the rate at which an active pharmaceutical ingredient (API) dissolves from a solid dosage form (tablet, capsule, etc.) into a dissolution medium — simulating what happens in the body after a patient takes the medication. It's one of the most common and most regulatory-critical QC tests in pharmaceutical manufacturing, with results directly affecting batch release decisions." },
      { type: "h2", text: "Solvent and medium requirements" },
      { type: "p", text: "Dissolution media are specified by pharmacopeial monographs and vary by product — common media include simulated gastric fluid, simulated intestinal fluid, pH-buffered solutions, and surfactant-containing media. All components (buffers, acids, surfactants) need to meet USP/EP pharmacopeial grade to ensure the test results are traceable to compendial standards." },
      { type: "product-links", categories: ["pharma-grade", "standard-solutions"] },
    ], relatedArticles: ["what-is-pharma-grade-solvent", "what-is-coa"],
  },
  "what-is-quecers": {
    slug: "what-is-quecers", title: "What Is QuEChERS?", h1: "What Is QuEChERS?", category: "technique",
    excerpt: "QuEChERS is a fast, standardized sample preparation method for pesticide residue analysis — combining extraction and cleanup in one streamlined workflow.",
    seoDescription: "QuEChERS explained: the extraction and cleanup workflow, typical solvents and SPE products used, and why it dominates food safety testing.",
    content: [
      { type: "p", text: "QuEChERS (Quick, Easy, Cheap, Effective, Rugged, Safe) is a sample preparation method originally developed for multi-residue pesticide analysis in fruits and vegetables, and now widely adopted for a broad range of food safety and environmental testing applications. It combines a salting-out extraction step (acetonitrile + MgSO4/NaCl) with a dispersive solid-phase cleanup step (PSA and/or C18 sorbent mixed directly into the extract) in a single workflow that takes minutes rather than the hours required by older extraction methods." },
      { type: "h2", text: "Key consumables" },
      { type: "list", items: ["GC or HPLC grade acetonitrile — the primary extraction solvent", "QuEChERS salt packets (MgSO4 + NaCl in pre-weighed sachets)", "Dispersive SPE cleanup tubes (PSA, C18, GCB sorbents in pre-packed centrifuge tubes)", "Internal standard solution for quantitation"] },
      { type: "product-links", categories: ["spe-products", "gc-solvents"] },
    ], relatedArticles: ["what-is-spe", "what-is-gc-grade-solvent"],
  },
  "what-is-titration": {
    slug: "what-is-titration", title: "What Is Volumetric Titration?", h1: "What Is Titration?", category: "technique",
    excerpt: "Titration determines analyte concentration by measuring how much standard solution is needed to complete a chemical reaction — the foundation of classical wet chemistry.",
    seoDescription: "Volumetric titration explained: acid-base, redox, and complexometric methods, standard solutions, and why titer accuracy matters.",
    content: [
      { type: "p", text: "Volumetric titration measures the concentration of an analyte by reacting it with a standard solution (titrant) of precisely known concentration, delivered from a burette until the reaction reaches its equivalence point — detected by a color change (indicator), a pH jump (potentiometric endpoint), or a conductivity change. The volume of titrant consumed, combined with its known concentration, gives the analyte concentration directly." },
      { type: "h2", text: "Common titration types" },
      { type: "list", items: ["Acid-base — NaOH or HCl titrant, used for acidity, alkalinity, and assay of acidic/basic compounds", "Redox — KMnO4 or iodine titrant, used for oxidizable or reducible analytes", "Complexometric — EDTA titrant, used for metal ion determination (hardness, calcium, etc.)", "Precipitation — AgNO3 titrant, used for chloride and halide determination"] },
      { type: "product-links", categories: ["standard-solutions"] },
    ], relatedArticles: ["what-is-karl-fischer-titration", "what-is-coa"],
  },
  // ── COMPLIANCE: regulatory frameworks ─────────────────────
  "what-is-gmp": {
    slug: "what-is-gmp", title: "What Is GMP (Good Manufacturing Practice)?", h1: "What Is GMP?", category: "compliance",
    excerpt: "GMP is the regulatory framework ensuring pharmaceutical products are consistently produced and controlled to quality standards — and it extends to every reagent used in the process.",
    seoDescription: "GMP (Good Manufacturing Practice) explained: what it requires, how it affects laboratory solvent and reagent purchasing, and supplier qualification.",
    content: [
      { type: "p", text: "Good Manufacturing Practice (GMP) is a system of regulations, codes, and guidelines governing the manufacture, testing, and quality assurance of pharmaceutical products, ensuring they are consistently produced and controlled to the quality standards appropriate to their intended use. In practice, GMP touches virtually everything in a pharmaceutical manufacturing and QC environment — including the solvents and reagents used in testing, which must themselves meet defined quality standards and come from qualified suppliers." },
      { type: "h2", text: "How GMP affects solvent purchasing" },
      { type: "list", items: ["Solvents used in GMP testing must meet pharmacopeial or defined in-house specifications", "Suppliers must be qualified and maintained on an approved supplier list, subject to periodic re-evaluation", "Every lot must have a CoA reviewed and approved by QC before use", "Change notifications from the supplier (raw material, process, or specification changes) must be managed through the site's change control system"] },
      { type: "product-links", categories: ["pharma-grade"] },
    ], relatedArticles: ["what-is-coa", "what-is-pharma-grade-solvent", "what-is-ich-q3d"],
  },
  "what-is-glp": {
    slug: "what-is-glp", title: "What Is GLP (Good Laboratory Practice)?", h1: "What Is GLP?", category: "compliance",
    excerpt: "GLP governs non-clinical safety studies — ensuring data integrity and traceability for studies submitted to regulatory authorities.",
    seoDescription: "GLP (Good Laboratory Practice) explained: what it covers, how it differs from GMP, and implications for reagent documentation and archiving.",
    content: [
      { type: "p", text: "Good Laboratory Practice (GLP) is a quality system governing non-clinical health and environmental safety studies — the preclinical studies whose data is submitted to regulatory authorities (FDA, EMA, etc.) as part of a drug, pesticide, or chemical registration dossier. GLP's primary concern is data integrity and reproducibility: ensuring that study results are trustworthy and that the records are complete enough to allow reconstruction of the study if needed, potentially years later." },
      { type: "h2", text: "What GLP means for reagent management" },
      { type: "p", text: "Under GLP, every reagent used in a study must be documented with sufficient detail to allow the study to be reconstructed — including the supplier, grade, lot number, and CoA for every solvent and standard solution. Reagent records must be archived for the lifetime of the study data (often 15+ years for pharmaceutical studies), which means the supplier's ability to provide traceable, archivable documentation matters as much as the product's chemical quality." },
      { type: "product-links", categories: ["lcms-solvents", "standard-solutions"] },
    ], relatedArticles: ["what-is-gmp", "what-is-coa"],
  },
  "what-is-iso-17025": {
    slug: "what-is-iso-17025", title: "What Is ISO 17025?", h1: "What Is ISO 17025?", category: "compliance",
    excerpt: "ISO 17025 is the international standard for testing and calibration laboratory competence — and it has specific requirements for reagent quality and traceability.",
    seoDescription: "ISO 17025 explained: laboratory accreditation requirements, reagent quality expectations, and supplier documentation for accredited labs.",
    content: [
      { type: "p", text: "ISO/IEC 17025 is the international standard specifying general requirements for the competence, impartiality, and consistent operation of testing and calibration laboratories. Accreditation to ISO 17025 (typically through a national accreditation body) demonstrates that a laboratory's results are technically valid and traceable — it's the most widely recognized laboratory quality standard globally, used across environmental, food, forensic, and clinical testing sectors." },
      { type: "h2", text: "Reagent and reference material requirements" },
      { type: "list", items: ["Reagents must be of appropriate quality for the test methods being performed", "Reference materials and standards must be traceable to SI units or certified reference materials where available", "Suppliers of critical reagents should be evaluated and records maintained", "CoA data must be reviewed and retained as part of the quality record for each test"] },
      { type: "product-links", categories: ["standard-solutions", "hplc-solvents"] },
    ], relatedArticles: ["what-is-gmp", "what-is-glp", "what-is-coa"],
  },
  "what-is-ghs": {
    slug: "what-is-ghs", title: "What Is GHS (Globally Harmonized System)?", h1: "What Is GHS?", category: "compliance",
    excerpt: "GHS standardizes how chemical hazards are classified and communicated worldwide — the system behind the SDS format and hazard pictograms you see on every bottle.",
    seoDescription: "GHS explained: hazard classification, SDS format, pictograms, signal words, and how it replaced the old MSDS system.",
    content: [
      { type: "p", text: "The Globally Harmonized System of Classification and Labelling of Chemicals (GHS) is a United Nations framework that standardizes how chemical hazards are classified (by toxicity, flammability, corrosivity, etc.) and how that hazard information is communicated to users — through standardized label elements (pictograms, signal words, hazard/precautionary statements) and a 16-section Safety Data Sheet (SDS) format that replaced the older, regionally variable MSDS formats." },
      { type: "h2", text: "Why GHS matters for solvent purchasing" },
      { type: "p", text: "GHS implementation means your solvent supplier's SDS should follow the same 16-section format regardless of which country the supplier is in, making it easier to compare hazard information across suppliers and ensuring your lab's safety documentation meets a globally recognized standard. If a supplier provides an SDS in an older or non-standard format, that's a signal worth noting about their regulatory awareness." },
      { type: "product-links", categories: ["hplc-solvents"] },
    ], relatedArticles: ["what-is-sds", "what-is-un-number"],
  },
  // ── MOBILE-PHASE: deeper topics ───────────────────────────
  "mobile-phase-troubleshooting-guide": {
    slug: "mobile-phase-troubleshooting-guide", title: "Mobile Phase Troubleshooting: Common Problems & Solutions", h1: "Mobile Phase Troubleshooting", category: "mobile-phase",
    excerpt: "A systematic checklist for diagnosing mobile-phase-related HPLC problems — before blaming the column or the instrument.",
    seoDescription: "HPLC mobile phase troubleshooting guide: baseline drift, retention shift, pressure changes, and other symptoms traced to mobile phase causes.",
    content: [
      { type: "p", text: "More day-to-day HPLC problems trace back to mobile phase than to any other single component of the system — but mobile phase is also the last thing most analysts suspect, because a bottle of clear solvent looks the same whether it's performing perfectly or quietly causing problems. This checklist covers the most common mobile-phase-attributable symptoms and the fastest way to confirm or rule out mobile phase as the cause." },
      { type: "h2", text: "Systematic approach" },
      { type: "list", items: ["Run a blank gradient (no sample, no column) — if the problem persists, it's system or solvent, not column or sample", "Compare current blank against a saved reference blank from when the method was last known-good", "Check the mobile phase preparation date and preparer — does the problem correlate with a specific batch?", "Compare the current solvent lot's CoA against the previous lot — did anything change at the specification level?", "For gradient methods: run each channel individually to isolate which side is contributing to the problem"] },
      { type: "product-links", categories: ["mobile-phase-bags", "hplc-solvents"] },
    ], relatedArticles: ["how-to-prepare-mobile-phase", "mobile-phase-filtration", "mobile-phase-degassing"],
  },
  "choosing-mobile-phase-additives": {
    slug: "choosing-mobile-phase-additives", title: "Choosing Mobile Phase Additives: Acids, Buffers & Ion-Pairing Reagents", h1: "Choosing Mobile Phase Additives", category: "mobile-phase",
    excerpt: "When to use formic acid vs acetic acid vs a buffer salt — and what to avoid if LC-MS is in the picture.",
    seoDescription: "How to choose HPLC mobile phase additives: formic acid, acetic acid, ammonium formate/acetate, phosphate buffers, and LC-MS compatibility.",
    content: [
      { type: "p", text: "Mobile phase additives — acids, buffers, and ion-pairing reagents — serve two distinct purposes: controlling pH for consistent retention of ionizable analytes, and improving peak shape for compounds that tail or broaden without ionic modification. Choosing the right additive means matching its buffering range to your target pH, confirming detector compatibility (especially for LC-MS), and using the minimum effective concentration rather than defaulting to whatever the last method happened to use." },
      { type: "h2", text: "Quick selection guide" },
      { type: "list", items: ["Formic acid (0.1%) — positive-mode ESI default, no real buffering capacity but improves protonation", "Acetic acid (0.1-1%) — similar to formic acid, slightly different selectivity", "Ammonium formate/acetate (2-10mM) — genuine buffering, works in both positive and negative ESI", "Phosphate buffer (10-50mM) — excellent buffering range, UV-only methods only, never LC-MS", "TFA — avoid for ESI (strong ion suppression), acceptable for UV peptide methods"] },
      { type: "product-links", categories: ["mobile-phase-bags", "standard-solutions"] },
    ], relatedArticles: ["what-is-mobile-phase", "lcms-solvent-selection-guide"],
  },
  "mobile-phase-stability-how-long-is-too-long": {
    slug: "mobile-phase-stability-how-long-is-too-long", title: "Mobile Phase Stability: How Long Is Too Long?", h1: "Mobile Phase Stability", category: "mobile-phase",
    excerpt: "Prepared mobile phase doesn't last forever — here's how long different types actually stay usable, and the signs it's time to make a fresh batch.",
    seoDescription: "Mobile phase shelf life and stability: buffered vs organic, microbial growth risk, and practical use-by guidelines.",
    content: [
      { type: "p", text: "How long a prepared mobile phase remains fit for use depends primarily on its composition — specifically whether it's an aqueous buffer (most perishable), a high-organic mixture (most stable), or somewhere in between. The failure mode isn't usually chemical degradation of the solvent itself, but microbial growth in aqueous components, gradual pH drift in insufficiently buffered systems, or evaporative composition change from improperly sealed containers." },
      { type: "h2", text: "Practical use-by guidelines" },
      { type: "list", items: ["Buffered aqueous solutions: 24-48 hours at room temperature, up to 5-7 days refrigerated (check solubility first)", "High-organic mixtures (>70% acetonitrile or methanol): 1-2 weeks in sealed containers", "Unbuffered pure solvents: governed by the bottle's original shelf life, typically months to years sealed", "Ready-to-use bags: manufacturer-specified shelf life, typically 6-12 months sealed"] },
      { type: "product-links", categories: ["mobile-phase-bags"] },
    ], relatedArticles: ["how-to-prepare-mobile-phase", "mobile-phase-filtration"],
  },
  // ── SELECTION-GUIDES: more methods ────────────────────────
  "spe-cartridge-selection-guide": {
    slug: "spe-cartridge-selection-guide", title: "SPE Cartridge Selection Guide", h1: "SPE Cartridge Selection Guide", category: "selection-guides",
    excerpt: "Choosing the right SPE sorbent — C18 vs HLB vs ion exchange vs mixed-mode — based on your analyte's properties and your matrix.",
    seoDescription: "How to select the right SPE cartridge: C18, HLB, SAX, SCX, mixed-mode, by analyte polarity, charge, and sample matrix.",
    content: [
      { type: "p", text: "SPE cartridge selection comes down to matching the sorbent chemistry to your analyte's properties and your matrix. The analyte's polarity and charge state determine which sorbent will retain it; the matrix complexity determines how much cleanup selectivity you need (a clean aqueous sample might work fine on a simple C18; a dirty biological matrix might need mixed-mode selectivity to separate the analyte from co-extracted matrix components)." },
      { type: "h2", text: "Selection framework" },
      { type: "list", items: ["Non-polar to moderately polar analytes from aqueous matrix → C18 or C8", "Broad polarity range, multi-analyte methods → HLB (polymeric, works across a wider range)", "Acidic analytes → SAX (strong anion exchange) or MAX (mixed-mode anion)", "Basic analytes → SCX (strong cation exchange) or MCX (mixed-mode cation)", "Multi-residue pesticide methods → QuEChERS dispersive SPE (PSA/C18/GCB)"] },
      { type: "product-links", categories: ["spe-products"] },
    ], relatedArticles: ["what-is-spe", "what-is-quecers"],
  },
  "standard-solution-selection-guide": {
    slug: "standard-solution-selection-guide", title: "Standard Solution & Reference Material Selection Guide", h1: "Standard Solution Selection Guide", category: "selection-guides",
    excerpt: "Choosing the right calibration standard — single vs multi-element, matrix matching, and certification traceability.",
    seoDescription: "How to select standard solutions and reference materials: ICP/AAS standards, pH buffers, titration standards, and certification requirements.",
    content: [
      { type: "p", text: "Standard solution selection depends on three things: what you're measuring (which elements or compounds), what instrument and method you're calibrating against, and what level of traceability your quality system requires. Getting these three aligned avoids the common mistake of buying a standard that's technically adequate for the measurement but doesn't satisfy the documentation requirements of an audit or accreditation." },
      { type: "h2", text: "Common standard solution categories" },
      { type: "list", items: ["ICP/AAS element standards — single-element (1000mg/L) or multi-element mixtures, in acid matrix matched to your digestion protocol", "pH buffer standards — certified at 4.00, 7.00, 9.18, etc., for pH meter calibration", "Conductivity standards — certified at specific µS/cm values for conductivity meter verification", "Titration standard solutions — NaOH, HCl, EDTA, KMnO4 at certified molar concentrations", "Karl Fischer water standards — certified water content for KF titrator verification"] },
      { type: "product-links", categories: ["standard-solutions", "karl-fischer"] },
    ], relatedArticles: ["what-is-icp-ms", "what-is-aas", "what-is-karl-fischer-titration"],
  },
  "solvent-grade-comparison-chart": {
    slug: "solvent-grade-comparison-chart", title: "Solvent Grade Comparison: HPLC vs LC-MS vs GC vs Pharma vs Electronic", h1: "Solvent Grade Comparison", category: "selection-guides",
    excerpt: "A side-by-side reference comparing what each solvent grade actually tests for — so you can match grade to method without overpaying.",
    seoDescription: "Solvent grade comparison chart: HPLC, LC-MS, GC, pharma (USP/EP), electronic, spectroscopic, and trace analysis grades compared.",
    content: [
      { type: "p", text: "Different solvent grades exist because different analytical techniques are sensitive to different categories of contamination. UV-detected HPLC cares about UV-absorbing impurities; mass spectrometry cares about trace metals and ionizable contaminants; GC cares about non-volatile residue; pharmaceutical methods care about pharmacopeial compliance. Buying the cheapest grade that actually covers your method's sensitivity requirements is good practice, not corner-cutting." },
      { type: "h2", text: "At-a-glance comparison" },
      { type: "list", items: ["HPLC grade — UV cutoff, water content, non-volatile residue", "LC-MS grade — everything HPLC tests + trace metals + MS-blank chromatogram", "GC grade — residue on evaporation, GC purity check (no interfering peaks)", "Pharma (USP/EP) — pharmacopeial monograph testing, identity, specified impurities", "Electronic (SEMI) — sub-ppb trace metals, particle count, for semiconductor processing", "Spectroscopic — UV/Vis background absorbance across a wavelength range", "Trace analysis — ultra-low metal content in digestion acids for ICP-MS"] },
      { type: "product-links", categories: ["hplc-solvents", "lcms-solvents", "gc-solvents", "pharma-grade"] },
    ], relatedArticles: ["hplc-vs-lcms-solvents", "hplc-solvent-selection-guide", "gc-solvent-selection-guide"],
  },
};
