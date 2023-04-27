import { countries } from "./countries.js";
// console.log(countries);
const itemsList = document.querySelector(".country-list");
const error = document.querySelector(".output-error");
const handleInput = (array, value) => {};
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
rendCountrList(countries);
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

rendSingleCountry(countries[1]);

const errorMessage = (name) => {
  error.textContent = `Oops, there is no country with name ${name}.`;
};
errorMessage();
