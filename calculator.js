
 let currentNumber  = '';
 let a = '';
 let b = '';
 let operandUsed = '0';



const numBtn = document.querySelectorAll('.numbutton');
 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
    currentNumber += this.textContent;
    if (operandUsed === '0'){
     a = currentNumber
    }
    else{
      b += currentNumber;
    }
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
  document.getElementById('display').textContent = (operandUsed);
  currentNumber = '';
}

          const equalSign = document.querySelector('#equals');
              equalSign.addEventListener('click', function(){
              equals();
            document.getElementById('display').textContent = (a);
              b = '0';
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
       numberThem();
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
  operandUsed = '0';
  document.getElementById('display').textContent = 0;

}


const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
  allClear();
});


let operation = {
  add: (a, b) =>  {return a + b},
  sub: (a, b) => {return a - b},
  multiply: (a, b) => {return a * b},
  divide: (a, b) => {return a / b},
}

