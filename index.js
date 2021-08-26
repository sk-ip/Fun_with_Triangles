var angle1 = document.querySelector("#angle-1");
var angle2 = document.querySelector("#angle-2");
var angle3 = document.querySelector("#angle-3");
var outputBoxRef = document.querySelector("#output-box");
var btnRef = document.querySelector("#submit-btn");

function calculateSumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}

function isTriangle(angle1, angle2, angle3) {
  return calculateSumOfAngles(angle1, angle2, angle3) === 180;
}

function showOutput(message) {
  outputBoxRef.innerHTML = message;
}

function clickHandler() {
  a1 = Number(angle1.value)
  a2 = Number(angle2.value)
  a3 = Number(angle3.value)

  if(a1 !== 0 & a2 !== 0 & a3 !== 0) {
    if(isTriangle(a1, a2, a3)) {
      showOutput("Yay, the angles form a triangle!");
    } else {
      showOutput("Oh Oh! The angle doesn't form a triangle");
    }
  } else {
    showOutput("Input all the values");
  }
}

btnRef.addEventListener("click", clickHandler);

