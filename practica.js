
let elNumero = Number(prompt("Elige un numero"));
if (!Number.isNaN(elNumero)) {
  console.log("Tu número es la raiz cuadrada de " +
              elNumero * elNumero);
} else {
  console.log("Ey. Por qué no me diste un número?");
}