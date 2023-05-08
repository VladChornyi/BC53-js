const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";
const studentsUl = document.querySelector(".studentsUl");
const addBtn = document.querySelector(".add_student");

const student = {
  name: "Hannah",
  lastName: "Smith",
};

const createStudentCard = (el) => {
  return `<li>
    <img src="${el.userImage}" alt="${el.name}" width="150">
    <p>${el.name} ${el.lastName}</p>
</li>`;
};

const renderList = (arr) => {
  const students = arr.map(createStudentCard).join("");
  studentsUl.innerHTML = students;
};

const renderEl = (el) => {
  studentsUl.insertAdjacentHTML("beforeend", el);
};

const getStudentList = () => {
  return fetch(`${BASE_URL}bc53-students`).then((response) => response.json());
};
getStudentList().then(renderList);

const addStudent = (student) => {
  return fetch(`${BASE_URL}bc53-students`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(student),
  }).then((response) => response.json());
};

addBtn.addEventListener("click", () => {
  addStudent(student).then(createStudentCard).then(renderEl);
});
