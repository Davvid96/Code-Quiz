// let startGame = document.querySelector("#start");
// let getHighScoresButton = document.querySelector(".scores");
// let timerDiv = document.querySelector(".timer");
// let choicesButton = document.querySelector("#choices");
// let endScreen = document.querySelector("#end-screen");
// let submitButton = document.querySelector("#submit");
// let feedback = document.querySelector("#feedback");
// let highScores = document.querySelector("#highscores");
// let clearHighScoresButton = document.querySelector("#clear");

let startTime = 3;

let elStartScreen = document.querySelector("#start-screen");
let elQuestions = document.querySelector("#questions");
let elEndScreen = document.querySelector("#end-screen");
let elQuestionTitle = document.querySelector("#question-title");
let elChoices = document.querySelector("#choices");

let elStartButton = document.querySelector("#start");

let questionsIndex = 0;



// counter for time count down (75 secs)

// link for highscore

// div to display question

// 4 buttons with question Answers (1 possible answer - randomized)

// Div to display correct/wrong answer



// function to start timer.

function timer() {

  if (startTime > 0) {
    startTime--;
    // timerDiv.innerHTML = startTime;
    console.log(startTime);
    return;
  }
  myStopFunction();
}

function myStopFunction() {
    clearInterval(myInterval);
}

const myInterval = setInterval(timer, 1000);

// function to start quiz

function startGame() {
  // alert("alert box!!");
// hide start screen
elStartScreen.classList.add("hide");
elQuestions.classList.remove("hide");
generateQuestion();



}

// Function to generate question:

function generateQuestion() {
  elQuestionTitle.textContent = questions[questionsIndex].question;
  const ButtonElement = document.createElement("button");
  ButtonElement.textContent = questions[questionsIndex].answers[0].text;
  console.log(ButtonElement);
}



elStartButton.addEventListener("click", startGame);




// array to hold answers? - number of right answers?

// logic to save answers / highscore in local storage

//


