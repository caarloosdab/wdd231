// Visitor message
function showVisitorMessage() {
  const messageContainer = document.getElementById("visitor-message");
  const currentVisit = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  let message = "";

  if (!lastVisit) {
    message = "👋 Welcome! Let us know if you have any questions.";
  } else {
    const daysBetween = Math.floor((currentVisit - Number(lastVisit)) / (1000 * 60 * 60 * 24));
    if (daysBetween < 1) {
      message = "👋 Back so soon! Awesome!";
    } else if (daysBetween === 1) {
      message = "⏳ You last visited 1 day ago.";
    } else {
      message = `⏳ You last visited ${daysBetween} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", currentVisit);
  messageContainer.textContent = message;
}

// Build attraction cards
async function loadAttractions() {
  try {
    const response = await fetch("data/attractions.json");
    if (!response.ok) throw new Error("Failed to load attractions data");

    const data = await response.json();
    const container = document.getElementById("attraction-cards");

    data.attractions.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("attraction-card");

      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure>
          <img src="images/${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
        </figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button class="learn-more">Learn More</button>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading attraction cards:", error);
  }
}

showVisitorMessage();
loadAttractions();
