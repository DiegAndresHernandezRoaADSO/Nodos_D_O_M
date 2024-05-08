const palabras = [];

 function encontrarPalabraMayor(...palabras) { //  Esta función recibe un número variable de
// argumentos utilizando el operador de
// propagación ...palabras.
  let palabraMayor = palabras[0]; 

  for (let i = 1; i < palabras.length; i++) {
    if (palabras[i].length > palabraMayor.length) {
      palabraMayor = palabras[i];
    }
  }


  //Al colocar palabras[i] se accede a un elemento específico de la matriz llamado palabras en la posición i. Por ejemplo, si palabras es una matriz que contiene palabras almacenadas, usar palabra[i] devolverá la palabra en la posición i de la matriz.


  // el lengt retorna el tamaño o número de elementos de un arreglo(Array)

  return palabraMayor;
}

function ingresarPalabras() {
  for (let i = 0; i < 5; i++) {
    let palabra = prompt("Ingresa una palabra:");
    palabras.push(palabra);
  }
// //  Se utiliza un bucle for para
// iterar sobre las palabras ingresadas, comenzando
// desde el segundo elemento(índice 1) porque ya se
// asignó el primer elemento a palabraMayor.



  //el push nos permite  añadir un nuevo elemento al final de un arreglo

  const palbramaslarga = encontrarPalabraMayor(...palabras);
  console.log("La palabra más larga ingresada es: " + palbramaslarga);
}
// (... estos son operadores de propagracion
// ...palabras, lo que
// significa que puede recibir cualquier cantidad de
// palabras como argumento.


ingresarPalabras();
