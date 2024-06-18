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

instagramButton.addEventListener('click', function() {
	const link = instagramLinkText.getAttribute('data-link');
	if (link) {
		window.open(link, '_blank');
	}
});

tiktokButton.addEventListener('click', function() {
	const link = tiktokLinkText.getAttribute('data-link');
	if (link) {
		window.open(link, '_blank');
	}
});

facebookButton.addEventListener('click', function() {
	const link = facebookLinkText.getAttribute('data-link');
	if (link) {
		window.open(link, '_blank');
	}
});

function editProfile() {
	document.getElementById('vendor-name').disabled = false;
	document.getElementById('vendor-number').disabled = false;
	document.getElementById('vendor-address').disabled = false;
	document.getElementById('vendor-city').disabled = false;
	document.getElementById('vendor-description').disabled = false;
	
	buttonSosmed.classList.add('hidden')
	urlContainer.classList.remove('hidden');

	document.querySelector('.edit-btn').hidden = true;
	document.querySelector('.save-btn').hidden = false;
	document.querySelector('.cancel-btn').hidden = false;
}

function saveProfile() {
	document.getElementById('vendor-name').disabled = true;
	document.getElementById('vendor-number').disabled = true;
	document.getElementById('vendor-address').disabled = true;
	document.getElementById('vendor-city').disabled = true;
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
	document.querySelector('.save-btn').hidden = true;
	document.querySelector('.cancel-btn').hidden = true;

	// Di sini Anda bisa menambahkan kode untuk menyimpan data, misalnya, mengirimkannya ke server
}

function cancelEdit() {
	document.getElementById('vendor-name').disabled = true;
	document.getElementById('vendor-number').disabled = true;
	document.getElementById('vendor-address').disabled = true;
	document.getElementById('vendor-city').disabled = true;
	document.getElementById('vendor-description').disabled = true;

	urlContainer.classList.add('hidden');
	buttonSosmed.classList.remove('hidden');

	document.querySelector('.edit-btn').hidden = false;
	document.querySelector('.save-btn').hidden = true;
	document.querySelector('.cancel-btn').hidden = true;

	// Di sini Anda bisa menambahkan kode untuk mereset bidang form ke nilai awalnya jika diperlukan
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