"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getCategoriesByGroup, GROUP_LABELS } from "@/data/categories";
import { getCategoryPath, getProductLinePath } from "@/data/product-line-pages";

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
  const pathSegments = pathname.split("/");
  const groupPath = getProductLinePath(groupKey);
  const groupActive = pathname === groupPath || categories.some(c => pathSegments.includes(c.slug));
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
        className="-ml-1 flex w-full items-start justify-between gap-2 rounded-md py-1.5 pl-1 pr-1 text-left transition-colors hover:bg-[#F5F3EF]"
      >
        <span className="flex min-w-0 items-start gap-2.5">
          <span className="mt-1.5 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: color }} />
          <span
            className={`whitespace-normal break-words text-[14.5px] font-extrabold uppercase leading-[1.35] tracking-[0.06em] ${groupActive ? "" : "text-[#455E58]"}`}
            style={groupActive ? { color } : undefined}
          >
            {info.label}
          </span>
        </span>
        <span className="mt-1 flex-shrink-0 text-xs transition-transform duration-200" style={{ color, transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-1" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden min-h-0">
          <ul className="space-y-0.5 ml-1 border-l-2 pl-3" style={{ borderColor: groupActive ? color : "#EFEDE8" }}>
            <li>
              <Link
                href={groupPath}
                className="-ml-2.5 block rounded-md px-2.5 py-2 text-[13px] font-extrabold uppercase tracking-[0.06em] text-[#355F59] transition-colors hover:bg-[#F5F3EF] hover:text-[#0E918C]"
              >
                View product line
              </Link>
            </li>
            {categories.map(cat => {
              const isActive = pathSegments.includes(cat.slug);
              return (
                <li key={cat.slug}>
                  <Link
                    href={getCategoryPath(cat)}
                    className={`-ml-2.5 block rounded-md px-2.5 py-2 text-[15px] leading-snug transition-colors ${
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
    <nav className="sticky top-[156px] hidden max-h-[calc(100vh-194px)] w-[300px] flex-shrink-0 self-start overflow-y-auto pr-5 pb-8 lg:block">
      <Link href="/products" className="group mb-6 flex items-center rounded-md border border-[#B9D8CC] bg-[#DDEFE8] px-4 py-3">
        <span className="text-[15px] font-extrabold uppercase tracking-[0.08em] text-[#0A514C] group-hover:text-[#0E918C]">All Product Lines</span>
      </Link>
      <div className="space-y-4">
        {GROUP_ORDER.map(({ key, color }) => (
          <ProductGroup key={key} groupKey={key} color={color} />
        ))}
      </div>
    </nav>
  );
}
