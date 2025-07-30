# 🎯 Retos de Manipulación del DOM con JavaScript

## 📋 Instrucciones Generales
- Cada reto debe completarse antes de pasar al siguiente
- Usa la consola del navegador (F12) para verificar tus resultados
- Comenta tu código para explicar qué hace cada parte
- ¡No copies y pegues! Escribe cada línea para aprender mejor

---

## 🥇 NIVEL BÁSICO - Fundamentos del DOM

## 📚 SECCIÓN 1: SELECTORES DEL DOM

### ¿Qué son los selectores?
Los selectores son métodos que te permiten "encontrar" elementos HTML en tu página para poder manipularlos con JavaScript.

### Tipos de Selectores:

#### 1. **getElementById()** - Seleccionar por ID
```javascript
// Sintaxis: document.getElementById('nombre-del-id')
// Retorna: UN SOLO elemento (el primero que encuentre con ese ID)
// Uso: Cuando sabes el ID exacto del elemento

const miElemento = document.getElementById('texto-principal');
```

#### 2. **getElementsByClassName()** - Seleccionar por Clase
```javascript
// Sintaxis: document.getElementsByClassName('nombre-de-la-clase')
// Retorna: UNA COLECCIÓN de elementos (HTMLCollection)
// Uso: Cuando quieres seleccionar varios elementos con la misma clase

const misElementos = document.getElementsByClassName('texto-editable');
// Para acceder al primer elemento: misElementos[0]
// Para acceder al segundo elemento: misElementos[1]
```

#### 3. **getElementsByTagName()** - Seleccionar por Etiqueta
```javascript
// Sintaxis: document.getElementsByTagName('nombre-de-la-etiqueta')
// Retorna: UNA COLECCIÓN de elementos (HTMLCollection)
// Uso: Cuando quieres seleccionar todos los elementos de un tipo específico

const todosLosBotones = document.getElementsByTagName('button');
const todosLosDivs = document.getElementsByTagName('div');
```

#### 4. **querySelector()** - Seleccionar con CSS
```javascript
// Sintaxis: document.querySelector('selector-css')
// Retorna: UN SOLO elemento (el primero que encuentre)
// Uso: Puedes usar cualquier selector CSS (ID, clase, etiqueta, combinaciones)

const porId = document.querySelector('#texto-principal');        // Por ID
const porClase = document.querySelector('.texto-editable');      // Por clase
const porEtiqueta = document.querySelector('h1');               // Por etiqueta
const combinado = document.querySelector('.controles button');  // Combinado
```

#### 5. **querySelectorAll()** - Seleccionar múltiples con CSS
```javascript
// Sintaxis: document.querySelectorAll('selector-css')
// Retorna: UNA COLECCIÓN de elementos (NodeList)
// Uso: Cuando quieres seleccionar múltiples elementos con CSS

const todosLosElementos = document.querySelectorAll('.texto-editable');
const todosLosBotones = document.querySelectorAll('button');
const botonesEspecificos = document.querySelectorAll('.btn-color');
```

---

### Reto 1: Crear un Contador Interactivo
**Objetivo:** Usar getElementById() para crear un contador funcional
```javascript
// Tu código aquí
// 1. Selecciona el elemento contador usando getElementById()
// 2. Crea una variable para almacenar el número de clicks
// 3. Crea una función que incremente el contador
// 4. Muestra el número actualizado en la página
// 5. ¡Ahora tienes un contador funcional!
```

### Reto 2: Editor de Texto Múltiple
**Objetivo:** Usar getElementsByClassName() para editar múltiples elementos
```javascript
// Tu código aquí
// 1. Selecciona todos los elementos editables usando getElementsByClassName()
// 2. Crea una función que cambie el texto de TODOS los elementos
// 3. Agrega un botón que active esta función
// 4. Haz que cada elemento sea clickeable para editar individualmente
// 5. ¡Ahora tienes un editor múltiple!
```

### Reto 3: Panel de Control de Botones
**Objetivo:** Usar getElementsByTagName() para controlar todos los botones
```javascript
// Tu código aquí
// 1. Selecciona todos los botones usando getElementsByTagName()
// 2. Crea una función que desactive TODOS los botones
// 3. Crea otra función que active TODOS los botones
// 4. Agrega botones "Desactivar Todo" y "Activar Todo"
// 5. ¡Ahora tienes control total sobre los botones!
```

