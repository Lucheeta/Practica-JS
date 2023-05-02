//Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas.

let anchoTerreno = parseFloat(prompt("Ingrese el ancho del terreno"));
let largoTerreno = parseFloat(prompt("Ingrese el largo del terreno"));
let valorMetroCuadrado = parseFloat(prompt("Ingrese el valor del metro cuadrado"));

console.log(`El valor total del terreno es de ${(anchoTerreno * largoTerreno) * valorMetroCuadrado} pesos`);
console.log(`Se necesitan ${(anchoTerreno + largoTerreno) * 2 * 3} metros de alambre`)