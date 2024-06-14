// Fungsi untuk memformat angka sebagai mata uang Indonesia dengan simbol "Rp"
function formatRupiah(angka) {
    var numberString = angka.replace(/[^,\d]/g, '').toString();
    var split = numberString.split(',');
    var sisa = split[0].length % 3;
    var rupiah = split[0].substr(0, sisa);
    var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
        var separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return 'Rp ' + rupiah; // Menambahkan simbol "Rp" di depan angka yang diformat
}

let formCount = 0;

function createForm() {
    formCount++;
    let formHTML = '';

    if (formCount === 1) {
        formHTML += '<p class="h4">Formulir Tambah Barang</p>';
    }

    formHTML += `<p class="h5">Barang ${formCount}</p>`;
    formHTML += '<form class="item-form row" id="barangForm">';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<label for="namaBarang" class="form-label label-mt">Nama Barang</label>';
    formHTML += '<input type="text" id="namaBarang" class="form-control item-name" placeholder="Nama Barang">';
    formHTML += '</div>';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<label for="item-quantity" class="form-label label-mt">Jumlah Barang</label>';
    formHTML += '<div class="input-group" style="width: 180px;">';
    formHTML += '<button type="button" class="number btn btn-outline-secondary decrease-quantity"><i class="fa-solid fa-circle-minus"></i></button>';
    formHTML += '<input type="text" id="item-quantity" class="form-control item-quantity" value="0" style="text-align: center;">';
    formHTML += '<button type="button" class="number btn btn-outline-secondary increase-quantity"><i class="fa-solid fa-circle-plus"></i></button>';
    formHTML += '</div>';
    formHTML += '</div>';
    formHTML += '<div class="col-12">';
    formHTML += '<label for="hargaBarang" class="form-label label-mt">Harga Barang</label>';
    formHTML += '<input type="text" id="hargaBarang" class="form-control item-price" placeholder="Harga Barang">';
    formHTML += '</div>';
    formHTML += '<div class="col-12 desc-item">';
    formHTML += '<label for="item-desc" class="form-label label-mt">Deskripsi Barang</label>';
    formHTML += '<textarea rows="5" id="item-desc" class="form-control item-desc" placeholder="Deskripsi Paket"></textarea>';
    formHTML += '</div>';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<button type="submit" id="add-item-btn" class="btn btn-primary add-item-btn"><i class="fa-solid fa-plus"></i>Tambah Barang</button>';
    formHTML += '</div>';
    formHTML += '<div class="col-12 col-md-6 m-right">';
    formHTML += '<button type="button" id="submit-btn" class="btn btn-primary submit"> <i class="fa-solid fa-paper-plane"></i>Submit</button>';
    formHTML += '</div>';
    formHTML += '</form>';

    // Menambahkan form ke dalam container
    var itemContainer = document.getElementById('item-container');
    var formElement = document.createElement('div');
    formElement.innerHTML = formHTML;
    itemContainer.appendChild(formElement);

    inputElements.forEach(input => {
        input.addEventListener('input', () => {
            input.style.boxShadow = ''; // Hapus efek box shadow merah saat input diperbaiki
        });
    });

    function displayError(inputElement) {
        inputElement.style.boxShadow = '0 0 8px 0 red';
        isValid = false;
    }

    // Menambahkan event listener pada tombol "Submit" pada form baru
    formElement.querySelector('.submit').addEventListener('click', (event) => {
        // Validasi form sebelum mengumpulkan data
        event.preventDefault();

        const namaPaket = document.getElementById('paket-name').value;
        const kategoriPaket = document.getElementById('category-paket').value;
        const tanggalPaket = document.getElementById('date-paket').value;
        const tambahFoto = document.getElementById('formFile').value;
        const descPaket = document.getElementById('vendor-description').value;

         // Validasi field yang diperlukan
         let isValid = true;

        // Validasi Nama Paket
        if (!namaPaket.trim()) {
            alert('Nama Paket tidak boleh kosong.');
            displayError(document.getElementById('paket-name'));
            return;
        }

        // Validasi Kategori Paket
        if (kategoriPaket === 'Pilih Kategori') {
            alert('Silakan pilih kategori paket.');
            displayError(document.getElementById('category-paket'));
            return;
        }

        // Validasi Tanggal Paket (misal: tidak boleh tanggal sebelum hari ini)
        const today = new Date();
        const selectedDate = new Date(tanggalPaket);
        if (selectedDate < today) {
            alert('Tanggal paket harus setelah hari ini.');
            displayError(document.getElementById('date-paket'));
            return;
        }

        const itemName = formElement.querySelector('#namaBarang').value;
        const itemQuantity = formElement.querySelector('#item-quantity').value;
        const itemPrice = formElement.querySelector('#hargaBarang').value.replace(/[^0-9]/g, '');
        const itemDesc = formElement.querySelector('#item-desc').value;

        if (!itemName.trim()) {
            alert('Nama Barang tidak boleh kosong.');
            displayError(document.getElementById('namaBarang'));
            return;
        }

        // Validasi Jumlah Barang
        if (itemQuantity <= 0) {
            alert('Jumlah Barang harus lebih dari 0.');
            displayError(document.getElementById('item-quantity'));
            return;
        }

        // Validasi Harga Barang
        if (!itemPrice) {
            alert('Harga Barang tidak boleh kosong.');
            displayError(document.getElementById('hargaBarang'));
            return;
        }

        if (isValid) {
            alert('Form berhasil disubmit!');
            // Jika semua validasi berhasil, kumpulkan dan tampilkan data
            collectAndDisplayData();
        } else {
            alert('Silakan isi semua field yang diperlukan');
        }
    });

    // Menambahkan event listener untuk tombol plus dan minus
    formElement.querySelectorAll('.increase-quantity').forEach(button => {
        button.addEventListener('click', function () {
            var quantityInput = this.previousElementSibling;
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
    });

    formElement.querySelectorAll('.decrease-quantity').forEach(button => {
        button.addEventListener('click', function () {
            var quantityInput = this.nextElementSibling;
            if (quantityInput.value > 0) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
    });

    formElement.querySelectorAll('.item-price').forEach(input => {
        input.addEventListener('input', function (e) {
            var inputValue = this.value;
            if (inputValue === 'Rp ') {
                this.value = 'Rp 0'; // Jika nilai input sudah 0, biarkan saja
            } else {
                this.value = formatRupiah(inputValue);
            }
        });
    });

    // Menambahkan event listener untuk tombol "Tambah Barang" pada form baru
    formElement.querySelector('.add-item-btn').addEventListener('click', function () {
        // Menyembunyikan tombol "Tambah Barang" dan "Submit" pada form saat ini
        this.style.display = 'none';
        formElement.querySelector('.submit').style.display = 'none';

        // Membuat form baru
        createForm();
    });

    // Menambahkan event listener untuk membatasi input hanya pada angka
    formElement.querySelectorAll('.item-quantity').forEach(input => {
        input.addEventListener('input', function (e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });
    });

    // Menambahkan event listener untuk memformat input harga barang dengan simbol "Rp"
    formElement.querySelectorAll('.item-price').forEach(input => {
        input.addEventListener('input', function (e) {
            this.value = formatRupiah(this.value);
        });
    });
}

document.getElementById('add-item-btn').addEventListener('click', function () {
    // Menyembunyikan tombol "Tambah Barang"
    this.style.display = 'none';

    // Menyembunyikan tombol "Submit" pada form awal
    document.querySelector('.submit').style.display = 'none';

    // Membuat form pertama
    createForm();
});

// document.querySelectorAll('#submit-btn')[document.querySelectorAll('#submit-btn').length - 1].addEventListener('click', function () {
//     // Mengumpulkan dan mencetak data ke konsol
//     collectAndDisplayData();
// });

function collectAndDisplayData() {
    // Mengumpulkan semua data dari form
    let forms = document.querySelectorAll('.item-form');
    forms.forEach(formElement => {
        let itemName = document.getElementById('item-name').value;
        let itemQuantity = document.getElementById('.item-quantity').value;
        let itemDesc = document.getElementById('.item-desc').value;
        const itemPrice = hargaBarangInput.value.replace(/[^0-9]/g, '');

        console.log(`Barang ${formCount}`);
        console.log(`Nama Barang: ${itemName}`);
        console.log(`Jumlah Barang: ${itemQuantity}`);
        console.log(`Harga Barang: ${itemPrice}`);
        console.log(`Deskripsi Barang: ${itemDesc}`);
    });

    // Mengumpulkan data dari form produk utama
    let paketName = document.getElementById('paket-name').value;
    let categoryPaket = document.querySelector('select').value;
    let datePaket = document.getElementById('date-paket').value;
    let vendorDesc = document.getElementById('vendor-description').value;

    console.log('Data Form Paket:');
    console.log(`Nama Paket: ${paketName}`);
    console.log(`Kategori Paket: ${categoryPaket}`);
    console.log(`Tanggal: ${datePaket}`);
    console.log(`Deskripsi: ${vendorDesc}`);
}

// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-product');
    const submitButton = document.getElementById('submit-btn');

    function displayError(inputElement) {
        inputElement.style.boxShadow = '0 0 8px 0 red';
        isValid = false;
    }

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            const namaPaket = document.getElementById('paket-name').value;
            const kategoriPaket = document.getElementById('category-paket').value;
            const tanggalPaket = document.getElementById('date-paket').value;
            const tambahFoto = document.getElementById('formFile').value;
            const descPaket = document.getElementById('vendor-description').value;

            // Validasi Nama Paket
            if (!namaPaket.trim()) {
                alert('Nama Paket tidak boleh kosong.');
                displayError(document.getElementById('paket-name'));
                return;
            }

            // Validasi Kategori Paket
            if (kategoriPaket === 'Pilih Kategori') {
                alert('Silakan pilih kategori paket.');
                displayError(document.getElementById('category-paket'));
                return;
            }

            // Validasi Tanggal Paket (misal: tidak boleh tanggal sebelum hari ini)
            const today = new Date();
            const selectedDate = new Date(tanggalPaket);
            if (selectedDate < today) {
                alert('Tanggal paket harus setelah hari ini.');
                displayError(document.getElementById('date-paket'));
                return;
            }

            if (!tambahFoto) {
                alert('Silahkan masukkan Foto Background Paket.');
                displayError(document.getElementById('formFile'));
                return;
            }

            const itemName = formElement.querySelector('#namaBarang').value;
            const itemQuantity = formElement.querySelector('#item-quantity').value;
            const itemPrice = formElement.querySelector('#hargaBarang').value.replace(/[^0-9]/g, '');
            const itemDesc = formElement.querySelector('#item-desc').value;

            if (!itemName.trim()) {
                alert('Nama Barang tidak boleh kosong.');
                displayError(document.getElementById('namaBarang'));
                return;
            }

            // Validasi Jumlah Barang
            if (itemQuantity <= 0) {
                alert('Jumlah Barang harus lebih dari 0.');
                displayError(document.getElementById('item-quantity'));
                return;
            }

            // Validasi Harga Barang
            if (!itemPrice) {
                alert('Harga Barang tidak boleh kosong.');
                displayError(document.getElementById('hargaBarang'));
                return;
            }

            // Opsional: Menangani unggahan gambar
            const formFile = document.getElementById('formFile').files[0];
            let imgUrl = '';
            if (formFile) {
                // Menggunakan URL lokal untuk kesederhanaan, tangani unggahan file sesuai kebutuhan
                imgUrl = URL.createObjectURL(formFile);
            }

            // // Membuat objek data paket
            // const paketData = {
            //     namaPaket,
            //     kategoriPaket,
            //     tanggalPaket,
            //     deskripsiPaket,
            //     imgUrl
            // };

            // // Simpan data ke local storage (atau kirim ke server backend)
            // const packages = JSON.parse(localStorage.getItem('packages')) || [];
            // packages.push(paketData);
            // localStorage.setItem('packages', JSON.stringify(packages));
            if (isValid) {
                alert('Form berhasil disubmit!');
                collectAndDisplayData();
                // Redirect ke halaman "Paket Wisata"
            window.location.href = '../Profile%20(Vendor)/profilevendor.html';
            } else {
                alert('Silakan isi semua field yang diperlukan');
            }
        });
    }

    // Saat halaman "Paket Wisata" dimuat, isi paket
    const packagesContainer = document.getElementById('packages-container');
    if (packagesContainer) {
        const packages = JSON.parse(localStorage.getItem('packages')) || [];
        packages.forEach(paket => {
            const paketElement = document.createElement('div');
            paketElement.classList.add('urutan-paket');

            paketElement.innerHTML = `
                <div class="kanan">
                    <div class="img" style="background-image: url('${paket.imgUrl}');"></div>
                </div>
                <div class="kiri">
                    <p class="h6">${paket.namaPaket}</p>
                    <p class="harga">${paket.lokasiPaket}</p>
                </div>
            `;

            packagesContainer.appendChild(paketElement);
        });
    }
});
