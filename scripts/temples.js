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

// Responsive Hamburger Menu
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('header nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.toggle('show');
    menuBtn.classList.toggle('show');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.classList.remove('show');
    });
  });
}
