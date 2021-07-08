let arithmetric = 0;
let a = parseInt(2);
let b = parseInt(2);

const oneButton = document.querySelector("#one");
oneButton.addEventListener('click', ()=>{
    a = parseInt(1);
    console.log("1");
});

const additionButton = document.querySelector("#addition");
additionButton.addEventListener('click', ()=>{
    console.log(addition());
})

let addition = function(){
    return a + b;
}



console.log(addition());