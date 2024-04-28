async function fetchWeather() {
  const apiKey = 'dc348691bcb2d219ea209503ff9328de';
  const location = document.getElementById('location').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod && data.cod === '404') {
      throw new Error('Location Not Found');
    }

    let weatherImage;
    if (data.weather && data.weather.length > 0) {
      switch (data.weather[0].main.toLowerCase()) {
        case 'clear':
          weatherImage = 'images/clear.png';
          break;
        case 'clouds':
        case 'scattered clouds':
        case 'broken clouds':
        case 'overcast clouds':
          weatherImage = 'images/cloud.png';
          break;
        case 'rain':
        case 'drizzle':
        case 'thunderstorm':
          weatherImage = 'images/rain.png';
          break;
        case 'mist':
          weatherImage = 'images/mist.webp';
          break;
        case 'snow':
          weatherImage = 'images/snow.png';
          break;
        default:
          weatherImage = 'images/not-found.png';
          break;
      }
    } else {
      throw new Error('Weather data not available');
    }

    const weatherInfo = `
      <h2>Current Weather in ${data.name}</h2>
      <img src="${weatherImage}" alt="Weather Image">
      <p>Temperature: ${data.main.temp}°C🌡️</p>
      <p>Description: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%💧</p>`;
    document.getElementById('weather-container').innerHTML = weatherInfo;
  } catch (error) {
    const errorMessage = `<p>${error.message}</p>`;
    document.getElementById('weather-container').innerHTML = errorMessage;

    if (error.message === 'Location Not Found') {
      document.getElementById('weather-container').innerHTML += `<img src="images/not-found.png" alt="Location Not Found">`;
    }
  }
}
