import os

# Content definitions based on quiz topics
content_map = {
    1: {
        "title": "Inventory Basics 1: Penerimaan Barang",
        "subtitle": "Dokumen Sumber & Lokasi Tujuan",
        "video_id": "7qX2o_-N9j0",
        "text": (
            "<h3>Dokumen Sumber Penerimaan</h3>"
            "<p>Dalam Odoo, dokumen yang menjadi sumber utama untuk penerimaan produk ke dalam inventaris Anda adalah <strong>Order Pembelian (Purchase Order)</strong>. Saat PO dikonfirmasi, Odoo secara otomatis membuat dokumen Penerimaan (Receipt) di aplikasi Inventaris.</p>"
            "<h3>Pentingnya Lokasi Tujuan</h3>"
            "<p>Saat memproses penerimaan, sangat penting untuk memastikan 'Lokasi Tujuan' (Destination Location) diatur dengan benar. Hal ini memastikan <strong>produk disimpan di lokasi gudang yang tepat</strong>, menjaga akurasi stok dan memudahkan pelacakan di kemudian hari.</p>"
            "<h3>Melacak Inventaris</h3>"
            "<p>Mengaktifkan opsi 'Track Inventory' pada formulir produk adalah langkah kunci. Fitur ini memungkinkan sistem untuk <strong>melacak jumlah stok dan lokasi spesifik</strong> produk tersebut di seluruh gudang Anda.</p>"
        )
    },
    2: {
        "title": "Inventory Basics 2: Pengiriman & Ketersediaan",
        "subtitle": "Delivery Steps & Product Availability",
        "text": (
            "<h3>Strategi Pengiriman 2 Langkah</h3>"
            "<p>Beberapa perusahaan, seperti Stealthy Wood dalam contoh kasus, menggunakan pengiriman 2 langkah (Pick + Ship). Alasannya adalah efisiensi kerja: tim picking dapat fokus menemukan produk dengan cepat, sementara tim pengiriman (delivery) fokus pada <strong>verifikasi, pengepakan, dan pengiriman</strong> barang.</p>"
            "<h3>Sumber Dokumen Pengiriman</h3>"
            "<p>Berbeda dengan penerimaan, dokumen sumber untuk Picking atau Delivery Order adalah <strong>Order Penjualan (Sales Order)</strong>.</p>"
            "<h3>Indikator Ketersediaan Produk</h3>"
            "<p>Di Odoo, jika Anda melihat teks 'Product Availability' berwarna hijau dengan status 'Available', itu berarti <strong>barang tersedia secara fisik dan telah dicadangkan (reserved)</strong> untuk pesanan tersebut. Ini memberikan kepastian bahwa stok siap untuk diproses.</p>"
        )
    },
    3: {
        "title": "Inventory Basics 3: Warehouse Transfers",
        "subtitle": "Operasi Transfer & Langkah Kualitas",
        "text": (
            "<h3>Transfer Inventaris</h3>"
            "<p>Transfer inventaris di Odoo menentukan <strong>bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses</strong>. Ini mencakup penerimaan, transfer internal, dan pengiriman keluar.</p>"
            "<h3>Penerimaan 3 Langkah (Quality Check)</h3>"
            "<p>Kapan Anda harus menggunakan penerimaan 3 langkah (Receive -> Quality -> Stock)? Strategi ini ideal digunakan <strong>hanya ketika beberapa produk memerlukan pemeriksaan kualitas</strong> sebelum masuk ke stok utama.</p>"
            "<h3>Pengiriman 3 Langkah</h3>"
            "<p>Alur standar untuk pengiriman 3 langkah di Odoo adalah:<br>1. <strong>Pick</strong>: Ambil barang dari penyimpanan.<br>2. <strong>Pack</strong>: Kemas barang ke dalam pesanan.<br>3. <strong>Output</strong>: Pindahkan ke area pengiriman (Output).</p>"
        )
    },
    4: {
        "title": "Inventory Basics 4: Lokasi Gudang",
        "subtitle": "Parent/Child Locations & Valuation",
        "text": (
            "<h3>Hierarki Lokasi: Child Location</h3>"
            "<p>Di Odoo, 'Child Location' didefinisikan sebagai <strong>node bawahan di bawah lokasi induk (parent location)</strong> dalam struktur hierarki gudang. Ini memungkinkan pengorganisasian stok yang granular (misal: Rak A1 di dalam Baris A).</p>"
            "<h3>Penilaian Inventaris (Inventory Valuation)</h3>"
            "<p>Tidak semua jenis lokasi dihitung dalam penilaian inventaris perusahaan. Lokasi yang termasuk dalam perhitungan nilai aset adalah lokasi bertipe <strong>Internal dan Transit</strong>.</p>"
            "<h3>Lokasi Scrap (Inventory Loss)</h3>"
            "<p>Memindahkan barang ke lokasi 'Inventory Loss' (Scrap) akan memicu <strong>pergerakan stok yang mengurangi jumlah on-hand</strong>, secara efektif menghapus nilai aset barang tersebut dari pembukuan stok aktif.</p>"
        )
    },
    5: {
        "title": "Inventory Basics 5: Satuan Ukuran (UoM)",
        "subtitle": "Konfigurasi & Konversi Unit",
        "text": (
            "<h3>Mengaktifkan Units of Measure</h3>"
            "<p>Untuk menggunakan berbagai satuan (seperti pcs, lusin, kg, ton), Anda harus mengaktifkan fiturnya di <strong>Configuration > Settings > Products section > Units of Measure</strong>.</p>"
            "<h3>Kalkulasi Konversi</h3>"
            "<p>Saat membuat UoM baru yang lebih besar dari unit referensi (misal: Lusin vs Pcs), kolom 'Contains' biasanya mengharuskan Anda mendefinisikan rasionya. Namun, jika Anda membuat unit yang lebih kecil, prinsipnya mungkin melibatkan pembagian.</p>"
            "<h3>Penerimaan dengan Unit Berbeda</h3>"
            "<p>Odoo sangat fleksibel. Jika database Anda melacak stok dalam <strong>Pounds</strong>, tetapi Anda membeli dalam Kilograms, Odoo akan secara otomatis mengonversi dan menyimpan stok dalam unit basis Anda, yaitu <strong>Pounds</strong>, saat penerimaan divalidasi.</p>"
        )
    },
    6: {
        "title": "Inventory Basics 6: Penyesuaian Stok",
        "subtitle": "Inventory Adjustments & Frequency",
        "text": (
            "<h3>Rute Penyesuaian Manual</h3>"
            "<p>Saat Anda melakukan penyesuaian stok manual (menambah stok tiba-tiba), rute pergerakan barang adalah dari lokasi virtual (Virtual Locations/Inventory Adjustment) menuju lokasi stok fisik (WH/Stock). Jadi: <strong>Virtual Locations/Inventory Adjustment → WH/Stock</strong>.</p>"
            "<h3>Frekuensi Inventaris</h3>"
            "<p>Anda dapat mengatur seberapa sering opname stok harus dilakukan (Inventory Frequency) melalui menu <strong>Operations > Inventory Adjustments</strong>.</p>"
            "<h3>Opname Tahunan</h3>"
            "<p>Untuk kepatuhan akuntansi, banyak perusahaan melakukan opname tahunan. Anda dapat mengatur 'Annual Inventory Day and Month' di <strong>Inventory > Configuration > Settings > Operations Section</strong>.</p>"
        )
    },
    7: {
        "title": "Inventory Basics 7: Landed Costs",
        "subtitle": "Biaya Tambahan & Penilaian",
        "text": (
            "<h3>Apa itu Landed Cost?</h3>"
            "<p>Landed Cost adalah <strong>pengeluaran tambahan yang harus dibayar di luar harga produk itu sendiri</strong> saat melakukan pembelian, seperti biaya pengiriman, asuransi, bea cukai, dan handling.</p>"
            "<h3>Metode Penilaian Rata-Rata</h3>"
            "<p>Jika Anda ingin nilai persediaan produk mencerminkan biaya rata-rata dari semua unit yang ada di tangan, Anda harus menggunakan metode costing <strong>Average Cost (AVCO)</strong>.</p>"
            "<h3>Metode Pemisahan (Split Method)</h3>"
            "<p>Saat membebankan landed cost ke beberapa produk, Anda bisa membaginya berdasarkan Kuantitas (Quantity), Volume, Berat, atau Biaya Saat Ini (Current Cost). 'By Color' (Berdasarkan Warna) bukan opsi standar.</p>"
        )
    },
    8: {
        "title": "Inventory Basics 8: Hak Akses",
        "subtitle": "User Roles & Security",
        "text": (
            "<h3>Pemisahan Hak Akses</h3>"
            "<p>Tujuan utama membedakan hak akses antar peran pengguna (User vs Administrator) adalah <strong>untuk memastikan keamanan dan mencegah akses ke konfigurasi yang tidak perlu</strong>.</p>"
            "<h3>Akses Lintas Aplikasi</h3>"
            "<p>Seorang Manajer Gudang mungkin memerlukan akses ke aplikasi Pembelian (Purchase) untuk tujuan operasional, seperti <strong>melihat PO dan memproses penerimaan barang (receipts)</strong>.</p>"
            "<h3>Akses Barcode</h3>"
            "<p>Jika aplikasi Inventaris diinstal, memberikan akses inventaris kepada pengguna seringkali secara otomatis memberikan akses ke aplikasi pendukung operasional seperti <strong>Barcode</strong>.</p>"
        )
    },
    9: {
        "title": "Replenishment 1: Reordering Rules",
        "subtitle": "Laporan Replenishment & Order",
        "text": (
            "<h3>Proses 'Order Once'</h3>"
            "<p>Pada laporan Replenishment, saat Anda mengklik 'Order Once', Odoo akan <strong>membuat Permintaan Penawaran (RFQ)</strong> sejumlah kuantitas yang tertera pada kolom 'To Order'.</p>"
            "<h3>Kapan Item Muncul di Laporan?</h3>"
            "<p>Laporan replenishment manual akan menampilkan item yang memiliki aturan pemesanan ulang (reordering rule) <strong>jika jumlah yang diperkirakan (forecasted quantity) berada di bawah minimum</strong> yang ditentukan dalam aturan tersebut.</p>"
            "<h3>Order to Max</h3>"
            "<p>Jika stok saat ini berada di antara minimum dan maksimum, aturan otomatis tidak akan memicu pembelian. Namun, jika Anda secara manual memilih 'Order to Max', Odoo akan membuat PO untuk <strong>selisih antara jumlah maksimum dan jumlah di tangan (on-hand)</strong> saat ini.</p>"
        )
    },
    10: {
        "title": "Replenishment 2: Kalkulasi Reordering",
        "subtitle": "Min/Max Rules & Forecast",
        "text": (
            "<h3>Contoh Kasus 1</h3>"
            "<p>Aturan: Min 20, Max 50.<br/>Stok Forecast: 15 (di bawah Min).<br/>Sistem akan memesan hingga Max.<br/>Jumlah Order = Max - Forecast = 50 - 15 = <strong>35 unit</strong>.</p>"
            "<h3>Memicu Aturan Otomatis</h3>"
            "<p>Agar aturan pemesanan ulang otomatis bekerja dengan benar, kondisi kuncinya adalah: <strong>ketika jumlah perkiraan (forecasted quantity) jatuh di bawah minimum yang ditentukan</strong>.</p>"
            "<h3>Contoh Kasus 2 (Negatif Forecast)</h3>"
            "<p>Aturan: Min 10, Max 15.<br/>Stok Forecast: -5.<br/>Sistem akan memesan hingga Max.<br/>Jumlah Order = Max - Forecast = 15 - (-5) = <strong>20 unit</strong>.</p>"
        )
    },
    11: {
        "title": "Replenishment 3: Lead Times",
        "subtitle": "Waktu Tunggu & Penjadwalan",
        "text": (
            "<h3>Expected Arrival Date</h3>"
            "<p>Jika Vendor Lead Time adalah 7 hari dan Deadline Pesanan adalah 8 Juni, maka barang diharapkan tiba pada: 8 Juni + 7 hari = <strong>15 Juni</strong>.</p>"
            "<h3>Pengaturan 'Days to Purchase'</h3>"
            "<p>Jika 'Days to Purchase' diatur ke 3 hari, dan RFQ dibuat hari ini dampak utamanya adalah pada penjadwalan. <strong>Deadline Pesanan (Order Deadline)</strong> pada RFQ akan menunjukkan tanggal 3 hari dari sekarang.</p>"
            "<h3>Peringatan 'Requested Date too Soon'</h3>"
            "<p>Jika Anda melihat peringatan ini di Sales Order, itu berarti tanggal yang dijanjikan ke pelanggan tidak realistis berdasarkan perhitungan: <strong>Customer Lead Time + Vendor Lead Time + Security Lead Times</strong>.</p>"
        )
    },
    12: {
        "title": "Replenishment 4: Resupply Routes",
        "subtitle": "Resupply dari Gudang Lain",
        "text": (
            "<h3>Konfigurasi Resupply</h3>"
            "<p>Rute resupply 'Distribution Center' dapat dikelola di <strong>Halaman konfigurasi 'Pengaturan' > 'Gudang'</strong>.</p>"
            "<h3>Syarat Utama</h3>"
            "<p>Anda wajib mengaktifkan pengaturan <strong>'Multi-Step Routes'</strong> untuk menggunakan fitur 'Resupply From'.</p>"
            "<h3>Dokumen yang Terbentuk</h3>"
            "<p>Proses resupply dari gudang lain akan menghasilkan: <strong>'Order Pengiriman' (Delivery Order)</strong> dari gudang pengirim, dan <strong>'Penerimaan' (Receipt)</strong> untuk toko/gudang penerima.</p>"
        )
    },
    13: {
        "title": "Traceability 1: Lots & Serials",
        "subtitle": "Pelacakan Produk",
        "text": (
            "<h3>Validasi Tanpa Nomor Lot</h3>"
            "<p>Jika produk dilacak dengan Lot/Serial Number, mencoba memvalidasi penerimaan tanpa memasukkan nomor akan menyebabkan <strong>Odoo menampilkan pesan error</strong>.</p>"
            "<h3>Laporan Traceability</h3>"
            "<p>Fitur ini digunakan untuk <strong>melihat pergerakan lot dan serial</strong> secara detail.</p>"
            "<h3>Tipe Produk</h3>"
            "<p>Hanya produk dengan tipe <strong>Barang (Storable Product)</strong> yang relevan untuk pelacakan lot.</p>"
        )
    },
    14: {
        "title": "Traceability 2: FEFO Strategy",
        "subtitle": "First Expired First Out",
        "text": (
            "<h3>Syarat FEFO</h3>"
            "<p>Anda harus mengaktifkan: <strong>Nomor Lot & Serial, Tanggal Kedaluwarsa, Lokasi Penyimpanan, dan Rute Multi-Langkah</strong>.</p>"
            "<h3>Mengatur Tanggal Kedaluwarsa</h3>"
            "<p>Tanggal kedaluwarsa dapat diatur <strong>langsung pada saat penerimaan produk</strong> di jendela Operasi Rinci (hanya jika fitur aktif).</p>"
            "<h3>Input Pasca-Penerimaan</h3>"
            "<p>Anda juga dapat mengeditnya melalui <strong>Formulir Lot Pembelian</strong>.</p>"
        )
    },
    15: {
        "title": "Traceability 3: Konfigurasi Expiry",
        "subtitle": "Pengaturan Tanggal & Strategi",
        "text": (
            "<h3>Prasyarat</h3>"
            "<p>Fitur <strong>Lots & Serial Numbers</strong> harus aktif sebelum Anda bisa menggunakan Tanggal Kedaluwarsa.</p>"
            "<h3>Removal Date</h3>"
            "<p>Jika Anda mengubah Tanggal Kedaluwarsa, Tanggal Penghapusan (Removal Date) akan <strong>dihitung ulang berdasarkan konfigurasi produk</strong>.</p>"
            "<h3>Setup FEFO</h3>"
            "<p>Strategi FEFO diatur di: <strong>Kategori Produk & Lokasi Penyimpanan</strong>.</p>"
        )
    },
    16: {
        "title": "Warehouse Transfers 1: Push & Pull",
        "subtitle": "Aturan Alur Barang",
        "text": (
            "<h3>Mengaktifkan Push & Pull</h3>"
            "<p>Anda harus mengaktifkan <strong>Multi-Step Routes</strong>.</p>"
            "<h3>Jenis Aksi Rute</h3>"
            "<p>Selain 'Take from stock', rute juga bisa dikonfigurasi untuk <strong>Trigger another rule</strong> (Memicu aturan lain).</p>"
            "<h3>Pemenuhan Sales Order</h3>"
            "<p>Sales Order biasanya memicu <strong>Aturan Pull (Tarik)</strong> karena produk 'ditarik' dari lokasi internal untuk memenuhi permintaan.</p>"
        )
    },
    17: {
        "title": "Warehouse Transfers 2: Putaway Rules",
        "subtitle": "Strategi Penempatan Barang",
        "text": (
            "<h3>Tujuan Putaway</h3>"
            "<p>Aturan Putaway berfungsi untuk <strong>secara otomatis menetapkan lokasi penyimpanan spesifik</strong> untuk produk masuk.</p>"
            "<h3>Lingkup Aturan</h3>"
            "<p>Berlaku untuk <strong>Kategori Produk dan Produk</strong> tertentu.</p>"
            "<h3>Struktur Lokasi</h3>"
            "<p>Lokasi induk untuk 'WH/Stock/Music' adalah <strong>WH/Stock</strong>.</p>"
        )
    },
    18: {
        "title": "Warehouse Transfers 3: Putaway Lanjutan",
        "subtitle": "Kategori & Kapasitas",
        "text": (
            "<h3>Having Category</h3>"
            "<p>'Having Category' menggunakan <strong>Kategori Produk</strong> yang dipilih untuk menentukan lokasi putaway.</p>"
            "<h3>Kapasitas Lokasi</h3>"
            "<p>Jika kapasitas dibatasi (misal 100), Odoo akan membagi stok. Contoh: Jika Lokasi A sisa kapasita 25, dan 50 masuk, maka <strong>25 unit disimpan di Loaksi A, dan 25 di Lokasi B</strong>.</p>"
            "<h3>Verifikasi</h3>"
            "<p>Lokasi tujuan yang ditentukan aturan putaway dapat dilihat di <strong>Destination Location field</strong> dan <strong>Detailed Operations smart button</strong>.</p>"
        )
    },
    19: {
        "title": "Warehouse Transfers 4: Cross-Docking",
        "subtitle": "Pindah Silang Tanpa Simpan",
        "text": (
            "<h3>Mengaktifkan Cross-Dock</h3>"
            "<p>Membutuhkan <strong>Multi-Step Routes</strong>.</p>"
            "<h3>Rute Produk</h3>"
            "<p>Aktifkan rute <strong>Buy</strong> dan <strong>Cross-Dock</strong> pada tab Inventaris produk.</p>"
            "<h3>Transfer</h3>"
            "<p>Menghasilkan <strong>dua transfer</strong>: Penerimaan ke Input -> Pengiriman ke Output/Customer.</p>"
        )
    },
    20: {
        "title": "Warehouse Transfers 5: Consignment",
        "subtitle": "Stok Konsinyasi",
        "text": (
            "<h3>Penerimaan Konsinyasi</h3>"
            "<p>Gunakan dokumen <strong>Penerimaan (Receipt)</strong> standar.</p>"
            "<h3>Menetapkan Pemilik</h3>"
            "<p>Tetapkan vendor sebagai <strong>Pemilik (Owner)</strong> di area 'Assign Owner' pada resi.</p>"
            "<h3>Valuasi</h3>"
            "<p>Nilai stok konsinyasi di laporan valuasi adalah <strong>'0.00'</strong>.</p>"
        )
    },
    21: {
        "title": "Warehouse Transfers 6: Batch & Wave",
        "subtitle": "Optimasi Pengiriman",
        "text": (
            "<h3>Maps</h3>"
            "<p>Lihat peta tujuan pengiriman pada transfer Batch dengan mengklik <strong>ikon 'gear'</strong>.</p>"
            "<h3>Konfigurasi Dock</h3>"
            "<p>Centang opsi <strong>'Is a Dock Location'</strong> pada konfigurasi Lokasi.</p>"
            "<h3>Spesifikasi Lokasi</h3>"
            "<p>Anda mungkin perlu menentukan lokasi spesifik (misal Dock B) karena lokasi 'Output' default seringkali kurang spesifik.</p>"
        )
    }
}

