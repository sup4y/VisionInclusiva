
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
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu after navigation
    if (menuHorizontal.classList.contains('active')) {
      menuHorizontal.classList.remove('active');
      document.body.classList.remove('overlay-active');
    }
  });
});


// Evento al enviar el formulario de contacto
document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real del formulario

  // Muestra el mensaje de confirmación
  const mensaje = document.getElementById("mensajeEnviado");
  mensaje.style.display = "block";

  // Opcional: limpiar el formulario
  this.reset();

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 5000);
});