// T t Y y

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
console.log(numeroSecreto);

function asinarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroUsuario === numeroSecreto) {
        asinarTextoElemento("p", `Acertaste el numero en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if (numeroUsuario > numeroSecreto) {
            asinarTextoElemento("p", "El numero secreto es menor");
        }else{
            asinarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(listaNumerosSorteados.length == numeroMaximo) {
        asinarTextoElemento("p","Ya se sortearon todos los números posibles")
    
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado
        }
    }
    
}

function condicionesIniciales() {
    asinarTextoElemento("h1","Juego el numero secreto");
    asinarTextoElemento("p", `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();