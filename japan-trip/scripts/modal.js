export function showModal(item) {
  // Remove old modal if exists
  const oldModal = document.getElementById('location-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'location-modal';
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button" aria-label="Close modal">&times;</span>
      <h2>${item.title}</h2>
      <img src="${item.image}" alt="${item.title}">
      <p><strong>Location:</strong> ${item.location}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <p>${item.description}</p>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector('.close-button').addEventListener('click', () => modal.remove());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
}