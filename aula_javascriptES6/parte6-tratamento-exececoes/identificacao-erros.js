console.log(name);

const name = 'Mariana';

console.log('keep going..');
//da erro pq n se pode acessar variavel antes da inicializacao...
//tanto que estoura o resto da exxecucao do cod
//entao podemos usar bloco try catch para q isso nao aconteca

try {
    console.log(name);
    const name = 'Mariana';
} catch (error) {
    console.log('Error:', error);
}//finally {
    console.log('keep going..');
//}

//ou exemplo... nesse caso gerando um erro como classe

try {
    const name = 'Mariana';
    const myError = new Error('Custom message');
    throw myError;
} catch (error) {
    console.log('Error:', error);
} finally {
    console.log('keep going..');
}

///outro exemplo.. com classe

class CustomError extends Error {
    constructor({message, data}){
        super(message);
        this.data = data;
    }
}


try {
    const name = 'Mariana';
    const myError = new CustomError( {
        message: 'Custom message on custom error',
        data: {
            type: 'Server error'
        }
    });

    throw myError;
} catch (error) {
    console.log('Error:', error);
    console.log(error.data);
    // if (err.data.type === 'Server error){

    //} else {  } ...
} finally {
    console.log('keep going..');
}

////>>>>>>>>>>>>>>>>
//palavra debugger meio q para o execucao do cod la na hr do f12

///existe o console.log
///console.warn
//e console.error

//console.trace //traz info de onde foi executado

//existe tbm grupo
//console.group..
//console.log ..
//console.grouEnd ..

//console.time
//console.table
//console.assert

//nossa senhora mil tipos de console...
//da pra personalizar/estilizar o console.log