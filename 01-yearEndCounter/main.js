const body = document.body;
const endTime = new Date('December 31 2021 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


const updateCountdown = () => {
    const startTime = new Date();
    const diff = endTime - startTime;
    const days = Math.floor(diff / 1000/ 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
    secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;

}

setInterval(updateCountdown, 1000);



