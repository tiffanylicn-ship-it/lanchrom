import type { CSSProperties, ReactNode } from "react";

export default function ResponsiveTable({
  children,
  label,
  minWidth = "36rem",
  className = "",
}: {
  children: ReactNode;
  label: string;
  minWidth?: string;
  className?: string;
}) {
  const style = {
    "--responsive-table-min-width": minWidth,
  } as CSSProperties;

  return (
    <div className={`responsive-table ${className}`.trim()} style={style}>
      <p className="responsive-table__hint" aria-hidden="true">
        <span>Swipe horizontally to view all columns</span>
        <span aria-hidden="true">↔</span>
      </p>
      <div
        className="responsive-table__scroller"
        role="region"
        aria-label={`${label} table`}
        tabIndex={0}
        data-responsive-table
      >
        {children}
      </div>
    </div>
  );
}
