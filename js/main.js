const clock = document.querySelector(".stoper__clock");
const play = document.querySelector(".stoper__btns-one");
const pause = document.querySelector(".stoper__btns-two");
const save = document.querySelector(".stoper__btns-three");
const reset = document.querySelector(".stoper__btns-four");
const lastTime = document.querySelector('.stoper__time span')
const lastTimeText = document.querySelector('.stoper__time')
let seconds = 0;
let minutes = 0;
let countTime;
let isRunning = false;

const startClock = () => {
	if (!isRunning) {
		isRunning = true;
		countTime = setInterval(() => {
			if (seconds < 9) {
				seconds++;
				clock.textContent = `${minutes}:0${seconds}`;
			} else if (seconds >= 9 && seconds < 59) {
				seconds++;
				clock.textContent = `${minutes}:${seconds}`;
			} else if ((seconds = 59)) {
				seconds = 0;
				minutes++;
				clock.textContent = `${minutes}:0${seconds}`;
			}
		}, 500);
	}
};

const pauseClock = () => {
	clearInterval(countTime);
	isRunning = false;
};

const clearClock = () => {
    seconds = 0
    minutes = 0
    clock.textContent = `0:00`;
}

const saveClock = () => {
    lastTime.textContent = clock.textContent
    lastTimeText.style.visibility = 'visible'
    
    pauseClock()
    clearClock()
}

play.addEventListener("click", startClock);
pause.addEventListener("click", pauseClock);
save.addEventListener('click', saveClock)
reset.addEventListener('click', clearClock)
