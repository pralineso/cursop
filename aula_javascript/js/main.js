//Funçoes

function botao(){
    document.getElementById("mensagem").innerHTML = "<i>Bem Vind@ !</i>";
    //alert("Bem Vind@ !!!");
}

function redirecionar(){
    window.open("https://google.com/"); // chama nova janela
    //window.location.href = "https://github.com/"; // abre na msm janela
}

function trocar(elemento){
   // document.getElementById("mouseover").innerHTML = "Texto modificao ao passar o mouse";
    elemento.innerHTML = "Texto modificao ao passar o mouse";
    //alert("Passou o mouse");
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada!")
}

function change(elemento){
    console.log(elemento.value);
}

function soma (n1, n2){
    return n1+n2;
}

function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

   // var idade = prompt("Qual sua idade?");
    //console.log(validaIdade(idade));

    //alert(soma(5, 10));
    //alert(setReplace("Amo café", "café", "chocolate"));

/**
//variaveis
    var nome = "Mariana";
    var idade = 25;
    var idade2 = 25;
    var frase = "A Mare esta Alta";

    //alert
    //alert("Bem Vind@! "+nome);
    //alert(idade + idade2);

    console.log(nome);
    console.log(idade+idade2); // +, -, *, /
    console.log(frase.replace("Alta", "Baixa"));
    console.log(frase.toUpperCase());
    console.log(frase.toLocaleLowerCase());

//Array 
    var lista = ["maça", "pera", "laranja"];

    //lista.push("uva");
    console.log(lista);
    console.log(lista.length);
    console.log(lista.reverse());

    console.log(lista[0]);
    console.log(lista.toString()[0]);
    console.log(lista.join(" - "));
    //console.log(lista[1]);

    //lista.pop();
    //console.log(lista);

//Dicionario
    var fruta = {nome: "maça", cor:"vermelha"};
    console.log(fruta);
    console.log(fruta.nome);
    console.log(fruta.cor);

    var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor:"roxa"}];
    console.log(frutas);
    console.log(frutas[1].nome);
    console.log(frutas[1].cor);

//Condições

     idade =  prompt("Qual sua idade?");
    if(idade >= 18){
        alert("Maior de idade");
    }else {
        alert("Menor de idade");
    }


 //Laços de repetiçao
    var count = 0;
    while (count <= 5){
        console.log(count);
        count++; 
    };


    for(count = 0; count <=5; count++){
        alert(count);
    };


//Datas
    var data = new Date();
    alert(data);
    console.log(data.getDay());
    console.log(data.getHours());
    console.log(data.getMinutes());
    console.log(data.getMonth()+1);//começa em 0

*/