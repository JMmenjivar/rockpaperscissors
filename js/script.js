
// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userchoice ;
var computerchoice;
var winner;

// DOCUMENT READY FUNCTION BELOW



$("button").click(function() {
    userchoice = $("input").val();
    $("#userChoice").text(userchoice);
    var randonNumber = Math.random();
    if(randonNumber > .666){
        computerchoice = 'rock';
    }
    else if (randomNumber < .666 && randonNumber > .333){
        computerchoice = 'paper';
    }
     else{
         computerchoice = 'scissors';
     }   
    }
    
});
