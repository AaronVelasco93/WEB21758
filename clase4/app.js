let numeroMaquina = Math.floor(Math.random()*(10 - 1)) + 1;
console.log(numeroMaquina)

let numeroUser = parseInt(prompt("Adivina el numero del 1 al 10"));

let vidas=3;
while(numeroMaquina !== numeroUser && vidas >1){
   
    if (numeroMaquina < numeroUser) {
        console.log("Es más bajo");
    } else {
        console.log("Es más alto");
    }

    vidas--;
    numeroUser = parseInt(prompt("Intentalo otra vez: Tus vidas son: "+ vidas));
}

if(numeroMaquina === numeroUser){
    console.log("Ganaste");

}else{

    console.log("Perdiste, El numero correcto era: "+ numeroMaquina);
}