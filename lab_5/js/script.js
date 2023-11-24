// Завдання 1
function checkPassword() {
  const passwordInput = document.getElementById("passwordInput").value;
  const passwordResult = document.getElementById("passwordResult");

  if (
    passwordInput.length >= 8 &&
    /[a-zA-Z]/.test(passwordInput) &&
    /\d/.test(passwordInput)
  ) {
    passwordResult.textContent = "Пароль відповідає критеріям.";
  } else {
    passwordResult.textContent = "Пароль не відповідає критеріям.";
  }
}

// Завдання 2
function countdownTimer() {
  const targetDate = new Date("December 1, 2023 00:00:00");
  const timerElement = document.getElementById("timerResult");

  if (targetDate < new Date()) {
    targetDate.setFullYear(targetDate.getFullYear() + 1);
  }

  setInterval(function () {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate.getTime() - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}д ${String(hours).padStart(
      2,
      "0"
    )}г ${String(minutes).padStart(2, "0")}хв ${String(seconds).padStart(
      2,
      "0"
    )}с`;
  }, 1000);
}

// Завдання 3
function printEvenNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((number) => number % 2 === 0);

  document.getElementById(
    "evenNumbersResult"
  ).textContent = `Парні числа: ${evenNumbers.join(", ")}`;
}

// Завдання 4
function changeBackgroundColor() {
  const color = prompt("Введіть колір (наприклад, red або #00ff00):");
  document.body.style.backgroundColor = color;
}

// Завдання 5
function calculateAverage() {
  const num1 = parseFloat(prompt("Введіть перше число:"));
  const num2 = parseFloat(prompt("Введіть друге число:"));
  const num3 = parseFloat(prompt("Введіть третє число:"));

  const average = (num1 + num2 + num3) / 3;

  document.getElementById(
    "averageResult"
  ).textContent = `Середнє значення: ${average}`;
}

// Завдання 6
function generateMultiplicationTable() {
  const number = parseInt(prompt("Введіть число для таблиці множення:"));
  const tableElement = document.getElementById("multiplicationTableResult");

  let tableHTML = "<h3>Таблиця множення</h3><ul>";

  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    tableHTML += `<li>${number} * ${i} = ${result}</li>`;
  }

  tableHTML += "</ul>";
  tableElement.innerHTML = tableHTML;
}

// Завдання 7
function checkArrayForElement() {
  const array = [1, 2, 3, 4, 5];
  const elementToCheck = parseInt(prompt("Введіть елемент для перевірки:"));

  const resultElement = document.getElementById("arrayCheckResult");
  const isElementPresent = array.includes(elementToCheck);

  resultElement.textContent = isElementPresent
    ? `Масив містить елемент ${elementToCheck}.`
    : `Масив не містить елемент ${elementToCheck}.`;
}

// Завдання 8
function displayStudentInfo() {
  const student = {
    name: "Іван",
    age: 20,
    group: "3",
  };

  const studentInfoElement = document.getElementById("studentInfoResult");
  studentInfoElement.innerHTML = `<h3>Інформація про студента:</h3>
                                  <p>Ім'я: ${student.name}</p>
                                  <p>Вік: ${student.age}</p>
                                  <p>Група: ${student.group}</p>`;
}

// Завдання 9
function stringLengthAndChars() {
  const inputString = prompt("Введіть рядок:");
  const length = inputString.length;
  const firstChar = inputString.charAt(0);
  const lastChar = inputString.charAt(length - 1);

  const resultElement = document.getElementById("stringLengthResult");
  resultElement.textContent = `Довжина рядка: ${length}, Перший символ: ${firstChar}, Останній символ: ${lastChar}`;
}

// Завдання 10
function calculateTriangleArea() {
  const base = parseFloat(prompt("Введіть довжину основи трикутника:"));
  const height = parseFloat(prompt("Введіть висоту трикутника:"));

  const area = 0.5 * base * height;

  document.getElementById(
    "triangleAreaResult"
  ).textContent = `Площа трикутника: ${area}`;
}
