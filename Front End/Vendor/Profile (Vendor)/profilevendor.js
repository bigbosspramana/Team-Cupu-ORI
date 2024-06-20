const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const uploadText = document.querySelector('.img-area h3');

selectImage.addEventListener('click', function () {
    inputFile.click();
})

inputFile.addEventListener('change', function () {
    const image = this.files[0];
    if (image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgArea.querySelectorAll('img');
            allImg.forEach(item => item.remove());
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            imgArea.appendChild(img);
            imgArea.classList.add('active');
            imgArea.dataset.img = image.name;

            uploadText.style.display = 'none';
        }
        reader.readAsDataURL(image);
    } else {
        alert("Image size more than 2MB");
    }
})

function showUploadText() {
    if (imgArea.querySelector('img') === null) {
        uploadText.style.display = 'block';
    }
}
showUploadText();

// Fetch data from register endpoint in AuthenticationController.java
fetch('/register')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Success:', data);
        // Handle success
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors
    });

const instagramButton = document.getElementById('instagram-button');
const instagramLinkText = document.getElementById('instagram-link-text');
const instagramInput = document.getElementById('instagram-input');
const tiktokButton = document.getElementById('tiktok-button');
const tiktokLinkText = document.getElementById('tiktok-link-text');
const tiktokInput = document.getElementById('tiktok-input');
const facebookButton = document.getElementById('facebook-button');
const facebookLinkText = document.getElementById('facebook-link-text');
const facebookInput = document.getElementById('facebook-input');
const urlContainer = document.getElementById('btn-sosmed-container');
const buttonSosmed = document.getElementById('btn-sosmed');

instagramButton.addEventListener('click', function () {
    const link = instagramLinkText.getAttribute('data-link');
    if (link) {
        window.open(link, '_blank');
    }
});

tiktokButton.addEventListener('click', function () {
    const link = tiktokLinkText.getAttribute('data-link');
    if (link) {
        window.open(link, '_blank');
    }
});

facebookButton.addEventListener('click', function () {
    const link = facebookLinkText.getAttribute('data-link');
    if (link) {
        window.open(link, '_blank');
    }
});

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function editProfile() {
    document.getElementById('vendor-name').disabled = false;
    document.getElementById('vendor-number').disabled = false;
    document.getElementById('vendor-address').disabled = false;
    document.getElementById('vendor-description').disabled = false;

    buttonSosmed.classList.add('hidden');
    urlContainer.classList.remove('hidden');

    document.querySelector('.edit-btn').hidden = true;
    document.querySelector('.select-image').hidden = false; // Show Select Image button
    document.querySelector('.save-btn').hidden = false;
    document.querySelector('.cancel-btn').hidden = false;
}

