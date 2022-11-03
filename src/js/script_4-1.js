// --------------------------------------------------------------------------------------------------------------------------------------
// =============================        Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach     ===================================
// --------------------------------------------------------------------------------------------------------------------------------------
//

// function sum(a, b) {
//   return a + b;
// }
// function multiply(n, number, callback) {
//   const z = callback;
//   return z * number * n;
// }
// console.log(multiply(2, 5, sum(1, 2)));

// function sum(a, b) {
//   return a + b;
// }
// function multiply(n, number) {
//   const z = sum(n, number);
//   return z * number * n;
// }
// console.log(multiply(2, 5));
// prettier-ignore
// const arrowFn = () => ({ a: 5, });
// console.log(arrowFn());
//
// Example 1 - Коллбек функции

// Напишите следующие функции:

//    1. createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара,
// добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект.
//    2. logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль
//    3. logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль

// // Рішення:

// import { v4 as uuidv4 } from 'https://jspm.dev/uuid'; //------------ import uuid -------------
// console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
// function createProduct(partialProduct, callback) {
//   //   const Id = () => +String(performance.now()).replace('.', '') + Date.now();
//   const allProduct = { Id: uuidv4(), ...partialProduct };
//   callback(allProduct);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.quantity * product.price);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// --------------------------------------------------------------------------------------------------------------------------------------

// Example 2 - Коллбек функции
// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError),
// где первый параметр это сумма операции, а второй и третий - колбеки.
// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.
// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

// Решение
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount > this.balance) {
//       onError('Operation failed');
//       return;
//     }
//     this.balance -= amount;
//     onSuccess(`Operation success. Curent balance = ${this.balance}`);
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT || amount <= 0) {
//       onError('Operation failed');
//       return;
//     }
//     this.balance += amount;
//     onSuccess(`Operation success. Curent balance = ${this.balance}`);
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example 3 - Коллбек функции

// Напишите функцию each(array, callback), которая первым параметром ожидает массив,
// а вторым - функцию, которая применится к каждому элементу массива.
// Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// // Решение
// function each(array, callback) {
//   const resultArray = [];
//   array.forEach(element => {
//     resultArray.push(callback(element));
//   });

//   return resultArray;
// }

// console.log(each([64, 49, 36, 25, 16], value => value * 2));
// console.log(each([64, 49, 36, 25, 16], value => value - 10));
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example 4 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }
// // prettier-ignore
// const logProduct = product => console.log(product);
// // prettier-ignore
// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example 5 - Стрелочные функции
// Выполните рефакторинг кода используя стрелочные функции.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };
// // prettier-ignore
// const handleSuccess = message => console.log(`✅ Success! ${message}`);
// // prettier-ignore
// const handleError = message => console.log(`❌ Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example 7 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// // function logItems(items) {
// //   console.log(items);
// //   for (let i = 0; i < items.length; i += 1) {
// //     console.log(`${i + 1} - ${items[i]}`);
// //   }
// // }

// const logItems = items => {
//   console.log(items);
//   items.forEach( (element, index) =>{
//     console.log(`${index + 1} - ${element}`);
//   });
// };
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example 8 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// // function printContactsInfo({ names, phones }) {
// //   const nameList = names.split(',');
// //   const phoneList = phones.split(',');
// //   for (let i = 0; i < nameList.length; i += 1) {
// //     console.log(`${nameList[i]}: ${phoneList[i]}`);
// //   }
// // }

// // const printContactsInfo = ({ names, phones }) => {
// //   const nameList = names.split(',');
// //   const phoneList = phones.split(',');
// //   console.log(nameList, phoneList);
// //   nameList.forEach((element, i) => {
// //     console.log(`${element}: ${phoneList[i]}`);
// //   });
// // };

// const printContactsInfo = ({ names, phones }) => {
//     names.split(',').forEach((element, i) => {
//     console.log(`${element}: ${phones.split(',')[i]}`);
//   });
// };

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// Example 9 - Метод forEach
// Выполните рефакторинг кода используя метод forEach и стрелочные функции.

// // function calсulateAverage(...args) {
// //   let total = 0;
// //   for (let i = 0; i < args.length; i++) {
// //     total += args[i];
// //   }
// //   return total / args.length;
// // }

// const calсulateAverage = (...args) => {
//   let total = 0;
//     args.forEach(el => total += el);
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2
