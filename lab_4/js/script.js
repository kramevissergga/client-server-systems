/*
  1. Дано масив arr. Створіть функцію unique(arr), яка повертає масив унікальних
  значень з масиву arr.
  alert(unique(names)); // Petro,Dmytro
*/
function unique(arr) {
  var uniqueValues = {};

  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    uniqueValues[value] = true;
  }
  var result = Object.keys(uniqueValues);

  return result;
}

let names = ["Ivan", "Petro", "Vasyl", "Ivan", "Vasyl", "Dmytro"];
console.log();
var resultParagraph1 = document.getElementById("task-1-p");
resultParagraph1.textContent = unique(names);
/*
2. Напишіть функцію average(), яка приймає масив об’єктів користувачів і
повертає середній вік.
Наприклад:
let ivan = {name: "Ivan", age: 20};
let vasyl = {name: "Vasyl", age:21};
let petro = {name: "Petro", age: 19};
let arr = [ivan, vasyl, petro];
alert(average(arr)); // 20 ((20+21+19)/3=20)
*/
function average(users) {
  if (users.length === 0) {
    return 0;
  }

  var totalAge = 0;

  for (var i = 0; i < users.length; i++) {
    totalAge += users[i].age;
  }

  return totalAge / users.length;
}

let ivan2 = { name: "Ivan", age: 20 };
let vasyl2 = { name: "Vasyl", age: 21 };
let petro2 = { name: "Petro", age: 19 };
let arr2 = [ivan2, vasyl2, petro2];

var resultParagraph2 = document.getElementById("task-2-p");
resultParagraph2.textContent = average(arr2);
/*
 3. Дано масив об’єктів користувачів, кожен з яких містить name,surname,age. На
основі нього потрібно сформувати новий масив об’єктів з параметрами
username (складається з name і surname в першому масиві) та age.
*/
let ivan3 = { name: "Ivan", surname: "Ivanov", age: 20 };
let vasyl3 = { name: "Vasyl", surname: "Vasylkiv", age: 21 };
let petro3 = { name: "Petro", surname: "Petrov", age: 19 };
let arr3 = [ivan3, vasyl3, petro3];

let arr3_2 = arr3.map(function (user) {
  return { username: user.name + " " + user.surname, age: user.age };
});

var resultParagraph3 = document.getElementById("task-3-p");
resultParagraph3.textContent = JSON.stringify(arr3_2, null, 2);
/*
4. Напишіть функцію filtered(arr,a,b), яка приймає масив, шукає в ньому
елементи в діапазоні між а і b, і виводить їх в новому масиві. Наприклад:
let numbers = [4, 8, 6, 3, 9, 1, 5];
let new = filtered(numbers,1,4);
alert(new); //4,3,1
*/
function filtered(arr, a, b) {
  var result = arr.filter(function (element) {
    return element >= a && element <= b;
  });
  return result;
}

let numbers = [4, 8, 6, 3, 9, 1, 5];
let filteredNumbers = filtered(numbers, 1, 4);

var resultParagraph4 = document.getElementById("task-4-p");
resultParagraph4.textContent = filteredNumbers;
/*
5. Дано масив, в якому потрібно знайти неперервний підмасив, сума елементів
якого є найбільшою. Написати функцію sum(), яка повертає цю суму.
*/
function sum(arr) {
  let maxSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

let arrays = [
  [-1, 2, 3, -8],
  [2, -1, 2, 3, -9],
  [100, -9, 2, 5],
  [5, 3, 2],
];

var resultParagraph5 = document.getElementById("task-5-p");
for (let i = 0; i < arrays.length; i++) {
  resultParagraph5.textContent += sum(arrays[i]) + "; ";
}
/*
6. Напишіть функцію getWeekDay(date), яка буде виводити день тижня текстом.
*/
function getWeekDay(date) {
  const daysOfWeek = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
  ];
  const dayOfWeekIndex = date.getDay();

  return daysOfWeek[dayOfWeekIndex];
}

let date = new Date(2022, 3, 25); // 25 квітня 2022
var resultParagraph6 = document.getElementById("task-6-p");
resultParagraph6.textContent = getWeekDay(date);
/*
7. Напишіть функцію lastDay(year, month), яка повертає останнє число місяця.
Наприклад,
getLastDayOfMonth(2022, 1) = 28 //не високосний рік, лютий
*/
function getLastDayOfMonth(year, month) {
  const lastDate = new Date(year, month + 1, 0); // Встановлюємо день 0 поточного місяця, що призведе до останнього дня попереднього місяця
  return lastDate.getDate();
}

const year = 2020;
const month = 1; // Лютий
const lastDay = getLastDayOfMonth(year, month);
var resultParagraph7 = document.getElementById("task-7-p");
resultParagraph7.textContent = lastDay;
/*
8. Напишіть функцію getMinute(date), яка повертає кількість хвилин, які
пройшли з заданої дати date.
*/
function getMinutesSince(date) {
  const currentDate = new Date();
  const elapsedMilliseconds = currentDate - date;
  const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
  return elapsedMinutes;
}

function updateMinutes() {
  const startDate = new Date(2022, 0, 1, 12, 0); // 1 січня 2022 року, 12:00
  const minutesElapsed = getMinutesSince(startDate);
  var resultParagraph8 = document.getElementById("task-8-p");
  resultParagraph8.textContent =
    "З 1 січня 2022 року, 12:00 минуло хвилин: " + minutesElapsed;
}
/*
9. За допомогою prompt почергово запитуйте користувача його призвіще, імя, по
батькові, вік, дату народження. Дані занесіть в масив, а потім перетворіть його
в JSON.
*/
function interview() {
  let userData = [];
  const surname = prompt("Введіть ваше прізвище:");
  const name = prompt("Введіть ваше ім'я:");
  const patronymic = prompt("Введіть ваше по батькові:");
  const age = prompt("Введіть ваш вік:");
  const birthDate = prompt(
    "Введіть вашу дату народження (у форматі yyyy-mm-dd):"
  );

  userData.push({
    Прізвище: surname,
    "Ім'я": name,
    "По батькові": patronymic,
    Вік: age,
    "Дата народження": birthDate,
  });

  const jsonUserData = JSON.stringify(userData);

  var resultParagraph9 = document.getElementById("task-9-p");
  resultParagraph9.textContent = jsonUserData;
}

/*
10. Напишіть функцію holidays(date), яка приймає дату date, і перевіряє чи це
вихідний день. Якщо вихідний – виводимо дату червоним і надпис «ми
зачинені». Вихідними вважаються субота і неділя.
*/
function holidays(date) {
  date.setDate(date.getDate() + 1);
  const dayOfWeek = date.getDay();
  var resultParagraph10 = document.getElementById("task-10-p");

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    resultParagraph10.style.color = "red";
    resultParagraph10.textContent =
      "Дата: " + date.toDateString() + " - ми зачинені";
  } else {
    resultParagraph10.textContent =
      "Дата: " + date.toDateString() + " - робочий день";
  }
}
