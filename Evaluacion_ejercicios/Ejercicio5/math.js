export class Calculadora {
  suma(numero1, numero2) {
    return numero1 + numero2;
  }

  resta(numero1, numero2) {
    return numero1 - numero2;
  }

  multiplicacion(numero1, numero2) {
    return numero1 * numero2;
  }

  division(numero1, numero2) {
    if (numero2 === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return numero1 / numero2;
  }
}
