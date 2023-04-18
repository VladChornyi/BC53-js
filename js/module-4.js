// 1. Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.
// function sum(a, b, callback) {
// const result = a * b
// callback(result)
// }

// const calcResult = function(number) {
//     let calcResult = 0
// if (number % 2 ===0){
// calcResult = number * number
// } else {
// calcResult = Math.sqrt(number)
// }
// return calcResult
// }

// const calcResult1 = number => number % 2 === 0? Math.pow(number, 2): Math.sqrt(number)

// sum(20, 40, calcResult)

// // 2. Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна повернути новий масив, у якому кожен елемент масиву перетворено згідно з логікою, яка визначається в колбек-функції. Колбек-функція приймає число, і повертає його ж, помножене на рандомне число від 1 до цього числа.
// function mapArray(array, callback) {
//   const newArray = [];
//   array.forEach((element) => newArray.push(callback(element)));
//   return newArray;
// }
// function callback(element) {
//   return element * (Math.random() * (element - 1) + 1);
// }
// let process = mapArray([1, 2, 3, 4, 5], callback);
// console.log(process);

// 3. Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції.Якщо такого елементу немає, функція
// повинна повернути null.Також необхідно написати 2 різні колбеки.При використанні першого колбеку має
// повертатись перше парне число.При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.
const numbers = [1, 3, 5, 7, 9, 10];
const words = ["apple", "banana", "orange", "pear"];

const myFunc = (arr, clb) => {
  let number = null;
  arr.forEach((el) => {
    if (clb(el)) {
      number = el;
    }
  });
  return number;
};

const colbek = (arg) => {
  if (arg % 2 === 0) {
    return arg;
  }
};

const colbStr = (str) => {
  return str[0].toLowerCase() === "o" ? str : null;
};
//console.log(myFunc(numbers, colbek));
console.log(myFunc(words, colbStr));
