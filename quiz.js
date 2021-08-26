var quizForm = document.querySelector("#quiz-form");
var submitBtnRef = document.querySelector("#submit-btn");

var outputBox = document.querySelector("#output-box");

const correctAnswers = ["90", "right angled", "one right angle", "12, 16, 20", "Equilateral triangle", "100", "30", "a+b+c", "none", "45"];

function showOutput(score) {
    outputBox.innerHTML = `The score is ${score}`;
}

function calculateScore() {
    var score = 0;
    var index = 0;
    var formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswers[index]) {
            score = score+1;
        }
        index=index+1;
    }
    showOutput(score);
}

submitBtnRef.addEventListener("click", calculateScore);