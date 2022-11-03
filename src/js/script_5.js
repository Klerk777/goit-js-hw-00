// --------------------------------------------------------------------------------------------------------------------------------------
// ==================================        Модуль 5. Заняття 9. Перебираючі методи масива     =========================================
// --------------------------------------------------------------------------------------------------------------------------------------
//
// --------------------------------------------------------------------------------------------------------------------------------------
// =================================================     Автоперевірка 5     =======================================================
// --------------------------------------------------------------------------------------------------------------------------------------
//
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// --------------------------------------------------------------------------------------------------------------------------------------
// =============================================     Додаткове заняття з ментором     ===================================================
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str, callback), яка перетворює рядки «my-short-string» на «myShortString».
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
// //
// const camelize = (str, callback) => {
//   return str
//     .split('-')
//     .map((str, index) => (index === 0 ? str : callback(str)))
//     .join('');
// };
// const firstToUppercase = str => {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// };
// console.log(camelize('background-color', firstToUppercase));
// console.log(camelize('background-color', firstToUppercase)); // == 'backgroundColor');
// console.log(camelize('list-style-image', firstToUppercase)); // == 'listStyleImage');
// console.log(camelize('-webkit-transition', firstToUppercase)); // == 'WebkitTransition');

// // --------------------------------------------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------------------------------------------
// // Напишіть дві функції
//   // makeProduct(назва, ціна, callback) - приймає
//   // ім`я і ціну товару, а також функцію callback.
//   // Функція створює об'єкт товару, додає йому унікальний
//   // ідентифікатор у властивості id і викликає зворотний виклик
//   // передаючи йому створений об’єкт.
//   // showProduct(product) - callback приймає об'єкт
//   // продукта і виводить його в консоль

// const makeProduct = (productName, price, callback) {

// };

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// const makeShef = shefName => {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const mango = makeShef('Mango');
// mango('apple pie');
// mango('muffins');

// const poly = makeShef('Poly');
// poly('ice cream');
// // makeDish("Mango", "apple pie");
// // makeDish("Poly", "muffins");

// --------------------------------------------------------------------------------------------------------------------------------------

//Напишіть функцію sum для обчислення суми двох чисел
// sum(1)(2) = 3
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(3)(5));

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// const savePassword = password =>
//   function (userPosword) {
//     return password === userPosword;
//   };
// const checkPas = savePassword('qwer');
// console.log(checkPas('qwer'));
// console.log(checkPas('qwert'));

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
//Напишіть функцію для зберігання знижки. Функція повертає
//Іншу функцію, яка приймає суму покупки
//і повертає фінальну суму із збереженою знижкою.

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// // Напишіть функцію makeCounter, яка повертає об'єкт із такими методами
// // increment - збільшує counter на 1
// // decrement - зменшує counter на 1
// // getValue - повертає значення counter
// const makeCounter = () => {
//   let counter = 0;
//   return {
//     increment: () => (counter += 1),
//     decrement: () => (counter -= 1),
//     getValue: () => counter,
//   };
// };

// let count = makeCounter();

// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// Виправте помилки, щоб код працював
// const jeans = {
//   price: 500,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// jeans.showPrice();

// const phone = {
//   price: 1000,
// };

// phone.showPrice = jeans.showPrice;

// phone.showPrice();

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));
// callAction(product.showPrice.bind({ a: 1, b: 2 }));

// Потрібно викликати функцію showPrice так, щоб this вказував на об'єкт laptop

// function showPrice(a, b, c) {
//   console.log(this.price, a, b, c);
// }

// const laptop = {
//   price: 1500,
// };
// showPrice.call(laptop, 1, 2, 3);
// showPrice.apply(laptop, [1, 2, 3]);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   min() {},
//   mult() {},
//   div() {},
// };

// .replaceAll(" ", "").split(/(\D)/);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти або зняти гроші з рахунку
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

//Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {},

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},

  //Метод повертає кількість засобів певного типу
  //транзакції з історії транзакцій
  getTransactionType(type) {},
};