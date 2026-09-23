apiKey = "66abf78bb83140e29a1150945261509";
const weather = document.querySelector("#weather");
const humidity = document.querySelector("#humidity");
const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error");
const weatherIcon = document.querySelector("#weather-icon");
const weatherCondition = document.querySelector("#weather-condition");

async function weatherData(event) {
  try {
    event.preventDefault();

    const input = document.querySelector("input").value;

    loading.innerHTML = `Loading...`;

    if (!input) {
      loading.innerHTML = "";
      weather.innerHTML = "";
      humidity.innerHTML = "";
      weatherIcon.src = "";
      weatherCondition.innerHTML = "";
      errorMessage.innerHTML = `Please enter city name`;
      return;
    }

    const apiData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`,
    );

    const apiData2 = await apiData.json();

    if (apiData2.error) {
      throw new Error(apiData2.error.message);
    }

    console.log(apiData2);

    loading.innerHTML = "";
    errorMessage.innerHTML = "";
    weather.innerHTML = `Temperature is: ${apiData2.current.temp_c}`;
    humidity.innerHTML = `Humidity is: ${apiData2.current.humidity}`;
    weatherIcon.src = `${apiData2.current.condition.icon}`;
    weatherCondition.innerHTML = `${apiData2.current.condition.text}`;
  } catch (error) {
    loading.innerHTML = "";
    weather.innerHTML = "";
    humidity.innerHTML = "";
    weatherIcon.src = "";
    weatherCondition.innerHTML = "";

    errorMessage.innerHTML = `${error.message}`;
  }
}
