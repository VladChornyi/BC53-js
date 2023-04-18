// 1*. Дано масив об'єктів products, який містить інформацію про товари в магазині:
// const products = [
//   { name: "Product 1", price: 10, quantity: 2 },
//   { name: "Product 2", price: 5, quantity: 5 },
//   { name: "Product 3", price: 15, quantity: 1 },
//   { name: "Product 4", price: 20, quantity: 3 }
// ];
// Напишіть функцію calculateTotalPrice, яка приймає масив products і повертає загальну вартість всіх товарів в магазині.

// 2*. Дано функцію, яка приймає будь-яку кількість числових аргументів. Необхідно застосувати рест оператор, щоб обчислити середнє арифметичне значення всіх переданих числових аргументів. Функція повинна повертати отримане середнє значення.

//3**. Нехай є масив чисел. Напишіть функцію, яка приймає масив та два колбеки. Перший колбек виконується над усіма елементами масиву перемножуючи їх на 2, другий - над елементами, ділить елементи, що можна розділити без залишку, на 5, та повертає суму усіх елементів масиву. Результат першого колбеку повинен передаватися другому колбеку. Функція повинна повертати результат другого колбеку.

//4***. Напишіть функцію, яка приймає три колбеки. Перший колбек приймає масив та розмір частини, на яку потрібно розділити масив округлюючи довжину у більший бік([1,2,3,4,5],3 =>[1,2]). Другий колбек виконується над кожною частиною масиву перемноживши кожен наступний елемент на попередній,а перший на останній.Третій колбек - виконується над результатами другого колбеку і повертає суму парних елементів. Функція повинна повертати результат третього колбеку.

//5*. Дано масив об'єктів з полями "id" та "name": [{id: 1, name: "John"}, {id: 2, name: "Jane"}, {id: 3, name: "Bob"}]. Напишіть функцію, яка додає новий об'єкт з вказаним "id" та "name" у масив, або замінює вже існуючий об'єкт з вказаним "id" на новий об'єкт з вказаним "name". Також напишіть функцію для видалення об'єкта з вказаним "id" з масиву.
// let data = [{ id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Bob" }];

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
// const users = [
//   { name: 'John', age: 27, gender: 'male' },
//   { name: 'Jane', age: 31, gender: 'female' },
//   { name: 'Bob', age: 19, gender: 'male' },
//   { name: 'Alice', age: 25, gender: 'female' }
// ];
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
const orders = [
  {
    id: 1,
    name: "John",
    date: "2022-01-01",
    total: 50,
    paid: true,
    items: [
      { id: 1, name: "book", quantity: 2 },
      { id: 2, name: "pen", quantity: 5 },
    ],
  },
  {
    id: 2,
    name: "Jane",
    date: "2022-02-03",
    total: 20,
    paid: true,
    items: [
      { id: 1, name: "book", quantity: 1 },
      { id: 3, name: "pencil", quantity: 3 },
    ],
  },
  {
    id: 3,
    name: "Bob",
    date: "2022-03-05",
    total: 100,
    paid: false,
    items: [
      { id: 2, name: "pen", quantity: 10 },
      { id: 4, name: "notebook", quantity: 1 },
    ],
  },
  {
    id: 4,
    name: "Alice",
    date: "2022-04-07",
    total: 70,
    paid: true,
    items: [
      { id: 3, name: "pencil", quantity: 4 },
      { id: 4, name: "notebook", quantity: 2 },
    ],
  },
  {
    id: 5,
    name: "Jim",
    date: "2022-05-09",
    total: 30,
    paid: true,
    items: [
      { id: 1, name: "book", quantity: 1 },
      { id: 2, name: "pen", quantity: 2 },
    ],
  },
  {
    id: 6,
    name: "Sara",
    date: "2022-06-11",
    total: 80,
    paid: true,
    items: [
      { id: 3, name: "pencil", quantity: 6 },
      { id: 4, name: "notebook", quantity: 3 },
    ],
  },
  {
    id: 7,
    name: "John",
    date: "2022-01-03",
    total: 90,
    paid: true,
    items: [
      { id: 3, name: "pencil", quantity: 2 },
      { id: 2, name: "pen", quantity: 5 },
      { id: 1, name: "book", quantity: 1 },
    ],
  },
  {
    id: 8,
    name: "Jim",
    date: "2022-08-09",
    total: 30,
    paid: true,
    items: [
      { id: 1, name: "book", quantity: 1 },
      { id: 4, name: "notebook", quantity: 2 },
    ],
  },
  {
    id: 9,
    name: "Jim",
    date: "2022-06-11",
    total: 45,
    paid: true,
    items: [
      { id: 3, name: "pencil", quantity: 1 },
      { id: 2, name: "pen", quantity: 2 },
    ],
  },
  {
    id: 10,
    name: "John",
    date: "2022-08-03",
    total: 90,
    paid: true,
    items: [{ id: 1, name: "book", quantity: 1 }],
  },
];

