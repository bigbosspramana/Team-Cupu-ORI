document.addEventListener('DOMContentLoaded', async function() {
    try {
        const token = getCookie('tokenvend');
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
