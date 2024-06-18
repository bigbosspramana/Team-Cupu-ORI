document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("defaultOpen").click();
});

document.addEventListener('DOMContentLoaded', function () {
    const formWisatawan = document.getElementById('formWisatawan');

    const inputElements = formWisatawan.querySelectorAll('input, select');

    inputElements.forEach(input => {
        input.addEventListener('input', () => {
            input.style.boxShadow = ''; // Hapus efek box shadow merah saat input diperbaiki
        });
    });

    function displayError(inputElement) {
        inputElement.style.boxShadow = '0 0 8px 0 red';
        isValid = false;
    }


    formWisatawan.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Mengambil nilai input
        const email = document.getElementById('email-w').value;
        const password = document.getElementById('katasandi-w').value;
        const confirmPassword = document.getElementById('konfirmasikatsan-w').value;
        const fullName = document.getElementById('namauser-w').value;
        const gender = document.getElementById('jkel-w').value;
        const birthDate = document.getElementById('tglLahir').value;
        const city = document.getElementById('kota-w').value;
        const phoneNumber = document.getElementById('notelp-w').value;

        // Validasi field yang diperlukan
        let isValid = true;

        document.querySelectorAll('#formWisatawan input, #formWisatawan select').forEach(input => input.style.border = '');

        // if (!email || !password || !confirmPassword || !fullName || !gender || !birthDate || !city || !phoneNumber) {
        //     alert('Silahkan isi form data yang dibutuhkan.');
        // }

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        if (!email.match(emailRegex)) {
            alert('Email harus berupa alamat email yang valid (contoh: user@example.com).');
            displayError(document.getElementById('email-w'));
            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
        if (!password.match(passwordRegex)) {
            alert('Password harus terdiri dari angka, huruf kecil, dan huruf besar, dengan panjang 8-12 karakter.');
            displayError(document.getElementById('katasandi-w'));
            return;
        }

        if (password !== confirmPassword) {
            alert('Konfirmasi Kata Sandi tidak sesuai dengan Kata Sandi yang dimasukkan.');
            displayError(document.getElementById('konfirmasikatsan-w'));
            return;
        }

        if (!fullName) {
            alert('Silahkan masukkan Nama Lengkap Anda.');
            displayError(document.getElementById('namauser-w'));
            return;
        }

        if (!gender || gender === 'pilihjeniskelamin') {
            alert('Silahkan pilih jenis kelamin Anda.');
            displayError(document.getElementById('jkel-w'));
            return;
        }

        if (!birthDate) {
            alert('Silahkan masukkan Tanggal Lahir Anda.');
            displayError(document.getElementById('tglLahir'));
            return;
        }

        if (!city || city === 'pilihkota') {
            alert('Pilih Asal Kota mu.');
            displayError(document.getElementById('kota-w'));
            return;
        }

        const phoneRegex = /^[0-9+]+$/;
        if (!phoneNumber.match(phoneRegex)) {
            alert('Nomor Telepon hanya boleh mengandung angka dan tanda "+".');
            displayError(document.getElementById('notelp-w'));
            return;
        }

        const formData = {
            emailw: document.getElementById('email-w').value,
            passwordw: document.getElementById('katasandi-w').value,
            // konfirmasipasswordw: document.getElementById('konfirmasikatsan-w').value,
            namaLengkapw: document.getElementById('namauser-w').value,
            jenisKelaminw: document.getElementById('jkel-w').value,
            tanggalLahirw: document.getElementById('tglLahir').value,
            kotaw: document.getElementById('kota-w').value,
            nomorTeleponw: document.getElementById('notelp-w').value
        };

        try {
            // Mengirim data ke server
            const response = await fetch('http://localhost:8080/register/wisatawan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert('Akses Tokenmu: ' + result.access_token);
                console.log(result);
                formWisatawan.reset(); // Reset form setelah submit berhasil
            } else {
                throw new Error(result.message || 'Gagal melakukan registrasi');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Registrasi Wisatawan gagal!');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const formVendor = document.getElementById('formVendor');

    const inputElements = formWisatawan.querySelectorAll('input, select');

    inputElements.forEach(input => {
        input.addEventListener('input', () => {
            input.style.boxShadow = ''; // Hapus efek box shadow merah saat input diperbaiki
        });
    });

    function displayError(inputElement) {
        inputElement.style.boxShadow = '0 0 8px 0 red';
        isValid = false;
    }

    formVendor.addEventListener('submit', async function (event) {
        // console.log("halo")
        event.preventDefault();

        const emailVendor = document.getElementById('email-v').value;
        const passwordVendor = document.getElementById('katasandi-v').value;
        const confirmPasswordVendor = document.getElementById('konfirmasikatsan-v').value;
        const vendorName = document.getElementById('namauser-v').value;
        const address = document.getElementById('alamat-v').value;
        const phoneNumberVendor = document.getElementById('notelp-v').value;

        let isValid = true;

        document.querySelectorAll('#formVendor input, #formVendor select').forEach(input => input.style.border = '');

        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
        if (!emailVendor.match(emailRegex)) {
            alert('Email harus berupa alamat email yang valid (contoh: user@example.com).');
            displayError(document.getElementById('email-v'));
            isValid = false;
            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
        if (!passwordVendor.match(passwordRegex)) {
            alert('Password harus terdiri dari angka, huruf kecil, dan huruf besar, dengan panjang 8-12 karakter.');
            displayError(document.getElementById('katasandi-v'));
            isValid = false; // Set isValid to false if password is not valid
            return;
        }

        if (passwordVendor !== confirmPasswordVendor) {
            alert('Konfirmasi Kata Sandi tidak sesuai dengan Kata Sandi yang dimasukkan.');
            displayError(document.getElementById('konfirmasikatsan-v'));
            isValid = false; // Set isValid to false if passwords do not match
            return;
        }

        if (!vendorName) {
            alert('Silakan masukkan Nama Vendor Anda.');
            displayError(document.getElementById('namauser-v'));
            isValid = false; // Set isValid to false if vendor name is empty
            return;
        }

        if (!address) {
            alert('Silakan masukkan Alamat Vendor Anda.');
            displayError(document.getElementById('alamat-v'));
            isValid = false; // Set isValid to false if address is empty
            return;
        }

        const phoneRegex = /^[0-9+]+$/;
        if (!phoneNumberVendor.match(phoneRegex)) {
            alert('Nomor Telepon hanya boleh mengandung angka dan tanda "+".');
            displayError(document.getElementById('notelp-v'));
            isValid = false; // Set isValid to false if phone number is not valid
            return;
        }
        if (!phoneNumberVendor) {
            alert('Silahkan masukkan Nomor Telepon Anda.');
            displayError(document.getElementById('notelp-v'));
            isValid = false; // Set isValid to false if phone number is empty
        }

        const formData = {
            emailv: emailVendor,
            passwordv: passwordVendor,
            // confirmPasswordv: confirmPasswordVendor,
            namaVendorv: vendorName,
            alamatv: address,
            nomorTeleponv: phoneNumberVendor,
            instagramv: document.getElementById('instagram').value,
            tiktokv: document.getElementById('tiktok').value,
            facebookv: document.getElementById('facebook').value,
        };

        try {
            const response = await fetch('http://localhost:8080/register/vendor', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            alert('Registrasi Vendor berhasil!');
            console.log(result);
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
            alert('Registrasi Vendor gagal!');
        }

        console.log('Data Vendor:', formData);
    });

});


function openPage(pageName, elmnt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = "#f1f1f1";
    elmnt.style.color = "black";
}

// Simulate a click on the element with id="defaultOpen"
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("defaultOpen").click();
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