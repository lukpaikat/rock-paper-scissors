const whoIsWeakAgainst = (playerSelection) => {
  // return who is weak against playerSelection
  const loserData = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  return loserData[playerSelection];
};

module.exports = whoIsWeakAgainst;