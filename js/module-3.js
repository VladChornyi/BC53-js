// 1.Створіть об'єкт "людина" з властивостями "ім'я" та "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
//2. Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.
//3.Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.
//4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.
//5. Створіть об'єкт "автомобіль" з властивостями "марка", "модель" та "швидкість". Напишіть метод "accelerate", який буде збільшувати швидкість автомобіля на 10 км/год.

//6. Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.
// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];

// const findTopStudent = (studArray) => {
//   let best_student = studArray[0];
//   for (const student of studArray) {
//     //console.log(student);
//     if (student.grade > best_student.grade) {
//       best_student = student;
//     }
//   }
//   return best_student;
// };
// const stud = findTopStudent(students);
// console.log(stud);

//7. Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.
// const books = [
//   { title: "Війна і мир", author: "Лев Толстой", year: 1869 },
//   {
//     title: "Преступление и наказание",
//     author: "Федор Достоевский",
//     year: 1866,
//   },
//   {
//     title: "Гаррі Поттер і філософський камінь",
//     author: "Джоан Роулінг",
//     year: 1997,
//   },
//   { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
//   { title: "1984", author: "Джордж Оруелл", year: 1949 },
// ];

// const findBooksByAuthor = (bokksArray, author) => {
//   const booksAuthor = [];
//   for (const book of bokksArray) {
//     book.author === author && booksAuthor.push(book.title);
//   }
//   return booksAuthor;
// };

// const arr = findBooksByAuthor(books, "Джоан Роулінг");
// console.log(arr);

//8. Створіть масив об'єктів "продуктів" з властивостями "назва", "ціна" та "кількість".
// Напишіть функцію "calculateTotalPrice", яка буде повертати загальну вартість всіх товарів в масиві.

// const products = [
//   { name: "Молоко", price: 22, quantity: 3 },
//   { name: "Хліб", price: 14, quantity: 2 },
//   { name: "Сир", price: 120, quantity: 1 },
//   { name: "Яблука", price: 18, quantity: 5 },
// ];

// const calculateTotalPrice = (productsArray) => {
//   let totalPrice = 0;
//   for (const product of productsArray) {
//     totalPrice += product.price * product.quantity;
//   }
//   return totalPrice;
// };
// const total = calculateTotalPrice(products);
// console.log(`Всього: ${total}`);
