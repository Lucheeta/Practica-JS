//Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres distintos para cierto alumno. La computadora debe mostrar la nota promedio.

let primeraNota = parseFloat(prompt("Ingrese la primera nota"));
let segundaNota = parseFloat(prompt("Ingrese la segunda nota"));
let terceraNota = parseFloat(prompt("Ingrese la tercera nota"));

console.log(`La nota promedio es ${(primeraNota + segundaNota + terceraNota) / 3}`)