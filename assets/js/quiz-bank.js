/* =========================================================
   QUIZ BANK
   PembelajarBelajar LMS
   ========================================================= */

window.QUIZ_BANK = {
  /* =====================================================
     MATERI 1 — MEMULAI ODOO
     ===================================================== */
  materi1: [
    {
      question:
        "Dalam berapa jam database Odoo harus diaktivasi agar mendapatkan masa trial penuh 15 hari?",
      options: [
        "Empat jam",
        "Lima jam",
        "Nol jam, database otomatis aktif",
        "Tiga jam"
      ],
      correct: "Tiga jam"
    },
    {
      question:
        "Apa yang terjadi ketika sebuah user dibuat di database Odoo?",
      options: [
        "Password otomatis dibuat dan dikirim ke email",
        "Email dikirim berisi tautan untuk membuat password",
        "Password langsung muncul di layar",
        "User tidak bisa dibuat dari dashboard utama"
      ],
      correct: "Email dikirim berisi tautan untuk membuat password"
    },
    {
      question:
        "Pernyataan manakah yang benar tentang instalasi aplikasi baru di Odoo?",
      options: [
        "Hanya account manager yang dapat menginstal aplikasi",
        "Semua user di database dapat menginstal aplikasi",
        "Aplikasi diinstal dari menu Settings",
        "Administrator menginstal aplikasi dari menu Apps"
      ],
      correct: "Administrator menginstal aplikasi dari menu Apps"
    }
  ],

  /* =====================================================
     MATERI 2 — ANTARMUKA & NAVIGASI ODOO
     ===================================================== */
  materi2: [
    {
      question: "Dimana otentikasi dua faktor (2FA) dapat diaktifkan?",
      options: [
        "Di \"My profile\" di bawah tab \"Preferences\"",
        "Di \"My profile\" di bawah tab \"Account Security\"",
        "Pergi ke Configuration > Security",
        "Odoo tidak menawarkan otentikasi dua faktor"
      ],
      correct: "Di \"My profile\" di bawah tab \"Account Security\""
    },
    {
      question: "Apa arti titik merah di pojok kanan atas dashboard Odoo?",
      options: [
        "Fitur link/unlink untuk bekerja offline",
        "Fitur check-in untuk reservasi di aplikasi POS",
        "Fitur pelacakan waktu (attendance) untuk check in/out",
        "Fitur perekaman layar (screen recording)"
      ],
      correct: "Fitur pelacakan waktu (attendance) untuk check in/out"
    },
    {
      question: "Di Odoo, apa saja jenis 'Views' (Tampilan) yang tersedia untuk melihat record?",
      options: [
        "List, Kanban, Calendar, Pivot, Graph, Activity",
        "List, Kanban, Color Coded, Graph, Activity",
        "Kanban, Pivot, Graph, Word Cloud, Activity",
        "List, Kanban, Calendar, Pivot, Activity, By Shape"
      ],
      correct: "List, Kanban, Calendar, Pivot, Graph, Activity"
    }
  ],

  /* =====================================================
     MATERI 3 — SINKRONISASI GOOGLE CALENDAR
     ===================================================== */
  materi3: [
    {
      question: "Dua kredensial apa yang perlu kita salin dari Google Console dan dimasukkan ke database Odoo untuk menyelesaikan sinkronisasi?",
      options: [
        "Client ID dan API Key",
        "Client ID dan Client Secret",
        "Client Secret dan URI",
        "URI dan API Key"
      ],
      correct: "Client ID dan Client Secret"
    },
    {
      question: "Agar bisa memilih Tipe User 'Internal', jenis akun Gmail apa yang harus kita gunakan?",
      options: [
        "Semua jenis akun Gmail bisa jadi user Internal",
        "Hanya akun Gmail pribadi yang bisa jadi user Internal",
        "Hanya akun Google Workspace (Bisnis/Sekolah) yang bisa jadi user Internal",
        "Hanya akun pembuat project yang bisa jadi user Internal"
      ],
      correct: "Hanya akun Google Workspace (Bisnis/Sekolah) yang bisa jadi user Internal"
    },
    {
      question: "Apa fungsi dari 'Authorized Redirect URIs' yang kita isi?",
      options: [
        "Mengarahkan user yang tidak diinginkan keluar dari database",
        "Membuat jalur balik ke Google untuk menghubungkan Odoo dengan login OAuth yang baru dibuat",
        "Mengalihkan user ke Odoo saat mereka berada di Google Developer Console",
        "Otomatis membuat Client ID saat user login"
      ],
      correct: "Membuat jalur balik ke Google untuk menghubungkan Odoo dengan login OAuth yang baru dibuat"
    },
    {
      question: "Di halaman mana kita bisa menemukan tombol 'Publish App' untuk project ini?",
      options: [
        "Di halaman utama 'Overview'",
        "Di halaman 'Branding'",
        "Di halaman 'Data Access'",
        "Di halaman 'Audience'"
      ],
      correct: "Di halaman 'Audience'"
    }
  ],

  /* =====================================================
     MATERI 4 — SINKRONISASI OUTLOOK (AZURE)
     ===================================================== */
  /* =====================================================
     MATERI 4 — FILTER & TAMPILAN (REVISI)
     ===================================================== */
  materi4: [
    {
      question: "Bagaimana cara pengguna memfilter penawaran (quotations) dari bulan sebelumnya?",
      options: [
        "Dengan mengganti salesperson",
        "Dengan memilih filter Kanban",
        "Dengan memilih Create Date > Bulan Sebelumnya (Previous Month)",
        "Dengan menerapkan tampilan default"
      ],
      correct: "Dengan memilih Create Date > Bulan Sebelumnya (Previous Month)"
    },
    {
      question: "Setelah menggeser (drag-and-drop) pesanan penjualan ke salesperson lain di tampilan Kanban, di mana pengguna dapat mengonfirmasi perubahan tersebut di dalam dokumen?",
      options: [
        "Tab Settings",
        "Menu Filters",
        "Tab Order Lines",
        "Tab Other Info"
      ],
      correct: "Tab Other Info"
    },
    {
      question: "Apa yang dimungkinkan oleh opsi 'Add Custom Filters'?",
      options: [
        "Mengekspor filter ke dalam file",
        "Mengedit hak akses pengguna",
        "Memfilter menggunakan 'field' apa pun di Odoo, seperti Abandoned Carts atau tanggal spesifik",
        "Membagikan filter ke luar sistem Odoo"
      ],
      correct: "Memfilter menggunakan 'field' apa pun di Odoo, seperti Abandoned Carts atau tanggal spesifik"
    }
  ],
  /* =====================================================
     MATERI 5 — MULTI-COMPANY
     ===================================================== */
  /* =====================================================
     MATERI 5 — MULTI-COMPANY (REVISI SESUAI REQUEST)
     ===================================================== */
  materi5: [
    {
      question: "Kapan membuat perusahaan tambahan (Multi-Company) adalah pilihan terbaik?",
      options: [
        "Ketika entitas baru menggunakan daftar harga (pricelist) yang berbeda",
        "Ketika unit baru memiliki Tax ID (NPWP) sendiri atau pelaporan pajak yang terpisah",
        "Ketika saya hanya perlu membatasi visibilitas dokumen",
        "Ketika mata uangnya tetap sama"
      ],
      correct: "Ketika unit baru memiliki Tax ID (NPWP) sendiri atau pelaporan pajak yang terpisah"
    },
    {
      question: "Dua kolom mana yang WAJIB diisi dengan benar sebelum perusahaan baru memposting transaksi pertamanya (karena mengubahnya nanti bisa merusak buku besar/ledger)?",
      options: [
        "Taxes (Pajak) dan Company",
        "Country (Negara) dan Currency (Mata Uang)",
        "Country (Negara) dan Fiscal Localization",
        "Chart of Accounts dan Currency"
      ],
      correct: "Country (Negara) dan Currency (Mata Uang)"
    },
    {
      question: "Apa yang bisa dilakukan fitur Multi-Company yang TIDAK bisa dilakukan oleh hak akses, fitur branches, atau database terpisah?",
      options: [
        "Membatasi akses karyawan ke dokumen tertentu",
        "Berbagi sumber daya seperti produk, vendor, dan pelanggan",
        "Menghindari pajak karena Odoo akan melakukannya untuk saya",
        "Mengelola beberapa entitas yang tidak berbagi buku besar (ledger) yang sama tetapi tetap bisa melakukan pelaporan konsolidasi"
      ],
      correct: "Mengelola beberapa entitas yang tidak berbagi buku besar (ledger) yang sama tetapi tetap bisa melakukan pelaporan konsolidasi"
    }
  ],
  /* =====================================================
     MATERI 6 — CHATTER & ACTIVITIES
     ===================================================== */
  /* =====================================================
     MATERI 6 — TRANSAKSI ANTAR-PERUSAHAAN
     ===================================================== */
  materi6: [
    {
      question: "Saya mulai dengan membuat dan memposting faktur (invoice) secara manual di perusahaan penjual (Minji Dimsum) tanpa mengonfirmasi pesanan penjualan (Sales Order) terlebih dahulu. Dokumen komersial apa yang akan dibuat otomatis oleh Odoo di perusahaan pembeli (Pembelajar Belajar)?",
      options: [
        "Tagihan vendor (vendor bill) yang terhubung",
        "Tagihan vendor dan pesanan pembelian (purchase order) yang terhubung",
        "Penawaran (quotation) yang terhubung",
        "Tidak ada dokumen komersial"
      ],
      correct: "Tidak ada dokumen komersial"
    },
    {
      question: "Manakah pernyataan yang BENAR mengenai interaksi tagihan (bills) dan faktur (invoices) dalam alur antar-perusahaan Odoo?",
      options: [
        "Mengonfirmasi tagihan vendor di pembeli secara otomatis membuat faktur yang sesuai di penjual",
        "Mengonfirmasi tagihan vendor di pembeli TIDAK membuat dokumen apa pun di penjual; penjual harus menerbitkan faktur terlebih dahulu",
        "Tagihan dan faktur dibuat secara bersamaan, terlepas dari sisi mana yang memulai transaksi",
        "Tagihan pembeli hanya akan membuat faktur penjual jika 'Create Purchase Orders' dinonaktifkan"
      ],
      correct: "Mengonfirmasi tagihan vendor di pembeli TIDAK membuat dokumen apa pun di penjual; penjual harus menerbitkan faktur terlebih dahulu"
    },
    {
      question: "Bagaimana cara memastikan penawaran harga (quotation) dari Minji Dimsum diterbitkan dalam mata uang IDR saat menjual ke Pembelajar Belajar?",
      options: [
        "Menetapkan daftar harga (pricelist) IDR milik Minji Dimsum ke data kontak (partner record) Pembelajar Belajar",
        "Mengatur mata uang Jurnal Pembelian ke IDR",
        "Mengubah mata uang default perusahaan ke IDR",
        "Memetakan 'IDR ke USD' dalam posisi fiskal sehingga Odoo mengonversi pada faktur"
      ],
      correct: "Menetapkan daftar harga (pricelist) IDR milik Minji Dimsum ke data kontak (partner record) Pembelajar Belajar"
    }
  ],

  /* =====================================================
     MODULE 7 — MEETING SCHEDULING (CALENDAR)
     ===================================================== */
  materi7: [
    {
      question: "Di mana meeting dapat dijadwalkan di Odoo selain melalui aplikasi Kalender?",
      options: [
        "Hanya dari Dashboard",
        "Dari bagian Chatter pada sebuah record",
        "Dari aplikasi Email",
        "Hanya melalui modul Kontak"
      ],
      correct: "Dari bagian Chatter pada sebuah record"
    },
    {
      question: "Manakah dari berikut ini opsi privasi yang tersedia untuk meeting di Odoo?",
      options: [
        "Rahasia, Dibagikan, Dibatasi",
        "Khusus Tim, Departemen, Global",
        "Tersembunyi, Terlihat, Undangan saja",
        "Publik, Privat, Khusus Pengguna Internal"
      ],
      correct: "Publik, Privat, Khusus Pengguna Internal"
    },
    {
      question: "Setelah meeting disimpan, di mana meeting tersebut dapat dilihat dari dalam record CRM?",
      options: [
        "Pada tombol pintar Next Meeting dan Planned Activities di Chatter",
        "Hanya di aplikasi Kalender utama",
        "Di dalam menu Pengaturan aplikasi CRM",
        "Hanya di layar Dashboard"
      ],
      correct: "Pada tombol pintar Next Meeting dan Planned Activities di Chatter"
    }
  ],

  /* =====================================================
     MODULE 8 — SCHEDULE ACTIVITIES
     ===================================================== */
  materi8: [
    {
      question: "Ikon Activities hijau pada record menandakan apa?",
      options: [
        "Kegiatan terlewat (Overdue)",
        "Tidak ada kegiatan terjadwal",
        "Kegiatan jatuh tempo hari ini",
        "Ada kegiatan mendatang yang terjadwal (Upcoming)"
      ],
      correct: "Ada kegiatan mendatang yang terjadwal (Upcoming)"
    },
    {
      question: "Apa arti angka di sebelah ikon jam di bilah navigasi kanan atas?",
      options: [
        "Total kegiatan yang telah selesai",
        "Jumlah kegiatan yang terlambat atau jatuh tempo hari ini",
        "Jumlah pengguna yang ditugaskan",
        "Total kegiatan yang dibuat minggu ini"
      ],
      correct: "Jumlah kegiatan yang terlambat atau jatuh tempo hari ini"
    },
    {
      question: "Di mana Anda dapat membuat, menandai selesai, atau mengedit kegiatan secara langsung dalam sebuah record?",
      options: [
        "Di menu Pengaturan",
        "Di Dashboard Pelaporan",
        "Di bagian Chatter",
        "Di Penukar Aplikasi"
      ],
      correct: "Di bagian Chatter"
    }
  ],
  /* =====================================================
     MODULE 9 — CONTACTS
     ===================================================== */
  materi9: [
    {
      question: "Tampilan Odoo manakah yang menampilkan foto kontak dan menawarkan tata letak yang lebih visual?",
      options: [
        "Tampilan Peta (Map View)",
        "Tampilan Kanban (Kanban View)",
        "Tampilan Pivot (Pivot View)",
        "Tampilan Aktivitas (Activity View)"
      ],
      correct: "Tampilan Kanban (Kanban View)"
    },
    {
      question: "Pada pop-up Buat Kontak, opsi apa saja yang dapat Anda pilih untuk tipe alamat?",
      options: [
        "Contact, Invoice Address, Delivery Address, Other",
        "Personal, Business, Residential, Mailing",
        "Primary, Secondary, Corporate, Private",
        "Customer, Vendor, Partner, Lead"
      ],
      correct: "Contact, Invoice Address, Delivery Address, Other"
    },
    {
      question: "Apa yang dapat dilihat atau diakses pengguna menggunakan Smart Buttons di bagian atas halaman kontak?",
      options: [
        "Pengaturan database",
        "Dokumen terkait dari aplikasi Odoo lainnya (Linked records)",
        "Kontak yang diarsipkan",
        "Catatan internal"
      ],
      correct: "Dokumen terkait dari aplikasi Odoo lainnya (Linked records)"
    }
  ],
  /* =====================================================
     MATERI 10 — IMPORT DAN EXPORT DATA
     ===================================================== */
  materi10: [
    {
      question: "Tombol apa yang muncul ketika Anda memilih beberapa record sekaligus di tampilan List?",
      options: [
        "Import",
        "Export",
        "Actions",
        "Edit"
      ],
      correct: "Actions"
    },
    {
      question: "Opsi mana yang harus dicentang agar file yang diekspor kompatibel untuk diimpor kembali?",
      options: [
        "Save Template",
        "I want to update data",
        "Import Mode",
        "Field Mapping"
      ],
      correct: "I want to update data"
    },
    {
      question: "Untuk mulai mengimpor data, di mana Anda harus mengklik?",
      options: [
        "Tombol Import di menu",
        "Ikon Gear → Import Records",
        "File → Upload",
        "Tools → Load File"
      ],
      correct: "Ikon Gear → Import Records"
    }
  ],
  /* =====================================================
     MATERI 11 — CHATTER BASIC
     ===================================================== */
  materi11: [
    {
      question: "Jenis informasi apa yang ditampilkan di Chatter?",
      options: [
        "Hanya pesan dan email",
        "Perubahan field, pesan, catatan, dan aktivitas terjadwal",
        "Hanya acara kalender",
        "Pengaturan dan konfigurasi sistem"
      ],
      correct: "Perubahan field, pesan, catatan, dan aktivitas terjadwal"
    },
    {
      question: "Apa yang terjadi ketika Anda mengklik ikon bintang pada entri Chatter?",
      options: [
        "Menandai pesan sebagai telah dibaca",
        "Mengirim pesan ke manajer Anda",
        "Menghapus entri Chatter",
        "Menyimpan entri tersebut ke folder Starred di aplikasi Discuss"
      ],
      correct: "Menyimpan entri tersebut ke folder Starred di aplikasi Discuss"
    },
    {
      question: "Apa yang terjadi ketika Anda mengklik Log setelah menulis catatan?",
      options: [
        "Catatan muncul di Chatter dan memberi notifikasi kepada pengguna internal yang di-tag",
        "Catatan dikirim sebagai email",
        "Record ditutup secara otomatis",
        "Catatan disembunyikan dari semua pengikut"
      ],
      correct: "Catatan muncul di Chatter dan memberi notifikasi kepada pengguna internal yang di-tag"
    }
  ],

  /* =====================================================
     MATERI 12 — CANNED RESPONSES
     ===================================================== */
  materi12: [
    {
      question: "Apa tujuan utama Canned Responses di Odoo?",
      options: [
        "Untuk mengotomatiskan kampanye pemasaran email",
        "Untuk melacak skor kepuasan pelanggan",
        "Untuk menghemat waktu dan memastikan komunikasi yang konsisten",
        "Untuk menetapkan tiket secara otomatis"
      ],
      correct: "Untuk menghemat waktu dan memastikan komunikasi yang konsisten"
    },
    {
      question: "Di mana Canned Responses dikelola di Odoo?",
      options: [
        "Aplikasi Helpdesk",
        "Aplikasi Discuss",
        "Aplikasi CRM",
        "Aplikasi Live Chat"
      ],
      correct: "Aplikasi Discuss"
    },
    {
      question: "Apa yang terjadi jika Anda membiarkan kolom \"Authorized Group\" kosong?",
      options: [
        "Itu muncul di semua aplikasi",
        "Itu akan dihapus secara otomatis",
        "Semua orang bisa menggunakannya",
        "Hanya Anda (pembuat) yang dapat menggunakan Canned Response tersebut"
      ],
      correct: "Hanya Anda (pembuat) yang dapat menggunakan Canned Response tersebut"
    }
  ],

  /* =====================================================
     MATERI 13 — DIGEST EMAILS
     ===================================================== */
  materi13: [
    {
      question: "Seberapa sering email digest dapat dikirim di Odoo?",
      options: [
        "Harian",
        "Mingguan",
        "Bulanan & Triwulanan",
        "Semua jawaban benar"
      ],
      correct: "Semua jawaban benar"
    },
    {
      question: "Bagaimana cara menambahkan KPI tambahan ke Digest Emails Anda?",
      options: [
        "Tambah dari menu 'Additional KPIs'",
        "Install aplikasi yang relevan untuk KPI tersebut (misal: eCommerce, CRM)",
        "Masuk mode developer, lalu pilih dari menu 'hidden KPIs'",
        "Anda tidak bisa menambah KPI tambahan"
      ],
      correct: "Install aplikasi yang relevan untuk KPI tersebut (misal: eCommerce, CRM)"
    },
    {
      question: "Manakah yang BUKAN merupakan opsi untuk mengirim digest emails?",
      options: [
        "Gunakan tombol 'Send Now' untuk mengirim segera",
        "Tunggu 'Next Send Date' agar terkirim otomatis",
        "Ubah frekuensi pengiriman agar dikirim lebih cepat atau lambat",
        "Gunakan tombol 'Schedule' untuk menjadwalkan ke jam tertentu di masa depan secara manual"
      ],
      correct: "Gunakan tombol 'Schedule' untuk menjadwalkan ke jam tertentu di masa depan secara manual"
    }
  ],

  /* =====================================================
     MATERI 14 — CUSTOM DIGEST (STUDIO)
     ===================================================== */
  materi14: [
    {
      question: "Dua field apa yang perlu Anda buat di Odoo Studio untuk menambahkan KPI kustom ke digest email?",
      options: [
        "A text field and a date field",
        "A checkbox field and an integer field",
        "A selection field and a monetary field",
        "An email and checkbox field"
      ],
      correct: "A checkbox field and an integer field"
    },
    {
      question: "Ke mana Anda harus pergi untuk memasukkan kode kustom ke dalam field Odoo Studio?",
      options: [
        "Technical > Models > select the field",
        "Technical > Fields > select the field",
        "Technical > Codebox > select the field",
        "Technical > Database > select the field"
      ],
      correct: "Technical > Models > select the field"
    },
    {
      question: "Di mana Anda mengonfigurasi penerima (recipients) untuk digest emails?",
      options: [
        "In the ‘General Settings’",
        "In the ‘User Preferences’",
        "In the ‘Digest Settings’",
        "In the ‘Recipients’ tab of the digest email form"
      ],
      correct: "In the ‘Recipients’ tab of the digest email form"
    }
  ],

  /* =====================================================
     MATERI 15 — ACCESS RIGHTS
     ===================================================== */
  materi15: [
    {
      question: "Mengapa sebaiknya mengatur hak akses grup untuk karyawan baru daripada mengatur izin per individu?",
      options: [
        "Ini memungkinkan karyawan baru memiliki kontrol penuh atas aplikasi CRM",
        "Lebih cepat mengatur izin untuk setiap pengguna satu per satu",
        "Grup akan tetap ada meskipun penggunanya berganti, dan lebih mudah mengelola banyak pengguna dengan izin yang sama",
        "Ini mencegah karyawan baru melihat apa yang terjadi di aplikasi CRM"
      ],
      correct: "Grup akan tetap ada meskipun penggunanya berganti, dan lebih mudah mengelola banyak pengguna dengan izin yang sama"
    },
    {
      question: "Apa arti pengaturan izin 'Read Access' (Baca) pada hak akses tertentu bagi pengguna dalam grup tersebut?",
      options: [
        "Mereka bisa mengedit dan menghapus probabilitas lead",
        "Mereka bisa membuat probabilitas lead baru",
        "Mereka tidak memiliki akses ke probabilitas lead",
        "Mereka hanya bisa melihat (view) probabilitas lead"
      ],
      correct: "Mereka hanya bisa melihat (view) probabilitas lead"
    },
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan hak akses (access right) standar?",
      options: [
        "Read (Baca)",
        "Write (Tulis/Edit)",
        "Create (Buat)",
        "Execute (Jalankan)"
      ],
      correct: "Execute (Jalankan)"
    }
  ]
};