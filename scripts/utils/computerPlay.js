const randomGenerator = require('./randomGenerator.js');

const computerPlay = () => {
  const randomNumber = randomGenerator(0, 2);
  const computerChoices = ['rock', 'paper', 'scissors'];
  return computerChoices[randomNumber];
};

module.exports = computerPlay;