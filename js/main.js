const playButton = document.getElementById("play");
const info = document.getElementById("info");
const colors = ["green", "red", "yellow", "blue"];
const highScore = document.getElementById("high-score");
const level = document.getElementById("level");
let count = 1;
let playArray = ["red", "red","yellow"];

const tiles = document.querySelectorAll("[data-tile]");

playButton.addEventListener("click", function () {
  info.innerHTML = "Time to play ! Stay Focused :)";
  level.textContent = count;
  count += 1;

  // playArray.push(colors[GenerateRandomNumber()]);

  RunLevel();
});

function GenerateRandomNumber() {
  let rand = Math.floor(Math.random() * colors.length);
  return rand;
}

function RunLevel() {
  playArray.forEach((color, indexinarray) => {
    setTimeout(() => {
      let tile = document.querySelector(`[data-tile=${color}]`);
      tile.classList.remove("inactive");
      setTimeout(() => {
        tile.classList.add("inactive");
      }, 600);
    }, (indexinarray+1)*1000);
  });
}
