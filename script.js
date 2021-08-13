let intervalId;
let totalTime;
let elapsedTime;

const timeToggle = document.getElementById("timeToggle");
const countdownEl = document.getElementById("countdown");
const timeDisplay = document.querySelector(".timeDisplay");
const outline = document.querySelector("#progress");
const outlineLength = outline.getTotalLength();

outline.style.setProperty("--progess", outlineLength);
outline.style.setProperty("--outlineLength", outlineLength);

const timeSelect = document.querySelectorAll(".timeSelect button");

timeToggle.addEventListener("click", () => {
  const startingMinutes = Number(document.querySelector(".main").textContent);

  totalTime = Math.floor(startingMinutes * 60);

  const button = document.getElementById("timeToggle");

  if (timeToggle.classList.contains("clicked")) {
    clearInterval(intervalId);
    button.classList.remove("clicked");
    countdownEl.classList.remove("outOfTime");
    button.textContent = "Start";
  } else {
    elapsedTime = totalTime;
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    button.classList.add("clicked");
  }
});

function updateCountdown() {
  if (elapsedTime <= -1) {
    countdownEl.classList.add("outOfTime");
  }
  const minutes = Math.floor(Math.abs(elapsedTime) / 60);
  let seconds = Math.abs(elapsedTime) % 60;
  let progress = outlineLength - (elapsedTime / totalTime) * outlineLength;
  outline.style.strokeDashoffset = progress;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timeToggle.textContent = `${minutes}:${seconds}`;
  elapsedTime--;
}
