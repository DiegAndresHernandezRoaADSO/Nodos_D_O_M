function validarTarjeta(tipoTarjeta) {

  let expresionRegular;
  let numeroTarjeta;

  if (tipoTarjeta === "AmericanExpress") {
    expresionRegular = /^3[47][0-9]{13}$/;
  } else if (tipoTarjeta === "Diners Club") {
    expresionRegular = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  } else if (tipoTarjeta === "Discover") {
    expresionRegular = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
  } else if (tipoTarjeta === "Mastercard") {
    expresionRegular = /^5[1-5][0-9]{14}$/;
  } else if (tipoTarjeta === "Visa") {
    expresionRegular = /^4[0-9]{12}(?:[0-9]{3})?$/;
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












