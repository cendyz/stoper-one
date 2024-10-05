const clock = document.querySelector(".stoper__clock");
const play = document.querySelector(".stoper__btns-one");
const pause = document.querySelector(".stoper__btns-two");
const save = document.querySelector(".stoper__btns-three");
const reset = document.querySelector(".stoper__btns-four");
const archiveBtn = document.querySelector(".stoper__btns-five");
const colorBtn = document.querySelector(".stoper__options-one");
const markBtn = document.querySelector(".stoper__options-two");
const blueBtn = document.querySelector(".stoper__change-color-item--blue");
const purpleBtn = document.querySelector(".stoper__change-color-item--purple");
const pinkBtn = document.querySelector(".stoper__change-color-item--pink");
const lastTime = document.querySelector(".stoper__time span");
const lastTimeText = document.querySelector(".stoper__time");
const archive = document.querySelector(".stoper__archive");
const table = document.querySelector(".stoper__archive-table");
const instructions = document.querySelector(".instructions");
const shadow = document.querySelector(".shadow");
const changePanel = document.querySelector(".stoper__change-color");

let seconds = 0;
let minutes = 0;
let countTime;
let id = 1;
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
		}, 1000);
	}
};

const pauseClock = () => {
	clearInterval(countTime);
	isRunning = false;
};

const resetClock = () => {
	seconds = 0;
	minutes = 0;
	clock.textContent = `0:00`;
};

const clearClock = () => {
	lastTimeText.style.visibility = "hidden";
	table.innerHTML = "";
	id = 1;
	resetClock();
	pauseClock();
};

const saveClock = () => {
	lastTime.textContent = clock.textContent;
	lastTimeText.style.visibility = "visible";

	const tr = document.createElement("tr");
	tr.classList.add("stoper__archive-tr");
	tr.innerHTML = `<td class="stoper__archive-first">Pomiar nr ${id}</td>
		<td class="stoper__archive-second">${lastTime.textContent}</td>`;
	id++;
	table.append(tr);
	console.log(table);
	resetClock();
	pauseClock();
};

const handleArchive = () => {
	archive.classList.toggle("display");
};

const handleInstructions = () => {
	instructions.classList.add("opacity");
	shadow.classList.add("opacity");
	instructions.style.zIndex = "12";
	shadow.style.zIndex = "11";
};

const handleColorPanel = () => {
	changePanel.classList.toggle("active");
};

const blueColor = () => {
	document.documentElement.style.setProperty("--primary", "#0096ff");
};

const pinkColor = () => {
	document.documentElement.style.setProperty("--primary", "#ffb6c1");
};

const purpleColor = () => {
	document.documentElement.style.setProperty("--primary", "#cf9fff");
};

play.addEventListener("click", startClock);
pause.addEventListener("click", pauseClock);
save.addEventListener("click", saveClock);
reset.addEventListener("click", clearClock);
archiveBtn.addEventListener("click", handleArchive);
markBtn.addEventListener("click", handleInstructions);
colorBtn.addEventListener("click", handleColorPanel);
blueBtn.addEventListener("click", blueColor);
purpleBtn.addEventListener("click", purpleColor);
pinkBtn.addEventListener("click", pinkColor);
document.addEventListener("click", e => {
	if (e.target === shadow) {
		instructions.classList.remove("opacity");
		shadow.classList.remove("opacity");

		setTimeout(() => {
			instructions.style.zIndex = "0";
			shadow.style.zIndex = "0";
		}, 500);
	}
});
