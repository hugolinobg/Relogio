const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")
const currentYear = document.querySelector(".newYear");

const clock = setInterval(function time() {
  let dateToday = new Date()

  let nowHour = dateToday.getHours()
  let nowMinute = dateToday.getMinutes()
  let nowSecond = dateToday.getSeconds()

  let nowDay = dateToday.getDate()
  let nowMonth = dateToday.getMonth() + 1
  let nowYear = dateToday.getFullYear()

  if (nowHour < 10) {
    nowHour = "0" + nowHour
  }
  if (nowMinute < 10) {
    nowMinute = "0" + nowMinute
  }

  if (nowSecond < 10) {
    nowSecond = "0" + nowSecond
  }

  hour.textContent = nowHour
  minute.textContent = nowMinute
  second.textContent = nowSecond

  if (nowDay < 10) {
    nowDay = "0" + nowDay
  }

  if (nowMonth < 10) {
    nowMonth = "0" + nowMonth
  }
  day.textContent = nowDay
  month.textContent = nowMonth
  year.textContent = nowYear
})

function currentFullYear() {
  const newYear = new Date().getFullYear();
  currentYear.textContent = newYear;

}
currentFullYear()
