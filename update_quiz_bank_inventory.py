import re

# Raw input from user (formatted for Python string)
quiz_input = """
Materi 1

1. What type of document is the source of a receipt of products to your inventory?
A Purchase Order.
A Manufacturing Order.
A Quotation.
A Sales Order.
Correct: A Purchase Order.

2. When receiving products in Odoo, why is it important to correctly set the ‘Destination Location’ on the receipt?
To ensure products are stored in the correct warehouse location
To track which vendor sent the shipment
To calculate the total cost of goods received
To automatically validate the receipt without further action
Correct: To ensure products are stored in the correct warehouse location

3. What key difference does enabling ‘Track Inventory’ on a product form make?
It allows the product’s stock quantities and locations to be tracked
It automatically orders more stock when the product runs low
It creates a purchase order for the product whenever it’s sold
It prevents the product from being relocated to another storage location
Correct: It allows the product’s stock quantities and locations to be tracked

Materi 2

1. From the video, why does Stealthy Wood use 2-step delivery?
Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping
To reduce the number of employees involved in deliveries
To minimize the need for product verification before shipping
Because their storage system requires multiple steps to access products
Correct: Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping

2. What type of document can be the source of a picking or delivery order?
A Sales Order
A Manufacturing Order
A Quotation
A Purchase Order
Correct: A Sales Order

3. What does it mean when the ‘Product Availability’ text shows ‘Available’ and is green in Odoo?
Items are available and reserved
Items have already been received
Items are expected to arrive in time for the delivery if received today
Items are available in the warehouse, but not reserved
Correct: Items are available and reserved

Materi 3

1. What do inventory transfers determine in Odoo’s warehouse operations?
How products move within the warehouse and how shipments are processed
The number of employees needed in the warehouse
The pricing of products based on warehouse location
Which suppliers can send shipments to the warehouse
Correct: How products move within the warehouse and how shipments are processed

2. When should you use a three-step receipt for quality checks in Odoo?
Only when some products need quality checks
Only when quality checks must happen at a separate inspection location
Always, because quality checks can only be done with three-step receipts
Never, because quality checks are only possible with one-step receipts
Correct: Only when some products need quality checks

3. In Odoo’s three-step delivery process, what are the correct steps for moving products?
Pick from storage → Pack into orders → Move to the output area
Perform quality check → Move to picking → Pack into orders
Pick from storage → Send to quality check → Move directly to customers
Pack into orders → Pick from storage → Move to picking area
Correct: Pick from storage → Pack into orders → Move to the output area

Materi 4

1. A “child location” in Odoo is defined as:
A subordinate node under a parent location in the location hierarchy
A location automatically generated during receipts
A location restricted to production orders
A location used only for cycle counts
Correct: A subordinate node under a parent location in the location hierarchy

2. Which Location Types are included in Odoo’s inventory valuation calculations?
Internal and Transit
Vendor and Customer
Internal and Vendor
Production and Inventory Loss
Correct: Internal and Transit

3. Sending items to the Inventory Loss (Scrap) location triggers which system behavior?
A stock move reduces on-hand quantity
A manufacturing order is created
An automatic vendor bill is generated
The product is transferred back to WH/Stock
Correct: A stock move reduces on-hand quantity

Materi 5

1. Where do you activate the Units of Measure feature in Odoo Inventory?
Configuration > Settings > Products section > Units of Measure.
Configuration > Units of Measure.
Nothing needs to be activated.
Products > Settings > Units of Measure.
Correct: Configuration > Settings > Products section > Units of Measure.

2. How do I calculate the number in the ‘Contains’ column when creating a new unit of measure?
Divide the new unit of measure by the reference unit of measure.
Subtract the new unit of measure by the reference unit of measure.
Multiple the new unit of measure by the reference unit of measure.
Add the new unit of measure to the reference unit of measure.
Correct: Divide the new unit of measure by the reference unit of measure.

3. If my database tracks my stock of a particular product in pounds, and I made an order of the product in kilograms, what unit will Odoo use when I receive the order into my inventory?
Pounds
Whatever order you choose in the receipt form.
Kilograms
Both kilograms and pounds.
Correct: Pounds

Materi 6

1. What is the route of a manually updated product quantity if my warehouse name is WH?
Virtual Locations/Inventory Adjustment → WH/Stock.
WH/Stock → Virtual Locations/Inventory Adjustment.
WH/Stock → Virtual Locations/WH/Stock.
Virtual Locations/WH/Stock → WH/Stock.
Correct: Virtual Locations/Inventory Adjustment → WH/Stock.

2. Where can I change the Inventory Frequency (Days)?
Under Operations > Inventory Adjustments.
Under Configuration > Settings.
Under Configuration > Locations.
Under Reporting > Product Moves.
Correct: Under Operations > Inventory Adjustments.

3. Where can you change the “Annual Inventory Day and Month” for your products in Odoo’s Inventory App?
By navigating to Inventory > Configuration > Settings > Operations Section (under “Annual Inventory Day and Month”).
Directly on the product form for each product in stock.
By navigating to Inventory > Configuration > Settings > and activating Expiration Dates.
You cannot change the Annual Inventory Day and Month.
Correct: By navigating to Inventory > Configuration > Settings > Operations Section (under “Annual Inventory Day and Month”).

Materi 7

1. What is a “landed cost”?
Expenses that must be paid, in addition to the cost of a product when purchasing it
The price of an imported product
The price to transport a product using ground shipping
The cost of moving a product from a ship onto land
Correct: Expenses that must be paid, in addition to the cost of a product when purchasing it

2. Which costing method should I use to set the cost of a product as the average cost of every unit on-hand?
Average Cost (AVCO)
Standard Price
First In First Out (FIFO)
This is not possible in Odoo
Correct: Average Cost (AVCO)

3. Which of the following is NOT an option when selecting a Split Method for landed costs?
By Color
Equal
By Quantity
By Volume
Correct: By Color

Materi 8

1. What is the purpose of separating access rights between user roles?
To ensure security and prevent access to unnecessary configurations
To increase the database size
To allow both users to configure company settings
To prevent users from logging in
Correct: To ensure security and prevent access to unnecessary configurations

2. Why would a Warehouse Manager need access to the Purchase app?
To view POs and process receipts
To create vendors
To approve expenses
To configure tax rules
Correct: To view POs and process receipts

3. Which additional application becomes available when a user is granted access to the Inventory app, if the app is installed?
Barcode
Manufacturing
Quality
Sales
Correct: Barcode

Materi 9

1. Once a product has been ordered from the replenishment report (“Order Once” was clicked), what happens?
A request for quotation is generated for the “To Order” amount.
A request for quotation is generated for the “To Order” amount, and a product moves line is generated at the bottom of the Replenishment report.
A request for quotation is generated for the forecasted amount, and the product disappears from the Replenishment report.
A request for quotation is generated for the “Maximum Quantity”, and the product is grayed out on the Replenishment report.
Correct: A request for quotation is generated for the “To Order” amount.

2. When would the manual replenishment report show an item that has a reordering rule?
If the forecasted quantity is below the minimum specified in the reordering rule.
A product with a reordering rule would never appear on the manual replenishment report.
If the product has a reordering rule with the minimum and maximum quantities both set to zero.
If the product form does not have a vendor selected.
Correct: If the forecasted quantity is below the minimum specified in the reordering rule.

3. When a product’s on-hand quantity is between the minimum and maximum specified in the reordering rule, what happens when you select the “Order to Max” button?
A purchase order is placed for the difference between the maximum and on-hand quantities.
Nothing, because the reordering rule isn’t triggered
A purchase order is placed for the maximum quantity.
A purchase order is placed for the difference between the maximum and minimum quantities.
Correct: A purchase order is placed for the difference between the maximum and on-hand quantities.

Materi 10

1. A product’s reordering rule is set for a minimum of 20 units, and a maximum of 50 units. If a sales order is confirmed, and the forecasted quantity of the product is 15, how many units will be on the automatically generated RFQ?
35
5
20
50
Correct: 35

2. What do you need to properly set up an automatic reordering rule?
When the forecasted quantity falls below the defined minimum, an automatic reordering rule is triggered.
Set a rule for a product on the Reordering Rule dashboard.
Set a reordering rule and a default vendor for the product.
Nothing, Odoo will automatically purchase the items.
Correct: When the forecasted quantity falls below the defined minimum, an automatic reordering rule is triggered.

3. A product’s reordering rule is set for a minimum of 10 units, and a maximum of 15. If the forecasted quantity of the product is -5, what’s the amount to reorder?
20
5
10
25
Correct: 20

Materi 11

1. What’s the ‘Expected Arrival Date’ of a product with a vendor delivery lead time of 7 days, if the ‘Order Deadline’ is set to June 8th?
June 15th
June 1st
June 8th
June 16th
Correct: June 15th

2. What happens when the “Days to Purchase” setting is set to three, and a request for quotation is generated *today* from a reordering rule?
The ‘Order Deadline’ on a request for quotation shows three days from today
The ‘Order Date’ on a quotation shows three days from today
The ‘Vendor Deadline’ on a request for quotation shows three days from today
The ‘Expected Arrival Date’ on a request for quotation shows three days from today
Correct: The ‘Order Deadline’ on a request for quotation shows three days from today

3. What is the ‘Requested date is too soon’ warning on the sales order based on?
Customer Lead Time, Vendor Lead Time, and Security Lead Times for Sales and Purchase
Vendor Lead Time + Security Lead Time for Purchase
Customer Lead Time + Security Lead Time for Sales
Customer Lead Time only
Correct: Customer Lead Time, Vendor Lead Time, and Security Lead Times for Sales and Purchase

Materi 12

1. In the video, where can the resupply route be found after selecting 'Distribution center' in the 'Resupply From' field of the 'Warehouse Configuration' tab?
‘Settings’ > ‘Warehouse’ configuration page
‘Warehouse Overview’ dashboard
Product form, in the 'Inventory' Tab
‘Delivery order’
Correct: ‘Settings’ > ‘Warehouse’ configuration page

2. Which Inventory settings are required to use the ‘Resupply From’ route?
‘Multi-Step Routes’
‘Warehouse Configuration’
‘Storage Locations’ and ‘Multi-Step Routes’
‘Resupply From’, with the ‘Distribution center’ selected
Correct: ‘Multi-Step Routes’

3. What operation(s) does Odoo create to complete the resupply from another warehouse process?
‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop
‘Internal Transfer’ from warehouse to shop
‘Resupply Warehouse’ from warehouse to shop
‘Interwarehouse transit’ operation
Correct: ‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop

Materi 13

1. What happens if you try to validate a receipt without entering lot numbers?
Odoo shows an error message
Odoo automatically assigns them
Nothing happens
The order is cancelled
Correct: Odoo shows an error message

2. What is a traceability report used for?
Viewing the movement of lots and serials
Calculating taxes
Tracking sales only
Setting up inventory categories
Correct: Viewing the movement of lots and serials

3. What product type must an item be to enable lot or serial tracking
Goods
Virtual
Consumable
Service
Correct: Goods

Materi 14

1. Which Inventory settings *must* be activated in order to use the FEFO removal strategy?
Lots & Serial Numbers, Expiration Dates, Storage Locations, and Multi-Step Routes.
Barcode Scanner.
Packages, Batch Transfers, and Wave Transfers.
FEFO is automatically activated in every Odoo database.
Correct: Lots & Serial Numbers, Expiration Dates, Storage Locations, and Multi-Step Routes.

2. When can you set an expiry date for new lots of products entering the inventory?
Directly at the reception of the products, when organizing lots on the Detailed Operations window, but *only* if the Expiration Dates feature is activated.
Once lots are in-stock, you can add an expiry date in the Date tab of each lot form.
A & B.
Odoo does *not* allow expiration dates to be set on products.
Correct: Directly at the reception of the products, when organizing lots on the Detailed Operations window, but *only* if the Expiration Dates feature is activated.

3. Where else can you enter the Expiration Date after receiving the products?
On the Purchase Lot form.
On the Inventory Moves page.
On the Purchase Order form, by clicking “Edit.”
This is *not* a feature in Odoo.
Correct: On the Purchase Lot form.

Materi 15

1. What setting do I need to enable for Inventory before I can enable expiration dates?
Lots & Serial Numbers
Barcode Scanner
Storage Locations
Product Packages
Correct: Lots & Serial Numbers

2. If I change the Expiration Date for a lot or product, what will happen to the Removal Date?
It is recalculated based on its configuration in the product form.
It remains the same as
The removal date becomes immediate
I have to manually change the removal date as well.
Correct: It is recalculated based on its configuration in the product form.

3. Where can I set up the database to use the FEFO removal strategy?
Both B & C
On the product form
On the product type
On the storage location
Correct: Both B & C

Materi 16

1. What needs to be enabled in order to use Push & Pull rules?
Multi-Step Routes
Nothing needs to be enabled
Developer mode
Storage categories
Correct: Multi-Step Routes

2. Apart from ‘Take from stock’ and ‘Take from stock, if…’, what is the other supply method that can be used with routes?
Trigger another rule
Take from a customer location
Take from a virtual location
Trigger the previous rule
Correct: Trigger another rule

3. To fulfill a sales order, which type of action is triggered?
A Pull rule, because the product comes from an internal location
A Push rule, because the product goes to an external location
A Push *and* a Pull rule, because a Push rule *can’t* work without a Pull rule (and vice versa)
It depends on how the route is set up, and on the number of rules coming into action during the process
Correct: A Pull rule, because the product comes from an internal location

Materi 17

1. What is the purpose of a putaway rule in Odoo?
To automatically assign incoming products to specific storage locations
To track employee attendance
To manage customer invoices
To generate sales reports
Correct: To automatically assign incoming products to specific storage locations

2. When creating a putaway rule, which field determines the specific product the rule applies to?
A and C
Product Category
Vendor
Product
Correct: A and C

3. What is the parent location for the ‘WH/Stock/Music’ storage location in the example?
WH/Stock
WH
WH/Main
WH/Storage
Correct: WH/Stock

Materi 18

1. What does the “Having Category” on a putaway rule determine?
The “Having Category” uses the chosen Product Category to determine where a product is put away
The “Having Category” determines where a product is put away, based on its variant
The “Having Category” uses the chosen Storage Category to determine where a product is put away, based on location capacity
The “Having Category” determines where a product is put away, based on its route
Correct: The “Having Category” uses the chosen Product Category to determine where a product is put away

2. If the ‘Capacity by Product’ is set to ‘100’ on two different storage locations for a putaway rule, and the on-hand quantity is ‘75’ at Location A, and ‘0’ at Location B, what occurs when 50 units of that product is received from a vendor?
25 units are stored in Location A, and 25 units are stored in Location B
0 units are stored in Location A, and 50 units are stored in Location B
No units of the product will be stored in either Location (A/B) because exactly 100 units have to be received in order to store it
Odoo doesn’t have the ability to set limits on product capacity by location
Correct: 25 units are stored in Location A, and 25 units are stored in Location B

3. Where can I check the intended storage location determined by the putaway rules and storage category, on a receipt?
Both B & C
It’s displayed in the Destination Location field
Clicking the hamburger/list icon to open the ‘Stock move’ pop-up window
In the Detailed Operations smart button
Correct: Both B & C

Materi 19

1. Which Inventory app setting needs to be enabled to use the ‘Cross-Dock’ route?
‘Multi-Step Routes’
‘Cross-Docking’
‘Push/Pull Routes’
The ‘Cross-Dock’ route is available, by default
Correct: ‘Multi-Step Routes’

2. To use the ‘Cross-Dock’ route for a product, which routes must be enabled on the product’s ‘Inventory’ tab?
‘Buy’ and ‘Cross-Dock’
‘Manufacture’ and ‘Sell’
‘Sell’ and ‘Cross-Dock’
‘Dropship’ and ‘Sell’
Correct: ‘Buy’ and ‘Cross-Dock’

3. How many transfers are created after confirming a sales order for a product that uses the ‘Cross-Dock’ route?
Two
One
Three
Four
Correct: Two

Materi 20

1. When receiving consignment stock from a vendor, which of the following should you create?
Receipt
Purchase Order
Request for Quotation (RfQ)
All of the above
Correct: Receipt

2. When creating a receipt for consignment stock, where do you assign the Owner of the products in your warehouse?
In the ‘Assign Owner’ area, located on the warehouse receipt
Directly from the warehouse settings page
You can’t assign an owner for consignment stock
A & B
Correct: In the ‘Assign Owner’ area, located on the warehouse receipt

3. On the “Stock Valuation” page, what is displayed in the “Total Value” column for consignment products?
‘0.00’
The exact value of the quantity of the product on hand
Half of the exact value of the quantity of the product on hand
Twice the exact value of the quantity of the product on hand
Correct: ‘0.00’

Materi 21

1. Where can I find the ‘Map’ button for viewing delivery destinations on a map when planning batches?
On a batch transfer by clicking the ‘gear’ icon to show the ‘Map’ option
Inventory > Configuration > Dispatch Management
On a batch transfer when the status is set to ‘In Progress’
On a wave transfer in the ‘Operations’ tab
Correct: On a batch transfer by clicking the ‘gear’ icon to show the ‘Map’ option

2. What is required to configure the settings for a dock location in Odoo?
Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox
Designate one delivery truck per dock
On the picking, set the ‘Destination Location’ to the dock location
On a batch, set the ‘Dock Location’
Correct: Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox

3. In the video, why did I have to set ‘Dock B’ as the destination location in the ‘To’ field?
Because ‘Output’ is the default location, and does not specify the exact dock location for our orders
To avoid products being sent to the wrong warehouse
Because Dock B is the only available location for these products
To make sure the picking process is completed automatically
Correct: Because ‘Output’ is the default location, and does not specify the exact dock location for our orders
"""

