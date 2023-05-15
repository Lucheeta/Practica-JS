const EDAD_MIN = 18;
let cantEdadesQueCumplen = 0; // Se pone cero porque hasta acá tengo cero edades que cumplen hasta que, si encuentro una nueva, cuento 1 en ese contador.
let edad = parseInt(prompt(`Ingrese una edad (0 para cortar)`)); // la defino por afuera para que la siguiente pregunta sea "otra edad". 

while(edad > 0) {
	
	if ( (edad % 2 != 0) && (edad >= 18) ) {
		cantEdadesQueCumplen++;
	}
	edad = parseInt(prompt(`Ingrese otra edad (0 para cortar)`)); // este lo saco del ciclo para que el primer número sea analizado primero.
}

console.log(`La cantidad de edades impares mayores que ${EDAD_MIN} es ${cantEdadesQueCumplen}`); //esto va fuera del ciclo porque lo quiero mostrar una vez.