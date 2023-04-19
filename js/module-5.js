// 1.  Створити об'єкт, який представляє користувача. У об'єкті повинні бути наступні поля: ім'я, прізвище, вік, email та функція, яка виводить повну інформацію про користувача.
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   email: 'johndoe@example.com',
//   info(){
//     console.log(`Ім'я: ${this.firstName} Прізвище: ${this.lastName} Вік: ${this.age} Email: ${this.email}`)
//   }
// }


// user.info();

// 2. Написати метод для зміни ім'я або прізвища(змінити можна лише якесь з цих полів, змінювати або додавати нові потрібно заборонити) з перевіркою на валідність даних(Перша літера має бути у верхньому реєстрі, довжина слова не менше 3 літер)
// function validate(str){
//     if (str)
//     if ((str[0] === str[0].toUpperCase()) && (str.length > 2)){
//         return str;
//     }
//     return false;
// }
// function changeFirstName(oldName, newName){
//     if (!validate(newName)) return 'Enter valid name'

//     if (this.firstName === oldName) {
//         this.firstName = newName;
//         return `${oldName} changed to ${newName}`
//     }
// }

// console.log(changeFirstName.call(user,'John','Vlad'))
// 3. Створити глобальну функцію, що може додавати властивості об'єкту, в контексті якого вона буде викликана. Додати цю функцію як метод об'єкта user, та додати за допомогою неї властивість friends із значенням:
const users = [
{
    firstName: 'Mary',
    lastName: 'Smith',
    age: 32,
    email: 'marysmith@hotmail.com'
  },
  {
    firstName: 'Alex',
    lastName: 'Johnson',
    age: 45,
    email: 'alex.johnson@yahoo.com'
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    age: 19,
    email: 'emilydavis@gmail.com'
  }]

  function newField(name, value){
    this[name] = value;
    return `added ${name}: ${this[name]} to ${this.firstName}`
  }
  function makeMagic(arr, name, value){
    for (const obj of arr) {
        // newField.bind(obj);
        // newField(name, value);
        console.log(newField.call(obj, name, value));
    }
  }

  makeMagic(users,`friends`, [`Red`, `Grey`, `Marry`]);
  console.log(users);

// 4. Викликати метод user.info() таким чином, щоб він вивів результатом  ({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'})
// user.info.call({name: 'Bob', lactName: 'Lasso',age: 50, email: 'BodLasso@gmail.com'});
// 5. створіть об'єкт "Кошик", який буде мати список продуктів та методи для додавання і видалення продуктів. Також створіть об'єкт "Замовлення", який буде мати метод для отримання списку продуктів з кошика та оформлення замовлення. Зв'яжіть метод оформлення замовлення з методом "Оформити замовлення" об'єкта "Кошик" за допомогою bind.

// const cart = {
//   products: [],

//   addProduct(product) {
//     this.products.push(product)
//     console.log(`Product ${product} added to cart`);
//   },

//   removeProduct(product) {
//     const index = this.products.find(e => e === product)
//     return index === -1 ? `${product} does not exist` : `${this.products.splice(index, 1)} removed successful`
//   },

//   checkout() {
//     console.log(`Ordering products: ${this.products.join(", ")}`);
//     return this.products.join(", ");
//   }
// };

// const order = {
//   checkoutCart(){
//     // return cart.checkout();
//     // return checkout.call(cart);
//     return this.products.join(", ");
//   },

//   placeOrder() {
//     if (this.checkoutCart) {
//       console.log("Placing order...");
//       this.checkoutCart.call(cart);
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
// // Ordering products: Apple, Orange, Banana
// // Placing order...
// // Ordering products: Apple, Orange, Banana
// // Order placed successfully!

// cart.removeProduct("Orange");

// order.placeOrder();
// // Ordering products: Apple, Banana
// // Placing order...
// // Ordering products: Apple, Banana
// // Order placed successfully!
