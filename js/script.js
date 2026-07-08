// Array to store our academic tasks in memory
let tasks = [];

// DOM Element Selectors
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event listener for adding tasks via button click
addTaskBtn.addEventListener('click', createNewTask);

// Event listener for pressing "Enter" inside the text field
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createNewTask();
    }
});

// Core Function to handle input collection and verification
function createNewTask() {
    const taskText = taskInput.value.trim();
    
    // Simple verification check to make sure the field isn't blank
    if (taskText === "") {
        alert("Please enter a valid academic task description first.");
        return;
    }
    
    // Create a new task object structure
    const taskItem = {
        id: Date.now(),
        title: taskText,
        completed: false
    };
    
    // Push the item to our data array
    tasks.push(taskItem);
    
    // Clear out input field for user reuse
    taskInput.value = "";
    
    // Update the layout view screen
    renderTasks();
}

// Function to redraw the screen interface dynamically
function renderTasks() {
    // Empty out existing tasks view list to avoid double rendering
    taskList.innerHTML = "";
    
    // Loop through our array elements using built-in array methods
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        // Build out task text structure elements
        const textSpan = document.createElement('span');
        textSpan.className = 'task-text';
        textSpan.textContent = task.title;
        
        // Action Controls container wrapper
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'task-actions';
        
        // Complete/Checkmark Action toggle control button
        const checkBtn = document.createElement('button');
        checkBtn.className = 'check-btn';
        checkBtn.innerHTML = task.completed ? '&#8634; Undo' : '&#10003; Complete';
        checkBtn.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        
        // Permanent Removal Action trigger button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '&#128465; Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(item => item.id !== task.id);
            renderTasks();
        });
        
        // Splice all constructed controls back onto the live document tree hierarchy
        actionsDiv.appendChild(checkBtn);
        actionsDiv.appendChild(deleteBtn);
        
        li.appendChild(textSpan);
        li.appendChild(actionsDiv);
        
        taskList.appendChild(li);
    });
}