//Selecting necessary elements
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

//Create a new to-do item
function createTodoItem (text) {
    let todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let span = document.createElement('span');
    span.textContent = text;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    

    todoItem.appendChild(checkbox);
    todoItem.appendChild(span);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
}

//This handles adding a new to-do item
function handleAddTodo () {
    //Taking input from input field and trimming whitespace
    let todoText = todoInput.value.trim();
    //Verifies that the input is not empty
    if (todoText !== '') {
        //Calls the createTodoItem function to create a new item
        createTodoItem(todoText);
        //Clears the input field 
        todoInput.value = '';
    }
}

// Function to handle deleting a to-do item
function handleDeleteTodo() {
    // Get the parent container of the item and remove it from the list
    let todoItem = this.parentNode;
    todoList.removeChild(todoItem);
}

//Event listener
document.addEventListener('DOMContentLoaded', function () {
    //Create add button
    let addButton = document.createElement ('button');
    addButton.textContent = 'Add';
    addButton.addEventListener('click', handleAddTodo);
    document.querySelector('.todo-container').prepend(addButton);

    //Event listener for the input field when Enter is pressed
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    });
    //Event Listener for the todo list to handle delete button clicks
    todoList.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            handleDeleteTodo.call(e.target);
        }
    });
});

