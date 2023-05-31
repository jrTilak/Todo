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
document.querySelector("#add-new-custom-category").addEventListener(("click"), () => {
    document.querySelector(".add-new-category").classList.toggle("flex")
    document.querySelector(".add-new-category input").focus();
})
document.querySelector("#add-new-category__button").addEventListener(("click"), () => {
    let inputValue = document.querySelector(".add-new-category input");

    document.querySelector(".options").innerHTML += `
        <label>
            <input type="radio" name="category" id="category__${inputValue.value}" value="${inputValue.value}" />
            <span class="bubble ${inputValue.value}"></span>
            <div>${inputValue.value}</div>
        </label>
    `
    document.querySelector(".add-new-category").classList.toggle("flex")
    inputValue.value = "";
})