





function NewTask(event) {
    event.preventDefault();
    const form = event.target;
    const taskInput = form.querySelector('#task-name');
    const id = generateTaskId();
    Task = { id: id, name: taskInput.value, state: "new" };
    addTask(Task);
    taskInput.value = '';
    renderTasks();
    closeTaskModal();
}




function renderTasks() {
    refreshTasks('new');
    refreshTasks('progress');
    refreshTasks('completed');
}

function refreshTasks(state) {

    let idlist = '';
    switch (state) {
        case 'new':
            idlist = 'new-tasks-list';
            break;
        case 'progress':
            idlist = 'progress-tasks-list';
            break;
        case 'completed':
            idlist = 'completed-tasks-list';
            break;
        default:
            console.error('Invalid state provided');
            return;
    }

    const taskList = document.getElementById(idlist);
    taskList.innerHTML = '';
    const data = getUserData();
    const Tareas = data.tasks.filter(task => task.state === state);
    if (!data || !data.tasks || data.tasks.length === 0 || Tareas.length === 0) {
        taskList.innerHTML += '<div class="list__empty"  >No tasks available</div>';
    }

    Tareas.forEach(task => {
        if (task.state === state) {
            taskList.innerHTML += taskListItem(task);
        }
    });

    
}
function taskListItem(task) {
    return `<li class="list__item" id="${task.id}" ondblclick="ModoEdicion('${task.id}')"  draggable="true" ondragstart="dragstartHandler(event)" >${task.name} ${listItemDelete(task)}</li>`;
    //<li class="list__item">Task 1: Design the UI</li>
}
function listItemDelete(task) {
    return `<span class="list__item-delete" onclick="removeTask('${task.id}')">X</span>`;
    //<li class="list__item">Task 1: Design the UI</li>
}

//drag and drop
function dragstartHandler(ev) {
    ev.dataTransfer.setData("idtask", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
    ev.target.classList.add('dragging');
}

function dropHandler(ev) {
    const taskId = ev.dataTransfer.getData("idtask");
    let data = getUserData();
    const eventTarget = ev.target;
    let state = "";
    if (eventTarget.nodeName == 'DIV') {
        eventTarget.parentElement.appendChild(document.getElementById(taskId));
        state = eventTarget.parentElement.id.split('-tasks-list', 1)[0];
        eventTarget.remove();
        ev.preventDefault();
    } else if (eventTarget.nodeName == 'LI') {
        eventTarget.before(document.getElementById(taskId));
        state = eventTarget.parentElement.id.split('-tasks-list', 1)[0];
        ev.preventDefault();
    } 
    
    else if (eventTarget.nodeName == 'UL') {
        eventTarget.appendChild(document.getElementById(taskId));
        state = eventTarget.id.split('-tasks-list', 1)[0];
    } else {
        console.error('Invalid target for drop');
    }

    data.tasks.forEach(task => {
        if (task.id === taskId) {
            task.state = state;
            updateTask(task);
        }
    });
}


function dragoverHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function ModoEdicion(taskId) {
    const listItem = document.getElementById(taskId);
    const task = getTask(taskId);
    if (!task || !listItem) return;

    // Prevent multiple inputs
    if (listItem.querySelector('input')) return;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.name;
    input.className = 'edit-task-input';

    // Replace text with input
    listItem.innerHTML = '';
    listItem.appendChild(input);

    input.focus();

    // Save on blur or Enter
    input.addEventListener('blur', saveEdit);
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            saveEdit(task);
        }
    });

    function saveEdit() {
        const newName = input.value.trim();

        if (newName && newName !== task.name) {
            task.name = newName;
            updateTask(task);
        }
        renderTasks();
    }
}
// crud 
function openTaskModal() {

    const ModalContainer = document.createElement('div');
    ModalContainer.className = 'modal-overlay';
    ModalContainer.innerHTML = `
        <div class="FormNewTask" id="tasksNewform">
            <h2 class="FormNewTask__title">New Task</h2>
            <form class="FormNewTask__form" onsubmit="NewTask(event)">
                <label for="task-name">Task Name:</label>
                <input type="text" id="task-name" name="task-name" required>
                <button type="submit">Add Task</button>
            </form>
        </div>`;

    ModalContainer.addEventListener('click', function (e) {
        if (e.target === ModalContainer) {
            closeTaskModal();
        }
    });

    const body = document.querySelector('body');
    body.appendChild(ModalContainer);

    document.addEventListener('keydown', handleEscape);
    const input = ModalContainer.querySelector('#task-name');
    if (input) input.focus();
}

