// 1. Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// function sum(a, b, callback) {
//     const result = a * b;
//     return callback(result);
// }

// const calcResult1 = (number) =>
// number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);

// const calcResult = (number) => {
//   let calcResult = 0;
//   if (number % 2 === 0) {
//     calcResult = number * number;
//   } else {
//     calcResult = Math.sqrt(number);
//   }
//   return calcResult;
// };

// sum(20, 40, calcResult);

// // 2. Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна повернути новий масив, у якому кожен елемент масиву перетворено згідно з логікою, яка визначається в колбек-функції. Колбек-функція приймає число, і повертає його ж, помножене на рандомне число від 1 до цього числа.
// function mapArray(array, callback) {
//   const newArray = [];
//   array.forEach((element) => newArray.push(callback(element)));
//   return newArray;
// }

// function callback(element) {
//   return element * (Math.random() * (element - 1) + 1);
// }

// const process = mapArray([1, 2, 3, 4, 5], callback);

// console.log(process);

// 3. Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції.Якщо такого елементу немає, функція
// повинна повернути null.Також необхідно написати 2 різні колбеки.При використанні першого колбеку має
// повертатись перше парне число.При використанні другого - має повертатись перше слово у масиві, що починається з літери
// // "O" у будь - якому реєстрі.
// const numbers = [1, 3, 5, 7, 9, 10];
// const words = ["apple", "banana", "orange", "pear"];

// const myFunc = (arr, clb) => {
//   let number = null;
//   arr.forEach((el) => {
//     if (clb(el)) {
//       number = el;
//     }
//   });
//   return number;
// };

// const colbek = (arg) => {
//   if (arg % 2 === 0) {
//     return arg;
//   }
// };

// const colbStr = (str) => {
//   return str[0].toLowerCase() === "o" ? str : null;
// };
// const res1 = myFunc(numbers, colbek);
// const res2 = myFunc(words, colbStr);

// 4. Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].
// function getNewArray(array, number) {
//   return (newArray = array.map((el) => Math.pow(el, number)));
// }

// console.log("getNewArray :>> ", getNewArray([1, 2, 3], 5));

// 5. Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user=[
//   {name: "John", age: 27},
//   {name: "Jane", age: 31},
//   {name: "Bob", age: 19}
// ]
// const getAge=(arr, age)=>arr.filter(el=> el.age>age)

// console.log('object :>> ',getAge(user, 25));

// 6. Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.
// const arr = [1,2,3,4,5]
// const getNamber= (arr, namb)=>arr.find(el=>el>namb)
// console.log('object :>> ',getNamber(arr, 4))

// 7. Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const arr = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const flatArrey = (arr) =>arr.flatMap(el=>el.values)

// console.log(flatArrey(arr))

// 8.  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.
// 9. Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.
// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];
// 10. Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву
// const numbers = [1, 2, 3, 4, 5];

// const sum = (arr) => arr.reduce((acc, el) => acc+el, 0)
// console.log (sum(numbers))
// 11. У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення
const arr = [1, 2, 3, 4, 5];

const averageValue = (arr) => {
  return arr.reduce((acc, el, index) => {
    acc += el;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
};

console.log(averageValue(arr));
// 12. Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// Відсортуйте масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19} за віком у порядку зростання. Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
