const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");
const scores = document.getElementById("scores");

// Save score to Local Storage
function saveScore() {
  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  if (!name || !score) {
    alert("Please enter both name and score!");
    return;
  }

  // Get existing scores or empty array
  let allScores = JSON.parse(localStorage.getItem("scores")) || [];

  // Add new score
  allScores.push({ name, score });

  // Save back to localStorage
  localStorage.setItem("scores", JSON.stringify(allScores));

  // Clear inputs
  nameInput.value = "";
  scoreInput.value = "";

  showScores();
}

// Show scores in div
function showScores() {
  let allScores = JSON.parse(localStorage.getItem("scores")) || [];

  // If no scores
  if (allScores.length === 0) {
    scores.innerHTML = "<p>No scores yet</p>";
    return;
  }

  // Build table
  let table = `
    <table border="1" cellpadding="5">
      <tr>
        <th>Name</th>
        <th>Score</th>
      </tr>
  `;

  allScores.forEach((entry) => {
    table += `
      <tr>
        <td>${entry.name}</td>
        <td>${entry.score}</td>
      </tr>
    `;
  });

  table += "</table>";
  scores.innerHTML = table;
}

// Show scores when page loads
window.onload = showScores;
