const container = document.querySelector("#recipes-container");
const modal = document.querySelector("#recipeModal");

async function loadRecipes() {
  try {
    const response = await fetch("data/recipes.mjs");
    const text = await response.text();

    // convertir módulo a objeto
    const module = await import("../data/recipes.mjs");
    const recipes = module.recipes;

    displayRecipes(recipes);

  } catch (error) {
    console.error("Error:", error);
  }
}

function displayRecipes(recipes) {
  recipes.forEach(recipe => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h2>${recipe.name}</h2>
      <img src="images/${recipe.image}" loading="lazy" alt="${recipe.name}">
      <p>${recipe.category}</p>
      <p>${recipe.time}</p>
      <button>Learn More</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      modal.querySelector("h2").textContent = recipe.name;
      modal.querySelector("p").textContent = recipe.ingredients;

      modal.showModal();

      // LOCAL STORAGE
      localStorage.setItem("lastRecipe", recipe.name);
    });

    container.appendChild(card);
  });
}

document.querySelector("#closeModal").addEventListener("click", () => {
  modal.close();
});

loadRecipes();