#!/usr/bin/env python3
"""
Generate professional SVG product images for LANCHROM products.
Two container types: amber glass bottle (analytical) and white HDPE drum (bulk).
"""
import os, html

OUTPUT_DIR = "public/images/products"

def amber_bottle_svg(name, grade, cas, volume, category_color="#3C6E71"):
    """Generate an amber glass bottle SVG with product label."""
    # Escape HTML entities
    name_esc = html.escape(name)
    grade_esc = html.escape(grade)
    cas_esc = html.escape(cas) if cas else ""
    vol_esc = html.escape(volume)
    
    # Truncate long names for label
    label_name = name_esc[:32] + "..." if len(name_esc) > 32 else name_esc
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 520" width="400" height="520">
  <defs>
    <linearGradient id="bottle" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#5C3A1E"/>
      <stop offset="30%" stop-color="#8B5E3C"/>
      <stop offset="50%" stop-color="#A0714D"/>
      <stop offset="70%" stop-color="#8B5E3C"/>
      <stop offset="100%" stop-color="#5C3A1E"/>
    </linearGradient>
    <linearGradient id="cap" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#1a1a1a"/>
      <stop offset="50%" stop-color="#333"/>
      <stop offset="100%" stop-color="#1a1a1a"/>
    </linearGradient>
    <linearGradient id="highlight" x1="0.3" y1="0" x2="0.7" y2="0">
      <stop offset="0%" stop-color="white" stop-opacity="0"/>
      <stop offset="50%" stop-color="white" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="3" dy="6" stdDeviation="8" flood-color="#00000020"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="400" height="520" fill="#FBFAF8" rx="12"/>
  
  <!-- Bottle body -->
  <g filter="url(#shadow)">
    <!-- Cap -->
    <rect x="165" y="62" width="70" height="30" rx="4" fill="url(#cap)"/>
    <rect x="170" y="55" width="60" height="12" rx="3" fill="url(#cap)"/>
    
    <!-- Neck -->
    <path d="M175 92 L175 120 Q175 130 160 140 L160 140" fill="url(#bottle)" stroke="none"/>
    <path d="M225 92 L225 120 Q225 130 240 140 L240 140" fill="url(#bottle)" stroke="none"/>
    <rect x="175" y="88" width="50" height="40" fill="url(#bottle)"/>
    
    <!-- Shoulder -->
    <path d="M160 140 Q130 155 125 175 L125 175 L275 175 Q270 155 240 140 Z" fill="url(#bottle)"/>
    
    <!-- Main body -->
    <rect x="125" y="170" width="150" height="250" rx="6" fill="url(#bottle)"/>
    
    <!-- Bottom -->
    <path d="M125 415 Q125 435 145 440 L255 440 Q275 435 275 415 Z" fill="url(#bottle)"/>
    
    <!-- Glass highlight -->
    <rect x="125" y="170" width="150" height="250" rx="6" fill="url(#highlight)"/>
    
    <!-- ═══ LABEL ═══ -->
    <rect x="135" y="200" width="130" height="170" rx="4" fill="white" stroke="#E0DDD8" stroke-width="0.5"/>
    
    <!-- Brand bar -->
    <rect x="135" y="200" width="130" height="28" rx="4" fill="{category_color}"/>
    <rect x="135" y="220" width="130" height="8" fill="{category_color}"/>
    <text x="200" y="218" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="10" font-weight="bold" letter-spacing="1.5">LANCHROM</text>
    
    <!-- Product name -->
    <text x="200" y="248" text-anchor="middle" fill="#2B2A28" font-family="Arial,sans-serif" font-size="10" font-weight="bold">{label_name}</text>
    
    <!-- Grade -->
    <text x="200" y="268" text-anchor="middle" fill="#5C5A55" font-family="Arial,sans-serif" font-size="8">{grade_esc}</text>
    
    <!-- Divider -->
    <line x1="150" y1="280" x2="250" y2="280" stroke="#E6E3DD" stroke-width="0.5"/>
    
    <!-- CAS -->
    <text x="200" y="296" text-anchor="middle" fill="#8A8782" font-family="Arial,sans-serif" font-size="7">CAS: {cas_esc}</text>
    
    <!-- Volume -->
    <text x="200" y="315" text-anchor="middle" fill="#3C6E71" font-family="Arial,sans-serif" font-size="11" font-weight="bold">{vol_esc}</text>
    
    <!-- Hazard diamond (small) -->
    <g transform="translate(155, 330)">
      <rect x="0" y="0" width="14" height="14" rx="1" fill="#FF4444" transform="rotate(45 7 7)"/>
      <text x="7" y="11" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">3</text>
    </g>
    
    <!-- GHS pictogram placeholder -->
    <rect x="185" y="335" width="30" height="30" rx="2" fill="none" stroke="#E6E3DD" stroke-width="0.5" transform="rotate(45 200 350)"/>
  </g>
