// ## 2. Викоритовуй шаблон списку завдань з файлу [todoList.html](./todoList.html) 
// для створення функціоналу для списку завдань. Використовуй поширення подій.

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to create new task element, return LI element
const createNewTaskElement = value => {
    const listItem = document.createElement('li');

    const markup = `
    <input type="checkbox"/>
    <label>${value}</label>
    <input type="text" value="${value}" />
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
`;
    listItem.innerHTML = markup;
    return listItem;
};

// Function to add a task to the list (use createNewTaskElement)
function addTask() {
    const addedElement = createNewTaskElement(taskInput.value);
    taskList.prepend(addedElement)
}

// Function to delete a task from the list
function deleteTask(event) {
    if (event.target.classList.contains("delete")) {
        event.target.closest("li").remove()
    }
}

// ul li.editMode input[type='text'] { display: block;}
//ul li.editMode label {  display: none;

// Function to edit a task (if button with class "edit" contains additional class "editMode" do smth) {
function editTask(event) {
    if (event.target.classList.contains("edit")) {
        const findLi = event.target.closest("li") // set pointer to Li

        const inputRef = event.target.previousElementSibling //find input field
        const inputValue = inputRef.value

        const labelRef = inputRef.previousElementSibling
        if (findLi.classList.contains("editMode")) {
            labelRef.textContent = inputValue
            findLi.classList.remove("editMode")
        } else {
            findLi.classList.add("editMode") // set class
        }
    }
}

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', editTask);
taskList.addEventListener('click', deleteTask);