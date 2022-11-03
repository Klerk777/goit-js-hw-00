// --------------------------------------------------------------------------------------------------------------------------------------
// ==================================        Модуль 4. Заняття 8. Перебираючі методи масива     =========================================
// --------------------------------------------------------------------------------------------------------------------------------------
//
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
// const names2 = students.map(student => student.name + `!`);
// console.log(names2); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
// const names3 = students.map(student => Math.round(student.score / 2));
// console.log(names3); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// console.log(
//   students.forEach((student, i, array) => {
//     console.log(student.score / 100);
//     student.score /= 100;
//   }),
// );
// console.log(students);
// console.log(students.forEach(student => console.log(student)));

// const allNames = ['Манго', 'Полі', 'Полі', 'Ківі', 'Манго', 'Аякс', 'Ківі', "Х'юстон", 'Полі', 'Манго', 'Полі'];

// const unicNames = allNames.reduce((acc, Name) => ({ ...acc, [Name]: acc[Name] ? +acc[Name] + 1 : 1 }), {});
// console.log(unicNames);

// const NAMES = {
//   Манго: 1,
//   Полі: 2,
//   Ківі: 2,
// };
// console.log(NAMES['Ajax']);

// const sortedByName = allNames.sort();
// console.table(sortedByName);

// --------------------------------------------------------------------------------------------------------------------------------------
// ==================================        Модуль 4. Заняття 8. Перебираючі методи масива     =========================================
// --------------------------------------------------------------------------------------------------------------------------------------

//Колекція об'єктів для всіх прикладів з автомобілями

// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false },
// ];
// console.table(cars);
// //
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// // const getModels = cars => cars.map(car => car.model);
// const getModels = cars => cars.map(({ model }) => model); // same with destructuring

// console.table(getModels(cars));
//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 2 - Метод map
// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({ ...car, price: car.price - car.price * discount }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 3 - Метод filter
// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({ price }) => price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 24000));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 4 - Метод filter
// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale);

// console.table(getCarsWithDiscount(cars));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 5 - Метод filter
// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

// const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 7 - Метод sort
// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

// //v.1 --- For returning new array after .sort - create new const. --- BAD!!!
// // const sortByAscendingAmount = cars => {
// //   const sortedCars = [...cars];
// //   return sortedCars.sort((a, b) => a.amount - b.amount);
// // };

// //v.2 --- For returning new array after .sort - just use copy by spread --- GOOD!!!
// const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 8 - Метод sort
// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 9 - Метод sort
// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

// //v.1 --- .charCodeAt(0)  ---------    Not good!

// // console.time('Sort by'); // start timer
// // const sortByModel = (cars, order) => {
// //   if (order === 'asc') {
// //     return [...cars].sort((a, b) => a.model.charCodeAt(0) - b.model.charCodeAt(0));
// //   } else if (order === 'desc') {
// //     return [...cars].sort((a, b) => b.model.charCodeAt(0) - a.model.charCodeAt(0));
// //   }
// //   return alert('Wrong @param: order.');
// // };

// //v.2 --- .localeCompare()  ---------    Good one!

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return [...cars].sort((a, b) => a.model.localeCompare(b.model));
//   } else if (order === 'desc') {
//     return [...cars].sort((a, b) => b.model.localeCompare(a.model));
//   }
//   return alert('Wrong @param: order.');
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));
// console.timeEnd('Sort by'); // end timer
// // console.table(sortByModel(cars, 'ABC'));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 10 - Метод reduce
// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

// const getTotalAmount = cars => cars.reduce((totalAmount, car) => totalAmount + car.amount, 0);

// console.log(getTotalAmount(cars));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 11 - Цепочки методов
// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

// const getModelsOnSale = cars => cars.filter(({ onSale }) => onSale).map(({ model }) => model);

// console.table(getModelsOnSale(cars));

//
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 12 - Цепочки методов
// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

// const getSortedCarsOnSale = cars => cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));
// console.table(cars);

// --------------------------------------------------------------------------------------------------------------------------------------
// ==================================        АВТОПЕРЕВІРКА       =========================================
// --------------------------------------------------------------------------------------------------------------------------------------

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   // It's working!
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// //FIXME: Why it's not working oO?
// makePizza('Ultracheese', pizzaName => console.log(`Eating pizza ${pizzaName}.`));

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError('There is no pizza with a name <имя пиццы> in the assortment.');
//     }
//     return onSuccess(pizzaName);
//   },
// };

// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(el => {
//     if (secondArray.includes(el)) {
//       commonElements.push(el);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// const changeEven = (numbers, value) =>
//   numbers.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc.push(number + value);
//     } else {
//       acc.push(number);
//     }
//     return acc;
//   }, []);

// function changeEven(numbers, value) {
//   const result = numbers.reduce((acc, number) => {
//     if (number % 2 === 0) {
//       acc.push(number + value);
//     } else {
//       acc.push(number);
//     }
//     return acc;
//   }, []);
//   return result;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = users =>
//   users.flatMap(({ friends }) => friends).filter((friend, index, array) => array.indexOf(friend) === index);
