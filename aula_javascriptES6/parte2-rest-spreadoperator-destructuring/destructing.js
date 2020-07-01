
//exemplo antes do Destructuring Assigenment
var arr = ['Apple', 'Banana', 'Orange'];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Destructuring Assignment
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];

console.log(apple, apple2);

//--------------------------------------------
//outra situação (uma pouco mais complexa)
/*
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var totamto = arr[3][0];


var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 'Banana', 'Orange', ['Tomato']];

console.log(tomato2);
*/

//pode ser usado para destruir objetos tbm

//sem destructuring
var obj = {
    name: 'Maria',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

//var name = obj.name;


//com destructuring

//forma similar para def a variavel
var {name} = obj;

//atribuindo novo 
var {name: name2} = obj;
console.log(name2);

//outro exemplo
//destructuring de multiniveis
var {
    props: {
        age: age2,
        favoriteColors: [color1, color2] 
    }
} = obj;
console.log(color1);


