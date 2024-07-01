function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

function showDetail(nama, lokasi, barang) {
    const modal = document.getElementById("detailModal");
    const detailText = document.getElementById("detailText");
  
    detailText.textContent = `Barang: ${nama}\nLokasi: ${lokasi}\nBarang yang Disediakan: ${barang}`;
    modal.style.display = "block";
  }
  
  function closeModal() {
    const modal = document.getElementById("detailModal");
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
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