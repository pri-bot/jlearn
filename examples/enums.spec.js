const { getRpsWinner, play } = require('./enums');

describe('enums', () => {
  it('uses enums', () => {

    expect(
      getRpsWinner('rock', 'paper')
    ).toBe('paper');

    expect(
      getRpsWinner('paper', 'rock')
    ).toBe('paper');

    expect(
      getRpsWinner('paper', 'scissors')
    ).toBe('scissors');

    expect(
      getRpsWinner('scissors', 'paper')
    ).toBe('scissors');

    expect(
      getRpsWinner('scissors', 'rock')
    ).toBe('rock');

    expect(
      getRpsWinner('rock', 'scissors')
    ).toBe('rock');

  });

  it('plays', () => {


    expect(
      play({
        name: 'bryan',
        choice: 'scissors'
      },{
        name: 'jeremy',
        choice: 'paper'
      })).toBe('bryan')

    expect(
      play({
        name: 'bryan',
        choice: 'rock'
      },{
        name: 'jeremy',
        choice: 'paper'
      })).toBe('jeremy')

    expect(
      play({
        name: 'bryan',
        choice: 'rock'
      },{
        name: 'jeremy',
        choice: 'scissors'
      })).toBe('bryan')

    // expect(
    //   play({
    //     name: 'bryan',
    //     choice: 'rock'
    //   },{
    //     name: 'jeremy',
    //     choice: 'rock'
    //   })).toBe('Tie')


    // todo: tie
    // todo: error

    });
});
