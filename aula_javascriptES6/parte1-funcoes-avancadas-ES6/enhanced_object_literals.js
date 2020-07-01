//maneira classica

var prop1 = 'asdjasodjaskdald'

var obj = {
    prop1: 'sadijasoidjasoidja'
} //ou

var obj = {
    prop1: prop1
}

console.log(obj);

//atualmente..  n rpecisa repetir se tem msm nome
//funfa pra metodos tbm

var obj = {
    prop1
}


//outras simplicacoes
var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};
//ou
var obj = {
    sum(a, b) {
        return a + b;
    }
};

console.log(obj)

//