function saveProfile() {
    let isValid = true;

    const vendorName = document.getElementById('vendor-name').value.trim();
    const vendorNameError = document.getElementById('vendor-name-error');
    const vendorAddress = document.getElementById('vendor-address').value.trim();
    const vendorAddressError = document.getElementById('vendor-alamat-error');
    const vendorNumber = document.getElementById('vendor-number').value.trim();
    const vendorNumberError = document.getElementById('vendor-notelp-error');
    const instagramInput = document.getElementById('instagram-input').value.trim();
    const instagramError = document.getElementById('instagram-error');
    const tiktokInput = document.getElementById('tiktok-input').value.trim();
    const tiktokError = document.getElementById('tiktok-error');
    const facebookInput = document.getElementById('facebook-input').value.trim();
    const facebookError = document.getElementById('facebook-error');

    if (vendorName === '') {
        vendorNameError.textContent = '* Nama vendor tidak boleh kosong.';
        vendorNameError.style.display = 'block';
        vendorNameError.style.fontSize = '12px';
        vendorNameError.style.color = 'red';
        isValid = false;
    } else {
        vendorNameError.textContent = '';
        vendorNameError.style.display = 'none';
        vendorNameError.style.fontSize = '0';
    }

    if (vendorAddress === '') {
        vendorAddressError.textContent = '* Alamat vendor tidak boleh kosong.';
        vendorAddressError.style.fontSize = '12px';
        vendorAddressError.style.display = 'block';
        vendorAddressError.style.color = 'red';
        isValid = false;
    } else {
        vendorAddressError.textContent = '';
        vendorAddressError.style.display = 'none';
        vendorAddressError.style.fontSize = '0';
    }

    const phoneRegex = /^[0-9+]+$/;
    if (!vendorNumber) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor tidak boleh kosong.';
        vendorNumberError.style.display = 'block';
        vendorNumberError.style.fontSize = '12px';
        vendorNumberError.style.color = 'red';
    } else if (!vendorNumber.match(phoneRegex)) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor terdiri dari angka 0-9 dan "+".';
        vendorNumberError.style.display = 'block';
        vendorNumberError.style.fontSize = '12px';
        vendorNumberError.style.color = 'red';
        isValid = false;
    } else {
        vendorNumberError.textContent = '';
        vendorNumberError.style.display = 'none';
        vendorNumberError.style.fontSize = '0';
    }

    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._-]+\/?$/;
    if (!instagramInput.match(instagramRegex)) {
        instagramError.textContent = '* Link URL nya harus berupa (https://instagram.com/[namaakunanda])';
        instagramError.style.display = 'block';
        instagramError.style.fontSize = '12px';
        instagramError.style.color = 'red';
    } else {
        instagramError.textContent = '';
        instagramError.style.display = 'none';
        instagramError.style.fontSize = '0';
    }

    const tiktokRegex = /^https?:\/\/(www\.)?tiktok\.com\/(@[a-zA-Z0-9._-]+|user\/[a-zA-Z0-9._-]+)\/?$/;
    if (!tiktokInput.match(tiktokRegex)) {
        tiktokError.textContent = '* Link URL nya harus berupa (https://tiktok.com/@namaakunanda)';
        tiktokError.style.display = 'block';
        tiktokError.style.fontSize = '12px';
        tiktokError.style.color = 'red';
    } else {
        tiktokError.textContent = '';
        tiktokError.style.display = 'none';
        tiktokError.style.fontSize = '0';
    }

    const facebookRegex = /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?$/;
    if (!facebookInput.match(instagramRegex)) {
        facebookError.textContent = '* Link URL nya harus berupa (https://facebook.com/[namaakunanda])';
        facebookError.style.display = 'block';
        facebookError.style.fontSize = '12px';
        facebookError.style.color = 'red';
    } else {
        facebookError.textContent = '';
        facebookError.style.display = 'none';
        facebookError.style.fontSize = '0';
    }

    if (!isValid) {
        return;
    }

    const vendorData = {
        vendorName: vendorName,
        vendorAddress: vendorAddress,
        vendorNumber: vendorNumber,
        instagramLink: instagramInput,
        tiktokLink: tiktokInput,
        facebookLink: facebookInput
    };

    const token = getCookie('vendorToken');

    fetch(`/profile/vendor`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(vendorData)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Success:', data);
        // Tangani sukses
    })
    .catch(error => {
        console.error('Ada masalah dengan operasi fetch:', error);
        // Tangani kesalahan
    });

    document.getElementById('vendor-name').disabled = true;
    document.getElementById('vendor-number').disabled = true;
    document.getElementById('vendor-address').disabled = true;
    document.getElementById('vendor-description').disabled = true;

    const instagramLink = instagramInput.value;
    instagramLinkText.setAttribute('data-link', instagramLink);
    instagramLinkText.textContent = 'Instagram';

    const tiktokLink = tiktokInput.value;
    tiktokLinkText.setAttribute('data-link', tiktokLink);
    tiktokLinkText.textContent = 'Tiktok';

    const facebookLink = facebookInput.value;
    facebookLinkText.setAttribute('data-link', facebookLink);
    facebookLinkText.textContent = 'Facebook';

    urlContainer.classList.add('hidden');
    buttonSosmed.classList.remove('hidden');

    document.querySelector('.edit-btn').hidden = false;
    document.querySelector('.select-image').hidden = true; // Hide Select Image button
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.cancel-btn').hidden = true;

    // Add code here to save data, for example, sending it to the server
}