// 8***. Задача: дано масив об'єктів, що представляють замовлення в інтернет-магазині.
// Кожен об'єкт містить поля з номером замовлення, ім'я клієнта, датою замовлення, сумою замовлення та
// статусом(заплачено або ні).Потрібно отримати масив об'єктів з інформацією про топ-5 клієнтів, які
// зробили найбільше замовлень, та середньою сумою їх замовлень, а також масив об'єктів з інформацією
//  про топ - 5 товарів за кількістю продажів, та загальну кількість проданих одиниць кожного товару.
// //

const firstUsers = (array) => {
  const orders = [];

  for (let i = 0; i < array.length; i += 1) {
    const order = {};
    order.items = [];
    if (order.length === 0) {
      order.name = array[i].name;
      order.total = array[i].total;
      order.items = array[i].items;

      orders.push(order);
    } else {
      let userPocupa = false;
      for (let i = 0; i < orders.length; i += 1) {
        if (orders.name === array[i].name) {
          userPocupa = true;
          orders[i].total += array[i].total;
          orders[i].items.push(array[i].items);
        }
      }
      if (!userPocupa) {
        order.name = array[i].name;
        order.total = array[i].total;
        order.items = array[i].items;

        orders.push(order);
      }
    }
  }

  return orders.sort((a, b) => b.total - a.total).slice(0, 5);
};

const result_users = firstUsers(orders);
console.log(result_users);

// const topUsersClient = (array, number) => {
//   const topClients = [];
//   array.map((order) => {
//     const clientOrder = {
//       name: "",
//       total: 0,
//       data: [],
//       countPocupoc: 0,
//       items: [],
//       average_value: 0,
//     };
//     if (topClients.length === 0) {
//       clientOrder.name = order.name;
//       clientOrder.total = order.total;
//       clientOrder.data.push(order.date);
//       clientOrder.countPocupoc = 1;
//       clientOrder.items.push(order.items);
//       clientOrder.average_value = order.total;
//       topClients.push(clientOrder);
//     } else {
//       // проверяем может такой клиент уже есть в лучших клиентах
//       // если да то мі одаємо данніе в его данніе
//       let yesClient = false;
//       for (let i = 0; i < topClients.length; i = i + 1) {
//         if (topClients[i].name === order.name) {
//           yesClient = true;
//           topClients[i].total += order.total;
//           topClients[i].countPocupoc += 1;
//           topClients[i].data.push(order.date);
//           topClients[i].items.push(order.items);
//           topClients[i].average_value =
//             topClients[i].total / topClients[i].countPocupoc;
//         }
//         continue;
//       }

//       //если у нас небуло ще такого кліента то ми його додаємоу topClients
//       if (!yesClient) {
//         clientOrder.name = order.name;
//         clientOrder.total = order.total;
//         clientOrder.data.push(order.date);
//         clientOrder.countPocupoc = 1;
//         clientOrder.items.push(order.items);
//         clientOrder.average_value =
//           clientOrder.total / clientOrder.countPocupoc;

//         topClients.push(clientOrder);
//       }
//     }
//   });
//   topClients.sort((a, b) => b.total - a.total); // cortirovca по количеству витрачених коштів

//   return topClients;
// };

// const topProducts = (array) => {
//   let products;

//   products = array.flatMap((order) => order.items);
//   const firstProducts = [];
//   products.map((product) => {
//     const tovar = {};
//     if (firstProducts.length === 0) {
//       tovar.id = product.id;
//       tovar.name = product.name;
//       tovar.quantity = product.quantity;
//       tovar.countProdagiv = 1;
//       firstProducts.push(tovar);
//     } else {
//       //проверяем может у нас уже есть такой товар в массиве
//       let yesTovar = false;
//       for (let i = 0; i < firstProducts.length; i += 1) {
//         if (firstProducts[i].id === product.id) {
//           yesTovar = true;
//           firstProducts[i].quantity += product.quantity;
//           firstProducts[i].countProdagiv += 1;
//         }
//         continue;
//       }

//       if (!yesTovar) {
//         //додаємо новий товар
//         tovar.id = product.id;
//         tovar.name = product.name;
//         tovar.quantity = product.quantity;
//         tovar.countProdagiv = 1;
//         firstProducts.push(tovar);
//       }
//     }
//   });
//   return firstProducts.sort((a, b) => b.quantity - a.quantity);
// };
// const resultUsers = topUsersClient(orders);
// console.log(resultUsers);

// const productsFavorit = topProducts(orders);

// console.log(productsFavorit);
