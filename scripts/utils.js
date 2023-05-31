let Todo = function (title, category = "none", createdAt, isCompleted = false) {
    this.title = title;
    this.category = category;
    this.isCompleted = isCompleted;
    this.createdAt = createdAt;
}

let getName = () => {
    let greetings__title = document.querySelector("#greetings__title")
    greetings__title.addEventListener("change", () => {
        localStorage.setItem("username", greetings__title.value)
    })
    let username = (localStorage.getItem("username") || "")
    if (username === "") {
        greetings__title.focus()
    }
    greetings__title.value = username;
}


let getTodo = () => {
    let form = document.querySelector("form.create-todo");
    let content = form.elements.content.value;
    if (content !== "") {
        let category = form.elements.category.value;
        category = category === "" ? "none" : category;
        let createdAt = new Date().getTime()
        let newTodo = new Todo(content, category, createdAt)
        return newTodo;
    }
    return null;
}

let saveTodo = (newTodo) => {
    let todoList = fetchTodo()
    todoList.unshift(newTodo)
    todoList = JSON.stringify(todoList);
    localStorage.setItem("todos", todoList)
}

let fetchTodo = () => {
    try {
        return (JSON.parse(localStorage.getItem("todos")) || []);
    } catch (error) {
        console.error("Donot modify the content of Local Storage JSON");
        localStorage.clear();
        return [];
    }
}

let listTodo = (fetchedList) => {
    let todoList = document.querySelector("#todo-list");
    todoList.textContent = ""; // Clear existing content
    let categories = new Set;
    let categoriesOption = document.querySelector(".options")
    categoriesOption.innerHTML = `
                <label id="add-new-custom-category">
                    <i class='bx bx-plus-medical'></i>
                    <div>New</div>
                </label>
                <label>
                    <input checked type="radio" name="category" id="category__none" value="none" />
                    <span class="bubble radio_none"></span>
                    <div>None</div>
                </label>
            `
    if (fetchedList.length >= 1) {
        fetchedList.forEach((elem) => {
            //get categories
            categories.add(elem.category);

            // Create the form element
            let form = document.createElement("form");
            form.className = "todo-item";
            form.id = `todo__${elem.createdAt}`;

            // Create the label, checkbox, and bubble elements
            let label = document.createElement("label");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            let bubble = document.createElement("span");
            bubble.className = "bubble business";
            if (elem.isCompleted === true) {
                checkbox.setAttribute("checked", true)
            }

            // Append checkbox and bubble to the label
            label.appendChild(checkbox);
            label.appendChild(bubble);

            // Create the todo content element
            let todoContent = document.createElement("div");
            todoContent.className = "todo-content";
            let todoInput = document.createElement("input");
            todoInput.type = "text";
            todoInput.value = elem.title;
            todoInput.readOnly = true;
            todoContent.appendChild(todoInput);
            if (elem.isCompleted === true) {
                todoInput.style.textDecoration = "line-through"
            }

            // Create the actions container element
            let actions = document.createElement("div");
            actions.className = "actions";

            // Create the edit button
            let editButton = document.createElement("button");
            editButton.type = "button";
            editButton.className = "edit";
            let editIcon = document.createElement("i");
            editIcon.className = "bx bx-edit-alt";
            editButton.appendChild(editIcon);

            // Create the edit check button
            let editCheckButton = document.createElement("button");
            editCheckButton.type = "submit";
            editCheckButton.className = "edit check";
            editCheckButton.style.display = "none";
            let editCheckIcon = document.createElement("i");
            editCheckIcon.className = "bx bx-check";
            editCheckButton.appendChild(editCheckIcon);

            // Create the delete button
            let deleteButton = document.createElement("button");
            deleteButton.type = "button";
            deleteButton.className = "delete";
            let deleteIcon = document.createElement("i");
            deleteIcon.className = "bx bx-x";
            deleteButton.appendChild(deleteIcon);

            // Append buttons to the actions container
            actions.appendChild(editButton);
            actions.appendChild(editCheckButton);
            actions.appendChild(deleteButton);

            // Append all elements to the form
            form.appendChild(label);
            form.appendChild(todoContent);
            form.appendChild(actions);

            // Add event listener to the delete button
            checkbox.addEventListener("click", () => {
                let todoArr = fetchTodo()
                if (elem.isCompleted === false) {
                    changeStatus(todoArr, elem.createdAt, true)
                }
                else {
                    changeStatus(todoArr, elem.createdAt, false)
                }
                todoArr = JSON.stringify(todoArr)
                localStorage.setItem("todos", todoArr)
                listTodo(fetchTodo())
            })
            deleteButton.addEventListener("click", () => {
                deleteTodoItem__fn(elem.createdAt);
            });
            editButton.addEventListener("click", () => {
                todoInput.removeAttribute("readonly")
                todoInput.focus();
                // todoInput.select();
                editButton.style.display = "none";
                editCheckButton.style.display = "inline";
            })

            editCheckButton.addEventListener("click", (e) => {
                todoInput.setAttribute("readonly", "readonly")
                e.preventDefault();
                editButton.style.display = "inline";
                editCheckButton.style.display = "none";
                let editedTodo = todoInput.value
                let todoArr = fetchTodo()
                changeTitle(todoArr, elem.title, editedTodo)
                todoArr = JSON.stringify(todoArr)
                localStorage.setItem("todos", todoArr)
                listTodo(fetchTodo())
            })



            // Append the form to the todoList
            todoList.appendChild(form);
        });
    }
    else {
        noTodos()
    }
    //set categories
    categories.forEach((elem__cat) => {
        if (elem__cat !== "none") {
            categoriesOption.innerHTML += `
                    <label>
                        <input type="radio" name="category" id="category__${elem__cat}" value="${elem__cat}" />
                        <span class="bubble ${elem__cat}"></span>
                        <div>${elem__cat}</div>
                    </label>
                    `
        }
    })

    
};

function changeTitle(objectsArray, targetTitle, newTitle) {
    // Find the object with the matching createdAt value
    let targetObject = objectsArray.find(obj => obj.title === targetTitle);

    // If the object is found, update its title
    if (targetObject) {
        targetObject.title = newTitle;
    }
}
function changeStatus(objectsArray, createdAt, newStatus) {
    // Find the object with the matching createdAt value
    let targetObject = objectsArray.find(obj => obj.createdAt === createdAt);

    // If the object is found, update its title
    if (targetObject) {
        targetObject.isCompleted = newStatus;
    }
}


let noTodos = () => {
    document.querySelector("#todo-list").innerHTML = `
    <form class="todo-item">
        <div class="todo-content" style="text-align: center;">
            <input type="text" value="No Todos to show. Let's add some!!" readonly="">
        </div>
    </form>
    `
}


let deleteTodoItem__fn = (id) => {
    let allTodo = fetchTodo();
    allTodo = allTodo.filter((elem) => { return elem.createdAt !== id })
    allTodo = JSON.stringify(allTodo)
    localStorage.setItem("todos", allTodo)
    listTodo(fetchTodo())
}


