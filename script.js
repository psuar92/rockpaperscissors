const arr = ["rock", "paper", "scissors"];
const winners = [];

function game() {
  for (i = 0; i < 5 ; i++) {
    playRound(i);
  }
  logWin();
}

function playRound(round) {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  saveRound(playerSelection, computerSelection, winner, round);
}

function playerPlay() {
  let input = prompt("Type Rock, Paper or Scissors");

  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors only");
  }

  input = input.toLowerCase();

  let check = validateInput(input);

  while (check == false) {
    input = prompt("Type Rock, Paper or Scissors only");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors only");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerPlay() {
  return arr[Math.floor(Math.random() * arr.length)];
}

function validateInput(choice) {
  return arr.includes(choice);
}

function checkWinner(player, computer) {
  if (player === computer) {
    return "Tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function logWin() {
    let getPlayerWin = winners.filter((roundWinner) => roundWinner == "Player").length;
    let getComputerWin = winners.filter((roundWinner) => roundWinner == "Computer").length;
    let getTies = winners.filter((roundWinner) => roundWinner == "Tie").length;
    console.log('Results: ');
    console.log('Player Wins: ', getPlayerWin);
    console.log('Computer Wins: ', getComputerWin);
    console.log('Ties: ', getTies);
}

function saveRound(playerSelection, computerSelection, winner, round) {
    console.log('Round: ', round);
    console.log('Player selected: ', playerSelection);
    console.log('Computer selected: ', computerSelection);
    console.log('The winner is: ', winner);
    console.log('=========================')
}
