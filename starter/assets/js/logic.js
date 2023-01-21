const elStartScreen = document.querySelector("#start-screen");
const elQuestions = document.querySelector("#questions");
const elEndScreen = document.querySelector("#end-screen");
const elQuestionTitle = document.querySelector("#question-title");
const elChoices = document.querySelector("#choices");
const elTimer = document.querySelector("#time");
const elSubmitForm = document.querySelector("#submitForm");
const elFinalScore = document.querySelector("#final-score");
const elStartButton = document.querySelector("#start");

let timeCounter = 75;
let questionsIndex = 0;

function startGame() {
  function renderEndScreen() {
    stopTimer();
    elQuestions.classList.add("hide");
    elEndScreen.classList.remove("hide");
    elFinalScore.textContent = timeCounter;
  }

  function deductTime(deduction = 1) {
    if (timeCounter <= 0) return renderEndScreen();
    if (timeCounter < deduction) {
      timeCounter = timeCounter - timeCounter;
    } else {
      timeCounter = timeCounter - deduction;
    }
    elTimer.textContent = timeCounter;
  }

  function answerHandler(event) {
    if (event.target.nodeName !== "BUTTON") return;

    if (event.target.dataset.correct === "true") {
      event.target.style.backgroundColor = "green";
      setTimeout(function () {
        if (questionsIndex < questions.length - 1) {
          questionsIndex++;
          generateQuestion();
        } else {
          renderEndScreen();
        }
      }, 200);
    } else {
      event.target.style.backgroundColor = "red";
      setTimeout(function () {
        event.target.style.backgroundColor = "#563d7c";
      }, 400);
      deductTime(10);
    }
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
  }

  function stopTimer() {
    clearInterval(myInterval);
  }

  const myInterval = setInterval(function () {
    deductTime();
    if (timeCounter <= 0) {
      renderEndScreen();
      stopTimer();
      return;
    }
  }, 1000);

  elChoices.addEventListener("click", answerHandler);
  elStartScreen.classList.add("hide");
  elQuestions.classList.remove("hide");
  generateQuestion();
}

// function to save score:

function saveScore(event) {
  event.preventDefault();
  const localStorageScores = JSON.parse(localStorage.getItem("highScores"));
  const newScore = {
    initial: event.target.elements.scoreInitials.value,
    score: timeCounter,
  };

  if (!localStorageScores) {
    localStorage.setItem("highScores", JSON.stringify([newScore]));
    sessionStorage.setItem("highScores", JSON.stringify([newScore]));
    return;
  }
  let sortedScores = [...localStorageScores, newScore].sort(function (a, b) {
    return b.score - a.score;
  });
  if (sortedScores.length > 5) sortedScores.length = 5;
  sessionStorage.setItem("highScores", JSON.stringify(sortedScores));
  localStorage.setItem("highScores", JSON.stringify(sortedScores));
}

elStartButton.addEventListener("click", startGame);

elSubmitForm.addEventListener("submit", saveScore);
