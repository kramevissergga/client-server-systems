/*
  1. Напишіть функцію isEmpty(obj), яка повертає true, якщо у об’єкта немає
властивостей, в іншому випадку - false.
Повинно працювати так:
let user = {};
alert( isEmpty(user) ); // true
user["Admin"] = "Alex";
alert( isEmpty(user) ); // false
*/
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

var user = {};
var resultParagraph = document.getElementById("task-1-p");

resultParagraph.textContent += "Об'єкт 'user' порожній: " + isEmpty(user);

user["Admin"] = "Alex";
resultParagraph.textContent += " Об'єкт 'user' порожній: " + isEmpty(user);

/*
2. Створіть об’єкт calculator з трьома методами:
          - read() – запитує два значення за допомогою prompt і зберігає їх як
          властивості об’єкта.
          - sum() – повертає суму збережених значень.
          - mul() – множить збережені значення і повертає результат.
*/

var calculator = {
  read: function () {
    this.value1 = parseFloat(prompt("Введіть перше число:"));
    this.value2 = parseFloat(prompt("Введіть друге число:"));
  },

  sum: function () {
    return this.value1 + this.value2;
  },

  mul: function () {
    return this.value1 * this.value2;
  },
};
function calc() {
  calculator.read();
  var sumResult = calculator.sum();
  var mulResult = calculator.mul();
  var resultParagraph2 = document.getElementById("task-2-p");
  resultParagraph2.textContent =
    "Сума: " + sumResult + "; Добуток: " + mulResult;
}
/*
 3. Створіть об’єкт week з днями тижня. Ключами в ньому будуть номери днів від
початку тижня(понеділок – 1 і т.д.). Виведіть на екран поточний день тижня.
*/
var week = {
  1: "Понеділок",
  2: "Вівторок",
  3: "Середа",
  4: "Четвер",
  5: "П'ятниця",
  6: "Субота",
  7: "Неділя",
};
var currentDay = week[new Date().getDay()];
var resultParagraph3 = document.getElementById("task-3-p");
resultParagraph3.textContent = "Сьогодні: " + currentDay;
/*
4. Напишіть функцію, яка глибоко знаходить перетин об’єктів і повертає об’єкт
перетину.
Наприклад:
const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
intersectionDeep(data, data2)); // { b: { c: 3 } }
*/
function intersectionDeep(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return {};
  }

  var result = {};
  for (var key in obj1) {
    if (key in obj2) {
      if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
        result[key] = intersectionDeep(obj1[key], obj2[key]);
      } else if (obj1[key] === obj2[key]) {
        result[key] = obj1[key];
      }
    }
  }

  return result;
}

const data = { a: 1, b: { c: 3 } };
const data2 = { c: 1, b: { c: 3 } };
var resultParagraph4 = document.getElementById("task-4-p");
resultParagraph4.textContent = JSON.stringify(
  intersectionDeep(data, data2),
  null,
  2
);
/*
5. Напишіть функцію, яка робить глибоку перевірку на пустоту об’єкта. Пустими
  значеннями є: '', null, NaN, undefined, [], {}
  Наприклад:

  const data = { a: { b: undefined } };
  const data2 = { a: { b: 1 } };
  isEmptyDeep(data)); // true
  isEmptyDeep(data2)); // false
*/
function isEmptyDeep(obj) {
  if (obj === null || obj === undefined) {
    return true;
  }

  if (typeof obj === "number" && isNaN(obj)) {
    return true;
  }

  if (typeof obj === "string" && obj.trim() === "") {
    return true;
  }

  if (Array.isArray(obj) && obj.length === 0) {
    return true;
  }

  if (typeof obj === "object") {
    for (var key in obj) {
      if (!isEmptyDeep(obj[key])) {
        return false;
      }
    }
    return true;
  }

  return false;
}

const values = [
  { a: { b: undefined } },
  { a: { b: 1 } },
  { a: { b: "" } },
  { a: {} },
  { a: { b: null } },
  { a: { b: NaN } },
];

var resultParagraph5 = document.getElementById("task-5-p");

values.forEach(function (value) {
  resultParagraph5.textContent += isEmptyDeep(value) + " ";
});
