//Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe mostrar los resultados de las 4 operaciones matemáticas básicas con tales números.

let primerNumero = parseInt(prompt("Ingrese un número entero"));
let segundoNumero = parseInt(prompt("Ingrese otro número entero"));

console.log(`La suma de sus números es ${primerNumero + segundoNumero}, la resta es ${primerNumero - segundoNumero}, la multiplicación es ${primerNumero * segundoNumero} y la división es ${primerNumero / segundoNumero} `);

console.log(`${primerNumero} + ${segundoNumero} = ${primerNumero + segundoNumero}`);
console.log(`${primerNumero} - ${segundoNumero} = ${primerNumero - segundoNumero}`);
console.log(`${primerNumero} * ${segundoNumero} = ${primerNumero * segundoNumero}`);
console.log(`${primerNumero} / ${segundoNumero} = ${primerNumero / segundoNumero}`);