getName();
listTodo(fetchTodo())
document.querySelector(".add-todo").addEventListener(("click"), (e) => {
    e.preventDefault()
    getTodo() && saveTodo(getTodo());
    document.querySelector("form.create-todo").elements.content.value = ""
    listTodo(fetchTodo())
})
document.querySelector(".remove-all").addEventListener(("click"), () => {
    let bool = confirm("Do you want to delete all the todo items?")
    if (bool === true) {
        localStorage.removeItem("todos")
        listTodo(fetchTodo())
        noTodos()
    }
})