</svg>'''


def white_drum_svg(name, grade, cas, volume, category_color="#3C6E71"):
    """Generate a white HDPE drum/container SVG with product label."""
    name_esc = html.escape(name)
    grade_esc = html.escape(grade)
    cas_esc = html.escape(cas) if cas else ""
    vol_esc = html.escape(volume)
    label_name = name_esc[:32] + "..." if len(name_esc) > 32 else name_esc
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 480" width="400" height="480">
  <defs>
    <linearGradient id="drum" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#E8E6E1"/>
      <stop offset="25%" stop-color="#F5F4F0"/>
      <stop offset="50%" stop-color="#FFFFFF"/>
      <stop offset="75%" stop-color="#F5F4F0"/>
      <stop offset="100%" stop-color="#E8E6E1"/>
    </linearGradient>
    <linearGradient id="drumcap" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2B6EB5"/>
      <stop offset="50%" stop-color="#3A8FD4"/>
      <stop offset="100%" stop-color="#2B6EB5"/>
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-5%" width="120%" height="115%">
      <feDropShadow dx="3" dy="6" stdDeviation="8" flood-color="#00000018"/>
    </filter>
  </defs>
  
  <rect width="400" height="480" fill="#FBFAF8" rx="12"/>
  
  <g filter="url(#shadow2)">
    <!-- Cap / top -->
    <ellipse cx="200" cy="72" rx="85" ry="18" fill="url(#drumcap)"/>
    <rect x="115" y="60" width="170" height="14" fill="url(#drumcap)"/>
    
    <!-- Handle -->
    <path d="M160 55 Q160 35 180 35 L220 35 Q240 35 240 55" fill="none" stroke="#888" stroke-width="3" stroke-linecap="round"/>
    
    <!-- Body -->
    <rect x="115" y="72" width="170" height="310" fill="url(#drum)"/>
    <rect x="115" y="72" width="170" height="310" fill="white" fill-opacity="0.3"/>
    
    <!-- Ribs -->
    <line x1="115" y1="130" x2="285" y2="130" stroke="#D5D2CC" stroke-width="1"/>
    <line x1="115" y1="320" x2="285" y2="320" stroke="#D5D2CC" stroke-width="1"/>
    
    <!-- Bottom -->
    <ellipse cx="200" cy="382" rx="85" ry="14" fill="#D5D2CC"/>
    
    <!-- ═══ LABEL ═══ -->
    <rect x="130" y="145" width="140" height="165" rx="4" fill="white" stroke="#D5D2CC" stroke-width="0.8"/>
    
    <!-- Brand bar -->
    <rect x="130" y="145" width="140" height="30" rx="4" fill="{category_color}"/>
    <rect x="130" y="167" width="140" height="8" fill="{category_color}"/>
    <text x="200" y="165" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="11" font-weight="bold" letter-spacing="2">LANCHROM</text>
    
    <!-- Product name -->
    <text x="200" y="198" text-anchor="middle" fill="#2B2A28" font-family="Arial,sans-serif" font-size="10" font-weight="bold">{label_name}</text>
    
    <!-- Grade -->
    <text x="200" y="218" text-anchor="middle" fill="#5C5A55" font-family="Arial,sans-serif" font-size="8">{grade_esc}</text>
    
    <line x1="145" y1="228" x2="255" y2="228" stroke="#E6E3DD" stroke-width="0.5"/>
    
    <!-- CAS -->
    <text x="200" y="244" text-anchor="middle" fill="#8A8782" font-family="Arial,sans-serif" font-size="7">CAS: {cas_esc}</text>
    
    <!-- Volume -->
    <text x="200" y="266" text-anchor="middle" fill="{category_color}" font-family="Arial,sans-serif" font-size="14" font-weight="bold">{vol_esc}</text>
    
    <!-- Hazard symbols -->
    <g transform="translate(145, 278)">
      <rect x="0" y="0" width="14" height="14" rx="1" fill="#FF4444" transform="rotate(45 7 7)"/>
      <text x="7" y="11" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="7" font-weight="bold">3</text>
    </g>
    <text x="175" y="290" fill="#8A8782" font-family="Arial,sans-serif" font-size="6">Flammable Liquid</text>
  </g>
</svg>'''


