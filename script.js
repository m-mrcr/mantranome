let intervalId;
let time;

const timeToggle = document.getElementById("timeToggle");
const countdownEl = document.getElementById("countdown");

timeToggle.addEventListener("click", () => {
  const startingMinutes = document.getElementById("timeSelector").valueAsNumber;
  time = Math.floor(startingMinutes * 60);

  const button = document.getElementById("timeToggle");

  if (timeToggle.classList.contains("clicked")) {
    clearInterval(intervalId);
    button.classList.remove("clicked");
    document.body.classList.remove("outOfTime");
    countdownEl.innerHTML = "Mantranome";
    button.textContent = "Start";
  } else {
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    button.classList.add("clicked");
    button.textContent = "Stop";
  }
});

function updateCountdown() {
  if (time <= 0) {
    document.body.classList.add("outOfTime");
  }
  const minutes = Math.floor(Math.abs(time) / 60);
  let seconds = Math.abs(time) % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}
