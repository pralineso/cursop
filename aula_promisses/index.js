
const fs = require('fs')
const path = require('path')
const { resolve } = require('path')
const { rejects } = require('assert')
const basePath = './assets'
const { promisify } = require('util')
const { EPROTONOSUPPORT } = require('constants')
const readFileAsync = promisify(fs.readFile)

//cada bloco de comentario é um exemplo diferente

//FORMA SINCRONA
/*
console.log('Begin')

//fs.readFile(path.resolve(basePath, 'invictus.txt')).toString()

const files = fs.readdirSync(path.resolve(basePath))
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

for (const sentence of sentences){
    const text = fs.readFileSync(path.resolve(basePath, sentence)).toString()
    console.log(text)
}

console.log('End')
*/

//FORMA ASSINCRONA




//nesse caso aki o end aparece ate antes do texto
//console.log('Begin')

/*
fs.readFile(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8'}, (err, data) => {
    if(err) throw err
    console.log(data)
})*/


//console.log('End')

/// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//mesmo codigo que o de cima, separado por uma funcao de callback

//fs.readFile(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8'}, cb)

/*
function cb (err, data) { 
    if(err) throw err
        console.log(data)
}

//nesse caso aki o end aparece ate antes do texto
console.log('Begin')


const files = fs.readdirSync(path.resolve(basePath))
const sentences = files.filter((file) => /s[1-4].txt/gi.test(file))

for (const file of sentences){
    fs.readFile(path.resolve(basePath, file), { encoding: 'utf-8'}, cb)
}


console.log('End')
*/
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//agora de um jeito mais organizado....
//os paragrafos dos textos serao exibisdos na ordem correta

/*
function cb (err, data, index, max) { 
    if(err) throw err
        console.log(data)
        return start(index + 1, max)
}

console.log('Begin')

start(1, 4)


//funçao pra chamar ordenado, msm q a execuçao seja em paralelo
//poruqe no cod de cima ele excuta e exibe na ordem q termina a leitura do arquivo (é esse o problema)
function start (index, max){ 
    if (index > max) return console.log('End')    
    fs.readFile(
        path.resolve(basePath, `s${index}.txt`),
        {encoding: 'utf-8'},
        (err, data) => cb(err, data, index, max)
    )
}

*/
//>>> PROMISES <<<

//uma promisse representa uma valor que vai ser resolvido
//resolve = é a promisse resolvida, valor final aceito
//reject = é a promisse rejeitada, se der algum erro ele vai parar a promisse

/*
const promise = new Promise((resolve, reject) => {
    //    setTimeout(() => resolve('End'), 2000)
    setTimeout(() => reject('End'), 2000)

})

console.log('Begin')

//then é pro resolve
///catch é pro reject

//promise.then((data) => console.log(data))
//promise.then(console.log)
//promise.then((data) => console.log(data)).catch((err) => console.log('oops', err))

//promise.then((res) => {}, (rej) => {})
//promise.then((res) => {})
//promise.catch((rej) => {})
*/

/*
function readFileAsync (path, options){
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if(err) return reject(err)
            return resolve(data)
        })
    })
}*/

//then tem prioridade de execucao uns com os outros
/*
console.log('Begin')
readFileAsync(path.resolve(basePath, 'invictus.txt'), { encoding: 'utf-8'})
    .then(console.log)
    .then(() => console.log('xpto'))
    .catch(console.log)
console.log('End')
*/
//a ordem de colocar o then e o catch muda o resultado 

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//funcao q tem 50% de dar certo ou errado (exemplo)
//const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve('Yay') : reject('Oops'))

/*
coinFlip
    .then((data) => console.log(data, '1'))
    .then(() => console.log('End1'))
    .catch((err) => console.log('Erro 1'))
*/

/*
coinFlip
    .then((data) => console.log(data, '1'))
    .catch((err) => console.log('Erro 1'))
    .then(() => console.log('End1'))
*/

/*
coinFlip
    .then((data) => console.log(data, '1'))
    .catch((err) => console.log('Erro 1'))
    .then(() => { throw new Error('Erro 2')})
    .catch((err) => console.log(err.message))
*/

/*
coinFlip.then((data) => console.log('Yay 2'))
coinFlip.catch((err) => console.error('Next then will not execute'))
coinFlip.then(() => console.log('End 2'))
*/

/*
console.log('Begin')

coinFlip.then((data) => console.log(data))
.catch((err) => { throw err})
.then(() => console.log('End1'))


new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
*/


//o catch nao para execuccao do cod, nesse exmplo sem catch mostra q quebra o cod
/*
function start () {
    throw new Error('An error')
}

console.log('Begin')
start()
console.log('End')
*/

/*
coinFlip
.then((data) => console.log('Yay 1'))
.then(() => console.log('Result'))
.then(() => console.log('End1'))

coinFlip
.catch(() => {throw new Error('Frist catch')})
.catch((err) => console.error('Error in first case, next then will not execute'))
*/

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
console.log('Begin')

readFileAsync(path.resolve(basePath, 'invictus.txt'), {encoding: 'utf-8'})
.then(console.log)
.catch(console.error)
.finally(() => console.log('End'))
*/

//
// forma mais facil de fazer o trecho la de cima com callback
/*
console.log('Begin')

function read (index){
    return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8'})
}


function start (index, max) {
    if (index > max) return
    read(index).then((data) => {
        console.log(data, '\n')
        start(index + 1, max)
    })
}

start(1, 4)
*/

//>>>>>>>>>>
/*
function read (index){
    return readFileAsync(path.resolve(basePath, `s${index}.txt`), { encoding: 'utf-8'})
}

console.log('Begin')

const promiseArray = []
for (let i=1; i<=4; i++) promiseArray[i - 1] = read(i)

//promisse all vai retornar um array com a respostas de tds as promises

Promise.all(promiseArray).then((arr) => console.log(arr.join('\n')))
*/

const coinFlip = (n) => new Promise((resolve, reject) => n > 0 ? resolve(true) : reject(false)) // voltaa tudo true so pra exemplo
//const coinFlip = (n) => new Promise((resolve, reject) => n > 0.5 ? resolve(true) : reject(false))

console.log('Begin')
const promiseArray = []
for (let i=0; i<=4; i++) promiseArray[i] = coinFlip(Math.random())

Promise.all(promiseArray).then(console.log)
