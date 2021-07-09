let num1 = parseInt("2");
let num2 = parseInt("2");
let result = "0";

//numPad variables
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");

// operands
const sumButton = document.querySelector("#addition");



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
    subtraction: " -",
  }
