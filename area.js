var sides = document.querySelectorAll(".side-input");
var submitButRef = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

function calculateSemiPerimeter(a, b, c) {
    return (a+b+c)/2;
}

function calculateArea(s, a, b, c) {
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}

function clickHandler() {
    var a = Number(sides[0].value);
    var b = Number(sides[1].value);
    var c = Number(sides[2].value);

    if(a<0 | b<0 | c<0) {
        outputBox.innerHTML = "Values should be positive";
    } else if(a===0 | b===0 | c===0) {
        outputBox.innerHTML = "Values should be greater than zero";
    } else if(a + b <= c || b + c <=a || a + c <= b) {
        outputBox.innerHTML = 'Make sure a + b > c';
    } else {
        var s = calculateSemiPerimeter(a, b, c);
        var area = calculateArea(s, a, b, c);
        outputBox.innerHTML = `Area of a triangle using heron's formula is ${area.toFixed(2)} units²`;
    }
}

submitButRef.addEventListener("click", clickHandler);