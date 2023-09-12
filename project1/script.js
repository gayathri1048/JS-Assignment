const apiKey = '75bee0f0ec3182f29ee7f49c347f0a58'; // Replace with your provided API key
const weatherDataContainer = document.querySelector('.weather-data');
const loadingMessage = document.querySelector('.weather-data p');
async function fetchWeatherInformation() {
  try {
    loadingMessage.textContent = 'Loading...';
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kadapa&appid=${apiKey}&units=metric`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch weather data (${response.status} ${response.statusText})`);
    }
    const info = await res.json();
    const cityName = info.name;
    const temperature = info.main.temp;
    const description = info.weather[0].description;

    const weatherHTML = `
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Description: ${description}</p>
    `;

    weatherDataContainer.innerHTML = weatherHTML;
  } catch (error) {
    console.error('Error:', error.message);
    loadingMessage.textContent = error.message;
  }
}
window.addEventListener('load', fetchWeatherInformation);






