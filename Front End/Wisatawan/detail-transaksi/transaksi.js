document.addEventListener("DOMContentLoaded", function () {
    const lihatButtons = document.querySelectorAll(".btn-primary");

    lihatButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default link behavior

            const row = this.closest("tr");
            const orderId = row.cells[0].innerText;
            const orderDate = row.cells[1].innerText;
            const customerName = row.cells[2].innerText;
            const paymentStatus = row.cells[3].innerText;
            const paymentMethod = row.cells[4].innerText;

            document.getElementById("orderId").innerText = orderId;
            document.getElementById("orderDate").innerText = orderDate;
            document.getElementById("customerName").innerText = customerName;
            document.getElementById("paymentStatus").innerText = paymentStatus;
            document.getElementById("paymentMethod").innerText = paymentMethod;

            document.getElementById("infoForm").style.display = "block";
            document.getElementById("infoFormOverlay").style.display = "block";
        });
    });
});

function closeForm() {
    document.getElementById("infoForm").style.display = "none";
    document.getElementById("infoFormOverlay").style.display = "none";
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