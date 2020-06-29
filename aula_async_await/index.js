//OBS: NENHUM COD AQUI VAI RODAR ...


/*
//IIFE
(async function (){
    console.log('Olá mundo')
})()

//quando  gente coloca um async na frente da funcao é como se fosse o cod de baixo
//o q interpretador do javascript faz..
(function (){
    return new Promise((resolve, reject) => {
        console.log('Olá mundo')
        resolve()
    })
})()

*/
const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('End'), 5000)
})


(async function() {
    console.log('Begin')

    const text = await promise
    console.log(text)

    //ou

    promise.then(await promise)

    //ou
    
    try{
        const res = await promise
        setTimeout(() => console.log(res), 5000)
    } catch (rej){
        console.error(rej)
    }

})

//await faz parecer q execucao é sincrona...
// awaitso pode ser usado em uma funcao async

/*
console.log('Begin')
promise.then((text) => console.log(text))
//ou
promise.then(console.log)
//ou
promise.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)
*/



//outro exemplo em caso difernte
const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false))

console.log('Begin')

/*
(async function (){
    const result = await coinFlip.catch(err => err)
    new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
})()
*/

(async function (){
    const result = await coinFlip.catch(err => err)
    new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(() => console.log('Yay'))
})()

/*
///exemplo em caso com api
const axios = require('axios')

class MinhaClasse {
    async meuMetodo (){
        const result = await axios.get('/').then(response => response.data)
        return result
    }
}
*/

//exemplo/ solucao para uma promise hell
//eemplo base é aquele da aula sobre promisses com o s aqruvos s1,s2,s3 e s4

console.log('Begin')

(async function (){
    try {

        const sentence1 = await readFileAsync(path.resolve(basePath, 's1.txt'), { encoding : 'utf-8' })
        console.log(sentence1, '\n')

        const sentence2 = await readFileAsync(path.resolve(basePath, 's2.txt'), { encoding : 'utf-8' })
        console.log(sentence2, '\n')

        const sentence3 = await readFileAsync(path.resolve(basePath, 's3.txt'), { encoding : 'utf-8' })
        console.log(sentence3, '\n')

        const sentence4 = await readFileAsync(path.resolve(basePath, 's4.txt'), { encoding : 'utf-8' })
        console.log(sentence4, '\n')
    } catch (err) {
        console.error(err)
    }

    console.log('End')

})()


//funcao assincrona sempre volta uma promisse...