# Products to generate images for
PRODUCTS_TO_IMAGE = [
    # (slug, name, grade, cas, volume, container_type, color)
    # HPLC Solvents
    ("acetonitrile", "Acetonitrile", "HPLC Gradient Grade", "75-05-8", "2.5 L", "bottle", "#4A8B8E"),
    ("methanol", "Methanol", "HPLC Grade", "67-56-1", "2.5 L", "bottle", "#4A8B8E"),
    ("isopropanol-ipa", "Isopropanol (IPA)", "HPLC Grade", "67-63-0", "2.5 L", "bottle", "#4A8B8E"),
    ("hplc-grade-ethanol", "Ethanol", "HPLC Gradient Grade", "64-17-5", "2.5 L", "bottle", "#4A8B8E"),
    ("hplc-grade-n-hexane", "n-Hexane", "HPLC Grade", "110-54-3", "4 L", "bottle", "#4A8B8E"),
    ("hplc-grade-thf-tetrahydrofuran", "THF", "HPLC Grade (BHT)", "109-99-9", "4 L", "bottle", "#4A8B8E"),
    ("hplc-grade-ethyl-acetate", "Ethyl Acetate", "HPLC Grade", "141-78-6", "2.5 L", "bottle", "#4A8B8E"),
    ("hplc-grade-dichloromethane-dcm", "Dichloromethane", "HPLC Prep Grade", "75-09-2", "2.5 L", "bottle", "#4A8B8E"),
    
    # LC-MS Solvents
    ("lc-ms-grade-water-ultrapure", "Water Ultrapure", "LC-MS Grade", "7732-18-5", "4 L", "bottle", "#3C6E71"),
    ("lc-ms-grade-formic-acid-0-1-in-water", "0.1% Formic Acid/Water", "LC-MS Grade", "64-18-6", "1 L", "bottle", "#3C6E71"),
    ("lc-ms-grade-ammonium-acetate-10mm", "NH4OAc 10mM", "LC-MS Buffer", "631-61-8", "1 L", "bottle", "#3C6E71"),
    
    # GC Solvents
    ("gc-grade-acetone", "Acetone", "GC Grade", "67-64-1", "4 L", "bottle", "#5A9EA1"),
    ("gc-grade-n-hexane", "n-Hexane", "GC Grade", "110-54-3", "4 L", "bottle", "#5A9EA1"),
    ("gc-grade-toluene", "Toluene", "GC Grade", "108-88-3", "4 L", "bottle", "#5A9EA1"),
    
    # Pharma Grade
    ("toluene", "Toluene", "Pharma / Reagent", "108-88-3", "25 L", "drum", "#3C6E71"),
    ("dmc-dimethyl-carbonate", "DMC", "Battery Grade", "616-38-6", "25 L", "drum", "#3C6E71"),
    ("pgme-propylene-glycol-methyl-ether", "PGME", "Electronic Grade", "107-98-2", "25 L", "drum", "#3C6E71"),
    ("pgmea-propylene-glycol-methyl-ether-acetate", "PGMEA", "Electronic Grade", "108-65-6", "25 L", "drum", "#3C6E71"),
    
    # Trace Analysis
    ("trace-analysis-grade-nitric-acid-65", "Nitric Acid 65%", "Trace Analysis", "7697-37-2", "1 L", "bottle", "#B5654A"),
    ("trace-analysis-grade-hydrochloric-acid-37", "HCl 37%", "Trace Analysis", "7647-01-0", "1 L", "bottle", "#B5654A"),
    
    # Spectroscopic
    ("spectroscopic-grade-chloroform", "Chloroform", "Spectroscopic", "67-66-3", "2.5 L", "bottle", "#6B8BB5"),
    
    # Mobile Phase Bags (use drum style for bags)
    ("0-1-formic-acid-in-water-bag", "0.1% Formic Acid/H2O", "LC-MS Ready Bag", "64-18-6", "10 L", "drum", "#B5654A"),
    
    # NMR
    ("chloroform-d-cdcl-99-8-d", "CDCl3", "NMR ≥99.8%D", "865-49-6", "25 mL", "bottle", "#8B6BB5"),
    ("dmso-d6-99-9-d", "DMSO-d6", "NMR ≥99.9%D", "2206-27-1", "25 mL", "bottle", "#8B6BB5"),
    
    # Karl Fischer
    ("kf-volumetric-reagent-one-component", "KF Reagent", "Volumetric Composite", "", "500 mL", "bottle", "#5C8A5C"),
    
    # Standards
    ("icp-multi-element-standard-23-elements-10mg-l", "ICP Multi-Element", "23 Elements 10mg/L", "", "100 mL", "bottle", "#6B8BB5"),
    ("ph-7-00-buffer-standard", "pH 7.00 Buffer", "Certified ±0.01", "", "500 mL", "bottle", "#6B8BB5"),
    
    # SPE
    ("c18-spe-cartridge-500mg-6ml", "C18 SPE Cartridge", "500mg/6mL", "", "30 pcs", "bottle", "#5C8A5C"),
    ("hlb-spe-cartridge-200mg-6ml", "HLB SPE Cartridge", "200mg/6mL", "", "30 pcs", "bottle", "#5C8A5C"),
    
    # DMSO (existing)
    ("dmso-dimethyl-sulfoxide", "DMSO", "USP / Cell Culture", "67-68-5", "1 L", "bottle", "#C4845F"),
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

count = 0
for slug, name, grade, cas, volume, container, color in PRODUCTS_TO_IMAGE:
    if container == "bottle":
        svg = amber_bottle_svg(name, grade, cas, volume, color)
    else:
        svg = white_drum_svg(name, grade, cas, volume, color)
    
    filepath = os.path.join(OUTPUT_DIR, f"{slug}.svg")
    with open(filepath, "w") as f:
        f.write(svg)
    count += 1

print(f"Generated {count} product images in {OUTPUT_DIR}/")
