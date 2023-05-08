const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";
const studentsUl = document.querySelector(".studentsUl");

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

const getStudentList = () => {
  return fetch(`${BASE_URL}bc53-students`).then((response) => response.json());
};
getStudentList().then(renderList);
