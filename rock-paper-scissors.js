function returnsWinner (player1, player2) {
  if (player1.choice == 'rock' && player2.choice == 'scissors') {
    return 'rock'
  } else if (player1.choice == 'scissors' && player2.choice == 'rock'){
    return 'rock'
  } else if (player1.choice == 'scissors' && player2.choice == 'paper') {
    return 'scissors'
  } else if (player1.choice == 'paper' && player2.choice == 'scissors'){
    return 'scissors'
  } else if (player1.choice == 'paper' &&  player2.choice == 'rock'){
    return 'paper'
  } else if (player1.choice == 'rock' && player2.choice == 'paper') {
    return 'paper'
  } else {
    throw new Error(
      `Invalid input provided, playerOne: ${player1.choice} playerTwo: ${player2.choice}`
    );
  }   
}


module.exports = {
  returnsWinner
}
