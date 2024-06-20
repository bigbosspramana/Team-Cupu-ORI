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
    formHTML += '<form class="item-form row g-3">';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<label for="item-name" class="form-label label-mt">Nama Barang</label>';
    formHTML += '<input type="text" id="item-name" class="form-control item-name" placeholder="Nama Barang">';
    formHTML += '</div>';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<label for="item-quantity" class="form-label label-mt">Jumlah Barang</label>';
    formHTML += '<div class="input-group" style="width: 180px;">';
    formHTML += '<button type="button" class="number btn btn-outline-secondary decrease-quantity"><i class="fa-solid fa-circle-minus"></i></button>';
    formHTML += '<input type="text" id="item-quantity" class="form-control item-quantity" value="0" style="text-align: center;">';
    formHTML += '<button type="button" class="number btn btn-outline-secondary increase-quantity"><i class="fa-solid fa-circle-plus"></i></button>';
    formHTML += '</div>';
    formHTML += '</div>';
    formHTML += '<div class="col-12 desc-item">';
    formHTML += '<label for="item-desc" class="form-label label-mt">Deskripsi Barang</label>';
    formHTML += '<textarea rows="5" id="item-desc" class="form-control item-desc"></textarea>';
    formHTML += '</div>';
    formHTML += '<div class="col-12 col-md-6">';
    formHTML += '<button type="button" id="add-item-btn" class="btn btn-primary add-item-btn"><i class="fa-solid fa-plus"></i>Tambah Barang</button>';
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

    // Menambahkan event listener pada tombol "Submit" pada form baru
    formElement.querySelector('.submit').addEventListener('click', (event) => {
        // Validasi form sebelum mengumpulkan data
        event.preventDefault();

        const namaPaket = document.getElementById('paket-name').value;
        const kategoriPaket = document.getElementById('category-paket').value;
        const tanggalPaket = document.getElementById('date-paket').value;
        // const tambahFoto = document.getElementById('formFile').value;
        // const descPaket = document.getElementById('vendor-description').value;

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
        // const itemDesc = formElement.querySelector('#item-desc').value;

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

        // Jika semua validasi berhasil, kumpulkan dan tampilkan data
        collectAndDisplayData();
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

    // Menambahkan event listener untuk tombol "Tambah Barang" pada form baru
    formElement.querySelector('.add-item-btn').addEventListener('click', function () {
        // Validasi input
        var itemName = formElement.querySelector('.item-name').value;
        var itemQuantity = formElement.querySelector('.item-quantity').value;

        if (!itemName) {
            alert('Anda belum menginputkan Nama Barang');
            return;
        }

        if (itemQuantity == 0) {
            alert('Anda belum memasukkan Jumlah Barang.');
            return;
        }

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
}

document.getElementById('add-item-btn').addEventListener('click', function () {
    // Menyembunyikan tombol "Tambah Barang"
    this.style.display = 'none';

    // Menyembunyikan tombol "Submit" pada form awal
    document.querySelector('.submit').style.display = 'none';

    // Membuat form pertama
    createForm();
});

document.querySelectorAll('#submit-btn')[document.querySelectorAll('#submit-btn').length - 1].addEventListener('click', function () {
    // Mengumpulkan dan mencetak data ke konsol
    collectAndDisplayData();
});

function collectAndDisplayData() {
    // Mengumpulkan semua data dari form
    let forms = document.querySelectorAll('.item-form');
    forms.forEach(formElement => {
        let itemName = formElement.querySelector('.item-name').value;
        let itemQuantity = formElement.querySelector('.item-quantity').value;
        let itemDesc = formElement.querySelector('.item-desc').value;

        console.log(`Barang ${formCount}`);
        console.log(`Nama Barang: ${itemName}`);
        console.log(`Jumlah Barang: ${itemQuantity}`);
        console.log(`Deskripsi Barang: ${itemDesc}`);
    });

    // Mengumpulkan data dari form produk utama
    let paketName = document.getElementById('paket-name').value;
    let categoryPaket = document.querySelector('select').value;
    let datePaket = document.getElementById('date-paket').value;
    let addressPaket = document.getElementById('address-paket').value;
    let vendorDesc = document.getElementById('vendor-description').value;

    console.log('Data Form Paket:');
    console.log(`Nama Paket: ${paketName}`);
    console.log(`Kategori Paket: ${categoryPaket}`);
    console.log(`Tanggal: ${datePaket}`);
    console.log(`Lokasi: ${addressPaket}`);
    console.log(`Deskripsi: ${vendorDesc}`);
}