// Menú hamburguesa
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

// Footer dinámico
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wayfinding: marcar enlace activo
const links = document.querySelectorAll("#navMenu a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Featured Flowers en index.html
async function loadFeaturedFlowers() {
  try {
    const response = await fetch("data/flowers.json");
    const flowers = await response.json();
    const container = document.querySelector("#featured-flowers");

    // Selecciona 3 flores al azar
    const featured = flowers.sort(() => 0.5 - Math.random()).slice(0, 3);

    featured.forEach(flor => {
      const card = document.createElement("section");
      card.classList.add("card");
      card.innerHTML = `
        <img src="images/${flor.image}" alt="${flor.name}" loading="lazy" width="200" height="200">
        <h3>${flor.name}</h3>
        <p><strong>Precio:</strong> $${flor.price}</p>
        <p><strong>Categoría:</strong> ${flor.category}</p>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error cargando featured flowers:", error);
  }
}

document.getElementById("lastModified").textContent =
document.lastModified;

loadFeaturedFlowers();
