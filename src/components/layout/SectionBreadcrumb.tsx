import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function SectionBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="sticky top-20 z-30 border-y border-[#B9D8CC] bg-[#DDEFE8]/95 backdrop-blur-sm md:top-28">
      <nav aria-label="Breadcrumb" className="mx-auto flex min-h-12 max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-sm sm:px-6 lg:px-8">
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
