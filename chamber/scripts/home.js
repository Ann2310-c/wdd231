const temp = document.querySelector("#temp");
const desc = document.querySelector("#desc");
const high = document.querySelector("#high");
const low = document.querySelector("#low");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const icon = document.querySelector("#weather-icon");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=2.44&lon=-76.61&units=imperial&appid=808b564578570840c8985b8355b31ed5";
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  temp.textContent = `${data.main.temp}°F`;
  desc.textContent = data.weather[0].description;

  high.textContent = `High: ${data.main.temp_max}°F`;
  low.textContent = `Low: ${data.main.temp_min}°F`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;

  const sunriseTime = new Date(data.sys.sunrise * 1000);
  const sunsetTime = new Date(data.sys.sunset * 1000);

  sunrise.textContent = `Sunrise: ${sunriseTime.toLocaleTimeString()}`;
  sunset.textContent = `Sunset: ${sunsetTime.toLocaleTimeString()}`;

  const iconCode = data.weather[0].icon;
  icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  icon.alt = data.weather[0].description;
}
getWeather();

// FORECAST
const forecast = document.querySelector("#forecast");
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=2.44&lon=-76.61&units=imperial&appid=808b564578570840c8985b8355b31ed5";

async function getForecast() {
  const response = await fetch(forecastUrl);
  const data = await response.json();
  console.log(data);

  const today = data.list[0].main.temp;
  const tomorrow = data.list[8].main.temp;
  const day3 = data.list[16].main.temp;

  forecast.innerHTML = `
    Today: ${today}°F <br>
    Tomorrow: ${tomorrow}°F <br>
    Day 3: ${day3}°F
    `;
}
getForecast();

// SPOTLIGHT
const spotlight = document.querySelector("#spotlight");

async function loadSpotlight() {
  const response = await fetch("data/members.json");
  const data = await response.json();
  const filtered = data.filter(m => m.membership >= 2);
  const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
  displaySpotlight(random);
}

function displaySpotlight(members) {
  spotlight.innerHTML = "";

  members.forEach(m => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${m.name}</h3>
      <p class="tagline">Business Tag Line</p>
      <hr>
      <div class="card-content">
        <div>
          <p>Email: info@email.com</p>
          <p>Phone: ${m.phone}</p>
          <p><a href="${m.website}" target="_blank">Visit</a></p>
        </div>
        <img src="images/${m.image}" alt="${m.name}">
      </div>
    `;

    spotlight.appendChild(card);
  });
}

loadSpotlight();