function cancelEdit() {
    let isValid = true;

    const vendorName = document.getElementById('vendor-name').value.trim();
    const vendorNameError = document.getElementById('vendor-name-error');
    const vendorAddress = document.getElementById('vendor-address').value.trim();
    const vendorAddressError = document.getElementById('vendor-alamat-error');
    const vendorNumber = document.getElementById('vendor-number').value.trim();
    const vendorNumberError = document.getElementById('vendor-notelp-error');
    const instagramInput = document.getElementById('instagram-input').value.trim();
    const instagramError = document.getElementById('instagram-error');
    const tiktokInput = document.getElementById('tiktok-input').value.trim();
    const tiktokError = document.getElementById('tiktok-error');
    const facebookInput = document.getElementById('facebook-input').value.trim();
    const facebookError = document.getElementById('facebook-error');

    if (vendorName === '') {
        vendorNameError.textContent = '* Nama vendor tidak boleh kosong.';
        vendorNameError.style.display = 'block';
        vendorNameError.style.fontSize = '12px';
        vendorNameError.style.color = 'red';
        isValid = false;
    } else {
        vendorNameError.textContent = '';
        vendorNameError.style.display = 'none';
        vendorNameError.style.fontSize = '0';
    }

    if (vendorAddress === '') {
        vendorAddressError.textContent = '* Alamat vendor tidak boleh kosong.';
        vendorAddressError.style.fontSize = '12px';
        vendorAddressError.style.display = 'block';
        vendorAddressError.style.color = 'red';
        isValid = false;
    } else {
        vendorAddressError.textContent = '';
        vendorAddressError.style.display = 'none';
        vendorAddressError.style.fontSize = '0';
    }

    const phoneRegex = /^[0-9+]+$/;
    if (!vendorNumber) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor tidak boleh kosong.';
        vendorNumberError.style.display = 'block';
        vendorNumberError.style.fontSize = '12px';
        vendorNumberError.style.color = 'red';
    } else if (!vendorNumber.match(phoneRegex)) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor terdiri dari angka 0-9 dan "+".';
        vendorNumberError.style.display = 'block';
        vendorNumberError.style.fontSize = '12px';
        vendorNumberError.style.color = 'red';
        isValid = false;
    } else {
        vendorNumberError.textContent = '';
        vendorNumberError.style.display = 'none';
        vendorNumberError.style.fontSize = '0';
    }

    if (!isValid) {
        return;
    }

    document.getElementById('vendor-name').disabled = true;
    document.getElementById('vendor-number').disabled = true;
    document.getElementById('vendor-address').disabled = true;
    document.getElementById('vendor-description').disabled = true;

    urlContainer.classList.add('hidden');
    buttonSosmed.classList.remove('hidden');

    document.querySelector('.edit-btn').hidden = false;
    document.querySelector('.select-image').hidden = true; // Hide Select Image button
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.cancel-btn').hidden = true;
    // Add code here to reset form fields to their initial values if necessary
}

const fileInput = document.getElementById('file-input');
const gallery = document.getElementById('gallery');
const addPhotoContainer = document.getElementById('add-photo');
const modal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementsByClassName('close')[0];
let photoCount = 0;

fileInput.addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    if (photoCount >= 6) {
        return;
    }

    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            const photoContainer = document.createElement('div');
            photoContainer.classList.add('photo-container');
            photoContainer.style.border = '3px solid rgb(193, 193, 193)';
            photoContainer.appendChild(img);

            const viewBtn = document.createElement('button');
            viewBtn.innerHTML = 'Lihat Foto';
            viewBtn.classList.add('view-btn');
            viewBtn.onclick = function () {
                viewPhoto(e.target.result);
            };
            photoContainer.appendChild(viewBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Hapus';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.onclick = function () {
                deletePhoto(photoContainer);
            };
            photoContainer.appendChild(deleteBtn);

            gallery.insertBefore(photoContainer, addPhotoContainer);
            photoCount++;

            if (photoCount >= 6) {
                addPhotoContainer.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}

function deletePhoto(photoContainer) {
    gallery.removeChild(photoContainer);
    photoCount--;

    if (photoCount < 6) {
        addPhotoContainer.style.display = 'flex';
    }
}

function viewPhoto(src) {
    modal.style.display = "block";
    modalContent.innerHTML = '<img src="' + src + '">';
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function openPasswordPopup() {
    document.getElementById("passwordPopup").style.display = "block";
}

function closePasswordPopup() {
    document.getElementById("passwordPopup").style.display = "none";
}

function changePassword() {
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Kata sandi tidak cocok. Silakan coba lagi.");
        return;
    }

    // Lakukan panggilan AJAX ke server untuk mengganti kata sandi di database
    /*
    fetch('/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            newPassword: newPassword
        })
    }).then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Kata sandi berhasil diubah.");
            closePasswordPopup();
        } else {
            alert("Terjadi kesalahan. Silakan coba lagi.");
        }
    }).catch(error => {
        console.error('Error:', error);
    });
    */

    // Untuk sementara, hanya menampilkan pesan berhasil
    alert("Kata sandi berhasil diubah.");
    closePasswordPopup();
}

