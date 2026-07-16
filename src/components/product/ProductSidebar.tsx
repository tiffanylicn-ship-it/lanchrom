"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

function ProductGroup({ groupKey, color }: { groupKey: keyof typeof GROUP_LABELS; color: string }) {
  const pathname = usePathname();
  const categories = getCategoriesByGroup(groupKey);
  const info = GROUP_LABELS[groupKey];
  const groupActive = categories.some(c => pathname.includes(`/products/${c.slug}`));
  const [open, setOpen] = useState(groupActive);

  if (categories.length === 0) return null;

  return (
    <div>
      {/* The whole row toggles the sub-menu — click once to reveal it, click
          again to collapse it. Navigation to the line overview lives on the
          "All Product Lines" pages themselves, not here, so this row has one
          clear job. */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-2 py-1 -ml-1 pl-1 pr-1 rounded-md hover:bg-[#F5F3EF] transition-colors"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          <span
            className={`text-[13px] font-bold uppercase tracking-wider truncate ${groupActive ? "" : "text-[#5C5A55]"}`}
            style={groupActive ? { color } : undefined}
          >
            {info.label}
          </span>
        </span>
        <span className="flex-shrink-0 text-[10px] transition-transform duration-200" style={{ color, transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-1" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden min-h-0">
          <ul className="space-y-0.5 ml-1 border-l-2 pl-3" style={{ borderColor: groupActive ? color : "#EFEDE8" }}>
            {categories.map(cat => {
              const isActive = pathname.includes(`/products/${cat.slug}`);
              return (
                <li key={cat.slug}>
                  <Link
                    href={`/products/${cat.slug}`}
                    className={`block text-[14.5px] py-1.5 px-2.5 -ml-2.5 rounded-md transition-colors ${
                      isActive ? "font-semibold" : "text-[#5C5A55] hover:text-[#2B2A28] hover:bg-[#F5F3EF]"
                    }`}
                    style={isActive ? { backgroundColor: `${color}1A`, color } : undefined}
                  >
                    {cat.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProductSidebar() {
  return (
    <nav className="hidden lg:block w-[260px] flex-shrink-0 sticky top-[156px] self-start max-h-[calc(100vh-194px)] overflow-y-auto pr-4 pb-8">
      <Link href="/products" className="flex items-center mb-5 group">
        <span className="text-[13px] font-bold uppercase tracking-wider text-[#2B2A28] group-hover:text-[#3C6E71]">All Product Lines</span>
      </Link>
      <div className="space-y-4">
        {GROUP_ORDER.map(({ key, color }) => (
          <ProductGroup key={key} groupKey={key} color={color} />
        ))}
      </div>
    </nav>
  );
}
