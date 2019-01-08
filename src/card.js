export function Card(value) {

  this.value = value;


}

Card.prototype.render = function () {
  var output = '<li class="' + this.value + '"><div class="card"><h4 class="card-title">Click me!</h4><p class="card-body">Card Number: ' + this.value + '</p><input class="form-check-input" type="checkbox" value="' + this.value + '"></div></div></li>';
  return output;
};
