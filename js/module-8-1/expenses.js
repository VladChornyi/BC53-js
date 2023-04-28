export function calculateTotalExpenses(arr) {
  return arr.reduce((acc, el) => acc + el.amount, 0);
}

export function getExpensesByCategory(arr, name) {
  return arr.filter((el) => el.category === name);
}
