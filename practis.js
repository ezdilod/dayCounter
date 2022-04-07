// Const to manipulate the DOM
const outputEl = document.querySelector("#outputDate");
const outputWeekNameEl = document.querySelector("#outputWeekName");
const outputDayCountEl = document.querySelector("#outputDayCount");
const inputDateEl = document.getElementById("inputDate");
const userDateEl = document.querySelector("#userDate");
const userDateName = document.querySelector("#userDayName");

const weekDayName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const date = new Date(); //Sat Apr 02 2022 08:13:00 GMT+0200 (Mitteleuropäische Sommerzeit)
let weekDay = weekDayName[date.getDay()]; //Saturday

function getUserDate() {
  let userDate = inputDateEl.value;
  // creat to Dates to count between them
  const toDay = date;
  const birthDay = new Date(userDate);
  // final Date counter
  let dayCount = birthDay.getTime() - toDay.getTime();
  dayCount = Math.round(dayCount / 1000 / 60 / 60 / 24);

  let userDateShow = inputDateEl.value;
  userDateEl.innerHTML = userDateShow;

  //show the Date in the DOM
  outputDayCountEl.innerHTML = dayCount + " Days";

  inputDateEl.value = ""; // clear input field

  //get the weekday of userDate input
  function getDayNameUserInput(dateStr, locale) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  }
  let dateStr = userDate;
  let day = getDayNameUserInput(dateStr, "de-DE");
  console.log(day);
}

//show the Date in the DOM
outputEl.innerHTML = weekDay;
outputWeekNameEl.innerHTML = date.toLocaleDateString();

//!anzeige user datum name
