#!/usr/bin/env python3
"""Generate one consolidated TDS and one specification PDF per product."""

from __future__ import annotations

import argparse
import json
import re
from datetime import date
from pathlib import Path
from typing import Any, Iterable

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


NAVY = colors.HexColor("#082F55")
BLUE = colors.HexColor("#0B4F83")
GREEN = colors.HexColor("#216B4B")
SILVER = colors.HexColor("#D7DDE2")
SOFT_BLUE = colors.HexColor("#EAF3F9")
SOFT_GRAY = colors.HexColor("#F4F6F7")
MID_GRAY = colors.HexColor("#5D7182")
LINE = colors.HexColor("#C5D0D6")
INK = colors.HexColor("#172B3A")
WHITE = colors.white

GRADE_LABELS = {
    "hplc": "HPLC Grade",
    "hplc-gradient": "HPLC Gradient Grade",
    "lcms": "LC-MS Grade",
    "uplc": "UPLC Grade",
    "gc": "GC Grade",
    "spectroscopic": "Spectroscopic Grade",
    "anhydrous": "Anhydrous Grade",
    "prep": "HPLC Preparative Grade",
    "pharma-usp": "USP Grade",
    "pharma-ep": "EP Grade",
    "electronic": "Electronic Grade",
    "food-grade": "Food Grade",
    "kosher-halal": "Kosher / Halal",
}

FONT_REGULAR = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def register_fonts() -> None:
    pdfmetrics.registerFont(TTFont("Lanchrom", FONT_REGULAR))
    pdfmetrics.registerFont(TTFont("Lanchrom-Bold", FONT_BOLD))


def clean(value: Any) -> str:
    if value is None:
        return "-"
    text = str(value)
    replacements = {
        "\u2010": "-", "\u2011": "-", "\u2012": "-", "\u2013": "-", "\u2014": "-",
        "\u2212": "-", "\u00a0": " ", "&": "&amp;", "<": "&lt;", ">": "&gt;",
    }
    for source, target in replacements.items():
        text = text.replace(source, target)
    return re.sub(r"\s+", " ", text).strip() or "-"


def raw_clean(value: Any) -> str:
    return clean(value).replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")


def product_grades(product: dict[str, Any], fallback: str) -> list[str]:
    grades = product.get("availableGrades") or product.get("grades") or [fallback]
    return [GRADE_LABELS.get(str(grade), str(grade)) for grade in grades]


def styles() -> dict[str, ParagraphStyle]:
    sample = getSampleStyleSheet()
    return {
        "body": ParagraphStyle("Body", parent=sample["BodyText"], fontName="Lanchrom", fontSize=9.2, leading=13.4, textColor=INK, spaceAfter=5),
        "small": ParagraphStyle("Small", parent=sample["BodyText"], fontName="Lanchrom", fontSize=7.6, leading=10.5, textColor=MID_GRAY),
        "title": ParagraphStyle("Title", parent=sample["Title"], fontName="Lanchrom-Bold", fontSize=23, leading=27, textColor=NAVY, alignment=TA_LEFT, spaceAfter=5),
        "subtitle": ParagraphStyle("Subtitle", parent=sample["BodyText"], fontName="Lanchrom", fontSize=10, leading=14, textColor=MID_GRAY, spaceAfter=12),
        "section": ParagraphStyle("Section", parent=sample["Heading2"], fontName="Lanchrom-Bold", fontSize=12.5, leading=15, textColor=NAVY, spaceBefore=10, spaceAfter=7),
        "section_white": ParagraphStyle("SectionWhite", parent=sample["Heading2"], fontName="Lanchrom-Bold", fontSize=11, leading=13, textColor=WHITE),
        "label": ParagraphStyle("Label", parent=sample["BodyText"], fontName="Lanchrom-Bold", fontSize=7.5, leading=10, textColor=BLUE),
        "value": ParagraphStyle("Value", parent=sample["BodyText"], fontName="Lanchrom", fontSize=8.5, leading=11.5, textColor=INK),
        "table_head": ParagraphStyle("TableHead", parent=sample["BodyText"], fontName="Lanchrom-Bold", fontSize=7.8, leading=10, textColor=WHITE),
        "table": ParagraphStyle("Table", parent=sample["BodyText"], fontName="Lanchrom", fontSize=7.8, leading=10.8, textColor=INK),
        "table_bold": ParagraphStyle("TableBold", parent=sample["BodyText"], fontName="Lanchrom-Bold", fontSize=7.8, leading=10.8, textColor=INK),
        "footer": ParagraphStyle("Footer", parent=sample["BodyText"], fontName="Lanchrom", fontSize=6.8, leading=8.5, textColor=MID_GRAY),
        "right": ParagraphStyle("Right", parent=sample["BodyText"], fontName="Lanchrom", fontSize=7.5, leading=10, textColor=MID_GRAY, alignment=TA_RIGHT),
    }


