// Timer: When you click start it takes you to the first question set and begins the timer
let secondsLeft = 60;

$(".start-quiz-button").on("click", function setTime() {
  const timerInterval = setInterval(function() {
    secondsLeft--;
    $("#timer").text("Time Left: " + secondsLeft);

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endTimer();
    }}, 1000);

  $("#start-page").addClass("hide");

  // display question one
  $("#question1").removeClass("hide");
  });

  var userScore = 0;
  console.log(userScore)

// When the user clicks on an answer choice, the quiz will add a message of whether the answer is correct
// If the answer is wrong, then the 10 secionds is subtracted from the timer. 
$(".answer-btn").on("click", function answerSelection() {
  // depending on the answer the user selects...
  answer = $(this).attr("value"); 
  // ...display that the answer is correct
  if (answer === "correct") {
    userScore = userScore + 1; 
    var correctDisplay = $("<p>"); 
    correctDisplay.text("That's Correct!")
    $(".answer-display1").append(correctDisplay)
  }
  // ...display that the answer is incorrect and remove 10 seconds from the timer
  else {
    secondsLeft = secondsLeft - 10
    var incorrectDisplay = $("<p>"); 
    incorrectDisplay.text("That's Incorrect!")
    $(".answer-display1").append(incorrectDisplay)
  }
  // setting an timer to automatically move to the next question 2 seconds after the answer is clicked
  setTimeout(function () {
    $("#question1").addClass("hide");
    $("#question2").removeClass("hide");
    $(".answer-display1").addClass("hide");
  }, 2000)
})

// doing the same thing for question 2
$(".answer-btn2").on("click", function answerSelection() {
  // depending on the answer the user selects...
  answer = $(this).attr("value"); 
  // ...display that the answer is correct
  if (answer === "correct") {
    userScore = userScore + 1; 
    var correctDisplay = $("<p>"); 
    correctDisplay.text("That's Correct!")
    $(".answer-display2").append(correctDisplay)
  }
  // ...display that the answer is incorrect and remove 10 seconds from the timer
  else {
    secondsLeft = secondsLeft - 10
    var incorrectDisplay = $("<p>"); 
    incorrectDisplay.text("That's Incorrect!")
    $(".answer-display2").append(incorrectDisplay)
  }
  // setting an timer to automatically move to the next question 2 seconds after the answer is clicked
  setTimeout(function () {
    $("#question2").addClass("hide");
    $("#question3").removeClass("hide");
    $(".answer-display2").addClass("hide");
  }, 2000)
})

// doing the same thing for question 3
$(".answer-btn3").on("click", function answerSelection() {
  // depending on the answer the user selects...
  answer = $(this).attr("value"); 
  // ...display that the answer is correct
  if (answer === "correct") {
    userScore = userScore + 1; 
    var correctDisplay = $("<p>"); 
    correctDisplay.text("That's Correct!")
    $(".answer-display3").append(correctDisplay)
  }
  // ...display that the answer is incorrect and remove 10 seconds from the timer
  else {
    secondsLeft = secondsLeft - 10
    var incorrectDisplay = $("<p>"); 
    incorrectDisplay.text("That's Incorrect!")
    $(".answer-display3").append(incorrectDisplay)
  }
  // setting an timer to automatically move to the next question 2 seconds after the answer is clicked
  setTimeout(function () {
    $("#question3").addClass("hide");
    $("#question4").removeClass("hide");
    $(".answer-display3").addClass("hide");
  }, 2000)
})

// doing the same thing for question 4
$(".answer-btn4").on("click", function answerSelection() {
  // depending on the answer the user selects...
  answer = $(this).attr("value"); 
  // ...display that the answer is correct
  if (answer === "correct") {
    userScore = userScore + 1; 
    var correctDisplay = $("<p>"); 
    correctDisplay.text("That's Correct!")
    $(".answer-display4").append(correctDisplay)
  }
  // ...display that the answer is incorrect and remove 10 seconds from the timer
  else {
    secondsLeft = secondsLeft - 10
    var incorrectDisplay = $("<p>"); 
    incorrectDisplay.text("That's Incorrect!")
    $(".answer-display4").append(incorrectDisplay)
  }
  // setting an timer to automatically move to the next question 2 seconds after the answer is clicked
  setTimeout(function () {
    $("#question4").addClass("hide");
    $("#question5").removeClass("hide");
    $(".answer-display4").addClass("hide");
  }, 2000)
})

// doing the same thing for question 5
$(".answer-btn5").on("click", function answerSelection() {
  // depending on the answer the user selects...
  answer = $(this).attr("value"); 
  // ...display that the answer is correct
  if (answer === "correct") {
    userScore = userScore + 1; 
    var correctDisplay = $("<p>"); 
    correctDisplay.text("That's Correct!")
    $(".answer-display5").append(correctDisplay)
  }
  // ...display that the answer is incorrect and remove 10 seconds from the timer
  else {
    secondsLeft = secondsLeft - 10
    var incorrectDisplay = $("<p>"); 
    incorrectDisplay.text("That's Incorrect!")
    $(".answer-display5").append(incorrectDisplay)
  }
  // setting an timer to automatically move to the next question 2 seconds after the answer is clicked
  setTimeout(function () {
    $("#question5").addClass("hide");
    $("#quizComplete").removeClass("hide");
    $(".answer-display5").addClass("hide");
  }, 2000)
})

$(".submit-answers-button").on("click", function (){
  // display the user score 
  // submit the user's score into local storage
  // show a page that displays the user's high scores
})


// if timer reaches 0, then display that time is up
function endTimer() {
  $("#timer").text("Time's Up");
  if (secondsLeft === 0) {
  }
}

// console.log(userScore)
// displayScore()



