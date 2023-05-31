// Calls the getName function to handle username input and storage
getName();

// Displays the todo list based on the fetched todos from local storage
listTodo(fetchTodo());

// Adds an event listener to the "Add Todo" button
document.querySelector(".add-todo").addEventListener(("click"), (e) => {
    e.preventDefault();
    // Calls the getTodo function to retrieve the new todo item
    // If a valid todo is obtained, it saves the todo and clears the input field
    getTodo() && saveTodo(getTodo());
    document.querySelector("form.create-todo").elements.content.value = "";
    // Updates the displayed todo list after adding a new todo
    listTodo(fetchTodo());
});

// Adds an event listener to the "Remove All" button
document.querySelector(".remove-all").addEventListener(("click"), () => {
    // Asks for confirmation before deleting all todo items
    let bool = confirm("Do you want to delete all the todo items?");
    if (bool === true) {
        // Removes the todos from local storage
        localStorage.removeItem("todos");
        // Updates the displayed todo list and shows a message for no todos
        listTodo(fetchTodo());
        noTodos();
    }
});
