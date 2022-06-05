var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScoreBtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || []

var MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// username.addEventListener("keyup", () => {
//     saveScoreBtn.disabled = !username.value;
// });

function saveHighScore (event) {
    event.preventDefault();
console.log("clicked");
    var score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
};
saveScoreBtn.addEventListener("click", saveHighScore)