def document_id(product: dict[str, Any], suffix: str) -> str:
    slug = raw_clean(product.get("slug", "product")).upper().replace("-", "_")
    return f"LAN-{slug[:34]}-{suffix}"


def page_footer(canvas, doc, doc_id: str) -> None:
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.4)
    canvas.line(16 * mm, 13 * mm, A4[0] - 16 * mm, 13 * mm)
    canvas.setFont("Lanchrom", 6.8)
    canvas.setFillColor(MID_GRAY)
    canvas.drawString(16 * mm, 8.7 * mm, "Zhejiang LANJING Chemical Materials Co., Ltd. | LANCHROM(TM)")
    canvas.drawRightString(A4[0] - 16 * mm, 8.7 * mm, f"{doc_id} | Page {doc.page}")
    canvas.restoreState()


def doc_template(path: Path, doc_id: str) -> SimpleDocTemplate:
    return SimpleDocTemplate(
        str(path), pagesize=A4, rightMargin=16 * mm, leftMargin=16 * mm,
        topMargin=15 * mm, bottomMargin=18 * mm,
        title=doc_id, author="Zhejiang LANJING Chemical Materials Co., Ltd.",
        subject="LANCHROM product technical documentation",
    )


def masthead(product: dict[str, Any], doc_type: str, doc_id: str, style: dict[str, ParagraphStyle], logo: Path) -> list[Any]:
    logo_flowable = Image(str(logo), width=54 * mm, height=10.4 * mm)
    control = Paragraph(
        f"<b>{clean(doc_type)}</b><br/>{clean(doc_id)}<br/>Revision 01 | {date.today().isoformat()}",
        style["right"],
    )
    header = Table([[logo_flowable, control]], colWidths=[105 * mm, 67 * mm])
    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5 * mm),
        ("LINEBELOW", (0, 0), (-1, -1), 1.2, BLUE),
    ]))
    return [
        header,
        Spacer(1, 8 * mm),
        Paragraph(clean(product.get("name")), style["title"]),
        Paragraph(f"{clean(product.get('productLine'))} | {clean(product.get('categoryName'))}", style["subtitle"]),
    ]


def section_band(text: str, style: dict[str, ParagraphStyle]) -> Table:
    table = Table([[Paragraph(clean(text), style["section_white"])]], colWidths=[172 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), NAVY),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
    ]))
    return table


def data_table(rows: list[list[Any]], widths: list[float], style: dict[str, ParagraphStyle], header: bool = False) -> Table:
    formatted: list[list[Paragraph]] = []
    for row_index, row in enumerate(rows):
        formatted.append([
            Paragraph(clean(cell), style["table_head"] if header and row_index == 0 else style["table_bold"] if col_index == 0 else style["table"])
            for col_index, cell in enumerate(row)
        ])
    table = Table(formatted, colWidths=widths, repeatRows=1 if header else 0, hAlign="LEFT")
    commands = [
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7),
        ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("ROWBACKGROUNDS", (0, 1 if header else 0), (-1, -1), [WHITE, SOFT_GRAY]),
    ]
    if header:
        commands.append(("BACKGROUND", (0, 0), (-1, 0), BLUE))
    table.setStyle(TableStyle(commands))
    return table


def paragraphs(items: Iterable[Any], style: dict[str, ParagraphStyle], limit: int | None = None) -> list[Paragraph]:
    values = list(items)
    if limit is not None:
        values = values[:limit]
    return [Paragraph(f"<b>{index:02d}</b>&nbsp;&nbsp;{clean(item)}", style["body"]) for index, item in enumerate(values, 1)]


def identity_rows(product: dict[str, Any]) -> list[list[str]]:
    grades = product_grades(product, "Contact technical sales")
    return [
        ["Product name", product.get("name")],
        ["CAS number", product.get("cas")],
        ["Molecular formula", product.get("formula")],
        ["Molecular weight", product.get("mw")],
        ["Available grades", " / ".join(map(str, grades))],
        ["Product category", product.get("categoryName")],
    ]


