/*
//while
let numero = 0;
while (numero <= 10) {
    console.log(numero);
    numero++; //numero = numero + 1;
}
console.log("FIN: " + numero);
*/

/*
//Paso 1
//
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {
    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}
*/
/*
//Paso 2
//Juego adivinar
let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
console.log(numeroMaquina);
let numeroUser = parseInt(prompt("Adivine número del 1 al 10"));

let vidas = 3;

while (numeroMaquina !== numeroUser && vidas > 1) {

  
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Vuelve a intentarlo, tus vidas: " + vidas));
}

if (numeroMaquina === numeroUser) {
    console.log("GANASTE");
} else {
    console.log("PERDISTE, el número era: " + numeroMaquina);
}
*/