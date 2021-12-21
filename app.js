let moduloTareas = require('./tareas');
let process = require('process'); // lamo al metodo process
let comando = process.argv[2]; // asignamos el espacio 2 a una variable

switch(comando){ // creamos un switch que toma la variable comando como valor, esto sirve para comparar lo escrito en el segundo lugar en la consola con los casos que vamos a escribir
    case "listar":
        let tareas = moduloTareas.leerJSON(); // creo una variable que llama la funcion leerJson de tareas.js
        if(tareas.length === 0){
            console.log("Tu lista de tareas esta vacia.")
        }else{
            for(let i = 0; i < tareas.length; i++){
                console.log("Título: " + tareas[i].titulo + "." + " Estado: " + tareas[i].estado + ".")
            }
        }
        break;
    case "agregar":        
        let titulo = process.argv[3]; // toma el valor 3 de la consola
        let estado = process.argv[4]; // toma el valor 4 de la consola
        moduloTareas.escribirJson(titulo, estado); // llamamos a la funcion escribirJson y le asignamos el valor titulo y estado 
        break;
    case "deshacer":
        moduloTareas.deshacer();
        break;
    case "filtrar":
        let filtrar = process.argv[3]
        let listaFiltrada = moduloTareas.filtrarPorEstado(filtrar);
        for(let i = 0; i < listaFiltrada.length; i++){
            console.log("Título: " + listaFiltrada[i].titulo + ". " + "Estado: " + listaFiltrada[i].estado + ".");
        }
        break;
    case undefined:
        console.log("Atención - Debes ingresar un valor.")
        break;
    default:
        console.log("No entiendo lo que quieres hacer.")
}