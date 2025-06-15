const highlightsContainer = document.getElementById("highlights-container");

async function loadHighlights() {
  try {
    const response = await fetch("data/japan.json");
    if (!response.ok) throw new Error("Failed to fetch JSON data");
    
    const locations = await response.json();
    const selectedHighlights = getRandomItems(locations, 3);
    displayHighlights(selectedHighlights);
  } catch (error) {
    console.error("Error loading highlights:", error);
    highlightsContainer.innerHTML = "<p>Error loading highlights. Please try again later.</p>";
  }
}

function getRandomItems(arr, count) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displayHighlights(items) {
  highlightsContainer.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("highlight-card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <p>${item.description}</p>
    `;

    highlightsContainer.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".tip-slide");
  const nextBtn = document.getElementById("nextTip");
  const prevBtn = document.getElementById("prevTip");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex); // Initialize
});



document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("welcome-message");
  const text = document.getElementById("welcome-text");
  const close = document.querySelector(".close-button");

  let visitCount = localStorage.getItem("visit-count");

  if (!visitCount) {
    // First visit
    text.textContent = "Welcome to your first visit to our Dream Trip to Japan!";
    localStorage.setItem("visit-count", 1);
    modal.classList.add("show");
  } else {
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem("visit-count", visitCount);

    if (visitCount === 2) {
      text.textContent = "Welcome back! This is your second visit.";
      modal.classList.add("show");
    } else if (visitCount === 5) {
      text.textContent = "Hey there! You've visited 5 times—thanks for coming back!";
      modal.classList.add("show");
    }
  
  }

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  // Optional: Close when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});


loadHighlights();