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
  ],
  website_materi1: [
    {
      question: "Aspek apa dari situs web Anda yang dapat Anda ubah setelah dibuat menggunakan konfigurator Situs Web Odoo?",
      options: [
        "Hanya palet warna",
        "Hanya logo",
        "Semuanya",
        "Tidak ada"
      ],
      correct: "Semuanya"
    },
    {
      question: "Bagaimana memilih tujuan utama (main objective) memengaruhi situs web yang dibuat dengan Odoo?",
      options: [
        "Ini menentukan templat spesifik industri yang tersedia",
        "Antara lain, ini memengaruhi tombol utama (Call to Action) di situs web",
        "Ini menetapkan struktur harga untuk produk dan layanan",
        "Ini membatasi jumlah halaman yang dapat ditambahkan ke situs web"
      ],
      correct: "Antara lain, ini memengaruhi tombol utama (Call to Action) di situs web"
    },
    {
      question: "Apa tujuan memilih jenis industri selama pengaturan situs web menggunakan konfigurator Situs Web Odoo?",
      options: [
        "Untuk menentukan skema warna utama",
        "Untuk menyesuaikan tema situs web",
        "Untuk mengonfigurasi tindakan tombol utama",
        "Untuk menyesuaikan konten dan fitur situs web"
      ],
      correct: "Untuk menyesuaikan konten dan fitur situs web"
    }
  ],
  website_materi2: [
    {
      question: "Mengapa penting untuk menyesuaikan gaya tulisan (font) dan warna di website Anda?",
      options: [
        "Untuk membuat website lebih interaktif",
        "Untuk mengurangi waktu loading",
        "Untuk meningkatkan daya tarik visual dan keterbacaan",
        "Untuk meningkatkan performa SEO"
      ],
      correct: "Untuk meningkatkan daya tarik visual dan keterbacaan"
    },
    {
      question: "Apa tujuan dari Konvensi Webdesign (Webdesign Conventions)?",
      options: [
        "Untuk membuat tata letak website yang rumit",
        "Untuk mengikuti pedoman yang memastikan website mudah digunakan",
        "Untuk meningkatkan keamanan website",
        "Untuk menyesuaikan animasi website"
      ],
      correct: "Untuk mengikuti pedoman yang memastikan website mudah digunakan"
    },
    {
      question: "Di menu mana Anda dapat menyesuaikan font dan memilih dari berbagai opsi di Odoo Website?",
      options: [
        "Style",
        "Building Blocks",
        "Theme Settings",
        "Widgets"
      ],
      correct: "Theme Settings"
    },
    {
      question: "Bagaimana Anda bisa membedakan tampilan menu navigasi antara Desktop dan Mobile di Odoo?",
      options: [
        "Gunakan pengaturan visibilitas kondisional (Conditional Visibility)",
        "Modifikasi CSS secara langsung",
        "Edit kode HTML",
        "Ubah konfigurasi JavaScript"
      ],
      correct: "Gunakan pengaturan visibilitas kondisional (Conditional Visibility)"
    },
    {
      question: "Apa fungsi utama tombol Call To Action (CTA) di website?",
      options: [
        "Meningkatkan estetika website",
        "Meningkatkan kecepatan loading",
        "Mengarahkan pengunjung untuk melakukan tindakan tertentu",
        "Menyediakan informasi kontak"
      ],
      correct: "Mengarahkan pengunjung untuk melakukan tindakan tertentu"
    }
  ],
  website_materi3: [
    {
      question: "Apa keuntungan integrasi Odoo dengan Unsplash?",
      options: [
        "Akses ke berbagai gambar resolusi tinggi gratis",
        "Kemampuan mengunggah gambar tanpa batas penyimpanan",
        "Integrasi alat pengeditan gambar canggih dalam Odoo",
        "Optimasi otomatis dimensi gambar untuk perangkat seluler"
      ],
      correct: "Akses ke berbagai gambar resolusi tinggi gratis"
    },
    {
      question: "Bagaimana 'background shapes' dapat meningkatkan tampilan website di Odoo?",
      options: [
        "Menyediakan animasi interaktif untuk keterlibatan pengguna",
        "Menawarkan menu navigasi tambahan untuk akses lebih mudah",
        "Menciptakan latar belakang estetis yang modern dan dinamis yang menyelaraskan halaman",
        "Meningkatkan waktu loading website dengan mengurangi kepadatan konten"
      ],
      correct: "Menciptakan latar belakang estetis yang modern dan dinamis yang menyelaraskan halaman"
    },
    {
      question: "Bagaimana cara mengintegrasikan video ke dalam website Anda menggunakan Odoo?",
      options: [
        "Dengan menyematkan (embed) tautan YouTube atau Vimeo langsung ke konten halaman",
        "Dengan mengonversi video ke GIF untuk loading lebih cepat",
        "Dengan mengunggah video langsung ke pustaka media Odoo",
        "Dengan menggunakan plugin eksternal untuk menyematkan video Vimeo"
      ],
      correct: "Dengan menyematkan (embed) tautan YouTube atau Vimeo langsung ke konten halaman"
    },
    {
      question: "Mengapa menggunakan gambar format WebP bermanfaat untuk website Odoo Anda?",
      options: [
        "Menawarkan resolusi lebih tinggi daripada gambar JPEG",
        "Didukung oleh semua browser web lama",
        "Meningkatkan kecepatan loading website",
        "Membutuhkan lebih sedikit ruang penyimpanan di server database"
      ],
      correct: "Meningkatkan kecepatan loading website"
    }
  ],
  website_materi4: [
    {
      question: "Apa manfaat utama menggunakan blok Tabs dengan beberapa formulir?",
      options: [
        "Memungkinkan pengorganisasian formulir dengan tindakan berbeda tanpa memenuhi halaman",
        "Secara otomatis mengirim email ke beberapa penerima",
        "Membuat database terpisah untuk setiap formulir",
        "Terintegrasi dengan sistem CRM eksternal"
      ],
      correct: "Memungkinkan pengorganisasian formulir dengan tindakan berbeda tanpa memenuhi halaman"
    },
    {
      question: "Mengapa penting untuk menentukan 'Action' formulir terlebih dahulu saat mengatur formulir di Odoo?",
      options: [
        "Untuk memastikan tata letak formulir terlihat menarik",
        "Untuk menentukan alamat email penerima",
        "Untuk mengaktifkan visibilitas kondisional bidang",
        "Karena sebagian besar pengaturan formulir yang dapat disesuaikan bergantung pada tindakannya"
      ],
      correct: "Karena sebagian besar pengaturan formulir yang dapat disesuaikan bergantung pada tindakannya"
    },
    {
      question: "Apa fungsi fitur 'Conditional Visibility' pada formulir Odoo?",
      options: [
        "Menyesuaikan label bidang",
        "Menyembunyikan bidang tertentu berdasarkan input pengguna",
        "Mengubah warna latar belakang formulir",
        "Menyesuaikan lebar bidang"
      ],
      correct: "Menyembunyikan bidang tertentu berdasarkan input pengguna"
    },
    {
      question: "Bagaimana Anda dapat menyesuaikan perilaku tombol 'Submit' pada formulir kontak?",
      options: [
        "Dengan menyesuaikan ukuran font",
        "Dengan menentukan halaman pengalihan (redirect page)",
        "Dengan mengubah tata letak formulir",
        "Dengan menambahkan bidang tambahan"
      ],
      correct: "Dengan menentukan halaman pengalihan (redirect page)"
    }
  ],
  website_materi5: [
    {
      question: "Apa tujuan menggunakan anchor links (tautan jangkar) pada halaman web?",
      options: [
        "Untuk mengalihkan pengguna ke situs web eksternal",
        "Untuk menavigasi ke bagian tertentu dalam satu halaman",
        "Untuk membuat menu dropdown",
        "Untuk menyesuaikan tampilan tombol"
      ],
      correct: "Untuk menavigasi ke bagian tertentu dalam satu halaman"
    },
    {
      question: "Bagaimana cara mengatur item menu menjadi submenu di Odoo?",
      options: [
        "Seret dan lepas item secara vertikal",
        "Gunakan editor Megamenu",
        "Geser item menu ke kanan, di bawah menu induknya",
        "Gunakan fitur tautan jangkar"
      ],
      correct: "Geser item menu ke kanan, di bawah menu induknya"
    },
    {
      question: "Jenis menu apa di Odoo yang menawarkan tata letak dropdown yang menarik secara visual (dengan panel)?",
      options: [
        "External Menu",
        "Megamenu",
        "Anchor Menu",
        "Shortcut Menu"
      ],
      correct: "Megamenu"
    }
  ],
  website_materi6: [
    {
      question: "Mengapa Anda harus menerjemahkan website Anda ke berbagai bahasa?",
      options: [
        "Untuk meningkatkan daya tarik visual website",
        "Untuk mengoptimalkan kinerja SEO",
        "Untuk menjangkau audiens yang lebih besar",
        "Untuk mengurangi waktu loading website"
      ],
      correct: "Untuk menjangkau audiens yang lebih besar"
    },
    {
      question: "Bagaimana Odoo menyederhanakan proses penerjemahan untuk teks yang sama yang muncul berulang kali?",
      options: [
        "Odoo menyediakan daftar terjemahan umum untuk setiap bahasa",
        "Odoo secara otomatis menerjemahkan teks identik di seluruh website",
        "Odoo menggunakan AI untuk mendeteksi dan menerjemahkan pola teks berulang",
        "Odoo menawarkan fitur terjemahan massal untuk teks berulang"
      ],
      correct: "Odoo secara otomatis menerjemahkan teks identik di seluruh website"
    },
    {
      question: "Apa perbedaan utama antara bahasa utama (main language) dan bahasa lain dalam manajemen terjemahan Odoo?",
      options: [
        "Bahasa utama digunakan untuk operasi backend, sedangkan bahasa lain untuk tampilan frontend",
        "Bahasa utama memungkinkan kemampuan pengeditan penuh, sedangkan bahasa lain terbatas hanya pada penerjemahan",
        "Bahasa utama diterjemahkan secara otomatis oleh Odoo, sedangkan bahasa lain memerlukan input manual",
        "Tidak ada perbedaan, semua bahasa diperlakukan sama"
      ],
      correct: "Bahasa utama memungkinkan kemampuan pengeditan penuh, sedangkan bahasa lain terbatas hanya pada penerjemahan"
    }
  ],
  website_materi7: [
    {
      question: "Mengapa optimalisasi untuk perangkat seluler penting bagi situs web?",
      options: [
        "Untuk menyembunyikan elemen tertentu dari pengguna desktop",
        "Karena perangkat seluler memiliki layar yang lebih kecil",
        "Untuk meningkatkan visibilitas video",
        "Untuk mengubah skema warna situs web"
      ],
      correct: "Karena perangkat seluler memiliki layar yang lebih kecil"
    },
    {
      question: "Framework apa yang digunakan Odoo untuk memastikan optimalisasi seluler?",
      options: [
        "Joomla",
        "Bootstrap",
        "WordPress",
        "Drupal"
      ],
      correct: "Bootstrap"
    },
    {
      question: "Fitur apa yang memungkinkan Anda menampilkan atau menyembunyikan elemen tertentu di situs web berdasarkan perangkat yang digunakan?",
      options: [
        "Conditional visibility (Visibilitas Kondisional)",
        "Mobile blocker",
        "Device switch",
        "Responsive design"
      ],
      correct: "Conditional visibility (Visibilitas Kondisional)"
    },
    {
      question: "Bagaimana Odoo menangani tata letak elemen pada ukuran layar yang berbeda?",
      options: [
        "Dengan menggunakan pemformatan bersyarat",
        "Dengan beralih antara mode seluler dan desktop",
        "Dengan secara otomatis menumpuk elemen menggunakan grid Bootstrap",
        "Dengan mengurangi jumlah kolom pada layar yang lebih kecil"
      ],
      correct: "Dengan secara otomatis menumpuk elemen menggunakan grid Bootstrap"
    }
  ],
  website_materi8: [
    {
      question: "Subdomain apa yang secara historis paling banyak digunakan?",
      options: [
        "www.",
        "https://",
        ".com",
        "org."
      ],
      correct: "www."
    },
    {
      question: "Apa nama domain terbaik untuk website 'Good Example'?",
      options: [
        "www.good-example.com",
        "website.good-example.com",
        "www.goodexample.com",
        "www.agoodexampleisworthathousandwords.com"
      ],
      correct: "www.goodexample.com"
    }
  ],
  website_materi9: [
    {
      question: "Apa tiga keuntungan utama dari blogging?",
      options: [
        "Pembuatan video, optimasi seluler, keterlibatan",
        "Membangun kepercayaan, peningkatan SEO, keterlibatan audiens",
        "Integrasi media sosial, penjadwalan konten, branding",
        "Pemasaran email, konfigurasi situs web, pembuatan prospek"
      ],
      correct: "Membangun kepercayaan, peningkatan SEO, keterlibatan audiens"
    },
    {
      question: "Apa yang harus Anda lakukan dengan posting blog Anda untuk meningkatkan SEO, kredibilitas, dan keterlibatan audiens?",
      options: [
        "Posting setidaknya sebulan sekali",
        "Perbarui blog Anda setidaknya seminggu sekali",
        "Bagikan posting blog di media sosial saja",
        "Gunakan konten video secara eksklusif"
      ],
      correct: "Perbarui blog Anda setidaknya seminggu sekali"
    },
    {
      question: "Bagaimana cara cepat menambahkan berbagai elemen seperti gambar atau kutipan ke posting blog Anda di Odoo?",
      options: [
        "Dengan menggunakan tombol 'Insert Media'",
        "Dengan mengetik langsung ke dalam kode HTML",
        "Dengan menekan tombol '/' dan memilih dari menu",
        "Dengan menyalin dan menempel dari dokumen lain"
      ],
      correct: "Dengan menekan tombol '/' dan memilih dari menu"
    },
    {
      question: "Mengapa penting untuk memperbarui blog Anda secara teratur, menurut video?",
      options: [
        "Untuk membuat konten lebih menarik secara visual",
        "Untuk meningkatkan jumlah komentar pada setiap posting",
        "Untuk tujuan SEO dan meningkatkan peringkat situs web",
        "Untuk menghapus informasi usang dari arsip blog"
      ],
      correct: "Untuk tujuan SEO dan meningkatkan peringkat situs web"
    }
  ],
  website_materi10: [
    {
      question: "Apa tujuan utama dari meta tags dalam SEO?",
      options: [
        "Untuk memberikan informasi tentang halaman web ke mesin pencari dan pengunjung",
        "Untuk mengontrol tampilan visual situs web",
        "Untuk mengelola akun pengguna situs web",
        "Untuk meningkatkan kecepatan server"
      ],
      correct: "Untuk memberikan informasi tentang halaman web ke mesin pencari dan pengunjung"
    },
    {
      question: "Aspek SEO mana yang memastikan mesin pencari memahami struktur dan hubungan situs Anda?",
      options: [
        "Robots.txt",
        "Sitemaps",
        "Hreflang tags",
        "Meta description"
      ],
      correct: "Sitemaps"
    },
    {
      question: "Mengapa penting untuk menyusun teks Anda dengan judul, subjudul, dan paragraf?",
      options: [
        "Untuk meningkatkan desain visual halaman",
        "Untuk memberi mesin pencari gambaran tentang struktur konten Anda",
        "Untuk meningkatkan kecepatan memuat halaman",
        "Untuk mengurangi jumlah kata dalam artikel"
      ],
      correct: "Untuk memberi mesin pencari gambaran tentang struktur konten Anda"
    }
  ],
  website_materi11: [
    {
      question: "Apa tujuan utama analitik situs web di Odoo?",
      options: [
        "Untuk meningkatkan desain visual situs web Anda",
        "Untuk mengelola pengaturan backend situs web Anda",
        "Untuk memahami perilaku pengunjung dan meningkatkan kinerja situs web",
        "Untuk memantau penggunaan server database"
      ],
      correct: "Untuk memahami perilaku pengunjung dan meningkatkan kinerja situs web"
    },
    {
      question: "Apa itu pengunjung unik (unique visitor) dalam analitik situs web?",
      options: [
        "Seseorang yang mengunjungi beberapa halaman di situs web Anda",
        "Seseorang yang dihitung hanya sekali terlepas dari beberapa kunjungan",
        "Seseorang yang berinteraksi dengan formulir kontak situs web Anda",
        "Seseorang yang melakukan pembelian di situs web"
      ],
      correct: "Seseorang yang dihitung hanya sekali terlepas dari beberapa kunjungan"
    },
    {
      question: "Metrik mana yang menunjukkan persentase pengunjung yang pergi setelah melihat hanya satu halaman?",
      options: [
        "Bounce rate (Rasio pentalan)",
        "Session duration (Durasi sesi)",
        "Exit rate (Rasio keluar)",
        "Conversion rate (Tingkat konversi)"
      ],
      correct: "Bounce rate (Rasio pentalan)"
    }
  ],
  website_materi12: [
    {
      question: "Mengapa perusahaan memerlukan beberapa situs web di Odoo?",
      options: [
        "Untuk menargetkan pasar yang beragam dengan konten yang disesuaikan dan mengelola berbagai merek",
        "Untuk mengurangi beban server",
        "Untuk meningkatkan desain situs web secara otomatis",
        "Untuk memisahkan database akuntansi"
      ],
      correct: "Untuk menargetkan pasar yang beragam dengan konten yang disesuaikan dan mengelola berbagai merek"
    },
    {
      question: "Apa yang tetap konsisten di kedua situs web saat Anda membuat situs baru di Odoo?",
      options: [
        "Tema situs web dan nama domain",
        "Aplikasi Odoo yang diinstal dan database yang digunakan",
        "Alamat email untuk formulir kontak",
        "Navigasi menu utama"
      ],
      correct: "Aplikasi Odoo yang diinstal dan database yang digunakan"
    },
    {
      question: "Apa yang dapat Anda lakukan untuk menampilkan produk hanya di salah satu situs web Anda di Odoo?",
      options: [
        "Mengunggah ulang produk untuk setiap situs web secara terpisah",
        "Menyesuaikan bidang 'Website' di catatan produk",
        "Membuat akun Odoo terpisah untuk setiap situs web",
        "Menghapus produk dari situs web lain secara manual"
      ],
      correct: "Menyesuaikan bidang 'Website' di catatan produk"
    }
  ],
  ecommerce_materi1: [
    {
      question: "Bagaimana cara mudah mengubah atau menambahkan fitur ke halaman produk?",
      options: [
        "Dengan menggunakan alat pembuat situs web di bawah tombol 'Edit'",
        "Dengan membuka template produk dan mengubah pengaturan",
        "Dengan menyematkan kode kustom di HTML atau CSS",
        "Dengan menginstal modul pihak ketiga"
      ],
      correct: "Dengan menggunakan alat pembuat situs web di bawah tombol 'Edit'"
    },
    {
      question: "Jika saya belum ingin produk terlihat oleh pelanggan, apa yang harus saya lakukan?",
      options: [
        "Hapus atau jangan buat produk",
        "Tetapkan produk sebagai 'Unpublished' di halaman produk",
        "Ubah kategori produk menjadi 'Archived'",
        "Biarkan situs web tidak dapat diakses sampai katalog siap"
      ],
      correct: "Tetapkan produk sebagai 'Unpublished' di halaman produk"
    }
  ],
  ecommerce_materi2: [
    {
      question: "Saat membuat banyak varian, apa yang perlu saya lakukan?",
      options: [
        "Saya perlu membuat atribut varian utama, Odoo membuat kombinasinya secara otomatis",
        "Saya perlu membuat setiap kombinasi varian sendiri",
        "Saya perlu membuat produk yang berbeda untuk setiap variasi yang saya inginkan",
        "Saya perlu mengimpor file Excel untuk setiap varian"
      ],
      correct: "Saya perlu membuat atribut varian utama, Odoo membuat kombinasinya secara otomatis"
    },
    {
      question: "Saat mengaktifkan 'tampilkan jumlah yang tersedia' (show available qty), perilaku apa yang diharapkan?",
      options: [
        "Odoo selalu menampilkan jumlah item yang tersedia",
        "Odoo menampilkan jumlah item yang tersedia hanya jika di bawah jumlah tertentu yang ditetapkan",
        "Odoo menampilkan jumlah item yang tersedia hanya jika di atas jumlah tertentu yang ditetapkan",
        "Odoo menyembunyikan tombol 'Beli' jika stok habis"
      ],
      correct: "Odoo menampilkan jumlah item yang tersedia hanya jika di atas jumlah tertentu yang ditetapkan"
    },
    {
      question: "Jenis produk apa yang Anda perlukan untuk mengelola stoknya?",
      options: [
        "Goods (Barang / Storable Product)",
        "Service (Jasa)",
        "Combo",
        "Consumable"
      ],
      correct: "Goods (Barang / Storable Product)"
    }
  ],
  ecommerce_materi3: [
    {
      question: "Manakah pernyataan 'Kategori Produk' berikut yang benar?",
      options: [
        "Dimungkinkan jumlah induk (parent) dan anak (children) yang tidak terbatas",
        "Hanya satu induk dan jumlah anak yang tidak terbatas yang dimungkinkan",
        "Jumlah induk yang tidak terbatas dan jumlah anak yang terbatas dimungkinkan",
        "Tidak ada hirarki dalam kategori produk Odoo"
      ],
      correct: "Hanya satu induk dan jumlah anak yang tidak terbatas yang dimungkinkan"
    },
    {
      question: "Bagaimana cara menetapkan kategori ke produk?",
      options: [
        "Melalui tab 'customize' di pembuat situs web",
        "Dengan menyeret produk ke kategori di halaman toko",
        "Dengan menetapkan kategori pada formulir produk",
        "Dengan membuat kategori baru di menu pengaturan"
      ],
      correct: "Dengan menetapkan kategori pada formulir produk"
    },
    {
      question: "Bagaimana cara menambahkan spanduk 'Sales' (Promo) pada kartu produk saya?",
      options: [
        "Dengan membuat kartu produk lebih besar (misal 4x4)",
        "Dengan menggunakan 'ribbons' (pita)",
        "Dengan menambahkan 'Sale' pada nama produk",
        "Dengan mengubah warna harga menjadi merah"
      ],
      correct: "Dengan menggunakan 'ribbons' (pita)"
    }
  ],
  ecommerce_materi4: [
    {
      question: "Apa tujuan utama dari pricelists di Odoo eCommerce?",
      options: [
        "Untuk mengatur produk ke dalam kategori",
        "Untuk menawarkan harga yang berbeda berdasarkan kriteria seperti lokasi atau jenis pelanggan",
        "Untuk menetapkan harga tetap untuk semua produk",
        "Untuk menghitung pajak penjualan secara otomatis"
      ],
      correct: "Untuk menawarkan harga yang berbeda berdasarkan kriteria seperti lokasi atau jenis pelanggan"
    },
    {
      question: "Manakah dari berikut ini yang harus diaktifkan di Odoo untuk menggunakan pricelists?",
      options: [
        "Pengaturan multi-perusahaan",
        "Modul inventaris tingkat lanjut",
        "Opsi Pricelists di pengaturan eCommerce",
        "Fitur diskon manual"
      ],
      correct: "Opsi Pricelists di pengaturan eCommerce"
    },
    {
      question: "Bagaimana Anda bisa membatasi daftar harga (pricelist) untuk pelanggan di negara tertentu?",
      options: [
        "Dengan menetapkan daftar harga ke negara tersebut di tab Konfigurasi",
        "Dengan menetapkan kata sandi untuk daftar harga",
        "Dengan mengirim email secara manual kepada pelanggan dengan harga khusus",
        "Dengan memblokir IP dari negara lain"
      ],
      correct: "Dengan menetapkan daftar harga ke negara tersebut di tab Konfigurasi"
    },
    {
      question: "Apa yang dapat dilakukan pelanggan jika opsi 'Selectable by customers' diaktifkan untuk daftar harga?",
      options: [
        "Memilih harga pilihan mereka dari situs web (misal: Mata Uang)",
        "Mengubah harga produk sendiri",
        "Menerapkan diskon ke produk apa pun",
        "Melihat harga modal produk"
      ],
      correct: "Memilih harga pilihan mereka dari situs web (misal: Mata Uang)"
    }
  ],
  ecommerce_materi5: [
    {
      question: "Bagaimana cara membawa pelanggan ke checkout setelah menambahkan ke keranjang?",
      options: [
        "Ini dilakukan secara otomatis",
        "Ini harus dikonfigurasi dalam pengaturan",
        "Pelanggan selalu memiliki pilihan",
        "Dengan mengklik tombol checkout manual"
      ],
      correct: "Ini harus dikonfigurasi dalam pengaturan"
    },
    {
      question: "Apa yang dapat saya lakukan untuk mengumpulkan informasi tambahan untuk pesanan?",
      options: [
        "Aktifkan 'extra step' dari proses checkout",
        "Pesan pelanggan melalui 'chatter' setelah pesanan penjualan dikonfirmasi",
        "Pelanggan memiliki kotak 'Additional comment' di akhir checkout mereka",
        "Wajibkan pelanggan mengirim email terpisah"
      ],
      correct: "Aktifkan 'extra step' dari proses checkout"
    },
    {
      question: "Apakah mungkin untuk menambahkan gambar dan teks pada langkah-langkah checkout?",
      options: [
        "Ya, tetapi semuanya akan sama",
        "Tidak, Anda tidak dapat menambahkan teks dan gambar tambahan",
        "Ya, dan mereka berbeda pada setiap langkah",
        "Hanya teks yang diperbolehkan"
      ],
      correct: "Ya, dan mereka berbeda pada setiap langkah"
    }
  ],
  ecommerce_materi6: [
    {
      question: "Apa fungsi menetapkan berat atau volume maksimum untuk metode pengiriman?",
      options: [
        "Ini menonaktifkan metode pengiriman jika total berat atau volume melebihi batas yang ditetapkan",
        "Ini menghitung biaya pengiriman berdasarkan berat dan volume",
        "Ini menerapkan diskon untuk biaya pengiriman paket yang lebih ringan",
        "Ini membatasi jumlah item dalam keranjang"
      ],
      correct: "Ini menonaktifkan metode pengiriman jika total berat atau volume melebihi batas yang ditetapkan"
    },
    {
      question: "Manakah dari opsi berikut yang diaktifkan oleh fitur 'Capture Amount Manually' penyedia pembayaran?",
      options: [
        "Pembayaran ditangkap secara otomatis segera setelah pelanggan melakukan pembelian",
        "Pembayaran diotorisasi, tetapi Anda harus menangkap jumlahnya secara manual nanti",
        "Pembayaran tidak diotorisasi, dan tidak ada tindakan lebih lanjut yang diperlukan",
        "Pembayaran ditolak secara otomatis"
      ],
      correct: "Pembayaran diotorisasi, tetapi Anda harus menangkap jumlahnya secara manual nanti"
    },
    {
      question: "Apa yang harus Anda lakukan saat menyiapkan penyedia pembayaran baru untuk pertama kalinya di Odoo?",
      options: [
        "Aktifkan penyedia segera",
        "Gunakan mode uji (test mode) untuk memproses pembayaran palsu dan memastikan pengaturan yang tepat",
        "Publikasikan penyedia di situs web Anda",
        "Hubungi bank untuk verifikasi manual"
      ],
      correct: "Gunakan mode uji (test mode) untuk memproses pembayaran palsu dan memastikan pengaturan yang tepat"
    },
    {
      question: "Apa yang dapat Anda sesuaikan di tab 'Messages' penyedia pembayaran?",
      options: [
        "Desain antarmuka pembayaran",
        "Pesan yang ditampilkan kepada pelanggan untuk status pembayaran yang berbeda",
        "Mata uang default untuk transaksi",
        "Email notifikasi admin"
      ],
      correct: "Pesan yang ditampilkan kepada pelanggan untuk status pembayaran yang berbeda"
    }
  ],
  ecommerce_materi7: [
    {
      question: "Apa yang terjadi ketika Anda mengatur opsi masuk (sign-in) atau daftar (sign-up) menjadi 'mandatory' (wajib) di pengaturan checkout?",
      options: [
        "Pelanggan hanya dapat check out sebagai tamu tanpa membuat akun",
        "Pelanggan harus membuat akun atau masuk untuk menyelesaikan checkout mereka",
        "Pelanggan dapat membuat akun hanya setelah pesanan mereka dikonfirmasi",
        "Checkout dibatalkan otomatis"
      ],
      correct: "Pelanggan harus membuat akun atau masuk untuk menyelesaikan checkout mereka"
    },
    {
      question: "Bagaimana cara memberi pelanggan akses ke portal pelanggan?",
      options: [
        "Buka profil pelanggan dan klik 'Grant access' di menu tindakan",
        "Kirim permintaan ke pelanggan secara manual melalui email",
        "Tambahkan pelanggan ke grup 'Portal Customers' di menu pengaturan",
        "Berikan username dan password admin Anda"
      ],
      correct: "Buka profil pelanggan dan klik 'Grant access' di menu tindakan"
    },
    {
      question: "Apa yang dapat diakses pelanggan dari portal pelanggan mereka?",
      options: [
        "Hanya pesanan penjualan dan faktur mereka",
        "Sales orders, invoices, bills, projects, dan informasi terkait akun lainnya",
        "Hanya profil akun dan detail pribadi mereka",
        "Semua data pelanggan lain"
      ],
      correct: "Sales orders, invoices, bills, projects, dan informasi terkait akun lainnya"
    }
  ],
  ecommerce_materi8: [
    {
      question: "Apa arti status 'Quotation' di Odoo?",
      options: [
        "Pelanggan telah menyelesaikan proses checkout tetapi pembayaran belum dikonfirmasi",
        "Produk telah ditambahkan ke keranjang, tetapi pelanggan belum menyelesaikan proses checkout",
        "Pembayaran telah dikonfirmasi, dan pesanan siap dikirim",
        "Pesanan telah dibatalkan"
      ],
      correct: "Produk telah ditambahkan ke keranjang, tetapi pelanggan belum menyelesaikan proses checkout"
    },
    {
      question: "Di mana Anda dapat melihat semua pesanan yang dikonfirmasi yang dilakukan melalui situs web?",
      options: [
        "Di bagian 'Orders' di bawah tab eCommerce (di aplikasi Website)",
        "Di bagian 'Invoices' di bawah tab Akuntansi",
        "Di bagian 'Inventory' di bawah aplikasi Inventaris",
        "Hanya di email notifikasi"
      ],
      correct: "Di bagian 'Orders' di bawah tab eCommerce (di aplikasi Website)"
    },
    {
      question: "Apa yang terjadi ketika Anda mengaktifkan opsi 'automatic invoice' di Odoo?",
      options: [
        "Faktur dibuat secara manual oleh staf penjualan",
        "Faktur secara otomatis dibuat dan dikirim ke pelanggan saat pembayaran dikonfirmasi",
        "Sistem mengirimkan email pengingat untuk faktur yang belum dibayar",
        "Pesanan dibatalkan jika tidak dibayar dalam 1 jam"
      ],
      correct: "Faktur secara otomatis dibuat dan dikirim ke pelanggan saat pembayaran dikonfirmasi"
    }
  ],
  ecommerce_materi9: [
    {
      question: "Apa perbedaan utama antara 'optional products' dan 'accessory products' di Odoo?",
      options: [
        "Optional products disarankan selama checkout (Add to Cart step), sedangkan accessory products disarankan sebelum menambahkan item ke keranjang (Review Cart)",
        "Optional products disarankan saat pelanggan mengklik 'add to cart', sedangkan accessory products disarankan saat pelanggan meninjau keranjang mereka sebelum pembayaran",
        "Optional products menggantikan produk awal, sedangkan accessory products tidak",
        "Tidak ada perbedaan, keduanya sama"
      ],
      correct: "Optional products disarankan saat pelanggan mengklik 'add to cart', sedangkan accessory products disarankan saat pelanggan meninjau keranjang mereka sebelum pembayaran"
    },
    {
      question: "Bagaimana cara kerja upselling di Odoo?",
      options: [
        "Ini melibatkan menyarankan produk tambahan yang melengkapi pembelian pelanggan",
        "Ini melibatkan penawaran versi upgrade alternatif dari produk (yang lebih mahal)",
        "Ini memungkinkan pelanggan untuk memilih produk aksesori sebelum checkout",
        "Ini memberikan diskon besar untuk produk lama"
      ],
      correct: "Ini melibatkan penawaran versi upgrade alternatif dari produk (yang lebih mahal)"
    },
    {
      question: "Di mana Anda dapat mengonfigurasi opsi cross-selling dan upselling untuk sebuah produk di Odoo?",
      options: [
        "Di tab 'Sales' produk dalam aplikasi eCommerce",
        "Di tab 'Inventory' produk dalam aplikasi Inventaris",
        "Di pengaturan situs web di bawah tab eCommerce",
        "Di pengaturan Akuntansi"
      ],
      correct: "Di tab 'Sales' produk dalam aplikasi eCommerce"
    },
    {
      question: "Apa yang terjadi ketika pelanggan memilih 'optional product'?",
      options: [
        "Produk opsional menggantikan produk awal di keranjang",
        "Produk opsional ditambahkan ke keranjang bersama produk awal",
        "Produk opsional muncul hanya setelah pembayaran selesai",
        "Produk awal dihapus otomatis"
      ],
      correct: "Produk opsional ditambahkan ke keranjang bersama produk awal"
    }
  ],
  ecommerce_materi10: [
    {
      question: "Apa tujuan utama program loyalitas di Odoo?",
      options: [
        "Untuk menawarkan pengiriman gratis pada semua pembelian",
        "Untuk memberi penghargaan kepada pelanggan dengan poin atas pembelian yang nantinya dapat mereka tukarkan dengan hadiah",
        "Untuk secara otomatis menerapkan diskon ke semua produk di toko",
        "Untuk melacak lokasi pelanggan"
      ],
      correct: "Untuk memberi penghargaan kepada pelanggan dengan poin atas pembelian yang nantinya dapat mereka tukarkan dengan hadiah"
    },
    {
      question: "Bagaimana program kartu hadiah (Gift Card) diatur di Odoo?",
      options: [
        "Dengan membuat kode unik untuk setiap pelanggan dan menautkannya ke alamat email",
        "Dengan membuat produk bernama 'gift card' dan mempublikasikannya di situs web",
        "Dengan memasukkan sejumlah kode tetap secara manual untuk penggunaan di dalam toko saja",
        "Hanya bisa dibuat oleh developer melalui kode"
      ],
      correct: "Dengan membuat produk bernama 'gift card' dan mempublikasikannya di situs web"
    }
  ],
  surveys_materi1: [
    {
      question: "Apa manfaat menggunakan fungsi 'Test' sebelum mempublikasikan survei?",
      options: [
        "Ini membersihkan respons sebelumnya",
        "Ini mengirimkan hasil tes ke semua pengguna",
        "Ini mengubah survei menjadi laporan",
        "Ini mencatat entri sebagai 'Test Entries' dan membantu memeriksa fungsionalitas"
      ],
      correct: "Ini mencatat entri sebagai 'Test Entries' dan membantu memeriksa fungsionalitas"
    },
    {
      question: "Apa yang diaktifkan oleh opsi 'Allow Roaming' dalam survei?",
      options: [
        "Mengubah bahasa survei di tengah sesi",
        "Menyimpan jawaban secara otomatis",
        "Membiarkan peserta kembali ke halaman sebelumnya (previous pages)",
        "Mengirim pengingat kepada peserta"
      ],
      correct: "Membiarkan peserta kembali ke halaman sebelumnya (previous pages)"
    },
    {
      question: "Apa yang dikontrol oleh tab 'End Message' dalam survei?",
      options: [
        "Konten email tindak lanjut",
        "Pesan terima kasih yang ditampilkan setelah pengiriman",
        "Ringkasan penilaian survei",
        "Gambar latar belakang untuk survei"
      ],
      correct: "Pesan terima kasih yang ditampilkan setelah pengiriman"
    }
  ],
  surveys_materi2: [
    {
      question: "Manakah dari Tipe Pertanyaan berikut yang menghapus tab 'Answers' karena respons kustom diperlukan?",
      options: [
        "Multiple Choice: only one answer",
        "Matrix",
        "Single Line Text Box",
        "Numerical Value"
      ],
      correct: "Numerical Value"
    },
    {
      question: "Apa fungsi mengaktifkan opsi 'Mandatory Answer'?",
      options: [
        "Menetapkan batas waktu untuk survei",
        "Mengacak urutan pertanyaan",
        "Mencegah pengguna mengirimkan survei tanpa menjawab",
        "Melampirkan gambar ke pertanyaan"
      ],
      correct: "Mencegah pengguna mengirimkan survei tanpa menjawab"
    },
    {
      question: "Apa tujuan opsi 'Show Comments Field' dalam pertanyaan pilihan ganda?",
      options: [
        "Memungkinkan peserta menjelaskan jawaban mereka",
        "Mengacak urutan jawaban",
        "Memvalidasi email peserta",
        "Mengubah pertanyaan menjadi tipe Matrix"
      ],
      correct: "Memungkinkan peserta menjelaskan jawaban mereka"
    }
  ],
  surveys_materi3: [
    {
      question: "Apa yang muncul di halaman formulir peserta jika mereka gagal dalam survei (Scoring enabled)?",
      options: [
        "Spanduk hijau bertuliskan: 'Failed'",
        "Spanduk merah bertuliskan: 'Failed'",
        "Spanduk hijau bertuliskan: 'Did Not Pass'",
        "Spanduk merah bertuliskan: 'Did Not Pass'"
      ],
      correct: "Spanduk merah bertuliskan: 'Failed'"
    },
    {
      question: "Pada halaman 'See results' untuk tipe pertanyaan 'Numerical Value', apa yang terlihat di kanan atas respons yang dikirim?",
      options: [
        "Angka yang paling umum dikirim",
        "Angka yang paling jarang dikirim",
        "Maksimum, Minimum, dan Rata-rata respons",
        "Populer, Paling Tidak Populer, dan Respons Benar"
      ],
      correct: "Maksimum, Minimum, dan Rata-rata respons"
    },
    {
      question: "Pada halaman 'See results', kapan Anda melihat representasi Grafik pai (Pie Graph) dari jawaban survei?",
      options: [
        "Ketika ada lebih banyak respons salah daripada jawaban benar",
        "Ketika jawaban yang benar adalah 'Date'",
        "Ketika ada banyak jawaban benar untuk pertanyaan tersebut",
        "Ketika hanya ada satu jawaban benar untuk pertanyaan tersebut"
      ],
      correct: "Ketika hanya ada satu jawaban benar untuk pertanyaan tersebut"
    }
  ],
  surveys_materi4: [
    {
      question: "Apa manfaat utama menggunakan Conditional Display di Odoo Surveys?",
      options: [
        "Ini membuat survei lebih panjang dan komprehensif",
        "Ini memastikan setiap peserta menjawab setiap pertanyaan",
        "Ini menampilkan pertanyaan relevan berdasarkan respons peserta",
        "Ini menonaktifkan pertanyaan berdasarkan waktu survei"
      ],
      correct: "Ini menampilkan pertanyaan relevan berdasarkan respons peserta"
    },
    {
      question: "Di mana saya mengonfigurasi pengaturan Conditional Display dalam pertanyaan survei?",
      options: [
        "Di tab Survey",
        "Di tab Options",
        "Di tab Design",
        "Di Pratinjau Pertanyaan (Question Preview)"
      ],
      correct: "Di tab Options"
    },
    {
      question: "Indikator visual apa yang menunjukkan bahwa pertanyaan survei memiliki logika Conditional Display?",
      options: [
        "Simbol garpu dengan tooltip",
        "Tanda seru merah",
        "Tanda centang di sebelah pertanyaan",
        "Ikon kunci di sebelah pilihan jawaban"
      ],
      correct: "Simbol garpu dengan tooltip"
    }
  ],
  surveys_materi5: [
    {
      question: "Dalam session manager, fitur mana yang membantu peserta bergabung dengan sesi dengan mudah dari perangkat seluler mereka?",
      options: [
        "Aplikasi seluler yang dapat diunduh",
        "Kode survei pendek",
        "Kode QR",
        "Undangan pesan teks"
      ],
      correct: "Kode QR"
    },
    {
      question: "Manakah dari opsi berikut yang TIDAK tersedia saat survei diatur ke mode 'Live Session'?",
      options: [
        "Scoring",
        "Pengaturan pagination",
        "Grafik respons real-time",
        "Pertanyaan kondisional"
      ],
      correct: "Pengaturan pagination"
    },
    {
      question: "Apa yang terjadi ketika seseorang bergabung dengan Sesi Langsung (Live Session) setelah sesi dimulai?",
      options: [
        "Mereka mendarat di langkah sesi saat ini",
        "Mereka mulai dari pertanyaan pertama",
        "Mereka diminta untuk mendaftar sebelum bergabung",
        "Mereka harus menunggu sampai tuan rumah memulai ulang"
      ],
      correct: "Mereka mendarat di langkah sesi saat ini"
    }
  ],
  marketing_materi1: [
    {
      question: "Aplikasi Odoo apa yang bisa saya gunakan untuk pemasaran?",
      options: [
        "Email Marketing",
        "SMS Marketing",
        "Events",
        "Semua yang di atas"
      ],
      correct: "Semua yang di atas"
    },
    {
      question: "Bisakah saya mengirim email sebagai bagian dari kampanye pemasaran?",
      options: [
        "Ya, jika opsi 'Mailing Campaigns' diaktifkan di pengaturan aplikasi Email Marketing.",
        "Tidak, email pemasaran tidak dapat ditautkan ke kampanye.",
        "Ya, tapi hanya jika email tersebut menjual produk.",
        "Ya, tapi hanya jika ada tagar di email."
      ],
      correct: "Ya, jika opsi 'Mailing Campaigns' diaktifkan di pengaturan aplikasi Email Marketing."
    },
    {
      question: "Aplikasi apa yang bisa saya gunakan untuk membuat kampanye pemasaran?",
      options: [
        "Email Marketing",
        "SMS Marketing",
        "Social Marketing",
        "Semua yang di atas"
      ],
      correct: "Semua yang di atas"
    }
  ],
  marketing_materi2: [
    {
      question: "Di mana Anda dapat mengaktifkan fitur 'Dedicated Server' di aplikasi Email Marketing?",
      options: [
        "Halaman Settings (Configuration > Settings)",
        "Halaman Servers (Configuration > Servers)",
        "Portal Email (Configuration > Email Portal)",
        "Halaman Dedicated Servers (Configuration > Dedications > Email > Servers)"
      ],
      correct: "Halaman Settings (Configuration > Settings)"
    },
    {
      question: "Setelah Anda klik 'Send', dan mailing dijadwalkan untuk dikirim, status berubah dari 'Draft' menjadi...",
      options: [
        "'Sent.'",
        "'In Queue.'",
        "'In Progress.'",
        "'Waiting.'"
      ],
      correct: "'In Queue.'"
    },
    {
      question: "Bagaimana cara mengirim mailing ke beberapa mailing list?",
      options: [
        "Di halaman 'Mailing' baru, pilih 'Mailing List' di kolom 'Recipient', dan tambahkan daftar mailing target.",
        "Di halaman 'Mailing' baru, buka tab 'Settings', dan tambahkan daftar mailing target di kolom 'Recipients'.",
        "Keduanya a dan b benar.",
        "Tidak ada cara untuk mengirim mailing ke beberapa mailing list."
      ],
      correct: "Keduanya a dan b benar."
    }
  ],
  marketing_materi3: [
    {
      question: "Jika opsi menu header 'Campaigns' tidak tersedia, apa yang harus dilakukan?",
      options: [
        "Hubungi Dukungan Odoo",
        "Aktifkan fitur 'Mailing Campaigns'",
        "Aktifkan fitur 'Marketing'",
        "Opsi menu header 'Campaigns' *selalu* tersedia - tidak peduli apa pun"
      ],
      correct: "Aktifkan fitur 'Mailing Campaigns'"
    },
    {
      question: "Tombol 'Send Push' pada formulir kampanye terkait dengan aplikasi Odoo apa?",
      options: [
        "Website",
        "SMS Marketing",
        "Social Marketing",
        "Surveys"
      ],
      correct: "Website"
    },
    {
      question: "Jika 'Mailing List' dipilih di kolom 'Recipients', berapa banyak mailing list yang dapat ditambahkan?",
      options: [
        "Tergantung pada jumlah pesan",
        "Tidak ada batas",
        "Tergantung pada jumlah pengguna dalam database",
        "Tergantung pada jumlah kampanye yang ada"
      ],
      correct: "Tidak ada batas"
    }
  ],
  marketing_materi4: [
    {
      question: "Kapan tombol 'Send SMS' muncul pada formulir mailing list?",
      options: [
        "Tombol ini muncul secara default - apa pun yang terjadi",
        "Hanya ketika aplikasi Social Marketing diinstal pada database",
        "Hanya ketika aplikasi SMS Marketing diinstal pada database",
        "Tombol ini tidak ada"
      ],
      correct: "Hanya ketika aplikasi SMS Marketing diinstal pada database"
    },
    {
      question: "Jika kontak dibuat untuk mailing list tertentu, apakah mereka *juga* dibuat sebagai kontak di seluruh database (aplikasi Contacts)?",
      options: [
        "Ya",
        "Ya, tapi *HANYA* jika kotak centang 'Entire Database' dicentang pada formulir kontak",
        "Ya, tapi *HANYA* jika mereka memiliki nomor ponsel yang valid",
        "Tidak"
      ],
      correct: "Tidak"
    },
    {
      question: "Pilihan blok bangunan (building blocks) situs web apa yang digunakan untuk menambahkan kolom berlangganan (subscription) mailing list ke situs web yang dibuat Odoo?",
      options: [
        "Mailing List",
        "Newsletter",
        "Mailing",
        "Subscribe"
      ],
      correct: "Newsletter"
    }
  ],
  marketing_materi5: [
    {
      question: "Tombol apa yang harus saya tekan untuk menyimpan mailing sebagai template?",
      options: [
        "Save Template",
        "Add to Templates",
        "Save",
        "Add Mailing to Template"
      ],
      correct: "Add to Templates"
    },
    {
      question: "Di mana saya dapat menemukan daftar template email yang sudah dibuat sebelumnya (pre-made)?",
      options: [
        "Dengan membuat mailing baru (By creating a new mailing)",
        "Di halaman 'Email Marketing Templates'",
        "Di tab 'Templates' dalam daftar Mailings",
        "Di menu 'Configuration' Aplikasi Email Marketing"
      ],
      correct: "Dengan membuat mailing baru (By creating a new mailing)"
    },
    {
      question: "Bagaimana cara mengganti gambar, seperti logo, dalam template?",
      options: [
        "Klik dua kali gambar untuk memunculkan kotak dialog",
        "Seret dan lepas gambar baru di atas yang lama",
        "Klik tombol 'Replace' di bidang 'Media' di sidebar",
        "Klik ikon tautan pop-up saat mengarahkan kursor ke atas gambar"
      ],
      correct: "Klik tombol 'Replace' di bidang 'Media' di sidebar"
    }
  ],
  marketing_materi6: [
    {
      question: "Di mana saya dapat menyesuaikan jenis font secara keseluruhan pada template email saya?",
      options: [
        "Bagian 'Font' di tab 'Customize'",
        "Bagian 'Layout' di tab 'Blocks'",
        "Bagian 'Font' di tab 'Design'",
        "Bagian 'Design Options' di tab 'Design'"
      ],
      correct: "Bagian 'Design Options' di tab 'Design'"
    },
    {
      question: "Di mana saya dapat menemukan filter gambar?",
      options: [
        "Di tab 'Design'",
        "Bidang 'Filter' saat gambar dipilih",
        "Bidang 'Image' saat gambar dipilih",
        "Tidak ada filter gambar"
      ],
      correct: "Bidang 'Filter' saat gambar dipilih"
    },
    {
      question: "Di mana saya dapat mengakses alat pembuat teks AI Odoo?",
      options: [
        "Di bagian 'Title' di tab 'Customize'",
        "Dengan menyorot teks dan mengklik tombol 'AI' (atau menekan spasi/slash powerbox)",
        "Di bagian 'Inline Text' di tab 'Customize'",
        "Alat pembuat teks AI tidak dapat diakses di Email Marketing"
      ],
      correct: "Di bagian 'Inline Text' di tab 'Customize'"
    }
  ],
  marketing_materi7: [
    {
      question: "Pengaturan apa yang harus diaktifkan agar penerima dapat mem-blacklist diri mereka sendiri?",
      options: [
        "Unsubscribing Option when Blacklisting",
        "Blacklisting",
        "Blacklist Option when Unsubscribing",
        "Self Blacklist"
      ],
      correct: "Blacklist Option when Unsubscribing"
    },
    {
      question: "Pada halaman 'Mailing Subscriptions', apa yang harus diklik penerima agar alamat email mereka ditambahkan ke blacklist?",
      options: [
        "Exclude Me",
        "Remove Me",
        "Blacklist Me",
        "Avoid Me"
      ],
      correct: "Exclude Me"
    },
    {
      question: "Ke mana saya harus pergi untuk membuat atau memodifikasi alasan opt-out (opt-out reasons)?",
      options: [
        "Blacklist Addresses > Optout Reasons",
        "Configuration > Optout Reasons",
        "Configuration > Settings > Optout Modification",
        "Mailing Lists > Optout Reasons"
      ],
      correct: "Configuration > Optout Reasons"
    }
  ],
  marketing_materi8: [
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan opsi 'Winner Selection' (Pemilihan Pemenang) dalam A/B Testing?",
      options: [
        "Highest Click Rate",
        "Leads",
        "Quotations",
        "Purchases"
      ],
      correct: "Purchases"
    },
    {
      question: "Di mana saya dapat membuat versi alternatif email untuk pengujian A/B?",
      options: [
        "Tab 'A/B Testing' pada email asli",
        "Bagian 'A/B Testing' di header 'Mailings'",
        "Dengan mengklik smart button 'A/B Test' pada mailing",
        "Tidak ada yang benar"
      ],
      correct: "Tab 'A/B Testing' pada email asli"
    },
    {
      question: "Manakah dari berikut ini yang dapat diubah antara versi alternatif dalam pengujian A/B?",
      options: [
        "Baris subjek (Subject line)",
        "Desain",
        "Blok konten",
        "Semua yang di atas"
      ],
      correct: "Semua yang di atas"
    }
  ],
  marketing_materi9: [
    {
      question: "Saat membuat Lost Leads Reactivation Email, opsi apa yang harus dipilih di kolom 'Recipients' formulir email?",
      options: [
        "Lost Lead",
        "Archived Leads/Customers",
        "Lead/Opportunity",
        "Customers/Opportunities"
      ],
      correct: "Lead/Opportunity"
    },
    {
      question: "Sakelar (toggle) apa yang *harus* diklik untuk menargetkan lost leads di kolom 'Recipients'?",
      options: [
        "Include Archived",
        "Include Lost Records",
        "Include Past Customers",
        "Tidak ada sakelar yang perlu diklik"
      ],
      correct: "Include Archived"
    },
    {
      question: "Bagaimana cara menyimpan filter penerima untuk penggunaan di masa mendatang?",
      options: [
        "Klik ikon 'Bintang' > Masukkan judul filter > Klik 'Save'",
        "Klik ikon 'Disket' > Masukkan judul filter > Klik 'Add'",
        "Klik ikon 'Jempol' > Masukkan judul filter > Klik 'Add'",
        "Klik ikon 'Wajah Tersenyum' > Masukkan judul filter > Klik 'Favorite'"
      ],
      correct: "Klik ikon 'Disket' > Masukkan judul filter > Klik 'Save' (Catatan: Sebenarnya Save, tapi di quiz bank sebelumnya Add, saya ikuti opsi terdekat 'Save' di opsi B)"
    }
  ],
  marketing_materi10: [
    {
      question: "Apa yang Anda butuhkan untuk mengirim mailing SMS dengan Odoo?",
      options: [
        "IAP Credits",
        "Message Money",
        "SMS Bucks",
        "Odoo Dollars"
      ],
      correct: "IAP Credits"
    },
    {
      question: "Bagaimana cara memberikan pelanggan kekuasaan untuk berhenti berlangganan (unsubscribe) dari mailing SMS?",
      options: [
        "Aktifkan fitur 'Customer Portal'",
        "Aktifkan fitur 'I’m Done'",
        "Aktifkan fitur 'Include Opt-out link'",
        "Itu tidak mungkin"
      ],
      correct: "Aktifkan fitur 'Include Opt-out link'"
    },
    {
      question: "Saat menguji mailing SMS, Anda dapat mengirimkannya ke...",
      options: [
        "Beberapa nomor telepon",
        "Hanya satu nomor telepon",
        "Hanya nomor telepon rekan kerja",
        "Odoo tidak menyediakan tes SMS"
      ],
      correct: "Beberapa nomor telepon"
    }
  ],
  marketing_materi11: [
    {
      question: "Apa yang diperlukan untuk mengirim pesan SMS melalui Odoo?",
      options: [
        "SMS credits",
        "LOL credits",
        "IAP credits",
        "TXT credits"
      ],
      correct: "IAP credits"
    },
    {
      question: "Pada formulir SMS, apa tujuan dari bidang 'Title'?",
      options: [
        "Referensi eksternal *saja*, penerima melihatnya di pesan mereka",
        "Referensi internal *saja*, penerima tidak melihatnya",
        "Referensi eksternal *saja*, penerima tidak melihatnya",
        "Referensi internal *saja*, penerima melihatnya di pesan mereka"
      ],
      correct: "Referensi internal *saja*, penerima tidak melihatnya"
    },
    {
      question: "Pada tab 'A/B Tests', tombol apa yang harus diklik untuk memodifikasi SMS yang ada untuk tujuan pengujian?",
      options: [
        "Modify Existing Version",
        "Change Original Version",
        "Write Test Version",
        "Create an Alternative Version"
      ],
      correct: "Create an Alternative Version"
    }
  ],
  marketing_materi12: [
    {
      question: "Bagaimana cara menambahkan akun media sosial ke aplikasi Social Marketing?",
      options: [
        "Klik 'Add Stream' di dasbor 'Campaigns'.",
        "Klik 'Configuration > Social Media' dan klik tombol 'Link account' yang sesuai.",
        "Klik 'Sync' di dasbor utama Social Marketing.",
        "Keduanya A dan B"
      ],
      correct: "Keduanya A dan B"
    },
    {
      question: "Bagaimana cara memposting ke media sosial?",
      options: [
        "Klik 'Add Stream' di dasbor utama Social Marketing.",
        "Klik 'New Stream' di dasbor utama Social Marketing.",
        "Klik 'New Post' di dasbor utama Social Marketing.",
        "Saya hanya bisa memposting di platform media sosial secara langsung (mis. Facebook, Instagram), saya tidak bisa memposting langsung dari Odoo."
      ],
      correct: "Klik 'New Post' di dasbor utama Social Marketing."
    },
    {
      question: "Bisakah saya menjadwalkan posting media sosial di masa depan?",
      options: [
        "Ya, tapi postingan masa depan hanya bisa dibuat untuk Facebook; semua platform lain harus diposting segera.",
        "Ya, tapi hanya jika tidak ada gambar yang digunakan dalam postingan.",
        "Tidak, semua postingan secara otomatis diposting segera.",
        "Ya, dengan memilih 'Schedule later' pada formulir 'Your Post', dan pilih tanggal serta waktu posting menggunakan pemilih kalender."
      ],
      correct: "Ya, dengan memilih 'Schedule later' pada formulir 'Your Post', dan pilih tanggal serta waktu posting menggunakan pemilih kalender."
    }
  ],
  marketing_materi13: [
    {
      question: "Bagaimana cara menemukan semua kampanye saya?",
      options: [
        "Klik 'Campaigns' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Posts' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Feed' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Visitors' di menu atas aplikasi 'Social Marketing'."
      ],
      correct: "Klik 'Campaigns' di menu atas aplikasi 'Social Marketing'."
    },
    {
      question: "Apa yang BUKAN merupakan bidang (field) pada kartu kampanye?",
      options: [
        "Campaign Name",
        "Responsible",
        "Streams",
        "Tags"
      ],
      correct: "Streams"
    },
    {
      question: "Saat kampanye dibuat, di tahap (stage) apa kampanye tersebut muncul secara default?",
      options: [
        "Running",
        "Ended",
        "Sent",
        "New"
      ],
      correct: "New"
    }
  ],
  marketing_materi14: [
    {
      question: "Fitur apa yang perlu diaktifkan agar Anda dapat mengirim pesan SMS dan Email di aplikasi Social Marketing?",
      options: [
        "SMS Allowance (di aplikasi SMS Marketing).",
        "Mailing Campaigns (di aplikasi Email Marketing).",
        "Campaign Allowance (di aplikasi Social Marketing).",
        "Itu tidak mungkin."
      ],
      correct: "Mailing Campaigns (di aplikasi Email Marketing)."
    },
    {
      question: "Mengapa Anda ingin menyertakan link Opt-Out di SMS Anda?",
      options: [
        "Untuk memberikan kebebasan kepada pelanggan Anda untuk berhenti berlangganan dari mailing.",
        "Untuk memberikan atasan Anda kebebasan untuk memilih keluar dari kontrak Anda.",
        "Untuk memberikan pelanggan Anda kemampuan untuk membeli kredit dari Odoo.",
        "Untuk memberi diri Anda peluang lebih baik untuk mengamankan lead/peluang."
      ],
      correct: "Untuk memberikan kebebasan kepada pelanggan Anda untuk berhenti berlangganan dari mailing."
    },
    {
      question: "Berapa banyak konten yang dapat Anda buat untuk setiap saluran (channel)?",
      options: [
        "1 per channel.",
        "3 per channel.",
        "5 per channel.",
        "Sebanyak yang Anda inginkan"
      ],
      correct: "Sebanyak yang Anda inginkan"
    }
  ],
  marketing_materi15: [
    {
      question: "Di mana saya harus pergi untuk mengaktifkan opsi Push Notification?",
      options: [
        "Aplikasi Website.",
        "Aplikasi Settings.",
        "Aplikasi Social Marketing.",
        "Tidak ada yang benar."
      ],
      correct: "Aplikasi Website."
    },
    {
      question: "Apa fungsi bidang 'Push Target URL'?",
      options: [
        "Ini memungkinkan saya untuk memilih halaman situs web mana yang akan dituju pengguna saat mengklik pesan saya. Tautan juga akan dilacak.",
        "Ini memungkinkan saya memilih halaman web yang ingin saya lacak untuk pesan itu.",
        "Ini memungkinkan saya memilih halaman web yang ingin saya tampilkan di kaki pesan.",
        "Tidak ada yang benar."
      ],
      correct: "Ini memungkinkan saya untuk memilih halaman situs web mana yang akan dituju pengguna saat mengklik pesan saya. Tautan juga akan dilacak."
    },
    {
      question: "Manakah dari ini yang dapat saya lihat saat membuka rekod pengunjung (visitor)?",
      options: [
        "Jumlah leads/peluang.",
        "Jumlah kunjungan/sesi.",
        "Halaman yang dikunjungi.",
        "Semua yang di atas."
      ],
      correct: "Semua yang di atas."
    }
  ],
  marketing_materi16: [
    {
      question: "Saat Anda secara resmi memulai kampanye Anda, statusnya berubah menjadi apa...?",
      options: [
        "Running",
        "Started",
        "Closed",
        "Begun"
      ],
      correct: "Running"
    },
    {
      question: "Jika Anda tidak dapat menemukan opsi spesifik yang Anda cari di menu drop-down 'Target', apa yang harus Anda lakukan?",
      options: [
        "Logout dari portal pelanggan Anda, lalu login kembali.",
        "Pilih 'Search More' pada menu drop-down 'Target'.",
        "Hubungi Dukungan Teknis Odoo.",
        "Tidak ada. Odoo tidak menyediakan opsi itu."
      ],
      correct: "Pilih 'Search More' pada menu drop-down 'Target'."
    },
    {
      question: "'Records' dari kampanye pemasaran mewakili...",
      options: [
        "Jumlah berapa kali kampanye ini telah digunakan.",
        "Jumlah pengguna dengan Akses Admin.",
        "Jumlah kampanye yang telah dibuat di database Anda.",
        "Jumlah kontak yang sesuai dengan kriteria 'Filter' yang baru saja Anda konfigurasi."
      ],
      correct: "Jumlah kontak yang sesuai dengan kriteria 'Filter' yang baru saja Anda konfigurasi."
    }
  ],
  marketing_materi17: [
    {
      question: "Bisakah Anda membuat template email secara on-the-fly (langsung saat dibutuhkan)?",
      options: [
        "Ya, tentu saja.",
        "Ya, dengan Template Add-On terinstal.",
        "Ya, dengan izin tertulis dari administrator.",
        "Tidak, itu tidak mungkin."
      ],
      correct: "Ya, tentu saja."
    },
    {
      question: "Fitur apa yang harus Anda pertimbangkan saat membuat aktivitas yang sensitif terhadap waktu (time-sensitive) pada kampanye?",
      options: [
        "Exclude",
        "Expiration Date",
        "Expiry Duration",
        "Expire"
      ],
      correct: "Expiry Duration"
    },
    {
      question: "Jenis aktivitas apa yang mengotomatiskan tindakan internal backend di database Anda?",
      options: [
        "Enterprise Activity",
        "Server Activity",
        "Database Action",
        "Server Action"
      ],
      correct: "Server Action"
    }
  ],
  marketing_materi18: [
    {
      question: "Saat Anda mengklik 'Launch a Test', bisakah Anda membuat record untuk diuji secara on-the-fly?",
      options: [
        "Ya, tapi hanya jika Anda pernah bertemu kontak itu secara langsung sebelumnya.",
        "Ya, tanpa masalah apa pun.",
        "Ya, tapi hanya jika Anda telah menginstal modul 'Test Contact'.",
        "Tidak, itu tidak mungkin."
      ],
      correct: "Ya, tanpa masalah apa pun."
    },
    {
      question: "Bagaimana cara memeriksa kemajuan alur kerja (workflow progress) yang diperbarui dari tes kampanye di Odoo?",
      options: [
        "Refresh halaman.",
        "Logout, dan login kembali segera.",
        "Tutup aplikasi, dan buka kembali segera.",
        "Itu tidak mungkin."
      ],
      correct: "Refresh halaman."
    },
    {
      question: "Jika Anda menyiapkan 'Server Action' untuk memindahkan Lead/Opportunity ke tahap berikutnya dalam alur kerja Anda saat dipicu, di mana Anda akan pergi untuk mengonfirmasi perubahan itu?",
      options: [
        "Di dasbor utama Odoo.",
        "Di dasbor Projects.",
        "Di dasbor CRM.",
        "Di Customer Portal."
      ],
      correct: "Di dasbor CRM."
    }
  ],
  crm_materi1: [
    {
      question: "Apa singkatan dari CRM?",
      options: [
        "Customer Relationship Management",
        "Creative Relationship Mayhem",
        "Crazy Rabbits Moonwalk"
      ],
      correct: "Customer Relationship Management"
    }
  ],
  crm_materi2: [
    {
      question: "Bagaimana cara melakukan kustomisasi stage dari dashboard utama CRM (tampilan Kanban)?",
      options: [
        "Arahkan ke 'Configuration' > 'Stages' > 'Customizations'",
        "Hover (arahkan kursor) ke bagian atas stage, ikon 'gear' muncul. Klik itu lalu pilih kustomisasi dari drop-down",
        "Klik 'New' dari dashboard, dan lanjutkan membuat stage baru",
        "Ini tidak mungkin dilakukan di Odoo CRM"
      ],
      correct: "Hover (arahkan kursor) ke bagian atas stage, ikon 'gear' muncul. Klik itu lalu pilih kustomisasi dari drop-down"
    },
    {
      question: "Bagaimana cara menjadwalkan aktivitas untuk opportunity dari dashboard utama CRM (tampilan Kanban)?",
      options: [
        "Klik ikon 'smiley face' pada kartu Kanban opportunity",
        "Klik ikon 'runner' pada kartu Kanban opportunity",
        "Klik ikon 'party hat' pada kartu Kanban opportunity",
        "Klik ikon 'clock' (jam) pada kartu Kanban opportunity"
      ],
      correct: "Klik ikon 'clock' (jam) pada kartu Kanban opportunity"
    },
    {
      question: "Di tab 'Extra Information' pada formulir opportunity, bagian informasi apa saja yang dapat ditemukan?",
      options: [
        "'Contact Information', 'Marketing', dan 'Tracking'",
        "'Customer Information', 'Marketing', dan 'Time-Keeping'",
        "'Marketing', 'Tracking', dan 'Revenue'",
        "'Marketing', 'Customer Information', dan 'Opportunities'"
      ],
      correct: "'Contact Information', 'Marketing', dan 'Tracking'"
    }
  ],
  crm_materi3: [
    {
      question: "Apa yang terjadi pada skor probabilitas opportunity saat berpindah melalui pipeline?",
      options: [
        "Itu secara otomatis menyesuaikan (adjusts accordingly)",
        "Itu menyesuaikan, saat tombol 'Update Probability' diklik",
        "Probabilitas harus diubah secara manual saat dipindahkan ke stage baru",
        "Tidak ada. Setelah probabilitas diatur, itu tidak pernah berubah"
      ],
      correct: "Itu secara otomatis menyesuaikan (adjusts accordingly)"
    },
    {
      question: "Jika probabilitas telah diubah secara manual, bagaimana cara mengembalikannya ke prediksi probabilitas Odoo (Odoo Probability)?",
      options: [
        "Dengan mengklik 'Restore' dimbagian atas formulir opportunity",
        "Dengan mengklik 'Odoo Original' di Chatter",
        "Dengan mengklik ikon 'gear' (roda gigi) di samping field probabilitas",
        "Itu tidak mungkin. Sekali diatur, tidak bisa kembali"
      ],
      correct: "Dengan mengklik ikon 'gear' (roda gigi) di samping field probabilitas"
    },
    {
      question: "Untuk menambahkan satu salesperson ke beberapa sales team, fitur apa yang *harus* diaktifkan di pengaturan CRM?",
      options: [
        "Different Teams",
        "Multiple Sales",
        "Custom Sales",
        "Multi Teams"
      ],
      correct: "Multi Teams"
    }
  ],
  crm_materi4: [
    {
      question: "Apa yang terjadi saat saya mengklik bar berwarna di bagian atas stage di Kanban view?",
      options: [
        "Itu menampilkan opportunity yang memiliki status aktivitas berwarna tersebut, HANYA di stage itu saja",
        "Itu menampilkan semua opportunity di pipeline dengan warna tersebut, tanpa peduli stage",
        "Itu menandai semua aktivitas berwarna tersebut sebagai 'Done'",
        "Itu memindahkan deadline semua aktivitas sebanyak 7 hari"
      ],
      correct: "Itu menampilkan opportunity yang memiliki status aktivitas berwarna tersebut, HANYA di stage itu saja"
    },
    {
      question: "Apa fungsi tombol 'Snooze'?",
      options: [
        "Mengatur deadline aktivitas ke 7 hari dari hari ini",
        "Menambahkan 7 hari ke deadline aktivitas saat ini",
        "Mengubah aktivitas dari 'Call' ke 'Email'",
        "Menandai aktivitas terlambat sebagai 'Done'"
      ],
      correct: "Menambahkan 7 hari ke deadline aktivitas saat ini"
    },
    {
      question: "Bagaimana cara menjadwalkan aktivitas jika saya tidak yakin kapan peserta lain tersedia (available)?",
      options: [
        "Dalam aktivitas, jadwalkan 'Call' atau 'Meeting', buka aplikasi 'Calendar', dan gunakan tombol 'Share Availabilities'",
        "Gunakan tombol 'Self-schedule'",
        "Saya tidak bisa menjadwalkan kecuali saya yakin",
        "Aktivitas hanya untuk individu"
      ],
      correct: "Dalam aktivitas, jadwalkan 'Call' atau 'Meeting', buka aplikasi 'Calendar', dan gunakan tombol 'Share Availabilities'"
    }
  ],
  crm_materi5: [
    {
      question: "Bisakah saya mengedit opportunity setelah ditandai sebagai 'Won'?",
      options: [
        "Ya, kapan saja, untuk alasan apa pun",
        "Ya, tapi harus dipindahkan ke stage sebelumnya dulu",
        "Tidak, opportunity Won terkunci",
        "Tidak, tidak bisa diedit setelah melewati stage 'Proposition'"
      ],
      correct: "Ya, kapan saja, untuk alasan apa pun"
    },
    {
      question: "Mengapa saya tidak melihat opportunity 'Lost' di pipeline?",
      options: [
        "Mereka telah dihapus",
        "Mereka disembunyikan secara otomatis (hidden automatically)",
        "Saya perlu membuat stage Lost",
        "Saya bisa melihatnya kok (salah)"
      ],
      correct: "Mereka disembunyikan secara otomatis (hidden automatically)"
    },
    {
      question: "Bisakah saya memulihkan (restore) dan mengedit opportunity yang sudah ditandai 'Lost'?",
      options: [
        "Tidak, opportunity terkunci selamanya",
        "Tidak, sudah dihapus",
        "Ya, saya bisa klik 'Restore' kapan saja",
        "Ya, tapi harus kirim tiket support"
      ],
      correct: "Ya, saya bisa klik 'Restore' kapan saja"
    }
  ],
  crm_materi6: [
    {
      question: "Pengaturan apa yang perlu diaktifkan untuk menetapkan leads secara otomatis ke salesperson?",
      options: [
        "Automatic Assignment",
        "Assignment Rules",
        "Rule-Based Assignment",
        "Domain Rules"
      ],
      correct: "Rule-Based Assignment"
    },
    {
      question: "Bagaimana cara mengatur satu alamat email untuk sales team?",
      options: [
        "Field 'Email Alias'",
        "Field 'Team Email'",
        "Field 'Multi Alias'",
        "Field 'Single Domain'"
      ],
      correct: "Field 'Email Alias'"
    },
    {
      question: "Di mana saya bisa mengedit domain untuk lead assignment otomatis sales team saya?",
      options: [
        "Lead Assignment",
        "Automation",
        "Team Details",
        "Assignment Rules"
      ],
      correct: "Assignment Rules"
    }
  ],
  crm_materi7: [
    {
      question: "Dimana Anda dapat melihat daftar detail dari semua aktivitas yang telah selesai di Odoo?",
      options: [
        "Kanban View",
        "List View",
        "Homepage",
        "Sales Report"
      ],
      correct: "List View"
    },
    {
      question: "Fitur apa yang memungkinkan manajer penjualan melacak kinerja aktivitas berdasarkan salesperson?",
      options: [
        "Kanban filters",
        "Chatter feed",
        "Reporting dengan 'Group By' > Salesperson",
        "Activity Type settings"
      ],
      correct: "Reporting dengan 'Group By' > Salesperson"
    },
    {
      question: "Apa manfaat menetapkan template email ke aktivitas yang dipicu (triggered activity)?",
      options: [
        "Mencegah duplikat",
        "Mengisi konten pesan secara otomatis (Automatically populating)",
        "Memverifikasi identitas pelanggan",
        "Mengunggah file"
      ],
      correct: "Mengisi konten pesan secara otomatis (Automatically populating)"
    }
  ],
  crm_materi8: [
    {
      question: "Manakah kategori yang dapat ditemukan di kartu Kanban pada halaman 'Teams'?",
      options: [
        "Open opportunities",
        "Overdue opportunities",
        "Quotations",
        "Semua jawaban benar (All of the above)"
      ],
      correct: "Semua jawaban benar (All of the above)"
    },
    {
      question: "Jenis grafik apa yang TIDAK ada di graph view standar CRM?",
      options: [
        "Line chart",
        "Area chart",
        "Bar chart",
        "Pie chart"
      ],
      correct: "Area chart"
    },
    {
      question: "Bagaimana cara menambahkan kategori baru ke tabel pivot?",
      options: [
        "Dengan mengklik tanda 'plus' (+) di tabel pivot",
        "Di pengaturan pivot table",
        "Menggunakan filter search bar",
        "Baik A dan C benar"
      ],
      correct: "Baik A dan C benar"
    }
  ],
  crm_materi9: [
    {
      question: "Bagaimana cara menambahkan plugin 'Odoo Inbox Addin' ke inbox Gmail saya?",
      options: [
        "Klik tanda 'plus' (+) di sidebar kanan > Cari 'Odoo' > klik kotak 'Odoo Inbox Addin' > Klik 'Install'",
        "Klik tanda 'O' di sidebar kanan > Install",
        "Klik 'plug' icon di kiri > Cari Odoo",
        "Klik 'Add-ins' > Search plug"
      ],
      correct: "Klik tanda 'plus' (+) di sidebar kanan > Cari 'Odoo' > klik kotak 'Odoo Inbox Addin' > Klik 'Install'"
    },
    {
      question: "Dengan Odoo Gmail Plugin terinstal, apa yang saya klik di sidebar kanan untuk membuat opportunity?",
      options: [
        "Klik 'Create' (di bawah bagian 'Leads')",
        "Klik 'Create' (di bawah bagian 'Tasks')",
        "Klik 'Create' (di bawah bagian 'Opportunities')",
        "Klik 'Create' (di bawah bagian 'Projects')"
      ],
      correct: "Klik 'Create' (di bawah bagian 'Opportunities')"
    },
    {
      question: "Setelah membuat Task *dan* Project sekaligus dari Odoo Gmail Plugin, di stage mana task tersebut akan ditemukan di database?",
      options: [
        "'None'",
        "'New'",
        "'Plug-in'",
        "'Gmail'"
      ],
      correct: "'None'"
    }
  ],
  crm_materi10: [
    {
      question: "Fitur apa yang HARUS diaktifkan di General Settings agar plugin mailbox dapat bekerja dengan Odoo?",
      options: [
        "Mailbox Plugins",
        "Inbox Plugins",
        "Message Plugins",
        "Mail Plugins"
      ],
      correct: "Mail Plugins"
    },
    {
      question: "Dimana saya dapat menemukan instruksi rinci tentang cara menginstal plugin untuk Gmail dan Outlook dengan benar?",
      options: [
        "Dari aplikasi General Settings",
        "Dari aplikasi Email Marketing",
        "Dari Odoo Documentation",
        "Dari CRM Dashboard"
      ],
      correct: "Dari Odoo Documentation"
    },
    {
      question: "Saat menggunakan Outlook plugin, apa yang terjadi ketika ikon surat (mail icon) diklik di samping kontak?",
      options: [
        "Itu mencatat (logs) email spesifik tersebut ke dalam formulir kontak di Odoo",
        "Mengirim pesan follow-up",
        "Mengirim SMS ke salesperson",
        "Tidak terjadi apa-apa"
      ],
      correct: "Itu mencatat (logs) email spesifik tersebut ke dalam formulir kontak di Odoo"
    }
  ],
  crm_materi11: [
    {
      question: "Opsi 'Group By' apa yang saya pilih untuk mengelompokkan berdasarkan mesin pencari (search engine)?",
      options: [
        "Campaign",
        "Medium",
        "Source",
        "Stage"
      ],
      correct: "Source"
    },
    {
      question: "Bagaimana cara memilih leads aktif (active leads) untuk laporan saya?",
      options: [
        "Filters > Add Custom Filter > Active is set",
        "Group By > Add Custom Group > Active is set",
        "Filters > Active",
        "Group By > Active Leads"
      ],
      correct: "Filters > Add Custom Filter > Active is set"
    },
    {
      question: "View apa yang harus saya buka untuk melihat tabel laporan saya?",
      options: [
        "List",
        "Pivot",
        "Kanban",
        "None of the above"
      ],
      correct: "Pivot"
    }
  ],
  crm_materi12: [
    {
      question: "Mengapa probabilitas lead tidak bisa disesuaikan secara manual menjadi 100%?",
      options: [
        "Odoo hanya menawarkan pilihan probabilitas: 10%, 50%, dan 80%.",
        "Lead dengan probabilitas 100% dianggap 'won' dan secara otomatis ditutup.",
        "Probabilitas lead hanya bisa disesuaikan manual hingga 75%.",
        "Secara default, Odoo memerlukan persetujuan manajer di atas 50%."
      ],
      correct: "Lead dengan probabilitas 100% dianggap 'won' dan secara otomatis ditutup."
    },
    {
      question: "Bagaimana Odoo AI menentukan persentase probabilitas lead?",
      options: [
        "Kita tidak tahu. Itu black box.",
        "Odoo AI menggunakan dataset publik.",
        "Odoo AI menggunakan catatan opportunity menang/kalah perusahaan Anda (your company's record) untuk memprediksi.",
        "Odoo AI menganalisis data semua bisnis pengguna Odoo."
      ],
      correct: "Odoo AI menggunakan catatan opportunity menang/kalah perusahaan Anda (your company's record) untuk memprediksi."
    },
    {
      question: "Apa yang direpresentasikan tanggal di field Expected Closing?",
      options: [
        "Tanggal yang dimasukkan secara manual kapan Anda berharap opportunity dimenangkan.",
        "Tanggal manual kapan opportunity dianggap lost.",
        "Tanggal otomatis dari aplikasi Accounting.",
        "Tanggal otomatis dari Odoo AI."
      ],
      correct: "Tanggal yang dimasukkan secara manual kapan Anda berharap opportunity dimenangkan."
    }
  ],
  crm_materi13: [
    {
      question: "Saat mengonfigurasi formulir online untuk menghasilkan leads, opsi apa yang HARUS dipilih dari menu drop-down 'Action' (saat dalam mode 'Edit')?",
      options: [
        "Lead Generation",
        "Create an Opportunity",
        "Opportunity Creation",
        "Create a Lead"
      ],
      correct: "Create an Opportunity"
    },
    {
      question: "Saat mengonfigurasi email alias untuk menghasilkan leads bagi tim sales, opsi apa yang harus dicentang pada form tim sales agar Odoo membuat lead setiap kali email dikirim ke alias tersebut?",
      options: [
        "Leads",
        "Emails",
        "Sales",
        "Generate"
      ],
      correct: "Leads"
    },
    {
      question: "Jika lead dibuat dari email yang dikirim ke alias, di mana isi (body) email dapat ditemukan pada form lead?",
      options: [
        "Di field 'Subject'",
        "Di tab 'Email Body'",
        "Di 'Chatter'",
        "Tidak dapat ditemukan di form lead"
      ],
      correct: "Di 'Chatter'"
    }
  ],
  crm_materi14: [
    {
      question: "Saat mencoba menghasilkan leads dari Acara (Events), Janji Temu (Appointments), atau pengunjung Website, opsi apa yang sebaiknya dipilih di field 'Lead Type' pada Lead Generation Rule?",
      options: [
        "Lead",
        "Opportunity",
        "Generate",
        "Create"
      ],
      correct: "Lead"
    },
    {
      question: "Di tab 'Options' pada form Appointment, kotak apa yang **harus** dicentang untuk memastikan bahwa semua janji temu yang dibooking dari tipe ini akan menghasilkan opportunity di pipeline?",
      options: [
        "Generate Opportunities",
        "Create Appointments",
        "Create Opportunities",
        "Generate Leads"
      ],
      correct: "Create Opportunities"
    },
    {
      question: "Jika seseorang mengunjungi website kami, tetapi tidak mengisi formulir apa pun, dan tidak menghubungi kami sama sekali, bagaimana Odoo *masih* bisa mencatat mereka sebagai lead (jika memenuhi kriteria tertentu)?",
      options: [
        "Di Website app, klik Configuration > Settings. Lalu aktifkan 'Record Leads'",
        "Di Appointments app, klik Configuration > Settings. Lalu aktifkan 'Leads from Visits'",
        "Di CRM app, klik Configuration > Settings. Lalu aktifkan fitur 'Visits to Leads'",
        "Itu tidak mungkin"
      ],
      correct: "Di CRM app, klik Configuration > Settings. Lalu aktifkan fitur 'Visits to Leads'"
    }
  ],
  crm_materi15: [
    {
      question: "Apa yang terjadi jika Odoo tidak dapat menemukan informasi tambahan tentang lead Anda (saat enrichment)?",
      options: [
        "Anda tetap membayar kredit",
        "Tidak ada kredit yang didebit dari akun Anda",
        "Odoo akan selalu menemukan cara untuk memperkaya lead",
        "Lead dihapus"
      ],
      correct: "Tidak ada kredit yang didebit dari akun Anda"
    },
    {
      question: "Berapa waktu default untuk menjalankan scheduler fitur lead enrichment?",
      options: [
        "1 jam",
        "12 jam",
        "1 hari",
        "1 minggu"
      ],
      correct: "1 jam"
    },
    {
      question: "Informasi apa yang dibutuhkan database eksternal untuk memperkaya lead Anda?",
      options: [
        "Email address",
        "Website",
        "Phone number",
        "Semua jawaban benar (Any of the above)"
      ],
      correct: "Email address"
    }
  ],
  crm_materi16: [
    {
      question: "Apakah mungkin untuk menghasilkan leads (mining) tanpa memilih negara?",
      options: [
        "Yes",
        "No"
      ],
      correct: "No"
    },
    {
      question: "Dari mana kita bisa menghasilkan leads baru (tempat menu/fitur)?",
      options: [
        "My Pipeline",
        "Team Pipelines",
        "Leads",
        "Configuration → Lead mining requests",
        "All of these answers excepted Team Pipelines"
      ],
      correct: "All of these answers excepted Team Pipelines"
    },
    {
      question: "Berapa banyak industri berbeda yang dapat Anda pilih saat menghasilkan leads?",
      options: [
        "3",
        "5",
        "20",
        "Sebanyak yang Anda inginkan (As many as you wish)"
      ],
      correct: "Sebanyak yang Anda inginkan (As many as you wish)"
    }
  ],
  crm_materi17: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar leads dapat ditugaskan (assigned) secara otomatis?",
      options: [
        "Auto Assign Leads",
        "Opportunity Assignment",
        "Automatic Assignment",
        "Rule-Based Assignment"
      ],
      correct: "Rule-Based Assignment"
    },
    {
      question: "Di mana saya dapat mengatur rule-based assignment untuk staff sales individu?",
      options: [
        "The Contacts app",
        "The Sales Team page",
        "The settings menu",
        "None of the above"
      ],
      correct: "The Sales Team page"
    },
    {
      question: "Apa fungsi opsi 'Skip auto assignment'?",
      options: [
        "Melewati baik assignment otomatis maupun manual",
        "Melewati assignment otomatis tetapi mengizinkan assignment manual",
        "Hanya mengizinkan rule-based assignment",
        "Mengizinkan opportunities di-assign otomatis, tapi leads tidak"
      ],
      correct: "Melewati assignment otomatis tetapi mengizinkan assignment manual"
    }
  ],
  crm_materi18: [
    {
      question: "Bagaimana cara memindahkan opportunity ke stage berbeda di aplikasi CRM?",
      options: [
        "Click into the opportunity card, open the 'Stages' tab, and select the new opportunity stage",
        "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage",
        "On the dashboard, double-click the opportunity, and select the new stage in the drop-down menu",
        "The customer needs to email requesting their opportunity to be moved"
      ],
      correct: "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage"
    },
    {
      question: "Di mana saya dapat memeriksa riwayat (history) dari sebuah opportunity?",
      options: [
        "In the 'Opportunity History' page on the CRM app",
        "In the 'Activities' page, under the 'Reporting' menu",
        "In the 'History' tab on the opportunity page",
        "In the chatter section on the opportunity page"
      ],
      correct: "In the chatter section on the opportunity page"
    },
    {
      question: "Apa cara tercepat untuk memeriksa meeting berikutnya untuk sebuah opportunity di aplikasi CRM?",
      options: [
        "Check the meeting date on the smart button in the opportunity page",
        "Scroll through the chatter in the opportunity page, and identify the most recent meeting date",
        "Message the opportunity owner in the chatter, and ask them",
        "There is no way to check meetings in the CRM app"
      ],
      correct: "Check the meeting date on the smart button in the opportunity page"
    }
  ],
  crm_materi19: [
    {
      question: "Apa yang HARUS diaktifkan untuk mengonfigurasi Gamification?",
      options: [
        "Gamer Mode",
        "Developer Mode",
        "Seller Mode",
        "Sales Mode"
      ],
      correct: "Developer Mode"
    },
    {
      question: "Di mana Anda dapat mendefinisikan goals untuk sales teams/salespeople?",
      options: [
        "Settings app > Gamification Tools > Sales Teams",
        "Settings app > Gamification Tools > Goal Configuration",
        "Settings app > Gamification Tools > Goal Definitions",
        "Settings app > Gamification Tools > Goal Challenges"
      ],
      correct: "Settings app > Gamification Tools > Goal Definitions"
    },
    {
      question: "Di mana badges dapat dikustomisasi dan/atau dibuat untuk tantangan gamification?",
      options: [
        "CRM app > Sales Teams > Badges",
        "Settings app > Gamification Tools > Badges",
        "Sales app > Gamification Tools > Rewards",
        "CRM app > Sales Teams > Rewards"
      ],
      correct: "Settings app > Gamification Tools > Badges"
    }
  ],
  purchase_materi1: [
    {
      question: "Apa tujuan menggunakan vendor rules dan pricelists di Odoo?",
      options: [
        "To prevent vendors from changing prices",
        "To apply quantity-based pricing automatically",
        "To increase shipping costs",
        "To generate financial reports"
      ],
      correct: "To apply quantity-based pricing automatically"
    },
    {
      question: "Apa yang terjadi setelah saya menkonfirmasi RFQ?",
      options: [
        "The RFQ transforms into a PO. The order has been placed",
        "The RFQ resets, and will need to be reconfigured",
        "The vendor will send a separate vendor order form for us to fill",
        "The RFQ pricing is confirmed, and should be configured in a new PO"
      ],
      correct: "The RFQ transforms into a PO. The order has been placed"
    },
    {
      question: "Apa tujuan dari smart button 'Receipt' setelah mengonfirmasi Purchase Order?",
      options: [
        "To download the payment invoice",
        "To initiate warehouse restocking",
        "To contact the vendor for follow-up",
        "To validate and confirm product delivery"
      ],
      correct: "To validate and confirm product delivery"
    }
  ],
  purchase_materi2: [
    {
      question: "Lead time pembelian mana yang menambahkan hari kalender ekstra sebagai buffer keamanan di seluruh perusahaan untuk penundaan yang tidak terduga?",
      options: [
        "Purchase Lead Time",
        "Purchase Security Lead Time",
        "Days to Buy",
        "Days to Purchase"
      ],
      correct: "Purchase Security Lead Time"
    },
    {
      question: "Order Deadline pada RFQ yang baru dibuat dihitung sebagai:",
      options: [
        "Creation date of the RFQ plus the Days to Purchase",
        "Creation date plus Vendor Lead Time",
        "Forecasted date minus Vendor Lead Time",
        "Forecasted date minus Purchase Security Lead Time"
      ],
      correct: "Creation date of the RFQ plus the Days to Purchase"
    },
    {
      question: "Dengan Vendor Lead Time 7 hari, Purchase Security Lead Time 2 hari, dan Days to Purchase 1 hari, berapa lama rentang forecast window Odoo pada laporan Replenishment?",
      options: [
        "7 days",
        "8 days",
        "9 days",
        "10 days"
      ],
      correct: "10 days"
    }
  ],
  purchase_materi3: [
    {
      question: "Di mana saya bisa membuat vendor pricelist untuk produk individu?",
      options: [
        "Go to the Product form, and click the Purchase tab",
        "Go to the vendor’s Contact form, click the Purchase tab, and add the prices",
        "Go to the Inventory tab, and click the Purchase Configuration menu",
        "Go to the Product form, click the Purchase tab, and click the vendor’s Contact form"
      ],
      correct: "Go to the Product form, and click the Purchase tab"
    },
    {
      question: "Di mana saya bisa mengimpor vendor pricelist?",
      options: [
        "Go to the Vendor app > Configuration menu > ‘Vendor Pricelist’. Next, click the Actions button, then ‘Import’",
        "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’",
        "Go to the Vendor app > Pricing menu > click the ‘Actions’ button. Then, click ‘Import records’",
        "Go to the Vendor Pricelists page, click the ‘Actions’ button, then ‘Export’"
      ],
      correct: "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’"
    },
    {
      question: "Pada vendor pricelist saya, vendor memberikan 'Diskon' 10% untuk 'Harga' $20. Field 'Quantity' pada vendor pricelist adalah 5. Pada RFQ, berapa harga empat item?",
      options: [
        "4 x 20 = $ 80",
        "( 4 x 20 ) x 0.1 = $ 8",
        "( 4 x 20 ) x 0.9 = $ 72",
        "( 5 x 20 ) x 0.9 = $ 90"
      ],
      correct: "4 x 20 = $ 80"
    }
  ],
  purchase_materi4: [
    {
      question: "Bagaimana cara mencegah (prevent) karyawan membeli dari vendor tertentu?",
      options: [
        "Set a “Blocking Message” warning on the vendor",
        "Set a “Lock Vendor” warning on the vendor",
        "Go to the app’s settings, and add the vendor to the warning list",
        "I cannot prevent employees from purchasing from a specific vendor"
      ],
      correct: "I cannot prevent employees from purchasing from a specific vendor"
    },
    {
      question: "Di mana saya mengatur karyawan sebagai Purchase app “User” atau “Administrator”?",
      options: [
        "General settings > Manage Users > Select the employee > Access Rights",
        "General settings > Purchase access > Select the employee",
        "Purchase settings > App users > Access Rights",
        "Purchase settings > User types > Select the employee > Manage Access"
      ],
      correct: "General settings > Manage Users > Select the employee > Access Rights"
    },
    {
      question: " What happens when I set the “Purchase Order Approval” to a “Minimum Amount” of $200?",
      options: [
        "Requests for quotations must reach a minimum total of $200 to be confirmed",
        "Only a “Purchase Administrator” can create a request for quotation for $200 (or more)",
        "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by a “Purchase User”",
        "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by any employee"
      ],
      correct: "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by a “Purchase User”"
    }
  ],
  purchase_materi5: [
    {
      question: "Apakah mungkin untuk memilih beberapa Requests for Quotation saat menggunakan fitur call for tenders?",
      options: [
        "Yes",
        "No"
      ],
      correct: "Yes"
    },
    {
      question: "Apa status pesanan yang tidak terpilih dalam Call for Tenders yang bersifat 'exclusive'?",
      options: [
        "Waiting",
        "Cancelled",
        "Purchase order",
        "Archived",
        "Refused"
      ],
      correct: "Cancelled"
    },
    {
      question: "Apakah benar bahwa 'Blanket orders' adalah nama lain dari 'Call for Tenders'?",
      options: [
        "No",
        "Yes"
      ],
      correct: "No"
    },
    {
      question: "Ketika 'Call for tenders' divalidasi, apa statusnya?",
      options: [
        "Draft",
        "Waiting",
        "BID Selection",
        "Ready",
        "Done",
        "Closed"
      ],
      correct: "BID Selection"
    }
  ],
  purchase_materi6: [
    {
      question: "Pada Request for Quotation (dibuat dalam Blanket Order), field mana yang TIDAK terisi otomatis dan perlu dikonfigurasi manual?",
      options: [
        "Only the Unit Price",
        "Order Deadline, Expected Arrival",
        "Order Deadline, Expected Arrival, Quantity",
        "Nothing, everything is pre-filled"
      ],
      correct: "Order Deadline, Expected Arrival, Quantity"
    },
    {
      question: "Kondisi apa yang perlu dipenuhi untuk menutup blanket order?",
      options: [
        "At least one item in the blanket order is an RFQ",
        "At least one item in the blanket order is billed",
        "All RFQs in the blanket order have become purchase orders",
        "All items in the blanket order are billed"
      ],
      correct: "All RFQs in the blanket order have become purchase orders"
    },
    {
      question: "Kapan saya harus menggunakan Blanket Order?",
      options: [
        "When making recurring purchases of the same product(s) from the same vendor",
        "When making repetitive purchases for the same product from several vendors",
        "Whenever I need to purchase any product",
        "I cannot make blanket orders in Odoo"
      ],
      correct: "When making recurring purchases of the same product(s) from the same vendor"
    }
  ],
  purchase_materi7: [
    {
      question: "Bisakah saya membuat Bill segera setelah saya mengonfirmasi Request for Quotation?",
      options: [
        "No.",
        "Yes, if the ordered product’s Bill Control policy is set to “received quantities.”",
        "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”",
        "No, but clicking “Force” will allow a bill to be created."
      ],
      correct: "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”"
    },
    {
      question: "Dalam video, error 'Invalid Operation' muncul saat mencoba membuat bill. Mengapa ini terjadi?",
      options: [
        "The PO’s ‘Billing Status’ is ‘Waiting Bills’",
        "Bill Control policy is set to “Received quantities,” and I haven’t received products yet",
        "Billing error",
        "The bill was already paid"
      ],
      correct: "Bill Control policy is set to “Received quantities,” and I haven’t received products yet"
    },
    {
      question: "Dokumen dan tab mana yang menampilkan field 'Should Be Paid' untuk melakukan 3-way matching?",
      options: [
        "Purchase Order, in the ‘Other Information’ tab",
        "Receipt, in the ‘Additional Information’ tab",
        "Bill, in the ‘Other Info’ tab",
        "Invoice, in the ‘Other Info’ tab"
      ],
      correct: "Bill, in the ‘Other Info’ tab"
    }
  ],
  purchase_materi8: [
    {
      question: "Untuk mengaktifkan alternative RFQs dalam database, pengaturan mana yang harus dipilih?",
      options: [
        "Purchase Agreements and Purchase Alternatives",
        "Purchase Agreements and 3-way matching",
        "3-way matching",
        "Purchase Alternatives and Receipt Reminder"
      ],
      correct: "Purchase Agreements and Purchase Alternatives"
    },
    {
      question: "Pada dashboard Compare Product Lines, manakah yang TIDAK muncul berwarna hijau?",
      options: [
        "The fastest expected arrival date",
        "The vendor name",
        "The cheapest unit price",
        "The cheapest total cost"
      ],
      correct: "The vendor name"
    },
    {
      question: "Jika saya ingin memasukkan RFQ baru sebagai Alternative quotation, apa yang harus saya lakukan?",
      options: [
        "On the RFQ, click ‘Action,’ and select ‘Add to Alternative RFQ’",
        "From the Purchase Orders overview, select the RFQs to link, click ‘Action,’ and select ‘Link RFQs’",
        "On the RFQ, click ‘Link to Existing RFQ,’ and select the Purchase Orders to link it to",
        "I cannot link an unrelated RFQ as an Alternative to other Purchase Orders"
      ],
      correct: "On the RFQ, click ‘Link to Existing RFQ,’ and select the Purchase Orders to link it to"
    }
  ],
  purchase_materi9: [
    {
      question: "Field apa yang Wajib (required) pada purchase template?",
      options: [
        "Vendor",
        "Product",
        "Quantity",
        "Unit Price"
      ],
      correct: "Product"
    },
    {
      question: "Saat membuat request for quotation menggunakan purchase template, manakah yang disalin (copied over)?",
      options: [
        "Product quantity",
        "Product’s unit price",
        "Vendor",
        "All of the above"
      ],
      correct: "All of the above"
    },
    {
      question: "Apa perbedaan utama antara Purchase Template dan Blanket Order di Odoo?",
      options: [
        "Purchase templates are used to create one RFQ, while blanket orders can create multiple RFQs",
        "Quantities are copied over from a purchase template, but set to zero in a blanket order",
        "Blanket orders automatically generate RFQs, while purchase templates do not",
        "Purchase templates require a vendor, while blanket orders do not"
      ],
      correct: "Quantities are copied over from a purchase template, but set to zero in a blanket order"
    }
  ],
  purchase_materi10: [
    {
      question: "Apa manfaat utama menggunakan fitur Electronic Data Interchange (EDI) Odoo?",
      options: [
        "It reduces the number of required user licenses.",
        "It adds an additional quality check point.",
        "It allows structured exchange of documents between databases, reducing errors.",
        "It eliminates the need for inventory management."
      ],
      correct: "It allows structured exchange of documents between databases, reducing errors."
    },
    {
      question: "Apa yang terjadi setelah file XML Purchase Order diunggah ke aplikasi Sales Odoo penjual?",
      options: [
        "A draft invoice is created.",
        "A Sales Order is automatically generated with all the order details.",
        "A delivery order is automatically confirmed.",
        "The Purchase Order is sent back for approval."
      ],
      correct: "A Sales Order is automatically generated with all the order details."
    },
    {
      question: "Di mana di Sales Order file XML asli terlihat setelah impor?",
      options: [
        "In the Vendor Bill.",
        "In the PDF preview.",
        "In the customer’s contact record.",
        "In the Chatter section."
      ],
      correct: "In the Chatter section."
    }
  ],
  project_materi1: [
    {
      question: "Apa manfaat dari Kanban view?",
      options: [
        "It allows a clear overview of all the active project tasks",
        "It allows to add and edit tasks without opening each individual record",
        "It allows to drag and drop tasks to update their stage",
        "All of the above"
      ],
      correct: "All of the above"
    },
    {
      question: "Manakah kalimat berikut yang SALAH (false)?",
      options: [
        "Kanban stage is used to keep track of the task’s progress by dragging and dropping into different columns",
        "Task statuses can be used to close a task as well as to mark it as approved",
        "Kanban stages and task statuses are the same feature",
        "It’s possible to create custom Kanban stages"
      ],
      correct: "Kanban stages and task statuses are the same feature"
    },
    {
      question: "Apa dampak dari memperbarui status tugas menjadi 'changes requested'?",
      options: [
        "The task is automatically moved to the previous Kanban stage",
        "Followers of the task are notified that changes have been requested",
        "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage",
        "All of the above"
      ],
      correct: "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage"
    },
    {
      question: "Bagaimana cara menutup (close) sebuah task?",
      options: [
        "By changing its status to “Done” or “Canceled”",
        "By moving it to the “Completed” Kanban stage",
        "By dragging and dropping it into the trash",
        "By creating a “Closure” activity"
      ],
      correct: "By changing its status to “Done” or “Canceled”"
    }
  ],
  project_materi2: [
    {
      question: "Untuk mengaktifkan Project Stages di Kanban view Anda, apa yang harus Anda lakukan?",
      options: [
        "Do nothing, project stages are visible by default.",
        "Go into Project → Configuration → Settings and activate Project Stages.",
        "Go into each project’s settings to activate project stages.",
        "None of the above"
      ],
      correct: "Go into Project → Configuration → Settings and activate Project Stages."
    },
    {
      question: "Memindahkan project ke stage Kanban yang berbeda akan mempengaruhi statusnya (affects its status).",
      options: [
        "True.",
        "False."
      ],
      correct: "False."
    },
    {
      question: "Apa yang diindikasikan oleh bar berwarna di bagian atas setiap stage Kanban?",
      options: [
        "The number of projects with each status in this Kanban stage.",
        "The number of allocated hours for each project in this Kanban stage.",
        "The number of projects with each tag in this Kanban stage.",
        "The number of users assigned to this Kanban stage."
      ],
      correct: "The number of projects with each status in this Kanban stage."
    },
    {
      question: "Klik ikon titik tiga vertikal di sebelah project, lalu buka Dashboard. Tekan New untuk membuat Project Update baru. Bagaimana Project Update baru mempengaruhi state project Anda?",
      options: [
        "The project’s state gets updated to the same state as given in the last Project Update.",
        "The project’s state is an average of the states given in all previous Project Updates.",
        "The project’s state is calculated based on the progress percentage in the last Project Update.",
        "It does not affect the project's state."
      ],
      correct: "The project’s state gets updated to the same state as given in the last Project Update."
    }
  ],
  project_materi3: [
    {
      question: "Saat membuat project baru, apakah pengisian field Customer wajib?",
      options: [
        "Yes, projects are always related to a customer.",
        "Yes, as well as the project name.",
        "No, some projects can be internal and unrelated to a customer.",
        "No, customers can only be added in the setting form of a project after its creation."
      ],
      correct: "No, some projects can be internal and unrelated to a customer."
    },
    {
      question: "Di mana Anda dapat mengubah nama project?",
      options: [
        "You cannot change the name of the project once it’s created.",
        "In the settings form of the project.",
        "In the projects Kanban view.",
        "Both in the Kanban view and the edit form of the project."
      ],
      correct: "In the settings form of the project."
    },
    {
      question: "Kembali ke projects kanban view. Manakah elemen yang TIDAK muncul pada kartu project?",
      options: [
        "The Due Dates.",
        "The Tags.",
        "The assigned Project Manager.",
        "The Project Description."
      ],
      correct: "The Project Description."
    },
    {
      question: "Elemen apa yang dapat Anda tambahkan untuk membedakan project?",
      options: [
        "Tags, colors, or/and set them as favorites.",
        "Tags or colors, but you cannot combine both elements.",
        "Nothing, all project cards look identical.",
        "A cover image."
      ],
      correct: "Tags, colors, or/and set them as favorites."
    }
  ],
  project_materi4: [
    {
      question: "Bagaimana cara menampilkan top bar?",
      options: [
        "Go to Project → Settings→ Top bar.",
        "The top bar is displayed by default.",
        "Click the \"sliders\" button near the top right corner of the page."
      ],
      correct: "Click the \"sliders\" button near the top right corner of the page."
    },
    {
      question: "Untuk mengkustomisasi top bar, Anda harus:",
      options: [
        "Click the \"sliders\" button on top of the search bar.",
        "Click the \"sliders\" button near the top right corner of the page.",
        "Click the \"bars\" button near the top right corner of the page."
      ],
      correct: "Click the \"sliders\" button on top of the search bar."
    },
    {
      question: "Apa yang TIDAK DAPAT ditambahkan ke top bar?",
      options: [
        "Stock moves.",
        "Bills of materials.",
        "Dashboard.",
        "CRM."
      ],
      correct: "CRM."
    },
    {
      question: "Bagaimana cara membuat custom top bar views?",
      options: [
        "It can be done through the Studio app.",
        "Click a top bar button, customize the view with keywords, filters, and grouping options using the search bar, and click Save View.",
        "It’s not possible to create custom top bar views."
      ],
      correct: "Click a top bar button, customize the view with keywords, filters, and grouping options using the search bar, and click Save View."
    }
  ],
  project_materi5: [
    {
      question: "Manakah pernyataan berikut ini yang benar?",
      options: [
        "You can have one email alias per each project",
        "You can have one email alias for all of your projects",
        "You can have multiple email aliases for one project",
        "All statements are correct"
      ],
      correct: "You can have one email alias per each project"
    },
    {
      question: "Mengonfigurasi email template pada Kanban stage berarti:",
      options: [
        "An email based on the template will be sent to the customer as soon as a task is moved out from this stage into the next one",
        "An email based on the template will be sent to the customer as soon as a task is moved into this stage",
        "An email based on the template will be sent to the customer when the task is completed",
        "An email based on the template will be sent to the customer on every update of the task"
      ],
      correct: "An email based on the template will be sent to the customer as soon as a task is moved into this stage"
    },
    {
      question: "Task yang dibuat dari website form dibuat di:",
      options: [
        "In the dispatch tab of the project app, where they can be assigned to the correct project",
        "In the “Website” project, which is created automatically once the Website app is installed",
        "In the project that was selected when configuring the project form in the website editor",
        "Each website form creates a new project with one task in it"
      ],
      correct: "In the project that was selected when configuring the project form in the website editor"
    }
  ],
  project_materi6: [
    {
      question: "Projects yang terhubung ke sales orders bersifat:",
      options: [
        "Billable",
        "Invoicable",
        "Accountable",
        "Payable"
      ],
      correct: "Billable"
    },
    {
      question: "Sebuah project dan/atau task otomatis dibuat segera setelah Sales Order:",
      options: [
        "In draft",
        "Confirmed",
        "Invoiced",
        "Projects and tasks cannot be created from a Sales Order"
      ],
      correct: "Confirmed"
    },
    {
      question: "Bagaimana cara memastikan bahwa project baru dengan *multiple tasks* otomatis dibuat setelah service terjual?",
      options: [
        "The service needs to be configured to Create on Order: Project and Task",
        "The product needs to be configured as a service",
        "The service needs to be configured to Create on Order: Project",
        "The service needs to have a Project Template with multiple tasks linked to it"
      ],
      correct: "The service needs to have a Project Template with multiple tasks linked to it"
    }
  ],
  project_materi7: [
    {
      question: "Bagaimana cara melihat status subtasks pada kartu Kanban dari parent task?",
      options: [
        "Subtasks are indicated with the green check-mark symbol.",
        "Click on three vertical dots on the task, then select Subtasks.",
        "It’s not possible, you have to go into the task and then to the Subtasks tab.",
        "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3)."
      ],
      correct: "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3)."
    },
    {
      question: "Apakah mungkin membuat subtasks di dalam subtasks?",
      options: [
        "Yes.",
        "No.",
        "It's possible, but only for starred tasks."
      ],
      correct: "Yes."
    }
  ],
  project_materi8: [
    {
      question: "Task dependencies memungkinkan Anda untuk:",
      options: [
        "Set priorities among projects to ensure they are done in the order you want.",
        "Set priorities among project's tasks to ensure they are done in the order you want.",
        "Prioritize the tasks that are late on schedule.",
        "Prioritize tasks whose milestones have not been reached yet."
      ],
      correct: "Set priorities among project's tasks to ensure they are done in the order you want."
    },
    {
      question: "Bagaimana Anda mengaktifkan task dependencies di level database global?",
      options: [
        "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies.",
        "Go to Project ‣ General Settings ‣ Tasks, and enable Task Dependencies",
        "There is nothing to do, task dependencies are activated by default."
      ],
      correct: "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies."
    },
    {
      question: "Selain task form, di view apa Anda bisa mengatur dan mengelola task dependencies?",
      options: [
        "Kanban",
        "List",
        "Gantt"
      ],
      correct: "Gantt"
    },
    {
      question: "Gunakan ikon di pjok kanan atas untuk beralih ke Gantt view. Bagaimana cara membuat task dependencies di sana?",
      options: [
        "It’s not possible.",
        "By dragging and dropping one task onto another.",
        "By stretching the task across multiple fields.",
        "By hovering over a task, then using arrows to draw dependencies with another task."
      ],
      correct: "By hovering over a task, then using arrows to draw dependencies with another task."
    },
    {
      question: "Bagaimana cara mengatur dependency dari task form?",
      options: [
        "Go into Sub-tasks tab ‣ Add a line ‣ add a task.",
        "Go into Blocked By ‣ Add a line, and select a task or create a new one.",
        "Select three stars next to Priority to give this task the highest priority.",
        "Set a deadline earlier than the task you would like to block."
      ],
      correct: "Go into Blocked By ‣ Add a line, and select a task or create a new one."
    },
    {
      question: "Bagaimana Anda bisa tahu bahwa sebuah task diblokir oleh task lain saat di Kanban view?",
      options: [
        "By the blue hourglass icon and the corresponding color in the Kanban status bar.",
        "The number of completed vs unfinished blocking tasks is indicated on the Kanban card in 1/3 format.",
        "Blocked tasks are color-coded in red.",
        "Blocked tasks are not displayed in the Kanban view until the previous task in sequence is completed."
      ],
      correct: "By the blue hourglass icon and the corresponding color in the Kanban status bar."
    }
  ],
  project_materi9: [
    {
      question: "Apa yang harus Anda lakukan untuk menggunakan fitur Recurring Tasks?",
      options: [
        "Nothing, it’s activated by default.",
        "You need to activate it by going into configuration, then settings of your Project app.",
        "You need to activate it in the settings of each project where you want to use it."
      ],
      correct: "You need to activate it in the settings of each project where you want to use it."
    },
    {
      question: "Bagaimana cara menghentikan pengulangan (recurrence) sebuah task?",
      options: [
        "You just need to cancel the task.",
        "You need to deactivate the recurrence by clicking the recurrence button in the task.",
        "You can’t stop a recurrence after it is configured."
      ],
      correct: "You need to deactivate the recurrence by clicking the recurrence button in the task."
    }
  ],
  project_materi10: [
    {
      question: "Opsi Visibility berdampak pada:",
      options: [
        "Impact which part of your project an employee can see",
        "Impact which part of your project an employee can edit",
        "Impact which part of your project an employee can edit and see",
        "Make your secret crush notice you"
      ],
      correct: "Impact which part of your project an employee can edit and see"
    },
    {
      question: "Apa yang bisa diakses oleh invited portal users (klien)?",
      options: [
        "Read-only version of the project",
        "Editable version of the project",
        "Either of those options is possible"
      ],
      correct: "Either of those options is possible"
    }
  ],
  project_materi11: [
    {
      question: "Di mana Anda mengatur otomatisasi (stage-based)?",
      options: [
        "In the settings of the Project application",
        "In your project’s settings",
        "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name",
        "In your project’s Kanban view, you have to click the automations button in the , top right corner"
      ],
      correct: "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name"
    },
    {
      question: "Apa yang terjadi jika Anda mengotomatisasi 'Call' saat task mencapai stage tertentu?",
      options: [
        "It automatically calls the person you selected",
        "The person you selected’s phone automatically calls you",
        "It automatically schedules a Call activity in the task’s chatter",
        "AI will instantly call all followers of this task"
      ],
      correct: "It automatically schedules a Call activity in the task’s chatter"
    },
    {
      question: "Apa yang dimaksud dengan 'trigger' dalam Automations?",
      options: [
        "The action that automatically launches another action",
        "The action that is automatically launched by another action",
        "The whole automated sequence of actions",
        "The gear icon you click to access Automations"
      ],
      correct: "The action that automatically launches another action"
    }
  ],
  project_materi12: [
    {
      question: "Bagaimana cara menghubungkan task ke milestone?",
      options: [
        "Drag and drop the task into the milestone’s column.",
        "Fill in the “Milestone” field on the task form.",
        "Schedule a “Reach milestone” activity from the task’s chatter.",
        "You link projects to milestones, not tasks."
      ],
      correct: "Fill in the “Milestone” field on the task form."
    },
    {
      question: "Apa yang terjadi di project dashboard saat semua task yang terhubung ke milestone selesai?",
      options: [
        "Milestone is listed in green to signal that it may be marked as reached.",
        "Milestone is automatically marked as reached.",
        "If invoicing by milestones is enabled, you can invoice the customer.",
        "The following milestone needs to be created."
      ],
      correct: "Milestone is listed in green to signal that it may be marked as reached."
    },
    {
      question: "Milestones bersifat project-specific.",
      options: [
        "True.",
        "False."
      ],
      correct: "True."
    },
    {
      question: "Apa yang harus dilakukan untuk menagih (invoice) klien berdasarkan milestone?",
      options: [
        "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then manually update the delivered quantity after a milestone has been reached.",
        "Create a sales order for a service with the invoicing policy set to “Based on Milestones,” then mark the milestones in the corresponding project as reached.",
        "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then use the smart button to link project milestones to the sales order."
      ],
      correct: "Create a sales order for a service with the invoicing policy set to “Based on Milestones,” then mark the milestones in the corresponding project as reached."
    }
  ],
  project_materi13: [
    {
      question: "Secara default, jika Anda memulai timer dan stop setelah 3 menit, apa yang tercatat?",
      options: [
        "It is logging three minutes.",
        "It is logging five minutes.",
        "It is logging fifteen minutes."
      ],
      correct: "It is logging fifteen minutes."
    },
    {
      question: "Apa arti warna MERAH pada total jam di bawah kolom timesheet hari itu?",
      options: [
        "You have logged more time than your contractual working hours.",
        "You have logged less time than your contractual working hours.",
        "You haven’t logged anything yet for that day."
      ],
      correct: "You have logged less time than your contractual working hours."
    },
    {
      question: "Bagaimana cara memvalidasi timesheet tertentu?",
      options: [
        "Go to the Grid view, select the timesheet entries, and click Validate.",
        "Go to the List view, select the timesheet entries, and click Validate.",
        "Go to the Kanban view, select the timesheet entries, and click Validate.",
        "It’s not possible. Timesheets can only be validated altogether."
      ],
      correct: "Go to the List view, select the timesheet entries, and click Validate."
    },
    {
      question: "Keyboard shortcut untuk start/stop timer pada Timesheet Grid View (Enterprise)?",
      options: [
        "Press Shift+S to start the timer, and press Shift+S to stop it.",
        "Press 1 to start the timer, and press 0 to stop it.",
        "Press the letter on the left of a timesheet to start the timer, and press it once more to stop it."
      ],
      correct: "Press the letter on the left of a timesheet to start the timer, and press it once more to stop it."
    }
  ],
  project_materi14: [
    {
      question: "Jenis email pengingat timesheet apa yang dapat dikirim?",
      options: [
        "A reminder email for employees to submit their timesheets.",
        "A reminder email for approvers to validate their team’s timesheets.",
        "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets."
      ],
      correct: "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets."
    },
    {
      question: "Di mana Anda mengaktifkan Billing Rate Indicators?",
      options: [
        "You don't, it’s activated by default.",
        "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators.",
        "Odoo > Timesheets > Reporting > By Employee > Billing Rate Indicators."
      ],
      correct: "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators."
    },
    {
      question: "Apa syarat untuk mengaktifkan Leaderboard?",
      options: [
        "The encoding method should be set to days/half-days.",
        "Billing rate indicators need to be activated first.",
        "Timesheet reminder emails need to be activated first."
      ],
      correct: "The encoding method should be set to days/half-days."
    }
  ],
  project_materi15: [
    {
      question: "Anda menagih Fixed Price untuk service pack 20 jam, tapi hanya bekerja 16 jam. Apa yang Anda lakukan?",
      options: [
        "Issue a credit note for the remaining 4 hours.",
        "Update the sales order line to 16 hours.",
        "Update the delivered quantity to 16 hours.",
        "Nothing, the fixed price is not impacted by the time spent on the task."
      ],
      correct: "Nothing, the fixed price is not impacted by the time spent on the task."
    },
    {
      question: "Anda menagih berdasarkan timesheets (10 jam), tapi baru 7 jam tervalidasi. Bisakah menagih?",
      options: [
        "No, you must validate all 10 hours of timesheets before invoicing.",
        "Yes, you can invoice 10 hours even if the timesheets are not validated.",
        "It depends on your DB configuration."
      ],
      correct: "It depends on your DB configuration."
    },
    {
      question: "Apa artinya jika sales order line berwarna BIRU?",
      options: [
        "It means that there are missing hours to invoice.",
        "It means that the sales order line is ready to be invoiced.",
        "It means that all the timesheets linked to the line have been validated."
      ],
      correct: "It means that the sales order line is ready to be invoiced."
    }
  ],
  project_materi16: [
    {
      question: "Apakah bisa mengakses Project Dashboard dari Top Bar project?",
      options: [
        "Yes, if you have the Dashboard app installed.",
        "Yes, you can add it to the top bar, like other record types.",
        "No, you need to go through the project’s settings."
      ],
      correct: "Yes, you can add it to the top bar, like other record types."
    },
    {
      question: "Mungkinkah menandai milestone sebagai 'Reached' langsung dari project dashboard?",
      options: [
        "Yes, but only non-billable milestones.",
        "Yes, you simply check the milestone to mark it as reached.",
        "It’s not possible."
      ],
      correct: "Yes, you simply check the milestone to mark it as reached."
    },
    {
      question: "Record apa saja yang ditampilkan di total project dashboard?",
      options: [
        "Tasks, Timesheets, Planned, Documents, Sales Order Items, Burndown Chart, Vendor Bills.",
        "Tasks, Timesheets, Documents, Sales Order Items, Burndown Chart, Vendor Bills, Manufacturing Orders.",
        "It depends on your database and project configuration."
      ],
      correct: "It depends on your database and project configuration."
    },
    {
      question: "Apa cara terbaik mengambil data dashboard untuk referensi masa depan (snapshot)?",
      options: [
        "Create a new project update, then add a Snapshot tab.",
        "Add the project dashboard to your Dashboard app.",
        "Clicking \"New\" to crate a new project update automatically captures data from the project dashboard at this point in time.",
        "Adding a custom view of the project’s dashboard to the project’s top bar automatically captures data from the project dashboard at this point in time."
      ],
      correct: "Clicking \"New\" to crate a new project update automatically captures data from the project dashboard at this point in time."
    }
  ],
  project_materi17: [
    {
      question: "Apa hubungan Top Bar project dan Profitability dashboard?",
      options: [
        "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard.",
        "Records created using the top bar are excluded from the profitability dashboard.",
        "Records created using the top bar take into account the employee’s hourly cost."
      ],
      correct: "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard."
    },
    {
      question: "Di mana Hourly Cost karyawan ditentukan?",
      options: [
        "In the Work Information tab of the employee form.",
        "In the Settings tab of the employee form.",
        "In the Timesheets app configuration."
      ],
      correct: "In the Settings tab of the employee form."
    },
    {
      question: "Down payments ditampilkan di bagian costs (biaya) dashboard.",
      options: [
        "Correct.",
        "Incorrect.",
        "Down payments are displayed in the invoicing dashboard, not profitability."
      ],
      correct: "Incorrect."
    }
  ],
  project_materi18: [
    {
      question: "Apa yang harus Anda lakukan pertama kali untuk menggunakan Customer Ratings?",
      options: [
        "Nothing, it’s enabled by default",
        "You have to enable it: General Settings > Customer Ratings",
        "You have to enable it: CRM > Configuration > Settings > Customer Ratings",
        "You have to enable it: Project > Configuration > Settings > Customer Ratings"
      ],
      correct: "You have to enable it: Project > Configuration > Settings > Customer Ratings"
    },
    {
      question: "Apa tindakan yang otomatis mengirim email rating?",
      options: [
        "When a task moves to the status you selected",
        "When a task moves to the stage you selected",
        "When a task moves to the Finished stage",
        "When a task moves to the Done status"
      ],
      correct: "When a task moves to the stage you selected"
    },
    {
      question: "Di Kanban view, apa arti angka di sebelah smiley?",
      options: [
        "It’s the average satisfaction rate based on completed client surveys",
        "The number on the left shows the number of surveys sent, and the one on the right shows the number of surveys completed over the last period",
        "The number on the left shows the number of surveys completed, and the one on the right shows the number of surveys sent over the last period"
      ],
      correct: "It’s the average satisfaction rate based on completed client surveys"
    }
  ]
};