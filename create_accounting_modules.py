import os

# Base directory
base_dir = "/Users/mac/pembelajar-belajar-odoo"

# Template file path (using Materi 8 as template)
template_path = os.path.join(base_dir, "accounting/invoicing/accounting-materi-8/index.html")

# Read template
with open(template_path, 'r') as f:
    template_content = f.read()

# Materials configuration
materials = [
    {
        "id": "accounting_materi34",
        "title": "Reporting",
        "subtitle": "Laporan keuangan & audit.",
        "folder": "accounting/reporting/accounting-materi-34",
        "next_link": "../../valuation/accounting-materi-35/index.html"
    },
    {
        "id": "accounting_materi35",
        "title": "Costing Methods",
        "subtitle": "Metode biaya (FIFO, AVCO, Standard).",
        "folder": "accounting/valuation/accounting-materi-35",
        "next_link": "../accounting-materi-36/index.html"
    },
    {
        "id": "accounting_materi36",
        "title": "Continental",
        "subtitle": "Akuntansi Continental.",
        "folder": "accounting/valuation/accounting-materi-36",
        "next_link": "../accounting-materi-37/index.html"
    },
    {
        "id": "accounting_materi37",
        "title": "Anglo-Saxon",
        "subtitle": "Akuntansi Anglo-Saxon.",
        "folder": "accounting/valuation/accounting-materi-37",
        "next_link": "../../multicurrency/accounting-materi-38/index.html"
    },
    {
        "id": "accounting_materi38",
        "title": "Multi-Currency",
        "subtitle": "Mengelola mata uang asing.",
        "folder": "accounting/multicurrency/accounting-materi-38",
        "next_link": "../accounting-materi-39/index.html"
    },
    {
        "id": "accounting_materi39",
        "title": "Unrealized Gains",
        "subtitle": "Keuntungan/kerugian belum terealisasi.",
        "folder": "accounting/multicurrency/accounting-materi-39",
        "next_link": "../../closing/accounting-materi-40/index.html"
    },
    {
        "id": "accounting_materi40",
        "title": "Annual Closing",
        "subtitle": "Tutup buku tahunan.",
        "folder": "accounting/closing/accounting-materi-40",
        "next_link": "../../../accounting.html"
    }
]

# Generate files
for m in materials:
    # Prepare content
    content = template_content
    content = content.replace("accounting_materi8", m["id"])
    content = content.replace("Vendor Bills", m["title"])
    content = content.replace("Mengelola tagihan dari pemasok.", m["subtitle"])
    content = content.replace("Kuis: Vendor Bills", f"Kuis: {m['title']}")
    content = content.replace("../accounting-materi-9/index.html", m["next_link"])
    content = content.replace("Lanjut ke Materi 9", "Lanjut ke Materi Berikutnya")
    
    # Fix relative paths for assets if deeper or shallower (Template is in accounting/invoicing/materi-8)
    # Template depth: accounting/invoicing/materi-8 -> 3 levels deep from root
    # New locations are also 3 levels deep: accounting/bank/materi-15
    # So relative paths "../../../assets" should remain correct.
    
    # Target directory
    target_dir = os.path.join(base_dir, m["folder"])
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        
    target_file = os.path.join(target_dir, "index.html")
    
    with open(target_file, 'w') as f:
        f.write(content)
    
    print(f"Created {target_file}")
