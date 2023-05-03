const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(evt) {
  console.log("evt :>> ", birthdayEl.value);
  const data = new Date("2023-05-11");
  console.log("data :>> ", data);
  const result = data - birthdayEl.value;
  console.log(result);
}

function getAge(birthdayValue) {}

btnEl.addEventListener("click", calculateAge);
