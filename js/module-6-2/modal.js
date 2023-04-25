// ## 3. Modal. Keyboard events.

// Викоритовуй шаблон модального вікна з файлу [modal.html](./modal.html).

// - По кліку на `login_btn` відкрий модальне вікно змінивши стиль модалки з `display: "none"` на `display: "block" `
// - Отримай дані з форми по події `submit`, виводь дані у консоль і закривай модалку попередньо очистивши форму від введених даних.
// - При кліку на хрестик чи по кнопці cancel закривай модалку змінивши стиль з `display: "block"` на `display: "none" `
// - Якщо користувач натиснув не на модалку, а на задній фон, також закривай модалку
// - Якщо користувач натиснув ESC також закривай модалку

// ```js
// // refs

const modal = document.getElementById("modal");
const form = document.querySelector("form");
const login_btn = document.querySelector("#login_btn");
const cancle_btn = document.querySelector("#cancle_btn");
const closeModal_btn = document.querySelector("#closeModal_btn");

login_btn.addEventListener("click", handleFormOpen);

cancle_btn.addEventListener("click", handleFormClose);
closeModal_btn.addEventListener("click", handleFormClose);

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const { name, password, remember} = e.target.elements

    const nameValue = name.value
    const passwordValue = password.value
    const rememberValue = remember.checked

    console.log(nameValue, passwordValue, rememberValue);

    e.target.reset()
    handleFormClose()
})


// function which you should add to event listener as callback
function handleFormOpen() {
    modal.style.display = "block";
}
function handleFormClose() {
  modal.style.display = "none";
}
function handleFormSubmit() {}

