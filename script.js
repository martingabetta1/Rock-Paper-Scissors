// rock papers scissors game

document.querySelector("#rock").onclick = () =>
  playRound("rock", getComputerChoice());
document.querySelector("#paper").onclick = () =>
  playRound("paper", getComputerChoice());
document.querySelector("#scissors").onclick = () =>
  playRound("scissors", getComputerChoice());

// Computer random choice
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
}

// Win output
function win(playerChoice, computerChoice) {
  document.querySelector(
    "#game-output"
  ).textContent = `You won! ${playerChoice} beats ${computerChoice}.`;
  document.querySelector("#win-counter").textContent =
    +document.querySelector("#win-counter").textContent + 1;
}

// Loss output
function fail(playerChoice, computerChoice) {
  document.querySelector(
    "#game-output"
  ).textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  document.querySelector("#loss-counter").textContent =
    +document.querySelector("#loss-counter").textContent + 1;
}

// Tie output
function tie() {
  document.querySelector("#game-output").textContent = "It's a tie!";
  document.querySelector("#tie-counter").textContent =
    +document.querySelector("#tie-counter").textContent + 1;
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

// Ask to play again
// function playAgain(winner){
//   const againPrompt = document.createElement('div');
//   againPrompt.classList.add()
// }