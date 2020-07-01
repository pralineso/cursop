function sumOld (a,b){
    return a + b;
}
console.log(sumOld(5,5));

var sumOld2 = function(a,b){
    return a + b;
}
console.log(sumOld2(5,15));

function Car() {
    this.foo = 'bar';
}
console.log(new Car());

//Arrow functions (=>)

var sum = (a, b) => a + b;
console.log(sum(10,15));

//caso existir apenas 1 argumento, pode ocultar os parenteses
var sum = a => a + 12;

//retornar objetos literais

var createObj = () => ({ teste: 123 });
console.log(createObj());

//
var Car = () => {
    this.foo = 'bar';
}
console.log(new Car());

//aquela parada de hositing nao funfa com arrow fuction
