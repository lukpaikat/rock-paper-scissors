console.log("Hello World");

const randomGenerator = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const computerPlay = () => {
  // randomly return rock, paper, or scissors
  const choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
  }
  const randomNumber = randomGenerator(1, 3);
  return choices[randomNumber];
};

const playRound = (playerSelection, computerSelection) => {
  // return a string that declares the winner of the round
  console.log(`You pick ${playerSelection} and the computer pick ${computerSelection}`)
  if (playerSelection === computerSelection) {
    return "Draw!";
  }

  const loserOf = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (loserOf[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

const getUserInput = (gameRounds) => {
  const userInput = window
    .prompt(`Enter your choice: rock, paper, or scissors (Game round: ${gameRounds})`)
    .trim()
    .toLowerCase();
  const inputRestriction = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors",
  }
  if (userInput === inputRestriction[userInput]) {
    return userInput;
  } else {
    window.alert("wrong input, please enter rock, paper, or scissors");
    getUserInput(gameRounds);
  }
};

const game = () => {
  // play 5 round game
  // keeps score
  // reports a winner or a loser at the end
  let gameRounds = 1;
  let playerScore = 0;
  let computerScore = 0;
  while (gameRounds <= 5) {
    const playerSelection = getUserInput(gameRounds);
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    if (roundResult.indexOf("win!") >= 0) {
      playerScore++;
      gameRounds++;
     }
      else { 
        computerScore++ 
        gameRounds++;
      }
  }
  const finalScore = `${playerScore}-${computerScore}`
  if (playerScore > computerScore) { console.log(`You win the Game: ${finalScore}`) }
    else { console.log(`You lose the game: ${finalScore}`) }
};

game();