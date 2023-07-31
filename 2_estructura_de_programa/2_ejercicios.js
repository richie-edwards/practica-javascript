/* 1. 
* Para este ejercicio, crea una rama "mayor-de-edad-switch" que inicia desde la rama "dev".

Resoluciona el problem de "mayor de edad" del capitulo uno usando un switch.
Es mejor la solucion con un switch o como estuvo anteriorment? Porque?
*/

// tu codigo aqui
let edad = 25;
const restante = 18;


switch(edad <= 18 ){
	case (true):
	console.log(`Eres menor de edad para ser mayor te faltan: ${restante - edad} años`);
break;
case (false):
	console.log(`Eres mayor de edad tienes: ${edad} años`);
	break;
	}
/* 2.
* Para este ejercicio, crea una rama "mayor-de-edad-for" que inicia desde la rama "dev".
Crea un for loop donde el resultado sea lo siguiente:

A los 15 años te faltan 3 años para ser mayor de edad
A los 16 años te faltan 2 años para ser mayor de edad
A los 17 años te falta 1 año para ser mayor de edad
Ya eres mayor de edad porque tienes 18 años.

Fijate que en este caso la edad es 15 y cada año entre edad actual y edad mayor, escribimos al console
cuantos años faltan para ser mayor de edad. Si ya es mayor de edad, escribimos "Ya eres mayor de edad porque tienes 18 años."

Fijate que cuando falta un solo año el lenguague es correcto.
*/
// tu codigo aqui
let edad = 10;
let actualEdad = edad;
let edadMayor = 18;

for(actualEdad; actualEdad < edadMayor; actualEdad++) {    
    console.log(`A los ${actualEdad}: te faltan ${edadMayor - actualEdad} años para ser mayor de edad `);
}

if (actualEdad >= 18){
    console.log(`Ya eres mayor de edad tienes ${actualEdad} anos de edad`);
}
