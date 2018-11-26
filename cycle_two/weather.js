const weather = document.querySelector(".js-weather");
const WEAHTER_API_KEY = "f5e5aeb1c08e92c55e6d7cb0242c595e";
const COORDS_LS = "coords";

function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEAHTER_API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(weatherJson) {
      const temp = weatherJson.main.temp;
      const place = weatherJson.name;

      weather.innerText = `${temp} at ${place}`;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coordsObj = {
    latitude,
    longitude
  };

  saveCoords(coordsObj);

  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location.");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
