//Realizá un programa que permita al usuario ingresar un número entero cant. Acto seguido, que permita ingresar cant números reales correspondientes a las ventas realizadas por cierto vendedor. La computadora debe mostrar el total de las ventas. LO REHAGO CON CICLOS POR BANDERA.

let venta;
let cant = parseInt(prompt(`¿Cuántas ventas vas a ingresar?`));
let acu = 0; // un acumulador es una variable, por eso la tengo que declarar. lo inicializo en cero porque no tengo aún ningún monto de venta


for (let cont = 1; cont <= cant; cont++) {
	venta = parseFloat(prompt(`Ingrese la venta Nº ${cont}`));
	while(venta < 0) {
		venta = parseFloat(prompt(`ERROR. Ingrese la venta Nº ${cont}`));
	}
	acu = acu + venta; // acu += venta 
	console.log(`Acu: ${acu}`); // esto puede no estar, es para ir viendo cuánto da el acumulado
}

console.log(`El total de las ventas es ${acu}`); 