import os

# Content definitions based on quiz topics
# We infer the lesson content from the questions provided.

content_map = {
    1: {
        "title": "Inventory Basics 1: Penerimaan Barang",
        "subtitle": "Dokumen Sumber & Lokasi Tujuan",
        "video_id": "7qX2o_-N9j0", # Placeholder or real if known
        "text": """
        <h3>Dokumen Sumber Penerimaan</h3>
        <p>Dalam Odoo, dokumen yang menjadi sumber utama untuk penerimaan produk ke dalam inventaris Anda adalah <strong>Order Pembelian (Purchase Order)</strong>. Saat PO dikonfirmasi, Odoo secara otomatis membuat dokumen Penerimaan (Receipt) di aplikasi Inventaris.</p>
        
        <h3>Pentingnya Lokasi Tujuan</h3>
        <p>Saat memproses penerimaan, sangat penting untuk memastikan 'Lokasi Tujuan' (Destination Location) diatur dengan benar. Hal ini memastikan <strong>produk disimpan di lokasi gudang yang tepat</strong>, menjaga akurasi stok dan memudahkan pelacakan di kemudian hari.</p>
        
        <h3>Melacak Inventaris</h3>
        <p>Mengaktifkan opsi 'Track Inventory' pada formulir produk adalah langkah kunci. Fitur ini memungkinkan sistem untuk <strong>melacak jumlah stok dan lokasi spesifik</strong> produk tersebut di seluruh gudang Anda.</p>
        """
    },
    2: {
        "title": "Inventory Basics 2: Pengiriman & Ketersediaan",
        "subtitle": "Delivery Steps & Product Availability",
        "text": """
        <h3>Strategi Pengiriman 2 Langkah</h3>
        <p>Beberapa perusahaan, seperti Stealthy Wood dalam contoh kasus, menggunakan pengiriman 2 langkah (Pick + Ship). Alasannya adalah efisiensi kerja: tim picking dapat fokus menemukan produk dengan cepat, sementara tim pengiriman (delivery) fokus pada <strong>verifikasi, pengepakan, dan pengiriman</strong> barang.</p>
        
        <h3>Sumber Dokumen Pengiriman</h3>
        <p>Berbeda dengan penerimaan, dokumen sumber untukPicking atau Delivery Order adalah <strong>Order Penjualan (Sales Order)</strong>.</p>
        
        <h3>Indikator Ketersediaan Produk</h3>
        <p>Di Odoo, jika Anda melihat teks 'Product Availability' berwarna hijau dengan status 'Available', itu berarti <strong>barang tersedia secara fisik dan telah dicadangkan (reserved)</strong> untuk pesanan tersebut. Ini memberikan kepastian bahwa stok siap untuk diproses.</p>
        """
    },
    3: {
        "title": "Inventory Basics 3: Warehouse Transfers",
        "subtitle": "Operasi Transfer & Langkah Kualitas",
        "text": """
        <h3>Transfer Inventaris</h3>
        <p>Transfer inventaris di Odoo menentukan <strong>bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses</strong>. Ini mencakup penerimaan, transfer internal, dan pengiriman keluar.</p>
        
        <h3>Penerimaan 3 Langkah (Quality Check)</h3>
        <p>Kapan Anda harus menggunakan penerimaan 3 langkah (Receive -> Quality -> Stock)? Strategi ini ideal digunakan <strong>hanya ketika beberapa produk memerlukan pemeriksaan kualitas</strong> sebelum masuk ke stok utama.</p>
        
        <h3>Pengiriman 3 Langkah</h3>
        <p>Alur standar untuk pengiriman 3 langkah di Odoo adalah:
        <br>1. <strong>Pick</strong>: Ambil barang dari penyimpanan.
        <br>2. <strong>Pack</strong>: Kemas barang ke dalam pesanan.
        <br>3. <strong>Output</strong>: Pindahkan ke area pengiriman (Output).
        </p>
        """
    },
    4: {
        "title": "Inventory Basics 4: Lokasi Gudang",
        "subtitle": "Parent/Child Locations & Valuation",
        "text": """
        <h3>Hierarki Lokasi: Child Location</h3>
        <p>Di Odoo, 'Child Location' didefinisikan sebagai <strong>node bawahan di bawah lokasi induk (parent location)</strong> dalam struktur hierarki gudang. Ini memungkinkan pengorganisasian stok yang granular (misal: Rak A1 di dalam Baris A).</p>
        
        <h3>Penilaian Inventaris (Inventory Valuation)</h3>
        <p>Tidak semua jenis lokasi dihitung dalam penilaian inventaris perusahaan. Lokasi yang termasuk dalam perhitungan nilai aset adalah lokasi bertipe <strong>Internal dan Transit</strong>.</p>
        
        <h3>Lokasi Scrap (Inventory Loss)</h3>
        <p>Memindahkan barang ke lokasi 'Inventory Loss' (Scrap) akan memicu <strong>pergerakan stok yang mengurangi jumlah on-hand</strong>, secara efektif menghapus nilai aset barang tersebut dari pembukuan stok aktif.</p>
        """
    },
    5: {
        "title": "Inventory Basics 5: Satuan Ukuran (UoM)",
        "subtitle": "Konfigurasi & Konversi Unit",
        "text": """
        <h3>Mengaktifkan Units of Measure</h3>
        <p>Untuk menggunakan berbagai satuan (seperti pcs, lusin, kg, ton), Anda harus mengaktifkan fiturnya di <strong>Configuration > Settings > Products section > Units of Measure</strong>.</p>
        
        <h3>Kalkulasi Konversi</h3>
        <p>Saat membuat UoM baru yang lebih besar dari unit referensi (misal: Lusin vs Pcs), kolom 'Contains' biasanya mengharuskan Anda mendefinisikan rasionya. Namun, jika Anda membuat unit yang lebih kecil, prinsipnya mungkin melibatkan pembagian. <em>(Catatan: Berdasarkan kuis 'Divide new unit by reference' - pastikan pemahaman rasio ini sesuai dengan versi Odoo yang digunakan, biasanya Odoo menggunakan rasio pengali/pembagi terhadap Unit Referensi).</em></p>
        
        <h3>Penerimaan dengan Unit Berbeda</h3>
        <p>Odoo sangat fleksibel. Jika database Anda melacak stok dalam <strong>Pounds</strong>, tetapi Anda membeli dalam Kilograms, Odoo akan secara otomatis mengonversi dan menyimpan stok dalam unit basis Anda, yaitu <strong>Pounds</strong>, saat penerimaan divalidasi.</p>
        """
    },
    6: {
        "title": "Inventory Basics 6: Penyesuaian Stok",
        "subtitle": "Inventory Adjustments & Frequency",
        "text": """
        <h3>Rute Penyesuaian Manual</h3>
        <p>Saat Anda melakukan penyesuaian stok manual (menambah stok tiba-tiba), rute pergerakan barang adalah dari lokasi virtual (Virtual Locations/Inventory Adjustment) menuju lokasi stok fisik (WH/Stock). Jadi: <strong>Virtual Locations/Inventory Adjustment → WH/Stock</strong>.</p>
        
        <h3>Frekuensi Inventaris</h3>
        <p>Anda dapat mengatur seberapa sering opname stok harus dilakukan (Inventory Frequency) melalui menu <strong>Operations > Inventory Adjustments</strong>.</p>
        
        <h3>Opname Tahunan</h3>
        <p>Untuk kepatuhan akuntansi, banyak perusahaan melakukan opname tahunan. Anda dapat mengatur 'Annual Inventory Day and Month' di <strong>Inventory > Configuration > Settings > Operations Section</strong>.</p>
        """
    },
    7: {
        "title": "Inventory Basics 7: Landed Costs",
        "subtitle": "Biaya Tambahan & Penilaian",
        "text": """
        <h3>Apa itu Landed Cost?</h3>
        <p>Landed Cost adalah <strong>pengeluaran tambahan yang harus dibayar di luar harga produk itu sendiri</strong> saat melakukan pembelian, seperti biaya pengiriman, asuransi, bea cukai, dan handling.</p>
        
        <h3>Metode Penilaian Rata-Rata</h3>
        <p>Jika Anda ingin nilai persediaan produk mencerminkan biaya rata-rata dari semua unit yang ada di tangan, Anda harus menggunakan metode costing <strong>Average Cost (AVCO)</strong>.</p>
        
        <h3>Metode Pemisahan (Split Method)</h3>
        <p>Saat membebankan landed cost ke beberapa produk, Anda bisa membaginya berdasarkan Kuantitas (Quantity), Volume, Berat, atau Biaya Saat Ini (Current Cost). <strong>'By Color'</strong> (Berdasarkan Warna) <strong>bukanlah</strong> opsi standar untuk membagi biaya landed cost.</p>
        """
    },
    8: {
        "title": "Inventory Basics 8: Hak Akses",
        "subtitle": "User Roles & Security",
        "text": """
        <h3>Pemisahan Hak Akses</h3>
        <p>Tujuan utama membedakan hak akses antar peran pengguna (User vs Administrator) adalah <strong>untuk memastikan keamanan dan mencegah akses ke konfigurasi yang tidak perlu</strong>.</p>
        
        <h3>Akses Lintas Aplikasi</h3>
        <p>Seorang Manajer Gudang mungkin memerlukan akses ke aplikasi Pembelian (Purchase) untuk tujuan operasional, seperti <strong>melihat PO dan memproses penerimaan barang (receipts)</strong>.</p>
        
        <h3>Akses Barcode</h3>
        <p>Jika aplikasi Inventaris diinstal, memberikan akses inventaris kepada pengguna seringkali secara otomatis memberikan akses ke aplikasi pendukung operasional seperti <strong>Barcode</strong>.</p>
        """
    },
    9: {
        "title": "Replenishment 1: Reordering Rules",
        "subtitle": "Laporan Replenishment & Order",
        "text": """
        <h3>Proses 'Order Once'</h3>
        <p>Pada laporan Replenishment, saat Anda mengklik 'Order Once', Odoo akan <strong>membuat Permintaan Penawaran (RFQ)</strong> sejumlah kuantitas yang tertera pada kolom 'To Order'.</p>
        
        <h3>Kapan Item Muncul di Laporan?</h3>
        <p>Laporan replenishment manual akan menampilkan item yang memiliki aturan pemesanan ulang (reordering rule) <strong>jika jumlah yang diperkirakan (forecasted quantity) berada di bawah minimum</strong> yang ditentukan dalam aturan tersebut.</p>
        
        <h3>Order to Max</h3>
        <p>Jika stok saat ini berada di antara minimum dan maksimum, aturan otomatis tidak akan memicu pembelian. Namun, jika Anda secara manual memilih 'Order to Max', Odoo akan membuat PO untuk <strong>selisih antara jumlah maksimum dan jumlah di tangan (on-hand)</strong> saat ini.</p>
        """
    },
    10: {
        "title": "Replenishment 2: Kalkulasi Reordering",
        "subtitle": "Min/Max Rules & Forecast",
        "text": """
        <h3>Contoh Kasus 1</h3>
        <p>Aturan: Min 20, Max 50.<br/>
        Stok Forecast: 15 (di bawah Min).<br/>
        Sistem akan memesan hingga Max.<br/>
        Jumlah Order = Max - Forecast = 50 - 15 = <strong>35 unit</strong>.</p>
        
        <h3>Memicu Aturan Otomatis</h3>
        <p>Agar aturan pemesanan ulang otomatis bekerja dengan benar, kondisi kuncinya adalah: <strong>ketika jumlah perkiraan (forecasted quantity) jatuh di bawah minimum yang ditentukan</strong>, maka aturan akan dipicu.</p>
        
        <h3>Contoh Kasus 2 (Negatif Forecast)</h3>
        <p>Aturan: Min 10, Max 15.<br/>
        Stok Forecast: -5 (artinya kita berhutang stok ke pelanggan).<br/>
        Sistem akan memesan hingga Max.<br/>
        Jumlah Order = Max - Forecast = 15 - (-5) = 15 + 5 = <strong>20 unit</strong>.</p>
        """
    },
    11: {
        "title": "Replenishment 3: Lead Times",
        "subtitle": "Waktu Tunggu & Penjadwalan",
        "text": """
        <h3>Expected Arrival Date</h3>
        <p>Jika Vendor Lead Time adalah 7 hari dan Deadline Pesanan (Order Deadline) adalah 8 Juni, maka barang diharapkan tiba pada: 8 Juni + 7 hari = <strong>15 Juni</strong>.</p>
        
        <h3>Pengaturan 'Days to Purchase'</h3>
        <p>Jika 'Days to Purchase' diatur ke 3 hari, dan RFQ dibuat hari ini dampak utamanya adalah pada penjadwalan. <strong>Deadline Pesanan (Order Deadline)</strong> pada RFQ akan menunjukkan tanggal 3 hari dari sekarang.</p>
        
        <h3>Peringatan 'Requested Date too Soon'</h3>
        <p>Jika Anda melihat peringatan ini di Sales Order, itu berarti tanggal yang dijanjikan ke pelanggan tidak realistis berdasarkan perhitungan total lead time: <strong>Customer Lead Time + Vendor Lead Time + Security Lead Times</strong> (untuk Sales dan Purchase).</p>
        """
    },
    12: {
        "title": "Replenishment 4: Resupply Routes",
        "subtitle": "Resupply dari Gudang Lain",
        "text": """
        <h3>Konfigurasi Resupply</h3>
        <p>Jika Anda memilih 'Distribution Center' pada field 'Resupply From' di tab Konfigurasi Gudang, rute resupply ini dapat ditemukan dan dikelola di <strong>Halaman konfigurasi 'Pengaturan' > 'Gudang'</strong>.</p>
        
        <h3>Syarat Utama</h3>
        <p>Untuk menggunakan fitur canggih seperti 'Resupply From', Anda wajib mengaktifkan pengaturan <strong>'Multi-Step Routes'</strong> (Rute Multi-Langkah) di konfigurasi Inventaris.</p>
        
        <h3>Dokumen yang Terbentuk</h3>
        <p>Proses resupply dari gudang lain akan menghasilkan dua dokumen utama: <strong>'Order Pengiriman' (Delivery Order)</strong> dari gudang pengirim, dan <strong>'Penerimaan' (Receipt)</strong> untuk toko/gudang penerima.</p>
        """
    },
    13: {
        "title": "Traceability 1: Lots & Serials",
        "subtitle": "Pelacakan Produk",
        "text": """
        <h3>Validasi Tanpa Nomor Lot</h3>
        <p>Jika sebuah produk dikonfigurasi untuk dilacak dengan Lot atau Serial Number, Odoo sangat ketat. Jika Anda mencoba memvalidasi penerimaan tanpa memasukkan nomor lot, <strong>Odoo akan menampilkan pesan error</strong> dan memblokir validasi.</p>
        
        <h3>Laporan Traceability</h3>
        <p>Fitur ini digunakan untuk <strong>melihat riwayat pergerakan (movement) lengkap</strong> dari nomor lot atau serial tertentu, mulai dari penerimaan vendor, perpindahan internal, hingga pengiriman ke pelanggan.</p>
        
        <h3>Tipe Produk</h3>
        <p>Hanya produk dengan tipe <strong>Barang (Storable Product)</strong> yang dapat mengaktifkan fitur pelacakan lot atau serial. Produk jasa atau konsumsi tidak menyimpan stok, sehingga tidak relevan untuk dilacak per unit unik.</p>
        """
    },
    14: {
        "title": "Traceability 2: FEFO Strategy",
        "subtitle": "First Expired First Out",
        "text": """
        <h3>Syarat FEFO</h3>
        <p>Untuk menggunakan strategi penghapusan FEFO (First Expired, First Out), Anda harus mengaktifkan paket fitur lengkap: <strong>Nomor Lot & Serial, Tanggal Kedaluwarsa, Lokasi Penyimpanan, dan Rute Multi-Langkah</strong>.</p>
        
        <h3>Mengatur Tanggal Kedaluwarsa</h3>
        <p>Tanggal kedaluwarsa untuk lot baru dapat diatur <strong>langsung pada saat penerimaan produk</strong> di jendela Operasi Rinci (Detailed Operations), asalkan fitur Tanggal Kedaluwarsa sudah aktif.</p>
        
        <h3>Pengaturan Pasca-Penerimaan</h3>
        <p>Jika terlewat saat penerimaan, Anda juga dapat memasukkan atau mengedit Tanggal Kedaluwarsa melalui <strong>Formulir Lot Pembelian</strong> (Purchase Lot form).</p>
        """
    },
    15: {
        "title": "Traceability 3: Konfigurasi Expiry",
        "subtitle": "Pengaturan Tanggal & Strategi",
        "text": """
        <h3>Prasyarat Tanggal Kedaluwarsa</h3>
        <p>Sebelum Anda dapat menekan tombol on untuk 'Expiration Dates', Anda harus terlebih dahulu mengaktifkan fitur <strong>Lots & Serial Numbers</strong>, karena tanggal kedaluwarsa melekat pada nomor lot/serial tertentu.</p>
        
        <h3>Removal Date</h3>
        <p>Tanggal Penghapusan (Removal Date) adalah tanggal dimana produk sebaiknya dikeluarkan dari stok (misal untuk FEFO). Jika Anda mengubah Tanggal Kedaluwarsa pada sebuah lot, Tanggal Penghapusan akan <strong>dihitung ulang secara otomatis</strong> berdasarkan aturan yang dikonfigurasi pada formulir produk.</p>
        
        <h3>Setup FEFO</h3>
        <p>Strategi penghapusan FEFO harus diatur di dua level: <strong>Kategori Produk</strong> (untuk aturan default) dan <strong>Lokasi</strong> (untuk strategi pengambilan).</p>
        """
    },
    16: {
        "title": "Warehouse Transfers 1: Push & Pull",
        "subtitle": "Aturan Alur Barang",
        "text": """
        <h3>Mengaktifkan Push & Pull</h3>
        <p>Fitur aturan Push dan Pull adalah bagian dari sistem rute canggih Odoo. Oleh karena itu, Anda harus mengaktifkan <strong>Multi-Step Routes</strong>.</p>
        
        <h3>Jenis Aksi Rute</h3>
        <p>Selain metode standar 'Take from stock', aturan rute juga dapat dikonfigurasi untuk menjalankan aksi lain seperti <strong>Trigger another rule</strong> (Memicu aturan lain), yang memungkinkan pembuatan rantai pasokan yang kompleks.</p>
        
        <h3>Pemenuhan Sales Order</h3>
        <p>Saat Sales Order dikonfirmasi, sistem biasanya memicu <strong>Aturan Pull (Tarik)</strong>. Ini logika dasarnya: "Pelanggan butuh barang -> Tarik barang dari Gudang -> Gudang butuh barang -> Tarik dari Vendor/Produksi".</p>
        """
    },
    17: {
        "title": "Warehouse Transfers 2: Putaway Rules",
        "subtitle": "Strategi Penempatan Barang",
        "text": """
        <h3>Tujuan Putaway</h3>
        <p>Aturan Putaway (Penempatan) berfungsi untuk <strong>secara otomatis menetapkan lokasi penyimpanan spesifik</strong> untuk produk yang baru diterima. Ini mengotomatisasi proses "barang ini harus ditaruh di rak mana".</p>
        
        <h3>Lingkup Aturan</h3>
        <p>Anda dapat membuat aturan putaway yang berlaku spesifik untuk satu <strong>Produk</strong> tertentu, atau lebih luas untuk seluruh <strong>Kategori Produk</strong>.</p>
        
        <h3>Struktur Lokasi</h3>
        <p>Dalam contoh lokasi 'WH/Stock/Music', <strong>WH/Stock</strong> bertindak sebagai <strong>Lokasi Induk (Parent Location)</strong>, sedangkan 'Music' adalah sub-lokasi atau rak spesifik di dalamnya.</p>
        """
    },
    18: {
        "title": "Warehouse Transfers 3: Putaway Lanjutan",
        "subtitle": "Kategori & Kapasitas",
        "text": """
        <h3>Having Category</h3>
        <p>Opsi 'Having Category' pada aturan putaway memungkinkan sistem untuk melihat <strong>Kategori Produk</strong> dari barang yang masuk untuk menentukan di mana ia harus disimpan.</p>
        
        <h3>Kapasitas Lokasi</h3>
        <p>Jika Anda menggunakan fitur kapasitas lokasi (misal Max 100 unit), Odoo akan membagi penyimpanan. Contoh: Lokasi A sisa 25, Lokasi B kosong. Barang masuk 50. Odoo akan menaruh <strong>25 unit di Lokasi A (hingga penuh) dan 25 unit sisanya di Lokasi B</strong>.</p>
        
        <h3>Verifikasi Putaway</h3>
        <p>Untuk memastikan aturan putaway bekerja saat penerimaan, Anda bisa mengecek <strong>Lokasi Tujuan (Destination Location)</strong> pada baris produk, atau melihat detailnya di pop-up <strong>Detailed Operations</strong>.</p>
        """
    },
    19: {
        "title": "Warehouse Transfers 4: Cross-Docking",
        "subtitle": "Pindah Silang Tanpa Simpan",
        "text": """
        <h3>Mengaktifkan Cross-Dock</h3>
        <p>Cross-Docking adalah strategi logistik tingkat lanjut. Seperti biasa, ini membutuhkan pengaturan <strong>Multi-Step Routes</strong>.</p>
        
        <h3>Rute Produk</h3>
        <p>Untuk produk yang di-cross-dock (diterima lalu langsung dikirim tanpa disimpan lama), Anda perlu mengaktifkan rute <strong>Buy</strong> (Beli) dan <strong>Cross-Dock</strong> pada tab Inventaris produk.</p>
        
        <h3>Dokumen Transfer</h3>
        <p>Proses Cross-Dock standar menghasilkan <strong>dua transfer</strong>: satu untuk Penerimaan (Input -> CrossDock Area) dan satu untuk Pengiriman (CrossDock Area -> Output/Customer).</p>
        """
    },
    20: {
        "title": "Warehouse Transfers 5: Consignment",
        "subtitle": "Stok Konsinyasi",
        "text": """
        <h3>Penerimaan Konsinyasi</h3>
        <p>Saat menerima barang titipan (konsinyasi) dari vendor, Anda tetap membuat dokumen <strong>Penerimaan (Receipt)</strong> standar.</p>
        
        <h3>Menetapkan Pemilik (Owner)</h3>
        <p>Kunci dari stok konsinyasi adalah kepemilikan. Anda harus menetapkan vendor sebagai <strong>Pemilik (Owner)</strong> produk tersebut. Ini dilakukan di area 'Assign Owner' pada dokumen penerimaan.</p>
        
        <h3>Valuasi Stok</h3>
        <p>Karena barang konsinyasi bukan aset perusahaan Anda, nilai stoknya di laporan Stock Valuation Anda adalah <strong>'0.00'</strong>, meskipun secara fisik barangnya ada di gudang Anda.</p>
        """
    },
    21: {
        "title": "Warehouse Transfers 6: Batch & Wave",
        "subtitle": "Optimasi Pengiriman",
        "text": """
        <h3>Peta Pengiriman</h3>
        <p>Dalam transfer Batch, Anda dapat melihat rute pengiriman visual dengan mengklik <strong>ikon 'gear' (roda gigi)</strong> pada formulir batch untuk menampilkan opsi 'Map'.</p>
        
        <h3>Konfigurasi Dock</h3>
        <p>Untuk mendefinisikan sebuah lokasi sebagai loading dock, Anda harus masuk ke konfigurasi Lokasi dan mencentang opsi <strong>'Is a Dock Location'</strong>.</p>
        
        <h3>Mengapa Spesifik Dock?</h3>
        <p>Dalam operasi gudang yang sibuk, lokasi 'Output' seringkali terlalu umum. Anda mungkin perlu menentukan 'Dock B' secara spesifik pada destinasi transfer <strong>karena 'Output' default tidak mendetailkan lokasi pintu muat (dock) yang tepat</strong> untuk pesanan tersebut.</p>
        """
    }
}

