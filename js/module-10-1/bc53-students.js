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

// const baseUrl = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";

// const get_users = document.querySelector(".get_students");
// get_users.addEventListener("click", getUsers);

// const add_student = document.querySelector(".add_student");
// add_student.addEventListener("click", addUsers);

// const inputId = document.querySelector(".user_id");
// inputId.addEventListener("input", handleInput);

// const get_user_id = document.querySelector(".get_user_id");
// get_user_id.addEventListener("click", getUserId);

// const user_body = document.querySelector(".user_body");
// user_body.addEventListener("input", handleUserPut);

// const put_user_id = document.querySelector(".put_user_id");
// put_user_id.addEventListener("click", putUserId);

// const delete_id = document.querySelector(".delete_id");
// delete_id.addEventListener("click", deleteUserId);

// // const add_text = document.querySelector(".add_text");
// // add_text.addEventListener("click", addText);

// const I_Am_User = {
//   age: 16,
//   animal: "cat",
//   animalName: "Musya",
//   country: "Ukraine",
//   hobbies: ["football", "bees", "stove"],
//   lastName: "Voscovets",
//   name: "Oleg",
// };
// let user_body_put;

// function addText(text) {
//   user_body.innerHTML = JSON.stringify(text);
//   //console.log(text);
// }

// let userId;
// function handleInput(e) {
//   userId = e.currentTarget.value;
// }

// function deleteUserId() {
//   if (inputId.value !== "") {
//     fetch(`${baseUrl}bc53-students/${userId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(`Delete user id = ${userId}`);
//       })
//       .catch((error) => console.log(error));
//   }
// }

// function handleUserPut(e) {
//   // user_body.textContent = JSON.stringify(I_Am_User);
//   // console.log(user_body.textContent);
//   //user_body_put = e.currentTarget.value;
//   user_body_put = e.currentTarget.value;
// }
// function putUserId() {
//   console.log(user_body.textContent, "  id=", inputId.value);
//   if (user_body.value !== "" && inputId.value !== "") {
//     console.log("PUT");

//     fetch(`${baseUrl}bc53-students/${userId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: user_body_put,
//     })
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   }
// }

// function getUserId() {
//   if (inputId.value !== "") {
//     fetch(`${baseUrl}bc53-students/${userId}`)
//       .then((res) => res.json())
//       .then((data) => addText(data))
//       .catch((error) => console.log(error));
//   }
// }

// function getUsers() {
//   fetch(`${baseUrl}bc53-students`)
//     .then((res) => res.json())
//     .then(console.log)
//     .catch((error) => console.log(error));
// }

// function addUsers() {
//   fetch(`${baseUrl}bc53-students`, {
//     method: "POST",
//     body: JSON.stringify(I_Am_User),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error));
// }
