var startTime = 75;

let elStartScreen = document.querySelector("#start-screen");
let elQuestions = document.querySelector("#questions");
let elEndScreen = document.querySelector("#end-screen");
let elQuestionTitle = document.querySelector("#question-title");
let elChoices = document.querySelector("#choices");
let elTimer = document.querySelector("#time");

let elStartButton = document.querySelector("#start");

let questionsIndex = 0;

function startGame() {
  function endScreen() {
    myStopFunction();
    elQuestions.classList.add("hide");
    elEndScreen.classList.remove("hide");
  }

  function timerDeduct(deduction = 1) {
    if (startTime > 0) {
      if (startTime < deduction) {
        startTime = startTime - startTime;
      } else {
        startTime = startTime - deduction;
      }
      elTimer.textContent = startTime;
      return;
    }
    endScreen();
  }

  function generateQuestion() {
    elQuestionTitle.textContent = questions[questionsIndex].question;
    elChoices.innerHTML = "";
    questions[questionsIndex].answers.forEach(function (answer) {
      const buttonElement = document.createElement("button");
      buttonElement.setAttribute("data-correct", answer.correct);
      buttonElement.textContent = answer.text;
      elChoices.appendChild(buttonElement);
    });

    function answerHandler(event) {
      if (event.target.nodeName !== "BUTTON") return;

      if (event.target.dataset.correct === "true") {
        event.target.style.backgroundColor = "green";
        setTimeout(function () {
          if (questionsIndex < questions.length - 1) {
            questionsIndex++;
            generateQuestion();
          } else {
            endScreen();
          }
        }, 200);
      } else {
        event.target.style.backgroundColor = "red";
        setTimeout(function () {
          event.target.style.backgroundColor = "#563d7c";
        }, 400);
        timerDeduct(10);
      }
    }
    elChoices.addEventListener("click", answerHandler);
  }

  function timer() {
    timerDeduct();
    if (startTime <= 0) {
      endScreen();
      myStopFunction();
      return;
    }
    console.log(startTime);
  }

  function myStopFunction() {
    clearInterval(myInterval);
  }

  const myInterval = setInterval(timer, 1000);

  elStartScreen.classList.add("hide");
  elQuestions.classList.remove("hide");
  generateQuestion();
}

elStartButton.addEventListener("click", startGame);

// Create function to save score and then update highscores page
