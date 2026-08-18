// ===== Ejercicio 1: Tema y saludo dinámico =====
let temaActual = 'claro';
const botonTema = document.querySelector('#boton-tema');
const saludoElemento = document.querySelector('#saludo');

function cambiarTema() {
    document.body.classList.toggle('modo-oscuro');
    temaActual = temaActual === 'claro' ? 'oscuro' : 'claro';
    botonTema.textContent = temaActual === 'claro' ? '🌙 Modo oscuro' : '☀️ Modo claro';
}

function saludar() {
    const horaActual = new Date().getHours();
    
    if (horaActual >= 6 && horaActual < 12) {
        saludoElemento.textContent = 'Buenos días';
    } else if (horaActual >= 12 && horaActual < 20) {
        saludoElemento.textContent = 'Buenas tardes';
    } else {
        saludoElemento.textContent = 'Buenas noches';
    }
}

botonTema.addEventListener('click', cambiarTema);
saludar();