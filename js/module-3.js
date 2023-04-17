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

//5. Створіть об'єкт "автомобіль" з властивостями "марка", "модель" та "швидкість". Напишіть метод "accelerate", який буде збільшувати швидкість автомобіля на 10 км/год.

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


// const object={
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const object2=object
//   object2.name="Молоко"

// //   console.log(object);
// for ( const key in object2 ){
//     if (object.hasOwnProperty(key)){
//         console.log(object2[key]);
//     }
// }

// function fnTest(a){



// }\
const obj={
      Bob:2000,
      Kat:3000,
      Max:5000,
      };
      const values

// function countProps(object) {
  
//     let propCount = 0;
//   const keys = Object.keys(object); 
//     for (const key of keys) {
     
//         propCount += 1;
    
//     }
  
//     return propCount;
   
//   }
//   console.log(countProps(obj));