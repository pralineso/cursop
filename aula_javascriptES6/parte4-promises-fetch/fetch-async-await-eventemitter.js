//eexemplo chamadoa para localhost e como funciona com promise
fetch('/data.json').then(responseStream => {
   // console.log(responseStream);
    //para obter os dados do json
    return responseStream.json().then(data =>{
        console.log(data);
    });
})

//ou 

fetch('localhost:8081/sadjasiod.json')
.then(responseStream => responseStream.json())
.then(data =>{
    console.log(data);
}).catch(err => {
    //somente se tiver um erro de rede cai aki
    //pq o fetch so da erro na promise se der um erro de rede
    console.log('Erro:', err)
});
//agora o exemplo de cima "arrumado em caso de erro do nome"
fetch('/data.json')
.then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
    })
.then(data =>{
    console.log(data);
}).catch(err => {
    //somente se tiver um erro de rede cai aki
    //pq o fetch so da erro na promise se der um erro de rede
    console.log('Erro:', err)
});


//o fetch por default faz um get, mas se quiser pode mudar o method para post
fetch('/data.json', { 
    method: 'post'
})
.then(responseStream => {
    if(responseStream.status === 200){
        return responseStream.json();
    } else {
        throw new Error('Request error');
    }
    })
.then(data =>{
    console.log(data);
}).catch(err => {
    console.log('Erro:', err)
});


// ES7 - Async / Await

const simpleFunc = async () => {
    return 12345;
};

//ou 

const simpleFunc = async function(){
    throw new Error('Oh no!');
    return 12345;
};


simpleFunc().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//emxemplo async e await

const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        return(12312)
    }, 1000);
})

const simpleFunc = async function(){
    const data = await asyncTimer();
    const dataJSON = await fetch('data.json').then(responseStream => responseStream.json())
    return dataJSON;
};

simpleFunc()
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

//em poucas palavras o async e await... lidam com coisas assincronas de maneira sequencial (sincrona)

//EventEmitter
//é algo exclusivo do node


const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
});

//ao emitir o elemento o emitter o consome
emitter.emit('User logger', { user: 'Maria Ana' })

//outro exemplo

class Users extends EventEmitter {
    userLogged(data) {
        this.emit('User logged', data);
    }
}

const users = new Users();

users.on('User logged', data => {
    console.log(data)
});

/** consome so 1 vez
 * users.once('User logged', data => {
    console.log(data)
});
 */ 

users.userLogged( {user : 'Mari'} );
users.userLogged( {user : 'Ana'} );











