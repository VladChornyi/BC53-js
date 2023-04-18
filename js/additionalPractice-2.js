// 1*. Дано масив об'єктів products, який містить інформацію про товари в магазині:
// const products = [
//   { name: "Product 1", price: 10, quantity: 2 },
//   { name: "Product 2", price: 5, quantity: 5 },
//   { name: "Product 3", price: 15, quantity: 1 },
//   { name: "Product 4", price: 20, quantity: 3 }
// ];
// // Напишіть функцію calculateTotalPrice, яка приймає масив products і повертає загальну вартість всіх товарів в магазині.

// function calculateTotalPrice(arr){
// const totalPrice= arr.reduce((acc,el)=>{
// acc+=el.price*el.quantity

// return acc
// },0)
// return totalPrice
// }

// console.log(calculateTotalPrice(products))

// 2*. Дано функцію, яка приймає будь-яку кількість числових аргументів. Необхідно застосувати рест оператор, щоб обчислити середнє арифметичне значення всіх переданих числових аргументів. Функція повинна повертати отримане середнє значення.

// function getAvereje(...args){
//   const result = args.reduce((acc,el)=> acc+=el ,0)
//    return result/args.length

// }
// console.log(getAvereje(15, 58, 5, 9));

//3**. Нехай є масив чисел. Напишіть функцію, яка приймає масив та два колбеки. Перший колбек виконується над усіма елементами масиву перемножуючи їх на 2, другий - над елементами, ділить елементи, що можна розділити без залишку, на 5, та повертає суму усіх елементів масиву. Результат першого колбеку повинен передаватися другому колбеку. Функція повинна повертати результат другого колбеку.

//4***. Напишіть функцію, яка приймає три колбеки. Перший колбек приймає масив та розмір частини, на яку потрібно розділити масив округлюючи довжину у більший бік([1,2,3,4,5],3 =>[1,2]). Другий колбек виконується над кожною частиною масиву перемноживши кожен наступний елемент на попередній,а перший на останній.Третій колбек - виконується над результатами другого колбеку і повертає суму парних елементів. Функція повинна повертати результат третього колбеку.

//5*. Дано масив об'єктів з полями "id" та "name": [{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Bob"}]. Напишіть функцію, яка додає новий об'єкт з вказаним "id" та "name" у масив, або замінює вже існуючий об'єкт з вказаним "id" на новий об'єкт з вказаним "name". Також напишіть функцію для видалення об'єкта з вказаним "id" з масиву.
let data = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Bob" }];


//                        id
const addOrEdit = (data, obj) => {

  const objToUpd = data.find((el) => { return el.id === obj.id })

  if(objToUpd){
    objToUpd.name = obj.name
  } else {
    data.push(obj)
  }

  console.log(data)
}

const delObj = (data, id) => {
  
  const index = data.findIndex((el) => { return el.id === id })

  if(index === -1){
    return `Element ${id} is not defined`
  } data.splice(index, 1)
  console.log(data)

}

addOrEdit(data, {id: 211, name: 'Nikita'})
console.log(delObj(data, 2))

// // Додавання нового об'єкту
// addOrUpdate(data, { id: 4, name: "Mike" });
// console.log(data); // [{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Bob"}, {id: 4, name: "Mike"}]

// // Заміна існуючого об'єкту
// addOrUpdate(data, { id: 2, name: "Kate" });
// console.log(data); // [{id: 1, name: "John"}, {id: 2, name: "Kate"}, {id: 3, name: "Bob"}, {id: 4, name: "Mike"}]

// // Видалення об'єкту
// removeById(data, 3);
// console.log(data); // [{id: 1, name: "John"}, {id: 2, name: "Kate"}, {id: 4, name: "Mike"}]

//6*. Дано масив об'єктів користувачів:
const users = [
  { name: "John", age: 27, gender: "male" },
  { name: "Jane", age: 31, gender: "female" },
  { name: "Bob", age: 19, gender: "male" },
  { name: "Alice", age: 25, gender: "female" },
];

const students = [
  { name: "John", age: 18, gender: "male" },
  { name: "Jane", age: 20, gender: "female" },
  { name: "Bob", age: 19, gender: "male" },
  { name: "Alice", age: 25, gender: "female" },
];

const getUserInfo = (users) => {
  let intResult = [];
  users.forEach((user) => {
    intResult.push(`${user.name}, ${user.age}, ${user.gender}`);
  });
  return intResult;
};
getUserInfo(users);

const getUserInfoMap = (users) => {
  return users.map((user) => `${user.name}, ${user.age}, ${user.gender}`);
};

// Використовуючи метод forEach, створіть новий масив, який буде містити інформацію про кожного користувача у вигляді рядків з його іменем, віком та статтю у форматі "Ім'я, вік, стать" (наприклад, "John, 27, male"). Результат повинен виглядати так:
// [  "John, 27, male",  "Jane, 31, female",  "Bob, 19, male",  "Alice, 25, female"]

// 7*.Дано масив об'єктів користувачів:

// const users = [
//   { name: 'John', age: 25, gender: 'male' },
//   { name: 'Jane', age: 31, gender: 'female' },
//   { name: 'Bob', age: 19, gender: 'male' },
//   { name: 'Mary', age: 24, gender: 'female' },
//   { name: 'Mike', age: 40, gender: 'male' }
// ];
// Потрібно отримати список імен жінок старше 25 років, відсортований за алфавітом.

// 8***. Задача: дано масив об'єктів, що представляють замовлення в інтернет-магазині. Кожен об'єкт містить поля з номером замовлення, ім'я клієнта, датою замовлення, сумою замовлення та статусом (заплачено або ні). Потрібно отримати масив об'єктів з інформацією про топ-5 клієнтів, які зробили найбільше замовлень, та середньою сумою їх замовлень, а також масив об'єктів з інформацією про топ-5 товарів за кількістю продажів, та загальну кількість проданих одиниць кожного товару.
// const orders = [
//   { id: 1, name: 'John', date: '2022-01-01', total: 50, paid: true, items: [{id: 1, name: 'book', quantity: 2}, {id: 2, name: 'pen', quantity: 5}] },
//   { id: 2, name: 'Jane', date: '2022-02-03', total: 20, paid: true, items: [{id: 1, name: 'book', quantity: 1}, {id: 3, name: 'pencil', quantity: 3}] },
//   { id: 3, name: 'Bob', date: '2022-03-05', total: 100, paid: false, items: [{id: 2, name: 'pen', quantity: 10}, {id: 4, name: 'notebook', quantity: 1}] },
//   { id: 4, name: 'Alice', date: '2022-04-07', total: 70, paid: true, items: [{id: 3, name: 'pencil', quantity: 4}, {id: 4, name: 'notebook', quantity: 2}] },
//   { id: 5, name: 'Jim', date: '2022-05-09', total: 30, paid: true, items: [{id: 1, name: 'book', quantity: 1}, {id: 2, name: 'pen', quantity: 2}] },
//   { id: 6, name: 'Sara', date: '2022-06-11', total: 80, paid: true, items: [{id: 3, name: 'pencil', quantity: 6}, {id: 4, name: 'notebook', quantity: 3}] }]
