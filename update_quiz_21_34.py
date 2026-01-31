import re
import os

# Quiz data from user input
quiz_data_raw = """
Materi 21
1. Where in Odoo can you configure the reservation method for delivery orders?
Sales > Products
Inventory > Configuration > Operation Types
Manufacturing > Settings
Accounting > Configuration
Correct: Inventory > Configuration > Operation Types
2. What action is required to reserve stock when the reservation method is set to "Manually"?
Click "Check Availability" on the Delivery Order
Confirm the Sales Order
Validate the Delivery
Enable the Forecast Report
Correct: Click "Check Availability" on the Delivery Order
3. In the 'Before Scheduled Date' method, what triggers the automatic reservation?
The stock quantity
The invoice validation
The number of days before the scheduled delivery date
The customer delivery address
Correct: The number of days before the scheduled delivery date

Materi 22
1. What do removal strategies determine?
Which order gets the available stock first
Which items should be picked or removed from stock, and when
Where items should be stored when removing them from stock
How to use the most packages to fulfill an order
Correct: Which items should be picked or removed from stock, and when
2. What removal strategy is best for goods that are considered perishable?
First In First Out (FIFO)
Least Packages
Closest Location
First Expired First Out (FEFO)
Correct: First Expired First Out (FEFO)
3. What removal strategy would I use to ensure that I open the fewest number of packages when fulfilling an order?
Least Packages
Fewest Packages
Closest Location
First In First Out (FIFO)
Correct: Least Packages

Materi 23
1. A sales order for a specific product has been confirmed. How can you ensure you deliver the first product that enters your stock?
By selecting FIFO as your Removal Strategy
By selecting LIFO as your Removal Strategy
By selecting FEFO as your Put Away Strategy
By selecting LIFO as your Put Away Strategy
Correct: By selecting FIFO as your Removal Strategy
2. Which Inventory settings must be enabled in order to use the LIFO Force Removal Strategy on the product category?
Expiration Dates and Landed Costs
Lots/Serial Numbers
Multi-Warehouses, Multi-Step Routes, and Storage Locations
Storage Locations and Multi-Step Routes
Correct: Storage Locations and Multi-Step Routes
3. How is the FIFO removal strategy assigned to a location in the Inventory app?
By going to Warehouse > Location > Force Removal Strategy
By going to Configuration > Location > Removal Strategy
By going to Warehouse > Shelf F > Removal Strategy
By going to Configuration > Product Category > Removal Strategy
Correct: By going to Configuration > Location > Removal Strategy

Materi 24
1. Which Inventory setting(s) are required to use the FEFO removal strategy?
Lots and Serial Numbers, only
Lots and Serial Numbers, Product Categories
Storage Locations, only
Expiration Date, Lots and Serial Numbers
Correct: Expiration Date, Lots and Serial Numbers
2. The FEFO removal strategy is based on which date field in Odoo?
Expiry Date
Removal Date
Best Before Date
Alert Date
Correct: Removal Date
3. You have the following products and lot numbers in stock: LOT 1 (Removal Date: November 2, On-hand Qty: 20) and LOT 2 (Removal Date: April 13, On-hand Qty: 13) How many products from each lot are picked for an order of 20 products, placed on January 1 of the same year?
Pick 7 products from LOT 1, and 13 products from LOT 2
Pick 10 products from LOT 1, and 10 products from LOT 2
Pick 20 products from LOT 1
Pick 13 products from LOT 1, and 7 products from LOT 2
Correct: Pick 13 products from LOT 1, and 7 products from LOT 2

Materi 25
1. Which Inventory setting(s) are required to use the Closest Location removal strategy?
Lots and Serial Numbers, Multi-Step Routes
Storage Locations
Product Categories
Storage Locations, Multi-Step Routes
Correct: Storage Locations, Multi-Step Routes
2. My product, 'Strawberry ice cream' is stored in 'Freezer A' on 'Freezer A/Rack 1' and 'Freezer A/Rack 2.' How do you set up the Closest Location removal strategy for the ice cream?
Go to Inventory app > Configuration > Settings, and set the 'Removal Strategy' field to 'Closest Location'
Go to Inventory app > Configuration > Locations. In 'Rack 1' and 'Rack 2,' set the 'Force Removal Strategy' to 'Closest Location'
Go to Inventory app > Configuration > Locations > 'Freezer A,' and set the 'Removal Strategy' to 'Closest Location'
In Inventory app > Configuration > 'Freezer A/Rack 1,' set the 'Force Removal Strategy' to 'Closest Location'
Correct: Go to Inventory app > Configuration > Locations > 'Freezer A,' and set the 'Removal Strategy' to 'Closest Location'
3. I have two locations, Shelf J and Shelf Z. Using the Closest Location removal method, how should I rename Shelf Z, so products are picked from this location first?
Rename 'Shelf Z' to 'Vault A.'
Rename 'Shelf Z' to 'Shelf A.'
Rename 'Shelf Z' to 'Shelf K.'
Rename 'Shelf Z' to 'Shelf Y.'
Correct: Rename 'Shelf Z' to 'Shelf A.'

Materi 26
1. In order to use the Least Packages removal strategy on a product category, you'll need to activate the following Inventory setting(s)...
Storage Locations, Multi-Step Routes
Product Categories, Multi-Step Routes
Packages, only
Packages, Storage Locations, Multi-Step Routes
Correct: Packages, Storage Locations, Multi-Step Routes
2. In the tutorial, after confirming the sales order and clicking the hamburger icon, why was the 'Destination Package' for the order of 100 chocolate bars pre-populated?
Someone set the 'Destination Package' in advance
The 'Source Package' contained the exact quantities for the order, so it was used again as the 'Destination Package'
The 'Destination Package' is set to copy the 'Source Package' field by default
Someone prepackaged the chocolate bars for us
Correct: The 'Source Package' contained the exact quantities for the order, so it was used again as the 'Destination Package'
3. Your product, 'iPhone charger,' is stored in packages of 15, 25, and 50 units. Using the Least Packages removal strategy, which of the following package(s) would be selected to fulfill an order of 33 iPhone chargers?
Pick 25 units from the 25-pack, then 8 units from the 15-pack
Pick 33 units from the 50-pack
Pick 25 units from the 25-pack, then 8 units from the 50-pack
Pick 3 units from the 25-pack, and 2 packages of the 15-pack
Correct: Pick 25 units from the 25-pack, then 8 units from the 15-pack

Materi 27
1. In Odoo, what is the main difference between units and packagings?
Units are reusable containers, while packagings are single-use items.
Units refer to individual product items, while packagings are multiple items packed together and counted as one item.
Units and packagings are interchangeable terms for tracking inventory.
Units are product categories, while packagings define shipping methods.
Correct: Units refer to individual product items, while packagings are multiple items packed together and counted as one item.
2. In Odoo's purchase tab, what does the 'Unit Price' refer to?
The price of a single product item, regardless of its packaging.
The total cost of all packages purchased in a transaction.
The price of the entire packaging as sold by the vendor.
The price per individual item within a packaging.
Correct: The price of a single product item, regardless of its packaging.
3. In Odoo, what does the 'Forecasted' units number represent in the forecasted report?
The total number of units currently in stock, excluding recent purchases.
The projected inventory count, including ordered and received products.
The number of units sold over a specified period.
The minimum stock level required before reordering.
Correct: The projected inventory count, including ordered and received products.

Materi 28
1. What is the difference between Packages and Packagings?
There is no difference, "package", "packaging", and "pack" can be used in Odoo interchangeably.
Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.
Packages can not be changed, packaging can.
Packages are for large objects that require specific equipment to move them. Packaging can be of any size.
Correct: Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.
2. Can I put products from the same receipt in different packages?
No, but I can use an internal transfer after the receipt to move them to separate packages.
Yes, I can use the list button on each product to specify the package and quantity of products in each.
No, packages must reflect the state of a receipt at all times in the warehouse.
Yes, but I will need to manually name every package.
Correct: Yes, I can use the list button on each product to specify the package and quantity of products in each.
3. How can I put products in a package outside of a receipt?
I can't. Products can only be put in packages in a receipt or delivery order.
I can create an internal transfer and use the "Put in Pack" button.
I can click "New" on the Packages page and add any products I want from that form.
I can edit the Product forms to specify the package.
Correct: I can create an internal transfer and use the "Put in Pack" button.

Materi 29
1. Which of the following are selectable options for the 'Picking Policy' setting in the 'Inventory' app?
'Ship products as soon as available, with back orders'
'Ship all products at once'
'Only ship currently available products'
A and B
Correct: A and B
2. What does it mean when the 'Validate' button on a delivery order appears in gray?
All or part of the order is ready to ship
The order has been shipped
The order is waiting for products to be available before it can be shipped
The 'Validate' button never appears in purple
Correct: The order is waiting for products to be available before it can be shipped
3. What does it mean when the 'Validate' button on a delivery order appears in purple?
All or part of the order is ready to ship
The order has been shipped
The order is waiting for products to be available before it can be shipped
The 'Validate' button never appears in purple
Correct: All or part of the order is ready to ship

Materi 30
1. Which default operation type does Odoo use to process return orders?
'Delivery Orders'
'Receipts'
'Repairs'
None of the above
Correct: 'Receipts'
2. When creating a custom operation to process return orders, which operation type should be selected in the 'Type of Operation' field?
'Receipt'
'Internal Transfer'
'Repair'
The field should be left blank
Correct: 'Receipt'
3. When configuring the 'Delivery Orders' operation to use the custom operation to process returns, in which field should the customer operation be selected?
'Type of Operation'
'Returns Type'
'Sequence Prefix'
'Default returns location'
Correct: 'Returns Type'

Materi 31
1. Which statement best describes how many warehouse operation steps can be used with batch picking in Odoo?
Batch picking only works with a single-step delivery flow
Must have exactly two steps (pick and ship)
I can use batch picking with one, two, or three steps; the second step is typically the sorting step
Odoo requires a minimum of two steps for batch transfers
Correct: I can use batch picking with one, two, or three steps; the second step is typically the sorting step
2. How does Odoo handle orders once 'Automatic Batches' is enabled for your Delivery Orders operation type?
It ignores any grouping settings and assigns each order to its own batch
It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)
It merges all orders into a single batch, regardless of any configuration
It disables manual assignment of orders to batches entirely
Correct: It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)
3. Where can a picker find the assigned batch in the Barcode app?
Open the Barcode app and click the 'Batch Transfers' button
In the 'Batches' tab after selecting the operation type
In the 'Products' menu
Only under the 'Internal Transfers' section
Correct: Open the Barcode app and click the 'Batch Transfers' button

Materi 32
1. What 'Outgoing Shipments' settings are needed to use cluster picking?
Two-steps
Three-steps
One step
Any of the 'Outgoing Shipment' options
Correct: Any of the 'Outgoing Shipment' options
2. When would a 'Reusable Box' *NOT* be used for cluster picking?
When using a customized container for the picking trolley to store picked items
When transporting items from the storage area to the packing area
When it is being used to ship items to the customer
Reusable boxes are not recommended for cluster picking under any circumstance
Correct: When it is being used to ship items to the customer
3. By default, in what order are the products displayed on a cluster picking document?
Products are displayed in alphabetical order of the storage location
Products are grouped together based on their sales orders
Products are displayed in alphabetical order of the product name
Products are displayed in the order they were added to the batch
Correct: Products are displayed in alphabetical order of the storage location

Materi 33
1. When configuring a shipping method to print shipping labels, which option should be selected in the 'Integration Level' field?
Get Rate
Get Rate and Create Shipment
Request Price
Request Price and Print Label
Correct: Get Rate and Create Shipment
2. How do I change a shipping method from a 'Test Environment' to a 'Production Environment'?
Click the 'Test Environment' smart button
Click the 'Production Environment' smart button
Select 'Production' in the 'Environment' field
Tick the checkbox next to 'Production'
Correct: Tick the checkbox next to 'Production'
3. Which of the following information DOES NOT need to be configured to print shipping labels?
Company address and phone number
Recipient address and phone number
Product weight
Product price
Correct: Product price

Materi 34
1. Which picking method requires the products to be sorted into orders *after* they are picked?
Single Picking
Wave Picking
Single and Wave Picking
Neither Single nor Wave Picking
Correct: Wave Picking
2. To create a wave transfer, what do all the products have to have in common?
The same source location
The same destination location
The same operation type
The same route
Correct: The same operation type
3. Where do I go to see all the wave transfers assigned to me?
In the Inventory app, click Operations > My Batch Transfers
In the Inventory app, click Operations > Wave Transfers, and filter by 'My Transfers'
In the Barcode app > Batch Transfers
In the Inventory app, click 'Pick', and group by 'Location'
Correct: In the Inventory app, click Operations > Wave Transfers, and filter by 'My Transfers'
"""

