import { Memory } from './memory';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

var game = new Memory();
$(document).ready(function() {


  $("#difficulty").submit(function(event) {
    event.preventDefault();
    var gameDifficulty = $('#input').val();
    game.setDifficulty(gameDifficulty);
    $("#output").html(game.render());
    $(".card-body").hide();
  });

  $("ul").on("click", ".card-title", function(e){
    e.stopPropagation();
    $(this).next().slideDown();
    var checkbox = $(this).siblings('input');
    checkbox.prop('checked', !checkbox.prop('checked'));
    var checked = [];
    $("input[type='checkbox']:checked").each(function(){
      checked.push($(this).val());
    });

    if ((checked.length === 2) && (checked[0] == checked[1])){
      $("." + checked[0]).remove();
    }
    else if ((checked.length === 2) && (checked[0] != checked[1])) {
      var card1 = $("." + checked[0]).find("p").slideUp();
      var card2 = $("." + checked[1]).find("p").slideUp();
      var checkbox1 = $(card1).siblings('input');
      var checkbox2 = $(card2).siblings('input');

      checkbox1.prop('checked', !checkbox.prop('checked'));
      checkbox2.prop('checked', !checkbox.prop('checked'));
    }
    else if (checked.length === 0) {
      $(this).next().slideUp();
    }
    else if (checked.length > 2) {
      $(this).next().slideUp();
    }

  });



});
