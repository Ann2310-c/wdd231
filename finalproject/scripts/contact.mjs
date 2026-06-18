const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

document.getElementById("timestamp").value = new Date().toISOString();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  if (!form.fname.value || !form.email.value || !form.phone.value) {
    alert("Please complete all required fields.");
    e.preventDefault();
  }
});

document.getElementById("lastModified").textContent =
document.lastModified;