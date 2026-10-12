document.addEventListener("DOMContentLoaded", () => {
  // INTERACCIÓN 1: Menú móvil accesible
  const btnMenu = document.getElementById("btn-menu");
  const menuNav = document.getElementById("menu-navegacion");

  if (btnMenu && menuNav) {
    btnMenu.addEventListener("click", () => {
      const estaVisible = menuNav.classList.toggle("menu-visible");
      menuNav.classList.toggle("menu-oculto", !estaVisible);
      btnMenu.setAttribute("aria-expanded", String(estaVisible));
    });
  }

  // INTERACCIÓN 2: Validación interactiva del formulario
  const formulario = document.getElementById("formulario-contacto");
  const mensajeEstado = document.getElementById("mensaje-estado");

  if (formulario && mensajeEstado) {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre === "" || correo === "" || mensaje === "") {
        mensajeEstado.textContent = "Por favor, completa todos los campos obligatorios.";
        mensajeEstado.style.color = "#dc3545";
        return;
      }

      mensajeEstado.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido registrado exitosamente.`;
      mensajeEstado.style.color = "#28a745";
      formulario.reset();
    });
  }
});