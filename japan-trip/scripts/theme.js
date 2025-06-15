export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const current = localStorage.getItem('theme') || 'light';
  document.body.className = current;

  toggle?.addEventListener('click', () => {
    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  });
}
