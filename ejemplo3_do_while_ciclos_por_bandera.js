//el mismo ejercicio del ejemplo 2 pero con do while

let venta;
let cant = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));
let acu = 0; // un acumulador es una variable, por eso la tengo que declarar. lo inicializo en cero porque no tengo aún ningún monto de venta


for (let cont = 1; cont <= cant; cont++) {
	do {
		venta = parseFloat(prompt(`Ingrese la venta Nº ${cont}`));
	} while (venta < 0);
	acu = acu + venta; // acu += venta 
	console.log(`Acu: ${acu}`); // esto puede no estar, es para ir viendo cuánto da el acumulado
}

console.log(`El total de las ventas es ${acu}`); 