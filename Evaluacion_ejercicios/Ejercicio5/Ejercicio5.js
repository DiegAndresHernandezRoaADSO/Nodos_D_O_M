import { Calculadora } from "./math.js";

let operador = prompt("¿Qué operación deseas hacer?\n A. Suma\n B. Resta\n C.Multiplicación\n D. División");

let numero1 = Number(prompt("Ingresa el primer número"));
let numero2 = Number(prompt("Ingresa el segundo número"));


const calculadora = new Calculadora();



let total;

if (operador === 'A') {
  total = calculadora.suma(numero1, numero2);
  alert("El resultado de la suma es: " + total);
} else if (operador === 'B') {
  total = calculadora.resta(numero1, numero2);
  alert("El resultado de la resta es: " + total);
} else if (operador === 'C') {
  total = calculadora.multiplicacion(numero1, numero2);
  alert("El resultado de la multiplicación es: " + total);
} else if (operador === 'D') {
  try {
    total = calculadora.division(numero1, numero2);
    alert("El resultado de la división es: " + total);
  } catch (error) {
    alert(error.message);
  }
} else {
  alert("Opción de operación incorrecta");
}

