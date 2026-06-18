const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

// Timestamp oculto
document.getElementById("timestamp").value = new Date().toISOString();

// Validaciones simples
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!form.fname.value || !form.email.value || !form.phone.value) {
    alert("Por favor completa todos los campos obligatorios.");
    e.preventDefault();
  }
});


document.getElementById("lastModified").textContent =
document.lastModified;