/* 
Dado un numero, representando la edad de alguien
escribe codigo que determina si esa persona es mayor
de edad. Si no es mayor de edad, calcula cuantos años le quedan para 
llegar a ser mayor de edad.

mayor de edad = mayor o igual 18
menor de edad = menor de 18 

let edad = 20
.... tu codigo aqui ....

*/
let edad = 14;
let mayorEdad = 18;

edad >= mayorEdad
  ? console.log("Es mayor de edad")
  : console.log(
      `Es menor de edad. Le faltan ${
        mayorEdad - edad
      } años para ser mayor de edad.`
    );

console.log();
