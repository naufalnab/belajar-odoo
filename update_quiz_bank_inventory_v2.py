import re

# We will read the quiz data from a separate file or directly embed it here, 
# but carefully avoiding triple-quoted f-strings with braces.

final_js_output = """  /* Inventory Materi 1 */
  inventory_materi1: [
    {
      question: "Jenis dokumen apa yang menjadi sumber penerimaan produk ke inventaris Anda?",
      question_en: "What type of document is the source of a receipt of products to your inventory?",
      options: ["Order Penjualan (SO).", "Order Produksi.", "Penawaran (Quotation).", "Order Pembelian (PO)."],
      options_en: ["A Sales Order.", "A Manufacturing Order.", "A Quotation.", "A Purchase Order."],
      correct: "Order Pembelian (PO)."
    },
    {
      question: "Saat menerima produk di Odoo, mengapa penting untuk mengatur 'Lokasi Tujuan' dengan benar pada resi?",
      question_en: "When receiving products in Odoo, why is it important to correctly set the ‘Destination Location’ on the receipt?",
      options: ["Untuk memastikan produk disimpan di lokasi gudang yang benar", "Untuk melacak vendor mana yang mengirim pengiriman", "Untuk menghitung total biaya barang yang diterima", "Untuk memvalidasi resi secara otomatis tanpa tindakan lebih lanjut"],
      options_en: ["To ensure products are stored in the correct warehouse location", "To track which vendor sent the shipment", "To calculate the total cost of goods received", "To automatically validate the receipt without further action"],
      correct: "Untuk memastikan produk disimpan di lokasi gudang yang benar"
    },
    {
      question: "Perbedaan utama apa yang terjadi jika mengaktifkan 'Lacak Inventaris' pada formulir produk?",
      question_en: "What key difference does enabling ‘Track Inventory’ on a product form make?",
      options: ["Ini memungkinkan jumlah stok dan lokasi produk dilacak", "Secara otomatis memesan lebih banyak stok saat produk menipis", "Membuat order pembelian untuk produk setiap kali terjual", "Mencegah produk dipindahkan ke lokasi penyimpanan lain"],
      options_en: ["It allows the product’s stock quantities and locations to be tracked", "It automatically orders more stock when the product runs low", "It creates a purchase order for the product whenever it’s sold", "It prevents the product from being relocated to another storage location"],
      correct: "Ini memungkinkan jumlah stok dan lokasi produk dilacak"
    }
  ],
  /* Inventory Materi 2 */
  inventory_materi2: [
    {
      question: "Mengapa Stealthy Wood menggunakan pengiriman 2 langkah?",
      question_en: "From the video, why does Stealthy Wood use 2-step delivery?",
      options: ["Karena tim picking mereka sangat efisien menemukan produk, dan tim pengiriman fokus pada verifikasi, pengepakan, dan pengiriman", "Untuk mengurangi jumlah karyawan yang terlibat dalam pengiriman", "Untuk meminimalkan kebutuhan verifikasi produk sebelum pengiriman", "Karena sistem penyimpanan mereka memerlukan beberapa langkah untuk mengakses produk"],
      options_en: ["Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping", "To reduce the number of employees involved in deliveries", "To minimize the need for product verification before shipping", "Because their storage system requires multiple steps to access products"],
      correct: "Karena tim picking mereka sangat efisien menemukan produk, dan tim pengiriman fokus pada verifikasi, pengepakan, dan pengiriman"
    },
    {
      question: "Nomor dokumen apa yang bisa menjadi sumber picking atau delivery order?",
      question_en: "What type of document can be the source of a picking or delivery order?",
      options: ["Order Penjualan (SO).", "Order Produksi.", "Penawaran (Quotation).", "Order Pembelian (PO)."],
      options_en: ["A Sales Order", "A Manufacturing Order", "A Quotation", "A Purchase Order"],
      correct: "Order Penjualan (SO)."
    },
    {
      question: "Apa artinya jika teks 'Ketersediaan Produk' menunjukkan 'Tersedia' dan berwarna hijau di Odoo?",
      question_en: "What does it mean when the ‘Product Availability’ text shows ‘Available’ and is green in Odoo?",
      options: ["Barang tersedia dan dicadangkan (reserved)", "Barang sudah diterima", "Barang diharapkan tiba tepat waktu jika diterima hari ini", "Barang tersedia di gudang, tetapi belum dicadangkan"],
      options_en: ["Items are available and reserved", "Items have already been received", "Items are expected to arrive in time for the delivery if received today", "Items are available in the warehouse, but not reserved"],
      correct: "Barang tersedia dan dicadangkan (reserved)"
    }
  ],
  /* Inventory Materi 3 */
  inventory_materi3: [
    {
      question: "Apa yang ditentukan oleh transfer inventaris dalam operasi gudang Odoo?",
      question_en: "What do inventory transfers determine in Odoo’s warehouse operations?",
      options: ["Bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses", "Jumlah karyawan yang dibutuhkan di gudang", "Harga produk berdasarkan lokasi gudang", "Pemasok mana yang dapat mengirim pengiriman ke gudang"],
      options_en: ["How products move within the warehouse and how shipments are processed", "The number of employees needed in the warehouse", "The pricing of products based on warehouse location", "Which suppliers can send shipments to the warehouse"],
      correct: "Bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses"
    },
    {
      question: "Kapan Anda harus menggunakan penerimaan tiga langkah untuk pemeriksaan kualitas di Odoo?",
      question_en: "When should you use a three-step receipt for quality checks in Odoo?",
      options: ["Hanya ketika beberapa produk memerlukan pemeriksaan kualitas", "Hanya ketika pemeriksaan kualitas harus dilakukan di lokasi inspeksi terpisah", "Selalu, karena pemeriksaan kualitas hanya dapat dilakukan dengan penerimaan tiga langkah", "Tidak pernah, karena pemeriksaan kualitas hanya mungkin dengan penerimaan satu langkah"],
      options_en: ["Only when some products need quality checks", "Only when quality checks must happen at a separate inspection location", "Always, because quality checks can only be done with three-step receipts", "Never, because quality checks are only possible with one-step receipts"],
      correct: "Hanya ketika beberapa produk memerlukan pemeriksaan kualitas"
    },
    {
      question: "Dalam proses pengiriman tiga langkah Odoo, apa langkah yang benar untuk memindahkan produk?",
      question_en: "In Odoo’s three-step delivery process, what are the correct steps for moving products?",
      options: ["Ambil dari penyimpanan → Kemas ke dalam pesanan → Pindahkan ke area output", "Lakukan pemeriksaan kualitas → Pindah ke picking → Kemas ke dalam pesanan", "Ambil dari penyimpanan → Kirim ke pemeriksaan kualitas → Pindah langsung ke pelanggan", "Kemas ke dalam pesanan → Ambil dari penyimpanan → Pindah ke area picking"],
      options_en: ["Pick from storage → Pack into orders → Move to the output area", "Perform quality check → Move to picking → Pack into orders", "Pick from storage → Send to quality check → Move directly to customers", "Pack into orders → Pick from storage → Move to picking area"],
      correct: "Ambil dari penyimpanan → Kemas ke dalam pesanan → Pindahkan ke area output"
    }
  ],
  /* Inventory Materi 4 */
  inventory_materi4: [
    {
      question: "Sebuah 'lokasi anak' (child location) di Odoo didefinisikan sebagai:",
      question_en: "A “child location” in Odoo is defined as:",
      options: ["Node bawahan di bawah lokasi induk dalam hierarki lokasi", "Lokasi yang dibuat secara otomatis selama penerimaan", "Lokasi terbatas untuk pesanan produksi", "Lokasi yang hanya digunakan untuk penghitungan siklus"],
      options_en: ["A subordinate node under a parent location in the location hierarchy", "A location automatically generated during receipts", "A location restricted to production orders", "A location used only for cycle counts"],
      correct: "Node bawahan di bawah lokasi induk dalam hierarki lokasi"
    },
    {
      question: "Jenis Lokasi mana yang termasuk dalam perhitungan penilaian inventaris Odoo?",
      question_en: "Which Location Types are included in Odoo’s inventory valuation calculations?",
      options: ["Internal dan Transit", "Vendor dan Pelanggan", "Internal dan Vendor", "Produksi dan Kehilangan Inventaris"],
      options_en: ["Internal and Transit", "Vendor and Customer", "Internal and Vendor", "Production and Inventory Loss"],
      correct: "Internal dan Transit"
    },
    {
      question: "Mengirim item ke lokasi Inventory Loss (Scrap) memicu perilaku sistem yang mana?",
      question_en: "Sending items to the Inventory Loss (Scrap) location triggers which system behavior?",
      options: ["Pergerakan stok mengurangi jumlah di tangan (on-hand)", "Order produksi dibuat", "Tagihan vendor otomatis dibuat", "Produk dikembalikan ke WH/Stock"],
      options_en: ["A stock move reduces on-hand quantity", "A manufacturing order is created", "An automatic vendor bill is generated", "The product is transferred back to WH/Stock"],
      correct: "Pergerakan stok mengurangi jumlah di tangan (on-hand)"
    }
  ],
  /* Inventory Materi 5 */
  inventory_materi5: [
    {
      question: "Di mana Anda mengaktifkan fitur Satuan Ukuran (Available) di Inventaris Odoo?",
      question_en: "Where do you activate the Units of Measure feature in Odoo Inventory?",
      options: ["Konfigurasi > Pengaturan > Bagian Produk > Satuan Ukuran.", "Konfigurasi > Satuan Ukuran.", "Tidak ada yang perlu diaktifkan.", "Produk > Pengaturan > Satuan Ukuran."],
      options_en: ["Configuration > Settings > Products section > Units of Measure.", "Configuration > Units of Measure.", "Nothing needs to be activated.", "Products > Settings > Units of Measure."],
      correct: "Konfigurasi > Pengaturan > Bagian Produk > Satuan Ukuran."
    },
    {
      question: "Bagaimana cara menghitung angka di kolom 'Contains' saat membuat satuan ukuran baru?",
      question_en: "How do I calculate the number in the ‘Contains’ column when creating a new unit of measure?",
      options: ["Bagi satuan ukuran baru dengan satuan ukuran referensi.", "Kurangi satuan ukuran baru dengan satuan ukuran referensi.", "Kalikan satuan ukuran baru dengan satuan ukuran referensi.", "Tambahkan satuan ukuran baru ke satuan ukuran referensi."],
      options_en: ["Divide the new unit of measure by the reference unit of measure.", "Subtract the new unit of measure by the reference unit of measure.", "Multiple the new unit of measure by the reference unit of measure.", "Add the new unit of measure to the reference unit of measure."],
      correct: "Bagi satuan ukuran baru dengan satuan ukuran referensi."
    },
    {
      question: "Jika database saya melacak stok produk tertentu dalam pound, dan saya memesan produk dalam kilogram, satuan apa yang akan digunakan Odoo saat saya menerima pesanan?",
      question_en: "If my database tracks my stock of a particular product in pounds, and I made an order of the product in kilograms, what unit will Odoo use when I receive the order into my inventory?",
      options: ["Pounds", "Apapun order yang Anda pilih di formulir penerimaan.", "Kilograms", "Baik kilogram maupun pounds."],
      options_en: ["Pounds", "Whatever order you choose in the receipt form.", "Kilograms", "Both kilograms and pounds."],
      correct: "Pounds"
    }
  ],
  /* Inventory Materi 6 */
  inventory_materi6: [
    {
      question: "Apa rute update kuantitas produk secara manual jika nama gudang saya adalah WH?",
      question_en: "What is the route of a manually updated product quantity if my warehouse name is WH?",
      options: ["Lokasi Virtual/Penyesuaian Inventaris → WH/Stock.", "WH/Stock → Lokasi Virtual/Penyesuaian Inventaris.", "WH/Stock → Lokasi Virtual/WH/Stock.", "Lokasi Virtual/WH/Stock → WH/Stock."],
      options_en: ["Virtual Locations/Inventory Adjustment → WH/Stock.", "WH/Stock → Virtual Locations/Inventory Adjustment.", "WH/Stock → Virtual Locations/WH/Stock.", "Virtual Locations/Inventory Adjustment → WH/Stock."],
      correct: "Lokasi Virtual/Penyesuaian Inventaris → WH/Stock."
    },
    {
      question: "Di mana saya dapat mengubah Frekuensi Inventaris (Hari)?",
      question_en: "Where can I change the Inventory Frequency (Days)?",
      options: ["Di bawah Operasi > Penyesuaian Inventaris.", "Di bawah Konfigurasi > Pengaturan.", "Di bawah Konfigurasi > Lokasi.", "Di bawah Laporan > Pergerakan Produk."],
      options_en: ["Under Operations > Inventory Adjustments.", "Under Configuration > Settings.", "Under Configuration > Locations.", "Under Reporting > Product Moves."],
      correct: "Di bawah Operasi > Penyesuaian Inventaris."
    },
    {
      question: "Di mana Anda dapat mengubah 'Hari dan Bulan Inventaris Tahunan' untuk produk Anda?",
      question_en: "Where can you change the “Annual Inventory Day and Month” for your products in Odoo’s Inventory App?",
      options: ["Dengan menavigasi ke Inventaris > Konfigurasi > Pengaturan > Bagian Operasi (di bawah 'Hari dan Bulan Inventaris Tahunan').", "Langsung pada formulir produk untuk setiap produk dalam stok.", "Dengan menavigasi ke Inventaris > Konfigurasi > Pengaturan > dan mengaktifkan Tanggal Kedaluwarsa.", "Anda tidak dapat mengubah Hari dan Bulan Inventaris Tahunan."],
      options_en: ["By navigating to Inventory > Configuration > Settings > Operations Section (under “Annual Inventory Day and Month”).", "Directly on the product form for each product in stock.", "By navigating to Inventory > Configuration > Settings > and activating Expiration Dates.", "You cannot change the Annual Inventory Day and Month."],
      correct: "Dengan menavigasi ke Inventaris > Konfigurasi > Pengaturan > Bagian Operasi (di bawah 'Hari dan Bulan Inventaris Tahunan')."
    }
  ],
  /* Inventory Materi 7 */
  inventory_materi7: [
    {
      question: "Apa itu 'biaya mendarat' (landed cost)?",
      question_en: "What is a “landed cost”?",
      options: ["Pengeluaran yang harus dibayar, di samping biaya produk saat membelinya", "Harga produk impor", "Harga transportasi produk menggunakan pengiriman darat", "Biaya memindahkan produk dari kapal ke darat"],
      options_en: ["Expenses that must be paid, in addition to the cost of a product when purchasing it", "The price of an imported product", "The price to transport a product using ground shipping", "The cost of moving a product from a ship onto land"],
      correct: "Pengeluaran yang harus dibayar, di samping biaya produk saat membelinya"
    },
    {
      question: "Metode penetapan biaya mana yang harus saya gunakan untuk menetapkan biaya produk sebagai biaya rata-rata setiap unit di tangan?",
      question_en: "Which costing method should I use to set the cost of a product as the average cost of every unit on-hand?",
      options: ["Biaya Rata-Rata (AVCO)", "Harga Standar", "First In First Out (FIFO)", "Ini tidak mungkin di Odoo"],
      options_en: ["Average Cost (AVCO)", "Standard Price", "First In First Out (FIFO)", "This is not possible in Odoo"],
      correct: "Biaya Rata-Rata (AVCO)"
    },
    {
      question: "Manakah yang BUKAN merupakan opsi saat memilih Metode Pemisahan untuk landed costs?",
      question_en: "Which of the following is NOT an option when selecting a Split Method for landed costs?",
      options: ["Berdasarkan Warna", "Equal", "Berdasarkan Kuantitas", "Berdasarkan Volume"],
      options_en: ["By Color", "Equal", "By Quantity", "By Volume"],
      correct: "Berdasarkan Warna"
    }
  ],
  /* Inventory Materi 8 */
  inventory_materi8: [
    {
      question: "Apa tujuan memisahkan hak akses antar peran pengguna?",
      question_en: "What is the purpose of separating access rights between user roles?",
      options: ["Untuk memastikan keamanan dan mencegah akses ke konfigurasi yang tidak perlu", "Untuk meningkatkan ukuran database", "Untuk memungkinkan kedua pengguna mengonfigurasi pengaturan perusahaan", "Untuk mencegah pengguna masuk"],
      options_en: ["To ensure security and prevent access to unnecessary configurations", "To increase the database size", "To allow both users to configure company settings", "To prevent users from logging in"],
      correct: "Untuk memastikan keamanan dan mencegah akses ke konfigurasi yang tidak perlu"
    },
    {
      question: "Mengapa Manajer Gudang memerlukan akses ke aplikasi Pembelian?",
      question_en: "Why would a Warehouse Manager need access to the Purchase app?",
      options: ["Untuk melihat PO dan memproses penerimaan", "Untuk membuat vendor", "Untuk menyetujui pengeluaran", "Untuk mengonfigurasi aturan pajak"],
      options_en: ["To view POs and process receipts", "To create vendors", "To approve expenses", "To configure tax rules"],
      correct: "Untuk melihat PO dan memproses penerimaan"
    },
    {
      question: "Aplikasi tambahan mana yang tersedia saat pengguna diberikan akses ke aplikasi Inventaris?",
      question_en: "Which additional application becomes available when a user is granted access to the Inventory app, if the app is installed?",
      options: ["Barcode", "Manufaktur", "Kualitas", "Penjualan"],
      options_en: ["Barcode", "Manufacturing", "Quality", "Sales"],
      correct: "Barcode"
    }
  ],
  /* Inventory Materi 9 */
  inventory_materi9: [
    {
      question: "Setelah produk dipesan dari laporan replenishment, apa yang terjadi?",
      question_en: "Once a product has been ordered from the replenishment report (“Order Once” was clicked), what happens?",
      options: ["Permintaan penawaran (RFQ) dibuat untuk jumlah 'To Order'.", "RFQ dibuat untuk 'To Order' dan baris pergerakan produk dibuat.", "RFQ dibuat untuk jumlah prakiraan dan produk hilang dari laporan.", "RFQ dibuat untuk jumlah maksimum dan produk menjadi abu-abu."],
      options_en: ["A request for quotation is generated for the “To Order” amount.", "A request for quotation is generated for the “To Order” amount, and a product moves line is generated at the bottom of the Replenishment report.", "A request for quotation is generated for the forecasted amount, and the product disappears from the Replenishment report.", "A request for quotation is generated for the “Maximum Quantity”, and the product is grayed out on the Replenishment report."],
      correct: "Permintaan penawaran (RFQ) dibuat untuk jumlah 'To Order'."
    },
    {
      question: "Kapan laporan replenishment manual menampilkan item yang memiliki aturan pemesanan ulang?",
      question_en: "When would the manual replenishment report show an item that has a reordering rule?",
      options: ["Jika jumlah yang diperkirakan di bawah minimum yang ditentukan dalam aturan pemesanan ulang.", "Produk dengan aturan reordering tidak pernah muncul di laporan manual.", "Jika produk memiliki aturan dengan min dan max nol.", "Jika formulir produk tidak memiliki vendor yang dipilih."],
      options_en: ["If the forecasted quantity is below the minimum specified in the reordering rule.", "A product with a reordering rule would never appear on the manual replenishment report.", "If the product has a reordering rule with the minimum and maximum quantities both set to zero.", "If the product form does not have a vendor selected."],
      correct: "Jika jumlah yang diperkirakan di bawah minimum yang ditentukan dalam aturan pemesanan ulang."
    },
    {
      question: "Saat jumlah on-hand antara min dan max, apa yang terjadi saat tombol 'Order to Max' dipilih?",
      question_en: "When a product’s on-hand quantity is between the minimum and maximum specified in the reordering rule, what happens when you select the “Order to Max” button?",
      options: ["Pesanan pembelian dibuat untuk selisih antara jumlah maksimum dan jumlah di tangan.", "Tidak ada, karena aturan reordering tidak terpicu.", "Pesanan pembelian dibuat untuk jumlah maksimum.", "Pesanan pembelian dibuat untuk selisih antara maksimum dan minimum."],
      options_en: ["A purchase order is placed for the difference between the maximum and on-hand quantities.", "Nothing, because the reordering rule isn’t triggered", "A purchase order is placed for the maximum quantity.", "A purchase order is placed for the difference between the maximum and minimum quantities."],
      correct: "Pesanan pembelian dibuat untuk selisih antara jumlah maksimum dan jumlah di tangan."
    }
  ],
  /* Inventory Materi 10 */
  inventory_materi10: [
    {
      question: "Aturan reordering: Min 20, Max 50. Jika SO dikonfirmasi, dan forecast quantity 15, berapa unit di RFQ otomatis?",
      question_en: "A product’s reordering rule is set for a minimum of 20 units, and a maximum of 50 units. If a sales order is confirmed, and the forecasted quantity of the product is 15, how many units will be on the automatically generated RFQ?",
      options: ["35", "5", "20", "50"],
      options_en: ["35", "5", "20", "50"],
      correct: "35"
    },
    {
      question: "Apa yang Anda butuhkan untuk mengatur aturan pemesanan ulang otomatis dengan benar?",
      question_en: "What do you need to properly set up an automatic reordering rule?",
      options: ["Ketika jumlah perkiraan jatuh di bawah minimum, aturan otomatis dipicu.", "Atur aturan untuk produk di dashboard Aturan Reordering.", "Atur aturan reordering dan vendor default untuk produk.", "Tidak ada, Odoo akan otomatis membeli item."],
      options_en: ["When the forecasted quantity falls below the defined minimum, an automatic reordering rule is triggered.", "Set a rule for a product on the Reordering Rule dashboard.", "Set a reordering rule and a default vendor for the product.", "Nothing, Odoo will automatically purchase the items."],
      correct: "Ketika jumlah perkiraan jatuh di bawah minimum, aturan otomatis dipicu."
    },
    {
      question: "Aturan reordering: Min 10, Max 15. Forecast quantity -5. Berapa jumlah reorder?",
      question_en: "A product’s reordering rule is set for a minimum of 10 units, and a maximum of 15. If the forecasted quantity of the product is -5, what’s the amount to reorder?",
      options: ["20", "5", "10", "25"],
      options_en: ["20", "5", "10", "25"],
      correct: "20"
    }
  ],
  /* Inventory Materi 11 */
  inventory_materi11: [
    {
      question: "Apa 'Tanggal Kedatangan yang Diharapkan' jika lead time vendor 7 hari dan deadline 8 Juni?",
      question_en: "What’s the ‘Expected Arrival Date’ of a product with a vendor delivery lead time of 7 days, if the ‘Order Deadline’ is set to June 8th?",
      options: ["15 Juni", "1 Juni", "8 Juni", "16 Juni"],
      options_en: ["June 15th", "June 1st", "June 8th", "June 16th"],
      correct: "15 Juni"
    },
    {
      question: "Apa yang terjadi saat pengaturan 'Days to Purchase' adalah 3, dan RFQ dibuat hari ini?",
      question_en: "What happens when the “Days to Purchase” setting is set to three, and a request for quotation is generated *today* from a reordering rule?",
      options: ["Deadline Pesanan pada RFQ menunjukkan tiga hari dari hari ini", "Tanggal Pesanan pada penawaran menunjukkan tiga hari dari hari ini", "Deadline Vendor pada RFQ menunjukkan tiga hari dari hari ini", "Tanggal Kedatangan yang Diharapkan pada RFQ menunjukkan tiga hari dari hari ini"],
      options_en: ["The ‘Order Deadline’ on a request for quotation shows three days from today", "The ‘Order Date’ on a quotation shows three days from today", "The ‘Vendor Deadline’ on a request for quotation shows three days from today", "The ‘Expected Arrival Date’ on a request for quotation shows three days from today"],
      correct: "Deadline Pesanan pada RFQ menunjukkan tiga hari dari hari ini"
    },
    {
      question: "Peringatan 'Tanggal yang diminta terlalu cepat' pada pesanan penjualan didasarkan pada?",
      question_en: "What is the ‘Requested date is too soon’ warning on the sales order based on?",
      options: ["Lead Time Pelanggan, Vendor, dan Keamanan untuk Penjualan dan Pembelian", "Lead Time Vendor + Lead Time Keamanan untuk Pembelian", "Lead Time Pelanggan + Lead Time Keamanan untuk Penjualan", "Hanya Lead Time Pelanggan"],
      options_en: ["Customer Lead Time, Vendor Lead Time, and Security Lead Times for Sales and Purchase", "Vendor Lead Time + Security Lead Time for Purchase", "Customer Lead Time + Security Lead Time for Sales", "Customer Lead Time only"],
      correct: "Lead Time Pelanggan, Vendor, dan Keamanan untuk Penjualan dan Pembelian"
    }
  ],
  /* Inventory Materi 12 */
  inventory_materi12: [
    {
      question: "Di mana rute resupply dapat ditemukan setelah memilih 'Distribution center'?",
      question_en: "In the video, where can the resupply route be found after selecting 'Distribution center' in the 'Resupply From' field of the 'Warehouse Configuration' tab?",
      options: ["Halaman konfigurasi 'Pengaturan' > 'Gudang'", "Dashboard 'Tinjauan Gudang'", "Formulir produk, di tab 'Inventaris'", "Order Pengiriman"],
      options_en: ["‘Settings’ > ‘Warehouse’ configuration page", "‘Warehouse Overview’ dashboard", "Product form, in the 'Inventory' Tab", "‘Delivery order’"],
      correct: "Halaman konfigurasi 'Pengaturan' > 'Gudang'"
    },
    {
      question: "Pengaturan Inventaris mana yang diperlukan untuk menggunakan rute 'Resupply From'?",
      question_en: "Which Inventory settings are required to use the ‘Resupply From’ route?",
      options: ["'Rute Multi-Langkah'", "'Konfigurasi Gudang'", "'Lokasi Penyimpanan' dan 'Rute Multi-Langkah'", "'Resupply From', dengan 'Distribution center' dipilih"],
      options_en: ["‘Multi-Step Routes’", "‘Warehouse Configuration’", "‘Storage Locations’ and ‘Multi-Step Routes’", "‘Resupply From’, with the ‘Distribution center’ selected"],
      correct: "'Rute Multi-Langkah'"
    },
    {
      question: "Operasi apa yang dibuat Odoo untuk menyelesaikan proses resupply dari gudang lain?",
      question_en: "What operation(s) does Odoo create to complete the resupply from another warehouse process?",
      options: ["'Order Pengiriman' dari gudang, dan 'Penerimaan' untuk toko", "'Transfer Internal' dari gudang ke toko", "'Resupply Warehouse' dari gudang ke toko", "Operasi 'Transit antar gudang'"],
      options_en: ["‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop", "‘Internal Transfer’ from warehouse to shop", "‘Resupply Warehouse’ from warehouse to shop", "‘Interwarehouse transit’ operation"],
      correct: "'Order Pengiriman' dari gudang, dan 'Penerimaan' untuk toko"
    }
  ],
  /* Inventory Materi 13 */
  inventory_materi13: [
    {
      question: "Apa yang terjadi jika Anda mencoba memvalidasi resi tanpa memasukkan nomor lot?",
      question_en: "What happens if you try to validate a receipt without entering lot numbers?",
      options: ["Odoo menampilkan pesan error", "Odoo otomatis menugaskan mereka", "Tidak ada yang terjadi", "Pesanan dibatalkan"],
      options_en: ["Odoo shows an error message", "Odoo automatically assigns them", "Nothing happens", "The order is cancelled"],
      correct: "Odoo menampilkan pesan error"
    },
    {
      question: "Apa kegunaan laporan traceability?",
      question_en: "What is a traceability report used for?",
      options: ["Melihat pergerakan lot dan serial", "Menghitung pajak", "Melacak penjualan saja", "Mengatur kategori inventaris"],
      options_en: ["Viewing the movement of lots and serials", "Calculating taxes", "Tracking sales only", "Setting up inventory categories"],
      correct: "Melihat pergerakan lot dan serial"
    },
    {
      question: "Tipe produk apa yang harus dimiliki item untuk mengaktifkan pelacakan lot?",
      question_en: "What product type must an item be to enable lot or serial tracking",
      options: ["Barang (Storable Product)", "Virtual", "Konsumsi", "Jasa"],
      options_en: ["Goods", "Virtual", "Consumable", "Service"],
      correct: "Barang (Storable Product)"
    }
  ],
  /* Inventory Materi 14 */
  inventory_materi14: [
    {
      question: "Pengaturan Inventaris mana yang *harus* diaktifkan untuk menggunakan strategi FEFO?",
      question_en: "Which Inventory settings *must* be activated in order to use the FEFO removal strategy?",
      options: ["Nomor Lot & Serial, Tanggal Kedaluwarsa, Lokasi Penyimpanan, dan Rute Multi-Langkah.", "Barcode Scanner.", "Paket, Batch Transfers, dan Wave Transfers.", "FEFO otomatis diaktifkan di setiap database Odoo."],
      options_en: ["Lots & Serial Numbers, Expiration Dates, Storage Locations, and Multi-Step Routes.", "Barcode Scanner.", "Packages, Batch Transfers, and Wave Transfers.", "FEFO is automatically activated in every Odoo database."],
      correct: "Nomor Lot & Serial, Tanggal Kedaluwarsa, Lokasi Penyimpanan, dan Rute Multi-Langkah."
    },
    {
      question: "Kapan Anda bisa mengatur tanggal kedaluwarsa untuk lot produk baru?",
      question_en: "When can you set an expiry date for new lots of products entering the inventory?",
      options: ["Langsung pada penerimaan produk, jika fitur Tanggal Kedaluwarsa diaktifkan.", "Setelah lot dalam stok, di tab Tanggal formulir lot.", "A & B.", "Odoo tidak mengizinkan tanggal kedaluwarsa."],
      options_en: ["Directly at the reception of the products, when organizing lots on the Detailed Operations window, but *only* if the Expiration Dates feature is activated.", "Once lots are in-stock, you can add an expiry date in the Date tab of each lot form.", "A & B.", "Odoo does *not* allow expiration dates to be set on products."],
      correct: "Langsung pada penerimaan produk, jika fitur Tanggal Kedaluwarsa diaktifkan."
    },
    {
      question: "Di mana lagi Anda bisa memasukkan Tanggal Kedaluwarsa setelah menerima produk?",
      question_en: "Where else can you enter the Expiration Date after receiving the products?",
      options: ["Pada formulir Lot Pembelian.", "Pada halaman Pergerakan Inventaris.", "Pada formulir PO, dengan mengklik 'Edit'.", "Ini bukan fitur di Odoo."],
      options_en: ["On the Purchase Lot form.", "On the Inventory Moves page.", "On the Purchase Order form, by clicking “Edit.”", "This is *not* a feature in Odoo."],
      correct: "Pada formulir Lot Pembelian."
    }
  ],
  /* Inventory Materi 15 */
  inventory_materi15: [
    {
      question: "Pengaturan apa yang perlu saya aktifkan sebelum saya bisa mengaktifkan tanggal kedaluwarsa?",
      question_en: "What setting do I need to enable for Inventory before I can enable expiration dates?",
      options: ["Nomor Lot & Serial", "Barcode Scanner", "Lokasi Penyimpanan", "Paket Produk"],
      options_en: ["Lots & Serial Numbers", "Barcode Scanner", "Storage Locations", "Product Packages"],
      correct: "Nomor Lot & Serial"
    },
    {
      question: "Jika saya mengubah Tanggal Kedaluwarsa, apa yang terjadi pada Tanggal Penghapusan?",
      question_en: "If I change the Expiration Date for a lot or product, what will happen to the Removal Date?",
      options: ["Dihitung ulang berdasarkan konfigurasinya di formulir produk.", "Tetap sama.", "Tanggal penghapusan menjadi segera.", "Saya harus mengubah tanggal penghapusan secara manual."],
      options_en: ["It is recalculated based on its configuration in the product form.", "It remains the same as", "The removal date becomes immediate", "I have to manually change the removal date as well."],
      correct: "Dihitung ulang berdasarkan konfigurasinya di formulir produk."
    },
    {
      question: "Di mana saya bisa mengatur database untuk menggunakan strategi FEFO?",
      question_en: "Where can I set up the database to use the FEFO removal strategy?",
      options: ["Baik B & C (Kategori Produk & Lokasi)", "Pada formulir produk", "Pada tipe produk", "Pada lokasi penyimpanan"],
      options_en: ["Both B & C", "On the product form", "On the product type", "On the storage location"],
      correct: "Baik B & C (Kategori Produk & Lokasi)"
    }
  ],
  /* Inventory Materi 16 */
  inventory_materi16: [
    {
      question: "Apa yang perlu diaktifkan untuk menggunakan aturan Push & Pull?",
      question_en: "What needs to be enabled in order to use Push & Pull rules?",
      options: ["Rute Multi-Langkah", "Tidak ada yang perlu diaktifkan", "Mode Pengembang", "Kategori Penyimpanan"],
      options_en: ["Multi-Step Routes", "Nothing needs to be enabled", "Developer mode", "Storage categories"],
      correct: "Rute Multi-Langkah"
    },
    {
      question: "Selain 'Ambil dari stok', apa metode pasokan lain yang bisa digunakan?",
      question_en: "Apart from ‘Take from stock’ and ‘Take from stock, if…’, what is the other supply method that can be used with routes?",
      options: ["Picu aturan lain", "Ambil dari lokasi pelanggan", "Ambil dari lokasi virtual", "Picu aturan sebelumnya"],
      options_en: ["Trigger another rule", "Take from a customer location", "Take from a virtual location", "Trigger the previous rule"],
      correct: "Picu aturan lain"
    },
    {
      question: "Untuk memenuhi order penjualan, jenis tindakan apa yang dipicu?",
      question_en: "To fulfill a sales order, which type of action is triggered?",
      options: ["Aturan Pull, karena produk berasal dari lokasi internal", "Aturan Push, karena produk pergi ke lokasi eksternal", "Aturan Push dan Pull", "Tergantung pengaturan rute"],
      options_en: ["A Pull rule, because the product comes from an internal location", "A Push rule, because the product goes to an external location", "A Push *and* a Pull rule, because a Push rule *can’t* work without a Pull rule (and vice versa)", "It depends on how the route is set up, and on the number of rules coming into action during the process"],
      correct: "Aturan Pull, karena produk berasal dari lokasi internal"
    }
  ],
  /* Inventory Materi 17 */
  inventory_materi17: [
    {
      question: "Apa tujuan aturan putaway di Odoo?",
      question_en: "What is the purpose of a putaway rule in Odoo?",
      options: ["Untuk secara otomatis menetapkan produk masuk ke lokasi penyimpanan tertentu", "Untuk melacak kehadiran karyawan", "Untuk mengelola faktur pelanggan", "Untuk menghasilkan laporan penjualan"],
      options_en: ["To automatically assign incoming products to specific storage locations", "To track employee attendance", "To manage customer invoices", "To generate sales reports"],
      correct: "Untuk secara otomatis menetapkan produk masuk ke lokasi penyimpanan tertentu"
    },
    {
      question: "Saat membuat aturan putaway, bidang mana yang menentukan produk tertentu?",
      question_en: "When creating a putaway rule, which field determines the specific product the rule applies to?",
      options: ["A dan C (Kategori & Produk)", "Kategori Produk", "Vendor", "Produk"],
      options_en: ["A and C", "Product Category", "Vendor", "Product"],
      correct: "A dan C (Kategori & Produk)"
    },
    {
      question: "Apa lokasi induk untuk 'WH/Stock/Music'?",
      question_en: "What is the parent location for the ‘WH/Stock/Music’ storage location in the example?",
      options: ["WH/Stock", "WH", "WH/Main", "WH/Storage"],
      options_en: ["WH/Stock", "WH", "WH/Main", "WH/Storage"],
      correct: "WH/Stock"
    }
  ],
  /* Inventory Materi 18 */
  inventory_materi18: [
    {
      question: "Apa yang ditentukan oleh 'Having Category' pada aturan putaway?",
      question_en: "What does the “Having Category” on a putaway rule determine?",
      options: ["'Having Category' menggunakan Kategori Produk yang dipilih untuk menentukan di mana produk diletakkan", "'Having Category' menentukan lokasi berdasarkan varian", "Menggunakan Kategori Penyimpanan", "Menentukan lokasi berdasarkan rute"],
      options_en: ["The “Having Category” uses the chosen Product Category to determine where a product is put away", "The “Having Category” determines where a product is put away, based on its variant", "The “Having Category” uses the chosen Storage Category to determine where a product is put away, based on location capacity", "The “Having Category” determines where a product is put away, based on its route"],
      correct: "'Having Category' menggunakan Kategori Produk yang dipilih untuk menentukan di mana produk diletakkan"
    },
    {
      question: "Jika Kapasitas per Produk 100, On-hand A=75, B=0. Diterima 50. Apa yang terjadi?",
      question_en: "If the ‘Capacity by Product’ is set to ‘100’ on two different storage locations for a putaway rule, and the on-hand quantity is ‘75’ at Location A, and ‘0’ at Location B, what occurs when 50 units of that product is received from a vendor?",
      options: ["25 unit disimpan di Lokasi A, dan 25 unit disimpan di Lokasi B", "0 di A, 50 di B", "Tidak ada yang disimpan", "Odoo tidak bisa membatasi kapasitas"],
      options_en: ["25 units are stored in Location A, and 25 units are stored in Location B", "0 units are stored in Location A, and 50 units are stored in Location B", "No units of the product will be stored in either Location (A/B) because exactly 100 units have to be received in order to store it", "Odoo doesn’t have the ability to set limits on product capacity by location"],
      correct: "25 unit disimpan di Lokasi A, dan 25 unit disimpan di Lokasi B"
    },
    {
      question: "Di mana saya bisa memeriksa lokasi penyimpanan yang dituju oleh aturan putaway pada resi?",
      question_en: "Where can I check the intended storage location determined by the putaway rules and storage category, on a receipt?",
      options: ["Baik B & C", "Ditampilkan di bidang Lokasi Tujuan", "Klik ikon hamburger untuk membuka pop-up 'Stock move'", "Di tombol pintar Operasi Rinci"],
      options_en: ["Both B & C", "It’s displayed in the Destination Location field", "Clicking the hamburger/list icon to open the ‘Stock move’ pop-up window", "In the Detailed Operations smart button"],
      correct: "Baik B & C"
    }
  ],
  /* Inventory Materi 19 */
  inventory_materi19: [
    {
      question: "Pengaturan Inventaris mana yang perlu diaktifkan untuk menggunakan rute 'Cross-Dock'?",
      question_en: "Which Inventory app setting needs to be enabled to use the ‘Cross-Dock’ route?",
      options: ["'Rute Multi-Langkah'", "'Cross-Docking'", "'Rute Push/Pull'", "Tersedia secara default"],
      options_en: ["‘Multi-Step Routes’", "‘Cross-Docking’", "‘Push/Pull Routes’", "The ‘Cross-Dock’ route is available, by default"],
      correct: "'Rute Multi-Langkah'"
    },
    {
      question: "Rute mana yang harus diaktifkan pada tab 'Inventaris' produk untuk Cross-Dock?",
      question_en: "To use the ‘Cross-Dock’ route for a product, which routes must be enabled on the product’s ‘Inventory’ tab?",
      options: ["'Beli' dan 'Cross-Dock'", "'Manufaktur' dan 'Jual'", "'Jual' dan 'Cross-Dock'", "'Dropship' dan 'Jual'"],
      options_en: ["‘Buy’ and ‘Cross-Dock’", "‘Manufacture’ and ‘Sell’", "‘Sell’ and ‘Cross-Dock’", "‘Dropship’ and ‘Sell’"],
      correct: "'Beli' dan 'Cross-Dock'"
    },
    {
      question: "Berapa banyak transfer yang dibuat setelah mengonfirmasi SO dengan rute 'Cross-Dock'?",
      question_en: "How many transfers are created after confirming a sales order for a product that uses the ‘Cross-Dock’ route?",
      options: ["Dua", "Satu", "Tiga", "Empat"],
      options_en: ["Two", "One", "Three", "Four"],
      correct: "Dua"
    }
  ],
  /* Inventory Materi 20 */
  inventory_materi20: [
    {
      question: "Saat menerima stok konsinyasi, apa yang harus Anda buat?",
      question_en: "When receiving consignment stock from a vendor, which of the following should you create?",
      options: ["Penerimaan (Receipt)", "Order Pembelian", "RFQ", "Semua di atas"],
      options_en: ["Receipt", "Purchase Order", "Request for Quotation (RfQ)", "All of the above"],
      correct: "Penerimaan (Receipt)"
    },
    {
      question: "Di mana Anda menetapkan Pemilik produk konsinyasi?",
      question_en: "When creating a receipt for consignment stock, where do you assign the Owner of the products in your warehouse?",
      options: ["Di area 'Tetapkan Pemilik', yang terletak di resi gudang", "Langsung dari halaman pengaturan gudang", "Anda tidak dapat menetapkan pemilik", "A & B"],
      options_en: ["In the ‘Assign Owner’ area, located on the warehouse receipt", "Directly from the warehouse settings page", "You can’t assign an owner for consignment stock", "A & B"],
      correct: "Di area 'Tetapkan Pemilik', yang terletak di resi gudang"
    },
    {
      question: "Pada halaman 'Penilaian Stok', apa yang ditampilkan di kolom 'Total Nilai' produk konsinyasi?",
      question_en: "On the “Stock Valuation” page, what is displayed in the “Total Value” column for consignment products?",
      options: ["'0.00'", "Nilai persis kuantitas", "Setengah nilai", "Dua kali nilai"],
      options_en: ["‘0.00’", "The exact value of the quantity of the product on hand", "Half of the exact value of the quantity of the product on hand", "Twice the exact value of the quantity of the product on hand"],
      correct: "'0.00'"
    }
  ],
  /* Inventory Materi 21 */
  inventory_materi21: [
   {
      question: "Di mana tombol 'Peta' untuk melihat tujuan pengiriman?",
      question_en: "Where can I find the ‘Map’ button for viewing delivery destinations on a map when planning batches?",
      options: ["Pada transfer batch dengan mengklik ikon 'gear' untuk menampilkan opsi 'Map'", "Inventaris > Konfigurasi > Manajemen Pengiriman", "Pada transfer batch saat status 'Dalam Proses'", "Pada transfer wave"],
      options_en: ["On a batch transfer by clicking the ‘gear’ icon to show the ‘Map’ option", "Inventory > Configuration > Dispatch Management", "On a batch transfer when the status is set to ‘In Progress’", "On a wave transfer in the ‘Operations’ tab"],
      correct: "Pada transfer batch dengan mengklik ikon 'gear' untuk menampilkan opsi 'Map'"
    },
    {
      question: "Apa yang diperlukan untuk mengonfigurasi pengaturan lokasi dok?",
      question_en: "What is required to configure the settings for a dock location in Odoo?",
      options: ["Pergi ke lokasi dok dari 'Konfigurasi' > 'Lokasi', dan centang 'Is a Dock Location'", "Tentukan satu truk pengiriman per dok", "Pada picking, atur 'Lokasi Tujuan' ke dok", "Pada batch, atur 'Lokasi Dok'"],
      options_en: ["Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox", "Designate one delivery truck per dock", "On the picking, set the ‘Destination Location’ to the dock location", "On a batch, set the ‘Dock Location’"],
      correct: "Pergi ke lokasi dok dari 'Konfigurasi' > 'Lokasi', dan centang 'Is a Dock Location'"
    },
    {
      question: "Mengapa harus mengatur 'Dock B' sebagai lokasi tujuan?",
      question_en: "In the video, why did I have to set ‘Dock B’ as the destination location in the ‘To’ field?",
      options: ["Karena 'Output' adalah lokasi default, dan tidak menentukan lokasi dok yang tepat", "Untuk menghindari produk dikirim ke gudang yang salah", "Karena Dock B adalah satu-satunya lokasi yang tersedia", "Untuk memastikan proses picking selesai otomatis"],
      options_en: ["Because ‘Output’ is the default location, and does not specify the exact dock location for our orders", "To avoid products being sent to the wrong warehouse", "Because Dock B is the only available location for these products", "To make sure the picking process is completed automatically"],
      correct: "Karena 'Output' adalah lokasi default, dan tidak menentukan lokasi dok yang tepat"
    }
  ],"""

file_path = "/Users/mac/pembelajar-belajar-odoo/assets/js/quiz-bank.js"

with open(file_path, 'r') as f:
    content = f.read()

# Manual regex replacement to avoid nested brace complexity
import re

# We identify the start of Inventory section
start_marker = "/* =====================================================\n     INVENTORY TRACK"
end_marker = "}" # The very last brace of the file

if start_marker in content:
    # Split content
    parts = content.split(start_marker)
    pre_content = parts[0]
    
    # We want to keep everything before Inventory, and append our new content + closing brace
    new_file_content = pre_content + start_marker + "\n     ===================================================== */\n" + final_js_output + "\n}"
    
    with open(file_path, 'w') as f:
        f.write(new_file_content)
    print("Successfully updated quiz-bank.js")
else:
    print("Could not find INVENTORY TRACK marker, appending...")
    # Fallback append
    content = content.rstrip().rstrip('}') + "\n\n" + start_marker + "\n     ===================================================== */\n" + final_js_output + "\n}"
    with open(file_path, 'w') as f:
        f.write(content)
    print("Appended new content")