base_dir = "/Users/mac/pembelajar-belajar-odoo"

# Simple string template to avoid triple quote syntax errors
template_part1 = "<!DOCTYPE html>\\n<html lang=\"id\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>{{TITLE}} - Odoo Learning</title>\\n    <link rel=\"stylesheet\" href=\"../../../assets/css/style.css\">\\n    <link rel=\"stylesheet\" href=\"../../../assets/css/dark-mode.css\">\\n</head>\\n<body>\\n    <div class=\"sidebar\">\\n        <div class=\"logo-container\">\\n            <a href=\"../../../index.html\" style=\"text-decoration: none;\">\\n                <h2 class=\"logo\">Odoo<span style=\"color: var(--accent);\">Learning</span></h2>\\n            </a>\\n        </div>\\n        <nav class=\"nav-links\">\\n            <a href=\"../../../index.html\" class=\"nav-item\">\\n                <span class=\"icon\">🏠</span>\\n                Dashboard\\n            </a>\\n            <a href=\"../../../accounting.html\" class=\"nav-item\">\\n                <span class=\"icon\">💰</span>\\n                Accounting\\n            </a>\\n             <a href=\"../../../inventory.html\" class=\"nav-item active\">\\n                <span class=\"icon\">📦</span>\\n                Inventory\\n            </a>\\n        </nav>\\n    </div>\\n\\n    <div class=\"main-content\">\\n        <header class=\"top-bar\">\\n            <div class=\"breadcrumbs\">\\n                <a href=\"../../../index.html\">Home</a> &gt; \\n                <a href=\"../../../inventory.html\">Inventory</a> &gt; \\n                <span>{{TITLE}}</span>\\n            </div>\\n        </header>\\n\\n        <div class=\"module-container\">\\n            <div class=\"video-section\">\\n               <div class=\"video-container\">\\n                    <iframe src=\"https://www.youtube.com/embed/{{VIDEO_ID}}\" title=\"Odoo Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\\n                </div>\\n            </div>\\n\\n            <div class=\"content-section\">\\n                <h1>{{TITLE}}</h1>\\n                <p class=\"subtitle\">{{SUBTITLE}}</p>\\n                \\n                <div class=\"learning-material\">\\n                    {{CONTENT_TEXT}}\\n                </div>\\n            </div>\\n\\n            <div class=\"quiz-section\">\\n                <h2>Kuis Pengetahuan</h2>\\n                <div id=\"quiz-container\" class=\"quiz-container\" data-quiz-id=\"{{QUIZ_ID}}\">\\n                    <!-- Quiz will be rendered here -->\\n                </div>\\n            </div>\\n\\n            <div class=\"navigation-buttons\">\\n                <a href=\"{{PREV_LINK}}\" class=\"btn btn-secondary\">← Materi Sebelumnya</a>\\n                <a href=\"{{NEXT_LINK}}\" class=\"btn btn-primary btn-next\">Lanjut ke Materi Berikutnya →</a>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <script src=\"../../../assets/js/lms-core.js\"></script>\\n    <script src=\"../../../assets/js/quiz-bank.js\"></script>\\n    <script src=\"../../../assets/js/quiz-engine.js\"></script>\\n    <script>\\n        document.addEventListener('DOMContentLoaded', function() {\\n            if (typeof renderQuiz === 'function') {\\n                const quizId = document.getElementById('quiz-container').getAttribute('data-quiz-id');\\n                if (window.QUIZ_BANK && window.QUIZ_BANK[quizId]) {\\n                    renderQuiz(quizId, '#quiz-container');\\n                }\\n            }\\n        });\\n    </script>\\n</body>\\n</html>"

