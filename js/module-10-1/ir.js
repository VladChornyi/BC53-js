const BASE_URL = "https://63c7e1d3075b3f3a91d50f37.mockapi.io/";

const getStudents = () => {
  return fetch(`${BASE_URL}bc53-students`).then((response) => response.json());
};
getStudents().then((data) => {
  console.log(data);
});

const newUser = {
  age: 25,
  animal: "cat",
  animalName: "Mura",
  country: "Ukraine",
  hobbies: ["stretching", "drawing", "reading"],
  lastName: "Satanovska",
  name: "Iryna",
};

const addStudent = () => {
  return fetch(`${BASE_URL}bc53-students`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then(console.log);
};

addStudent();

const findUser = () => {
  return fetch(`${BASE_URL}bc53-students/60`)
    .then((response) => response.json())
    .then(console.log);
};

findUser();

const changeUser = () => {
  return fetch(`${BASE_URL}bc53-students/86`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      age: 25,
      animal: "unicorn",
      animalName: "Hippo",
      country: "Uganda",
      hobbies: ["stretching", "drawing", "reading"],
      lastName: "Satanovska",
      name: "Iryna",
    }),
  });
};

changeUser();

const deleteUser = () => {
  return fetch(`${BASE_URL}bc53-students/27`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then(console.log);
};

deleteUser();
