import { Card } from './card';

export function Memory() {
  this.difficulty = 1;
}

Memory.prototype.message = function() {
  return "Hello!";
};

Memory.prototype.setDifficulty = function (diff) {
  this.difficulty = diff;
};

Memory.prototype.render = function() {
  var cardNumbers = [];
  for (var i = 0; i < this.difficulty; i++) {
    cardNumbers.push(Math.random(this.difficulty));
  }

  var cardNumbers2 = cardNumbers;
  var output = "";

  while (cardNumbers.length > 0){
    output += new Card(cardNumbers.pop()).render();
  }

  while (cardNumbers2.length > 0) {
    output += new Card(cardNumbers.pop()).render();
  }

  return output;
};
