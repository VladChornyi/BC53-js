const BASE_URL = 'https://63c7e1d3075b3f3a91d50f37.mockapi.io/';
const studentsUl = document.querySelector('.studentsUl');
const addBtn = document.querySelector('.add_student');
const inputFilter = document.querySelector('.filter');
const studentList = [];

// console.log(inputFilter);


inputFilter.addEventListener('input',_.debounce(onInput,500))

const createStudentCard = el => {
  return `<li data-id='${el.id}'>
  <img src="${el.userImage}" alt="${el.name}" width="150">
  <p>${el.name} ${el.lastName}</p>
    <button type="button" data-delete>Delete student</button>
  </li>`;
};

const renderList = arr => {
  const students = arr.map(createStudentCard).join('');
  studentsUl.innerHTML = students;
};

const renderEl = el => {
  studentsUl.insertAdjacentHTML('beforeend', el);
};

const getStudentList = () => {
  return fetch(`${BASE_URL}bc53-students`).then(response => response.json());
};
getStudentList().then((res)=>{
  studentList.push(...res);
  renderList(res)});

const addStudent = student => {
  return fetch(`${BASE_URL}bc53-students`, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify(student),
  }).then(response => response.json());
};

// addBtn.addEventListener('click', () => {
//   addStudent(student).then(createStudentCard).then(renderEl);
// });

// Del student
studentsUl.addEventListener('click', event => {
  if (event.target.hasAttribute('data-delete')) {
    const itemStudent = event.target.closest('li');
    delStudent(itemStudent.dataset.id).then(() => {
      itemStudent.remove();
      const index = studentList.findIndex((e)=>itemStudent.dataset.id === e.id);
      console.log(studentList.splice(index,1));
    });
  }
});

const delStudent = id => {
  return fetch(`${BASE_URL}bc53-students/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.log(error.message));
};

const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const student = {
    name: event.target.elements.name.value,
    lastName: event.target.elements.lastName.value,
    age: event.target.elements.age.value,
    country: event.target.elements.country.value,
    animalName: event.target.elements.animalName.value,
    animal: event.target.elements.animal.value,
  };
  
  addStudent(student).then((data)=>{
    studentList.push(data)
    return createStudentCard(data)})
    .then(renderEl);
});
 function onInput(e){
  const value = e.target.value.toLowerCase();
  console.log(e.target.value);
  renderList(studentList.filter((e)=>(e.name.toLowerCase().includes(value) || e.lastName.toLowerCase().includes(value))))

 }