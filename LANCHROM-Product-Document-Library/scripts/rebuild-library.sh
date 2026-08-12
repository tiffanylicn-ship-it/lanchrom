#!/bin/sh
set -eu

PROJECT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
SITE_DIR=${LANCHROM_SITE_DIR:-"$PROJECT_DIR/../work/lanchrom-main-product-page-20260806/lanchrom-main"}
PYTHON_BIN=${LANCHROM_PYTHON_BIN:-python3}

cd "$SITE_DIR"
npx --yes tsx scripts/export-product-document-data.ts "$PROJECT_DIR/data/product-catalog.json"
"$PYTHON_BIN" "$PROJECT_DIR/scripts/generate-product-pdfs.py" \
  "$PROJECT_DIR/data/product-catalog.json" \
  "$PROJECT_DIR/output/pdf" \
  --logo "$PROJECT_DIR/assets/lanchrom-logo.png"
"$PYTHON_BIN" "$PROJECT_DIR/scripts/build-document-index.py" \
  "$PROJECT_DIR/data/product-catalog.json" \
  "$PROJECT_DIR/data/product-document-index.csv"
mkdir -p "$SITE_DIR/public/documents/products"
cp -R "$PROJECT_DIR/output/pdf/." "$SITE_DIR/public/documents/products/"

echo "LANCHROM product document library rebuilt and synced to website."