# Simple translation dictionary for common terms
translations = {
    "What type of document is the source of a receipt of products to your inventory?": "Jenis dokumen apa yang menjadi sumber penerimaan produk ke inventaris Anda?",
    "A Purchase Order.": "Order Pembelian (PO).",
    "A Manufacturing Order.": "Order Produksi.",
    "A Quotation.": "Penawaran (Quotation).",
    "A Sales Order.": "Order Penjualan (SO).",
    "When receiving products in Odoo, why is it important to correctly set the ‘Destination Location’ on the receipt?": "Saat menerima produk di Odoo, mengapa penting untuk mengatur 'Lokasi Tujuan' dengan benar pada resi?",
    "To ensure products are stored in the correct warehouse location": "Untuk memastikan produk disimpan di lokasi gudang yang benar",
    "To track which vendor sent the shipment": "Untuk melacak vendor mana yang mengirim pengiriman",
    "To calculate the total cost of goods received": "Untuk menghitung total biaya barang yang diterima",
    "To automatically validate the receipt without further action": "Untuk memvalidasi resi secara otomatis tanpa tindakan lebih lanjut",
    "What key difference does enabling ‘Track Inventory’ on a product form make?": "Perbedaan utama apa yang terjadi jika mengaktifkan 'Lacak Inventaris' pada formulir produk?",
    "It allows the product’s stock quantities and locations to be tracked": "Ini memungkinkan jumlah stok dan lokasi produk dilacak",
    "It automatically orders more stock when the product runs low": "Secara otomatis memesan lebih banyak stok saat produk menipis",
    "It creates a purchase order for the product whenever it’s sold": "Membuat order pembelian untuk produk setiap kali terjual",
    "It prevents the product from being relocated to another storage location": "Mencegah produk dipindahkan ke lokasi penyimpanan lain",
    "From the video, why does Stealthy Wood use 2-step delivery?": "Mengapa Stealthy Wood menggunakan pengiriman 2 langkah?",
    "To reduce the number of employees involved in deliveries": "Untuk mengurangi jumlah karyawan yang terlibat dalam pengiriman",
    "Because their picking team is highly efficient at locating products, and the delivery team focuses on verifying, packing, and shipping": "Karena tim picking mereka sangat efisien menemukan produk, dan tim pengiriman fokus pada verifikasi, pengepakan, dan pengiriman",
    "To minimize the need for product verification before shipping": "Untuk meminimalkan kebutuhan verifikasi produk sebelum pengiriman",
    "What does it mean when the ‘Product Availability’ text shows ‘Available’ and is green in Odoo?": "Apa artinya jika teks 'Ketersediaan Produk' menunjukkan 'Tersedia' dan berwarna hijau di Odoo?",
    "Items are available and reserved": "Barang tersedia dan dicadangkan (reserved)",
    "Items have already been received": "Barang sudah diterima",
    "Items are expected to arrive in time for the delivery if received today": "Barang diharapkan tiba tepat waktu jika diterima hari ini",
    "Items are available in the warehouse, but not reserved": "Barang tersedia di gudang, tetapi belum dicadangkan",
    "What do inventory transfers determine in Odoo’s warehouse operations?": "Apa yang ditentukan oleh transfer inventaris dalam operasi gudang Odoo?",
    "How products move within the warehouse and how shipments are processed": "Bagaimana produk bergerak di dalam gudang dan bagaimana pengiriman diproses",
    "When should you use a three-step receipt for quality checks in Odoo?": "Kapan Anda harus menggunakan penerimaan tiga langkah untuk pemeriksaan kualitas di Odoo?",
    "Only when some products need quality checks": "Hanya ketika beberapa produk memerlukan pemeriksaan kualitas",
    "In Odoo’s three-step delivery process, what are the correct steps for moving products?": "Dalam proses pengiriman tiga langkah Odoo, apa langkah yang benar untuk memindahkan produk?",
    "Pick from storage → Pack into orders → Move to the output area": "Ambil dari penyimpanan → Kemas ke dalam pesanan → Pindahkan ke area output",
    "A “child location” in Odoo is defined as:": "Sebuah 'lokasi anak' (child location) di Odoo didefinisikan sebagai:",
    "A subordinate node under a parent location in the location hierarchy": "Node bawahan di bawah lokasi induk dalam hierarki lokasi",
    "Which Location Types are included in Odoo’s inventory valuation calculations?": "Jenis Lokasi mana yang termasuk dalam perhitungan penilaian inventaris Odoo?",
    "Internal and Transit": "Internal dan Transit",
    "Sending items to the Inventory Loss (Scrap) location triggers which system behavior?": "Mengirim item ke lokasi Inventory Loss (Scrap) memicu perilaku sistem yang mana?",
    "A stock move reduces on-hand quantity": "Pergerakan stok mengurangi jumlah di tangan (on-hand)",
    "Where do you activate the Units of Measure feature in Odoo Inventory?": "Di mana Anda mengaktifkan fitur Satuan Ukuran (Available) di Inventaris Odoo?",
    "Configuration > Settings > Products section > Units of Measure.": "Konfigurasi > Pengaturan > Bagian Produk > Satuan Ukuran.",
    "Divide the new unit of measure by the reference unit of measure.": "Bagi satuan ukuran baru dengan satuan ukuran referensi.",
    "If my database tracks my stock of a particular product in pounds, and I made an order of the product in kilograms, what unit will Odoo use when I receive the order into my inventory?": "Jika database saya melacak stok produk tertentu dalam pound, dan saya memesan produk dalam kilogram, satuan apa yang akan digunakan Odoo saat saya menerima pesanan?",
    "Pounds": "Pounds",
    "What is the route of a manually updated product quantity if my warehouse name is WH?": "Apa rute update kuantitas produk secara manual jika nama gudang saya adalah WH?",
    "Virtual Locations/Inventory Adjustment → WH/Stock.": "Lokasi Virtual/Penyesuaian Inventaris → WH/Stock.",
    "Where can I change the Inventory Frequency (Days)?": "Di mana saya dapat mengubah Frekuensi Inventaris (Hari)?",
    "Under Operations > Inventory Adjustments.": "Di bawah Operasi > Penyesuaian Inventaris.",
    "Where can you change the “Annual Inventory Day and Month” for your products in Odoo’s Inventory App?": "Di mana Anda dapat mengubah 'Hari dan Bulan Inventaris Tahunan' untuk produk Anda?",
    "By navigating to Inventory > Configuration > Settings > Operations Section (under “Annual Inventory Day and Month”).": "Dengan menavigasi ke Inventaris > Konfigurasi > Pengaturan > Bagian Operasi (di bawah 'Hari dan Bulan Inventaris Tahunan').",
    "What is a “landed cost”?": "Apa itu 'biaya mendarat' (landed cost)?",
    "Expenses that must be paid, in addition to the cost of a product when purchasing it": "Pengeluaran yang harus dibayar, di samping biaya produk saat membelinya",
    "Which costing method should I use to set the cost of a product as the average cost of every unit on-hand?": "Metode penetapan biaya mana yang harus saya gunakan untuk menetapkan biaya produk sebagai biaya rata-rata setiap unit di tangan?",
    "Average Cost (AVCO)": "Biaya Rata-Rata (AVCO)",
    "Which of the following is NOT an option when selecting a Split Method for landed costs?": "Manakah yang BUKAN merupakan opsi saat memilih Metode Pemisahan untuk landed costs?",
    "By Color": "Berdasarkan Warna",
    "What is the purpose of separating access rights between user roles?": "Apa tujuan memisahkan hak akses antar peran pengguna?",
    "To ensure security and prevent access to unnecessary configurations": "Untuk memastikan keamanan dan mencegah akses ke konfigurasi yang tidak perlu",
    "Why would a Warehouse Manager need access to the Purchase app?": "Mengapa Manajer Gudang memerlukan akses ke aplikasi Pembelian?",
    "To view POs and process receipts": "Untuk melihat PO dan memproses penerimaan",
    "Which additional application becomes available when a user is granted access to the Inventory app, if the app is installed?": "Aplikasi tambahan mana yang tersedia saat pengguna diberikan akses ke aplikasi Inventaris?",
    "Barcode": "Barcode",
    "Once a product has been ordered from the replenishment report (“Order Once” was clicked), what happens?": "Setelah produk dipesan dari laporan replenishment, apa yang terjadi?",
    "A request for quotation is generated for the “To Order” amount.": "Permintaan penawaran (RFQ) dibuat untuk jumlah 'To Order'.",
    "When would the manual replenishment report show an item that has a reordering rule?": "Kapan laporan replenishment manual menampilkan item yang memiliki aturan pemesanan ulang?",
    "If the forecasted quantity is below the minimum specified in the reordering rule.": "Jika jumlah yang diperkirakan di bawah minimum yang ditentukan dalam aturan pemesanan ulang.",
    "When a product’s on-hand quantity is between the minimum and maximum specified in the reordering rule, what happens when you select the “Order to Max” button?": "Saat jumlah on-hand antara min dan max, apa yang terjadi saat tombol 'Order to Max' dipilih?",
    "A purchase order is placed for the difference between the maximum and on-hand quantities.": "Pesanan pembelian dibuat untuk selisih antara jumlah maksimum dan jumlah di tangan.",
    "What do you need to properly set up an automatic reordering rule?": "Apa yang Anda butuhkan untuk mengatur aturan pemesanan ulang otomatis dengan benar?",
    "When the forecasted quantity falls below the defined minimum, an automatic reordering rule is triggered.": "Ketika jumlah perkiraan jatuh di bawah minimum, aturan otomatis dipicu.",
    "What’s the ‘Expected Arrival Date’ of a product with a vendor delivery lead time of 7 days, if the ‘Order Deadline’ is set to June 8th?": "Apa 'Tanggal Kedatangan yang Diharapkan' jika lead time vendor 7 hari dan deadline 8 Juni?",
    "June 15th": "15 Juni",
    "What is the ‘Requested date is too soon’ warning on the sales order based on?": "Peringatan 'Tanggal yang diminta terlalu cepat' pada pesanan penjualan didasarkan pada?",
    "Customer Lead Time, Vendor Lead Time, and Security Lead Times for Sales and Purchase": "Lead Time Pelanggan, Vendor, dan Keamanan untuk Penjualan dan Pembelian",
    "In the video, where can the resupply route be found after selecting 'Distribution center' in the 'Resupply From' field of the 'Warehouse Configuration' tab?": "Di mana rute resupply dapat ditemukan?",
    "‘Settings’ > ‘Warehouse’ configuration page": "Halaman konfigurasi 'Pengaturan' > 'Gudang'",
    "Which Inventory settings are required to use the ‘Resupply From’ route?": "Pengaturan Inventaris mana yang diperlukan untuk menggunakan rute 'Resupply From'?",
    "‘Multi-Step Routes’": "'Rute Multi-Langkah'",
    "What operation(s) does Odoo create to complete the resupply from another warehouse process?": "Operasi apa yang dibuat Odoo untuk menyelesaikan proses resupply?",
    "‘Delivery Order’ from the warehouse, and ‘Receipt’ for the shop": "'Order Pengiriman' dari gudang, dan 'Penerimaan' untuk toko",
    "What happens if you try to validate a receipt without entering lot numbers?": "Apa yang terjadi jika Anda mencoba memvalidasi resi tanpa memasukkan nomor lot?",
    "Odoo shows an error message": "Odoo menampilkan pesan error",
    "What is a traceability report used for?": "Apa kegunaan laporan traceability?",
    "Viewing the movement of lots and serials": "Melihat pergerakan lot dan serial",
    "What product type must an item be to enable lot or serial tracking": "Tipe produk apa yang harus dimiliki item untuk mengaktifkan pelacakan lot?",
    "Goods": "Barang (Storable Product)",
    "Which Inventory settings *must* be activated in order to use the FEFO removal strategy?": "Pengaturan Inventaris mana yang *harus* diaktifkan untuk menggunakan strategi FEFO?",
    "Lots & Serial Numbers, Expiration Dates, Storage Locations, and Multi-Step Routes.": "Nomor Lot & Serial, Tanggal Kedaluwarsa, Lokasi Penyimpanan, dan Rute Multi-Langkah.",
    "When can you set an expiry date for new lots of products entering the inventory?": "Kapan Anda bisa mengatur tanggal kedaluwarsa untuk lot produk baru?",
    "Directly at the reception of the products, when organizing lots on the Detailed Operations window, but *only* if the Expiration Dates feature is activated.": "Langsung pada penerimaan produk, saat mengatur lot di jendela Operasi Rinci, tetapi *hanya* jika fitur Tanggal Kedaluwarsa diaktifkan.",
    "Where else can you enter the Expiration Date after receiving the products?": "Di mana lagi Anda bisa memasukkan Tanggal Kedaluwarsa setelah menerima produk?",
    "On the Purchase Lot form.": "Pada formulir Lot Pembelian.",
    "What setting do I need to enable for Inventory before I can enable expiration dates?": "Pengaturan apa yang perlu saya aktifkan sebelum saya bisa mengaktifkan tanggal kedaluwarsa?",
    "Lots & Serial Numbers": "Nomor Lot & Serial",
    "If I change the Expiration Date for a lot or product, what will happen to the Removal Date?": "Jika saya mengubah Tanggal Kedaluwarsa, apa yang terjadi pada Tanggal Penghapusan?",
    "It is recalculated based on its configuration in the product form.": "Dihitung ulang berdasarkan konfigurasinya di formulir produk.",
    "Where can I set up the database to use the FEFO removal strategy?": "Di mana saya bisa mengatur database untuk menggunakan strategi FEFO?",
    "Both B & C": "Baik B & C (Kategori Produk & Lokasi)",
    "What needs to be enabled in order to use Push & Pull rules?": "Apa yang perlu diaktifkan untuk menggunakan aturan Push & Pull?",
    "Multi-Step Routes": "Rute Multi-Langkah",
    "Apart from ‘Take from stock’ and ‘Take from stock, if…’, what is the other supply method that can be used with routes?": "Selain 'Ambil dari stok', apa metode pasokan lain yang bisa digunakan?",
    "Trigger another rule": "Picu aturan lain",
    "To fulfill a sales order, which type of action is triggered?": "Untuk memenuhi order penjualan, jenis tindakan apa yang dipicu?",
    "A Pull rule, because the product comes from an internal location": "Aturan Pull, karena produk berasal dari lokasi internal",
    "What is the purpose of a putaway rule in Odoo?": "Apa tujuan aturan putaway di Odoo?",
    "To automatically assign incoming products to specific storage locations": "Untuk secara otomatis menetapkan produk masuk ke lokasi penyimpanan tertentu",
    "When creating a putaway rule, which field determines the specific product the rule applies to?": "Saat membuat aturan putaway, bidang mana yang menentukan produk tertentu?",
    "A and C": "A dan C (Kategori & Produk)",
    "What is the parent location for the ‘WH/Stock/Music’ storage location in the example?": "Apa lokasi induk untuk 'WH/Stock/Music'?",
    "WH/Stock": "WH/Stock",
    "What does the “Having Category” on a putaway rule determine?": "Apa yang ditentukan oleh 'Having Category' pada aturan putaway?",
    "The “Having Category” uses the chosen Product Category to determine where a product is put away": "'Having Category' menggunakan Kategori Produk yang dipilih untuk menentukan di mana produk diletakkan",
    "If the ‘Capacity by Product’ is set to ‘100’ on two different storage locations...": "Jika 'Kapasitas per Produk' diatur ke '100'...",
    "25 units are stored in Location A, and 25 units are stored in Location B": "25 unit disimpan di Lokasi A, dan 25 unit disimpan di Lokasi B",
    "Where can I check the intended storage location determined by the putaway rules...": "Di mana saya bisa memeriksa lokasi penyimpanan yang dituju...",
    "Both B & C": "Baik B & C",
    "Which Inventory app setting needs to be enabled to use the ‘Cross-Dock’ route?": "Pengaturan Inventaris mana yang perlu diaktifkan untuk menggunakan rute 'Cross-Dock'?",
    "To use the ‘Cross-Dock’ route for a product, which routes must be enabled on the product’s ‘Inventory’ tab?": "Rute mana yang harus diaktifkan pada tab 'Inventaris' produk?",
    "‘Buy’ and ‘Cross-Dock’": "'Beli' dan 'Cross-Dock'",
    "How many transfers are created after confirming a sales order for a product that uses the ‘Cross-Dock’ route?": "Berapa banyak transfer yang dibuat setelah mengonfirmasi SO dengan rute 'Cross-Dock'?",
    "Two": "Dua",
    "When receiving consignment stock from a vendor, which of the following should you create?": "Saat menerima stok konsinyasi, apa yang harus Anda buat?",
    "Receipt": "Penerimaan (Receipt)",
    "When creating a receipt for consignment stock, where do you assign the Owner of the products in your warehouse?": "Di mana Anda menetapkan Pemilik produk konsinyasi?",
    "In the ‘Assign Owner’ area, located on the warehouse receipt": "Di area 'Tetapkan Pemilik', yang terletak di resi gudang",
    "On the “Stock Valuation” page, what is displayed in the “Total Value” column for consignment products?": "Pada halaman 'Penilaian Stok', apa yang ditampilkan di kolom 'Total Nilai' produk konsinyasi?",
    "‘0.00’": "'0.00'",
    "Where can I find the ‘Map’ button for viewing delivery destinations on a map when planning batches?": "Di mana tombol 'Peta' untuk melihat tujuan pengiriman?",
    "On a batch transfer by clicking the ‘gear’ icon to show the ‘Map’ option": "Pada transfer batch dengan mengklik ikon 'gear' untuk menampilkan opsi 'Map'",
    "What is required to configure the settings for a dock location in Odoo?": "Apa yang diperlukan untuk mengonfigurasi pengaturan lokasi dok?",
    "Go to the dock location from ‘Configuration’ > ‘Locations’, and tick ‘Is a Dock Location’ checkbox": "Pergi ke lokasi dok dari 'Konfigurasi' > 'Lokasi', dan centang 'Is a Dock Location'",
    "In the video, why did I have to set ‘Dock B’ as the destination location in the ‘To’ field?": "Mengapa harus mengatur 'Dock B' sebagai lokasi tujuan?",
    "Because ‘Output’ is the default location, and does not specify the exact dock location for our orders": "Karena 'Output' adalah lokasi default, dan tidak menentukan lokasi dok yang tepat"
}

