const computerPlay = require('../scripts/utils/computerPlay.js');
const { computerChoices } =require('../scripts/data/gameData');

describe('ComputerPlay should return rock, paper, or scissors for a number of times', () => {
  for (let i = 1; i <= 5; i++) {
    test(`ComputerPlay test number: ${i}`, () => {
      // or <||> operator doesn't work in .toEqual()
      expect(['rock', 'paper', 'scissors']).toContain(computerPlay())
    });
  }
  test('computerChoices Should return rock if number is 0', () => {
    expect(computerChoices[0]).toEqual('rock');
  });
  test('computerChoices Should return paper if number is 1', () => {
    expect(computerChoices[1]).toEqual('paper');
  });
  test('computerChoices Should return scissors if number is 2', () => {
    expect(computerChoices[2]).toEqual('scissors');
  });
})