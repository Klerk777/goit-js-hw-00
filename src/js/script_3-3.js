// --------------------------------------------------------------------------------------------------------------------------------------
// ======================================        ДОДАТКОВЕ ЗАНЯТТЯ З МЕНТОРОМ        ====================================================
// --------------------------------------------------------------------------------------------------------------------------------------

// Потрібно написати функцію, яка приймає 1 параметр key і буде перевіряти
// чи має об'єкт  такий ключ - поверне true, інакше false

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };

// // const chekObj = key => Object.keys(obj).includes(key);
// const chekObj2 = key => key in obj;

// console.log(obj);
// // console.log(chekObj('car'));
// // console.log(chekObj('model'));

// console.log(chekObj2('car'));
// console.log(chekObj2('model'));

// -------------------------------------------------------------------------------------------------------------------------------------------
// Напишіть функцію isEmpty(obj), яка повертає true,
// якщо об'єкт не має властивостей, інакше false

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };
// const obj1 = {};

// const isEmpty = obj => !Object.keys(obj).length > 0;

// console.log(isEmpty(obj));
// console.log(isEmpty(obj1));
//
// -------------------------------------------------------------------------------------------------------------------------------------------

// Напишіть функцію для перевірки об'єкта,
// Чи є елемент простим об'єктом,
// чи масивом, null.
// const chekType = value => {
//   if (Array.isArray(value)) {
//     console.log("It's Array!");
//   } else if (value === null) {
//     console.log("It's null!");
//   } else {
//     console.log(typeof value);
//   }
// };
// chekType(1);
// chekType('qwe');
// chekType(false);
// chekType({});
// chekType([]);
// chekType(null);
// Array;

//FIXME: refactor to .map
// -------------------------------------------------------------------------------------------------------------------------------------------
// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// // до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// //
// // multiplyNumeric(menu);

// // після виклику функції
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"
// // };
// console.log(menu);
// const multiplyNumeric = obj => {
//   for (const value of Object.values(obj)) {
//     console.log(value);
//     console.log(value === Number);
//     if (value === Number) {
//       value = value * 2;
//     }
//   }
// };
// multiplyNumeric(menu);
// console.log(menu);

// -------------------------------------------------------------------------------------------------------------------------------------------
//
//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 570,
//   Poly: 900,
//   Ajax: 1470,
// };
// // v.1 - for in
// // const sumSalaries = obj => {
// //   let total = 0;
// //   for (const key in obj) {
// //     total += obj[key];
// //   }
// //   return total;
// // };
// //
// // v.2 -Object.values + reduce
// const sumSalaries = obj => Object.values(obj).reduce((total, item) => total + item, 0);
// console.log(sumSalaries(salaries));

// -------------------------------------------------------------------------------------------------------------------------------------------
//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 6 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 150, quantity: 100 },
// ];
// calcTotalPrice(stones, stonesName);

//
// -------------------------------------------------------------------------------------------------------------------------------------------
// Реалізувати переміщення елемента, drag-and-drop

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango', 'Potatoes', 'Kiwi', 'Plum', 'Сoconut', 'Parsley', 'Pineapple'];

// const indexFrom = 9;
// const indexTo = 3;

// const drugFruits = arr => {
//   const drufElement = arr.splice(indexFrom, 1);
//   console.log(drufElement);
//   arr.splice(indexTo, 0, ...drufElement);

//   return arr;
// };
// console.log(fruits);
// drugFruits(fruits);
// console.log(fruits);
//TODO:
// -------------------------------------------------------------------------------------------------------------------------------------------
// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// const sumInput = () => {
//   const array = [];
//   do {
//     let value = Number(prompt('Insert number'));
//     array.push(value);
//   } while (value !== Number);
// };

// sumInput();

// -------------------------------------------------------------------------------------------------------------------------------------------
// Напишіть метод, який розбиває масив на частини визначеного розміру
// const data = [1, 2, 3, 4, 5, 6, 7];

// const chunkArray = (array, divisor);

// console.log(chunkArray(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
// console.log(chunkArray(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();
