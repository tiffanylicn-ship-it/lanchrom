// ============================================================
// LANCHROM™ — Knowledge Center Articles
// ============================================================
// Each article is content for a single, indexable page at
// /resources/knowledge-center/[slug]. Articles are short-form
// (800-1500 words) reference/explainer content — "what is X" and
// "how to X" — distinct from the long-form (5000-8000 word) Guides
// board, which covers fewer topics in much greater depth.
//
// Content is stored as structured blocks rather than raw HTML/markdown
// so every article renders through the same typographic system
// (consistent heading styles, list styles, product-link cards) instead
// of each article reinventing its own inline styling.

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "product-links"; categories: string[] };

export interface KnowledgeArticle {
  slug: string;
  title: string;          // <title> tag
  h1: string;
  category: "definitions" | "mobile-phase" | "selection-guides" | "technique" | "compliance" | "grades";
  excerpt: string;        // shown on the index page
  seoDescription: string;
  content: ContentBlock[];
  relatedArticles?: string[]; // other article slugs
}

export const KNOWLEDGE_ARTICLES: Record<string, KnowledgeArticle> = {
  "what-is-hplc-grade-ethanol": {
    slug: "what-is-hplc-grade-ethanol",
    title: "What Is HPLC Grade Ethanol?",
    h1: "What Is HPLC Grade Ethanol?",
    category: "definitions",
    excerpt: "HPLC grade ethanol is purified to a defined UV cutoff and trace-impurity specification — here's what separates it from reagent or industrial grade.",
    seoDescription: "HPLC grade ethanol explained: UV cutoff, water content, trace impurity specs, and when you actually need it over a lower grade.",
    content: [
      { type: "p", text: "HPLC grade ethanol is ethanol purified and tested to meet the specifications required for use as an HPLC mobile phase component or sample diluent — primarily a defined UV cutoff wavelength, low water content, and tight control on trace impurities that would otherwise show up as extra peaks or baseline drift during a chromatographic run." },
      { type: "p", text: "The distinction matters because \"ethanol\" sold for cleaning, industrial solvent use, or even general reagent-grade lab work isn't tested against the same impurity panel. A bottle of 95% denatured ethanol from a hardware store and a bottle of HPLC grade ethanol from a chemical manufacturer can both legally be called \"ethanol,\" but only one of them has been verified not to introduce UV-absorbing contaminants into your separation." },
      { type: "h2", text: "What's actually specified on an HPLC grade ethanol CoA" },
      { type: "list", items: [
        "Assay (purity) — typically ≥99.5% or ≥99.9% depending on supplier grade tier",
        "UV cutoff — the wavelength below which absorbance exceeds a defined threshold (lower cutoff = cleaner for UV detection)",
        "Water content — tested by Karl Fischer titration, since residual water affects both UV transparency and mobile phase reproducibility",
        "Non-volatile residue — what's left behind after evaporation, an indicator of dissolved solid contaminants",
        "Trace metal content — relevant if the ethanol will be used anywhere near ICP-MS or other trace-metal-sensitive workflows",
      ]},
      { type: "h2", text: "When you actually need HPLC grade vs. a lower grade" },
      { type: "p", text: "If ethanol is part of your mobile phase, touches the sample at any point before detection, or is used to prepare standards, HPLC grade (or higher) is the right call — the cost difference per liter is small relative to the cost of a failed run or an unexplained ghost peak that turns out to be solvent contamination. For cleaning glassware or wiping down a bench, reagent grade or even technical grade is fine; there's no reason to pay HPLC-grade pricing for a use case that never touches the detector." },
      { type: "callout", title: "Anhydrous vs. standard HPLC grade", text: "Some methods (particularly normal-phase or anhydrous reaction chemistry) call for anhydrous ethanol with water content controlled below 0.1% or even 0.01% — a tighter spec than standard HPLC grade. Check your method's water tolerance before assuming standard grade is sufficient." },
      { type: "product-links", categories: ["hplc-solvents", "anhydrous-solvents"] },
    ],
    relatedArticles: ["what-is-hplc-grade-ipa", "what-is-mobile-phase", "hplc-vs-lcms-solvents"],
  },

  "what-is-hplc-grade-ipa": {
    slug: "what-is-hplc-grade-ipa",
    title: "What Is HPLC Grade IPA (Isopropyl Alcohol)?",
    h1: "What Is HPLC Grade IPA?",
    category: "definitions",
    excerpt: "HPLC grade isopropyl alcohol is filtered and tested for UV transparency and trace impurities — common in normal-phase, chiral, and sample prep applications.",
    seoDescription: "HPLC grade IPA (isopropyl alcohol) explained: specifications, UV cutoff, and typical use in normal-phase and chiral HPLC.",
    content: [
      { type: "p", text: "HPLC grade isopropyl alcohol (IPA, also called 2-propanol or isopropanol) is IPA purified and tested against the impurity and UV-transparency specifications needed for chromatographic use — distinct from the IPA sold for general cleaning or disinfection, which has no such testing behind it." },
      { type: "p", text: "IPA shows up in HPLC work in a few specific roles: as a mobile phase modifier in normal-phase and chiral separations (where its polarity and viscosity profile work well with silica and polysaccharide-based chiral columns), as a needle wash or sample diluent, and in some reversed-phase methods as a stronger organic modifier than methanol or acetonitrile when extra elution strength is needed." },
      { type: "h2", text: "Why viscosity matters more for IPA than for other HPLC solvents" },
      { type: "p", text: "IPA is noticeably more viscous than acetonitrile or methanol, which translates directly into higher column backpressure at a given flow rate. This isn't a purity issue, but it's worth knowing before troubleshooting an unexpected pressure spike after switching solvents — check whether the increase is consistent with IPA's known viscosity before assuming a column or system problem." },
      { type: "h2", text: "Specification highlights" },
      { type: "list", items: [
        "UV cutoff — typically reported around 205nm for HPLC grade",
        "Water content — controlled via Karl Fischer titration",
        "Non-volatile residue — low limits to avoid contaminating normal-phase silica columns",
        "Peroxide content — IPA can form peroxides on long-term storage; quality IPA is tested or stabilized against this",
      ]},
      { type: "product-links", categories: ["hplc-solvents", "spectroscopic-solvents"] },
    ],
    relatedArticles: ["what-is-hplc-grade-ethanol", "hplc-solvent-selection-guide"],
  },

  "what-is-lcms-grade-solvent": {
    slug: "what-is-lcms-grade-solvent",
    title: "What Is LC-MS Grade Solvent?",
    h1: "What Is LC-MS Grade Solvent?",
    category: "definitions",
    excerpt: "LC-MS grade solvents are tested specifically for mass spec background — a different (and stricter) bar than HPLC grade UV transparency.",
    seoDescription: "LC-MS grade solvent explained: MS-blank testing, trace metal limits, and why LC-MS grade differs from standard HPLC grade.",
    content: [
      { type: "p", text: "LC-MS grade solvent is solvent tested specifically for its background signal when run through a mass spectrometer — not just its UV absorbance, which is what HPLC grade testing focuses on. A solvent can pass HPLC grade specs comfortably and still produce an unacceptable LC-MS background, because the contaminants that interfere with UV detection (conjugated organic compounds) are mostly different from the ones that interfere with mass spec detection (trace metal ions, polymer leachates, surfactant residues)." },
      { type: "h2", text: "What's tested differently for LC-MS grade" },
      { type: "list", items: [
        "MS blank test — the solvent is run through an LC-MS system and the resulting chromatogram is checked against a background-signal threshold",
        "Trace metal content — typically held under 1ppb for sodium, potassium, and other common adduct-forming ions, since these create extra peaks (adducts) on top of the analyte signal",
        "Non-volatile residue — even lower limits than HPLC grade, since any residue concentrates at the source and can contaminate the ion source over time",
        "Packaging — LC-MS grade solvents are typically bottled in containers specifically chosen not to leach plasticizers or stabilizers into the solvent, since these show up directly in full-scan MS data",
      ]},
      { type: "h2", text: "Does LC-MS grade also work for HPLC-UV methods?" },
      { type: "p", text: "Yes — LC-MS grade is a strict superset of HPLC grade in practical terms; a solvent clean enough for mass spec is more than clean enough for UV detection. The reverse isn't true, which is the common mistake: substituting standard HPLC grade into an LC-MS method and getting unexplained background noise that turns out to be a solvent issue, not an instrument problem." },
      { type: "product-links", categories: ["lcms-solvents", "hplc-solvents"] },
    ],
    relatedArticles: ["hplc-vs-lcms-solvents", "lcms-solvent-selection-guide"],
  },

  "what-is-mobile-phase": {
    slug: "what-is-mobile-phase",
    title: "What Is Mobile Phase In HPLC?",
    h1: "What Is Mobile Phase?",
    category: "definitions",
    excerpt: "Mobile phase is the solvent (or solvent mixture) that carries your sample through an HPLC column — here's how it actually drives separation.",
    seoDescription: "Mobile phase in HPLC explained: what it is, how it interacts with the stationary phase, and isocratic vs. gradient elution.",
    content: [
      { type: "p", text: "Mobile phase is the liquid that's continuously pumped through an HPLC column, carrying the injected sample along with it. Separation happens because different compounds in the sample interact differently with the column's stationary phase (the packing material) versus the mobile phase — compounds that prefer the mobile phase move through faster, compounds that prefer the stationary phase move through slower, and that difference in transit time is what separates a mixture into individual peaks." },
      { type: "h2", text: "Isocratic vs. gradient mobile phase" },
      { type: "p", text: "An isocratic method uses a single, fixed mobile phase composition for the entire run — simpler to prepare and more reproducible, but limited in resolving power for complex mixtures. A gradient method changes the mobile phase composition over time (typically increasing the percentage of organic solvent), which improves resolution for compounds with a wide range of polarities at the cost of more complex method development and longer re-equilibration time between runs." },
      { type: "h2", text: "Common mobile phase components" },
      { type: "list", items: [
        "Water — usually the aqueous component, often buffered or acidified",
        "Acetonitrile or methanol — the most common organic modifiers",
        "Buffers (phosphate, acetate, formate) — control pH and ionic strength, particularly important for ionizable analytes",
        "Ion-pairing reagents — used for compounds that don't retain well under standard reversed-phase conditions",
      ]},
      { type: "callout", title: "Mobile phase vs. eluent vs. solvent system", text: "These terms are often used interchangeably in casual lab conversation, though \"mobile phase\" is the formal term referring specifically to the moving liquid phase in chromatography, as distinct from the stationary phase packed in the column." },
      { type: "product-links", categories: ["mobile-phase-bags", "hplc-solvents"] },
    ],
    relatedArticles: ["how-to-prepare-mobile-phase", "mobile-phase-filtration", "mobile-phase-degassing"],
  },

  "how-to-prepare-mobile-phase": {
    slug: "how-to-prepare-mobile-phase",
    title: "How To Prepare HPLC Mobile Phase",
    h1: "How To Prepare Mobile Phase",
    category: "mobile-phase",
    excerpt: "A walkthrough of mobile phase preparation — measuring, mixing, filtering, and degassing — and the most common places it goes wrong.",
    seoDescription: "How to prepare HPLC mobile phase: accurate measurement, mixing order, filtration, and degassing steps that affect method reproducibility.",
    content: [
      { type: "p", text: "Mobile phase preparation looks simple — measure, mix, filter, degas — but small inconsistencies at each step are one of the most common sources of day-to-day method variability, especially in labs where multiple people prepare buffers on rotation." },
      { type: "h2", text: "1. Measure by volume or weight consistently" },
      { type: "p", text: "Decide whether your SOP specifies volume-to-volume or weight-to-weight ratios and stick to it — the two aren't interchangeable for solvents with different densities, and switching between them silently between batches is a common source of subtle retention time drift that's hard to trace back to its source." },
      { type: "h2", text: "2. Mix in the correct order" },
      { type: "p", text: "When buffers are involved, add the aqueous buffer to the volumetric flask first, then add the organic modifier — adding water to a flask that already has a significant volume of organic solvent in it can cause local concentration effects and, in some buffer systems, affect final pH." },
      { type: "h2", text: "3. Filter through an appropriate membrane" },
      { type: "p", text: "Particulates in mobile phase damage column frits and inline filters over time, and can cause erratic pressure readings. Use a filter membrane chemically compatible with your solvent system — PTFE for organic-heavy mixtures, nylon or PVDF for aqueous buffers — at 0.45µm or 0.22µm depending on your column's particle size." },
      { type: "h2", text: "4. Degas before use" },
      { type: "p", text: "Dissolved gas in mobile phase causes baseline noise and can introduce air bubbles into the pump head, leading to flow irregularities. Vacuum filtration during the filtering step provides some degassing; ultrasonic degassing or an inline degasser provides more thorough and consistent removal." },
      { type: "callout", title: "Skip the prep entirely", text: "Pre-filtered, pre-degassed mobile phase delivered in ready-to-connect bags removes steps 3 and 4 (and the measurement/mixing variability of steps 1-2) from the daily routine entirely." },
      { type: "product-links", categories: ["mobile-phase-bags"] },
    ],
    relatedArticles: ["mobile-phase-filtration", "mobile-phase-degassing", "what-is-mobile-phase"],
  },

  "mobile-phase-filtration": {
    slug: "mobile-phase-filtration",
    title: "Mobile Phase Filtration: Why It Matters And How To Do It Right",
    h1: "Mobile Phase Filtration",
    category: "mobile-phase",
    excerpt: "Unfiltered mobile phase is one of the most common (and most preventable) causes of column and system damage in routine HPLC use.",
    seoDescription: "HPLC mobile phase filtration explained: why it matters, choosing the right membrane, and 0.45µm vs 0.22µm filtration.",
    content: [
      { type: "p", text: "Mobile phase filtration removes particulates before they reach the pump, inline filter, or column frit — all of which have tolerances measured in microns. A speck of dust, a fiber from a lab wipe, or undissolved buffer salt that didn't fully go into solution can lodge in a frit and cause a slow, frustrating rise in backpressure that's often misdiagnosed as a column problem." },
      { type: "h2", text: "Choosing a filter membrane" },
      { type: "list", items: [
        "PTFE (polytetrafluoroethylene) — broadly solvent-resistant, good default for high-organic-content mobile phases",
        "Nylon — good for aqueous and moderately organic mixtures, but not compatible with strong acids",
        "PVDF (polyvinylidene fluoride) — good general-purpose membrane for aqueous buffers, broad chemical compatibility",
        "Cellulose acetate / nitrate — low protein binding, sometimes preferred for biomolecule-containing mobile phases, but limited solvent compatibility",
      ]},
      { type: "h2", text: "0.45µm vs. 0.22µm" },
      { type: "p", text: "0.45µm filtration is the traditional standard for conventional HPLC. For UPLC systems with sub-2-micron particle columns, 0.22µm filtration is generally recommended — the smaller column frit openings have much less tolerance for particulates than conventional HPLC columns." },
      { type: "callout", title: "Filtering isn't a substitute for using clean solvents to begin with", text: "Filtration removes particulates, but it does nothing for dissolved contaminants — trace metals, UV-absorbing organics, or MS-interfering compounds pass straight through a filter membrane. Filtration and solvent grade solve different problems." },
      { type: "product-links", categories: ["mobile-phase-bags", "spe-products"] },
    ],
    relatedArticles: ["how-to-prepare-mobile-phase", "mobile-phase-degassing"],
  },

  "mobile-phase-degassing": {
    slug: "mobile-phase-degassing",
    title: "Mobile Phase Degassing: Methods And Why It's Necessary",
    h1: "Mobile Phase Degassing",
    category: "mobile-phase",
    excerpt: "Dissolved gas in mobile phase causes baseline noise and pump irregularities — here's what degassing actually fixes and the common methods.",
    seoDescription: "HPLC mobile phase degassing explained: why dissolved gas causes problems, and comparing vacuum, ultrasonic, and inline degassing methods.",
    content: [
      { type: "p", text: "Mobile phase absorbs dissolved gas (primarily nitrogen and oxygen from the air) during preparation and storage. As that gas moves through the pump and detector, it can come out of solution as microbubbles — particularly in low-pressure regions of the flow path — causing baseline noise, irregular peak shapes, and in worse cases, pump cavitation that throws off flow accuracy entirely." },
      { type: "h2", text: "Common degassing methods" },
      { type: "list", items: [
        "Vacuum filtration — degasses somewhat as a side effect of the filtration step, though not as thoroughly as a dedicated method",
        "Ultrasonic bath — effective and widely available, typically 10-15 minutes per bottle is sufficient for most mobile phases",
        "Helium sparging — bubbling helium through the mobile phase displaces dissolved air gases; effective but adds cost and complexity",
        "Inline vacuum degasser — built into most modern HPLC systems, continuously degasses mobile phase as it's drawn into the pump, the most consistent method for routine use",
      ]},
      { type: "h2", text: "Signs your mobile phase needs better degassing" },
      { type: "p", text: "Erratic baseline noise that doesn't correlate with anything in the sample, small visible bubbles in clear mobile phase tubing, or a pump that intermittently loses prime are all signs worth checking against degassing practice before troubleshooting further upstream or downstream." },
      { type: "product-links", categories: ["mobile-phase-bags"] },
    ],
    relatedArticles: ["mobile-phase-filtration", "how-to-prepare-mobile-phase"],
  },

  "hplc-solvent-selection-guide": {
    slug: "hplc-solvent-selection-guide",
    title: "HPLC Solvent Selection Guide",
    h1: "HPLC Solvent Selection Guide",
    category: "selection-guides",
    excerpt: "A practical framework for choosing the right HPLC solvent grade and type based on your method, detector, and budget.",
    seoDescription: "How to select the right HPLC solvent: grade considerations, common solvent choices by method type, and cost vs. purity tradeoffs.",
    content: [
      { type: "p", text: "Choosing an HPLC solvent comes down to three questions: what detector are you using, what does your method actually require in terms of purity, and what's the cost tradeoff between over-specifying (paying for purity you don't need) and under-specifying (risking method failure)." },
      { type: "h2", text: "Start with your detector" },
      { type: "list", items: [
        "UV/Vis detection — HPLC grade is generally sufficient; check the UV cutoff against your detection wavelength",
        "Fluorescence detection — HPLC grade is usually fine, though some fluorescent contaminants can be detector-specific issues worth testing for",
        "Mass spectrometry (LC-MS) — requires LC-MS grade, not standard HPLC grade — see our LC-MS vs HPLC grade comparison",
        "Refractive index (RI) detection — extremely sensitive to any trace contamination changing the baseline refractive index; use the highest available grade",
      ]},
      { type: "h2", text: "Common solvent choices by separation mode" },
      { type: "list", items: [
        "Reversed-phase — acetonitrile or methanol as the organic modifier, water (often buffered) as the aqueous component",
        "Normal-phase — hexane or heptane as the non-polar component, with IPA or ethyl acetate as a polar modifier",
        "HILIC — high acetonitrile content with a small aqueous/buffer component",
        "Chiral — IPA, ethanol, or hexane-based systems depending on the chiral stationary phase",
      ]},
      { type: "h2", text: "Acetonitrile vs. methanol" },
      { type: "p", text: "These are the two most common reversed-phase organic modifiers, and the choice between them affects more than just elution strength: acetonitrile has lower viscosity (lower backpressure), a lower UV cutoff (better for low-wavelength detection), but is more expensive and has faced periodic supply shortages; methanol is cheaper and more available but has higher viscosity and a higher UV cutoff." },
      { type: "product-links", categories: ["hplc-solvents", "lcms-solvents"] },
    ],
    relatedArticles: ["hplc-vs-lcms-solvents", "lcms-solvent-selection-guide"],
  },

  "lcms-solvent-selection-guide": {
    slug: "lcms-solvent-selection-guide",
    title: "LC-MS Solvent Selection Guide",
    h1: "LC-MS Solvent Selection Guide",
    category: "selection-guides",
    excerpt: "What to check before choosing an LC-MS solvent — beyond just buying \"LC-MS grade\" and assuming all suppliers test the same way.",
    seoDescription: "How to select LC-MS grade solvents: MS-blank testing, trace metal specs, additive choices for ionization mode, and supplier qualification.",
    content: [
      { type: "p", text: "LC-MS grade isn't a single universal standard — different suppliers test against somewhat different panels, and \"LC-MS grade\" on a label doesn't guarantee the specific background performance your method needs. Beyond just selecting the grade tier, a few additional factors matter for LC-MS specifically." },
      { type: "h2", text: "Match the additive to your ionization mode" },
      { type: "p", text: "Formic acid is the most common mobile phase additive for positive-mode ESI, improving ionization efficiency for basic analytes. Ammonium acetate or ammonium formate buffers are common for both positive and negative mode, offering pH buffering with volatility compatible with the MS source. Avoid non-volatile buffers (phosphate, etc.) entirely in LC-MS work — they contaminate and can permanently damage the ion source." },
      { type: "h2", text: "Check the trace metal panel, not just the headline spec" },
      { type: "p", text: "\"Sub-ppb metals\" sounds reassuring but doesn't tell you which metals were tested. Sodium and potassium are the most common adduct-forming contaminants worth specifically confirming are controlled, since Na+ and K+ adducts are some of the most frequently encountered background interferences in positive-mode LC-MS." },
      { type: "h2", text: "Request an actual MS-blank chromatogram, not just a spec sheet" },
      { type: "p", text: "A specification listing numerical limits is useful, but an actual blank-injection chromatogram from the manufacturer (run on a comparable instrument) gives a much more direct picture of what background you should expect to see — ask your supplier if this is available before committing to a new lot for a validated method." },
      { type: "product-links", categories: ["lcms-solvents", "standard-solutions"] },
    ],
    relatedArticles: ["what-is-lcms-grade-solvent", "hplc-vs-lcms-solvents"],
  },

  "hplc-vs-lcms-solvents": {
    slug: "hplc-vs-lcms-solvents",
    title: "HPLC vs LC-MS Solvents: What's The Actual Difference?",
    h1: "HPLC vs. LC-MS Solvents",
    category: "selection-guides",
    excerpt: "Both are \"chromatography grade,\" but they're tested against different impurity panels for different reasons — here's what actually changes.",
    seoDescription: "HPLC grade vs LC-MS grade solvents compared: what's tested differently, why LC-MS grade costs more, and when each is appropriate.",
    content: [
      { type: "p", text: "The short version: HPLC grade is tested primarily for UV transparency and general purity; LC-MS grade adds MS-specific background testing (trace metals, MS-blank chromatograms, non-volatile residue at tighter limits) on top of that. LC-MS grade is a strict superset — it meets HPLC grade requirements and then some — which is why it costs more and why substituting HPLC grade into an LC-MS method (but not the reverse) causes problems." },
      { type: "h2", text: "Side-by-side comparison" },
      { type: "list", items: [
        "UV cutoff — both specify this, similar limits for most solvents",
        "Trace metal content — HPLC grade rarely specifies this tightly; LC-MS grade typically holds sodium/potassium under 1ppb",
        "MS-blank test — unique to LC-MS grade; HPLC grade is never tested this way",
        "Non-volatile residue — LC-MS grade typically has tighter limits",
        "Packaging — LC-MS grade often uses containers selected to avoid plasticizer leaching, which matters for full-scan MS work",
        "Price — LC-MS grade typically costs 30-60% more than HPLC grade for the same solvent",
      ]},
      { type: "h2", text: "When it's safe to use HPLC grade instead" },
      { type: "p", text: "If your method uses UV, fluorescence, or RI detection and never touches a mass spectrometer, HPLC grade is the appropriate (and more economical) choice — there's no benefit to paying for MS-specific testing your method will never exercise." },
      { type: "product-links", categories: ["hplc-solvents", "lcms-solvents"] },
    ],
    relatedArticles: ["what-is-lcms-grade-solvent", "hplc-solvent-selection-guide", "lcms-solvent-selection-guide"],
  },

  // ── Batch 2 ──────────────────────────────────────────────

  "what-is-gc-grade-solvent": {
    slug: "what-is-gc-grade-solvent",
    title: "What Is GC Grade Solvent?",
    h1: "What Is GC Grade Solvent?",
    category: "definitions",
    excerpt: "GC grade solvents are tested for residue-on-evaporation and the absence of interfering peaks on capillary GC columns — a different bar than HPLC purity testing.",
    seoDescription: "GC grade solvent explained: residue-on-evaporation testing, peak interference checks, and how it differs from HPLC or reagent grade.",
    content: [
      { type: "p", text: "GC grade solvent is tested specifically for compatibility with gas chromatography — primarily that it leaves minimal non-volatile residue behind when it evaporates (since GC analysis typically involves the solvent itself flashing off in the injector), and that it doesn't introduce extra peaks that could be mistaken for analyte signal during a capillary column run." },
      { type: "p", text: "This is a meaningfully different test profile than HPLC grade, which is built around UV transparency — a property that's irrelevant to GC, where detection is usually by FID, ECD, or mass spec rather than UV absorbance." },
      { type: "h2", text: "What's checked on a GC grade solvent CoA" },
      { type: "list", items: [
        "Residue on evaporation — the solvent is evaporated to dryness and the remaining residue is weighed; low limits matter because GC injection ports concentrate any non-volatile residue over repeated injections",
        "GC purity check — the solvent itself is run on a GC-FID or GC-MS system and checked against a clean baseline standard, confirming no interfering peaks at relevant retention times",
        "Water content — particularly relevant for solvents used in headspace or liquid-liquid extraction workflows",
      ]},
      { type: "h2", text: "Common GC grade solvents" },
      { type: "p", text: "Hexane, acetone, ethyl acetate, dichloromethane, and toluene are among the most frequently used GC grade solvents — chosen for extraction, sample dilution, or as the injection solvent itself depending on the method." },
      { type: "product-links", categories: ["gc-solvents"] },
    ],
    relatedArticles: ["gc-solvent-selection-guide", "what-is-hplc-grade-ethanol"],
  },

  "what-is-uplc-solvent": {
    slug: "what-is-uplc-solvent",
    title: "What Is UPLC Grade Solvent?",
    h1: "What Is UPLC Grade Solvent?",
    category: "definitions",
    excerpt: "UPLC grade solvents are filtered to a finer particulate tolerance than standard HPLC grade — necessary for sub-2-micron column frits.",
    seoDescription: "UPLC grade solvent explained: 0.1µm filtration, particulate tolerance, and why standard HPLC grade can clog sub-2-micron columns.",
    content: [
      { type: "p", text: "UPLC grade solvent meets the same chemical purity bar as HPLC grade, but is additionally filtered to a much finer particulate tolerance — typically 0.1µm, compared to the 0.2-0.45µm filtration common for standard HPLC grade. The reason is mechanical, not chemical: sub-2-micron UPLC column particles pack much tighter frits, which clog far more readily from particulates that a conventional HPLC column would simply pass through without issue." },
      { type: "h2", text: "Why this matters even if your chemistry doesn't change" },
      { type: "p", text: "A solvent lot can pass every chemical purity spec — UV cutoff, water content, trace metals — and still cause a slow, creeping backpressure rise on a UPLC system if its particulate filtration wasn't held to the tighter standard. This is one of the more common \"it worked fine on our old HPLC system\" surprises labs encounter when moving a method to UPLC." },
      { type: "h2", text: "Do you need UPLC grade for every UPLC method?" },
      { type: "p", text: "If the column is sub-2-micron particle size, yes — the frit tolerance is a property of the column, not the method's detection mode. Even an isocratic, UV-detected UPLC method benefits from the finer filtration if it's running on a sub-2-micron column." },
      { type: "product-links", categories: ["uplc-solvents", "hplc-solvents"] },
    ],
    relatedArticles: ["hplc-solvent-selection-guide", "mobile-phase-filtration"],
  },

  "what-is-spectroscopic-grade-solvent": {
    slug: "what-is-spectroscopic-grade-solvent",
    title: "What Is Spectroscopic Grade Solvent?",
    h1: "What Is Spectroscopic Grade Solvent?",
    category: "definitions",
    excerpt: "Spectroscopic grade solvents are selected and tested for minimal background absorbance across the UV/Vis range — the right grade for spectrophotometry, not chromatography.",
    seoDescription: "Spectroscopic grade solvent explained: UV/Vis background absorbance, cuvette use, and how it differs from HPLC grade.",
    content: [
      { type: "p", text: "Spectroscopic grade solvent is optimized for use as a blank or diluent in UV/Vis spectrophotometry — the solvent itself needs to contribute essentially zero absorbance across the wavelength range being measured, since any background absorbance from the solvent directly distorts the baseline and the resulting concentration calculations." },
      { type: "p", text: "This overlaps with HPLC grade's UV cutoff specification but isn't identical — spectroscopic grade testing is typically reported as a full absorbance curve or specific absorbance values at multiple wavelengths, rather than just a single cutoff point, since spectrophotometry applications may need a clean baseline across a broader range than a single HPLC detection wavelength." },
      { type: "h2", text: "Typical uses" },
      { type: "list", items: [
        "Blank/reference solvent for UV/Vis spectrophotometer measurements",
        "Sample dilution before spectrophotometric quantitation",
        "Solvent for fluorescence spectroscopy, where background fluorescence (not just absorbance) also needs to be minimal",
      ]},
      { type: "product-links", categories: ["spectroscopic-solvents"] },
    ],
    relatedArticles: ["what-is-hplc-grade-ipa", "hplc-solvent-selection-guide"],
  },

  "what-is-pharma-grade-solvent": {
    slug: "what-is-pharma-grade-solvent",
    title: "What Is Pharma Grade (USP/EP) Solvent?",
    h1: "What Is Pharma Grade Solvent?",
    category: "definitions",
    excerpt: "Pharma grade means a solvent is tested against a specific pharmacopeial monograph — USP, EP, or both — not just \"high purity\" in a general sense.",
    seoDescription: "Pharma grade (USP/EP) solvent explained: what pharmacopeial monograph testing actually covers and why it differs from HPLC or reagent grade.",
    content: [
      { type: "p", text: "Pharma grade — sometimes labeled USP grade, EP grade, or USP/EP grade — means a solvent or excipient has been tested against the identity, purity, and impurity specifications laid out in a specific pharmacopeial monograph (the United States Pharmacopeia or European Pharmacopoeia). This is a regulatory and compendial designation, not just a marketing claim of \"very pure.\"" },
      { type: "h2", text: "What a pharmacopeial monograph actually specifies" },
      { type: "list", items: [
        "Identity tests — confirming the material is in fact what it claims to be, via specified analytical methods",
        "Assay (purity) — a minimum percentage purity, tested by a specified method",
        "Specified impurities — named impurities with individual limits, often based on known synthesis byproducts or degradation products",
        "Residual solvents — tested against ICH Q3C limits where applicable",
        "Heavy metals / elemental impurities — tested against ICH Q3D limits in current monographs",
      ]},
      { type: "h2", text: "USP vs. EP — do you need both?" },
      { type: "p", text: "USP and EP monographs for the same material are usually similar but not always identical — testing methods or impurity limits can differ slightly. Material tested and released against both monographs (often labeled \"USP/EP grade\" or \"USP-NF/EP grade\") gives flexibility for manufacturers selling into both US and European-regulated markets without needing to qualify two separate supply sources." },
      { type: "product-links", categories: ["pharma-grade", "excipients"] },
    ],
    relatedArticles: ["what-is-ich-q3c", "what-is-coa"],
  },

  "what-is-electronic-grade-solvent": {
    slug: "what-is-electronic-grade-solvent",
    title: "What Is Electronic Grade Solvent?",
    h1: "What Is Electronic Grade Solvent?",
    category: "definitions",
    excerpt: "Electronic grade (SEMI-spec) solvents are held to trace-metal and particulate limits far tighter than even LC-MS grade — built for semiconductor processing.",
    seoDescription: "Electronic grade solvent explained: SEMI specification tiers, sub-ppb metal limits, and use in semiconductor wafer processing.",
    content: [
      { type: "p", text: "Electronic grade solvent is manufactured and tested to SEMI (Semiconductor Equipment and Materials International) specifications — a tiered grading system built around the reality that even sub-ppb trace metal contamination can affect device yield when a solvent contacts a wafer surface during cleaning or processing." },
      { type: "h2", text: "SEMI grade tiers" },
      { type: "p", text: "SEMI specifications define multiple grade tiers (commonly referenced as Grade 1 through Grade 5, with naming conventions varying somewhat by solvent and supplier), each with progressively tighter limits on particulate count, trace metals, and moisture content. Higher tiers correspond to more advanced process nodes, where contamination tolerances shrink correspondingly." },
      { type: "h2", text: "How this compares to LC-MS grade" },
      { type: "p", text: "Both grade systems control trace metals tightly, but for different reasons and against different panels — LC-MS grade is concerned with ionization interference in a mass spectrometer, while electronic grade is concerned with physical contamination of a semiconductor surface. The two aren't interchangeable despite both being \"ultra-pure\" by general reputation; a solvent qualified for one doesn't automatically meet the other's specific limits." },
      { type: "product-links", categories: ["electronic-grade"] },
    ],
    relatedArticles: ["what-is-lcms-grade-solvent", "what-is-trace-analysis-grade"],
  },

  "what-is-trace-analysis-grade": {
    slug: "what-is-trace-analysis-grade",
    title: "What Is Trace Analysis Grade?",
    h1: "What Is Trace Analysis Grade?",
    category: "definitions",
    excerpt: "Trace analysis grade acids and solvents are purified specifically to keep the reagent's own background below the detection limits of ICP-MS and similar ultra-sensitive methods.",
    seoDescription: "Trace analysis grade explained: ultra-pure acids for ICP-MS digestion, background metal limits, and how it differs from ACS reagent grade.",
    content: [
      { type: "p", text: "Trace analysis grade — most often applied to nitric acid, hydrochloric acid, and similar reagents used for sample digestion — refers to material purified specifically to keep its own trace metal content below the detection limits of the ultra-sensitive instruments (typically ICP-MS) it's used alongside. A reagent that's \"ACS grade\" or even \"semiconductor grade\" by general reputation can still carry enough background metal content to swamp a low-ppt detection limit." },
      { type: "h2", text: "Why digestion acid purity is often the limiting factor" },
      { type: "p", text: "In trace elemental analysis, the sample itself is usually digested in a strong acid before being run on the ICP-MS — which means the acid's own metal content adds directly to whatever background the instrument reports. A digestion blank run with ordinary reagent-grade acid will often show measurable levels of common contaminants (iron, zinc, aluminum) that have nothing to do with the actual sample, simply from the acid itself." },
      { type: "h2", text: "Typical trace analysis grade reagents" },
      { type: "list", items: [
        "Nitric acid (65-70%) — the most common digestion acid for ICP-MS sample prep",
        "Hydrochloric acid (37%) — used alone or in combination (aqua regia) for certain matrices",
        "Hydrofluoric acid — needed for silicate or semiconductor matrix digestion",
        "Hydrogen peroxide (30%) — used as a digestion aid for organic matrices",
      ]},
      { type: "product-links", categories: ["trace-analysis-grade", "elemental-impurities"] },
    ],
    relatedArticles: ["what-is-icp-ms", "what-is-electronic-grade-solvent"],
  },

  "what-is-ich-q3d": {
    slug: "what-is-ich-q3d",
    title: "What Is ICH Q3D? Elemental Impurities Explained",
    h1: "What Is ICH Q3D?",
    category: "compliance",
    excerpt: "ICH Q3D(R2) is the guideline classifying elemental impurities by toxicity and route of administration, with permitted daily exposure limits for each.",
    seoDescription: "ICH Q3D guideline explained: Class 1/2A/2B/3 elemental impurities, PDE limits, and how it applies to drug product risk assessment.",
    content: [
      { type: "p", text: "ICH Q3D(R2) is the International Council for Harmonisation guideline governing elemental impurities in drug products — metals and metalloids that may be present from raw materials, catalysts, manufacturing equipment, or container-closure systems, and that carry toxicological risk above certain exposure levels." },
      { type: "h2", text: "The four element classes" },
      { type: "list", items: [
        "Class 1 — As, Cd, Hg, Pb: must be assessed regardless of route of administration, due to significant toxicity even at low exposure",
        "Class 2A — Co, Ni, V: high probability of occurrence in drug products, assessed regardless of route",
        "Class 2B — Ag, Au, Ir, Os, Pd, Pt, Rh, Ru, Se, Tl: low probability of occurrence unless intentionally added (e.g. precious metal catalysts), assessed only in that case",
        "Class 3 — Ba, Cr, Cu, Li, Mo, Sb, Sn: relatively low toxicity by the oral route, but assessed for parenteral and inhalation products or where intentionally added",
      ]},
      { type: "h2", text: "PDE — Permitted Daily Exposure" },
      { type: "p", text: "Each element has a PDE defined per route of administration (oral, parenteral, inhalation) — the maximum daily intake considered acceptable based on toxicological data. A risk assessment compares the expected elemental impurity contribution from all sources (API, excipients, water, equipment, packaging) against the relevant PDE." },
      { type: "h2", text: "What this means for raw material testing" },
      { type: "p", text: "Risk assessment typically starts with theoretical/known-source analysis, but where there's uncertainty, raw materials and excipients are tested directly via ICP-MS against certified standards mapped to the Q3D element classes — which is the basis for class-specific standard solutions rather than a generic multi-element mix." },
      { type: "product-links", categories: ["elemental-impurities"] },
    ],
    relatedArticles: ["what-is-icp-ms", "what-is-pharma-grade-solvent", "what-is-pde"],
  },

  "what-is-coa": {
    slug: "what-is-coa",
    title: "What Is A Certificate Of Analysis (CoA)?",
    h1: "What Is A Certificate Of Analysis?",
    category: "compliance",
    excerpt: "A CoA reports the actual, batch-specific test results for a lot of material — distinct from a TDS, which describes typical or specification values.",
    seoDescription: "Certificate of Analysis (CoA) explained: what it contains, how it differs from a TDS or SDS, and why batch-specific data matters.",
    content: [
      { type: "p", text: "A Certificate of Analysis (CoA) is a document reporting the actual test results measured for a specific batch or lot of material, checked against that material's specification. It's batch-specific by definition — a CoA for lot #A2401 reports what was actually measured for that lot, not a general expectation of what the product is usually like." },
      { type: "h2", text: "What's typically on a CoA" },
      { type: "list", items: [
        "Lot/batch number and manufacture date",
        "Each tested parameter (assay, water content, UV cutoff, trace metals, etc.) with both the specification limit and the actual measured result",
        "Test method reference for each parameter",
        "Expiry or retest date",
        "Authorized signature from the quality control department",
      ]},
      { type: "h2", text: "CoA vs. TDS vs. SDS — the difference" },
      { type: "p", text: "A Technical Data Sheet (TDS) describes typical or specification properties of a product in general — useful for initial product selection, but not lot-specific. A Safety Data Sheet (SDS) covers hazard classification, handling, and emergency information — a regulatory safety document, not a quality document. A CoA is the only one of the three that tells you what was actually measured for the specific material in front of you." },
      { type: "callout", title: "Always match the CoA to the lot number on the label", text: "A CoA from a different batch of the same product is not equivalent documentation — especially for regulated industries where batch traceability is part of the compliance requirement." },
      { type: "product-links", categories: ["standard-solutions"] },
    ],
    relatedArticles: ["what-is-sds", "what-is-tds", "what-is-pharma-grade-solvent"],
  },

  "what-is-sds": {
    slug: "what-is-sds",
    title: "What Is A Safety Data Sheet (SDS)?",
    h1: "What Is A Safety Data Sheet?",
    category: "compliance",
    excerpt: "An SDS (formerly MSDS) covers hazard classification, handling, storage, and emergency response — not product quality or purity data.",
    seoDescription: "Safety Data Sheet (SDS/MSDS) explained: the 16 standard sections, hazard classification, and how it differs from a CoA.",
    content: [
      { type: "p", text: "A Safety Data Sheet (SDS) — the modern, GHS-standardized successor to what was previously called an MSDS (Material Safety Data Sheet) — documents the hazards associated with a chemical, along with handling, storage, and emergency response information. It's a safety and regulatory compliance document, not a quality or purity document — that distinction trips people up more often than it should." },
      { type: "h2", text: "The 16 standard SDS sections (GHS format)" },
      { type: "list", items: [
        "1. Identification — product and supplier information",
        "2. Hazard(s) identification — GHS classification and labeling",
        "3. Composition/information on ingredients",
        "4. First-aid measures",
        "5. Fire-fighting measures",
        "6. Accidental release measures",
        "7. Handling and storage",
        "8. Exposure controls / personal protection",
        "9. Physical and chemical properties",
        "10. Stability and reactivity",
        "11-16. Toxicological, ecological, disposal, transport, regulatory, and other information",
      ]},
      { type: "h2", text: "Why an SDS doesn't tell you about purity" },
      { type: "p", text: "An SDS for HPLC grade acetonitrile and technical grade acetonitrile from the same supplier will be nearly identical — the hazard profile of the chemical itself doesn't change with purity grade in any way that matters for the safety document. Purity and quality information lives on the CoA and TDS instead." },
      { type: "product-links", categories: ["hplc-solvents"] },
    ],
    relatedArticles: ["what-is-coa", "what-is-tds", "what-is-un-number"],
  },

  "what-is-tds": {
    slug: "what-is-tds",
    title: "What Is A Technical Data Sheet (TDS)?",
    h1: "What Is A Technical Data Sheet?",
    category: "compliance",
    excerpt: "A TDS describes a product's general specifications and typical properties — the reference document for selecting a product, before you ever see a batch-specific CoA.",
    seoDescription: "Technical Data Sheet (TDS) explained: typical specifications, physical properties, and how it's used alongside a CoA and SDS.",
    content: [
      { type: "p", text: "A Technical Data Sheet (TDS) describes a product's general specification and typical physical/chemical properties — appearance, density, boiling point, assay range, typical impurity levels — independent of any specific batch. It's the document you'd reference when deciding whether a product is suitable for your application in the first place, before ordering a specific lot." },
      { type: "h2", text: "TDS contents typically include" },
      { type: "list", items: [
        "Product description and intended use",
        "Specification ranges (e.g. \"assay ≥99.9%\", not a specific measured value)",
        "Physical properties — appearance, density, boiling/melting point, refractive index, flash point",
        "Storage conditions and shelf life",
        "Available packaging configurations",
      ]},
      { type: "h2", text: "Using TDS, SDS, and CoA together" },
      { type: "p", text: "In practice: TDS for initial product selection (\"does this meet my method's requirements\"), SDS for safety and handling planning, and CoA for the specific batch you actually receive (\"did this lot meet the specification it's supposed to\"). All three serve different purposes and none substitutes for the others." },
      { type: "product-links", categories: ["hplc-solvents", "pharma-grade"] },
    ],
    relatedArticles: ["what-is-coa", "what-is-sds"],
  },

  "what-is-icp-ms": {
    slug: "what-is-icp-ms",
    title: "What Is ICP-MS?",
    h1: "What Is ICP-MS?",
    category: "technique",
    excerpt: "Inductively Coupled Plasma Mass Spectrometry detects trace elements at parts-per-trillion sensitivity — and is only as clean as the acid and standards behind it.",
    seoDescription: "ICP-MS explained: how it works, typical detection limits, and why digestion acid and standard solution purity directly affect results.",
    content: [
      { type: "p", text: "Inductively Coupled Plasma Mass Spectrometry (ICP-MS) is an analytical technique that ionizes a sample in a high-temperature argon plasma (around 6,000-10,000K), then separates and detects the resulting ions by mass-to-charge ratio. It's capable of detecting most elements at parts-per-trillion (ppt) sensitivity, making it the standard method for trace and ultra-trace elemental analysis." },
      { type: "h2", text: "Why sample prep purity matters as much as the instrument" },
      { type: "p", text: "At ppt-level detection limits, the digestion acid used to prepare a liquid sample contributes its own background — even trace-analysis-grade acid has some residual metal content, and ordinary reagent-grade acid can easily contribute more contamination than the analyte being measured. This is why digestion acid grade is treated as part of the method, not just a consumable." },
      { type: "h2", text: "Common applications" },
      { type: "list", items: [
        "Pharmaceutical elemental impurity testing (ICH Q3D)",
        "Environmental water and soil metals analysis",
        "Food safety heavy metal screening",
        "Semiconductor and battery material trace contamination control",
      ]},
      { type: "product-links", categories: ["trace-analysis-grade", "elemental-impurities", "standard-solutions"] },
    ],
    relatedArticles: ["what-is-ich-q3d", "what-is-trace-analysis-grade"],
  },

  "what-is-karl-fischer-titration": {
    slug: "what-is-karl-fischer-titration",
    title: "What Is Karl Fischer Titration?",
    h1: "What Is Karl Fischer Titration?",
    category: "technique",
    excerpt: "Karl Fischer titration determines water content via a specific chemical reaction — and comes in two main forms depending on the expected moisture level.",
    seoDescription: "Karl Fischer titration explained: the chemistry, volumetric vs coulometric methods, and choosing the right reagent for your moisture range.",
    content: [
      { type: "p", text: "Karl Fischer titration determines water content in a sample based on a specific chemical reaction between iodine, sulfur dioxide, a base, and water — the reaction consumes iodine in direct proportion to the water present, and the endpoint (when all water has reacted) is detected electrochemically." },
      { type: "h2", text: "Volumetric vs. coulometric Karl Fischer" },
      { type: "p", text: "Volumetric KF titration uses a reagent of known iodine concentration, delivered by burette, and is generally suited to samples with water content above roughly 0.01% (100ppm) — appropriate for most routine pharmaceutical and chemical QC moisture testing." },
      { type: "p", text: "Coulometric KF titration generates iodine electrochemically within the titration cell itself, rather than delivering it from a reagent, allowing much lower detection limits — typically down to single-digit ppm or lower — appropriate for very dry samples like anhydrous solvents or battery-grade materials." },
      { type: "h2", text: "Reagent considerations" },
      { type: "list", items: [
        "Titer stability — Karl Fischer reagent titer can drift over time, especially with exposure to ambient moisture; periodic verification against a certified water standard is standard practice",
        "One-component vs. two-component reagent — two-component systems (separate \"solvent\" and \"titrant\") generally offer better stability and selectivity for difficult matrices",
        "Sample solvent compatibility — the methanol or other solvent used to dissolve the sample needs to be compatible with both the sample and the KF chemistry",
      ]},
      { type: "product-links", categories: ["karl-fischer"] },
    ],
    relatedArticles: ["what-is-coa", "what-is-pharma-grade-solvent"],
  },

  "what-is-spe": {
    slug: "what-is-spe",
    title: "What Is Solid-Phase Extraction (SPE)?",
    h1: "What Is Solid-Phase Extraction?",
    category: "technique",
    excerpt: "SPE removes matrix interferences using a sorbent cartridge before LC or GC analysis — choosing the right sorbent chemistry is most of what determines recovery.",
    seoDescription: "Solid-phase extraction (SPE) explained: how it works, common sorbent chemistries, and choosing the right cartridge for your matrix.",
    content: [
      { type: "p", text: "Solid-phase extraction (SPE) is a sample preparation technique that uses a packed sorbent cartridge to selectively retain (or selectively pass) analytes from a liquid sample, separating them from matrix components that would otherwise interfere with downstream LC or GC analysis. The basic workflow is condition, load, wash, and elute — each step using a solvent chosen for its interaction with both the sorbent and the analyte." },
      { type: "h2", text: "Common SPE sorbent chemistries" },
      { type: "list", items: [
        "C18 (reversed-phase) — retains non-polar to moderately polar compounds, the most broadly used general-purpose sorbent",
        "HLB (hydrophilic-lipophilic balance) — a polymeric sorbent effective across a wide polarity range, popular for multi-residue pesticide methods",
        "Ion exchange (SAX/SCX) — retains based on charge, useful for acidic or basic analytes",
        "Mixed-mode (MAX/MCX) — combines reversed-phase and ion-exchange retention for selective cleanup of ionizable compounds",
      ]},
      { type: "h2", text: "SPE vs. QuEChERS" },
      { type: "p", text: "QuEChERS (Quick, Easy, Cheap, Effective, Rugged, Safe) is a related but distinct technique using dispersive cleanup (sorbent mixed directly into the sample extract) rather than a packed cartridge — generally faster for routine multi-residue food testing, while cartridge SPE offers more selective cleanup for complex or difficult matrices." },
      { type: "product-links", categories: ["spe-products"] },
    ],
    relatedArticles: ["mobile-phase-filtration", "what-is-gc-grade-solvent"],
  },

  "what-is-tlc": {
    slug: "what-is-tlc",
    title: "What Is Thin-Layer Chromatography (TLC)?",
    h1: "What Is Thin-Layer Chromatography?",
    category: "technique",
    excerpt: "TLC remains the fastest way to scout a separation before committing to HPLC method development — here's how Rf values and plate chemistry work.",
    seoDescription: "Thin-layer chromatography (TLC) explained: how Rf values work, plate chemistries, and using TLC for rapid method scouting.",
    content: [
      { type: "p", text: "Thin-layer chromatography (TLC) separates a mixture by capillary action drawing a developing solvent up a thin layer of adsorbent (typically silica gel) coated on a glass, plastic, or aluminum plate. Different compounds in the spotted sample travel different distances relative to the solvent front, based on their relative affinity for the stationary phase versus the mobile (developing) solvent." },
      { type: "h2", text: "Rf value — what it means" },
      { type: "p", text: "The retention factor (Rf) is the ratio of the distance a compound travels to the distance the solvent front travels, always between 0 and 1. Rf values are useful for comparing compounds within the same TLC run under identical conditions, but aren't precisely transferable between different labs or even different runs unless conditions (plate batch, chamber saturation, temperature) are tightly controlled." },
      { type: "h2", text: "Why TLC is still used despite HPLC's availability" },
      { type: "list", items: [
        "Speed — a TLC run takes minutes, useful for quickly scouting solvent systems before HPLC method development",
        "Cost — no instrument time required, multiple samples run side-by-side on one plate",
        "Visual/qualitative screening — quick reaction monitoring or purity checks where exact quantitation isn't the goal",
      ]},
      { type: "product-links", categories: ["tlc-products"] },
    ],
    relatedArticles: ["what-is-spe", "hplc-solvent-selection-guide"],
  },

  "gc-solvent-selection-guide": {
    slug: "gc-solvent-selection-guide",
    title: "GC Solvent Selection Guide",
    h1: "GC Solvent Selection Guide",
    category: "selection-guides",
    excerpt: "Choosing a GC solvent comes down to boiling point compatibility, detector type, and matrix — here's a practical framework.",
    seoDescription: "How to select the right GC solvent: boiling point considerations, detector compatibility, and common solvent choices by application.",
    content: [
      { type: "p", text: "GC solvent selection depends heavily on what happens after injection — the solvent needs a boiling point compatible with your injector temperature and column program, and shouldn't produce a detector response that interferes with the analytes you're measuring." },
      { type: "h2", text: "Match solvent boiling point to your method" },
      { type: "p", text: "A solvent with a boiling point too close to your earliest-eluting analyte can cause peak overlap with the solvent front; one that's dramatically lower than your column's initial oven temperature flashes off quickly and cleanly. Hexane (bp 69°C) and dichloromethane (bp 40°C) are common low-boiling choices; toluene (bp 111°C) is used when a higher-boiling solvent better matches the method." },
      { type: "h2", text: "Detector-specific considerations" },
      { type: "list", items: [
        "FID (Flame Ionization Detector) — responds to virtually all organic solvents, so solvent choice mainly affects solvent-front timing, not detector interference",
        "ECD (Electron Capture Detector) — extremely sensitive to halogenated solvents; never use chlorinated solvents with ECD methods unless that's specifically what's being measured",
        "MS (Mass Spec) — solvent choice affects background spectra; check for any fragment ions that could overlap with target analyte ions",
      ]},
      { type: "product-links", categories: ["gc-solvents"] },
    ],
    relatedArticles: ["what-is-gc-grade-solvent", "hplc-solvent-selection-guide"],
  },

  "what-is-ich-q3c": {
    slug: "what-is-ich-q3c",
    title: "What Is ICH Q3C? Residual Solvents Explained",
    h1: "What Is ICH Q3C?",
    category: "compliance",
    excerpt: "ICH Q3C classifies residual solvents into three toxicity classes with corresponding permitted daily exposure limits — distinct from ICH Q3D, which covers elemental impurities.",
    seoDescription: "ICH Q3C guideline explained: Class 1/2/3 residual solvents, PDE limits, and how it applies to pharmaceutical manufacturing.",
    content: [
      { type: "p", text: "ICH Q3C is the International Council for Harmonisation guideline governing residual solvents — organic solvents used or produced during the manufacture of a drug substance, excipient, or drug product that may remain in trace amounts in the final material. It's the residual-solvent counterpart to ICH Q3D, which covers elemental (metal) impurities instead." },
      { type: "h2", text: "The three solvent classes" },
      { type: "list", items: [
        "Class 1 — solvents to be avoided: known or suspected human carcinogens, or environmentally hazardous (e.g. benzene, carbon tetrachloride)",
        "Class 2 — solvents to be limited: non-genotoxic animal carcinogens or other irreversible toxicity, each with a specific PDE (e.g. acetonitrile, methanol, dichloromethane)",
        "Class 3 — solvents with low toxic potential: no health-based exposure limit needed below 50mg/day (e.g. ethanol, acetone, ethyl acetate)",
      ]},
      { type: "h2", text: "Why this matters for solvent selection in synthesis" },
      { type: "p", text: "Choosing a Class 3 solvent over a Class 2 solvent at an equivalent synthesis step — where chemically feasible — simplifies downstream residual solvent testing and removes a PDE-based specification limit from the final release testing panel entirely." },
      { type: "product-links", categories: ["pharma-grade", "hplc-solvents"] },
    ],
    relatedArticles: ["what-is-ich-q3d", "what-is-pde", "what-is-pharma-grade-solvent"],
  },

  "what-is-pde": {
    slug: "what-is-pde",
    title: "What Is PDE (Permitted Daily Exposure)?",
    h1: "What Is PDE?",
    category: "compliance",
    excerpt: "PDE is the maximum acceptable daily intake of a residual solvent or elemental impurity — the core number behind both ICH Q3C and Q3D risk assessments.",
    seoDescription: "Permitted Daily Exposure (PDE) explained: how it's derived, how it's used in ICH Q3C and Q3D risk assessment, and route-specific limits.",
    content: [
      { type: "p", text: "Permitted Daily Exposure (PDE) is the maximum amount of a substance — a residual solvent under ICH Q3C, or an elemental impurity under ICH Q3D — considered acceptable in a pharmaceutical product on a daily intake basis, derived from toxicological data including no-observed-effect levels and appropriate safety factors." },
      { type: "h2", text: "PDE varies by route of administration" },
      { type: "p", text: "The same substance can have different PDE values for oral, parenteral, and inhalation routes — parenteral and inhalation routes generally carry lower (more restrictive) PDE values than oral, since they bypass first-pass metabolism and reach systemic circulation more directly." },
      { type: "h2", text: "How PDE is used in practice" },
      { type: "p", text: "A risk assessment estimates the total daily intake of a given impurity from all sources in a drug product (API, excipients, water, process equipment, packaging) and compares that total against the PDE. If the estimated intake is comfortably below the PDE (commonly using a 30% threshold as a control point), routine testing may not be required; if it's close to or exceeds the PDE, specification limits and routine testing become necessary." },
      { type: "product-links", categories: ["elemental-impurities", "pharma-grade"] },
    ],
    relatedArticles: ["what-is-ich-q3d", "what-is-ich-q3c"],
  },

  "what-is-un-number": {
    slug: "what-is-un-number",
    title: "What Is A UN Number For Hazmat Shipping?",
    h1: "What Is A UN Number?",
    category: "compliance",
    excerpt: "A UN number identifies a hazardous material for transport purposes — the same four-digit code appears on shipping documents worldwide regardless of brand or supplier.",
    seoDescription: "UN number explained: what it identifies, how it's used in hazmat shipping documentation, and common UN numbers for lab solvents.",
    content: [
      { type: "p", text: "A UN number is a four-digit code assigned by the United Nations Committee of Experts on the Transport of Dangerous Goods, identifying a specific hazardous substance or category of substances for shipping and regulatory purposes. The same UN number applies to a given substance regardless of brand, supplier, or country — it's a transport classification, not a product identifier." },
      { type: "h2", text: "Common UN numbers for lab solvents" },
      { type: "list", items: [
        "UN1648 — Acetonitrile",
        "UN1170 — Ethanol (or ethanol solutions above a certain concentration)",
        "UN1230 — Methanol",
        "UN1219 — Isopropanol (isopropyl alcohol)",
        "UN1090 — Acetone",
        "UN1593 — Dichloromethane",
      ]},
      { type: "h2", text: "How the UN number is used in shipping" },
      { type: "p", text: "The UN number, combined with the proper shipping name, hazard class, and packing group, forms the core of the dangerous goods declaration required for transporting hazardous materials by sea, air, or road — used by freight forwarders, customs authorities, and carriers to apply the correct handling, labeling, and documentation requirements at every step of the shipment." },
      { type: "product-links", categories: ["hplc-solvents"] },
    ],
    relatedArticles: ["what-is-sds", "what-is-coa"],
  },
};

import { KNOWLEDGE_BATCH3 } from "./knowledge-articles-batch3";
import { KNOWLEDGE_BATCH4 } from "./knowledge-articles-batch4";

export function getKnowledgeArticle(slug: string): KnowledgeArticle | undefined {
  return KNOWLEDGE_ARTICLES[slug] ?? KNOWLEDGE_BATCH3[slug] ?? KNOWLEDGE_BATCH4[slug];
}

export function getAllKnowledgeArticleSlugs(): string[] {
  return [...Object.keys(KNOWLEDGE_ARTICLES), ...Object.keys(KNOWLEDGE_BATCH3), ...Object.keys(KNOWLEDGE_BATCH4)];
}