### Reto 4: Selector Inteligente de Colores
**Objetivo:** Usar querySelector() para crear un selector de colores
```javascript
// Tu código aquí
// 1. Selecciona el texto principal usando querySelector()
// 2. Crea una función que cambie el color basado en un parámetro
// 3. Conecta esta función con los botones de color existentes
// 4. Agrega un selector de color personalizado
// 5. ¡Ahora tienes un selector de colores inteligente!
```

### Reto 5: Modo Oscuro/Claro
**Objetivo:** Usar querySelectorAll() para cambiar el tema de toda la página
```javascript
// Tu código aquí
// 1. Selecciona TODOS los elementos que necesiten cambio usando querySelectorAll()
// 2. Crea una función que cambie entre modo claro y oscuro
// 3. Cambia colores de fondo, texto y bordes
// 4. Agrega un botón "Cambiar Tema"
// 5. ¡Ahora tienes un switcher de tema completo!
```

### Reto 6: Sistema de Notificaciones
**Objetivo:** Combinar todos los selectores para crear notificaciones
```javascript
// Tu código aquí
// 1. Usa getElementById() para el contador de notificaciones
// 2. Usa querySelector() para crear nuevas notificaciones
// 3. Usa querySelectorAll() para eliminar todas las notificaciones
// 4. Crea diferentes tipos de notificaciones (éxito, error, info)
// 5. ¡Ahora tienes un sistema de notificaciones completo!
```

---

## 🎯 CONSEJOS IMPORTANTES SOBRE SELECTORES:

### ✅ **Cuándo usar cada uno:**

- **getElementById()**: Cuando necesitas UN elemento específico por ID
- **getElementsByClassName()**: Cuando necesitas varios elementos por clase
- **getElementsByTagName()**: Cuando necesitas todos los elementos de un tipo
- **querySelector()**: Cuando necesitas UN elemento con selectores CSS complejos
- **querySelectorAll()**: Cuando necesitas VARIOS elementos con selectores CSS

### ⚠️ **Diferencias importantes:**

1. **Retorno:**
   - `getElementById()` → UN elemento
   - `getElementsByClassName()` → HTMLCollection
   - `getElementsByTagName()` → HTMLCollection  
   - `querySelector()` → UN elemento
   - `querySelectorAll()` → NodeList

