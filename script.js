// rock papers scissors game

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
const winCounthtml = document.querySelector("#win-counter");
const lossCounthtml = document.querySelector("#loss-counter");
const tieCounthtml = document.querySelector("#tie-counter");
winCounthtml.textContent = `${winCount}`;
lossCounthtml.textContent = `${lossCount}`;
tieCounthtml.textContent = `${tieCount}`;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const gameOutput = document.querySelector("#game-output");

btnRock.onclick = () => playRound("rock", getComputerChoice());
btnPaper.onclick = () => playRound("paper", getComputerChoice());
btnScissors.onclick = () => playRound("scissors", getComputerChoice());

// Computer random choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

function win(playerChoice, computerChoice) {
  gameOutput.textContent = `You won! ${playerChoice} beats ${computerChoice}.`;
  winCount++;
  winCounthtml.textContent = `${winCount}`;
}

function fail(playerChoice, computerChoice) {
  gameOutput.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  lossCount++;
  lossCounthtml.textContent = `${lossCount}`;
}

function tie() {
  gameOutput.textContent = "It's a tie!";
  tieCount++;
  tieCounthtml.textContent = `${tieCount}`;
}

// Play a Round
function playRound(player, computer) {
  if (player === computer) {
    return tie();
  }
  // rock beats scissors and loses to paper
  if (player === "rock" && computer === "scissors") {
    return win(player, computer);
  } else if (player === "rock" && computer === "paper") {
    return fail(player, computer);
  }
  // paper beats rock and loses to scissors
  else if (player === "paper" && computer === "rock") {
    return win(player, computer);
  } else if (player === "paper" && computer === "scissors") {
    return fail(player, computer);
  }
  // scissors beats paper and loses to rock
  else if (player === "scissors" && computer === "paper") {
    return win(player, computer);
  } else if (player === "scissors" && computer === "rock") {
    return fail(player, computer);
  }
}
