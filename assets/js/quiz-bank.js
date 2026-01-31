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
      question_en: "Within how many hours must an Odoo database be activated to get the full 15-day trial period?",
      options: [
        "Empat jam",
        "Lima jam",
        "Nol jam, database otomatis aktif",
        "Tiga jam"
      ],
      options_en: [
        "Four hours",
        "Five hours",
        "Zero hours, the database is automatically active",
        "Three hours"
      ],
      correct: "Tiga jam"
    },
    {
      question:
        "Apa yang terjadi ketika sebuah user dibuat di database Odoo?",
      question_en: "What happens when a user is created in an Odoo database?",
      options: [
        "Password otomatis dibuat dan dikirim ke email",
        "Email dikirim berisi tautan untuk membuat password",
        "Password langsung muncul di layar",
        "User tidak bisa dibuat dari dashboard utama"
      ],
      options_en: [
        "A password is automatically created and sent to email",
        "An email is sent containing a link to create a password",
        "The password appears immediately on the screen",
        "Users cannot be created from the main dashboard"
      ],
      correct: "Email dikirim berisi tautan untuk membuat password"
    },
    {
      question:
        "Pernyataan manakah yang benar tentang instalasi aplikasi baru di Odoo?",
      question_en: "Which statement is true regarding the installation of new applications in Odoo?",
      options: [
        "Hanya account manager yang dapat menginstal aplikasi",
        "Semua user di database dapat menginstal aplikasi",
        "Aplikasi diinstal dari menu Settings",
        "Administrator menginstal aplikasi dari menu Apps"
      ],
      options_en: [
        "Only account managers can install applications",
        "All users in the database can install applications",
        "Applications are installed from the Settings menu",
        "Administrators install applications from the Apps menu"
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
      question_en: "Where can Two-Factor Authentication (2FA) be activated?",
      options: [
        "Di \"My profile\" di bawah tab \"Preferences\"",
        "Di \"My profile\" di bawah tab \"Account Security\"",
        "Pergi ke Configuration > Security",
        "Odoo tidak menawarkan otentikasi dua faktor"
      ],
      options_en: [
        "In \"My profile\" under the \"Preferences\" tab",
        "In \"My profile\" under the \"Account Security\" tab",
        "Go to Configuration > Security",
        "Odoo does not offer Two-Factor Authentication"
      ],
      correct: "Di \"My profile\" di bawah tab \"Account Security\""
    },
    {
      question: "Apa arti titik merah di pojok kanan atas dashboard Odoo?",
      question_en: "What does the red dot in the top right corner of the Odoo dashboard indicate?",
      options: [
        "Fitur link/unlink untuk bekerja offline",
        "Fitur check-in untuk reservasi di aplikasi POS",
        "Fitur pelacakan waktu (attendance) untuk check in/out",
        "Fitur perekaman layar (screen recording)"
      ],
      options_en: [
        "Link/unlink feature for working offline",
        "Check-in feature for reservations in the POS app",
        "Time tracking feature (attendance) for check in/out",
        "Screen recording feature"
      ],
      correct: "Fitur pelacakan waktu (attendance) untuk check in/out"
    },
    {
      question: "Di Odoo, apa saja jenis 'Views' (Tampilan) yang tersedia untuk melihat record?",
      question_en: "In Odoo, what types of 'Views' are available for viewing records?",
      options: [
        "List, Kanban, Calendar, Pivot, Graph, Activity",
        "List, Kanban, Color Coded, Graph, Activity",
        "Kanban, Pivot, Graph, Word Cloud, Activity",
        "List, Kanban, Calendar, Pivot, Activity, By Shape"
      ],
      options_en: [
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
      question_en: "Which two credentials do we need to copy from the Google Console and enter into the Odoo database to complete the synchronization?",
      options: [
        "Client ID dan API Key",
        "Client ID dan Client Secret",
        "Client Secret dan URI",
        "URI dan API Key"
      ],
      options_en: [
        "Client ID and API Key",
        "Client ID and Client Secret",
        "Client Secret and URI",
        "URI and API Key"
      ],
      correct: "Client ID dan Client Secret"
    },
    {
      question: "Agar bisa memilih Tipe User 'Internal', jenis akun Gmail apa yang harus kita gunakan?",
      question_en: "To select the 'Internal' User Type, what kind of Gmail account must we use?",
      options: [
        "Semua jenis akun Gmail bisa jadi user Internal",
        "Hanya akun Gmail pribadi yang bisa jadi user Internal",
        "Hanya akun Google Workspace (Bisnis/Sekolah) yang bisa jadi user Internal",
        "Hanya akun pembuat project yang bisa jadi user Internal"
      ],
      options_en: [
        "All types of Gmail accounts can be Internal users",
        "Only personal Gmail accounts can be Internal users",
        "Only Google Workspace (Business/School) accounts can be Internal users",
        "Only the project creator account can be an Internal user"
      ],
      correct: "Hanya akun Google Workspace (Bisnis/Sekolah) yang bisa jadi user Internal"
    },
    {
      question: "Apa fungsi dari 'Authorized Redirect URIs' yang kita isi?",
      question_en: "What is the function of the 'Authorized Redirect URIs' that we fill in?",
      options: [
        "Mengarahkan user yang tidak diinginkan keluar dari database",
        "Membuat jalur balik ke Google untuk menghubungkan Odoo dengan login OAuth yang baru dibuat",
        "Mengalihkan user ke Odoo saat mereka berada di Google Developer Console",
        "Otomatis membuat Client ID saat user login"
      ],
      options_en: [
        "Directing unwanted users out of the database",
        "Creating a return path to Google to connect Odoo with the newly created OAuth login",
        "Redirecting users to Odoo when they are in the Google Developer Console",
        "Automatically creating a Client ID when user logs in"
      ],
      correct: "Membuat jalur balik ke Google untuk menghubungkan Odoo dengan login OAuth yang baru dibuat"
    },
    {
      question: "Di halaman mana kita bisa menemukan tombol 'Publish App' untuk project ini?",
      question_en: "On which page can we find the 'Publish App' button for this project?",
      options: [
        "Di halaman utama 'Overview'",
        "Di halaman 'Branding'",
        "Di halaman 'Data Access'",
        "Di halaman 'Audience'"
      ],
      options_en: [
        "On the main 'Overview' page",
        "On the 'Branding' page",
        "On the 'Data Access' page",
        "On the 'Audience' page"
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
      question_en: "How can a user filter quotations from the previous month?",
      options: [
        "Dengan mengganti salesperson",
        "Dengan memilih filter Kanban",
        "Dengan memilih Create Date > Bulan Sebelumnya (Previous Month)",
        "Dengan menerapkan tampilan default"
      ],
      options_en: [
        "By changing the salesperson",
        "By selecting the Kanban filter",
        "By selecting Create Date > Previous Month",
        "By applying the default view"
      ],
      correct: "Dengan memilih Create Date > Bulan Sebelumnya (Previous Month)"
    },
    {
      question: "Setelah menggeser (drag-and-drop) pesanan penjualan ke salesperson lain di tampilan Kanban, di mana pengguna dapat mengonfirmasi perubahan tersebut di dalam dokumen?",
      question_en: "After dragging-and-dropping a sales order to another salesperson in Kanban view, where can the user confirm the change inside the document?",
      options: [
        "Tab Settings",
        "Menu Filters",
        "Tab Order Lines",
        "Tab Other Info"
      ],
      options_en: [
        "Settings Tab",
        "Filters Menu",
        "Order Lines Tab",
        "Other Info Tab"
      ],
      correct: "Tab Other Info"
    },
    {
      question: "Apa yang dimungkinkan oleh opsi 'Add Custom Filters'?",
      question_en: "What does the 'Add Custom Filters' option allow?",
      options: [
        "Mengekspor filter ke dalam file",
        "Mengedit hak akses pengguna",
        "Memfilter menggunakan 'field' apa pun di Odoo, seperti Abandoned Carts atau tanggal spesifik",
        "Membagikan filter ke luar sistem Odoo"
      ],
      options_en: [
        "Exporting filters to a file",
        "Editing user access rights",
        "Filtering using any 'field' in Odoo, such as Abandoned Carts or specific dates",
        "Sharing filters outside the Odoo system"
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
      question_en: "When is creating an additional company (Multi-Company) the best option?",
      options: [
        "Ketika entitas baru menggunakan daftar harga (pricelist) yang berbeda",
        "Ketika unit baru memiliki Tax ID (NPWP) sendiri atau pelaporan pajak yang terpisah",
        "Ketika saya hanya perlu membatasi visibilitas dokumen",
        "Ketika mata uangnya tetap sama"
      ],
      options_en: [
        "When the new entity uses different pricelists",
        "When the new unit has its own Tax ID or separate tax reporting",
        "When I only need to restrict document visibility",
        "When the currency remains the same"
      ],
      correct: "Ketika unit baru memiliki Tax ID (NPWP) sendiri atau pelaporan pajak yang terpisah"
    },
    {
      question: "Dua kolom mana yang WAJIB diisi dengan benar sebelum perusahaan baru memposting transaksi pertamanya (karena mengubahnya nanti bisa merusak buku besar/ledger)?",
      question_en: "Which two fields MUST be filled correctly before a new company posts its first transaction (as changing them later could corrupt the ledger)?",
      options: [
        "Taxes (Pajak) dan Company",
        "Country (Negara) dan Currency (Mata Uang)",
        "Country (Negara) dan Fiscal Localization",
        "Chart of Accounts dan Currency"
      ],
      options_en: [
        "Taxes and Company",
        "Country and Currency",
        "Country and Fiscal Localization",
        "Chart of Accounts and Currency"
      ],
      correct: "Country (Negara) dan Currency (Mata Uang)"
    },
    {
      question: "Apa yang bisa dilakukan fitur Multi-Company yang TIDAK bisa dilakukan oleh hak akses, fitur branches, atau database terpisah?",
      question_en: "What can the Multi-Company feature do that access rights, branches, or separate databases CANNOT?",
      options: [
        "Membatasi akses karyawan ke dokumen tertentu",
        "Berbagi sumber daya seperti produk, vendor, dan pelanggan",
        "Menghindari pajak karena Odoo akan melakukannya untuk saya",
        "Mengelola beberapa entitas yang tidak berbagi buku besar (ledger) yang sama tetapi tetap bisa melakukan pelaporan konsolidasi"
      ],
      options_en: [
        "Restrict employee access to certain documents",
        "Share resources like products, vendors, and customers",
        "Avoid taxes because Odoo will do it for me",
        "Manage multiple entities that do not share the same ledger but can still perform consolidated reporting"
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
      question_en: "I start by manually creating and posting an invoice in the selling company (Minji Dimsum) without confirming a Sales Order first. What commercial document will be automatically created by Odoo in the buying company (Pembelajar Belajar)?",
      options: [
        "Tagihan vendor (vendor bill) yang terhubung",
        "Tagihan vendor dan pesanan pembelian (purchase order) yang terhubung",
        "Penawaran (quotation) yang terhubung",
        "Tidak ada dokumen komersial"
      ],
      options_en: [
        "A linked vendor bill",
        "A linked vendor bill and purchase order",
        "A linked quotation",
        "No commercial document"
      ],
      correct: "Tidak ada dokumen komersial"
    },
    {
      question: "Manakah pernyataan yang BENAR mengenai interaksi tagihan (bills) dan faktur (invoices) dalam alur antar-perusahaan Odoo?",
      question_en: "Which statement is TRUE regarding the interaction of bills and invoices in Odoo inter-company flow?",
      options: [
        "Mengonfirmasi tagihan vendor di pembeli secara otomatis membuat faktur yang sesuai di penjual",
        "Mengonfirmasi tagihan vendor di pembeli TIDAK membuat dokumen apa pun di penjual; penjual harus menerbitkan faktur terlebih dahulu",
        "Tagihan dan faktur dibuat secara bersamaan, terlepas dari sisi mana yang memulai transaksi",
        "Tagihan pembeli hanya akan membuat faktur penjual jika 'Create Purchase Orders' dinonaktifkan"
      ],
      options_en: [
        "Confirming a vendor bill in the buyer automatically creates a corresponding invoice in the seller",
        "Confirming a vendor bill in the buyer does NOT create any document in the seller; the seller must issue the invoice first",
        "Bills and invoices are created simultaneously, regardless of which side initiates the transaction",
        "Buyer bills will only create seller invoices if 'Create Purchase Orders' is disabled"
      ],
      correct: "Mengonfirmasi tagihan vendor di pembeli TIDAK membuat dokumen apa pun di penjual; penjual harus menerbitkan faktur terlebih dahulu"
    },
    {
      question: "Bagaimana cara memastikan penawaran harga (quotation) dari Minji Dimsum diterbitkan dalam mata uang IDR saat menjual ke Pembelajar Belajar?",
      question_en: "How to ensure that a quotation from Minji Dimsum is issued in IDR currency when selling to Pembelajar Belajar?",
      options: [
        "Menetapkan daftar harga (pricelist) IDR milik Minji Dimsum ke data kontak (partner record) Pembelajar Belajar",
        "Mengatur mata uang Jurnal Pembelian ke IDR",
        "Mengubah mata uang default perusahaan ke IDR",
        "Memetakan 'IDR ke USD' dalam posisi fiskal sehingga Odoo mengonversi pada faktur"
      ],
      options_en: [
        "Assign Minji Dimsum's IDR pricelist to Pembelajar Belajar's partner record",
        "Set the Purchase Journal currency to IDR",
        "Change the company default currency to IDR",
        "Map 'IDR to USD' in the fiscal position so Odoo converts on the invoice"
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
      question_en: "Where can meetings be scheduled in Odoo besides the Calendar app?",
      options: [
        "Hanya dari Dashboard",
        "Dari bagian Chatter pada sebuah record",
        "Dari aplikasi Email",
        "Hanya melalui modul Kontak"
      ],
      options_en: [
        "Only from the Dashboard",
        "From the Chatter section on a record",
        "From the Email app",
        "Only through the Contacts module"
      ],
      correct: "Dari bagian Chatter pada sebuah record"
    },
    {
      question: "Manakah dari berikut ini opsi privasi yang tersedia untuk meeting di Odoo?",
      question_en: "Which of the following are privacy options available for meetings in Odoo?",
      options: [
        "Rahasia, Dibagikan, Dibatasi",
        "Khusus Tim, Departemen, Global",
        "Tersembunyi, Terlihat, Undangan saja",
        "Publik, Privat, Khusus Pengguna Internal"
      ],
      options_en: [
        "Secret, Shared, Restricted",
        "Team Only, Department, Global",
        "Hidden, Visible, Invitation only",
        "Public, Private, Only Internal Users"
      ],
      correct: "Publik, Privat, Khusus Pengguna Internal"
    },
    {
      question: "Setelah meeting disimpan, di mana meeting tersebut dapat dilihat dari dalam record CRM?",
      question_en: "After a meeting is saved, where can it be viewed from within a CRM record?",
      options: [
        "Pada tombol pintar Next Meeting dan Planned Activities di Chatter",
        "Hanya di aplikasi Kalender utama",
        "Di dalam menu Pengaturan aplikasi CRM",
        "Hanya di layar Dashboard"
      ],
      options_en: [
        "On the Next Meeting smart button and Planned Activities in Chatter",
        "Only in the main Calendar app",
        "Inside the CRM app Settings menu",
        "Only on the Dashboard screen"
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
      question_en: "What does a green Activities icon on a record indicate?",
      options: [
        "Kegiatan terlewat (Overdue)",
        "Tidak ada kegiatan terjadwal",
        "Kegiatan jatuh tempo hari ini",
        "Ada kegiatan mendatang yang terjadwal (Upcoming)"
      ],
      options_en: [
        "Overdue activity",
        "No scheduled activity",
        "Activity due today",
        "Upcoming scheduled activity"
      ],
      correct: "Ada kegiatan mendatang yang terjadwal (Upcoming)"
    },
    {
      question: "Apa arti angka di sebelah ikon jam di bilah navigasi kanan atas?",
      question_en: "What does the number next to the clock icon in the top right navigation bar mean?",
      options: [
        "Total kegiatan yang telah selesai",
        "Jumlah kegiatan yang terlambat atau jatuh tempo hari ini",
        "Jumlah pengguna yang ditugaskan",
        "Total kegiatan yang dibuat minggu ini"
      ],
      options_en: [
        "Total completed activities",
        "Number of activities late or due today",
        "Number of assigned users",
        "Total activities created this week"
      ],
      correct: "Jumlah kegiatan yang terlambat atau jatuh tempo hari ini"
    },
    {
      question: "Di mana Anda dapat membuat, menandai selesai, atau mengedit kegiatan secara langsung dalam sebuah record?",
      question_en: "Where can you create, mark as done, or edit activities directly within a record?",
      options: [
        "Di menu Pengaturan",
        "Di Dashboard Pelaporan",
        "Di bagian Chatter",
        "Di Penukar Aplikasi"
      ],
      options_en: [
        "In the Settings menu",
        "In the Reporting Dashboard",
        "In the Chatter section",
        "In the App Switcher"
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
      question_en: "Which Odoo view displays contact photos and offers a more visual layout?",
      options: [
        "Tampilan Peta (Map View)",
        "Tampilan Kanban (Kanban View)",
        "Tampilan Pivot (Pivot View)",
        "Tampilan Aktivitas (Activity View)"
      ],
      options_en: [
        "Map View",
        "Kanban View",
        "Pivot View",
        "Activity View"
      ],
      correct: "Tampilan Kanban (Kanban View)"
    },
    {
      question: "Pada pop-up Buat Kontak, opsi apa saja yang dapat Anda pilih untuk tipe alamat?",
      question_en: "In the Create Contact pop-up, what options can you select for address type?",
      options: [
        "Contact, Invoice Address, Delivery Address, Other",
        "Personal, Business, Residential, Mailing",
        "Primary, Secondary, Corporate, Private",
        "Customer, Vendor, Partner, Lead"
      ],
      options_en: [
        "Contact, Invoice Address, Delivery Address, Other",
        "Personal, Business, Residential, Mailing",
        "Primary, Secondary, Corporate, Private",
        "Customer, Vendor, Partner, Lead"
      ],
      correct: "Contact, Invoice Address, Delivery Address, Other"
    },
    {
      question: "Apa yang dapat dilihat atau diakses pengguna menggunakan Smart Buttons di bagian atas halaman kontak?",
      question_en: "What can users view or access using Smart Buttons at the top of a contact page?",
      options: [
        "Pengaturan database",
        "Dokumen terkait dari aplikasi Odoo lainnya (Linked records)",
        "Kontak yang diarsipkan",
        "Catatan internal"
      ],
      options_en: [
        "Database settings",
        "Linked records from other Odoo apps",
        "Archived contacts",
        "Internal notes"
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
      question_en: "What button appears when you select multiple records at once in List view?",
      options: [
        "Import",
        "Export",
        "Actions",
        "Edit"
      ],
      options_en: [
        "Import",
        "Export",
        "Actions",
        "Edit"
      ],
      correct: "Actions"
    },
    {
      question: "Opsi mana yang harus dicentang agar file yang diekspor kompatibel untuk diimpor kembali?",
      question_en: "Which option must be checked so that the exported file is compatible for re-import?",
      options: [
        "Save Template",
        "I want to update data",
        "Import Mode",
        "Field Mapping"
      ],
      options_en: [
        "Save Template",
        "I want to update data",
        "Import Mode",
        "Field Mapping"
      ],
      correct: "I want to update data"
    },
    {
      question: "Untuk mulai mengimpor data, di mana Anda harus mengklik?",
      question_en: "To start importing data, where should you click?",
      options: [
        "Tombol Import di menu",
        "Ikon Gear → Import Records",
        "File → Upload",
        "Tools → Load File"
      ],
      options_en: [
        "Import button in the menu",
        "Gear Icon → Import Records",
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
      question_en: "What type of information is displayed in the Chatter?",
      options: [
        "Hanya pesan dan email",
        "Perubahan field, pesan, catatan, dan aktivitas terjadwal",
        "Hanya acara kalender",
        "Pengaturan dan konfigurasi sistem"
      ],
      options_en: [
        "Only messages and emails",
        "Field changes, messages, notes, and scheduled activities",
        "Only calendar events",
        "System settings and configurations"
      ],
      correct: "Perubahan field, pesan, catatan, dan aktivitas terjadwal"
    },
    {
      question: "Apa yang terjadi ketika Anda mengklik ikon bintang pada entri Chatter?",
      question_en: "What happens when you click the star icon on a Chatter entry?",
      options: [
        "Menandai pesan sebagai telah dibaca",
        "Mengirim pesan ke manajer Anda",
        "Menghapus entri Chatter",
        "Menyimpan entri tersebut ke folder Starred di aplikasi Discuss"
      ],
      options_en: [
        "Marks the message as read",
        "Sends the message to your manager",
        "Deletes the Chatter entry",
        "Saves the entry to the Starred folder in the Discuss app"
      ],
      correct: "Menyimpan entri tersebut ke folder Starred di aplikasi Discuss"
    },
    {
      question: "Apa yang terjadi ketika Anda mengklik Log setelah menulis catatan?",
      question_en: "What happens when you click Log after writing a note?",
      options: [
        "Catatan muncul di Chatter dan memberi notifikasi kepada pengguna internal yang di-tag",
        "Catatan dikirim sebagai email",
        "Record ditutup secara otomatis",
        "Catatan disembunyikan dari semua pengikut"
      ],
      options_en: [
        "The note appears in Chatter and notifies tagged internal users",
        "The note is sent as an email",
        "The record is automatically closed",
        "The note is hidden from all followers"
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
      question_en: "What is the main purpose of Canned Responses in Odoo?",
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
      question_en: "Where are Canned Responses managed in Odoo?",
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
      question_en: "What happens if you leave the \"Authorized Group\" field empty?",
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
      question_en: "How often can digest emails be sent in Odoo?",
      options: [
        "Harian",
        "Mingguan",
        "Bulanan & Triwulanan",
        "Semua jawaban benar"
      ],
      options_en: [
        "Daily",
        "Weekly",
        "Monthly & Quarterly",
        "All answers are correct"
      ],
      correct: "Semua jawaban benar"
    },
    {
      question: "Bagaimana cara menambahkan KPI tambahan ke Digest Emails Anda?",
      question_en: "How can you add additional KPIs to your Digest Emails?",
      options: [
        "Tambah dari menu 'Additional KPIs'",
        "Install aplikasi yang relevan untuk KPI tersebut (misal: eCommerce, CRM)",
        "Masuk mode developer, lalu pilih dari menu 'hidden KPIs'",
        "Anda tidak bisa menambah KPI tambahan"
      ],
      options_en: [
        "Add from the 'Additional KPIs' menu",
        "Install the relevant application for that KPI (e.g., eCommerce, CRM)",
        "Enter developer mode, then select from the 'hidden KPIs' menu",
        "You cannot add additional KPIs"
      ],
      correct: "Install aplikasi yang relevan untuk KPI tersebut (misal: eCommerce, CRM)"
    },
    {
      question: "Manakah yang BUKAN merupakan opsi untuk mengirim digest emails?",
      question_en: "Which is NOT an option for sending digest emails?",
      options: [
        "Gunakan tombol 'Send Now' untuk mengirim segera",
        "Tunggu 'Next Send Date' agar terkirim otomatis",
        "Ubah frekuensi pengiriman agar dikirim lebih cepat atau lambat",
        "Gunakan tombol 'Schedule' untuk menjadwalkan ke jam tertentu di masa depan secara manual"
      ],
      options_en: [
        "Use the 'Send Now' button to send immediately",
        "Wait for the 'Next Send Date' for automatic sending",
        "Change the sending frequency to send sooner or later",
        "Use the 'Schedule' button to manually schedule for a specific future time"
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
      question_en: "Which two fields do you need to create in Odoo Studio to add a custom KPI to the digest email?",
      options: [
        "Field teks dan field tanggal",
        "Field checkbox dan field integer",
        "Field selection dan field monetary",
        "Field email dan field checkbox"
      ],
      options_en: [
        "Text field and date field",
        "Checkbox field and integer field",
        "Selection field and monetary field",
        "Email field and checkbox field"
      ],
      correct: "Field checkbox dan field integer"
    },
    {
      question: "Ke mana Anda harus pergi untuk memasukkan kode kustom ke dalam field Odoo Studio?",
      question_en: "Where must you go to enter custom code into an Odoo Studio field?",
      options: [
        "Technical > Models > pilih field tersebut",
        "Technical > Fields > pilih field tersebut",
        "Technical > Codebox > pilih field tersebut",
        "Technical > Database > pilih field tersebut"
      ],
      options_en: [
        "Technical > Models > select the field",
        "Technical > Fields > select the field",
        "Technical > Codebox > select the field",
        "Technical > Database > select the field"
      ],
      correct: "Technical > Models > pilih field tersebut"
    },
    {
      question: "Di mana Anda mengonfigurasi penerima (recipients) untuk digest emails?",
      question_en: "Where do you configure recipients for digest emails?",
      options: [
        "Di 'General Settings'",
        "Di 'User Preferences'",
        "Di 'Digest Settings'",
        "Di tab 'Recipients' pada formulir digest email"
      ],
      options_en: [
        "In 'General Settings'",
        "In 'User Preferences'",
        "In 'Digest Settings'",
        "In the 'Recipients' tab on the digest email form"
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
      question_en: "Why is it better to set group access rights for new employees rather than setting permissions individually?",
      options: [
        "Ini memungkinkan karyawan baru memiliki kontrol penuh atas aplikasi CRM",
        "Lebih cepat mengatur izin untuk setiap pengguna satu per satu",
        "Grup akan tetap ada meskipun penggunanya berganti, dan lebih mudah mengelola banyak pengguna dengan izin yang sama",
        "Ini mencegah karyawan baru melihat apa yang terjadi di aplikasi CRM"
      ],
      options_en: [
        "It allows new employees to have full control over the CRM app",
        "It is faster to set permissions for each user one by one",
        "Groups persist even if users change, and it's easier to manage many users with the same permissions",
        "It prevents new employees from seeing what is happening in the CRM app"
      ],
      correct: "Grup akan tetap ada meskipun penggunanya berganti, dan lebih mudah mengelola banyak pengguna dengan izin yang sama"
    },
    {
      question: "Apa arti pengaturan izin 'Read Access' (Baca) pada hak akses tertentu bagi pengguna dalam grup tersebut?",
      question_en: "What does the 'Read Access' permission setting mean for users in that group?",
      options: [
        "Mereka bisa mengedit dan menghapus probabilitas lead",
        "Mereka bisa membuat probabilitas lead baru",
        "Mereka tidak memiliki akses ke probabilitas lead",
        "Mereka hanya bisa melihat (view) probabilitas lead"
      ],
      options_en: [
        "They can edit and delete lead probabilities",
        "They can create new lead probabilities",
        "They have no access to lead probabilities",
        "They can only view lead probabilities"
      ],
      correct: "Mereka hanya bisa melihat (view) probabilitas lead"
    },
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan hak akses (access right) standar?",
      question_en: "Which of the following is NOT a standard access right?",
      options: [
        "Read (Baca)",
        "Write (Tulis/Edit)",
        "Create (Buat)",
        "Execute (Jalankan)"
      ],
      options_en: [
        "Read",
        "Write",
        "Create",
        "Execute"
      ],
      correct: "Execute (Jalankan)"
    }
  ],
  materi16: [
    {
      question: "Bagaimana Odoo menampilkan tautan (link) yang dibagikan dalam pesan chat?",
      question_en: "How does Odoo display links shared in a chat message?",
      options: [
        "Hanya sebagai teks biasa",
        "Sebagai pratinjau yang dapat diklik (Clickable Preview)",
        "Sebagai kode QR",
        "Sebagai lampiran file"
      ],
      options_en: [
        "Only as plain text",
        "As a Clickable Preview",
        "As a QR code",
        "As a file attachment"
      ],
      correct: "Sebagai pratinjau yang dapat diklik (Clickable Preview)"
    },
    {
      question: "Apa yang terjadi saat Anda melakukan 'Unpin' pada sebuah percakapan di Odoo Discuss?",
      question_en: "What happens when you 'Unpin' a conversation in Odoo Discuss?",
      options: [
        "Menghapus riwayat percakapan",
        "Mengarsipkan percakapan secara permanen",
        "Mengirim notifikasi ke pengguna lain",
        "Menyembunyikan percakapan dari tampilan sampai Anda mencarinya kembali"
      ],
      options_en: [
        "Deletes the conversation history",
        "Permanently archives the conversation",
        "Sends a notification to other users",
        "Hides the conversation from view until you search for it again"
      ],
      correct: "Menyembunyikan percakapan dari tampilan sampai Anda mencarinya kembali"
    },
    {
      question: "Ikon apa di pojok kanan atas chat yang memungkinkan Anda mengatur pengaturan notifikasi?",
      question_en: "Which icon in the top right of the chat allows you to adjust notification settings?",
      options: [
        "Kaca Pembesar",
        "Pin",
        "Lonceng (Bell)",
        "Klip Kertas"
      ],
      options_en: [
        "Magnifying Glass",
        "Pin",
        "Bell",
        "Paperclip"
      ],
      correct: "Lonceng (Bell)"
    }
  ],
  materi17: [
    {
      question: "Bagaimana cara Anda mengundang seseorang dari luar perusahaan ke dalam grup chat?",
      question_en: "How do you invite someone from outside the company to a group chat?",
      options: [
        "Tambahkan mereka melalui modul CRM",
        "Buat tautan publik (public link) ke chat tersebut",
        "Minta admin untuk membuatkan akun mereka terlebih dahulu",
        "Gunakan opsi 'Start a Meeting' saja"
      ],
      options_en: [
        "Add them through the CRM module",
        "Create a public link to the chat",
        "Ask an admin to create an account for them first",
        "Use the 'Start a Meeting' option only"
      ],
      correct: "Buat tautan publik (public link) ke chat tersebut"
    },
    {
      question: "Saat membuka aplikasi Discuss, bagian mana yang harus Anda periksa untuk meninjau semua pembaruan (updates) terbaru pada record yang melibatkan Anda?",
      question_en: "When opening the Discuss app, which section should you check to review all recent updates on records involving you?",
      options: [
        "Inbox (Kotak Masuk)",
        "Starred (Berbintang)",
        "History feed (Riwayat)",
        "Direct Messages (Pesan Langsung)"
      ],
      options_en: [
        "Inbox",
        "Starred",
        "History feed",
        "Direct Messages"
      ],
      correct: "History feed (Riwayat)"
    },
    {
      question: "Kontrol apa yang digunakan untuk memberi tahu orang lain secara sopan (discreetly) bahwa Anda ingin berbicara?",
      question_en: "What control is used to discreetly signal to others that you want to speak?",
      options: [
        "Mute",
        "Members List",
        "Gear menu",
        "Raise Hand (Angkat Tangan)"
      ],
      options_en: [
        "Mute",
        "Members List",
        "Gear menu",
        "Raise Hand"
      ],
      correct: "Raise Hand (Angkat Tangan)"
    }
  ],
  materi18: [
    {
      question: "Apa artinya jika nama sebuah channel dicetak tebal (bold) di sidebar?",
      question_en: "What does it mean if a channel name is bolded in the sidebar?",
      options: [
        "Channel tersebut bersifat pribadi (private)",
        "Itu adalah channel default",
        "Anda yang membuat channel tersebut",
        "Ada pesan yang belum terbaca (unread messages)"
      ],
      options_en: [
        "The channel is private",
        "It is a default channel",
        "You created the channel",
        "There are unread messages"
      ],
      correct: "Ada pesan yang belum terbaca (unread messages)"
    },
    {
      question: "Apa fungsi ikon roda gigi (gear) di sebelah 'Channels'?",
      question_en: "What is the function of the gear icon next to 'Channels'?",
      options: [
        "Mengubah kata sandi Anda",
        "Mengakses semua channel yang tersedia (Access all available channels)",
        "Mereset notifikasi",
        "Mengekspor riwayat pesan Anda"
      ],
      options_en: [
        "Change your password",
        "Access all available channels",
        "Reset notifications",
        "Export your message history"
      ],
      correct: "Mengakses semua channel yang tersedia (Access all available channels)"
    },
    {
      question: "Tipe pengguna mana yang bisa bergabung dengan channel yang diatur ke 'User Types / Internal Users'?",
      question_en: "Which user type can join a channel set to 'User Types / Internal Users'?",
      options: [
        "Hanya pembuat channel",
        "Hanya kontraktor eksternal",
        "Semua karyawan di perusahaan (Any employee)",
        "Pengguna publik dengan tautan"
      ],
      options_en: [
        "Only the channel creator",
        "Only external contractors",
        "Any employee",
        "Public users with a link"
      ],
      correct: "Semua karyawan di perusahaan (Any employee)"
    }
  ],
  materi19: [
    {
      question: "Apa tindakan yang harus dilakukan sebelum menggunakan template WhatsApp yang sudah dikonfigurasi sebelumnya (Pre-configured templates)?",
      question_en: "What action must be taken before using pre-configured WhatsApp templates?",
      options: [
        "Tidak ada, template langsung berfungsi segera setelah aplikasi diinstal",
        "Template tersebut harus diserahkan (submitted) ke Meta untuk mendapatkan persetujuan",
        "Tidak ada template pre-configured, semua harus dibuat manual",
        "Template otomatis diserahkan ke Meta segera setelah disimpan"
      ],
      options_en: [
        "None, templates work immediately after app installation",
        "The templates must be submitted to Meta for approval",
        "There are no pre-configured templates, all must be manually created",
        "Templates are automatically submitted to Meta immediately after saving"
      ],
      correct: "Template tersebut harus diserahkan (submitted) ke Meta untuk mendapatkan persetujuan"
    },
    {
      question: "Di mana saja pesan WhatsApp akan muncul di Odoo?",
      question_en: "Where will WhatsApp messages appear in Odoo?",
      options: [
        "Hanya di Chatter dan Discuss",
        "Di Chatter, ikon pesan di pojok kanan atas, sebagai pesan chat di pojok kanan bawah, dan di aplikasi Discuss",
        "Hanya di aplikasi Discuss dan ikon pesan",
        "Di Chatter, Discuss, dan Dashboard CRM"
      ],
      options_en: [
        "Only in Chatter and Discuss",
        "In Chatter, the messaging icon in top right, as a chat message in bottom right, and in the Discuss app",
        "Only in the Discuss app and messaging icon",
        "In Chatter, Discuss, and the CRM Dashboard"
      ],
      correct: "Di Chatter, ikon pesan di pojok kanan atas, sebagai pesan chat di pojok kanan bawah, dan di aplikasi Discuss"
    },
    {
      question: "Saat tombol WhatsApp ditekan di Chatter, apa yang digunakan untuk mengirim pesan terformat ke pelanggan?",
      question_en: "When the WhatsApp button is pressed in Chatter, what is used to send a formatted message to the customer?",
      options: [
        "Email Templates",
        "Hanya teks biasa yang bisa dikirim",
        "WhatsApp Template digunakan untuk mengirim teks preformatted, gambar, dan tautan",
        "SMS Templates"
      ],
      options_en: [
        "Email Templates",
        "Only plain text can be sent",
        "WhatsApp Templates are used to send preformatted text, images, and links",
        "SMS Templates"
      ],
      correct: "WhatsApp Template digunakan untuk mengirim teks preformatted, gambar, dan tautan"
    }
  ],
  materi20: [
    {
      question: "Jenis variabel apa yang perlu dipilih untuk mereferensikan field spesifik dalam model ke badan teks pesan?",
      question_en: "What type of variable needs to be selected to reference a specific field in the model to the message body?",
      options: [
        "Free Text",
        "Portal Link",
        "Field of Model",
        "User Name"
      ],
      options_en: [
        "Free Text",
        "Portal Link",
        "Field of Model",
        "User Name"
      ],
      correct: "Field of Model"
    },
    {
      question: "Apa kegunaan dari dua field 'Callback URL' dan 'Webhook Verify Token' yang diisi otomatis di Odoo?",
      question_en: "What is the use of the two automatically filled fields 'Callback URL' and 'Webhook Verify Token' in Odoo?",
      options: [
        "Untuk mengonfigurasi penerimaan pesan masuk (receive/return messages) dari WhatsApp ke Odoo",
        "Untuk mengonfigurasi pengiriman pesan ke pelanggan via WhatsApp",
        "Untuk moderasi spam di akun WhatsApp Business",
        "Keduanya dibuat oleh Meta, bukan Odoo, dan tidak digunakan"
      ],
      options_en: [
        "To configure receiving incoming messages (receive/return messages) from WhatsApp to Odoo",
        "To configure sending messages to customers via WhatsApp",
        "For spam moderation in WhatsApp Business account",
        "Both are created by Meta, not Odoo, and are not used"
      ],
      correct: "Untuk mengonfigurasi penerimaan pesan masuk (receive/return messages) dari WhatsApp ke Odoo"
    },
    {
      question: "Field mana dalam template WhatsApp yang menetapkan model data yang akan direferensikan dalam pesan akhir ke pengguna?",
      question_en: "Which field in the WhatsApp template defines the data model that will be referenced in the final message to the user?",
      options: [
        "Category",
        "Applies to",
        "Phone Field",
        "Template Name"
      ],
      options_en: [
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
      question_en: "Can you sell a product whose inventory stock shows 0?",
      options: [
        "Ya",
        "Ya, tapi hanya jika Anda sudah mengatur aturan replenishment/reordering",
        "Ya, tapi hanya jika kebijakan penagihan produk diatur ke \"on delivered quantities\"",
        "Tidak, itu ilegal"
      ],
      options_en: [
        "Yes",
        "Yes, but only if you have set up replenishment/reordering rules",
        "Yes, but only if the product invoicing policy is set to \"on delivered quantities\"",
        "No, that is illegal"
      ],
      correct: "Ya"
    },
    {
      question: "Di mana Anda bisa membuat faktur untuk semua pelanggan sekaligus?",
      question_en: "Where can you create invoices for all customers at once?",
      options: [
        "Buka aplikasi Accounting > To Invoice > Create Batch Invoice",
        "Buka aplikasi CRM > pilih semua peluang \"Won\" > Send Invoices",
        "Buka aplikasi Sales > To Invoice > Orders to Invoice",
        "Tidak mungkin, Anda harus membuat faktur satu per satu"
      ],
      options_en: [
        "Open Accounting app > To Invoice > Create Batch Invoice",
        "Open CRM app > select all \"Won\" opportunities > Send Invoices",
        "Open Sales app > To Invoice > Orders to Invoice",
        "Impossible, you must create invoices one by one"
      ],
      correct: "Buka aplikasi Sales > To Invoice > Orders to Invoice"
    }
  ],
  materi22: [
    {
      question: "Tentang pertanyaan pendaftaran: jika 'Ask only once per order' tidak diaktifkan:",
      question_en: "About registration questions: if 'Ask only once per order' is not enabled:",
      options: [
        "Pertanyaan diajukan satu kali per pesanan",
        "Pertanyaan diajukan satu kali per peserta",
        "Pertanyaan diacak jika ada lebih dari satu, sehingga hanya satu pertanyaan per peserta",
        "Tidak ada jawaban yang benar"
      ],
      options_en: [
        "Questions are asked once per order",
        "Questions are asked once per attendee",
        "Questions are randomized if there is more than one, so only one question per attendee",
        "No correct answer"
      ],
      correct: "Pertanyaan diajukan satu kali per peserta"
    },
    {
      question: "Untuk membuat aturan Lead Generation, saya harus pergi ke:",
      question_en: "To create a Lead Generation rule, I must go to:",
      options: [
        "Events → Configuration → Lead Generation → Create",
        "Events → Settings → Lead Generation → Create",
        "Events → Lead Generation → Create",
        "CRM → Configuration → Events → Lead Generation → Create"
      ],
      options_en: [
        "Events → Configuration → Lead Generation → Create",
        "Events → Settings → Lead Generation → Create",
        "Events → Lead Generation → Create",
        "CRM → Configuration → Events → Lead Generation → Create"
      ],
      correct: "Events → Configuration → Lead Generation → Create"
    },
    {
      question: "Bisakah saya membuat dan mengirim posting ke beberapa platform sosial sekaligus?",
      question_en: "Can I create and send posts to multiple social platforms at once?",
      options: [
        "Tidak, posting harus dibuat dan diposting secara individu per stream",
        "Ya, tapi konten harus dibuat individu per stream, lalu dijadwalkan bersamaan",
        "Ya, posting bisa dibuat dan dikirim ke beberapa stream sekaligus",
        "Tidak, posting bisa dibuat bersamaan tapi harus dikirim satu per satu"
      ],
      options_en: [
        "No, posts must be created and posted individually per stream",
        "Yes, but content must be created individually per stream, then scheduled together",
        "Yes, posts can be created and sent to multiple streams at once",
        "No, posts can be created together but must be sent one by one"
      ],
      correct: "Ya, posting bisa dibuat dan dikirim ke beberapa stream sekaligus"
    }
  ],
  materi23: [
    {
      question: "Di Aplikasi Planning Odoo, apa arti tanda merah di sudut shift?",
      question_en: "In the Odoo Planning App, what does the red mark in the shift corner mean?",
      options: [
        "Shift bentrok untuk orang yang sama",
        "Shift duplikat",
        "Ada catatan pada shift",
        "Orang tersebut sedang cuti"
      ],
      options_en: [
        "Shift conflict for the same person",
        "Duplicate shift",
        "There is a note on the shift",
        "The person is on leave"
      ],
      correct: "Shift bentrok untuk orang yang sama"
    },
    {
      question: "Di mana Anda bisa menambahkan produk ke menu agar bisa langsung dijual ke pelanggan?",
      question_en: "Where can you add products to the menu so they can be sold directly to customers?",
      options: [
        "Langsung dari menu POS di mode kiosk",
        "Dari menu produk Aplikasi Inventory",
        "Aplikasi eCommerce untuk memastikan pesanan online berfungsi",
        "A dan B"
      ],
      options_en: [
        "Directly from the POS menu in kiosk mode",
        "From the Inventory App product menu",
        "eCommerce App to ensure online orders work",
        "A and B"
      ],
      correct: "A dan B"
    },
    {
      question: "Opsi apa yang perlu dipilih dalam sesi POS untuk mengedit tata letak meja?",
      question_en: "What option needs to be selected in the POS session to edit the table layout?",
      options: [
        "Konfigurasi > Pengaturan > Centang kotak di sebelah \"Edit tables\"",
        "Mode pengembang harus diaktifkan",
        "Tombol Edit di menu pengaturan",
        "Ikon Pensil di pojok kanan atas"
      ],
      options_en: [
        "Configuration > Settings > Check the box next to \"Edit tables\"",
        "Developer mode must be enabled",
        "Edit button in the settings menu",
        "Pencil icon in the top right corner"
      ],
      correct: "Ikon Pensil di pojok kanan atas"
    }
  ],
  materi24: [
    {
      question: "Mengapa \"On payment\" harus diaktifkan untuk kebijakan pendaftaran?",
      question_en: "Why should \"On payment\" be enabled for the enrollment policy?",
      options: [
        "Agar kursus juga menjadi produk dan bisa dijual online",
        "Agar pembuat kursus bisa menerima donasi",
        "Ini bukan opsi untuk kebijakan pendaftaran",
        "Agar pelanggan bisa menjual kembali kursus tersebut"
      ],
      options_en: [
        "So the course becomes a product and can be sold online",
        "So the course creator can receive donations",
        "This is not an option for enrollment policy",
        "So customers can resell the course"
      ],
      correct: "Agar kursus juga menjadi produk dan bisa dijual online"
    },
    {
      question: "Kapan pelanggan bisa mengakses kursus jika mereka membelinya secara online?",
      question_en: "When can customers access the course if they buy it online?",
      options: [
        "Segera setelah mereka menambahkannya ke keranjang",
        "Setelah pembayaran berhasil diproses",
        "Dengan kode promo khusus \"ENROLL\" saat checkout",
        "Hanya pada hari kerja tertentu"
      ],
      options_en: [
        "Immediately after they add it to the cart",
        "After the payment is successfully processed",
        "With a special promo code \"ENROLL\" at checkout",
        "Only on certain working days"
      ],
      correct: "Setelah pembayaran berhasil diproses"
    },
    {
      question: "Apa yang harus dilakukan untuk menjual kursus saya secara online?",
      question_en: "What must be done to sell my course online?",
      options: [
        "Kursus harus disetujui dulu oleh manajer pengguna",
        "Kursus harus menjadi produk di katalog, tapi tidak perlu dipublikasikan",
        "Kursus harus menjadi produk di katalog, dan harus dipublikasikan",
        "Tidak ada, pengguna tidak bisa menjual kursus online"
      ],
      options_en: [
        "The course must be approved by the user manager first",
        "The course must be a product in the catalog, but doesn't need to be published",
        "The course must be a product in the catalog, and must be published",
        "Nothing, users cannot sell courses online"
      ],
      correct: "Kursus harus menjadi produk di katalog, dan harus dipublikasikan"
    }
  ],
  materi25: [
    {
      question: "Bagaimana cara mengecek kapan pembayaran berikutnya jatuh tempo untuk Langganan yang sedang berjalan?",
      question_en: "How to check when the next payment is due for an ongoing Subscription?",
      options: [
        "Telepon pelanggan dan tanyakan",
        "Odoo akan menampilkan pop-up pengingat tanggal jatuh tempo",
        "‘Invoice Date’ pada Sales Order Langganan",
        "Tidak ada cara mengecek di Odoo, kita harus ingat tanggal fakturnya"
      ],
      options_en: [
        "Call the customer and ask",
        "Odoo will show a due date reminder pop-up",
        "‘Invoice Date’ on the Subscription Sales Order",
        "There is no way to check in Odoo, we have to remember the invoice date"
      ],
      correct: "‘Invoice Date’ pada Sales Order Langganan"
    },
    {
      question: "Kemana kita harus pergi untuk mengotomatiskan tugas dalam tahapan tugas di aplikasi Project?",
      question_en: "Where should we go to automate tasks within task stages in the Project app?",
      options: [
        "Di ikon gerigi di sebelah nama tugas/stage",
        "Di Settings -> Configuration",
        "Anda tidak bisa mengotomatiskan tugas di aplikasi Project",
        "Klik nama tugas dan ketik automasinya"
      ],
      options_en: [
        "On the gear icon next to the task/stage name",
        "In Settings -> Configuration",
        "You cannot automate tasks in the Project app",
        "Click the task name and type the automation"
      ],
      correct: "Di ikon gerigi di sebelah nama tugas/stage"
    },
    {
      question: "Bagaimana cara mengizinkan pelanggan membayar langsung di website saya?",
      question_en: "How to allow customers to pay directly on my website?",
      options: [
        "Install terminal pembayaran seperti Square, Cashapp, atau Venmo",
        "Buka Settings -> Quotations & Orders dan centang kotak di sebelah Online Payment",
        "Tidak ada cara untuk mengizinkan pelanggan membayar langsung di website",
        "Buka Settings -> Website dan install terminal pembayaran"
      ],
      options_en: [
        "Install payment terminals like Square, Cashapp, or Venmo",
        "Go to Settings -> Quotations & Orders and check the box next to Online Payment",
        "There is no way to allow customers to pay directly on the website",
        "Go to Settings -> Website and install payment terminals"
      ],
      correct: "Buka Settings -> Quotations & Orders dan centang kotak di sebelah Online Payment"
    }
  ],
  materi26: [
    {
      question: "Saat saya menggunakan alamat email untuk menerima dokumen, apakah Odoo membuat akun email baru atau menggunakan alias email?",
      question_en: "When I use an email address to receive documents, does Odoo create a new email account or use an email alias?",
      options: [
        "Email baru",
        "Alias email",
        "Menggunakan alias email untuk menerima dokumen tidak mungkin, saya harus terus menerimanya melalui surat dan scanning manual",
        "Alias email, tapi perlu aplikasi pihak ketiga"
      ],
      options_en: [
        "New email",
        "Email alias",
        "Using email alias to receive documents is impossible, I must continue receiving them via mail and manual scanning",
        "Email alias, but requires a third-party app"
      ],
      correct: "Alias email"
    },
    {
      question: "Apa fungsi tindakan \"Split\"?",
      question_en: "What is the function of the \"Split\" action?",
      options: [
        "Membelah satu halaman menjadi dua",
        "Memisahkan dokumen ke workspace berbeda",
        "Memecah kumpulan dokumen menjadi file terpisah, yang masing-masing bisa diberi tindakan berbeda",
        "Tidak ada jawaban benar"
      ],
      options_en: [
        "Splitting one page into two",
        "Separating documents to different workspaces",
        "Breaking a batch of documents into separate files, each of which can be assigned different actions",
        "No correct answer"
      ],
      correct: "Memecah kumpulan dokumen menjadi file terpisah, yang masing-masing bisa diberi tindakan berbeda"
    },
    {
      question: "Bagaimana cara saya menyesuaikan tindakan (actions) yang tersedia untuk dokumen?",
      question_en: "How do I customize the actions available for documents?",
      options: [
        "Hanya mungkin dengan modul pihak ketiga",
        "Ini dianggap pengembangan di Odoo, perlu modifikasi kode",
        "Action bisa dibuat dan disesuaikan di Documents App > Configuration > Actions",
        "Action bisa dibuat lewat menu Technical di Settings app"
      ],
      options_en: [
        "Only possible with third-party modules",
        "This is considered development in Odoo, requires code modification",
        "Actions can be created and customized in Documents App > Configuration > Actions",
        "Actions can be created via Technical menu in Settings app"
      ],
      correct: "Action bisa dibuat dan disesuaikan di Documents App > Configuration > Actions"
    }
  ],
  materi27: [
    {
      question: "Jika kolom \"Analytic\" tidak terlihat di Purchase Order atau Sales Order, di mana bisa diaktifkan?",
      question_en: "If the \"Analytic\" column is not visible on a Purchase Order or Sales Order, where can it be enabled?",
      options: [
        "Analytic Accounts tidak bisa digunakan di Odoo",
        "Analytic Accounts diaktifkan di Accounting > Configuration > Settings",
        "Analytic Accounts aktif secara default di Odoo",
        "Analytic Accounts diaktifkan di Sales / Purchase Configuration > Settings"
      ],
      options_en: [
        "Analytic Accounts cannot be used in Odoo",
        "Analytic Accounts are enabled in Accounting > Configuration > Settings",
        "Analytic Accounts are active by default in Odoo",
        "Analytic Accounts are enabled in Sales / Purchase Configuration > Settings"
      ],
      correct: "Analytic Accounts diaktifkan di Accounting > Configuration > Settings"
    },
    {
      question: "Bagaimana cara menagih pelanggan atas waktu kerja karyawan Anda di proyek?",
      question_en: "How to bill customers for your employees' work time on a project?",
      options: [
        "Setting \"produk\" sebagai consumable dan kebijakan penagihan ordered quantity",
        "Setting \"produk\" sebagai service dan kebijakan penagihan ordered quantity",
        "Setting \"produk\" sebagai service dan kebijakan penagihan timesheets on tasks",
        "Setting \"produk\" sebagai consumable dan kebijakan penagihan timesheets on tasks"
      ],
      options_en: [
        "Set \"product\" as consumable and invoicing policy ordered quantity",
        "Set \"product\" as service and invoicing policy ordered quantity",
        "Set \"product\" as service and invoicing policy timesheets on tasks",
        "Set \"product\" as consumable and invoicing policy timesheets on tasks"
      ],
      correct: "Setting \"produk\" sebagai service dan kebijakan penagihan timesheets on tasks"
    },
    {
      question: "Wood Panels diseting penagihan berdasarkan delivered quantities dan re-invoice pada sales price. Biaya produk $50 dan harga jual $80. Berapa yang akan ditagihkan ke pelanggan untuk 5 wood panels?",
      question_en: "Wood Panels are set to invoice based on delivered quantities and re-invoice at sales price. Product cost is $50 and sales price is $80. How much will be billed to the customer for 5 wood panels?",
      options: [
        "$50",
        "$80",
        "$250",
        "$400"
      ],
      options_en: [
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
      question_en: "Which operational route was chosen for David's drone because it is made in-house?",
      options: [
        "Manufacture",
        "Buy",
        "Replenish on Order (MTO)",
        "Dropship"
      ],
      options_en: [
        "Manufacture",
        "Buy",
        "Replenish on Order (MTO)",
        "Dropship"
      ],
      correct: "Manufacture"
    },
    {
      question: "Di mana pada formulir produk Anda bisa menambahkan produk aksesori agar muncul bersama produk utama saat pembayaran?",
      question_en: "Where on the product form can you add accessory products so they appear with the main product at checkout?",
      options: [
        "Tab Sales > Upsell & Cross-sell",
        "Tab Inventory > Routes",
        "Tab Purchase > Purchase Description",
        "Tab Inventory > Logistics"
      ],
      options_en: [
        "Sales Tab > Upsell & Cross-sell",
        "Inventory Tab > Routes",
        "Purchase Tab > Purchase Description",
        "Inventory Tab > Logistics"
      ],
      correct: "Tab Sales > Upsell & Cross-sell"
    },
    {
      question: "Apa fungsi mencentang kotak \"Is Published\" pada tab sales produk?",
      question_en: "What is the function of checking the \"Is Published\" box on the product sales tab?",
      options: [
        "Mempublikasikan produk ke website perusahaan",
        "Mengirim email promosi ke pelanggan",
        "Menandai produk siap untuk manufaktur",
        "Menambahkan produk ke template penawaran"
      ],
      options_en: [
        "Publishes the product to the company website",
        "Sends a promotional email to customers",
        "Marks the product as ready for manufacturing",
        "Adds the product to the quotation template"
      ],
      correct: "Mempublikasikan produk ke website perusahaan"
    }
  ],
  sales_materi1: [
    {
      question: "Di mana letak halaman 'Settings' di aplikasi 'Sales'?",
      question_en: "Where is the 'Settings' page located in the 'Sales' app?",
      options: [
        "Orders > Settings",
        "Configuration > Settings",
        "Products > Settings",
        "Reporting > Settings"
      ],
      options_en: [
        "Orders > Settings",
        "Configuration > Settings",
        "Products > Settings",
        "Reporting > Settings"
      ],
      correct: "Configuration > Settings"
    },
    {
      question: "Selain opsi 'Products', opsi apa lagi yang terletak di bawah menu header 'Products'?",
      question_en: "Besides the 'Products' option, what other option is located under the 'Products' header menu?",
      options: [
        "Product Values, Prices, Discounts, eWallets",
        "Product Prices, Variants, Loyalties, Gift Cards",
        "Product Configurations, Price Settings, eWallets, Discount Settings",
        "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet"
      ],
      options_en: [
        "Product Values, Prices, Discounts, eWallets",
        "Product Prices, Variants, Loyalties, Gift Cards",
        "Product Configurations, Price Settings, eWallets, Discount Settings",
        "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet"
      ],
      correct: "Product Variants, Pricelists, Discount & Loyalty, Gift cards & eWallet"
    },
    {
      question: "Halaman apa saja yang tersedia di bawah opsi menu header 'To Invoice'?",
      question_en: "Which pages are available under the 'To Invoice' header menu option?",
      options: [
        "‘Orders to Invoice’ dan ‘Orders to Upsell’",
        "‘Orders to Invoice’ dan ‘Quotations’",
        "‘Orders to Upsell’ dan ‘Customers’",
        "‘Orders to Upsell’ dan ‘Products to Purchase’"
      ],
      options_en: [
        "‘Orders to Invoice’ and ‘Orders to Upsell’",
        "‘Orders to Invoice’ and ‘Quotations’",
        "‘Orders to Upsell’ and ‘Customers’",
        "‘Orders to Upsell’ and ‘Products to Purchase’"
      ],
      correct: "‘Orders to Invoice’ dan ‘Orders to Upsell’"
    }
  ],
  sales_materi2: [
    {
      question: "Halaman apa yang berfungsi sebagai dashboard utama di aplikasi Sales?",
      question_en: "Which page serves as the main dashboard in the Sales app?",
      options: [
        "Customers",
        "Orders",
        "Sales",
        "Quotations"
      ],
      options_en: [
        "Customers",
        "Orders",
        "Sales",
        "Quotations"
      ],
      correct: "Quotations"
    },
    {
      question: "Berapa banyak produk opsional yang dapat ditambahkan ke penawaran?",
      question_en: "How many optional products can be added to a quotation?",
      options: [
        "1",
        "2",
        "3",
        "Tidak ada batasan (There is no limit)"
      ],
      options_en: [
        "1",
        "2",
        "3",
        "There is no limit"
      ],
      correct: "Tidak ada batasan (There is no limit)"
    },
    {
      question: "Tab apa pada formulir penawaran yang didedikasikan untuk meninggalkan catatan internal bagi karyawan?",
      question_en: "Which tab on the quotation form is dedicated to leaving internal notes for employees?",
      options: [
        "Notes",
        "Internal Chatter",
        "FYI",
        "Employees"
      ],
      options_en: [
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
      question_en: "What appears in the right column of the 'General Information' tab on a product?",
      options: [
        "Field terkait finansial, terlepas dari Tipe Produk yang dipilih",
        "Field terkait inventaris, terlepas dari Tipe Produk yang dipilih",
        "Field terkait finansial, *hanya* jika 'Goods' dipilih sebagai Tipe Produk",
        "Field terkait inventaris, *hanya* jika 'Services' dipilih sebagai Tipe Produk"
      ],
      options_en: [
        "Financial fields, regardless of the chosen Product Type",
        "Inventory fields, regardless of the chosen Product Type",
        "Financial fields, *only* if 'Goods' is selected as Product Type",
        "Inventory fields, *only* if 'Services' is selected as Product Type"
      ],
      correct: "Field terkait finansial, terlepas dari Tipe Produk yang dipilih"
    },
    {
      question: "Apa kegunaan field 'Optional Products'?",
      question_en: "What is the use of the 'Optional Products' field?",
      options: [
        "Menambahkan produk pelengkap yang akan direkomendasikan kepada pelanggan selama proses pembelian",
        "Memberikan opsi kepada pelanggan untuk membatalkan transaksi",
        "Menambahkan metode pembayaran opsional untuk dipilih pelanggan",
        "Menampilkan produk serupa dari perusahaan lain untuk membandingkan harga"
      ],
      options_en: [
        "Adds complementary products that will be recommended to the customer during the checkout process",
        "Gives the customer the option to cancel the transaction",
        "Adds an optional payment method for the customer to select",
        "Displays similar products from other companies to compare prices"
      ],
      correct: "Menambahkan produk pelengkap yang akan direkomendasikan kepada pelanggan selama proses pembelian"
    },
    {
      question: "Setelah mengonfigurasi formulir produk, bagaimana cara saya mempublikasikan produk?",
      question_en: "After configuring the product form, how do I publish the product?",
      options: [
        "Publish smart button > Ubah ‘Off’ menjadi ‘On’",
        "Buka Website smart button > Ubah ‘Unpublished’ menjadi ‘Published’",
        "Configuration > Products > Publish Recent",
        "Products > Publish > Pilih Produk untuk Dipublikasikan"
      ],
      options_en: [
        "Publish smart button > Change ‘Off’ to ‘On’",
        "Open Website smart button > Change ‘Unpublished’ to ‘Published’",
        "Configuration > Products > Publish Recent",
        "Products > Publish > Select Product to Publish"
      ],
      correct: "Buka Website smart button > Ubah ‘Unpublished’ menjadi ‘Published’"
    }
  ],
  sales_materi4: [
    {
      question: "Bagaimana 'Display Type' tipe 'Select' menampilkan varian?",
      question_en: "How does the 'Display Type' type 'Select' display variants?",
      options: [
        "Sebagai lingkaran yang bisa diklik",
        "Sebagai tombol",
        "Sebagai menu drop-down pilihan",
        "Sebagai opsi checkbox multipel"
      ],
      options_en: [
        "As clickable circles",
        "As buttons",
        "As a selection drop-down menu",
        "As multiple checkbox options"
      ],
      correct: "Sebagai menu drop-down pilihan"
    },
    {
      question: "Setelah sebuah atribut digunakan pada minimal satu produk, bagaimana hal itu mempengaruhi 'Variants Creation Mode'?",
      question_en: "After an attribute is used on at least one product, how does it affect the 'Variants Creation Mode'?",
      options: [
        "Variants Creation Mode tidak dapat diubah lagi",
        "Variants Creation Mode menjadi terlihat oleh pelanggan",
        "Variants Creation Mode menjadi terkode warna",
        "Variants Creation Mode selalu dapat diubah jika diperlukan"
      ],
      options_en: [
        "Variants Creation Mode cannot be changed anymore",
        "Variants Creation Mode becomes visible to customers",
        "Variants Creation Mode becomes color-coded",
        "Variants Creation Mode can always be changed if needed"
      ],
      correct: "Variants Creation Mode tidak dapat diubah lagi"
    },
    {
      question: "Jika satu atribut ternyata berbiaya lebih mahal dan harus menghasilkan harga jual yang lebih tinggi, di mana Anda dapat memasukkan jumlah tersebut?",
      question_en: "If one attribute turns out to be more expensive and should result in a higher selling price, where can you enter that amount?",
      options: [
        "Added Value",
        "Increase Cost",
        "Additional Customer Price",
        "Default Extra Price"
      ],
      options_en: [
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
      question_en: "How to access the 'Quotation Templates' page in Odoo Sales?",
      options: [
        "Melalui link 'Template Configuration' pada penawaran, atau 'Configuration' > 'Quotation Templates'",
        "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Templates' > 'Configuration'",
        "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Configuration' > 'Quotation Templates'",
        "Klik tombol 'Templates' pada pesanan penjualan"
      ],
      options_en: [
        "Via the 'Template Configuration' link on the quotation, or 'Configuration' > 'Quotation Templates'",
        "Via the 'Quotation Templates' link on the 'Settings' page, or 'Templates' > 'Configuration'",
        "Via the 'Quotation Templates' link on the 'Settings' page, or 'Configuration' > 'Quotation Templates'",
        "Click the 'Templates' button on the sales order"
      ],
      correct: "Melalui link 'Quotation Templates' pada halaman 'Settings', atau 'Configuration' > 'Quotation Templates'"
    },
    {
      question: "Field apa pada formulir template penawaran yang diperlukan saat berurusan dengan produk berlangganan (subscription) dan/atau jasa?",
      question_en: "Which field on the quotation template form is required when dealing with subscription products and/or services?",
      options: [
        "Subscriptions",
        "Recurrence",
        "Subscription Plans",
        "Recurring Plan"
      ],
      options_en: [
        "Subscriptions",
        "Recurrence",
        "Subscription Plans",
        "Recurring Plan"
      ],
      correct: "Recurring Plan"
    },
    {
      question: "Jika saya ingin pelanggan mengonfirmasi pesanan mereka dengan tanda tangan virtual, opsi apa yang harus diaktifkan pada formulir template penawaran?",
      question_en: "If I want customers to confirm their orders with a virtual signature, what option must be enabled on the quotation template form?",
      options: [
        "Signature",
        "Sign",
        "Virtual Sign",
        "Online Signature"
      ],
      options_en: [
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
      question_en: "How to access the 'Headers/Footers' page in Odoo Sales?",
      options: [
        "‘Configuration’ > ‘Quotation Settings’",
        "‘Configuration’ > ‘Headers/Footers’ atau klik link ‘Headers/Footers’ di halaman ‘Settings’",
        "‘Options’ > ‘Quotes’ > ‘PDF Settings’",
        "‘Configuration’ > ‘PDF Quote Options’"
      ],
      options_en: [
        "‘Configuration’ > ‘Quotation Settings’",
        "‘Configuration’ > ‘Headers/Footers’ or click the ‘Headers/Footers’ link on the ‘Settings’ page",
        "‘Options’ > ‘Quotes’ > ‘PDF Settings’",
        "‘Configuration’ > ‘PDF Quote Options’"
      ],
      correct: "‘Configuration’ > ‘Headers/Footers’ atau klik link ‘Headers/Footers’ di halaman ‘Settings’"
    },
    {
      question: "Bagaimana cara menemukan 'technical name' untuk sebuah field di Odoo?",
      question_en: "How to find the 'technical name' for a field in Odoo?",
      options: [
        "Di tab 'Notes' pada pesanan penjualan",
        "Dengan meminta akses 'Administrator' dari manajer saya",
        "Masuk ke 'Developer Mode', arahkan kursor ke ikon 'tanda tanya' di samping field, dan cari baris berjudul 'Field'",
        "Itu tidak mungkin dilakukan tanpa menghubungi tim Support"
      ],
      options_en: [
        "In the 'Notes' tab on a sales order",
        "By asking for 'Administrator' access from my manager",
        "Enter 'Developer Mode', hover over the 'question mark' icon next to the field, and look for the line titled 'Field'",
        "It is not possible without contacting the Support team"
      ],
      correct: "Masuk ke 'Developer Mode', arahkan kursor ke ikon 'tanda tanya' di samping field, dan cari baris berjudul 'Field'"
    },
    {
      question: "Apa nama tab pada penawaran/pesanan penjualan di mana opsi PDF Quote dapat ditemukan?",
      question_en: "What is the name of the tab on a quotation/sales order where PDF Quote options can be found?",
      options: [
        "‘PDF Options’",
        "‘PDF Builder’",
        "‘Quote Options’",
        "‘Quote Builder’"
      ],
      options_en: [
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
      question_en: "On the product form, which smart button must be clicked to access the 'Documents' page for that product?",
      options: [
        "PDF",
        "Documents",
        "Uploads",
        "Documentation"
      ],
      options_en: [
        "PDF",
        "Documents",
        "Uploads",
        "Documentation"
      ],
      correct: "Documents"
    },
    {
      question: "'Tipe' dokumen produk apa yang diizinkan Odoo untuk diunggah pengguna?",
      question_en: "What product document 'Type' does Odoo allow users to upload?",
      options: [
        "‘File’ dan ‘URL’",
        "‘File’ dan ‘Website’",
        "‘PDF’ dan ‘URL’",
        "‘Google Doc’ dan ‘URL’"
      ],
      options_en: [
        "‘File’ and ‘URL’",
        "‘File’ and ‘Website’",
        "‘PDF’ and ‘URL’",
        "‘Google Doc’ and ‘URL’"
      ],
      correct: "‘File’ dan ‘URL’"
    },
    {
      question: "Apa saja opsi visibilitas untuk dokumen produk?",
      question_en: "What are the visibility options for product documents?",
      options: [
        "‘Invisible’, ‘On order’, ‘On payment’, dan ‘Inside quote PDF’",
        "‘Hidden’, ‘On sales order’, ‘On quotation’, dan ‘Attached to PDF’",
        "‘Always’, ‘On quote’, ‘On sales order’, dan ‘Beneath PDF’",
        "‘Hidden’, ‘On quote’, ‘On confirmed order’, dan ‘Inside quote PDF’"
      ],
      options_en: [
        "‘Invisible’, ‘On order’, ‘On payment’, and ‘Inside quote PDF’",
        "‘Hidden’, ‘On sales order’, ‘On quotation’, and ‘Attached to PDF’",
        "‘Always’, ‘On quote’, ‘On sales order’, and ‘Beneath PDF’",
        "‘Hidden’, ‘On quote’, ‘On confirmed order’, and ‘Inside quote PDF’"
      ],
      correct: "‘Hidden’, ‘On quote’, ‘On confirmed order’, dan ‘Inside quote PDF’"
    }
  ],
  sales_materi8: [
    {
      question: "Bagaimana cara menawarkan produk tambahan kepada pelanggan menggunakan Template Penawaran?",
      question_en: "How to offer additional products to customers using Quotation Templates?",
      options: [
        "Kirim email secara manual",
        "Telepon mereka",
        "Tambahkan produk di tab Optional Products pada formulir Template Penawaran",
        "Berharap mereka kembali untuk membeli"
      ],
      options_en: [
        "Send an email manually",
        "Call them",
        "Add products in the Optional Products tab on the Quotation Template form",
        "Hope they come back to buy"
      ],
      correct: "Tambahkan produk di tab Optional Products pada formulir Template Penawaran"
    },
    {
      question: "Bisakah saya menggunakan template penawaran di lingkungan multi-perusahaan?",
      question_en: "Can I use quotation templates in a multi-company environment?",
      options: [
        "Ya",
        "Tidak, hanya untuk satu perusahaan",
        "Ya, tapi hanya jika Anda CEO",
        "Odoo tidak menawarkan template penawaran"
      ],
      options_en: [
        "Yes",
        "No, only for one company",
        "Yes, but only if you are CEO",
        "Odoo does not offer quotation templates"
      ],
      correct: "Ya"
    },
    {
      question: "Aplikasi apa yang diperlukan untuk menggunakan Quotation Builder di Odoo?",
      question_en: "What app is required to use the Quotation Builder in Odoo?",
      options: [
        "Website",
        "Mass Mailing",
        "Events",
        "Quotations"
      ],
      options_en: [
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
      question_en: "Which invoicing policy do you use to invoice customers based on the number of hours worked?",
      options: [
        "Based on Delivered Quantities (Manual)",
        "Based on Milestones",
        "Based on Timesheets",
        "Based on Employees"
      ],
      options_en: [
        "Based on Delivered Quantities (Manual)",
        "Based on Milestones",
        "Based on Timesheets",
        "Based on Employees"
      ],
      correct: "Based on Timesheets"
    },
    {
      question: "Apa yang terjadi ketika pengaturan Faktur Otomatis (Automatic Invoice) diaktifkan?",
      question_en: "What happens when the Automatic Invoice setting is enabled?",
      options: [
        "Odoo otomatis membuat faktur saat salesperson mengonfirmasi pesanan",
        "Odoo otomatis membuat faktur saat kuantitas terkirim diperbarui",
        "Odoo otomatis membuat faktur saat pelanggan mengonfirmasi pembayaran di toko online",
        "Odoo otomatis membuat faktur saat karyawan mengonfirmasi pengiriman"
      ],
      options_en: [
        "Odoo automatically creates an invoice when the salesperson confirms the order",
        "Odoo automatically creates an invoice when the delivered quantity is updated",
        "Odoo automatically creates an invoice when the customer confirms payment on the online store",
        "Odoo automatically creates an invoice when the employee confirms shipment"
      ],
      correct: "Odoo otomatis membuat faktur saat pelanggan mengonfirmasi pembayaran di toko online"
    },
    {
      question: "Manakah pernyataan yang benar tentang kebijakan penagihan 'Based on Milestones'?",
      question_en: "Which statement is true about the 'Based on Milestones' invoicing policy?",
      options: [
        "Mengharuskan Anda memasukkan jumlah milestone secara manual ke faktur",
        "Secara otomatis memperbarui kuantitas terkirim pada pesanan penjualan berdasarkan milestone yang diselesaikan di aplikasi Project",
        "Secara otomatis membuat draft faktur berdasarkan milestone yang diselesaikan di aplikasi Project",
        "Anda tidak memerlukan aplikasi Project untuk menagih pelanggan dengan kebijakan ini"
      ],
      options_en: [
        "Requires you to manually enter the milestone amount onto the invoice",
        "Automatically updates the delivered quantity on the sales order based on milestones completed in the Project app",
        "Automatically creates a draft invoice based on milestones completed in the Project app",
        "You don't need the Project app to invoice customers with this policy"
      ],
      correct: "Secara otomatis memperbarui kuantitas terkirim pada pesanan penjualan berdasarkan milestone yang diselesaikan di aplikasi Project"
    }
  ],
  sales_materi10: [
    {
      question: "Saat berada dalam mode 'Edit' di formulir, tombol/field apa yang menampung opsi 'Create an Opportunity'?",
      question_en: "When in 'Edit' mode on a form, which button/field holds the 'Create an Opportunity' option?",
      options: [
        "Create",
        "Lead/Opportunity",
        "Action",
        "Button Options"
      ],
      options_en: [
        "Create",
        "Lead/Opportunity",
        "Action",
        "Button Options"
      ],
      correct: "Action"
    },
    {
      question: "Tombol apa yang harus diklik pada formulir Opportunity untuk membuat penawaran bagi pelanggan?",
      question_en: "Which button must be clicked on the Opportunity form to create a quotation for the customer?",
      options: [
        "Send Quotation",
        "Launch Quotation",
        "Create Quotation",
        "New Quotation"
      ],
      options_en: [
        "Send Quotation",
        "Launch Quotation",
        "Create Quotation",
        "New Quotation"
      ],
      correct: "New Quotation"
    },
    {
      question: "Aplikasi terintegrasi apa yang berperan saat membuat dan mengirim faktur?",
      question_en: "What integrated app plays a role when creating and sending invoices?",
      options: [
        "Finances",
        "Accounting",
        "Banking",
        "PoS"
      ],
      options_en: [
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
      question_en: "What type of promotion program would you use to create a single promo code that is distributed widely?",
      options: [
        "Coupons",
        "Promotions",
        "Discount Code",
        "Mass Distribution Promo"
      ],
      options_en: [
        "Coupons",
        "Promotions",
        "Discount Code",
        "Mass Distribution Promo"
      ],
      correct: "Discount Code"
    },
    {
      question: "Bagaimana cara mengonfigurasi promosi agar tersedia di toko online Anda?",
      question_en: "How to configure a promotion so it is available on your online store?",
      options: [
        "Aktifkan 'Online Promotions' di pengaturan Sales.",
        "Aktifkan 'Internet Promo' di pengaturan Website.",
        "Buat tersedia di aplikasi Point of Sale.",
        "Buat tersedia di aplikasi Website."
      ],
      options_en: [
        "Activate 'Online Promotions' in Sales settings.",
        "Activate 'Internet Promo' in Website settings.",
        "Make it available in the Point of Sale app.",
        "Make it available in the Website app."
      ],
      correct: "Buat tersedia di aplikasi Website."
    },
    {
      question: "Bagaimana cara mengonfigurasi promosi agar tidak pernah kadaluwarsa?",
      question_en: "How to configure a promotion so it never expires?",
      options: [
        "Biarkan field Validity kosong.",
        "Set Validity ke tanggal hari ini.",
        "Set Expiration Date ke tanggal hari ini.",
        "Ini tidak mungkin dilakukan dengan Odoo Sales."
      ],
      options_en: [
        "Leave the Validity field empty.",
        "Set Validity to today's date.",
        "Set Expiration Date to today's date.",
        "This is not possible with Odoo Sales."
      ],
      correct: "Biarkan field Validity kosong."
    }
  ],
  sales_materi12: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar kupon dapat digunakan?",
      question_en: "What setting needs to be enabled for coupons to be used?",
      options: [
        "Promotions, Loyalty & Gift Card",
        "Loyalty Programs",
        "Discounts",
        "Coupon Codes"
      ],
      options_en: [
        "Promotions, Loyalty & Gift Card",
        "Loyalty Programs",
        "Discounts",
        "Coupon Codes"
      ],
      correct: "Promotions, Loyalty & Gift Card"
    },
    {
      question: "Apa fungsi opsi 'limit usage' (batasi penggunaan)?",
      question_en: "What is the function of the 'limit usage' option?",
      options: [
        "Membatasi jumlah kupon yang dibuat.",
        "Membatasi jumlah kupon yang didistribusikan ke semua pelanggan.",
        "Membatasi jumlah kupon yang dapat digunakan oleh pelanggan individu.",
        "Membatasi diskon yang diterapkan dengan kupon."
      ],
      options_en: [
        "Limits the number of coupons created.",
        "Limits the number of coupons distributed to all customers.",
        "Limits the number of coupons that can be used by an individual customer.",
        "Limits the discount applied with the coupon."
      ],
      correct: "Membatasi jumlah kupon yang dapat digunakan oleh pelanggan individu."
    },
    {
      question: "Di mana aturan kapan kupon bisa digunakan dapat diatur?",
      question_en: "Where can the rules for when a coupon can be used be set?",
      options: [
        "Conditional rules",
        "Restrictions",
        "Usage categories",
        "Discount settings"
      ],
      options_en: [
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
      question_en: "What is the function of the Loyalty Program?",
      options: [
        "Membiarkan pelanggan mengumpulkan poin dari pembelian mereka, yang dapat mereka gunakan pada pesanan di masa mendatang.",
        "Membiarkan pelanggan mendapatkan porsi saham perusahaan, setelah membeli sejumlah produk tertentu.",
        "Membiarkan pelanggan mengubah warna item apa pun yang mereka tambahkan ke pesanan mereka, jika mereka membelanjakan jumlah tertentu pada suatu produk.",
        "Loyalty Program tidak ada di Odoo."
      ],
      options_en: [
        "Allows customers to collect points from their purchases, which they can use on future orders.",
        "Allows customers to earn a share of the company, after buying a certain amount of products.",
        "Allows customers to change the color of any item they add to their order, if they spend a certain amount on a product.",
        "Loyalty Programs do not exist in Odoo."
      ],
      correct: "Membiarkan pelanggan mengumpulkan poin dari pembelian mereka, yang dapat mereka gunakan pada pesanan di masa mendatang."
    },
    {
      question: "Bagaimana cara memastikan pelanggan membeli dengan jumlah nominal minimum (Minimum Quantity) agar dapat mengumpulkan poin untuk pesanan tersebut?",
      question_en: "How to ensure customers buy a minimum amount (Minimum Quantity) to collect points for that order?",
      options: [
        "Di bawah setiap penawaran, klik ke 'Tab Rewards' dan atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan.",
        "Tidak ada cara untuk menetapkan jumlah nominal minimum.",
        "Di bawah 'Conditional rules', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan.",
        "Di bawah 'Rewards', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan."
      ],
      options_en: [
        "Under each offer, click to the 'Rewards Tab' and set 'Minimum Quantity' to the desired minimum amount.",
        "There is no way to set a minimum amount.",
        "Under 'Conditional rules', set 'Minimum Quantity' to the desired minimum amount for each order.",
        "Under 'Rewards', set 'Minimum Quantity' to the desired minimum amount for each order."
      ],
      correct: "Di bawah 'Conditional rules', atur 'Minimum Quantity' ke jumlah nominal minimum yang diinginkan untuk setiap pesanan."
    },
    {
      question: "Bagaimana cara menerapkan reward pelanggan untuk mendapatkan diskon pada pesanan?",
      question_en: "How to apply a customer reward to get a discount on an order?",
      options: [
        "Pada penawaran Penjualan, klik tombol 'Rewards' di atas total.",
        "Pada penawaran Penjualan, klik link internal pelanggan, periksa saldo kartu loyalitas mereka, lalu terapkan reward diskon yang diinginkan secara manual sebagai baris produk terpisah.",
        "Pada profil pelanggan, klik tab 'Rewards' dan pilih pesanan penjualan yang akan diterapkan rewardnya.",
        "Pada profil pelanggan, pilih pesanan penjualan dari tab 'Sales Order', dan terapkan reward dengan tombol 'Reward'."
      ],
      options_en: [
        "On the Sales quotation, click the 'Rewards' button above the total.",
        "On the Sales quotation, click the customer's internal link, check their loyalty card balance, then manually apply the desired discount reward as a separate product line.",
        "On the customer profile, click the 'Rewards' tab and select the sales order to apply the reward to.",
        "On the customer profile, select the sales order from the 'Sales Order' tab, and apply the reward with the 'Reward' button."
      ],
      correct: "Pada penawaran Penjualan, klik tombol 'Rewards' di atas total."
    }
  ],
  sales_materi14: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar program kartu hadiah (Gift Card) dapat dibuat?",
      question_en: "What setting needs to be enabled for Gift Card programs to be created?",
      options: [
        "Discounts",
        "Promotions, Loyalty & Gift Card",
        "Gift Card Programs",
        "Loyalty Programs"
      ],
      options_en: [
        "Discounts",
        "Promotions, Loyalty & Gift Card",
        "Gift Card Programs",
        "Loyalty Programs"
      ],
      correct: "Promotions, Loyalty & Gift Card"
    },
    {
      question: "Apa yang terjadi ketika saya memilih 'Selected Customers' saat pembuatan kartu hadiah?",
      question_en: "What happens when I select 'Selected Customers' during gift card creation?",
      options: [
        "Saya masih bisa memilih jumlah kartu hadiah yang saya suka.",
        "Odoo mengunci kolom 'Quantity to generate' agar sesuai dengan jumlah pelanggan yang dipilih.",
        "Kartu hadiah dikirim ke pelanggan anonim.",
        "Tombol 'Generate Gift Cards' disembunyikan sampai saya menambahkan outlet PoS."
      ],
      options_en: [
        "I can still choose the number of gift cards I like.",
        "Odoo locks the 'Quantity to generate' field to match the number of selected customers.",
        "Gift cards are sent to anonymous customers.",
        "The 'Generate Gift Cards' button is hidden until I add a PoS outlet."
      ],
      correct: "Odoo mengunci kolom 'Quantity to generate' agar sesuai dengan jumlah pelanggan yang dipilih."
    },
    {
      question: "Di mana tanggal kedaluwarsa untuk kartu hadiah dapat diatur?",
      question_en: "Where can the expiration date for a gift card be set?",
      options: [
        "Field 'Valid Until'",
        "Field 'Expiration'",
        "Field 'Expires on'",
        "Kartu hadiah tidak kedaluwarsa"
      ],
      options_en: [
        "'Valid Until' field",
        "'Expiration' field",
        "'Expires on' field",
        "Gift cards do not expire"
      ],
      correct: "Field 'Valid Until'"
    }
  ],
  sales_materi15: [
    {
      question: "Berdasarkan apa paket pelokalan pajak (tax localization package) Odoo?",
      question_en: "What are Odoo's tax localization packages based on?",
      options: [
        "Negara tempat pengguna individu saat ini berada",
        "Negara asal administrator database",
        "Negara yang dipilih sebagai negara perusahaan saat pertama kali membuat database Odoo",
        "Tidak ada yang namanya pelokalan pajak di Odoo"
      ],
      options_en: [
        "The country where the current individual user is located",
        "The country of origin of the database administrator",
        "The country selected as the company's country when first creating the Odoo database",
        "There is no such thing as tax localization in Odoo"
      ],
      correct: "Negara yang dipilih sebagai negara perusahaan saat pertama kali membuat database Odoo"
    },
    {
      question: "Bagaimana pajak 'Percentage of Price' (Persentase Harga) dihitung?",
      question_en: "How is a 'Percentage of Price' tax calculated?",
      options: [
        "Dengan mengalikan jumlah persentase dengan harga jual produk",
        "Dengan mengalikan jumlah persentase dengan total harga produk termasuk pajak",
        "Dengan mengalikan jumlah persentase dengan harga tetap produk rata-rata",
        "Dengan mengalikan biaya produk dari vendor dengan jumlah hari di gudang"
      ],
      options_en: [
        "By multiplying the percentage amount by the product's sales price",
        "By multiplying the percentage amount by the product's total price including tax",
        "By multiplying the percentage amount by the average product fixed price",
        "By multiplying the product cost from the vendor by the number of days in the warehouse"
      ],
      correct: "Dengan mengalikan jumlah persentase dengan harga jual produk"
    },
    {
      question: "Jika opsi perhitungan pajak 'Python Code' tidak tersedia, apa yang harus dilakukan?",
      question_en: "If the 'Python Code' tax computation option is not available, what must be done?",
      options: [
        "Anda harus diberikan 'Hak Developer' oleh administrator database",
        "Modul 'Define Taxes as Python Code' harus diinstal dari aplikasi 'Apps'",
        "Anda harus mengubah kata sandi login Anda menjadi 'Python_Coder'",
        "'Python Code' hanya dapat diakses di sistem operasi LINUX"
      ],
      options_en: [
        "You must be granted 'Developer Rights' by the database administrator",
        "The 'Define Taxes as Python Code' module must be installed from the 'Apps' application",
        "You must change your login password to 'Python_Coder'",
        "'Python Code' is only accessible on LINUX operating systems"
      ],
      correct: "Modul 'Define Taxes as Python Code' harus diinstal dari aplikasi 'Apps'"
    }
  ],
  sales_materi16: [
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan cara untuk menerapkan Posisi Fiskal (Fiscal Position) ke pelanggan?",
      question_en: "Which of the following is NOT a way to apply a Fiscal Position to a customer?",
      options: [
        "Menentukan posisi fiskal pada formulir kontak pelanggan",
        "Menentukan pelanggan pada formulir posisi fiskal",
        "Memilih 'Detect Automatically' pada formulir posisi fiskal",
        "Semua opsi di atas adalah cara yang akurat untuk menerapkan posisi fiskal"
      ],
      options_en: [
        "Defining the fiscal position on the customer contact form",
        "Defining the customer on the fiscal position form",
        "Selecting 'Detect Automatically' on the fiscal position form",
        "All of the above options are accurate ways to apply a fiscal position"
      ],
      correct: "Menentukan pelanggan pada formulir posisi fiskal"
    },
    {
      question: "Apa yang terjadi jika opsi dipilih di kolom 'Tax Scope' pada formulir pajak?",
      question_en: "What happens if an option is selected in the 'Tax Scope' column on the tax form?",
      options: [
        "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan pada 'Goods' (Barang) atau 'Services' (Jasa)",
        "Pelanggan akan diminta membayar pajak ganda atas pesanan mereka",
        "Ini bukan pilihan pada formulir pajak",
        "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan di negara tertentu"
      ],
      options_en: [
        "It will restrict the configured tax to ONLY be used on 'Goods' or 'Services'",
        "Customers will be asked to pay double tax on their orders",
        "This is not an option on the tax form",
        "It will restrict the configured tax to ONLY be used in certain countries"
      ],
      correct: "Itu akan membatasi pajak yang dikonfigurasi agar HANYA digunakan pada 'Goods' (Barang) atau 'Services' (Jasa)"
    },
    {
      question: "Pada formulir pajak, untuk apa kolom 'Tax Grids' biasanya digunakan?",
      question_en: "On the tax form, what is the 'Tax Grids' column typically used for?",
      options: [
        "Untuk membuat laporan pajak secara manual – sesuai dengan peraturan khusus negara tersebut",
        "Untuk mengatur semua pajak perusahaan ke dalam format seperti kisi (grid-like)",
        "Opsi ini tidak ada di Odoo",
        "Untuk membuat laporan pajak secara otomatis – sesuai dengan peraturan khusus negara tersebut"
      ],
      options_en: [
        "To generate tax reports manually – according to that country's specific regulations",
        "To organize all company taxes into a grid-like format",
        "This option does not exist in Odoo",
        "To generate tax reports automatically – according to that country's specific regulations"
      ],
      correct: "Untuk membuat laporan pajak secara otomatis – sesuai dengan peraturan khusus negara tersebut"
    }
  ],
  sales_materi17: [
    {
      question: "Jika tidak ada 'Customer Tax' khusus yang diterapkan pada formulir produk, apa yang muncul di kolom 'Tax' penawaran saat produk ditambahkan?",
      question_en: "If no specific 'Customer Tax' is applied on the product form, what appears in the 'Tax' column of the quotation when the product is added?",
      options: [
        "Standard Tax",
        "Default Tax",
        "Regular Tax",
        "Nothing (Tidak muncul apa-apa/Kosong)"
      ],
      options_en: [
        "Standard Tax",
        "Default Tax",
        "Regular Tax",
        "Nothing"
      ],
      correct: "Default Tax"
    },
    {
      question: "Bagaimana cara menghapus pajak dari penawaran/pesanan penjualan?",
      question_en: "How to remove a tax from a quotation/sales order?",
      options: [
        "Klik ikon 'Sampah' di sebelah pajak yang tercantum",
        "Klik 'Remove' di sebelah pajak yang tercantum",
        "Klik 'New' di sebelah pajak yang tercantum",
        "Klik 'X' di sebelah pajak yang tercantum"
      ],
      options_en: [
        "Click the 'Trash' icon next to the listed tax",
        "Click 'Remove' next to the listed tax",
        "Click 'New' next to the listed tax",
        "Click 'X' next to the listed tax"
      ],
      correct: "Klik 'X' di sebelah pajak yang tercantum"
    },
    {
      question: "Di mana pelanggan dapat melihat pajak yang dikenakan pada penawaran/pesanan penjualan mereka?",
      question_en: "Where can customers see the taxes applied to their quotation/sales order?",
      options: [
        "Di bagian 'Pricing'",
        "Di bagian 'Taxes'",
        "Di bagian 'Overview'",
        "Informasi ini tidak terlihat oleh pelanggan"
      ],
      options_en: [
        "In the 'Pricing' section",
        "In the 'Taxes' section",
        "In the 'Overview' section",
        "This information is not visible to customers"
      ],
      correct: "Di bagian 'Pricing'"
    }
  ],
  sales_materi18: [
    {
      question: "Manakah dari berikut ini yang BUKAN merupakan metode pengiriman yang didukung oleh Odoo?",
      question_en: "Which of the following is NOT a shipping method supported by Odoo?",
      options: [
        "Fixed price",
        "Local postal services",
        "Pickup in store",
        "Pickup at the post office"
      ],
      options_en: [
        "Fixed price",
        "Local postal services",
        "Pickup in store",
        "Pickup at the post office"
      ],
      correct: "Pickup at the post office"
    },
    {
      question: "Di mana Anda mengonfigurasi nama pengiriman yang akan muncul di pesanan penjualan?",
      question_en: "Where do you configure the shipping name that will appear on the sales order?",
      options: [
        "Configuration > Shipping Methods > Provider",
        "Configuration > Shipping Methods > Delivery Product",
        "Configuration > Shipping Methods > Description",
        "Configuration > Quotation Templates > Delivery"
      ],
      options_en: [
        "Configuration > Shipping Methods > Provider",
        "Configuration > Shipping Methods > Delivery Product",
        "Configuration > Shipping Methods > Description",
        "Configuration > Quotation Templates > Delivery"
      ],
      correct: "Configuration > Shipping Methods > Delivery Product"
    },
    {
      question: "Untuk membuat aturan pengiriman berdasarkan berat, manakah dari berikut ini yang juga harus dikonfigurasi?",
      question_en: "To create a shipping rule based on weight, which of the following must also be configured?",
      options: [
        "Berat produk pada formulir produk",
        "Berat produk pada formulir metode pengiriman",
        "Berat *dan* volume produk pada formulir produk",
        "Berat paket pengiriman pada formulir metode pengiriman"
      ],
      options_en: [
        "Product weight on the product form",
        "Product weight on the shipping method form",
        "Product weight *and* volume on the product form",
        "Shipping package weight on the shipping method form"
      ],
      correct: "Berat produk pada formulir produk"
    }
  ],
  sales_materi19: [
    {
      question: "Secara default, berapa 'Customer Lead Time' yang diset pada formulir produk?",
      question_en: "By default, what 'Customer Lead Time' is set on the product form?",
      options: [
        "0",
        "1",
        "2",
        "5"
      ],
      options_en: [
        "0",
        "1",
        "2",
        "5"
      ],
      correct: "0"
    },
    {
      question: "Di mana Anda dapat menemukan field 'Delivery Date' pada Pesanan Penjualan (Sales Order)?",
      question_en: "Where can you find the 'Delivery Date' field on a Sales Order?",
      options: [
        "Di bawah tab 'General Information', di bagian 'Other Info'",
        "Di bawah tab 'Delivery', di bagian 'Other Info'",
        "Di bawah tab 'Other Info', di bagian 'Delivery'",
        "Di bawah tab 'General Information', di bagian 'Date'"
      ],
      options_en: [
        "Under the 'General Information' tab, in the 'Other Info' section",
        "Under the 'Delivery' tab, in the 'Other Info' section",
        "Under the 'Other Info' tab, in the 'Delivery' section",
        "Under the 'General Information' tab, in the 'Date' section"
      ],
      correct: "Di bawah tab 'Other Info', di bagian 'Delivery'"
    },
    {
      question: "Untuk memastikan lapisan keamanan ekstra pada waktu tunggu (lead times), pengaturan apa yang harus diaktifkan di aplikasi Inventory?",
      question_en: "To ensure an extra layer of security on lead times, what setting must be enabled in the Inventory app?",
      options: [
        "Security Lead Time for Products",
        "Security Lead Time for Sales",
        "Security Lead Time for Customers",
        "Security Lead Time for Warehouses"
      ],
      options_en: [
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
      question_en: "How to activate the 'Dropshipping' feature in Odoo?",
      options: [
        "Sales > Configuration > Settings > Aktifkan 'Dropshipping > Simpan",
        "Purchase > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan",
        "Inventory > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan",
        "Manufacturing > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan"
      ],
      options_en: [
        "Sales > Configuration > Settings > Activate 'Dropshipping > Save",
        "Purchase > Configuration > Settings > Activate 'Dropshipping' > Save",
        "Inventory > Configuration > Settings > Activate 'Dropshipping' > Save",
        "Manufacturing > Configuration > Settings > Activate 'Dropshipping' > Save"
      ],
      correct: "Purchase > Configuration > Settings > Aktifkan 'Dropshipping' > Simpan"
    },
    {
      question: "Dua hal apa yang **harus** dikonfigurasi pada formulir produk agar Dropshipping berfungsi?",
      question_en: "What two things **must** be configured on a product form for Dropshipping to work?",
      options: [
        "Aktifkan rute 'Dropship' (di tab Inventory), dan atur setidaknya satu vendor (di tab Purchase).",
        "Aktifkan rute 'Dropship' (di tab Inventory), dan atur harga produk menjadi $0.",
        "Atur setidaknya satu vendor (di tab Purchase), dan aktifkan opsi 'Vendor Responsibility' (di tab Inventory).",
        "Tidak ada yang perlu dilakukan. Dropshipping terjadi secara otomatis."
      ],
      options_en: [
        "Activate 'Dropship' route (in Inventory tab), and set at least one vendor (in Purchase tab).",
        "Activate 'Dropship' route (in Inventory tab), and set product price to $0.",
        "Set at least one vendor (in Purchase tab), and activate 'Vendor Responsibility' option (in Inventory tab).",
        "Nothing needs to be done. Dropshipping happens automatically."
      ],
      correct: "Aktifkan rute 'Dropship' (di tab Inventory), dan atur setidaknya satu vendor (di tab Purchase)."
    },
    {
      question: "Jika sebuah produk memiliki beberapa vendor, bagaimana Odoo beroperasi saat Dropshipping digunakan?",
      question_en: "If a product has multiple vendors, how does Odoo operate when Dropshipping is used?",
      options: [
        "Odoo akan memilih dengan vendor yang menyediakan produk dengan harga termurah.",
        "Odoo akan memilih dengan vendor yang berada di urutan terakhir pada daftar di formulir produk (di tab Purchase).",
        "Odoo akan memilih dengan vendor yang berada di urutan pertama pada daftar di formulir produk (di tab Purchase).",
        "Odoo akan memilih dengan vendor yang menyediakan produk dengan harga termahal."
      ],
      options_en: [
        "Odoo will choose the vendor providing the product at the cheapest price.",
        "Odoo will choose the vendor that is last in the list on the product form (in Purchase tab).",
        "Odoo will choose the vendor that is first in the list on the product form (in Purchase tab).",
        "Odoo will choose the vendor providing the product at the most expensive price."
      ],
      correct: "Odoo akan memilih dengan vendor yang berada di urutan pertama pada daftar di formulir produk (di tab Purchase)."
    }
  ],
  sales_materi21: [
    {
      question: "Di field mana negara pelanggan yang berbeda dapat ditambahkan pada formulir pricelist?",
      question_en: "In which field can different customer countries be added on the pricelist form?",
      options: [
        "Country",
        "Country Groups",
        "Countries",
        "Customer Countries"
      ],
      options_en: [
        "Country",
        "Country Groups",
        "Countries",
        "Customer Countries"
      ],
      correct: "Country Groups"
    },
    {
      question: "Berapa banyak aturan harga (price rules) yang dapat ditambahkan ke satu pricelist?",
      question_en: "How many price rules can be added to a single pricelist?",
      options: [
        "Satu",
        "Dua",
        "Tiga",
        "No limit (Tidak terbatas)"
      ],
      options_en: [
        "One",
        "Two",
        "Three",
        "No limit"
      ],
      correct: "No limit (Tidak terbatas)"
    },
    {
      question: "Jika diaktifkan pada formulir pricelist, apa fungsi opsi 'Selectable'?",
      question_en: "If enabled on the pricelist form, what is the function of the 'Selectable' option?",
      options: [
        "Membuat pricelist dapat dilihat dan dipilih oleh pelanggan online (e-commerce)",
        "Membuat item dapat dipilih pelanggan online untuk masuk keranjang",
        "Mengizinkan pelanggan menambahkan banyak item ke pesanan online mereka",
        "Tidak ada opsi 'Selectable' pada formulir pricelist"
      ],
      options_en: [
        "Makes the pricelist visible and selectable by online customers (e-commerce)",
        "Makes items selectable for online customers to add to cart",
        "Allows customers to add multiple items to their online orders",
        "There is no 'Selectable' option on the pricelist form"
      ],
      correct: "Membuat pricelist dapat dilihat dan dipilih oleh pelanggan online (e-commerce)"
    }
  ],
  sales_materi22: [
    {
      question: "Apa fungsi mengaktifkan pengaturan 'Discounts' dan 'Margins'?",
      question_en: "What is the function of enabling the 'Discounts' and 'Margins' settings?",
      options: [
        "Memungkinkan Anda membelanjakan lebih sedikit untuk produk dari vendor.",
        "Memungkinkan Anda menggunakan diskon dan margin pada Pricelists.",
        "Memungkinkan Anda menampilkan diskon dan margin HANYA pada sales order.",
        "Memungkinkan Anda menampilkan diskon dan margin pada sales order dan quotation."
      ],
      options_en: [
        "Allows you to spend less on products from vendors.",
        "Allows you to use discounts and margins on Pricelists.",
        "Allows you to display discounts and margins ONLY on sales orders.",
        "Allows you to display discounts and margins on sales orders and quotations."
      ],
      correct: "Memungkinkan Anda menampilkan diskon dan margin pada sales order dan quotation."
    },
    {
      question: "Bagaimana cara mengonfigurasi Pricelist Rule agar harga berakhir dengan $0.99 (misal 9.99)?",
      question_en: "How to configure a Pricelist Rule so that prices end in $0.99 (e.g. 9.99)?",
      options: [
        "Computation: Discount > Rounding Method: 0.01 > Extra Fee: $1.",
        "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01.",
        "Computation: Fixed Price > Discount: 1%",
        "Ini tidak mungkin dilakukan di Odoo."
      ],
      options_en: [
        "Computation: Discount > Rounding Method: 0.01 > Extra Fee: $1.",
        "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01.",
        "Computation: Fixed Price > Discount: 1%",
        "This is not possible in Odoo."
      ],
      correct: "Computation: Formula > Rounding Method: 1 > Extra Fee: -$0.01."
    },
    {
      question: "Apa itu profit margin?",
      question_en: "What is profit margin?",
      options: [
        "Selisih antara biaya (cost) dan harga jual produk.",
        "Selisih antara harga jual dan harga diskon produk.",
        "Selisih antara harga satuan dan harga akhir produk.",
        "Selisih antara pendapatan tahunan pelanggan dan anggaran belanja mereka."
      ],
      options_en: [
        "The difference between the cost and the sales price of a product.",
        "The difference between the sales price and the discounted price of a product.",
        "The difference between the unit price and the final price of a product.",
        "The difference between a customer's annual income and their spending budget."
      ],
      correct: "Selisih antara biaya (cost) dan harga jual produk."
    }
  ],
  sales_materi23: [
    {
      question: "Siapa yang menerima rencana komisi yang diberikan kepada 'Sales Team'?",
      question_en: "Who receives the commission plan assigned to a 'Sales Team'?",
      options: [
        "Salesperson individu dalam tim tersebut.",
        "Pelanggan yang terkait dengan tim sales tersebut.",
        "Manajer tim sales tersebut.",
        "Mitra eksternal yang bekerja sama dengan tim tersebut."
      ],
      options_en: [
        "Individual salespersons within that team.",
        "Customers associated with that sales team.",
        "The manager of that sales team.",
        "External partners working with that team."
      ],
      correct: "Manajer tim sales tersebut."
    },
    {
      question: "Apa artinya memilih 'Targets' daripada 'Achievements' untuk rencana komisi?",
      question_en: "What does it mean to choose 'Targets' instead of 'Achievements' for a commission plan?",
      options: [
        "Salesperson mendapatkan komisi berdasarkan persentase tetap dari penjualan.",
        "Salesperson mendapatkan komisi berdasarkan seberapa banyak target mereka tercapai.",
        "Salesperson menerima komisi tetap terlepas dari kinerja penjualan.",
        "Komisi hanya diberikan pada akhir tahun."
      ],
      options_en: [
        "Salespeople earn commission based on a fixed percentage of sales.",
        "Salespeople earn commission based on how much of their target they achieve.",
        "Salespeople receive a fixed commission regardless of sales performance.",
        "Commissions are only awarded at the end of the year."
      ],
      correct: "Salesperson mendapatkan komisi berdasarkan seberapa banyak target mereka tercapai."
    },
    {
      question: "Apa yang terjadi jika seorang salesperson mencapai 150% dari target mereka dalam rencana komisi?",
      question_en: "What happens if a salesperson achieves 150% of their target in a commission plan?",
      options: [
        "Mereka tidak menerima komisi tambahan di atas 100% target.",
        "Komisi mereka dikurangi untuk mendorong persaingan yang adil.",
        "Penjualan mereka dilimpahkan ke kuartal berikutnya.",
        "Mereka mendapatkan tingkat komisi yang lebih tinggi, seperti yang ditentukan dalam rencana."
      ],
      options_en: [
        "They receive no additional commission above 100% of target.",
        "Their commission is reduced to encourage fair competition.",
        "Their sales carry over to the next quarter.",
        "They earn a higher commission rate, as defined in the plan."
      ],
      correct: "Mereka mendapatkan tingkat komisi yang lebih tinggi, seperti yang ditentukan dalam rencana."
    }
  ],
  sales_materi24: [
    {
      question: "Saat menyiapkan webhook di Gelato, konfigurasi apa di field 'Events' yang memastikan Anda menerima pembaruan pesanan otomatis dari Gelato ke database Odoo Anda?",
      question_en: "When setting up webhooks in Gelato, what configuration in the 'Events' field ensures you receive automatic order updates from Gelato to your Odoo database?",
      options: [
        "order_status_updated",
        "order_item_status_updated",
        "_store_product_template_created",
        "catalog_product_stock_availability_updated"
      ],
      options_en: [
        "order_status_updated",
        "order_item_status_updated",
        "_store_product_template_created",
        "catalog_product_stock_availability_updated"
      ],
      correct: "order_status_updated"
    },
    {
      question: "Fitur apa yang memungkinkan Anda menarik dan menyinkronkan templat produk Gelato ke produk Odoo?",
      question_en: "What feature allows you to pull and sync Gelato product templates to Odoo products?",
      options: [
        "Product URL",
        "Product Template ID",
        "API Key",
        "Webhook secret"
      ],
      options_en: [
        "Product URL",
        "Product Template ID",
        "API Key",
        "Webhook secret"
      ],
      correct: "Product Template ID"
    },
    {
      question: "Bagaimana cara menambahkan metode pengiriman Gelato ke pesanan penjualan Odoo pada produk Gelato yang disinkronkan?",
      question_en: "How to add Gelato shipping methods to an Odoo sales order on synchronized Gelato products?",
      options: [
        "Klik tombol 'Add shipping' pada pesanan penjualan Odoo",
        "Klik tombol 'Odoo shipping' pada pesanan penjualan Gelato",
        "Pengiriman Gelato harus dikonfigurasi pada pesanan terpisah dari produk Gelato.",
        "Tidak ada cara untuk menambahkan pengiriman Gelato ke pesanan penjualan Odoo."
      ],
      options_en: [
        "Click the 'Add shipping' button on the Odoo sales order",
        "Click the 'Odoo shipping' button on the Gelato sales order",
        "Gelato shipping must be configured on a separate order from Gelato products.",
        "There is no way to add Gelato shipping to an Odoo sales order."
      ],
      correct: "Klik tombol 'Add shipping' pada pesanan penjualan Odoo"
    }
  ],
  website_materi1: [
    {
      question: "Aspek apa dari situs web Anda yang dapat Anda ubah setelah dibuat menggunakan konfigurator Situs Web Odoo?",
      question_en: "Which aspect of your website can you change after creating it using the Odoo Website configurator?",
      options: [
        "Hanya palet warna",
        "Hanya logo",
        "Semuanya",
        "Tidak ada"
      ],
      options_en: [
        "Only color palette",
        "Only logo",
        "Everything",
        "Nothing"
      ],
      correct: "Semuanya"
    },
    {
      question: "Bagaimana memilih tujuan utama (main objective) memengaruhi situs web yang dibuat dengan Odoo?",
      question_en: "How does selecting the main objective affect the website created with Odoo?",
      options: [
        "Ini menentukan templat spesifik industri yang tersedia",
        "Antara lain, ini memengaruhi tombol utama (Call to Action) di situs web",
        "Ini menetapkan struktur harga untuk produk dan layanan",
        "Ini membatasi jumlah halaman yang dapat ditambahkan ke situs web"
      ],
      options_en: [
        "It determines the industry-specific templates available",
        "Among other things, it affects the main button (Call to Action) on the website",
        "It sets the pricing structure for products and services",
        "It limits the number of pages that can be added to the website"
      ],
      correct: "Antara lain, ini memengaruhi tombol utama (Call to Action) di situs web"
    },
    {
      question: "Apa tujuan memilih jenis industri selama pengaturan situs web menggunakan konfigurator Situs Web Odoo?",
      question_en: "What is the purpose of selecting an industry type during website setup using the Odoo Website configurator?",
      options: [
        "Untuk menentukan skema warna utama",
        "Untuk menyesuaikan tema situs web",
        "Untuk mengonfigurasi tindakan tombol utama",
        "Untuk menyesuaikan konten dan fitur situs web"
      ],
      options_en: [
        "To determine the main color scheme",
        "To customize the website theme",
        "To configure the main button action",
        "To customize the website content and features"
      ],
      correct: "Untuk menyesuaikan konten dan fitur situs web"
    }
  ],
  website_materi2: [
    {
      question: "Mengapa penting untuk menyesuaikan gaya tulisan (font) dan warna di website Anda?",
      question_en: "Why is it important to customize the font style and colors on your website?",
      options: [
        "Untuk membuat website lebih interaktif",
        "Untuk mengurangi waktu loading",
        "Untuk meningkatkan daya tarik visual dan keterbacaan",
        "Untuk meningkatkan performa SEO"
      ],
      options_en: [
        "To make the website more interactive",
        "To reduce loading time",
        "To improve visual appeal and readability",
        "To improve SEO performance"
      ],
      correct: "Untuk meningkatkan daya tarik visual dan keterbacaan"
    },
    {
      question: "Apa tujuan dari Konvensi Webdesign (Webdesign Conventions)?",
      question_en: "What is the purpose of Webdesign Conventions?",
      options: [
        "Untuk membuat tata letak website yang rumit",
        "Untuk mengikuti pedoman yang memastikan website mudah digunakan",
        "Untuk meningkatkan keamanan website",
        "Untuk menyesuaikan animasi website"
      ],
      options_en: [
        "To create complex website layouts",
        "To follow guidelines that ensure the website is easy to use",
        "To improve website security",
        "To customize website animations"
      ],
      correct: "Untuk mengikuti pedoman yang memastikan website mudah digunakan"
    },
    {
      question: "Di menu mana Anda dapat menyesuaikan font dan memilih dari berbagai opsi di Odoo Website?",
      question_en: "In which menu can you customize fonts and select from various options in Odoo Website?",
      options: [
        "Style",
        "Building Blocks",
        "Theme Settings",
        "Widgets"
      ],
      options_en: [
        "Style",
        "Building Blocks",
        "Theme Settings",
        "Widgets"
      ],
      correct: "Theme Settings"
    },
    {
      question: "Bagaimana Anda bisa membedakan tampilan menu navigasi antara Desktop dan Mobile di Odoo?",
      question_en: "How can you differentiate the navigation menu display between Desktop and Mobile in Odoo?",
      options: [
        "Gunakan pengaturan visibilitas kondisional (Conditional Visibility)",
        "Modifikasi CSS secara langsung",
        "Edit kode HTML",
        "Ubah konfigurasi JavaScript"
      ],
      options_en: [
        "Use Conditional Visibility settings",
        "Modify CSS directly",
        "Edit HTML code",
        "Change JavaScript configuration"
      ],
      correct: "Gunakan pengaturan visibilitas kondisional (Conditional Visibility)"
    },
    {
      question: "Apa fungsi utama tombol Call To Action (CTA) di website?",
      question_en: "What is the main function of the Call To Action (CTA) button on a website?",
      options: [
        "Meningkatkan estetika website",
        "Meningkatkan kecepatan loading",
        "Mengarahkan pengunjung untuk melakukan tindakan tertentu",
        "Menyediakan informasi kontak"
      ],
      options_en: [
        "Improve website aesthetics",
        "Increase loading speed",
        "Direct visitors to take a specific action",
        "Provide contact information"
      ],
      correct: "Mengarahkan pengunjung untuk melakukan tindakan tertentu"
    }
  ],
  website_materi3: [
    {
      question: "Apa keuntungan integrasi Odoo dengan Unsplash?",
      question_en: "What is the benefit of Odoo integration with Unsplash?",
      options: [
        "Akses ke berbagai gambar resolusi tinggi gratis",
        "Kemampuan mengunggah gambar tanpa batas penyimpanan",
        "Integrasi alat pengeditan gambar canggih dalam Odoo",
        "Optimasi otomatis dimensi gambar untuk perangkat seluler"
      ],
      options_en: [
        "Access to various free high-resolution images",
        "Ability to upload images without storage limits",
        "Integration of advanced image editing tools within Odoo",
        "Automatic optimization of image dimensions for mobile devices"
      ],
      correct: "Akses ke berbagai gambar resolusi tinggi gratis"
    },
    {
      question: "Bagaimana 'background shapes' dapat meningkatkan tampilan website di Odoo?",
      question_en: "How can 'background shapes' improve the website appearance in Odoo?",
      options: [
        "Menyediakan animasi interaktif untuk keterlibatan pengguna",
        "Menawarkan menu navigasi tambahan untuk akses lebih mudah",
        "Menciptakan latar belakang estetis yang modern dan dinamis yang menyelaraskan halaman",
        "Meningkatkan waktu loading website dengan mengurangi kepadatan konten"
      ],
      options_en: [
        "Provide interactive animations for user engagement",
        "Offer additional navigation menus for easier access",
        "Create a modern and dynamic aesthetic background that harmonizes the page",
        "Increase website loading time by reducing content density"
      ],
      correct: "Menciptakan latar belakang estetis yang modern dan dinamis yang menyelaraskan halaman"
    },
    {
      question: "Bagaimana cara mengintegrasikan video ke dalam website Anda menggunakan Odoo?",
      question_en: "How to integrate a video into your website using Odoo?",
      options: [
        "Dengan menyematkan (embed) tautan YouTube atau Vimeo langsung ke konten halaman",
        "Dengan mengonversi video ke GIF untuk loading lebih cepat",
        "Dengan mengunggah video langsung ke pustaka media Odoo",
        "Dengan menggunakan plugin eksternal untuk menyematkan video Vimeo"
      ],
      options_en: [
        "By embedding a YouTube or Vimeo link directly into the page content",
        "By converting video to GIF for faster loading",
        "By uploading video directly to the Odoo media library",
        "By using external plugins to embed Vimeo videos"
      ],
      correct: "Dengan menyematkan (embed) tautan YouTube atau Vimeo langsung ke konten halaman"
    },
    {
      question: "Mengapa menggunakan gambar format WebP bermanfaat untuk website Odoo Anda?",
      question_en: "Why is using WebP format images beneficial for your Odoo website?",
      options: [
        "Menawarkan resolusi lebih tinggi daripada gambar JPEG",
        "Didukung oleh semua browser web lama",
        "Meningkatkan kecepatan loading website",
        "Membutuhkan lebih sedikit ruang penyimpanan di server database"
      ],
      options_en: [
        "Offers higher resolution than JPEG images",
        "Supported by all old web browsers",
        "Increases website loading speed",
        "Requires less storage space on the database server"
      ],
      correct: "Meningkatkan kecepatan loading website"
    }
  ],
  website_materi4: [
    {
      question: "Apa manfaat utama menggunakan blok Tabs dengan beberapa formulir?",
      question_en: "What is the main benefit of using a Tabs block with multiple forms?",
      options: [
        "Memungkinkan pengorganisasian formulir dengan tindakan berbeda tanpa memenuhi halaman",
        "Secara otomatis mengirim email ke beberapa penerima",
        "Membuat database terpisah untuk setiap formulir",
        "Terintegrasi dengan sistem CRM eksternal"
      ],
      options_en: [
        "Allows organizing forms with different actions without cluttering the page",
        "Automatically sends emails to multiple recipients",
        "Creates separate databases for each form",
        "Integrates with external CRM systems"
      ],
      correct: "Memungkinkan pengorganisasian formulir dengan tindakan berbeda tanpa memenuhi halaman"
    },
    {
      question: "Mengapa penting untuk menentukan 'Action' formulir terlebih dahulu saat mengatur formulir di Odoo?",
      question_en: "Why is it important to define the form 'Action' first when setting up a form in Odoo?",
      options: [
        "Untuk memastikan tata letak formulir terlihat menarik",
        "Untuk menentukan alamat email penerima",
        "Untuk mengaktifkan visibilitas kondisional bidang",
        "Karena sebagian besar pengaturan formulir yang dapat disesuaikan bergantung pada tindakannya"
      ],
      options_en: [
        "To ensure the form layout looks attractive",
        "To determine the recipient's email address",
        "To enable conditional field visibility",
        "Because most customizable form settings depend on its action"
      ],
      correct: "Karena sebagian besar pengaturan formulir yang dapat disesuaikan bergantung pada tindakannya"
    },
    {
      question: "Apa fungsi fitur 'Conditional Visibility' pada formulir Odoo?",
      question_en: "What is the function of the 'Conditional Visibility' feature on Odoo forms?",
      options: [
        "Menyesuaikan label bidang",
        "Menyembunyikan bidang tertentu berdasarkan input pengguna",
        "Mengubah warna latar belakang formulir",
        "Menyesuaikan lebar bidang"
      ],
      options_en: [
        "Adjusts field labels",
        "Hides specific fields based on user input",
        "Changes background color of the form",
        "Adjusts field width"
      ],
      correct: "Menyembunyikan bidang tertentu berdasarkan input pengguna"
    },
    {
      question: "Bagaimana Anda dapat menyesuaikan perilaku tombol 'Submit' pada formulir kontak?",
      question_en: "How can you customize the behavior of the 'Submit' button on a contact form?",
      options: [
        "Dengan menyesuaikan ukuran font",
        "Dengan menentukan halaman pengalihan (redirect page)",
        "Dengan mengubah tata letak formulir",
        "Dengan menambahkan bidang tambahan"
      ],
      options_en: [
        "By adjusting the font size",
        "By specifying a redirect page",
        "By changing the form layout",
        "By adding additional fields"
      ],
      correct: "Dengan menentukan halaman pengalihan (redirect page)"
    }
  ],
  website_materi5: [
    {
      question: "Apa tujuan menggunakan anchor links (tautan jangkar) pada halaman web?",
      question_en: "What is the purpose of using anchor links on a webpage?",
      options: [
        "Untuk mengalihkan pengguna ke situs web eksternal",
        "Untuk menavigasi ke bagian tertentu dalam satu halaman",
        "Untuk membuat menu dropdown",
        "Untuk menyesuaikan tampilan tombol"
      ],
      options_en: [
        "To redirect users to an external website",
        "To navigate to a specific section within a single page",
        "To create a dropdown menu",
        "To customize button appearance"
      ],
      correct: "Untuk menavigasi ke bagian tertentu dalam satu halaman"
    },
    {
      question: "Bagaimana cara mengatur item menu menjadi submenu di Odoo?",
      question_en: "How to set a menu item as a submenu in Odoo?",
      options: [
        "Seret dan lepas item secara vertikal",
        "Gunakan editor Megamenu",
        "Geser item menu ke kanan, di bawah menu induknya",
        "Gunakan fitur tautan jangkar"
      ],
      options_en: [
        "Drag and drop the item vertically",
        "Use the Megamenu editor",
        "Drag the menu item to the right, under its parent menu",
        "Use the anchor link feature"
      ],
      correct: "Geser item menu ke kanan, di bawah menu induknya"
    },
    {
      question: "Jenis menu apa di Odoo yang menawarkan tata letak dropdown yang menarik secara visual (dengan panel)?",
      question_en: "What type of menu in Odoo offers a visually appealing dropdown layout (with panels)?",
      options: [
        "External Menu",
        "Megamenu",
        "Anchor Menu",
        "Shortcut Menu"
      ],
      options_en: [
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
      question_en: "Why should you translate your website into multiple languages?",
      options: [
        "Untuk meningkatkan daya tarik visual website",
        "Untuk mengoptimalkan kinerja SEO",
        "Untuk menjangkau audiens yang lebih besar",
        "Untuk mengurangi waktu loading website"
      ],
      options_en: [
        "To improve website visual appeal",
        "To optimize SEO performance",
        "To reach a larger audience",
        "To reduce website loading time"
      ],
      correct: "Untuk menjangkau audiens yang lebih besar"
    },
    {
      question: "Bagaimana Odoo menyederhanakan proses penerjemahan untuk teks yang sama yang muncul berulang kali?",
      question_en: "How does Odoo simplify the translation process for the same text appearing repeatedly?",
      options: [
        "Odoo menyediakan daftar terjemahan umum untuk setiap bahasa",
        "Odoo secara otomatis menerjemahkan teks identik di seluruh website",
        "Odoo menggunakan AI untuk mendeteksi dan menerjemahkan pola teks berulang",
        "Odoo menawarkan fitur terjemahan massal untuk teks berulang"
      ],
      options_en: [
        "Odoo provides a list of common translations for each language",
        "Odoo automatically translates identical text throughout the website",
        "Odoo uses AI to detect and translate repetitive text patterns",
        "Odoo offers bulk translation features for repeated text"
      ],
      correct: "Odoo secara otomatis menerjemahkan teks identik di seluruh website"
    },
    {
      question: "Apa perbedaan utama antara bahasa utama (main language) dan bahasa lain dalam manajemen terjemahan Odoo?",
      question_en: "What is the main difference between the main language and other languages in Odoo translation management?",
      options: [
        "Bahasa utama digunakan untuk operasi backend, sedangkan bahasa lain untuk tampilan frontend",
        "Bahasa utama memungkinkan kemampuan pengeditan penuh, sedangkan bahasa lain terbatas hanya pada penerjemahan",
        "Bahasa utama diterjemahkan secara otomatis oleh Odoo, sedangkan bahasa lain memerlukan input manual",
        "Tidak ada perbedaan, semua bahasa diperlakukan sama"
      ],
      options_en: [
        "Main language is used for backend operations, while other languages for frontend display",
        "Main language allows full editing capabilities, while other languages are limited to translation only",
        "Main language is translated automatically by Odoo, while other languages require manual input",
        "No difference, all languages are treated equally"
      ],
      correct: "Bahasa utama memungkinkan kemampuan pengeditan penuh, sedangkan bahasa lain terbatas hanya pada penerjemahan"
    }
  ],
  website_materi7: [
    {
      question: "Mengapa optimalisasi untuk perangkat seluler penting bagi situs web?",
      question_en: "Why is optimization for mobile devices important for websites?",
      options: [
        "Untuk menyembunyikan elemen tertentu dari pengguna desktop",
        "Karena perangkat seluler memiliki layar yang lebih kecil",
        "Untuk meningkatkan visibilitas video",
        "Untuk mengubah skema warna situs web"
      ],
      options_en: [
        "To hide certain elements from desktop users",
        "Because mobile devices have smaller screens",
        "To improve video visibility",
        "To change the website color scheme"
      ],
      correct: "Karena perangkat seluler memiliki layar yang lebih kecil"
    },
    {
      question: "Framework apa yang digunakan Odoo untuk memastikan optimalisasi seluler?",
      question_en: "What framework does Odoo use to ensure mobile optimization?",
      options: [
        "Joomla",
        "Bootstrap",
        "WordPress",
        "Drupal"
      ],
      options_en: [
        "Joomla",
        "Bootstrap",
        "WordPress",
        "Drupal"
      ],
      correct: "Bootstrap"
    },
    {
      question: "Fitur apa yang memungkinkan Anda menampilkan atau menyembunyikan elemen tertentu di situs web berdasarkan perangkat yang digunakan?",
      question_en: "What feature allows you to show or hide specific elements on the website based on the device used?",
      options: [
        "Conditional visibility (Visibilitas Kondisional)",
        "Mobile blocker",
        "Device switch",
        "Responsive design"
      ],
      options_en: [
        "Conditional visibility",
        "Mobile blocker",
        "Device switch",
        "Responsive design"
      ],
      correct: "Conditional visibility (Visibilitas Kondisional)"
    },
    {
      question: "Bagaimana Odoo menangani tata letak elemen pada ukuran layar yang berbeda?",
      question_en: "How does Odoo handle element layout on different screen sizes?",
      options: [
        "Dengan menggunakan pemformatan bersyarat",
        "Dengan beralih antara mode seluler dan desktop",
        "Dengan secara otomatis menumpuk elemen menggunakan grid Bootstrap",
        "Dengan mengurangi jumlah kolom pada layar yang lebih kecil"
      ],
      options_en: [
        "By using conditional formatting",
        "By switching between mobile and desktop modes",
        "By automatically stacking elements using the Bootstrap grid",
        "By reducing the number of columns on smaller screens"
      ],
      correct: "Dengan secara otomatis menumpuk elemen menggunakan grid Bootstrap"
    }
  ],
  website_materi8: [
    {
      question: "Subdomain apa yang secara historis paling banyak digunakan?",
      question_en: "Which subdomain has historically been the most widely used?",
      options: [
        "www.",
        "https://",
        ".com",
        "org."
      ],
      options_en: [
        "www.",
        "https://",
        ".com",
        "org."
      ],
      correct: "www."
    },
    {
      question: "Apa nama domain terbaik untuk website 'Good Example'?",
      question_en: "What is the best domain name for the website 'Good Example'?",
      options: [
        "www.good-example.com",
        "website.good-example.com",
        "www.goodexample.com",
        "www.agoodexampleisworthathousandwords.com"
      ],
      options_en: [
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
      question_en: "What are the three main benefits of blogging?",
      options: [
        "Pembuatan video, optimasi seluler, keterlibatan",
        "Membangun kepercayaan, peningkatan SEO, keterlibatan audiens",
        "Integrasi media sosial, penjadwalan konten, branding",
        "Pemasaran email, konfigurasi situs web, pembuatan prospek"
      ],
      options_en: [
        "Video creation, mobile optimization, engagement",
        "Building trust, improved SEO, audience engagement",
        "Social media integration, content scheduling, branding",
        "Email marketing, website configuration, lead generation"
      ],
      correct: "Membangun kepercayaan, peningkatan SEO, keterlibatan audiens"
    },
    {
      question: "Apa yang harus Anda lakukan dengan posting blog Anda untuk meningkatkan SEO, kredibilitas, dan keterlibatan audiens?",
      question_en: "What should you do with your blog posts to improve SEO, credibility, and audience engagement?",
      options: [
        "Posting setidaknya sebulan sekali",
        "Perbarui blog Anda setidaknya seminggu sekali",
        "Bagikan posting blog di media sosial saja",
        "Gunakan konten video secara eksklusif"
      ],
      options_en: [
        "Post at least once a month",
        "Update your blog at least once a week",
        "Share blog posts on social media only",
        "Use video content exclusively"
      ],
      correct: "Perbarui blog Anda setidaknya seminggu sekali"
    },
    {
      question: "Bagaimana cara cepat menambahkan berbagai elemen seperti gambar atau kutipan ke posting blog Anda di Odoo?",
      question_en: "How to quickly add various elements like images or quotes to your blog post in Odoo?",
      options: [
        "Dengan menggunakan tombol 'Insert Media'",
        "Dengan mengetik langsung ke dalam kode HTML",
        "Dengan menekan tombol '/' dan memilih dari menu",
        "Dengan menyalin dan menempel dari dokumen lain"
      ],
      options_en: [
        "By using the 'Insert Media' button",
        "By typing directly into HTML code",
        "By pressing the '/' button and selecting from the menu",
        "By copying and pasting from another document"
      ],
      correct: "Dengan menekan tombol '/' dan memilih dari menu"
    },
    {
      question: "Mengapa penting untuk memperbarui blog Anda secara teratur, menurut video?",
      question_en: "Why is it important to update your blog regularly, according to the video?",
      options: [
        "Untuk membuat konten lebih menarik secara visual",
        "Untuk meningkatkan jumlah komentar pada setiap posting",
        "Untuk tujuan SEO dan meningkatkan peringkat situs web",
        "Untuk menghapus informasi usang dari arsip blog"
      ],
      options_en: [
        "To make content more visually appealing",
        "To increase the number of comments on each post",
        "For SEO purposes and improving website ranking",
        "To remove outdated information from blog archives"
      ],
      correct: "Untuk tujuan SEO dan meningkatkan peringkat situs web"
    }
  ],
  website_materi10: [
    {
      question: "Apa tujuan utama dari meta tags dalam SEO?",
      question_en: "What is the main purpose of meta tags in SEO?",
      options: [
        "Untuk memberikan informasi tentang halaman web ke mesin pencari dan pengunjung",
        "Untuk mengontrol tampilan visual situs web",
        "Untuk mengelola akun pengguna situs web",
        "Untuk meningkatkan kecepatan server"
      ],
      options_en: [
        "To provide information about the web page to search engines and visitors",
        "To control the visual appearance of the website",
        "To manage website user accounts",
        "To improve server speed"
      ],
      correct: "Untuk memberikan informasi tentang halaman web ke mesin pencari dan pengunjung"
    },
    {
      question: "Aspek SEO mana yang memastikan mesin pencari memahami struktur dan hubungan situs Anda?",
      question_en: "Which SEO aspect ensures search engines understand your site's structure and relationships?",
      options: [
        "Robots.txt",
        "Sitemaps",
        "Hreflang tags",
        "Meta description"
      ],
      options_en: [
        "Robots.txt",
        "Sitemaps",
        "Hreflang tags",
        "Meta description"
      ],
      correct: "Sitemaps"
    },
    {
      question: "Mengapa penting untuk menyusun teks Anda dengan judul, subjudul, dan paragraf?",
      question_en: "Why is it important to structure your text with headings, subheadings, and paragraphs?",
      options: [
        "Untuk meningkatkan desain visual halaman",
        "Untuk memberi mesin pencari gambaran tentang struktur konten Anda",
        "Untuk meningkatkan kecepatan memuat halaman",
        "Untuk mengurangi jumlah kata dalam artikel"
      ],
      options_en: [
        "To improve visual page design",
        "To give search engines an idea of your content structure",
        "To improve page loading speed",
        "To reduce word count in articles"
      ],
      correct: "Untuk memberi mesin pencari gambaran tentang struktur konten Anda"
    }
  ],
  website_materi11: [
    {
      question: "Apa tujuan utama analitik situs web di Odoo?",
      question_en: "What is the main purpose of website analytics in Odoo?",
      options: [
        "Untuk meningkatkan desain visual situs web Anda",
        "Untuk mengelola pengaturan backend situs web Anda",
        "Untuk memahami perilaku pengunjung dan meningkatkan kinerja situs web",
        "Untuk memantau penggunaan server database"
      ],
      options_en: [
        "To improve your website visual design",
        "To manage your website backend settings",
        "To understand visitor behavior and improve website performance",
        "To monitor database server usage"
      ],
      correct: "Untuk memahami perilaku pengunjung dan meningkatkan kinerja situs web"
    },
    {
      question: "Apa itu pengunjung unik (unique visitor) dalam analitik situs web?",
      question_en: "What is a unique visitor in website analytics?",
      options: [
        "Seseorang yang mengunjungi beberapa halaman di situs web Anda",
        "Seseorang yang dihitung hanya sekali terlepas dari beberapa kunjungan",
        "Seseorang yang berinteraksi dengan formulir kontak situs web Anda",
        "Seseorang yang melakukan pembelian di situs web"
      ],
      options_en: [
        "Someone who visits multiple pages on your website",
        "A person counted only once regardless of multiple visits",
        "Someone who interacts with your website contact form",
        "Someone who makes a purchase on the website"
      ],
      correct: "Seseorang yang dihitung hanya sekali terlepas dari beberapa kunjungan"
    },
    {
      question: "Metrik mana yang menunjukkan persentase pengunjung yang pergi setelah melihat hanya satu halaman?",
      question_en: "Which metric indicates the percentage of visitors who leave after viewing only one page?",
      options: [
        "Bounce rate (Rasio pentalan)",
        "Session duration (Durasi sesi)",
        "Exit rate (Rasio keluar)",
        "Conversion rate (Tingkat konversi)"
      ],
      options_en: [
        "Bounce rate",
        "Session duration",
        "Exit rate",
        "Conversion rate"
      ],
      correct: "Bounce rate (Rasio pentalan)"
    }
  ],
  website_materi12: [
    {
      question: "Mengapa perusahaan memerlukan beberapa situs web di Odoo?",
      question_en: "Why do companies need multiple websites in Odoo?",
      options: [
        "Untuk menargetkan pasar yang beragam dengan konten yang disesuaikan dan mengelola berbagai merek",
        "Untuk mengurangi beban server",
        "Untuk meningkatkan desain situs web secara otomatis",
        "Untuk memisahkan database akuntansi"
      ],
      options_en: [
        "To target diverse markets with customized content and manage various brands",
        "To reduce server load",
        "To automatically improve website design",
        "To separate accounting databases"
      ],
      correct: "Untuk menargetkan pasar yang beragam dengan konten yang disesuaikan dan mengelola berbagai merek"
    },
    {
      question: "Apa yang tetap konsisten di kedua situs web saat Anda membuat situs baru di Odoo?",
      question_en: "What remains consistent across both websites when you create a new site in Odoo?",
      options: [
        "Tema situs web dan nama domain",
        "Aplikasi Odoo yang diinstal dan database yang digunakan",
        "Alamat email untuk formulir kontak",
        "Navigasi menu utama"
      ],
      options_en: [
        "Website theme and domain name",
        "Installed Odoo apps and the database used",
        "Email address for contact forms",
        "Main navigation menu"
      ],
      correct: "Aplikasi Odoo yang diinstal dan database yang digunakan"
    },
    {
      question: "Apa yang dapat Anda lakukan untuk menampilkan produk hanya di salah satu situs web Anda di Odoo?",
      question_en: "What can you do to display products only on one of your websites in Odoo?",
      options: [
        "Mengunggah ulang produk untuk setiap situs web secara terpisah",
        "Menyesuaikan bidang 'Website' di catatan produk",
        "Membuat akun Odoo terpisah untuk setiap situs web",
        "Menghapus produk dari situs web lain secara manual"
      ],
      options_en: [
        "Re-upload products for each website separately",
        "Adjust the 'Website' field on the product record",
        "Create separate Odoo accounts for each website",
        "Manually remove products from the other website"
      ],
      correct: "Menyesuaikan bidang 'Website' di catatan produk"
    }
  ],
  ecommerce_materi1: [
    {
      question: "Bagaimana cara mudah mengubah atau menambahkan fitur ke halaman produk?",
      question_en: "How to easily change or add features to the product page?",
      options: [
        "Dengan menggunakan alat pembuat situs web di bawah tombol 'Edit'",
        "Dengan membuka template produk dan mengubah pengaturan",
        "Dengan menyematkan kode kustom di HTML atau CSS",
        "Dengan menginstal modul pihak ketiga"
      ],
      options_en: [
        "By using the website builder tool under the 'Edit' button",
        "By opening the product template and changing settings",
        "By embedding custom code in HTML or CSS",
        "By installing third-party modules"
      ],
      correct: "Dengan menggunakan alat pembuat situs web di bawah tombol 'Edit'"
    },
    {
      question: "Jika saya belum ingin produk terlihat oleh pelanggan, apa yang harus saya lakukan?",
      question_en: "If I don't want the product to be visible to customers yet, what should I do?",
      options: [
        "Hapus atau jangan buat produk",
        "Tetapkan produk sebagai 'Unpublished' di halaman produk",
        "Ubah kategori produk menjadi 'Archived'",
        "Biarkan situs web tidak dapat diakses sampai katalog siap"
      ],
      options_en: [
        "Delete or do not create the product",
        "Set the product as 'Unpublished' on the product page",
        "Change product category to 'Archived'",
        "Leave the website inaccessible until the catalog is ready"
      ],
      correct: "Tetapkan produk sebagai 'Unpublished' di halaman produk"
    }
  ],
  ecommerce_materi2: [
    {
      question: "Saat membuat banyak varian, apa yang perlu saya lakukan?",
      question_en: "When creating many variants, what do I need to do?",
      options: [
        "Saya perlu membuat atribut varian utama, Odoo membuat kombinasinya secara otomatis",
        "Saya perlu membuat setiap kombinasi varian sendiri",
        "Saya perlu membuat produk yang berbeda untuk setiap variasi yang saya inginkan",
        "Saya perlu mengimpor file Excel untuk setiap varian"
      ],
      options_en: [
        "I need to create the main variant attributes, Odoo creates the combinations automatically",
        "I need to create every variant combination myself",
        "I need to create different products for each variation I want",
        "I need to import an Excel file for each variant"
      ],
      correct: "Saya perlu membuat atribut varian utama, Odoo membuat kombinasinya secara otomatis"
    },
    {
      question: "Saat mengaktifkan 'tampilkan jumlah yang tersedia' (show available qty), perilaku apa yang diharapkan?",
      question_en: "When enabling 'show available qty', what is the expected behavior?",
      options: [
        "Odoo selalu menampilkan jumlah item yang tersedia",
        "Odoo menampilkan jumlah item yang tersedia hanya jika di bawah jumlah tertentu yang ditetapkan",
        "Odoo menampilkan jumlah item yang tersedia hanya jika di atas jumlah tertentu yang ditetapkan",
        "Odoo menyembunyikan tombol 'Beli' jika stok habis"
      ],
      options_en: [
        "Odoo always displays the available quantity of items",
        "Odoo displays available quantity only if below a certain set amount",
        "Odoo displays available quantity only if above a certain set amount",
        "Odoo hides the 'Buy' button if out of stock"
      ],
      correct: "Odoo menampilkan jumlah item yang tersedia hanya jika di atas jumlah tertentu yang ditetapkan"
    },
    {
      question: "Jenis produk apa yang Anda perlukan untuk mengelola stoknya?",
      question_en: "What type of product do you need to manage its stock?",
      options: [
        "Goods (Barang / Storable Product)",
        "Service (Jasa)",
        "Combo",
        "Consumable"
      ],
      options_en: [
        "Goods (Storable Product)",
        "Service",
        "Combo",
        "Consumable"
      ],
      correct: "Goods (Barang / Storable Product)"
    }
  ],
  ecommerce_materi3: [
    {
      question: "Manakah pernyataan 'Kategori Produk' berikut yang benar?",
      question_en: "Which of the following 'Product Category' statements is true?",
      options: [
        "Dimungkinkan jumlah induk (parent) dan anak (children) yang tidak terbatas",
        "Hanya satu induk dan jumlah anak yang tidak terbatas yang dimungkinkan",
        "Jumlah induk yang tidak terbatas dan jumlah anak yang terbatas dimungkinkan",
        "Tidak ada hirarki dalam kategori produk Odoo"
      ],
      options_en: [
        "Unlimited parent and children count is possible",
        "Only one parent and unlimited children count is possible",
        "Unlimited parent count and limited children count is possible",
        "There is no hierarchy in Odoo product categories"
      ],
      correct: "Hanya satu induk dan jumlah anak yang tidak terbatas yang dimungkinkan"
    },
    {
      question: "Bagaimana cara menetapkan kategori ke produk?",
      question_en: "How to assign a category to a product?",
      options: [
        "Melalui tab 'customize' di pembuat situs web",
        "Dengan menyeret produk ke kategori di halaman toko",
        "Dengan menetapkan kategori pada formulir produk",
        "Dengan membuat kategori baru di menu pengaturan"
      ],
      options_en: [
        "Through the 'customize' tab in website builder",
        "By dragging the product to a category on the shop page",
        "By setting the category on the product form",
        "By creating a new category in the settings menu"
      ],
      correct: "Dengan menetapkan kategori pada formulir produk"
    },
    {
      question: "Bagaimana cara menambahkan spanduk 'Sales' (Promo) pada kartu produk saya?",
      question_en: "How to add a 'Sales' (Promo) banner to my product card?",
      options: [
        "Dengan membuat kartu produk lebih besar (misal 4x4)",
        "Dengan menggunakan 'ribbons' (pita)",
        "Dengan menambahkan 'Sale' pada nama produk",
        "Dengan mengubah warna harga menjadi merah"
      ],
      options_en: [
        "By making the product card larger (e.g. 4x4)",
        "By using 'ribbons'",
        "By adding 'Sale' to the product name",
        "By changing the price color to red"
      ],
      correct: "Dengan menggunakan 'ribbons' (pita)"
    }
  ],
  ecommerce_materi4: [
    {
      question: "Apa tujuan utama dari pricelists di Odoo eCommerce?",
      question_en: "What is the main purpose of pricelists in Odoo eCommerce?",
      options: [
        "Untuk mengatur produk ke dalam kategori",
        "Untuk menawarkan harga yang berbeda berdasarkan kriteria seperti lokasi atau jenis pelanggan",
        "Untuk menetapkan harga tetap untuk semua produk",
        "Untuk menghitung pajak penjualan secara otomatis"
      ],
      options_en: [
        "To organize products into categories",
        "To offer different prices based on criteria like location or customer type",
        "To set fixed prices for all products",
        "To calculate sales tax automatically"
      ],
      correct: "Untuk menawarkan harga yang berbeda berdasarkan kriteria seperti lokasi atau jenis pelanggan"
    },
    {
      question: "Manakah dari berikut ini yang harus diaktifkan di Odoo untuk menggunakan pricelists?",
      question_en: "Which of the following must be enabled in Odoo to use pricelists?",
      options: [
        "Pengaturan multi-perusahaan",
        "Modul inventaris tingkat lanjut",
        "Opsi Pricelists di pengaturan eCommerce",
        "Fitur diskon manual"
      ],
      options_en: [
        "Multi-company settings",
        "Advanced inventory module",
        "Pricelists option in eCommerce settings",
        "Manual discount feature"
      ],
      correct: "Opsi Pricelists di pengaturan eCommerce"
    },
    {
      question: "Bagaimana Anda bisa membatasi daftar harga (pricelist) untuk pelanggan di negara tertentu?",
      question_en: "How can you restrict a pricelist to customers in a specific country?",
      options: [
        "Dengan menetapkan daftar harga ke negara tersebut di tab Konfigurasi",
        "Dengan menetapkan kata sandi untuk daftar harga",
        "Dengan mengirim email secara manual kepada pelanggan dengan harga khusus",
        "Dengan memblokir IP dari negara lain"
      ],
      options_en: [
        "By assigning the pricelist to that country in the Configuration tab",
        "By setting a password for the pricelist",
        "By manually emailing customers with special pricing",
        "By blocking IPs from other countries"
      ],
      correct: "Dengan menetapkan daftar harga ke negara tersebut di tab Konfigurasi"
    },
    {
      question: "Apa yang dapat dilakukan pelanggan jika opsi 'Selectable by customers' diaktifkan untuk daftar harga?",
      question_en: "What can customers do if the 'Selectable by customers' option is enabled for a pricelist?",
      options: [
        "Memilih harga pilihan mereka dari situs web (misal: Mata Uang)",
        "Mengubah harga produk sendiri",
        "Menerapkan diskon ke produk apa pun",
        "Melihat harga modal produk"
      ],
      options_en: [
        "Select their preferred price/currency from the website",
        "Change product price themselves",
        "Apply discount to any product",
        "View product cost price"
      ],
      correct: "Memilih harga pilihan mereka dari situs web (misal: Mata Uang)"
    }
  ],
  ecommerce_materi5: [
    {
      question: "Bagaimana cara membawa pelanggan ke checkout setelah menambahkan ke keranjang?",
      question_en: "How to take customers to checkout after adding to cart?",
      options: [
        "Ini dilakukan secara otomatis",
        "Ini harus dikonfigurasi dalam pengaturan",
        "Pelanggan selalu memiliki pilihan",
        "Dengan mengklik tombol checkout manual"
      ],
      options_en: [
        "It is done automatically",
        "It must be configured in settings",
        "Customers always have the choice",
        "By clicking manual checkout button"
      ],
      correct: "Ini harus dikonfigurasi dalam pengaturan"
    },
    {
      question: "Apa yang dapat saya lakukan untuk mengumpulkan informasi tambahan untuk pesanan?",
      question_en: "What can I do to collect additional information for an order?",
      options: [
        "Aktifkan 'extra step' dari proses checkout",
        "Pesan pelanggan melalui 'chatter' setelah pesanan penjualan dikonfirmasi",
        "Pelanggan memiliki kotak 'Additional comment' di akhir checkout mereka",
        "Wajibkan pelanggan mengirim email terpisah"
      ],
      options_en: [
        "Activate 'extra step' from checkout process",
        "Message customer via 'chatter' after sales order is confirmed",
        "Customer has 'Additional comment' box at the end of their checkout",
        "Require customer to send separate email"
      ],
      correct: "Aktifkan 'extra step' dari proses checkout"
    },
    {
      question: "Apakah mungkin untuk menambahkan gambar dan teks pada langkah-langkah checkout?",
      question_en: "Is it possible to add images and text to checkout steps?",
      options: [
        "Ya, tetapi semuanya akan sama",
        "Tidak, Anda tidak dapat menambahkan teks dan gambar tambahan",
        "Ya, dan mereka berbeda pada setiap langkah",
        "Hanya teks yang diperbolehkan"
      ],
      options_en: [
        "Yes, but they will all be the same",
        "No, you cannot add extra text and images",
        "Yes, and they are different at each step",
        "Only text is allowed"
      ],
      correct: "Ya, dan mereka berbeda pada setiap langkah"
    }
  ],
  ecommerce_materi6: [
    {
      question: "Apa fungsi menetapkan berat atau volume maksimum untuk metode pengiriman?",
      question_en: "What is the function of setting a maximum weight or volume for a shipping method?",
      options: [
        "Ini menonaktifkan metode pengiriman jika total berat atau volume melebihi batas yang ditetapkan",
        "Ini menghitung biaya pengiriman berdasarkan berat dan volume",
        "Ini menerapkan diskon untuk biaya pengiriman paket yang lebih ringan",
        "Ini membatasi jumlah item dalam keranjang"
      ],
      options_en: [
        "It disables the shipping method if total weight or volume exceeds the set limit",
        "It calculates shipping cost based on weight and volume",
        "It applies a discount for lighter package shipping costs",
        "It limits the number of items in the cart"
      ],
      correct: "Ini menonaktifkan metode pengiriman jika total berat atau volume melebihi batas yang ditetapkan"
    },
    {
      question: "Manakah dari opsi berikut yang diaktifkan oleh fitur 'Capture Amount Manually' penyedia pembayaran?",
      question_en: "Which of the following options is enabled by the 'Capture Amount Manually' feature of a payment provider?",
      options: [
        "Pembayaran ditangkap secara otomatis segera setelah pelanggan melakukan pembelian",
        "Pembayaran diotorisasi, tetapi Anda harus menangkap jumlahnya secara manual nanti",
        "Pembayaran tidak diotorisasi, dan tidak ada tindakan lebih lanjut yang diperlukan",
        "Pembayaran ditolak secara otomatis"
      ],
      options_en: [
        "Payment is captured automatically as soon as the customer makes a purchase",
        "Payment is authorized, but you must capture the amount manually later",
        "Payment is not authorized, and no further action is required",
        "Payment is declined automatically"
      ],
      correct: "Pembayaran diotorisasi, tetapi Anda harus menangkap jumlahnya secara manual nanti"
    },
    {
      question: "Apa yang harus Anda lakukan saat menyiapkan penyedia pembayaran baru untuk pertama kalinya di Odoo?",
      question_en: "What should you do when setting up a new payment provider for the first time in Odoo?",
      options: [
        "Aktifkan penyedia segera",
        "Gunakan mode uji (test mode) untuk memproses pembayaran palsu dan memastikan pengaturan yang tepat",
        "Publikasikan penyedia di situs web Anda",
        "Hubungi bank untuk verifikasi manual"
      ],
      options_en: [
        "Activate the provider immediately",
        "Use test mode to process fake payments and ensure proper settings",
        "Publish the provider on your website",
        "Contact the bank for manual verification"
      ],
      correct: "Gunakan mode uji (test mode) untuk memproses pembayaran palsu dan memastikan pengaturan yang tepat"
    },
    {
      question: "Apa yang dapat Anda sesuaikan di tab 'Messages' penyedia pembayaran?",
      question_en: "What can you customize in the 'Messages' tab of a payment provider?",
      options: [
        "Desain antarmuka pembayaran",
        "Pesan yang ditampilkan kepada pelanggan untuk status pembayaran yang berbeda",
        "Mata uang default untuk transaksi",
        "Email notifikasi admin"
      ],
      options_en: [
        "Payment interface design",
        "Messages displayed to customers for different payment statuses",
        "Default currency for transactions",
        "Admin notification email"
      ],
      correct: "Pesan yang ditampilkan kepada pelanggan untuk status pembayaran yang berbeda"
    }
  ],
  ecommerce_materi7: [
    {
      question: "Apa yang terjadi ketika Anda mengatur opsi masuk (sign-in) atau daftar (sign-up) menjadi 'mandatory' (wajib) di pengaturan checkout?",
      question_en: "What happens when you set the sign-in or sign-up option to 'mandatory' in checkout settings?",
      options: [
        "Pelanggan hanya dapat check out sebagai tamu tanpa membuat akun",
        "Pelanggan harus membuat akun atau masuk untuk menyelesaikan checkout mereka",
        "Pelanggan dapat membuat akun hanya setelah pesanan mereka dikonfirmasi",
        "Checkout dibatalkan otomatis"
      ],
      options_en: [
        "Customers can only check out as guests without creating an account",
        "Customers must create an account or sign in to complete their checkout",
        "Customers can create an account only after their order is confirmed",
        "Checkout is cancelled automatically"
      ],
      correct: "Pelanggan harus membuat akun atau masuk untuk menyelesaikan checkout mereka"
    },
    {
      question: "Bagaimana cara memberi pelanggan akses ke portal pelanggan?",
      question_en: "How to give customers access to the customer portal?",
      options: [
        "Buka profil pelanggan dan klik 'Grant access' di menu tindakan",
        "Kirim permintaan ke pelanggan secara manual melalui email",
        "Tambahkan pelanggan ke grup 'Portal Customers' di menu pengaturan",
        "Berikan username dan password admin Anda"
      ],
      options_en: [
        "Open customer profile and click 'Grant access' in action menu",
        "Send request to customer manually via email",
        "Add customer to 'Portal Customers' group in settings menu",
        "Provide your admin username and password"
      ],
      correct: "Buka profil pelanggan dan klik 'Grant access' di menu tindakan"
    },
    {
      question: "Apa yang dapat diakses pelanggan dari portal pelanggan mereka?",
      question_en: "What can customers access from their customer portal?",
      options: [
        "Hanya pesanan penjualan dan faktur mereka",
        "Sales orders, invoices, bills, projects, dan informasi terkait akun lainnya",
        "Hanya profil akun dan detail pribadi mereka",
        "Semua data pelanggan lain"
      ],
      options_en: [
        "Only their sales orders and invoices",
        "Sales orders, invoices, bills, projects, and other account-related information",
        "Only their account profile and personal details",
        "All other customer data"
      ],
      correct: "Sales orders, invoices, bills, projects, dan informasi terkait akun lainnya"
    }
  ],
  ecommerce_materi8: [
    {
      question: "Apa arti status 'Quotation' di Odoo?",
      question_en: "What does 'Quotation' status mean in Odoo?",
      options: [
        "Pelanggan telah menyelesaikan proses checkout tetapi pembayaran belum dikonfirmasi",
        "Produk telah ditambahkan ke keranjang, tetapi pelanggan belum menyelesaikan proses checkout",
        "Pembayaran telah dikonfirmasi, dan pesanan siap dikirim",
        "Pesanan telah dibatalkan"
      ],
      options_en: [
        "Customer has completed checkout process but payment is not confirmed",
        "Products have been added to cart, but customer has not completed checkout process",
        "Payment has been confirmed, and order is ready to ship",
        "Order has been cancelled"
      ],
      correct: "Produk telah ditambahkan ke keranjang, tetapi pelanggan belum menyelesaikan proses checkout"
    },
    {
      question: "Di mana Anda dapat melihat semua pesanan yang dikonfirmasi yang dilakukan melalui situs web?",
      question_en: "Where can you view all confirmed orders made through the website?",
      options: [
        "Di bagian 'Orders' di bawah tab eCommerce (di aplikasi Website)",
        "Di bagian 'Invoices' di bawah tab Akuntansi",
        "Di bagian 'Inventory' di bawah aplikasi Inventaris",
        "Hanya di email notifikasi"
      ],
      options_en: [
        "In 'Orders' section under eCommerce tab (in Website app)",
        "In 'Invoices' section under Accounting tab",
        "In 'Inventory' section under Inventory app",
        "Only in notification emails"
      ],
      correct: "Di bagian 'Orders' di bawah tab eCommerce (di aplikasi Website)"
    },
    {
      question: "Apa yang terjadi ketika Anda mengaktifkan opsi 'automatic invoice' di Odoo?",
      question_en: "What happens when you enable the 'automatic invoice' option in Odoo?",
      options: [
        "Faktur dibuat secara manual oleh staf penjualan",
        "Faktur secara otomatis dibuat dan dikirim ke pelanggan saat pembayaran dikonfirmasi",
        "Sistem mengirimkan email pengingat untuk faktur yang belum dibayar",
        "Pesanan dibatalkan jika tidak dibayar dalam 1 jam"
      ],
      options_en: [
        "Invoices are created manually by sales staff",
        "Invoices are automatically created and sent to customers when payment is confirmed",
        "System sends reminder emails for unpaid invoices",
        "Orders are cancelled if not paid within 1 hour"
      ],
      correct: "Faktur secara otomatis dibuat dan dikirim ke pelanggan saat pembayaran dikonfirmasi"
    }
  ],
  ecommerce_materi9: [
    {
      question: "Apa perbedaan utama antara 'optional products' dan 'accessory products' di Odoo?",
      question_en: "What is the main difference between 'optional products' and 'accessory products' in Odoo?",
      options: [
        "Optional products disarankan selama checkout (Add to Cart step), sedangkan accessory products disarankan sebelum menambahkan item ke keranjang (Review Cart)",
        "Optional products disarankan saat pelanggan mengklik 'add to cart', sedangkan accessory products disarankan saat pelanggan meninjau keranjang mereka sebelum pembayaran",
        "Optional products menggantikan produk awal, sedangkan accessory products tidak",
        "Tidak ada perbedaan, keduanya sama"
      ],
      options_en: [
        "Optional products are suggested during checkout (Add to Cart step), while accessory products are suggested before adding items to cart (Review Cart)",
        "Optional products are suggested when customers click 'add to cart', while accessory products are suggested when customers review their cart before payment",
        "Optional products replace the initial product, while accessory products do not",
        "No difference, both are the same"
      ],
      correct: "Optional products disarankan saat pelanggan mengklik 'add to cart', sedangkan accessory products disarankan saat pelanggan meninjau keranjang mereka sebelum pembayaran"
    },
    {
      question: "Bagaimana cara kerja upselling di Odoo?",
      question_en: "How does upselling work in Odoo?",
      options: [
        "Ini melibatkan menyarankan produk tambahan yang melengkapi pembelian pelanggan",
        "Ini melibatkan penawaran versi upgrade alternatif dari produk (yang lebih mahal)",
        "Ini memungkinkan pelanggan untuk memilih produk aksesori sebelum checkout",
        "Ini memberikan diskon besar untuk produk lama"
      ],
      options_en: [
        "It involves suggesting additional products that complement the customer's purchase",
        "It involves offering an alternative upgraded version of the product (more expensive)",
        "It allows customers to choose accessory products before checkout",
        "It gives a large discount for old products"
      ],
      correct: "Ini melibatkan penawaran versi upgrade alternatif dari produk (yang lebih mahal)"
    },
    {
      question: "Di mana Anda dapat mengonfigurasi opsi cross-selling dan upselling untuk sebuah produk di Odoo?",
      question_en: "Where can you configure cross-selling and upselling options for a product in Odoo?",
      options: [
        "Di tab 'Sales' produk dalam aplikasi eCommerce",
        "Di tab 'Inventory' produk dalam aplikasi Inventaris",
        "Di pengaturan situs web di bawah tab eCommerce",
        "Di pengaturan Akuntansi"
      ],
      options_en: [
        "In the product 'Sales' tab in eCommerce app",
        "In the product 'Inventory' tab in Inventory app",
        "In website settings under eCommerce tab",
        "In Accounting settings"
      ],
      correct: "Di tab 'Sales' produk dalam aplikasi eCommerce"
    },
    {
      question: "Apa yang terjadi ketika pelanggan memilih 'optional product'?",
      question_en: "What happens when a customer selects an 'optional product'?",
      options: [
        "Produk opsional menggantikan produk awal di keranjang",
        "Produk opsional ditambahkan ke keranjang bersama produk awal",
        "Produk opsional muncul hanya setelah pembayaran selesai",
        "Produk awal dihapus otomatis"
      ],
      options_en: [
        "The optional product replaces the initial product in the cart",
        "The optional product is added to the cart along with the initial product",
        "Optional product appears only after payment is complete",
        "Initial product is removed automatically"
      ],
      correct: "Produk opsional ditambahkan ke keranjang bersama produk awal"
    }
  ],
  ecommerce_materi10: [
    {
      question: "Apa tujuan utama program loyalitas di Odoo?",
      question_en: "What is the main purpose of the loyalty program in Odoo?",
      options: [
        "Untuk menawarkan pengiriman gratis pada semua pembelian",
        "Untuk memberi penghargaan kepada pelanggan dengan poin atas pembelian yang nantinya dapat mereka tukarkan dengan hadiah",
        "Untuk secara otomatis menerapkan diskon ke semua produk di toko",
        "Untuk melacak lokasi pelanggan"
      ],
      options_en: [
        "To offer free shipping on all purchases",
        "To reward customers with points on purchases that they can later redeem for rewards",
        "To automatically apply discounts to all products in the store",
        "To track customer locations"
      ],
      correct: "Untuk memberi penghargaan kepada pelanggan dengan poin atas pembelian yang nantinya dapat mereka tukarkan dengan hadiah"
    },
    {
      question: "Bagaimana program kartu hadiah (Gift Card) diatur di Odoo?",
      question_en: "How is the Gift Card program set up in Odoo?",
      options: [
        "Dengan membuat kode unik untuk setiap pelanggan dan menautkannya ke alamat email",
        "Dengan membuat produk bernama 'gift card' dan mempublikasikannya di situs web",
        "Dengan memasukkan sejumlah kode tetap secara manual untuk penggunaan di dalam toko saja",
        "Hanya bisa dibuat oleh developer melalui kode"
      ],
      options_en: [
        "By creating a unique code for each customer and linking it to an email address",
        "By creating a product named 'gift card' and publishing it on the website",
        "By manually entering a fixed number of codes for in-store use only",
        "Can only be created by developers via code"
      ],
      correct: "Dengan membuat produk bernama 'gift card' dan mempublikasikannya di situs web"
    }
  ],
  surveys_materi1: [
    {
      question: "Apa manfaat menggunakan fungsi 'Test' sebelum mempublikasikan survei?",
      question_en: "What is the benefit of using the 'Test' function before publishing a survey?",
      options: [
        "Ini membersihkan respons sebelumnya",
        "Ini mengirimkan hasil tes ke semua pengguna",
        "Ini mengubah survei menjadi laporan",
        "Ini mencatat entri sebagai 'Test Entries' dan membantu memeriksa fungsionalitas"
      ],
      options_en: [
        "It clears previous responses",
        "It sends test results to all users",
        "It turns the survey into a report",
        "It records entries as 'Test Entries' and helps check functionality"
      ],
      correct: "Ini mencatat entri sebagai 'Test Entries' dan membantu memeriksa fungsionalitas"
    },
    {
      question: "Apa yang diaktifkan oleh opsi 'Allow Roaming' dalam survei?",
      question_en: "What does the 'Allow Roaming' option enable in a survey?",
      options: [
        "Mengubah bahasa survei di tengah sesi",
        "Menyimpan jawaban secara otomatis",
        "Membiarkan peserta kembali ke halaman sebelumnya (previous pages)",
        "Mengirim pengingat kepada peserta"
      ],
      options_en: [
        "Changing survey language mid-session",
        "Saving answers automatically",
        "Letting participants go back to previous pages",
        "Sending reminders to participants"
      ],
      correct: "Membiarkan peserta kembali ke halaman sebelumnya (previous pages)"
    },
    {
      question: "Apa yang dikontrol oleh tab 'End Message' dalam survei?",
      question_en: "What is controlled by the 'End Message' tab in a survey?",
      options: [
        "Konten email tindak lanjut",
        "Pesan terima kasih yang ditampilkan setelah pengiriman",
        "Ringkasan penilaian survei",
        "Gambar latar belakang untuk survei"
      ],
      options_en: [
        "Follow-up email content",
        "Thank you message displayed after submission",
        "Survey scoring summary",
        "Background image for the survey"
      ],
      correct: "Pesan terima kasih yang ditampilkan setelah pengiriman"
    }
  ],
  surveys_materi2: [
    {
      question: "Manakah dari Tipe Pertanyaan berikut yang menghapus tab 'Answers' karena respons kustom diperlukan?",
      question_en: "Which of the following Question Types removes the 'Answers' tab because a custom response is required?",
      options: [
        "Multiple Choice: only one answer",
        "Matrix",
        "Single Line Text Box",
        "Numerical Value"
      ],
      options_en: [
        "Multiple Choice: only one answer",
        "Matrix",
        "Single Line Text Box",
        "Numerical Value"
      ],
      correct: "Numerical Value"
    },
    {
      question: "Apa fungsi mengaktifkan opsi 'Mandatory Answer'?",
      question_en: "What is the function of enabling the 'Mandatory Answer' option?",
      options: [
        "Menetapkan batas waktu untuk survei",
        "Mengacak urutan pertanyaan",
        "Mencegah pengguna mengirimkan survei tanpa menjawab",
        "Melampirkan gambar ke pertanyaan"
      ],
      options_en: [
        "Sets a time limit for the survey",
        "Randomizes question order",
        "Prevents users from submitting the survey without answering",
        "Attaches an image to the question"
      ],
      correct: "Mencegah pengguna mengirimkan survei tanpa menjawab"
    },
    {
      question: "Apa tujuan opsi 'Show Comments Field' dalam pertanyaan pilihan ganda?",
      question_en: "What is the purpose of the 'Show Comments Field' option in multiple choice questions?",
      options: [
        "Memungkinkan peserta menjelaskan jawaban mereka",
        "Mengacak urutan jawaban",
        "Memvalidasi email peserta",
        "Mengubah pertanyaan menjadi tipe Matrix"
      ],
      options_en: [
        "Allows participants to explain their answers",
        "Randomizes answer order",
        "Validates participant email",
        "Changes question to Matrix type"
      ],
      correct: "Memungkinkan peserta menjelaskan jawaban mereka"
    }
  ],
  surveys_materi3: [
    {
      question: "Apa yang muncul di halaman formulir peserta jika mereka gagal dalam survei (Scoring enabled)?",
      question_en: "What appears on the participant's form page if they fail the survey (Scoring enabled)?",
      options: [
        "Spanduk hijau bertuliskan: 'Failed'",
        "Spanduk merah bertuliskan: 'Failed'",
        "Spanduk hijau bertuliskan: 'Did Not Pass'",
        "Spanduk merah bertuliskan: 'Did Not Pass'"
      ],
      options_en: [
        "Green banner saying: 'Failed'",
        "Red banner saying: 'Failed'",
        "Green banner saying: 'Did Not Pass'",
        "Red banner saying: 'Did Not Pass'"
      ],
      correct: "Spanduk merah bertuliskan: 'Failed'"
    },
    {
      question: "Pada halaman 'See results' untuk tipe pertanyaan 'Numerical Value', apa yang terlihat di kanan atas respons yang dikirim?",
      question_en: "On the 'See results' page for 'Numerical Value' question type, what is visible at the top right of submitted responses?",
      options: [
        "Angka yang paling umum dikirim",
        "Angka yang paling jarang dikirim",
        "Maksimum, Minimum, dan Rata-rata respons",
        "Populer, Paling Tidak Populer, dan Respons Benar"
      ],
      options_en: [
        "Most commonly submitted number",
        "Least commonly submitted number",
        "Maximum, Minimum, and Average responses",
        "Popular, Least Popular, and Correct Responses"
      ],
      correct: "Maksimum, Minimum, dan Rata-rata respons"
    },
    {
      question: "Pada halaman 'See results', kapan Anda melihat representasi Grafik pai (Pie Graph) dari jawaban survei?",
      question_en: "On the 'See results' page, when do you see a Pie Graph representation of survey answers?",
      options: [
        "Ketika ada lebih banyak respons salah daripada jawaban benar",
        "Ketika jawaban yang benar adalah 'Date'",
        "Ketika ada banyak jawaban benar untuk pertanyaan tersebut",
        "Ketika hanya ada satu jawaban benar untuk pertanyaan tersebut"
      ],
      options_en: [
        "When there are more incorrect responses than correct answers",
        "When the correct answer is 'Date'",
        "When there are multiple correct answers for the question",
        "When there is only one correct answer for the question"
      ],
      correct: "Ketika hanya ada satu jawaban benar untuk pertanyaan tersebut"
    }
  ],
  surveys_materi4: [
    {
      question: "Apa manfaat utama menggunakan Conditional Display di Odoo Surveys?",
      question_en: "What is the main benefit of using Conditional Display in Odoo Surveys?",
      options: [
        "Ini membuat survei lebih panjang dan komprehensif",
        "Ini memastikan setiap peserta menjawab setiap pertanyaan",
        "Ini menampilkan pertanyaan relevan berdasarkan respons peserta",
        "Ini menonaktifkan pertanyaan berdasarkan waktu survei"
      ],
      options_en: [
        "It makes the survey longer and comprehensive",
        "It ensures every participant answers every question",
        "It displays relevant questions based on participant responses",
        "It disables questions based on survey time"
      ],
      correct: "Ini menampilkan pertanyaan relevan berdasarkan respons peserta"
    },
    {
      question: "Di mana saya mengonfigurasi pengaturan Conditional Display dalam pertanyaan survei?",
      question_en: "Where do I configure Conditional Display settings in a survey question?",
      options: [
        "Di tab Survey",
        "Di tab Options",
        "Di tab Design",
        "Di Pratinjau Pertanyaan (Question Preview)"
      ],
      options_en: [
        "In Survey tab",
        "In Options tab",
        "In Design tab",
        "In Question Preview"
      ],
      correct: "Di tab Options"
    },
    {
      question: "Indikator visual apa yang menunjukkan bahwa pertanyaan survei memiliki logika Conditional Display?",
      question_en: "What visual indicator shows that a survey question has Conditional Display logic?",
      options: [
        "Simbol garpu dengan tooltip",
        "Tanda seru merah",
        "Tanda centang di sebelah pertanyaan",
        "Ikon kunci di sebelah pilihan jawaban"
      ],
      options_en: [
        "Fork symbol with tooltip",
        "Red exclamation mark",
        "Checkmark next to the question",
        "Lock icon next to answer choices"
      ],
      correct: "Simbol garpu dengan tooltip"
    }
  ],
  surveys_materi5: [
    {
      question: "Dalam session manager, fitur mana yang membantu peserta bergabung dengan sesi dengan mudah dari perangkat seluler mereka?",
      question_en: "In session manager, which feature helps participants join the session easily from their mobile devices?",
      options: [
        "Aplikasi seluler yang dapat diunduh",
        "Kode survei pendek",
        "Kode QR",
        "Undangan pesan teks"
      ],
      options_en: [
        "Downloadable mobile app",
        "Short survey code",
        "QR Code",
        "Text message invitation"
      ],
      correct: "Kode QR"
    },
    {
      question: "Manakah dari opsi berikut yang TIDAK tersedia saat survei diatur ke mode 'Live Session'?",
      question_en: "Which of the following options is NOT available when the survey is set to 'Live Session' mode?",
      options: [
        "Scoring",
        "Pengaturan pagination",
        "Grafik respons real-time",
        "Pertanyaan kondisional"
      ],
      options_en: [
        "Scoring",
        "Pagination settings",
        "Real-time response charts",
        "Conditional questions"
      ],
      correct: "Pengaturan pagination"
    },
    {
      question: "Apa yang terjadi ketika seseorang bergabung dengan Sesi Langsung (Live Session) setelah sesi dimulai?",
      question_en: "What happens when someone joins a Live Session after the session has started?",
      options: [
        "Mereka mendarat di langkah sesi saat ini",
        "Mereka mulai dari pertanyaan pertama",
        "Mereka diminta untuk mendaftar sebelum bergabung",
        "Mereka harus menunggu sampai tuan rumah memulai ulang"
      ],
      options_en: [
        "They land on the current session step",
        "They start from the first question",
        "They are asked to register before joining",
        "They have to wait until the host restarts"
      ],
      correct: "Mereka mendarat di langkah sesi saat ini"
    }
  ],
  marketing_materi1: [
    {
      question: "Aplikasi Odoo apa yang bisa saya gunakan untuk pemasaran?",
      question_en: "Which Odoo application can I use for marketing?",
      options: [
        "Email Marketing",
        "SMS Marketing",
        "Events",
        "Semua yang di atas"
      ],
      options_en: [
        "Email Marketing",
        "SMS Marketing",
        "Events",
        "All of the above"
      ],
      correct: "Semua yang di atas"
    },
    {
      question: "Bisakah saya mengirim email sebagai bagian dari kampanye pemasaran?",
      question_en: "Can I send emails as part of a marketing campaign?",
      options: [
        "Ya, jika opsi 'Mailing Campaigns' diaktifkan di pengaturan aplikasi Email Marketing.",
        "Tidak, email pemasaran tidak dapat ditautkan ke kampanye.",
        "Ya, tapi hanya jika email tersebut menjual produk.",
        "Ya, tapi hanya jika ada tagar di email."
      ],
      options_en: [
        "Yes, if the 'Mailing Campaigns' option is enabled in Email Marketing app settings.",
        "No, marketing emails cannot be linked to campaigns.",
        "Yes, but only if the email sells a product.",
        "Yes, but only if there is a hashtag in the email."
      ],
      correct: "Ya, jika opsi 'Mailing Campaigns' diaktifkan di pengaturan aplikasi Email Marketing."
    },
    {
      question: "Aplikasi apa yang bisa saya gunakan untuk membuat kampanye pemasaran?",
      question_en: "What application can I use to create marketing campaigns?",
      options: [
        "Email Marketing",
        "SMS Marketing",
        "Social Marketing",
        "Semua yang di atas"
      ],
      options_en: [
        "Email Marketing",
        "SMS Marketing",
        "Social Marketing",
        "All of the above"
      ],
      correct: "Semua yang di atas"
    }
  ],
  marketing_materi2: [
    {
      question: "Di mana Anda dapat mengaktifkan fitur 'Dedicated Server' di aplikasi Email Marketing?",
      question_en: "Where can you activate the 'Dedicated Server' feature in the Email Marketing app?",
      options: [
        "Halaman Settings (Configuration > Settings)",
        "Halaman Servers (Configuration > Servers)",
        "Portal Email (Configuration > Email Portal)",
        "Halaman Dedicated Servers (Configuration > Dedications > Email > Servers)"
      ],
      options_en: [
        "Settings page (Configuration > Settings)",
        "Servers page (Configuration > Servers)",
        "Email Portal (Configuration > Email Portal)",
        "Dedicated Servers page (Configuration > Dedications > Email > Servers)"
      ],
      correct: "Halaman Settings (Configuration > Settings)"
    },
    {
      question: "Setelah Anda klik 'Send', dan mailing dijadwalkan untuk dikirim, status berubah dari 'Draft' menjadi...",
      question_en: "After you click 'Send', and the mailing is scheduled to be sent, the status changes from 'Draft' to...",
      options: [
        "'Sent.'",
        "'In Queue.'",
        "'In Progress.'",
        "'Waiting.'"
      ],
      options_en: [
        "'Sent.'",
        "'In Queue.'",
        "'In Progress.'",
        "'Waiting.'"
      ],
      correct: "'In Queue.'"
    },
    {
      question: "Bagaimana cara mengirim mailing ke beberapa mailing list?",
      question_en: "How to send a mailing to multiple mailing lists?",
      options: [
        "Di halaman 'Mailing' baru, pilih 'Mailing List' di kolom 'Recipient', dan tambahkan daftar mailing target.",
        "Di halaman 'Mailing' baru, buka tab 'Settings', dan tambahkan daftar mailing target di kolom 'Recipients'.",
        "Keduanya a dan b benar.",
        "Tidak ada cara untuk mengirim mailing ke beberapa mailing list."
      ],
      options_en: [
        "On the new 'Mailing' page, select 'Mailing List' in the 'Recipient' field, and add the target mailing lists.",
        "On the new 'Mailing' page, go to the 'Settings' tab, and add the target mailing lists in the 'Recipients' field.",
        "Both a and b are correct.",
        "There is no way to send a mailing to multiple mailing lists."
      ],
      correct: "Keduanya a dan b benar."
    }
  ],
  marketing_materi3: [
    {
      question: "Jika opsi menu header 'Campaigns' tidak tersedia, apa yang harus dilakukan?",
      question_en: "If the 'Campaigns' header menu option is not available, what should be done?",
      options: [
        "Hubungi Dukungan Odoo",
        "Aktifkan fitur 'Mailing Campaigns'",
        "Aktifkan fitur 'Marketing'",
        "Opsi menu header 'Campaigns' *selalu* tersedia - tidak peduli apa pun"
      ],
      options_en: [
        "Contact Odoo Support",
        "Enable 'Mailing Campaigns' feature",
        "Enable 'Marketing' feature",
        "The 'Campaigns' header menu option is *always* available - no matter what"
      ],
      correct: "Aktifkan fitur 'Mailing Campaigns'"
    },
    {
      question: "Tombol 'Send Push' pada formulir kampanye terkait dengan aplikasi Odoo apa?",
      question_en: "The 'Send Push' button on the campaign form is related to which Odoo application?",
      options: [
        "Website",
        "SMS Marketing",
        "Social Marketing",
        "Surveys"
      ],
      options_en: [
        "Website",
        "SMS Marketing",
        "Social Marketing",
        "Surveys"
      ],
      correct: "Website"
    },
    {
      question: "Jika 'Mailing List' dipilih di kolom 'Recipients', berapa banyak mailing list yang dapat ditambahkan?",
      question_en: "If 'Mailing List' is selected in the 'Recipients' field, how many mailing lists can be added?",
      options: [
        "Tergantung pada jumlah pesan",
        "Tidak ada batas",
        "Tergantung pada jumlah pengguna dalam database",
        "Tergantung pada jumlah kampanye yang ada"
      ],
      options_en: [
        "Depends on the number of messages",
        "No limit",
        "Depends on the number of users in the database",
        "Depends on the number of existing campaigns"
      ],
      correct: "Tidak ada batas"
    }
  ],
  marketing_materi4: [
    {
      question: "Kapan tombol 'Send SMS' muncul pada formulir mailing list?",
      question_en: "When does the 'Send SMS' button appear on the mailing list form?",
      options: [
        "Tombol ini muncul secara default - apa pun yang terjadi",
        "Hanya ketika aplikasi Social Marketing diinstal pada database",
        "Hanya ketika aplikasi SMS Marketing diinstal pada database",
        "Tombol ini tidak ada"
      ],
      options_en: [
        "This button appears by default - no matter what",
        "Only when the Social Marketing app is installed on the database",
        "Only when the SMS Marketing app is installed on the database",
        "This button does not exist"
      ],
      correct: "Hanya ketika aplikasi SMS Marketing diinstal pada database"
    },
    {
      question: "Jika kontak dibuat untuk mailing list tertentu, apakah mereka *juga* dibuat sebagai kontak di seluruh database (aplikasi Contacts)?",
      question_en: "If a contact is created for a specific mailing list, are they *also* created as a contact in the entire database (Contacts app)?",
      options: [
        "Ya",
        "Ya, tapi *HANYA* jika kotak centang 'Entire Database' dicentang pada formulir kontak",
        "Ya, tapi *HANYA* jika mereka memiliki nomor ponsel yang valid",
        "Tidak"
      ],
      options_en: [
        "Yes",
        "Yes, but *ONLY* if the 'Entire Database' checkbox is checked on the contact form",
        "Yes, but *ONLY* if they have a valid mobile number",
        "No"
      ],
      correct: "Tidak"
    },
    {
      question: "Pilihan blok bangunan (building blocks) situs web apa yang digunakan untuk menambahkan kolom berlangganan (subscription) mailing list ke situs web yang dibuat Odoo?",
      question_en: "Which website building block option is used to add a mailing list subscription field to an Odoo-created website?",
      options: [
        "Mailing List",
        "Newsletter",
        "Mailing",
        "Subscribe"
      ],
      options_en: [
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
      question_en: "Which button should I press to save a mailing as a template?",
      options: [
        "Save Template",
        "Add to Templates",
        "Save",
        "Add Mailing to Template"
      ],
      options_en: [
        "Save Template",
        "Add to Templates",
        "Save",
        "Add Mailing to Template"
      ],
      correct: "Add to Templates"
    },
    {
      question: "Di mana saya dapat menemukan daftar template email yang sudah dibuat sebelumnya (pre-made)?",
      question_en: "Where can I find a list of pre-made email templates?",
      options: [
        "Dengan membuat mailing baru (By creating a new mailing)",
        "Di halaman 'Email Marketing Templates'",
        "Di tab 'Templates' dalam daftar Mailings",
        "Di menu 'Configuration' Aplikasi Email Marketing"
      ],
      options_en: [
        "By creating a new mailing",
        "On the 'Email Marketing Templates' page",
        "In the 'Templates' tab in Mailings list",
        "In the 'Configuration' menu of Email Marketing App"
      ],
      correct: "Dengan membuat mailing baru (By creating a new mailing)"
    },
    {
      question: "Bagaimana cara mengganti gambar, seperti logo, dalam template?",
      question_en: "How to replace an image, such as a logo, in a template?",
      options: [
        "Klik dua kali gambar untuk memunculkan kotak dialog",
        "Seret dan lepas gambar baru di atas yang lama",
        "Klik tombol 'Replace' di bidang 'Media' di sidebar",
        "Klik ikon tautan pop-up saat mengarahkan kursor ke atas gambar"
      ],
      options_en: [
        "Double click the image to bring up a dialog box",
        "Drag and drop the new image over the old one",
        "Click the 'Replace' button in the 'Media' field in sidebar",
        "Click the pop-up link icon when hovering over the image"
      ],
      correct: "Klik tombol 'Replace' di bidang 'Media' di sidebar"
    }
  ],
  marketing_materi6: [
    {
      question: "Di mana saya dapat menyesuaikan jenis font secara keseluruhan pada template email saya?",
      question_en: "Where can I customize the overall font type on my email template?",
      options: [
        "Bagian 'Font' di tab 'Customize'",
        "Bagian 'Layout' di tab 'Blocks'",
        "Bagian 'Font' di tab 'Design'",
        "Bagian 'Design Options' di tab 'Design'"
      ],
      options_en: [
        "'Font' section in 'Customize' tab",
        "'Layout' section in 'Blocks' tab",
        "'Font' section in 'Design' tab",
        "'Design Options' section in 'Design' tab"
      ],
      correct: "Bagian 'Design Options' di tab 'Design'"
    },
    {
      question: "Di mana saya dapat menemukan filter gambar?",
      question_en: "Where can I find image filters?",
      options: [
        "Di tab 'Design'",
        "Bidang 'Filter' saat gambar dipilih",
        "Bidang 'Image' saat gambar dipilih",
        "Tidak ada filter gambar"
      ],
      options_en: [
        "In 'Design' tab",
        "'Filter' field when image is selected",
        "'Image' field when image is selected",
        "There are no image filters"
      ],
      correct: "Bidang 'Filter' saat gambar dipilih"
    },
    {
      question: "Di mana saya dapat mengakses alat pembuat teks AI Odoo?",
      question_en: "Where can I access Odoo's AI text generator tool?",
      options: [
        "Di bagian 'Title' di tab 'Customize'",
        "Dengan menyorot teks dan mengklik tombol 'AI' (atau menekan spasi/slash powerbox)",
        "Di bagian 'Inline Text' di tab 'Customize'",
        "Alat pembuat teks AI tidak dapat diakses di Email Marketing"
      ],
      options_en: [
        "In 'Title' section in 'Customize' tab",
        "By highlighting text and clicking the 'AI' button (or pressing space/slash powerbox)",
        "In 'Inline Text' section in 'Customize' tab",
        "AI text generator tool cannot be accessed in Email Marketing"
      ],
      correct: "Di bagian 'Inline Text' di tab 'Customize'"
    }
  ],
  marketing_materi7: [
    {
      question: "Pengaturan apa yang harus diaktifkan agar penerima dapat mem-blacklist diri mereka sendiri?",
      question_en: "What setting must be enabled to allow recipients to blacklist themselves?",
      options: [
        "Unsubscribing Option when Blacklisting",
        "Blacklisting",
        "Blacklist Option when Unsubscribing",
        "Self Blacklist"
      ],
      options_en: [
        "Unsubscribing Option when Blacklisting",
        "Blacklisting",
        "Blacklist Option when Unsubscribing",
        "Self Blacklist"
      ],
      correct: "Blacklist Option when Unsubscribing"
    },
    {
      question: "Pada halaman 'Mailing Subscriptions', apa yang harus diklik penerima agar alamat email mereka ditambahkan ke blacklist?",
      question_en: "On the 'Mailing Subscriptions' page, what must the recipient click to have their email address added to the blacklist?",
      options: [
        "Exclude Me",
        "Remove Me",
        "Blacklist Me",
        "Avoid Me"
      ],
      options_en: [
        "Exclude Me",
        "Remove Me",
        "Blacklist Me",
        "Avoid Me"
      ],
      correct: "Exclude Me"
    },
    {
      question: "Ke mana saya harus pergi untuk membuat atau memodifikasi alasan opt-out (opt-out reasons)?",
      question_en: "Where should I go to create or modify opt-out reasons?",
      options: [
        "Blacklist Addresses > Optout Reasons",
        "Configuration > Optout Reasons",
        "Configuration > Settings > Optout Modification",
        "Mailing Lists > Optout Reasons"
      ],
      options_en: [
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
      question_en: "Which of the following is NOT a 'Winner Selection' option in A/B Testing?",
      options: [
        "Highest Click Rate",
        "Leads",
        "Quotations",
        "Purchases"
      ],
      options_en: [
        "Highest Click Rate",
        "Leads",
        "Quotations",
        "Purchases"
      ],
      correct: "Purchases"
    },
    {
      question: "Di mana saya dapat membuat versi alternatif email untuk pengujian A/B?",
      question_en: "Where can I create alternative versions of an email for A/B testing?",
      options: [
        "Tab 'A/B Testing' pada email asli",
        "Bagian 'A/B Testing' di header 'Mailings'",
        "Dengan mengklik smart button 'A/B Test' pada mailing",
        "Tidak ada yang benar"
      ],
      options_en: [
        "'A/B Testing' tab on the original email",
        "'A/B Testing' section in 'Mailings' header",
        "By clicking the 'A/B Test' smart button on the mailing",
        "None of the above"
      ],
      correct: "Tab 'A/B Testing' pada email asli"
    },
    {
      question: "Manakah dari berikut ini yang dapat diubah antara versi alternatif dalam pengujian A/B?",
      question_en: "Which of the following can be changed between alternative versions in A/B testing?",
      options: [
        "Baris subjek (Subject line)",
        "Desain",
        "Blok konten",
        "Semua yang di atas"
      ],
      options_en: [
        "Subject line",
        "Design",
        "Content blocks",
        "All of the above"
      ],
      correct: "Semua yang di atas"
    }
  ],
  marketing_materi9: [
    {
      question: "Saat membuat Lost Leads Reactivation Email, opsi apa yang harus dipilih di kolom 'Recipients' formulir email?",
      question_en: "When creating a Lost Leads Reactivation Email, what option should be selected in the 'Recipients' field of the email form?",
      options: [
        "Lost Lead",
        "Archived Leads/Customers",
        "Lead/Opportunity",
        "Customers/Opportunities"
      ],
      options_en: [
        "Lost Lead",
        "Archived Leads/Customers",
        "Lead/Opportunity",
        "Customers/Opportunities"
      ],
      correct: "Lead/Opportunity"
    },
    {
      question: "Sakelar (toggle) apa yang *harus* diklik untuk menargetkan lost leads di kolom 'Recipients'?",
      question_en: "Which toggle *must* be clicked to target lost leads in the 'Recipients' field?",
      options: [
        "Include Archived",
        "Include Lost Records",
        "Include Past Customers",
        "Tidak ada sakelar yang perlu diklik"
      ],
      options_en: [
        "Include Archived",
        "Include Lost Records",
        "Include Past Customers",
        "No toggle needs to be clicked"
      ],
      correct: "Include Archived"
    },
    {
      question: "Bagaimana cara menyimpan filter penerima untuk penggunaan di masa mendatang?",
      question_en: "How to save recipient filters for future use?",
      options: [
        "Klik ikon 'Bintang' > Masukkan judul filter > Klik 'Save'",
        "Klik ikon 'Disket' > Masukkan judul filter > Klik 'Add'",
        "Klik ikon 'Jempol' > Masukkan judul filter > Klik 'Add'",
        "Klik ikon 'Wajah Tersenyum' > Masukkan judul filter > Klik 'Favorite'"
      ],
      options_en: [
        "Click 'Star' icon > Enter filter title > Click 'Save'",
        "Click 'Floppy Disk' icon > Enter filter title > Click 'Add'",
        "Click 'Thumb' icon > Enter filter title > Click 'Add'",
        "Click 'Smiley Face' icon > Enter filter title > Click 'Favorite'"
      ],
      correct: "Klik ikon 'Disket' > Masukkan judul filter > Klik 'Save' (Catatan: Sebenarnya Save, tapi di quiz bank sebelumnya Add, saya ikuti opsi terdekat 'Save' di opsi B)"
    }
  ],
  marketing_materi10: [
    {
      question: "Apa yang Anda butuhkan untuk mengirim mailing SMS dengan Odoo?",
      question_en: "What do you need to send SMS mailings with Odoo?",
      options: [
        "IAP Credits",
        "Message Money",
        "SMS Bucks",
        "Odoo Dollars"
      ],
      options_en: [
        "IAP Credits",
        "Message Money",
        "SMS Bucks",
        "Odoo Dollars"
      ],
      correct: "IAP Credits"
    },
    {
      question: "Bagaimana cara memberikan pelanggan kekuasaan untuk berhenti berlangganan (unsubscribe) dari mailing SMS?",
      question_en: "How to give customers the power to unsubscribe from SMS mailings?",
      options: [
        "Aktifkan fitur 'Customer Portal'",
        "Aktifkan fitur 'I’m Done'",
        "Aktifkan fitur 'Include Opt-out link'",
        "Itu tidak mungkin"
      ],
      options_en: [
        "Enable 'Customer Portal' feature",
        "Enable 'I’m Done' feature",
        "Enable 'Include Opt-out link' feature",
        "It is not possible"
      ],
      correct: "Aktifkan fitur 'Include Opt-out link'"
    },
    {
      question: "Saat menguji mailing SMS, Anda dapat mengirimkannya ke...",
      question_en: "When testing SMS mailings, you can send them to...",
      options: [
        "Beberapa nomor telepon",
        "Hanya satu nomor telepon",
        "Hanya nomor telepon rekan kerja",
        "Odoo tidak menyediakan tes SMS"
      ],
      options_en: [
        "Multiple phone numbers",
        "Only one phone number",
        "Only colleagues' phone numbers",
        "Odoo does not provide SMS testing"
      ],
      correct: "Beberapa nomor telepon"
    }
  ],
  marketing_materi11: [
    {
      question: "Apa yang diperlukan untuk mengirim pesan SMS melalui Odoo?",
      question_en: "What is required to send SMS messages via Odoo?",
      options: [
        "SMS credits",
        "LOL credits",
        "IAP credits",
        "TXT credits"
      ],
      options_en: [
        "SMS credits",
        "LOL credits",
        "IAP credits",
        "TXT credits"
      ],
      correct: "IAP credits"
    },
    {
      question: "Pada formulir SMS, apa tujuan dari bidang 'Title'?",
      question_en: "On the SMS form, what is the purpose of the 'Title' field?",
      options: [
        "Referensi eksternal *saja*, penerima melihatnya di pesan mereka",
        "Referensi internal *saja*, penerima tidak melihatnya",
        "Referensi eksternal *saja*, penerima tidak melihatnya",
        "Referensi internal *saja*, penerima melihatnya di pesan mereka"
      ],
      options_en: [
        "External reference *only*, recipients see it in their message",
        "Internal reference *only*, recipients do not see it",
        "External reference *only*, recipients do not see it",
        "Internal reference *only*, recipients see it in their message"
      ],
      correct: "Referensi internal *saja*, penerima tidak melihatnya"
    },
    {
      question: "Pada tab 'A/B Tests', tombol apa yang harus diklik untuk memodifikasi SMS yang ada untuk tujuan pengujian?",
      question_en: "On the 'A/B Tests' tab, what button must be clicked to modify an existing SMS for testing purposes?",
      options: [
        "Modify Existing Version",
        "Change Original Version",
        "Write Test Version",
        "Create an Alternative Version"
      ],
      options_en: [
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
      question_en: "How to add a social media account to the Social Marketing app?",
      options: [
        "Klik 'Add Stream' di dasbor 'Campaigns'.",
        "Klik 'Configuration > Social Media' dan klik tombol 'Link account' yang sesuai.",
        "Klik 'Sync' di dasbor utama Social Marketing.",
        "Keduanya A dan B"
      ],
      options_en: [
        "Click 'Add Stream' on the 'Campaigns' dashboard.",
        "Click 'Configuration > Social Media' and click the corresponding 'Link account' button.",
        "Click 'Sync' on the main Social Marketing dashboard.",
        "Both A and B"
      ],
      correct: "Keduanya A dan B"
    },
    {
      question: "Bagaimana cara memposting ke media sosial?",
      question_en: "How to post to social media?",
      options: [
        "Klik 'Add Stream' di dasbor utama Social Marketing.",
        "Klik 'New Stream' di dasbor utama Social Marketing.",
        "Klik 'New Post' di dasbor utama Social Marketing.",
        "Saya hanya bisa memposting di platform media sosial secara langsung (mis. Facebook, Instagram), saya tidak bisa memposting langsung dari Odoo."
      ],
      options_en: [
        "Click 'Add Stream' on the main Social Marketing dashboard.",
        "Click 'New Stream' on the main Social Marketing dashboard.",
        "Click 'New Post' on the main Social Marketing dashboard.",
        "I can only post on social media platforms directly (e.g. Facebook, Instagram), I cannot post directly from Odoo."
      ],
      correct: "Klik 'New Post' di dasbor utama Social Marketing."
    },
    {
      question: "Bisakah saya menjadwalkan posting media sosial di masa depan?",
      question_en: "Can I schedule social media posts in the future?",
      options: [
        "Ya, tapi postingan masa depan hanya bisa dibuat untuk Facebook; semua platform lain harus diposting segera.",
        "Ya, tapi hanya jika tidak ada gambar yang digunakan dalam postingan.",
        "Tidak, semua postingan secara otomatis diposting segera.",
        "Ya, dengan memilih 'Schedule later' pada formulir 'Your Post', dan pilih tanggal serta waktu posting menggunakan pemilih kalender."
      ],
      options_en: [
        "Yes, but future posts can only be created for Facebook; all other platforms must be posted immediately.",
        "Yes, but only if no images are used in the post.",
        "No, all posts are automatically posted immediately.",
        "Yes, by selecting 'Schedule later' on the 'Your Post' form, and selecting the post date and time using the calendar picker."
      ],
      correct: "Ya, dengan memilih 'Schedule later' pada formulir 'Your Post', dan pilih tanggal serta waktu posting menggunakan pemilih kalender."
    }
  ],
  marketing_materi13: [
    {
      question: "Bagaimana cara menemukan semua kampanye saya?",
      question_en: "How to find all my campaigns?",
      options: [
        "Klik 'Campaigns' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Posts' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Feed' di menu atas aplikasi 'Social Marketing'.",
        "Klik 'Visitors' di menu atas aplikasi 'Social Marketing'."
      ],
      options_en: [
        "Click 'Campaigns' in the top menu of 'Social Marketing' app.",
        "Click 'Posts' in the top menu of 'Social Marketing' app.",
        "Click 'Feed' in the top menu of 'Social Marketing' app.",
        "Click 'Visitors' in the top menu of 'Social Marketing' app."
      ],
      correct: "Klik 'Campaigns' di menu atas aplikasi 'Social Marketing'."
    },
    {
      question: "Apa yang BUKAN merupakan bidang (field) pada kartu kampanye?",
      question_en: "What is NOT a field on the campaign card?",
      options: [
        "Campaign Name",
        "Responsible",
        "Streams",
        "Tags"
      ],
      options_en: [
        "Campaign Name",
        "Responsible",
        "Streams",
        "Tags"
      ],
      correct: "Streams"
    },
    {
      question: "Saat kampanye dibuat, di tahap (stage) apa kampanye tersebut muncul secara default?",
      question_en: "When a campaign is created, in which stage does it appear by default?",
      options: [
        "Running",
        "Ended",
        "Sent",
        "New"
      ],
      options_en: [
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
      question_en: "What feature needs to be enabled so you can send SMS and Email messages in the Social Marketing app?",
      options: [
        "SMS Allowance (di aplikasi SMS Marketing).",
        "Mailing Campaigns (di aplikasi Email Marketing).",
        "Campaign Allowance (di aplikasi Social Marketing).",
        "Itu tidak mungkin."
      ],
      options_en: [
        "SMS Allowance (in SMS Marketing app).",
        "Mailing Campaigns (in Email Marketing app).",
        "Campaign Allowance (in Social Marketing app).",
        "It is not possible."
      ],
      correct: "Mailing Campaigns (di aplikasi Email Marketing)."
    },
    {
      question: "Mengapa Anda ingin menyertakan link Opt-Out di SMS Anda?",
      question_en: "Why would you want to include an Opt-Out link in your SMS?",
      options: [
        "Untuk memberikan kebebasan kepada pelanggan Anda untuk berhenti berlangganan dari mailing.",
        "Untuk memberikan atasan Anda kebebasan untuk memilih keluar dari kontrak Anda.",
        "Untuk memberikan pelanggan Anda kemampuan untuk membeli kredit dari Odoo.",
        "Untuk memberi diri Anda peluang lebih baik untuk mengamankan lead/peluang."
      ],
      options_en: [
        "To give your customers the freedom to unsubscribe from mailing.",
        "To give your boss the freedom to opt-out of your contract.",
        "To give your customers the ability to buy credits from Odoo.",
        "To give yourself a better chance of securing a lead/opportunity."
      ],
      correct: "Untuk memberikan kebebasan kepada pelanggan Anda untuk berhenti berlangganan dari mailing."
    },
    {
      question: "Berapa banyak konten yang dapat Anda buat untuk setiap saluran (channel)?",
      question_en: "How much content can you create for each channel?",
      options: [
        "1 per channel.",
        "3 per channel.",
        "5 per channel.",
        "Sebanyak yang Anda inginkan"
      ],
      options_en: [
        "1 per channel.",
        "3 per channel.",
        "5 per channel.",
        "As much as you want"
      ],
      correct: "Sebanyak yang Anda inginkan"
    }
  ],
  marketing_materi15: [
    {
      question: "Di mana saya harus pergi untuk mengaktifkan opsi Push Notification?",
      question_en: "Where should I go to enable the Push Notification option?",
      options: [
        "Aplikasi Website.",
        "Aplikasi Settings.",
        "Aplikasi Social Marketing.",
        "Tidak ada yang benar."
      ],
      options_en: [
        "Website App.",
        "Settings App.",
        "Social Marketing App.",
        "None of the above."
      ],
      correct: "Aplikasi Website."
    },
    {
      question: "Apa fungsi bidang 'Push Target URL'?",
      question_en: "What is the function of the 'Push Target URL' field?",
      options: [
        "Ini memungkinkan saya untuk memilih halaman situs web mana yang akan dituju pengguna saat mengklik pesan saya. Tautan juga akan dilacak.",
        "Ini memungkinkan saya memilih halaman web yang ingin saya lacak untuk pesan itu.",
        "Ini memungkinkan saya memilih halaman web yang ingin saya tampilkan di kaki pesan.",
        "Tidak ada yang benar."
      ],
      options_en: [
        "It allows me to choose which website page users will go to when clicking my message. The link will also be tracked.",
        "It allows me to choose which web page I want to track for that message.",
        "It allows me to choose which web page I want to display in the message footer.",
        "None of the above."
      ],
      correct: "Ini memungkinkan saya untuk memilih halaman situs web mana yang akan dituju pengguna saat mengklik pesan saya. Tautan juga akan dilacak."
    },
    {
      question: "Manakah dari ini yang dapat saya lihat saat membuka rekod pengunjung (visitor)?",
      question_en: "Which of these can I see when opening a visitor record?",
      options: [
        "Jumlah leads/peluang.",
        "Jumlah kunjungan/sesi.",
        "Halaman yang dikunjungi.",
        "Semua yang di atas."
      ],
      options_en: [
        "Number of leads/opportunities.",
        "Number of visits/sessions.",
        "Pages visited.",
        "All of the above."
      ],
      correct: "Semua yang di atas."
    }
  ],
  marketing_materi16: [
    {
      question: "Saat Anda secara resmi memulai kampanye Anda, statusnya berubah menjadi apa...?",
      question_en: "When you officially start your campaign, what does its status change to...?",
      options: [
        "Running",
        "Started",
        "Closed",
        "Begun"
      ],
      options_en: [
        "Running",
        "Started",
        "Closed",
        "Begun"
      ],
      correct: "Running"
    },
    {
      question: "Jika Anda tidak dapat menemukan opsi spesifik yang Anda cari di menu drop-down 'Target', apa yang harus Anda lakukan?",
      question_en: "If you cannot find the specific option you are looking for in the 'Target' drop-down menu, what should you do?",
      options: [
        "Logout dari portal pelanggan Anda, lalu login kembali.",
        "Pilih 'Search More' pada menu drop-down 'Target'.",
        "Hubungi Dukungan Teknis Odoo.",
        "Tidak ada. Odoo tidak menyediakan opsi itu."
      ],
      options_en: [
        "Logout from your customer portal, then login again.",
        "Select 'Search More' in the 'Target' drop-down menu.",
        "Contact Odoo Technical Support.",
        "Nothing. Odoo does not provide that option."
      ],
      correct: "Pilih 'Search More' pada menu drop-down 'Target'."
    },
    {
      question: "'Records' dari kampanye pemasaran mewakili...",
      question_en: "'Records' of a marketing campaign represent...",
      options: [
        "Jumlah berapa kali kampanye ini telah digunakan.",
        "Jumlah pengguna dengan Akses Admin.",
        "Jumlah kampanye yang telah dibuat di database Anda.",
        "Jumlah kontak yang sesuai dengan kriteria 'Filter' yang baru saja Anda konfigurasi."
      ],
      options_en: [
        "The number of times this campaign has been used.",
        "The number of users with Admin Access.",
        "The number of campaigns that have been created in your database.",
        "The number of contacts that match the 'Filter' criteria you just configured."
      ],
      correct: "Jumlah kontak yang sesuai dengan kriteria 'Filter' yang baru saja Anda konfigurasi."
    }
  ],
  marketing_materi17: [
    {
      question: "Bisakah Anda membuat template email secara on-the-fly (langsung saat dibutuhkan)?",
      question_en: "Can you create email templates on-the-fly?",
      options: [
        "Ya, tentu saja.",
        "Ya, dengan Template Add-On terinstal.",
        "Ya, dengan izin tertulis dari administrator.",
        "Tidak, itu tidak mungkin."
      ],
      options_en: [
        "Yes, absolutely.",
        "Yes, with Template Add-On installed.",
        "Yes, with written permission from administrator.",
        "No, it is not possible."
      ],
      correct: "Ya, tentu saja."
    },
    {
      question: "Fitur apa yang harus Anda pertimbangkan saat membuat aktivitas yang sensitif terhadap waktu (time-sensitive) pada kampanye?",
      question_en: "What feature should you consider when creating time-sensitive activities in a campaign?",
      options: [
        "Exclude",
        "Expiration Date",
        "Expiry Duration",
        "Expire"
      ],
      options_en: [
        "Exclude",
        "Expiration Date",
        "Expiry Duration",
        "Expire"
      ],
      correct: "Expiry Duration"
    },
    {
      question: "Jenis aktivitas apa yang mengotomatiskan tindakan internal backend di database Anda?",
      question_en: "What type of activity automates backend internal actions in your database?",
      options: [
        "Enterprise Activity",
        "Server Activity",
        "Database Action",
        "Server Action"
      ],
      options_en: [
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
      question_en: "When you click 'Launch a Test', can you create a record to test on-the-fly?",
      options: [
        "Ya, tapi hanya jika Anda pernah bertemu kontak itu secara langsung sebelumnya.",
        "Ya, tanpa masalah apa pun.",
        "Ya, tapi hanya jika Anda telah menginstal modul 'Test Contact'.",
        "Tidak, itu tidak mungkin."
      ],
      options_en: [
        "Yes, but only if you have met the contact in person before.",
        "Yes, without any issue.",
        "Yes, but only if you have installed the 'Test Contact' module.",
        "No, it is not possible."
      ],
      correct: "Ya, tanpa masalah apa pun."
    },
    {
      question: "Bagaimana cara memeriksa kemajuan alur kerja (workflow progress) yang diperbarui dari tes kampanye di Odoo?",
      question_en: "How to check the updated workflow progress of a campaign test in Odoo?",
      options: [
        "Refresh halaman.",
        "Logout, dan login kembali segera.",
        "Tutup aplikasi, dan buka kembali segera.",
        "Itu tidak mungkin."
      ],
      options_en: [
        "Refresh the page.",
        "Logout, and login again immediately.",
        "Close the app, and reopen immediately.",
        "It is not possible."
      ],
      correct: "Refresh halaman."
    },
    {
      question: "Jika Anda menyiapkan 'Server Action' untuk memindahkan Lead/Opportunity ke tahap berikutnya dalam alur kerja Anda saat dipicu, di mana Anda akan pergi untuk mengonfirmasi perubahan itu?",
      question_en: "If you set up a 'Server Action' to move a Lead/Opportunity to the next stage in your workflow when triggered, where would you go to confirm that change?",
      options: [
        "Di dasbor utama Odoo.",
        "Di dasbor Projects.",
        "Di dasbor CRM.",
        "Di Customer Portal."
      ],
      options_en: [
        "On the main Odoo dashboard.",
        "On the Projects dashboard.",
        "On the CRM dashboard.",
        "On the Customer Portal."
      ],
      correct: "Di dasbor CRM."
    }
  ],
  crm_materi1: [
    {
      question: "Apa singkatan dari CRM?",
      question_en: "What does CRM stand for?",
      options: [
        "Customer Relationship Management",
        "Creative Relationship Mayhem",
        "Crazy Rabbits Moonwalk"
      ],
      options_en: [
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
      question_en: "How to customize a stage from the main CRM dashboard (Kanban view)?",
      options: [
        "Arahkan ke 'Configuration' > 'Stages' > 'Customizations'",
        "Hover (arahkan kursor) ke bagian atas stage, ikon 'gear' muncul. Klik itu lalu pilih kustomisasi dari drop-down",
        "Klik 'New' dari dashboard, dan lanjutkan membuat stage baru",
        "Ini tidak mungkin dilakukan di Odoo CRM"
      ],
      options_en: [
        "Navigate to 'Configuration' > 'Stages' > 'Customizations'",
        "Hover over the top of the stage, a 'gear' icon appears. Click it then select customization from the drop-down",
        "Click 'New' from the dashboard, and proceed to create a new stage",
        "This is not possible in Odoo CRM"
      ],
      correct: "Hover (arahkan kursor) ke bagian atas stage, ikon 'gear' muncul. Klik itu lalu pilih kustomisasi dari drop-down"
    },
    {
      question: "Bagaimana cara menjadwalkan aktivitas untuk opportunity dari dashboard utama CRM (tampilan Kanban)?",
      question_en: "How to schedule an activity for an opportunity from the main CRM dashboard (Kanban view)?",
      options: [
        "Klik ikon 'smiley face' pada kartu Kanban opportunity",
        "Klik ikon 'runner' pada kartu Kanban opportunity",
        "Klik ikon 'party hat' pada kartu Kanban opportunity",
        "Klik ikon 'clock' (jam) pada kartu Kanban opportunity"
      ],
      options_en: [
        "Click the 'smiley face' icon on the opportunity Kanban card",
        "Click the 'runner' icon on the opportunity Kanban card",
        "Click the 'party hat' icon on the opportunity Kanban card",
        "Click the 'clock' icon on the opportunity Kanban card"
      ],
      correct: "Klik ikon 'clock' (jam) pada kartu Kanban opportunity"
    },
    {
      question: "Di tab 'Extra Information' pada formulir opportunity, bagian informasi apa saja yang dapat ditemukan?",
      question_en: "In the 'Extra Information' tab on the opportunity form, which information sections can be found?",
      options: [
        "'Contact Information', 'Marketing', dan 'Tracking'",
        "'Customer Information', 'Marketing', dan 'Time-Keeping'",
        "'Marketing', 'Tracking', dan 'Revenue'",
        "'Marketing', 'Customer Information', dan 'Opportunities'"
      ],
      options_en: [
        "'Contact Information', 'Marketing', and 'Tracking'",
        "'Customer Information', 'Marketing', and 'Time-Keeping'",
        "'Marketing', 'Tracking', and 'Revenue'",
        "'Marketing', 'Customer Information', and 'Opportunities'"
      ],
      correct: "'Contact Information', 'Marketing', dan 'Tracking'"
    }
  ],
  crm_materi3: [
    {
      question: "Apa yang terjadi pada skor probabilitas opportunity saat berpindah melalui pipeline?",
      question_en: "What happens to the opportunity probability score when it moves through the pipeline?",
      options: [
        "Itu secara otomatis menyesuaikan (adjusts accordingly)",
        "Itu menyesuaikan, saat tombol 'Update Probability' diklik",
        "Probabilitas harus diubah secara manual saat dipindahkan ke stage baru",
        "Tidak ada. Setelah probabilitas diatur, itu tidak pernah berubah"
      ],
      options_en: [
        "It automatically adjusts accordingly",
        "It adjusts, when the 'Update Probability' button is clicked",
        "Probability must be manually changed when moved to a new stage",
        "Nothing. Once probability is set, it never changes"
      ],
      correct: "Itu secara otomatis menyesuaikan (adjusts accordingly)"
    },
    {
      question: "Jika probabilitas telah diubah secara manual, bagaimana cara mengembalikannya ke prediksi probabilitas Odoo (Odoo Probability)?",
      question_en: "If the probability has been manually changed, how to revert it to the Odoo predicted probability?",
      options: [
        "Dengan mengklik 'Restore' dimbagian atas formulir opportunity",
        "Dengan mengklik 'Odoo Original' di Chatter",
        "Dengan mengklik ikon 'gear' (roda gigi) di samping field probabilitas",
        "Itu tidak mungkin. Sekali diatur, tidak bisa kembali"
      ],
      options_en: [
        "By clicking 'Restore' at the top of the opportunity form",
        "By clicking 'Odoo Original' in Chatter",
        "By clicking the 'gear' icon next to the probability field",
        "It is not possible. Once set, it cannot be reverted"
      ],
      correct: "Dengan mengklik ikon 'gear' (roda gigi) di samping field probabilitas"
    },
    {
      question: "Untuk menambahkan satu salesperson ke beberapa sales team, fitur apa yang *harus* diaktifkan di pengaturan CRM?",
      question_en: "To add a single salesperson to multiple sales teams, what feature *must* be activated in CRM settings?",
      options: [
        "Different Teams",
        "Multiple Sales",
        "Custom Sales",
        "Multi Teams"
      ],
      options_en: [
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
      question_en: "What happens when I click the colored bar at the top of a stage in Kanban view?",
      options: [
        "Itu menampilkan opportunity yang memiliki status aktivitas berwarna tersebut, HANYA di stage itu saja",
        "Itu menampilkan semua opportunity di pipeline dengan warna tersebut, tanpa peduli stage",
        "Itu menandai semua aktivitas berwarna tersebut sebagai 'Done'",
        "Itu memindahkan deadline semua aktivitas sebanyak 7 hari"
      ],
      options_en: [
        "It displays opportunities that have that colored activity status, ONLY in that stage",
        "It displays all opportunities in the pipeline with that color, regardless of stage",
        "It marks all those colored activities as 'Done'",
        "It moves the deadline of all activities by 7 days"
      ],
      correct: "Itu menampilkan opportunity yang memiliki status aktivitas berwarna tersebut, HANYA di stage itu saja"
    },
    {
      question: "Apa fungsi tombol 'Snooze'?",
      question_en: "What is the function of the 'Snooze' button?",
      options: [
        "Mengatur deadline aktivitas ke 7 hari dari hari ini",
        "Menambahkan 7 hari ke deadline aktivitas saat ini",
        "Mengubah aktivitas dari 'Call' ke 'Email'",
        "Menandai aktivitas terlambat sebagai 'Done'"
      ],
      options_en: [
        "Sets the activity deadline to 7 days from today",
        "Adds 7 days to the current activity deadline",
        "Changes activity from 'Call' to 'Email'",
        "Marks overdue activities as 'Done'"
      ],
      correct: "Menambahkan 7 hari ke deadline aktivitas saat ini"
    },
    {
      question: "Bagaimana cara menjadwalkan aktivitas jika saya tidak yakin kapan peserta lain tersedia (available)?",
      question_en: "How to schedule an activity if I am not sure when other participants are available?",
      options: [
        "Dalam aktivitas, jadwalkan 'Call' atau 'Meeting', buka aplikasi 'Calendar', dan gunakan tombol 'Share Availabilities'",
        "Gunakan tombol 'Self-schedule'",
        "Saya tidak bisa menjadwalkan kecuali saya yakin",
        "Aktivitas hanya untuk individu"
      ],
      options_en: [
        "In the activity, schedule a 'Call' or 'Meeting', open the 'Calendar' app, and use the 'Share Availabilities' button",
        "Use the 'Self-schedule' button",
        "I cannot schedule unless I am sure",
        "Activities are only for individuals"
      ],
      correct: "Dalam aktivitas, jadwalkan 'Call' atau 'Meeting', buka aplikasi 'Calendar', dan gunakan tombol 'Share Availabilities'"
    }
  ],
  crm_materi5: [
    {
      question: "Bisakah saya mengedit opportunity setelah ditandai sebagai 'Won'?",
      question_en: "Can I edit an opportunity after it is marked as 'Won'?",
      options: [
        "Ya, kapan saja, untuk alasan apa pun",
        "Ya, tapi harus dipindahkan ke stage sebelumnya dulu",
        "Tidak, opportunity Won terkunci",
        "Tidak, tidak bisa diedit setelah melewati stage 'Proposition'"
      ],
      options_en: [
        "Yes, anytime, for any reason",
        "Yes, but it must be moved to the previous stage first",
        "No, Won opportunities are locked",
        "No, cannot be edited after passing 'Proposition' stage"
      ],
      correct: "Ya, kapan saja, untuk alasan apa pun"
    },
    {
      question: "Mengapa saya tidak melihat opportunity 'Lost' di pipeline?",
      question_en: "Why don't I see 'Lost' opportunities in the pipeline?",
      options: [
        "Mereka telah dihapus",
        "Mereka disembunyikan secara otomatis (hidden automatically)",
        "Saya perlu membuat stage Lost",
        "Saya bisa melihatnya kok (salah)"
      ],
      options_en: [
        "They have been deleted",
        "They are hidden automatically",
        "I need to create a Lost stage",
        "I can see them (false)"
      ],
      correct: "Mereka disembunyikan secara otomatis (hidden automatically)"
    },
    {
      question: "Bisakah saya memulihkan (restore) dan mengedit opportunity yang sudah ditandai 'Lost'?",
      question_en: "Can I restore and edit an opportunity that has been marked 'Lost'?",
      options: [
        "Tidak, opportunity terkunci selamanya",
        "Tidak, sudah dihapus",
        "Ya, saya bisa klik 'Restore' kapan saja",
        "Ya, tapi harus kirim tiket support"
      ],
      options_en: [
        "No, opportunities are locked forever",
        "No, it's already deleted",
        "Yes, I can click 'Restore' anytime",
        "Yes, but must send a support ticket"
      ],
      correct: "Ya, saya bisa klik 'Restore' kapan saja"
    }
  ],
  crm_materi6: [
    {
      question: "Pengaturan apa yang perlu diaktifkan untuk menetapkan leads secara otomatis ke salesperson?",
      question_en: "What setting needs to be enabled to automatically assign leads to salespeople?",
      options: [
        "Automatic Assignment",
        "Assignment Rules",
        "Rule-Based Assignment",
        "Domain Rules"
      ],
      options_en: [
        "Automatic Assignment",
        "Assignment Rules",
        "Rule-Based Assignment",
        "Domain Rules"
      ],
      correct: "Rule-Based Assignment"
    },
    {
      question: "Bagaimana cara mengatur satu alamat email untuk sales team?",
      question_en: "How to set a single email address for a sales team?",
      options: [
        "Field 'Email Alias'",
        "Field 'Team Email'",
        "Field 'Multi Alias'",
        "Field 'Single Domain'"
      ],
      options_en: [
        "'Email Alias' field",
        "'Team Email' field",
        "'Multi Alias' field",
        "'Single Domain' field"
      ],
      correct: "Field 'Email Alias'"
    },
    {
      question: "Di mana saya bisa mengedit domain untuk lead assignment otomatis sales team saya?",
      question_en: "Where can I edit the domain for my sales team's automatic lead assignment?",
      options: [
        "Lead Assignment",
        "Automation",
        "Team Details",
        "Assignment Rules"
      ],
      options_en: [
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
      question_en: "Where can you see a detailed list of all completed activities in Odoo?",
      options: [
        "Kanban View",
        "List View",
        "Homepage",
        "Sales Report"
      ],
      options_en: [
        "Kanban View",
        "List View",
        "Homepage",
        "Sales Report"
      ],
      correct: "List View"
    },
    {
      question: "Fitur apa yang memungkinkan manajer penjualan melacak kinerja aktivitas berdasarkan salesperson?",
      question_en: "What feature allows sales managers to track activity performance by salesperson?",
      options: [
        "Kanban filters",
        "Chatter feed",
        "Reporting dengan 'Group By' > Salesperson",
        "Activity Type settings"
      ],
      options_en: [
        "Kanban filters",
        "Chatter feed",
        "Reporting with 'Group By' > Salesperson",
        "Activity Type settings"
      ],
      correct: "Reporting dengan 'Group By' > Salesperson"
    },
    {
      question: "Apa manfaat menetapkan template email ke aktivitas yang dipicu (triggered activity)?",
      question_en: "What is the benefit of assigning an email template to a triggered activity?",
      options: [
        "Mencegah duplikat",
        "Mengisi konten pesan secara otomatis (Automatically populating)",
        "Memverifikasi identitas pelanggan",
        "Mengunggah file"
      ],
      options_en: [
        "Preventing duplicates",
        "Automatically populating message content",
        "Verifying customer identity",
        "Uploading files"
      ],
      correct: "Mengisi konten pesan secara otomatis (Automatically populating)"
    }
  ],
  crm_materi8: [
    {
      question: "Manakah kategori yang dapat ditemukan di kartu Kanban pada halaman 'Teams'?",
      question_en: "Which categories can be found on the Kanban card on the 'Teams' page?",
      options: [
        "Open opportunities",
        "Overdue opportunities",
        "Quotations",
        "Semua jawaban benar (All of the above)"
      ],
      options_en: [
        "Open opportunities",
        "Overdue opportunities",
        "Quotations",
        "All of the above"
      ],
      correct: "Semua jawaban benar (All of the above)"
    },
    {
      question: "Jenis grafik apa yang TIDAK ada di graph view standar CRM?",
      question_en: "Which type of chart does NOT exist in the standard CRM graph view?",
      options: [
        "Line chart",
        "Area chart",
        "Bar chart",
        "Pie chart"
      ],
      options_en: [
        "Line chart",
        "Area chart",
        "Bar chart",
        "Pie chart"
      ],
      correct: "Area chart"
    },
    {
      question: "Bagaimana cara menambahkan kategori baru ke tabel pivot?",
      question_en: "How to add a new category to a pivot table?",
      options: [
        "Dengan mengklik tanda 'plus' (+) di tabel pivot",
        "Di pengaturan pivot table",
        "Menggunakan filter search bar",
        "Baik A dan C benar"
      ],
      options_en: [
        "By clicking the 'plus' (+) sign in the pivot table",
        "In pivot table settings",
        "Using search bar filters",
        "Both A and C are correct"
      ],
      correct: "Baik A dan C benar"
    }
  ],
  crm_materi9: [
    {
      question: "Bagaimana cara menambahkan plugin 'Odoo Inbox Addin' ke inbox Gmail saya?",
      question_en: "How to add the 'Odoo Inbox Addin' plugin to my Gmail inbox?",
      options: [
        "Klik tanda 'plus' (+) di sidebar kanan > Cari 'Odoo' > klik kotak 'Odoo Inbox Addin' > Klik 'Install'",
        "Klik tanda 'O' di sidebar kanan > Install",
        "Klik 'plug' icon di kiri > Cari Odoo",
        "Klik 'Add-ins' > Search plug"
      ],
      options_en: [
        "Click 'plus' (+) sign in right sidebar > Search 'Odoo' > click 'Odoo Inbox Addin' box > Click 'Install'",
        "Click 'O' sign in right sidebar > Install",
        "Click 'plug' icon on the left > Search Odoo",
        "Click 'Add-ins' > Search plug"
      ],
      correct: "Klik tanda 'plus' (+) di sidebar kanan > Cari 'Odoo' > klik kotak 'Odoo Inbox Addin' > Klik 'Install'"
    },
    {
      question: "Dengan Odoo Gmail Plugin terinstal, apa yang saya klik di sidebar kanan untuk membuat opportunity?",
      question_en: "With Odoo Gmail Plugin installed, what do I click in the right sidebar to create an opportunity?",
      options: [
        "Klik 'Create' (di bawah bagian 'Leads')",
        "Klik 'Create' (di bawah bagian 'Tasks')",
        "Klik 'Create' (di bawah bagian 'Opportunities')",
        "Klik 'Create' (di bawah bagian 'Projects')"
      ],
      options_en: [
        "Click 'Create' (under 'Leads' section)",
        "Click 'Create' (under 'Tasks' section)",
        "Click 'Create' (under 'Opportunities' section)",
        "Click 'Create' (under 'Projects' section)"
      ],
      correct: "Klik 'Create' (di bawah bagian 'Opportunities')"
    },
    {
      question: "Setelah membuat Task *dan* Project sekaligus dari Odoo Gmail Plugin, di stage mana task tersebut akan ditemukan di database?",
      question_en: "After creating a Task *and* Project at once from Odoo Gmail Plugin, in which stage will the task be found in the database?",
      options: [
        "'None'",
        "'New'",
        "'Plug-in'",
        "'Gmail'"
      ],
      options_en: [
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
      question_en: "What feature MUST be enabled in General Settings for mailbox plugins to work with Odoo?",
      options: [
        "Mailbox Plugins",
        "Inbox Plugins",
        "Message Plugins",
        "Mail Plugins"
      ],
      options_en: [
        "Mailbox Plugins",
        "Inbox Plugins",
        "Message Plugins",
        "Mail Plugins"
      ],
      correct: "Mail Plugins"
    },
    {
      question: "Dimana saya dapat menemukan instruksi rinci tentang cara menginstal plugin untuk Gmail dan Outlook dengan benar?",
      question_en: "Where can I find detailed instructions on how to properly install plugins for Gmail and Outlook?",
      options: [
        "Dari aplikasi General Settings",
        "Dari aplikasi Email Marketing",
        "Dari Odoo Documentation",
        "Dari CRM Dashboard"
      ],
      options_en: [
        "From General Settings app",
        "From Email Marketing app",
        "From Odoo Documentation",
        "From CRM Dashboard"
      ],
      correct: "Dari Odoo Documentation"
    },
    {
      question: "Saat menggunakan Outlook plugin, apa yang terjadi ketika ikon surat (mail icon) diklik di samping kontak?",
      question_en: "When using the Outlook plugin, what happens when the mail icon is clicked next to a contact?",
      options: [
        "Itu mencatat (logs) email spesifik tersebut ke dalam formulir kontak di Odoo",
        "Mengirim pesan follow-up",
        "Mengirim SMS ke salesperson",
        "Tidak terjadi apa-apa"
      ],
      options_en: [
        "It logs that specific email into the contact form in Odoo",
        "Sends a follow-up message",
        "Sends an SMS to the salesperson",
        "Nothing happens"
      ],
      correct: "Itu mencatat (logs) email spesifik tersebut ke dalam formulir kontak di Odoo"
    }
  ],
  crm_materi11: [
    {
      question: "Opsi 'Group By' apa yang saya pilih untuk mengelompokkan berdasarkan mesin pencari (search engine)?",
      question_en: "What 'Group By' option do I select to group by search engine?",
      options: [
        "Campaign",
        "Medium",
        "Source",
        "Stage"
      ],
      options_en: [
        "Campaign",
        "Medium",
        "Source",
        "Stage"
      ],
      correct: "Source"
    },
    {
      question: "Bagaimana cara memilih leads aktif (active leads) untuk laporan saya?",
      question_en: "How to select active leads for my report?",
      options: [
        "Filters > Add Custom Filter > Active is set",
        "Group By > Add Custom Group > Active is set",
        "Filters > Active",
        "Group By > Active Leads"
      ],
      options_en: [
        "Filters > Add Custom Filter > Active is set",
        "Group By > Add Custom Group > Active is set",
        "Filters > Active",
        "Group By > Active Leads"
      ],
      correct: "Filters > Add Custom Filter > Active is set"
    },
    {
      question: "View apa yang harus saya buka untuk melihat tabel laporan saya?",
      question_en: "Which view should I open to see my report table?",
      options: [
        "List",
        "Pivot",
        "Kanban",
        "None of the above"
      ],
      options_en: [
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
      question_en: "Why can't lead probability be manually adjusted to 100%?",
      options: [
        "Odoo hanya menawarkan pilihan probabilitas: 10%, 50%, dan 80%.",
        "Lead dengan probabilitas 100% dianggap 'won' dan secara otomatis ditutup.",
        "Probabilitas lead hanya bisa disesuaikan manual hingga 75%.",
        "Secara default, Odoo memerlukan persetujuan manajer di atas 50%."
      ],
      options_en: [
        "Odoo only offers probability choices: 10%, 50%, and 80%.",
        "Leads with 100% probability are considered 'won' and automatically closed.",
        "Lead probability can only be manually adjusted up to 75%.",
        "By default, Odoo requires manager approval above 50%."
      ],
      correct: "Lead dengan probabilitas 100% dianggap 'won' dan secara otomatis ditutup."
    },
    {
      question: "Bagaimana Odoo AI menentukan persentase probabilitas lead?",
      question_en: "How does Odoo AI determine lead probability percentage?",
      options: [
        "Kita tidak tahu. Itu black box.",
        "Odoo AI menggunakan dataset publik.",
        "Odoo AI menggunakan catatan opportunity menang/kalah perusahaan Anda (your company's record) untuk memprediksi.",
        "Odoo AI menganalisis data semua bisnis pengguna Odoo."
      ],
      options_en: [
        "We don't know. It's a black box.",
        "Odoo AI uses public datasets.",
        "Odoo AI uses your company's win/loss opportunity records to predict.",
        "Odoo AI analyzes data from all Odoo user businesses."
      ],
      correct: "Odoo AI menggunakan catatan opportunity menang/kalah perusahaan Anda (your company's record) untuk memprediksi."
    },
    {
      question: "Apa yang direpresentasikan tanggal di field Expected Closing?",
      question_en: "What does the date in the Expected Closing field represent?",
      options: [
        "Tanggal yang dimasukkan secara manual kapan Anda berharap opportunity dimenangkan.",
        "Tanggal manual kapan opportunity dianggap lost.",
        "Tanggal otomatis dari aplikasi Accounting.",
        "Tanggal otomatis dari Odoo AI."
      ],
      options_en: [
        "Manually entered date when you expect the opportunity to be won.",
        "Manual date when opportunity is considered lost.",
        "Automatic date from Accounting app.",
        "Automatic date from Odoo AI."
      ],
      correct: "Tanggal yang dimasukkan secara manual kapan Anda berharap opportunity dimenangkan."
    }
  ],
  crm_materi13: [
    {
      question: "Saat mengonfigurasi formulir online untuk menghasilkan leads, opsi apa yang HARUS dipilih dari menu drop-down 'Action' (saat dalam mode 'Edit')?",
      question_en: "When configuring an online form to generate leads, what option MUST be selected from the 'Action' drop-down menu (when in 'Edit' mode)?",
      options: [
        "Lead Generation",
        "Create an Opportunity",
        "Opportunity Creation",
        "Create a Lead"
      ],
      options_en: [
        "Lead Generation",
        "Create an Opportunity",
        "Opportunity Creation",
        "Create a Lead"
      ],
      correct: "Create an Opportunity"
    },
    {
      question: "Saat mengonfigurasi email alias untuk menghasilkan leads bagi tim sales, opsi apa yang harus dicentang pada form tim sales agar Odoo membuat lead setiap kali email dikirim ke alias tersebut?",
      question_en: "When configuring an email alias to generate leads for a sales team, what option must be checked on the sales team form so Odoo creates a lead every time an email is sent to that alias?",
      options: [
        "Leads",
        "Emails",
        "Sales",
        "Generate"
      ],
      options_en: [
        "Leads",
        "Emails",
        "Sales",
        "Generate"
      ],
      correct: "Leads"
    },
    {
      question: "Jika lead dibuat dari email yang dikirim ke alias, di mana isi (body) email dapat ditemukan pada form lead?",
      question_en: "If a lead is created from an email sent to an alias, where can the email body be found on the lead form?",
      options: [
        "Di field 'Subject'",
        "Di tab 'Email Body'",
        "Di 'Chatter'",
        "Tidak dapat ditemukan di form lead"
      ],
      options_en: [
        "In the 'Subject' field",
        "In the 'Email Body' tab",
        "In 'Chatter'",
        "Cannot be found on the lead form"
      ],
      correct: "Di 'Chatter'"
    }
  ],
  crm_materi14: [
    {
      question: "Saat mencoba menghasilkan leads dari Acara (Events), Janji Temu (Appointments), atau pengunjung Website, opsi apa yang sebaiknya dipilih di field 'Lead Type' pada Lead Generation Rule?",
      question_en: "When trying to generate leads from Events, Appointments, or Website visitors, what option should be selected in the 'Lead Type' field on the Lead Generation Rule?",
      options: [
        "Lead",
        "Opportunity",
        "Generate",
        "Create"
      ],
      options_en: [
        "Lead",
        "Opportunity",
        "Generate",
        "Create"
      ],
      correct: "Lead"
    },
    {
      question: "Di tab 'Options' pada form Appointment, kotak apa yang **harus** dicentang untuk memastikan bahwa semua janji temu yang dibooking dari tipe ini akan menghasilkan opportunity di pipeline?",
      question_en: "In the 'Options' tab on the Appointment form, which box **must** be checked to ensure that all booked appointments of this type will generate an opportunity in the pipeline?",
      options: [
        "Generate Opportunities",
        "Create Appointments",
        "Create Opportunities",
        "Generate Leads"
      ],
      options_en: [
        "Generate Opportunities",
        "Create Appointments",
        "Create Opportunities",
        "Generate Leads"
      ],
      correct: "Create Opportunities"
    },
    {
      question: "Jika seseorang mengunjungi website kami, tetapi tidak mengisi formulir apa pun, dan tidak menghubungi kami sama sekali, bagaimana Odoo *masih* bisa mencatat mereka sebagai lead (jika memenuhi kriteria tertentu)?",
      question_en: "If someone visits our website, but doesn't fill out any forms, and doesn't contact us at all, how can Odoo *still* record them as a lead (if they meet certain criteria)?",
      options: [
        "Di Website app, klik Configuration > Settings. Lalu aktifkan 'Record Leads'",
        "Di Appointments app, klik Configuration > Settings. Lalu aktifkan 'Leads from Visits'",
        "Di CRM app, klik Configuration > Settings. Lalu aktifkan fitur 'Visits to Leads'",
        "Itu tidak mungkin"
      ],
      options_en: [
        "In Website app, click Configuration > Settings. Then enable 'Record Leads'",
        "In Appointments app, click Configuration > Settings. Then enable 'Leads from Visits'",
        "In CRM app, click Configuration > Settings. Then enable 'Visits to Leads' feature",
        "It is not possible"
      ],
      correct: "Di CRM app, klik Configuration > Settings. Lalu aktifkan fitur 'Visits to Leads'"
    }
  ],
  crm_materi15: [
    {
      question: "Apa yang terjadi jika Odoo tidak dapat menemukan informasi tambahan tentang lead Anda (saat enrichment)?",
      question_en: "What happens if Odoo cannot find additional information about your lead (during enrichment)?",
      options: [
        "Anda tetap membayar kredit",
        "Tidak ada kredit yang didebit dari akun Anda",
        "Odoo akan selalu menemukan cara untuk memperkaya lead",
        "Lead dihapus"
      ],
      options_en: [
        "You still pay the credit",
        "No credit is debited from your account",
        "Odoo will always find a way to enrich the lead",
        "Lead is deleted"
      ],
      correct: "Tidak ada kredit yang didebit dari akun Anda"
    },
    {
      question: "Berapa waktu default untuk menjalankan scheduler fitur lead enrichment?",
      question_en: "What is the default time to run the lead enrichment feature scheduler?",
      options: [
        "1 jam",
        "12 jam",
        "1 hari",
        "1 minggu"
      ],
      options_en: [
        "1 hour",
        "12 hours",
        "1 day",
        "1 week"
      ],
      correct: "1 jam"
    },
    {
      question: "Informasi apa yang dibutuhkan database eksternal untuk memperkaya lead Anda?",
      question_en: "What information does the external database need to enrich your lead?",
      options: [
        "Email address",
        "Website",
        "Phone number",
        "Semua jawaban benar (Any of the above)"
      ],
      options_en: [
        "Email address",
        "Website",
        "Phone number",
        "Any of the above"
      ],
      correct: "Email address"
    }
  ],
  crm_materi16: [
    {
      question: "Apakah mungkin untuk menghasilkan leads (mining) tanpa memilih negara?",
      question_en: "Is it possible to generate leads (mining) without selecting a country?",
      options: [
        "Yes",
        "No"
      ],
      options_en: [
        "Yes",
        "No"
      ],
      correct: "No"
    },
    {
      question: "Dari mana kita bisa menghasilkan leads baru (tempat menu/fitur)?",
      question_en: "From where can we generate new leads (menu/feature)?",
      options: [
        "My Pipeline",
        "Team Pipelines",
        "Leads",
        "Configuration → Lead mining requests",
        "All of these answers excepted Team Pipelines"
      ],
      options_en: [
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
      question_en: "How many different industries can you select when generating leads?",
      options: [
        "3",
        "5",
        "20",
        "Sebanyak yang Anda inginkan (As many as you wish)"
      ],
      options_en: [
        "3",
        "5",
        "20",
        "As many as you wish"
      ],
      correct: "Sebanyak yang Anda inginkan (As many as you wish)"
    }
  ],
  crm_materi17: [
    {
      question: "Pengaturan apa yang perlu diaktifkan agar leads dapat ditugaskan (assigned) secara otomatis?",
      question_en: "What setting needs to be enabled for leads to be assigned automatically?",
      options: [
        "Auto Assign Leads",
        "Opportunity Assignment",
        "Automatic Assignment",
        "Rule-Based Assignment"
      ],
      options_en: [
        "Auto Assign Leads",
        "Opportunity Assignment",
        "Automatic Assignment",
        "Rule-Based Assignment"
      ],
      correct: "Rule-Based Assignment"
    },
    {
      question: "Di mana saya dapat mengatur rule-based assignment untuk staff sales individu?",
      question_en: "Where can I set up rule-based assignment for individual sales staff?",
      options: [
        "The Contacts app",
        "The Sales Team page",
        "The settings menu",
        "None of the above"
      ],
      options_en: [
        "The Contacts app",
        "The Sales Team page",
        "The settings menu",
        "None of the above"
      ],
      correct: "The Sales Team page"
    },
    {
      question: "Apa fungsi opsi 'Skip auto assignment'?",
      question_en: "What is the function of the 'Skip auto assignment' option?",
      options: [
        "Melewati baik assignment otomatis maupun manual",
        "Melewati assignment otomatis tetapi mengizinkan assignment manual",
        "Hanya mengizinkan rule-based assignment",
        "Mengizinkan opportunities di-assign otomatis, tapi leads tidak"
      ],
      options_en: [
        "Skips both automatic and manual assignment",
        "Skips automatic assignment but allows manual assignment",
        "Only allows rule-based assignment",
        "Allows opportunities to be auto-assigned, but not leads"
      ],
      correct: "Melewati assignment otomatis tetapi mengizinkan assignment manual"
    }
  ],
  crm_materi18: [
    {
      question: "Bagaimana cara memindahkan opportunity ke stage berbeda di aplikasi CRM?",
      question_en: "How to move an opportunity to a different stage in the CRM app?",
      options: [
        "Click into the opportunity card, open the 'Stages' tab, and select the new opportunity stage",
        "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage",
        "On the dashboard, double-click the opportunity, and select the new stage in the drop-down menu",
        "The customer needs to email requesting their opportunity to be moved"
      ],
      options_en: [
        "Click into the opportunity card, open the 'Stages' tab, and select the new opportunity stage",
        "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage",
        "On the dashboard, double-click the opportunity, and select the new stage in the drop-down menu",
        "The customer needs to email requesting their opportunity to be moved"
      ],
      correct: "On the dashboard, drag and drop the opportunity into the new stage. Or, in the opportunity, select the new stage"
    },
    {
      question: "Di mana saya dapat memeriksa riwayat (history) dari sebuah opportunity?",
      question_en: "Where can I check the history of an opportunity?",
      options: [
        "In the 'Opportunity History' page on the CRM app",
        "In the 'Activities' page, under the 'Reporting' menu",
        "In the 'History' tab on the opportunity page",
        "In the chatter section on the opportunity page"
      ],
      options_en: [
        "In the 'Opportunity History' page on the CRM app",
        "In the 'Activities' page, under the 'Reporting' menu",
        "In the 'History' tab on the opportunity page",
        "In the chatter section on the opportunity page"
      ],
      correct: "In the chatter section on the opportunity page"
    },
    {
      question: "Apa cara tercepat untuk memeriksa meeting berikutnya untuk sebuah opportunity di aplikasi CRM?",
      question_en: "What is the fastest way to check the next meeting for an opportunity in the CRM app?",
      options: [
        "Check the meeting date on the smart button in the opportunity page",
        "Scroll through the chatter in the opportunity page, and identify the most recent meeting date",
        "Message the opportunity owner in the chatter, and ask them",
        "There is no way to check meetings in the CRM app"
      ],
      options_en: [
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
      question_en: "What MUST be enabled to configure Gamification?",
      options: [
        "Gamer Mode",
        "Developer Mode",
        "Seller Mode",
        "Sales Mode"
      ],
      options_en: [
        "Gamer Mode",
        "Developer Mode",
        "Seller Mode",
        "Sales Mode"
      ],
      correct: "Developer Mode"
    },
    {
      question: "Di mana Anda dapat mendefinisikan goals untuk sales teams/salespeople?",
      question_en: "Where can you define goals for sales teams/salespeople?",
      options: [
        "Settings app > Gamification Tools > Sales Teams",
        "Settings app > Gamification Tools > Goal Configuration",
        "Settings app > Gamification Tools > Goal Definitions",
        "Settings app > Gamification Tools > Goal Challenges"
      ],
      options_en: [
        "Settings app > Gamification Tools > Sales Teams",
        "Settings app > Gamification Tools > Goal Configuration",
        "Settings app > Gamification Tools > Goal Definitions",
        "Settings app > Gamification Tools > Goal Challenges"
      ],
      correct: "Settings app > Gamification Tools > Goal Definitions"
    },
    {
      question: "Di mana badges dapat dikustomisasi dan/atau dibuat untuk tantangan gamification?",
      question_en: "Where can badges be customized and/or created for gamification challenges?",
      options: [
        "CRM app > Sales Teams > Badges",
        "Settings app > Gamification Tools > Badges",
        "Sales app > Gamification Tools > Rewards",
        "CRM app > Sales Teams > Rewards"
      ],
      options_en: [
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
      question_en: "What is the purpose of using vendor rules and pricelists in Odoo?",
      options: [
        "To prevent vendors from changing prices",
        "To apply quantity-based pricing automatically",
        "To increase shipping costs",
        "To generate financial reports"
      ],
      options_en: [
        "To prevent vendors from changing prices",
        "To apply quantity-based pricing automatically",
        "To increase shipping costs",
        "To generate financial reports"
      ],
      correct: "To apply quantity-based pricing automatically"
    },
    {
      question: "Apa yang terjadi setelah saya menkonfirmasi RFQ?",
      question_en: "What happens after I confirm an RFQ?",
      options: [
        "The RFQ transforms into a PO. The order has been placed",
        "The RFQ resets, and will need to be reconfigured",
        "The vendor will send a separate vendor order form for us to fill",
        "The RFQ pricing is confirmed, and should be configured in a new PO"
      ],
      options_en: [
        "The RFQ transforms into a PO. The order has been placed",
        "The RFQ resets, and will need to be reconfigured",
        "The vendor will send a separate vendor order form for us to fill",
        "The RFQ pricing is confirmed, and should be configured in a new PO"
      ],
      correct: "The RFQ transforms into a PO. The order has been placed"
    },
    {
      question: "Apa tujuan dari smart button 'Receipt' setelah mengonfirmasi Purchase Order?",
      question_en: "What is the purpose of the 'Receipt' smart button after confirming a Purchase Order?",
      options: [
        "To download the payment invoice",
        "To initiate warehouse restocking",
        "To contact the vendor for follow-up",
        "To validate and confirm product delivery"
      ],
      options_en: [
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
      question_en: "Which purchase lead time adds extra calendar days as a company-wide security buffer for unexpected delays?",
      options: [
        "Purchase Lead Time",
        "Purchase Security Lead Time",
        "Days to Buy",
        "Days to Purchase"
      ],
      options_en: [
        "Purchase Lead Time",
        "Purchase Security Lead Time",
        "Days to Buy",
        "Days to Purchase"
      ],
      correct: "Purchase Security Lead Time"
    },
    {
      question: "Order Deadline pada RFQ yang baru dibuat dihitung sebagai:",
      question_en: "The Order Deadline on a newly created RFQ is calculated as:",
      options: [
        "Creation date of the RFQ plus the Days to Purchase",
        "Creation date plus Vendor Lead Time",
        "Forecasted date minus Vendor Lead Time",
        "Forecasted date minus Purchase Security Lead Time"
      ],
      options_en: [
        "Creation date of the RFQ plus the Days to Purchase",
        "Creation date plus Vendor Lead Time",
        "Forecasted date minus Vendor Lead Time",
        "Forecasted date minus Purchase Security Lead Time"
      ],
      correct: "Creation date of the RFQ plus the Days to Purchase"
    },
    {
      question: "Dengan Vendor Lead Time 7 hari, Purchase Security Lead Time 2 hari, dan Days to Purchase 1 hari, berapa lama rentang forecast window Odoo pada laporan Replenishment?",
      question_en: "With a 7-day Vendor Lead Time, 2-day Purchase Security Lead Time, and 1-day Days to Purchase, how long is the Odoo forecast window range on the Replenishment report?",
      options: [
        "7 days",
        "8 days",
        "9 days",
        "10 days"
      ],
      options_en: [
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
      question_en: "Where can I create a specific vendor pricelist for an individual product?",
      options: [
        "Go to the Product form, and click the Purchase tab",
        "Go to the vendor’s Contact form, click the Purchase tab, and add the prices",
        "Go to the Inventory tab, and click the Purchase Configuration menu",
        "Go to the Product form, click the Purchase tab, and click the vendor’s Contact form"
      ],
      options_en: [
        "Go to the Product form, and click the Purchase tab",
        "Go to the vendor’s Contact form, click the Purchase tab, and add the prices",
        "Go to the Inventory tab, and click the Purchase Configuration menu",
        "Go to the Product form, click the Purchase tab, and click the vendor’s Contact form"
      ],
      correct: "Go to the Product form, and click the Purchase tab"
    },
    {
      question: "Di mana saya bisa mengimpor vendor pricelist?",
      question_en: "Where can I import vendor pricelists?",
      options: [
        "Go to the Vendor app > Configuration menu > ‘Vendor Pricelist’. Next, click the Actions button, then ‘Import’",
        "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’",
        "Go to the Vendor app > Pricing menu > click the ‘Actions’ button. Then, click ‘Import records’",
        "Go to the Vendor Pricelists page, click the ‘Actions’ button, then ‘Export’"
      ],
      options_en: [
        "Go to the Vendor app > Configuration menu > ‘Vendor Pricelist’. Next, click the Actions button, then ‘Import’",
        "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’",
        "Go to the Vendor app > Pricing menu > click the ‘Actions’ button. Then, click ‘Import records’",
        "Go to the Vendor Pricelists page, click the ‘Actions’ button, then ‘Export’"
      ],
      correct: "Go to the Purchase app > Configuration menu > ‘Vendor Pricelist’. Then, click the cog icon , and then ‘Import records’"
    },
    {
      question: "Pada vendor pricelist saya, vendor memberikan 'Diskon' 10% untuk 'Harga' $20. Field 'Quantity' pada vendor pricelist adalah 5. Pada RFQ, berapa harga empat item?",
      question_en: "On my vendor pricelist, the vendor gives a 10% 'Discount' for a 'Price' of $20. The 'Quantity' field on the vendor pricelist is 5. On an RFQ, what is the price of four items?",
      options: [
        "4 x 20 = $ 80",
        "( 4 x 20 ) x 0.1 = $ 8",
        "( 4 x 20 ) x 0.9 = $ 72",
        "( 5 x 20 ) x 0.9 = $ 90"
      ],
      options_en: [
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
      question_en: "How to prevent employees from purchasing from a specific vendor?",
      options: [
        "Set a “Blocking Message” warning on the vendor",
        "Set a “Lock Vendor” warning on the vendor",
        "Go to the app’s settings, and add the vendor to the warning list",
        "I cannot prevent employees from purchasing from a specific vendor"
      ],
      options_en: [
        "Set a “Blocking Message” warning on the vendor",
        "Set a “Lock Vendor” warning on the vendor",
        "Go to the app’s settings, and add the vendor to the warning list",
        "I cannot prevent employees from purchasing from a specific vendor"
      ],
      correct: "I cannot prevent employees from purchasing from a specific vendor"
    },
    {
      question: "Di mana saya mengatur karyawan sebagai Purchase app “User” atau “Administrator”?",
      question_en: "Where do I set an employee as a Purchase app “User” or “Administrator”?",
      options: [
        "General settings > Manage Users > Select the employee > Access Rights",
        "General settings > Purchase access > Select the employee",
        "Purchase settings > App users > Access Rights",
        "Purchase settings > User types > Select the employee > Manage Access"
      ],
      options_en: [
        "General settings > Manage Users > Select the employee > Access Rights",
        "General settings > Purchase access > Select the employee",
        "Purchase settings > App users > Access Rights",
        "Purchase settings > User types > Select the employee > Manage Access"
      ],
      correct: "General settings > Manage Users > Select the employee > Access Rights"
    },
    {
      question: " What happens when I set the “Purchase Order Approval” to a “Minimum Amount” of $200?",
      question_en: " What happens when I set the “Purchase Order Approval” to a “Minimum Amount” of $200?",
      options: [
        "Requests for quotations must reach a minimum total of $200 to be confirmed",
        "Only a “Purchase Administrator” can create a request for quotation for $200 (or more)",
        "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by a “Purchase User”",
        "A “Purchase Administrator” needs to approve any requests for quotations of $200 (or more) created by any employee"
      ],
      options_en: [
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
      question_en: "Is it possible to select multiple Requests for Quotation when using the call for tenders feature?",
      options: [
        "Yes",
        "No"
      ],
      options_en: [
        "Yes",
        "No"
      ],
      correct: "Yes"
    },
    {
      question: "Apa status pesanan yang tidak terpilih dalam Call for Tenders yang bersifat 'exclusive'?",
      question_en: "What is the status of orders not selected in an 'exclusive' Call for Tenders?",
      options: [
        "Waiting",
        "Cancelled",
        "Purchase order",
        "Archived",
        "Refused"
      ],
      options_en: [
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
      question_en: "Is it true that 'Blanket orders' is another name for 'Call for Tenders'?",
      options: [
        "No",
        "Yes"
      ],
      options_en: [
        "No",
        "Yes"
      ],
      correct: "No"
    },
    {
      question: "Ketika 'Call for tenders' divalidasi, apa statusnya?",
      question_en: "When a 'Call for tenders' is validated, what is its status?",
      options: [
        "Draft",
        "Waiting",
        "BID Selection",
        "Ready",
        "Done",
        "Closed"
      ],
      options_en: [
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
      question_en: "On a Request for Quotation (created within a Blanket Order), which fields are NOT pre-filled and need to be configured manually?",
      options: [
        "Only the Unit Price",
        "Order Deadline, Expected Arrival",
        "Order Deadline, Expected Arrival, Quantity",
        "Nothing, everything is pre-filled"
      ],
      options_en: [
        "Only the Unit Price",
        "Order Deadline, Expected Arrival",
        "Order Deadline, Expected Arrival, Quantity",
        "Nothing, everything is pre-filled"
      ],
      correct: "Order Deadline, Expected Arrival, Quantity"
    },
    {
      question: "Kondisi apa yang perlu dipenuhi untuk menutup blanket order?",
      question_en: "What condition needs to be met to close a blanket order?",
      options: [
        "At least one item in the blanket order is an RFQ",
        "At least one item in the blanket order is billed",
        "All RFQs in the blanket order have become purchase orders",
        "All items in the blanket order are billed"
      ],
      options_en: [
        "At least one item in the blanket order is an RFQ",
        "At least one item in the blanket order is billed",
        "All RFQs in the blanket order have become purchase orders",
        "All items in the blanket order are billed"
      ],
      correct: "All RFQs in the blanket order have become purchase orders"
    },
    {
      question: "Kapan saya harus menggunakan Blanket Order?",
      question_en: "When should I use a Blanket Order?",
      options: [
        "When making recurring purchases of the same product(s) from the same vendor",
        "When making repetitive purchases for the same product from several vendors",
        "Whenever I need to purchase any product",
        "I cannot make blanket orders in Odoo"
      ],
      options_en: [
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
      question_en: "Can I create a Bill immediately after I confirm a Request for Quotation?",
      options: [
        "No.",
        "Yes, if the ordered product’s Bill Control policy is set to “received quantities.”",
        "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”",
        "No, but clicking “Force” will allow a bill to be created."
      ],
      options_en: [
        "No.",
        "Yes, if the ordered product’s Bill Control policy is set to “received quantities.”",
        "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”",
        "No, but clicking “Force” will allow a bill to be created."
      ],
      correct: "Yes, if the ordered product’s Bill Control policy is set to “ordered quantities.”"
    },
    {
      question: "Dalam video, error 'Invalid Operation' muncul saat mencoba membuat bill. Mengapa ini terjadi?",
      question_en: "In the video, an 'Invalid Operation' error appears when trying to create a bill. Why does this happen?",
      options: [
        "The PO’s ‘Billing Status’ is ‘Waiting Bills’",
        "Bill Control policy is set to “Received quantities,” and I haven’t received products yet",
        "Billing error",
        "The bill was already paid"
      ],
      options_en: [
        "The PO’s ‘Billing Status’ is ‘Waiting Bills’",
        "Bill Control policy is set to “Received quantities,” and I haven’t received products yet",
        "Billing error",
        "The bill was already paid"
      ],
      correct: "Bill Control policy is set to “Received quantities,” and I haven’t received products yet"
    },
    {
      question: "Dokumen dan tab mana yang menampilkan field 'Should Be Paid' untuk melakukan 3-way matching?",
      question_en: "Which document and tab displays the 'Should Be Paid' field for performing 3-way matching?",
      options: [
        "Purchase Order, in the ‘Other Information’ tab",
        "Receipt, in the ‘Additional Information’ tab",
        "Bill, in the ‘Other Info’ tab",
        "Invoice, in the ‘Other Info’ tab"
      ],
      options_en: [
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
      question_en: "To enable alternative RFQs in the database, which setting must be selected?",
      options: [
        "Purchase Agreements and Purchase Alternatives",
        "Purchase Agreements and 3-way matching",
        "3-way matching",
        "Purchase Alternatives and Receipt Reminder"
      ],
      options_en: [
        "Purchase Agreements and Purchase Alternatives",
        "Purchase Agreements and 3-way matching",
        "3-way matching",
        "Purchase Alternatives and Receipt Reminder"
      ],
      correct: "Purchase Agreements and Purchase Alternatives"
    },
    {
      question: "Pada dashboard Compare Product Lines, manakah yang TIDAK muncul berwarna hijau?",
      question_en: "On the Compare Product Lines dashboard, which of the following does NOT appear in green?",
      options: [
        "The fastest expected arrival date",
        "The vendor name",
        "The cheapest unit price",
        "The cheapest total cost"
      ],
      options_en: [
        "The fastest expected arrival date",
        "The vendor name",
        "The cheapest unit price",
        "The cheapest total cost"
      ],
      correct: "The vendor name"
    },
    {
      question: "Jika saya ingin memasukkan RFQ baru sebagai Alternative quotation, apa yang harus saya lakukan?",
      question_en: "If I want to include a new RFQ as an Alternative quotation, what should I do?",
      options: [
        "On the RFQ, click ‘Action,’ and select ‘Add to Alternative RFQ’",
        "From the Purchase Orders overview, select the RFQs to link, click ‘Action,’ and select ‘Link RFQs’",
        "On the RFQ, click ‘Link to Existing RFQ,’ and select the Purchase Orders to link it to",
        "I cannot link an unrelated RFQ as an Alternative to other Purchase Orders"
      ],
      options_en: [
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
      question_en: "Which field is Required on a purchase template?",
      options: [
        "Vendor",
        "Product",
        "Quantity",
        "Unit Price"
      ],
      options_en: [
        "Vendor",
        "Product",
        "Quantity",
        "Unit Price"
      ],
      correct: "Product"
    },
    {
      question: "Saat membuat request for quotation menggunakan purchase template, manakah yang disalin (copied over)?",
      question_en: "When creating a request for quotation using a purchase template, which of the following is copied over?",
      options: [
        "Product quantity",
        "Product’s unit price",
        "Vendor",
        "All of the above"
      ],
      options_en: [
        "Product quantity",
        "Product’s unit price",
        "Vendor",
        "All of the above"
      ],
      correct: "All of the above"
    },
    {
      question: "Apa perbedaan utama antara Purchase Template dan Blanket Order di Odoo?",
      question_en: "What is the main difference between a Purchase Template and a Blanket Order in Odoo?",
      options: [
        "Purchase templates are used to create one RFQ, while blanket orders can create multiple RFQs",
        "Quantities are copied over from a purchase template, but set to zero in a blanket order",
        "Blanket orders automatically generate RFQs, while purchase templates do not",
        "Purchase templates require a vendor, while blanket orders do not"
      ],
      options_en: [
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
      question_en: "What is the main benefit of using Odoo's Electronic Data Interchange (EDI) feature?",
      options: [
        "It reduces the number of required user licenses.",
        "It adds an additional quality check point.",
        "It allows structured exchange of documents between databases, reducing errors.",
        "It eliminates the need for inventory management."
      ],
      options_en: [
        "It reduces the number of required user licenses.",
        "It adds an additional quality check point.",
        "It allows structured exchange of documents between databases, reducing errors.",
        "It eliminates the need for inventory management."
      ],
      correct: "It allows structured exchange of documents between databases, reducing errors."
    },
    {
      question: "Apa yang terjadi setelah file XML Purchase Order diunggah ke aplikasi Sales Odoo penjual?",
      question_en: "What happens after the Purchase Order XML file is uploaded to the seller's Odoo Sales app?",
      options: [
        "A draft invoice is created.",
        "A Sales Order is automatically generated with all the order details.",
        "A delivery order is automatically confirmed.",
        "The Purchase Order is sent back for approval."
      ],
      options_en: [
        "A draft invoice is created.",
        "A Sales Order is automatically generated with all the order details.",
        "A delivery order is automatically confirmed.",
        "The Purchase Order is sent back for approval."
      ],
      correct: "A Sales Order is automatically generated with all the order details."
    },
    {
      question: "Di mana di Sales Order file XML asli terlihat setelah impor?",
      question_en: "Where in the Sales Order is the original XML file visible after import?",
      options: [
        "In the Vendor Bill.",
        "In the PDF preview.",
        "In the customer’s contact record.",
        "In the Chatter section."
      ],
      options_en: [
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
      question_en: "What is the benefit of the Kanban view?",
      options: [
        "It allows a clear overview of all the active project tasks",
        "It allows to add and edit tasks without opening each individual record",
        "It allows to drag and drop tasks to update their stage",
        "All of the above"
      ],
      options_en: [
        "It allows a clear overview of all the active project tasks",
        "It allows to add and edit tasks without opening each individual record",
        "It allows to drag and drop tasks to update their stage",
        "All of the above"
      ],
      correct: "All of the above"
    },
    {
      question: "Manakah kalimat berikut yang SALAH (false)?",
      question_en: "Which of the following statements is FALSE?",
      options: [
        "Kanban stage is used to keep track of the task’s progress by dragging and dropping into different columns",
        "Task statuses can be used to close a task as well as to mark it as approved",
        "Kanban stages and task statuses are the same feature",
        "It’s possible to create custom Kanban stages"
      ],
      options_en: [
        "Kanban stage is used to keep track of the task’s progress by dragging and dropping into different columns",
        "Task statuses can be used to close a task as well as to mark it as approved",
        "Kanban stages and task statuses are the same feature",
        "It’s possible to create custom Kanban stages"
      ],
      correct: "Kanban stages and task statuses are the same feature"
    },
    {
      question: "Apa dampak dari memperbarui status tugas menjadi 'changes requested'?",
      question_en: "What is the impact of updating a task status to 'changes requested'?",
      options: [
        "The task is automatically moved to the previous Kanban stage",
        "Followers of the task are notified that changes have been requested",
        "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage",
        "All of the above"
      ],
      options_en: [
        "The task is automatically moved to the previous Kanban stage",
        "Followers of the task are notified that changes have been requested",
        "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage",
        "All of the above"
      ],
      correct: "A yellow status dot shows on the task to signify that the task needs additional work before moving to the next stage"
    },
    {
      question: "Bagaimana cara menutup (close) sebuah task?",
      question_en: "How do you close a task?",
      options: [
        "By changing its status to “Done” or “Canceled”",
        "By moving it to the “Completed” Kanban stage",
        "By dragging and dropping it into the trash",
        "By creating a “Closure” activity"
      ],
      options_en: [
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
      question_en: "To enable Project Stages in your Kanban view, what must you do?",
      options: [
        "Do nothing, project stages are visible by default.",
        "Go into Project → Configuration → Settings and activate Project Stages.",
        "Go into each project’s settings to activate project stages.",
        "None of the above"
      ],
      options_en: [
        "Do nothing, project stages are visible by default.",
        "Go into Project → Configuration → Settings and activate Project Stages.",
        "Go into each project’s settings to activate project stages.",
        "None of the above"
      ],
      correct: "Go into Project → Configuration → Settings and activate Project Stages."
    },
    {
      question: "Memindahkan project ke stage Kanban yang berbeda akan mempengaruhi statusnya (affects its status).",
      question_en: "Moving a project to a different Kanban stage affects its status.",
      options: [
        "True.",
        "False."
      ],
      options_en: [
        "True.",
        "False."
      ],
      correct: "False."
    },
    {
      question: "Apa yang diindikasikan oleh bar berwarna di bagian atas setiap stage Kanban?",
      question_en: "What does the colored bar at the top of each Kanban stage indicate?",
      options: [
        "The number of projects with each status in this Kanban stage.",
        "The number of allocated hours for each project in this Kanban stage.",
        "The number of projects with each tag in this Kanban stage.",
        "The number of users assigned to this Kanban stage."
      ],
      options_en: [
        "The number of projects with each status in this Kanban stage.",
        "The number of allocated hours for each project in this Kanban stage.",
        "The number of projects with each tag in this Kanban stage.",
        "The number of users assigned to this Kanban stage."
      ],
      correct: "The number of projects with each status in this Kanban stage."
    },
    {
      question: "Klik ikon titik tiga vertikal di sebelah project, lalu buka Dashboard. Tekan New untuk membuat Project Update baru. Bagaimana Project Update baru mempengaruhi state project Anda?",
      question_en: "Click the vertical three-dot icon next to a project, then open the Dashboard. Press New to create a new Project Update. How does the new Project Update affect your project state?",
      options: [
        "The project’s state gets updated to the same state as given in the last Project Update.",
        "The project’s state is an average of the states given in all previous Project Updates.",
        "The project’s state is calculated based on the progress percentage in the last Project Update.",
        "It does not affect the project's state."
      ],
      options_en: [
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
      question_en: "When creating a new project, is filling in the Customer field mandatory?",
      options: [
        "Yes, projects are always related to a customer.",
        "Yes, as well as the project name.",
        "No, some projects can be internal and unrelated to a customer.",
        "No, customers can only be added in the setting form of a project after its creation."
      ],
      options_en: [
        "Yes, projects are always related to a customer.",
        "Yes, as well as the project name.",
        "No, some projects can be internal and unrelated to a customer.",
        "No, customers can only be added in the setting form of a project after its creation."
      ],
      correct: "No, some projects can be internal and unrelated to a customer."
    },
    {
      question: "Di mana Anda dapat mengubah nama project?",
      question_en: "Where can you change the project name?",
      options: [
        "You cannot change the name of the project once it’s created.",
        "In the settings form of the project.",
        "In the projects Kanban view.",
        "Both in the Kanban view and the edit form of the project."
      ],
      options_en: [
        "You cannot change the name of the project once it’s created.",
        "In the settings form of the project.",
        "In the projects Kanban view.",
        "Both in the Kanban view and the edit form of the project."
      ],
      correct: "In the settings form of the project."
    },
    {
      question: "Kembali ke projects kanban view. Manakah elemen yang TIDAK muncul pada kartu project?",
      question_en: "Back to the projects Kanban view. Which element does NOT appear on the project card?",
      options: [
        "The Due Dates.",
        "The Tags.",
        "The assigned Project Manager.",
        "The Project Description."
      ],
      options_en: [
        "The Due Dates.",
        "The Tags.",
        "The assigned Project Manager.",
        "The Project Description."
      ],
      correct: "The Project Description."
    },
    {
      question: "Elemen apa yang dapat Anda tambahkan untuk membedakan project?",
      question_en: "What elements can you add to distinguish projects?",
      options: [
        "Tags, colors, or/and set them as favorites.",
        "Tags or colors, but you cannot combine both elements.",
        "Nothing, all project cards look identical.",
        "A cover image."
      ],
      options_en: [
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
      question_en: "How to display the top bar?",
      options: [
        "Go to Project → Settings→ Top bar.",
        "The top bar is displayed by default.",
        "Click the \"sliders\" button near the top right corner of the page."
      ],
      options_en: [
        "Go to Project → Settings→ Top bar.",
        "The top bar is displayed by default.",
        "Click the \"sliders\" button near the top right corner of the page."
      ],
      correct: "Click the \"sliders\" button near the top right corner of the page."
    },
    {
      question: "Untuk mengkustomisasi top bar, Anda harus:",
      question_en: "To customize the top bar, you must:",
      options: [
        "Click the \"sliders\" button on top of the search bar.",
        "Click the \"sliders\" button near the top right corner of the page.",
        "Click the \"bars\" button near the top right corner of the page."
      ],
      options_en: [
        "Click the \"sliders\" button on top of the search bar.",
        "Click the \"sliders\" button near the top right corner of the page.",
        "Click the \"bars\" button near the top right corner of the page."
      ],
      correct: "Click the \"sliders\" button on top of the search bar."
    },
    {
      question: "Apa yang TIDAK DAPAT ditambahkan ke top bar?",
      question_en: "What CANNOT be added to the top bar?",
      options: [
        "Stock moves.",
        "Bills of materials.",
        "Dashboard.",
        "CRM."
      ],
      options_en: [
        "Stock moves.",
        "Bills of materials.",
        "Dashboard.",
        "CRM."
      ],
      correct: "CRM."
    },
    {
      question: "Bagaimana cara membuat custom top bar views?",
      question_en: "How to create custom top bar views?",
      options: [
        "It can be done through the Studio app.",
        "Click a top bar button, customize the view with keywords, filters, and grouping options using the search bar, and click Save View.",
        "It’s not possible to create custom top bar views."
      ],
      options_en: [
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
      question_en: "Which of the following statements is true?",
      options: [
        "You can have one email alias per each project",
        "You can have one email alias for all of your projects",
        "You can have multiple email aliases for one project",
        "All statements are correct"
      ],
      options_en: [
        "You can have one email alias per each project",
        "You can have one email alias for all of your projects",
        "You can have multiple email aliases for one project",
        "All statements are correct"
      ],
      correct: "You can have one email alias per each project"
    },
    {
      question: "Mengonfigurasi email template pada Kanban stage berarti:",
      question_en: "Configuring an email template on a Kanban stage means:",
      options: [
        "An email based on the template will be sent to the customer as soon as a task is moved out from this stage into the next one",
        "An email based on the template will be sent to the customer as soon as a task is moved into this stage",
        "An email based on the template will be sent to the customer when the task is completed",
        "An email based on the template will be sent to the customer on every update of the task"
      ],
      options_en: [
        "An email based on the template will be sent to the customer as soon as a task is moved out from this stage into the next one",
        "An email based on the template will be sent to the customer as soon as a task is moved into this stage",
        "An email based on the template will be sent to the customer when the task is completed",
        "An email based on the template will be sent to the customer on every update of the task"
      ],
      correct: "An email based on the template will be sent to the customer as soon as a task is moved into this stage"
    },
    {
      question: "Task yang dibuat dari website form dibuat di:",
      question_en: "Tasks created from a website form are created in:",
      options: [
        "In the dispatch tab of the project app, where they can be assigned to the correct project",
        "In the “Website” project, which is created automatically once the Website app is installed",
        "In the project that was selected when configuring the project form in the website editor",
        "Each website form creates a new project with one task in it"
      ],
      options_en: [
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
      question_en: "Projects linked to sales orders are:",
      options: [
        "Billable",
        "Invoicable",
        "Accountable",
        "Payable"
      ],
      options_en: [
        "Billable",
        "Invoicable",
        "Accountable",
        "Payable"
      ],
      correct: "Billable"
    },
    {
      question: "Sebuah project dan/atau task otomatis dibuat segera setelah Sales Order:",
      question_en: "A project and/or task is automatically created as soon as the Sales Order is:",
      options: [
        "In draft",
        "Confirmed",
        "Invoiced",
        "Projects and tasks cannot be created from a Sales Order"
      ],
      options_en: [
        "In draft",
        "Confirmed",
        "Invoiced",
        "Projects and tasks cannot be created from a Sales Order"
      ],
      correct: "Confirmed"
    },
    {
      question: "Bagaimana cara memastikan bahwa project baru dengan *multiple tasks* otomatis dibuat setelah service terjual?",
      question_en: "How to ensure that a new project with *multiple tasks* is automatically created after a service is sold?",
      options: [
        "The service needs to be configured to Create on Order: Project and Task",
        "The product needs to be configured as a service",
        "The service needs to be configured to Create on Order: Project",
        "The service needs to have a Project Template with multiple tasks linked to it"
      ],
      options_en: [
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
      question_en: "How to view the status of subtasks on the Kanban card of the parent task?",
      options: [
        "Subtasks are indicated with the green check-mark symbol.",
        "Click on three vertical dots on the task, then select Subtasks.",
        "It’s not possible, you have to go into the task and then to the Subtasks tab.",
        "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3)."
      ],
      options_en: [
        "Subtasks are indicated with the green check-mark symbol.",
        "Click on three vertical dots on the task, then select Subtasks.",
        "It’s not possible, you have to go into the task and then to the Subtasks tab.",
        "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3)."
      ],
      correct: "Subtasks and their completion status are indicated on the task card in x/x format (e.g. 1/3)."
    },
    {
      question: "Apakah mungkin membuat subtasks di dalam subtasks?",
      question_en: "Is it possible to create subtasks within subtasks?",
      options: [
        "Yes.",
        "No.",
        "It's possible, but only for starred tasks."
      ],
      options_en: [
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
      question_en: "Task dependencies allow you to:",
      options: [
        "Set priorities among projects to ensure they are done in the order you want.",
        "Set priorities among project's tasks to ensure they are done in the order you want.",
        "Prioritize the tasks that are late on schedule.",
        "Prioritize tasks whose milestones have not been reached yet."
      ],
      options_en: [
        "Set priorities among projects to ensure they are done in the order you want.",
        "Set priorities among project's tasks to ensure they are done in the order you want.",
        "Prioritize the tasks that are late on schedule.",
        "Prioritize tasks whose milestones have not been reached yet."
      ],
      correct: "Set priorities among project's tasks to ensure they are done in the order you want."
    },
    {
      question: "Bagaimana Anda mengaktifkan task dependencies di level database global?",
      question_en: "How do you enable task dependencies at the global database level?",
      options: [
        "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies.",
        "Go to Project ‣ General Settings ‣ Tasks, and enable Task Dependencies",
        "There is nothing to do, task dependencies are activated by default."
      ],
      options_en: [
        "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies.",
        "Go to Project ‣ General Settings ‣ Tasks, and enable Task Dependencies",
        "There is nothing to do, task dependencies are activated by default."
      ],
      correct: "Go to Project ‣ Configuration ‣ Settings, and enable Task Dependencies."
    },
    {
      question: "Selain task form, di view apa Anda bisa mengatur dan mengelola task dependencies?",
      question_en: "Besides the task form, in which view can you set and manage task dependencies?",
      options: [
        "Kanban",
        "List",
        "Gantt"
      ],
      options_en: [
        "Kanban",
        "List",
        "Gantt"
      ],
      correct: "Gantt"
    },
    {
      question: "Gunakan ikon di pjok kanan atas untuk beralih ke Gantt view. Bagaimana cara membuat task dependencies di sana?",
      question_en: "Use the icon in the top right corner to switch to Gantt view. How do you create task dependencies there?",
      options: [
        "It’s not possible.",
        "By dragging and dropping one task onto another.",
        "By stretching the task across multiple fields.",
        "By hovering over a task, then using arrows to draw dependencies with another task."
      ],
      options_en: [
        "It’s not possible.",
        "By dragging and dropping one task onto another.",
        "By stretching the task across multiple fields.",
        "By hovering over a task, then using arrows to draw dependencies with another task."
      ],
      correct: "By hovering over a task, then using arrows to draw dependencies with another task."
    },
    {
      question: "Bagaimana cara mengatur dependency dari task form?",
      question_en: "How do you set a dependency from the task form?",
      options: [
        "Go into Sub-tasks tab ‣ Add a line ‣ add a task.",
        "Go into Blocked By ‣ Add a line, and select a task or create a new one.",
        "Select three stars next to Priority to give this task the highest priority.",
        "Set a deadline earlier than the task you would like to block."
      ],
      options_en: [
        "Go into Sub-tasks tab ‣ Add a line ‣ add a task.",
        "Go into Blocked By ‣ Add a line, and select a task or create a new one.",
        "Select three stars next to Priority to give this task the highest priority.",
        "Set a deadline earlier than the task you would like to block."
      ],
      correct: "Go into Blocked By ‣ Add a line, and select a task or create a new one."
    },
    {
      question: "Bagaimana Anda bisa tahu bahwa sebuah task diblokir oleh task lain saat di Kanban view?",
      question_en: "How can you tell that a task is blocked by another task while in Kanban view?",
      options: [
        "By the blue hourglass icon and the corresponding color in the Kanban status bar.",
        "The number of completed vs unfinished blocking tasks is indicated on the Kanban card in 1/3 format.",
        "Blocked tasks are color-coded in red.",
        "Blocked tasks are not displayed in the Kanban view until the previous task in sequence is completed."
      ],
      options_en: [
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
      question_en: "What must you do to use the Recurring Tasks feature?",
      options: [
        "Nothing, it’s activated by default.",
        "You need to activate it by going into configuration, then settings of your Project app.",
        "You need to activate it in the settings of each project where you want to use it."
      ],
      options_en: [
        "Nothing, it’s activated by default.",
        "You need to activate it by going into configuration, then settings of your Project app.",
        "You need to activate it in the settings of each project where you want to use it."
      ],
      correct: "You need to activate it in the settings of each project where you want to use it."
    },
    {
      question: "Bagaimana cara menghentikan pengulangan (recurrence) sebuah task?",
      question_en: "How do you stop a task from recurring?",
      options: [
        "You just need to cancel the task.",
        "You need to deactivate the recurrence by clicking the recurrence button in the task.",
        "You can’t stop a recurrence after it is configured."
      ],
      options_en: [
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
      question_en: "The Visibility option impacts:",
      options: [
        "Impact which part of your project an employee can see",
        "Impact which part of your project an employee can edit",
        "Impact which part of your project an employee can edit and see",
        "Make your secret crush notice you"
      ],
      options_en: [
        "Impact which part of your project an employee can see",
        "Impact which part of your project an employee can edit",
        "Impact which part of your project an employee can edit and see",
        "Make your secret crush notice you"
      ],
      correct: "Impact which part of your project an employee can edit and see"
    },
    {
      question: "Apa yang bisa diakses oleh invited portal users (klien)?",
      question_en: "What can invited portal users (clients) access?",
      options: [
        "Read-only version of the project",
        "Editable version of the project",
        "Either of those options is possible"
      ],
      options_en: [
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
      question_en: "Where do you configure (stage-based) automation?",
      options: [
        "In the settings of the Project application",
        "In your project’s settings",
        "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name",
        "In your project’s Kanban view, you have to click the automations button in the , top right corner"
      ],
      options_en: [
        "In the settings of the Project application",
        "In your project’s settings",
        "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name",
        "In your project’s Kanban view, you have to click the automations button in the , top right corner"
      ],
      correct: "In your project’s Kanban view, you have to click the gear icon next to the Kanban stage name"
    },
    {
      question: "Apa yang terjadi jika Anda mengotomatisasi 'Call' saat task mencapai stage tertentu?",
      question_en: "What happens if you automate a 'Call' when a task reaches a certain stage?",
      options: [
        "It automatically calls the person you selected",
        "The person you selected’s phone automatically calls you",
        "It automatically schedules a Call activity in the task’s chatter",
        "AI will instantly call all followers of this task"
      ],
      options_en: [
        "It automatically calls the person you selected",
        "The person you selected’s phone automatically calls you",
        "It automatically schedules a Call activity in the task’s chatter",
        "AI will instantly call all followers of this task"
      ],
      correct: "It automatically schedules a Call activity in the task’s chatter"
    },
    {
      question: "Apa yang dimaksud dengan 'trigger' dalam Automations?",
      question_en: "What is meant by 'trigger' in Automations?",
      options: [
        "The action that automatically launches another action",
        "The action that is automatically launched by another action",
        "The whole automated sequence of actions",
        "The gear icon you click to access Automations"
      ],
      options_en: [
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
      question_en: "How do you link a task to a milestone?",
      options: [
        "Drag and drop the task into the milestone’s column.",
        "Fill in the “Milestone” field on the task form.",
        "Schedule a “Reach milestone” activity from the task’s chatter.",
        "You link projects to milestones, not tasks."
      ],
      options_en: [
        "Drag and drop the task into the milestone’s column.",
        "Fill in the “Milestone” field on the task form.",
        "Schedule a “Reach milestone” activity from the task’s chatter.",
        "You link projects to milestones, not tasks."
      ],
      correct: "Fill in the “Milestone” field on the task form."
    },
    {
      question: "Apa yang terjadi di project dashboard saat semua task yang terhubung ke milestone selesai?",
      question_en: "What happens on the project dashboard when all tasks linked to a milestone are completed?",
      options: [
        "Milestone is listed in green to signal that it may be marked as reached.",
        "Milestone is automatically marked as reached.",
        "If invoicing by milestones is enabled, you can invoice the customer.",
        "The following milestone needs to be created."
      ],
      options_en: [
        "Milestone is listed in green to signal that it may be marked as reached.",
        "Milestone is automatically marked as reached.",
        "If invoicing by milestones is enabled, you can invoice the customer.",
        "The following milestone needs to be created."
      ],
      correct: "Milestone is listed in green to signal that it may be marked as reached."
    },
    {
      question: "Milestones bersifat project-specific.",
      question_en: "Milestones are project-specific.",
      options: [
        "True.",
        "False."
      ],
      options_en: [
        "True.",
        "False."
      ],
      correct: "True."
    },
    {
      question: "Apa yang harus dilakukan untuk menagih (invoice) klien berdasarkan milestone?",
      question_en: "What must be done to invoice a client based on milestones?",
      options: [
        "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then manually update the delivered quantity after a milestone has been reached.",
        "Create a sales order for a service with the invoicing policy set to “Based on Milestones,” then mark the milestones in the corresponding project as reached.",
        "Create a sales order for a service with the invoicing policy set to “Based on Delivered Quantity,” then use the smart button to link project milestones to the sales order."
      ],
      options_en: [
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
      question_en: "By default, if you start the timer and stop it after 3 minutes, what is logged?",
      options: [
        "It is logging three minutes.",
        "It is logging five minutes.",
        "It is logging fifteen minutes."
      ],
      options_en: [
        "It is logging three minutes.",
        "It is logging five minutes.",
        "It is logging fifteen minutes."
      ],
      correct: "It is logging fifteen minutes."
    },
    {
      question: "Apa arti warna MERAH pada total jam di bawah kolom timesheet hari itu?",
      question_en: "What does the RED color on the total hours under the timesheet column for that day mean?",
      options: [
        "You have logged more time than your contractual working hours.",
        "You have logged less time than your contractual working hours.",
        "You haven’t logged anything yet for that day."
      ],
      options_en: [
        "You have logged more time than your contractual working hours.",
        "You have logged less time than your contractual working hours.",
        "You haven’t logged anything yet for that day."
      ],
      correct: "You have logged less time than your contractual working hours."
    },
    {
      question: "Bagaimana cara memvalidasi timesheet tertentu?",
      question_en: "How do you validate specific timesheets?",
      options: [
        "Go to the Grid view, select the timesheet entries, and click Validate.",
        "Go to the List view, select the timesheet entries, and click Validate.",
        "Go to the Kanban view, select the timesheet entries, and click Validate.",
        "It’s not possible. Timesheets can only be validated altogether."
      ],
      options_en: [
        "Go to the Grid view, select the timesheet entries, and click Validate.",
        "Go to the List view, select the timesheet entries, and click Validate.",
        "Go to the Kanban view, select the timesheet entries, and click Validate.",
        "It’s not possible. Timesheets can only be validated altogether."
      ],
      correct: "Go to the List view, select the timesheet entries, and click Validate."
    },
    {
      question: "Keyboard shortcut untuk start/stop timer pada Timesheet Grid View (Enterprise)?",
      question_en: "What is the keyboard shortcut to start/stop the timer in Timesheet Grid View (Enterprise)?",
      options: [
        "Press Shift+S to start the timer, and press Shift+S to stop it.",
        "Press 1 to start the timer, and press 0 to stop it.",
        "Press the letter on the left of a timesheet to start the timer, and press it once more to stop it."
      ],
      options_en: [
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
      question_en: "What type of timesheet reminder emails can be sent?",
      options: [
        "A reminder email for employees to submit their timesheets.",
        "A reminder email for approvers to validate their team’s timesheets.",
        "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets."
      ],
      options_en: [
        "A reminder email for employees to submit their timesheets.",
        "A reminder email for approvers to validate their team’s timesheets.",
        "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets."
      ],
      correct: "Both a reminder email for employees to submit their timesheets and a reminder email for approvers to validate their team’s timesheets."
    },
    {
      question: "Di mana Anda mengaktifkan Billing Rate Indicators?",
      question_en: "Where do you enable Billing Rate Indicators?",
      options: [
        "You don't, it’s activated by default.",
        "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators.",
        "Odoo > Timesheets > Reporting > By Employee > Billing Rate Indicators."
      ],
      options_en: [
        "You don't, it’s activated by default.",
        "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators.",
        "Odoo > Timesheets > Reporting > By Employee > Billing Rate Indicators."
      ],
      correct: "Odoo > Timesheets > Configuration > Settings > Billing Rate Indicators."
    },
    {
      question: "Apa syarat untuk mengaktifkan Leaderboard?",
      question_en: "What is the requirement to enable the Leaderboard?",
      options: [
        "The encoding method should be set to days/half-days.",
        "Billing rate indicators need to be activated first.",
        "Timesheet reminder emails need to be activated first."
      ],
      options_en: [
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
      question_en: "You are billing a Fixed Price for a 20-hour service pack, but only worked 16 hours. What do you do?",
      options: [
        "Issue a credit note for the remaining 4 hours.",
        "Update the sales order line to 16 hours.",
        "Update the delivered quantity to 16 hours.",
        "Nothing, the fixed price is not impacted by the time spent on the task."
      ],
      options_en: [
        "Issue a credit note for the remaining 4 hours.",
        "Update the sales order line to 16 hours.",
        "Update the delivered quantity to 16 hours.",
        "Nothing, the fixed price is not impacted by the time spent on the task."
      ],
      correct: "Nothing, the fixed price is not impacted by the time spent on the task."
    },
    {
      question: "Anda menagih berdasarkan timesheets (10 jam), tapi baru 7 jam tervalidasi. Bisakah menagih?",
      question_en: "You bill based on timesheets (10 hours), but only 7 hours are validated. Can you invoice?",
      options: [
        "No, you must validate all 10 hours of timesheets before invoicing.",
        "Yes, you can invoice 10 hours even if the timesheets are not validated.",
        "It depends on your DB configuration."
      ],
      options_en: [
        "No, you must validate all 10 hours of timesheets before invoicing.",
        "Yes, you can invoice 10 hours even if the timesheets are not validated.",
        "It depends on your DB configuration."
      ],
      correct: "It depends on your DB configuration."
    },
    {
      question: "Apa artinya jika sales order line berwarna BIRU?",
      question_en: "What does it mean if a sales order line is BLUE?",
      options: [
        "It means that there are missing hours to invoice.",
        "It means that the sales order line is ready to be invoiced.",
        "It means that all the timesheets linked to the line have been validated."
      ],
      options_en: [
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
      question_en: "Can you access the Project Dashboard from the project's Top Bar?",
      options: [
        "Yes, if you have the Dashboard app installed.",
        "Yes, you can add it to the top bar, like other record types.",
        "No, you need to go through the project’s settings."
      ],
      options_en: [
        "Yes, if you have the Dashboard app installed.",
        "Yes, you can add it to the top bar, like other record types.",
        "No, you need to go through the project’s settings."
      ],
      correct: "Yes, you can add it to the top bar, like other record types."
    },
    {
      question: "Mungkinkah menandai milestone sebagai 'Reached' langsung dari project dashboard?",
      question_en: "Is it possible to mark a milestone as 'Reached' directly from the project dashboard?",
      options: [
        "Yes, but only non-billable milestones.",
        "Yes, you simply check the milestone to mark it as reached.",
        "It’s not possible."
      ],
      options_en: [
        "Yes, but only non-billable milestones.",
        "Yes, you simply check the milestone to mark it as reached.",
        "It’s not possible."
      ],
      correct: "Yes, you simply check the milestone to mark it as reached."
    },
    {
      question: "Record apa saja yang ditampilkan di total project dashboard?",
      question_en: "What records are displayed on the total project dashboard?",
      options: [
        "Tasks, Timesheets, Planned, Documents, Sales Order Items, Burndown Chart, Vendor Bills.",
        "Tasks, Timesheets, Documents, Sales Order Items, Burndown Chart, Vendor Bills, Manufacturing Orders.",
        "It depends on your database and project configuration."
      ],
      options_en: [
        "Tasks, Timesheets, Planned, Documents, Sales Order Items, Burndown Chart, Vendor Bills.",
        "Tasks, Timesheets, Documents, Sales Order Items, Burndown Chart, Vendor Bills, Manufacturing Orders.",
        "It depends on your database and project configuration."
      ],
      correct: "It depends on your database and project configuration."
    },
    {
      question: "Apa cara terbaik mengambil data dashboard untuk referensi masa depan (snapshot)?",
      question_en: "What is the best way to capture dashboard data for future reference (snapshot)?",
      options: [
        "Create a new project update, then add a Snapshot tab.",
        "Add the project dashboard to your Dashboard app.",
        "Clicking \"New\" to crate a new project update automatically captures data from the project dashboard at this point in time.",
        "Adding a custom view of the project’s dashboard to the project’s top bar automatically captures data from the project dashboard at this point in time."
      ],
      options_en: [
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
      question_en: "What is the relationship between the project Top Bar and the Profitability dashboard?",
      options: [
        "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard.",
        "Records created using the top bar are excluded from the profitability dashboard.",
        "Records created using the top bar take into account the employee’s hourly cost."
      ],
      options_en: [
        "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard.",
        "Records created using the top bar are excluded from the profitability dashboard.",
        "Records created using the top bar take into account the employee’s hourly cost."
      ],
      correct: "Records created using the top bar are automatically linked to the project’s analytic account and therefore displayed on the dashboard."
    },
    {
      question: "Di mana Hourly Cost karyawan ditentukan?",
      question_en: "Where is the employee's Hourly Cost defined?",
      options: [
        "In the Work Information tab of the employee form.",
        "In the Settings tab of the employee form.",
        "In the Timesheets app configuration."
      ],
      options_en: [
        "In the Work Information tab of the employee form.",
        "In the Settings tab of the employee form.",
        "In the Timesheets app configuration."
      ],
      correct: "In the Settings tab of the employee form."
    },
    {
      question: "Down payments ditampilkan di bagian costs (biaya) dashboard.",
      question_en: "Down payments are displayed in the costs section of the dashboard.",
      options: [
        "Correct.",
        "Incorrect.",
        "Down payments are displayed in the invoicing dashboard, not profitability."
      ],
      options_en: [
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
      question_en: "What is the first thing you must do to use Customer Ratings?",
      options: [
        "Nothing, it’s enabled by default",
        "You have to enable it: General Settings > Customer Ratings",
        "You have to enable it: CRM > Configuration > Settings > Customer Ratings",
        "You have to enable it: Project > Configuration > Settings > Customer Ratings"
      ],
      options_en: [
        "Nothing, it’s enabled by default",
        "You have to enable it: General Settings > Customer Ratings",
        "You have to enable it: CRM > Configuration > Settings > Customer Ratings",
        "You have to enable it: Project > Configuration > Settings > Customer Ratings"
      ],
      correct: "You have to enable it: Project > Configuration > Settings > Customer Ratings"
    },
    {
      question: "Apa tindakan yang otomatis mengirim email rating?",
      question_en: "What action automatically sends a rating email?",
      options: [
        "When a task moves to the status you selected",
        "When a task moves to the stage you selected",
        "When a task moves to the Finished stage",
        "When a task moves to the Done status"
      ],
      options_en: [
        "When a task moves to the status you selected",
        "When a task moves to the stage you selected",
        "When a task moves to the Finished stage",
        "When a task moves to the Done status"
      ],
      correct: "When a task moves to the stage you selected"
    },
    {
      question: "Di Kanban view, apa arti angka di sebelah smiley?",
      question_en: "In Kanban view, what does the number next to the smiley mean?",
      options: [
        "It’s the average satisfaction rate based on completed client surveys",
        "The number on the left shows the number of surveys sent, and the one on the right shows the number of surveys completed over the last period",
        "The number on the left shows the number of surveys completed, and the one on the right shows the number of surveys sent over the last period"
      ],
      options_en: [
        "It’s the average satisfaction rate based on completed client surveys",
        "The number on the left shows the number of surveys sent, and the one on the right shows the number of surveys completed over the last period",
        "The number on the left shows the number of surveys completed, and the one on the right shows the number of surveys sent over the last period"
      ],
      correct: "It’s the average satisfaction rate based on completed client surveys"
    }
  ],
  /* =====================================================
     ACCOUNTING MATERI 1 — DASHBOARD & ONBOARDING
     ===================================================== */
  accounting_materi1: [
    {
      question: "Apa kegunaan lokalisasi fiskal?",
      question_en: "What do fiscal localizations do?",
      options: [
        "Mereka memungkinkan Anda memetakan pajak dan akun berdasarkan pelanggan atau vendor.",
        "Mereka memastikan database Anda memenuhi semua persyaratan dan norma akuntansi negara Anda.",
        "Mereka membuat entri jurnal untuk memasukkan harga bea cukai dan biaya ke dalam harga pokok produk.",
        "Mereka secara otomatis merekonsiliasi transaksi bank Anda dengan faktur atau tagihan yang sesuai."
      ],
      options_en: [
        "They allow you to map taxes and accounts based on the customer or vendor.",
        "They ensure that your database meets all of your country’s accounting requirements and norms.",
        "They create journal entries to incorporate the price of customs duties and fees into the cost of products.",
        "They automatically reconcile your bank transactions with the appropriate invoice or bill."
      ],
      correct: "Mereka memastikan database Anda memenuhi semua persyaratan dan norma akuntansi negara Anda."
    },
    {
      question: "Apa artinya jika sebuah entri jurnal seimbang (balanced)?",
      question_en: "What does it mean for a journal entry to be balanced?",
      options: [
        "Memiliki jumlah baris debit dan kredit yang sama.",
        "Memiliki jumlah total debit dan kredit yang sama.",
        "Muncul baik di jurnal faktur pelanggan maupun jurnal tagihan vendor.",
        "Entri jurnal tidak bisa seimbang."
      ],
      options_en: [
        "It has the same number of debit lines and credit lines.",
        "It has the same amount of debits and credits.",
        "It appears in both a customer invoice journal and a vendor bills journal.",
        "Journal entries cannot be balanced."
      ],
      correct: "Memiliki jumlah total debit dan kredit yang sama."
    },
    {
      question: "Buku besar (General Ledger) adalah",
      question_en: "The general ledger is",
      options: [
        "Daftar semua faktur pelanggan dan tagihan vendor yang belum dibayar.",
        "Daftar akun pendapatan dan beban.",
        "Daftar semua item jurnal yang dikelompokkan berdasarkan entri jurnalnya.",
        "Daftar semua akun beserta debit dan kreditnya."
      ],
      options_en: [
        "A list of all the customer invoices and vendor bills that haven’t been paid.",
        "A list of the income and expense accounts.",
        "A list of all the journal items grouped by their journal entries.",
        "A list of all of the accounts and their debits and credits."
      ],
      correct: "Daftar semua akun beserta debit dan kreditnya."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 2 — CHART OF ACCOUNTS
     ===================================================== */
  accounting_materi2: [
    {
      question: "Berapa banyak Bagan Akun (Chart of Accounts) yang bisa Anda miliki per perusahaan?",
      question_en: "How many Chart of Accounts can you have per company?",
      options: [
        "Satu per perusahaan, dan satu per database.",
        "Sebanyak yang ada di database.",
        "Satu per perusahaan, tetapi bisa banyak per database."
      ],
      options_en: [
        "One per company, and one per database.",
        "As many as there are on the database.",
        "One per company, but multiple per database."
      ],
      correct: "Satu per perusahaan, tetapi bisa banyak per database."
    },
    {
      question: "Apa yang terjadi jika tidak ada mata uang yang diatur pada sebuah akun?",
      question_en: "What happens if no currency is set on an account?",
      options: [
        "Mata uang harus diatur pada sebuah akun.",
        "Akun secara otomatis menggunakan mata uang perusahaan jika tidak ada mata uang yang diatur.",
        "Jika tidak ada mata uang yang diatur, akun dapat digunakan dengan mata uang apa pun."
      ],
      options_en: [
        "A currency must be set on an account.",
        "The account automatically defaults to the company’s currency if no currency is set.",
        "If no currency is set, the account can be used with any currency."
      ],
      correct: "Jika tidak ada mata uang yang diatur, akun dapat digunakan dengan mata uang apa pun."
    },
    {
      question: "Apa tipe akun default yang ditampilkan pertama kali di kolom akun saat membuat faktur?",
      question_en: "What is the default account type shown first in the account field when creating an invoice?",
      options: [
        "Akun Beban dan Aset Tetap",
        "Akun Pendapatan",
        "Akun Pendapatan dan Aset Tetap"
      ],
      options_en: [
        "Expense and Fixed Assets accounts",
        "Income accounts",
        "Income and Fixed Assets accounts"
      ],
      correct: "Akun Pendapatan"
    }
  ],
  /* =====================================================
     ACCOUNTING MATERI 3 — INITIAL BALANCES
     ===================================================== */
  accounting_materi3: [
    {
      question: "Apa yang disarankan untuk akun yang tidak saya butuhkan?",
      question_en: "What is recommended for accounts I do not need?",
      options: [
        "Hapus akun yang tidak dibutuhkan.",
        "Setel sebagai usang (Deprecate) akun yang tidak dibutuhkan.",
        "Arsipkan akun yang tidak dibutuhkan."
      ],
      options_en: [
        "Delete the unneeded accounts.",
        "Deprecate the unneeded accounts.",
        "Archive the unneeded accounts."
      ],
      correct: "Setel sebagai usang (Deprecate) akun yang tidak dibutuhkan."
    },
    {
      question: "Saya tidak membutuhkan akun \"Laba Tahun Berjalan\" (Current Year Earnings). Apa yang bisa saya lakukan?",
      question_en: "I do not need the \"Current Year Earnings\" account. What can I do with it?",
      options: [
        "Akun ini khusus untuk Odoo dan TIDAK BOLEH dimodifikasi sama sekali.",
        "Saya bisa menghapus atau menyetelnya sebagai usang, ini hanya untuk kasus penggunaan tertentu.",
        "Saya bisa memodifikasi dan menyesuaikannya dengan kebutuhan bisnis saya."
      ],
      options_en: [
        "The account is Odoo-specific and should NOT be modified in any way.",
        "I can delete or deprecate it, it is only for specific use-cases.",
        "I can modify and tailor it to my specific business needs."
      ],
      correct: "Akun ini khusus untuk Odoo dan TIDAK BOLEH dimodifikasi sama sekali."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 4 — IMPORT DATA
     ===================================================== */
  accounting_materi4: [
    {
      question: "Akun apa yang harus menggantikan akun bank saat mengimpor jumlah positif (debit)?",
      question_en: "What account should replace the bank account when importing a positive (debit) amount?",
      options: [
        "Akun perantara (suspense account)",
        "Akun pembayaran yang belum lunas (outstanding payments)",
        "Akun penerimaan yang belum lunas (outstanding receipts)",
        "Akun kas"
      ],
      options_en: [
        "The suspense account",
        "The outstanding payments account",
        "The outstanding receipts account",
        "The cash account"
      ],
      correct: "Akun penerimaan yang belum lunas (outstanding receipts)"
    },
    {
      question: "Manakah dari proses berikut yang merupakan cara terbaik untuk mengimpor faktur dan tagihan yang belum lunas (open)?",
      question_en: "Which of the following processes is the best way to import open invoices and bills?",
      options: [
        "Tambahkan setiap faktur atau tagihan sebagai satu baris dalam template impor dengan jumlah sisa yang harus dibayar sebagai total dan impor ke model yang sesuai.",
        "Tambahkan setiap baris dari setiap faktur atau tagihan sebagai baris tersendiri dalam template impor sehingga faktur atau tagihan memiliki semua detail di Odoo dan impor ke model yang sesuai.",
        "Impor faktur dan tagihan langsung dari tampilan buku besar dengan membuka menu tindakan dan mengklik “Import Invoice/Bill”.",
        "Gabungkan menjadi satu lembar, lalu impor melalui Import Wizard di Pengaturan Akuntansi."
      ],
      options_en: [
        "Add each invoice or bill as one line in the import template with the remaining amount to be paid as the total and import to the corresponding model.",
        "Add each line of each invoice or bill as its own line in the import template so that the invoice or bill has all of the details in Odoo and import to the corresponding model.",
        "Import invoices and bills directly from the general ledger view by opening the action menu and clicking “Import Invoice/Bill”.",
        "Combine them into one sheet, then import them through the Import Wizard in the Accounting Settings."
      ],
      correct: "Tambahkan setiap faktur atau tagihan sebagai satu baris dalam template impor dengan jumlah sisa yang harus dibayar sebagai total dan impor ke model yang sesuai."
    },
    {
      question: "Apa tujuan mengganti akun piutang dan hutang di buku besar dengan akun kliring?",
      question_en: "What’s the purpose of replacing the receivable and payable accounts on the general ledger with the clearing account?",
      options: [
        "Tidak mungkin mengimpor ke akun piutang atau hutang.",
        "Dengan mengimpor ke akun kliring, Anda tidak perlu mengimpor faktur atau tagihan yang belum lunas.",
        "Ini memberi Anda entri untuk merekonsiliasi transaksi bank awal.",
        "Ini menghindari duplikasi saldo di akun piutang dan hutang saat mengimpor buku besar dan faktur serta tagihan yang belum lunas."
      ],
      options_en: [
        "It’s impossible to import to receivable or payable accounts.",
        "By importing to the clearing account, you don’t have to import your open invoices or bills.",
        "It gives you an entry to reconcile the opening bank transaction against.",
        "It avoids duplicating the balance in the receivable and payable accounts when importing both the general ledger and the open invoices and bills."
      ],
      correct: "Ini menghindari duplikasi saldo di akun piutang dan hutang saat mengimpor buku besar dan faktur serta tagihan yang belum lunas."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 5 — CUSTOMER INVOICES
     ===================================================== */
  accounting_materi5: [
    {
      question: "Jika Anda membuat faktur untuk Azure Interior dengan 1 produk \"Large Desk\", dan pajak 15%. Apa item jurnal yang dibuat?",
      question_en: "If you create an invoice for Azure Interior with 1 product \"Large Desk\", and a 15% tax. What are the journal items created?",
      options: [
        "2 Baris: Penjualan Produk, Piutang Usaha",
        "2 Baris: Penjualan Produk, Hutang Usaha",
        "3 Baris: Penjualan Produk, Pajak Diterima, Piutang Usaha",
        "2 Baris: Penjualan Produk, Pajak Diterima"
      ],
      options_en: [
        "2 Lines: Product Sales, Account Receivable",
        "2 Lines: Product Sales, Account Payable",
        "3 Lines: Product Sales, Tax Received, Account Receivable",
        "2 Lines: Product Sales, Tax Received"
      ],
      correct: "3 Baris: Penjualan Produk, Pajak Diterima, Piutang Usaha"
    },
    {
      question: "Dalam item jurnal, apa yang mendefinisikan jumlah yang harus dibayar pelanggan kepada Anda?",
      question_en: "In the journal items, what defines the amounts your customer owes you?",
      options: [
        "Debit di Hutang Usaha",
        "Debit di Piutang Usaha",
        "Kredit di Hutang Usaha",
        "Kredit di Piutang Usaha"
      ],
      options_en: [
        "A debit in Account Payable",
        "A debit in Account Receivable",
        "A credit in Account Payable",
        "A credit in Account Receivable"
      ],
      correct: "Debit di Piutang Usaha"
    },
    {
      question: "Di mana Anda dapat menentukan akun pendapatan default yang digunakan pada faktur?",
      question_en: "Where can you define the default income account that is used on an invoice?",
      options: [
        "Pada produk, atau kategori produk, atau jurnal",
        "Pada formulir produk, tetapi tidak pada kategori produk atau jurnal penjualan.",
        "Hanya pada jurnal."
      ],
      options_en: [
        "On the product, or the product category, or the journal",
        "On the product form, but not on the product category or sales journal.",
        "On the journal only."
      ],
      correct: "Pada produk, atau kategori produk, atau jurnal"
    },
    {
      question: "Opsi apa yang dapat Anda tambahkan ke faktur untuk meningkatkan strukturnya?",
      question_en: "What options could you add to an invoice to improve its structure?",
      options: [
        "Warna dan catatan",
        "Warna dan bagian (sections)",
        "Bagian (sections) dan catatan"
      ],
      options_en: [
        "Colors and notes",
        "Colors and sections",
        "Sections and notes"
      ],
      correct: "Bagian (sections) dan catatan"
    },
    {
      question: "Apakah mungkin memilih semua faktur \"Draft\" dan mempostingnya dalam satu tindakan?",
      question_en: "Is it possible to select all \"Draft\" invoices and post them in one action?",
      options: [
        "Ya",
        "Tidak"
      ],
      options_en: [
        "Yes",
        "No"
      ],
      correct: "Ya"
    }
  ],
  /* =====================================================
     ACCOUNTING MATERI 6 — INVOICING FROM SALES
     ===================================================== */
  accounting_materi6: [
    {
      question: "Baris pesanan penjualan (SO line) berwarna biru, dan lainnya hitam. Apa artinya?",
      question_en: "In the Sales app, open S00007 from Gemini Furniture. You can see that the Quantity, Delivered, and Invoiced values of some sales order lines are blue and others are black. Why is that?",
      options: [
        "Baris biru berarti baris pesanan penjualan ini dapat ditagih (invoiceable).",
        "Baris hitam berarti produk ini dapat ditagih.",
        "Baris biru berarti produk telah dikirim.",
        "Baris biru berarti produk telah ditagih."
      ],
      options_en: [
        "A blue line means that this sales order line is invoiceable.",
        "A black line means that this product is invoiceable.",
        "A blue line means that the product has been delivered.",
        "A blue line means that the products have already been invoiced."
      ],
      correct: "Baris biru berarti baris pesanan penjualan ini dapat ditagih (invoiceable)."
    },
    {
      question: "Bagaimana cara membuat satu faktur untuk beberapa pesanan penjualan milik pelanggan yang sama?",
      question_en: "In Odoo, how can you create one invoice for multiple sales orders belonging to the same customer and invoicing address?",
      options: [
        "Dari form view penjualan, klik Create Invoice, lalu pilih pesanan lain.",
        "Dari list view penjualan, pilih beberapa SO, klik Actions > Create invoice(s), centang Consolidated Billing, dan klik Create Draft.",
        "Dari list view faktur, klik New, atur Type ke Batch, dan pilih SO.",
        "Tidak bisa, satu SO harus satu faktur."
      ],
      options_en: [
        "From the sales order form view, click Create Invoice, then click Include additional invoices and select the appropriate sales orders to invoice.",
        "From the sales order list view, select multiple sales orders, click Actions > Create invoice(s), check Consolidated Billing, and click Create Draft.",
        "From the invoice list view, click New, then set the Type field to Batch, and select the appropriate sales orders to invoice.",
        "Multiple sales orders cannot have one invoice in Odoo."
      ],
      correct: "Dari list view penjualan, pilih beberapa SO, klik Actions > Create invoice(s), centang Consolidated Billing, dan klik Create Draft."
    },
    {
      question: "Mana yang menyebabkan error Invalid Operation saat membuat faktur dari SO?",
      question_en: "Which of the following workflows will cause an Invalid Operation error when creating an invoice from a sales order?",
      options: [
        "Membuat faktur reguler ketika tidak ada baris pesanan yang dapat ditagih (invoiceable).",
        "Membuat faktur uang muka persentase di atas 100%.",
        "Membuat faktur uang muka fixed amount lebih besar dari sisa tagihan.",
        "Membuat faktur (invoice) reguler ketika tidak ada baris pesanan yang dapat ditagihkan."
      ],
      options_en: [
        "Creating a regular invoice when not all order lines are invoiceable.",
        "Creating a down payment (percentage) invoice with a percentage over 100%.",
        "Creating a down payment (fixed amount) invoice with an amount greater than the amount remaining to be invoiced.",
        "Creating a regular invoice when no order lines are invoiceable."
      ],
      correct: "Membuat faktur (invoice) reguler ketika tidak ada baris pesanan yang dapat ditagihkan."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 7 — CREDIT NOTES
     ===================================================== */
  accounting_materi7: [
    {
      question: "Bagaimana cara membuat urutan penomoran khusus (dedicated sequence) untuk nota kredit?",
      question_en: "How can you create a dedicated credit note sequence?",
      options: [
        "Dengan memposting nota kredit dalam draft dan menulis ulang urutannya.",
        "Dengan mengaktifkan pengaturan pada jurnal 'Customer Invoices'.",
        "Dengan membuat jurnal 'Credit Notes' khusus."
      ],
      options_en: [
        "By posting the credit note in draft and re-writing the sequence.",
        "By enabling the setting on the ‘Customer Invoices’ journal.",
        "By creating a specific ‘Credit Notes’ journal."
      ],
      correct: "Dengan mengaktifkan pengaturan pada jurnal 'Customer Invoices'."
    },
    {
      question: "Jika Anda membuat nota kredit $100 dari faktur $100, seperti apa entri jurnalnya?",
      question_en: "If you create a $100 credit note from a $100 invoice, what will the journal entries look like?",
      options: [
        "$100 dari Akun Pendapatan di kolom KREDIT dan $100 dari Akun Piutang di kolom DEBIT.",
        "$100 dari Akun Pendapatan di kolom DEBIT dan $100 dari Akun Piutang di kolom KREDIT.",
        "Entri jurnal tetap tidak berubah saat membuat nota kredit.",
        "Entri (jurnal)-nya sama dengan entri jurnal faktur pelanggan awal."
      ],
      options_en: [
        "$100 from the Income Account in the CREDIT column and $100 from the Receivable Account in the DEBIT column.",
        "$100 from the Income Account in the DEBIT column and $100 from the Receivable Account in the CREDIT column.",
        "The journal entries remain unchanged when creating a credit note.",
        "The entries are the same as the initial customer invoice journal entries."
      ],
      correct: "$100 dari Akun Pendapatan di kolom DEBIT dan $100 dari Akun Piutang di kolom KREDIT."
    },
    {
      question: "Gelas anggur pecah, tapi peralatan makan tidak. Anda ingin refund gelas saja. Caranya?",
      question_en: "You invoiced a set of wine glasses and cutlery to a customer, but the glasses arrived broken. You want to refund only the glasses. How do you do it?",
      options: [
        "Buat faktur dengan jumlah negatif dan transfer uangnya ke pelanggan.",
        "Tagih diri Anda sendiri untuk gelas tersebut.",
        "Buat nota kredit dari faktur, hapus baris peralatan makan, lalu konfirmasi."
      ],
      options_en: [
        "Create an invoice with a negative amount and wire transfer the amount to the customer.",
        "Bill yourself the glasses and wire transfer the bill amount to the customer.",
        "Create a note from the invoice and remove the cutlery from the credit note’s products, then confirm it."
      ],
      correct: "Buat nota kredit dari faktur, hapus baris peralatan makan, lalu konfirmasi."
    },
    {
      question: "Dibatalkan sebagian (gelas saja). Belum ada pembayaran. Apa status faktur aslinya?",
      question_en: "You refunded only the set of wine glasses, the cutlery remains invoiced. You have not received any payment from the customer yet for that invoice. The credit note was created through the invoice, confirmed, and sent. What is the status of the invoice related to that credit note?",
      options: [
        "In payment",
        "Fully paid",
        "Partially paid"
      ],
      options_en: [
        "In payment",
        "Fully paid",
        "Partially paid"
      ],
      correct: "Partially paid"
    },
    {
      question: "Saat memposting nota kredit dari faktur, ia direkonsiliasi dengan apa?",
      question_en: "When posting a credit note created from an invoice, what is the note automatically reconciled with?",
      options: [
        "Pembayaran nota kredit.",
        "Dengan dirinya sendiri.",
        "Dengan faktur tersebut."
      ],
      options_en: [
        "The payment of the credit note.",
        "With itself.",
        "With the invoice."
      ],
      correct: "Dengan faktur tersebut."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 8 — VENDOR BILLS
     ===================================================== */
  accounting_materi8: [
    {
      question: "Di tab item jurnal tagihan vendor, apa yang mendefinisikan jumlah hutang ke vendor?",
      question_en: "In the journal items tab on a vendor bill, what defines the amount you owe to the vendor?",
      options: [
        "Kredit di Account Payable (Hutang Usaha)",
        "Debit di Account Payable (Hutang Usaha)",
        "Kredit di Account Receivable (Piutang Usaha)",
        "Debit di Account Receivable (Piutang Usaha)"
      ],
      options_en: [
        "A credit in the Account Payable",
        "A debit in the Account Payable",
        "A credit in the Account Receivable",
        "A debit in the Account Receivable"
      ],
      correct: "Kredit di Account Payable (Hutang Usaha)"
    },
    {
      question: "Tagihan 2 produk berbeda, pajak sama. Item jurnal apa yang dibuat?",
      question_en: "If a bill has two different products with the same tax. What are the journal items created?",
      options: [
        "2 Payables, 1 Expense, 2 Taxes",
        "2 Payables, 2 Expenses, 2 Taxes",
        "1 Payable, 2 Expenses, 1 Tax"
      ],
      options_en: [
        "2 Payables, 1 Expense, 2 Taxes",
        "2 Payables, 2 Expenses, 2 Taxes",
        "1 Payable, 2 Expenses, 1 Tax"
      ],
      correct: "1 Payable, 2 Expenses, 1 Tax"
    },
    {
      question: "Saat tambah produk ke tagihan, akun otomatis '60000 Expenses'. Dari mana asalnya?",
      question_en: "When you add products to a bill, the account is automatically filled in as \"60000 Expenses\". Why is that account selected by default?",
      options: [
        "Dari field akun hutang di kontak vendor.",
        "Dari akun pembayaran pelanggan.",
        "Ini adalah akun default jurnal Vendor Bill. Cek konfigurasi jurnal."
      ],
      options_en: [
        "This account comes from the vendor's payable account field in the accounting tab of the vendor's contact record.",
        "This Expenses account comes from the customer's payment account. Open the vendor’s form and check the accounting tab to verify this answer.",
        "The Expenses account is the Vendor Bill journal's default account. To verify this answer, open the journal's form view from the Configuration menu."
      ],
      correct: "Ini adalah akun default jurnal Vendor Bill. Cek konfigurasi jurnal."
    },
    {
      question: "Bagaimana tagihan vendor dapat dibuat?",
      question_en: "How can a vendor bill be created?",
      options: [
        "Secara manual, dengan dokumen pertemuan kalender.",
        "Secara manual, upload dokumen, atau kirim email ke alias.",
        "Otomatis dengan email ke admin database."
      ],
      options_en: [
        "Manually, by adding a document to the calendar meetings.",
        "Manually, by uploading a document, and by sending an email to an email alias.",
        "Automatically by sending an email to the administrator of the database."
      ],
      correct: "Secara manual, upload dokumen, atau kirim email ke alias."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 9 — RECONCILIATION & OCR
     ===================================================== */
  accounting_materi9: [
    {
      question: "Apa yang terjadi saat upload PDF dengan banyak tagihan?",
      question_en: "What happens when you upload a PDF with multiple bills in Odoo?",
      options: [
        "Odoo otomatis memisahkannya.",
        "Odoo menyarankan pemisahan tapi butuh konfirmasi.",
        "Klik tombol gunting untuk memilih pemisahan PDF.",
        "Harus upload file terpisah."
      ],
      options_en: [
        "Odoo automatically separates the PDF into the individual bills based on the OCR.",
        "Odoo suggests where each bill should be separated but asks you to confirm the separation.",
        "Clicking on the scissors button allows you to choose where to split the PDF.",
        "Bills must be uploaded in separate PDF files."
      ],
      correct: "Klik tombol gunting untuk memilih pemisahan PDF."
    },
    {
      question: "Apa fungsi OCR?",
      question_en: "What does the OCR do?",
      options: [
        "Mengenali teks pada tagihan dan memetakan ke field Odoo.",
        "Memprediksi info berdasarkan tagihan masa lalu.",
        "Menambah field baru secaara otomatis.",
        "Memisahkan PDF otomatis."
      ],
      options_en: [
        "Recognize which texts on the bill belong in which fields in Odoo",
        "Predict information based on past bills from this vendor",
        "Automatically add any new fields present on the bill that aren’t in Odoo",
        "Automatically separate a PDF with multiple bills into individual bills"
      ],
      correct: "Mengenali teks pada tagihan dan memetakan ke field Odoo."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 10 — PAYMENT TERMS
     ===================================================== */
  accounting_materi10: [
    {
      question: "Aspek apa yang dipengaruhi oleh Payment Terms?",
      question_en: "What aspects are affected by the Payment Terms?",
      options: [
        "Hanya tanggal jatuh tempo.",
        "Tanggal jatuh tempo, kondisi pembayaran, dan insentif pembayaran.",
        "Semua aturan yang harus disetujui pelanggan.",
        "Tanggal jatuh tempo dan pajak."
      ],
      options_en: [
        "The due date.",
        "The due date, the payment conditions, and any payment incentives.",
        "All the rules and guidelines the customer must agree to.",
        "The due date and the taxes are applied to the invoice."
      ],
      correct: "Tanggal jatuh tempo, kondisi pembayaran, dan insentif pembayaran."
    },
    {
      question: "Bisakah kustomisasi T&C untuk faktur tertentu?",
      question_en: "Is it possible to customize your T&Cs related to a specific invoice/order/quotation?",
      options: [
        "Ya, Anda bisa update default T&C di dokumen saat membuatnya.",
        "Ya, tapi hanya perubahan kecil.",
        "Tidak, harus ubah default global.",
        "Tidak bisa diupdate."
      ],
      options_en: [
        "Yes, you can update the default T&Cs in the document when you create it.",
        "Yes, but only if the modifications are related to minor changes.",
        "No, you have to modify the default T&Cs.",
        "No, T&Cs cannot be updated."
      ],
      correct: "Ya, Anda bisa update default T&C di dokumen saat membuatnya."
    },
    {
      question: "Format apa yang tersedia untuk T&C di faktur?",
      question_en: "What are the different formats available for T&C on the invoice?",
      options: [
        "Teks pada faktur dan link ke halaman web.",
        "Teks dan QR code.",
        "Link web dan QR code."
      ],
      options_en: [
        "Text on the invoice and link to the webpage on the invoice.",
        "Text on the invoice and QR code on the invoice.",
        "Link to the webpage on the invoice and QR code on the invoice."
      ],
      correct: "Teks pada faktur dan link ke halaman web."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 11 — PAYMENTS
     ===================================================== */
  accounting_materi11: [
    {
      question: "Apa fungsi akun outstanding (penampung)?",
      question_en: "What are outstanding accounts used for?",
      options: [
        "Akun penampung sementara untuk menandai faktur dan tagihan yang belum dibayar pada laporan umur piutang dan utang.",
        "Akun penampung sementara untuk mencatat pembayaran faktur atau tagihan yang terdaftar hingga dapat direkonsiliasi dengan transaksi bank.",
        "Akun penampung sementara untuk menyeimbangkan pembayaran parsial faktur atau tagihan yang terdaftar hingga pelunasan penuh dilakukan.",
        "Akun penampung sementara yang digunakan untuk pembayaran massal (batch)."
      ],
      options_en: [
        "They are temporary holding accounts used to mark unpaid invoices and bills for the aged receivables and aged payables reports.",
        "They are temporary holding accounts used to record the registered payment of an invoice or bill until the payment can be reconciled with the bank transaction.",
        "They are temporary holding accounts used to balance the registered partial payment of an invoice or bill until the full payment is made.",
        "They are temporary holding accounts used for batch payments."
      ],
      correct: "Akun penampung sementara untuk mencatat pembayaran faktur atau tagihan yang terdaftar hingga dapat direkonsiliasi dengan transaksi bank."
    },
    {
      question: "Kapan faktur ditandai 'Paid' (Lunas) sepenuhnya?",
      question_en: "When is an invoice or bill marked as “Paid” in Odoo?",
      options: [
        "Saat ada pembayaran berapapun.",
        "Saat pembayaran penuh direkonsiliasi dengan transaksi bank.",
        "Saat pembayaran penuh diregistrasi (linked).",
        "Saat pembayaran penuh diregistrasi."
      ],
      options_en: [
        "When any payment is made on the invoice or bill, regardless of the amount.",
        "When the full payment or the invoice/bill itself is reconciled with the bank transaction.",
        "When the full payment is registered and linked to that invoice or bill.",
        "When the full payment is registered."
      ],
      correct: "Saat pembayaran penuh direkonsiliasi dengan transaksi bank."
    },
    {
      question: "Apa tujuan 'Group Payments'?",
      question_en: "What is the purpose of the “Group Payments” option?",
      options: [
        "Semua tagihan jadi satu pembayaran.",
        "Satu pembayaran per partner (mitra), bukan per tagihan.",
        "Mengelompokkan berdasarkan tipe pembayaran.",
        "Mengelompokkan reconciled dan unreconciled."
      ],
      options_en: [
        "To have all invoices or bills under one single payment.",
        "To have only one payment per partner instead of per bill.",
        "To group up bills by payment type.",
        "To group all reconciled payments into one group and all unreconciled payments into another group."
      ],
      correct: "Satu pembayaran per partner (mitra), bukan per tagihan."
    },
    {
      question: "Apa beda tombol 'Pay' vs pembayaran manual?",
      question_en: "How does using the “Pay” button on an invoice or bill differ from manually creating a payment for the same amount?",
      options: [
        "Tombol Pay otomatis merekonsiliasi pembayaran dengan faktur.",
        "Tombol Pay otomatis merekonsiliasi dengan bank.",
        "Tombol Pay otomatis rekonsiliasi dengan faktur DAN bank.",
        "Tombol Pay hanya untuk pembayaran penuh."
      ],
      options_en: [
        "The “Pay” button automatically reconciles the payment with the invoice or bill.",
        "The “Pay” button automatically reconciles the payment with the bank transaction.",
        "The “Pay” button automatically reconciles the payment with the invoice or bill and also automatically reconciles it with the bank transaction.",
        "The “Pay” button automatically pays the full invoice or bill amount, whereas manually creating a payment is the only way to register a partial payment."
      ],
      correct: "Tombol Pay otomatis merekonsiliasi pembayaran dengan faktur."
    },
    {
      question: "Cara bypass rekonsiliasi manual untuk pembayaran tunai?",
      question_en: "How can I bypass the need for transaction reconciliation in the case of cash payments?",
      options: [
        "Di Jurnal Cash, set 'Outstanding Payments' ke akun utama 'Cash'.",
        "Di Jurnal Cash, set 'Outstanding Payments' ke akun 'Outstanding'.",
        "Buat pembayaran manual, set jurnal ke Cash, lalu link.",
        "Kosongkan akun Outstanding Payments."
      ],
      options_en: [
        "On the Cash journal, set the payment method’s “Outstanding Payments” account to the journal’s main ‘Cash’ account. Then use this payment method when registering the payment.",
        "On the Cash journal, set the payment method’s “Outstanding Payments” account to an ‘outstanding’ account. Then use this payment method when registering the payment.",
        "Create a manual payment, set the journal to “Cash” and then link that payment to the invoice or bill.",
        "On the Cash journal, leave the “Outstanding Payments” account of the blank."
      ],
      correct: "Di Jurnal Cash, set 'Outstanding Payments' ke akun utama 'Cash'."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 12 — ONLINE PAYMENTS
     ===================================================== */
  accounting_materi12: [
    {
      question: "Jika field Country kosong di payment provider, artinya?",
      question_en: "When the Country field in the Configuration tab of a payment provider is empty, this means that",
      options: [
        "Tidak tersedia untuk negara manapun.",
        "Tersedia untuk pelanggan di semua negara.",
        "Hanya tersedia untuk negara perusahaan.",
        "Tidak bisa diaktifkan."
      ],
      options_en: [
        "This payment provider is not available for customers in any country.",
        "This payment provider is available for customers in all countries.",
        "This payment provider is available only for customers in the same country as the company.",
        "The payment provider cannot be activated until the country field is populated."
      ],
      correct: "Tersedia untuk pelanggan di semua negara."
    },
    {
      question: "Bagaimana mengubah pesan sukses pembayaran online di portal?",
      question_en: "How can the message that is displayed in the customer portal when an invoice is paid online be modified?",
      options: [
        "Pakai Studio.",
        "Dari portal customer.",
        "Dari record payment provider, tab Messages.",
        "Tidak bisa diubah."
      ],
      options_en: [
        "From the payment provider record, enter Studio and edit the message text.",
        "From the customer portal, enter Studio and edit the message text.",
        "From the payment provider record, open the Messages tab and edit the message text.",
        "This message is not modifiable."
      ],
      correct: "Dari record payment provider, tab Messages."
    },
    {
      question: "Apa status invoice setelah dibayar online?",
      question_en: "What is the payment status of an invoice after being paid online?",
      options: [
        "Received",
        "Paid",
        "Paid online",
        "In payment"
      ],
      options_en: [
        "Received",
        "Paid",
        "Paid online",
        "In payment"
      ],
      correct: "In payment"
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 13 — FOLLOW-UP
     ===================================================== */
  accounting_materi13: [
    {
      question: "Tindakan apa yang tersedia untuk follow-up?",
      question_en: "What actions are available when defining a follow-up?",
      options: [
        "Email, SMS, Letter, WhatsApp.",
        "Email, SMS, Voicemail, Letter.",
        "Email, Letter, Fax.",
        "Letter, SMS, Voicemail."
      ],
      options_en: [
        "Email, SMS, letter, WhatsApp.",
        "Email, SMS, voicemail, letter.",
        "Email, letter, fax.",
        "Letter, SMS, voicemail."
      ],
      correct: "Email, SMS, Letter, WhatsApp."
    },
    {
      question: "Bagaimana memastikan reminder terkirim ke semua yang overdue?",
      question_en: "How can you make sure reminders are sent to all customers with overdue invoices?",
      options: [
        "Filter Invoices by Overdue, select all, click Follow-ups.",
        "Filter Invoices by Requires Follow-up, select all, click Follow-ups.",
        "Filter Customers by Requires Follow-up, select all, Actions > Process Follow-ups.",
        "Klik Process Follow-ups di dashboard accounting."
      ],
      options_en: [
        "Filter the Invoices list by \"Overdue”, group by Partner, select the invoices, and click \"Follow-ups\" in the Actions menu.",
        "Filter the Invoices list by \"Requires Follow-up\", group by Partner, select the invoices, and click \"Follow-ups\" in the Actions menu.",
        "Filter the Customers list view by \"Requires Follow-up\", select the customers, and click \"Process Follow-ups\" in the Actions menu.",
        "On the Accounting dashboard, click the \"Process Follow-ups\" option on the sales journal."
      ],
      correct: "Filter Customers by Requires Follow-up, select all, Actions > Process Follow-ups."
    },
    {
      question: "Di mana Anda dapat mengonfigurasi tindakan follow-up?",
      question_en: "Where can you configure the follow-up actions?",
      options: [
        "Di menu Konfigurasi, pilih Follow-up Levels. Tindakan dapat dipilih untuk setiap level dan diatur sebagai otomatis atau tidak.",
        "Di tab Akuntansi pada formulir pelanggan, tindakan dapat dikonfigurasi di bagian Invoice Follow-ups dan diatur sebagai otomatis atau tidak.",
        "Di menu Konfigurasi, pilih Follow-up Levels. Opsi tindakan diaktifkan/dinonaktifkan dari tampilan daftar (list view) Follow-up Levels.",
        "Tindakan follow-up sudah terkonfigurasi secara default dan tidak dapat dikustomisasi. Namun, bisa diatur secara otomatis atau manual di tab Akuntansi pada formulir pelanggan."
      ],
      options_en: [
        "In the Configuration menu, select Follow-up Levels. Actions can be chosen for each level and set as automatic or not.",
        "In the Accounting tab of the customer’s form, actions can be configured in the Invoice Follow-ups section and set as automatic or not.",
        "In the Configuration menu, select Follow-up Levels. The action options are enabled/disabled from the Follow-up Levels list view.",
        "Follow-up actions are pre-configured by default and cannot be customized. However, they can be set automatically or manually in the Accounting tab of the customer form."
      ],
      correct: "Di menu Konfigurasi, pilih Follow-up Levels. Tindakan dapat dipilih untuk setiap level dan diatur sebagai otomatis atau tidak."
    },
    {
      question: "Di mana cek riwayat follow-up customer?",
      question_en: "How can I check if follow-up actions have been taken for a customer?",
      options: [
        "Hanya Responsible yang bisa lihat.",
        "Di Chatter form customer (jika Responsible diisi).",
        "Di Customer Follow-up report.",
        "Di Chatter form customer (selalu tercatat)."
      ],
      options_en: [
        "Only the person listed in the Responsible field of the Invoice Follow-ups section can view the follow-up actions taken.",
        "In the customer form, the chatter keeps a full record of all follow-up actions only if the Responsible is filled in the Invoice Follow-ups section.",
        "By grouping by Customers in the Customer Follow-up report in the Customer menu.",
        "In the Customer form, the chatter keeps a full record of all Follow-up actions."
      ],
      correct: "Di Chatter form customer (selalu tercatat)."
    },
    {
      question: "Bagaimana cara memeriksa total jumlah overdue (jatuh tempo) pelanggan?",
      question_en: "How can a customer's total overdue amount be checked?",
      options: [
        "Total jumlah overdue ditampilkan di kolom (field) Overdue di bagian Invoice Follow-Ups pada formulir pelanggan.",
        "Pada smart button Due yang tersedia di formulir pelanggan, dan saat diklik, tertera di Laporan Follow-up.",
        "Klik smart button Customer Statement yang tersedia di formulir pelanggan.",
        "Total jumlah overdue tidak dapat diketahui; hanya dapat diperiksa pada faktur masing-masing secara individu."
      ],
      options_en: [
        "The total overdue amount is displayed in the Overdue field in the Invoice Follow-Ups section of a customer’s form.",
        "On the Due smart button, available in the customer’s form, and when clicking it, in the Follow-up Report.",
        "Click the Customer Statement smart button available in the customer’s form.",
        "The total overdue amount cannot be known; it can only be checked on individual invoices."
      ],
      correct: "Pada smart button Due yang tersedia di formulir pelanggan, dan saat diklik, tertera di Laporan Follow-up."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 14 — DISCOUNTS
     ===================================================== */
  accounting_materi14: [
    {
      question: "Jika Anda memiliki diskon tunai 2% pada faktur 1000,00€ dan 'Reduced Tax' diatur ke 'Always' (Selalu), berapa basis pajaknya?",
      question_en: "If you have a 2% cash discount on a 1000.00€ invoice and the “Reduced Tax” is set to “Always”, what will be the base for the tax?",
      options: [
        "1000,00€",
        "980,00€",
        "1000,00€ atau 980,00€ tergantung apakah pelanggan membayar lebih awal."
      ],
      options_en: [
        "1000.00€",
        "980.00€",
        "1000.00€ or 980.00€ depending on if the customer paid early"
      ],
      correct: "980.00€"
    },
    {
      question: "Bagaimana customer tahu payment terms?",
      question_en: "How can the customer know about the payment terms and the cash discount?",
      options: [
        "Disepakati lisan.",
        "Tertulis di penawaran.",
        "Tertulis di faktur."
      ],
      options_en: [
        "Both parties agreed upon payment terms before the quotation.",
        "The payment terms are written on the quotation.",
        "The payment terms are written on the invoice."
      ],
      correct: "Tertulis di faktur."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 15 — BANK SUSPENSE & OUTSTANDING
     ===================================================== */
  accounting_materi15: [
    {
      question: "Apa fungsi akun Bank Suspense?",
      question_en: "What does the Bank Suspense account do?",
      options: [
        "Akun ini menampung saldo sementara antara pembuatan/penerimaan pembayaran dan rekonsiliasinya dengan transaksi bank.",
        "Akun ini menyeimbangkan entri jurnal dari setiap transfer yang dilakukan dari satu bank atau akun kas ke yang lain.",
        "Akun ini menampung saldo sementara antara pembuatan transaksi bank dan rekonsiliasinya.",
        "Akun ini menangguhkan semua entri jurnal di jurnal bank sampai setelah tanggal penguncian semua pengguna (all-user lock date)."
      ],
      options_en: [
        "It temporarily holds a balance between making/receiving a payment and reconciling it with a bank transaction.",
        "It balances the journal entries of any transfers made from one bank or cash account to another.",
        "It temporarily holds a balance between creating a bank transaction and reconciling it.",
        "It suspends all journal entries in the bank journal until after the all-user lock date."
      ],
      correct: "Akun ini menampung saldo sementara antara pembuatan transaksi bank dan rekonsiliasinya."
    },
    {
      question: "Apakah kolom Nomor Akun (IBAN) wajib pada jurnal bank?",
      question_en: "Is the Account number (IBAN) field required on a bank journal?",
      options: [
        "Ya.",
        "Tidak, tapi diperlukan untuk membuat file pembayaran seperti SEPA.",
        "Ya, tapi hanya untuk lokalisasi Belgia.",
        "Tidak, dan harus dikosongkan untuk memungkinkan banyak akun bank."
      ],
      options_en: [
        "Yes.",
        "No, but the field is required to generate payment files such as SEPA and NACHA.",
        "Yes, but only for the Belgian localization.",
        "No, and the field must be left blank to allow multiple bank accounts to be used with one bank journal."
      ],
      correct: "Tidak, tapi diperlukan untuk membuat file pembayaran seperti SEPA."
    },
    {
      question: "Apa tujuan membuat banyak akun Outstanding Receipts dan Outstanding Payments?",
      question_en: "What is the purpose of creating multiple Outstanding Receipts and Outstanding Payments accounts?",
      options: [
        "Memungkinkan konfigurasi tiap jurnal bank/kas dengan akun outstanding sendiri untuk menghindari kebingungan.",
        "Memungkinkan Anda memiliki banyak jurnal bank/kas.",
        "Memungkinkan Anda melewati rekonsiliasi bank.",
        "Tidak mungkin membuat banyak akun outstanding."
      ],
      options_en: [
        "It allows you to configure each bank/cash journal with its own Outstanding Receipts and Outstanding Payments account to eliminate confusion.",
        "It allows you to have multiple bank/cash journals.",
        "It allows you to skip bank reconciliation.",
        "It is not possible to create multiple Outstanding Receipts and Outstanding Payments accounts."
      ],
      correct: "Memungkinkan konfigurasi tiap jurnal bank/kas dengan akun outstanding sendiri untuk menghindari kebingungan."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 16 — BANK IMPORT
     ===================================================== */
  accounting_materi16: [
    {
      question: "Bagaimana cara impor transaksi bank secara otomatis di Odoo?",
      question_en: "How can I automatically import bank transactions in Odoo?",
      options: [
        "Dengan menghubungkan akun bank ke Odoo via pengaturan (Plaid/Yodlee/Salt Edge).",
        "Hanya bisa dengan add-on pihak ketiga.",
        "Dengan mengaktifkan opsi di 'Settings'."
      ],
      options_en: [
        "By linking my bank account to Odoo via the settings.",
        "It can only be done with a third-party add-on.",
        "By activating the option in “Settings”."
      ],
      correct: "Dengan menghubungkan akun bank ke Odoo via pengaturan (Plaid/Yodlee/Salt Edge)."
    },
    {
      question: "Bagaimana cara impor transaksi bank saya?",
      question_en: "How can I import my bank transactions?",
      options: [
        "Manual scan lalu upload PDF.",
        "Impor statement dari jurnal 'Bank' (File Import).",
        "Spesifikasi folder PC untuk discan otomatis."
      ],
      options_en: [
        "I have to manually scan them, and then upload a bulk PDF.",
        "I can import my statements from the “Bank” journal.",
        "I can specify a folder on my PC Odoo periodically scans and downloads new statements when it detects new files."
      ],
      correct: "Impor statement dari jurnal 'Bank' (File Import)."
    },
    {
      question: "Saya baru load file bank, apa yang bisa dilakukan sebelum impor di Odoo?",
      question_en: "I just loaded my bank file, what can I do before importing it on Odoo?",
      options: [
        "Saya bisa preview tampilannya setelah diimpor.",
        "Saya bisa pilih statement lain untuk upload sekaligus.",
        "Saya bisa atur field yang berkorelasi dengan informasi di file saya."
      ],
      options_en: [
        "I can preview what it will look like once imported.",
        "I can select other bank statements to upload all at once.",
        "I can set fields correlating to information contained in my file."
      ],
      correct: "Saya bisa atur field yang berkorelasi dengan informasi di file saya."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 17 — BANK SYNCHRONIZATION
     ===================================================== */
  accounting_materi17: [
    {
      question: "Odoo fetch transaksi tiap 12 jam. Bagaimana cara fetch lebih cepat?",
      question_en: "Odoo automatically fetches bank transactions every 12 hours. What can you do if you want to fetch bank transactions earlier?",
      options: [
        "Impor transaksi sebagai CSV.",
        "Ubah frekuensi fetch di pengaturan.",
        "Klik tombol 'Fetch transactions' di jurnal Bank (Synchronize now)."
      ],
      options_en: [
        "Import the bank transactions as a CSV (or other format) file.",
        "Change the frequency at which Odoo fetches bank transactions to a shorter time in the settings.",
        "Click the “Fetch transactions” from the “Bank” journal."
      ],
      correct: "Klik tombol 'Fetch transactions' di jurnal Bank (Synchronize now)."
    },
    {
      question: "Apa arti baris sorotan biru di tampilan transaksi?",
      question_en: "What do blue highlight lines mean in the transaction view?",
      options: [
        "Saran pencocokan berdasarkan jumlah, partner, atau referensi.",
        "Mewakili pembayaran batch.",
        "Mewakili transaksi 'To Check'.",
        "Saran pencocokan diskon pembayaran dini."
      ],
      options_en: [
        "Matching suggestions based on the amount, partner, or reference.",
        "They represent batch payments and batch open items.",
        "They represent transactions and items marked as “To Check”.",
        "Matching suggestions based on early payment discounts."
      ],
      correct: "Saran pencocokan berdasarkan jumlah, partner, atau referensi."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 18 — RECONCILIATION MODELS
     ===================================================== */
  accounting_materi18: [
    {
      question: "Jika kolom 'Payment Tolerance' tidak dicentang pada model rekonsiliasi tipe 'Rule to match invoices/bills', hal ini akan...",
      question_en: "Leaving the “Payment Tolerance” field unchecked on a reconciliation model of type “Rule to match invoices/bills” will",
      options: [
        "Hanya mencocokkan transaksi dengan faktur/tagihan yang memiliki jumlah SAMA PERSIS.",
        "Memungkinkan Anda memilih persentase toleransi antara transaksi dan faktur/tagihan.",
        "Memungkinkan Anda memilih jumlah nominal toleransi antara transaksi dan faktur/tagihan.",
        "Mencocokkan transaksi dengan faktur/tagihan tanpa mempedulikan jumlahnya."
      ],
      options_en: [
        "Only match the transaction with invoices/bills that have the exact same amount.",
        "Allow you to select a percentage for the tolerance between the transaction and the invoices/bills",
        "Allow you to select an amount for the tolerance between the transaction and the invoices/bills",
        "Match the transaction with invoices/bills regardless of their amount."
      ],
      correct: "Mencocokkan transaksi dengan faktur/tagihan tanpa mempedulikan jumlahnya."
    },
    {
      question: "Bagaimana cara meninjau transaksi yang sebelumnya ditandai 'To check'?",
      question_en: "How can you review all bank transactions that were previously marked as “To check” during the reconciliation process?",
      options: [
        "Klik link 'X to check' pada jurnal bank di Dashboard.",
        "Buka view rekonsiliasi dan klik tombol 'To Check'.",
        "Buka Reporting > To Check.",
        "Hanya user Accountant yang bisa."
      ],
      options_en: [
        "By clicking on the “X to check” link on the bank journal from the Accounting dashboard",
        "By opening the reconciliation view and clicking on the “To Check” button",
        "By going to Reporting > To Check",
        "Only users with “Accountant” access rights can review them by going to Reporting > To Check"
      ],
      correct: "Klik link 'X to check' pada jurnal bank di Dashboard."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 19 — BATCH PAYMENTS
     ===================================================== */
  accounting_materi19: [
    {
      question: "Jenis transaksi apa itu Credit Transfers?",
      question_en: "What kind of transactions are credit transfers?",
      options: [
        "Outgoing (Keluar)",
        "Ingoing (Masuk)",
        "Single",
        "Multiple"
      ],
      options_en: [
        "Outgoing",
        "Ingoing",
        "Single",
        "Multiple"
      ],
      correct: "Outgoing (Keluar)"
    },
    {
      question: "Bagaimana menangani banyak pembayaran sekaligus di Odoo?",
      question_en: "In Odoo, how can you handle multiple payments at once?",
      options: [
        "Lewat pengaturan 'configure all'.",
        "Lewat fungsi 'batch payment'.",
        "Lewat fungsi 'bill periodicity'.",
        "Tidak bisa."
      ],
      options_en: [
        "Through the “configure all” setting.",
        "Through the “batch payment” function.",
        "Through the “bill periodicity” function.",
        "You can’t handle more than one payment at a time."
      ],
      correct: "Lewat fungsi 'batch payment'."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 20 — SEPA DIRECT DEBIT (SDD)
     ===================================================== */
  accounting_materi20: [
    {
      question: "Apa yang harus diatur pada jurnal agar mandat SDD bisa digunakan?",
      question_en: "What must be set on the journal for the mandates to be used?",
      options: [
        "Pengenal Mandat (Mandate Identifier) / Creditor Identifier.",
        "Mata uang.",
        "Akun outstanding payments.",
        "Nomor akun bank."
      ],
      options_en: [
        "A mandate identifier",
        "The currency",
        "An outstanding payments account",
        "A bank account number"
      ],
      correct: "Nomor akun bank."
    },
    {
      question: "Untuk pelanggan B2C, skema SDD mana yang harus digunakan?",
      question_en: "To create an SDD mandate for a B2C customer, which SDD scheme must you use?",
      options: [
        "CORE",
        "B2B",
        "B2C",
        "EU"
      ],
      options_en: [
        "CORE",
        "B2B",
        "B2C",
        "EU"
      ],
      correct: "CORE"
    },
    {
      question: "Apa yang terjadi jika dana pelanggan tidak cukup (payment failure)?",
      question_en: "What happens if a customer does not have enough funds in their account?",
      options: [
        "Dapat notifikasi di dashboard.",
        "Anda menerima transaksi dengan jumlah negatif (reversal).",
        "Bank menolak transaksi."
      ],
      options_en: [
        "You get a notification from Odoo on the dashboard.",
        "You receive a transaction with a negative amount.",
        "The bank will decline the transaction."
      ],
      correct: "Bank menolak transaksi."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 21 — LOANS
     ===================================================== */
  accounting_materi21: [
    {
      question: "Cara manakah yang TIDAK didukung untuk membuat jadwal amortisasi pinjaman?",
      question_en: "Which of the following is not a supported way to create amortization schedules for loans?",
      options: [
        "Mengimpor dari file yang didukung.",
        "Menghitungnya dari beberapa nilai input menggunakan tombol Compute.",
        "Sinkronisasi dengan fitur jadwal amortisasi bank Anda.",
        "Mengisi baris jadwal secara manual."
      ],
      options_en: [
        "Importing from a supported file.",
        "Calculating it from multiple input values using the Compute button.",
        "Syncing with your bank’s amortization schedule feature.",
        "Manually filling in the lines of the schedule."
      ],
      correct: "Sinkronisasi dengan fitur jadwal amortisasi bank Anda."
    },
    {
      question: "Jika Anda memiliki jumlah pinjaman, tenor, tanggal mulai, dan suku bunga tetapi tidak memiliki nominal bunga dalam mata uang, dapatkah Odoo menghitung nominal bunga tersebut?",
      question_en: "If you have the loan amount, loan term, start date, and interest rate but not the interest amount in currency, can Odoo calculate the interest amount in currency?",
      options: [
        "Tidak, Odoo memerlukan nominal bunga dalam mata uang dan tidak dapat menghitungnya.",
        "Ya, dengan mengklik tombol Compute, Anda dapat mengatur kolom yang relevan dan Odoo akan menghitung nominal bunga yang akan digunakan pada pinjaman.",
        "Tidak, Odoo mengharuskan nominal bunga dimasukkan terlebih dahulu baru kemudian menghitung suku bunganya.",
        "Ya, Anda bisa membuat Odoo menghitung nominal bunga dengan memasukkan rumus Python di kolom Bunga."
      ],
      options_en: [
        "No, Odoo requires the interest amount in currency and cannot calculate it.",
        "Yes, by clicking the Compute button, you can set the relevant fields and Odoo will calculate the interest amount in currency to use on the loan.",
        "No, Odoo requires the interest amount in currency to be entered and then calculates the interest rate.",
        "Yes, you can make Odoo calculate the interest amount by entering a python formula in the Interest field."
      ],
      correct: "Ya, dengan mengklik tombol Compute, Anda dapat mengatur kolom yang relevan dan Odoo akan menghitung nominal bunga yang akan digunakan pada pinjaman."
    },
    {
      question: "Apa manfaat menggunakan kolom 'Skip until' pada pinjaman?",
      question_en: "What is the benefit of using the “Skip until” field on a loan?",
      options: [
        "Ini berguna jika Anda ingin menunda tanggal mulai pinjaman dan meminta Odoo memposting entri yang dilewati secara otomatis setelah entri terakhir dalam jadwal amortisasi.",
        "Ini berguna jika Anda sudah membuat entri secara manual sebelum pembuatan pinjaman ini (migrasi data).",
        "Ini berguna jika pemberi pinjaman ingin menetapkan jadwal amortisasi kedua.",
        "Tidak ada kolom 'Skip until' pada pinjaman."
      ],
      options_en: [
        "This is useful if you want to delay the loan’s start date and have Odoo automatically post the skipped entries after the final entry in the amortization schedule.",
        "This is useful if you have already manually created entries prior to the creation of this loan.",
        "This is useful if the lender wants to set a second amortization schedule.",
        "There is no “Skip until” field on a loan."
      ],
      correct: "Ini berguna jika Anda sudah membuat entri secara manual sebelum pembuatan pinjaman ini (migrasi data)."
    },
    {
      question: "Apa perbedaan antara membatalkan (Cancelling) dan menutup (Closing) pinjaman?",
      question_en: "What is the difference between cancelling and closing a loan?",
      options: [
        "Membatalkan pinjaman menghapus semua entri, bahkan yang sudah diposting, sedangkan menutup pinjaman hanya menghapus entri draf.",
        "Membatalkan pinjaman menghapus semua entri, bahkan yang sudah diposting, sedangkan menutup pinjaman mereset entri yang diposting menjadi draf dan tidak menghapus entri apa pun.",
        "Membatalkan pinjaman hanya menghapus entri draf, sedangkan menutup pinjaman tidak menghapus entri apa pun dan hanya mencegah entri draf diposting secara otomatis di masa depan. Tidak ada entri terposting yang dihapus untuk menjaga transparansi.",
        "Membatalkan dan menutup pinjaman adalah hal yang sama (sinonim)."
      ],
      options_en: [
        "Cancelling a loan deletes all entries, even posted ones, while closing a loan deletes only the draft entries.",
        "Cancelling a loan deletes all entries, even posted ones, while closing a loan resets posted entries to draft and doesn’t delete any entries.",
        "Cancelling a loan deletes only draft entries, while closing a loan doesn’t delete any entries and only prevents draft entries from being posted automatically in the future. No post entries are deleted to maintain transparency.",
        "Cancelling and closing a loan are synonymous."
      ],
      correct: "Membatalkan pinjaman menghapus semua entri, bahkan yang sudah diposting, sedangkan menutup pinjaman hanya menghapus entri draf."
    },
    {
      question: "Bagaimana cara melihat analisis pinjaman yang sudah ditutup (Closed)?",
      question_en: "How can you view an analysis of closed loans?",
      options: [
        "Tidak mungkin melihat analisis pinjaman yang ditutup, hanya pinjaman yang terbuka (Running).",
        "Buka Accounting > Reporting > Loans Analysis. Pinjaman yang ditutup ditampilkan secara default.",
        "Buka Accounting > Reporting > Loans Analysis, lalu hapus filter untuk hanya menampilkan pinjaman yang ditutup.",
        "Buka Accounting > Reporting > Loans Analysis, lalu ubah filter dari Current (Saat Ini) menjadi Closed (Ditutup)."
      ],
      options_en: [
        "It’s not possible to view an analysis of closed loans, only open loans.",
        "Go to Accounting > Reporting > Loans Analysis. The closed loans are displayed by default.",
        "Go to Accounting > Reporting > Loans Analysis, then remove the filter to show only closed loans.",
        "Go to Accounting > Reporting > Loans Analysis, then switch the filter from Current to Closed."
      ],
      correct: "Buka Accounting > Reporting > Loans Analysis, lalu ubah filter dari Current (Saat Ini) menjadi Closed (Ditutup)."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 22 — ROUNDING & TAX SCOPE
     ===================================================== */
  accounting_materi22: [
    {
      question: "Bagaimana mengatur metode pembulatan (rounding) untuk faktur?",
      question_en: "How can you set a rounding method for invoices or bills?",
      options: [
        "Pilih metode pembulatan di field 'Total' pada faktur.",
        "Pilih metode pembulatan di bagan akun.",
        "Pilih metode pembulatan di general settings."
      ],
      options_en: [
        "By selecting the rounding method on the invoice or bill in the “Total” field.",
        "By selecting the rounding method in the chart of accounts.",
        "By selecting the rounding method in the general settings."
      ],
      correct: "Pilih metode pembulatan di general settings."
    },
    {
      question: "Bagaimana membatasi pajak hanya untuk barang atau jasa?",
      question_en: "How can you restrict a tax to goods or services only?",
      options: [
        "Dengan menentukan Tax Scope.",
        "Dengan menentukan Tax Type.",
        "Dengan membuat pajak spesifik di product template."
      ],
      options_en: [
        "By determining a tax scope.",
        "By determining a tax type.",
        "By creating a specific tax for goods or services and setting it on the product template."
      ],
      correct: "Dengan menentukan Tax Scope."
    },
    {
      question: "Dua pajak di faktur. Pajak kedua harus dihitung SETELAH pajak pertama (tax on tax). Caranya?",
      question_en: "You have two taxes on your invoice. The second tax must be calculated after the first tax. How can you enable that in Odoo?",
      options: [
        "Konfigurasi urutan (sequence) pajak.",
        "Aktifkan 'Affect Base of Subsequent Taxes' pada pajak pertama, dan atur urutannya.",
        "Tambah pajak manual di field Tax."
      ],
      options_en: [
        "Configure the tax sequence so the second tax comes after the first in the tax settings.",
        "Enable “Affect Base of Subsequent Taxes” on the first tax and set the tax sequence so the second tax comes after the first in the tax settings.",
        "Add the tax manually in the “Tax” field on the invoice."
      ],
      correct: "Aktifkan 'Affect Base of Subsequent Taxes' pada pajak pertama, dan atur urutannya."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 23 — CASH BASIS
     ===================================================== */
  accounting_materi23: [
    {
      question: "Apa tujuan akun transisi basis kas (Cash Basis Transition Account)?",
      question_en: "What is the purpose of the cash basis transition account?",
      options: [
        "Untuk transisi saldo antar perusahaan.",
        "Untuk menampung saldo pajak sementara antara konfirmasi faktur dan pembayaran.",
        "Untuk menyeimbangkan jurnal tanpa akun pajak."
      ],
      options_en: [
        "To transition balances from one company’s tax accounts to another in a multi-company environment.",
        "To temporarily hold the tax balance between the invoice confirmation and payment",
        "To balance unbalanced journal entries without tax accounts."
      ],
      correct: "Untuk menampung saldo pajak sementara antara konfirmasi faktur dan pembayaran."
    },
    {
      question: "Kapan pajak basis kas muncul di laporan pajak?",
      question_en: "Unlike standard taxes, cash basis taxes appear on the tax report",
      options: [
        "Saat penjualan dikonfirmasi.",
        "Saat faktur dikonfirmasi.",
        "Saat faktur dibayar (payment registered).",
        "Hanya jika pembayaran tunai."
      ],
      options_en: [
        "When sales are confirmed.",
        "When invoices are confirmed.",
        "When invoices are paid.",
        "Only if payments are made in cash."
      ],
      correct: "Saat faktur dibayar (payment registered)."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 24 — FISCAL POSITIONS
     ===================================================== */
  accounting_materi24: [
    {
      question: "Bagaimana konfigurasi agar posisi fiskal diterapkan otomatis?",
      question_en: "How can I configure Odoo to automatically apply a fiscal position?",
      options: [
        "Tambah posisi fiskal ke produk.",
        "Aktifkan dan konfigurasi 'detect automatically' pada posisi fiskal.",
        "Isi field 'Account' di faktur."
      ],
      options_en: [
        "By adding fiscal positions to my products in the Accounting tab.",
        "By enabling and configuring the \"detect automatically\" feature on the fiscal position.",
        "By populating the “Account” field within the invoice."
      ],
      correct: "Aktifkan dan konfigurasi 'detect automatically' pada posisi fiskal."
    },
    {
      question: "Saya tambah barang dulu, baru isi Customer, tapi pajak salah. Kenapa?",
      question_en: "First, I added goods to my new invoice, then I populated the “Customer” field, yet the tax is incorrect. Why?",
      options: [
        "Posisi fiskal hanya untuk jasa.",
        "Posisi fiskal diterapkan setelah konfirmasi.",
        "Field 'Customer/Vendor' harus diisi SEBELUM menambah produk agar deteksi otomatis berjalan."
      ],
      options_en: [
        "Fiscal positions only apply to services.",
        "The fiscal position will be applied after confirming the invoice.",
        "The “Customer/Vendor” field must be populated before you add a product."
      ],
      correct: "Field 'Customer/Vendor' harus diisi SEBELUM menambah produk agar deteksi otomatis berjalan."
    },
    {
      question: "Apa fungsi tab Account Mapping di Posisi Fiskal?",
      question_en: "What does the Account Mapping tab within a Fiscal Position allow you to do?",
      options: [
        "Melihat akun yang dilarang.",
        "Mendefinisikan akun pendapatan/beban pengganti (replacement) saat posisi fiskal aktif.",
        "Melihat daftar pajak."
      ],
      options_en: [
        "View a list of all of the accounts that cannot be used under this particular fiscal position.",
        "Define which income or expense accounts should replace the default accounts used on a product when the fiscal position is applied.",
        "View a list of all of the taxes that are applied within the context of the specific fiscal position."
      ],
      correct: "Mendefinisikan akun pendapatan/beban pengganti (replacement) saat posisi fiskal aktif."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 25 — TAX CLOSING & LOCK DATES
     ===================================================== */
  accounting_materi25: [
    {
      question: "Apa yang memungkinkan otomatisasi proses penutupan pajak?",
      question_en: "What makes it possible to automate the tax closing process?",
      options: [
        "Tanggal penguncian 'Tax return' yang diset.",
        "Akun  transisi 'payable' dan 'receivable' pajak yang dikonfigurasi.",
        "Lokalisasi fiskal yang terinstall.",
        "Tanggal 'Tax return' lock date DAN lokalisasi fiskal."
      ],
      options_en: [
        "The “Tax return” lock date set for that company.",
        "The configured “payable” and “receivable” tax current accounts.",
        "The fiscal localization installed on the database.",
        "The “Tax return” lock date and the fiscal localization set for that company."
      ],
      correct: "Tanggal 'Tax return' lock date DAN lokalisasi fiskal."
    },
    {
      question: "Apa yang terjadi jika saya upload tagihan (tanggal lama sebelum lock date) SETELAH laporan pajak disubmit?",
      question_en: "What happens if I upload a vendor bill dated before the lock date is uploaded after the tax report has been submitted?",
      options: [
        "Klik tombol 'Refresh' di laporan pajak.",
        "Tagihan akan ditunda ke periode fiskal berikutnya (karena lock date sudah diset).",
        "Laporan pajak otomatis update di background.",
        "Tidak bisa diubah lagi."
      ],
      options_en: [
        "Hit the “Refresh” button on the tax report.",
        "The closing entry is posted, and the lock date is set once the tax return reaches Submit status. The bill will be postponed to the next fiscal period.",
        "The tax report is automatically updated in Odoo's background and resubmitted to the authorities.",
        "Once submitted, the tax report can no longer be changed, and the bill will be postponed to the next fiscal period's tax report."
      ],
      correct: "Tagihan akan ditunda ke periode fiskal berikutnya (karena lock date sudah diset)."
    },
    {
      question: "Apa urutan lock date optimal untuk menghindari error?",
      question_en: "What is the optimal lock date order to avoid errors and unintended entry changes?",
      options: [
        "'Tax Return', 'Sales', 'Purchase', 'Everything', 'Hard'.",
        "'Everything', 'Tax Return', 'Hard'.",
        "'Sales', 'Purchase', 'Tax Return', 'Everything', 'Hard'.",
        "Tidak ada urutan khusus."
      ],
      options_en: [
        "“Tax Return”, “Sales”, “Purchase”, “Everything”, and “Hard” lock dates if needed.",
        "“Everything”, and “Tax Return”, and “Hard” lock dates if needed.",
        "“Sales”, “Purchase”, “Tax Return”,“Everything”, and “Hard” lock dates if needed.",
        "There is no required sequence for setting the lock dates."
      ],
      correct: "'Tax Return', 'Sales', 'Purchase', 'Everything', 'Hard'."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 26 — TAX CONFIGURATION
     ===================================================== */
  accounting_materi26: [
    {
      question: "Apa fungsi opsi 'Affect Base of Subsequent Taxes' saat diaktifkan pada pajak?",
      question_en: "What does the \"Affect Base of Subsequent Taxes\" option do when activated on a tax?",
      options: [
        "Jumlah pajak ini akan ditambahkan ke basis perhitungan pajak BERIKUTNYA.",
        "Pajak berikutnya ditambahkan ke basis pajak ini.",
        "Jumlah pajak termasuk dalam harga.",
        "Memanggil pasukan minion."
      ],
      options_en: [
        "The current tax will be added to the base on which the next tax (listed after the current one in the taxes' list) will be applied.",
        "The next tax (listed after the current one in the taxes' list) will be added to the base on which the current tax will be applied.",
        "The amount of the tax will be included in the price.",
        "It will summon an army of minions."
      ],
      correct: "Jumlah pajak ini akan ditambahkan ke basis perhitungan pajak BERIKUTNYA."
    },
    {
      question: "Mengapa urutan daftar pajak (taxes list) penting?",
      question_en: "Why is the order of the taxes' list crucial?",
      options: [
        "Menentukan urutan tampilan di faktur saja.",
        "Menentukan urutan komputasi pajak.",
        "Tidak penting, hanya kerapian.",
        "Karena pajak yang mempengaruhi basis pajak berikutnya (Affect Base...) harus berurutan agar dihitung benar."
      ],
      options_en: [
        "It defines the order in which the different taxes are displayed on the invoices, between the subtotal and the total.",
        "It defines in which order the taxes are computed.",
        "It is not crucial; it only allows us to keep our list well organized.",
        "Because taxes that affect the base of subsequent taxes and that are mapped in Fiscal Positions need to be next to each other for them to be correctly applied when you create a new invoice for a customer based abroad or taxed differently."
      ],
      correct: "Menentukan urutan komputasi pajak."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 27 — ASSETS DEPRECIATION
     ===================================================== */
  accounting_materi27: [
    {
      question: "Mana yang BUKAN metode depresiasi di Odoo?",
      question_en: "Which of the following is not a depreciation method in Odoo?",
      options: [
        "Straight line (Garis Lurus)",
        "Declining (Menurun)",
        "Straight line then declining",
        "Declining then straight line"
      ],
      options_en: [
        "Straight line",
        "Declining",
        "Straight line then declining",
        "Declining then straight line"
      ],
      correct: "Straight line then declining"
    },
    {
      question: "Metode komputasi mana yang memungkinkan pelacakan depresiasi paling presisi?",
      question_en: "Which computation method allows the most precise tracking of asset depreciation?",
      options: [
        "No Prorata",
        "Constant Periods",
        "Based on days per period"
      ],
      options_en: [
        "No Prorata",
        "Constant Periods",
        "Based on days per period"
      ],
      correct: "Based on days per period"
    },
    {
      question: "Bagaimana aset dikelompokkan di Jadwal Depresiasi (Depreciation Schedule)?",
      question_en: "How are assets grouped on the Depreciation Schedule?",
      options: [
        "Berdasarkan Akun Aset Tetap (Fixed Asset Account).",
        "Berdasarkan Akun Depresiasi.",
        "Berdasarkan Jurnal.",
        "Berdasarkan Tanggal Akuisisi."
      ],
      options_en: [
        "By the assets’ Fixed Asset Account",
        "By the assets’ Depreciation Account",
        "By the assets’ Journal",
        "By the assets’ Acquisition Date"
      ],
      correct: "Berdasarkan Akun Aset Tetap (Fixed Asset Account)."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 28 — ASSET MODELS
     ===================================================== */
  accounting_materi28: [
    {
      question: "Jenis akun apa yang bisa mengotomatiskan pembuatan aset?",
      question_en: "What types of accounts can automate asset creation?",
      options: [
        "Current assets, non-current assets, prepayments, dan fixed assets.",
        "Non-current assets, prepayments, dan fixed assets.",
        "Non-current assets dan fixed assets.",
        "Hanya fixed assets."
      ],
      options_en: [
        "Only current assets, non-current assets, prepayments, and fixed assets",
        "Only non-current assets, prepayments, and fixed assets",
        "Only non-current assets and fixed assets",
        "Only fixed assets"
      ],
      correct: "Non-current assets dan fixed assets."
    },
    {
      question: "Field manakah dari aset yang bisa diset dengan memilih model aset?",
      question_en: "Which field of an asset can be set by selecting an asset model?",
      options: [
        "Original value",
        "Acquisition date",
        "Not depreciable value",
        "Duration (Durasi)"
      ],
      options_en: [
        "Original value",
        "Acquisition date",
        "Not depreciable value",
        "Duration"
      ],
      correct: "Duration (Durasi)"
    },
    {
      question: "Apa fungsi centang 'Manage Items' pada akun aset tetap atau lancar?",
      question_en: "What does selecting the Manage Items checkbox on a fixed or current asset account do?",
      options: [
        "Membuat item aset ganda tergantung jumlah (quantity) di baris tagihan, bukan satu aset global.",
        "Membuat produk konsinyasi.",
        "Membuka wizard penerimaan item.",
        "Mengirim aset ke quality control."
      ],
      options_en: [
        "Generates multiple asset items depending on the bill line’s quantity instead of one global asset",
        "Creates consignment products out of the assets to easily manage reselling consignment inventory",
        "Opens a wizard that allows you to manage the item receipt with lots/serial numbers, quantity, and valuation",
        "Allows you to send the assets through a quality control flow to ensure assets are valued appropriately"
      ],
      correct: "Membuat item aset ganda tergantung jumlah (quantity) di baris tagihan, bukan satu aset global."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 29 — DEFERRED REVENUE
     ===================================================== */
  accounting_materi29: [
    {
      question: "Bagaimana cara mencatat pendapatan ditangguhkan (deferred revenue)?",
      question_en: "How can I register deferred revenue?",
      options: [
        "Menggunakan model 'Deferred Revenue' di Config dan memilih akun terkait saat buat faktur.",
        "Masukkan Start Date dan End Date lewat menu toggle di faktur.",
        "Membuat dan menggunakan akun 'Deferred Revenue'."
      ],
      options_en: [
        "By using the “Deferred Revenue” model under “Configuration” and selecting the related account(s) when creating an invoice or bill.",
        "Enter a “Start Date” and “End Date” through the ‘toggle’ menu on an invoice or bill.",
        "By creating and using a “Deferred Revenue” account."
      ],
      correct: "Masukkan Start Date dan End Date lewat menu toggle di faktur."
    },
    {
      question: "Apa syarat agar tombol 'Cut-off' muncul?",
      question_en: "What is the requirement to access the “Cut-off” button?",
      options: [
        "Diaktifkan di Settings.",
        "Akun yang digunakan harus tipe 'Expense' atau 'Income'.",
        "Tanggal Bill dan Accounting Date berbeda."
      ],
      options_en: [
        "Have it enabled in the “Settings”.",
        "The account used must either be of the “Expense” or “Income” type.",
        "Have a different “Bill date” and “Accounting date”."
      ],
      correct: "Akun yang digunakan harus tipe 'Expense' atau 'Income'."
    },
    {
      question: "Apa syarat membuat entri akrual untuk banyak tagihan sekaligus?",
      question_en: "What is the condition for creating accrued entries for multiple bills at once?",
      options: [
        "Harus dari partner yang sama.",
        "Harus menggunakan akun yang sama.",
        "Harus tipe dokumen yang sama (misal bills atau debit notes)."
      ],
      options_en: [
        "They must be from the same partner.",
        "They must use the same account.",
        "They must be of the same type (e.g., bills or debit notes)."
      ],
      correct: "Harus menggunakan akun yang sama."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 30 — ANALYTIC DISTRIBUTION
     ===================================================== */
  accounting_materi30: [
    {
      question: "Apa fungsi model distribusi analitik (analytic distribution models)?",
      question_en: "What do analytic distribution models do?",
      options: [
        "Mendefinisikan layout laporan analitik.",
        "Otomatis menerapkan distribusi analitik spesifik berdasarkan kriteria yang ditentukan.",
        "Mendefinisikan default applicability rencana analitik.",
        "Membuat hierarki parent/child."
      ],
      options_en: [
        "They help to define the report layout for analytic items and save it as a template.",
        "They automatically apply a specific analytic distribution based on defined criteria.",
        "They define the default applicability of an analytic plan.",
        "They create a parent/child hierarchy in analytic plans when a more complex structure is required."
      ],
      correct: "Otomatis menerapkan distribusi analitik spesifik berdasarkan kriteria yang ditentukan."
    },
    {
      question: "Di mana Anda dapat menemukan entri analitik?",
      question_en: "Where can you find analytic entries?",
      options: [
        "Reporting > Balance sheet.",
        "General settings.",
        "Accounting dashboard.",
        "Accounting menu > Analytic items."
      ],
      options_en: [
        "By going to Reporting > Balance sheet.",
        "By going to the general settings.",
        "By going to the Accounting dashboard.",
        "By going to the Accounting menu > Analytic items."
      ],
      correct: "Accounting menu > Analytic items."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 31 — BUDGET
     ===================================================== */
  accounting_materi31: [
    {
      question: "Untuk mengelola anggaran di Odoo, Anda perlu...",
      question_en: "In order to manage your budget, you need to",
      options: [
        "Menunggu akhir periode agar data akurat.",
        "Menyiapkan akun analitik (analytic accounts) terlebih dahulu untuk struktur dan filter anggaran.",
        "Menggunakan penasihat keuangan."
      ],
      options_en: [
        "Wait until the end of the period so all the information is accurate and complete",
        "Set up analytic accounts first to structure and filter your budget",
        "Use a financial advisor to help you."
      ],
      correct: "Menyiapkan akun analitik (analytic accounts) terlebih dahulu untuk struktur dan filter anggaran."
    },
    {
      question: "Committed amount adalah jumlah baris pada SO/PO yang dikonfirmasi tapi belum ditagih, DAN...",
      question_en: "The committed amount is the sum of the lines on any confirmed sales or purchase order that have not yet been invoiced or billed, and",
      options: [
        "Jumlah teoritis (Theoretical amount).",
        "Jumlah tercapai (Achieved amount).",
        "Jumlah anggaran (Budget amount)."
      ],
      options_en: [
        "The theoretical amount.",
        "The achieved amount.",
        "The budget amount."
      ],
      correct: "Jumlah tercapai (Achieved amount)."
    },
    {
      question: "Mengapa baris PO muncul berwarna merah (di Budget Analysis)?",
      question_en: "Why would a line in a purchase order appear in red?",
      options: [
        "Baris PO perlu dibayar.",
        "Vendor tidak punya stok.",
        "Jika dikonfirmasi, baris PO ini akan melebihi anggaran (exceed budget)."
      ],
      options_en: [
        "The line on the PO still needs to be paid to your vendor.",
        "The vendor does not have enough stock and will not be able to deliver the product.",
        "If confirmed, this PO line will exceed the budget."
      ],
      correct: "Jika dikonfirmasi, baris PO ini akan melebihi anggaran (exceed budget)."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 32 — AVATAX
     ===================================================== */
  accounting_materi32: [
    {
      question: "Informasi apa yang perlu dimasukkan ke database settings untuk koneksi AvaTax?",
      question_en: "What information do you need to enter into the Odoo database settings to connect the AvaTax account to Odoo?",
      options: [
        "Sertifikat pengecualian AvaTax.",
        "Kode pajak AvaTax.",
        "Informasi Login/Environment (Sandbox/Prod) dan Kredensial (API Key/Secret, atau Username/Password tertentu, tapi di Odoo biasanya butuh kredensial API). Konteks soal: AvaTax account number and License Key.",
        "Username dan password."
      ],
      options_en: [
        "The AvaTax exemption certificate and tax return code.",
        "The AvaTax tax codes.",
        "The AvaTax account number and License Key.",
        "The AvaTax username and password."
      ],
      correct: "The AvaTax account number and License Key."
    },
    {
      question: "Kapan AvaTax TIDAK menghitung pajak secara otomatis?",
      question_en: "When does AvaTax NOT automatically calculate the tax?",
      options: [
        "Saat quote dikonfirmasi jadi SO.",
        "Saat validasi DO.",
        "Saat validasi draft invoice.",
        "Saat pelanggan melihat langganan (subscription) mereka di portal pelanggan."
      ],
      options_en: [
        "When a quotation is confirmed into a sales order.",
        "When you validate a delivery order.",
        "When you validate a draft invoice.",
        "When a customer views their subscription in the customer portal."
      ],
      correct: "Saat validasi DO."
    },
    {
      question: "Alamat mana yang digunakan AvaTax untuk menghitung pajak?",
      question_en: "Which addresses does AvaTax use to calculate tax?",
      options: [
        "Alamat Perusahaan dan alamat pelanggan.",
        "Alamat gudang (Warehouse) dan alamat pelanggan.",
        "Alamat Perusahaan dan alamat gudang.",
        "Hanya alamat pelanggan."
      ],
      options_en: [
        "The Company address and the customer’s address.",
        "The warehouse address and the customer’s address.",
        "The Company address and the warehouse address.",
        "Only the customer’s address."
      ],
      correct: "Alamat Perusahaan dan alamat pelanggan."
    }
  ],

  /* =====================================================
     ACCOUNTING MATERI 33 — MULTI-COMPANY
     ===================================================== */
  accounting_materi33: [
    {
      "accounting_materi_branch_companies": [
        {
          "question": "Jika saya memiliki perusahaan utama dengan cabang (branch) yang terhubung, kapan tanggal penutupan periode fiskalnya?",
          "question_en": "If I have a main company with branches linked to it, when is the closing date of the fiscal period?",
          "options": [
            "Terdapat satu periode fiskal yang ditangani oleh perusahaan utama, dan berlaku untuk semua cabangnya.",
            "Perusahaan utama dan setiap cabang memiliki tanggal penutupan periode fiskal masing-masing.",
            "Perusahaan utama menangani periode fiskalnya sendiri, dan semua cabangnya memiliki periode fiskal terpisah yang sama.",
            "Di pengaturan cabang, tanggal penutupan periode fiskal dapat diatur sama dengan perusahaan utama atau tanggal penutupan cabang itu sendiri."
          ],
          "options_en": [
            "There is a fiscal period handled by the main company, and it applies to all its branches.",
            "The main company and each branch all have their own fiscal period closing date.",
            "The main company handles its own fiscal period, and all its branches have a separate common fiscal period.",
            "In the branch settings, the fiscal period closing date can be set to the same date as the main company's or the branch’s own fiscal period closing date."
          ],
          "correct": "Terdapat satu periode fiskal yang ditangani oleh perusahaan utama, dan berlaku untuk semua cabangnya."
        },
        {
          "question": "Bisakah pengguna memiliki hak akses berbeda untuk setiap perusahaan/cabang?",
          "question_en": "Can users have different access rights for each company/branch?",
          "options": [
            "Akses pengguna dapat diberikan atau dibatasi untuk perusahaan utama tertentu, tetapi akses cabang sama dengan akses perusahaan utamanya.",
            "Akses pengguna sama untuk semua perusahaan dan cabang yang dikelola dalam database yang sama.",
            "Akses pengguna dapat diberikan atau dibatasi untuk perusahaan utama dan/atau cabang tertentu secara spesifik.",
            "Hak akses tidak dapat diatur untuk masing-masing perusahaan atau cabang, karena izin hanya berlaku pada tingkat database."
          ],
          "options_en": [
            "User access can be granted or limited to specific main companies, but branch access is the same as the main company's.",
            "User access is the same for all companies and branches managed in the same database.",
            "User access can be granted or limited to specific main companies and/or branches.",
            "Access rights cannot be set for individual companies or branches, as permissions apply only at the database level."
          ],
          "correct": "Akses pengguna dapat diberikan atau dibatasi untuk perusahaan utama dan/atau cabang tertentu secara spesifik."
        },
        {
          "question": "Apakah mungkin memiliki perusahaan utama di satu negara dan cabangnya (branch) di negara lain?",
          "question_en": "Is it possible to have the main company in one country and its branches in other countries?",
          "options": [
            "Ya, karena mereka semua beroperasi secara independen. Fitur cabang memungkinkan akses ke catatan terkait cabangnya dari perusahaan utama.",
            "Tidak, perusahaan utama dan cabangnya harus berada di negara yang sama untuk menghindari ketidakkonsistenan akuntansi (Fiscal Localization).",
            "Ya, tetapi membutuhkan pekerjaan akuntansi ekstra karena mereka semua beroperasi di bawah aturan fiskal yang berbeda.",
            "Ini tergantung pada negara tempat perusahaan utama berbasis, karena hukum setempat berlaku."
          ],
          "options_en": [
            "Yes, as they all operate independently. The branch feature allows access to records related to its branches from the main company.",
            "No, the main company and its branches must be in the same country to avoid accounting inconsistencies.",
            "Yes, but it requires extra accounting work as they all operate under different fiscality rules.",
            "This depends on the country where the main company is based, as local laws apply."
          ],
          "correct": "Tidak, perusahaan utama dan cabangnya harus berada di negara yang sama untuk menghindari ketidakkonsistenan akuntansi (Fiscal Localization)."
        },
        {
          "question": "Bisakah akun (Account) dibagikan antar perusahaan?",
          "question_en": "Can accounts be shared between companies?",
          "options": [
            "Ya, akun dapat dipetakan atau digabungkan antar perusahaan, dan item jurnal yang ditampilkan pada laporan konsolidasi ditampilkan secara terpisah.",
            "Ya, akun dapat dipetakan atau digabungkan antar perusahaan, dan laporan terpengaruh dengan semua item jurnal ditampilkan dari perspektif perusahaan yang aktif.",
            "Ya, akun dapat dipetakan atau digabungkan antar perusahaan, dan multi-ledger perlu dikonfigurasi untuk melihat dampaknya pada laporan.",
            "Tidak, setiap akun dikaitkan dengan bagan akun (Chart of Accounts) dari masing-masing perusahaan atau cabang."
          ],
          "options_en": [
            "Yes, accounts can either be mapped or merged between companies, and the journal items displayed on consolidated reports are shown separately.",
            "Yes, accounts can be either mapped or merged between companies, and reports are impacted with all journal items displayed from the active company’s perspective.",
            "Yes, accounts can either be mapped or merged between companies, and multi-ledgers need to be configured to view the impact on reports.",
            "No, each account is associated with the chart of accounts of its respective company or branch."
          ],
          "correct": "Ya, akun dapat dipetakan atau digabungkan antar perusahaan, dan laporan terpengaruh dengan semua item jurnal ditampilkan dari perspektif perusahaan yang aktif."
        }
      ]
    }
  ],

  /* =====================================================
     PHASE 8: REPORTING
     ===================================================== */
  accounting_materi34: [
    {
      question: "Anda melihat akun yang salah digunakan untuk beberapa faktur saat memeriksa laporan audit jurnal. Apa cara terbaik untuk mengubah akun ke yang benar?",
      question_en: "You noticed the wrong account was used for multiple invoices while checking the journal audit report. What is the best way to change the account to the correct one?",
      options: [
        "Pada tampilan daftar item jurnal, pilih entri yang akan diubah, klik pada akun, dan perbarui ke akun yang benar.",
        "Reset faktur yang terdampak menjadi draft satu per satu, ubah akun, dan konfirmasi.",
        "Buat ulang faktur dengan memilih akun yang benar.",
        "Pada laporan audit jurnal, klik dan seret item ke bagian akun yang benar."
      ],
      options_en: [
        "In the journal item list view, select the entries to change, click on the account, and update it to the correct one.",
        "Individually reset the impacted invoices to draft, change the account, and confirm.",
        "Re-create the invoices, selecting the correct account.",
        "On the journal audit report, click and drag the items into the correct account’s section."
      ],
      correct: "Pada tampilan daftar item jurnal, pilih entri yang akan diubah, klik pada akun, dan perbarui ke akun yang benar."
    },
    {
      question: "Bagaimana Anda dapat dengan cepat mengakses entri dari akun tertentu di laporan audit jurnal?",
      question_en: "How can you quickly access the entries from a specific account in the journal audit report?",
      options: [
        "Drill down pada jurnal dan klik pada akun untuk melihat entri-entrinya.",
        "Drill down pada jurnal; entri ditampilkan dalam urutan hierarki.",
        "Klik 'Accounts' di bawah 'Journal report' di menu 'Reporting'.",
        "Di bagian Ringkasan Pajak Global, klik pajak terkait."
      ],
      options_en: [
        "Drill down on the journal and click on the account to view its entries.",
        "Drill down on the journal; the entries are displayed in a hierarchical order.",
        "Click “Accounts” under “Journal report” in the “Reporting” menu.",
        "In the Global Tax Summary section, click on the corresponding tax."
      ],
      correct: "Drill down pada jurnal dan klik pada akun untuk melihat entri-entrinya."
    },
    {
      question: "Bagaimana cara membandingkan dua periode neraca?",
      question_en: "How can you compare two periods of the balance sheet?",
      options: [
        "Pilih 'Split Horizontally' dari tombol opsi tambahan.",
        "Pilih periode menggunakan tombol 'Comparison' pada neraca.",
        "Pilih periode di tombol 'History'; Odoo secara otomatis menampilkan jumlah dari dua periode secara berdampingan.",
        "Tidak mungkin membandingkan dua periode neraca."
      ],
      options_en: [
        "Select “Split Horizontally” from the additional options button.",
        "Select a period using the “Comparison” button of the balance sheet.",
        "Select a period in the “History” button; Odoo automatically displays the amounts of the two periods side-by-side.",
        "It’s not possible to compare two periods of the balance sheet."
      ],
      correct: "Pilih periode menggunakan tombol 'Comparison' pada neraca."
    },
    {
      question: "Bagaimana cara Anda membuat anggaran keuangan?",
      question_en: "How do you create financial budgets?",
      options: [
        "Pertama, siapkan rencana dan akun analitik untuk menyusun anggaran, lalu buat anggaran di neraca.",
        "Klik tombol anggaran pada neraca, beri nama, dan tetapkan jumlah untuk setiap akun yang memerlukan analisis.",
        "Klik tombol anggaran pada laporan 'Profit & Loss', beri nama, dan tetapkan jumlah untuk setiap akun yang memerlukan analisis.",
        "Pertama, siapkan rencana dan akun analitik, lalu buat laporan anggaran 'Profit & Loss' dan tetapkan jumlah untuk setiap akun analitik."
      ],
      options_en: [
        "First, set up analytical plans and accounts to structure the budget, then create the budget in the balance sheet.",
        "Click the budget button on the balance sheet, name it, and assign amounts to each account requiring analysis.",
        "Click the budget button on the “Profit & Loss” report, name it, and assign amounts to each account requiring analysis.",
        "First, set up analytical plans and accounts to structure the budget, then create the budget “Profit & Loss” report and assign an amount to each analytic account."
      ],
      correct: "Klik tombol anggaran pada laporan 'Profit & Loss', beri nama, dan tetapkan jumlah untuk setiap akun yang memerlukan analisis."
    }
  ],

  /* =====================================================
     PHASE 9: VALUATION & COSTING
     ===================================================== */
  accounting_materi35: [
    {
      question: "Apa tiga metode biaya (costing methods) di Odoo?",
      question_en: "What are the three costing methods in Odoo?",
      options: [
        "FIFO, LIFO, AVCO",
        "FIFO, FEFO, AVCO",
        "FEFO, AVCO, Standard",
        "FIFO, AVCO, Standard"
      ],
      options_en: [
        "FIFO, LIFO, AVCO",
        "FIFO, FEFO, AVCO",
        "FEFO, AVCO, Standard",
        "FIFO, AVCO, Standard"
      ],
      correct: "FIFO, AVCO, Standard"
    },
    {
      question: "Apa perbedaan antara penilaian persediaan manual dan otomatis?",
      question_en: "What is the difference between manual and automated inventory valuation?",
      options: [
        "Dalam manual, akuntan harus membuat entri jurnal berkala untuk memperbarui nilai akun persediaan, tetapi dalam otomatis tidak.",
        "Dalam manual, pengguna harus memvalidasi pengiriman dan penerimaan produk secara manual setiap kali produk masuk dan keluar gudang, tetapi dalam otomatis tidak.",
        "Dalam manual, pengguna harus memvalidasi faktur pelanggan dan tagihan vendor secara manual, tetapi dalam otomatis tidak.",
        "Dalam manual, akuntan harus melakukan pembaruan persediaan berkala untuk mencocokkan nilai akun persediaan, tetapi dalam otomatis tidak."
      ],
      options_en: [
        "In manual, accountants must make periodic journal entries to update the value of the inventory account, but in automated, they do not.",
        "In manual, users have to manually validate deliveries and receipts of products each time products enter and leave the warehouse, but in automated, they do not.",
        "In manual, users have to manually validate customer invoices and vendor bills, but in automated, they do not.",
        "In manual, accountants have to make periodic inventory updates to match the value of the inventory account, but in automated, they do not."
      ],
      correct: "Dalam manual, akuntan harus membuat entri jurnal berkala untuk memperbarui nilai akun persediaan, tetapi dalam otomatis tidak."
    },
    {
      question: "Produk A menggunakan metode biaya standar dan memiliki biaya €12 pada data produknya. Jika satu unit dibeli seharga €10 dan dua unit dibeli seharga €16, berapa total nilai Produk A?",
      question_en: "Product A uses the standard cost costing method and has a cost of €12 on its product record. If one unit is purchased at €10 and two units are purchased at €16, what is the total value of Product A?",
      options: [
        "€13",
        "€36",
        "€39",
        "€42"
      ],
      options_en: [
        "€13",
        "€36",
        "€39",
        "€42"
      ],
      correct: "€36"
    }
  ],

  accounting_materi36: [
    {
      question: "Kapan biaya harga pokok penjualan (HPP) dicatat dalam Laba Rugi untuk penilaian persediaan continental?",
      question_en: "When are the costs of goods sold registered in the P&L for continental inventory valuation?",
      options: [
        "Pada akhir setiap periode.",
        "Saat penerimaan barang.",
        "Pada akhir tahun fiskal."
      ],
      options_en: [
        "At the end of each period.",
        "At receipt of goods.",
        "At the end of the fiscal year."
      ],
      correct: "Saat penerimaan barang."
    },
    {
      question: "Dalam continental, apa yang harus dilakukan akuntan secara berkala?",
      question_en: "In continental, what should an accountant periodically do?",
      options: [
        "Jika barang tidak segera terjual, tidak ada tindakan yang diperlukan karena akan muncul di laporan Laba Rugi.",
        "Jika barang tidak segera terjual, akuntan harus memastikan bahwa mereka tercatat dalam persediaan.",
        "Jika barang tidak segera terjual, akuntan harus menambahkannya ke neraca."
      ],
      options_en: [
        "If the goods are not sold immediately, no action is required since they will appear on the Profit & Loss statement.",
        "If the goods are not sold immediately, the accountant must make sure that they are recorded in the inventory.",
        "If the goods are not sold immediately, the accountant must add them to the balance sheet."
      ],
      correct: "Jika barang tidak segera terjual, akuntan harus menambahkannya ke neraca."
    }
  ],

  accounting_materi37: [
    {
      question: "Di mana akun HPP (COGS) dapat diatur?",
      question_en: "Where can the COGS account be set?",
      options: [
        "Kolom Akun Beban (Expense Account) pada data produk",
        "Kolom Akun Beban (Expense Account) pada data kategori produk",
        "Kolom Akun Beban (Expense Account) pada jurnal Tagihan Vendor",
        "Semua jawaban di atas"
      ],
      options_en: [
        "The Expense Account field on the product record",
        "The Expense Account field on the product category record",
        "The Expense Account field on the Vendor Bills journal record",
        "All of the above"
      ],
      correct: "Semua jawaban di atas"
    },
    {
      question: "Kapan harga pokok penjualan (HPP) diakui saat menggunakan penilaian persediaan Anglo-Saxon?",
      question_en: "When is the cost of goods sold (COGS) recognized when using Anglo-Saxon inventory valuation?",
      options: [
        "Saat pesanan penjualan ke pelanggan dikonfirmasi",
        "Saat faktur ke pelanggan dikonfirmasi",
        "Saat pesanan pembelian ke vendor dikonfirmasi",
        "Saat tagihan vendor dikonfirmasi"
      ],
      options_en: [
        "When the sales order to the customer is confirmed",
        "When the invoice to the customer is confirmed",
        "When the purchase order to the vendor is confirmed",
        "When the vendor bill to is confirmed"
      ],
      correct: "Saat faktur ke pelanggan dikonfirmasi"
    }
  ],

  /* =====================================================
     PHASE 10: MULTI-CURRENCY & CLOSING
     ===================================================== */
  accounting_materi38: [
    {
      question: "Kapan entri selisih kurs Keuntungan/Kerugian Terealisasi dibuat di Odoo?",
      question_en: "When are Realized Gains/Losses exchange difference entries generated in Odoo?",
      options: [
        "Setelah pembayaran didaftarkan.",
        "Saat nilai tukar mata uang diperbarui.",
        "Saat faktur atau tagihan dengan mata uang asing dibuat."
      ],
      options_en: [
        "After the payment is registered.",
        "When a currency rate is updated.",
        "When an invoice or bill with a foreign currency is created."
      ],
      correct: "Setelah pembayaran didaftarkan."
    },
    {
      question: "Bagaimana cara mengotomatiskan jenis mata uang tagihan berdasarkan pemasok?",
      question_en: "How can I automate the currency type of a bill based on the vendor?",
      options: [
        "Dengan mendefinisikan mata uang di 'Supplier Currency' pada formulir pemasok.",
        "Dengan mendefinisikan posisi fiskal pada formulir pemasok.",
        "Dengan mendefinisikan alamat pada formulir pemasok."
      ],
      options_en: [
        "By defining a currency in the “Supplier Currency” of the vendor’s form.",
        "By defining a fiscal position in the vendor’s form.",
        "By defining an address in the vendor’s form."
      ],
      correct: "Dengan mendefinisikan mata uang di 'Supplier Currency' pada formulir pemasok."
    },
    {
      question: "Saat membuat atau mengimpor rekening koran, di mana saya dapat menemukan kolom 'Amount Currency' dan 'Foreign Currency'?",
      question_en: "When creating or importing a bank statement, where can I find the “Amount Currency” and “Foreign Currency” fields?",
      options: [
        "Mereka harus diaktifkan di pengaturan aplikasi akuntansi.",
        "Dengan mengklik tombol ⋮ dan mencentang kedua kolom tersebut.",
        "Mereka ditambahkan secara otomatis berdasarkan tagihan yang berisi 'Partner' yang sama di kolom 'Partner'."
      ],
      options_en: [
        "They must be enabled in the accounting app settings.",
        "By clicking on the ⋮ button and checking both fields.",
        "They are automatically added based on bills containing the same “Partner” in the “Partner field”."
      ],
      correct: "Dengan mengklik tombol ⋮ dan mencentang kedua kolom tersebut."
    }
  ],

  accounting_materi39: [
    {
      question: "Apa yang harus saya lakukan setelah menetapkan tanggal penutupan periode fiskal di laporan Keuntungan/Kerugian Belum Terealisasi saya?",
      question_en: "What must I do upon setting a closing date for the fiscal period in my Unrealized Gains/Losses report?",
      options: [
        "Tetapkan tanggal pembalikan (reversal date) pada hari pertama setelah penutupan.",
        "Tidak ada, semuanya otomatis.",
        "Tetapkan Keuntungan/Kerugian Belum Terealisasi sebagai 'Terealisasi'."
      ],
      options_en: [
        "Set a reversal date on the first day after the closing.",
        "Nothing, everything is automatic.",
        "Set the Unrealized Gains/Losses as “Realized”."
      ],
      correct: "Tetapkan tanggal pembalikan (reversal date) pada hari pertama setelah penutupan."
    }
  ],

  accounting_materi40: [
    {
      question: "Apa yang dapat Anda lakukan jika Anda memulai bisnis di tengah tahun fiskal?",
      question_en: "What can you do if you started your business in the middle of a fiscal year?",
      options: [
        "Sesuaikan tahun fiskal di Odoo dengan peraturan akuntansi lokal Anda dan mulai faktur serta tagihan pada tanggal pembukaan bisnis Anda.",
        "Di aplikasi Pengaturan, ubah Hari Terakhir tahun fiskal ke tanggal pembukaan bisnis Anda.",
        "Odoo secara otomatis membuat periode fiskal mulai dari hari database Anda dibuat dan sesuai dengan paket lokalisasi yang diinstal.",
        "Di aplikasi Pengaturan, aktifkan opsi Tahun Fiskal, lalu buat Tahun Fiskal baru dengan Tanggal Mulai dan Akhir tertentu."
      ],
      options_en: [
        "Match the fiscal year in Odoo to your local accounting regulation and have the invoices and bills start on the date of your business opening.",
        "In the Settings app, change the fiscal year’s Last Day to the date of your business opening.",
        "Odoo automatically creates a fiscal period starting on the day your database is created and in accordance with your localization package installed.",
        "In the Settings app, enable the Fiscal Years option, then create a new Fiscal Year with specific Start and End Dates."
      ],
      correct: "Di aplikasi Pengaturan, aktifkan opsi Tahun Fiskal, lalu buat Tahun Fiskal baru dengan Tanggal Mulai dan Akhir tertentu."
    },
    {
      question: "Di mana Anda dapat memverifikasi jumlah pendapatan yang belum dialokasikan untuk tahun fiskal sebelumnya setelah Anda menutupnya?",
      question_en: "Where can you verify the amount of unallocated earnings for the previous fiscal year once you’ve closed it?",
      options: [
        "Pada neraca, dengan periode disetel ke 'Akhir Tahun' untuk tahun sebelumnya, pada baris Pendapatan Belum Dialokasikan Tahun Sebelumnya",
        "Pada laporan laba rugi, dengan periode disetel ke 'Akhir Tahun' untuk tahun sebelumnya, pada baris Laba Bersih",
        "Pada neraca, dengan periode disetel ke 'Akhir Tahun' untuk tahun berjalan, pada baris Pendapatan Belum Dialokasikan Tahun Sebelumnya",
        "Pada laporan laba rugi, dengan periode disetel ke 'Akhir Tahun' untuk tahun berjalan, pada baris Laba Bersih"
      ],
      options_en: [
        "On the balance sheet, with the period set to “End of Year” for the previous year, on the Previous Years Unallocated Earnings line",
        "On the profit and loss statement, with the period set to “End of Year” for the previous year, on the Net Profit line",
        "On the balance sheet, with the period set to “End of Year” for the current year, on the Previous Years Unallocated Earnings line",
        "On the profit and loss statement, with the period set to “End of Year” for the current year, on the Net Profit line"
      ],
      correct: "Pada neraca, dengan periode disetel ke 'Akhir Tahun' untuk tahun berjalan, pada baris Pendapatan Belum Dialokasikan Tahun Sebelumnya"
    },
    {
      question: "Jurnal mana yang menangani Penutupan Tahunan di Odoo?",
      question_en: "Which journal handles Annual Closings in Odoo?",
      options: [
        "Jurnal Miscellaneous (Lain-lain).",
        "Jurnal Tax Returns (Pengembalian Pajak).",
        "Jurnal Annual Closing (Penutupan Tahunan).",
        "Jurnal Taxes (Pajak)."
      ],
      options_en: [
        "Miscellaneous journal.",
        "Tax Returns journal.",
        "Annual Closing journal.",
        "Taxes journal."
      ],
      correct: "Jurnal Tax Returns (Pengembalian Pajak)."
    },
    {
      question: "Status apa yang harus dimiliki cek untuk mengatur Penutupan Tahunan ke status Review?",
      question_en: "What state should the checks have to set an Annual Closing to Review status?",
      options: [
        "Reviewed atau Supervised.",
        "Reviewed saja.",
        "Supervised saja.",
        "To review, Reviewed, atau Supervised."
      ],
      options_en: [
        "Reviewed or Supervised.",
        "Reviewed only.",
        "Supervised only.",
        "To review, Reviewed or Supervised."
      ],
      correct: "Reviewed atau Supervised."
    }
  ],


  /* =====================================================
     INVENTORY TRACK
     ===================================================== */
  /* Inventory Materi 1 */
  inventory_materi1: [
    {
      question: "Jenis dokumen apa yang menjadi sumber penerimaan produk ke inventaris Anda?",
      question_en: "What type of document is the source of a receipt of products to your inventory?",
      options: [
        "Order Penjualan (SO).", 
        "Order Produksi.", 
        "Penawaran (Quotation).", 
        "Order Pembelian (PO)."
      ],
      options_en: [
        "A Sales Order.", 
        "A Manufacturing Order.", 
        "A Quotation.", 
        "A Purchase Order."
      ],
      correct: "Order Pembelian (PO)."
    },
    {
      question: "Saat menerima produk di Odoo, mengapa penting untuk mengatur 'Lokasi Tujuan' dengan benar pada resi?",
      question_en: "When receiving products in Odoo, why is it important to correctly set the ‘Destination Location’ on the receipt?",
      options: [
        "Untuk memastikan produk disimpan di lokasi gudang yang benar", 
        "Untuk melacak vendor mana yang mengirim pengiriman", 
        "Untuk menghitung total biaya barang yang diterima", 
        "Untuk memvalidasi resi secara otomatis tanpa tindakan lebih lanjut"
      ],
      options_en: [
        "To ensure products are stored in the correct warehouse location", 
        "To track which vendor sent the shipment", 
        "To calculate the total cost of goods received", 
        "To automatically validate the receipt without further action"
      ],
      correct: "Untuk memastikan produk disimpan di lokasi gudang yang benar"
    },
    {
      question: "Perbedaan utama apa yang terjadi jika mengaktifkan 'Lacak Inventaris' pada formulir produk?",
      question_en: "What key difference does enabling ‘Track Inventory’ on a product form make?",
      options: [
        "Ini memungkinkan jumlah stok dan lokasi produk dilacak", 
        "Secara otomatis memesan lebih banyak stok saat produk menipis", 
        "Membuat order pembelian untuk produk setiap kali terjual", 
        "Mencegah produk dipindahkan ke lokasi penyimpanan lain"
      ],
      options_en: [
        "It allows the product’s stock quantities and locations to be tracked", 
        "It automatically orders more stock when the product runs low", 
        "It creates a purchase order for the product whenever it’s sold", 
        "It prevents the product from being relocated to another storage location"
      ],
      correct: "Ini memungkinkan jumlah stok dan lokasi produk dilacak"
    }
  ],
  /* Inventory Materi 2 */
  inventory_materi2: [
    {
      question: "Mengapa Stealthy Wood menggunakan pengiriman 2 langkah?",
      question_en: "From the video, why does Stealthy Wood use 2-step delivery?",
      options: [
        "Untuk mengurangi jumlah karyawan yang terlibat dalam pengiriman", 
        "Karena tim picking mereka sangat efisien menemukan produk, dan tim pengiriman fokus pada verifikasi, pengepakan, dan pengiriman", 
        "Untuk meminimalkan kebutuhan verifikasi produk sebelum pengiriman", 
        "Karena sistem penyimpanan mereka memerlukan beberapa langkah untuk mengakses produk"
      ],
      options_en: [
        "To reduce the number of employees involved in deliveries", 
        "Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping", 
        "To minimize the need for product verification before shipping", 
        "Because their storage system requires multiple steps to access products"
      ],
      correct: "Karena tim picking mereka sangat efisien menemukan produk, dan tim pengiriman fokus pada verifikasi, pengepakan, dan pengiriman"
    },
    {
      question: "Nomor dokumen apa yang bisa menjadi sumber picking atau delivery order?",
      question_en: "What type of document can be the source of a picking or delivery order?",
      options: [
        "Order Penjualan (SO).", 
        "Order Produksi.", 
        "Penawaran (Quotation).", 
        "Order Pembelian (PO)."
      ],
      options_en: [
        "A Sales Order", 
        "A Manufacturing Order", 
        "A Quotation", 
        "A Purchase Order"
      ],
      correct: "Order Penjualan (SO)."
    },
    {
      question: "Apa artinya jika teks 'Ketersediaan Produk' menunjukkan 'Tersedia' dan berwarna hijau di Odoo?",
      question_en: "What does it mean when the ‘Product Availability’ text shows ‘Available’ and is green in Odoo?",
      options: [
        "Barang tersedia dan dicadangkan (reserved)", 
        "Barang sudah diterima", 
        "Barang diharapkan tiba tepat waktu jika diterima hari ini", 
        "Barang tersedia di gudang, tetapi belum dicadangkan"
      ],
      options_en: [
        "Items are available and reserved", 
        "Items have already been received", 
        "Items are expected to arrive in time for the delivery if received today", 
        "Items are available in the warehouse, but not reserved"
      ],
      correct: "Barang tersedia dan dicadangkan (reserved)"
    }
  ],
  /* Inventory Materi 3 */
  inventory_materi3: [
    {
      question: "Apa yang ditentukan oleh transfer inventaris dalam operasi gudang Odoo?",
      question_en: "What do inventory transfers determine in Odoo’s warehouse operations?",
      options: [
        "Bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses", 
        "Jumlah karyawan yang dibutuhkan di gudang", 
        "Harga produk berdasarkan lokasi gudang", 
        "Pemasok mana yang dapat mengirim pengiriman ke gudang"
      ],
      options_en: [
        "How products move within the warehouse and how shipments are processed", 
        "The number of employees needed in the warehouse", 
        "The pricing of products based on warehouse location", 
        "Which suppliers can send shipments to the warehouse"
      ],
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
  /* Inventory Materi21 */
  inventory_materi21: [
    {
      question: "Di mana di Odoo Anda dapat mengonfigurasi metode reservasi untuk delivery order?",
      question_en: "Where in Odoo can you configure the reservation method for delivery orders?",
      options: ["Sales > Products", "Inventaris > Konfigurasi > Tipe Operasi", "Manufacturing > Settings", "Accounting > Configuration"],
      options_en: ["Sales > Products", "Inventory > Configuration > Operation Types", "Manufacturing > Settings", "Accounting > Configuration"],
      correct: "Inventaris > Konfigurasi > Tipe Operasi"
    },
    {
      question: "Tindakan apa yang diperlukan untuk mereservasi stok ketika metode reservasi diatur ke \"Manual\"?",
      question_en: "What action is required to reserve stock when the reservation method is set to \"Manually\"?",
      options: ["Klik \"Periksa Ketersediaan\" pada Delivery Order", "Confirm the Sales Order", "Validate the Delivery", "Enable the Forecast Report"],
      options_en: ["Click \"Check Availability\" on the Delivery Order", "Confirm the Sales Order", "Validate the Delivery", "Enable the Forecast Report"],
      correct: "Klik \"Periksa Ketersediaan\" pada Delivery Order"
    },
    {
      question: "Dalam metode 'Sebelum Tanggal Terjadwal', apa yang memicu reservasi otomatis?",
      question_en: "In the 'Before Scheduled Date' method, what triggers the automatic reservation?",
      options: ["The stock quantity", "The invoice validation", "Jumlah hari sebelum tanggal pengiriman terjadwal", "The customer delivery address"],
      options_en: ["The stock quantity", "The invoice validation", "The number of days before the scheduled delivery date", "The customer delivery address"],
      correct: "Jumlah hari sebelum tanggal pengiriman terjadwal"
    },
  ],
  /* Inventory Materi22 */
  inventory_materi22: [
    {
      question: "Apa yang ditentukan oleh strategi removal (penghapusan)?",
      question_en: "What do removal strategies determine?",
      options: ["Which order gets the available stock first", "Item mana yang harus diambil atau dikeluarkan dari stok, dan kapan", "Where items should be stored when removing them from stock", "How to use the most packages to fulfill an order"],
      options_en: ["Which order gets the available stock first", "Which items should be picked or removed from stock, and when", "Where items should be stored when removing them from stock", "How to use the most packages to fulfill an order"],
      correct: "Item mana yang harus diambil atau dikeluarkan dari stok, dan kapan"
    },
    {
      question: "Strategi removal apa yang terbaik untuk barang yang mudah rusak (perishable)?",
      question_en: "What removal strategy is best for goods that are considered perishable?",
      options: ["First In First Out (FIFO)", "Paket Paling Sedikit (Least Packages)", "Closest Location", "First Expired First Out (FEFO)"],
      options_en: ["First In First Out (FIFO)", "Least Packages", "Closest Location", "First Expired First Out (FEFO)"],
      correct: "First Expired First Out (FEFO)"
    },
    {
      question: "Strategi removal apa yang harus saya gunakan untuk memastikan saya membuka jumlah paket paling sedikit saat memenuhi pesanan?",
      question_en: "What removal strategy would I use to ensure that I open the fewest number of packages when fulfilling an order?",
      options: ["Paket Paling Sedikit (Least Packages)", "Paket Paling Sedikit", "Closest Location", "First In First Out (FIFO)"],
      options_en: ["Least Packages", "Fewest Packages", "Closest Location", "First In First Out (FIFO)"],
      correct: "Paket Paling Sedikit (Least Packages)"
    },
  ],
  /* Inventory Materi23 */
  inventory_materi23: [
    {
      question: "Sales order untuk produk tertentu telah dikonfirmasi. Bagaimana Anda memastikan Anda mengirimkan produk pertama yang masuk ke stok Anda?",
      question_en: "A sales order for a specific product has been confirmed. How can you ensure you deliver the first product that enters your stock?",
      options: ["Dengan memilih FIFO sebagai Strategi Removal Anda", "By selecting LIFO as your Removal Strategy", "By selecting FEFO as your Put Away Strategy", "By selecting LIFO as your Put Away Strategy"],
      options_en: ["By selecting FIFO as your Removal Strategy", "By selecting LIFO as your Removal Strategy", "By selecting FEFO as your Put Away Strategy", "By selecting LIFO as your Put Away Strategy"],
      correct: "Dengan memilih FIFO sebagai Strategi Removal Anda"
    },
    {
      question: "Pengaturan Inventaris mana yang harus diaktifkan agar dapat menggunakan Strategi Removal Paksa LIFO pada kategori produk?",
      question_en: "Which Inventory settings must be enabled in order to use the LIFO Force Removal Strategy on the product category?",
      options: ["Expiration Dates and Landed Costs", "Lots/Serial Numbers", "Multi-Warehouses, Multi-Step Routes, and Storage Locations", "Lokasi Penyimpanan dan Rute Multi-Langkah"],
      options_en: ["Expiration Dates and Landed Costs", "Lots/Serial Numbers", "Multi-Warehouses, Multi-Step Routes, and Storage Locations", "Storage Locations and Multi-Step Routes"],
      correct: "Lokasi Penyimpanan dan Rute Multi-Langkah"
    },
    {
      question: "Bagaimana strategi removal FIFO ditetapkan ke lokasi di aplikasi Inventaris?",
      question_en: "How is the FIFO removal strategy assigned to a location in the Inventory app?",
      options: ["By going to Warehouse > Location > Force Removal Strategy", "Dengan pergi ke Konfigurasi > Lokasi > Removal Strategy", "By going to Warehouse > Shelf F > Removal Strategy", "By going to Configuration > Product Category > Removal Strategy"],
      options_en: ["By going to Warehouse > Location > Force Removal Strategy", "By going to Configuration > Location > Removal Strategy", "By going to Warehouse > Shelf F > Removal Strategy", "By going to Configuration > Product Category > Removal Strategy"],
      correct: "Dengan pergi ke Konfigurasi > Lokasi > Removal Strategy"
    },
  ],
  /* Inventory Materi24 */
  inventory_materi24: [
    {
      question: "Pengaturan Inventaris mana yang diperlukan untuk menggunakan strategi removal FEFO?",
      question_en: "Which Inventory setting(s) are required to use the FEFO removal strategy?",
      options: ["Lots and Serial Numbers, only", "Lots and Serial Numbers, Product Categories", "Storage Locations, only", "Tanggal Kedaluwarsa, Nomor Lot dan Serial"],
      options_en: ["Lots and Serial Numbers, only", "Lots and Serial Numbers, Product Categories", "Storage Locations, only", "Expiration Date, Lots and Serial Numbers"],
      correct: "Tanggal Kedaluwarsa, Nomor Lot dan Serial"
    },
    {
      question: "Strategi removal FEFO didasarkan pada bidang tanggal yang mana di Odoo?",
      question_en: "The FEFO removal strategy is based on which date field in Odoo?",
      options: ["Expiry Date", "Tanggal Penghapusan (Removal Date)", "Best Before Date", "Alert Date"],
      options_en: ["Expiry Date", "Removal Date", "Best Before Date", "Alert Date"],
      correct: "Tanggal Penghapusan (Removal Date)"
    },
    {
      question: "Anda memiliki produk dan nomor lot berikut dalam stok: LOT 1 (Tgl Hapus: 2 Nov, Qty: 20) dan LOT 2 (Tgl Hapus: 13 Apr, Qty: 13). Berapa banyak produk dari setiap lot yang diambil untuk pesanan 20 produk, yang dibuat pada 1 Januari tahun yang sama?",
      question_en: "You have the following products and lot numbers in stock: LOT 1 (Removal Date: November 2, On-hand Qty: 20) and LOT 2 (Removal Date: April 13, On-hand Qty: 13) How many products from each lot are picked for an order of 20 products, placed on January 1 of the same year?",
      options: ["Pick 7 products from LOT 1, and 13 products from LOT 2", "Pick 10 products from LOT 1, and 10 products from LOT 2", "Pick 20 products from LOT 1", "Ambil 13 produk dari LOT 1, dan 7 produk dari LOT 2"],
      options_en: ["Pick 7 products from LOT 1, and 13 products from LOT 2", "Pick 10 products from LOT 1, and 10 products from LOT 2", "Pick 20 products from LOT 1", "Pick 13 products from LOT 1, and 7 products from LOT 2"],
      correct: "Ambil 13 produk dari LOT 1, dan 7 produk dari LOT 2"
    },
  ],
  /* Inventory Materi25 */
  inventory_materi25: [
    {
      question: "Pengaturan Inventaris mana yang diperlukan untuk menggunakan strategi removal Closest Location?",
      question_en: "Which Inventory setting(s) are required to use the Closest Location removal strategy?",
      options: ["Lots and Serial Numbers, Multi-Step Routes", "Storage Locations", "Product Categories", "Lokasi Penyimpanan, Rute Multi-Langkah"],
      options_en: ["Lots and Serial Numbers, Multi-Step Routes", "Storage Locations", "Product Categories", "Storage Locations, Multi-Step Routes"],
      correct: "Lokasi Penyimpanan, Rute Multi-Langkah"
    },
    {
      question: "Produk saya, 'Es krim stroberi' disimpan di 'Freezer A' pada 'Freezer A/Rak 1' dan 'Freezer A/Rak 2'. Bagaimana cara mengatur strategi removal Closest Location untuk es krim tersebut?",
      question_en: "My product, 'Strawberry ice cream' is stored in 'Freezer A' on 'Freezer A/Rack 1' and 'Freezer A/Rack 2.' How do you set up the Closest Location removal strategy for the ice cream?",
      options: ["Go to Inventory app > Configuration > Settings, and set the 'Removal Strategy' field to 'Closest Location'", "Go to Inventory app > Configuration > Locations. In 'Rack 1' and 'Rack 2,' set the 'Force Removal Strategy' to 'Closest Location'", "Buka aplikasi Inventaris > Konfigurasi > Lokasi > 'Freezer A', dan atur 'Strategi Removal' ke 'Closest Location'", "In Inventory app > Configuration > 'Freezer A/Rack 1,' set the 'Force Removal Strategy' to 'Closest Location'"],
      options_en: ["Go to Inventory app > Configuration > Settings, and set the 'Removal Strategy' field to 'Closest Location'", "Go to Inventory app > Configuration > Locations. In 'Rack 1' and 'Rack 2,' set the 'Force Removal Strategy' to 'Closest Location'", "Go to Inventory app > Configuration > Locations > 'Freezer A,' and set the 'Removal Strategy' to 'Closest Location'", "In Inventory app > Configuration > 'Freezer A/Rack 1,' set the 'Force Removal Strategy' to 'Closest Location'"],
      correct: "Buka aplikasi Inventaris > Konfigurasi > Lokasi > 'Freezer A', dan atur 'Strategi Removal' ke 'Closest Location'"
    },
    {
      question: "Saya memiliki dua lokasi, Rak J dan Rak Z. Menggunakan metode removal Closest Location, bagaimana saya harus mengganti nama Rak Z, agar produk diambil dari lokasi ini terlebih dahulu?",
      question_en: "I have two locations, Shelf J and Shelf Z. Using the Closest Location removal method, how should I rename Shelf Z, so products are picked from this location first?",
      options: ["Rename 'Shelf Z' to 'Vault A.'", "Ganti nama 'Rak Z' menjadi 'Rak A.'", "Rename 'Shelf Z' to 'Shelf K.'", "Rename 'Shelf Z' to 'Shelf Y.'"],
      options_en: ["Rename 'Shelf Z' to 'Vault A.'", "Rename 'Shelf Z' to 'Shelf A.'", "Rename 'Shelf Z' to 'Shelf K.'", "Rename 'Shelf Z' to 'Shelf Y.'"],
      correct: "Ganti nama 'Rak Z' menjadi 'Rak A.'"
    },
  ],
  /* Inventory Materi26 */
  inventory_materi26: [
    {
      question: "Untuk menggunakan strategi removal Least Packages pada kategori produk, Anda perlu mengaktifkan pengaturan Inventaris berikut...",
      question_en: "In order to use the Least Packages removal strategy on a product category, you'll need to activate the following Inventory setting(s)...",
      options: ["Lokasi Penyimpanan, Rute Multi-Langkah", "Product Categories, Multi-Step Routes", "Packages, only", "Paket, Lokasi Penyimpanan, Rute Multi-Langkah"],
      options_en: ["Storage Locations, Multi-Step Routes", "Product Categories, Multi-Step Routes", "Packages, only", "Packages, Storage Locations, Multi-Step Routes"],
      correct: "Paket, Lokasi Penyimpanan, Rute Multi-Langkah"
    },
    {
      question: "Dalam tutorial, setelah mengonfirmasi sales order dan mengklik ikon hamburger, mengapa 'Paket Tujuan' untuk pesanan 100 batang cokelat sudah terisi otomatis?",
      question_en: "In the tutorial, after confirming the sales order and clicking the hamburger icon, why was the 'Destination Package' for the order of 100 chocolate bars pre-populated?",
      options: ["Someone set the 'Destination Package' in advance", "'Paket Sumber' berisi jumlah yang tepat untuk pesanan, jadi digunakan lagi sebagai 'Paket Tujuan'", "The 'Destination Package' is set to copy the 'Source Package' field by default", "Someone prepackaged the chocolate bars for us"],
      options_en: ["Someone set the 'Destination Package' in advance", "The 'Source Package' contained the exact quantities for the order, so it was used again as the 'Destination Package'", "The 'Destination Package' is set to copy the 'Source Package' field by default", "Someone prepackaged the chocolate bars for us"],
      correct: "'Paket Sumber' berisi jumlah yang tepat untuk pesanan, jadi digunakan lagi sebagai 'Paket Tujuan'"
    },
    {
      question: "Produk Anda, 'Charger iPhone', disimpan dalam paket 15, 25, dan 50 unit. Menggunakan strategi removal Least Packages, paket mana yang akan dipilih untuk memenuhi pesanan 33 charger iPhone?",
      question_en: "Your product, 'iPhone charger,' is stored in packages of 15, 25, and 50 units. Using the Least Packages removal strategy, which of the following package(s) would be selected to fulfill an order of 33 iPhone chargers?",
      options: ["Ambil 25 unit dari paket-25, lalu 8 unit dari paket-15", "Pick 33 units from the 50-pack", "Pick 25 units from the 25-pack, then 8 units from the 50-pack", "Pick 3 units from the 25-pack, and 2 packages of the 15-pack"],
      options_en: ["Pick 25 units from the 25-pack, then 8 units from the 15-pack", "Pick 33 units from the 50-pack", "Pick 25 units from the 25-pack, then 8 units from the 50-pack", "Pick 3 units from the 25-pack, and 2 packages of the 15-pack"],
      correct: "Ambil 25 unit dari paket-25, lalu 8 unit dari paket-15"
    },
  ],
  /* Inventory Materi27 */
  inventory_materi27: [
    {
      question: "Di Odoo, apa perbedaan utama antara satuan (units) dan kemasan (packagings)?",
      question_en: "In Odoo, what is the main difference between units and packagings?",
      options: ["Units are reusable containers, while packagings are single-use items.", "Satuan merujuk pada item produk individual, sedangkan kemasan adalah beberapa item yang dikemas bersama dan dihitung sebagai satu item.", "Units and packagings are interchangeable terms for tracking inventory.", "Units are product categories, while packagings define shipping methods."],
      options_en: ["Units are reusable containers, while packagings are single-use items.", "Units refer to individual product items, while packagings are multiple items packed together and counted as one item.", "Units and packagings are interchangeable terms for tracking inventory.", "Units are product categories, while packagings define shipping methods."],
      correct: "Satuan merujuk pada item produk individual, sedangkan kemasan adalah beberapa item yang dikemas bersama dan dihitung sebagai satu item."
    },
    {
      question: "Di tab pembelian Odoo, apa yang dimaksud dengan 'Harga Satuan'?",
      question_en: "In Odoo's purchase tab, what does the 'Unit Price' refer to?",
      options: ["Harga satu item produk, terlepas dari kemasannya.", "The total cost of all packages purchased in a transaction.", "The price of the entire packaging as sold by the vendor.", "The price per individual item within a packaging."],
      options_en: ["The price of a single product item, regardless of its packaging.", "The total cost of all packages purchased in a transaction.", "The price of the entire packaging as sold by the vendor.", "The price per individual item within a packaging."],
      correct: "Harga satu item produk, terlepas dari kemasannya."
    },
    {
      question: "Di Odoo, apa yang diwakili oleh angka unit 'Forecasted' dalam laporan perkiraan?",
      question_en: "In Odoo, what does the 'Forecasted' units number represent in the forecasted report?",
      options: ["The total number of units currently in stock, excluding recent purchases.", "Proyeksi jumlah inventaris, termasuk produk yang dipesan dan diterima.", "The number of units sold over a specified period.", "The minimum stock level required before reordering."],
      options_en: ["The total number of units currently in stock, excluding recent purchases.", "The projected inventory count, including ordered and received products.", "The number of units sold over a specified period.", "The minimum stock level required before reordering."],
      correct: "Proyeksi jumlah inventaris, termasuk produk yang dipesan dan diterima."
    },
  ],
  /* Inventory Materi28 */
  inventory_materi28: [
    {
      question: "Apa perbedaan antara Paket (Packages) dan Kemasan (Packagings)?",
      question_en: "What is the difference between Packages and Packagings?",
      options: ["There is no difference, \"package\", \"packaging\", and \"pack\" can be used in Odoo interchangeably.", "Packaging adalah pengelompokan produk tunggal yang telah ditentukan sebelumnya, packages adalah wadah tak tentu dari beberapa produk.", "Packages can not be changed, packaging can.", "Packages are for large objects that require specific equipment to move them. Packaging can be of any size."],
      options_en: ["There is no difference, \"package\", \"packaging\", and \"pack\" can be used in Odoo interchangeably.", "Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.", "Packages can not be changed, packaging can.", "Packages are for large objects that require specific equipment to move them. Packaging can be of any size."],
      correct: "Packaging adalah pengelompokan produk tunggal yang telah ditentukan sebelumnya, packages adalah wadah tak tentu dari beberapa produk."
    },
    {
      question: "Bisakah saya meletakkan produk dari penerimaan yang sama dalam paket yang berbeda?",
      question_en: "Can I put products from the same receipt in different packages?",
      options: ["No, but I can use an internal transfer after the receipt to move them to separate packages.", "Ya, saya bisa menggunakan tombol daftar pada setiap produk untuk menentukan paket dan jumlah produk di masing-masingnya.", "No, packages must reflect the state of a receipt at all times in the warehouse.", "Yes, but I will need to manually name every package."],
      options_en: ["No, but I can use an internal transfer after the receipt to move them to separate packages.", "Yes, I can use the list button on each product to specify the package and quantity of products in each.", "No, packages must reflect the state of a receipt at all times in the warehouse.", "Yes, but I will need to manually name every package."],
      correct: "Ya, saya bisa menggunakan tombol daftar pada setiap produk untuk menentukan paket dan jumlah produk di masing-masingnya."
    },
    {
      question: "Bagaimana cara memasukkan produk ke dalam paket di luar penerimaan?",
      question_en: "How can I put products in a package outside of a receipt?",
      options: ["I can't. Products can only be put in packages in a receipt or delivery order.", "Saya dapat membuat transfer internal dan menggunakan tombol \"Put in Pack\".", "I can click \"New\" on the Packages page and add any products I want from that form.", "I can edit the Product forms to specify the package."],
      options_en: ["I can't. Products can only be put in packages in a receipt or delivery order.", "I can create an internal transfer and use the \"Put in Pack\" button.", "I can click \"New\" on the Packages page and add any products I want from that form.", "I can edit the Product forms to specify the package."],
      correct: "Saya dapat membuat transfer internal dan menggunakan tombol \"Put in Pack\"."
    },
  ],
  /* Inventory Materi29 */
  inventory_materi29: [
    {
      question: "Mana dari berikut ini yang merupakan opsi yang dapat dipilih untuk pengaturan 'Kebijakan Pengambilan' di aplikasi 'Inventaris'?",
      question_en: "Which of the following are selectable options for the 'Picking Policy' setting in the 'Inventory' app?",
      options: ["'Ship products as soon as available, with back orders'", "'Ship all products at once'", "'Only ship currently available products'", "A dan B"],
      options_en: ["'Ship products as soon as available, with back orders'", "'Ship all products at once'", "'Only ship currently available products'", "A and B"],
      correct: "A dan B"
    },
    {
      question: "Apa artinya jika tombol 'Validasi' pada pesanan pengiriman berwarna abu-abu?",
      question_en: "What does it mean when the 'Validate' button on a delivery order appears in gray?",
      options: ["Semua atau sebagian pesanan siap dikirim", "The order has been shipped", "Pesanan menunggu produk tersedia sebelum dapat dikirim", "The 'Validate' button never appears in purple"],
      options_en: ["All or part of the order is ready to ship", "The order has been shipped", "The order is waiting for products to be available before it can be shipped", "The 'Validate' button never appears in purple"],
      correct: "Pesanan menunggu produk tersedia sebelum dapat dikirim"
    },
    {
      question: "Apa artinya jika tombol 'Validasi' pada pesanan pengiriman berwarna ungu?",
      question_en: "What does it mean when the 'Validate' button on a delivery order appears in purple?",
      options: ["Semua atau sebagian pesanan siap dikirim", "The order has been shipped", "Pesanan menunggu produk tersedia sebelum dapat dikirim", "The 'Validate' button never appears in purple"],
      options_en: ["All or part of the order is ready to ship", "The order has been shipped", "The order is waiting for products to be available before it can be shipped", "The 'Validate' button never appears in purple"],
      correct: "Semua atau sebagian pesanan siap dikirim"
    },
  ],
  /* Inventory Materi30 */
  inventory_materi30: [
    {
      question: "Tipe operasi default mana yang digunakan Odoo untuk memproses pesanan retur?",
      question_en: "Which default operation type does Odoo use to process return orders?",
      options: ["'Delivery Orders'", "'Penerimaan' (Receipts)", "'Repairs'", "None of the above"],
      options_en: ["'Delivery Orders'", "'Receipts'", "'Repairs'", "None of the above"],
      correct: "'Penerimaan' (Receipts)"
    },
    {
      question: "Saat membuat operasi kustom untuk memproses retur, tipe operasi mana yang harus dipilih di bidang 'Tipe Operasi'?",
      question_en: "When creating a custom operation to process return orders, which operation type should be selected in the 'Type of Operation' field?",
      options: ["'Penerimaan'", "'Internal Transfer'", "'Repair'", "The field should be left blank"],
      options_en: ["'Receipt'", "'Internal Transfer'", "'Repair'", "The field should be left blank"],
      correct: "'Penerimaan'"
    },
    {
      question: "Saat mengonfigurasi operasi 'Delivery Orders' untuk menggunakan operasi kustom retur, di bidang mana operasi pelanggan harus dipilih?",
      question_en: "When configuring the 'Delivery Orders' operation to use the custom operation to process returns, in which field should the customer operation be selected?",
      options: ["'Type of Operation'", "'Tipe Retur'", "'Sequence Prefix'", "'Default returns location'"],
      options_en: ["'Type of Operation'", "'Returns Type'", "'Sequence Prefix'", "'Default returns location'"],
      correct: "'Tipe Retur'"
    },
  ],
  /* Inventory Materi31 */
  inventory_materi31: [
    {
      question: "Pernyataan mana yang paling menggambarkan berapa banyak langkah operasi gudang yang dapat digunakan dengan batch picking di Odoo?",
      question_en: "Which statement best describes how many warehouse operation steps can be used with batch picking in Odoo?",
      options: ["Batch picking only works with a single-step delivery flow", "Must have exactly two steps (pick and ship)", "Saya dapat menggunakan batch picking dengan satu, dua, atau tiga langkah; langkah kedua biasanya adalah langkah penyortiran", "Odoo requires a minimum of two steps for batch transfers"],
      options_en: ["Batch picking only works with a single-step delivery flow", "Must have exactly two steps (pick and ship)", "I can use batch picking with one, two, or three steps; the second step is typically the sorting step", "Odoo requires a minimum of two steps for batch transfers"],
      correct: "Saya dapat menggunakan batch picking dengan satu, dua, atau tiga langkah; langkah kedua biasanya adalah langkah penyortiran"
    },
    {
      question: "Bagaimana Odoo menangani pesanan setelah 'Otomatis Batch' diaktifkan untuk tipe operasi Delivery Orders Anda?",
      question_en: "How does Odoo handle orders once 'Automatic Batches' is enabled for your Delivery Orders operation type?",
      options: ["It ignores any grouping settings and assigns each order to its own batch", "Itu secara otomatis membuat batch berdasarkan metode pengelompokan yang Anda pilih (misalnya, oleh Pengangkut, Kontak, dll.)", "It merges all orders into a single batch, regardless of any configuration", "It disables manual assignment of orders to batches entirely"],
      options_en: ["It ignores any grouping settings and assigns each order to its own batch", "It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)", "It merges all orders into a single batch, regardless of any configuration", "It disables manual assignment of orders to batches entirely"],
      correct: "Itu secara otomatis membuat batch berdasarkan metode pengelompokan yang Anda pilih (misalnya, oleh Pengangkut, Kontak, dll.)"
    },
    {
      question: "Di mana picker dapat menemukan batch yang ditugaskan di aplikasi Barcode?",
      question_en: "Where can a picker find the assigned batch in the Barcode app?",
      options: ["Buka aplikasi Barcode dan klik tombol 'Batch Transfers'", "In the 'Batches' tab after selecting the operation type", "In the 'Products' menu", "Only under the 'Internal Transfers' section"],
      options_en: ["Open the Barcode app and click the 'Batch Transfers' button", "In the 'Batches' tab after selecting the operation type", "In the 'Products' menu", "Only under the 'Internal Transfers' section"],
      correct: "Buka aplikasi Barcode dan klik tombol 'Batch Transfers'"
    },
  ],
  /* Inventory Materi32 */
  inventory_materi32: [
    {
      question: "Pengaturan 'Pengiriman Keluar' apa yang diperlukan untuk menggunakan cluster picking?",
      question_en: "What 'Outgoing Shipments' settings are needed to use cluster picking?",
      options: ["Two-steps", "Three-steps", "One step", "Salah satu opsi 'Pengiriman Keluar'"],
      options_en: ["Two-steps", "Three-steps", "One step", "Any of the 'Outgoing Shipment' options"],
      correct: "Salah satu opsi 'Pengiriman Keluar'"
    },
    {
      question: "Kapan 'Kotak Dapat Digunakan Kembali' *TIDAK* digunakan untuk cluster picking?",
      question_en: "When would a 'Reusable Box' *NOT* be used for cluster picking?",
      options: ["When using a customized container for the picking trolley to store picked items", "When transporting items from the storage area to the packing area", "Saat digunakan untuk mengirim barang ke pelanggan", "Reusable boxes are not recommended for cluster picking under any circumstance"],
      options_en: ["When using a customized container for the picking trolley to store picked items", "When transporting items from the storage area to the packing area", "When it is being used to ship items to the customer", "Reusable boxes are not recommended for cluster picking under any circumstance"],
      correct: "Saat digunakan untuk mengirim barang ke pelanggan"
    },
    {
      question: "Secara default, dalam urutan apa produk ditampilkan pada dokumen cluster picking?",
      question_en: "By default, in what order are the products displayed on a cluster picking document?",
      options: ["Produk ditampilkan berdasarkan urutan abjad lokasi penyimpanan", "Products are grouped together based on their sales orders", "Products are displayed in alphabetical order of the product name", "Products are displayed in the order they were added to the batch"],
      options_en: ["Products are displayed in alphabetical order of the storage location", "Products are grouped together based on their sales orders", "Products are displayed in alphabetical order of the product name", "Products are displayed in the order they were added to the batch"],
      correct: "Produk ditampilkan berdasarkan urutan abjad lokasi penyimpanan"
    },
  ],
  /* Inventory Materi33 */
  inventory_materi33: [
    {
      question: "Saat mengonfigurasi metode pengiriman untuk mencetak label pengiriman, opsi mana yang harus dipilih di bidang 'Level Integrasi'?",
      question_en: "When configuring a shipping method to print shipping labels, which option should be selected in the 'Integration Level' field?",
      options: ["Get Rate", "Dapatkan Tarif dan Buat Pengiriman", "Request Price", "Request Price and Print Label"],
      options_en: ["Get Rate", "Get Rate and Create Shipment", "Request Price", "Request Price and Print Label"],
      correct: "Dapatkan Tarif dan Buat Pengiriman"
    },
    {
      question: "Bagaimana cara mengubah metode pengiriman dari 'Lingkungan Tes' ke 'Lingkungan Produksi'?",
      question_en: "How do I change a shipping method from a 'Test Environment' to a 'Production Environment'?",
      options: ["Click the 'Test Environment' smart button", "Click the 'Production Environment' smart button", "Select 'Production' in the 'Environment' field", "Centang kotak di sebelah 'Produksi'"],
      options_en: ["Click the 'Test Environment' smart button", "Click the 'Production Environment' smart button", "Select 'Production' in the 'Environment' field", "Tick the checkbox next to 'Production'"],
      correct: "Centang kotak di sebelah 'Produksi'"
    },
    {
      question: "Informasi mana dari berikut ini yang TIDAK perlu dikonfigurasi untuk mencetak label pengiriman?",
      question_en: "Which of the following information DOES NOT need to be configured to print shipping labels?",
      options: ["Company address and phone number", "Recipient address and phone number", "Product weight", "Harga produk"],
      options_en: ["Company address and phone number", "Recipient address and phone number", "Product weight", "Product price"],
      correct: "Harga produk"
    },
  ],
  /* Inventory Materi34 */
  inventory_materi34: [
    {
      question: "Metode pengambilan mana yang mengharuskan produk disortir menjadi pesanan *setelah* diambil?",
      question_en: "Which picking method requires the products to be sorted into orders *after* they are picked?",
      options: ["Single Picking", "Wave Picking", "Single and Wave Picking", "Neither Single nor Wave Picking"],
      options_en: ["Single Picking", "Wave Picking", "Single and Wave Picking", "Neither Single nor Wave Picking"],
      correct: "Wave Picking"
    },
    {
      question: "Untuk membuat transfer wave, apa kesamaan yang harus dimiliki semua produk?",
      question_en: "To create a wave transfer, what do all the products have to have in common?",
      options: ["The same source location", "The same destination location", "Tipe operasi yang sama", "The same route"],
      options_en: ["The same source location", "The same destination location", "The same operation type", "The same route"],
      correct: "Tipe operasi yang sama"
    },
    {
      question: "Ke mana saya harus pergi untuk melihat semua transfer wave yang ditugaskan kepada saya?",
      question_en: "Where do I go to see all the wave transfers assigned to me?",
      options: ["In the Inventory app, click Operations > My Batch Transfers", "Di aplikasi Inventaris, klik Operasi > Wave Transfers, dan filter berdasarkan 'Transfer Saya'", "In the Barcode app > Batch Transfers", "In the Inventory app, click 'Pick', and group by 'Location'"],
      options_en: ["In the Inventory app, click Operations > My Batch Transfers", "In the Inventory app, click Operations > Wave Transfers, and filter by 'My Transfers'", "In the Barcode app > Batch Transfers", "In the Inventory app, click 'Pick', and group by 'Location'"],
      correct: "Di aplikasi Inventaris, klik Operasi > Wave Transfers, dan filter berdasarkan 'Transfer Saya'"
    },
  ],
}