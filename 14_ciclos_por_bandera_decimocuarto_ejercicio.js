// Realizá un programa que permita al usuario ingresar personas (para cada una, nombre y edad). La carga termina cuando en el nombre de la persona se ingresa un asterisco ('*'). La computadora debe indicar cómo se llama la persona más joven.

const EDAD_MAXIMA = 120;
let nombre, edad;
let minimo = 1500; //un número muy grande
let nombreMasJoven;

nombre = prompt(`Ingrese nombre`);
while(nombre != "*") {
    edad = parseInt(prompt(`Ingrese edad para ${nombre}`));
    // o aún mejor edad >= 0 || edad > EDAD_MAXIMA
    while ( !(edad > 0) && (edad <= EDAD_MAXIMA) )  {
        edad = parseInt(prompt(`ERROR. Ingrese edad para ${nombre}`));
    }
    if (edad < minimo) {
        minimo = edad;
        nombreMasJoven = nombre;
    }
    nombre = prompt(`Ingrese otro nombre`); // se ingresa de nuevo este prompt para que el ciclo vuelva a analizar, porque si no se hace un ciclo infinito con el primer nombre
}
if (nombreMasJoven != undefined) {
    console.log(`El más joven es ${nombreMasJoven} con ${minimo} años`);
} else {
    console.log("No se ingresó ninguna edad");
}