const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(evt) {
  const data = new Date(birthdayEl.value);
  const currentDate = new Date()

  const result = getAge(currentDate - data);
  window.result.textContent = `Your age is ${result} years old`
}

btnEl.addEventListener("click", calculateAge);

function getAge(number){
  return Math.floor(number / (1000*60*60*24*365.25))
}
