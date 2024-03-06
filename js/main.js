const playButton = document.getElementById("play");
const info = document.getElementById("info");
const colors = ["green", "red", "yellow", "blue"];
const highScore = document.getElementById("high-score");
const level = document.getElementById("level");
const board = document.querySelector(".board");

let count = 0;
let playArray = [];
let choosenTile;

const red = document.querySelector('[data-tile="red"');
const blue = document.querySelector('[data-tile="blue"');
const green = document.querySelector('[data-tile="green"');
const yellow = document.querySelector('[data-tile="yellow"]');

// red.addEventListener("click", handleclick);
// blue.addEventListener("click", handleclick);
// green.addEventListener("click", handleclick);
// yellow.addEventListener("click", handleclick);

let answerArray = [];
let game = true;






function resetGame() {
  count=0;
  playArray=[];

}

function GenerateRandomNumber() {
  let rand = Math.floor(Math.random() * colors.length);
  return rand;
}

function Playsound(toBePlayed) {
  const sound = new Audio(`../sounds/${toBePlayed}.mp3`);
  sound.play();
}

function PlayLevel() {

  board.classList.remove("unclickable");
  playArray.forEach((color,indexinarray)=>{
    tile = document.querySelector(`[data-tile=${color}]`);
    tile.addEventListener("click",function(){
      console.log(color);
      
    })
 })

}

function RunLevel() {
  playArray.forEach((color, indexinarray) => {
    setTimeout(() => {
      tile = document.querySelector(`[data-tile=${color}]`);
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
  count += 1;
  level.textContent = count;
  playArray.push(colors[GenerateRandomNumber()]);
  RunLevel();
  PlayLevel();
}

playButton.addEventListener("click", function () {
  Startgame();
});
