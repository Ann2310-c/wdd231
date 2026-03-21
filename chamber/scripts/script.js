const container = document.querySelector("#members");
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// FETCH JSON
async function getMembers() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  displayMembers(data);
}

// DISPLAY
function displayMembers(members) {
  container.innerHTML = "";

  members.forEach(member => {
    const card = document.createElement("section");

    card.innerHTML = `
    <img src="images/${member.image}" alt="${member.name}">
    <h2>${member.name}</h2>
    <p>${member.address}</p>
    <p>${member.phone}</p>
    <a href="${member.website}" target="_blank">Website</a>`;

    container.appendChild(card);
  });
}

// TOGGLE
document.getElementById("grid").addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

document.getElementById("list").addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// RUN
getMembers();