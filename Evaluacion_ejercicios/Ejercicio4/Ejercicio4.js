const palabras = [];

function encontrarPalabraMayor(...palabras) {
  let palabraMayor = palabras[0];

  for (let i = 1; i < palabras.length; i++) {
    if (palabras[i].length > palabraMayor.length) {
      palabraMayor = palabras[i];
    }
  }

  return palabraMayor;
}

function ingresarPalabras() {
  for (let i = 0; i < 10; i++) {
    let palabra = prompt("Ingresa una palabra:");
    palabras.push(palabra);
  }

  const palbramaslarga = encontrarPalabraMayor(...palabras);
  console.log("La palabra más larga ingresada es: " + palbramaslarga);
}

ingresarPalabras();
