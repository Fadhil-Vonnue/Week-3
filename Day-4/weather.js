const newurl =
  "https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,weather_code,wind_speed_10m";
const weathercodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog ",
  48: "Depositing rime fog",
  51: "Drizzle: Light",
  53: "Drizzle:moderate",
  55: "Drizzle: dense intensity",
  56: "Freezing Drizzle: Light",
  57: "Freezing Drizzle: dense intensity",
  61: "Rain: Slight",
  63: "Rain:moderate",
  65: "Rain: heavy intensity",
  66: "Freezing Rain: Light",
  67: "Freezing Rain: heavy intensity",
  71: "Snow fall: Slight",
  73: "Snow fall: moderate",
  75: "Snow fall: heavy intensity",
  77: "Snow grains",
  80: "Rain showers: Slight",
  81: "Rain showers: moderate",
  82: "Rain showers: violent",
  85: "Snow showers: slight",
  86: "Snow showers: heavy",
  95: "Thunderstorm: Slight or moderate",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

async function fetchWeather(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error while fetching");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}
function updateWeather(searchurl) {
  const newdata = getSession();
  const city= document.querySelector(".search-but").value.trim()
  if (newdata !== null && newdata.city==city.toLowerCase()) {
    document.querySelector(".windspeed").textContent =
      `Windspeed - ${newdata.wind_speed_10m}`;
    document.querySelector(".temperature").textContent =
      ` ${newdata.temperature_2m}${newdata.current_units}`;
    document.querySelector(".weather-desc").textContent =
      ` ${weathercodes[newdata.weather_code]}`;
  } else {
    fetchWeather(searchurl).then(
      (data) => {
        document.querySelector(".windspeed").textContent =
          `Windspeed - ${data.current.wind_speed_10m}`;
        document.querySelector(".temperature").textContent =
          ` ${data.current.temperature_2m}${data.current_units.temperature_2m}`;
        document.querySelector(".weather-desc").textContent =
          ` ${weathercodes[data.current.weather_code]}`;
        setSession(data,city);
      },
      (reject) => {
        document.querySelector(".windspeed").textContent =
          "ERROR WHEN FETCHING";
        document.querySelector(".temperature").textContent =
          "ERROR WHEN FETCHING";
        document.querySelector(".temperature").style.fontSize = "12px";
        document.querySelector(".weather-desc").textContent =
          "ERROR WHEN FETCHING";
      },
    );
  }
}
function render(searchurl=newurl) {
  if (getSession() === null) {
    document.querySelector(".hero").classList.add("skeleton");
    document.querySelectorAll(".data-line").forEach((element) => {
      element.classList.add("skeleton");
    });
  }
  setTimeout(() => {
    updateWeather(searchurl);
    document.querySelector(".hero").classList.remove("skeleton");
    document.querySelectorAll(".data-line").forEach((element) => {
      element.classList.remove("skeleton");
    });
  }, 2000);
}
render();

function setSession(data,city) {
  const sessionObj = {
    wind_speed_10m: data.current.wind_speed_10m,
    temperature_2m: data.current.temperature_2m,
    weather_code: data.current.weather_code,
    current_units: data.current_units.temperature_2m,
    city: city.toLowerCase(),
    expire: Date.now() + 600000,
  };
  sessionStorage.setItem("key", JSON.stringify(sessionObj));
}
function getSession() {
  if (sessionStorage.getItem("key") !== null && sessionStorage.getItem("key").city===document.querySelector(".search-but").value.trim().toLowerCase()) {
    const data = JSON.parse(sessionStorage.getItem("key"));
    if (Date.now() < data.expire) {
      return data;
    } else {
      sessionStorage.removeItem("key");
      return null;
    }
  } else return null;
}

async function search(e) {
  const searchinput = e.target.previousElementSibling.value;
  const newsearch = `https://geocoding-api.open-meteo.com/v1/search?name=${searchinput}&count=1&language=en&format=json`;
  try {
    const response = await fetch(newsearch);
    if (!response.ok) {
      throw new Error("Error while fetching");
    }
    const data = await response.json();
    let searchurl=`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current=temperature_2m,weather_code,wind_speed_10m`
    render(searchurl)
  } catch (err) {
    return Promise.reject(err);
  }
}
