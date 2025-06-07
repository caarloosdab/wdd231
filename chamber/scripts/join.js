document.getElementById("timestamp").value = new Date().toISOString();

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const modal = document.querySelector(link.getAttribute('href'));
      modal.showModal();
    });
  });