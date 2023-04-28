import expenses from "./transactions.js";
import { calculateTotalExpenses } from "./expenses.js";
import { getExpensesByCategory } from "./expenses.js";
// import * as test from "./expenses.js";

const totalExpenses = calculateTotalExpenses(expenses);
console.log(`Загальна сума витрат: ${totalExpenses}`);

const foodExpenses = calculateTotalExpenses(
  getExpensesByCategory(expenses, "Їжа")
);
console.log(`Витрати на їжу: ${foodExpenses}`);
