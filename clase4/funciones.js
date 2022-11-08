//Funcion
function saludo (){
    console.log("Hola");

}
saludo();
/*
//Funcion con argumentos
function saludar(nombreUsuario){

    console.log("Bienvenido: "+nombreUsuario);
}

saludar("Aaron");
*/



//Funcion con retorno
function saludar(nombreUsuario){

    return "Bienvenido: "+ nombreUsuario;
}
console.log(saludar("Ignacio"));


//suma 

function suma (n1, n2){
return parseInt(n1)+ parseInt(n2);

}

let numeroUno = prompt("Ingresa el primer numero");
let numeroDos = prompt("Ingresa el segundo numero");

let resultado = suma(numeroUno,numeroDos);

console.log("El total es: "+ resultado);