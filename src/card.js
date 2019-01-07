export function Card(value) {

  this.value = value;


}

Card.prototype.render = function () {
  var output = '<li><div class="card"><div id="' + this.value + '" class="card-body">Card Number: ' + this.value + '</div></div></li>';
  return output;
};
