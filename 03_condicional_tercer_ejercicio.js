//Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe indicar cuál de ellos es el mayor.

let primerNumero = parseInt(prompt("Ingrese el primer número"));
let segundoNumero = parseInt(prompt("Ingrese el segundo número"));

if (primerNumero > segundoNumero) {
	console.log(`El ${primerNumero} es mayor`);
} else {
	console.log(`El ${segundoNumero} es mayor`);
	}