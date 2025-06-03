const toggleBtn = document.getElementById('toggleNewsBtn');
const newsItems = document.querySelectorAll('.news_main');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';

  if (isExpanded) {
    // Hide extra news
    newsItems.forEach((item, index) => {
      if (index >= 4) {
        item.style.display = 'none';
      }
    });
    toggleBtn.textContent = 'Show More ▼';
    toggleBtn.setAttribute('aria-expanded', 'false');
  } else {
    // Show all news
    newsItems.forEach(item => {
      item.style.display = 'flex';
    });
    toggleBtn.textContent = 'Show Less ▲';
    toggleBtn.setAttribute('aria-expanded', 'true');
  }
});

// Initialize on load: show only first 4 news
document.addEventListener('DOMContentLoaded', () => {
  newsItems.forEach((item, index) => {
    if (index >= 4) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });
  toggleBtn.textContent = 'Show More ▼';
  toggleBtn.setAttribute('aria-expanded', 'false');
});
