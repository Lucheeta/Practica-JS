// Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe indicar cuál de ellos es el mayor.

let respuesta;
let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
let tercerNumero = parseInt(prompt("Ingrese el tercer número"));

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
	respuesta = (`${primerNumero}`);
} if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
	respuesta = (`${segundoNumero}`);
} if (tercerNumero > primerNumero && tercerNumero > segundoNumero) {
	respuesta = (`${tercerNumero}`);
	}
	
console.log(`El ${respuesta} es mayor`);