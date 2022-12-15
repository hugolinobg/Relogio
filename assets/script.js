const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const day = document.getElementById("day")
const month = document.getElementById("month")
const year = document.getElementById("year")

const clock = setInterval(function time() {
  let dateToday = new Date()

  let nowHour = dateToday.getHours()
  let nowMinute = dateToday.getMinutes()
  let nowSecond = dateToday.getSeconds()

  let nowDay = dateToday.getDate()
  let nowMonth = dateToday.getMonth() + 1
  let nowYear = dateToday.getFullYear()

  hour.textContent = nowHour
  minute.textContent = nowMinute
  second.textContent = nowSecond

  day.textContent = nowDay
  month.textContent = nowMonth
  year.textContent = nowYear
})
