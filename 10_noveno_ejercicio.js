//Realizá un programa que permita al usuario ingresar dos números enteros, que representan las medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el valor en grados del ángulo restante. Recordá que la suma de los ángulos interiores de todo triángulo es de 180 grados.

let primerAngulo = parseInt(prompt("Ingrese la medida del primer ángulo"));
let segundoAngulo = parseInt(prompt("Ingrese la medidad del segundo ángulo"));

console.log(`El ángulo restante mide ${180 - (primerAngulo + segundoAngulo)}º`);