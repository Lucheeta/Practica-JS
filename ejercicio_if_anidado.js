// Realizar un programa que pida un número y la computadora indique si es positivo, negativo o cero.

let respuesta;
let num = parseInt(prompt("Ingresá un número"));


// FORMA 1
/*if (num > 0){
	respuesta = "positivo ";
} else {
	if (num < 0){
		respuesta = "negativo";
	} else {
		respuesta = "neutro";
	}
	
}

console.log(`El número ${num} es ${respuesta}`);*/


//FORMA 2 (más legible para que no se me vaya yendo todo hacia la derecha)

if (num > 0){
	respuesta = "positivo ";
} else if (num < 0) {
	respuesta = "negativo";
} else {
	respuesta = "neutro";
}

console.log(`El número ${num} es ${respuesta}`);