# Dictionary for translations
translations = {
    # Materi 21
    "Where in Odoo can you configure the reservation method for delivery orders?": "Di mana di Odoo Anda dapat mengonfigurasi metode reservasi untuk delivery order?",
    "Inventory > Configuration > Operation Types": "Inventaris > Konfigurasi > Tipe Operasi",
    "What action is required to reserve stock when the reservation method is set to \"Manually\"?": "Tindakan apa yang diperlukan untuk mereservasi stok ketika metode reservasi diatur ke \"Manual\"?",
    "Click \"Check Availability\" on the Delivery Order": "Klik \"Periksa Ketersediaan\" pada Delivery Order",
    "In the 'Before Scheduled Date' method, what triggers the automatic reservation?": "Dalam metode 'Sebelum Tanggal Terjadwal', apa yang memicu reservasi otomatis?",
    "The number of days before the scheduled delivery date": "Jumlah hari sebelum tanggal pengiriman terjadwal",
    
    # Materi 22
    "What do removal strategies determine?": "Apa yang ditentukan oleh strategi removal (penghapusan)?",
    "Which items should be picked or removed from stock, and when": "Item mana yang harus diambil atau dikeluarkan dari stok, dan kapan",
    "What removal strategy is best for goods that are considered perishable?": "Strategi removal apa yang terbaik untuk barang yang mudah rusak (perishable)?",
    "First Expired First Out (FEFO)": "First Expired First Out (FEFO)",
    "What removal strategy would I use to ensure that I open the fewest number of packages when fulfilling an order?": "Strategi removal apa yang harus saya gunakan untuk memastikan saya membuka jumlah paket paling sedikit saat memenuhi pesanan?",
    "Least Packages": "Paket Paling Sedikit (Least Packages)",
    "Fewest Packages": "Paket Paling Sedikit",
    
    # Materi 23
    "A sales order for a specific product has been confirmed. How can you ensure you deliver the first product that enters your stock?": "Sales order untuk produk tertentu telah dikonfirmasi. Bagaimana Anda memastikan Anda mengirimkan produk pertama yang masuk ke stok Anda?",
    "By selecting FIFO as your Removal Strategy": "Dengan memilih FIFO sebagai Strategi Removal Anda",
    "Which Inventory settings must be enabled in order to use the LIFO Force Removal Strategy on the product category?": "Pengaturan Inventaris mana yang harus diaktifkan agar dapat menggunakan Strategi Removal Paksa LIFO pada kategori produk?",
    "Storage Locations and Multi-Step Routes": "Lokasi Penyimpanan dan Rute Multi-Langkah",
    "How is the FIFO removal strategy assigned to a location in the Inventory app?": "Bagaimana strategi removal FIFO ditetapkan ke lokasi di aplikasi Inventaris?",
    "By going to Configuration > Location > Removal Strategy": "Dengan pergi ke Konfigurasi > Lokasi > Removal Strategy",
    
    # Materi 24
    "Which Inventory setting(s) are required to use the FEFO removal strategy?": "Pengaturan Inventaris mana yang diperlukan untuk menggunakan strategi removal FEFO?",
    "Expiration Date, Lots and Serial Numbers": "Tanggal Kedaluwarsa, Nomor Lot dan Serial",
    "The FEFO removal strategy is based on which date field in Odoo?": "Strategi removal FEFO didasarkan pada bidang tanggal yang mana di Odoo?",
    "Removal Date": "Tanggal Penghapusan (Removal Date)",
    "You have the following products and lot numbers in stock: LOT 1 (Removal Date: November 2, On-hand Qty: 20) and LOT 2 (Removal Date: April 13, On-hand Qty: 13) How many products from each lot are picked for an order of 20 products, placed on January 1 of the same year?": "Anda memiliki produk dan nomor lot berikut dalam stok: LOT 1 (Tgl Hapus: 2 Nov, Qty: 20) dan LOT 2 (Tgl Hapus: 13 Apr, Qty: 13). Berapa banyak produk dari setiap lot yang diambil untuk pesanan 20 produk, yang dibuat pada 1 Januari tahun yang sama?",
    "Pick 13 products from LOT 1, and 7 products from LOT 2": "Ambil 13 produk dari LOT 1, dan 7 produk dari LOT 2", # Wait, Lot 2 (April 13) expires sooner than Lot 1 (Nov 2). So take all 13 from Lot 2, then 7 from Lot 1.
    "Pick 13 products from LOT 2, and 7 products from LOT 1": "Ambil 13 produk dari LOT 2, dan 7 produk dari LOT 1", # Correcting translation logic
    
    # Materi 25
    "Which Inventory setting(s) are required to use the Closest Location removal strategy?": "Pengaturan Inventaris mana yang diperlukan untuk menggunakan strategi removal Closest Location?",
    "Storage Locations, Multi-Step Routes": "Lokasi Penyimpanan, Rute Multi-Langkah",
    "My product, 'Strawberry ice cream' is stored in 'Freezer A' on 'Freezer A/Rack 1' and 'Freezer A/Rack 2.' How do you set up the Closest Location removal strategy for the ice cream?": "Produk saya, 'Es krim stroberi' disimpan di 'Freezer A' pada 'Freezer A/Rak 1' dan 'Freezer A/Rak 2'. Bagaimana cara mengatur strategi removal Closest Location untuk es krim tersebut?",
    "Go to Inventory app > Configuration > Locations > 'Freezer A,' and set the 'Removal Strategy' to 'Closest Location'": "Buka aplikasi Inventaris > Konfigurasi > Lokasi > 'Freezer A', dan atur 'Strategi Removal' ke 'Closest Location'",
    "I have two locations, Shelf J and Shelf Z. Using the Closest Location removal method, how should I rename Shelf Z, so products are picked from this location first?": "Saya memiliki dua lokasi, Rak J dan Rak Z. Menggunakan metode removal Closest Location, bagaimana saya harus mengganti nama Rak Z, agar produk diambil dari lokasi ini terlebih dahulu?",
    "Rename 'Shelf Z' to 'Shelf A.'": "Ganti nama 'Rak Z' menjadi 'Rak A.'",
    
    # Materi 26
    "In order to use the Least Packages removal strategy on a product category, you'll need to activate the following Inventory setting(s)...": "Untuk menggunakan strategi removal Least Packages pada kategori produk, Anda perlu mengaktifkan pengaturan Inventaris berikut...",
    "Packages, Storage Locations, Multi-Step Routes": "Paket, Lokasi Penyimpanan, Rute Multi-Langkah",
    "In the tutorial, after confirming the sales order and clicking the hamburger icon, why was the 'Destination Package' for the order of 100 chocolate bars pre-populated?": "Dalam tutorial, setelah mengonfirmasi sales order dan mengklik ikon hamburger, mengapa 'Paket Tujuan' untuk pesanan 100 batang cokelat sudah terisi otomatis?",
    "The 'Source Package' contained the exact quantities for the order, so it was used again as the 'Destination Package'": "'Paket Sumber' berisi jumlah yang tepat untuk pesanan, jadi digunakan lagi sebagai 'Paket Tujuan'",
    "Your product, 'iPhone charger,' is stored in packages of 15, 25, and 50 units. Using the Least Packages removal strategy, which of the following package(s) would be selected to fulfill an order of 33 iPhone chargers?": "Produk Anda, 'Charger iPhone', disimpan dalam paket 15, 25, dan 50 unit. Menggunakan strategi removal Least Packages, paket mana yang akan dipilih untuk memenuhi pesanan 33 charger iPhone?",
    "Pick 25 units from the 25-pack, then 8 units from the 15-pack": "Ambil 25 unit dari paket-25, lalu 8 unit dari paket-15",
    
    # Materi 27
    "In Odoo, what is the main difference between units and packagings?": "Di Odoo, apa perbedaan utama antara satuan (units) dan kemasan (packagings)?",
    "Units refer to individual product items, while packagings are multiple items packed together and counted as one item.": "Satuan merujuk pada item produk individual, sedangkan kemasan adalah beberapa item yang dikemas bersama dan dihitung sebagai satu item.",
    "In Odoo's purchase tab, what does the 'Unit Price' refer to?": "Di tab pembelian Odoo, apa yang dimaksud dengan 'Harga Satuan'?",
    "The price of a single product item, regardless of its packaging.": "Harga satu item produk, terlepas dari kemasannya.",
    "In Odoo, what does the 'Forecasted' units number represent in the forecasted report?": "Di Odoo, apa yang diwakili oleh angka unit 'Forecasted' dalam laporan perkiraan?",
    "The projected inventory count, including ordered and received products.": "Proyeksi jumlah inventaris, termasuk produk yang dipesan dan diterima.",
    
    # Materi 28
    "What is the difference between Packages and Packagings?": "Apa perbedaan antara Paket (Packages) dan Kemasan (Packagings)?",
    "Packaging is pre-set groupings of a single product, packages are indeterminate containers of multiple products.": "Packaging adalah pengelompokan produk tunggal yang telah ditentukan sebelumnya, packages adalah wadah tak tentu dari beberapa produk.",
    "Can I put products from the same receipt in different packages?": "Bisakah saya meletakkan produk dari penerimaan yang sama dalam paket yang berbeda?",
    "Yes, I can use the list button on each product to specify the package and quantity of products in each.": "Ya, saya bisa menggunakan tombol daftar pada setiap produk untuk menentukan paket dan jumlah produk di masing-masingnya.",
    "How can I put products in a package outside of a receipt?": "Bagaimana cara memasukkan produk ke dalam paket di luar penerimaan?",
    "I can create an internal transfer and use the \"Put in Pack\" button.": "Saya dapat membuat transfer internal dan menggunakan tombol \"Put in Pack\".",
    
    # Materi 29
    "Which of the following are selectable options for the 'Picking Policy' setting in the 'Inventory' app?": "Mana dari berikut ini yang merupakan opsi yang dapat dipilih untuk pengaturan 'Kebijakan Pengambilan' di aplikasi 'Inventaris'?",
    "A and B": "A dan B", # Usually means Ship ASAP and Ship All at Once
    "What does it mean when the 'Validate' button on a delivery order appears in gray?": "Apa artinya jika tombol 'Validasi' pada pesanan pengiriman berwarna abu-abu?",
    "The order is waiting for products to be available before it can be shipped": "Pesanan menunggu produk tersedia sebelum dapat dikirim",
    "What does it mean when the 'Validate' button on a delivery order appears in purple?": "Apa artinya jika tombol 'Validasi' pada pesanan pengiriman berwarna ungu?",
    "All or part of the order is ready to ship": "Semua atau sebagian pesanan siap dikirim",
    
    # Materi 30
    "Which default operation type does Odoo use to process return orders?": "Tipe operasi default mana yang digunakan Odoo untuk memproses pesanan retur?",
    "'Receipts'": "'Penerimaan' (Receipts)",
    "When creating a custom operation to process return orders, which operation type should be selected in the 'Type of Operation' field?": "Saat membuat operasi kustom untuk memproses retur, tipe operasi mana yang harus dipilih di bidang 'Tipe Operasi'?",
    "'Receipt'": "'Penerimaan'",
    "When configuring the 'Delivery Orders' operation to use the custom operation to process returns, in which field should the customer operation be selected?": "Saat mengonfigurasi operasi 'Delivery Orders' untuk menggunakan operasi kustom retur, di bidang mana operasi pelanggan harus dipilih?",
    "'Returns Type'": "'Tipe Retur'",
    
    # Materi 31
    "Which statement best describes how many warehouse operation steps can be used with batch picking in Odoo?": "Pernyataan mana yang paling menggambarkan berapa banyak langkah operasi gudang yang dapat digunakan dengan batch picking di Odoo?",
    "I can use batch picking with one, two, or three steps; the second step is typically the sorting step": "Saya dapat menggunakan batch picking dengan satu, dua, atau tiga langkah; langkah kedua biasanya adalah langkah penyortiran",
    "How does Odoo handle orders once 'Automatic Batches' is enabled for your Delivery Orders operation type?": "Bagaimana Odoo menangani pesanan setelah 'Otomatis Batch' diaktifkan untuk tipe operasi Delivery Orders Anda?",
    "It automatically creates batches based on the grouping method you select (e.g., by Carrier, Contact, etc.)": "Itu secara otomatis membuat batch berdasarkan metode pengelompokan yang Anda pilih (misalnya, oleh Pengangkut, Kontak, dll.)",
    "Where can a picker find the assigned batch in the Barcode app?": "Di mana picker dapat menemukan batch yang ditugaskan di aplikasi Barcode?",
    "Open the Barcode app and click the 'Batch Transfers' button": "Buka aplikasi Barcode dan klik tombol 'Batch Transfers'",
    
    # Materi 32
    "What 'Outgoing Shipments' settings are needed to use cluster picking?": "Pengaturan 'Pengiriman Keluar' apa yang diperlukan untuk menggunakan cluster picking?",
    "Any of the 'Outgoing Shipment' options": "Salah satu opsi 'Pengiriman Keluar'",
    "When would a 'Reusable Box' *NOT* be used for cluster picking?": "Kapan 'Kotak Dapat Digunakan Kembali' *TIDAK* digunakan untuk cluster picking?",
    "When it is being used to ship items to the customer": "Saat digunakan untuk mengirim barang ke pelanggan",
    "By default, in what order are the products displayed on a cluster picking document?": "Secara default, dalam urutan apa produk ditampilkan pada dokumen cluster picking?",
    "Products are displayed in alphabetical order of the storage location": "Produk ditampilkan berdasarkan urutan abjad lokasi penyimpanan",
    
    # Materi 33
    "When configuring a shipping method to print shipping labels, which option should be selected in the 'Integration Level' field?": "Saat mengonfigurasi metode pengiriman untuk mencetak label pengiriman, opsi mana yang harus dipilih di bidang 'Level Integrasi'?",
    "Get Rate and Create Shipment": "Dapatkan Tarif dan Buat Pengiriman",
    "How do I change a shipping method from a 'Test Environment' to a 'Production Environment'?": "Bagaimana cara mengubah metode pengiriman dari 'Lingkungan Tes' ke 'Lingkungan Produksi'?",
    "Tick the checkbox next to 'Production'": "Centang kotak di sebelah 'Produksi'",
    "Which of the following information DOES NOT need to be configured to print shipping labels?": "Informasi mana dari berikut ini yang TIDAK perlu dikonfigurasi untuk mencetak label pengiriman?",
    "Product price": "Harga produk",
    
    # Materi 34
    "Which picking method requires the products to be sorted into orders *after* they are picked?": "Metode pengambilan mana yang mengharuskan produk disortir menjadi pesanan *setelah* diambil?",
    "Wave Picking": "Wave Picking",
    "To create a wave transfer, what do all the products have to have in common?": "Untuk membuat transfer wave, apa kesamaan yang harus dimiliki semua produk?",
    "The same operation type": "Tipe operasi yang sama",
    "Where do I go to see all the wave transfers assigned to me?": "Ke mana saya harus pergi untuk melihat semua transfer wave yang ditugaskan kepada saya?",
    "In the Inventory app, click Operations > Wave Transfers, and filter by 'My Transfers'": "Di aplikasi Inventaris, klik Operasi > Wave Transfers, dan filter berdasarkan 'Transfer Saya'",
}

