const images = document.querySelectorAll('.image-container div');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].style.opacity = 0;
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000);
