//Symbols
//sao uma maneira de gerar um identificador unicos

const uniqueId = new Symbol();
// ou 
const uniqueId = Symbol();

console.log(uniqueId)

const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
//symbol é um identificador unico e so isso 
console.log(uniqueId === uniqueId2)

//pode ser utiliza para gerar propriedades privaadas

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);


// Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];

//const iterador = arr[Symbol.iterator]();

for (let value of arr) {
    console.log(value);
}
/*
while (true) {
    let {value, done} = iterador.next()
    
    if(done) {
        break;
    }

    console.log(value);
}*/
//console.log(iterador.next());
//console.log(iterador.next());
//...

//exemplo objetos iteraveis


//replica
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;

        return () => {
            next: () => {
                i++;

                return{
                    value: this.value[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
const it = obj[Symbol.iterator]()

console.log(it.next())
console.log(it.next());
console.log(it.next());

//spread 

const arr2 = [...obj];

//iteradores sao uma interface...

//Generetors
//sao funcoes com pausa que usam interfaces

function hello(){
    console.log('Hello');
    console.log('Ola');
    console.log('Hola');
}

hello();

//em um caso de ter uma pausa em cada console.log da funcao de cima....
//com generators 
function* hello(){
    console.log('Hello');
    yield;// yield 1;
    console.log('from');
    yield;// yield 2;
    console.log('function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

//outro exemplo...

function* hello(){
    console.log('Hello');
     yield 1;
    console.log('from');
     const value = yield 2;
    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

//mesmo exemplo la de cima, mais simples..
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator](){
        for (var i =0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};
 for (let values of obj) {
     console.log(value);
 }

 //generator pode ser utilizado como uma forma de construir iteradores...
 