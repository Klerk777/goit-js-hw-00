// function fnTotal(items) {
//   console.log(items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;
// }
// console.log('1: ' + fnTotal([100, 200, 300]));
// console.log('2: ' + fnTotal(['100', '200', '300']));
// // console.log('3: ' + fnTotal(100, 200, 300));
// console.log('4: ' + fnTotal('100', '200', '300'));

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Автоперевірка модуль 2. Задача 25/32
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри
// array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let resultArr = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       resultArr.push(array1[i]);
//     }
//   }
//   return resultArr;

//   // Change code above this line
// }
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Автоперевірка модуль 2. Задача 32/32

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) -
// перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }

// --------------------------------------------------------------------------------------------------------------------------------------
// ======================================        ДОДАТКОВЕ ЗАНЯТТЯ З МЕНТОРОМ        ====================================================
// --------------------------------------------------------------------------------------------------------------------------------------

// Напишіть код, який запитуватиме логін за допомогою prompt і буде виводити результат
// в консоль браузера Якщо користувач вводить "Admin", то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc вивести рядок "Cancel"
// Інакше вивести рядок "I don't know you"

//Пароль перевіряти так:
// Якщо введено пароль "I am admin", то вивести рядок "Hello!"
// інакше виводити рядок "Wrong password!"

// const login = prompt('Enter your login');
// if (login === 'Admin') {
//   const password = prompt('Enter password');
//   if (password === 'I am admin') {
//     console.log('Hello');
//   } else {
//     console.log('Wrong password!');
//   }
// } else if (!login) {
//   console.log('Cancel');
// } else {
//   console.log('Wrong password!');
// }

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Напишіть програму, яка генерує випадкове ціле число від 1 до 10, а потім користувачеві пропонується ввести припущене число через prompt
// Якщо введене користувачем число збігається із згерерованим випадковим числом,
// програма відобразить повідомлення «Good Work», інакше відобразить повідомлення «Not matched».

// const randomNember = Math.round(Math.random() * 10 + 1);
// console.log(randomNember);
// const attempt = prompt('Try catch me');
// if (attempt == randomNember) {
//   console.log('Catch me!');
// } else {
//   console.log('Not matched');
// }

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Напишіть програму для заміни кожного символу в заданому рядку символом,
// що йде наступним за ним в алфавіті

// const inputString = prompt('Input string');
// console.log(inputString);
// let resultString = '';
// for (let i = 0; i < inputString.length; i++) {
//   console.log(inputString[i].charCodeAt());
//   let codeLetter = inputString[i].charCodeAt();
//   resultString += String.fromCharCode(codeLetter + 1);
// }
// console.log(resultString);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Після введення число додається до значення змінної total.
// Операція введення числа продовжується доти, поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на кнопку Cancel, показати console.log з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число, а не довільний набір символів.

// let userNumber;
// let total = 0;
// do {
//   userNumber = prompt('Input number');
//   const number = Number(userNumber);
//   if (!isNaN(number)) {
//     total += number;
//   }
//   console.log(userNumber);
// } while (userNumber);
// console.log(total);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// За кожен місяць податкова нараховує на ЗП розробника 5% від суми. Напишіть консольну функцію, на яку користувач
//  вводить суму зп і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків, Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 1000;
// const tax = 0.05;
// const period = 12;

// let purSalary = 0;
// let allTax = 0;

// for (let i = 0; i < period; i++) {
//   purSalary += salary - salary * tax;
//   allTax += salary * tax;
// }
// console.log(`Чиста зарплата ${purSalary}. Податки ${allTax}`);

// Напишіть через світч пошук автора мови програмування Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// --------------------------------------------------------------------------------------------------------------------------------------
// ======================================        Модуль 2. Занятие 4. Функции        ====================================================
// --------------------------------------------------------------------------------------------------------------------------------------
// Модуль 2. Занятие 4. Функции
// Example 1 - Индекс массы тела

// Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.
// Вес и высота будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7,
// то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;
// BMI=m:h2

// const bmi = calcBMI('88,3', '1.75');
// function calcBMI(weight, height) {
//   return Number((weight.replace(',', '.') / Math.pow(height.replace(',', '.'), 2)).toFixed(1));
// }
// console.log(bmi); // 28.8
// console.log(typeof bmi);
// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 2 - Меньшее из чисел

