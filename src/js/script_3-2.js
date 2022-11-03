// --------------------------------------------------------------------------------------------------------------------------------------
// ======================================        Модуль 3. Заняття 2. Деструктуризація та rest/spread      ====================================================
// --------------------------------------------------------------------------------------------------------------------------------------
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// console.log({});
// --------------------------------------------------------------------------------------------------------------------------------------

// const playlist = {
//   name: 'SuperPlaylist',
//   tracks: ['track-1', 'track-2', 'track-3'],
//   rating: 5,
//   count: 3,
// };

// console.log(playlist);
// const newObj = { ...playlist };
// console.log(newObj);

// const { name, rating } = playlist;
// console.log(name, rating);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(([] = arr));

// // --------------------------------------------------------------------------------------------------------------------------------------
// ========================================   Автоперевірка. Задача 19/41.   ===============================================================
// // --------------------------------------------------------------------------------------------------------------------------------------

// // Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// // Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// // Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// // v.1 --- double cicle
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// // function getAllPropValues(propName) {
// //   // Change code below this line
// //   const resultArr = [];
// //   for (const product of products) {
// //     for (const key in product) {
// //       if (key === propName) {
// //         resultArr.push(product[key]);
// //         break;
// //       }
// //     }
// //   }
// //   return resultArr;
// // }

// //  ------------------------    With control log on iteration's step    -------------------

// function getAllPropValues(propName) {
//   const resultArr = [];
//   let i = 1;
//   let j = 1;
//   for (const product of products) {
//     console.log(`j = ${j} (itaration of outside cicle)`);
//     j++;
//     for (const key in product) {
//       console.log(`i = ${i} (itaration of inside cicle)`);
//       i++;
//       if (key === propName) {
//         console.log('True! Property name found. Doing instructions.');
//         resultArr.push(product[key]);
//         break;
//       }
//     }
//     console.log('End of inside cycle');
//     i = 1;
//   }
//   console.log('End of outside cycle');
//   return resultArr;
// }
// V.2
// function getAllPropValues(propName) {
//   let values = [];
//   for (const product of products) {
//     let newValue = product[propName];
//     if (newValue) {
//       values.push(newValue);
//     }
//   }
//   return values;
// }

// // ---- Tests------
// console.log(getAllPropValues('name')); // ["Radar", "Scanner", "Droid", "Grip"]
// // console.log(getAllPropValues('quantity')); // [4, 3, 7, 9]
// // console.log(getAllPropValues('price')); // [1300, 2700, 400, 1200]
// // console.log(getAllPropValues('category')); // []

// // --------------------------------------------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------------------------------------------
// Задача 20/41.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let total = 0;
//   // destructuring obj from array
//   for (const { name, price, quantity } of products) {
//     if (name === productName) {
//       total = price * quantity;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: { high: highToday,
//            low: lowToday,
//            icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: {high: highTomorrow,
//              low: lowTomorrow,
//              icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }
// };

// // --------------------------------------------------------------------------------------------------------------------------------------
// // --------------------------------------------------------------------------------------------------------------------------------------
// Задача 30/41.

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

//     text - текст завдання.
//     category - категорія завдання.
//     priority - пріоритет завдання.

// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.
// const data = {
//   text: 'task text',
//   //   category: 'logic',
//   //   priority: 'high',
// };
// console.table(data);
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line

//   const newTask = { category, priority, completed, ...data };
//   console.table(newTask);
//   return newTask;
//   // Change code above this line
// }
// console.log(makeTask(data));
// function add(...args) {
// return Math.sum(...args);

// // --------------------------------------------------------------------------------------------------------------------------------------
// Задача 33/41.
// Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.
// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (let i = 0; i < array.length; i += 1) {
//     if (args.includes(array[i])) {
//       matches.push(array[i]);
//       console.log(matches);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// --------------------------------------------------------------------------------------------------------------------------------------
// Задача 41/41.
// розширюємо інвентар
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.
// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

//     getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
//     addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі. В іншому випадку повертається рядок.
//     removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
//     updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.
//
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (Object.values(potion).includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === potionName) {
//         this.potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   /**
//    * Method for change poison's name
//    * @param {string} oldName - Old name of poison
//    * @param {string} newName - New name to which whant to change old one
//    * @returns
//    */
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (Object.values(potion).includes(oldName)) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// // ----  Tests  ------
// console.log(atTheOldToad.getPotions());

// // atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });

// // // atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// // // atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });

// // atTheOldToad.removePotion('Dragghon breath');
// // console.log(atTheOldToad.removePotion('Dragghon breath'));

// // atTheOldToad.removePotion('Speed potion');

// // atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
// // console.log(atTheOldToad.getPotions());
