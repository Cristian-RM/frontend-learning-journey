// 🎯 ARCHIVO DE PRÁCTICA - Manipulación del DOM
// 
// Instrucciones:
// 1. Lee el archivo RETOS.md para ver los desafíos
// 2. Empieza con el Reto 1 y ve progresando
// 3. Escribe tu código aquí abajo
// 4. Usa console.log() para verificar tus resultados
// 5. ¡No copies y pegues! Escribe cada línea

// ===========================================
// TU CÓDIGO EMPIEZA AQUÍ
// ===========================================

// ===========================================
// RETO 1: Crear un Contador Interactivo
// ===========================================

// Escribe tu código aquí...
// 1. Selecciona el elemento contador usando getElementById()
// 2. Crea una variable para almacenar el número de clicks
// 3. Crea una función que incremente el contador
// 4. Muestra el número actualizado en la página
// 5. ¡Ahora tienes un contador funcional!

function contadorClicks(elementID) {

    //contador-clicks
    const contador = document.getElementById(elementID || 'contador-clicks');
    if (!contador) {
        console.error('Elemento contador no encontrado');
        return;
    }
    contador.textContent = IncrementadorClicks(contador);

}

function IncrementadorClicks(Element) {
    if (!Element) {
        console.error('Elemento contador no encontrado');
        return;
    }
    let clicksActuales = parseInt(Element.textContent) || 0;
    return clicksActuales + 1;
}

// ===========================================
// RETO 2: Editar la lista de tareas
// ===========================================

// Escribe tu código aquí...
// 1. Selecciona todos los elementos editables usando getElementsByClassName()
// 2. Crea una función que cambie el texto de TODOS los elementos
// 3. Agrega un botón que active esta función
// 4. Haz que cada elemento sea clickeable para editar individualmente
// 5. ¡Ahora tienes un editor múltiple!




function resetearLista() {
    const listaTareas = document.getElementById('lista_tareas');
    if (!listaTareas) {
        console.error('Elemento lista_tareas no encontrado');
    }
    listaTareas.innerHTML = ''; // Limpiar la lista de tareas
    contadorTareas = 0; // Reiniciar el contador de tareas
}


function agregarNuevoItem() {
    const listaTareas = document.getElementById('lista_tareas');
    if (!listaTareas) {
        console.error('Elemento lista_tareas no encontrado');
        return;
    }
    const tituloTarea = prompt('Ingrese el título de la nueva tarea:');
    if (tituloTarea) {
        const nuevaTarea = createTareaHtml(tituloTarea);
        listaTareas.appendChild(nuevaTarea);
    } else {
        console.warn('Título de tarea no proporcionado');
    }


}


//Genera un elemento HTML para una tarea
function createTareaHtml(titulo) {
    const tarea = document.createElement('li');
    tarea.className = 'item-list';
    tarea.textContent = titulo;
    tarea.id = `tarea-${contadorTareas++}`;
    tarea.ondblclick = function (e) {
        editarTarea(tarea.id);
    }

    const botonElimninar = document.createElement('button');
    botonElimninar.className = 'btn-eliminar-tarea';
    botonElimninar.textContent = '🗑️';
    botonElimninar.id = `btn-eliminar-${tarea.id}`;
    tarea.appendChild(botonElimninar);
    botonElimninar.onclick = function (e) {
        eliminarTarea(tarea.id);
    }


    return tarea;
}
function eliminarTarea(idElement) {
    const tarea = document.getElementById(idElement);
    if (!tarea) {
        console.error('Elemento tarea no encontrado');
        return;
    }
    tarea.remove(); // Eliminar el elemento de la lista
    console.log(`Tarea ${idElement} eliminada`);
}
function editarTarea(idElement) {

    const tarea = document.getElementById(idElement);
    if (!tarea) {
        console.error('Elemento tarea no encontrado');
        return;
    }
    const ModoEdicion = false; // Variable para controlar el modo de edición
    tarea.childNodes.forEach((child) => {
        if (child.nodeName === 'INPUT') {
            ModoEdicion = true; // Si hay un input, estamos en modo edición
            return;
        }
    });
    if (ModoEdicion) {
        console.warn('Ya estás editando esta tarea');
        return; // Si ya hay un input, no hacemos nada
    }
    tarea.classList.add('editable')

    const textoOriginal = tarea.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = textoOriginal;
    input.className = 'input-editar visible';
    input.id = `input-${tarea.id}`;


    // Evento cuando pierde el foco (blur)
    input.onblur = function (e) {
        guardarTarea(tarea.id, input.id);
    }
    // Evento cuando presiona Enter
    input.onkeydown = function (e) {
        if (e.key === 'Enter') {
            guardarTarea(tarea.id, input.id);
        }
    }

    // Evento cuando presiona Escape
    input.onkeydown = function (e) {
        if (e.key === 'Escape') {
            guardarTarea(tarea.id, input.id);
        }
    }
    tarea.textContent = ''; // Limpiar el contenido actual
    tarea.appendChild(input); // Agregar el input al elemento tarea
}
function guardarTarea(idElement, idInput) {
    const tarea = document.getElementById(idElement);
    const input = document.getElementById(idInput);
    if (!tarea) {
        console.error('Elemento tarea no encontrado');
        return;
    }
    const tareaText = input.value;
    if (tareaText && tareaText.trim() !== '') {
        tarea.textContent = tareaText;
    } else {
        console.warn('Texto de tarea vacío, no se actualiza');
    }
    tarea.classList.remove('editable');
    tarea.innerText = tareaText;

    // Eliminar el input
    tarea.childNodes.remove(input);
}
//Constantes
let contadorTareas = 0;

