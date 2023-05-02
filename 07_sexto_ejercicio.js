//Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000 más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo mensual del vendedor y mostrarlo.

let valorArticuloA = parseFloat(prompt("Ingrese el valor del artículo A"));
let cantidadArticulosVendidos = parseInt(prompt("Ingrese la cantidad de artículos vendidos"));
const SUELDO_FIJO = 14000;

console.log(`El ingreso mensual del vendedor es ${SUELDO_FIJO + (valorArticuloA * cantidadArticulosVendidos)*16/100}`);
