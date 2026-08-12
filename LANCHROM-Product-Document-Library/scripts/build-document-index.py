#!/usr/bin/env python3
import csv
import json
import sys
from pathlib import Path

source = Path(sys.argv[1])
target = Path(sys.argv[2])
products = json.loads(source.read_text(encoding="utf-8"))
target.parent.mkdir(parents=True, exist_ok=True)

with target.open("w", newline="", encoding="utf-8-sig") as stream:
    writer = csv.writer(stream)
    writer.writerow(["Product Name", "CAS", "Product Line", "Category", "Product Page", "TDS", "Specification"])
    for product in products:
        category = product["category"]
        slug = product["slug"]
        base = f"/documents/products/{category}/{slug}/LANCHROM-{slug}"
        writer.writerow([
            product["name"], product.get("cas", ""), product.get("productLine", ""), product.get("categoryName", ""),
            f"/products/{category}/{slug}", f"{base}-TDS.pdf", f"{base}-Specification.pdf",
        ])

print(f"Wrote {len(products)} records to {target}")
