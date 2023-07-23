const edad = 20;
const EDAD_MAYOR = 18;

if (edad >= EDAD_MAYOR) {
  console.log("eres mayor de edad");
} else {
  console.log("Eres menor de edad");
  console.log(
    `Para ser mayor de edad te faltan Eres menor de edad te faltan ${
      EDAD_MAYOR - edad
    } años.`
  );
}
