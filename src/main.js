import { Memory } from './memory';
import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var game = new Memory();
$(document).ready(function() {

  $("#difficulty").submit(function(event) {
    console.log("testing");
    event.preventDefault();
    var gameDifficulty = $('#input').val();
    game.setDifficulty(gameDifficulty);
    $("#output").html(game.render());
  });



});
