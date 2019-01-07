import { Card } from './card';
// import { shuffle } from 'shuffle-array'

Array.prototype.shuffle = function() {
  var input = this;

  for (var i = input.length-1; i >=0; i--) {

    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = input[randomIndex];

    input[randomIndex] = input[i];
    input[i] = itemAtIndex;
  }
  return input;
}

export function Memory() {
  this.difficulty = 10;
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
    cardNumbers.push(Math.floor(Math.random() * Math.floor(100)));
  }

  var cardNumbers2 = cardNumbers.map(x => x * 1);
  var output = "";
  
  cardNumbers.shuffle();
  cardNumbers2.shuffle();


  while (cardNumbers.length > 0){
    output += new Card(cardNumbers.pop()).render();
    output += new Card(cardNumbers2.pop()).render();
  }

  return output;
};