2. **Sintaxis:**
   - Métodos "getElement" → Sin símbolos especiales
   - Métodos "querySelector" → Usan sintaxis CSS (# para ID, . para clase)

3. **Flexibilidad:**
   - Métodos "getElement" → Limitados
   - Métodos "querySelector" → Muy flexibles (cualquier selector CSS)

### 🔍 **Ejemplos prácticos:**

```javascript
// Seleccionar el mismo elemento de diferentes formas:
const elemento1 = document.getElementById('texto-principal');
const elemento2 = document.querySelector('#texto-principal');

// Seleccionar múltiples elementos:
const elementos1 = document.getElementsByClassName('texto-editable');
const elementos2 = document.querySelectorAll('.texto-editable');

// Selectores CSS avanzados:
const primerElemento = document.querySelector('.texto-editable:first-child');
const botonesAzules = document.querySelectorAll('.btn-color[style*="blue"]');
```

### Reto 2: Cambiar Contenido de Texto
**Objetivo:** Modificar el texto de los elementos
```javascript
// Tu código aquí
// 1. Cambia el texto del elemento principal a "¡Hola desde JavaScript!"
// 2. Cambia el texto del elemento secundario a "Este texto fue modificado"
// 3. Verifica los cambios en la página
```

### Reto 3: Cambiar Colores
**Objetivo:** Modificar estilos CSS con JavaScript
```javascript
// Tu código aquí
// 1. Cambia el color del texto principal a rojo
// 2. Cambia el color del texto secundario a azul
// 3. Cambia el color de fondo del contenedor principal
```

---

## 🥈 NIVEL INTERMEDIO - Interactividad

### Reto 4: Crear Event Listeners
**Objetivo:** Hacer que los elementos respondan a clicks
```javascript
// Tu código aquí
// 1. Agrega un event listener al texto principal
// 2. Cuando hagas click, debe cambiar el texto a "¡Me hiciste click!"
// 3. Agrega otro event listener que cambie el color al hacer click
```

### Reto 5: Manipular Inputs
**Objetivo:** Trabajar con campos de entrada
```javascript
// Tu código aquí
// 1. Selecciona el input de texto
// 2. Agrega un event listener para cuando presiones Enter
// 3. Cuando presiones Enter, debe cambiar el texto principal con el valor del input
```

### Reto 6: Crear Botones Dinámicamente
**Objetivo:** Crear elementos HTML con JavaScript
```javascript
// Tu código aquí
// 1. Crea un nuevo botón
// 2. Dale texto y estilos
// 3. Agrégalo al contenedor
// 4. Haz que al hacer click cambie algo en la página
```

---

## 🥉 NIVEL AVANZADO - Funciones y Lógica

### Reto 7: Función para Cambiar Tamaños
**Objetivo:** Crear funciones reutilizables
```javascript
// Tu código aquí
// 1. Crea una función llamada cambiarTamano()
// 2. La función debe recibir un parámetro (pequeño, mediano, grande)
// 3. Debe cambiar el tamaño de fuente del texto principal
// 4. Conecta esta función con los botones de tamaño existentes
```

### Reto 8: Contador de Clicks
**Objetivo:** Mantener estado y actualizar contadores
```javascript
// Tu código aquí
// 1. Crea una variable para contar clicks
// 2. Crea una función que incremente el contador
// 3. Actualiza el elemento del contador en la página
// 4. Conecta esta función con todos los botones
```

### Reto 9: Función de Reset
**Objetivo:** Restaurar valores originales
```javascript
// Tu código aquí
// 1. Crea una función resetearTodo()
// 2. Debe restaurar todos los textos a su estado original
// 3. Debe limpiar todos los estilos aplicados
// 4. Debe resetear el contador a 0
```

---

## 🏆 NIVEL EXPERTO - Proyectos Complejos

### Reto 10: Editor de Texto Interactivo
**Objetivo:** Crear un editor básico
```javascript
// Tu código aquí
// 1. Haz que los elementos de texto sean editables al hacer doble click
// 2. Permite cambiar texto, color y tamaño
// 3. Agrega un botón para guardar/cancelar cambios
// 4. Implementa validación de entrada
```

### Reto 11: Sistema de Temas
**Objetivo:** Cambiar el tema completo de la página
```javascript
// Tu código aquí
// 1. Crea diferentes temas (claro, oscuro, colorido)
// 2. Crea botones para cambiar entre temas
// 3. Guarda la preferencia del usuario
// 4. Aplica el tema a toda la página
```

### Reto 12: Animaciones y Efectos
**Objetivo:** Agregar animaciones CSS con JavaScript
```javascript
// Tu código aquí
// 1. Crea efectos de hover con JavaScript
// 2. Agrega animaciones de entrada para nuevos elementos
// 3. Crea transiciones suaves entre estados
// 4. Implementa efectos de "shake" o "bounce"
```

---

## 🎓 RETOS BONUS - Conceptos Avanzados

### Reto 13: Local Storage
**Objetivo:** Persistir datos en el navegador
```javascript
// Tu código aquí
// 1. Guarda el contador en localStorage
// 2. Recupera el valor al cargar la página
// 3. Guarda las preferencias del usuario
// 4. Implementa un sistema de "favoritos"
```

### Reto 14: Drag and Drop
**Objetivo:** Implementar arrastrar y soltar
```javascript
// Tu código aquí
// 1. Haz que los elementos de texto sean arrastrables
// 2. Permite reordenar elementos
// 3. Guarda el nuevo orden
// 4. Agrega efectos visuales durante el drag
```

### Reto 15: API y Datos Externos
**Objetivo:** Trabajar con datos externos
```javascript
// Tu código aquí
// 1. Crea una función que obtenga datos de una API
// 2. Muestra los datos en la página
// 3. Implementa manejo de errores
// 4. Agrega loading states
```

---

## 📝 CONSEJOS PARA PRACTICAR

1. **Empieza desde el principio** - No saltes retos
2. **Lee la documentación** - MDN Web Docs es tu amigo
3. **Experimenta** - Prueba diferentes enfoques
4. **Debuggea** - Usa console.log() para ver qué pasa
5. **Comenta tu código** - Explica qué hace cada parte
6. **Pide ayuda** - Si te atascas, pregunta específicamente

## 🔧 HERRAMIENTAS ÚTILES

- **Console del navegador** (F12)
- **MDN Web Docs** - Documentación oficial
- **Stack Overflow** - Para problemas específicos
- **CodePen/JSFiddle** - Para experimentar

## 🎯 OBJETIVO FINAL

Al completar todos los retos, tendrás:
- ✅ Dominio sólido de manipulación del DOM
- ✅ Experiencia con eventos y interactividad
- ✅ Habilidades para crear aplicaciones web dinámicas
- ✅ Base sólida para frameworks como React, Vue, etc.

¡Manos a la obra! 🚀 