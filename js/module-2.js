// 1.Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
// const str = "JavaScript, HTML, CSS, React";

// const strArr = str.split(', ')

// for(let i=0; i<strArr.length; i +=1) {
// console.log(strArr[i]);
// }

// 2.Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ["JavaScript", "HTML", "CSS", "React"];

// const str = words.join(", ")

// console.log('object :>> ', str);

// 3.Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)
// const arr = ["JavaScript", "HTML", "CSS", "React"];
// const substring = "S";
// const filteredArr = [];

//4. Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
// const arr = ["JavaScript", "HTML", "CSS"];
// const elem = "SS";
// const index = arr.indexOf(elem);
// if (index === -1) {
//   arr.push(elem);
// } else {
//   arr.splice(index, 1);
// }
// console.log(arr);

// // 5. Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.
// const sentence = "JavaScript is a popular programming language.";

// function getStringLength(string){
//     const strArray= string.split(' ');
//     let result = 0
//     for ( let item of strArray){
//         result+=1
//     }

//     return result

// }
// console.log(getStringLength(sentence))

// 6.Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл for з оператором break та continue.
// const numbers = [5, 12, 3, 8, 7, 15, 11, 18];
// const result = null;
// function getOddNumbers(numbers) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0 && numbers[i] > 10) {
//       return numbers[i];
//     }
//   }
//   return "Парних елементів немає ";
// }

// console.log(getOddNumbers(numbers));

// 7. Написати функцію, яка повертає найбільше число з масиву.

// const numbers = [5, 12, 3, 8, 7, 15, 11, 18];
// function maxNum(numbers) {
//   let max = numbers[0];
// for (const iterator of numbers) {
//   if (iterator > max) {
//     max = iterator
//   }
// }
//   return max
// }
// console.log(maxNum(numbers));

// 8. Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.
// const vowels = ["a", "e", "i", "o", "u"];
// const str = 'This is a new line'

// function countVowels(string){
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (const element of string) {
//         count += vowels.includes(element) ? 1 : 0;
//     }
//     return `Містить ${count} голосних`;
// }

// console.log(str, countVowels(str))

// 9. Написати функцію, яка приймає два параметри - рядок та символ - і повертає новий рядок,
// в якому всі входження символу в початковому рядку замінені на пустий рядок.

// const newString = (message, simvol) => {
//   const arrMessags = message.split("");

//   for (let i = 0; i < arrMessags.length; i++) {
//     if (arrMessags[i] === simvol) {
//       arrMessags[i] = "\n";
//     }
//   }
//   console.log(arrMessags.join(" "));
// };

// newString(
//   "Написати функцію, яка приймає два параметри - рядок та символ - і повертає новий рядок,в якому всі входження символу в початковому рядку замінені на пустий рядок",
//   "а"
// );

//10. Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// які є дублікатами в початковому масиві.Якщо немає дублікатів, функція повертає порожній масив.

// const array = [
//   48, 1, 5, 25, 22, 10, 44, 102, 100, 22, 53, 6, 3, 10, 45, 12, 0, 22, 13, 22,
//   45, 55, 33, 23, 5, 21, 2, 44, 1,
// ];
//======================Метод 1=====================
// const noDublicatInt = (array) => {
//   const newArray = [];
//   for (let ind = 0; ind < array.length; ind += 1) {
//     const dubI = array[ind];
//     let count = 0;
//     for (let index = ind; index < array.length; index += 1) {
//       const el = array[index];
//       if (el === dubI) {
//         count += 1;
//         if (count === 2) {
//           !newArray.includes(el) && newArray.push(el);
//           continue;
//         }
//       }
//     }
//   }
//   console.log(newArray);
//   return newArray;
//======================Метод 2=====================
//   const newObj = {};

//   for (let i = 0; i < array.length; i += 1) {
//     let count = 1;
//     if (newObj[array[i]]) {
//       count += 1;
//       newObj[array[i]] = count;
//     } else {
//       newObj[array[i]] = count;
//     }
//   }

//   for (var i in newObj) {
//     let result;
//     if (newObj.hasOwnProperty(i)) {
//       newObj[i] === 2 && newArray.push(Number(i));
//     }
//   }

//   console.log(newObj);
//   console.log(newArray);
//};

//noDublicatInt(array);
