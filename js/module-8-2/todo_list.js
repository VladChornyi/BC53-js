const form = document.querySelector("form");
const input = document.querySelector("#input");
const ul = document.querySelector("#list");
const TASK_KEY = "task";
let savedTask = [];
// Function to create new task element, return LI element
const createNewTaskElement = (value) => {
  const todoMarkup = `
        <li>
          <input disabled value="${value}"/>
          <div>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};
// Function to handle submit action, call addTask inside
function handleSubmit(event) {
  event.preventDefault();
  const text = input.value;
  addTask(text);
}

// Function to add a task to the list (use createNewTaskElement) and add to LS
function addTask(value) {
  const task = createNewTaskElement(value);
  ul.insertAdjacentHTML("afterbegin", task);
  savedTask.push(value);
  const stringifiedData = JSON.stringify(savedTask);
  localStorage.setItem(TASK_KEY, stringifiedData);
}

// Function to delete a task from the list and delete from LS
function deleteTask() {}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {
  const localTask = localStorage.getItem(TASK_KEY);
  if (localTask) {
    const parseTasks = JSON.parse(localTask);
    savedTask = [...parseTasks];
    const template = parseTasks.map((el) => createNewTaskElement(el)).join("");
    ul.insertAdjacentHTML("afterbegin", template);
  }
}

setTasksOnLoad();

form.addEventListener("submit", handleSubmit);
ul.addEventListener("click", deleteTask);
