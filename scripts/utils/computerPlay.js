const randomGenerator = require('./randomGenerator.js');
const { computerChoices } = require('../data/gameData.js');

const computerPlay = () => {
  const randomNumber = randomGenerator(0, 2);
  return computerChoices[randomNumber];
};

module.exports = computerPlay;