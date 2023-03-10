const elHighScores = document.querySelector("#highscores");
const elClear = document.querySelector("#clear");

let playerScores = 0;

// Function to render high scores and retrieve data from local/session storage

function renderScores(scores) {
  scores.forEach((element) => {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `Name: ${element.initial} - Score: ${element.score}`;
    elHighScores.appendChild(scoreItem);
  });
}

function getHighScores() {
  const sessionStorageScore = JSON.parse(sessionStorage.getItem("highScores"));
  const localStorageScore = JSON.parse(localStorage.getItem("highScores"));
  if (!sessionStorageScore && !localStorageScore) return;
  if (sessionStorageScore) {
    localStorage.setItem("highScores", JSON.stringify(sessionStorageScore));
    renderScores(sessionStorageScore);
  }
  if (localStorageScore && !sessionStorageScore) {
    renderScores(localStorageScore);
  }
}

// function to clear local and session storage

function clearScoresHandler() {
  sessionStorage.removeItem("highScores");
  localStorage.removeItem("highScores");
  elHighScores.textContent = "";
}

getHighScores();
elClear.addEventListener("click", clearScoresHandler);
