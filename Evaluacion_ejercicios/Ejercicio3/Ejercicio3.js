const numeros = [];

function soli_num_cant() {

  const cantidad = prompt("Ingresa la cantidad de números a ingresar:");

  for (let i = 0; i < cantidad; i++) {
    let numero = prompt(`ingresa el numero #${i + 1}:`);
    numeros.push(numero);
  }

  //el push nos permite  añadir un nuevo elemento al final de un arreglo

  ordenarnums();
  //aqui se llama a la funciona la cual es la que va a ordenar los numeros ingresados por el usuario.



  function ordenarnums() {
    const numerordenados = numeros.sort((a, b) => a - b);

    // el sort ordena los elementos de un arreglo(array) localmente y devuelve el arreglo ordenado. 

    console.log(numerordenados);
  }
}

soli_num_cant();