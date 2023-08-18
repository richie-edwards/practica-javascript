/* 1. Mínimo
El capítulo anterior introdujo la función estándar Math.min que devuelve su argumento más pequeño. 
Nosotros podemos construir algo como eso ahora. 
Escribe una función min que tome dos argumentos y retorne su mínimo.

Ejemplos:
console.log(min(0, 10));
→ 0
console.log(min(0, -10));
→ -10
*/


/* 2. Ejercicios Mentales
Sin correr el los codigos, escribe que seria la respuesta en cada situacion

A.

function(){
    let a = 10;
    let b = 20;
}
console.log(a + b)      //? Valor esperado?

B.
const doble = funcion(n){
    return n * 2
}
let n = 10

console.log(funcion(10))    // ?Valor esperdo?
console.log(n)              // ?Valor esperdo?




/* 2. RECURCION

Hemos visto que % (el operador de residuo) se puede usar para probar si un número es par o impar usando % 2 para ver si es divisible entre dos. Aquí hay otra manera de definir si un número entero positivo es par o impar:
    - Zero es par.
    - Uno es impar.
    - Para cualquier otro número N, su paridad es la misma que N - 2.

Define una función recursiva esPar que corresponda a esta descripción. La función debe aceptar un solo parámetro (un número entero, positivo) y devolver un Booleano.
Pruébalo con 50 y 75. Observa cómo se comporta con -1. Por qué? Puedes pensar en una forma de arreglar esto?

Ejemplos:
console.log(esPar(50));
    → true
console.log(esPar(75));
    → false
console.log(esPar(-1));
    → ??

*/

// ---------------- Tu codigo aqui. ----------------------


// ---------------- *************** ----------------------




/* 3. CONTEO DE FRIJOLES

Puedes obtener el N-ésimo carácter, o letra, de un string escribiendo "string"[N]. 
El valor devuelto será un string que contiene solo un carácter (por ejemplo, "f"). 
El primer carácter tiene posición cero, lo que hace que el último se encuentre en la posición string.length - 1. 
En otras palabras, un string de dos caracteres tiene una longitud de 2, y sus carácteres tendrán las posiciones 0 y 1.

Escribe una función "contarFs" que tome un string como su único argumento 
y devuelva un número que indica cuántos caracteres “F” en mayúsculas haya en el string.

Despues, escribe una función llamada contarCaracteres que se comporte como contarFs, excepto que toma un segundo argumento 
que indica el carácter que debe ser contado (en lugar de contar solo caracteres “F” en mayúscula). 
Reescribe contarFs para que haga uso de esta nueva función.

Ejemplos:
console.log(contarFs("FFC"));
    → 2
console.log(contarCaracteres("kakkerlak", "k"));
    → 4
*/

// ---------------- Tu codigo aqui. ----------------------



// ---------------- *************** ----------------------