const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

import { places } from "../data/discover.mjs";

const container = document.querySelector("#places");

//CARDS
places.forEach((place, index) => {
    const card = document.createElement("section");
    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;
    container.appendChild(card);
});

// LOCAL STORAGE
const message = document.querySelector("#visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
        message.textContent = "You last visited 1 day ago.";
    } else {
        message.textContent = `You last visited ${days} days ago.`;
    }
}

localStorage.setItem("lastVisit", now);

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("#places button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("More information coming soon!");
    });
});