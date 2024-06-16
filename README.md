# Wisata Indonesia
Wisata Indonesia adalah platform web yang dirancang untuk menghubungkan vendor dengan wisatawan yang ingin menikmati liburan di berbagai destinasi wisata di Indonesia. Website ini memfasilitasi vendor dalam mencari pelanggan yang ingin berlibur ke tempat-tempat eksotis seperti pulau, pantai, dan gunung.

## Deskripsi Singkat
Wisata Indonesia adalah solusi terbaik bagi vendor dan wisatawan yang ingin merencanakan perjalanan wisata. Vendor dapat mempromosikan layanan mereka, seperti paket tour, akomodasi, dan aktivitas rekreasi, kepada calon wisatawan. Di sisi lain, wisatawan dapat dengan mudah menemukan dan memesan berbagai pilihan liburan yang sesuai dengan keinginan mereka, dari petualangan di pegunungan hingga bersantai di pantai atau menjelajahi keindahan pulau-pulau tropis Indonesia.

Dengan antarmuka yang ramah pengguna, Wisata Indonesia menyediakan informasi lengkap dan akurat tentang berbagai destinasi wisata, memungkinkan wisatawan untuk membuat keputusan yang tepat dan merencanakan liburan impian mereka dengan mudah.

## Daftar Isi
- [Deskripsi Singkat](#deskripsi-singkat)
- [Instalasi](#instalasi)
- [Penggunaan](#penggunaan)
  - [Umum](#umum)
  - [Wisatawan](#wisatawan)
  - [Vendor](#vendor)
  - [Admin](#admin)
- [Fitur](#fitur)
- [Struktur Proyek](#struktur-proyek)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Kontribusi](#kontribusi)
- [Kontak](#kontak)

## Instalasi
Langkah-langkah untuk menginstal proyek di lingkungan lokal. Termasuk prasyarat, cara clone repository, dan cara menjalankan website.
Penggunaan

## Penggunaan

### Umum
1. Buka browser dan masuk ke `http://localhost:3306`.
2. Buka file [FrontEnd/HomePage/homePage.html](homePage.html) dan jalankan.
3. Anda akan masuk ke halaman utama yang menjelaskan tentang Wisata Indonesia dengan tiga kategori wisata: Pantai, Pulau, dan Gunung.
4. Navigasi tersedia untuk home, wisata, dan pariwisata. Wisata menampilkan vendor berdasarkan kota dan jenis wisata, sementara pariwisata adalah dropdown dengan tiga jenis wisata.
5. Untuk login, klik "Masuk" di navbar kanan, lalu isi form login.
6. Untuk registrasi, klik "Daftar" di navbar kanan, pilih peran (Vendor atau Wisatawan), lalu isi form registrasi.
7. Setelah login atau registrasi, Anda akan diarahkan ke halaman utama (home).

### Wisatawan 
1. Setelah login, Anda akan masuk ke halaman utama yang menjelaskan tentang Wisata Indonesia.
2. Navigasi tersedia untuk home, wisata, pariwisata, dan profile. 
   - **Wisata**: Menampilkan vendor berdasarkan kota dan jenis wisata.
   - **Pariwisata**: Dropdown dengan tiga jenis wisata.
   - **Profile**: Berisikan data-data wisatawan. Wisatawan dapat menghapus akun, mengedit data profil, mengubah kata sandi, dan keluar dari akun.
3. Klik kartu wisata untuk masuk ke halaman penjelasan vendor. Di dalam kartu vendor terdapat beberapa paket yang dapat dipilih.
4. Pilih paket dan masuk ke halaman transaksi. Wisatawan dapat mengustom barang yang disediakan oleh vendor.
5. Pilih metode pembayaran (transfer atau lainnya).
6. Kontak vendor melalui WhatsApp untuk nomor rekening.
7. Lakukan transaksi melalui aplikasi mobile banking (misalnya BCA).
8. Upload bukti transfer dan kirim ke vendor untuk diperiksa.

### Vendor
1. **Navigasi**: Navbar berisi Home, Detail Transaksi, dan Profil.
2. **Detail Transaksi**:
   - Lihat pesanan dari wisatawan dengan status Menunggu Pembayaran, Berhasil, dan Gagal.
   - Dapatkan jumlah pesanan berdasarkan status.
   - Kustom barang sesuai permintaan wisatawan.
   - Kirim nama dan vendor untuk disetujui kedua belah pihak dan kirim ke admin.
3. **Profil**:
   - Tampilkan dan edit data profil.
   - Tambah foto ke galeri sebagai dokumentasi vendor.
4. **Paket**:
   - Tambah paket baru dengan tombol "Tambah Paket".
   - Isi form untuk membuat paket baru dan tambah daftar barang yang dibutuhkan.
   - Kirim form ke admin untuk disetujui.
  
### Admin
1. **Permintaan Pembayaran**:
   - Lihat daftar permintaan pembayaran dari wisatawan.
   - Acc atau tolak permintaan dengan mengklik tombol sesuai.
   - Jika di-acc, kirim notifikasi ke vendor dan wisatawan.
   - Jika ditolak, berikan alasan dan kirim notifikasi ke vendor dan wisatawan.
2. **Permintaan Paket**:
   - Lihat daftar permintaan paket dari wisatawan.
   - Acc atau tolak permintaan dengan mengklik tombol sesuai.
   - Jika di-acc, kirim notifikasi ke vendor.
   - Jika ditolak, berikan alasan dan kirim notifikasi ke vendor.
### Acc/Tolak Permintaan
1. Klik tombol "Acc" untuk menyetujui permintaan.
2. Klik tombol "Tolak" untuk menolak permintaan dan berikan alasan.
3. Konfirmasi aksi dengan memilih "Ya" pada dialog konfirmasi.

### Riwayat Permintaan
1. Untuk melihat riwayat permintaan yang sudah di-acc atau ditolak, navigasikan ke halaman Permintaan Pembayaran atau Permintaan Paket dan gunakan filter status.
2. Klik detail untuk melihat informasi lengkap tentang permintaan yang telah diproses.

## Fitur
### Wisatawan
  - **Registrasi** : User dapat mendaftarkan diri mereka untuk menggunakan website.
  - **Login** : Setelah Regist User dapat masuk dengan akun yang sudah mereka buat di Registrasi.
  - **Landing Page** : Di Sini User Dapat melihat tentang apa itu website WisataIndonesia, Apa Kegunaannya, dan apa - apa saja fitur yang di sediakan.
  - **Page Wisata** : Pada Page ini User dapat melihat beberapa rekomendasi tempat" destinasi yang sekiranya Bagus untuk dikunjungi, Page ini memberikan User Banyak wawasan mengenai destinasi bagus yang wajib di kunjungi. Page ini juga membagi destinasi wisata berdasarkan Kotanya.
  - **Page Wisata (Pegunungan)** : Page ini berisi wisata pegunungan yang wajib untuk di jelajahi.
  - **Page Wisata (Pantai)** : Page ini berisi wisata Pantai yang wajib untuk di jelajahi.
  - **Page Wisata (Pulau)** : Page ini berisi wisata Pulau yang wajib untuk di jelajahi.
  - **Detail Wisata** : Di sini User dapat melihat secara detail mengenai Wisata yang mereka lihat. Serta memeriksa Vendir yang dapat menyediakan persediaan untuk mereka melaksanakan perjalanan mereka.
  - **Transaksi** : Page ini digunakan untuk membantu mempermudah proses transaksi antara Wisatawan dan Vendor.

### Vendor
  - **Registrasi** : User dapat mendaftarkan diri mereka untuk menggunakan website.
  - **Login** : Setelah Regist User dapat masuk dengan akun yang sudah mereka buat di Registrasi.
  - **Landing Page** : Di Sini User Dapat melihat tentang apa itu website WisataIndonesia, Apa Kegunaannya, dan apa - apa saja fitur yang di sediakan.
  - **Profil Vendor** : Di Profil Vendor dapat menambahkan Foto Profil, Identitas diri, Social Media, dan menambahkan produk yang mereka sediakan.
  - **Tambahkan Paket** : Pada bagian ini Vendor dapat menambahkan Produk dan detail produknya.
  - **Transaksi** : Page ini digunakan untuk membantu mempermudah proses transaksi antara Wisatawan dan Vendor.

### Admin
  - **Login** : Admin dapat melakukan login tanpa melalui regitrasi karena memiliki akun yang sudah di sediakan.
  - **Landing Page** : Di Sini User Dapat melihat tentang apa itu website WisataIndonesia, Apa Kegunaannya, dan apa - apa saja fitur yang di sediakan.
  - **Profil Admin** : Di Profile Admin ini dapat menambahkan foto profile dan keluar dari akun jika perlu.
  - **Menyetujui Data** : Admin dapat melakukan konfirmasi untuk Item yang di tambahkan oleh vendor, Admin juga dapat melakukan konfirmasi untuk transaksi yang terjadi untuk meningkatkan keamanan.
  - **Menolak Data** : Admin dapat melakukan penolakan untuk Item yang di tambahkan oleh vendor, Admin juga dapat melakukan penolakan untuk transaksi yang terjadi untuk meningkatkan keamanan.

## Teknologi yang Digunakan
- HTML (HyperText MarkUp Language)
- CSS (Cascading Style Sheets)
- JS (Java Script)
- Java (Spring Boot)

## Kontribusi
Kami sangat menyambut kontribusi dari para pengembang untuk membuat sistem ini lebih luas dan menarik. Berikut langkah-langkah untuk berkontribusi:

### Cara Berkontribusi

1. Fork repository ini ke akun GitHub Anda.
2. Clone repository yang telah Anda fork ke komputer lokal Anda.
3. Buat branch baru untuk fitur atau perbaikan yang akan Anda kerjakan.

### Panduan Pengembangan

- Untuk menambah fitur baru:
  - Lakukan perubahan yang diperlukan pada kode.
  - Pastikan untuk menyertakan dokumentasi yang jelas untuk fitur baru Anda.
  - Uji coba fitur tersebut secara lokal sebelum mengirimkan pull request.

- Untuk menambah desain dan animasi:
  - Perbarui file CSS untuk menambah desain yang menarik.
  - Gunakan CSS animations atau JavaScript animations untuk menambah efek animasi yang diinginkan.

### Pengiriman Pull Request

1. Setelah Anda selesai dengan perubahan Anda, commit dan push ke branch baru Anda di GitHub.
2. Buka pull request ke branch utama repository ini.
3. Sertakan deskripsi yang jelas tentang perubahan yang Anda lakukan dan mengapa perubahan tersebut penting.

### Diskusi dan Feedback

Jangan ragu untuk membuka issue baru jika Anda memiliki pertanyaan, saran, atau masukan terkait pengembangan proyek ini. Kami akan senang mendengarnya dan berdiskusi bersama Anda.

## Kontak
Jika Anda memiliki pertanyaan atau ingin berdiskusi lebih lanjut tentang proyek ini, silakan hubungi kami melalui email:

**Email**
- Alvin Yuga Pramana :[kifay0715@gmail.com](mailto:kifay0715@gmail.com)
- Apryadi Dwi Putra Tangalayuk :
- Franklin Jaya :
- Muh. Ryan Ardiansyah : 

Kami akan dengan senang hati menjawab pertanyaan Anda secepat mungkin.
