const playRound = require('../scripts/utils/playRound');

describe('Playing a game round', () => {
  test('Should return Draw if player\'s choice equal to computer\'s', () => {
    expect(playRound('rock', 'rock')).toEqual('Draw!');
  });
  test('Should declare the player as the winner if the player won', () => {
    expect(playRound('scissors', 'paper')).toEqual('You win! scissors beats paper');
    expect(playRound('paper', 'rock')).toEqual('You win! paper beats rock');
    expect(playRound('rock', 'scissors')).toEqual('You win! rock beats scissors');
  });
  test('Should declare the player as the loser of the computer won', () => {
    expect(playRound('scissors', 'rock')).toEqual('You lose! rock beats scissors');
    expect(playRound('rock', 'paper')).toEqual('You lose! paper beats rock');
    expect(playRound('paper', 'scissors')).toEqual('You lose! scissors beats paper');
  })
});