// Напиши функцию min(a,b), которая возвращает меньшее из чисел a и b.
//v: 1, 2, 3.
// // function min(a, b) {
// ////  if (a < b) {
// ////     return a;
// ////   }
// ////     return b;

// //   return a < b ? a : b;
// // }
// const min = (a, b) => (a < b ? a : b);

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 3 - Площадь прямоугольника

// Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со сторонами,
// значения которых будут переданы в параметр dimensions в виде строки.Значения гарантированно разделены пробелом.

// v.1
// function getRectArea(dimensions) {
//   const rectSides = dimensions.split(' ');
//   return rectSides[0] * rectSides[1];
// }
// console.log(getRectArea('8 11'));

// v.2
// function getRectArea(dimensions) {
//   const rectSides = dimensions.split(' ');
//   const [a, b] = rectSides;
//   return a * b;
// }
// console.log(getRectArea('8 11'));

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 4 - Логирование элементов
// Напиши функцию logItems(items), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить
// в консоль сообщение в формате < номер элемента > - <значение элемента >.Нумерация элементов должна начинаться с 1.
// Например для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// /**
//  * Log items passed in array
//  * @param {string[] | number[]} items
//  */
// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 5 - Логирование контактов

// Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя и телефонный номер пользователя.
// В параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// function printContactsInfo(names, phones) {
//   for (let i = 0; i < names.split(',').length; i++) {
//     console.log(`Name: ${names.split(',')[i]} - ${phones.split(',')[i]}.`);
//   }
// }

// printContactsInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 6 - Поиск наибольшего элемента

// Напиши функцию findLargestNumber(numbers)которая ищет самое большое число в массиве.
/**
 * Find Largest number in the array
 * @param {number[]} numbers get array of numbers
 * @returns {number} largest number in array
 */
// v.1
// function findLargestNumber(numbers) {
//   let max = numbers[0];
//   for (const number of numbers) {
//     if (number > max) {
//       max = number;
//     }
//   }
//   return max;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// v.2  --- Math.max(...arg)
// function findLargestNumber(numbers) {
//   return Math.max(...numbers);
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 7 - Среднее значение

// Напишите функцию calAverage() которая принимает произвольное кол - во аргументов и возвращает их среднее значение.
// Все аругменты будут только числами.

// function calAverage() {
//   console.log(arguments);
//   let sum = 0;
//   for (const argument of arguments) {
//     sum += argument;
//   }
//   return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------
// Example 8 - Форматирование времени
// Напиши функцию formatTime(minutes) которая переведёт значение minutes (количество минут) в строку в формате часов и минут HH:MM.

/**
 * Transfer minutes to string in format hours:minutes (HH:MM)
 * @param {number} totalMinutes summ of all minuts as a number
 * @returns {string} string in format HH:MM
 */
// function formatTime(totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;
//   const doubleDigitHours = String(hours).padStart(2, 0);
//   const doubleDigitMinutes = String(minutes).padStart(2, 0);
//   const result = `${doubleDigitHours}:${doubleDigitMinutes}`;
//   return result;
// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// console.log(formatTime(7447)); // "124:07"

// --------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------

// Example 9 - Коллекция курсов(includes, indexOf, push и т.д.)

// Напишите функции для работы с коллекцией обучающих курсов courses:

// addCourse(name) - добавляет курс в конец коллекции
// removeCourse(name) - удаляет курс из коллекции
// updateCourse(oldName, newName) - изменяет имя на новое

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// function addCourse(name) {
//   if (courses.includes(name)) {
//     console.log('You already have this course');
//     return;
//   }
//   courses.push(name);
// }

// function removeCourse(name) {
//   const targetIndex = courses.indexOf(name);
//   if (targetIndex === -1) {
//     console.log('No course found with this name');
//     return;
//   }
//   courses.splice(targetIndex, 1);
// }

// function updateCourse(oldName, newName) {
//   const targetIndex = courses.indexOf(oldName);
//   if (targetIndex === -1) {
//     console.log('No course found with this name');
//     return;
//   }
//   courses[targetIndex] = newName;
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас уже есть такой курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'No course found with this name'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('React', 'Vue.js'); // 'No course found with this name'
