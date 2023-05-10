import { getAllCharacters, getByParams } from './rickAndMorty';

const ul = document.querySelector('ul');

const form = document.querySelector('form');

form.addEventListener('submit', handleSibmit);

async function getData() {
  try {
    const dataCharacters = await getAllCharacters();
    renderCharacters(dataCharacters);
  } catch (error) {
    console.log(error);
  }
}

getData();

async function renderCharacters(data) {
  const result = data.map(element => createCard(element));
  ul.innerHTML = result.join('');
}

async function handleSibmit(e) {
  e.preventDefault();
  const param = {
    name: e.target.elements.name.value,
    status: e.target.elements.status.value,
    gender: e.target.elements.gender.value,
  };
  try {
    const data = await getByParams(param);
    renderCharacters(data);
  } catch (error) {
    console.log(error);
  }
}

function createCard(data) {
  return `
   <li>
        <img src='${data.image}' width='100'>
        <p class='name'>${data.name}</p>
   </li>
   `;
}
