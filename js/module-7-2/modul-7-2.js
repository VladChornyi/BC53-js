import { countries } from "./countries.js";
// console.log(countries);
const itemsList = document.querySelector(".country-list");
const handleInput = (array, value) => {};
const rendCauntrList = (array) => {
  const markup = array
    .map((el) => {
      return `<li>
    <div class="countryFlag">${el.flag}</div>
    <p class="countryName">${el.name}</p>
</li>`;
    })
    .join(" ");
  itemsList.innerHTML = markup;
};

rendCauntrList(countries);
