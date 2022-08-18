
let arr1 = ['', '']

const inputElement1 = document.querySelector(".first-input")
const inputElement2 = document.querySelector(".second-input")
const paraP = document.querySelector(".para")
const errorP = document.querySelector(".error")
const button = document.querySelector(".btn")
const selector = document.querySelector(".sum-option")

inputElement1.addEventListener("keyup", function() {
   arr1[0] = parseFloat(inputElement1.value);
})
inputElement2.addEventListener("keyup", function() {
  arr1[1] = parseFloat(inputElement2.value);
})
button.addEventListener("click", function() {
  // const bothSum = (arr1[0] + arr1[1]);
  // paraP.innerHTML = bothSum 
  if(isNaN(arr1[0])){
    errorP.innerHTML = "First value is not a number"
    return;
  }
  if(isNaN(arr1[1])){
    errorP.innerHTML = "Second value is not a number"
    return;
  }


  switch (selector.value) {
    case "+":
      paraP.innerHTML = addition(arr1[0], arr1[1])
      break;
    case "/":
     paraP.innerHTML = division(arr1[0], arr1[1])
      break;
    case "*":
     paraP.innerHTML = multiplication(arr1[0], arr1[1])
      break;
    case "-":
     paraP.innerHTML = subtraction(arr1[0],  arr1[1])
      break;
  
    default:
      errorP.innerHTML = "Not Valid"
      break;
  }
}) 