base_dir = "/Users/mac/pembelajar-belajar-odoo"

# Template for the module page
template_content = \"\"\"<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{TITLE}} - Odoo Learning</title>
    <link rel="stylesheet" href="../../../assets/css/style.css">
    <link rel="stylesheet" href="../../../assets/css/dark-mode.css">
</head>
<body>
    <div class="sidebar">
        <div class="logo-container">
            <a href="../../../index.html" style="text-decoration: none;">
                <h2 class="logo">Odoo<span style="color: var(--accent);">Learning</span></h2>
            </a>
        </div>
        <nav class="nav-links">
            <a href="../../../index.html" class="nav-item">
                <span class="icon">🏠</span>
                Dashboard
            </a>
            <a href="../../../accounting.html" class="nav-item">
                <span class="icon">💰</span>
                Accounting
            </a>
             <a href="../../../inventory.html" class="nav-item active">
                <span class="icon">📦</span>
                Inventory
            </a>
        </nav>
    </div>

    <div class="main-content">
        <header class="top-bar">
            <div class="breadcrumbs">
                <a href="../../../index.html">Home</a> &gt; 
                <a href="../../../inventory.html">Inventory</a> &gt; 
                <span>{{TITLE}}</span>
            </div>
        </header>

        <div class="module-container">
            <div class="video-section">
               <!-- Video placeholder logic if ID exists, else just title -->
               <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/{{VIDEO_ID}}" title="Odoo Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>

            <div class="content-section">
                <h1>{{TITLE}}</h1>
                <p class="subtitle">{{SUBTITLE}}</p>
                
                <div class="learning-material">
                    {{CONTENT_TEXT}}
                </div>
            </div>

            <div class="quiz-section">
                <h2>Kuis Pengetahuan</h2>
                <div id="quiz-container" class="quiz-container" data-quiz-id="{{QUIZ_ID}}">
                    <!-- Quiz will be rendered here -->
                </div>
            </div>

            <div class="navigation-buttons">
                <a href="{{PREV_LINK}}" class="btn btn-secondary">← Materi Sebelumnya</a>
                <a href="{{NEXT_LINK}}" class="btn btn-primary btn-next">Lanjut ke Materi Berikutnya →</a>
            </div>
        </div>
    </div>

    <script src="../../../assets/js/lms-core.js"></script>
    <script src="../../../assets/js/quiz-bank.js"></script>
    <script src="../../../assets/js/quiz-engine.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            if (typeof renderQuiz === 'function') {
                const quizId = document.getElementById('quiz-container').getAttribute('data-quiz-id');
                if (window.QUIZ_BANK && window.QUIZ_BANK[quizId]) {
                    renderQuiz(quizId, '#quiz-container');
                } else {
                     console.warn('Quiz ID ' + quizId + ' not found in local bank. Falling back to placeholder if needed.');
                }
            }
            
            // Mark current as 'in-progress' logic is handled by lms-core, but we can double check
        });
    </script>
