document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');

  var inputsToValidate = document.querySelectorAll('#email, #katasandi, #konfirmasikatsan, #namauser, input[name="btnradio"]:checked, #tglLahir, #kota, #notelp, #alamat');

  inputsToValidate.forEach(function (input) {
      input.addEventListener('blur', function () {
          if (!input.value) {
              input.style.boxShadow = '0 0 8px red';
          } else {
              input.style.boxShadow = ''; // Kembalikan warna border ke default jika sudah diisi
              input.removeAttribute('placeholder'); // Hapus placeholder pesan
          }
      });
  });

  // Menambahkan event listener untuk event submit pada form
  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Menghentikan pengiriman form bawaan

      // Inisialisasi variabel isValid sebagai true
      var isValid = true;
      // Iterasi melalui setiap input yang perlu divalidasi
      inputsToValidate.forEach(function (input) {
          if (!input.value) { // Jika input kosong
              isValid = false; // Set isValid menjadi false
              input.style.boxShadow = '0 0 8px red';
          } 

          if (input.value === 'pilihkota') {
              isValid = false; // Set isValid menjadi false
              input.style.boxShadow = '0 0 8px red';
          }
      });

      // Jika isValid true dan semua input terisi, hapus box-shadow merah
      if (isValid && checkFormFilled()) {
          inputsToValidate.forEach(function (input) {
              input.style.boxShadow = '';
          });
      }
  });

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      // Ambil nilai dari setiap input
      const email = document.getElementById('email').value;
      const password = document.getElementById('katasandi').value;
      const confirmPassword = document.getElementById('konfirmasikatsan').value;
      const username = document.getElementById('namauser').value;
      const genderElement = document.querySelector('input[name="btnradio"]:checked');
      const birthDate = document.getElementById('tglLahir').value;
      const city = document.getElementById('kota').value;
      const phoneNumber = document.getElementById('notelp').value;

      // Cek jika ada input yang kosong
      if (!email || !password || !confirmPassword || !username || !genderElement || !birthDate || !city || !phoneNumber) {
          alert('Diharapkan untuk melengkapi Semua Data yang dibutuhkan.');
          return; // Mencegah form dari submit
      }

      const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
      if (!email.match(emailRegex)) {
          alert('Email terdiri dari a-z, A-Z, atau 0-9. Diakhiri dengan "@gmail.com"');
          return;
      }

      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
      if (!password.match(passwordRegex)) {
          alert('Password harus terdiri dari angka, huruf kecil, dan huruf besar, dengan panjang 8-12 karakter.');
          return;
      }

      // Validasi konfirmasi password
      if (password !== confirmPassword) {
          alert('Konfirmasi Kata Sandi tidak sesuai dengan Kata Sandi yang dimasukkan.');
          return;
      }

      if (city === 'pilihkota') {
          alert('Pilih Asal Kota mu.');
          return;
      }

      // Validasi nomor telepon
      const phoneRegex = /^[0-9+]+$/;
      if (!phoneNumber.match(phoneRegex)) {
          alert('Nomor Telepon hanya boleh mengandung angka dan tanda "+".');
          return;
      }

      alert('Form berhasil disubmit.');

      // Tampilkan nilai di console
      console.log('Email : ', email);
      console.log('Kata Sandi : ', password);
      console.log('Konfirmasi Kata Sandi : ', confirmPassword);
      console.log('Nama Lengkap : ', username);
      console.log('Jenis Kelamin : ', genderElement ? genderElement.value : 'Belum dipilih');
      console.log('Tanggal Lahir : ', birthDate);
      console.log('Kota : ', city);
      console.log('Nomor Telepon : ', phoneNumber);

      // Lakukan pengiriman formulir ke server di sini
  });

  function checkFormFilled() {
      var isFormFilled = true;
      inputsToValidate.forEach(function (input) {
          if (!input.value) {
              isFormFilled = false;
          }
      });
      return isFormFilled;
  }
});   

function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-wisatawan");
        tablinks[i].classList.remove("active-vendor");
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    if (pageName === 'wisatawan') {
        elmnt.classList.add("active-wisatawan");
    } else if (pageName === 'vendor') {
        elmnt.classList.add("active-vendor");
    }
}

// When the page loads, open the "Wisatawan" tab by default
window.onload = function() {
    openPage('wisatawan', document.getElementById('btn-wisatawan'));
};