def packaging_rows(product: dict[str, Any]) -> list[list[str]]:
    rows = [["Package size", "Container / format", "Supply status"]]
    packaging = product.get("packaging") or []
    if packaging:
        for item in packaging:
            rows.append([
                item.get("volume", "On request"),
                str(item.get("container", "Compatible container")).replace("-", " ").upper(),
                "Available" if item.get("available", True) else "Confirm lead time",
            ])
    else:
        sizes = product.get("packSizes") or ["Laboratory pack", "Production pack", "Bulk supply"]
        for size in sizes:
            rows.append([size, "Compatible container selected by product and grade", "Available on request"])
    return rows


def fallback_specs() -> list[dict[str, str]]:
    return [
        {"parameter": "Identification", "value": "Conforms to the approved product reference", "testMethod": "Approved method"},
        {"parameter": "Appearance", "value": "Conforms to the grade-specific controlled specification", "testMethod": "Visual / approved method"},
        {"parameter": "Assay / purity", "value": "Grade-specific controlled limit", "testMethod": "Approved method"},
        {"parameter": "Water", "value": "Grade-specific controlled limit", "testMethod": "Karl Fischer or approved method"},
        {"parameter": "Residue / non-volatile matter", "value": "Grade-specific controlled limit", "testMethod": "Approved method"},
    ]


def specification_rows(product: dict[str, Any]) -> list[list[str]]:
    rows = [["Test item", "Specification / reference value", "Test method"]]
    seen: set[str] = set()
    excluded = {"available grades", "batch documentation", "technical documents"}
    for item in product.get("specifications") or fallback_specs():
        key = raw_clean(item.get("parameter", "")).lower()
        if key in excluded or key in seen:
            continue
        seen.add(key)
        rows.append([item.get("parameter"), item.get("value"), item.get("testMethod") or "Approved method"])
    return rows


def build_tds(product: dict[str, Any], output: Path, logo: Path, style: dict[str, ParagraphStyle]) -> None:
    doc_id = document_id(product, "TDS")
    story: list[Any] = masthead(product, "Technical Data Sheet", doc_id, style, logo)
    story.extend([
        Paragraph(clean(product.get("shortDescription") or product.get("description") or "LANCHROM high-purity chemical product for laboratory and process applications."), style["body"]),
        Spacer(1, 4 * mm),
        section_band("1. Product identity and grade scope", style),
        Spacer(1, 3 * mm),
        data_table(identity_rows(product), [43 * mm, 129 * mm], style),
        Spacer(1, 5 * mm),
        section_band("2. Recommended applications", style),
        Spacer(1, 3 * mm),
    ])
    story.extend(paragraphs(product.get("applications") or ["Laboratory analysis", "Quality-controlled chemical processing", "Technical method development"], style, 10))

    physical = product.get("physicalProperties") or {}
    physical_rows = [[key.replace("_", " ").replace("Conditions", " conditions").title(), value] for key, value in physical.items()]
    if not physical_rows:
        physical_rows = [
            ["Appearance", "Confirm in the current grade-specific specification"],
            ["Storage conditions", "Follow the current Safety Data Sheet and approved product label"],
            ["Shelf life", "Confirm for the selected grade and packaging format"],
        ]
    story.extend([
        Spacer(1, 4 * mm),
        section_band("3. Physical and handling information", style),
        Spacer(1, 3 * mm),
        data_table(physical_rows, [52 * mm, 120 * mm], style),
    ])

    story.extend([
        Spacer(1, 5 * mm),
        section_band("4. Consolidated packaging options", style),
        Spacer(1, 3 * mm),
        data_table(packaging_rows(product), [38 * mm, 92 * mm, 42 * mm], style, header=True),
        Spacer(1, 3 * mm),
        Paragraph("All listed packaging sizes are consolidated in this TDS. Final container material, closure, minimum order quantity and availability depend on product compatibility, grade and destination market.", style["small"]),
        Spacer(1, 5 * mm),
        section_band("5. Storage, safety and documentation", style),
        Spacer(1, 3 * mm),
        Paragraph(clean(physical.get("storageConditions") or "Store in the original tightly closed compatible container under the conditions stated in the current Safety Data Sheet. Protect from incompatible materials and sources of ignition where applicable."), style["body"]),
        Paragraph(f"Transport reference: {clean(product.get('unNumber') or 'Confirm in current SDS')} | Hazard class: {clean(product.get('hazmatClass') or 'Confirm in current SDS')}", style["body"]),
        Paragraph("Available documents: Product Specification, current Safety Data Sheet, and batch-specific Certificate of Analysis. Contact the LANCHROM technical team for the controlled revision required for qualification or purchasing.", style["body"]),
        Spacer(1, 5 * mm),
        Paragraph("Important: This technical data sheet summarizes product information available in the catalog. It is not a Certificate of Analysis and does not replace the current grade-specific controlled specification or Safety Data Sheet.", style["small"]),
    ])
    doc = doc_template(output, doc_id)
    doc.build(story, onFirstPage=lambda c, d: page_footer(c, d, doc_id), onLaterPages=lambda c, d: page_footer(c, d, doc_id))


