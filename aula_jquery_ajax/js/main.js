function consultaCep(){
    
    $(".cep").hide();
    $(".barra-progesso").show();

    var cep = document.getElementById("cep").value;
    var url= "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //$ pra acessar o jquery
            //# = id // . = classe
            
            $("#titulo_cep").html("CEP: "+cep);
            $("#logradouro").html(response.logradouro); // outra forma
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);

            $(".cep").show();
            $(".barra-progesso").hide();
        
        },
        error: function(response){

            $("#erro-cep").html("CEP nao encontrado!");
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progesso").hide();
});

//uma vantagem ajax é q tras os dados sem recarregar a pagina
