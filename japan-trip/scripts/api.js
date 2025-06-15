const apiUrl = "https://restcountries.com/v3.1/name/japan";

async function fetchJapanData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Failed to fetch country data");

    const data = await response.json();
    displayJapanData(data[0]); // Japan is first in array
  } catch (error) {
    console.error("Error loading API data:", error);
    document.getElementById("japan-api-data").innerHTML =
      "<p>Unable to load Japan facts at the moment.</p>";
  }
}

function displayJapanData(country) {
  const container = document.getElementById("japan-api-data");

  container.innerHTML = `
    <p><strong>Official Name:</strong> ${country.name.official}</p>
    <p><strong>Capital:</strong> ${country.capital[0]}</p>
    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
    <p><strong>Region:</strong> ${country.region}</p>
    <p><strong>Currency:</strong> ${Object.values(country.currencies)[0].name} (${Object.values(country.currencies)[0].symbol})</p>
    <img src="${country.flags.svg}" alt="Flag of Japan" width="150" loading="lazy">
  `;
}

fetchJapanData();
