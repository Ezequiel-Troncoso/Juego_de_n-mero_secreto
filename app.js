(() => {
  const numeroMaximo = 10;
  let numeroSecreto;
  let intentos;
  const listaNumerosSorteados = [];

  const asignarTextoElemento = (elemento, texto) => {
    document.querySelector(elemento).innerHTML = texto;
  };

  const limpiarCaja = () => {
    document.querySelector("#valorUsuario").value = "";
  };

  const generarNumeroSecreto = () => {
    let numeroGenerado;
    do {
      numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  };

  const condicionesIniciales = () => {
    asignarTextoElemento("h1", "Juego del número secreto!");
    asignarTextoElemento("p", `Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
  };

  const verificarIntento = () => {
    const valorUsuarioElem = document.getElementById("valorUsuario");
    const numeroDeUsuario = parseInt(valorUsuarioElem.value);
    const mensajeElem = document.querySelector("p");

    if (numeroDeUsuario === numeroSecreto) {
      mensajeElem.innerHTML = `Acertaste el número en ${intentos} ${
        intentos === 1 ? "vez" : "veces"
      }`;
      document.getElementById("reiniciar").removeAttribute("disabled");
      const intentarBtn = document.getElementById("intentar");
      intentarBtn.setAttribute("disabled", "true");
      intentarBtn.classList.add("boton-deshabilitado");
    } else {
      mensajeElem.innerHTML =
        numeroDeUsuario > numeroSecreto
          ? "El número secreto es menor"
          : "El número secreto es mayor";
      intentos++;
      limpiarCaja();
    }
  };

  const reiniciarJuego = () => {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    const intentarBtn = document.getElementById("intentar");
    intentarBtn.removeAttribute("disabled");
    intentarBtn.classList.remove("boton-deshabilitado");
  };

  document.addEventListener("DOMContentLoaded", () => {
    condicionesIniciales();
    document
      .getElementById("intentar")
      .addEventListener("click", verificarIntento);
    document
      .getElementById("reiniciar")
      .addEventListener("click", reiniciarJuego);
  });
})();
