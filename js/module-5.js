// 1.  Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та функція, яка виводить повну інформацію про користувача.
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "johndoe@example.com",
  info() {
    console.log(this);
  },
  modify(parameter, value) {
    if (parameter !== "firstName" && parameter !== "lastName") {
      return alert(`Parameters are not valid`);
    }
    if (value[0] === value[0].toUpperCase() && value.length >= 3) {
      console.log("value");
      return (this[parameter] = value);
    }
  },
};
user.modify("firstName", "Vlad");
console.log(user);

// 2. Написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)

// 3. Створити глобальну функцію, що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:

const addProperty = function (key, value) {
  this[key] = value;
};

user.addProperty = addProperty;

user.addProperty("friends", [
  ({
    firstName: "Mary",
    lastName: "Smith",
    age: 32,
    email: "marysmith@hotmail.com",
  },
  {
    firstName: "Alex",
    lastName: "Johnson",
    age: 45,
    email: "alex.johnson@yahoo.com",
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    age: 19,
    email: "emilydavis@gmail.com",
  }),
]);

// console.log(user);

// 4. Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})

const obj = {
  name: "Bob",
  lactName: "Lasso",
  age: 50,
  email: "BodLasso@gmail.com",
};

user.info.apply(obj);

// 5. створіть об'єкт "Кошик", який буде мати список продуктів та методи для додавання і видалення продуктів. Також створіть об'єкт "Замовлення", який буде мати метод для отримання списку продуктів з кошика та оформлення замовлення. Зв'яжіть метод оформлення замовлення з методом "Оформити замовлення" об'єкта "Кошик" за допомогою bind.

const cart = {
  products: [],

  addProduct(product) {
    this.products.push(product);
    console.log(`Product ${product} added to cart`);
  },

  removeProduct(product) {
    const indexProd = this.products.indexOf(product);
    indexProd === -1
      ? alert(`Продукта з назвою ${product} немае у кошику`)
      : this.products.splice(indexProd, 1);
  },

  checkout() {
    console.log(`Ordering products: ${this.products.join(", ")}`);
  },
};

const order = {
  checkoutCart: null,

  placeOrder() {
    if (this.checkoutCart) {
      console.log("Placing order...");
      this.checkoutCart();
      console.log("Order placed successfully!");
    } else {
      console.log("No items in cart to order");
    }
  },
};

order.checkoutCart = cart.checkout.bind(cart);
console.log(order.checkoutCart === cart.checkout);
cart.addProduct("Apple");
cart.addProduct("Orange");
cart.addProduct("Banana");

order.placeOrder();
// Ordering products: Apple, Orange, Banana
// Placing order...
// Ordering products: Apple, Orange, Banana
// Order placed successfully!
console.log(cart.products);
cart.removeProduct("Orange");
console.log(cart.products);

order.placeOrder();
// Ordering products: Apple, Banana
// Placing order...
// Ordering products: Apple, Banana
// Order placed successfully!

// # Модуль 5. Заняття 10. Прототипи та класи

// ## 1. Що буде у консолі?

// const parent = {
//   name: "Luce",
//   age: 35,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Bob";
// child.age = 7;

// console.log(child.name); // ?
// console.log(child.age); // ?
// console.log(child.heritage); // ?
//

// ## 2. Напиши клас `Client` який створює об'єкт з властивостями login i email.Оголоси приватні властивості #login #email, доступ до яких зроби через геттер і сеттер login/email

// ## 3. Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

// #### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
// - `tableNumber` - номер столика, де зроблено замовлення
// - `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
// - `isPaid` - позначає, чи оплачене замовлення (default = false)
// ##### Для класу Order потрібно реалізувати такі методи:
// - `calculateTotal`() - повертає загальну суму замовлення і "чек".
// - `markAsPaid`() - позначає замовлення як оплачене
// ##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

// #### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.

// const pizza = new MenuItem("Pizza", 10);
// const salad = new MenuItem("Salad", 5);
// const burger = new MenuItem("Burger", 8);
// const fries = new MenuItem("Fries", 3);
// const soda = new MenuItem("Soda", 2);

