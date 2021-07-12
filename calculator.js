
let currentNumber  = '';
let previousNumber = ' ';
let operandUsed = '';
let a = currentNumber;
let b = previousNumber;

const numBtn = document.querySelectorAll('.numbutton');
 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
   currentNumber += this.textContent;
   document.getElementById('display').textContent = (currentNumber);
  console.log(currentNumber);
  });
});


// Operand buttons that store the operator within the variable operandUsed.

const operator = document.querySelectorAll('.operator');
 operator.forEach(function(operator){
  operator.addEventListener('click', function(){
    operandUsed = this.textContent;
     operatorClicked();
    console.log(operandUsed);
  });
});

function operatorClicked(){
  a = currentNumber;
  document.getElementById('display').textContent = (operandUsed);
  currentNumber = '';
}

const equalSign = document.querySelector('#equals');
    equalSign.addEventListener('click', function(){
      b = currentNumber;
      toBeNumbers();
      equals();
      document.getElementById('display').textContent = (currentNumber);
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
        currentNumber = operation.add(a, b);
      }
      if(operandUsed === '-'){
        currentNumber = operation.sub(a, b);
      }
      if(operandUsed === '*'){
        currentNumber = operation.multiply(a, b);
      }
      if(operandUsed === '/'){
        currentNumber = operation.divide(a, b);
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

