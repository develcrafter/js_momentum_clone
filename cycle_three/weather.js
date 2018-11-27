const weather = document.querySelector(".js-weather");

const WEATHER_API_KEY = "f5e5aeb1c08e92c55e6d7cb0242c595e";
const COORDS_LS = "coords";

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  getWeather(latitude, longitude);

  const coordsObj = {
    latitude,
    longitude
  };

  saveCoords(coordsObj);
}

function handleGeoError() {
  console.log("I don't have permission to access your local inf.");
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function getWeather(lat, lon) {
  //   console.log(lon, lat);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(weatherJson) {
      const temp = weatherJson.main.temp;
      const location = weatherJson.name;

      weather.innerText = `${temp} at ${location}`;
    });
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS_LS);
  if (loadedCoords === null) {
    getCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
