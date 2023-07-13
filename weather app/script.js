const apikey = "995f3e4acf9fba47fb0fce1224714d1e";

const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

//! when the form is trigerred we call a function to get the data from API
const formEl = document.querySelector("form");

//!adding a event listener
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); //to prevent refreshing of page on submit
  let cityVal = cityInputEl.value; //to take out the value of input
  getWeatherData(cityVal);
});

const getWeatherData = async (cityVal) => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apikey}&units=metric`
    );

    //!handeling error
    if (!response.ok) {
      //agar response nhi aya
      throw new Error("Network response was not ok");
    }

    let data = await response.json();
    console.log(data);

    //!Storing the data
    let temperature = Math.round(data.main.temp);
    let discription = data.weather[0].description;
    let icon = data.weather[0].icon;
    let details = [
      `Feels like: ${Math.round(data.main.feels_like)}°C`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];
    console.log(details);

    weatherDataEl.querySelector(".icon").innerHTML = `<img
    src="http://openweathermap.org/img/wn/${icon}.png"
    alt="Weather icon"
    />`;

    weatherDataEl.querySelector(
      ".temperature"
    ).textContent = `${temperature}°C`;

    weatherDataEl.querySelector(".description").textContent = discription;

    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join(""); //to remove comma
  } catch (error) {
    console.log("error");
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    if (error) {
      weatherDataEl.querySelector(".description").style.color = "red";
    }
    weatherDataEl.querySelector(".description").textContent =
      "An error occured, Please try again later";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
};
