// Realizá un programa que permita al usuario ingresar tres números enteros. La computadora debe indicar cuál de ellos es el mayor.

let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));
let tercerNumero = parseInt(prompt("Ingrese el tercer número"));

if (primerNumero > segundoNumero && tercerNumero) {
	console.log(`El ${primerNumero} es mayor`);
} if (segundoNumero > primerNumero && tercerNumero) {
	console.log(`El ${segundoNumero} es mayor`)
} if (tercerNumero > primerNumero && segundoNumero) {
	console.log(`El ${tercerNumero} es mayor`);
	}