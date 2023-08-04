let timerInterval;
let startTime;
let elapsedTime = 0;
let laps = [];

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
    }
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    updateDisplay();
    laps = [];
    displayLaps();
}

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const time = new Date(elapsedTime);

    document.getElementById('minutes').textContent = String(time.getMinutes()).padStart(2, '0');
    document.getElementById('seconds').textContent = String(time.getSeconds()).padStart(2, '0');
    document.getElementById('milliseconds').textContent = String(time.getMilliseconds()).padStart(3, '0');
}

function lap() {
    if (timerInterval) {
        const time = new Date(elapsedTime);
        laps.push(`${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}.${String(time.getMilliseconds()).padStart(3, '0')}`);
        displayLaps();
    }
}

function displayLaps() {
    const lapsContainer = document.getElementById('laps');
    lapsContainer.innerHTML = '';
    for (let i = 0; i < laps.length; i++) {
        const lapItem = document.createElement('div');
        lapItem.textContent = `Lap ${i + 1}: ${laps[i]}`;
        lapsContainer.appendChild(lapItem);
    }
}
