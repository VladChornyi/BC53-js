// 1.Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
const str = "JavaScript, HTML, CSS, React";

const strArr = str.split(', ')

for(let i=0; i<strArr.length; i +=1) {
console.log(strArr[i]);
}





// 2.Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ["JavaScript", "HTML", "CSS", "React"];

// 3.Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)
// const arr = ["JavaScript", "HTML", "CSS", "React"];
// const substring = "S";
// const filteredArr = [];

 //4. Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
 const arr = ["JavaScript", "HTML", "CSS"];
const elem = "SS";
const index = arr.indexOf(elem)
if (index === -1) {
    arr.push(elem)
    
}
else { arr.splice(index, 1) } 
console.log (arr)
 


// 5. Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.
// const sentence = "JavaScript is a popular programming language.";

// 6.Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл for з оператором break та continue.
// const numbers = [5, 12, 3, 8, 7, 15, 11, 18];
// const result = null;