def translate_line(line):
    line = line.strip()
    return translations.get(line, line)

def parse_quiz_text(text):
    quizzes = {}
    current_materi = None
    
    # Logic to parse text similar to previous script
    # Splitting by "Materi " (with space or newline)
    parts = re.split(r'Materi\s+(\d+)', text)
    
    # parts[0] is empty or pre-text
    # parts[1] is num, parts[2] is content, parts[3] is num, ...
    
    for i in range(1, len(parts), 2):
        m_num = int(parts[i])
        content = parts[i+1]
        
        qtions = []
        # Split by number dot
        # Regex lookahead for "Adjusted logic for questions"
        # We look for "1. ", "2. ", "3. " at start of lines
        questions_raw = re.split(r'\n\d+\.\s', '\n' + content)
        
        for q in questions_raw:
            if not q.strip(): continue
            
            lines = [l.strip() for l in q.strip().split('\n') if l.strip()]
            if len(lines) < 2: continue
            
            question_en = lines[0]
            
            # Find correct answer
            correct_en = None
            options_en = []
            
            for line in lines[1:]:
                if line.lower().startswith('correct:'):
                    correct_en = line.split(':', 1)[1].strip()
                else:
                    options_en.append(line)
            
            # Use dictionary to translate
            question_id = translate_line(question_en)
            correct_id = translate_line(correct_en) if correct_en else ""
            options_id = [translate_line(opt) for opt in options_en]
            
            qtions.append({
                "question": question_id,
                "question_en": question_en,
                "options": options_id,
                "options_en": options_en,
                "correct": correct_id
            })
            
        quizzes[f"inventory_materi{m_num}"] = qtions
        
    return quizzes

