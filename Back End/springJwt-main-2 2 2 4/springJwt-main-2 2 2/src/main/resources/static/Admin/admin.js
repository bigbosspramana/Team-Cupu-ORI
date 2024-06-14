document.addEventListener("DOMContentLoaded", function () {
    const lihatButtons = document.querySelectorAll(".btn-primary");
  
    // Function to update status color in table rows
    function updateStatusColor() {
      const rows = document.querySelectorAll("tbody tr");
      rows.forEach(row => {
        const paymentStatusCell = row.cells[3];
        const paymentStatus = paymentStatusCell.innerText;
  
        // Remove existing status classes
        paymentStatusCell.classList.remove("status-berhasil", "status-proses", "status-gagal");
  
        // Add class based on payment status
        if (paymentStatus === "Berhasil") {
          paymentStatusCell.classList.add("status-berhasil");
        } else if (paymentStatus === "Proses Pembayaran") {
          paymentStatusCell.classList.add("status-proses");
        } else if (paymentStatus === "Gagal") {
          paymentStatusCell.classList.add("status-gagal");
        }
      });
    }
  
    // Initial call to update status color when the page loads
    updateStatusColor();
  
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
  
        // Update status color in detail view
        const paymentStatusElement = document.getElementById("paymentStatus");
        paymentStatusElement.classList.remove("status-berhasil", "status-proses", "status-gagal");
  
        if (paymentStatus === "Berhasil") {
          paymentStatusElement.classList.add("status-berhasil");
        } else if (paymentStatus === "Proses Pembayaran") {
          paymentStatusElement.classList.add("status-proses");
        } else if (paymentStatus === "Gagal") {
          paymentStatusElement.classList.add("status-gagal");
        }
  
        document.getElementById("infoForm").style.display = "block";
        document.getElementById("infoFormOverlay").style.display = "block";
      });
    });
  });
  
  function closeForm() {
    document.getElementById("infoForm").style.display = "none";
    document.getElementById("infoFormOverlay").style.display = "none";
  }
  