def translate(text):
    text = text.strip()
    return translations.get(text, text)

# Process raw input
blocks = quiz_input.split("Materi ")
final_js_output = ""
modules = []

for block in blocks:
    if not block.strip():
        continue
    
    lines = block.strip().split('\n')
    m_num_raw = lines[0].strip()
    
    # Handle duplicate 12 manually or logically
    # Logic: If m_num is 12 and we already have 12, make it 13, etc. 
    # But since I'm generating a script to create JS, let's just create a list of objects first
    
    # Parse questions
    current_q = None
    questions = []
    
    for line in lines[1:]:
        line = line.strip()
        if not line: continue
        
        # Check if new question
        if re.match(r'^\d+\.', line):
            if current_q:
                questions.append(current_q)
            current_q = {
                "q": line.split('.', 1)[1].strip(),
                "opts": [],
                "correct": ""
            }
        elif line.startswith("Correct:"):
            if current_q:
                current_q["correct"] = line.split("Correct:", 1)[1].strip()
        elif current_q and line:
            current_q["opts"].append(line)
            
    if current_q:
        questions.append(current_q)
        
    modules.append({"num": m_num_raw, "questions": questions})

# Re-index modules
# The user's input has two "Materi 12" blocks.
# I need to detect this and increment subsequent numbers.
final_modules = {}
idx_counter = 0
last_num = 0

