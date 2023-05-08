const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";
const studentsUl = document.querySelector(".studentsUl");
const addBtn = document.querySelector(".add_student");


const student = {
  name: "Hannah",
  lastName: "Smith",
};

const createStudentCard = (el) => {
  return `<li data-id='${el.id}'>
  <img src="${el.userImage}" alt="${el.name}" width="150">
  <p>${el.name} ${el.lastName}</p>
    <button type="button" data-delete>Delete student</button>
  </li>`
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

// Del student
studentsUl.addEventListener('click', (event)=>{
  if(event.target.hasAttribute('data-delete')){
    const itemStudent = event.target.closest('li')
    delStudent(itemStudent.dataset.id).then(()=>{
      itemStudent.remove()
    })
  }
})

const delStudent = (id) => {
  return fetch(`${BASE_URL}bc53-students/${id}`, {
    method: "DELETE",
  })
  .then((response)=>response.json())
  .catch((error)=>console.log(error.message))
}


