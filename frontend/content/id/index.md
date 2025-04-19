# Panduan SEO Kilat

## Tujuan Panduan Ini

Tujuan dari panduan ini adalah, setelah Anda membacanya dan mempraktikkannya, Anda dapat mencapai skor 80 untuk SEO situs web Anda, bahkan jika Anda tidak tahu mengapa, atau bahkan tidak tahu apa itu SEO.

Oleh karena itu, panduan ini tidak akan memberi tahu Anda apa itu SEO, atau mengajari Anda pengetahuan teoretis tentang SEO, tetapi hanya akan memberi tahu Anda "cara melakukan SEO dengan baik".

Jadi, jika Anda ingin mempelajari "apa itu seo", "bagaimana cara kerja seo", saya sarankan untuk melihat [versi asli panduan ini](https://ahrefs.com/blog/zh/how-do-search-engines-work/).

Jika Anda ingin mempelajari "cara melakukan seo", panduan ini sangat cocok untuk Anda.

Namun, sebelum Anda membacanya, harap ingat bahwa ini adalah "seni", bukan "jalan".

90% konten panduan ini berasal dari Panduan SEO Ahrefs, yang dapat dianggap sebagai versi ringkas dari panduan aslinya.

Berikut adalah versi asli Panduan SEO Ahrefs, jika Anda punya waktu, saya sarankan untuk melihatnya: https://ahrefs.com/blog/zh/how-do-search-engines-work/

Jika Anda sudah siap, mari kita mulai.



## Versi Kilat, Selesai dalam 10 Menit

### 0、Pastikan Situs Web Anda Berupa Halaman Statis atau Dirender di Backend

Banyak pemula mungkin mengabaikannya, dan akhirnya menemukan bahwa SEO mereka tidak efektif.

**Kenapa?**

Karena perayap mesin pencari (seperti Googlebot) dapat langsung membaca konten HTML yang dihasilkan oleh halaman statis atau rendering backend, sehingga lebih mudah untuk merayapi dan memahami halaman Anda.

Sedangkan untuk beberapa situs web yang kontennya hanya dihasilkan di browser menggunakan JavaScript (rendering sisi klien), perayap membutuhkan lebih banyak waktu, dan bahkan tidak pasti apakah Google akan menjalankan kode JavaScript ini, yang memengaruhi pengindeksan dan peringkat.

Selain itu, halaman statis atau yang dirender di backend biasanya memuat lebih cepat, memberikan pengalaman pengguna yang lebih baik, yang juga menjadi perhatian Google.

Disarankan untuk menggunakan kerangka kerja seperti next.js, nuxt.js, dll., yang membantu Anda melakukan banyak pekerjaan SEO.

### 1、Menemukan Kata Kunci

1. Pikirkan beberapa kata yang relevan dengan bisnis/situs web Anda (misalnya, situs web ini terkait dengan tutorial SEO, jadi pikirkan "SEO", "riset kata kunci", "optimasi halaman", dll.).
2. Gunakan alat riset kata kunci (seperti Ahrefs Free Keyword Generator, Google Keyword Planner, Semrush, dll.), untuk menemukan lebih banyak kata yang relevan.
3. Pilih beberapa kata yang menurut Anda masuk akal dan catat.
4. Minta GPT membantu Anda menemukan lebih banyak kata kunci.

Poin penting dalam memilih kata kunci:

* Kata kunci harus relevan dengan bisnis/situs web Anda.
* Kata kunci harus dapat mendatangkan lalu lintas.
* Kata kunci harus memiliki volume pencarian tertentu, lupakan kata kunci yang terlalu niche.
* KD (Kesulitan Kata Kunci, dapat dilihat di alat riset kata kunci) semakin rendah semakin baik, semakin rendah berarti semakin kecil persaingan, semakin mudah untuk mendapatkan peringkat.

### 2、Menulis Konten

1. **Lihat Pesaing:** Cari kata kunci Anda di Google, lihat konten yang berada di peringkat atas **menulis apa (tipe, format, sudut pandang)**.
2. **Selaraskan dengan Maksud:** Penuhi informasi yang ingin dilihat pengguna saat mencari kata kunci ini (tipe, format, sudut pandang).
3. **Tulis Konten yang Berguna:** Bagikan **pengalaman nyata**, selesaikan masalah pengguna, tunjukkan keahlian dan pengalaman Anda.
4. **Berikan Secara Komprehensif:** Mencakup **poin-poin relevan** yang mungkin ingin diketahui pengguna, usahakan untuk lebih komprehensif daripada pesaing.
5. **Tambahkan Sorotan:** Berikan informasi atau trik unik **yang tidak dimiliki orang lain**.
6. **Mudah Dibaca:** Gunakan **kalimat pendek, paragraf, tambahkan gambar**, periksa kesalahan ketik.
7. **Sering Perbarui:** Pastikan untuk memperbarui informasi yang sudah ketinggalan zaman tepat waktu.

### 3、Optimalkan Halaman

1. **Meta Tag & Judul:**
 * **Judul Halaman (Title):** Menarik, mengandung kata kunci, panjang sedang (sekitar 30 karakter). (Contoh: `<title>Panduan Utama SEO Halaman (2024)</title>`)
 * **Tag H1:** Gunakan satu H1 per halaman, ringkas tema halaman. (Contoh: `<h1>Panduan Utama SEO Halaman</h1>`)
 * **Tag H2-H6:** Digunakan untuk subjudul konten, mengatur struktur.
 * **Meta Deskripsi (Meta Description):** Menjelaskan konten halaman, menarik klik, mengandung kata kunci, panjang sedang (sekitar 80 karakter). (Contoh: `<meta name="description" content="Pelajari semua pengetahuan tentang SEO halaman, dari optimasi kata kunci hingga detail teknis, tingkatkan peringkat situs web Anda!">`)

2. **Tautan:**
 * **Tautan Internal:** Menunjuk ke halaman terkait lainnya di situs web Anda, sebaiknya buat struktur piramida, jangan tinggalkan halaman terisolasi, jika tidak Google tidak dapat menemukannya. (Contoh: `<a href="/keyword-research">Pelajari Riset Kata Kunci</a>`)
 * **Tautan Eksternal:** (Jika perlu) Menunjuk ke sumber informasi otoritatif atau sumber eksternal yang berguna. (Contoh: `<a href="https://example.com" rel="nofollow">Referensi</a>`)

3. **Gambar:**
 * **Nama File:** Gunakan nama deskriptif. (Contoh: `page-seo-checklist.jpg`)
 * **Teks Alternatif (Alt Text):** Tambahkan teks Alt yang menjelaskan konten gambar. (Contoh: `<img src="..." alt="Tangkapan Layar Checklist SEO Halaman">`)
 * **Kompresi:** Kompres ukuran file gambar, percepat kecepatan pemuatan.

4. **URL:**
 * **Deskripsi Singkat:** Jalur URL pendek, mudah dimengerti, sebaiknya mengandung kata kunci (gunakan `-` untuk memisahkan kata dalam bahasa Inggris). (Contoh: `/page-seo-guide/`)

5. **Pengalaman Pengguna:**
 * **Kecepatan Halaman (Core Web Vitals):** Optimalkan kecepatan pemuatan.
 * **Ramah Seluler:** Pastikan pengalaman baik di ponsel.
 * **HTTPS:** Gunakan enkripsi HTTPS.
 * **Bebas Gangguan:** Hindari terlalu banyak iklan pop-up.
 * **(Opsional) Optimasi Cuplikan Unggulan:** Berikan jawaban yang ringkas dan tepat sasaran.
 * **(Opsional) Markup Skema:** Tambahkan data terstruktur untuk membantu Google memahami konten.

### 4、Tambahkan Backlink

1. **Tulis Konten yang Baik:** Berusahalah untuk menulis konten yang **sangat bagus dan sangat berguna**, sehingga orang lain ingin mengutip artikel Anda atau merekomendasikan alat Anda. (Ini adalah metode yang paling penting dan paling tahan lama)
2. **Kirim Tautan:** Kirim situs web Anda ke **beberapa situs web direktori industri yang paling penting dan paling otoritatif** (seperti ke situs direktori).
3. **Tulis Artikel Tamu:** Jika Anda suka menulis, Anda dapat mencoba **menulis blog tamu** untuk situs web lain yang terkait dengan topik Anda, dan Anda dapat secara alami menempatkan tautan ke situs web Anda di artikel tersebut.
4. **Jangan Pernah Membeli Tautan:** Ahrefs **sangat tidak menyarankan** untuk membeli tautan, risikonya sangat tinggi, dapat membuang uang dan menyebabkan situs web Anda dihukum oleh Google.

### 5、Lainnya

1. **Periksa Pengindeksan:** Buka [Google Search Console](https://search.google.com/search-console/about) (gratis, selanjutnya disebut GSC), gunakan fitur "Pemeriksaan URL" untuk melihat apakah Google dapat menemukan halaman penting Anda.
2. **Perbaiki Tautan Mati:** Jika Anda telah mengubah URL atau menghapus halaman, gunakan [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratis, selanjutnya disebut AWT) untuk menemukan halaman yang telah menjadi 404 tetapi sebelumnya memiliki tautan eksternal, dan gunakan pengalihan 301 untuk mengarahkannya ke halaman baru.
3. **Adaptasi Multibahasa:** Jika situs web Anda memiliki persaingan yang ketat, coba adaptasi multibahasa, banyak situs web hanya bersaing dalam bahasa Inggris, setelah Anda mengadaptasi multibahasa, Anda bisa mendapatkan lebih banyak lalu lintas.
4. **Buat Peta Situs (Sitemap):** Buat file `sitemap.xml`, cantumkan semua halaman penting di situs web Anda, dan kirimkan ke Google Search Console untuk membantu Google menemukan konten Anda dengan lebih cepat dan komprehensif.
    *   **Contoh (Struktur Dasar sitemap.xml):**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           <url>
              <loc>http://www.example.com/page1.html</loc>
              <lastmod>2024-01-01</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
           </url>
           <url>
              <loc>http://www.example.com/page2.html</loc>
           </url>
        </urlset>
        ```
5.  **Hreflang (Tag Multibahasa):** Jika situs web Anda memiliki beberapa bahasa atau konten yang ditujukan untuk wilayah yang berbeda, gunakan tag `hreflang` untuk memberi tahu Google tentang versi bahasa/wilayah yang berbeda dari setiap halaman, hindari masalah konten duplikat, dan pastikan untuk menampilkan versi yang benar kepada pengguna yang tepat.
    *   **Contoh (di dalam `<head>` HTML):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Catatan: `x-default` digunakan untuk menentukan versi default atau tanpa wilayah bahasa tertentu)*
6.  **Robots.txt (Protokol Perayap):** Tempatkan file `robots.txt` di direktori root situs web untuk memberi tahu perayap mesin pencari halaman atau direktori mana yang tidak ingin Anda akses atau indeks (seperti halaman manajemen backend, halaman pengujian, dll.).
    *   **Contoh (Isi robots.txt):**
        ```
        User-agent: *          # Berlaku untuk semua perayap
        Disallow: /admin/       # Melarang akses ke direktori /admin/
        Disallow: /private.html # Melarang akses ke file /private.html
        Allow: /public/        # Secara eksplisit mengizinkan akses ke direktori /public/ (jika direktori di atasnya dilarang)

        User-agent: Googlebot   # Hanya berlaku untuk perayap Google
        Disallow: /tmp/         # Melarang perayap Google mengakses direktori /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Menunjukkan lokasi Peta Situs
        ```
7.  **Canonical (Tag Kanonik):** Jika situs web Anda memiliki beberapa halaman dengan konten yang sama atau sangat mirip (misalnya, URL dengan parameter), gunakan tag `canonical` untuk menentukan versi "resmi", hindari mesin pencari memperlakukan mereka sebagai konten duplikat dan mengurangi bobot.
    *   **Contoh (di dalam `<head>` HTML):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Catatan: Bahkan di halaman `http://www.example.com/product-page?ref=banner`, Anda harus mengarah ke URL kanonik tanpa parameter)*
8.  **Markup Schema (Data Terstruktur):** Tambahkan Markup Schema ke kode halaman, gunakan format standar untuk menjelaskan arti konten halaman kepada Google (misalnya, ini adalah resep, produk, FAQ), yang membantu Google memahami konten, dan mungkin menampilkan gaya yang lebih kaya dalam hasil pencarian (seperti peringkat, rentang harga, dll.), meningkatkan rasio klik-tayang.
    *   **Contoh (format JSON-LD, ditempatkan dalam tag `<script>`):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Apa itu SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimization) adalah proses mengoptimalkan konten situs web dan aspek teknis lainnya, untuk meningkatkan peringkat situs web dalam hasil pencarian organik di mesin pencari (seperti Google)."
            }
          },{
            "@type": "Question",
            "name": "Berapa lama waktu yang dibutuhkan SEO untuk menunjukkan hasil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Waktu yang dibutuhkan untuk melihat efek SEO bervariasi tergantung pada beberapa faktor seperti fondasi situs web, tingkat persaingan, sumber daya yang diinvestasikan, dll., biasanya dibutuhkan beberapa minggu hingga beberapa bulan atau bahkan lebih lama untuk melihat efek yang signifikan."
            }
          }]
        }
        ```

## Versi Lengkap


<h2>1、Menemukan Kata Kunci</h2>

### Langkah Pertama: Pikirkan "Kata Kunci Benih"

"Kata kunci benih" adalah kata-kata yang paling dasar dan paling inti. Jangan berpikir terlalu rumit, ajukan beberapa pertanyaan kepada diri sendiri:

* Bagaimana orang akan mencari barang Anda secara online? (Misalnya: "biji kopi murah", "cara membuat kopi seduh manual")
* Kata apa yang digunakan pesaing Anda di situs web mereka?
* Jika Anda seorang pelanggan, apa yang akan Anda cari?

**Contoh:**
Misalkan Anda membuka toko online yang menjual biji kopi, kata kunci benih Anda mungkin termasuk:
* biji kopi
* biji kopi arabika
* kopi seduh manual
* mesin kopi
* beli biji kopi

**Tips:**

Tidak bisa memikirkan apa pun? Anda dapat mencoba bertanya kepada ChatGPT (atau AI), minta bantuan untuk melakukan brainstorming beberapa kata yang terkait dengan bisnis Anda.

Catat semua yang Anda pikirkan, semakin banyak semakin baik.

### Langkah Kedua: Gunakan Alat Gratis untuk Menemukan Lebih Banyak Kata Kunci

Hanya mengandalkan pemikiran saja tidak cukup, gunakan alat untuk membantu Anda menemukan lebih banyak kata yang relevan, tidak perlu menggunakan semuanya, pilih beberapa yang sesuai dengan Anda.

**Alat 1: Ahrefs Free Keyword Generator** (Direkomendasikan, benar-benar gratis)

1. Buka [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator).
2. Masukkan "kata kunci benih" yang baru saja Anda pikirkan satu per satu.
3. Pilih negara target Anda (misalnya: Indonesia).
4. Klik "Find keywords".

Anda akan melihat banyak saran kata kunci yang relevan, fokus pada dua kategori ini:

* **Phrase Match (Cocok dengan Frasa):** Frasa yang mengandung kata kunci benih Anda. Misalnya, mencari "biji kopi", Anda mungkin melihat "biji kopi organik", "biji kopi Toraja".
* **Questions (Pertanyaan):** Kalimat tanya yang mengandung kata kunci benih Anda. Misalnya, mencari "kopi seduh manual", Anda mungkin melihat "alat apa yang dibutuhkan untuk kopi seduh manual", "bagaimana cara membuat kopi seduh manual yang enak".

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/search-volume.png)

*Contoh gambar: Menggunakan alat kata kunci seperti Ahrefs untuk menemukan kata kunci terkait "aeropress", Anda dapat melihat informasi seperti volume pencarian bulanan. Antarmuka alat gratis serupa, akan menyediakan daftar kata kunci.*

**Alat 2: Kotak Pencarian Google & Pencarian Terkait**

1. Buka Pencarian Google.
2. Masukkan kata kunci benih Anda, lihat saran yang muncul secara otomatis di kotak pencarian (Google Suggest). Ini adalah apa yang sering dicari orang.
3. Setelah selesai mencari, gulir ke bagian bawah halaman, lihat bagian "Pencarian terkait". Ini juga merupakan tempat yang baik untuk menemukan kata-kata terkait.

![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/02/autosuggest.png)

**Alat 3: Answer The Public**

1. Buka [Answer The Public](https://answerthepublic.com/).
2. Masukkan kata kunci benih Anda (disarankan untuk menggunakan bahasa Inggris, efeknya mungkin lebih baik).
3. Pilih negara/bahasa.
4. Ini akan menghasilkan banyak pertanyaan, frasa preposisional, perbandingan, dll. di sekitar kata kunci Anda, membantu Anda memahami pertanyaan spesifik apa yang dicari pengguna. Versi gratis memiliki batasan jumlah penggunaan harian.

![](https://ahrefs.com/blog/wp-content/uploads/2023/03/image17-9-1.jpg)

**Alat 4: Google Trends** (Lihat Popularitas, Temukan Tren)

1. Buka [Google Trends](https://trends.google.com/).
2. Masukkan kata kunci benih Anda.
3. Anda dapat melihat tren perubahan popularitas pencarian kata ini, menemukan perubahan musiman atau topik yang tiba-tiba menjadi viral.
4. Anda juga dapat melihat kueri terkait, menemukan kata-kata populer lain yang dicari orang secara bersamaan.

**Alat 5: ChatGPT**

1. Buka [ChatGPT](https://chat.openai.com/) atau alat AI serupa lainnya.
2. Minta untuk menghasilkan lebih banyak kata kunci, topik, atau pertanyaan terkait berdasarkan kata kunci benih Anda. Misalnya, Anda dapat bertanya: "Saya menjual biji kopi, tolong beri saya beberapa kata kunci atau pertanyaan terkait yang mungkin dicari orang".

**Alat 6: Google Keyword Planner** (Gratis, tetapi membutuhkan akun Google Ads)

Jika Anda memiliki akun Google Ads (Anda dapat mendaftar secara gratis, Anda tidak perlu mengeluarkan uang untuk menayangkan iklan), Anda dapat menggunakan Keyword Planner.

1. Masuk ke Google Ads, temukan "Alat dan Setelan" -> "Perencanaan" -> "Perencana Kata Kunci".
2. Pilih "Temukan kata kunci baru".
3. Masukkan kata kunci benih Anda.

Ini akan memberikan perkiraan volume pencarian dan lebih banyak saran kata kunci. Namun, versi gratis menampilkan volume pencarian sebagai rentang, yang tidak begitu akurat.

### Langkah Ketiga: Kunjungi Forum/Komunitas/Stiker Bar/Situs Tanya Jawab

* **Kunjungi forum/komunitas/stiker bar/situs tanya jawab terkait:** Misalnya, jika Anda berbisnis kopi, kunjungi forum penggemar kopi, topik terkait di Quora, grup Douban untuk melihat apa yang ditanyakan orang, apa yang mereka diskusikan, dan kata-kata apa yang mereka gunakan.
* **Lihat bagian komentar:** Bagian komentar dari situs web pesaing Anda, halaman e-commerce produk terkait, dan posting media sosial mungkin juga menyembunyikan kata kunci pencarian nyata pengguna.

**Contoh:** Melihat seseorang di forum kopi bertanya "bagaimana cara membuat seduh manual tanpa kertas saring", ini mungkin kata kunci yang bagus yang belum Anda pikirkan sebelumnya!

![](https://ahrefs.com/blog/wp-content/uploads/2020/11/reddit-1.png)

---

### Paket Alat Kata Kunci

* **Paket alat:**
 * [Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator) (Utama, gratis)
 * Kotak Pencarian Google & Pencarian Terkait (Tambahan, gratis)
 * [Answer The Public](https://answerthepublic.com/) (Temukan Pertanyaan, gratis, ada batas harian)
 * [Google Trends](https://trends.google.com/) (Lihat Tren, gratis)
 * [ChatGPT](https://chat.openai.com/) (Brainstorm AI, gratis)
 * [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/) (Membutuhkan akun Ads, gratis)
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools):** Kumpulan alat gratis yang lebih kuat, tetapi Anda perlu memverifikasi bahwa Anda memiliki situs web Anda sendiri. Anda dapat melihat kata kunci mana yang saat ini mendapat peringkat di situs web Anda, dan menemukan kata kunci dengan tingkat persaingan rendah, dll.



---


<h2>2、Cara Menulis Konten SEO</h2>

### Langkah 1: Pahami Apa yang Ingin Dilihat Pengguna (Analisis Maksud Pencarian)

Pastikan untuk mengetahui jenis, format, dan sudut pandang konten apa yang ingin dilihat orang yang mencari kata ini.

1. Cari kata kunci Anda di Google.
2. Lihat 5-10 hasil teratas:
  * **Tipe:** Apakah itu artikel? Halaman produk? Video?
  * **Format:** Apakah itu tutorial? Daftar periksa? Ulasan?
  * **Sudut pandang:** Apakah itu "pemula"? "Murah"? "Terbaru"?
3. **Tiru:** Jenis, format, dan sudut pandang konten Anda harus konsisten dengan yang utama.

### Langkah 2: Tulis Apa yang Anda Ketahui (Tunjukkan Pengalaman E-E-A-T)

Buat konten yang kredibel, tunjukkan bahwa Anda benar-benar memahaminya.
 * **Tulis tentang pengalaman pribadi atau keahlian Anda.**
 * Gunakan "saya" untuk berbagi pengalaman dan pandangan Anda.
 * (Jika berlaku) Sebutkan secara singkat latar belakang atau pencapaian Anda.

### Langkah 3: Berikan Secara Komprehensif (Konten Mendalam)

Jawab sebagian besar pertanyaan pengguna tentang topik ini.

 1. Gunakan alat untuk menemukan pertanyaan/kata kunci ekor panjang yang terkait dengan kata kunci ini.
 2. Lihat subjudul artikel yang berperingkat tinggi, temukan poin yang mereka cakup.
 3. Tambahkan poin yang Anda temukan dan yang menurut Anda penting ke konten Anda.

Catatan: Komprehensif tidak sama dengan bertele-tele, tulis sesuai dengan maksud pengguna.

### Langkah 4: Tambahkan Sesuatu yang Istimewa (Keunikan)

Beri pengguna alasan untuk membaca artikel Anda daripada artikel orang lain.

 * Bagikan trik, ringkasan pengalaman, atau pandangan yang unik.
 * Sediakan sumber daya kecil yang tidak dimiliki orang lain (seperti templat, daftar periksa).
 * (Lanjutan) Lakukan eksperimen kecil atau berbagi data.

### Langkah 5: Buat Membaca Menjadi Mudah (Keterbacaan)

Pengguna merasa nyaman membacanya dan bersedia untuk terus membaca.

 * Kalimat pendek, banyak paragraf.
 * Gunakan subjudul untuk memisahkan konten.
 * Tambahkan gambar untuk ilustrasi atau menghilangkan kelelahan.
 * Gunakan tebal, daftar untuk menyoroti poin-poin penting.

### Langkah 6: Tetap Perbarui

Hindari penurunan peringkat karena konten yang sudah ketinggalan zaman.

 * Periksa secara teratur (misalnya setiap tahun): Apakah informasinya masih akurat? Apakah tautannya masih berfungsi?
 * Perbarui konten: Ubah informasi yang sudah ketinggalan zaman, tambahkan konten baru.
 * Tandai tanggal pembaruan: Biarkan pengguna tahu bahwa ini adalah yang terbaru.

---



---


<h2>3、SEO Halaman</h2>

### Langkah Pertama: Biarkan Mesin Pencari dan Pengguna "Memahami" Halaman Anda

Cocokkan maksud pencarian.
 * Cari kata kunci Anda di Google, lihat 5-10 hasil teratas. Perhatikan jenis konten mereka (artikel/halaman produk/?), format konten (tutorial/daftar periksa/ulasan/?) dan sudut pandang konten ("pemula"/"murah"/"terbaru"?).
 * Konten Anda harus konsisten dengan mereka, berikan pengguna apa yang ingin mereka lihat.

 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image16-10.jpg)

 *Contoh gambar: Mencari "avocado seed" (biji alpukat), hasilnya sebagian besar adalah artikel panduan tentang cara menanamnya, dengan sudut pandang "sederhana, mudah", menunjukkan bahwa pengguna adalah pemula.*

#### Tulis "Judul Clickbait" yang Baik (Title Tag):
  * Mengandung kata kunci inti.
  * Panjangnya sebaiknya tidak melebihi 70 karakter (sekitar 30 karakter dalam bahasa Indonesia), jika tidak, itu tidak akan ditampilkan sepenuhnya.
  * Jelas dan menarik, membuat orang ingin mengklik.
  * Jangan membuat "clickbait" murni, itu harus konsisten dengan konten.
  * Jika konten mementingkan ketepatan waktu (seperti tutorial), Anda dapat menambahkan tahun.
  * **Alat:** Anda dapat meminta ChatGPT untuk melakukan brainstorming beberapa judul. Gunakan Site Audit Ahrefs Webmaster Tools (AWT) untuk memeriksa apakah judulnya terlalu panjang atau hilang.

 ![Contoh gambar: contoh judul yang baik](https://ahrefs.com/blog/wp-content/uploads/2023/07/image13-12.png)

#### Tulis "Fasad" yang Baik (Meta Description):
  * Ini adalah deskripsi teks di bawah judul dalam hasil pencarian, meskipun tidak secara langsung memengaruhi peringkat, tetapi memengaruhi rasio klik-tayang.
  * Panjangnya sebaiknya tidak melebihi 160 karakter (sekitar 80 karakter dalam bahasa Indonesia).
  * Dapat dianggap sebagai suplemen untuk judul, letakkan beberapa nilai jual yang tidak dapat ditempatkan di judul.
  * Mengandung kata kunci (Google akan menebalkannya).
  * Gunakan suara aktif, beri tahu pengguna secara langsung apa yang dapat Anda berikan.
  * **Alat:** Anda dapat meminta ChatGPT untuk menulis beberapa versi. Gunakan Site Audit Ahrefs Webmaster Tools (AWT) untuk memeriksa apakah itu hilang atau terlalu panjang.
 ![Contoh gambar: contoh Meta Deskripsi yang baik](https://ahrefs.com/blog/wp-content/uploads/2023/07/image23-4.png)

#### Beri "Nama URL" yang Baik (URL):
  * Jalur URL (bagian setelah domain) harus pendek dan mudah dipahami.
  * Mengandung kata kunci inti (gunakan bahasa Inggris atau Pinyin, kata-kata dipisahkan oleh `-`).
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image20-10.png)

 *Contoh gambar: `domain.com/learn-seo` lebih baik daripada `domain.com/p=123`*

#### Konten Harus Memiliki "Kerangka" (Heading Tags: H1-H6):
  * Gunakan tag H1-H6 untuk mengatur konten, membentuk struktur hierarki yang jelas, membuatnya mudah dibaca.
  * **Tag H1:** Gunakan hanya satu per halaman, biasanya memiliki arti yang sama atau mendekati dengan Judul Halaman (Title Tag).
  * **Tag H2-H6:** Gunakan sebagai subjudul untuk setiap bagian.
  * **Alat:** Gunakan Site Audit Ahrefs Webmaster Tools (AWT) untuk memeriksa apakah tag H1 hilang atau duplikat.

 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO.png)
 *Contoh gambar: Membuat hierarki visual menggunakan tag H*

### Langkah Kedua: Tulis Konten yang "Berguna" dan "Unik"

#### Konten Harus "Lengkap":
  * Pastikan konten Anda mencakup aspek dan pertanyaan utama yang mungkin ingin diketahui pengguna saat mencari kata kunci ini.
  * Lihat subjudul apa yang dibicarakan artikel teratas (H2, H3) dalam hasil pencarian Google.
  * Lihat "Pencarian terkait" di bagian bawah halaman hasil pencarian Google.
  * **Alat:** (Opsional) Gunakan Site Explorer Ahrefs Webmaster Tools (AWT) untuk melihat situs web Anda dan situs web pesaing Anda menghasilkan lalu lintas untuk kata kunci umum apa (fitur Content Gap), dan temukan subtopik yang dapat Anda tambahkan.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image22-3.png)
 *Contoh gambar: Menganalisis artikel pesaing, menemukan bahwa mereka menyebutkan "berhenti berlangganan" sebagai metode untuk menghemat uang, artikel Anda juga dapat mempertimbangkan untuk menambahkan poin ini.*

#### Konten Harus "Istimewa":
  * Jangan hanya mengulangi apa yang dikatakan orang lain, berikan beberapa nilai unik.
  * Bisa berupa: wawasan atau ringkasan pengalaman unik Anda, trik yang tidak dimiliki orang lain, analisis kasus asli, templat atau daftar periksa gratis.
  * Tujuannya adalah memberi pengguna alasan untuk "menyimpan" atau "membagikan" artikel Anda.

#### Tunjukkan "Profesionalisme" atau "Pengalaman" Anda:
  * Jika Anda menulis tentang bidang profesional (seperti medis, keuangan) atau konten yang memerlukan pengalaman langsung (seperti ulasan produk), Anda harus menunjukkan profesionalisme atau pengalaman nyata Anda.
  * Jelaskan dengan jelas sumber informasi (kutipan, tautan), berikan pengantar latar belakang penulis (tautan ke halaman profil penulis), bagikan proses operasi atau pengalaman penggunaan Anda (dengan gambar, video), dan pastikan bahwa fakta konten akurat.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image35.png)
 *Contoh gambar: Menunjukkan pengalaman penggunaan Anda yang sebenarnya dalam ulasan produk.*

### Langkah Ketiga: Optimalkan Detail, Tingkatkan Pengalaman

#### Optimalkan Gambar:
  * **Nama File:** Beri nama file gambar dengan kata-kata deskriptif, pisahkan kata-kata bahasa Inggris atau Pinyin dengan `-` (seperti `black-puppy-play-ball.jpg` atau `heise-xiaogou-wanqiu.jpg`).
  * **Teks Alternatif (Alt Text):** Ini adalah deskripsi gambar untuk mesin pencari dan pengguna tunanetra. Tambahkan atribut `alt` ke tag `<img>` di HTML, gunakan bahasa yang ringkas untuk menjelaskan konten gambar, dan Anda dapat secara alami menyertakan kata kunci. (Misalnya: `<img src="anjing-bermain-bola.jpg" alt="Seekor anak anjing Labrador hitam bermain bola merah di atas rumput">`)
  * **Kompres Gambar:** Gambar yang terlalu besar akan memuat lebih lambat. Gunakan alat untuk mengompres ukuran gambar, sambil mencoba menjaga kejernihan.
  * **Alat:** Gunakan Site Audit Ahrefs Webmaster Tools (AWT) untuk memeriksa apakah gambar kehilangan teks Alt. Gunakan alat online seperti TinyPNG atau iLoveIMG untuk mengompres gambar.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-1.png)
 *Contoh gambar: Contoh teks Alt yang bagus*

#### Tautan Internal:
  * Dalam artikel Anda, tautkan ke artikel atau halaman terkait lainnya di situs web Anda.
  * Ini membantu pengguna menemukan lebih banyak konten, dan juga membantu mesin pencari memahami struktur situs web Anda dan hubungan halaman.
  * **Alat:** Gunakan fitur "Internal link opportunities" di Site Audit Ahrefs Webmaster Tools (AWT) untuk menemukan tempat untuk menambahkan tautan internal.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image15-10.png)
 *Contoh gambar: Peluang tautan internal yang ditemukan oleh AWT, meminta Anda untuk menautkan dari halaman A ke halaman B.*

#### Tautan Eksternal:
  * Di tempat yang sesuai, tautkan ke situs web eksternal berkualitas tinggi dan relevan lainnya sebagai referensi atau sumber informasi.
  * Misalnya, tautkan ke laporan asli saat mengutip data, dan tautkan ke situs web resmi saat merekomendasikan alat.
  * **Catatan:** Jika itu adalah iklan atau tautan yang disponsori, gunakan atribut `rel="nofollow"` atau `rel="sponsored"` untuk memberi tahu mesin pencari.

#### Pengalaman Halaman:
   * Kecepatan Pemuatan Cepat (Core Web Vitals).
   * Pengalaman Penjelajahan yang Baik di Ponsel (Mobile-Friendly).
   * Gunakan Enkripsi HTTPS (Aman).
   * Tidak Ada Iklan Pop-up yang Mengganggu (No intrusive interstitials).
  * Ini biasanya merupakan optimasi seluruh situs, tetapi pastikan halaman baru juga memenuhi persyaratan.
  * **Alat:** Gunakan Google PageSpeed Insights untuk menguji kecepatan dan pengalaman halaman. Lihat laporan terkait di Google Search Console.
 ![](https://ahrefs.com/blog/zh/wp-content/uploads/2023/11/On-Page-SEO-3.png)
 *Contoh gambar: Sinyal pengalaman halaman Google*

#### Berjuang untuk "Posisi Tampilan Khusus":
  * **Cuplikan Unggulan (Featured Snippet):** Google terkadang akan menampilkan kotak yang langsung menjawab pertanyaan di bagian paling atas hasil pencarian. Jika halaman Anda sudah berperingkat di beberapa halaman pertama, dan konten Anda memiliki jawaban langsung dan ringkas untuk pertanyaan tertentu (formatnya sebaiknya mengacu pada Cuplikan yang ada, seperti daftar, paragraf), ada peluang untuk dipilih.
  * **Cuplikan Kaya (Rich Snippet):** Dengan menambahkan Markup Schema (sejenis kode data terstruktur) ke halaman, Anda memberi tahu Google jenis konten Anda (seperti resep, FAQ, informasi produk), dan terkadang Google akan menampilkan informasi yang lebih kaya dalam hasil pencarian (seperti peringkat, harga, langkah).
  * **Alat:** Gunakan Google Search Console untuk melihat kata kunci mana yang berperingkat tinggi dan Google menampilkan cuplikan unggulan. Gunakan Generator Skema Schema.dev untuk menghasilkan kode Skema.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image5-12.png)
 *Contoh gambar: Cuplikan kaya dengan peringkat dan jumlah ulasan*

### Langkah Keempat: Terus Pantau dan Perbarui

#### Pantau Efek:
 * Perhatikan perubahan peringkat kata kunci target Anda.
 * Gunakan Google Search Console untuk melihat kinerja halaman Anda di pencarian Google (tayangan, klik, peringkat).

#### Perbarui Konten:
 * SEO bukanlah pekerjaan satu kali. Tinjau konten Anda secara berkala (misalnya setahun sekali), periksa apakah informasi sudah ketinggalan zaman, apakah tautan tidak valid, apakah ada informasi baru yang dapat ditambahkan. Memperbarui konten membantu menjaga peringkat.
 ![](https://ahrefs.com/blog/wp-content/uploads/2023/07/image10-11.png)
 *Contoh gambar: Peningkatan lalu lintas yang dihasilkan setelah memperbarui konten*

---

### Paket### Paket Alat SEO Halaman
* [Google Search](https://www.google.com/) (Lihat Maksud, Lihat Pesaing)
* [ChatGPT](https://chat.openai.com/) (Pikirkan Ide Judul/Deskripsi)
* [Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools) (Gratis untuk Memeriksa H1, Judul, Deskripsi, Teks Alt, Temukan Peluang Tautan Internal, Lihat Perbedaan Kata Kunci)
* [TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/compress-image) (Kompresi Gambar Online)
* [Google PageSpeed Insights](https://pagespeed.web.dev/) (Ukur Kecepatan dan Pengalaman Halaman)
* [Google Search Console](https://search.google.com/search-console/) (Pantau Peringkat, Masalah Pengalaman, Lihat Kata Kunci)
* [Schema.dev Schema Generator](https://schema.dev/schema-generator/) (Hasilkan Kode Skema)



---


<h2>4、Tautan Eksternal (Backlink)</h2>

### Apa itu Tautan Eksternal (Backlink)?

Bayangkan internet sebagai jaringan hubungan yang sangat besar. Ketika situs web lain A menempatkan tautan di halamannya, menunjuk ke situs web Anda B, ini membentuk tautan eksternal dari A ke B. Google akan menganggap tautan ini sebagai "rekomendasi" atau "pemungutan suara" dari situs web A ke situs web B.

Biasanya, "pemungutan suara" dari situs web yang **berotoritas tinggi dan sangat relevan** memiliki bobot yang lebih besar.

Ada banyak cara untuk mendapatkan backlink, kita fokus pada metode yang paling inti dan berisiko paling rendah:

### 1. Biarkan Orang Lain Menautkan Anda Secara Proaktif (Hasilkan Tautan - Earn Links)

Ini adalah cara yang paling ideal dan paling didorong oleh Google, tidak begitu "cepat", tetapi efeknya paling tahan lama.

**Tindakan Inti:** Ciptakan konten yang **berkualitas tinggi, memiliki nilai unik, dan layak dikutip**. Ini bisa berupa:
 * Alat atau kalkulator online gratis yang sangat berguna.
 * Laporan penelitian industri yang mendalam dan berisi data eksklusif.
 * Panduan atau tutorial utama yang sangat rinci dan memecahkan masalah pengguna.
 * Sudut pandang baru atau daftar sumber daya unik.

Ketika konten Anda cukup baik, penulis situs web lain mungkin menemukan konten Anda dan secara proaktif menautkannya sebagai referensi atau rekomendasi saat menulis topik terkait.

### 2. "Tambahkan" Sedikit Tautan Sendiri

Metode ini relatif mudah dioperasikan, tetapi efeknya terbatas, dan harus dilakukan secukupnya.

**Tindakan Inti:**
 * **Direktori Industri:** Jika bisnis Anda memiliki entitas atau afiliasi industri yang jelas (seperti bisnis lokal, perusahaan perangkat lunak), temukan beberapa situs web vertikal industri atau direktori bisnis **yang paling terkenal dan paling berwibawa**, dan kirimkan informasi situs web Anda. Misalnya, restoran dapat dikirimkan ke Yelp, TripAdvisor; perangkat lunak dapat dikirimkan ke Capterra, G2, dll. (Hanya lakukan beberapa yang paling penting!)
 * **Komunitas/Forum/Tanya Jawab Terkait:** Sesekali, di komunitas forum industri, stiker bar, Quora, dll. **yang benar-benar Anda ikuti dan kenal**, jika konten halaman web Anda benar-benar dapat membantu menjawab pertanyaan atau melengkapi diskusi, Anda dapat meninggalkan tautan **secara alami**. **Jangan pernah mengirim tautan iklan sampah ke komunitas yang tidak terkait!** Melakukan hal itu kemungkinan besar akan dihapus, atau bahkan merusak reputasi Anda.

### 3. "Minta" Sedikit Tautan

Minta tautan secara langsung ke situs web lain, tingkat keberhasilannya biasanya sangat rendah, karena mengapa orang lain harus membantu Anda? Tetapi ada beberapa cara yang relatif masuk akal:

**Tindakan Inti:**
 * **Blog Tamu:** Ini adalah cara yang relatif efektif. Anda **menulis artikel berkualitas tinggi secara gratis** untuk situs web terkait lainnya, sebagai imbalan, Anda dapat menyertakan satu atau dua tautan yang menunjuk ke situs web Anda sendiri dalam informasi penulis artikel atau konten.
  * **Cara Melakukannya (Versi Sederhana):** Temukan beberapa blog yang menurut Anda lumayan dan terkait dengan topik Anda, lihat apakah mereka menerima kiriman (biasanya halaman footer situs web atau halaman kontak akan memiliki instruksi). Mulailah dengan mencoba blog yang tidak terlalu menuntut, tulis artikel yang Anda kuasai dan bernilai bagi pembaca mereka.
 * **Tautan Gambar (Image Link Building):** Jika situs web lain menggunakan gambar atau grafik asli di situs web Anda, tetapi mereka tidak menunjukkan bahwa sumbernya adalah Anda, Anda dapat menghubungi mereka dengan sopan, meminta untuk menambahkan tautan yang menunjuk ke halaman gambar asli Anda.
* **Templat Email Jangkauan:** File `web.html` tidak menyediakan templat email yang dapat disalin dan digunakan secara langsung. Selain itu, disebutkan juga bahwa tingkat keberhasilan mengirim email secara membabi buta untuk meminta tautan sangat rendah. Jika Anda ingin membuat blog tamu, Anda perlu menulis instruksi kiriman Anda dengan serius berdasarkan gaya dan persyaratan situs web pihak lain.

### 4. "Beli" Tautan? Jangan Sentuh!

**Peringatan Inti:** Ahrefs **secara eksplisit menunjukkan bahwa mereka tidak merekomendasikan untuk membeli tautan**.
 * Sangat mudah untuk membeli tautan sampah yang tidak membantu SEO, membuang uang.
 * Melanggar pedoman webmaster Google, dan begitu ditemukan, situs web Anda dapat dihukum, yang menyebabkan penurunan peringkat yang signifikan atau bahkan dihapus dari indeks.

### 5. Pertahankan Tautan yang Sudah Anda Miliki

Sayang sekali jika tautan yang diperoleh dengan susah payah hilang.

**Tindakan Inti:** Periksa apakah ada halaman di situs web Anda yang tidak dapat dibuka (404 Not Found), tetapi halaman ini sebelumnya memiliki tautan eksternal yang menunjuk ke sana.
**Alat:** Gunakan [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) gratis.
**Langkah:**
 1. Masuk ke Ahrefs Webmaster Tools, verifikasi situs web Anda.
 2. Masuk ke alat Site Explorer (Analisis Situs Web).
 3. Di menu sebelah kiri, pilih "Pages" (Halaman) -> "Best by links" (Diurutkan berdasarkan Jumlah Backlink).
 4. Klik filter "HTTP code", pilih "404 not found".
 5. Lihat daftar laporan. Jika Anda menemukan halaman 404 diikuti oleh jumlah "Referring domains" (Domain Referensi, menunjukkan berapa banyak situs web yang menautkan ke halaman ini) yang tinggi, itu berarti halaman yang tidak valid ini dulunya penting.
 6. Temukan URL halaman baru di situs web Anda yang paling relevan dengan konten halaman yang tidak valid ini (jika tidak ada yang sesuai, halaman beranda juga dapat digunakan).
 7. Atur **Pengalihan 301**, alihkan secara permanen URL halaman 404 ini ke URL baru yang Anda temukan. Dengan cara ini, nilai tautan yang menunjuk ke URL lama dapat diteruskan ke halaman baru. (Cara mengatur pengalihan 301 tergantung pada server dan platform situs web Anda, Anda mungkin perlu mencari tutorial khusus, seperti "Cara mengatur pengalihan 301 di WordPress").
* ![](https://ahrefs.com/blog/zh/wp-content/uploads/2021/07/Untitled-84.jpg)
 *Keterangan gambar: Menggunakan laporan Best by links Ahrefs Site Explorer yang dipadukan dengan filter 404, temukan halaman yang tidak valid dengan tautan eksternal (contoh dari blog Ahrefs)*

---

### Paket Alat Tautan Eksternal

**Wajib (Gratis):**
 * [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools): Lihat tautan yang diterima situs web Anda sendiri, temukan halaman 404 dengan tautan untuk diperbaiki, periksa kesehatan teknis situs web.
 * [Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker): Lihat dengan cepat 100 tautan eksternal teratas dari situs web mana pun (termasuk pesaing Anda), dan pelajari dari mana mereka mendapatkan tautan.
 * [Google Alerts](https://www.google.com/alerts): Siapkan peringatan terkait dengan nama merek, nama situs web, dan topik inti Anda. Saat konten baru yang relevan muncul secara online, Anda akan menerima pemberitahuan email. Ini membantu Anda menemukan kasus di mana orang lain menyebut Anda tetapi tidak menambahkan tautan (Anda dapat meminta untuk menambahkan tautan), atau menemukan peluang membangun tautan baru.



---


<h2>5、Optimasi Lainnya</h2>

1. **Periksa Pengindeksan:** Buka [Google Search Console](https://search.google.com/search-console/about) (gratis, selanjutnya disebut GSC), gunakan fitur "Pemeriksaan URL" untuk melihat apakah Google dapat menemukan halaman penting Anda.
2. **Perbaiki Tautan Mati:** Jika Anda telah mengubah URL atau menghapus halaman, gunakan [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) (gratis, selanjutnya disebut AWT) untuk menemukan halaman yang telah menjadi 404 tetapi sebelumnya memiliki tautan eksternal, dan gunakan pengalihan 301 untuk mengarahkannya ke halaman baru.
3. **Adaptasi Multibahasa:** Jika situs web Anda memiliki persaingan yang ketat, coba adaptasi multibahasa, banyak situs web hanya bersaing dalam bahasa Inggris, setelah Anda mengadaptasi multibahasa, Anda bisa mendapatkan lebih banyak lalu lintas.
4. **Buat Peta Situs (Sitemap):** Buat file `sitemap.xml`, cantumkan semua halaman penting di situs web Anda, dan kirimkan ke Google Search Console untuk membantu Google menemukan konten Anda dengan lebih cepat dan komprehensif.
    * **Contoh (Struktur Dasar sitemap.xml):**
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
           <url>
              <loc>http://www.example.com/page1.html</loc>
              <lastmod>2024-01-01</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
           </url>
           <url>
              <loc>http://www.example.com/page2.html</loc>
           </url>
        </urlset>
        ```
