console.log("¡JavaScript vinculado correctamente en la Semana 2!");

// 1. Seleccionamos el botón de contacto del DOM usando su clase
const botonContactar = document.querySelector('.btn-primary');

// 2. Comprobamos por seguridad que el botón existe antes de añadir el evento
if (botonContactar) {
    // 3. Añadimos un escuchador de eventos ('click')
    botonContactar.addEventListener('click', function(evento) {
        // Prevenimos el comportamiento por defecto del enlace mailto por ahora
        evento.preventDefault();
        
        // Mostramos un aviso en consola y una alerta visual
        console.log("¡Se ha hecho clic en el botón de contacto!");
        alert("¡Gracias por contactar con Álvaro Navarrete! Próximamente formulario activo.");
    });
}