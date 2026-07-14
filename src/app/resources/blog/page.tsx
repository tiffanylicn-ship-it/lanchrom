import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Blog | LANCHROM",
  description: "Technical articles on solvent selection, HPLC method development, ICH Q3C compliance, and fermentation analysis.",
  alternates: { canonical: "https://www.lanchrom.com/resources/blog" },
};

const POSTS = [
  {
    title: "HPLC Grade vs LC-MS Grade: When the Difference Actually Matters",
    excerpt: "UV transparency gets you through routine HPLC. Mass spec detection asks a different question entirely — here's where the line actually falls.",
    tag: "Method Development",
    date: "Coming soon",
  },
  {
    title: "Reading an ICH Q3C Class 2 Solvent Limit Correctly",
    excerpt: "PDE numbers look simple until you're trying to map them to your actual synthetic route. A practical walkthrough.",
    tag: "Regulatory",
    date: "Coming soon",
  },
  {
    title: "Why Pre-Made Mobile Phase Outperforms In-House Prep for Fermentation QC",
    excerpt: "The variability that comes from manual mobile phase preparation, and what it actually costs you in retention time drift.",
    tag: "Fermentation",
    date: "Coming soon",
  },
  {
    title: "What CFD Modeling Actually Changes in Distillation Tray Design",
    excerpt: "A look at the engineering behind eliminating inactive zones and vapor channeling — and why it matters for batch consistency.",
    tag: "Manufacturing",
    date: "Coming soon",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Resources</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Technical Blog</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl">Notes on solvent selection, method development, regulatory compliance, and the engineering behind what we manufacture.</p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {POSTS.map(post => (
            <div key={post.title} className="border-b border-[#EFEDE8] pb-6 last:border-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wide text-[#3C6E71] bg-[#E8F0EF] px-2 py-0.5 rounded-full">{post.tag}</span>
                <span className="text-[#8A8782] text-xs">{post.date}</span>
              </div>
              <h2 className="text-lg font-bold text-[#2B2A28] mb-2">{post.title}</h2>
              <p className="text-[#5C5A55] text-sm leading-relaxed">{post.excerpt}</p>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <p className="text-[#8A8782] text-sm mb-4">New articles publish regularly. Have a topic you'd like us to cover?</p>
          <Link href="/contact" className="btn-line inline-flex">Suggest a topic</Link>
        </div>
      </section>
    </div>
  );
}
