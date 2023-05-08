//Realizá un programa que permita al usuario ingresar tres números. La computadora debe mostrarlos ordenados de menor a mayor.2 Para resolver este ejercicio debés contemplar todas las combinaciones posibles en el orden de los números.

let respuesta;
let primero = parseInt(prompt("Ingrese el primer número"));
let segundo = parseInt(prompt("Ingrese el segundo número"));
let tercero = parseInt(prompt("Ingrese el tercer número"));

if (primero<segundo && primero<tercero && segundo<tercero) {
	respuesta = (`${primero}, ${segundo}, ${tercero}`);
}   else if (segundo<primero && segundo<tercero && primero<tercero) {
	respuesta = (`${segundo}, ${primero}, ${tercero}`);
}   else if (tercero<primero && tercero<segundo && primero<segundo) {
	respuesta = (`${tercero}, ${primero}, ${segundo}`);
}	else if (tercero<primero && tercero<segundo && segundo<primero) {
	respuesta = (`${tercero}, ${segundo}, ${primero}`);
}   else if (primero<segundo && primero<tercero && tercero<segundo) {
	respuesta = (`${primero}, ${tercero}, ${segundo}`);
}	else if (segundo<tercero && segundo<primero && tercero<primero) {
	respuesta = (`${segundo}, ${tercero}, ${primero}`);
}

console.log(`${respuesta}`);