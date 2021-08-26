var sides = document.querySelectorAll(".side-input");
var submitButRef = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    hypotenuse = Math.sqrt(calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value)));
    outputBox.innerHTML = `The length of hypotenuse is ${hypotenuse.toFixed(2)}`;
}

submitButRef.addEventListener("click", calculateHypotenuse)
