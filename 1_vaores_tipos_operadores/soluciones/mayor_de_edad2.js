const EDAD_MAYOR = 18;
const edad = 19;
let mensaje =
  edad >= EDAD_MAYOR
    ? "Eres mayor de edad."
    : "Eres menor de edad.\nPara ser mayor de edad te faltan " +
      (EDAD_MAYOR - edad) +
      " años.";
console.log(mensaje);

console.log("end");
