const labelTimer = document.querySelector(".timer");

let timer;

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 3600;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

if (timer) clearInterval(timer);
timer = startLogOutTimer();

// Reset timer
if (amount > 0) {
  clearInterval(timer);
  timer = startLogOutTimer();
}