5. **Hreflang (Tag Multibahasa):** Jika situs web Anda memiliki beberapa bahasa atau konten yang ditujukan untuk wilayah yang berbeda, gunakan tag `hreflang` untuk memberi tahu Google tentang versi bahasa/wilayah yang berbeda dari setiap halaman, hindari masalah konten duplikat, dan pastikan untuk menampilkan versi yang benar kepada pengguna yang tepat.
    * **Contoh (di dalam `<head>` HTML):**
        ```html
        <link rel="alternate" hreflang="en-us" href="http://www.example.com/en/page.html" />
        <link rel="alternate" hreflang="zh-cn" href="http://www.example.com/zh/page.html" />
        <link rel="alternate" hreflang="x-default" href="http://www.example.com/page.html" />
        ```
        *(Catatan: `x-default` digunakan untuk menentukan versi default atau tanpa wilayah bahasa tertentu)*
6. **Robots.txt (Protokol Perayap):** Tempatkan file `robots.txt` di direktori root situs web untuk memberi tahu perayap mesin pencari halaman atau direktori mana yang tidak ingin Anda akses atau indeks (seperti halaman manajemen backend, halaman pengujian, dll.).
    * **Contoh (Isi robots.txt):**
        ```
        User-agent: *          # Berlaku untuk semua perayap
        Disallow: /admin/       # Melarang akses ke direktori /admin/
        Disallow: /private.html # Melarang akses ke file /private.html
        Allow: /public/        # Secara eksplisit mengizinkan akses ke direktori /public/ (jika direktori di atasnya dilarang)

        User-agent: Googlebot   # Hanya berlaku untuk perayap Google
        Disallow: /tmp/         # Melarang perayap Google mengakses direktori /tmp/
        Sitemap: http://www.example.com/sitemap.xml # Menunjukkan lokasi Peta Situs
        ```
