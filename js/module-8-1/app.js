import expenses from "./transactions.js";

import {
  getExpensesByCategory,
  getUnicCategories,
  renderOptions,
  calculateTotalExpenses,
} from "./expenses.js";

// import * as test from "./expenses.js";
const select = document.querySelector("#expenses");
const categories = getUnicCategories(expenses);
console.log(categories);

const count = document.querySelector(".count");

renderOptions(categories, select);

const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Загальна сума витрат: ${totalExpenses}`);

select.addEventListener("change", hahdleChenge);

function hahdleChenge(e) {
  const countArray = getExpensesByCategory(expenses, e.target.value);
  const total = calculateTotalExpenses(countArray);
  count.textContent = total;
}

count.textContent = calculateTotalExpenses(
  getExpensesByCategory(expenses, select.value)
);
//
