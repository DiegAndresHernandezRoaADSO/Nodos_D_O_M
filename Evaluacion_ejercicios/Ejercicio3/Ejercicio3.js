const numeros = [];

function soli_num_cant() {

  const cantidad = prompt("Ingresa la cantidad de números a ingresar:");

  for (let i = 0; i < cantidad; i++) {
    let numero = prompt(`ingresa el numero #${i + 1}:`);
    numeros.push(numero);
  }

  ordenarnums();



  function ordenarnums() {
    const numerordenados = numeros.sort((a, b) => a - b);

    console.log(numerordenados);
  }
}

soli_num_cant();