/*
  1. Створити сторінку, яка відобразить повідомлення з проханням ввести ваше імя, а потім повідомлення з текстом «Привіт, [Ваше імя]». Сам скрипт повинен підключатись до сторінки.
*/
function sayHello() {
  var name = document.getElementById("nameInput").value;

  if (name === "") {
    alert("Будь ласка, введіть ваше ім'я");
  } else {
    var greetingMessage = "Привіт, " + name + "!";
    document.getElementById("greetingMessage").textContent = greetingMessage;
  }
}
/*
2. Напишіть скрипт, який знаходить площу прямокутника з висотою 23см і шириною 10см, значення площі повинно зберігатися в числовій змінній s.
*/
var height = 23;
var width = 10;
var area = height * width;
var triangleMessage = "Площа прямокутника: " + area + " см²";
document.getElementById("triangleMessage").textContent = triangleMessage;
/*
 3. Створіть скрипт який запитує у користувача суму його зарплати. Потім розраховуєте:
      - Премію у сумі 15% від зарплати
      - Податки в сумі 10% від суми всіх нарахувань (зарплата + премія)
      - Витрати в магазині на суму 190
      - Виводите суму, що залишилась у користувача.
*/
function calculateFinances() {
  var salary = parseFloat(document.getElementById("salaryInput").value);
  var bonus = 0.15 * salary;
  var totalEarnings = salary + bonus;
  var taxes = 0.1 * totalEarnings;
  var expenses = 190;
  var remainingAmount = totalEarnings - taxes - expenses;
  document.getElementById("remainingAmount").textContent =
    remainingAmount.toFixed(2) + " грн";
}
/*
4. Використовуючи конструкцію if...else, напишіть код, який буде питати:
      «Яка офіційна назва JavaScript?". Якщо користувач вводить
      «ECMAScript», то показати: «Правильно!», в іншому випадку -
      відобразити: «Не знаєте? ECMAScript!».
*/
function checkAnswer() {
  var userAnswer = document.getElementById("answerInput").value;
  if (userAnswer === "ECMAScript") {
    document.getElementById("quiz-result").textContent = "Правильно!";
  } else {
    document.getElementById("quiz-result").textContent =
      "Не знаєте? Відповідь: ECMAScript!";
  }
}
/*
5. Перепишіть завдання 4 з використанням операторів '?'. 
*/
function checkAnswer2() {
  var userAnswer = document.getElementById("answerInput2").value;
  var resultMessage =
    userAnswer === "ECMAScript"
      ? "Правильно!"
      : "Не знаєте? Відповідь: ECMAScript!";
  document.getElementById("quiz-result2").textContent = resultMessage;
}
/*
6. За допомогою циклу for виведіть парні числа від 2 до 10. 
*/
var resultParagraph = document.getElementById("numbers-result");
var resultText = "";
for (var i = 2; i <= 10; i += 2) {
  resultText += i + " ";
}
resultParagraph.textContent = "Парні числа від 2 до 10: " + resultText;
/*
7. Напишіть if..else, який відповідає наступному switch:
        switch (browser) {
        case 'Edge':
        alert( "У вас браузер Edge!" );
        break;
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
        alert( 'Ми підтримуємо ці браузери також' );
        break;
        default:
        alert( 'Ми надіємось, що ця сторінка коректно відображається!' );
        }
*/
function checkBrowser() {
  var browserInput = document.getElementById("browserInput").value;
  var resultParagraph = document.getElementById("browser-result");

  if (browserInput === "Edge") {
    resultParagraph.textContent = "У вас браузер Edge!";
  } else if (
    browserInput === "Chrome" ||
    browserInput === "Firefox" ||
    browserInput === "Safari" ||
    browserInput === "Opera"
  ) {
    resultParagraph.textContent = "Ми підтримуємо ці браузери також";
  } else {
    resultParagraph.textContent =
      "Ми надіємось, що ця сторінка коректно відображається!";
  }
}
/*
8. Напишіть функцію min(a,b), яка повертає наймешне з чисел a і b.
      Приклад викликів:
      min(2, 5) == 2
      min(3, -1) == -1
      min(1, 1) == 1
*/
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
document.getElementById("min-value").textContent = "Менше число: " + min(34, 2);

/*
Замініть код Function Expression стрілковою функцією:
      function ask(question, yes, no) {
      if (confirm(question)) yes()
      else no();
      }
      ask(
      "Ви згодні?",
      function() { alert("Ви згодні."); },
      function() { alert("Ви відмінили виконання."); }
      );
*/
function access() {
  const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  ask(
    "Ви згодні?",
    () => {
      alert("Ви згодні.");
    },
    () => {
      alert("Ви відмінили виконання.");
    }
  );
}
/*
10.Напишіть функцію reverse(), яка перевертає число. Наприклад:
      reverse(1234);
      //4321
*/
function reverseNumber() {
  var numberInput = document.getElementById("reverseNumberInput").value;
  var resultParagraph = document.getElementById("reverseNumberResult");
  var reversedNumber = reverse(numberInput);
  resultParagraph.textContent = "Перевернуте число: " + reversedNumber;
}

function reverse(number) {
  var numberStr = number.toString();
  var reversedStr = numberStr.split("").reverse().join("");
  var reversedNumber = parseInt(reversedStr);
  return reversedNumber;
}
