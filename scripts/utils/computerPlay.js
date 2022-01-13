const randomGenerator = require('./randomGenerator.js')

const computerPlay = () => {
  // randomly return rock, paper, or scissors
  const choices = {
    1: "rock",
    2: "paper",
    3: "scissors"
  }
  const randomNumber = randomGenerator(1, 3);
  return choices[randomNumber];
};

module.exports = computerPlay;