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

  const strongAgainstRules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (strongAgainstRules[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else { 
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};