// const order1 = new Order(3, [pizza, salad]);
// const order2 = new Order(5, [burger, fries, soda]);

// console.log(order1.calculateTotal());
// /*
// Table 3
// Items:
// Pizza - 10
// Salad - 5
// Total: 15
// Status: Not paid
// */

// order2.markAsPaid();
// console.log(order2.isPaid); // Output: true

// ## 4.Практика наслідування у класах.
// #### Cтворіть клас `Person`, який містить наступні властивості:
// - `name` - ім'я людини;
// - `age`- вік людини;
// - `gender` - стать людини;
// - `email`- електронна пошта людини.
// ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.

// #### Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
// - salary - зарплата співробітника;
// - department - відділ, в якому працює співробітник.
// ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// ## 5. Вам потрібно розробити систему керування бібліотекою. Система має включати класи для книг, користувачів та бібліотеки, з можливістю взаємодії між ними.

// #### 1. Клас `Book` має мати наступні властивості:
// - Назва книги (`title`)
// - Автор книги (`author`)
// - Статус наявності (`available`) (булевий тип даних, true - якщо книга є в наявності, false - якщо книга взята користувачем)
// ##### Клас має також мати методи:
// - `getDetails()` - повертає рядок з деталями книги в форматі "Назва автора (Рік видання)"
// - `toggleAvailability()` - змінює статус наявності книги з true на false або навпаки.

// #### 2. Клас `User` має мати наступні властивості:
// - Повне ім'я користувача (`fullName`)
// - Масив книг, які користувач взяв у бібліотеці (`books`)
// ##### Клас має також мати методи:
// - `getDetails()` - повертає об`єкт з деталями користувача
// - `borrowBook(book)` - додає книгу в масив книг користувача, якщо книга вільна (available === true) та повертає повідомлення про успішне позичення, або повідомлення про неможливість позичити книгу, якщо вона вже взята.

// #### 3. Клас `Library` має мати наступні властивості:
// - Масив всіх книг в бібліотеці (`books`)
// - Масив зареєстрованих користувачів (`users`)
// ##### Клас має також мати методи:
// - `addBook(book)` - додає книгу до масиву книг бібліотеки
// - `removeBook(book)` - видаляє книгу з масиву книг бібліотеки
// - `addUser(user)` - додає користувача до масиву зареєстрованих користувачів бібліотеки
// - `removeUser(user)` - видаляє користувача з масиву зареєстрованих користувачів бібліотеки
// - `findAvailableBooks()` - повертає масив книг, які є в наявності (available === true)
// - `findUserBooks(user)` - повертає масив книг, взятих користувачем (user), якщо користувач зареєстрований, або повідомлення про незареєстрованого користувача, якщо користувач не знайдений.

// Створення книг
// const book1 = new Book({
//   title: "Harry Potter and the Philosopher's Stone",
//   author: "Joanne Rowling",
// });
// const book2 = new Book({
//   title: "The Hobbit",
//   author: "John Ronald Reuel Tolkien",
// });
// const book3 = new Book({
//   title: "The Clean Coder",
//   author: "Robert C. Martin",
// });

// Створення користувачів
// const user1 = new User("Ethan Anderson");
// const user2 = new User("Olivia Johnson");

// // Створення бібліотеки
// const library = new Library();

// // Додавання книг до бібліотеки
// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);

// // Додавання користувачів до бібліотеки
// library.addUser(user1);
// library.addUser(user2);

// // Позичення книг
// user1.getDetails();

// user1.borrowBook({
//   title: "The Fault in Our Stars",
//   author: "John Green",
// });
// user1.borrowBook(book1);

// user1.getDetails();

// // Пошук книг які позичив користувач
// library.findUserBooks("Sofia Protsiv");
// library.findUserBooks("Ethan Anderson");

// // Пошук книг які ще доступні
// library.findAvailableBooks();
//
