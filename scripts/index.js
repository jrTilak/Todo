const greetingsTitle = document.getElementById('greetings__title');
const todoForm = document.querySelector('.create-todo');
const todoInput = document.querySelector('.create-todo input[name="content"]');
const todoList = document.getElementById('todo-list');
const removeAllBtn = document.querySelector('.remove-all');

greetingsTitle.addEventListener('input', updateGreetings);

todoForm.addEventListener('submit', addTodo);
removeAllBtn.addEventListener('click', removeAllTodos);
todoList.addEventListener('click', handleListActions);

function updateGreetings(e) {
    const name = e.target.value.trim();
    const greetingText = document.querySelector('.greetings .title');
    greetingText.textContent = `What's up, ${name.length > 0 ? name : 'buddy'}?`;
}

function addTodo(e) {
    e.preventDefault();

    const todoContent = todoInput.value.trim();
    if (todoContent.length === 0) return;

    const listItem = createListItem(todoContent);
    todoList.appendChild(listItem);

    todoInput.value = '';
}

function createListItem(content) {
    const listItem = document.createElement('div');
    listItem.classList.add('list-item');

    const todoText = document.createElement('span');
    todoText.textContent = content;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="bx bx-trash"></i>';

    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    return listItem;
}

function removeAllTodos() {
    todoList.innerHTML = '';
}

function handleListActions(e) {
    if (e.target.tagName === 'BUTTON') {
        const listItem = e.target.closest('.list-item');
        if (listItem) {
            listItem.remove();
        }
    }
}
