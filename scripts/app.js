const initButton = require('./utils/btn-initiator');

// execute initial functions here
// this code should make browser display welcome page
document.addEventListener('DOMContentLoaded', () => {
  const rockBtn = document.getElementById('rock-btn');
  const paperBtn = document.getElementById('paper-btn');
  const scissorsBtn = document.getElementById('scissors-btn');

  initButton(rockBtn, 'rock');
  initButton(paperBtn, 'paper');
  initButton(scissorsBtn, 'scissors');
});