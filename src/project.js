// Current Day and Time
let now = new Date();
let currentDay = now.getDay();
let currentHours = now.getHours();
if (currentHours < 10) {
  currentHours = `0${currentHours}`;
}
let currentMinutes = now.getMinutes();
if (currentMinutes < 10) {
  currentMinutes = `0${currentMinutes}`;
}
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
//Current City Button
function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let latitute = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "276a00f4760abde96568d09a2a8db99e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let currentCityBtn = document.querySelector("#current-city-btn");
currentCityBtn.addEventListener("click", getLocation);
// Search city
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  document.querySelector("h3").innerHTML = response.data.weather[0].main;
  document.querySelector(".temp").innerHTML = `${temperature}ºC `;
  let city = response.data.name;
  let country = response.data.sys.country;
  document.querySelector("h1").innerHTML = `${city}, ${country}`;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  celsiusTemperature = temperature;
}
function searchCity(city) {
  let apiKey = "276a00f4760abde96568d09a2a8db99e";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input");
  searchCity(city.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);





// ºC
function tempC(event) {
  let celsius = document.querySelector(".temp");
  let celsiusTemp = Math.round(celsiusTemperature);
  celsius.innerHTML = `${celsiusTemp} ºC`;
}
let celsiusBtn = document.querySelector(".c");
celsiusBtn.addEventListener("click", tempC);
// ºF
function tempF(event) {
  let farenheight = document.querySelector(".temp");
  let farenheightTemp = Math.round((celsiusTemperature * 9) / 5 + 32);
  farenheight.innerHTML = `${farenheightTemp} ºF`;
}
let farenheightBtn = document.querySelector(".f");
farenheightBtn.addEventListener("click", tempF);
let celsiusTemperature = null;

searchCity("Miami");
