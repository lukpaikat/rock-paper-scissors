const computerPlay = require('../scripts/utils/computerPlay.js');

describe('ComputerPlay should return rock, paper, or scissors for a number of times', () => {
  for (let i = 1; i <= 5; i++) {
    test(`ComputerPlay test number: ${i}`, () => {
      // or <||> operator doesn't work in .toEqual()
      expect(['rock', 'paper', 'scissors']).toContain(computerPlay())
    });
  }
});