const monthNameEl = document.querySelector("#month-name");
const dayNameEl = document.querySelector("#day-name");
const dayNumEl = document.querySelector("#day-number");
const yearEl = document.querySelector("#year");

const date = new Date();
// console.log(date);

const mounth = date.toLocaleDateString("uk-UA", { month: "long" });
const day = date.toLocaleDateString("uk-UA", { weekday: "long" });
const num = date.toLocaleDateString("uk-UA", { day: "numeric" });
const year = date.toLocaleDateString("uk-UA", { year: "numeric" });

monthNameEl.textContent = mounth;
dayNameEl.textContent = day;
dayNumEl.textContent = num;
yearEl.textContent = year;
