export function calculateTotalExpenses(arr) {
  return arr.reduce((acc, el) => acc + el.amount, 0);
}

export function getExpensesByCategory(arr, name) {
  return arr.filter((el) => el.category === name);
}

export function getUnicCategories(array) {
  return array
    .map((item) => {
      return item.category;
    })
    .filter((el, i, arr) => arr.indexOf(el) === i);
}

export function renderOptions(array, element) {
  const markup = array
    .map((item) => {
      return `
    <option value="${item}">${item}</option>
    `;
    })
    .join("");

  element.innerHTML = markup;
}
