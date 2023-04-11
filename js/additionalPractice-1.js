// 1. Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.

// const array = [9, 22, 2, 7, 6, 12, 13, 5, 17, 14];

// 2. Напишіть функцію sumArray, яка приймає масив чисел та повертає суму всіх його елементів.
// const array = [1, 2, 3, 4, 5];
// const sum = sumArray(array);
// console.log(sum); // 15

// 2-a. Напишіть функцію sumEvenAndOdd, яка приймає масив чисел та повертає масив з двома елементами  - сума всіх його парних елементів, та сума всіх непарних.
// const array = [1, 2, 3, 4, 5];
// const result = sumEvenAndOdd(array);
// console.log(sum); // [6,9]

//3. У вас є масив з мов кодування. Кожен елемент масиву - це рядок з назвою мови та її скороченням у форматі "назва скорочення" (наприклад, "JavaScript JS"). Ваша мета - перетворити кожен елемент масиву у формат "назва мови: скорочення" та записати їх у новий масив.
// const codingLanguages = [
//   "JavaScript JS",
//   "Python PY",
//   "Ruby RB",
//   "Java JV",
//   "C# CS",
// ];
// const result  = formatLanguages(codingLanguages)
//console.log(result); // ["JavaScript: JS", "Python: PY", "Ruby: RB", "Java: JV", "C#: CS"];

// 4. Написати функцію, яка приймає число n та повертає n-те число Фібоначчі.

// const intFibonahci = (number) => {
//   const arrayFinob = [];
//   //   let prev = 0;
//   //   let nact = 0;
//   for (let i = 0; i <= number; i++) {
//     if (i === 0 || i === 1) {
//       arrayFinob.push(i);
//     } else {
//       arrayFinob.push(arrayFinob[i - 2] + arrayFinob[i - 1]);
//     }
//   }
//   console.log(
//     `повертаємо ${number}-те число Фібоначчі = ${
//       arrayFinob[arrayFinob.length - 2]
//       //-2 виключаємо 0
//     }`
//   );
// };
// intFibonahci(8);

// 5. Написати функцію, що отримує рядок, і буде перевіряти, чи є цей рядок паліндромом
const pal1 = "Я несу гусеня";
const pal2 = "А роза упала на лапу Азора";

const yesNoPalindrom = (message) => {
  const nomal = message.toLowerCase().split(" ").join("");
  //   const str = message.toLowerCase().replaceAll(" ", "");
  //   console.log("str= ", str);
  const reverse = message
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .join("");
  if (nomal === reverse) {
    console.log(`Рядок "${message}" є паліндромом `);
    return;
  }
  console.log(`Рядок "${message}" не є паліндромом !!!`);
};

yesNoPalindrom(pal1);