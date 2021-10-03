/**
 * 1, que datos necesito?????
 * -la tarea (string), estado la tarea(bool)
 * -referencia del formulario
 * -referencia de la lista
 * 2, como obtengo los datos
 * -evento click, tomando el value del input
 * crear un li
 */

let miForm = document.getElementById("formToDo");

let ulTareas = document.getElementById("tareas");

let tareas = []; //aqui almacenaré las tareas a mostrar

//a, vamos a obtener el valor del input y agregarlo a tareas[]

miForm.addEventListener("submit", function (e) {
    //evento
    e.preventDefault();
    //formulario.name_input.value
    let nuevaTarea = miForm.tarea.value;
    tareas.push(nuevaTarea);
    console.log(tareas);
    //.reset(), reinicia todo el formulario
    miForm.reset();
    dibujarTareas();
});

function dibujarTareas() {
    //cada vez que se ejecute dibujarTareas lo primro que hago es decir que el contenido HTML va a ser "" nada
    ulTareas.innerHTML = "";
    //se va encargar de dibujar las tareas
    tareas.forEach(function (item, posicion) {
        let li = document.createElement("li");
        li.innerText = item;
        ulTareas.appendChild(li);

        //Agregar 01 evento por cada item
        li.addEventListener("dblclick", function () {
            //la idea es que esto nos permita eliminar una tarea
            tareas.splice(posicion, 1);
            // console.log("después de eliminar", tareas);
            dibujarTareas();
        });
    });
}
