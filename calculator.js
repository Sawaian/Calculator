
let currentNumber  = '';
let previousNumber = '';
let heldNumber = '';
let operandUsed = '';
let  a = previousNumber;
let  b = heldNumber;


const numBtn = document.querySelectorAll('.numbutton');
 numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
   currentNumber += this.textContent;
<<<<<<< HEAD
   document.getElementById('display').textContent = (currentNumber);
=======
  console.log(currentNumber);
>>>>>>> parent of 30eb6ae (It's virtually done.)
  });
});


// Operand buttons that store the operator within the variable operandUsed.

const operator = document.querySelectorAll('.operator');
 operator.forEach(function(operator){
  operator.addEventListener('click', function(){
<<<<<<< HEAD
     operandUsed = this.textContent;
     operatorClicked();
  });
});

function operatorClicked(){
  heldNumber = currentNumber;
  a = previousNumber;
  document.getElementById('display').textContent = (operandUsed);
  currentNumber = '';
}

=======
    operandUsed = this.textContent;
     a = currentNumber;
     document.getElementById('display').textContent = (operandUsed);
    currentNumber = '';
   console.log(operandUsed);
  })
});

>>>>>>> parent of 30eb6ae (It's virtually done.)
const equalSign = document.querySelector('#equals');
    equalSign.addEventListener('click', function(){
      console.log(a);
      console.log(b);
      equals();
<<<<<<< HEAD
      document.getElementById('display').textContent = (previousNumber);
    });

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', function(){
      allClear();
=======
>>>>>>> parent of 30eb6ae (It's virtually done.)
    });

// const del = document.querySelector('#delete');
//     del.addEventListener('click', function(){
//       currentNumber = currentNumber.slice(0, -1); 
//     });



function toBeNumbers(){
      b = heldNumber;
      a = parseInt(a);
      b = parseInt(b);}


function equals(){
      toBeNumbers();  
  
      if(operandUsed === '+'){
<<<<<<< HEAD
        previousNumber = operation.add(a, b);
      }
      if(operandUsed === '-'){
        previousNumber = operation.sub(a, b);
      }
      if(operandUsed === '*'){
        previousNumber = operation.multiply(a, b);
      }
      if(operandUsed === '/'){
        previousNumber = operation.divide(a, b);
=======
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
>>>>>>> parent of 30eb6ae (It's virtually done.)
      }
    }

function allClear(){
  previousNumber = '';
  currentNumber = '';
  document.getElementById('display').textContent = 0;

}

let operation = {
  add: (a, b) =>  {return a + b},
  sub: (a, b) => {return a - b},
  multiply: (a, b) => {return a * b},
  divide: (a, b) => {return a / b},
}