parsed_quizzes = parse_quiz_text(quiz_data_raw)

# Generate JS output
js_output_parts = []
for key, questions in parsed_quizzes.items():
    js_output_parts.append(f"  /* {key.replace('_', ' ').title()} */")
    js_output_parts.append(f"  {key}: [")
    for q in questions:
        # Safe string dump
        import json
        q_obj = json.dumps(q, indent=None) # raw json
        # We need to format the keys unquoted to match existing style if preferred, 
        # but valid JSON (quoted keys) is also fine for JS objects.
        # Let's clean up the keys to be unquoted for consistency if possible, or just use JSON strings.
        # Use simple string formatting
        
        # Helper to format string safely
        def s(x): return json.dumps(x)
        
        opts_id = ", ".join([s(o) for o in q['options']])
        opts_en = ", ".join([s(o) for o in q['options_en']])
        
        js_output_parts.append("    {")
        js_output_parts.append(f"      question: {s(q['question'])},")
        js_output_parts.append(f"      question_en: {s(q['question_en'])},")
        js_output_parts.append(f"      options: [{opts_id}],")
        js_output_parts.append(f"      options_en: [{opts_en}],")
        js_output_parts.append(f"      correct: {s(q['correct'])}")
        js_output_parts.append("    },")
    
    js_output_parts.append("  ],")

