let arithmetric = 0;
let a = parseInt(2);
let b = parseInt(2);
let calculation = [0, ];

const oneButton = document.querySelector("#one");
oneButton.addEventListener('click', ()=>{
    a = parseInt(1);
    calculation.push("1");
    console.log("1");
    console.log(calculation)
});

const additionButton = document.querySelector("#addition");
additionButton.addEventListener('click', ()=>{
    console.log(addition());
})

let addition = function(){
    return parseInt(calculation) + b;
}



console.log(addition());


