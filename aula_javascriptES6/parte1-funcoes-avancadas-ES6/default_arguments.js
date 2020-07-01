// lazy evaluation
function randomNumber() {
    return Math.random() * 10;
}

/*
function multiply (a, b = a){
    return a * b;
}*/

function multiply (a, b = randomNumber()){
    return a * b;
}

console.log(multiply(5))



