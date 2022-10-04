let opcionesUser = prompt(`
Elija una opcion:
1: Libros
2: Peliculas
3: Juegos
`);

switch (opcionesUser){
    case "1":
        console.log("Principito");
        break;
    case "2":
        console.log("Matrix");
        break;
    case "3":
        console.log("LOL");
        break;
    default:
        console.log("Opcion no valida");
        break;
}


// While
// validacion
 let numero =0;

 while(numero<= 10){
    console.log(numero);
    numero++;
 }
 console.log("FIN "+ numero);
