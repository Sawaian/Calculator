
 let currentNumber  = '';
 let num1 = '';
 let num2 = '';
 let operandUsed = '0';
 let previousOperand = '' 
 let equal = '';

 const numBtn = document.querySelectorAll('.numbutton');
 const operator = document.querySelectorAll('.operator');
 const clear = document.querySelector('#clear');


// 1. Object which holds all of the operands. 
// 2. Operand is checked agaisnt key:pair 
// 3. A value is returned back to Operation.


let operation = {
  add: (a, b) =>  {return a + b},
  sub: (a, b) => {return a - b},
  multiply: (a, b) => {return a * b},
  divide: (a, b) => {return a / b},
  }



// 1. Reads the button input and spits out a number.
// 2. Checks if the operand is empty. If operand is empty, populate a.
// 3. If operand is not empmty, populate be. This displays the input. 

 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
    currentNumber += this.textContent;
    numInput();
  });
});

function numInput(){
  if (operandUsed === '0'){
    num1 = currentNumber
   }
   else{
     num2 = currentNumber;
   }
  document.getElementById('display').textContent = (currentNumber);
}


// 1, Operand buttons that store the operator within the variable operandUsed.
 operator.forEach(function(operator){
  operator.addEventListener('click', function(){
     operandUsed = this.textContent;
     operatorClicked();
  });
});

// 1. Displays the operand chosen and changes currentNumber to select B.
        function operatorClicked(){
          document.getElementById('display').textContent = (operandUsed);
          
          if(operandUsed === previousOperand && num2 !== ''){
            operate();
           operandUsed ==='0';
          }
          
          else
           { currentNumber = '';
             previousOperand = operandUsed;
          }
          }

//   1. Read the equal sign input. 

          const equalSign = document.querySelector('#equals');
              equalSign.addEventListener('click', function(){
                equal = '=';
                if(operandUsed === '/' && num1 === '0' || num2 === '0'){
                  document.getElementById('display').textContent = 'Error';
                  num1 = '';
                  num2 = '';
                }else{
                  calculation();
                  previousOperand = operandUsed
              }});


//   1. Checks if either the operand is empty or if b is empty. If yes to either, we give B a's value and calculate. 
//   2. Second if checks if operand, a, and b are currently not empty. Then it executes the equation with the data 
// assigned to the variables. Otherwise, if none of the above are true, we clear.

        function calculation(){
          if(operandUsed === '' || num2 === ''){
            num2 = num1;
            operate();
            
          }
          if(operandUsed !=='' && num1 !== '' && num2 !== ''){
           operate();
          }
          else{
            allClear();
          }
        }

function operate(){
      equals();
      result();
}

  
function result(){
  document.getElementById('display').textContent = (num1);
  currentNumber = '';
 
}



  function numberThem(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
  }


function equals(){
       numberThem();
      if(operandUsed === '+'){
        num1 = operation.add(num1, num2);
      }
      if(operandUsed === '-'){
        num1 = operation.sub(num1, num2);
      }
      if(operandUsed === '*'){
       num1 = operation.multiply(num1, num2);
      }
      if(operandUsed === '/'){
       num1 = operation.divide(num1, num2);
      }
    }


function allClear(){
  num1 = '';
  num2 = '';
  currentNumber = '';
  operandUsed = '0';
  previousOperand ='';
  document.getElementById('display').textContent = 0;

}



clear.addEventListener('click', function(){
  allClear();
});

