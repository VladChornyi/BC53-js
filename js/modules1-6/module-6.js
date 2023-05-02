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

// const markup =
//   "<li> <h3>Властивість innerHTML</h3> <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p></li>";
// list.insertAdjacentHTML("beforeend", markup);

// list.innerHTML = "";

// ## 2. Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul). `Створи` html-елемент списку і `додай` його у розмітку. Попрактикуйся з методами `append`, `prepend`, `after`, `before` заповнивши ними список елементами з масивів. Для зручності створи допоміжну функцію `elementsOfIngridients`, яка повертатиме масив елементів (масив з лішками).

// const appendFruitList = ["apple🍎", "banana🍌"];
// const prependFruitList = ["grapes🍇", "orange🍊"];
// const beforeFruitList = ["strawberry🍓", "cherry🍒"];
// const afterFruitList = ["peach🍑", "kiwi🥝"];

// const ul = document.createElement("ul")

// const elementsOfIngridientsli = function (arr) {
//   return arr.map(el => {
//     const liEl = document.createElement('li')
//     liEl.textContent = el
//     return liEl
//   })
// }
// console.log(elementsOfIngridientsli(appendFruitList))

// title.after(ul)
// ul.append(...elementsOfIngridientsli(appendFruitList))
// ul.prepend(...elementsOfIngridientsli(prependFruitList))
// ul.firstChild.after(...elementsOfIngridientsli(afterFruitList))
// ul.lastChild.before(...elementsOfIngridientsli(beforeFruitList))

const cachingDecoratorWithOneArgument = (func) => {
  const cache = new Map();
  return (x) => {
    if (cache.has(x)) {
      console.log("from cache", cache.get(x));
      return cache.get(x);
    }
    cache.set(x, func(x));
    console.log("calculated", cache.get(x));
    return cache.get(x);
  };
};

const cachingDecoratorWithSeveralArguments = (func) => {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);
    if (cache[stringifiedArgs]) {
      console.log("from cache", cache[stringifiedArgs]);
      return cache[stringifiedArgs];
    }
    cache[stringifiedArgs] = func(...args);
    console.log("calculated", cache[stringifiedArgs]);

    return cache[stringifiedArgs];
  };
};

const firstDecoreatedFunc = cachingDecoratorWithOneArgument((a) => a * a);
const secondDecoreatedFunc = cachingDecoratorWithSeveralArguments(
  (a, b) => a * b
);

firstDecoreatedFunc(5);
firstDecoreatedFunc(5);
firstDecoreatedFunc(6);
firstDecoreatedFunc(6);

secondDecoreatedFunc(5, 6);
secondDecoreatedFunc(6, 7);
secondDecoreatedFunc(5, 6);
secondDecoreatedFunc(6, 7);