function handleEscape(e) {
    if (e.key === 'Escape') {
        closeTaskModal();
        document.removeEventListener('keydown', handleEscape);
    }
}

function closeTaskModal() {
    const modalForm = document.getElementById('tasksNewform');
    const background = document.querySelector('.modal-overlay');
    modalForm.remove();
    background.remove();
}

function generateTaskId() {
    let data = getUserData();
    count = data.tasks.length + data.removedTasks.length + 1;
    return `task-${data.userId}-${count}`;
}

function getTask(taskid) {
    let userTasks = getUserData();
    // Buscar la tarea por su ID
    const task = userTasks.tasks.find(t => t.id === taskid);
    return task || null; // Retorna la tarea encontrada o null si no existe
}

function addTask(task) {

    let userTasks = getUserData();
    userTasks.tasks.push(task);
    saveData(userTasks);
}

function updateTask(Task) {
    let userTasks = getUserData();

    // Buscar el índice de la tarea a remover
    const taskIndex = userTasks.tasks.findIndex(t => t.id === Task.id);

    if (taskIndex === -1) {
        return; // Si no se encuentra la tarea, no hacer nada
    }
    // ACTUALIZAR
    userTasks.tasks[taskIndex] = Task;
    saveData(userTasks);
}
function removeTask(taskId) {
    let userTasks = getUserData();
    // Buscar el índice de la tarea a remover
    const taskIndex = userTasks.tasks.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return; // Si no se encuentra la tarea, no hacer nada
    }
    // Remover la tarea del array de tareas activas
    const [removedTask] = userTasks.tasks.splice(taskIndex, 1);

    // Si no existe la lista de removidas, la crea
    if (!Array.isArray(userTasks.removedTasks)) {
        userTasks.removedTasks = [];
    }

    // Agrega la tarea removida a la lista de removidas
    userTasks.removedTasks.push(removedTask);

    saveData(userTasks);
    renderTasks();
}

function getData(userid) {
    // Obtener los datos de localStorage o inicializar como array vacío
    let data = JSON.parse(localStorage.getItem('tasks')) || [];

    // Buscar si existe un objeto para el usuario
    let userTaskObj = data.find(obj => obj.userId === userid);
    let Actualizar = false;
    // Si no existe, crear el objeto del usuario con lista vacía de tareas
    if (!userTaskObj) {
        userTaskObj = {
            userId: userid,
            tasks: [],
            removedTasks: []
        };
        data.push(userTaskObj);
        Actualizar = true;
    }
    if (!Array.isArray(userTaskObj.tasks)) {
        userTaskObj.removedTasks = [];
        Actualizar = true;
    }

    if (!Array.isArray(userTaskObj.removedTasks)) {
        userTaskObj.removedTasks = [];
        Actualizar = true;
    }

    // Guardar los datos actualizados en localStorage
    if (Actualizar) {
        saveData(userTaskObj);

    }
    return userTaskObj;

}
function getUserData() {
    let user = getCurrentUser();
    let userTasks = getData(user.id);
    return userTasks;
}
function saveData(userTaskObj) {
    // Obtener los datos de localStorage o inicializar como array vacío
    let data = JSON.parse(localStorage.getItem('tasks')) || [];

    // Buscar el índice del objeto del usuario
    const index = data.findIndex(obj => obj.userId === userTaskObj.userId);

    if (index !== -1) {
        // Actualizar el objeto existente
        data[index] = userTaskObj;
    } else {
        // Si no existe, agregarlo
        data.push(userTaskObj);
    }

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('tasks', JSON.stringify(data));
}



function getCurrentUser() {

    return {
        id: 'cristian.rodriguez',
        name: 'Cristian Rodriguez',
        email: '',
    }
}


function init() {
    // Espera a que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function () {
        renderTasks();
    });
}
init();
