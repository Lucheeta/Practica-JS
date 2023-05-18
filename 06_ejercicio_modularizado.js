//Es el mismo ejercicio 6 de ciclos pero modularizado. Simplifica el código, es de mejor calidad al usar funciones. 

function leerEnteroPositivo(mensaje) {
	let num = parseInt(prompt(mensaje));
	while (num <= 0) {
		num = parseFloat(prompt(`ERROR. ${mensaje}`));
	}
	return num;
}

let venta;
let cant = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));
let acu = 0; // un acumulador es una variable, por eso la tengo que declarar. lo inicializo en cero porque no tengo aún ningún monto de venta


for (let cont = 1; cont <= cant; cont++) {
	venta = leerEnteroPositivo(`Ingrese la venta Nº ${cont}`);
	acu = acu + venta; // acu += venta 
	console.log(`Acu: ${acu}`); // esto puede no estar, es para ir viendo cuánto da el acumulado
}

console.log(`El total de las ventas es ${acu}`); 