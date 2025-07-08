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

function showWarning(input, message) {
  let warning = input.parentNode.querySelector('.warning-message');
  if (!warning) {
    warning = document.createElement('div');
    warning.className = 'warning-message';
    warning.style.color = 'yellow';
    warning.style.fontSize = '0.9rem';
    warning.style.marginTop = '0.25rem';
    input.parentNode.appendChild(warning);
  }
  warning.textContent = message;
}

function clearWarning(input) {
  const warning = input.parentNode.querySelector('.warning-message');
  if (warning) {
    warning.remove();
  }
}

document.getElementById("formularioContacto").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita el envío real del formulario

  let valid = true;

  const nombres = this.querySelector('#nombres');
  const apellidos = this.querySelector('#apellidos');
  const email = this.querySelector('#email');
  const telefono = this.querySelector('#telefono');
  const asunto = this.querySelector('#asunto');
  const pais = this.querySelector('#pais');
  const modeloTelefono = this.querySelector('#modeloTelefono');

  // Clear previous warnings
  clearWarning(nombres);
  clearWarning(apellidos);
  clearWarning(email);
  clearWarning(telefono);
  clearWarning(asunto);
  clearWarning(pais);
  clearWarning(modeloTelefono);

  if (!nombres.value.trim()) {
    showWarning(nombres, 'Por favor complete el campo Nombres.');
    valid = false;
  }
  if (!apellidos.value.trim()) {
    showWarning(apellidos, 'Por favor complete el campo Apellidos.');
    valid = false;
  }
  if (!email.value.trim()) {
    showWarning(email, 'Por favor complete el campo Correo electrónico.');
    valid = false;
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      showWarning(email, 'Por favor, ingrese un correo electrónico válido.');
      valid = false;
    }
  }
  if (!telefono.value.trim()) {
    showWarning(telefono, 'Por favor complete el campo Teléfono.');
    valid = false;
  }
  if (!asunto.value.trim()) {
    showWarning(asunto, 'Por favor complete el campo Asunto.');
    valid = false;
  }
  if (!pais.value.trim()) {
    showWarning(pais, 'Por favor seleccione el País.');
    valid = false;
  }
  if (!modeloTelefono.value.trim()) {
    showWarning(modeloTelefono, 'Por favor complete el campo Modelo Telefono.');
    valid = false;
  }

  if (!valid) {
    return; 
  }

  // Muestra el mensaje de confirmación
  const mensaje = document.getElementById("mensajeEnviado");
  mensaje.style.display = "block";

  //  limpiar el formulario
  this.reset();

  // Ocultar mensaje después de 5 segundos
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 5000);
});
