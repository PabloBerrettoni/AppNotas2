let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () => { // esta funcion lee el archivo tareas.json y lo pasa a un objeto literal
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8') // fs.readFileSync asignamos la direccion del archivo JSON y el tipo de archivo
        return JSON.parse(listaDeTareas) // pasamos la variable que leyo el archivo JSON a objeto literal
    },
    escribirJson : (titulo, estado) => { // escribimos en el archivo json
        let nuevaTarea = { // creamos una variable funcion creadora que sirve como molde para meter un nuevo objeto literal al json
            titulo : titulo,
            estado : estado
        }
        let tareasAnteriores = moduloTareas.leerJSON(); // guardamos el viejo archivo json en una variable
        tareasAnteriores.push(nuevaTarea); // metemos en el antiguo archivo JSON el nuevo objeto que deseamos guardar
        moduloTareas.guardarJson(tareasAnteriores); // Llamamos a la funcion guardar que pasa el objeto literal a string y reemplaza el antiguo archivo JSON con el nuevo
    },
    guardarJson : (info) => { // funcion que sirve para pasar un valor a string y guardar ese string en el archivo JSON
        let nuevoJson = JSON.stringify(info); // Convertimos el valor a string
        fs.writeFileSync('./tareas.json', nuevoJson, 'utf-8'); // Guardamos la variable con el valor en string en el archivo JSON
    },
    deshacer : () => {
        let tareas = moduloTareas.leerJSON();
        tareas.pop();
        moduloTareas.guardarJson(tareas);
    },
    filtrarPorEstado : (estado) => { // creamos una funcion que muestre solo los objetos que contengan el estado que deseamos ver
        let listaDeTareas = moduloTareas.leerJSON(); // variable que llama al metodo leerJSON que sirve para tener el archivo JSON en objeto literal
        let tareasFiltradas = listaDeTareas.filter(tarea => { // creamos variable con el metodo filter que toma una valor. este metodo sirve para devolver los objetos con un valor que deseemos
            return tarea.estado.toLowerCase() === estado.toLowerCase();
        });
        return tareasFiltradas;
    }
}