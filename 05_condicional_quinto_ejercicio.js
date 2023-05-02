//Realizá un programa que permita al usuario ingresar su edad (entre 1 y 120 años) y su género ('F' para mujeres, 'M' para hombres). La computadora debe indicar si la persona está en edad de jubilarse. En caso de haber ingresado valores erróneos (edad fuera de rango o género inválido), informar tal situación. Las mujeres se jubilan con 60 años o más. Los hombres se jubilan con 65 años o más.

const MIN_EDAD = 1;
const MAX_EDAD = 120;

let edad = parseInt(prompt(`Ingresá tu edad (entre ${MIN_EDAD} y ${MAX_EDAD})`));
let genero = prompt("Ingresá tu género [M o F]");