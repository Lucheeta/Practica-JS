// Realizá un programa que permita al usuario ingresar la cantidad de inscriptos a una conferencia y la cantidad de asientos disponibles del auditorio. La computadora debe indicar si alcanzan los asientos, en caso contrario, indicar cuántos faltan para que todos los inscriptos puedan sentarse.

let inscriptos = parseInt(prompt("¿Cuántos inscriptos hay?"));
let asientosDisponibles = parseInt(prompt("¿Cuántos asientos hay disponibles?"));

if (inscriptos <= asientosDisponibles) {
	console.log("Alcanzan los asientos");
} else {
	console.log(`Faltan ${inscriptos - asientosDisponibles} asientos`);
}

console.log("Muchas gracias");