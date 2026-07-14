import type { Metadata } from "next";
import Link from "next/link";
import { MARKETS } from "@/data/markets";

export const metadata: Metadata = {
  title: "Export Markets | LANCHROM™ — Global Solvent Supply",
  description: "Factory-direct HPLC, LC-MS, OEM, and pharmaceutical grade solvent export to North America, Europe, Asia, Middle East, Africa, and Latin America.",
  alternates: { canonical: "https://www.lanchrom.com/markets" },
};

const REGION_ORDER = ["North America", "Europe", "South Asia", "Southeast Asia", "East Asia", "Middle East", "Africa", "Latin America", "Europe & Central Asia"] as const;

const REGION_COLORS: Record<string, string> = {
  "North America": "#6DBFC2",
  "Europe": "#7EA6C8",
  "South Asia": "#3C6E71",
  "Southeast Asia": "#4A8B8E",
  "East Asia": "#5A9EA1",
  "Middle East": "#B5654A",
  "Africa": "#C4845F",
  "Latin America": "#8B6BB5",
  "Europe & Central Asia": "#6B8BB5",
};

export default function MarketsIndexPage() {
  const markets = Object.values(MARKETS);

  return (
    <div className="bg-white">
      <section className="py-16 md:py-20 border-b border-[#E6E3DD] bg-[#F7FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tag-line mb-3">Export Markets</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2B2A28] mb-3">Global Supply From Zhejiang, China</h1>
          <p className="text-[#5C5A55] text-lg max-w-2xl leading-relaxed">
            Factory-direct chromatography and pharmaceutical-grade solvents, shipped from Ningbo and Shanghai ports
            to {markets.length} countries across North America, Europe, Asia, Middle East, Africa, and Latin America.
          </p>
        </div>
      </section>

      {/* World Map */}
      <section className="py-10 bg-[#2B2A28]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#6DBFC2] animate-pulse" />
            <p className="text-white/60 text-xs font-medium">Shipping from Ningbo & Shanghai to North America, Europe, and global destinations</p>
          </div>
          <svg viewBox="0 0 1000 450" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Simplified world landmasses */}
            <defs>
              <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6DBFC2" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6DBFC2" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Continents - simplified silhouettes */}
            {/* Europe */}
            <path d="M440 80 L460 75 L480 85 L500 80 L510 90 L520 85 L530 100 L520 120 L510 130 L490 125 L470 135 L460 120 L450 110 L440 100 Z" fill="white" fillOpacity="0.08" />
            {/* Africa */}
            <path d="M460 145 L490 140 L510 150 L520 170 L530 200 L525 230 L520 260 L510 290 L490 310 L480 300 L470 280 L460 260 L455 230 L450 200 L445 170 Z" fill="white" fillOpacity="0.08" />
            {/* Asia */}
            <path d="M530 60 L580 50 L640 55 L700 60 L750 70 L780 90 L790 110 L785 130 L770 150 L740 160 L710 170 L690 165 L670 155 L650 145 L630 140 L600 135 L570 130 L550 120 L540 100 L530 80 Z" fill="white" fillOpacity="0.08" />
            {/* India */}
            <path d="M640 160 L660 155 L670 170 L680 190 L675 210 L665 230 L650 240 L640 230 L635 210 L630 190 L635 170 Z" fill="white" fillOpacity="0.08" />
            {/* SE Asia */}
            <path d="M720 175 L740 170 L760 180 L770 200 L760 220 L745 235 L730 225 L720 210 L715 195 Z" fill="white" fillOpacity="0.08" />
            {/* South America */}
            <path d="M280 230 L310 220 L330 240 L340 270 L335 300 L320 330 L305 350 L290 360 L280 345 L270 320 L265 290 L270 260 Z" fill="white" fillOpacity="0.08" />
            {/* North/Central America */}
            <path d="M150 80 L200 70 L250 80 L280 100 L290 130 L280 160 L260 180 L240 190 L220 185 L200 180 L180 160 L160 130 L150 100 Z" fill="white" fillOpacity="0.08" />
            {/* Australia */}
            <path d="M780 290 L820 280 L850 290 L860 310 L850 330 L830 340 L810 335 L790 320 L780 305 Z" fill="white" fillOpacity="0.08" />

            {/* Factory location - Zhejiang, China */}
            <circle cx="762" cy="145" r="6" fill="#6DBFC2" opacity="0.3">
              <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="762" cy="145" r="4" fill="#6DBFC2" />
            <text x="762" y="135" textAnchor="middle" fill="#6DBFC2" fontSize="9" fontWeight="bold">ZHEJIANG</text>
            <text x="762" y="162" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="7">Ningbo · Shanghai</text>

            {/* Shipping routes - curved lines from Zhejiang to destinations */}
            {/* To India */}
            <path d="M755 150 Q700 180 650 200" stroke="#6DBFC2" strokeWidth="1.2" fill="none" strokeOpacity="0.5" strokeDasharray="4 3" />
            <circle cx="650" cy="200" r="3" fill="#3C6E71" /><text x="637" y="198" textAnchor="end" fill="white" fillOpacity="0.6" fontSize="7">India</text>
            
            {/* To SE Asia */}
            <path d="M758 155 Q740 185 730 210" stroke="#6DBFC2" strokeWidth="1.2" fill="none" strokeOpacity="0.5" strokeDasharray="4 3" />
            <circle cx="730" cy="210" r="3" fill="#4A8B8E" /><text x="742" y="215" fill="white" fillOpacity="0.6" fontSize="7">SE Asia</text>
            
            {/* To Middle East */}
            <path d="M750 148 Q670 150 580 165" stroke="#6DBFC2" strokeWidth="1.2" fill="none" strokeOpacity="0.5" strokeDasharray="4 3" />
            <circle cx="580" cy="165" r="3" fill="#B5654A" /><text x="567" y="163" textAnchor="end" fill="white" fillOpacity="0.6" fontSize="7">Middle East</text>
            
            {/* To Africa */}
            <path d="M748 152 Q640 200 505 250" stroke="#6DBFC2" strokeWidth="1.2" fill="none" strokeOpacity="0.5" strokeDasharray="4 3" />
            <circle cx="505" cy="250" r="3" fill="#C4845F" /><text x="518" y="255" fill="white" fillOpacity="0.6" fontSize="7">Africa</text>
            
            {/* To Japan/Korea */}
            <path d="M768 140 Q775 120 782 108" stroke="#6DBFC2" strokeWidth="1.2" fill="none" strokeOpacity="0.5" strokeDasharray="4 3" />
            <circle cx="782" cy="108" r="3" fill="#5A9EA1" /><text x="795" y="112" fill="white" fillOpacity="0.6" fontSize="7">Japan · Korea</text>
            
            {/* To Latin America */}
            <path d="M745 155 Q500 250 305 285" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />
            <circle cx="305" cy="285" r="3" fill="#8B6BB5" /><text x="315" y="295" fill="white" fillOpacity="0.6" fontSize="7">Latin America</text>
            
            {/* To Pakistan/Bangladesh */}
            <path d="M752 152 Q700 165 630 175" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
            <circle cx="630" cy="175" r="2.5" fill="#3C6E71" /><text x="617" y="178" textAnchor="end" fill="white" fillOpacity="0.5" fontSize="6">Pakistan</text>

            {/* To Central Asia */}
            <path d="M758 140 Q700 110 620 105" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.35" strokeDasharray="4 3" />
            <circle cx="620" cy="105" r="2.5" fill="#6B8BB5" /><text x="607" y="103" textAnchor="end" fill="white" fillOpacity="0.5" fontSize="6">Kazakhstan</text>

            {/* To North America — West Coast */}
            <path d="M748 145 Q520 95 245 115" stroke="#6DBFC2" strokeWidth="1.3" fill="none" strokeOpacity="0.55" strokeDasharray="4 3" />
            <circle cx="245" cy="115" r="3" fill="#6DBFC2" /><text x="232" y="112" textAnchor="end" fill="white" fillOpacity="0.68" fontSize="7">Los Angeles</text>

            {/* To North America — East Coast */}
            <path d="M745 148 Q520 65 205 105" stroke="#6DBFC2" strokeWidth="1.1" fill="none" strokeOpacity="0.45" strokeDasharray="4 3" />
            <circle cx="205" cy="105" r="2.8" fill="#6DBFC2" /><text x="192" y="103" textAnchor="end" fill="white" fillOpacity="0.6" fontSize="6">New York</text>

            {/* To US Gulf */}
            <path d="M744 152 Q520 130 230 160" stroke="#6DBFC2" strokeWidth="1.1" fill="none" strokeOpacity="0.42" strokeDasharray="4 3" />
            <circle cx="230" cy="160" r="2.8" fill="#6DBFC2" /><text x="217" y="165" textAnchor="end" fill="white" fillOpacity="0.6" fontSize="6">Houston</text>

            {/* To Canada */}
            <path d="M748 142 Q520 70 210 80" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.4" strokeDasharray="4 3" />
            <circle cx="210" cy="80" r="2.5" fill="#6DBFC2" /><text x="198" y="78" textAnchor="end" fill="white" fillOpacity="0.56" fontSize="6">Vancouver</text>

            {/* To Northern Europe */}
            <path d="M748 143 Q620 70 485 90" stroke="#6DBFC2" strokeWidth="1.3" fill="none" strokeOpacity="0.55" strokeDasharray="4 3" />
            <circle cx="485" cy="90" r="3" fill="#7EA6C8" /><text x="472" y="88" textAnchor="end" fill="white" fillOpacity="0.68" fontSize="7">Rotterdam</text>

            {/* To Germany */}
            <path d="M750 142 Q630 80 500 82" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.45" strokeDasharray="4 3" />
            <circle cx="500" cy="82" r="2.8" fill="#7EA6C8" /><text x="511" y="80" fill="white" fillOpacity="0.6" fontSize="6">Hamburg</text>

            {/* To Belgium */}
            <path d="M748 145 Q628 88 480 98" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.42" strokeDasharray="4 3" />
            <circle cx="480" cy="98" r="2.6" fill="#7EA6C8" /><text x="468" y="104" textAnchor="end" fill="white" fillOpacity="0.58" fontSize="6">Antwerp</text>

            {/* To Mediterranean Europe */}
            <path d="M748 150 Q630 120 500 128" stroke="#6DBFC2" strokeWidth="1" fill="none" strokeOpacity="0.42" strokeDasharray="4 3" />
            <circle cx="500" cy="128" r="2.6" fill="#7EA6C8" /><text x="512" y="132" fill="white" fillOpacity="0.58" fontSize="6">Genoa</text>

            {/* Legend */}
            <rect x="30" y="380" width="8" height="8" rx="4" fill="#6DBFC2" />
            <text x="43" y="388" fill="white" fillOpacity="0.5" fontSize="8">Factory &amp; origin ports</text>
            <line x1="100" y1="398" x2="130" y2="398" stroke="#6DBFC2" strokeWidth="1" strokeDasharray="4 3" strokeOpacity="0.5" />
            <text x="135" y="402" fill="white" fillOpacity="0.5" fontSize="8">Shipping routes</text>
          </svg>
        </div>
      </section>

      {/* Country listings by region */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {REGION_ORDER.map(region => {
            const inRegion = markets.filter(m => m.region === region);
            if (inRegion.length === 0) return null;
            const color = REGION_COLORS[region] || "#3C6E71";
            return (
              <div key={region} className="mb-10 last:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#8A8782]">{region}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {inRegion.map(m => (
                    <Link
                      key={m.slug}
                      href={`/markets/${m.slug}`}
                      className="group block p-5 rounded-xl border border-[#E6E3DD] hover:border-[#3C6E71] hover:bg-[#FBFAF8] transition-all"
                    >
                      <h3 className="font-semibold text-[#2B2A28] group-hover:text-[#3C6E71] transition-colors mb-1.5">
                        {m.countryName}
                      </h3>
                      <p className="text-[#8A8782] text-xs leading-relaxed">{m.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

          <div className="mt-10 pt-8 border-t border-[#E6E3DD] bg-[#FBFAF8] rounded-xl p-6">
            <h3 className="font-bold text-[#2B2A28] mb-2">Don't see your country?</h3>
            <p className="text-[#5C5A55] text-sm mb-4">We ship globally — get in touch with your destination, order volume, and target products for a freight and lead-time estimate.</p>
            <Link href="/contact" className="btn-fill">Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
