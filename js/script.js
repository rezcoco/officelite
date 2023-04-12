const displayDay = document.getElementById('day')
const displayHour = document.getElementById('hour')
const displayMin = document.getElementById('min')
const displaySec = document.getElementById('sec')
const displayDate = document.querySelector('.date')

let now = new Date()
let schedule = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
let timeLeft = new Date(schedule - now).getTime()

let month = schedule.toLocaleString('en-US', { month: "short" })
displayDate.textContent = `${schedule.getDate()} ${month} ${schedule.getFullYear()}`

function countdown() {
    now = new Date()
    schedule = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())
    timeLeft = new Date(schedule - now).getTime()
    month = schedule.toLocaleString('en-US', { month: "short" }).toUpperCase()

    displayDate.textContent = `${schedule.getDate()} ${month} ${schedule.getFullYear()}`

    const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const min = Math.floor((timeLeft / (1000 * 60)) % 60);
    const sec = Math.floor((timeLeft / 1000) % 60);

    const stringDay = day < 10 ? `0${day}` : day
    const stringHour = hour < 10 ? `0${hour}` : hour
    const stringMin = min < 10 ? `0${min}` : min
    const stringSec = sec < 10 ? `0${sec}` : sec

    displayDay.textContent = stringDay
    displayHour.textContent = stringHour
    displayMin.textContent = stringMin
    displaySec.textContent = stringSec
}

setInterval(countdown, 1000)