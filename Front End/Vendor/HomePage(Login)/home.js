const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkboxes);
checkboxes();

function checkboxes() {
    const triggerBottom = window.innerHeight / 7 * 4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    try {
        const token = getCookie('vendorToken');
        console.log('Token:', token);

        if (!token) {
            throw new Error('Token not found in cookies');
        }

        const email = sessionStorage.getItem('email');
        console.log('Email:', email);

        const response = await fetch(`http://localhost:8090/profile/vendor`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch user profile');
        }

        const userData = await response.json();
        console.log('User Data:', userData);

        updateProfile(userData); // Panggil fungsi untuk memperbarui UI profil

    } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data');
    }
});

function updateProfile(userData) {
    // Perbarui UI dengan userData
    const vendorNameInput = document.getElementById('vendor-name');
    const vendorAddressInput = document.getElementById('vendor-address');
    const vendorNumberInput = document.getElementById('vendor-number');
    const instagramInput = document.getElementById('instagram-input');
    const tiktokInput = document.getElementById('tiktok-input');
    const facebookInput = document.getElementById('facebook-input');
    const imgArea = document.querySelector('.img-area');
    const uploadText = document.querySelector('.img-area h3');

    vendorNameInput.value = userData.vendorName || '';
    vendorAddressInput.value = userData.vendorAddress || '';
    vendorNumberInput.value = userData.vendorNumber || '';
    instagramInput.value = userData.instagramLink || '';
    tiktokInput.value = userData.tiktokLink || '';
    facebookInput.value = userData.facebookLink || '';

    // Tampilkan gambar profil jika ada
    if (userData.profileImage) {
        const img = document.createElement('img');
        img.src = `http://localhost:8090/${userData.profileImage}`;
        imgArea.appendChild(img);
        imgArea.classList.add('active');
        uploadText.style.display = 'none';
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const uploadText = document.querySelector('.img-area h3');
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

selectImage.addEventListener('click', function () {
    inputFile.click();
});

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
        };
        reader.readAsDataURL(image);
    } else {
        alert("Ukuran gambar lebih dari 2MB");
    }
});

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

function editProfile() {
    document.getElementById('vendor-name').disabled = false;
    document.getElementById('vendor-number').disabled = false;
    document.getElementById('vendor-address').disabled = false;

    buttonSosmed.classList.add('hidden');
    urlContainer.classList.remove('hidden');

    document.querySelector('.edit-btn').hidden = true;
    document.querySelector('.select-image').hidden = false; // Tampilkan tombol Select Image
    document.querySelector('.save-btn').hidden = false;
    document.querySelector('.cancel-btn').hidden = false;
}