// ===========================================
// RETO 3: Panel de Control de Botones
// ===========================================

// Escribe tu código aquí...
// 1. Selecciona todos los botones usando getElementsByTagName()
// 2. Crea una función que desactive TODOS los botones
// 3. Crea otra función que active TODOS los botones
// 4. Agrega botones "Desactivar Todo" y "Activar Todo"
// 5. ¡Ahora tienes control total sobre los botones!

// ===========================================
// RETO 4: Selector Inteligente de Colores
// ===========================================

// Escribe tu código aquí...
// 1. Selecciona el texto principal usando querySelector()
// 2. Crea una función que cambie el color basado en un parámetro
// 3. Conecta esta función con los botones de color existentes
// 4. Agrega un selector de color personalizado
// 5. ¡Ahora tienes un selector de colores inteligente!

// ===========================================
// RETO 5: Modo Oscuro/Claro
// ===========================================

// Escribe tu código aquí...
// 1. Selecciona TODOS los elementos que necesiten cambio usando querySelectorAll()
// 2. Crea una función que cambie entre modo claro y oscuro
// 3. Cambia colores de fondo, texto y bordes
// 4. Agrega un botón "Cambiar Tema"
// 5. ¡Ahora tienes un switcher de tema completo!

// ===========================================
// RETO 6: Sistema de Notificaciones
// ===========================================

// Escribe tu código aquí...
// 1. Usa getElementById() para el contador de notificaciones
// 2. Usa querySelector() para crear nuevas notificaciones
// 3. Usa querySelectorAll() para eliminar todas las notificaciones
// 4. Crea diferentes tipos de notificaciones (éxito, error, info)
// 5. ¡Ahora tienes un sistema de notificaciones completo!

// ===========================================
// CONSEJOS PARA DEBUGGING
// ===========================================

// Para verificar que seleccionaste correctamente:
// console.log("Elemento seleccionado:", miElemento);

// Para ver el contenido actual:
// console.log("Contenido actual:", miElemento.textContent);

// Para ver los estilos aplicados:
// console.log("Color actual:", miElemento.style.color);

// ===========================================
// RECURSOS ÚTILES
// ===========================================

// Métodos para seleccionar elementos:
// document.getElementById('id-del-elemento')
// document.querySelector('.clase-del-elemento')
// document.querySelectorAll('.clase-del-elemento')

// Propiedades para cambiar contenido:
// elemento.textContent = "nuevo texto"
// elemento.innerHTML = "<strong>texto con HTML</strong>"

// Propiedades para cambiar estilos:
// elemento.style.color = "red"
// elemento.style.backgroundColor = "blue"
// elemento.style.fontSize = "20px"

// ¡Manos a la obra! 🚀
