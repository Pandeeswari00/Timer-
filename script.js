let timer;
let minutes = 0;
let seconds = 0;
let isRunning = false;

function startTimer() {
  if (isRunning) return; // Prevent starting a new timer if one is already running

  isRunning = true;
  timer = setInterval(function() {
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    document.getElementById('timerDisplay').textContent = formatTime(minutes, seconds);
    seconds++;
  }, 1000);

  document.getElementById('startButton').disabled = true; // Disable the start button while the timer is running
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  document.getElementById('startButton').disabled = false; // Enable the start button when paused
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  document.getElementById('timerDisplay').textContent = '00:00';
  document.getElementById('startButton').disabled = false;
}

function formatTime(min, sec) {
  return (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}