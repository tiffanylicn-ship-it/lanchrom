import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "QC Laboratory & Analytical Testing | LANCHROM™",
  description: "Full-spectrum analytical QC lab with HPLC, GC, ICP-MS, Karl Fischer, particle counting — every batch tested across multiple independent methods before release.",
  alternates: { canonical: "https://www.lanchrom.com/manufacturing/qc-laboratory" },
};

const QC_INSTRUMENTS = [
  { name: "HPLC / UPLC Systems", detail: "Purity verification, impurity profiling, UV cutoff measurement, and mobile phase compatibility testing. Multiple systems allow simultaneous testing of different product grades without cross-contamination risk between analytical runs." },
  { name: "GC-FID / GC-MS", detail: "Volatile organic impurity detection and assay (purity) determination. GC is the primary method for solvent assay — the percentage purity reported on every CoA comes from GC analysis, with every detectable impurity quantified individually rather than lumped into a generic 'other' category." },
  { name: "ICP-MS", detail: "Trace metal ion analysis at parts-per-trillion (ppt) sensitivity — the instrument behind the trace metal panel on every LC-MS and electronic-grade CoA. Capable of detecting the full ICH Q3D element panel (As, Cd, Hg, Pb, plus Class 2 and 3 elements) in a single analytical run." },
  { name: "Karl Fischer Titrator", detail: "Water content determination to single-ppm precision. Both volumetric (for standard moisture levels) and coulometric (for anhydrous-grade solvents with water content below 50ppm) titration systems are available, ensuring the right method is used for each product's expected moisture range." },
  { name: "UV/Vis Spectrophotometer", detail: "UV cutoff wavelength determination and full UV-Vis absorbance scanning. The UV cutoff value on every HPLC-grade CoA is measured here — a scan across the relevant wavelength range, not just a single-point check at one wavelength." },
  { name: "Fluorescence Spectrophotometer", detail: "Trace organic fluorophore detection — sensitive to contaminant classes that UV absorbance can miss. Used as a supplementary purity screen for spectroscopic-grade products and for any product where fluorescence detection will be the downstream analytical technique." },
  { name: "ICP-OES", detail: "Multi-element analysis at parts-per-billion sensitivity — used for routine trace metal screening where the full ppt-level sensitivity of ICP-MS isn't required, and for high-concentration element determination where ICP-MS would be saturated." },
  { name: "Particle Counter", detail: "Sub-micron particulate quantification per specified size ranges. Used to verify that inline filtration during filling achieved the target particulate specification — particularly important for UPLC-grade (0.1µm-filtered) and electronic-grade products." },
];

