/////////////////////////////////////////////////////////////////////////////
// КНОПКИ
const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

// ВСЕ КНОПКИ
const btnsAll = document.querySelectorAll(".btn");

// КОНТЕЙНЕР ВСЕХ НАЗВАНИЙ КАРТОЧЕК
const typeAll = document.querySelectorAll(".bot__type");

// КОНТЕЙНЕР ВСЕХ ТЕКУЩИХ ЧАСОВ
const hours = document.querySelectorAll(".hr");

// КОНТЕЙНЕР ВСЕХ ПРЕДЫДУЩИХ ЧАСОВ
const prevHrs = document.querySelectorAll(".bot__info--value");

// КОНТЕЙНЕР ВСЕХ ПЕРИОДОВ
const period = document.querySelectorAll(".bot__info--range");

////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION
const display = function (index, value, time, range) {
  period[index].textContent = time;
  hours[index].textContent = value.timeframes[range].current;
  prevHrs[index].textContent = value.timeframes[range].previous;
};

const color = function () {
  btnsAll.forEach((value) => (value.style.color = "hsl(235, 45%, 61%)"));
};

////////////////////////////////////////////////////////////////////////////////////////////////
// FINAL
const request = fetch("data.json");
request
  .then(function (respond) {
    return respond.json();
  })
  .then(function (data) {
    console.log(data);

    data.forEach((value, i) => {
      // Выводим название карточек
      typeAll[i].textContent = value.title;

      // Изначально активный "daily"
      display(i, value, "day", "daily");
      daily.style.color = "white";

      // Обработчик для "daily"
      daily.addEventListener("click", () => {
        color();
        display(i, value, "day", "daily");
        daily.style.color = "white";
      });

      // Обработчик для "weekly"
      weekly.addEventListener("click", () => {
        color();
        display(i, value, "week", "weekly");
        weekly.style.color = "white";
      });

      // Обработчик для "monthly"
      monthly.addEventListener("click", () => {
        color();
        display(i, value, "month", "monthly");
        monthly.style.color = "white";
      });
    });
  });
