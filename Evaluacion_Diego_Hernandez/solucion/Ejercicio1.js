// a.Describa el paso a paso del ejercicio(comente cada línea de
// código).


// Definición de la función de filtrado que verifica si el nombre es "Evaluacion"
const filtrar = x => x.name === "Evaluacion";

fetch(`main.json`)

  .then(response => response.json());
//consultarr los repositorios de un usuario en github

fetch(`https://api.github.com/users/${user.name}/repos`)
  .then(respuestGithub => respuestGithub.json())
  .then(usuariogithub => {
    //iterar sobre los repositorios del usario en github  y mostrar informacion si el nombre es  "Evaluacion"

    usuariogithub.forEach(element => {
      if (element.name === "Evaluacion") {
        console.log(element);
      }
      // Filtrar los repositorios del usuario en GitHub por nombre "Evaluacion" (código comentado)
      // let data = usuariogithub.filter(filtrar)
      // console.log(data);
      // console.log(usuariogithub);
    })

      //aqui se utiliza en catch para el manejo de errores
      .catch(error => console.error('Error al obtener los repositorios de GitHub:', error));
  })
  .catch(error => console.error('Error al leer el archivo JSON de usuarios:', error));
