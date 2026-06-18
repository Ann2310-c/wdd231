const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

const modal = document.getElementById("flowerModal");

// Cerrar modal al hacer clic fuera
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
  modal.close();
  }
});

let allFlowers = [];

// Mostrar flores
function displayFlowers(flowers) {
  const container = document.querySelector("#flowers");
  container.innerHTML = "";

  flowers.forEach((flor) => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
    <img
      src="images/${flor.image}"
      alt="${flor.name}"
      loading="lazy"
      width="200"
      height="200"
    >
    <h2>${flor.name}</h2>
    <p><strong>Price:</strong> $${flor.price}</p>
    <p><strong>Category:</strong> ${flor.category}</p>
    <button class="detailsBtn">View Details</button>
    `; 
    container.appendChild(card);

    // Modal
    card.querySelector(".detailsBtn").addEventListener("click", () => {
      document.getElementById("modalName").textContent =
        flor.name;

      document.getElementById("modalDescription").textContent =
        flor.description;

      document.getElementById("modalPrice").textContent =
        `$${flor.price}`;

      document.getElementById("modalColor").textContent =
        flor.color;

      document.getElementById("modalAvailability").textContent =
        flor.availability;

      modal.showModal();
    });
  });
}

// Cargar JSON
async function loadFlowers() {
  try {
  const response = await fetch("data/flowers.json");

  if (!response.ok) {
    throw new Error("Could not load flowers.json");
  }
  const flowers = await response.json();
  allFlowers = flowers;
  displayFlowers(flowers);

  // Filtros
  document
  .querySelectorAll(".filters button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      if (category === "all") {
        displayFlowers(allFlowers);
      } else {
        const filtered = allFlowers.filter(
          (flower) => flower.category === category
        );
        displayFlowers(filtered);
      }

      localStorage.setItem(
        "favoriteCategory",
        category
      );
    });
  });

  } catch (error) {
    console.error(
    "Error loading flowers:",
    error
    );
  }
}

// Cerrar modal
document
.getElementById("closeModal")
.addEventListener("click", () => {
  modal.close();
});

// Footer
document.getElementById("year").textContent =
new Date().getFullYear();

const lastModified =
document.getElementById("lastModified");

if (lastModified) {
  lastModified.textContent =
  document.lastModified;
}

loadFlowers();
