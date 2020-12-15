const playerOne = {
  choice: "scissors",
}
const playerTwo = {
  choice: "rock",
  phoneNumber: 1234567
}

function someFunction (x, y) {
  console.log(x.choice);
  console.log(y.phoneNumber);
  console.log(y.choice);
}

someFunction(playerOne, playerTwo);