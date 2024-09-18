import COMBINATIONS from "./combinations/COMBINATIONS.js";
// win and lost score
const win = document.getElementById("win");
const lost = document.getElementById("lost");

let winScore = 0;
let lostScore = 0;

win.innerHTML = winScore;
lost.innerHTML = lostScore;

// rock-paper-scissor buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

// computer hand
const computerArray = ["rock", "paper", "scissor"];

//checking combinations

const buttons = [rockBtn, paperBtn, scissorBtn];
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const index = Math.floor(Math.random() * 3);

    const game = COMBINATIONS.find(
      (combination) =>
        combination.user == button.id &&
        combination.computer == computerArray[index]
    );

    console.log(game.message);
    updateLog(game.message);
  })
);

// updating game logs

function updateLog(message) {
  if (message.includes("win")) {
    win.innerHTML = ++winScore;
  } else if (message.includes("lost")) {
    lost.innerHTML = ++lostScore;
  }

  const logs = document.getElementById("logs");
  logs.innerHTML = "";

  const p = document.createElement("p");
  p.textContent = message;
  logs.append(p);
  p.classList.add('latest-log');

  if (message.includes("win")) {
    p.classList.add("win");
  } else if (message.includes("lost")) {
    p.classList.add("lost");
  }else{
    p.classList.add('draw');
  }

  setTimeout(() => {
    p.classList.remove("latest-log");
  }, 400);

  setTimeout(() => {

    p.classList.remove('draw');
    p.classList.remove("win");
    p.classList.remove("lost");
    p.remove();
  }, 2000);
}
