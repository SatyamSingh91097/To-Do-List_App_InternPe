// Get the task input field and add task button
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add task to the list
function addTask() {
    const task = taskInput.value.trim();
    if (task !== '') {
        const taskListItem = document.createElement('li');
        taskListItem.textContent = task;
        taskList.appendChild(taskListItem);
        taskInput.value = '';
    }
}

// Add event listener to task list to toggle completed class
taskList.addEventListener('click', toggleCompleted);

// Function to toggle completed class on task list item
function toggleCompleted(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}