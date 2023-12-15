//1
function delayedCallback(callback, delay) {
  setTimeout(callback, delay);
}

function startDelayedCallback() {
  delayedCallback(function () {
    document.getElementById("task-1-result").textContent = "2 sec later...";
  }, 2000);
}

//2
const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterArray(callback) {
  const filteredArray = exampleArray.filter(callback);
  document.getElementById("task-2-result").innerHTML =
    "Відфільтрований масив: " + filteredArray.join(", ");
}

// Приклад callback-функції, яка фільтрує парні числа
function isEven(number) {
  return number % 2 === 0;
}
//3
function performSequentialRequests() {
  makeRequest(
    "https://jsonplaceholder.typicode.com/posts/1",
    function (response1) {
      document.getElementById("task-3-result").innerText = "Запит 1 виконаний.";

      makeRequest(
        "https://jsonplaceholder.typicode.com/posts/2",
        function (response2) {
          document.getElementById("task-3-result").innerText +=
            "\nЗапит 2 виконаний.";

          // Додамо також запит для отримання інформації про погоду
          getWeather("Kyiv", function (weatherResponse) {
            document.getElementById("task-3-result").innerText +=
              "\nЗапит для погоди виконаний.";
          });
        }
      );
    }
  );
}

function makeRequest(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => console.error("Помилка запиту:", error));
}

function getWeather(city, callback) {
  const apiKey = "your_openweathermap_api_key";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  makeRequest(weatherUrl, callback);
}
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
    console.log("Отримані дані:", data);
    document.getElementById("task-4-result").innerHTML = data;
  }
}

function handleData() {
  fetchData(processCallbackData);
}
