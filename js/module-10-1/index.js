const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";

const getStudents = () => {
  return fetch(`${BASE_URL}bc53-students`).then((response) => response.json());
};
getStudents().then((data) => {
  console.log(data);
});

const I_Am_Terminator = {
  age: 30,
  animal: "tiger",
  animalName: "Bonya",
  lastName: "Jonsonyk",
  name: "Serhii",
};
const addBtn = document.querySelector(".adedd");
addBtn.addEventListener("click", () => {
  function addUser() {
    return fetch(`${BASE_URL}bc53-students`, {
      method: "POST",
      body: JSON.stringify(I_Am_Terminator),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  addUser();
});

const getUserByid = () => {
  return fetch(`${BASE_URL}bc53-students/30`).then((resp) => resp.json());
};
// getUserByid();

const changeUser = () => {
  fetch(`${BASE_URL}bc53-students/36`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Jora",
      age: 18,
      country: "Hogwards",
      hobbies: "needlework",
      animal: "insect",
      animalName: "Marilyne",
      lastName: "Gar",
      id: "36",
    }),
  })
    .then((response) => response.json())
    .then(console.log);
};
// changeUser();

const deletteUser = () => {
  fetch(`${BASE_URL}bc53-students/75`, {
    method: "DELETE",
  })
    .then((resp) => resp.json())
    .then(console.log);
};
// deletteUser();
