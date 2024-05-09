export { sumarNumeros, esPrimo, contarPrimos, esPar, contarPares, calcularPromedioPrimos, calcularPromedioPares }

let numeros = [];
let n_cant = prompt("Ingrese la cantidad de números:");
let sumatotal = 0;

for (let i = 0; i < n_cant; i++) {
  let int_numeros = Number(prompt("Ingresa el número " + (i + 1) + ":"));
  numeros.push(int_numeros);
  //el push es una función que nos permite añadir un nuevo elemento al final de un array
  sumatotal += int_numeros;
}

alert("Números ingresados: " + numeros);

let Opción = prompt(`¿Qué operación deseas realizar?
a. Sumar los números
b. Contar los números primos
c. Contar los números pares
d. Calcular el promedio de los números primos
e. Calcular el promedio de números pares`);

//el touper es un metodo que devuelve el valor convertido en mayusculas de cadena que realiza la llamada
switch (Opción.toUpperCase()) {
  case 'A':
    let resultadoSuma = sumarNumeros(numeros);
    console.log("La suma total de los números ingresados es: " + resultadoSuma);
    break;

  case "B":
    let contarprimos = contarPrimos(numeros);
    console.log("La cantidad de números primos es: " + contarprimos);
    break;

  case "C":
    let cantidadPares = contarPares(numeros);
    console.log("La cantidad de números pares es: " + cantidadPares);
    break;

  case "D":
    let promedioPrimos = calcularPromedioPrimos(numeros);
    if (promedioPrimos == 0) {
      console.log("No se puede calcular el promedio de números primos");
    }
    else {
      console.log("El promedio de números primos es: " + promedioPrimos);
    }
    break;

  case "E":
    let promedioPares = calcularPromedioPares(numeros);
    if (promedioPares === 0) {
      console.log("No se puede calcular el promedio de números pares ya que no hay números pares en la lista.");
    } else {
      console.log("El promedio de números pares es: " + promedioPares);
    }
    break;
}

function sumarNumeros(numeros) {
  let suma = 0;
  for (let num of numeros) {
    suma += num;
  }
  return suma;
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;
  if (numero % 2 == 0 || numero % 3 == 0) return false;

  let i = 5;
  while (i * i <= numero) {
    if (numero % i == 0 || numero % (i + 2) == 0) return false;
    i += 6;
  }
  return true;
}

function contarPrimos(numeros) {
  return numeros.filter(numero => esPrimo(numero)).length;
}

//el filter devuelve todos los elementos de un arreglo que satisfacen la condicion especificada en la funcion

function esPar(numero) {
  return numero % 2 === 0;
}

function contarPares(numeros) {
  return numeros.filter(numero => esPar(numero)).length;
}

function calcularPromedioPrimos(numeros) {
  let primos = numeros.filter(numero => esPrimo(numero));
  let suma = primos.reduce((total, num) => total + num, 0);
  let promedio = suma / primos.length; //retorna el tamaño o número de elementos de un arreglo
  return promedio;
}


function calcularPromedioPares(numeros) {
  let pares = numeros.filter(numero => esPar(numero));
  if (pares.length === 0) {
    return 0;
  }
  let suma = pares.reduce((total, num) => total + num, 0);
  let promedio = suma / pares.length;
  return promedio;
}













