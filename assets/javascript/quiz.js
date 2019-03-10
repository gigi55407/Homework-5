
$(document).ready(function(){

// Sets the user's score to zero

var userScore = 0;

// Sets the selected radio button value to zero

var selValue1 = 0;
var selValue2 = 0;
var selValue3 = 0;
var selValue4 = 0;
var selValue5 = 0;

// Sets the score from each question to zero

var rbnNumber1 = 0;
var rbnNumber2 = 0;
var rbnNumber3 = 0;
var rbnNumber4 = 0;
var rbnNumber5 = 0;

var stopwatch = 0;
var intervalId;
var clockRunning = false;


    $("#startQuiz").click(function(){
        if (!clockRunning) {
            clockRunning = true;
          }
    });




    $("#submitAnswers").click(function(){ 

        selValue1 = parseInt($('input[name=rbnNumber1]:checked').val());  
        selValue2 = parseInt($('input[name=rbnNumber2]:checked').val());
        selValue3 = parseInt($('input[name=rbnNumber3]:checked').val());
        selValue4 = parseInt($('input[name=rbnNumber4]:checked').val());
        selValue5 = parseInt($('input[name=rbnNumber5]:checked').val());
        userScore = selValue1 + selValue2 + selValue3 + selValue4 + selValue5;
        console.log(userScore);
        $("#userScore").html('<br/>You got ' + userScore + " out of 5 right!")
    });




});









