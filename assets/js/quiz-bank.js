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
        "Field teks dan field tanggal",
        "Field checkbox dan field integer",
        "Field selection dan field monetary",
        "Field email dan field checkbox"
      ],
      correct: "Field checkbox dan field integer"
    },
    {
      question: "Ke mana Anda harus pergi untuk memasukkan kode kustom ke dalam field Odoo Studio?",
      options: [
        "Technical > Models > pilih field tersebut",
        "Technical > Fields > pilih field tersebut",
        "Technical > Codebox > pilih field tersebut",
        "Technical > Database > pilih field tersebut"
      ],
      correct: "Technical > Models > pilih field tersebut"
    },
    {
      question: "Di mana Anda mengonfigurasi penerima (recipients) untuk digest emails?",
      options: [
        "Di 'General Settings'",
        "Di 'User Preferences'",
        "Di 'Digest Settings'",
        "Di tab 'Recipients' pada formulir digest email"
      ],
      correct: "Di tab 'Recipients' pada formulir digest email"
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
  ],
  materi16: [
    {
      question: "Bagaimana Odoo menampilkan tautan (link) yang dibagikan dalam pesan chat?",
      options: [
        "Hanya sebagai teks biasa",
        "Sebagai pratinjau yang dapat diklik (Clickable Preview)",
        "Sebagai kode QR",
        "Sebagai lampiran file"
      ],
      correct: "Sebagai pratinjau yang dapat diklik (Clickable Preview)"
    },
    {
      question: "Apa yang terjadi saat Anda melakukan 'Unpin' pada sebuah percakapan di Odoo Discuss?",
      options: [
        "Menghapus riwayat percakapan",
        "Mengarsipkan percakapan secara permanen",
        "Mengirim notifikasi ke pengguna lain",
        "Menyembunyikan percakapan dari tampilan sampai Anda mencarinya kembali"
      ],
      correct: "Menyembunyikan percakapan dari tampilan sampai Anda mencarinya kembali"
    },
    {
      question: "Ikon apa di pojok kanan atas chat yang memungkinkan Anda mengatur pengaturan notifikasi?",
      options: [
        "Kaca Pembesar",
        "Pin",
        "Lonceng (Bell)",
        "Klip Kertas"
      ],
      correct: "Lonceng (Bell)"
    }
  ],
  materi17: [
    {
      question: "Bagaimana cara Anda mengundang seseorang dari luar perusahaan ke dalam grup chat?",
      options: [
        "Tambahkan mereka melalui modul CRM",
        "Buat tautan publik (public link) ke chat tersebut",
        "Minta admin untuk membuatkan akun mereka terlebih dahulu",
        "Gunakan opsi 'Start a Meeting' saja"
      ],
      correct: "Buat tautan publik (public link) ke chat tersebut"
    },
    {
      question: "Saat membuka aplikasi Discuss, bagian mana yang harus Anda periksa untuk meninjau semua pembaruan (updates) terbaru pada record yang melibatkan Anda?",
      options: [
        "Inbox (Kotak Masuk)",
        "Starred (Berbintang)",
        "History feed (Riwayat)",
        "Direct Messages (Pesan Langsung)"
      ],
      correct: "History feed (Riwayat)"
    },
    {
      question: "Kontrol apa yang digunakan untuk memberi tahu orang lain secara sopan (discreetly) bahwa Anda ingin berbicara?",
      options: [
        "Mute",
        "Members List",
        "Gear menu",
        "Raise Hand (Angkat Tangan)"
      ],
      correct: "Raise Hand (Angkat Tangan)"
    }
  ],
  materi18: [
    {
      question: "Apa artinya jika nama sebuah channel dicetak tebal (bold) di sidebar?",
      options: [
        "Channel tersebut bersifat pribadi (private)",
        "Itu adalah channel default",
        "Anda yang membuat channel tersebut",
        "Ada pesan yang belum terbaca (unread messages)"
      ],
      correct: "Ada pesan yang belum terbaca (unread messages)"
    },
    {
      question: "Apa fungsi ikon roda gigi (gear) di sebelah 'Channels'?",
      options: [
        "Mengubah kata sandi Anda",
        "Mengakses semua channel yang tersedia (Access all available channels)",
        "Mereset notifikasi",
        "Mengekspor riwayat pesan Anda"
      ],
      correct: "Mengakses semua channel yang tersedia (Access all available channels)"
    },
    {
      question: "Tipe pengguna mana yang bisa bergabung dengan channel yang diatur ke 'User Types / Internal Users'?",
      options: [
        "Hanya pembuat channel",
        "Hanya kontraktor eksternal",
        "Semua karyawan di perusahaan (Any employee)",
        "Pengguna publik dengan tautan"
      ],
      correct: "Semua karyawan di perusahaan (Any employee)"
    }
  ],
  materi19: [
    {
      question: "Apa tindakan yang harus dilakukan sebelum menggunakan template WhatsApp yang sudah dikonfigurasi sebelumnya (Pre-configured templates)?",
      options: [
        "Tidak ada, template langsung berfungsi segera setelah aplikasi diinstal",
        "Template tersebut harus diserahkan (submitted) ke Meta untuk mendapatkan persetujuan",
        "Tidak ada template pre-configured, semua harus dibuat manual",
        "Template otomatis diserahkan ke Meta segera setelah disimpan"
      ],
      correct: "Template tersebut harus diserahkan (submitted) ke Meta untuk mendapatkan persetujuan"
    },
    {
      question: "Di mana saja pesan WhatsApp akan muncul di Odoo?",
      options: [
        "Hanya di Chatter dan Discuss",
        "Di Chatter, ikon pesan di pojok kanan atas, sebagai pesan chat di pojok kanan bawah, dan di aplikasi Discuss",
        "Hanya di aplikasi Discuss dan ikon pesan",
        "Di Chatter, Discuss, dan Dashboard CRM"
      ],
      correct: "Di Chatter, ikon pesan di pojok kanan atas, sebagai pesan chat di pojok kanan bawah, dan di aplikasi Discuss"
    },
    {
      question: "Saat tombol WhatsApp ditekan di Chatter, apa yang digunakan untuk mengirim pesan terformat ke pelanggan?",
      options: [
        "Email Templates",
        "Hanya teks biasa yang bisa dikirim",
        "WhatsApp Template digunakan untuk mengirim teks preformatted, gambar, dan tautan",
        "SMS Templates"
      ],
      correct: "WhatsApp Template digunakan untuk mengirim teks preformatted, gambar, dan tautan"
    }
  ],
  materi20: [
    {
      question: "Jenis variabel apa yang perlu dipilih untuk mereferensikan field spesifik dalam model ke badan teks pesan?",
      options: [
        "Free Text",
        "Portal Link",
        "Field of Model",
        "User Name"
      ],
      correct: "Field of Model"
    },
    {
      question: "Apa kegunaan dari dua field 'Callback URL' dan 'Webhook Verify Token' yang diisi otomatis di Odoo?",
      options: [
        "Untuk mengonfigurasi penerimaan pesan masuk (receive/return messages) dari WhatsApp ke Odoo",
        "Untuk mengonfigurasi pengiriman pesan ke pelanggan via WhatsApp",
        "Untuk moderasi spam di akun WhatsApp Business",
        "Keduanya dibuat oleh Meta, bukan Odoo, dan tidak digunakan"
      ],
      correct: "Untuk mengonfigurasi penerimaan pesan masuk (receive/return messages) dari WhatsApp ke Odoo"
    },
    {
      question: "Field mana dalam template WhatsApp yang menetapkan model data yang akan direferensikan dalam pesan akhir ke pengguna?",
      options: [
        "Category",
        "Applies to",
        "Phone Field",
        "Template Name"
      ],
      correct: "Applies to"
    }
  ],
  materi21: [
    {
      question: "Bisakah Anda menjual produk yang stok inventarisnya menunjukkan jumlah 0?",
      options: [
        "Ya",
        "Ya, tapi hanya jika Anda sudah mengatur aturan replenishment/reordering",
        "Ya, tapi hanya jika kebijakan penagihan produk diatur ke \"on delivered quantities\"",
        "Tidak, itu ilegal"
      ],
      correct: "Ya"
    },
    {
      question: "Di mana Anda bisa membuat faktur untuk semua pelanggan sekaligus?",
      options: [
        "Buka aplikasi Accounting > To Invoice > Create Batch Invoice",
        "Buka aplikasi CRM > pilih semua peluang \"Won\" > Send Invoices",
        "Buka aplikasi Sales > To Invoice > Orders to Invoice",
        "Tidak mungkin, Anda harus membuat faktur satu per satu"
      ],
      correct: "Buka aplikasi Sales > To Invoice > Orders to Invoice"
    }
  ],
  materi22: [
    {
      question: "Tentang pertanyaan pendaftaran: jika 'Ask only once per order' tidak diaktifkan:",
      options: [
        "Pertanyaan diajukan satu kali per pesanan",
        "Pertanyaan diajukan satu kali per peserta",
        "Pertanyaan diacak jika ada lebih dari satu, sehingga hanya satu pertanyaan per peserta",
        "Tidak ada jawaban yang benar"
      ],
      correct: "Pertanyaan diajukan satu kali per peserta"
    },
    {
      question: "Untuk membuat aturan Lead Generation, saya harus pergi ke:",
      options: [
        "Events → Configuration → Lead Generation → Create",
        "Events → Settings → Lead Generation → Create",
        "Events → Lead Generation → Create",
        "CRM → Configuration → Events → Lead Generation → Create"
      ],
      correct: "Events → Configuration → Lead Generation → Create"
    },
    {
      question: "Bisakah saya membuat dan mengirim posting ke beberapa platform sosial sekaligus?",
      options: [
        "Tidak, posting harus dibuat dan diposting secara individu per stream",
        "Ya, tapi konten harus dibuat individu per stream, lalu dijadwalkan bersamaan",
        "Ya, posting bisa dibuat dan dikirim ke beberapa stream sekaligus",
        "Tidak, posting bisa dibuat bersamaan tapi harus dikirim satu per satu"
      ],
      correct: "Ya, posting bisa dibuat dan dikirim ke beberapa stream sekaligus"
    }
  ],
  materi23: [
    {
      question: "Di Aplikasi Planning Odoo, apa arti tanda merah di sudut shift?",
      options: [
        "Shift bentrok untuk orang yang sama",
        "Shift duplikat",
        "Ada catatan pada shift",
        "Orang tersebut sedang cuti"
      ],
      correct: "Shift bentrok untuk orang yang sama"
    },
    {
      question: "Di mana Anda bisa menambahkan produk ke menu agar bisa langsung dijual ke pelanggan?",
      options: [
        "Langsung dari menu POS di mode kiosk",
        "Dari menu produk Aplikasi Inventory",
        "Aplikasi eCommerce untuk memastikan pesanan online berfungsi",
        "A dan B"
      ],
      correct: "A dan B"
    },
    {
      question: "Opsi apa yang perlu dipilih dalam sesi POS untuk mengedit tata letak meja?",
      options: [
        "Konfigurasi > Pengaturan > Centang kotak di sebelah \"Edit tables\"",
        "Mode pengembang harus diaktifkan",
        "Tombol Edit di menu pengaturan",
        "Ikon Pensil di pojok kanan atas"
      ],
      correct: "Ikon Pensil di pojok kanan atas"
    }
  ],
  materi24: [
    {
      question: "Mengapa \"On payment\" harus diaktifkan untuk kebijakan pendaftaran?",
      options: [
        "Agar kursus juga menjadi produk dan bisa dijual online",
        "Agar pembuat kursus bisa menerima donasi",
        "Ini bukan opsi untuk kebijakan pendaftaran",
        "Agar pelanggan bisa menjual kembali kursus tersebut"
      ],
      correct: "Agar kursus juga menjadi produk dan bisa dijual online"
    },
    {
      question: "Kapan pelanggan bisa mengakses kursus jika mereka membelinya secara online?",
      options: [
        "Segera setelah mereka menambahkannya ke keranjang",
        "Setelah pembayaran berhasil diproses",
        "Dengan kode promo khusus \"ENROLL\" saat checkout",
        "Hanya pada hari kerja tertentu"
      ],
      correct: "Setelah pembayaran berhasil diproses"
    },
    {
      question: "Apa yang harus dilakukan untuk menjual kursus saya secara online?",
      options: [
        "Kursus harus disetujui dulu oleh manajer pengguna",
        "Kursus harus menjadi produk di katalog, tapi tidak perlu dipublikasikan",
        "Kursus harus menjadi produk di katalog, dan harus dipublikasikan",
        "Tidak ada, pengguna tidak bisa menjual kursus online"
      ],
      correct: "Kursus harus menjadi produk di katalog, dan harus dipublikasikan"
    }
  ],
  materi25: [
    {
      question: "Bagaimana cara mengecek kapan pembayaran berikutnya jatuh tempo untuk Langganan yang sedang berjalan?",
      options: [
        "Telepon pelanggan dan tanyakan",
        "Odoo akan menampilkan pop-up pengingat tanggal jatuh tempo",
        "‘Invoice Date’ pada Sales Order Langganan",
        "Tidak ada cara mengecek di Odoo, kita harus ingat tanggal fakturnya"
      ],
      correct: "‘Invoice Date’ pada Sales Order Langganan"
    },
    {
      question: "Kemana kita harus pergi untuk mengotomatiskan tugas dalam tahapan tugas di aplikasi Project?",
      options: [
        "Di ikon gerigi di sebelah nama tugas/stage",
        "Di Settings -> Configuration",
        "Anda tidak bisa mengotomatiskan tugas di aplikasi Project",
        "Klik nama tugas dan ketik automasinya"
      ],
      correct: "Di ikon gerigi di sebelah nama tugas/stage"
    },
    {
      question: "Bagaimana cara mengizinkan pelanggan membayar langsung di website saya?",
      options: [
        "Install terminal pembayaran seperti Square, Cashapp, atau Venmo",
        "Buka Settings -> Quotations & Orders dan centang kotak di sebelah Online Payment",
        "Tidak ada cara untuk mengizinkan pelanggan membayar langsung di website",
        "Buka Settings -> Website dan install terminal pembayaran"
      ],
      correct: "Buka Settings -> Quotations & Orders dan centang kotak di sebelah Online Payment"
    }
  ],
  materi26: [
    {
      question: "Saat saya menggunakan alamat email untuk menerima dokumen, apakah Odoo membuat akun email baru atau menggunakan alias email?",
      options: [
        "Email baru",
        "Alias email",
        "Menggunakan alias email untuk menerima dokumen tidak mungkin, saya harus terus menerimanya melalui surat dan scanning manual",
        "Alias email, tapi perlu aplikasi pihak ketiga"
      ],
      correct: "Alias email"
    },
    {
      question: "Apa fungsi tindakan \"Split\"?",
      options: [
        "Membelah satu halaman menjadi dua",
        "Memisahkan dokumen ke workspace berbeda",
        "Memecah kumpulan dokumen menjadi file terpisah, yang masing-masing bisa diberi tindakan berbeda",
        "Tidak ada jawaban benar"
      ],
      correct: "Memecah kumpulan dokumen menjadi file terpisah, yang masing-masing bisa diberi tindakan berbeda"
    },
    {
      question: "Bagaimana cara saya menyesuaikan tindakan (actions) yang tersedia untuk dokumen?",
      options: [
        "Hanya mungkin dengan modul pihak ketiga",
        "Ini dianggap pengembangan di Odoo, perlu modifikasi kode",
        "Action bisa dibuat dan disesuaikan di Documents App > Configuration > Actions",
        "Action bisa dibuat lewat menu Technical di Settings app"
      ],
      correct: "Action bisa dibuat dan disesuaikan di Documents App > Configuration > Actions"
    }
  ],
  materi27: [
    {
      question: "Jika kolom \"Analytic\" tidak terlihat di Purchase Order atau Sales Order, di mana bisa diaktifkan?",
      options: [
        "Analytic Accounts tidak bisa digunakan di Odoo",
        "Analytic Accounts diaktifkan di Accounting > Configuration > Settings",
        "Analytic Accounts aktif secara default di Odoo",
        "Analytic Accounts diaktifkan di Sales / Purchase Configuration > Settings"
      ],
      correct: "Analytic Accounts diaktifkan di Accounting > Configuration > Settings"
    },
    {
      question: "Bagaimana cara menagih pelanggan atas waktu kerja karyawan Anda di proyek?",
      options: [
        "Setting \"produk\" sebagai consumable dan kebijakan penagihan ordered quantity",
        "Setting \"produk\" sebagai service dan kebijakan penagihan ordered quantity",
        "Setting \"produk\" sebagai service dan kebijakan penagihan timesheets on tasks",
        "Setting \"produk\" sebagai consumable dan kebijakan penagihan timesheets on tasks"
      ],
      correct: "Setting \"produk\" sebagai service dan kebijakan penagihan timesheets on tasks"
    },
    {
      question: "Wood Panels diseting penagihan berdasarkan delivered quantities dan re-invoice pada sales price. Biaya produk $50 dan harga jual $80. Berapa yang akan ditagihkan ke pelanggan untuk 5 wood panels?",
      options: [
        "$50",
        "$80",
        "$250",
        "$400"
      ],
      correct: "$400"
    }
  ],
  materi28: [
    {
      question: "Rute operasional mana yang dipilih untuk drone David karena dibuat sendiri (in-house)?",
      options: [
        "Manufacture",
        "Buy",
        "Replenish on Order (MTO)",
        "Dropship"
      ],
      correct: "Manufacture"
    },
    {
      question: "Di mana pada formulir produk Anda bisa menambahkan produk aksesori agar muncul bersama produk utama saat pembayaran?",
      options: [
        "Tab Sales > Upsell & Cross-sell",
        "Tab Inventory > Routes",
        "Tab Purchase > Purchase Description",
        "Tab Inventory > Logistics"
      ],
      correct: "Tab Sales > Upsell & Cross-sell"
    },
    {
      question: "Apa fungsi mencentang kotak \"Is Published\" pada tab sales produk?",
      options: [
        "Mempublikasikan produk ke website perusahaan",
        "Mengirim email promosi ke pelanggan",
        "Menandai produk siap untuk manufaktur",
        "Menambahkan produk ke template penawaran"
      ],
      correct: "Mempublikasikan produk ke website perusahaan"
    }
  ],
  sales_materi1: [
    {
      question: "Di mana letak halaman 'Settings' di aplikasi 'Sales'?",
      options: [
        "Orders > Settings",
        "Configuration > Settings",
        "Products > Settings",
        "Reporting > Settings"
      ],
      correct: "Configuration > Settings"
    },
    {
      question: "Selain opsi 'Products', opsi apa lagi yang terletak di bawah menu header 'Products'?",
      options: [
        "Product Values, Prices, Discounts, eWallets",
        "Product Prices, Variants, Loyalties, Gift Cards",
        "Product Configurations, Price Settings, eWallets, Discount Settings",
        "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet"
      ],
      correct: "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet"
    },
    {
      question: "Halaman apa saja yang tersedia di bawah opsi menu header 'To Invoice'?",
      options: [
        "‘Orders to Invoice’ dan ‘Orders to Upsell’",
        "‘Orders to Invoice’ dan ‘Quotations’",
        "‘Orders to Upsell’ dan ‘Customers’",
        "‘Orders to Upsell’ dan ‘Products to Purchase’"
      ],
      correct: "‘Orders to Invoice’ dan ‘Orders to Upsell’"
    }
  ],
  sales_materi2: [
    {
      question: "Halaman apa yang berfungsi sebagai dashboard utama di aplikasi Sales?",
      options: [
        "Customers",
        "Orders",
        "Sales",
        "Quotations"
      ],
      correct: "Quotations"
    },
    {
      question: "Berapa banyak produk opsional yang dapat ditambahkan ke penawaran?",
      options: [
        "1",
        "2",
        "3",
        "Tidak ada batasan (There is no limit)"
      ],
      correct: "Tidak ada batasan (There is no limit)"
    },
    {
      question: "Tab apa pada formulir penawaran yang didedikasikan untuk meninggalkan catatan internal bagi karyawan?",
      options: [
        "Notes",
        "Internal Chatter",
        "FYI",
        "Employees"
      ],
      correct: "Notes"
    }
  ],
  sales_materi3: [
    {
      question: "Apa yang muncul di kolom kanan tab 'General Information' pada produk?",
      options: [
        "Field terkait finansial, terlepas dari Tipe Produk yang dipilih",
        "Field terkait inventaris, terlepas dari Tipe Produk yang dipilih",
        "Field terkait finansial, *hanya* jika 'Goods' dipilih sebagai Tipe Produk",
        "Field terkait inventaris, *hanya* jika 'Services' dipilih sebagai Tipe Produk"
      ],
      correct: "Field terkait finansial, terlepas dari Tipe Produk yang dipilih"
    },
    {
      question: "Apa kegunaan field 'Optional Products'?",
      options: [
        "Menambahkan produk pelengkap yang akan direkomendasikan kepada pelanggan selama proses pembelian",
        "Memberikan opsi kepada pelanggan untuk membatalkan transaksi",
        "Menambahkan metode pembayaran opsional untuk dipilih pelanggan",
        "Menampilkan produk serupa dari perusahaan lain untuk membandingkan harga"
      ],
      correct: "Menambahkan produk pelengkap yang akan direkomendasikan kepada pelanggan selama proses pembelian"
    },
    {
      question: "Setelah mengonfigurasi formulir produk, bagaimana cara saya mempublikasikan produk?",
      options: [
        "Publish smart button > Ubah ‘Off’ menjadi ‘On’",
        "Buka Website smart button > Ubah ‘Unpublished’ menjadi ‘Published’",
        "Configuration > Products > Publish Recent",
        "Products > Publish > Pilih Produk untuk Dipublikasikan"
      ],
      correct: "Buka Website smart button > Ubah ‘Unpublished’ menjadi ‘Published’"
    }
  ],
  sales_materi4: [
    {
      question: "Bagaimana 'Display Type' tipe 'Select' menampilkan varian?",
      options: [
        "Sebagai lingkaran yang bisa diklik",
        "Sebagai tombol",
        "Sebagai menu drop-down pilihan",
        "Sebagai opsi checkbox multipel"
      ],
      correct: "Sebagai menu drop-down pilihan"
    },
    {
      question: "Setelah sebuah atribut digunakan pada minimal satu produk, bagaimana hal itu mempengaruhi 'Variants Creation Mode'?",
      options: [
        "Variants Creation Mode tidak dapat diubah lagi",
        "Variants Creation Mode menjadi terlihat oleh pelanggan",
        "Variants Creation Mode menjadi terkode warna",
        "Variants Creation Mode selalu dapat diubah jika diperlukan"
      ],
      correct: "Variants Creation Mode tidak dapat diubah lagi"
    },
    {
      question: "Jika satu atribut ternyata berbiaya lebih mahal dan harus menghasilkan harga jual yang lebih tinggi, di mana Anda dapat memasukkan jumlah tersebut?",
      options: [
        "Added Value",
        "Increase Cost",
        "Additional Customer Price",
        "Default Extra Price"
      ],
      correct: "Default Extra Price"
    }
  ],
  sales_materi5: [
    {
      question: "Bagaimana cara mengakses halaman 'Quotation Templates' di Odoo Sales?",
      options: [
        "Melalui link 'Template Configuration' pada penawaran, atau 'Configuration' > 'Quotation Templates'",
        "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Templates' > 'Configuration'",
        "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Configuration' > 'Quotation Templates'",
        "Klik tombol 'Templates' pada pesanan penjualan"
      ],
      correct: "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Configuration' > 'Quotation Templates'"
    },
    {
      question: "Field apa pada formulir template penawaran yang diperlukan saat berurusan dengan produk berlangganan (subscription) dan/atau jasa?",
      options: [
        "Subscriptions",
        "Recurrence",
        "Subscription Plans",
        "Recurring Plan"
      ],
      correct: "Recurring Plan"
    },
    {
      question: "Jika saya ingin pelanggan mengonfirmasi pesanan mereka dengan tanda tangan virtual, opsi apa yang harus diaktifkan pada formulir template penawaran?",
      options: [
        "Signature",
        "Sign",
        "Virtual Sign",
        "Online Signature"
      ],
      correct: "Online Signature"
    }
  ],
  sales_materi6: [
    {
      question: "Bagaimana cara mengakses halaman 'Headers/Footers' di Odoo Sales?",
      options: [
        "‘Configuration’ > ‘Quotation Settings’",
        "‘Configuration’ > ‘Headers/Footers’ atau klik link ‘Headers/Footers’ di halaman ‘Settings’",
        "‘Options’ > ‘Quotes’ > ‘PDF Settings’",
        "‘Configuration’ > ‘PDF Quote Options’"
      ],
      correct: "‘Configuration’ > ‘Headers/Footers’ atau klik link ‘Headers/Footers’ di halaman ‘Settings’"
    },
    {
      question: "Bagaimana cara menemukan 'technical name' untuk sebuah field di Odoo?",
      options: [
        "Di tab 'Notes' pada pesanan penjualan",
        "Dengan meminta akses 'Administrator' dari manajer saya",
        "Masuk ke 'Developer Mode', arahkan kursor ke ikon 'tanda tanya' di samping field, dan cari baris berjudul 'Field'",
        "Itu tidak mungkin dilakukan tanpa menghubungi tim Support"
      ],
      correct: "Masuk ke 'Developer Mode', arahkan kursor ke ikon 'tanda tanya' di samping field, dan cari baris berjudul 'Field'"
    },
    {
      question: "Apa nama tab pada penawaran/pesanan penjualan di mana opsi PDF Quote dapat ditemukan?",
      options: [
        "‘PDF Options’",
        "‘PDF Builder’",
        "‘Quote Options’",
        "‘Quote Builder’"
      ],
      correct: "‘Quote Builder’"
    }
  ],
  sales_materi7: [
    {
      question: "Pada formulir produk, smart button mana yang harus diklik untuk mengakses halaman 'Documents' untuk produk tersebut?",
      options: [
        "PDF",
        "Documents",
        "Uploads",
        "Documentation"
      ],
      correct: "Documents"
    },
    {
      question: "'Tipe' dokumen produk apa yang diizinkan Odoo untuk diunggah pengguna?",
      options: [
        "‘File’ dan ‘URL’",
        "‘File’ dan ‘Website’",
        "‘PDF’ dan ‘URL’",
        "‘Google Doc’ dan ‘URL’"
      ],
      correct: "‘File’ dan ‘URL’"
    },
    {
      question: "Apa saja opsi visibilitas untuk dokumen produk?",
      options: [
        "‘Invisible’, ‘On order’, ‘On payment’, dan ‘Inside quote PDF’",
        "‘Hidden’, ‘On sales order’, ‘On quotation’, dan ‘Attached to PDF’",
        "‘Always’, ‘On quote’, ‘On sales order’, dan ‘Beneath PDF’",
        "‘Hidden’, ‘On quote’, ‘On confirmed order’, dan ‘Inside quote PDF’"
      ],
      correct: "‘Hidden’, ‘On quote’, ‘On confirmed order’, dan ‘Inside quote PDF’"
    }
  ],
  sales_materi8: [
    {
      question: "Bagaimana cara menawarkan produk tambahan kepada pelanggan menggunakan Template Penawaran?",
      options: [
        "Kirim email secara manual",
        "Telepon mereka",
        "Tambahkan produk di tab Optional Products pada formulir Template Penawaran",
        "Berharap mereka kembali untuk membeli"
      ],
      correct: "Tambahkan produk di tab Optional Products pada formulir Template Penawaran"
    },
    {
      question: "Bisakah saya menggunakan template penawaran di lingkungan multi-perusahaan?",
      options: [
        "Ya",
        "Tidak, hanya untuk satu perusahaan",
        "Ya, tapi hanya jika Anda CEO",
        "Odoo tidak menawarkan template penawaran"
      ],
      correct: "Ya"
    },
    {
      question: "Aplikasi apa yang diperlukan untuk menggunakan Quotation Builder di Odoo?",
      options: [
        "Website",
        "Mass Mailing",
        "Events",
        "Quotations"
      ],
      correct: "Website"
    }
  ],
  sales_materi9: [
    {
      question: "Kebijakan penagihan (invoicing policy) mana yang Anda gunakan untuk menagih pelanggan berdasarkan jumlah jam kerja?",
      options: [
        "Based on Delivered Quantities (Manual)",
        "Based on Milestones",
        "Based on Timesheets",
        "Based on Employees"
      ],
      correct: "Based on Timesheets"
    },
    {
      question: "Apa yang terjadi ketika pengaturan Faktur Otomatis (Automatic Invoice) diaktifkan?",
      options: [
        "Odoo otomatis membuat faktur saat salesperson mengonfirmasi pesanan",
        "Odoo otomatis membuat faktur saat kuantitas terkirim diperbarui",
        "Odoo otomatis membuat faktur saat pelanggan mengonfirmasi pembayaran di toko online",
        "Odoo otomatis membuat faktur saat karyawan mengonfirmasi pengiriman"
      ],
      correct: "Odoo otomatis membuat faktur saat pelanggan mengonfirmasi pembayaran di toko online"
    },
    {
      question: "Manakah pernyataan yang benar tentang kebijakan penagihan 'Based on Milestones'?",
      options: [
        "Mengharuskan Anda memasukkan jumlah milestone secara manual ke faktur",
        "Secara otomatis memperbarui kuantitas terkirim pada pesanan penjualan berdasarkan milestone yang diselesaikan di aplikasi Project",
        "Secara otomatis membuat draft faktur berdasarkan milestone yang diselesaikan di aplikasi Project",
        "Anda tidak memerlukan aplikasi Project untuk menagih pelanggan dengan kebijakan ini"
      ],
      correct: "Secara otomatis memperbarui kuantitas terkirim pada pesanan penjualan berdasarkan milestone yang diselesaikan di aplikasi Project"
    }
  ],
  sales_materi10: [
    {
      question: "Saat berada dalam mode 'Edit' di formulir, tombol/field apa yang menampung opsi 'Create an Opportunity'?",
      options: [
        "Create",
        "Lead/Opportunity",
        "Action",
        "Button Options"
      ],
      correct: "Action"
    },
    {
      question: "Tombol apa yang harus diklik pada formulir Opportunity untuk membuat penawaran bagi pelanggan?",
      options: [
        "Send Quotation",
        "Launch Quotation",
        "Create Quotation",
        "New Quotation"
      ],
      correct: "New Quotation"
    },
    {
      question: "Aplikasi terintegrasi apa yang berperan saat membuat dan mengirim faktur?",
      options: [
        "Finances",
        "Accounting",
        "Banking",
        "PoS"
      ],
      correct: "Accounting"
    }
  ],
  sales_materi11: [
    {
      question: "Jenis program promosi apa yang akan Anda gunakan untuk membuat satu kode promosi yang didistribusikan secara luas?",
      options: [
        "Coupons",
        "Promotions",
        "Discount Code",
        "Mass Distribution Promo"
      ],
      correct: "Discount Code"
    },
    {
      question: "Bagaimana cara mengonfigurasi promosi agar tersedia di toko online Anda?",
      options: [
        "Aktifkan 'Online Promotions' di pengaturan Sales.",
        "Aktifkan 'Internet Promo' di pengaturan Website.",
        "Buat tersedia di aplikasi Point of Sale.",
        "Buat tersedia di aplikasi Website."
      ],
      correct: "Buat tersedia di aplikasi Website."
    },
    {
      question: "Bagaimana cara mengonfigurasi promosi agar tidak pernah kadaluwarsa?",
      options: [
        "Biarkan field Validity kosong.",
        "Set Validity ke tanggal hari ini.",
        "Set Expiration Date ke tanggal hari ini.",
        "Ini tidak mungkin dilakukan dengan Odoo Sales."
      ],
      correct: "Biarkan field Validity kosong."
    }
  ],
  sales_materi12: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar kupon dapat digunakan?",
      options: [
        "Promotions, Loyalty & Gift Card",
        "Loyalty Programs",
        "Discounts",
        "Coupon Codes"
      ],
      correct: "Promotions, Loyalty & Gift Card"
    },
    {
      question: "Apa fungsi opsi 'limit usage' (batasi penggunaan)?",
      options: [
        "Membatasi jumlah kupon yang dibuat.",
        "Membatasi jumlah kupon yang didistribusikan ke semua pelanggan.",
        "Membatasi jumlah kupon yang dapat digunakan oleh pelanggan individu.",
        "Membatasi diskon yang diterapkan dengan kupon."
      ],
      correct: "Membatasi jumlah kupon yang dapat digunakan oleh pelanggan individu."
    },
    {
      question: "Di mana aturan kapan kupon bisa digunakan dapat diatur?",
      options: [
        "Conditional rules",
        "Restrictions",
        "Usage categories",
        "Discount settings"
      ],
      correct: "Conditional rules"
    }
  ],
  sales_materi13: [
    {
      question: "Apa fungsi dari Loyalty Program?",
      options: [
        "Membiarkan pelanggan mengumpulkan poin dari pembelian mereka, yang dapat mereka gunakan pada pesanan di masa mendatang.",
        "Membiarkan pelanggan mendapatkan porsi saham perusahaan, setelah membeli sejumlah produk tertentu.",
        "Membiarkan pelanggan mengubah warna item apa pun yang mereka tambahkan ke pesanan mereka, jika mereka membelanjakan jumlah tertentu pada suatu produk.",
        "Loyalty Program tidak ada di Odoo."
      ],
      correct: "Membiarkan pelanggan mengumpulkan poin dari pembelian mereka, yang dapat mereka gunakan pada pesanan di masa mendatang."
    },
    {
      question: "Bagaimana cara memastikan pelanggan membeli dengan jumlah nominal minimum (Minimum Quantity) agar dapat mengumpulkan poin untuk pesanan tersebut?",
      options: [
        "Di bawah setiap penawaran, klik ke 'Tab Rewards' dan atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan.",
        "Tidak ada cara untuk menetapkan jumlah nominal minimum.",
        "Di bawah 'Conditional rules', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan.",
        "Di bawah 'Rewards', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan."
      ],
      correct: "Di bawah 'Conditional rules', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan."
    },
    {
      question: "Bagaimana cara menerapkan reward pelanggan untuk mendapatkan diskon pada pesanan?",
      options: [
        "Pada penawaran Penjualan, klik tombol 'Rewards' di atas total.",
        "Pada penawaran Penjualan, klik link internal pelanggan, periksa saldo kartu loyalitas mereka, lalu terapkan reward diskon yang diinginkan secara manual sebagai baris produk terpisah.",
        "Pada profil pelanggan, klik tab 'Rewards' dan pilih pesanan penjualan yang akan diterapkan rewardnya.",
        "Pada profil pelanggan, pilih pesanan penjualan dari tab 'Sales Order', dan terapkan reward dengan tombol 'Reward'."
      ],
      correct: "Pada penawaran Penjualan, klik tombol 'Rewards' di atas total."
    }
  ],
  sales_materi14: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar program kartu hadiah (Gift Card) dapat dibuat?",
      options: [
        "Discounts",
        "Promotions, Loyalty & Gift Card",
        "Gift Card Programs",
        "Loyalty Programs"
      ],
      correct: "Promotions, Loyalty & Gift Card"
    },
    {
      question: "Apa yang terjadi ketika saya memilih 'Selected Customers' saat pembuatan kartu hadiah?",
      options: [
        "Saya masih bisa memilih jumlah kartu hadiah yang saya suka.",
        "Odoo mengunci kolom 'Quantity to generate' agar sesuai dengan jumlah pelanggan yang dipilih.",
        "Kartu hadiah dikirim ke pelanggan anonim.",
        "Tombol 'Generate Gift Cards' disembunyikan sampai saya menambahkan outlet PoS."
      ],
      correct: "Odoo mengunci kolom 'Quantity to generate' agar sesuai dengan jumlah pelanggan yang dipilih."
    },
    {
      question: "Di mana tanggal kedaluwarsa untuk kartu hadiah dapat diatur?",
      options: [
        "Field 'Valid Until'",
        "Field 'Expiration'",
        "Field 'Expires on'",
        "Kartu hadiah tidak kedaluwarsa"
      ],
      correct: "Field 'Valid Until'"
    }
  ],
  sales_materi15: [
    {
      question: "Berdasarkan apa paket pelokalan pajak (tax localization package) Odoo?",
      options: [
        "Negara tempat pengguna individu saat ini berada",
        "Negara asal administrator database",
        "Negara yang dipilih sebagai negara perusahaan saat pertama kali membuat database Odoo",
        "Tidak ada yang namanya pelokalan pajak di Odoo"
      ],
      correct: "Negara yang dipilih sebagai negara perusahaan saat pertama kali membuat database Odoo"
    },
    {
      question: "Bagaimana pajak 'Percentage of Price' (Persentase Harga) dihitung?",
      options: [
        "Dengan mengalikan jumlah persentase dengan harga jual produk",
        "Dengan mengalikan jumlah persentase dengan total harga produk termasuk pajak",
        "Dengan mengalikan jumlah persentase dengan harga tetap produk rata-rata",
        "Dengan mengalikan biaya produk dari vendor dengan jumlah hari di gudang"
      ],
      correct: "Dengan mengalikan jumlah persentase dengan harga jual produk"
    },
    {
      question: "Jika opsi perhitungan pajak 'Python Code' tidak tersedia, apa yang harus dilakukan?",
      options: [
        "Anda harus diberikan 'Hak Developer' oleh administrator database",
        "Modul 'Define Taxes as Python Code' harus diinstal dari aplikasi 'Apps'",
        "Anda harus mengubah kata sandi login Anda menjadi 'Python_Coder'",
        "'Python Code' hanya dapat diakses di sistem operasi LINUX"
      ],
      correct: "Modul 'Define Taxes as Python Code' harus diinstal dari aplikasi 'Apps'"
    }
  ],
  sales_materi16: [
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan cara untuk menerapkan Posisi Fiskal (Fiscal Position) ke pelanggan?",
      options: [
        "Menentukan posisi fiskal pada formulir kontak pelanggan",
        "Menentukan pelanggan pada formulir posisi fiskal",
        "Memilih 'Detect Automatically' pada formulir posisi fiskal",
        "Semua opsi di atas adalah cara yang akurat untuk menerapkan posisi fiskal"
      ],
      correct: "Menentukan pelanggan pada formulir posisi fiskal"
    },
    {
      question: "Apa yang terjadi jika opsi dipilih di kolom 'Tax Scope' pada formulir pajak?",
      options: [
        "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan pada 'Goods' (Barang) atau 'Services' (Jasa)",
        "Pelanggan akan diminta membayar pajak ganda atas pesanan mereka",
        "Ini bukan pilihan pada formulir pajak",
        "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan di negara tertentu"
      ],
      correct: "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan pada 'Goods' (Barang) atau 'Services' (Jasa)"
    },
    {
      question: "Pada formulir pajak, untuk apa kolom 'Tax Grids' biasanya digunakan?",
      options: [
        "Untuk membuat laporan pajak secara manual – sesuai dengan peraturan khusus negara tersebut",
        "Untuk mengatur semua pajak perusahaan ke dalam format seperti kisi (grid-like)",
        "Opsi ini tidak ada di Odoo",
        "Untuk membuat laporan pajak secara otomatis – sesuai dengan peraturan khusus negara tersebut"
      ],
      correct: "Untuk membuat laporan pajak secara otomatis – sesuai dengan peraturan khusus negara tersebut"
    }
  ],
  sales_materi17: [
    {
      question: "Jika tidak ada 'Customer Tax' khusus yang diterapkan pada formulir produk, apa yang muncul di kolom 'Tax' penawaran saat produk ditambahkan?",
      options: [
        "Standard Tax",
        "Default Tax",
        "Regular Tax",
        "Nothing (Tidak muncul apa-apa/Kosong)"
      ],
      correct: "Default Tax"
    },
    {
      question: "Bagaimana cara menghapus pajak dari penawaran/pesanan penjualan?",
      options: [
        "Klik ikon 'Sampah' di sebelah pajak yang tercantum",
        "Klik 'Remove' di sebelah pajak yang tercantum",
        "Klik 'New' di sebelah pajak yang tercantum",
        "Klik 'X' di sebelah pajak yang tercantum"
      ],
      correct: "Klik 'X' di sebelah pajak yang tercantum"
    },
    {
      question: "Di mana pelanggan dapat melihat pajak yang dikenakan pada penawaran/pesanan penjualan mereka?",
      options: [
        "Di bagian 'Pricing'",
        "Di bagian 'Taxes'",
        "Di bagian 'Overview'",
        "Informasi ini tidak terlihat oleh pelanggan"
      ],
      correct: "Di bagian 'Pricing'"
    }
  ],
  sales_materi18: [
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan metode pengiriman yang didukung oleh Odoo?",
      options: [
        "Fixed price",
        "Local postal services",
        "Pickup in store",
        "Pickup at the post office"
      ],
      correct: "Pickup at the post office"
    },
    {
      question: "Di mana Anda mengonfigurasi nama pengiriman yang akan muncul di pesanan penjualan?",
      options: [
        "Configuration > Shipping Methods > Provider",
        "Configuration > Shipping Methods > Delivery Product",
        "Configuration > Shipping Methods > Description",
        "Configuration > Quotation Templates > Delivery"
      ],
      correct: "Configuration > Shipping Methods > Delivery Product"
    },
    {
      question: "Untuk membuat aturan pengiriman berdasarkan berat, manakah dari berikut ini yang juga harus dikonfigurasi?",
      options: [
        "Berat produk pada formulir produk",
        "Berat produk pada formulir metode pengiriman",
        "Berat *dan* volume produk pada formulir produk",
        "Berat paket pengiriman pada formulir metode pengiriman"
      ],
      correct: "Berat produk pada formulir produk"
    }
  ],
  sales_materi19: [
    {
      question: "Secara default, berapa 'Customer Lead Time' yang diset pada formulir produk?",
      options: [
        "0",
        "1",
        "2",
        "5"
      ],
      correct: "0"
    },
    {
      question: "Di mana Anda dapat menemukan field 'Delivery Date' pada Pesanan Penjualan (Sales Order)?",
      options: [
        "Di bawah tab 'General Information', di bagian 'Other Info'",
        "Di bawah tab 'Delivery', di bagian 'Other Info'",
        "Di bawah tab 'Other Info', di bagian 'Delivery'",
        "Di bawah tab 'General Information', di bagian 'Date'"
      ],
      correct: "Di bawah tab 'Other Info', di bagian 'Delivery'"
    },
    {
      question: "Untuk memastikan lapisan keamanan ekstra pada waktu tunggu (lead times), pengaturan apa yang harus diaktifkan di aplikasi Inventory?",
      options: [
        "Security Lead Time for Products",
        "Security Lead Time for Sales",
        "Security Lead Time for Customers",
        "Security Lead Time for Warehouses"
      ],
      correct: "Security Lead Time for Sales"
    }
  ],
  sales_materi20: [
    {
      question: "Bagaimana cara mengaktifkan fitur 'Dropshipping' di Odoo?",
      options: [
        "Sales > Configuration > Settings > Aktifkan 'Dropshipping > Simpan",
        "Purchase > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan",
        "Inventory > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan",
        "Manufacturing > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan"
      ],
      correct: "Purchase > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan"
    },
    {
      question: "Dua hal apa yang **harus** dikonfigurasi pada formulir produk agar Dropshipping berfungsi?",
      options: [
        "Aktifkan rute 'Dropship' (di tab Inventory), dan atur setidaknya satu vendor (di tab Purchase).",
        "Aktifkan rute 'Dropship' (di tab Inventory), dan atur harga produk menjadi $0.",
        "Atur setidaknya satu vendor (di tab Purchase), dan aktifkan opsi 'Vendor Responsibility' (di tab Inventory).",
        "Tidak ada yang perlu dilakukan. Dropshipping terjadi secara otomatis."
      ],
      correct: "Aktifkan rute 'Dropship' (di tab Inventory), dan atur setidaknya satu vendor (di tab Purchase)."
    },
    {
      question: "Jika sebuah produk memiliki beberapa vendor, bagaimana Odoo beroperasi saat Dropshipping digunakan?",
      options: [
        "Odoo akan memilih dengan vendor yang menyediakan produk dengan harga termurah.",
        "Odoo akan memilih dengan vendor yang berada di urutan terakhir pada daftar di formulir produk (di tab Purchase).",
        "Odoo akan memilih dengan vendor yang berada di urutan pertama pada daftar di formulir produk (di tab Purchase).",
        "Odoo akan memilih dengan vendor yang menyediakan produk dengan harga termahal."
      ],
      correct: "Odoo akan memilih dengan vendor yang berada di urutan pertama pada daftar di formulir produk (di tab Purchase)."
    }
  ],
  sales_materi21: [
    {
      question: "Di field mana negara pelanggan yang berbeda dapat ditambahkan pada formulir pricelist?",
      options: [
        "Country",
        "Country Groups",
        "Countries",
        "Customer Countries"
      ],
      correct: "Country Groups"
    },
    {
      question: "Berapa banyak aturan harga (price rules) yang dapat ditambahkan ke satu pricelist?",
      options: [
        "Satu",
        "Dua",
        "Tiga",
        "No limit (Tidak terbatas)"
      ],
      correct: "No limit (Tidak terbatas)"
    },
    {
      question: "Jika diaktifkan pada formulir pricelist, apa fungsi opsi 'Selectable'?",
      options: [
        "Membuat pricelist dapat dilihat dan dipilih oleh pelanggan online (e-commerce)",
        "Membuat item dapat dipilih pelanggan online untuk masuk keranjang",
        "Mengizinkan pelanggan menambahkan banyak item ke pesanan online mereka",
        "Tidak ada opsi 'Selectable' pada formulir pricelist"
      ],
      correct: "Membuat pricelist dapat dilihat dan dipilih oleh pelanggan online (e-commerce)"
    }
  ],
  sales_materi22: [
    {
      question: "Apa fungsi mengaktifkan pengaturan 'Discounts' dan 'Margins'?",
      options: [
        "Memungkinkan Anda membelanjakan lebih sedikit untuk produk dari vendor.",
        "Memungkinkan Anda menggunakan diskon dan margin pada Pricelists.",
        "Memungkinkan Anda menampilkan diskon dan margin HANYA pada sales order.",
        "Memungkinkan Anda menampilkan diskon dan margin pada sales order dan quotation."
      ],
      correct: "Memungkinkan Anda menampilkan diskon dan margin pada sales order dan quotation."
    },
    {
      question: "Bagaimana cara mengonfigurasi Pricelist Rule agar harga berakhir dengan $0.99 (misal 9.99)?",
      options: [
        "Computation: Discount > Rounding Method: 0.01 > Extra Fee: $1.",
        "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01.",
        "Computation: Fixed Price > Discount: 1%",
        "Ini tidak mungkin dilakukan di Odoo."
      ],
      correct: "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01."
    },
    {
      question: "Apa itu profit margin?",
      options: [
        "Selisih antara biaya (cost) dan harga jual produk.",
        "Selisih antara harga jual dan harga diskon produk.",
        "Selisih antara harga satuan dan harga akhir produk.",
        "Selisih antara pendapatan tahunan pelanggan dan anggaran belanja mereka."
      ],
      correct: "Selisih antara biaya (cost) dan harga jual produk."
    }
  ],
  sales_materi23: [
    {
      question: "Siapa yang menerima rencana komisi yang diberikan kepada 'Sales Team'?",
      options: [
        "Salesperson individu dalam tim tersebut.",
        "Pelanggan yang terkait dengan tim sales tersebut.",
        "Manajer tim sales tersebut.",
        "Mitra eksternal yang bekerja sama dengan tim tersebut."
      ],
      correct: "Manajer tim sales tersebut."
    },
    {
      question: "Apa artinya memilih 'Targets' daripada 'Achievements' untuk rencana komisi?",
      options: [
        "Salesperson mendapatkan komisi berdasarkan persentase tetap dari penjualan.",
        "Salesperson mendapatkan komisi berdasarkan seberapa banyak target mereka tercapai.",
        "Salesperson menerima komisi tetap terlepas dari kinerja penjualan.",
        "Komisi hanya diberikan pada akhir tahun."
      ],
      correct: "Salesperson mendapatkan komisi berdasarkan seberapa banyak target mereka tercapai."
    },
    {
      question: "Apa yang terjadi jika seorang salesperson mencapai 150% dari target mereka dalam rencana komisi?",
      options: [
        "Mereka tidak menerima komisi tambahan di atas 100% target.",
        "Komisi mereka dikurangi untuk mendorong persaingan yang adil.",
        "Penjualan mereka dilimpahkan ke kuartal berikutnya.",
        "Mereka mendapatkan tingkat komisi yang lebih tinggi, seperti yang ditentukan dalam rencana."
      ],
      correct: "Mereka mendapatkan tingkat komisi yang lebih tinggi, seperti yang ditentukan dalam rencana."
    }
  ],
  sales_materi24: [
    {
      question: "Saat menyiapkan webhook di Gelato, konfigurasi apa di field 'Events' yang memastikan Anda menerima pembaruan pesanan otomatis dari Gelato ke database Odoo Anda?",
      options: [
        "order_status_updated",
        "order_item_status_updated",
        "_store_product_template_created",
        "catalog_product_stock_availability_updated"
      ],
      correct: "order_status_updated"
    },
    {
      question: "Fitur apa yang memungkinkan Anda menarik dan menyinkronkan templat produk Gelato ke produk Odoo?",
      options: [
        "Product URL",
        "Product Template ID",
        "API Key",
        "Webhook secret"
      ],
      correct: "Product Template ID"
    },
    {
      question: "Bagaimana cara menambahkan metode pengiriman Gelato ke pesanan penjualan Odoo pada produk Gelato yang disinkronkan?",
      options: [
        "Klik tombol 'Add shipping' pada pesanan penjualan Odoo",
        "Klik tombol 'Odoo shipping' pada pesanan penjualan Gelato",
        "Pengiriman Gelato harus dikonfigurasi pada pesanan terpisah dari produk Gelato.",
        "Tidak ada cara untuk menambahkan pengiriman Gelato ke pesanan penjualan Odoo."
      ],
      correct: "Klik tombol 'Add shipping' pada pesanan penjualan Odoo"
    }
  ]
};