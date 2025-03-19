// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (nombres.includes(nombre)) {
        alert("El nombre ya está en la lista.");
        return;
    }

    nombres.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Deben haber al menos 2 participantes.");
        return;
    }

    let amigosAsignados = [...nombres];
    let resultado = {};

    for (let i = 0; i < nombres.length; i++) {
        let posibles = amigosAsignados.filter((amigo) => amigo !== nombres[i]);

        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo. Intenta de nuevo.");
            return;
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado[nombres[i]] = elegido;

        amigosAsignados = amigosAsignados.filter((amigo) => amigo !== elegido);
    }

    mostrarResultados(resultado);
}

function mostrarResultados(resultado) {
    let listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = "";

    Object.keys(resultado).forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = `${nombre} → ${resultado[nombre]}`;
        listaResultados.appendChild(li);
    });
}

