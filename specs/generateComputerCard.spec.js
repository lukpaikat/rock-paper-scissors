const generateComputerCard = require('../scripts/utils/generateComputerCard');

describe('generateComputerCard should return rock, paper, or scissors for a number of times', () => {
  for (let i = 1; i <= 5; i += 1) {
    test(`generateComputerCard test number: ${i}`, () => {
      // or <||> operator doesn't work in .toEqual()
      expect(['rock', 'paper', 'scissors']).toContain(generateComputerCard());
    });
  }
});
