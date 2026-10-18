document.addEventListener("DOMContentLoaded", () => {
  // INTERACCIÓN 1: Menú móvil adaptable
  const btnMenu = document.getElementById("btn-menu");
  const menuNav = document.getElementById("menu-navegacion");

  if (btnMenu && menuNav) {
    btnMenu.addEventListener("click", () => {
      const estaAbierto = menuNav.classList.toggle("menu-visible");
      menuNav.classList.toggle("menu-oculto", !estaAbierto);
      btnMenu.setAttribute("aria-expanded", String(estaAbierto));
    });
  }

  // INTERACCIÓN 2: Validación accesible del formulario
  const formulario = document.getElementById("formulario-contacto");
  const mensajeEstado = document.getElementById("mensaje-estado");

  if (formulario && mensajeEstado) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !correo || !mensaje) {
        mensajeEstado.textContent = "Error: Por favor llena todos los campos antes de enviar.";
        mensajeEstado.style.color = "#dc3545";
        return;
      }

      mensajeEstado.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido enviado correctamente.`;
      mensajeEstado.style.color = "#198754";
      formulario.reset();
    });
  }
});