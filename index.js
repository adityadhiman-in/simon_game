var gamePattern = [];
gamePattern.push(randomChosenColour);

var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColour = buttonColors[randomNumber];

$("#randomChosenColour").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*3);
}
