const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=19.52&lon=-99.21&units=metric&appid=773ae0868087c5bad9f17ba6ef19ddde';

async function getWeatherForecast() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';

    // Filter data for entries at 12:00 PM
    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    filtered.slice(0, 3).forEach(item => {

      const day = new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' });
      const temp = item.main.temp.toFixed(1);
      const description = item.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${day}</h3>
        <img src="${icon}" alt="${description}">
        <p><strong>${temp}°C</strong></p>
        <p>${description}</p>
      `;

      forecastContainer.appendChild(card);
    });

  } catch (error) {
    console.error('Failed to load weather data:', error);
  }
}

getWeatherForecast();