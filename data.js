

var players = {
  1: {name: "Todd Gurley", position: "RB"},
  2: {name: "David Johnson", position: "RB"},
  3: {name: "Melvin Gordon", position: "RB"},
  4: {name: "Ezekiel Elliot", position: "RB"},
  5: {name: "Saquon Barkley", position: "RB"},
  6: {name: "Antonio Brown", position: "WR"},
  7: {name: "Alvin Kamara", position: "RB"},
  8: {name: "Odell Beckham Jr.", position: "WR"},
  9: {name: "Kareem Hunt", position: "RB"},
  10: {name: "Julio Jones", position: "WR"},
  11: {name: "Michael Thomas", position: "WR"},
  12: {name: "Joe Mixon", position: "RB"},
  13: {name: "DeAndre Hopkins", position: "WR"},
  14: {name: "Dalvin Cook", position: "RB"},
  15: {name: "Leonard Fournette", position: "RB"}
}

var Add = function(name, rank, position) {
  players.name = name;
  players.rank = rank;
  players.position = position;
  for (var rank in players) {
    if (this.rank == players.rank) {
      players.rank = players.rank + 1
    }
  }
  return players;
}
