import os

# Content definitions based on quiz topics from user input
content_map = {
    21: {
        "title": "Reserve Products 1: Reservation Methods",
        "subtitle": "Metode Reservasi Stok",
        "video_id": "7qX2o_-N9j0",
        "text": (
            "<h3>Konfigurasi Reservasi</h3>"
            "<p>Pengaturan metode reservasi untuk delivery order dilakukan di <strong>Inventory > Configuration > Operation Types</strong> (Tipe Operasi). Anda dapat memilih metode yang paling sesuai dengan alur kerja gudang Anda.</p>"
            "<h3>Reservasi Manual</h3>"
            "<p>Jika metode reservasi diatur ke 'Manually' (Manual), stok tidak akan tereservasi secara otomatis saat Sales Order dikonfirmasi. Anda harus secara eksplisit mengklik tombol <strong>'Check Availability'</strong> (Periksa Ketersediaan) pada dokumen Delivery Order.</p>"
            "<h3>Before Scheduled Date</h3>"
            "<p>Untuk metode 'Before Scheduled Date', pemicu otomatis untuk reservasi adalah <strong>jumlah hari sebelum tanggal pengiriman terjadwal</strong>. Ini memungkinkan Anda untuk memprioritaskan reservasi stok mendekati waktu pengiriman.</p>"
        )
    },
    22: {
        "title": "Reserve Products 2: Removal Strategies",
        "subtitle": "Strategi Pengambilan Stok",
        "text": (
            "<h3>Apa itu Removal Strategy?</h3>"
            "<p>Removal Strategy (Strategi Penghapusan/Pengambilan) menentukan <strong>item mana yang harus diambil atau dikeluarkan dari stok, dan kapan</strong>. Ini penting untuk mengoptimalkan perputaran stok.</p>"
            "<h3>Barang Mudah Rusak (Perishable)</h3>"
            "<p>Untuk barang yang memiliki masa kedaluwarsa atau mudah rusak, strategi terbaik adalah <strong>First Expired First Out (FEFO)</strong>. Ini memastikan barang dengan tanggal kedaluwarsa terdekat dijual terlebih dahulu.</p>"
            "<h3>Efisiensi Paket</h3>"
            "<p>Jika tujuan Anda adalah efisiensi pengambilan dengan membuka jumlah paket paling sedikit, gunakan strategi <strong>Least Packages</strong>. Sistem akan menyarankan pengambilan paket utuh daripada mengambil unit eceran dari berbagai paket.</p>"
        )
    },
    23: {
        "title": "Reserve Products 3: FIFO & LIFO",
        "subtitle": "First In First Out vs Last In First Out",
        "text": (
            "<h3>First In First Out (FIFO)</h3>"
            "<p>Untuk memastikan Anda mengirimkan produk yang pertama kali masuk ke stok (stok lama), Anda harus memilih <strong>FIFO</strong> sebagai Strategi Removal Anda. Ini standar untuk banyak barang konsumen.</p>"
            "<h3>Konfigurasi FIFO</h3>"
            "<p>Strategi FIFO dapat ditetapkan ke lokasi tertentu di aplikasi Inventaris dengan menavigasi ke <strong>Configuration > Location > Removal Strategy</strong>.</p>"
            "<h3>Last In First Out (LIFO)</h3>"
            "<p>Untuk menggunakan strategi LIFO (terutama yang dipaksakan pada kategori), Anda memerlukan pengaturan lanjutan: <strong>Storage Locations dan Multi-Step Routes</strong> harus diaktifkan.</p>"
        )
    },
    24: {
        "title": "Reserve Products 4: FEFO Details",
        "subtitle": "First Expired First Out Mendalam",
        "text": (
            "<h3>Persyaratan FEFO</h3>"
            "<p>Untuk menjalankan FEFO, sistem membutuhkan data yang akurat. Anda harus mengaktifkan: <strong>Expiration Date, Lots and Serial Numbers</strong>.</p>"
            "<h3>Dasar Tanggal</h3>"
            "<p>Logika FEFO didasarkan pada field <strong>Removal Date</strong> (Tanggal Penghapusan) yang dihitung dari tanggal kedaluwarsa produk.</p>"
            "<h3>Contoh Kasus</h3>"
            "<p>Jika Lot 1 (Exp: Nov 2) dan Lot 2 (Exp: Apr 13) tersedia, untuk pesanan di bulan Januari, sistem akan memprioritaskan Lot 2 karena kedaluwarsa lebih dulu (April vs November). Jadi untuk pesanan 20 unit: <strong>Ambil 13 dari Lot 2, lalu 7 dari Lot 1</strong>.</p>"
        )
    },
    25: {
        "title": "Reserve Products 5: Closest Location",
        "subtitle": "Lokasi Terdekat",
        "text": (
            "<h3>Konfigurasi</h3>"
            "<p>Strategi 'Closest Location' membutuhkan pengaktifkan <strong>Storage Locations dan Multi-Step Routes</strong>.</p>"
            "<h3>Implementasi</h3>"
            "<p>Untuk menerapkannya, Anda mengaturnya pada level Lokasi Induk. Contoh: Buka <strong>Inventory > Configuration > Locations > 'Freezer A'</strong>, dan atur Removal Strategy ke 'Closest Location'. Ini akan berlaku untuk rak-rak di dalamnya.</p>"
            "<h3>Urutan Pengambilan</h3>"
            "<p>Strategi ini mengambil barang berdasarkan urutan abjad nama lokasi. Jadi, jika Anda ingin barang diambil dari 'Shelf Z' terlebih dahulu dibandingkan 'Shelf J', Anda harus mengganti nama 'Shelf Z' menjadi sesuatu yang secara abjad lebih awal, seperti <strong>'Shelf A'</strong>.</p>"
        )
    },
    26: {
        "title": "Reserve Products 6: Least Packages",
        "subtitle": "Optimasi Paket",
        "text": (
            "<h3>Persyaratan</h3>"
            "<p>Anda perlu mengaktifkan: <strong>Packages, Storage Locations, dan Multi-Step Routes</strong>.</p>"
            "<h3>Skenario Pengambilan</h3>"
            "<p>Contoh: Pesanan 33 unit. Tersedia paket isi 15, 25, 50. Sistem 'Least Packages' akan mencoba meminimalkan sisa. Ia akan menyarankan mengambil <strong>25 unit dari paket-25 (pas), lalu sisanya 8 unit diambil dari paket-15</strong> (dipecah).</p>"
            "<h3>Paket Tujuan Otomatis</h3>"
            "<p>Dalam alur kerja tertentu, jika 'Source Package' berisi jumlah yang pas untuk pesanan, sistem dapat menggunakannya kembali sebagai 'Destination Package', mengurangi kebutuhan pengemasan ulang.</p>"
        )
    },
    27: {
        "title": "Packages 1: Units vs Packagings",
        "subtitle": "Satuan vs Kemasan",
        "text": (
            "<h3>Definisi</h3>"
            "<p>Penting untuk membedakan: <strong>Units</strong> merujuk pada item produk individual, sedangkan <strong>Packagings</strong> adalah beberapa item yang dikemas bersama secara spesifik (misal: Karton isi 6) dan dihitung sebagai satu item logistik.</p>"
            "<h3>Harga Satuan</h3>"
            "<p>Di tab pembelian Odoo, 'Unit Price' selalu merujuk pada <strong>harga satu item produk tunggal</strong>, tidak peduli dalam kemasan apa ia dibeli.</p>"
            "<h3>Forecasted Units</h3>"
            "<p>Angka 'Forecasted' dalam laporan mewakili <strong>proyeksi jumlah inventaris</strong>, yang mencakup stok di tangan ditambah barang yang sudah dipesan (PO) dikurangi yang sudah terjual (SO).</p>"
        )
    },
    28: {
        "title": "Packages 2: Packages vs Packagings",
        "subtitle": "Wadah Logistik vs Kemasan Produk",
        "text": (
            "<h3>Perbedaan Utama</h3>"
            "<p><strong>Packaging</strong> adalah pengelompokan produk tunggal yang telah ditentukan (misal: Pack of 6 Coke). <strong>Packages</strong> adalah wadah logistik fisik (seperti Kotak, Palet, Tong) yang bisa berisi berbagai produk dalam jumlah berapapun.</p>"
            "<h3>Fleksibilitas Paket</h3>"
            "<p>Anda <strong>bisa</strong> meletakkan produk dari penerimaan yang sama ke dalam paket yang berbeda. Gunakan tombol 'list' pada baris produk saat penerimaan untuk memecah dan menentukan paket.</p>"
            "<h3>Packing Pasca-Penerimaan</h3>"
            "<p>Untuk memasukkan barang ke dalam paket (box/palet) setelah barang diterima dan disimpan, Anda dapat membuat <strong>Transfer Internal</strong> dan menggunakan tombol 'Put in Pack'.</p>"
        )
    },
    29: {
        "title": "Operations 1: Picking Policy",
        "subtitle": "Kebijakan Pengiriman",
        "text": (
            "<h3>Opsi Kebijakan</h3>"
            "<p>Dua kebijakan utama di Odoo adalah: 'Ship products as soon as available, with back orders' (Kirim seadanya, sisanya menyusul) dan <strong>'Ship all products at once'</strong> (Kirim semua sekaligus).</p>"
            "<h3>Status Validasi</h3>"
            "<p>Jika tombol 'Validate' berwarna <strong>abu-abu</strong>, itu berarti pesanan sedang menunggu produk tersedia (belum siap). Jika berwarna <strong>ungu</strong>, artinya semua atau sebagian pesanan sudah siap diproses.</p>"
        )
    },
    30: {
        "title": "Operations 2: Returns",
        "subtitle": "Proses Retur Barang",
        "text": (
            "<h3>Tipe Operasi Retur</h3>"
            "<p>Secara default, Odoo menggunakan tipe operasi <strong>'Receipts' (Penerimaan)</strong> untuk memproses retur dari pelanggan, karena secara logistik barang 'masuk' kembali ke gudang.</p>"
            "<h3>Konfigurasi Kustom</h3>"
            "<p>Jika Anda membuat tipe operasi khusus untuk Retur, pastikan bidang 'Type of Operation' diatur ke <strong>'Receipt'</strong>. Kemudian, hubungkan di konfigurasi 'Delivery Orders' pada bidang <strong>'Returns Type'</strong>.</p>"
        )
    },
    31: {
        "title": "Operations 3: Batch Picking",
        "subtitle": "Pengambilan Massal",
        "text": (
            "<h3>Fleksibilitas Langkah</h3>"
            "<p>Batch picking di Odoo fleksibel. Anda dapat menggunakannya dengan <strong>satu, dua, atau tiga langkah</strong> operasi. Pada alur 2/3 langkah, langkah kedua biasanya digunakan untuk penyortiran/konsolidasi.</p>"
            "<h3>Otomatisasi</h3>"
            "<p>Fitur 'Automatic Batches' sangat kuat. Sistem akan <strong>secara otomatis membuat batch</strong> berdasarkan kriteria pengelompokan yang Anda pilih (seperti Pengangkut yang sama, Tujuan yang sama, dll.).</p>"
            "<h3>Aplikasi Barcode</h3>"
            "<p>Untuk petugas gudang, batch yang ditugaskan dapat ditemukan dengan mudah: Buka aplikasi Barcode dan klik tombol <strong>'Batch Transfers'</strong>.</p>"
        )
    },
    32: {
        "title": "Operations 4: Cluster Picking",
        "subtitle": "Pengambilan Klaster",
        "text": (
            "<h3>Pengaturan</h3>"
            "<p>Cluster picking (mengambil untuk banyak pesanan sekaligus ke dalam wadah terpisah) dapat digunakan dengan <strong>opsi 'Outgoing Shipment' (1/2/3 langkah) apa pun</strong>.</p>"
            "<h3>Urutan Picking</h3>"
            "<p>Untuk efisiensi pergerakan, produk dalam dokumen cluster picking secara default ditampilkan berdasarkan <strong>urutan abjad lokasi penyimpanan</strong>. Ini meminimalkan waktu berjalan petugas.</p>"
            "<h3>Reusable Box</h3>"
            "<p>Konsep 'Reusable Box' digunakan untuk wadah internal trolley. Ini <strong>TIDAK</strong> digunakan jika kotak tersebut adalah kotak pengiriman yang akan dikirim ke pelanggan.</p>"
        )
    },
    33: {
        "title": "Operations 5: Shipping Labels",
        "subtitle": "Label Pengiriman Karir",
        "text": (
            "<h3>Integrasi Karir</h3>"
            "<p>Untuk mencetak label resmi (FedEx, UPS, dll), pilih opsi <strong>'Get Rate and Create Shipment'</strong> pada Level Integrasi metode pengiriman.</p>"
            "<h3>Lingkungan Produksi</h3>"
            "<p>Setelah pengujian selesai, pastikan untuk beralih ke mode live dengan <strong>mencentang kotak 'Production'</strong> pada konfigurasi metode pengiriman.</p>"
            "<h3>Data yang Diperlukan</h3>"
            "<p>Untuk mencetak label, sistem butuh info berat produk, alamat pengirim, dan penerima. <strong>Harga produk</strong> biasanya tidak wajib untuk pembuatan label pengiriman fisik (kecuali untuk asuransi/bea cukai tertentu).</p>"
        )
    },
    34: {
        "title": "Operations 6: Wave Picking",
        "subtitle": "Gelombang Pengambilan",
        "text": (
            "<h3>Logika Wave</h3>"
            "<p>Wave Transfer adalah metode lanjutan di mana produk diambil secara massal untuk gelombang operasi tertentu, dan mengharuskan produk <strong>disortir menjadi pesanan individu *setelah* diambil</strong>.</p>"
            "<h3>Syarat Pengelompokan</h3>"
            "<p>Untuk dapat digabungkan dalam satu Wave, semua transfer harus memiliki <strong>Tipe Operasi</strong> yang sama.</p>"
            "<h3>Menemukan Wave</h3>"
            "<p>Picker dapat melihat tugas mereka di: Aplikasi Inventaris > Operasi > <strong>Wave Transfers</strong> (Filter: 'My Transfers').</p>"
        )
    }
}

