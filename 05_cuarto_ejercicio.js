//Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal, asumiendo que trabaja todos los días hábiles y media jornada los sábados.

let valorHoraTrabajo = parseFloat(prompt("Ingrese el valor de la hora de trabajo"));
let horasTrabajadas = parseFloat(prompt("Ingrese cantidad de horas trabajadas"));

console.log(`El sueldo semanal es ${(valorHoraTrabajo * horasTrabajadas) * 5 + (4 * valorHoraTrabajo)}`);