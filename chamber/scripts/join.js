const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// TIMESTAMP
document.getElementById("timestamp").value = new Date().toISOString();

// MODALS
const links = document.querySelectorAll("[data-modal]");
const dialogs = document.querySelectorAll("dialog");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const modal = document.getElementById(link.dataset.modal);
    modal.showModal();
  });
});

dialogs.forEach(dialog => {
  dialog.querySelector(".close").addEventListener("click", () => {
    dialog.close();
  });
});