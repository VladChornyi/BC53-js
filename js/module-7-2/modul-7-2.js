import { countries } from "./countries.js";
// console.log(countries);
const input = document.querySelector("#search-box");
const itemsList = document.querySelector(".country-list");
const error = document.querySelector(".output-error");

const rendCountrList = (array) => {
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

const rendSingleCountry = (country) => {
  const countryInfo = `<li>
    <div class="previewCard">
        <div class="countryFlag">
                <p class="countryName">${country.name} ${country.flag}</p>
            </div>
    </div>
    <p class="countryCapital"><b>Capital </b> ${country.capital}</p>
    <p class="countryPopulation"><b>Population: </b>${country.population}</p>
    <p class="countryArea"><b>Area: </b>${country.area}</p>
</li>`;
  itemsList.innerHTML = countryInfo;
};

const errorMessage = (name) => {
  error.textContent = `Oops, there is no country with name ${name}.`;
};

const handleInput = (event) => {
  const { value } = event.target;
  if (!value.trim()) {
    itemsList.innerHTML = "";
  }
  const filtredCountries = countries.filter((el) => {
    return el.name.toLowerCase().includes(value.toLowerCase().trim());
  });
  if (filtredCountries.length === 0) {
    return errorMessage(value);
  }
  if (filtredCountries.length === 1) {
    return rendSingleCountry(filtredCountries[0]);
  }
  if (filtredCountries.length > 1) {
    return rendCountrList(filtredCountries);
  }
};

input.addEventListener("input", _.debounce(handleInput, 800));