7. **Canonical (Tag Kanonik):** Jika situs web Anda memiliki beberapa halaman dengan konten yang sama atau sangat mirip (misalnya, URL dengan parameter), gunakan tag `canonical` untuk menentukan versi "resmi", hindari mesin pencari memperlakukan mereka sebagai konten duplikat dan mengurangi bobot.
    * **Contoh (di dalam `<head>` HTML):**
        ```html
        <link rel="canonical" href="http://www.example.com/product-page" />
        ```
        *(Catatan: Bahkan di halaman `http://www.example.com/product-page?ref=banner` Anda harus mengarah ke URL kanonik tanpa parameter)*
8. **Markup Schema (Data Terstruktur):** Tambahkan Markup Schema ke kode halaman, gunakan format standar untuk menjelaskan arti konten halaman kepada Google (misalnya, ini adalah resep, produk, FAQ), yang membantu Google memahami konten, dan mungkin menampilkan gaya yang lebih kaya dalam hasil pencarian (seperti peringkat, rentang harga, dll.), meningkatkan rasio klik-tayang.
    * **Contoh (format JSON-LD, ditempatkan dalam tag `<script>`):**
        ```json
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Apa itu SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimization) adalah proses mengoptimalkan konten situs web dan aspek teknis lainnya, untuk meningkatkan peringkat situs web dalam hasil pencarian organik di mesin pencari (seperti Google)."
            }
          },{
            "@type": "Question",
            "name": "Berapa lama waktu yang dibutuhkan SEO untuk menunjukkan hasil?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Waktu yang dibutuhkan untuk melihat efek SEO bervariasi tergantung pada beberapa faktor seperti fondasi situs web, tingkat persaingan, sumber daya yang diinvestasikan, dll., biasanya dibutuhkan beberapa minggu hingga beberapa bulan atau bahkan lebih lama untuk melihat efek yang signifikan."
            }
          }]
        }
        ```



