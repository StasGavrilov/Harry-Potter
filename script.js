// Count down section
let finalDate = '23 Nov 2021';

let daysEl = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minutesEl = document.getElementById('minutes');
let secondsEl = document.getElementById('seconds');
let allBookEl = document.getElementById("all-book");
let pagesEl = document.getElementById("pages");
let extraEl = document.getElementById("extra");
let winDaysEl = document.getElementById("win-days");

function countdown() {
    let newDate = new Date(finalDate);
    let currentDate = new Date();

    let totalseconds = (newDate - currentDate) / 1000;

    let days = Math.floor(totalseconds / 3600 / 24);
    let hours = Math.floor(totalseconds / 3600 / 24) % 24;
    let minutes = Math.floor(totalseconds / 3600 / 24) % 60;
    let seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function getWinDays(extraValue) {
    if (extraValue > 0) {
        return Math.floor(extraValue / 24)
    }
    return Math.ceil(extraValue / 24)
}

// Counters

// firstBook = 580
// secondBook = 887
// thirdBook = 587
// fourthBook = 683
// biggestWinPerDay = 107
// biggestWinDays = 203
// booksLeft = 1
// pageLeft = 132 (14/11/2021)

function counters() {
    const page = -27
    const totalDays = 103
    const totalPages = 2737
    const pagesPerDay = totalPages / totalDays
    allBookEl.innerHTML = totalPages;
    pagesEl.innerHTML = pagesPerDay
    extraEl.innerHTML = page;
    winDaysEl.innerHTML = getWinDays(extraEl.innerHTML);
}

// All the functions
function render() {
    countdown();
    setInterval(countdown, 1000);
    counters();
}

render()