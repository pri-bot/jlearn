const { returnsWinner } = require('./rock-paper-scissors')

describe('returnsWinner will always return the winning value', () => {

  it('wins as paper', () => {

    const playerOne = {
      choice: 'rock'
    };

    const playerTwo = {
      choice: 'paper'
    }

    expect(
      returnsWinner(playerOne, playerTwo)
    ).toBe('paper')

    expect(
      returnsWinner(playerTwo, playerOne)
    ).toBe('paper');

  });

  it('wins as rock', () => {

    const playerOne = {
      choice: 'rock'
    };

    const playerTwo = {
      choice: 'scissors'
    }

    expect(
      returnsWinner(playerOne, playerTwo)
    ).toBe('rock')

    expect(
      returnsWinner(playerTwo, playerOne)
    ).toBe('rock');

  });

  it('wins as scissors', () => {

    const playerOne = {
      choice: 'scissors'
    };

    const playerTwo = {
      choice: 'paper'
    }

    expect(
      returnsWinner(playerOne, playerTwo)
    ).toBe('scissors')

    expect(
      returnsWinner(playerTwo, playerOne)
    ).toBe('scissors');
    
  });

  it('returns an error', () => {

    const playerOne = {
      choice: 'elephant'
    }

    const playerTwo = {
      choice: 'lion'
    }

    expect(() => {
      returnsWinner(playerOne, playerTwo);
    }).toThrow(`Invalid input provided, playerOne: ${playerOne.choice} playerTwo: ${playerTwo.choice}`);


  });


});


