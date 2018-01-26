'use strict';

const stake = 10;

var p1 = {
  name: 'p1',
  rating: 1000,
  matches: 0
}

var p2 = {
  name: 'p2',
  rating: 1000,
  matches: 0
}

var p3 = {
  name: 'p3',
  rating: 1000,
  matches: 0
}

function match(winner, loser) {
  console.log();
  var winnerOldRating = winner.rating;
  var loserOldRating = loser.rating;

  var winnerGain = Math.round(
    (1 - probabilityOfWinning(winner, loser)) * boost(winner) * stake);
  var loserLoss = Math.round(
    probabilityOfWinning(loser, winner) * boost(loser) * stake);

  winner.rating += Math.round(winnerGain);
  loser.rating -= Math.round(loserLoss);

  console.log(winner.name, winnerOldRating, '+', winnerGain, '=', winner.rating);
  console.log(loser.name, loserOldRating, '-', loserLoss, '=', loser.rating);

  winner.matches++;
  loser.matches++;
}

function probabilityOfWinning(p1, p2) {
  var ratingDiff = p1.rating - p2.rating;
  var probability = 1 / (1 + Math.pow(10, -ratingDiff/500));
  console.log('probability', p1.name, 'win over', p2.name, '=', probability);
  return probability;
}

function boost(p) {
  if (p.matches < 5) {
    return 2;
  } else {
    return 1;
  }
}


match(p1, p2);
match(p2, p1);
match(p1, p2);
match(p2, p1);
match(p1, p2);

match(p1, p3);

match(p1, p2);
match(p2, p1);
match(p1, p2);
match(p2, p1);
match(p1, p2);