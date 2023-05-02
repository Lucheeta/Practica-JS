/* 
El usuario introduce su año de nacimiento y la computadora le dice cuál es su edad (aproximadamente)
*/

// parseInt(...) y parseFloat(...) permiten convertir cadenas a números, siempre que el usuario cargue un número, claro.

let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let anioActual = new Date().getFullYear(); //Año actual con JS, para que me sirva para este año y el año que viene. Es dinámico.

let edad = anioActual - anioDeNacimiento;

console.log("Su edad es " + edad + " o " + (edad-1) + " años"); //JS < 2015
console.log(`Su edad es ${edad} o ${edad - 1} años`); // Usando backsticks vamos a armar una sola cadena y la variable solamente va a ir con el formato ${} y ahí adentro vamos a poner el nombre de la variable. Es una versión más breve y menos propensa a errores. Templates literales - JS > 2015


