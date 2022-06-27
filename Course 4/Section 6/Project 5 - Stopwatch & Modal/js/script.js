const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.archive');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let flag = true;
let times = [];

const handleStart = () => {
  if (!flag) return;
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopwatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopwatch.textContent = `${minutes}:${seconds}`;
    } else if (seconds >= 59) {
      minutes++;
      seconds = 0;
      stopwatch.textContent = `${minutes}:00`;
    }
  }, 1000);
  flag = !flag;
};

const handleStop = () => {
  if (stopwatch.textContent !== '0:00') {
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
    time.style.visibility = 'visible';
    times.push(stopwatch.textContent);
  }
  clearStuff();
};

const handlePause = () => {
  clearInterval(countTime);
  if (!flag) flag = !flag;
};

const handleReset = () => {
  time.style.visibility = 'hidden';
  times = [];
  clearStuff();
};

const clearStuff = () => {
  clearInterval(countTime);
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  minutes = 0;
  seconds = 0;
  if (!flag) flag = !flag;
};

const showArchive = () => {
  timeList.textContent = '';

  // SOLUTION 1 (new variable 'num'):
  // let num = 1;
  // times.forEach(time => {
  //   const newTime = document.createElement('li');
  //   newTime.innerHTML = `Pomiar nr ${num++}: <span>${time}</span>`;
  //   timeList.append(newTime);
  // });

  // SOLUTION 2 ('index' parameter):
  times.forEach((time, index) => {
    const newTime = document.createElement('li');
    newTime.innerHTML = `Pomiar nr ${++index}: <span>${time}</span>`;
    timeList.append(newTime);
  });
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);