for m in modules:
    try:
        num = int(m["num"])
    except:
        continue
        
    # If num <= last_num, it's a duplicate or reset, so we increment our internal counter
    # The user's input went 1..12, 12..20.
    if num <= last_num:
        # Detected duplicate 12
        # Real index should be 13
        real_num = idx_counter + 1
    else:
        real_num = num
    
    # Wait, the user's input has specific mappings.
    # 1-12 match.
    # 2nd 12 is Traceability (Materi 13 in my structure)
    # 13 is Traceability (Materi 14)
    # ...
    # Let's just blindly trust the order provided and map to inventory_materi1...N
    # The first block is Materi 1. 2nd is 2. etc.
    
    idx_counter += 1
    key = f"inventory_materi{idx_counter}"
    
    # Construct JS
    js_block = f"  /* Inventory Materi {idx_counter} */\n  {key}: ["
    
    for q in m["questions"]:
        
        # Get translation or valid default
        q_id = translate(q["q"])
        correct_id = translate(q["correct"])
        opts_id = [translate(o) for o in q["opts"]]
        
        js_block += f"""
    {{
      question: "{q_id.replace('"', '\\"')}",
      question_en: "{q['q'].replace('"', '\\"')}",
      options: {str(opts_id).replace("'", '"')},
      options_en: {str(q["opts"]).replace("'", '"')},
      correct: "{correct_id.replace('"', '\\"')}"
    }},"""
    
    js_block = js_block.rstrip(',') + "\n  ],"
    final_js_output += js_block + "\n"

