//Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales, correspondientes a las estaturas de un equipo de jugadores de baloncesto (en metros). La computadora debe mostrar la estatura promedio.

let estaturas;
let cant = parseInt(prompt(`¿Cuántas alturas vas a ingresar?`));
let acu = 0; // un acumulador es una variable, por eso la tengo que declarar. lo inicializo en cero porque no tengo aún ningún monto de venta

for (let cont = 1; cont <= cant; cont++) {
	estaturas = parseFloat(prompt(`Ingrese la estatura Nº ${cont}`));
	acu = acu + estaturas; // acu += estaturas 

}

console.log(`El promedio de las estaturas es ${acu / cant}`); 