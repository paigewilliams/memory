import { Memory } from './memory';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  var game = new Memory();
  $("#test").append(game.message());

  var gameDifficulty = $('#difficulty').val();
  game.setDifficulty(gameDifficulty);

  $("#output").append(game.render());

});
