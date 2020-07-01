//callbacks

function doSomething(callback){
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherthins(callback){
    setTimeout(function() {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');
            try {
                doOtherthins(function(data2){
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(function(){
                            console.log(processedData, processedData2)
                        }, 1000);
                    } catch (error) {
                        //handle error
                    }
                })
            } catch (error) {
                //handle error                
            }
        })
    }catch (error) {
        //handle error
    }
}

doAll();

//Promises

const doSomethingPromise = new Promise((resolve, reject)=>{
    setTimeout(function() {
        resolve('First data');
    }, 1000);
});

const doOtherthingPromise = new Promise((resolve, reject)=>{
    setTimeout(function() {
        resolve('Second data');
    }, 1000);
});


//uma promisse tem 3 estados 
//pending (quando esta pendente/em execucao)
//fulfilled (quando acabou execucao)
//rejected (quando foi rejeitada/aconteceu algum erro)

doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

//tem mais sobre promise no desafio pratico