</body>
</html>\"\"\"

# Mapping logic consistent with create_inventory_modules.py
sections = [
    # (folder_name, start_idx, end_idx)
    ("inventory-basics", 1, 8),
    ("replenishment", 9, 12),
    ("traceability", 13, 15),
    ("transfers", 16, 21), 
    ("reserve", 22, 27),
    ("packaging", 28, 31),
    ("operations", 32, 35)
]

def get_path_info(m_num):
    # Find which section this module belongs to
    for folder, start, end in sections:
        if start <= m_num <= end:
            return folder, start, end
    return None, 0, 0

for m_num, data in content_map.items():
    folder_name, start_sec, end_sec = get_path_info(m_num)
    if not folder_name:
        print(f"Skipping module {m_num}, mapping not found")
        continue

    # Path to file
    file_path = os.path.join(base_dir, f"inventory/{folder_name}/inventory-materi-{m_num}/index.html")
    
    # Links
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

    # Default video if not specified
    vid = data.get("video_id", "7qX2o_-N9j0") 
    
    # Replace template
    page_html = template_content.replace("{{TITLE}}", data["title"])
    page_html = page_html.replace("{{SUBTITLE}}", data["subtitle"])
    page_html = page_html.replace("{{VIDEO_ID}}", vid)
    page_html = page_html.replace("{{CONTENT_TEXT}}", data["text"])
    page_html = page_html.replace("{{QUIZ_ID}}", f"inventory_materi{m_num}")
    page_html = page_html.replace("{{PREV_LINK}}", prev_link)
    page_html = page_html.replace("{{NEXT_LINK}}", next_link)
    
    # Write
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w") as f:
        f.write(page_html)
        
    print(f"Updated content for Materi {m_num}")