---


<h2>6、Alat SEO</h2>

### Alat Gratis
* **[Ahrefs Free Keyword Generator](https://ahrefs.com/keyword-generator):** Untuk menemukan kata kunci.
* **[Ahrefs Webmaster Tools (AWT)](https://ahrefs.com/webmaster-tools):** Kumpulan alat gratis untuk diagnostik situs web, pelacakan peringkat kata kunci, menemukan peluang tautan internal, memeriksa tautan yang rusak, dll.
* **[Ahrefs Free Backlink Checker](https://ahrefs.com/zh/backlink-checker):** Melihat dengan cepat 100 tautan eksternal teratas dari situs web.
* **[Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/):** Alat riset kata kunci di dalam Google Ads (membutuhkan akun Google Ads).
* **[Google 搜索框建议 (Google Suggest)](https://www.google.com/):** Saran yang muncul secara otomatis saat mencari di Google. *(Note: This is already translated in previous section)*
* **[Google 相关搜索](https://www.google.com/):** Kata kunci terkait yang terletak di bagian bawah halaman hasil pencarian Google. *(Note: This is already translated in previous section)*
* **[Answer The Public](https://answerthepublic.com/):** Untuk menemukan pertanyaan dan topik di sekitar kata kunci (ada batasan penggunaan harian).
* **[Google Trends](https://trends.google.com/):** Melihat popularitas dan tren pencarian kata kunci.
* **[ChatGPT (基础版)](https://chat.openai.com/):** Untuk melakukan brainstorming, menghasilkan konten, judul, dll. *(Note: The basic version already translated in previous section)*
* **[Google Search Console (GSC)](https://search.google.com/search-console/about):** Memantau kinerja situs web di pencarian Google, status pengindeksan, masalah teknis, dll.
* **[TinyPNG](https://tinypng.com/) / [iLoveIMG](https://www.iloveimg.com/):** Alat kompresi gambar online.
* **[Google PageSpeed Insights](https://pagespeed.web.dev/):** Menguji kecepatan pemuatan halaman dan pengalaman pengguna.
* **[Schema Markup Generator (如 Schema.dev)](https://schema.dev/schema-generator/):** Alat untuk menghasilkan kode data terstruktur. *(Note: The example name will also remain in English)*
* **[Google 搜索库 (Search Gallery)](https://developers.google.com/search/docs/appearance/structured-data/search-gallery):** Melihat jenis Skema yang didukung Google dan ringkasan media kaya. *(Note: The translated title and English link is also preferable here)*
* **[Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly):** Menguji keramahan seluler halaman web.
* **[Google Alerts](https://www.google.com/alerts):** Memantau konten baru di internet yang menyebutkan kata kunci atau merek tertentu.
* **[Next.js](https://nextjs.org/) / [Nuxt.js](https://nuxt.com/):** Kerangka kerja frontend yang membantu membangun situs web yang ramah SEO. *(Note: The names of the framework can remain in English)*
* **行业目录/评论网站 (部分免费):** Seperti [Yelp](https://www.yelp.com/), [TripAdvisor](https://www.tripadvisor.com/), dapat mengirimkan informasi bisnis dasar. *(Note: Translated title but English names & links can remain.)*

### Alat Berbayar
* **[Ahrefs (核心套件)](https://ahrefs.com/):** Platform alat SEO berfitur lengkap, menyediakan riset kata kunci yang lebih mendalam, analisis pesaing, analisis tautan, diagnostik situs web, dll. *(Note: Translated title but English names & links can remain.)*
* **[Semrush](https://www.semrush.com/):** Platform alat SEO dan pemasaran berfitur lengkap lainnya, dengan fungsi serupa dengan Ahrefs. *(Note: Translated title but English names & links can remain.)*
* **[SimilarWeb](https://www.similarweb.com/):** Platform alat SEO dan pemasaran berfitur lengkap lainnya, dengan fungsi serupa dengan Ahrefs. *(Note: Translated title but English names & links can remain.)*
* **[Answer The Public (付费版)](https://answerthepublic.com/):** Tidak ada batasan jumlah penggunaan. *(Note: Translated title but English names & links can remain.)*
* **[ChatGPT (高级版)](https://openai.com/chatgpt/):** Model AI yang lebih kuat. *(Note: Translated title but English names & links can remain.)*
* **行业目录/评论网站 (高级功能/广告):** Seperti [Capterra](https://www.capterra.com/), [G2](https://www.g2.com/), mungkin menyediakan promosi berbayar atau fungsi analisis tingkat lanjut. *(Note: Translated title but English names & links can remain.)*



---

## Terakhir
Terakhir, izinkan saya menyisipkan barang pribadi, saya mengembangkan alat, [SparkNow](https://sparknow.cc/), yang membantu Anda memulai proyek secara terpadu, deteksi SEO, backlink, kinerja, salinan iklan, gambar iklan, semuanya membantu Anda menyelesaikannya, kuantitasnya besar dan terjamin, teman-teman yang tertarik dapat mencobanya, jika Anda tidak tertarik, abaikan saja, kuasai metode SEO di atas saja sudah cukup. 