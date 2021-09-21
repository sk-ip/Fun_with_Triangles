var sides = document.querySelectorAll(".side-input");
var submitButRef = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse() {
    var base = Number(sides[0].value);
    var height = Number(sides[1].value);

    if(base < 0 | height < 0) {
        outputBox.innerHTML = "Values should be positive";
    } else if (base === 0 | height === 0) {
        outputBox.innerHTML = "Values should not be zero";
    } else {
        hypotenuse = Math.sqrt(calculateSumOfSquares(base, height));
        outputBox.innerHTML = `The length of hypotenuse is ${hypotenuse.toFixed(2)}`;
    }
}

submitButRef.addEventListener("click", calculateHypotenuse)
