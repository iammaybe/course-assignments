const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.archive');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');

let countTime;
let minutes = 0;
let seconds = 0;
let flag = true;
let times = [];
let root = document.documentElement;

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

const checkModal = () => {
  !(modalShadow.style.display === 'block')
    ? (modalShadow.style.display = 'block')
    : (modalShadow.style.display = 'none');
  modalShadow.classList.toggle('modal-animation');
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
archiveBtn.addEventListener('click', showArchive);

infoBtn.addEventListener('click', checkModal);
closeModalBtn.addEventListener('click', checkModal);
addEventListener('click', e =>
  e.target === modalShadow ? checkModal() : false
);

colorBtn.addEventListener('click', () => {
  colorPanel.classList.toggle('show-colors');
});

// SOLUTION 1 (listener on each color):
// colorOne.addEventListener('click', () => {
//   root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
// });

// colorTwo.addEventListener('click', () => {
//   root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
// });

// colorThree.addEventListener('click', () => {
//   root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
// });

// SOLUTION 2 (arrays, forEach and datasets):
const colors = ['rgb(250,20,6)', 'rgb(6,173,250)', 'rgb(0,255,42)'];
const colorDivs = [...document.querySelectorAll('[data-color-number]')];

const changeColor = () => {
  colorDivs.forEach(colorDiv => {
    colorDiv.addEventListener('click', e => {
      const index = e.target.dataset.colorNumber;
      root.style.setProperty('--first-color', colors[index]);
    });
  });
};

changeColor();
