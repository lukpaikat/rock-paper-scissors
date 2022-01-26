import runningScore from '../data/runningScore.js';

const updateScore = () => {
  const roundCount = document.getElementById('round-count');
  const playerScore = document.getElementById('player-score');
  const computerScore = document.getElementById('computer-score');

  roundCount.textContent = runningScore.round;
  playerScore.textContent = runningScore.player;
  computerScore.textContent = runningScore.computer;
};

export default updateScore;
