const whoIsWeakAgainst = require('../data/whoIsWeakAgainst');

const playRound = (playerSelection, computerSelection) => {
  // return a string that declares the winner of the round
  console.log(`You pick ${playerSelection} and the computer pick ${computerSelection}`)
  if (playerSelection === computerSelection) {
    return "Draw!";
  }
  // TODO: send result to game score updater
  if (whoIsWeakAgainst(playerSelection) === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
};

module.exports = playRound;