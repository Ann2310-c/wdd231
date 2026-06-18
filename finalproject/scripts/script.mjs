const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

const flowersContainer = document.querySelector("#flowers");

async function getFlowers() {
  try {
    const response = await fetch("data/flowers.json");
    const data = await response.json();
    displayFlowers(data);
  } catch (error) {
    console.error("Error al cargar las flores:", error);
  }
}

function displayFlowers(flowers) {
  flowersContainer.innerHTML = "";
  flowers.forEach(flower => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="images/${flower.image}" alt="${flower.name}" loading="lazy">
      <h2>${flower.name}</h2>
      <p>${flower.category}</p>
      <p>$${flower.price}</p>
      <a href="#" class="details">Ver detalles</a>
    `;
    flowersContainer.appendChild(card);
  });
}

// Cambiar vista entre grid y list
document.getElementById("grid").addEventListener("click", () => {
  flowersContainer.classList.add("grid");
  flowersContainer.classList.remove("list");
});

document.getElementById("list").addEventListener("click", () => {
  flowersContainer.classList.add("list");
  flowersContainer.classList.remove("grid");
});
getFlowers();

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


