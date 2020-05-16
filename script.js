// Timer: When you click start it takes you to the first question set and begins the timer
var secondsLeft = 60;
var questions = $(".question");
var quizComplete = $("#quizComplete");
var correctAnswerButton = $(".answer-btn-correct");
var incorrectAnswerButton = $(".answer-btn-wrong");
var correctAnswerButton2 = $(".answer-btn-correct2");
var incorrectAnswerButton2 = $(".answer-btn-wrong2");
var correctAnswerButton3 = $(".answer-btn-correct3");
var incorrectAnswerButton3 = $(".answer-btn-wrong3");
var correctAnswerButton4 = $(".answer-btn-correct4");
var incorrectAnswerButton4 = $(".answer-btn-wrong4");
var correctAnswerButton5 = $(".answer-btn-correct5");
var incorrectAnswerButton5 = $(".answer-btn-wrong5");
var anyAnswerButton = $(".answer-btn");
var correctAnswerDisplay = $(".correct-display");
var incorrectAnswerDisplay = $(".incorrect-display");
var answer = "";
var userAnswers = localStorage.getItem("answer");
var userInitials = localStorage.getItem("initials");
var myHighScore = localStorage.getItem("userScore");
var userScore = 0;
var question1 = $("#question1");
var question2 = $("#question2");
var question3 = $("#question3");
var question4 = $("#question4");
var question5 = $("#question5");

$(".start-quiz-button").on("click", function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    $("#timer").text("Time Left: " + secondsLeft);

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endTimer();
    };
  $("#start-page").addClass("hide");
  }, 1000);
})

// if timer reaches 0, then display that time is up
function endTimer() {
  $("#timer").text("Time's Up");
  if (secondsLeft === 0) {
  }
}

$(".start-quiz-button").on("click", function(){
  question1.removeClass("hide");
  $("#start-page").addClass("hide");

  correctAnswerButton.on("click", function(event) {
    answer = $(this).attr("value");
    if(answer === "correct"){
      userScore = userScore +1;
      alert("That is correct!");
    };
    localStorage.setItem("answer", answer)
    question2.removeClass("hide");
    question1.addClass("hide");
  });
  // if the user clicks on the correct answer, then display that the answer is correct and then moves onto the next question
  
  // if the user clicks on an incorrect answer, then display that the answer is incorrect, remove 10 seconds from the time, and display the next button
  incorrectAnswerButton.on("click", function(event) {
    answer = $(this).attr("value");
    alert("That is incorrect!");
    localStorage.setItem("answer", answer)
    secondsLeft = secondsLeft - 10
    question2.removeClass("hide");
    question1.addClass("hide");
  }) 
  
})

$(".answer-btn2").on("click", function(){
  correctAnswerButton2.on("click", function(event) {
    answer = $(this).attr("value");
    if(answer === "correct"){
      userScore = userScore +1;
      alert("That is correct!");
    };
    localStorage.setItem("answer", answer);
    question3.removeClass("hide");
    question2.addClass("hide");
  });
  // if the user clicks on the correct answer, then display that the answer is correct and then moves onto the next question
  
  // if the user clicks on an incorrect answer, then display that the answer is incorrect, remove 10 seconds from the time, and display the next button
  incorrectAnswerButton2.on("click", function(event) {
    answer = $(this).attr("value")
    alert("That is incorrect!");
    localStorage.setItem("answer", answer);
    secondsLeft = secondsLeft - 10
    question3.removeClass("hide");
    question2.addClass("hide");
  }) 
})

$(".answer-btn3").on("click", function(){
  correctAnswerButton3.on("click", function(event) {
    answer = $(this).attr("value");
    if(answer === "correct"){
      userScore = userScore +1;
      alert("That is correct!");
    };
    localStorage.setItem("answer", answer);
    question4.removeClass("hide");
    question3.addClass("hide");
  });
  // if the user clicks on the correct answer, then display that the answer is correct and then moves onto the next question
  
  // if the user clicks on an incorrect answer, then display that the answer is incorrect, remove 10 seconds from the time, and display the next button
  incorrectAnswerButton3.on("click", function(event) {
    answer = $(this).attr("value")
    alert("That is incorrect!");
    localStorage.setItem("answer", answer);
    secondsLeft = secondsLeft - 10
    question4.removeClass("hide");
    question3.addClass("hide");
  }) 
})

$(".answer-btn4").on("click", function(){
  correctAnswerButton4.on("click", function(event) {
    answer = $(this).attr("value");
    if(answer === "correct"){
      userScore = userScore +1;
      alert("That is correct!");
    };
    localStorage.setItem("answer", answer);
    question5.removeClass("hide");
    question4.addClass("hide");
  });
  // if the user clicks on the correct answer, then display that the answer is correct and then moves onto the next question
  
  // if the user clicks on an incorrect answer, then display that the answer is incorrect, remove 10 seconds from the time, and display the next button
  incorrectAnswerButton4.on("click", function(event) {
    answer = $(this).attr("value")
    alert("That is incorrect!");
    localStorage.setItem("answer", answer);
    secondsLeft = secondsLeft - 10
    question5.removeClass("hide");
    question4.addClass("hide");
  }) 
})

$(".answer-btn5").on("click", function(){
  correctAnswerButton5.on("click", function(event) {
    answer = $(this).attr("value");
    if(answer === "correct"){
      userScore = userScore +1;
      alert("That is correct!");
    };
    localStorage.setItem("answer", answer);
    $("#submit-answers").removeClass("hide");
  });
  // if the user clicks on the correct answer, then display that the answer is correct and then moves onto the next question
  
  // if the user clicks on an incorrect answer, then display that the answer is incorrect, remove 10 seconds from the time, and display the next button
  incorrectAnswerButton5.on("click", function(event) {
    answer = $(this).attr("value")
    alert("That is incorrect!");
    localStorage.setItem("answer", answer);
    secondsLeft = secondsLeft - 10
    $("#submit-answers").removeClass("hide");
  }) 
})

$("#submit-answers").on("click", function(){
  questions.hide()
  quizComplete.removeClass("hide");
})

function displayScore(){
  $("#show-score").after(userScore);
  localStorage.setItem("userScore", userScore)
}

console.log(userScore)
displayScore()



