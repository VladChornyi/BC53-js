import {getAllCharacters} from './rickAndMorty'

const ul = document.querySelector('ul')
async function renderCharacters (){
    // console.log(await getAllCharacters()) 
   const dataCharacters = await getAllCharacters()

   const result = dataCharacters.map (element => createCard(element))
    ul.insertAdjacentHTML('beforeend', result.join(''))
}

renderCharacters ()

function createCard (data){
   return `
   <li>
        <img src='${data.image}' width='100'>
        <p class='name'>${data.name}</p>
   </li>
   `
}