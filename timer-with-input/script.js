const submitBtn = document.querySelector("#submit");
const userDate = document.querySelector("#myDate");
const form = document.querySelector("form");
const eventEl = document.querySelector("#occassion");
const header = document.querySelector("#event");
const showBtn = document.querySelector(".showbtn");
const formContainer =document.querySelector(".form-section");

// countdown elements
const daysEl = document.getElementById("days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");


// defaults
let defaultEvent = "New Year";
let defaultDate = '1 Jan 2022';

localStorage.setItem("date", defaultDate);
localStorage.setItem('eventName', defaultEvent);

// getting the event name from the local storage
let eventName = localStorage.getItem('eventName');
header.innerHTML = eventName;


// function to calculate the countdown

const countDownTimer = () => {
    let newYearsDate = new Date(defaultDate);
    let currentDate = new Date();


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

// calling the function for a countdown
countDownTimer();
setInterval(countDownTimer, 1000);


form.onsubmit = (e) => {
    
    

    
    // let options = {
    //     day: 'numeric',
    //     month: 'short',
    //     year: 'numeric'
    // };
    let currDate = userDate.value;
    // let convertedDate = new Date(currDate);
    // console.log(convertedDate);
    let newEventName = eventEl.value;

  
    const countDown = () => {
        let newYearsDate = new Date(currDate);
        let currentDate = new Date();
    
    
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

    // calling the function for a countdown
    
    countDown();
    setInterval(countDown, 1000);
    

    e.preventDefault();

    header.innerHTML = newEventName;
}

let showForm = false;

showBtn.onclick = () => {
    if (!showForm) {
        formContainer.classList.add("show");
        showForm = true;
    }else{
        formContainer.classList.remove("show");
        showForm = false;
    }
}



