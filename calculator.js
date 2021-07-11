




let currentNumber  = ' ';
let previousNumber = ' ';
let operandUsed = ' ';
let a = currentNumber;
let b = previousNumber;



const numBtn = document.querySelectorAll('.numbutton');
numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
    currentNumber += this.textContent;
   console.log(currentNumber);
  });
});

const sum = document.querySelector('#addition');
sum.addEventListener('click', function(){
operandUsed = ' +';
a = currentNumber;
currentNumber = ' ';
console.log("clicked addition");
console.log(operandUsed);
console.log(currentNumber);
console.log(a);
console.log(b);
});

const sub = document.querySelector('#subtraction');
sub.addEventListener('click', function(){
  operandUsed = ' -';
  console.log("clicked addition");
  console.log(operandUsed);
})

const equalSign = document.querySelector('#equals');
equalSign.addEventListener('click', function(){
  equals();
  console.log("clicked equals");
});


function equals(){
  if(operandUsed === ' +'){
    console.log(operation.add(a, b));
  }
  if(operandUsed === ' -'){
    console.log(operation.sub(a, b));
  }

}
let operation = {
  add: (a, b) => {return a + b},
  sub: (a, b) =>{return a - b},
}
