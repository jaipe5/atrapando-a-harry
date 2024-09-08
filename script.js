// Seleccionamos el ratón y la puntuación del HTML
const raton = document.getElementById('raton');
const puntuacion = document.getElementById('puntuacion');

let puntos = 0;

// Función para mover el ratón a una posición aleatoria
function moverRaton() {
    const zonaDeJuego = document.getElementById('zonaDeJuego');
    
    // Obtener el ancho y alto de la zona de juego
    const anchoZona = zonaDeJuego.offsetWidth;
    const altoZona = zonaDeJuego.offsetHeight;
    
    // Calcular una posición aleatoria para el ratón
    const nuevaPosicionX = Math.floor(Math.random() * (anchoZona - raton.offsetWidth));
    const nuevaPosicionY = Math.floor(Math.random() * (altoZona - raton.offsetHeight));

    // Mover el ratón a la nueva posición
    raton.style.left = nuevaPosicionX + 'px';
    raton.style.top = nuevaPosicionY + 'px';
}

// Evento para aumentar puntos cuando se hace clic en el ratón
raton.addEventListener('click', function() {
    puntos++; // Incrementar los puntos
    puntuacion.textContent = puntos; // Actualizar la puntuación en la pantalla
    moverRaton(); // Mover el ratón a una nueva posición
});

// Mover el ratón cada vez que se carga la página
window.onload = function() {
    moverRaton();
}
