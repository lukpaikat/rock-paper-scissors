import whoIsWeakAgainst from '../data/whoIsWeakAgainst.js';
import runningScore from '../data/runningScore.js';
// const runningScore = require('../data/runningScore');

const playRound = (playerSelection, computerSelection) => {
  // send result to game score updater
  let resultMessage = 'Draw!';
  if (whoIsWeakAgainst(playerSelection) === computerSelection) {
    resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    runningScore.player += 1;
  }
  if (whoIsWeakAgainst(computerSelection) === playerSelection) {
    resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    runningScore.computer += 1;
  }

  // showdownPage({
  //   resultMessage,
  //   playerSelection,
  //   computerSelection,
  // }) this function show continue button continue button contains scoreChecking function which wether return the player to round pick or game result
};

export default playRound;
