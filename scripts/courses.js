const buttons = document.querySelectorAll('.filter-btn');
const courses = document.querySelectorAll('.course');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');

    courses.forEach(course => {
      if (filter === 'all') {
        course.style.display = 'block';
      } else if (course.classList.contains(filter)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  });
});