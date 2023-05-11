/*Realizá un programa que permita al usuario ingresar dos números enteros num1 y num2, donde el primero siempre deberá ser menor o igual al segundo. La computadora debe mostrar la secuencia de números existentes entre ambos

A) Incluyéndolos;
B) Excluyéndolos.

let num1 = parseInt(prompt("Ingrese un número"));
let num2 = parseInt(prompt("Ingrese un número mayor o igual al anterior"));

while (num1 <= num2); {
	console.log(`El ciclo ascendente es ${num1++}`);
}


for (i = num1; i <= num2; i++); {
	console.log(`Primer ciclo inclusivo ${num1 <= num2}`);
} */

let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese otro numero: "));
        
if (num1 <= num2){
    for (let i = num1+1; i<num2; i++){    
console.log(`${i}`);

    }
        
}