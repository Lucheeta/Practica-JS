/*Realizá un programa que permita al usuario ingresar la edad y el sueldo de cierto empleado. La
computadora muestra el monto del aporte al sindicato que se debe descontar del salario del
empleado, según el siguiente cuadro:

Escala salarial Porcentaje a descontar
Menos de $20000 0.7%
Entre $20000 y $29999 1.4%
Entre $30000 y $39999 2.1%
$40000 o más 2.8%*/

let edadEmpleado = parseInt(prompt("Ingrese la edad del empleado"));
let sueldoEmpleado = parseInt(prompt("Ingrese el sueldo del empleado"));

if (sueldoEmpleado < 20000) {
    console.log(`El monto a descontar es ${sueldoEmpleado * 0.7/100}`);   
} if (sueldoEmpleado >= 20000 && sueldoEmpleado < 29999) {
    console.log(`El monto a descontar es ${sueldoEmpleado * 1.4/100}`);
    if (sueldoEmpleado >= 30000 && sueldoEmpleado < 39999);
    console.log(`El monto a descontar es ${sueldoEmpleado * 2.1/100}`);
} else {
    console.log(`El monto a descontar es ${sueldoEmpleado * 2.8/100}`);
}