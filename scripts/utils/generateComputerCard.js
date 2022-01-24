import randomGenerator from './randomGenerator.js';

const generateComputerCard = () => {
  const randomNumber = randomGenerator(0, 2);
  const computerChoices = ['rock', 'paper', 'scissors'];
  return computerChoices[randomNumber];
};

export default generateComputerCard;
