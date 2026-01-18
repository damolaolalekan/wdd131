
// Footer dynamic year & last modified

const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

if (yearSpan) {
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// Responsive Hamburger Menu
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('header nav');

// Check if elements exist
if (menuBtn && nav) {
  // Toggle menu on click
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Toggle class to show/hide nav
    nav.classList.toggle('show');

    // Toggle button symbol
    if (nav.classList.contains('show')) {
      menuBtn.textContent = '✕';
    } else {
      menuBtn.textContent = '≡'; 
    }
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        menuBtn.textContent = '≡';
      }
    });
  });
}
