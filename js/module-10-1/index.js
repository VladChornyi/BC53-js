const baseUrl = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";
const getStudents = () => {
  return fetch(`${baseUrl}bc53-students`).then((res) => res.json());
};

getStudents().then((data) => console.log("data :>> ", data));

// const meAdd = {
//   age: 46,
//   animal: "dog",
//   animalName: "Erni",
//   country: "Ukraine",
//   hobbies: "bicycle",
//   lastName: "Kalinchuk",
//   name: "Andrii",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(meAdd),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const addStudents = () => {
//   return fetch(`${baseUrl}bc53-students`, options)
//     .then((res) => res.json())
//     .then(console.log);
// };
// addStudents();

// const correction = {
//   age: 60,
//   animal: "dragon",
//   animalName: "Frankenstaine",
//   country: "USA",
//   hobbies: "cars",
//   lastName: "Alice",
//   name: "Cooper",
// };

// const options = {
//   method: "PUT",
//   body: JSON.stringify(correction),
//   headers: {
//     "Content-Type": "application/json",
//   },
// };

// const putStudents = () => {
//   return fetch(`${baseUrl}bc53-students/34`, options)
//     .then((res) => res.json())
//     .then(console.log);
// };

// putStudents();

// const getStudentsById = () => {
//   return fetch(`${baseUrl}bc53-students/34`).then((res) => res.json());
// };

// getStudentsById().then((data) => console.log("data :>> ", data));

const options = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
};

const deleteStudents = () => {
  return fetch(`${baseUrl}bc53-students/34`)
    .then((res) => res.json())
    .then(console.log);
};

deleteStudents();
