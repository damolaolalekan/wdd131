// Responsive Hamburger Menu
const menuBtn = document.getElementById('menu');
const nav = document.querySelector('header nav');
const header = document.querySelector('header'); 

if (menuBtn && nav) {
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();

    nav.classList.toggle('show');
    menuBtn.classList.toggle('show');
    header.classList.toggle('menu-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      menuBtn.classList.remove('show');
      header.classList.remove('menu-open');
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth >= 640) {
    nav.classList.remove("show");
    menuBtn.classList.remove("show");
    header.classList.remove("menu-open");
  }
});