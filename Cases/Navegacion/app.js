// 🎯 GESTOR DE TARJETAS - NAVEGACIÓN DOM
// 
// Instrucciones:
// 1. Implementa cada función según las instrucciones del HTML
// 2. Usa navegación DOM: parentElement, children, siblings, etc.
// 3. No uses querySelector/getElementById para navegar
// 4. Usa console.log() para debuggear
// 5. ¡Escribe cada función desde cero!

// ===========================================
// FUNCIONES A IMPLEMENTAR
// ===========================================

// Reto 1: Navegación Básica
function agregarNuevaTarjeta() {
    const { titulo, descripcion, prioridad } = promtDataTarea();
    // TODO: Implementar navegación básica
    // 1. Navegar al contenedor de pendientes
    // 2. Encontrar el primer elemento hijo
    // 3. Insertar nueva tarjeta después del primer elemento
    const tarjeta = crearNuevaTarjeta(titulo, descripcion, prioridad);
    const contenedorPendientes = document.getElementById('pendientes');
    contenedorPendientes.firstChild.after(tarjeta);
    console.log('Función agregarNuevaTarjeta() - IMPLEMENTAR');

    actualizarEstadisticas();
}
function promtDataTarea() {
    const titulo = prompt('Ingrese el titulo de la tarea');
    const descripcion = prompt('Ingrese la descripcion de la tarea');
    const prioridad = prompt('Ingrese la prioridad de la tarea').toUpperCase();
    return { titulo, descripcion, prioridad };
}
// Reto 2: Navegación entre Hermanos
function moverPrimeraTarjetaAlFinal() {
    console.log('Función moverPrimeraTarjetaAlFinal() - IMPLEMENTAR');
    const contenedorPendientes = document.getElementById('pendientes');
    // TODO: Implementar navegación entre hermanos
    // 1. Encontrar la primera tarjeta en pendientes
    const primeraTarjeta = contenedorPendientes.firstElementChild;
    // 2. Navegar al último hermano del contenedor
    const contenedorCompletadas = contenedorPendientes.parentElement.parentElement.lastElementChild.lastElementChild;
    // 3. Mover la tarjeta al final de completadas
    contenedorCompletadas.appendChild(primeraTarjeta);

    actualizarEstadisticas();
}

// Reto 3: Navegación Compleja
function intercambiarTarjetasExtremas() {
    // TODO: Implementar navegación compleja
    // 1. Encontrar la primera tarjeta de pendientes
    // 2. Encontrar la última tarjeta de completadas
    // 3. Intercambiar sus posiciones
    //obtenemos los pdares
    const contenedorPendientes = document.getElementById('pendientes');
    if (!contenedorPendientes) {
        console.error("No se encontró el contenedor de completadas");
        return;
    }
    const contenedorCompletadas = contenedorPendientes.parentElement.parentElement.lastElementChild.lastElementChild;
    if (!contenedorCompletadas) {
        console.error("No se encontró el contenedor de completadas");
        return;
    }

    if (!(contenedorCompletadas.childElementCount === 0)) {
        if (contenedorPendientes.childElementCount === 0) {
            contenedorPendientes.appendChild(contenedorPendientes.firstElementChild);
        } else {
            contenedorPendientes.firstElementChild.after(contenedorCompletadas.lastElementChild);
        }
    }
    if (!(contenedorPendientes.childElementCount === 0)) {
        if (contenedorCompletadas.childElementCount === 0) {
            contenedorCompletadas.appendChild(contenedorPendientes.firstElementChild);
        } else {
            // Intercambiamos las tarjetas  
            contenedorCompletadas.lastElementChild.after(contenedorPendientes.firstElementChild);
        }
    }

    actualizarEstadisticas();

}

// Reto 4: Navegación Condicional
function eliminarTarjetasCompletadas() {
    // TODO: Implementar navegación condicional
    // 1. Navegar por todos los hijos del contenedor completadas
    // 2. Encontrar elementos con clase 'completada'
    // 3. Eliminar cada tarjeta completada
    const contenedorCompletadas = document.getElementById('completadas');
    const targetasCompletadas = contenedorCompletadas.querySelectorAll('.completada');
    targetasCompletadas.forEach(tarjeta => {
        tarjeta.remove();
    });
    console.log('Función eliminarTarjetasCompletadas() - IMPLEMENTAR');
}

// Reto 5: Navegación desde Eventos
function moverTarjeta(button) {
    // TODO: Implementar navegación desde eventos
    // 1. Desde el botón, navegar al padre (tarjeta)
    // 2. Encontrar el contenedor padre
    // 3. Mover la tarjeta al siguiente contenedor
  const card = button.closest('.card')
    const contenedorPadre = button.closest('.column'); // Navega al padre más cercano con clase 'card'
    console.log(contenedorPadre);
    const contenedorSiguiente = contenedorPadre.nextElementSibling.lastElementChild; // Navega al siguiente elemento hermano
    if (!contenedorSiguiente) {
        return;
    }
    console.log(contenedorSiguiente);
    contenedorSiguiente.appendChild(card); // Mueve la tarjeta al siguiente contenedor
    card.clas
    actualizarEstadisticas();
}

