[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://todo.thapatilak.com.np/">
    <img src="https://play-lh.googleusercontent.com/KNInXD9XRXJPXtWEGWvNf_MnT664xCO3yBr-KP9wmogIPplkyQcZLahhCmf3h1mtldmz" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Todo - using localstorage API</h3>

  <p align="center">
    A simple todo web application that allows users to create and manage their todo items using local storage API. It provides an intuitive interface for adding, editing, and deleting todo items, as well as marking them as completed.
    <br />
    <a href="https://todo.thapatilak.com.np/">View Demo</a>
    ·
    <a href="https://github.com/jrTilak/todo/issues">Request Feature</a>
    ·
    <a href="https://thapatilak.com.np/projects/...">Read More</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a> </li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#functions-description">Functions Description</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![preview](https://repository-images.githubusercontent.com/646800354/bf3c684f-54d9-4ea1-b86c-32865ba3fa21)
----

## Built With
[![Javascript][Javascript]][Javascript-url] [![CSS][CSS]][CSS-url] [![HTML][HTML]][HTML-url]

## Features

- **User-friendly interface**: The app has a clean and intuitive design, making it easy for users to navigate and interact with the todo list.

- **Create Todo**: Users can add new todo items by entering a title in the input field and clicking the "ADD TODO" button. The newly created todo item will be displayed in the todo list.

- **Edit Todo**: Users can edit the title of a todo item by clicking the edit button (pencil icon) next to the item. This will convert the title into an editable input field, allowing the user to make changes. After editing, the user can click the check button (checkmark icon) to save the changes.

- **Mark as Completed**: Each todo item has a checkbox next to it. Users can mark a todo item as completed by checking the checkbox. The completed todo items will be displayed with a strikethrough line.

- **Delete Todo**: Users can remove a todo item by clicking the delete button (trash icon) next to the item. This will remove the item from the todo list.
- **Remove All Todo**: Users can remove all the stored todo in one click.

---
## Getting Started

To use the Todo App, follow these steps:

1. Visit [Todo](https://todo.thapatilak.com.np/) or you can clone this repo.

3. Enter your name in the input field under the "What's up" heading.

4. Enter a todo item in the input field under the "Let's add some todo!" heading and click the "ADD TODO" button to create a new todo item.

5. Use the edit, checkbox, and delete buttons to edit, mark as completed, and delete todo items respectively.

6. Enjoy managing your todo list!

---
## Functions Description

### Todo
- Constructor function for creating `Todo` objects.
- Parameters: `title`, `createdAt`, `isCompleted` (optional, default is `false`).
- Initializes a new `Todo` object with the provided values.

### getName
- Retrieves the user's name from an input field and stores it in the local storage.
- Adds event listeners for handling user input and blur events.

### getTodo
- Retrieves the todo item from a form.
- Returns a new `Todo` object with the current timestamp as `createdAt` if the content is not empty. Returns `null` if the content is empty.

### saveTodo
- Saves a new todo item to the local storage.
- Parameters: `newTodo` - a `Todo` object to be saved.
- Fetches the existing todo list from the local storage, adds the new todo at the beginning of the list, converts the list to JSON format, and stores it in the local storage.

### fetchTodo
- Fetches the todo list from the local storage.
- Returns an array of todo items retrieved from the local storage.
- If there is an error parsing the JSON or the `todos` key is not found, it clears the local storage and returns an empty array.

### listTodo
- Displays the todo items on the page.
- Parameters: `fetchedList` - an array of todo items.
- Clears the existing content of the `todo-list` element.
- Creates HTML elements for each todo item, including checkboxes, labels, input fields, buttons, etc.
- Adds event listeners for handling checkbox clicks, delete button clicks, and edit button clicks.
- Appends the created HTML elements to the `todo-list` element.
- If the `fetchedList` is empty, it calls the `noTodos` function to display a message.

### changeTitle
- Changes the title of a todo item in the `objectsArray`.
- Parameters: `objectsArray` - an array of objects, `targetTitle` - the target title to match, `newTitle` - the new title to set.
- Finds an object in the `objectsArray` with a matching `title` property to the `targetTitle` and updates its `title` property to the `newTitle`.

### changeStatus
- Changes the status (completed or not) of a todo item in the `objectsArray`.
- Parameters: `objectsArray` - an array of objects, `createdAt` - the createdAt value to match, `newStatus` - the new status to set.
- Finds an object in the `objectsArray` with a matching `createdAt` property to the `createdAt` parameter and updates its `isCompleted` property to the `newStatus`.

### noTodos
- Displays a message when there are no todo items.
- Sets the inner HTML of the `todo-list` element to a form containing a single input field with the message.

### deleteTodoItem__fn
- Deletes a todo item from the local storage.
- Parameters: `id` - the id of the todo item to delete.
- Fetches the existing todo list, filters out the item with the matching `createdAt`, converts the updated list to JSON format, and stores it back in the local storage.

---
## Credits
1. [Favicon](https://play-lh.googleusercontent.com/KNInXD9XRXJPXtWEGWvNf_MnT664xCO3yBr-KP9wmogIPplkyQcZLahhCmf3h1mtldmz)
2. [Boxicons](https://boxicons.com/)

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jrtilak/todo.svg?style=for-the-badge
[contributors-url]: https://github.com/jrtilak/todo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jrtilak/todo.svg?style=for-the-badge
[forks-url]: https://github.com/jrtilak/todo/network/members
[stars-shield]: https://img.shields.io/github/stars/jrtilak/todo.svg?style=for-the-badge
[stars-url]: https://github.com/jrtilak/todo/stargazers
[issues-shield]: https://img.shields.io/github/issues/jrtilak/todo.svg?style=for-the-badge
[issues-url]: https://github.com/jrtilak/todo/issues
[Javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/css
[HTML]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/html
[Node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en


