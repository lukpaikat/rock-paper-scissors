// TODO: update score to game data
const scoreUpdater = (scoreElm, score) => {
  const prevScore = parseInt(scoreElm.textContent);
  scoreElm.textContent = prevScore + score;
};

module.exports = scoreUpdater;