const BASE_URL = 'https://63c7e1d3075b3f3a91d50f37.mockapi.io/'

const getStudents = () => {
    return fetch(`${BASE_URL}bc53-students`)
    .then(response => response.json())
    .then(data => console.log(data))
}
getStudents()

const newUser = {
    name: 'Nikita',
    age: 21,
    country: 'Ukraine',
    city: 'Energodar',
}

const addNewUser = () => {
    return fetch(`${BASE_URL}bc53-students`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newUser),
    })
    .then(response => response.json())
    .then(console.log)
}


const delNewUser = () => { 
    //                                         :id
    return fetch(`${BASE_URL}bc53-students/2132112412412412`, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(console.log)
}

const buttonAdd = document.querySelector('[data-add-user]')
const buttonDel = document.querySelector('[data-del-user]')

buttonAdd.addEventListener('click', ()=>addNewUser())
buttonDel.addEventListener('click', ()=>delNewUser())

function addStylesButton (user){
    user.style.padding = '15px'
    user.style.backgroundColor = '#ff00ff'
    user.style.color = '#00FF00'
    user.style.borderRadius = '10%'
    user.style.cursor = 'pointer'
}
addStylesButton(buttonAdd)
addStylesButton(buttonDel)


