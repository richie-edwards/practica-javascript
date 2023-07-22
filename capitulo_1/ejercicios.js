/*
Resumen:
- bits: 
1           0       1
2^2=4       2^1=2    2^0=1
101 = 5
   
- typeof: saber tipo de data que se esta usando

- boolean: 
falso o verdadero
if(<boolean>){
    entro aqui se boolean es verdadero
}
0 es falso
if(0){
    // no va entrar porque 0 es falso
}

if([]){
    // no va entrar porque [] array esta vacio
}

- concatenate: unir resultado de variables, no sumar, pero unificar
- \n:^salto de lineo 
- logical: && (and), ||  (or) -> semejante a la tabla de verdad
F || F = F
V || F = V
F || V = V
V || V = V

F && F = F
V && F = F
F && V = F
V && V = V

- ternary
let hembra = falso;
let vestuario = hembra ? primerValor : segundoValor
vestuario es primerValor porque la pregunata resulto en ser verdader/true

let hembra = true;
let vestuario = hembra ? falda : pantalon
vestuario es falsa

- empty values (null, undefined)
- automatic type conversion


- == vs ===
==: comparasion no stricto
===: comparasion , per mas especifico/stricto


"5" == 5 (es verdadero porque llevo numero a string)
"5" === 5 (es falso porque es stricto y no trata de convertir )

*/

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
let edad = 5;
let restante = 20;
let resultado =  restante - edad;

if (edad >= 20 ){
    console.log("Es mayor de edad");
} 
else {
    console.log("Eres menor de edad");
}
if (edad <= 19){
    edad = restante - edad;
    console.log("Para ser mayor de edad te faltan: " + resultado + " años");
}
