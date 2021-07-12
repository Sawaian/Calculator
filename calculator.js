
let currentNumber  = '';
let previousNumber = ' ';
let operandUsed = '';
let a = currentNumber;
let b = previousNumber;

const numBtn = document.querySelectorAll('.numbutton');
 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
   currentNumber += this.textContent;
  console.log(currentNumber);
  });
});


// Operand buttons that store the operator within the variable operandUsed.

const operator = document.querySelectorAll('.operator');
 operator.forEach(function(operator){
  operator.addEventListener('click', function(){
    operandUsed = this.textContent;
     a = currentNumber;
     document.getElementById('display').textContent = (operandUsed);
    currentNumber = '';
   console.log(operandUsed);
  })
});

const equalSign = document.querySelector('#equals');
    equalSign.addEventListener('click', function(){
      b = currentNumber;
      toBeNumbers();
      equals();
    });

// const aClear = document.querySelector('#clear');
// aClear.addEventListeneer('click', function(){
//     allClear(a, b);
// });


function toBeNumbers(){
      a = parseInt(a);
      b = parseInt(b);}


function equals(){
      if(operandUsed === '+'){
        console.log(operation.add(a, b));
      }
      if(operandUsed === '-'){
        console.log(operation.sub(a, b));
      }
      if(operandUsed === '*'){
        console.log(operation.multiply(a, b));
      }
      if(operandUsed === '/'){
        console.log(operation.divide(a, b));
      }
    }

function allClear(){
  a = '';
  b = '';
}
let operation = {
  add: (a, b) =>  {return a + b},
  sub: (a, b) => {return a - b},
  multiply: (a, b) => {return a * b},
  divide: (a, b) => {return a / b},
}