document.addEventListener("DOMContentLoaded", function () {
    // Popup Ubah Kata Sandi
    var changePasswordPopup = document.getElementById("changePopup");
    var changePasswordBtn = document.getElementById("change-password-btn");
    var cancelChangePasswordBtn = document.getElementById("cancel-change-password");
    // var closeChangePasswordBtn = changePasswordPopup.getElementsByClassName("close-btn")[0];

    function openChangePasswordPopup() {
        changePasswordPopup.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    function closeChangePasswordPopup() {
        changePasswordPopup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    changePasswordBtn.addEventListener("click", openChangePasswordPopup);
    cancelChangePasswordBtn.addEventListener("click", closeChangePasswordPopup);
    // closeChangePasswordBtn.addEventListener("click", closeChangePasswordPopup);

    window.addEventListener("click", function (event) {
        if (event.target == changePasswordPopup) {
            closeChangePasswordPopup();
        }
    });

    var popup = document.getElementById("myPopup");
    var deleteAccountBtn = document.getElementById("delete-account-btn");
    // var closeBtn = document.getElementsByClassName("close-btn")[0];
    var cancelDeleteBtn = document.getElementById("cancel-delete");

    // Fungsi untuk membuka popup
    function openPopup() {
        popup.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        popup.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    // Event listener untuk membuka popup saat tombol diklik
    deleteAccountBtn.addEventListener("click", openPopup);

    // // Event listener untuk menutup popup saat tombol close diklik
    // closeBtn.addEventListener("click", closePopup);

    // Event listener untuk menutup popup saat tombol cancel diklik
    cancelDeleteBtn.addEventListener("click", closePopup);

    // Event listener untuk menutup popup saat klik di luar konten popup
    window.addEventListener("click", function (event) {
        if (event.target == popup) {
            closePopup();
        }
    });

    var popupLogout = document.getElementById("logoutPopup");
    var logoutAccountBtn = document.getElementById("logout-btn");
    // var closeLogoutBtn = document.getElementsByClassName("close-btn")[0];
    var cancelLogoutBtn = document.getElementById("cancel-logout");

    // Fungsi untuk membuka popup
    function openPopup() {
        popupLogout.style.display = "block";
        document.body.classList.add("no-scroll");
    }

    // Fungsi untuk menutup popup
    function closePopup() {
        popupLogout.style.display = "none";
        document.body.classList.remove("no-scroll");
    }

    // Event listener untuk membuka popup saat tombol diklik
    logoutAccountBtn.addEventListener("click", openPopup);

    // // Event listener untuk menutup popup saat tombol close diklik
    // closeLogoutBtn.addEventListener("click", closePopup);

    // Event listener untuk menutup popup saat tombol cancel diklik
    cancelLogoutBtn.addEventListener("click", closePopup);

    // Event listener untuk menutup popup saat klik di luar konten popup
    window.addEventListener("click", function (event) {
        if (event.target == popupLogout) {
            closePopup();
        }
    });
});

// // Event listener untuk membuka popup keluar saat tombol diklik
// logoutBtn.addEventListener("click", openLogoutPopup);

// // Event listener untuk menutup popup keluar saat tombol close diklik
// closeLogoutBtn.addEventListener("click", closeLogoutPopup);

// // Event listener untuk menutup popup keluar saat tombol cancel diklik
// cancelLogoutBtn.addEventListener("click", closeLogoutPopup);

function deleteAccount() {
    // Lakukan panggilan AJAX ke server untuk menghapus akun di database
    /*
    fetch('/delete-account', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Akun berhasil dihapus.");
            closeDeletePopup();
            // Lakukan tindakan lain setelah akun dihapus, misalnya logout atau alihkan ke halaman lain
        } else {
            alert("Terjadi kesalahan. Silakan coba lagi.");
        }
    }).catch(error => {
        console.error('Error:', error);
    });
    */

    // Untuk sementara, hanya menampilkan pesan berhasil
    alert("Akun berhasil dihapus.");
    closeDeletePopup();
}

