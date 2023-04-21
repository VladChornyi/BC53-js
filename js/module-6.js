const body = document.querySelector("body");

const title = document.getElementById("title");

const list = document.querySelector(".list");

// const dataTopic = document.querySelectorAll('[data-topic]');
// dataTopic.forEach(el => console.log(el));

// const forEach = callBack => {
//   const index = 0;
//   const element = '<div></div>';
//   const array = ['<div></div>', '<div></div>', '<div></div>'];
//   callBack(element, index, array);
// };
// const dataTopicEl = document.querySelector('[data-topic]');
// console.log(dataTopicEl);

// const dataTopic = document.querySelectorAll('[data-topic]');
// //console.log(dataTopic[dataTopic.length - 1])
// const a = title.nextElementSibling;
// // console.log(a)
// const subtitles = document.querySelectorAll('h3');
// subtitles.forEach(el => el.classList.add('active'));

// const navigation = document.querySelector('li[data-topic="navigation"]');
// console.log(navigation);
// navigation.style.backgroundColor = 'yellow';
// navigation.lastChild.textContent = 'Я змінив тут текст!';
const currentTopic = "manipulation";
const findElement = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(findElement);
findElement.style.backgroundColor = "blue";
const completed = document.querySelector(".completed");
// console.log(completed);

completed.parentNode.remove();
// console.log(completed);
const par = document.createElement("p");
par.textContent = "Об'єктна модель документа (Document Object Model)";
title.after(par);

// const supTitle = document.createElement("h3");
// supTitle.textContent = "Властивість innerHTML";
// const parag = document.createElement("p");
// parag.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// const listItem = document.createElement("li");
// listItem.append(supTitle, parag);

// list.append(listItem);

const markup =
  "<li> <h3>Властивість innerHTML</h3> <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>";
list.insertAdjacentHTML("beforeend", markup);

list.innerHTML = "";
