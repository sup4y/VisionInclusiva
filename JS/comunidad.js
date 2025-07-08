

const menuToggle = document.querySelector('.menu-toggle');
const menuHorizontal = document.querySelector('.menu-horizontal');

menuToggle.addEventListener('click', () => {
  menuHorizontal.classList.toggle('active');
  document.body.classList.toggle('overlay-active');
});

const menuLinks = document.querySelectorAll('.menu-horizontal li a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuHorizontal.classList.contains('active')) {
      menuHorizontal.classList.remove('active');
      document.body.classList.remove('overlay-active');
    }
  });
});

const submenuLinks = document.querySelectorAll('.menu-vertical li a');

submenuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) { 
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
      if (menuHorizontal.classList.contains('active')) {
        menuHorizontal.classList.remove('active');
        document.body.classList.remove('overlay-active');
      }
    }
  });
});

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const historiasContainer = document.querySelector('.historias-container');

const historias = Array.from(historiasContainer.querySelectorAll('.historia'));
let currentIndex = 0;

function showHistoria(index) {
  historias.forEach((historia, i) => {
    if (i === index) {
      historia.style.display = 'flex';
      historia.classList.add('flex');
    } else {
      historia.style.display = 'none';
      historia.classList.remove('flex');
    }
  });
}

showHistoria(currentIndex);

flechaIzquierda.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + historias.length) % historias.length;
  showHistoria(currentIndex);
});

flechaDerecha.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % historias.length;
  showHistoria(currentIndex);
});


