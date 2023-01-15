let startGame = document.querySelector("#start");
let getHighScoresButton = document.querySelector(".scores");
let timerDiv = document.querySelector(".timer");
let choicesButton = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen");
let submitButton = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");
let highScores = document.querySelector("#highscores");
let clearHighScoresButton = document.querySelector("#clear");

let startTime = 3;


// counter for time count down (75 secs)

// link for highscore

// div to display question

// 4 buttons with question Answers (1 possible answer - randomized)

// Div to display correct/wrong answer

// function to start quiz

// function startGame() {}

// function to start timer.



function timer() {

  if (startTime > 0) {
    startTime--;
    timerDiv.innerHTML = startTime;
    console.log(startTime);
    return;
  }
  myStopFunction();
}

function myStopFunction() {
    clearInterval(myInterval);
}

const myInterval = setInterval(timer, 1000);






// array to hold answers? - number of right answers?

// logic to save answers / highscore in local storage

//
