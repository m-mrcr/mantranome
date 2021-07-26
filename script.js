const startingMinutes = 10;
let time = startingMinutes * 60;

const timeToggle = document.getElementById("timeToggle");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}

timeToggle.addEventListener("click", () => {
  const button = document.getElementById("timeToggle");

  if (timeToggle.classList.contains("clicked")) {
    clearInterval(window.refreshIntervalId);
    button.classList.remove("clicked");
    countdownEl.innerHTML = "Mantranome";
    button.textContent = "Start";
  } else {
    window.refreshIntervalId = setInterval(updateCountdown, 1000);
    button.classList.add("clicked");
    button.textContent = "Stop";
  }
});
