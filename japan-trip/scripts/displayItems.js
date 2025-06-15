export function displayItems(data) {
  const container = document.querySelector('.cards');
  if (!container) return;

  data.slice(0, 15).forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <button class="details-btn" data-id="${item.id}">More Info</button>
    `;
    container.appendChild(card);
  });
}
