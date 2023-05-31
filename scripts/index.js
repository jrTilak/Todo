getName();
listTodo(fetchTodo())
document.querySelector(".add-todo").addEventListener(("click"), (e) => {
    e.preventDefault()
    getTodo() && saveTodo(getTodo());
    document.querySelector("form.create-todo").elements.content.value = ""
    listTodo(fetchTodo())
})
document.querySelector(".remove-all").addEventListener(("click"), () => {
    localStorage.removeItem("todos")
    listTodo(fetchTodo())
    noTodos()
})