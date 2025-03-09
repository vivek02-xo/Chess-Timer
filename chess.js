let time1 = 600, time2 = 600; 
let currentTurn = 1;
let interval;
let running = false;

function setTime() {
    let selectedTime = parseInt(document.getElementById("timeControl").value);
    time1 = time2 = selectedTime;
    document.getElementById("time1").textContent = formatTime(time1);
    document.getElementById("time2").textContent = formatTime(time2);
    clearInterval(interval);
    running = false;
}

function startTimer() {
    if (running) return;
    running = true;
    
    clearInterval(interval);
    interval = setInterval(() => {
        if (currentTurn === 1) {
            if (time1 > 0) {
                time1--;
                document.getElementById("time1").textContent = formatTime(time1);
            } else {
                alert("Player 1 loses on time!");
                clearInterval(interval);
                running = false;
            }
        } else {
            if (time2 > 0) {
                time2--;
                document.getElementById("time2").textContent = formatTime(time2);
            } else {
                alert("Player 2 loses on time!");
                clearInterval(interval);
                running = false;
            }
        }
    }, 1000);
}

function switchTurn(player) {
    if (player !== currentTurn) return; 

    currentTurn = currentTurn === 1 ? 2 : 1;
    running = false; 
    startTimer(); 
}

function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

setTime(); 
