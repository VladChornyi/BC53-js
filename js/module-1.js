// 1.Знайти суму перших N натуральних чисел. N запитати у юзера через prompt(while)
// const N = prompt("Введіть натуральне число");
// let result = 0;

// while (N>=i){
//     result +=i;
//      i+=1
// }
// console.log('object :>> ', result);
// for (let i = 1; N >= i; i += 1) {
//   result += i;
// }
// console.log("result :>> ", result);
// 2.Перевірити, чи є введене користувачем число простим.(while)
// const n = Number(prompt("Введіть число"));
// let result = 0;
// let i = 2;
// while (n > i) {
//   if (n % i === 0) {
//     console.log("Число не є простим");
//     break;
//   }
//   i += 1;
// }

// if (n === i) {
// console.log("Число є простим");
// }
// 3.Вивести на екран всі парні числа від 1 до N. N запитати у юзера через prompt(while)

// const input = prompt('Введите число:')
// let i = 2
// while(i<=input){
//   // if(i % 2 === 0){
//     console.log(`${i} - Число парное`)
//     // }
//     i+=2
// }

// // 4. Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення.(використати тернарний оператор)
// const input = ();
// input % 2 === 0 ? console.log("парне") : console.log("непарне")


// 5. Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень. Бонус дорівнює 20% від зарплати за додаткові години.(використати тернарний оператор)
// const normalWageTime = 40
// const wageTime = 120
// const wageCost = 35
// const bonus = normalWageTime < wageTime ? (wageTime - normalWageTime) * 0.2 * wageCost : 0;
// console.log(bonus)



// 6. Вивести на екран всі числа від 1 до N, які діляться на 3 або 5.(for)
//const n = prompt('Введите число:')
//for (let i = 3; i <= n; i += 1){
    //if (i % 3 === 0 || i % 5 === 0)  {
        //console.log(i)
    //}
//}
// 7. Обчислити факторіал введеного користувачем числа.(for)
// const n = prompt('Введите число:')
//  let a = 1;
// for (let i=1; i <= n; i += 1){
//     a*= i;

// }
// alert(`факторіал числа ${n} = ${a}`)

