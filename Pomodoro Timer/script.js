const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1800; //!25 min

const updateTimer = () => {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  //!using padstart we can add a 0 in place of 2 numbers if there is any number missing
  timerEl.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;
};

const startTimer = () => {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = 1800;
      updateTimer();
    }
  }, 1000);
};
const stopTimer = () => {
  clearInterval(interval);
};
const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1800;
  updateTimer();
};

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
