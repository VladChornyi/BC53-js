// 1.Створіть об'єкт "людина" з властивостями "ім'я" та "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
//2. Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.
// 3. Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// const store = {
//     goods: ['aple', 'coconut', 'banan', 'cucumber'],
//     hasProduct(product) {
// return this.goods.includes(product)
//     }
// }

// console.log(' >> ', store.hasProduct('wqet'));
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.
// const box = {
//   goods: ["aple", "coconut", "banan", "cucumber"],
//   price: [25, 65, 52, 32],
//   calculateTotal() {
//     let sum = 0;
//     for (const item of this.price) {
//       sum += item;
//     }
//     return sum;
//   },
// };
// console.log("object :>> ", box.calculateTotal());

//5. Створіть об'єкт "автомобіль" з властивостями "марка", "модель" та "швидкість". Напишіть метод "accelerate",
// який буде збільшувати швидкість автомобіля на 10 км/год.

// const car = {
//   make: 'Whatever',
//   model: 'That',
//   speed: 100,
//   accelerate() {
//     this.speed += 10
//     }
// }
// car.accelerate()
// console.log(car.speed)

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
// 9. Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів. Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.
// const arr1 = [{id: 1, name: 'John'}, {id: 2, name: 'Mary'}, {id: 3, name: 'Bob'}];
// const arr2 = [{id: 2, name: 'Mary'}, {id: 4, name: 'Jane'}, {id: 5, name: 'Tom'}];

// 10. Напишіть функцію createPerson(), яка приймає об'єкт параметрів з наступними властивостями:

// firstName (рядок) - ім'я персони
// lastName (рядок) - прізвище персони
// age (число) - вік персони
// gender (рядок) - стать персони
// occupation (рядок) - робота персони
// Функція повинна повернути об'єкт, що містить ці властивості. Якщо якась властивість не передається як параметр, то вона повинна мати значення за замовчуванням. Наприклад, якщо age не передається, то його значення за замовчуванням повинно бути 18.

// Крім того, якщо передається додаткова властивість, яку не передбачено в списку, то вона повинна бути проігнорована.

// Приклади виклику функції та їх очікувані результати:

// const person1 = createPerson({
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 25,
//   gender: 'male',
//   occupation: 'developer'
// });
// console.log(person1);
// Очікуваний результат: { firstName: 'John', lastName: 'Doe', age: 25, gender: 'male', occupation: 'developer' }

// const person2 = createPerson({
//   firstName: 'Jane',
//   lastName: 'Doe',
//   gender: 'female'
// });
// console.log(person2);
// Очікуваний результат: { firstName: 'Jane', lastName: 'Doe', age: 18, gender: 'female', occupation: undefined }

// const person3 = createPerson({
//   firstName: 'Bob',
//   lastName: 'Smith',
//   age: 30,
//   gender: 'male',
//   occupation: 'teacher',
//   hobby: 'reading'
// });
// console.log(person3);
// Очікуваний результат: { firstName: 'Bob', lastName: 'Smith', age: 30, gender: 'male', occupation: 'teacher' }

// 11*.Задача: є масив об'єктів, кожен об'єкт містить інформацію про певний товар: назву товару, його ціну та кількість.
// Необхідно вивести інформацію про ті товари, ціна яких менше 50 гривень та кількість більше 5 одиниць.
// const products = [
//   { name: 'product 1', price: 20, quantity: 10 },
//   { name: 'product 2', price: 30, quantity: 4 },
//   { name: 'product 3', price: 40, quantity: 6 },
//   { name: 'product 4', price: 50, quantity: 3 },
//   { name: 'product 5', price: 60, quantity: 2 }
// ];

// const basket = {
//   products: [
//     { name: "product 1", price: 20, quantity: 10 },
//     { name: "product 2", price: 30, quantity: 4 },
//     { name: "product 3", price: 40, quantity: 6 },
//     { name: "product 4", price: 50, quantity: 3 },
//     { name: "product 5", price: 60, quantity: 2 },
//   ],

//   getProductsByPrice(maxPrice, minQuantity) {
//     const array = [];
//     for (const el of this.products) {
//       if (maxPrice >= el.price && minQuantity <= el.quantity) {
//         array.push(el);
//       }
//     }
//     return array;
//   },
// };
// console.log(basket.getProductsByPrice(40, 6));
// 12**.У вас є масив об'єктів, який представляє собою список студентів, де кожен студент представлений об'єктом з властивостями "ім'я", "прізвище",
// "рік народження" та "список курсів".Напишіть функцію, яка бере цей масив об'єктів та повертає новий масив, який містить об'єкти студентів, що належать
// до певного списку курсів, переданого як параметр.Кожен об'єкт у новому масиві має містити тільки ім'я та прізвище студента.
// const academia = {

//   students :[
//     { name: 'John', surname: 'Doe', birthYear: 2000, courses: ['Math', 'Physics'] },
//     { name: 'Jane', surname: 'Doe', birthYear: 2001, courses: ['Chemistry', 'Biology'] },
//     { name: 'Bob', surname: 'Smith', birthYear: 2002, courses: ['Math', 'Art'] },
//     { name: 'Alice', surname: 'Johnson', birthYear: 2003, courses: ['Physics', 'Chemistry'] }
//   ],
//   getStudenstByCourses(cours) {
//     const result = [];
//     for (let i = 0; i < this.students.length; i += 1){
//       this.students[i].courses
//       for (let j = 0; j < this.students[i].courses.length; j += 1){
//         if (cours.includes(this.students[i].courses[j])) {
//           result.push({
//             name: this.students[i].name,
//             surname:this.students[i].surname
//           })
//           break;
//         }
//       }

//     }
//     return result
//   }
// }
// console.table(academia.getStudenstByCourses(['Math', 'Art']))
