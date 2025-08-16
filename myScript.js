const dogs = ["kutya1","kutya2","kutya3","kutya4","kutya5","kutya6","kutya7","kutya8","kutya9","kutya10"];
const items = ["eszköz1","eszköz2","eszköz3","eszköz4","eszköz5","eszköz6","eszköz7","eszköz8","eszköz9","eszköz10"];

const topics = {};
topics["dogs"] = dogs;
topics["items"] = items;

let interval = null;
let timer = 15;
let copy = [];
let playDeck = [];
let currentTask = -1;
let audio = new Audio("countdown.mp3");

let score = 0;
let gameOn = true;
const playedTasksElement = document.getElementById("playedTasks");

//-----------------------------------------------

function openMenuCloseStart() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
}

function openEndCloseGame() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("endPage").style.display = "flex";
    clearInterval(interval);
    let scoreText = "Pontszám: "
    document.getElementById("finalScore").textContent = scoreText.concat(score);
    score = 0;
}

function openMenuCloseGame() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
    stopSound();
    clearInterval(interval);
}

function openMenuCloseEnd() {
    document.getElementById("endPage").style.display = "none";
    document.getElementById("menuPage").style.display = "flex";
    const playedTasksElement = document.getElementById("playedTasks");
    playedTasksElement.textContent = "Lejárt az idő:";
}

function itIsAPass() {
    const playedTasksElement = document.getElementById("playedTasks");
    let temp = playedTasksElement.textContent.concat("\n","&#128543;   ",playDeck[currentTask]);
    playedTasksElement.textContent = temp;
    document.getElementById("alertPass").style.display = "flex";
    timer -= 2;
    getNewTask();
}

function itIsACorrect() {
    const playedTasksElement = document.getElementById("playedTasks");
    let temp = playedTasksElement.textContent.concat("\n","&#128525;   ",playDeck[currentTask]);
    playedTasksElement.textContent = temp;
    document.getElementById("alertCorrect").style.display = "flex";
    timer += 4;
    score++;
    getNewTask();
}

function shuffle(arr) {
    let result = [];
    let i = null;
    let temp = -1;

    do{
        i = Math.floor(Math.random() * arr.length);
        result.push(arr[i]);
        temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp;
        arr.shift();
    }
    while(arr.length > 1);
    result.push(arr[0]);

    return result;
}

function getNewTask() {
    currentTask++;
    const taskElement = document.getElementById("task");
    taskElement.textContent = playDeck[currentTask];
}

function playSound() {
    audio.play();
}

// Leállítás egy eseményből
function stopSound() {
    audio.pause();      // megállítja a lejátszást
    audio.currentTime = 0; // visszaállítja az elejére
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

//-----------------------------------------------

function openGameCloseMenu(topic) {

    score = 0;
    copy = [...topics[topic]];
    playDeck = shuffle(copy);

    timer = 15;
    getNewTask();

    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = timer;

    document.getElementById("menuPage").style.display = "none";
    document.getElementById("gamePage").style.display = "flex";

    if (interval !== null) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
    timer--;

    document.getElementById("alertCorrect").style.display = "none";
    document.getElementById("alertPass").style.display = "none";

    countdownElement.textContent = timer;

      if (timer == 9) {
        playSound();
        }

      if (timer <= 0) {
        openEndCloseGame();
        }
    },1000);

    //console.log(dogs);
    //console.log(copy);
    //console.log(playDeck);
}





    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", (event) => {
        // landscape helyzetben az előre-hátra döntést a gamma adja
        document.getElementById("gamma").textContent = event.gamma.toFixed(1);
        let gamma = event.gamma; // -90 .. +90 között

        if (gameOn && document.getElementById("gamePage").style.display = "flex";) {
          if (gamma < 60 && gamma > 0) {  // jobbra dől (pl. előre)
            score++;
            itIsACorrect();
            gameOn = false; // várjuk vissza a középállást
          } else if (gamma > -60 && gamma < 0) { // balra dől (pl. hátra)
            score--;
            itIsAPass();
           gameOn = false;
          }
        }

        // ha visszatért középre (kb. egyenesben van), újra engedélyezünk számlálást
        if (gamma > 80 || gamma < -80) {
          gameOn = true;
        }
      });
    } else {
      alert("A készülék nem támogatja a giroszkópot.");
    }
