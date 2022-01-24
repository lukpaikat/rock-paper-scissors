const runningScore = require('../data/runningScore');

const resetScore = () => {
  runningScore.round = 1;
  runningScore.player = 0;
  runningScore.computer = 0;
};

module.exports = resetScore;