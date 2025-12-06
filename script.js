// complete the JS code
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  // complete the code here
	localStorage.setItem("Score", scores);
  showScores();
}

// Show scores in div
function showScores() {
  // complete the code
	localStorage.getItem("Score");
}
