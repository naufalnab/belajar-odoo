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
      question: "Dua kredensial apa yang perlu Anda salin dari Google Console dan dimasukkan ke database Odoo untuk menyelesaikan sinkronisasi?",
      options: [
        "Client ID dan API Key",
        "Client ID dan Client Secret",
        "Client Secret dan URI",
        "URI dan API Key"
      ],
      correct: "Client ID dan Client Secret"
    },
    {
      question: "Agar bisa memilih Tipe User 'Internal', jenis akun Gmail apa yang harus Anda gunakan?",
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
      question: "Di halaman mana Anda bisa menemukan tombol 'Publish App' untuk project ini?",
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
  materi5: [
    {
      question: "Apa indikator utama bahwa Anda harus membuat Company baru alih-alih hanya membuat Branch?",
      options: [
        "Lokasi kantor berbeda kota",
        "Entitas memiliki Tax ID (NPWP) dan laporan pajak terpisah",
        "Jumlah karyawan lebih dari 50 orang",
        "Menjual produk yang berbeda jenis"
      ],
      correct: "Entitas memiliki Tax ID (NPWP) dan laporan pajak terpisah"
    },
    {
      question: "Dua kolom apa yang sangat krusial dan tidak bisa diubah setelah transaksi pertama dibuat?",
      options: [
        "Company Name dan Address",
        "Phone dan Email",
        "Country dan Currency",
        "Parent Company dan Logo"
      ],
      correct: "Country dan Currency"
    },
    {
      question: "Bagaimana cara membuat sebuah produk agar bisa diakses dan dijual oleh semua perusahaan (Global Shared)?",
      options: [
        "Menduplikasi produk untuk setiap perusahaan",
        "Mengisi field Company dengan 'All Companies'",
        "Mengosongkan field Company pada form produk",
        "Memberikan hak akses Administrator ke semua sales"
      ],
      correct: "Mengosongkan field Company pada form produk"
    }
  ]
};