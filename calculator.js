let num1 = parseInt("0");
let num2 = parseInt("0");
let result = "0";

//numPad variables
const numpPad = document.querySelector("#numPad")
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");

// operands
const sumButton = document.querySelector("#addition");

// when button is pressed, it is logged to num1. When the + is hit, it is moved to num 2. 
// Objective, when + is hit, change button inputs to num2. 
//

//numPad buttons. 
oneButton.addEventListener('click', ()=>{
  num1 += "1";
  console.log(num1);
});


twoButton.addEventListener('click', ()=>{
  num1 += "2";
});


    sumButton.addEventListener('click', ()=>{
      console.log(operation.add);
    });


  const operation = {
    add: num1 + num2,
    subtraction: num1 - num2,
    multiply: num1 * num2,
    division: num1 / num2,
  }
  
