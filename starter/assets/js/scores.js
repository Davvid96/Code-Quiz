let elHighScores = document.querySelector("#highscores");
let elClear = document.querySelector("#clear");

// create variable for the score results..

var playerScores = 0;

// when site loads, take out saved scores in local storage.
//

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

function clearButton() {
    sessionStorage.removeItem("highScores");
    localStorage.removeItem("highScores");
  elHighScores.textContent = "";
}

getHighScores();
elClear.addEventListener("click", clearButton);

// Generate elements which show the result (using loop) to add new scores.
//create element - add class + text content

// insert onto the site - using unordered list ...
