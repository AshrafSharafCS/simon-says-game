const playButton = document.getElementById("play");
const info = document.getElementById("info");
const colors = ["green", "red", "yellow", "blue"];
const highScore = document.getElementById("high-score");
const level = document.getElementById("level");
let count = 1;
let playArray = [];
let choosenTile;
const board = document.querySelector(".board");
const tiles = document.querySelectorAll("[data-tile]");
let answerArray = [];
let game = true;

playButton.addEventListener("click", function () {
  Startgame();
});

function GenerateRandomNumber() {
  let rand = Math.floor(Math.random() * colors.length);
  return rand;
}

function PlayLevel() {
  board.classList.remove("unclickable");
  playArray.forEach((color, index) => {
    board.addEventListener("click", function (event) {
      choosenTile = event.target.dataset.tile;
      answerArray.push(choosenTile);
      console.log(answerArray);
     
    });
  }); 
}
function PlayLevel(){
  board.classList.remove("unclickable");
  
}

function RunLevel() {
  playArray.forEach((color, indexinarray) => {
    setTimeout(() => {
      let tile = document.querySelector(`[data-tile=${color}]`);
      Playsound(color);
      tile.classList.remove("inactive");
      setTimeout(() => {
        tile.classList.add("inactive");
      }, 600);
    }, (indexinarray + 1) * 1000);
  });
}

function Startgame() {
  info.innerHTML = "Time to play ! Stay Focused :)";
  level.textContent = count;
  count += 1;
  playArray.push(colors[GenerateRandomNumber()]);
  RunLevel();
  PlayLevel(playArray);
}

function Playsound(toBePlayed) {
  const sound = new Audio(`../sounds/${toBePlayed}.mp3`);
  sound.play();
}
