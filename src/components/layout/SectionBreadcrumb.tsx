import Link from "next/link";
import { getProductThemeStyle, type ProductThemeName } from "@/data/product-themes";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function SectionBreadcrumb({ items, theme = "pharma" }: { items: BreadcrumbItem[]; theme?: ProductThemeName }) {
  return (
    <div className="product-breadcrumb sticky top-[116px] z-40 border-y backdrop-blur-md md:top-28" style={getProductThemeStyle(theme)}>
      <nav aria-label="Breadcrumb" className="mx-auto flex min-h-12 max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-[15px] sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <span key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center gap-2">
            {index > 0 && <span className="font-bold text-[#77A69A]" aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="font-semibold text-[#0A514C] transition-colors hover:text-[#0E918C]">
                {item.label}
              </Link>
            ) : (
              <span className="font-bold text-[#173C36]">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
