import Image from "next/image";
import Link from "next/link";

const GRADES = [
  { image: "/images/categories/hplc-solvents.jpg", label: "HPLC Solvents", sub: "Gradient · isocratic · UV-grade", href: "/products/hplc-solvents", accent: true },
  { image: "/images/categories/lcms-solvents.jpg", label: "LC-MS Solvents", sub: "Sub-ppb metals, MS-blank certified", href: "/products/lcms-solvents" },
  { image: "/images/categories/spectroscopic-solvents.jpg", label: "Spectroscopy", sub: "Low UV absorbance, NMR grade", href: "/products/spectroscopic-solvents" },
  { image: "/images/categories/applications.jpg", label: "GC Solvents", sub: "Low residue, capillary-grade", href: "/products/gc-solvents" },
  { image: "/images/categories/pharma-grade.jpg", label: "Pharma Grade", sub: "USP/EP monograph tested", href: "/products/pharma-grade" },
];

export default function CategoryShowcase() {
  return (
    <section className="py-14 bg-[#F5F4F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.1em] uppercase text-[#3C6E71] mb-2">Product Catalog</p>
            <h2 className="text-2xl font-bold text-[#2B2A28]">Browse by grade</h2>
          </div>
          <Link href="/products" className="text-[#3C6E71] font-semibold text-sm border-b border-[#3C6E71]/30 hover:border-[#3C6E71] pb-0.5 transition-colors whitespace-nowrap">
            View all 200+ products →
          </Link>
        </div>

        {/* Mobile: vertical stack; Tablet: 2+3 grid */}
        <div className="flex flex-col md:hidden gap-3">
          {GRADES.map(item => (
            <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-xl block">
              <div className="relative w-full aspect-[2/1] bg-[#E8E6E1]">
                <Image src={item.image} alt={item.label} fill sizes="100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-[#0a0a09]/20 to-transparent" />
                <div className="absolute left-4 bottom-4 right-4">
                  <h3 className="text-white font-bold text-lg drop-shadow-md">{item.label}</h3>
                  <p className="text-white/75 text-sm mt-0.5">{item.sub}</p>
                </div>
                {item.accent && <span className="absolute top-3 left-3 bg-[#B5654A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">Most Popular</span>}
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop: 2 large + 3 medium */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-3 mb-3">
            {GRADES.slice(0, 2).map(item => (
              <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-xl block">
                <div className="relative w-full aspect-[16/9] bg-[#E8E6E1]">
                  <Image src={item.image} alt={item.label} fill sizes="50vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-[#0a0a09]/20 to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5">
                    <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-md">{item.label}</h3>
                    <p className="text-white/75 text-sm mt-1">{item.sub}</p>
                  </div>
                  {item.accent && <span className="absolute top-3 left-3 bg-[#B5654A] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">Most Popular</span>}
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#3C6E71] transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            {GRADES.slice(2).map(item => (
              <Link key={item.href} href={item.href} className="group relative overflow-hidden rounded-xl block">
                <div className="relative w-full aspect-[4/3] bg-[#E8E6E1]">
                  <Image src={item.image} alt={item.label} fill sizes="33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a09]/80 via-[#0a0a09]/20 to-transparent" />
                  <div className="absolute left-4 bottom-4 right-4">
                    <h3 className="text-white font-bold text-lg drop-shadow-md">{item.label}</h3>
                    <p className="text-white/75 text-sm mt-0.5">{item.sub}</p>
                  </div>
                  <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:bg-[#3C6E71] transition-all">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
