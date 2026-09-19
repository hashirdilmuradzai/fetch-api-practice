apiKey = "66abf78bb83140e29a1150945261509";
const weather = document.querySelector("#weather");
const humidity = document.querySelector("#humidity");

async function weatherData(event) {
  try {
    event.preventDefault();

    const input = document.querySelector("input").value;

    const apiData = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input}`,
    );

    const data = await apiData.json();

    weather.innerHTML = `Temperature is: ${data.current.temp_c}`;
    humidity.innerHTML = `Humidity is: ${data.current.humidity}`;

    console.log(data.response);
  } catch (error) {
    console.log(error.response);
  }
}