def build_specification(product: dict[str, Any], output: Path, logo: Path, style: dict[str, ParagraphStyle]) -> None:
    doc_id = document_id(product, "SPEC")
    grades = product_grades(product, "Controlled grade available on request")
    story: list[Any] = masthead(product, "Product Specification Summary", doc_id, style, logo)
    story.extend([
        section_band("1. Specification scope", style),
        Spacer(1, 3 * mm),
        data_table([
            ["Product", product.get("name")],
            ["CAS number", product.get("cas")],
            ["Grade scope", " / ".join(map(str, grades))],
            ["Document status", "Reference specification summary"],
        ], [43 * mm, 129 * mm], style),
        Spacer(1, 4 * mm),
        Paragraph("The values below are representative catalog specifications. Where several grades are listed, acceptance limits may differ by grade. The current controlled grade-specific specification agreed at quotation or qualification is the governing document.", style["body"]),
        Spacer(1, 3 * mm),
        section_band("2. Test requirements", style),
        Spacer(1, 3 * mm),
        data_table(specification_rows(product), [48 * mm, 77 * mm, 47 * mm], style, header=True),
        Spacer(1, 5 * mm),
        section_band("3. Packaging and release documentation", style),
        Spacer(1, 3 * mm),
        data_table(packaging_rows(product), [38 * mm, 92 * mm, 42 * mm], style, header=True),
        Spacer(1, 4 * mm),
        Paragraph("Each released batch is supported by a batch-specific Certificate of Analysis. Packaging sizes are consolidated in this document; actual availability, closure system and minimum order quantity are confirmed with the quotation.", style["body"]),
        Spacer(1, 4 * mm),
        section_band("4. Document control notice", style),
        Spacer(1, 3 * mm),
        Paragraph("This downloadable file is a reference summary generated from the LANCHROM product catalog. Request the current approved specification, SDS and sample COA before method validation, supplier qualification, regulatory submission or purchase release.", style["body"]),
    ])
    doc = doc_template(output, doc_id)
    doc.build(story, onFirstPage=lambda c, d: page_footer(c, d, doc_id), onLaterPages=lambda c, d: page_footer(c, d, doc_id))


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_json", type=Path)
    parser.add_argument("output_root", type=Path)
    parser.add_argument("--logo", type=Path, required=True)
    parser.add_argument("--limit", type=int)
    args = parser.parse_args()

    register_fonts()
    style = styles()
    products = json.loads(args.input_json.read_text(encoding="utf-8"))
    if args.limit:
        products = products[: args.limit]

    manifest: list[dict[str, Any]] = []
    for index, product in enumerate(products, 1):
        category = raw_clean(product.get("category") or "products")
        slug = raw_clean(product.get("slug") or f"product-{index}")
        target = args.output_root / category / slug
        target.mkdir(parents=True, exist_ok=True)
        tds_name = f"LANCHROM-{slug}-TDS.pdf"
        spec_name = f"LANCHROM-{slug}-Specification.pdf"
        build_tds(product, target / tds_name, args.logo, style)
        build_specification(product, target / spec_name, args.logo, style)
        manifest.append({
            "name": product.get("name"), "category": category, "slug": slug,
            "tds": f"/documents/products/{category}/{slug}/{tds_name}",
            "specification": f"/documents/products/{category}/{slug}/{spec_name}",
        })
        if index % 50 == 0 or index == len(products):
            print(f"Generated documents for {index}/{len(products)} products")

    (args.output_root / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"Generated {len(manifest) * 2} PDFs and manifest for {len(manifest)} products")


if __name__ == "__main__":
    main()
