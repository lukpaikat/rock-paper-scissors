const randomGenerator = require('./randomGenerator.js');

const generateComputerCard = () => {
  const randomNumber = randomGenerator(0, 2);
  const computerChoices = ['rock', 'paper', 'scissors'];
  return computerChoices[randomNumber];
};

module.exports = generateComputerCard;