function validarTarjeta(tipoTarjeta) {

  let expresionRegular;
  let numeroTarjeta;

  if (tipoTarjeta === "AmericanExpress") {
    expresionRegular = /^3[47][0-9]{13}$/; //- ^ : Este símbolo representa el "ancla de inicio", lo que indica que la coincidencia debe empezar al principio de la cadena.
    // - 3 : Indica que la cadena debe comenzar con el número 3.
    //   - [47] : Dentro de los corchetes, se especifica que el siguiente dígito puede ser 4 o 7. 
    //     - [0 - 9]{ 13 } : Esta parte significa que se esperan exactamente 13 dígitos del 0 al 9 después de los primeros caracteres.
  } else if (tipoTarjeta === "Diners Club") {
    expresionRegular = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    //     - ^ : Representa el inicio de la cadena.
    // - 3 : Indica que la cadena debe iniciar con el número 3.
    //       - (?: 0[0 - 5] | [68][0 - 9]) : Define dos combinaciones posibles.
    // - [0 - 9]{ 11 } : Significa que se esperan exactamente 11 dígitos numéricos después de los primeros caracteres.

  } else if (tipoTarjeta === "Discover") {
    // expresionRegular = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
    // . La expresión regular /^ 6(?:011 | 5[0 - 9]{ 2})[0 - 9]{ 12 } $ / establece un patrón específico que busca cadenas que comiencen con el número 6, seguido de una de las dos combinaciones posibles y luego tengan exactamente 12 dígitos numéricos.Este tipo de patrón es útil para validar y encontrar números de tarjetas de crédito que sigan ese formato particular.¿

  } else if (tipoTarjeta === "Mastercard") {
    expresionRegular = /^5[1-5][0-9]{14}$/;
    //  La expresión regular que mencionaste /^ 5[1 - 5][0 - 9]{ 14 } $ / establece un patrón específico que busca cadenas que comiencen con el número 5, seguido de un dígito entre 1 y 5, y luego tengan exactamente 14 dígitos numéricos.Este tipo de patrón es útil para validar y encontrar números de tarjetas de crédito que sigan ese formato particular.
  } else if (tipoTarjeta === "Visa") {
    expresionRegular = /^4[0-9]{12}(?:[0-9]{3})?$/;
    // establece un patrón que busca cadenas que comiencen con el número 4, seguido de exactamente 12 dígitos numéricos y opcionalmente seguido de 3 dígitos adicionales.Esta expresión es útil para validar y encontrar números de tarjetas de crédito que sigan ese formato particular. 
  } else {
    alert("Tipo de tarjeta no válido.");
    return;
  }

  let isValidInput = false;
  while (!isValidInput) {
    numeroTarjeta = prompt("Ingrese el número de la tarjeta " + tipoTarjeta + ":");

    // Verificar si se canceló la entrada
    if (numeroTarjeta === null) {
      alert("No ingresaste un número de tarjeta.");
      return;
    }

    // Eliminar espacios en blanco y verificar longitud
    numeroTarjeta = numeroTarjeta.replace(/\s/g, '');
    if (numeroTarjeta.length <= 16 && /^\d+$/.test(numeroTarjeta)) {
      isValidInput = true;
    } else {
      alert("El número de tarjeta debe ser un entero positivo de máximo 16 caracteres.");
    }
  }


  if (expresionRegular.test(numeroTarjeta)) {
    alert("La tarjeta " + tipoTarjeta + " es válida ");
  } else {
    alert("La tarjeta " + tipoTarjeta + " no es válida ");
  }
}

function solicitarnumerotarjeta() {

  let tipoTarjeta = prompt("Ingresa el tipo de tarjeta (AmericanExpress, Diners Club, Discover, Mastercard o Visa):");

  if (tipoTarjeta) {
    validarTarjeta(tipoTarjeta);
  } else {
    alert("No ingresaste un tipo de tarjeta válido.");
  }
}


solicitarnumerotarjeta();
export { validarTarjeta, solicitarnumerotarjeta };












