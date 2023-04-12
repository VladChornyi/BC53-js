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

//6. Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал". Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.
// const students = [
//   { name: "Андрій", surname: "Іванов", grade: 4.5 },
//   { name: "Олександр", surname: "Петров", grade: 3.9 },
//   { name: "Марія", surname: "Сидорова", grade: 4.8 },
//   { name: "Ірина", surname: "Федорова", grade: 4.2 },
// ];

//7. Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor", яка буде повертати масив книг відповідного автора.
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

//8. Створіть масив об'єктів "продуктів" з властивостями "назва", "ціна" та "кількість". Напишіть функцію "calculateTotalPrice", яка буде повертати загальну вартість всіх товарів в масиві.

// const products = [
//   { name: "Молоко", price: 22, quantity: 3 },
//   { name: "Хліб", price: 14, quantity: 2 },
//   { name: "Сир", price: 120, quantity: 1 },
//   { name: "Яблука", price: 18, quantity: 5 },
// ];

// 9.Задача: є масив об'єктів, кожен об'єкт містить інформацію про певний товар: назву товару, його ціну та кількість.
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
// 10.У вас є масив об'єктів, який представляє собою список студентів, де кожен студент представлений об'єктом з властивостями "ім'я", "прізвище",
  // "рік народження" та "список курсів".Напишіть функцію, яка бере цей масив об'єктів та повертає новий масив, який містить об'єкти студентів, що належать 
  // до певного списку курсів, переданого як параметр.Кожен об'єкт у новому масиві має містити тільки ім'я та прізвище студента.
const academia = {

  students :[
    { name: 'John', surname: 'Doe', birthYear: 2000, courses: ['Math', 'Physics'] },
    { name: 'Jane', surname: 'Doe', birthYear: 2001, courses: ['Chemistry', 'Biology'] },
    { name: 'Bob', surname: 'Smith', birthYear: 2002, courses: ['Math', 'Art'] },
    { name: 'Alice', surname: 'Johnson', birthYear: 2003, courses: ['Physics', 'Chemistry'] }
  ],
  getStudenstByCourses(cours) {
    const result = [];
    for (let i = 0; i < this.students.length; i += 1){
      this.students[i].courses
      for (let j = 0; j < this.students[i].courses.length; j += 1){
        if (cours.includes(this.students[i].courses[j])) {
          result.push({
            name: this.students[i].name,
            surname:this.students[i].surname
          })
          break;  
        }
      }

    }
    return result
  }
}
console.table(academia.getStudenstByCourses(['Math', 'Art']))