base_dir = "/Users/mac/pembelajar-belajar-odoo"

template_part1 = "<!DOCTYPE html>\\n<html lang=\"id\">\\n<head>\\n    <meta charset=\"UTF-8\">\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n    <title>{{TITLE}} - Odoo Learning</title>\\n    <link rel=\"stylesheet\" href=\"../../../assets/css/style.css\">\\n    <link rel=\"stylesheet\" href=\"../../../assets/css/dark-mode.css\">\\n</head>\\n<body>\\n    <div class=\"sidebar\">\\n        <div class=\"logo-container\">\\n            <a href=\"../../../index.html\" style=\"text-decoration: none;\">\\n                <h2 class=\"logo\">Odoo<span style=\"color: var(--accent);\">Learning</span></h2>\\n            </a>\\n        </div>\\n        <nav class=\"nav-links\">\\n            <a href=\"../../../index.html\" class=\"nav-item\">\\n                <span class=\"icon\">🏠</span>\\n                Dashboard\\n            </a>\\n            <a href=\"../../../accounting.html\" class=\"nav-item\">\\n                <span class=\"icon\">💰</span>\\n                Accounting\\n            </a>\\n             <a href=\"../../../inventory.html\" class=\"nav-item active\">\\n                <span class=\"icon\">📦</span>\\n                Inventory\\n            </a>\\n        </nav>\\n    </div>\\n\\n    <div class=\"main-content\">\\n        <header class=\"top-bar\">\\n            <div class=\"breadcrumbs\">\\n                <a href=\"../../../index.html\">Home</a> &gt; \\n                <a href=\"../../../inventory.html\">Inventory</a> &gt; \\n                <span>{{TITLE}}</span>\\n            </div>\\n        </header>\\n\\n        <div class=\"module-container\">\\n            <div class=\"video-section\">\\n               <div class=\"video-container\">\\n                    <iframe src=\"https://www.youtube.com/embed/{{VIDEO_ID}}\" title=\"Odoo Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\\n                </div>\\n            </div>\\n\\n            <div class=\"content-section\">\\n                <h1>{{TITLE}}</h1>\\n                <p class=\"subtitle\">{{SUBTITLE}}</p>\\n                \\n                <div class=\"learning-material\">\\n                    {{CONTENT_TEXT}}\\n                </div>\\n            </div>\\n\\n            <div class=\"quiz-section\">\\n                <h2>Kuis Pengetahuan</h2>\\n                <div id=\"quiz-container\" class=\"quiz-container\" data-quiz-id=\"{{QUIZ_ID}}\">\\n                    <!-- Quiz will be rendered here -->\\n                </div>\\n            </div>\\n\\n            <div class=\"navigation-buttons\">\\n                <a href=\"{{PREV_LINK}}\" class=\"btn btn-secondary\">← Materi Sebelumnya</a>\\n                <a href=\"{{NEXT_LINK}}\" class=\"btn btn-primary btn-next\">Lanjut ke Materi Berikutnya →</a>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <script src=\"../../../assets/js/lms-core.js\"></script>\\n    <script src=\"../../../assets/js/quiz-bank.js\"></script>\\n    <script src=\"../../../assets/js/quiz-engine.js\"></script>\\n    <script>\\n        document.addEventListener('DOMContentLoaded', function() {\\n            if (typeof renderQuiz === 'function') {\\n                const quizId = document.getElementById('quiz-container').getAttribute('data-quiz-id');\\n                if (window.QUIZ_BANK && window.QUIZ_BANK[quizId]) {\\n                    renderQuiz(quizId, '#quiz-container');\\n                }\\n            }\\n        });\\n    </script>\\n</body>\\n</html>"

sections = [
    ("inventory-basics", 1, 8),
    ("replenishment", 9, 12),
    ("traceability", 13, 15),
    ("transfers", 16, 20),
    ("reserve", 21, 26),
    ("packaging", 27, 28),
    ("operations", 29, 34) # Corrected ranges based on new plan
]

def get_path_info(m_num):
    for folder, start, end in sections:
        if start <= m_num <= end:
            return folder, start, end
    return None, 0, 0

for m_num, data in content_map.items():
    folder_name, start_sec, end_sec = get_path_info(m_num)
    if not folder_name:
        print(f"Skipping module {m_num}, mapping not found")
        continue

    file_path = os.path.join(base_dir, f"inventory/{folder_name}/inventory-materi-{m_num}/index.html")
    
    prev_link = "#"
    if m_num > 1:
        prev_folder, _, _ = get_path_info(m_num - 1)
        prev_link = f"../../../inventory/{prev_folder}/inventory-materi-{m_num - 1}/index.html"
    else:
        prev_link = "../../../inventory.html"
        
    next_link = "#"
    if m_num < 34:
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
