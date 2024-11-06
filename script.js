// Show and Hide Popup
function showPopup() {
  document.getElementById("popupForm").style.display = "block";
}

function closePopup() {
  document.getElementById("popupForm").style.display = "none";
}

// Form Validation and Button Animation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Semua kolom wajib diisi!");
    event.preventDefault();
  } else {
    alert("Formulir berhasil dikirim!");
    document.getElementById("submitBtn").classList.add("button-animate");
  }
});
