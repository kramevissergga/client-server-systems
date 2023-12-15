// Завдання 1
function divideByZero() {
  try {
    const result = 10 / 0;
    document.getElementById("task-1-result").textContent = result;
  } catch (error) {
    document.getElementById("task-1-result").textContent =
      "Помилка: Ділення на нуль не допускається.";
  }
}

// Завдання 2
function invalidFunctionCall() {
  try {
    nonExistentFunction();
  } catch (error) {
    document.getElementById("task-2-result").textContent =
      "Помилка виклику функції: " + error.message;
  }
}

// Завдання 3
function parseInvalidJSON() {
  try {
    const invalidJSON = '{"name" "Walter"}';
    const parsedJSON = JSON.parse(invalidJSON);
    document.getElementById("task-3-result").textContent = parsedJSON;
  } catch (error) {
    document.getElementById("task-3-result").textContent =
      "Помилка парсингу JSON: " + error.message;
  }
}

// Завдання 4
const sharedObject = { value: 0 };

async function modifyObjectAsync1() {
  try {
    sharedObject.value += 1;
    document.getElementById("task-4-result").textContent +=
      "Асинхронна функція 1: Об'єкт після модифікації:" +
      JSON.stringify(sharedObject);
  } catch (error) {
    document.getElementById("task-4-result").textContent +=
      "Помилка в асинхронній функції 1:" + error.message;
  }
}

async function modifyObjectAsync2() {
  try {
    sharedObject.value += 1;
    document.getElementById("task-4-result").textContent +=
      "Асинхронна функція 2: Об'єкт після модифікації:" +
      JSON.stringify(sharedObject);
  } catch (error) {
    document.getElementById("task-4-result").textContent +=
      "Помилка в асинхронній функції 1:" + error.message;
  }
}

async function runAsyncFunctions() {
  modifyObjectAsync1();
  modifyObjectAsync2();
}

// Завдання 5
async function asyncFunctionWithError() {
  try {
    await new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("2 seconds later...")), 2000)
    );
  } catch (error) {
    document.getElementById("task-5-result").textContent =
      "Помилка в асинхронній функції: " + error.message;
  }
}
