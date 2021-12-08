// Current Day and Time

let now = new Date();
let currentDay = now.getDay();
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

let week = [
  "Sunday",
  "Moday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let weekDay = week[currentDay];

let today = document.querySelector("#day-time");
today.innerHTML = `${weekDay}, ${currentHours}:${currentMinutes} `;

// ºC Button

function tempC(event) {
  let celsius = document.querySelector(".temp");
  celsius.innerHTML = "18ºC";
}

let celsiusBtn = document.querySelector(".c");
celsiusBtn.addEventListener("click", tempC);

celsiusBtn.click();

// ºF Button

function tempF(event) {
  let farenheight = document.querySelector(".temp");
  farenheight.innerHTML = "63ºF";
}

let farenheightBtn = document.querySelector(".f");
farenheightBtn.addEventListener("click", tempF);

// Search Input -> City Name

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  console.log(searchInput.value);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
