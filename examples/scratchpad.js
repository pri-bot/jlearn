function validChoices([p1, p2]) {
  const p1IsValid = isValid(p1);
  const p2IsValid = isValid(p2);
  if (p1IsValid && p2IsValid) {
    return [p1, p2]
  } else if (!p1IsValid && !p2IsValid) {
    throw new Error(`Both players entered invalid choice: ${p1.name}:${p1.choice} & ${p2.name}:${p2.choice} `)
  } else if (!p1IsValid) {
    throw new Error(`Player entered invalid choice: ${p1.name}:${p1.choice}`)
  } else {
    throw new Error(`Player entered invalid choice: ${p2.name}:${p2.choice}`)
  }
}

function isValid(player) {
  console.log(player);
  const possibleChoices = Object.values(CHOICES);
  return possibleChoices.includes(player.choice);
}

const pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

function createPlayerObjects(p1, p2) {
  return {
    [p1.name]: p1.choice,
    [p2.name]: p2.choice
  }
}