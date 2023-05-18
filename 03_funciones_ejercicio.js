//imprimirSimbolo, que imprima por consola n veces un caracter en la misma línea. Tanto n como el caracter se reciben como parámetro.

function imprimirSimbolo(simbolo,cantidad) {
    for (let cont = 1 ; cont <= cantidad; cont++){
        console.log(`${simbolo}`);
    }
}