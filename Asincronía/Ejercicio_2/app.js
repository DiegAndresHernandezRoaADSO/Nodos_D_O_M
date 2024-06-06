// 2. Lea el archivo users.json suministrado por el instructor y tome como base
// las capturas para luego mostrar todos los datos de usuario de cada
// aprendiz, este ejercicio de desarrolla con promesas.
//   a.Imprima el resultado en una tabla donde solo nos mostrar el nombre
// y el avatar de cada aprendiz


//se utiliza un fetch para llamar o solicitar los datos de "user.json"

fetch('users.json')
  .then(response => response.json())
  .then(data => {
    let aprendices = data.aprendices;
    // Crear un array con los datos que quieres mostrar en la tabla
    let datosTabla = aprendices.map(aprendiz => ({ Nombre: aprendiz.nombre, Avatar: aprendiz.avatar }));
    // Mostrar los datos en forma de tabla en la consola
    console.table(datosTabla);
  })
  .catch(error => {
    console.log('Hubo un error al obtener los datos: ' + error);
  });