// Reto 6: Navegación Avanzada
function completarTarjeta(button) {
    // TODO: Implementar navegación avanzada
    // 1. Desde el botón, navegar a la tarjeta padre
    // 2. Encontrar el contenedor actual
    // 3. Mover la tarjeta al contenedor de completadas
    // 4. Actualizar el estado y estadísticas
    const card = button.closest('.card')
    const ContenedorColumnas = button.closest('.column').parentElement; // Navega al padre más cercano con clase 'card'
    const contenedorCompletadas = ContenedorColumnas.lastElementChild.lastElementChild; 
    contenedorCompletadas.appendChild(card); // Mueve la tarjeta al contenedor de completadas
    card.classList.add('completada');
    // <span class="completion-date">Completada: Hoy</span>
    const completionDate = document.createElement('span');
    completionDate.className = 'completion-date';
    completionDate.textContent = `Completada: ${new Date().toLocaleDateString()}`;
    button.parentElement.lastElementChild.after(completionDate)
    button.remove(); // Elimina el botón de completar
}

// Función auxiliar para eliminar tarjeta (ya implementada)
function eliminarTarjeta(button) {
    // Esta función ya está implementada como ejemplo
    const tarjeta = button.closest('.card');
    if (tarjeta) {
        tarjeta.remove();
        actualizarEstadisticas();
    }
}

// ===========================================
// FUNCIONES AUXILIARES (YA IMPLEMENTADAS)
// ===========================================

function actualizarEstadisticas() {
    const totalCards = document.querySelectorAll('.card').length;
    const activeCards = document.querySelectorAll('.card:not(.completada)').length;
    const completedCards = document.querySelectorAll('.card.completada').length;

    document.getElementById('total-cards').textContent = totalCards;
    document.getElementById('active-cards').textContent = activeCards;
    document.getElementById('completed-cards').textContent = completedCards;
}

function crearNuevaTarjeta(titulo, descripcion, prioridad = 'media') {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'card';
    tarjeta.setAttribute('data-status', 'pendiente');

    tarjeta.innerHTML = `
        <div class="card-header">
            <h4 class="card-title">${titulo}</h4>
            <div class="card-actions">
                <button class="btn-icon" onclick="moverTarjeta(this)">📤</button>
                <button class="btn-icon" onclick="eliminarTarjeta(this)">🗑️</button>
            </div>
        </div>
        <p class="card-description">${descripcion}</p>
        <div class="card-footer">
            <span class="card-priority ${prioridad}">${prioridad}</span>
            <button class="btn-complete" onclick="completarTarjeta(this)">✅ Completar</button>
        </div>
    `;

    return tarjeta;
}

// ===========================================
// INICIALIZACIÓN
// ===========================================

document.addEventListener('DOMContentLoaded', function () {
    console.log('🎯 Gestor de Tarjetas - Navegación DOM cargado');
    console.log('📋 Implementa las funciones según las instrucciones');

    actualizarEstadisticas();

    // Mostrar información de navegación disponible
    console.log('🔍 Elementos disponibles para navegación:');
    console.log('- Contenedor pendientes:', document.getElementById('pendientes'));
    console.log('- Contenedor en-progreso:', document.getElementById('en-progreso'));
    console.log('- Contenedor completadas:', document.getElementById('completadas'));
});

// ===========================================
// CONSEJOS PARA NAVEGACIÓN DOM
// ===========================================

/*
PROPIEDADES DE NAVEGACIÓN DISPONIBLES:

1. Navegación hacia arriba (padres):
   - elemento.parentElement
   - elemento.parentNode
   - elemento.closest('.clase')

2. Navegación hacia abajo (hijos):
   - elemento.children
   - elemento.firstElementChild
   - elemento.lastElementChild
   - elemento.childElementCount

3. Navegación horizontal (hermanos):
   - elemento.previousElementSibling
   - elemento.nextElementSibling
   - elemento.previousSibling
   - elemento.nextSibling

4. Métodos útiles:
   - elemento.appendChild(nuevoElemento)
   - elemento.insertBefore(nuevoElemento, referencia)
   - elemento.remove()
   - elemento.removeChild(hijo)
*/

// ===========================================
// EJEMPLOS DE USO
// ===========================================

/*
EJEMPLO 1: Navegar desde un botón a su tarjeta
function ejemploNavegacion(button) {
    const tarjeta = button.parentElement.parentElement; // Navega al padre del padre
    console.log('Tarjeta encontrada:', tarjeta);
}

EJEMPLO 2: Encontrar el contenedor padre
function ejemploContenedor(elemento) {
    const contenedor = elemento.parentElement;
    console.log('Contenedor:', contenedor);
}

EJEMPLO 3: Navegar entre hermanos
function ejemploHermanos(elemento) {
    const hermanoAnterior = elemento.previousElementSibling;
    const hermanoSiguiente = elemento.nextElementSibling;
    console.log('Hermano anterior:', hermanoAnterior);
    console.log('Hermano siguiente:', hermanoSiguiente);
}
*/ 