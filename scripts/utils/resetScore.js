import runningScore from '../data/runningScore.js';

const resetScore = () => {
  runningScore.round = 1;
  runningScore.player = 0;
  runningScore.computer = 0;
};

export default resetScore;
