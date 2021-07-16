
 let currentNumber  = '';
 let a = '';
 let b = '';
 let operandUsed = '';



const numBtn = document.querySelectorAll('.numbutton');
 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
   currentNumber += this.textContent;
   b = currentNumber;
   document.getElementById('display').textContent = (currentNumber);
  });
});

// Operand buttons that store the operator within the variable operandUsed.

const operator = document.querySelectorAll('.operator');
 operator.forEach(function(operator){
  operator.addEventListener('click', function(){
     operandUsed = this.textContent;
     operatorClicked();
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
      numberThem();
      equals();
      document.getElementById('display').textContent = (a);
    });

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', function(){
      allClear();
    });

  function numberThem(){
    a = parseInt(a);
    b = parseInt(b);
  }

// const del = document.querySelector('#delete');
//     del.addEventListener('click', function(){
//       currentNumber = currentNumber.slice(0, -1); 
//     });


function equals(){
      if(operandUsed === '+'){
        a = operation.add(a, b);
      }
      if(operandUsed === '-'){
        a = operation.sub(a, b);
      }
      if(operandUsed === '*'){
       a = operation.multiply(a, b);
      }
      if(operandUsed === '/'){
       a = operation.divide(a, b);
      }
    }

function allClear(){
  a = '';
  currentNumber = '';
  document.getElementById('display').textContent = 0;

}

let operation = {
  add: (a, b) =>  {return a + b},
  sub: (a, b) => {return a - b},
  multiply: (a, b) => {return a * b},
  divide: (a, b) => {return a / b},
}

