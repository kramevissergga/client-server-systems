//1
function delayedCallback(callback, delay) {
  setTimeout(callback, delay);
}

function startDelayedCallback() {
  delayedCallback(function () {
    showResult("task-1-result", "2 sec later...");
  }, 2000);
}

//2
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray(callback) {
  const filteredArray = exampleArray.filter(callback);
  showResult(
    "task-2-result",
    "Відфільтрований масив: " + filteredArray.join(", ")
  );
}

function isEven(number) {
  return number % 2 === 0;
}

//3
function fetchCatImagesSequentially(callback) {
  const apiUrl = "https://api.thecatapi.com/v1/images/search";
  const numberOfImages = 3;
  document.getElementById("task-3-content").innerHTML = "";
  function makeRequest(index) {
    if (index < numberOfImages) {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          callback(data);
          makeRequest(index + 1);
        })
        .catch((error) => {
          console.error(
            `Помилка при отриманні картинки кота: ${error.message}`
          );
        });
    }
  }
  makeRequest(0);
}

function displayCatImage(image) {
  const imgElement = document.createElement("img");
  imgElement.src = image[0].url;
  imgElement.alt = "Cat Image";
  document.getElementById("task-3-content").appendChild(imgElement);
}
document.getElementById("task-3-button").addEventListener("click", function () {
  fetchCatImagesSequentially(displayCatImage);
});

//4
function fetchData(callback) {
  setTimeout(function () {
    const data = [1, 2, 3, 4, 5];
    callback(null, data);
  }, 2000);
}

function processCallbackData(error, data) {
  if (error) {
    console.error("Помилка отримання даних:", error);
  } else {
    showResult("task-4-result", data);
  }
}

function handleData() {
  fetchData(processCallbackData);
}
//5
const userPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
    };

    resolve(user);
  }, 2000);
});

document.getElementById("task-5-button").addEventListener("click", function () {
  userPromise
    .then((user) => {
      return JSON.stringify(user);
    })
    .then((userAsString) => {
      showResult("task-5-result", userAsString);
    })
    .catch((error) => {
      console.error("Помилка в обробці Promise:", error);
    });
});

//6
const rejectedPromise = Promise.reject("Просто так.");
rejectedPromise.catch((error) => {
  showResult("task-6-result", "Promise відхилено з помилкою: " + error);
});

//7
// Приклад функції, що повертає Promise з певним таймаутом
function createPromiseWithTimeout(value, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, timeout);
  });
}
const promises = [
  createPromiseWithTimeout("Promise 1", 2000),
  createPromiseWithTimeout("Promise 2", 1000),
  createPromiseWithTimeout("Promise 3", 3000),
];

Promise.race(promises)
  .then((result) => {
    showResult("task-7-result", "Перший вирішений Promise: " + result);
  })
  .catch((error) => {
    console.error("Перший відхиленний Promise з помилкою:", error);
  });

//9
// Функція, яка імітує асинхронну операцію
function asyncOperation(id, delay, outputElemId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      showResult(outputElemId, ` Операція ${id} завершена `);
      resolve(`Результат операції ${id}`);
    }, delay);
  });
}

async function executeParallelAsyncOperations() {
  try {
    const results = await Promise.all([
      asyncOperation(1, 2000, "task-9-result"),
      asyncOperation(2, 1500, "task-9-result"),
      asyncOperation(3, 1000, "task-9-result"),
    ]);

    showResult("task-9-result", " Всі асинхронні операції завершено.");
    results.forEach((result) =>
      console.log("task-9-result", " " + result + " ")
    );
  } catch (error) {
    console.error(" Виникла помилка під час виконання операцій: ", error);
  }
}

function showResult(outputElemId, result) {
  document.getElementById(outputElemId).textContent += result;
}

//10

async function executeSequentialAsyncOperations() {
  try {
    const result1 = await asyncOperation(1, 2000, "task-10-result");

    const result2 = await asyncOperation(2, 1500, "task-10-result");

    const result3 = await asyncOperation(3, 1000, "task-10-result");
  } catch (error) {
    console.error("Виникла помилка під час виконання операцій:", error);
  }
}
