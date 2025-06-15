import { showModal } from './modal.js';

const container = document.getElementById('locations-container');
const select = document.getElementById('filter-select');
let allLocations = [];

// Create one location card with More Info button
function createLocationCard(location) {
  const card = document.createElement('div');
  card.classList.add('location-card');
  card.innerHTML = `
    <img src="${location.image}" alt="${location.title}" loading="lazy">
    <h3>${location.title}</h3>
    <p><strong>Location:</strong> ${location.location}</p>
    <p><strong>Type:</strong> ${location.type}</p>
    <button class="details-btn" data-id="${location.id}">More Info</button>
  `;
  return card;
}

// Display the given locations in the container
function displayLocations(locations) {
  container.innerHTML = '';

  if (locations.length === 0) {
    container.innerHTML = '<p>No locations found for this filter.</p>';
    return;
  }

  locations.forEach(loc => {
    const card = createLocationCard(loc);
    container.appendChild(card);
  });

  // Attach click event listeners to the new "More Info" buttons
  const buttons = container.querySelectorAll('.details-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.target.getAttribute('data-id');
      const selected = allLocations.find(loc => loc.id === id);
      if (selected) {
        showModal(selected);
      }
    });
  });
}

// Fetch all locations and initialize display & filter
async function fetchLocations() {
  try {
    const response = await fetch('./data/japan.json');  // adjust path if needed
    if (!response.ok) throw new Error('Failed to load data');

    allLocations = await response.json();

    // Show all locations initially
    displayLocations(allLocations);
  } catch (error) {
    container.innerHTML = `<p class="error">Error loading locations: ${error.message}</p>`;
    console.error(error);
  }
}

// Filter event listener
select.addEventListener('change', () => {
  const value = select.value;
  const filtered = value === 'all' ? allLocations : allLocations.filter(loc => loc.type === value);
  displayLocations(filtered);
});

// Initial fetch and render
fetchLocations();