final_js_str = "\n".join(js_output_parts)

# Now append this to the quiz-bank.js file
# Logic: We already have an INVENTORY TRACK section.
# We want to replace/update Materi 21 and Append 22-34.
# The previous script appended "inventory_materi1" to "inventory_materi21".
# But wait, did the previous batch go up to 21? 
# "Populate Inventory Materi 1-21 with real content"
# Yes. So inventory_materi21 ALREADY EXISTS in the file.
# We need to replace it.
# Actually, the easiest way is to read the file, identify the INVENTORY TRACK block,
# Parse it out (it is between "INVENTORY TRACK" start marker and the final closing brace).
# The previous script overwrote the entire Inventory section.
# So we should probably READ the existing Inventory section from the file if we want to keep 1-20,
# AND THEN append/merge 21-34.
# OR, since we generated 1-21 via script in the previous step, we can just regenerate 21-34
# and tell the user we are updating.
# But "Materi 21" is a collision.
# The user wants to redefine Materi 21.
# So we need to keep 1-20, and overwrite 21, and add 22-34.

# Let's read the file
file_path = "/Users/mac/pembelajar-belajar-odoo/assets/js/quiz-bank.js"
with open(file_path, 'r') as f:
    content = f.read()

# We need to find where "inventory_materi21: [" starts and replace from there to the end of the inventory section?
# Or just replace the whole inventory block?
# If I don't have the source for 1-20 handy in this variable, I shouldn't delete them.
# The previous script `update_quiz_bank_inventory_v2.py` had the content for 1-21 embedded.
# I don't want to copy paste all that again.
# I will use Regex to find the end of "inventory_materi20: [ ... ]," and start appending/replacing.

