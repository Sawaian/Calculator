




let previousNumber = ' ';
let operandUsed = ' ';
let a = 2;
let b = 2;


const numBtn = document.querySelectorAll('.numbutton');
numBtn.forEach(function(numBtn){
  numBtn.addEventListener('click', function(){
   let numInput = document.getElementsByClassName('numButton').textContent;
   console.log(numInput);
  });
});

const sum = document.querySelector('#addition');
sum.addEventListener('click', function(){
operandUsed = ' +';
console.log("clicked addition");
console.log(operandUsed);
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

// function addition(){
//   return a + b;
// }
