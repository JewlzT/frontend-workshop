// Get elements by ID
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const emptyMessage = document.getElementById('emptyMessage');
const editModal = document.getElementById('editModal');
const editInput = document.getElementById('editInput');

let currentEditItem = null;

// Add task when clicking the button
function addTodo() {
    // Trim text
    
    // If empty, alert the user
    

    // Create list element
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span class="todo-text">${(text)}</span>
        <button class="edit-btn" onclick="startEdit(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;

    // Append new list element
    todoList.appendChild(li);

    // Update state
    todoInput.value = '';
    todoInput.focus();
    showHideEmptyMessage();
}

// Toggle task completion
function toggleComplete(checkbox) {
    const todoItem = checkbox.closest('.todo-item');
    todoItem.classList.toggle('completed');
}

// Start editing a task
function startEdit(button) {
    currentEditItem = button.closest('.todo-item');
    const currTextArea = currentEditItem.querySelector('.todo-text');
    editInput.value = currTextArea.textContent;
    editModal.classList.remove('hidden');
    editInput.focus();
    editInput.select();
}

// Save edited task
function saveEdit() {
    // Trim text
    const newText = editInput.value.trim();

    // If empty, alert the user
    if (newText === '') {
        alert('Task cannot be empty');
        return;
    }

    const currTextArea = currentEditItem.querySelector('.todo-text');
    currTextArea.textContent = newText;
    closeEditModal();
}

// Cancel editing
function closeEditModal() {
    editModal.classList.add('hidden');
    currentEditItem = null;
}

// Delete task
function deleteTodo(button) {
    button.closest('.todo-item').remove();
    showHideEmptyMessage();
}

// Show/hide empty message
function showHideEmptyMessage() {
    emptyMessage.style.display = todoList.children.length === 0 ? 'block' : 'none';
}

// Initial empty message
showHideEmptyMessage();