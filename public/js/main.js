var input;
var reset=true;
var modo='numero';//ou simbolo
$("#botões td").on("click",function(e){
    var str=$(this).html();
    processarEntrada(str);
});

function adicionarAoFinalDisplay(str){
    //pega o valor atual do display
    //calcula o valor da string
    //se a string for menor ou igual a 7 adiciona
    //se a string form igual a 8 existe erro
}

function exibirErro(){
    limparDisplay();
    adicionarAoFinalDisplay('E');
}

function limparDisplay(){

}

function processarEntrada(str){
    if(str=='='){
        enviarProServidor(input);
    }else{
        switch(str){
            case '+';
            case '-';
            case '/';
            case 'x';
            var tipo='simbolo';
            break;
            default:
            var tipo='numero';
            break;
        }
        if(input){
            var tipo='numero';
            input=input+str;
        }else{

            input=str;
        }
    }
}

function enviarProServidor(str){
    alert('enviar pro servidor:\n'+str);
}