# Write script to replace content in quiz-bank.js
# We need to find the inventory track section and replace it
py_updater = f"""
import re

new_content = \"\"\"{final_js_output}\"\"\"

file_path = "/Users/mac/pembelajar-belajar-odoo/assets/js/quiz-bank.js"

with open(file_path, 'r') as f:
    content = f.read()

# Pattern to find the Inventory Track section
# matches from INVENTORY TRACK header down to the closing brace of the object or next track
pattern = r'(/\* =+.*?INVENTORY TRACK.*?=+\s*\*/)(.*?)(?=\}\s*$)'

# We will just replace everything from INVENTORY TRACK start to the end of the file (excluding last brace)
# creating a clean slate for inventory
regex = r'(/\* =+\s*INVENTORY TRACK\s*=+\s*\*/).*'

# Check if inventory track exists
if "INVENTORY TRACK" in content:
    # Remove existing inventory part
    content = re.sub(regex, '', content, flags=re.DOTALL)
    content = content.strip().rstrip('}') + "\\n\\n" + new_content + "\\n}"
else:
    # Append if not exists (should handle this case too)
    content = content.strip().rstrip('}') + "\\n\\n" + new_content + "\\n}"

with open(file_path, 'w') as f:
    f.write(content)

print("Updated quiz-bank.js with real inventory quizzes")
"""

with open("update_quiz_bank_inventory.py", "w") as f:
    f.write(py_updater)
