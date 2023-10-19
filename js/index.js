// Variables para llevar el seguimiento del cronómetro
let segundos = 0;
let minutos = 0;
let intervalo;

// Función para actualizar el cronómetro
function actualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    const segundosStr = segundos < 10 ? "0" + segundos : segundos;
    const minutosStr = minutos < 10 ? "0" + minutos : minutos;

    document.getElementById("cronometro").textContent = minutosStr + ":" + segundosStr;
}

// Iniciar el cronómetro
document.getElementById("iniciar").addEventListener("click", function () {
    if (!intervalo) {
        intervalo = setInterval(actualizarCronometro, 1000);
    }
});

// Detener el cronómetro
document.getElementById("detener").addEventListener("click", function () {
    clearInterval(intervalo);
    intervalo = null;
});

// Reiniciar el cronómetro
document.getElementById("reiniciar").addEventListener("click", function () {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    minutos = 0;
    document.getElementById("cronometro").textContent = "0:00";
});
