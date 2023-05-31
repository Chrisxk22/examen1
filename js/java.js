// Obtener informacion de lista tarea
const tareaInput = document.getElementById("tareaInput");
const lista = document.getElementById("lista");

// funcion para agregar tareas
function agregarTarea() {

  // Obtener datos de tarea
  const nuevaTarea = tareaInput.value;

  if (nuevaTarea !== "") {
    
    // Crear nueva tarea
    const nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = nuevaTarea;

    // Agregar nueva tarea
    lista.appendChild(nuevoElemento);

    // Limpiar el input
    tareaInput.value = "";
  }
}

document.getElementById("btn-agregar").addEventListener("click", agregarTarea);

