// Rock papers scissors game

let winCount = 0;
let lossCount = 0;
let tieCount = 0;
const scoreCount = document.querySelector("#counter");
scoreCount.textContent = `${winCount} - ${lossCount} (${tieCount})`;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.onclick = () => playRound("Rock", getComputerChoice());
btnPaper.onclick = () => playRound("Paper", getComputerChoice());
btnScissors.onclick = () => playRound("Scissors", getComputerChoice());

// Computer random choice
function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  const choice = Math.floor(Math.random() * 3);
  console.log(`The computer played ${options[choice]}`);
  return options[choice];
}

function win() {
  winCount++;
  scoreCount.textContent = `${winCount} - ${lossCount} (${tieCount})`;
}

function fail() {
  lossCount++;
  scoreCount.textContent = `${winCount} - ${lossCount} (${tieCount})`;
}

function tie() {
  tieCount++;
  scoreCount.textContent = `${winCount} - ${lossCount} (${tieCount})`;
}

// Play a Round
function playRound(player, computer) {
  if(player === computer){
    return tie();
  }
  // Rock beats scissors and loses to paper
  if (player === "Rock" && computer === "Scissors") {
    return win();
  } else if (player === "Rock" && computer === "Paper") {
    return fail();
  }
  // Paper beats rock and loses to scissors
  else if (player === "Paper" && computer === "Rock") {
    return win();
  } else if (player === "Paper" && computer === "Scissors") {
    return fail();
  }
  // Scissors beats paper and loses to rock
  else if (player === "Scissors" && computer === "Paper") {
    return win(player, computer);
  } else if (player === "Scissors" && computer === "Rock") {
    return fail(player, computer);
  }
}
