
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