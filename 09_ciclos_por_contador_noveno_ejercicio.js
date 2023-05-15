//Realizá un programa que permita al usuario ingresar un número natural. La computadora debe mostrar el factorial1 del número. El factorial de un entero positivo n se define como el producto de todos los números enteros positivos desde 1 hasta n. Por ejemplo, el factorial de 5 se calcula como: 5! = 1x2x3x4x5 = 120.

let num = parseInt(prompt("Ingrese un número por encima de 0"));
let r = 1;

for(let i = num; i > 0; i--){
    r *= i;
}
console.log(r);