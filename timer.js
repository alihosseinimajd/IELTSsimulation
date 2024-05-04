let timerInterval;
let minuts = 0;
let hours = 0;
let seconds = 0;

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
     seconds = 0;
     minuts++;
    }

    if (minuts === 60) {
        minuts = 0;
        hours++;
    }

document.getElementById('time').textContent = formatTime(hours,minuts,seconds)

}

function formatTime (hours, minuts, seconds) {
    return `${padZero(hours)}:${padZero(minuts)}:${padZero(seconds)}`
}

function padZero(value){
    return value.toString().padStart(2, '0');
}
