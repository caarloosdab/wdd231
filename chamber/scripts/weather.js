const weatherInfoSection = document.querySelector(".card:nth-of-type(2)"); // The second 'card' section in the container

// OpenWeatherMap API URL (using coordinates for Trier, Germany)
const weatherAPIURL = "https://api.openweathermap.org/data/2.5/weather?lat=19.52&lon=-99.21&units=metric&appid=773ae0868087c5bad9f17ba6ef19ddde"; 

// Fetch and update the weather information
async function getWeather() {
  try {
    const response = await fetch(weatherAPIURL);
    const data = await response.json();

    // Extract data from the response
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Select the elements in the Information section to update
    const tempElement = weatherInfoSection.querySelector("p");  // Current temperature element
    const descElement = weatherInfoSection.querySelector("p:nth-of-type(2)"); // Description element
    const iconElement = weatherInfoSection.querySelector("img"); // Weather icon element

    // Update the information section with the current weather
    tempElement.innerHTML = `Current Temperature: ${temperature}&deg;C`;  // Update temperature
    descElement.innerHTML = `Condition: ${description.charAt(0).toUpperCase() + description.slice(1)}`; // Capitalize description
    iconElement.src = `https://openweathermap.org/img/wn/${icon}.png`;  // Update icon source
    iconElement.alt = description;  // Set alt text to the weather condition
  } catch (error) {
    console.log("Error fetching weather data:", error);
  }
}

// Call the function to display the weather when the page loads
getWeather();
