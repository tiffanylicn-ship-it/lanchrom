"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategoriesByGroup, GROUP_LABELS } from "@/data/categories";

const GROUP_ORDER: { key: keyof typeof GROUP_LABELS; color: string }[] = [
  { key: "pharma-solvents", color: "#3C6E71" },
  { key: "analytical-solvents", color: "#2C7A7B" },
  { key: "mobile-phase", color: "#B5654A" },
  { key: "standards", color: "#4A7EAA" },
  { key: "reagent-kits", color: "#7B5EA7" },
  { key: "consumables", color: "#4A8B5C" },
  { key: "life-science", color: "#C4845F" },
  { key: "excipients", color: "#6B7280" },
];

export default function ProductSidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block w-[250px] flex-shrink-0 sticky top-24 self-start max-h-[calc(100vh-120px)] overflow-y-auto pr-4 pb-8">
      <Link href="/products" className="flex items-center mb-5 group">
        <span className="text-xs font-bold uppercase tracking-wider text-[#2B2A28] group-hover:text-[#3C6E71]">All Product Lines</span>
      </Link>
      <div className="space-y-5">
        {GROUP_ORDER.map(({ key, color }) => {
          const categories = getCategoriesByGroup(key);
          if (categories.length === 0) return null;
          const info = GROUP_LABELS[key];
          const groupActive = categories.some(c => pathname.includes(`/products/${c.slug}`));

          return (
            <div key={key}>
              <Link
                href={`/products/line/${key}`}
                className="flex items-center gap-2 mb-2 group"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                  groupActive ? "text-[#2B2A28]" : "text-[#5C5A55] group-hover:text-[#2B2A28]"
                }`} style={groupActive ? { color } : undefined}>
                  {info.label}
                </span>
              </Link>
              <ul className="space-y-0.5 ml-1 border-l-2 pl-3" style={{ borderColor: groupActive ? color : "#EFEDE8" }}>
                {categories.map(cat => {
                  const isActive = pathname.includes(`/products/${cat.slug}`);
                  return (
                    <li key={cat.slug}>
                      <Link
                        href={`/products/${cat.slug}`}
                        className={`block text-[13px] py-1 transition-colors ${
                          isActive
                            ? "font-semibold -ml-[14px] pl-[12px] border-l-2"
                            : "text-[#5C5A55] hover:text-[#2B2A28]"
                        }`}
                        style={isActive ? { color, borderColor: color } : undefined}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
