//exemplo sem rest operator
function sum (a,b) {
    var value = 0;
    
    for (var i=0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}
console.log(sum(5, 5, 5, 3, 2));

//rest operator ... (significa esse tres pontos ai)

function sum (...args) {
    //console.log(args);
    //console.log(arguments);

    return args.reduce((acc, value) => acc + value, 0);

}
console.log(sum(5, 5, 5, 3, 2));


//agora um exemplo com arrow functions

const sum = (a, b, ...rest) => {
    console.log(a, b, rest)
};
console.log(sum(5, 5, 5, 3, 2));

//outro exemplo como era antes do ES6
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum = (...rest) => {
    return multiply.apply(undefined, rest)
};
console.log(sum(5, 5, 5, 3, 2));

//agora exemplo superior com spread operator
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)
const sum = (...rest) => {
    return multiply(...rest)
};
console.log(sum(5, 5, 5, 3, 2));

//outro exemplo de spread operator
//se aplica em string, arrays, object e objetos iteraveis
//spread operator que os itens e passa pra algum lugar

const str = 'Ola mundo';
const arr = [1, 2, 3, 4];

function logArgs(...args) {
    console.log(args);
}
//ou
function logArgs() {
    console.log(arguments);
}
//ou
function logArgs(a ,b, c) {
    console.log(a, b, c);
}

//logArgs(...str);
logArgs(...arr);

//tambem pode usar spread operator para combinar 2 arrays
const arr2 = [...arr, 5, 6, 7];

//exemplo do spread com objetoc literais
//tbm muito usado para fazer clones de um obj
//mas tem q tomar cuidado co objetos com mais de um nivel 

const obj = {
    test: 123
};
const obj2 ={
    ...obj,
    test2: "hello"
}
console.log(obj2);