# Pattern to find inventory_materi21 definition
# It looks like: inventory_materi21: [ ... ],
pattern_21 = r'(inventory_materi21\s*:\s*\[.*?\]\s*,)'

# We will try to find this. If found, we replace it with new 21 + 22...34
# If not found (maybe my regex is weak against multiline), we might have issues.
# JS objects in that file are comma separated keys.

import re

# Match inventory_materi21 carefully
# It starts with 'inventory_materi21:', followed by '[', then content, then '],'.
# NOTE: The regex needs to handle nested braces or just non-greedy until '],'
# But quizzes have objects inside {}.
# Safer approach:
# 1. Find index of "inventory_materi21:"
# 2. If found, cut the file content there.
# 3. Append the new 21-34 content.
# 4. Add the closing brace "}" for the whole object.

idx_21 = content.find("inventory_materi21:")
if idx_21 != -1:
    # Keep everything before inventory_materi21
    new_content_base = content[:idx_21]
    # Verify if there is trailing comma or whitespace cleanup needed
    new_content_base = new_content_base.rstrip()
    
    # Append new JS
    # final_js_str starts with "  /* Inventory Materi 21 */ ... inventory_materi21: [ ... ],"
    
    combined = new_content_base + "\n" + final_js_str + "\n}"
    
    with open(file_path, 'w') as f:
        f.write(combined)
    print("Updated quiz-bank.js: Replaced Materi 21 and added 22-34.")
else:
    print("Error: Could not find inventory_materi21 in quiz-bank.js. Please check file structure.")
    # Fallback: maybe just append if 20 exists?
    idx_20 = content.find("inventory_materi20:")
    if idx_20 != -1:
         # Find the end of 20
         # This is risky without robust parsing.
         pass
