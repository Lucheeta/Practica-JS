//Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada uno y cuál es el monto del total aportado entre los tres.

let primerInversor = prompt("Ingrese el nombre del primer inversor");
let montoPrimerInversor = parseInt(prompt("Ingrese el monto aportado por el primer inversor"));
let segundoInversor = prompt("Ingrese el nombre del segundo inversor");
let montoSegundoInversor = parseInt(prompt("Ingrese el monto aportado por el segundo inversor"));
let tercerInversor = prompt("Ingrese el nombre del tercer inversor");
let montoTercerInversor = parseInt(prompt("Ingrese el monto aportado por el tercer inversor"));
let montoTotal = montoPrimerInversor + montoSegundoInversor + montoTercerInversor

console.log(`El monto total de la inversión es ${montoTotal}`);
console.log(`El porcentaje del total aportado por ${primerInversor} es ${montoPrimerInversor * 100/montoTotal}%`);
console.log(`El porcentaje del total aportado por ${segundoInversor} es ${montoSegundoInversor * 100/montoTotal}%`);
console.log(`El porcentaje del total aportado por ${tercerInversor} es ${montoTercerInversor * 100/montoTotal}%`);