sections = [
    ("inventory-basics", 1, 8),
    ("replenishment", 9, 12),
    ("traceability", 13, 15),
    ("transfers", 16, 21), 
    ("reserve", 22, 27),
    ("packaging", 28, 31),
    ("operations", 32, 35)
]

def get_path_info(m_num):
    for folder, start, end in sections:
        if start <= m_num <= end:
            return folder, start, end
    return None, 0, 0

for m_num, data in content_map.items():
    folder_name, start_sec, end_sec = get_path_info(m_num)
    if not folder_name:
        continue

    file_path = os.path.join(base_dir, f"inventory/{folder_name}/inventory-materi-{m_num}/index.html")
    
    prev_link = "#"
    if m_num > 1:
        prev_folder, _, _ = get_path_info(m_num - 1)
        prev_link = f"../../../inventory/{prev_folder}/inventory-materi-{m_num - 1}/index.html"
    else:
        prev_link = "../../../inventory.html"
        
    next_link = "#"
    if m_num < 35:
        next_folder, _, _ = get_path_info(m_num + 1)
        next_link = f"../../../inventory/{next_folder}/inventory-materi-{m_num + 1}/index.html"
    else:
        next_link = "../../../inventory.html"

    vid = data.get("video_id", "7qX2o_-N9j0") 
    
    # Simple replace
    page_html = template_part1.replace("{{TITLE}}", data["title"])
    page_html = page_html.replace("{{SUBTITLE}}", data["subtitle"])
    page_html = page_html.replace("{{VIDEO_ID}}", vid)
    page_html = page_html.replace("{{CONTENT_TEXT}}", data["text"])
    page_html = page_html.replace("{{QUIZ_ID}}", f"inventory_materi{m_num}")
    page_html = page_html.replace("{{PREV_LINK}}", prev_link)
    page_html = page_html.replace("{{NEXT_LINK}}", next_link)
    
    # We must decode the escaped newlines for real writing
    final_content = page_html.replace("\\n", "\n")
    
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w") as f:
        f.write(final_content)
        
    print(f"Updated content for Materi {m_num}")
