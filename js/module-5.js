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

console.log(user);

// 4. Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})
// 5. створіть об'єкт "Кошик", який буде мати список продуктів та методи для додавання і видалення продуктів. Також створіть об'єкт "Замовлення", який буде мати метод для отримання списку продуктів з кошика та оформлення замовлення. Зв'яжіть метод оформлення замовлення з методом "Оформити замовлення" об'єкта "Кошик" за допомогою bind.

// const cart = {
//   products: [],

//   addProduct(product) {
//
//     console.log(`Product ${product} added to cart`);
//   },

//   removeProduct(product) {
//
//   },

//   checkout() {
//     console.log(`Ordering products: ${this.products.join(", ")}`);
//   }
// };

// const order = {
//   checkoutCart: null,

//   placeOrder() {
//     if (this.checkoutCart) {
//       console.log("Placing order...");
//       this.checkoutCart();
//       console.log("Order placed successfully!");
//     } else {
//       console.log("No items in cart to order");
//     }
//   }
// };

// cart.addProduct("Apple");
// cart.addProduct("Orange");
// cart.addProduct("Banana");

// order.placeOrder();
// Ordering products: Apple, Orange, Banana
// Placing order...
// Ordering products: Apple, Orange, Banana
// Order placed successfully!

// cart.removeProduct("Orange");

// order.placeOrder();
// Ordering products: Apple, Banana
// Placing order...
// Ordering products: Apple, Banana
// Order placed successfully!
