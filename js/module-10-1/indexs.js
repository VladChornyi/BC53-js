// const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";

// const getStudents = () => {
//     return fetch(`${BASE_URL}bc53-students`)
//         .then(response => response.json())
// };
// getStudents().then(data => console.log(data));


// const newStudent = {
//     name: "yana",
//     age: 18,
//     country: "Ukraine",
//     hobbies: "needlework",
// }

// const addUsers = () => {
//     return fetch(`${BASE_URL}bc53-students`,{
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(newStudent)
//     })
//     .then(response => response.json())
//     .then(response => console.log(response))
// }

// addUsers()

// const getStudentsById = () => {
//     return fetch(`${BASE_URL}bc53-students/57`)
//         .then(response => response.json())
//         .then(data => console.log(data))
// };
// getStudentsById()

// const changeUser = () => {
//     fetch(`${BASE_URL}bc53-students/63`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//                 "name": "yana",
//                 "age": 18,
//                 "country": "UK",
//                 "hobbies": "needlework",
//                 "animal": "insect",
//                 "animalName": "Marilyne",
//                 "lastName": "Kuphal",
//                 },)
//     })
//     .then(response => response.json())
//     .then(response => console.log(response))
// }
// changeUser()

// const deleteUser = () => {
//     fetch(`${BASE_URL}bc53-students/74`, {
//         method: "DELETE",
//     })
//     .then(response => response.json())
//     .then(response => console.log(response))
// }
// deleteUser()