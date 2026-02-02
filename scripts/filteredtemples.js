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




const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Salt Lake Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "https://c8.alamy.com/comp/PDCR5B/rome-italy-23062018-st-peters-cathedral-on-st-peters-square-in-vatican-PDCR5B.jpg"
  },
  {
    templeName: "Hong Kong China",
    location: "Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21000,
    imageUrl: "https://c8.alamy.com/comp/AN4A90/1996-hong-kong-peoples-republic-of-china-hong-kong-island-seen-from-AN4A90.jpg"
  }
];


createTempleCard(temples);

document.querySelector("#nonutah").addEventListener("click", (e) => {
  e.preventDefault();
  createTempleCard(temples.filter(t => !t.location.includes("Utah")));
});



function createTempleCard(filteredTemples) {
  const grid = document.querySelector(".res-grid");
  grid.innerHTML = "";

  filteredTemples.forEach(temple => {
    const card = document.createElement("section");

    const name = document.createElement("h2");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const area = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML= `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Temple`;
    img.loading = "lazy";

    card.append(name, location, dedicated, area, img);
    grid.appendChild(card);
  });
}