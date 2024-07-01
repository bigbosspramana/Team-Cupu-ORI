document.addEventListener('DOMContentLoaded', function() {
    // Fetch email from the database
    fetchEmail()
        .then(emailw => {
            if (emailw) {
                fetchProfile(emailw);
            } else {
                console.error('No email found');
            }
        })
        .catch(error => {
            console.error('Error fetching email:', error);
        });
});

function fetchEmail() {
    return fetch('/path/to/endpoint/for/email') // Update with the actual endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Assuming the email is returned in the 'email' field
            return data.email;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function fetchProfile(emailw) {
    fetch(`/profile/wisatawan/${emailw}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('wisatawan-name').value = data.name;
            document.getElementById('wisatawan-number').value = data.number;
            document.getElementById('wisatawan-address').value = data.address;
            document.getElementById('wisatawan-city').value = data.city;
            // Add more fields as needed
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})

function editProfile() {
    document.getElementById('wisatawan-name').disabled = false;
    document.getElementById('wisatawan-number').disabled = false;
    document.getElementById('wisatawan-address').disabled = false;
    document.getElementById('wisatawan-city').disabled = false;
    
    document.querySelector('.edit-btn').hidden = true;
    document.querySelector('.save-btn').hidden = false;
    document.querySelector('.cancel-btn').hidden = false;
	document.querySelector('.select-image').hidden = false; // Show Select Image button
  }
  
  function saveProfile() {
    document.getElementById('wisatawan-name').disabled = true;
    document.getElementById('wisatawan-number').disabled = true;
    document.getElementById('wisatawan-address').disabled = true;
    document.getElementById('wisatawan-city').disabled = true;
  
    document.querySelector('.edit-btn').hidden = false;
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.cancel-btn').hidden = true;
  
    // Tambahkan kode untuk menyimpan perubahan di sini, jika diperlukan.
  }
  
  function cancelEdit() {
    document.getElementById('wisatawan-name').disabled = true;
    document.getElementById('wisatawan-number').disabled = true;
    document.getElementById('wisatawan-address').disabled = true;
    document.getElementById('wisatawan-city').disabled = true;
  
    document.querySelector('.edit-btn').hidden = false;
    document.querySelector('.save-btn').hidden = true;
    document.querySelector('.cancel-btn').hidden = true;
  
    // Tambahkan kode untuk mereset perubahan di sini, jika diperlukan.
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
		reader.onload = function(e) {
			const img = document.createElement('img');
			img.src = e.target.result;
			const photoContainer = document.createElement('div');
			photoContainer.classList.add('photo-container');
			photoContainer.style.border = '3px solid rgb(193, 193, 193)';
			photoContainer.appendChild(img);

			const viewBtn = document.createElement('button');
			viewBtn.innerHTML = 'Lihat Foto';
			viewBtn.classList.add('view-btn');
			viewBtn.onclick = function() {
				viewPhoto(e.target.result);
			};
			photoContainer.appendChild(viewBtn);

			const deleteBtn = document.createElement('button');
			deleteBtn.innerHTML = 'Hapus';
			deleteBtn.classList.add('delete-btn');
			deleteBtn.onclick = function() {
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

closeModal.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

document.getElementById('home-page').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
	window.location.href = '../HomePage(Login)/homePage.html';
});

document.getElementById('transaksi').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../detail-transaksi/transaksi.html';
});

document.getElementById('pulau').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../Pulau/pulau.html';
});

document.getElementById('pantai').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../Pantai/pantai.html';
});

document.getElementById('gunung').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../gunung/gunung.html';
});

document.getElementById('profile').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../Profile-Wisatawan/profile.html';
});

document.getElementById('wisata').addEventListener('click', function() {
    // Replace 'index.html' with the URL of the home page
    window.location.href = '../wisata/wisata.html';
});