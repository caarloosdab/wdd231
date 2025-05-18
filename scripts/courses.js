const buttons = document.querySelectorAll('.filter-btn');
const courses = document.querySelectorAll('.course');
const counter = document.getElementById('course-counter');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.getAttribute('data-filter');
    let visibleCount = 0;

    courses.forEach(course => {
      if (filter === 'all' || course.classList.contains(filter)) {
        course.style.display = 'block';
        visibleCount++;
      } else {
        course.style.display = 'none';
      }
    });

    // Update the counter
    counter.textContent = `Courses listed: ${visibleCount}`;
  });
});
