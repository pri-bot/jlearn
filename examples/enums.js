const CHOICES = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
}

const permutations = {
  'paper,rock': 'paper',
  'paper,scissors': 'scissors',
  'rock,scissors': 'rock'
}

function createChoicePairing(c1, c2) {
  return [c1, c2]
    .sort()
    .toString();
}

function getRpsWinner(choice1, choice2) {
  return permutations[
    createChoicePairing(choice1, choice2)
  ]
}

function play(player1, player2) {
  const possibleChoices = Object.values(CHOICES);
  if (possibleChoices.includes(player1.choice) == -1 || possibleChoices.includes(player2.choice) == -1) {
    return invalidGame(choice1, choice2)
  } else if (player1.choice == player2.choice) {
    return tieGame(player1, player2);
  } else {
    const winningPlayer = player1.choice == getRpsWinner(player1.choice, player2.choice) ? player1 : player2;
    return winningPlayer.name;
  }
}

module.exports = {
  getRpsWinner,
  play
}