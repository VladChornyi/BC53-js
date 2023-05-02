const LOCAL_ARRAY = "todoItem";

const form = document.querySelector("form");
const input = document.querySelector("#input");
const ul = document.querySelector("#list");

form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);
ul.addEventListener("click", deleteTask);

const task = {
  value: null,
  array: [],
};

function handleInput(e) {
  task.value = e.target.value;
}

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
function handleSubmit(e) {
  e.preventDefault();
  console.log(task);
  if (task.value) {
    task.array.push(task.value);
    console.log(task.array);
    localStorage.setItem(LOCAL_ARRAY, JSON.stringify(task.array));
    const markup = createNewTaskElement(task.value);
    ul.insertAdjacentHTML("afterbegin", markup);
  }
  input.value = "";
}

// Function to add a task to the list (use createNewTaskElement) and add to LS
function addTask(arr) {
  localStorage.setItem(LOCAL_ARRAY, arr);
  const markup = arr
    .reverse()
    .map((item) => {
      return createNewTaskElement(item);
    })
    .join("");
  ul.insertAdjacentHTML("afterbegin", markup);
}

// Function to delete a task from the list and delete from LS
function deleteTask() {}

// Function to get tasks from LS and set them into ul
function setTasksOnLoad() {
  const localArray = JSON.parse(localStorage.getItem(LOCAL_ARRAY));

  if (localArray) {
    task.array = localArray;
    const markup = localArray
      .reverse()
      .map((item) => {
        return createNewTaskElement(item);
      })
      .join("");
    ul.insertAdjacentHTML("afterbegin", markup);
    // addTask(localArray);
  }
}
setTasksOnLoad();

//=================

// function onlyUniqueArray(value, index, self) {
//   return self.indexOf(value) === index;
// }