export default function QCLaboratoryPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-[#E6E3DD]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-[#8A8782]">
          <Link href="/manufacturing" className="hover:text-[#3C6E71]">Manufacturing</Link> {" › "}
          <span className="text-[#5C5A55]">QC Laboratory</span>
        </div>
      </div>

      <section className="py-14 border-b border-[#E6E3DD] bg-[#FBFAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Manufacturing</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-4">QC Laboratory & Analytical Testing</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Every batch is tested across multiple independent analytical methods before release — not a single
            pass/fail gate, but a complete characterization that verifies the product against every parameter
            on its specification.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2B2A28] mb-5">Analytical Instrument Capabilities</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-8">
            The QC lab operates as an independent function from production — reporting to quality management,
            not to the production team — with the authority to reject or quarantine any batch that doesn't meet
            its full specification. This organizational independence is a basic quality-system principle, but
            it's worth stating explicitly because it means the CoA data you receive reflects an objective
            assessment by a testing team whose job security doesn't depend on batches passing.
          </p>

          <div className="space-y-4 mb-12">
            {QC_INSTRUMENTS.map(inst => (
              <div key={inst.name} className="border border-[#E6E3DD] rounded-xl p-6">
                <h3 className="font-bold text-[#2B2A28] mb-2">{inst.name}</h3>
                <p className="text-[#5C5A55] text-sm leading-relaxed">{inst.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">How a Batch Gets Released</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The release testing workflow follows the same sequence for every batch, regardless of product or
            grade — the testing panel varies (an LC-MS-grade product has a longer test list than a reagent-grade
            product), but the workflow structure doesn't.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {[
              { step: "1", t: "Sampling", d: "Representative sample drawn from the finished batch according to a defined sampling protocol — the sample must represent the batch, not just the top or bottom of a container." },
              { step: "2", t: "Testing", d: "The sample is tested against every parameter on the product's specification — assay, water content, UV cutoff, trace metals, particle count, and any grade-specific tests — using the methods listed above." },
              { step: "3", t: "Review & Release", d: "QC reviews all results against the specification. If every parameter passes, the batch is released and a CoA is generated. If any parameter fails, the batch is quarantined for investigation." },
              { step: "4", t: "CoA Generation", d: "The CoA is generated from the actual test data — not a template with pre-filled 'typical' values, but the specific numbers measured for this specific batch. The CoA is linked to the batch's lot number and available for download by the customer." },
            ].map(item => (
              <div key={item.step} className="border border-[#E6E3DD] rounded-xl p-5">
                <div className="w-7 h-7 rounded-full bg-[#FBFAF8] border border-[#E6E3DD] text-[#3C6E71] text-xs font-bold flex items-center justify-center mb-3">{item.step}</div>
                <h3 className="font-bold text-[#2B2A28] text-sm mb-1.5">{item.t}</h3>
                <p className="text-[#8A8782] text-xs leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">What Happens When a Batch Fails</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            A failed batch isn't automatically discarded — but it's also never released against a specification
            it didn't meet. The investigation process depends on what failed and by how much: a marginal out-of-spec
            result on a single parameter may trigger a re-test (to rule out analytical error) or a re-process
            (an additional distillation pass to bring the parameter into range). A significant failure, or a
            failure on a fundamental parameter like assay purity, typically results in batch rejection and
            investigation into the root cause at the production level.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            This investigation-and-correction loop is how manufacturing process quality actually improves over
            time — each failure generates a root cause analysis that feeds back into production parameters,
            raw material qualification, or equipment maintenance schedules, preventing the same failure from
            recurring. A manufacturing operation that never fails a batch isn't necessarily better than one that
            occasionally fails and investigates — the latter is demonstrating that its testing is actually
            capable of catching problems, which is a stronger quality assurance than a perfect pass rate that
            might simply reflect insufficiently sensitive testing.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Stability Testing & Shelf Life Verification</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            The shelf life (or retest date) printed on every product label isn't an arbitrary number — it's
            based on stability data generated by testing retained samples at defined intervals over time, under
            the storage conditions specified on the label. Stability testing monitors whether any specification
            parameter drifts over the product's intended storage life: water content increasing from moisture
            ingress, peroxide formation in susceptible solvents (THF, IPA), UV cutoff shifting from trace
            impurity oxidation, or particulate count increasing from container-related factors.
          </p>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            For new products or new packaging formats, accelerated stability testing (samples stored at elevated
            temperature and humidity to simulate extended storage in a compressed timeframe) provides preliminary
            shelf life data before real-time stability data is fully available — allowing products to be released
            with a conservative initial shelf life that's extended once long-term data confirms longer stability.
          </p>

          <h2 className="text-2xl font-bold text-[#2B2A28] mt-14 mb-5">Retention Samples & Investigation Support</h2>
          <p className="text-[#3D3B37] text-[1.05rem] leading-relaxed mb-5">
            A sealed retention sample from every production batch is stored in the QC lab for the duration of
            the product's shelf life plus a defined retention period. This retained sample serves two purposes:
            it provides a reference point for investigating any customer complaint (was the product within spec
            at the time of release?), and it supports any supplier audit that requires physical verification of
            historical batch quality — not just paperwork, but an actual retained sample that can be re-tested
            against the original CoA data if needed.
          </p>

          <div className="my-8 px-6 py-5 rounded-xl bg-[#FBFAF8] border-l-2 border-[#B5654A]">
            <p className="text-xs font-bold uppercase tracking-wider text-[#B5654A] mb-2">MS-Blank Chromatograms Available on Request</p>
            <p className="text-[#5C5A55] text-sm leading-relaxed">
              For LC-MS-grade solvents, we can provide an actual blank-injection chromatogram from our LC-MS
              system — not just numerical specification limits — so you can see what background to expect on
              your own system before committing a validated method to a new lot. Ask your sales contact for the
              MS-blank data package for any LC-MS-grade product.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] flex gap-3 flex-wrap">
            <Link href="/manufacturing/factory" className="btn-line">Factory Overview →</Link>
            <Link href="/manufacturing/distillation-system" className="btn-line">Distillation System →</Link>
            <Link href="/contact?type=sample" className="btn-fill">Request a Sample with Full CoA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
