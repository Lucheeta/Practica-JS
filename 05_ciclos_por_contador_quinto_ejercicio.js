//5) Realizá un programa que permita al usuario ingresar 5 edades. La computadora debe indicar cuántas edades fueron valores impares mayores que 18.

const EDAD_MIN = 18;
let cantEdades = 5;
let cantEdadesQueCumplen = 0; // Se pone cero porque hasta acá tengo cero edades que cumplen hasta que, si encuentro una nueva, cuento 1 en ese contador.
let edad; //defino la variable pero recién le doy el primer valor en el ciclo for

for (let cont = 1; cont <= cantEdades; cont++) {
	edad = parseInt(prompt(`Ingrese la edad Nº ${cont}`));
	if ( (edad % 2 != 0) && (edad >= 18) ) {
		cantEdadesQueCumplen++;
	}
}

console.log(`La cantidad de edades impares mayores que ${EDAD_MIN} es ${cantEdadesQueCumplen}`); //esto va fuera del ciclo porque lo quiero mostrar una vez.