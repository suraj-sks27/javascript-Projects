const timerEl = document.getElementById("timer");
const startButtonEl = document.getElementById("start");
const stopButtonEl = document.getElementById("stop");
const resetButtonEl = document.getElementById("reset");

const startTimer = () => {
  startTime = Date.now() - elapsedTime;
  timeInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerEl.textContent = formatTime(elapsedTime);
  }, 10);

  startButtonEl.disabled = true;
  stopButtonEl.disabled = false;
};

const formatTime = (elapsedTime) => {
  let date = new Date(elapsedTime);
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();
  let millisec = Math.floor(date.getUTCMilliseconds() / 10);
  //   let millisec = Math.floor((elapsedTime % 1000) / 10);
  //   let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  //   let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  //   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    "." +
    (millisec > 9 ? millisec : "0" + millisec)
  );
};
const stopTimer = () => {
  clearInterval(timeInterval);

  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
};
const resetTimer = () => {
  clearInterval(timeInterval);

  elapsedTime = 0;

  timerEl.textContent = "00:00:00";
  startButtonEl.disabled = false;
  stopButtonEl.disabled = true;
};

let startTime = 0;
let elapsedTime = 0;
let timeInterval;

startButtonEl.addEventListener("click", () => {
  startTimer();
});
stopButtonEl.addEventListener("click", () => {
  stopTimer();
});
resetButtonEl.addEventListener("click", () => {
  resetTimer();
});