function saveProfile() {
    const vendorNameInput = document.getElementById('vendor-name');
    const vendorAddressInput = document.getElementById('vendor-address');
    const vendorNumberInput = document.getElementById('vendor-number');
    const instagramInput = document.getElementById('instagram-input');
    const tiktokInput = document.getElementById('tiktok-input');
    const facebookInput = document.getElementById('facebook-input');
    const imgArea = document.querySelector('.img-area');
    const uploadText = document.querySelector('.img-area h3');

    const vendorName = vendorNameInput.value.trim();
    const vendorAddress = vendorAddressInput.value.trim();
    const vendorNumber = vendorNumberInput.value.trim();
    const instagramLink = instagramInput.value.trim();
    const tiktokLink = tiktokInput.value.trim();
    const facebookLink = facebookInput.value.trim();

    // Validasi input sebelum menyimpan
    if (!validateInputs(vendorName, vendorAddress, vendorNumber, instagramLink, tiktokLink, facebookLink)) {
        return;
    }

    const formData = new FormData();
    formData.append('vendorName', vendorName);
    formData.append('vendorAddress', vendorAddress);
    formData.append('vendorNumber', vendorNumber);
    formData.append('instagramLink', instagramLink);
    formData.append('tiktokLink', tiktokLink);
    formData.append('facebookLink', facebookLink);

    const imageFile = inputFile.files[0];
    if (imageFile) {
        formData.append('profileImage', imageFile);
    }

    const token = getCookie('vendorToken');

    fetch(`http://localhost:8090/profile/vendor/${email}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update profile');
        }
        return response.json();
    })
    .then(data => {
        console.log('Profile updated successfully:', data);
        alert('Profile updated successfully');
        // Optional: You can redirect or perform any other action after successful update
    })
    .catch(error => {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
    });
}

function validateInputs(name, address, number, instagram, tiktok, facebook) {
    let isValid = true;
    const vendorNameError = document.getElementById('vendor-name-error');
    const vendorAddressError = document.getElementById('vendor-address-error');
    const vendorNumberError = document.getElementById('vendor-number-error');
    const instagramError = document.getElementById('instagram-error');
    const tiktokError = document.getElementById('tiktok-error');
    const facebookError = document.getElementById('facebook-error');

    vendorNameError.textContent = '';
    vendorAddressError.textContent = '';
    vendorNumberError.textContent = '';
    instagramError.textContent = '';
    tiktokError.textContent = '';
    facebookError.textContent = '';

    if (name === '') {
        vendorNameError.textContent = '* Nama vendor tidak boleh kosong.';
        isValid = false;
    }

    if (address === '') {
        vendorAddressError.textContent = '* Alamat vendor tidak boleh kosong.';
        isValid = false;
    }

    const phoneRegex = /^[0-9+]+$/;
    if (!number) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor tidak boleh kosong.';
        isValid = false;
    } else if (!number.match(phoneRegex)) {
        vendorNumberError.textContent = '* Nomor whatsapp vendor terdiri dari angka 0-9 dan "+".';
        isValid = false;
    }

    const instagramRegex = /^https?:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._-]+\/?$/;
    if (!instagram.match(instagramRegex)) {
        instagramError.textContent = '* Link URL Instagram harus berupa (https://instagram.com/[namaakunanda])';
        isValid = false;
    }

    const tiktokRegex = /^https?:\/\/(www\.)?tiktok\.com\/(@[a-zA-Z0-9._-]+|user\/[a-zA-Z0-9._-]+)\/?$/;
    if (!tiktok.match(tiktokRegex)) {
        tiktokError.textContent = '* Link URL TikTok harus berupa (https://tiktok.com/@namaakunanda)';
        isValid = false;
    }

    const facebookRegex = /^https?:\/\/(www\.)?facebook\.com\/[a-zA-Z0-9._-]+\/?$/;
    if (!facebook.match(facebookRegex)) {
        facebookError.textContent = '* Link URL Facebook harus berupa (https://facebook.com/[namaakunanda])';
        isValid = false;
    }

    return isValid;
}

function cancelEdit() {
    // Kembalikan ke mode non-editable
    document.getElementById('vendor-name').disabled = true;
    document.getElementById('vendor-number').disabled = true;
    document.getElementById('vendor-address').disabled = true;

    buttonSosmed.classList.remove('hidden');
    urlContainer.classList.add('hidden');

    document.querySelector('.edit-btn').hidden = false;
    document.querySelector('.select-image').hidden = true; // Sembunyikan tombol Select Image
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.cancel-btn').hidden = true;

    // Reset form ke kondisi awal jika perlu
    resetForm();
}

function resetForm() {
    // Kosongkan input
    const vendorNameInput = document.getElementById('vendor-name');
    const vendorAddressInput = document.getElementById('vendor-address');
    const vendorNumberInput = document.getElementById('vendor-number');
    const instagramInput = document.getElementById('instagram-input');
    const tiktokInput = document.getElementById('tiktok-input');
    const facebookInput = document.getElementById('facebook-input');
    const imgArea = document.querySelector('.img-area');
    const uploadText = document.querySelector('.img-area h3');

    vendorNameInput.value = '';
    vendorAddressInput.value = '';
    vendorNumberInput.value = '';
    instagramInput.value = '';
    tiktokInput.value = '';
    facebookInput.value = '';

    // Hapus gambar jika ada
    const img = imgArea.querySelector('img');
    if (img) {
        imgArea.removeChild(img);
        imgArea.classList.remove('active');
        uploadText.style.display = 'block';
    }
}

function deleteProfileImage() {
    const imgArea = document.querySelector('.img-area');
    const uploadText = document.querySelector('.img-area h3');

    const img = imgArea.querySelector('img');
    if (img) {
        imgArea.removeChild(img);
        imgArea.classList.remove('active');
        uploadText.style.display = 'block';
    }
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

