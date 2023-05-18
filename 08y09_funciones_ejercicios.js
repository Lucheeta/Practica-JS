//7) cantDivisores, que devuelva la cantidad de divisores que posea un número entero dado como parámetro.

// Voy a usar el ciclo for porque voy a tener que hacerlo varias veces con varios números. Va a arrancar desde 1 porque si no da error matemático

function cantDivisores(num) {
	if (num < 0) {
		num = num * (-1);
	}
	let contDivisores = 1;
	for (let i = 1; i <= num; i++) {    
		if (num % i == 0) {
			contDivisores++;
		}

    }
    return contDivisores;    
}

//8) esPrimo, que devuelva si un número entero dado como parámetro es o no primo.

function esPrimo(num) {
	return cantDivisores(num) == 2; 
}

//9) mostrarNPrimos, que muestre por la consola, separados por comas, los primeros n números primos. El valor de n se recibe como parámetro.

function mostrarNPrimos(n) {
	let cont = 1;
	let x = 2; // empieza desde el 2 porque el 1 es coprimo
	while (cont <= n) {
		if (esPrimo(x)) {
			console.log(x);
			cont++;
		}
		x++;
	}
}