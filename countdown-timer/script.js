// get the elements from html

const daysEl = document.getElementById("days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

console.log(daysEl);
const newYears = '1 Jan 2022';

const countDown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds  = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = addZero(hours);
    minutesEl.innerHTML = addZero(minutes);
    secondsEl.innerHTML = addZero(seconds);
    
}

const addZero = (time) => {
    return time < 10 ? (`0${time}`) : time;
}


// initial call
countDown();

// add zero to time with one digit


setInterval(countDown, 1000);

console("Hello world");