# 🎯 Gestor de Tarjetas - Navegación DOM

## 📋 Descripción del Proyecto

Este proyecto te permite practicar **navegación DOM** de manera práctica y funcional. Es un gestor de tarjetas tipo Kanban donde aprenderás a moverte entre elementos padre, hijo y hermanos usando JavaScript.

## 🚀 Características

- ✅ **Dashboard con estadísticas** - Contador de tarjetas en tiempo real
- ✅ **3 columnas** - Pendientes, En Progreso, Completadas
- ✅ **Tarjetas interactivas** - Con botones de acción
- ✅ **Navegación DOM** - Práctica real de parentElement, children, siblings
- ✅ **Diseño responsive** - Funciona en móvil y desktop

## 📚 Conceptos de Navegación DOM

### **1. Navegación hacia arriba (Padres)**
```javascript
elemento.parentElement     // Elemento padre
elemento.parentNode        // Nodo padre
elemento.closest('.clase') // Padre más cercano con clase
```

### **2. Navegación hacia abajo (Hijos)**
```javascript
elemento.children          // Colección de elementos hijos
elemento.firstElementChild // Primer elemento hijo
elemento.lastElementChild  // Último elemento hijo
elemento.childElementCount // Número de hijos
```

### **3. Navegación horizontal (Hermanos)**
```javascript
elemento.previousElementSibling // Hermano anterior
elemento.nextElementSibling     // Hermano siguiente
elemento.previousSibling        // Nodo hermano anterior
elemento.nextSibling            // Nodo hermano siguiente
```

## 🎯 Retos a Implementar

### **Reto 1: Navegación Básica**
**Función:** `agregarNuevaTarjeta()`
- Navegar al contenedor de pendientes
- Encontrar el primer elemento hijo
- Insertar nueva tarjeta después del primer elemento

### **Reto 2: Navegación entre Hermanos**
**Función:** `moverPrimeraTarjetaAlFinal()`
- Encontrar la primera tarjeta en pendientes
- Navegar al último hermano del contenedor
- Mover la tarjeta al final de completadas

### **Reto 3: Navegación Compleja**
**Función:** `intercambiarTarjetasExtremas()`
- Encontrar la primera tarjeta de pendientes
- Encontrar la última tarjeta de completadas
- Intercambiar sus posiciones

### **Reto 4: Navegación Condicional**
**Función:** `eliminarTarjetasCompletadas()`
- Navegar por todos los hijos del contenedor completadas
- Encontrar elementos con clase 'completada'
- Eliminar cada tarjeta completada

### **Reto 5: Navegación desde Eventos**
**Función:** `moverTarjeta(button)`
- Desde el botón, navegar al padre (tarjeta)
- Encontrar el contenedor padre
- Mover la tarjeta al siguiente contenedor

### **Reto 6: Navegación Avanzada**
**Función:** `completarTarjeta(button)`
- Desde el botón, navegar a la tarjeta padre
- Encontrar el contenedor actual
- Mover la tarjeta al contenedor de completadas
- Actualizar el estado y estadísticas

## 🛠️ Cómo Empezar

1. **Abre `index.html`** en tu navegador
2. **Lee las instrucciones** en la parte inferior
3. **Implementa cada función** en `app.js`
4. **Usa la consola** para debuggear
5. **Prueba los botones** para verificar tu código

## 📁 Estructura del Proyecto

```
Cases/Navegacion/
├── index.html      # Página principal con estructura HTML
├── styles.css      # Estilos CSS modernos y responsive
├── app.js          # JavaScript con funciones a implementar
└── README.md       # Este archivo con instrucciones
```

## 🎨 Elementos HTML Disponibles

### **Contenedores principales:**
- `#pendientes` - Contenedor de tarjetas pendientes
- `#en-progreso` - Contenedor de tarjetas en progreso
- `#completadas` - Contenedor de tarjetas completadas

### **Estadísticas:**
- `#total-cards` - Contador de tarjetas totales
- `#active-cards` - Contador de tarjetas activas
- `#completed-cards` - Contador de tarjetas completadas

### **Clases CSS importantes:**
- `.card` - Tarjetas individuales
- `.card.completada` - Tarjetas completadas
- `.cards-container` - Contenedores de tarjetas

## 💡 Consejos para Navegación DOM

### **1. Siempre verifica que el elemento existe:**
```javascript
if (elemento && elemento.parentElement) {
    // Navegar con seguridad
}
```

### **2. Usa console.log para debuggear:**
```javascript
console.log('Elemento actual:', elemento);
console.log('Padre:', elemento.parentElement);
console.log('Hijos:', elemento.children);
```

### **3. Navega paso a paso:**
```javascript
// En lugar de navegar directamente
const tarjeta = button.parentElement.parentElement.parentElement;

// Navega paso a paso
const cardActions = button.parentElement;
const cardHeader = cardActions.parentElement;
const tarjeta = cardHeader.parentElement;
```

### **4. Usa métodos de inserción correctos:**
```javascript
// Agregar al final
contenedor.appendChild(nuevoElemento);

// Insertar antes de un elemento
contenedor.insertBefore(nuevoElemento, elementoReferencia);

// Reemplazar elemento
elementoViejo.parentElement.replaceChild(nuevoElemento, elementoViejo);
```

## 🚀 Funciones Auxiliares Disponibles

### **Ya implementadas:**
- `actualizarEstadisticas()` - Actualiza contadores
- `crearNuevaTarjeta(titulo, descripcion, prioridad)` - Crea nueva tarjeta
- `eliminarTarjeta(button)` - Elimina tarjeta (ejemplo)

### **Para usar en tus funciones:**
```javascript
// Crear nueva tarjeta
const nuevaTarjeta = crearNuevaTarjeta('Mi Tarea', 'Descripción', 'alta');

// Actualizar estadísticas
actualizarEstadisticas();
```

## 🎯 Objetivos de Aprendizaje

Al completar este proyecto aprenderás:
- ✅ Navegación entre elementos padre e hijo
- ✅ Navegación entre elementos hermanos
- ✅ Manipulación dinámica del DOM
- ✅ Manejo de eventos con navegación
- ✅ Creación y eliminación de elementos
- ✅ Actualización de estadísticas en tiempo real

## 🏆 Evaluación

**Criterios de éxito:**
- ✅ Todas las funciones implementadas
- ✅ Navegación DOM correcta (sin querySelector)
- ✅ Funcionalidad completa del gestor
- ✅ Código limpio y comentado
- ✅ Manejo de errores básico

¡Manos a la obra! 🚀 