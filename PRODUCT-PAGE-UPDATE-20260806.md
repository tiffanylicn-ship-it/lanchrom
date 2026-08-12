# LANCHROM Product Page Update — 2026-08-06

## Scope

- Added the new Electronic Grade IPA product detail page at `/products/electronic-grade-ipa`.
- Preserved the existing homepage and all homepage-specific components without changes.
- Preserved the existing global navigation, footer, inquiry API, analytics, and reCAPTCHA integration.
- Added a permanent redirect from `/products/electronic-grade/ipa-polished` to the new canonical URL.

## Product page system

The new page includes:

1. Product hero and conversion actions
2. Product overview and identity card
3. Specification metric cards and table
4. Semiconductor application content
5. Manufacturing advantages
6. Seven-stage quality workflow
7. Packaging options
8. Technical document cards
9. Related products
10. Embedded product inquiry form

## Visual assets

Project-local assets are stored in:

- `public/images/product-pages/electronic-grade-ipa/`
- `public/documents/electronic-grade-ipa/`

Generated product imagery and the document downloads are concept/sample assets. Replace controlled specifications, product-specific TDS/SDS/COA files, and final regulatory claims with approved production content before public launch.

## Design tokens

- Electronic navy: `#082F55`
- Scientific blue: `#1769AA`
- Metal silver: `#C7CDD3`
- Laboratory white: `#FFFFFF`
- Technical green accent: `#31B77A`

All new visual rules are scoped to `product-page.module.css` to avoid changing the homepage or unrelated routes.
