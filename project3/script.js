const countryInfoContainer = document.querySelector('.country-info');
const loadingMessage = document.querySelector('.country-info p');
async function fetchAndDisplayCountryInfo() {
  try {
    loadingMessage.textContent = 'Loading...';
    const res = await fetch('https://restcountries.com/v3/all');

    if (!res.ok) {
      throw new Error('Failed to fetch country data');
    }
    const info = await res.json();
    const randomIndex = Math.floor(Math.random() * info.length);
    const randomCountry = info[randomIndex];
    const countryName = randomCountry.name.common;
    const countryCapital = randomCountry.capital[0] || 'N/A';
    const countryPopulation = randomCountry.population.toLocaleString() || 'N/A';
    const countryFlagURL = randomCountry.flags.svg;
    const countryHTML = `
      <h2>${countryName}</h2>
      <p>Capital: ${countryCapital}</p>
      <p>Population: ${countryPopulation}</p>
      <img src="${countryFlagURL}" alt="${countryName} Flag" width="200">
    `;
    countryInfoContainer.innerHTML = countryHTML;
  } catch (error) {
    console.error('Error:', error);
    loadingMessage.textContent = 'Failed to fetch country data';
  }
}

window.addEventListener('load', fetchAndDisplayCountryInfo);
