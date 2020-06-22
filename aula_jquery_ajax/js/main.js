function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url= "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //$ pra acessar o jquery
            //# = id // . = classe
            $("#logradouro").html(response.logradouro); // outra forma
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
        }
    })
}