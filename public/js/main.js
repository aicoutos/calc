var a=false;
var b=false;
var mode='a';
var op;
$("#botões td").on("click",function(e){
    var str=$(this).html();
    processarEntrada(str);
});
function appendToA(str){
    limparDisplay();
    if(getA()){
        str=''+getA()+str;
        setA(str);
    }else{
        setA(str);
    }
    exibirNoDisplay(getA);
}
function appendToB(str){
    limparDisplay();
    if(getB()){
        str=''+getB()+str;
        setB(str);
    }else{
        setB(str);
    }
    exibirNoDisplay(getB);
}
function exibirErro(){
    limparDisplay();
    exibirNoDisplay('E');
}
function exibirNoDisplay(str){
    $('#display').html(str);
}
function getA(){
    return a;
}
function getB(){
    return b;
}
function getMode(){
    return mode;
}
function getOp(){
    return op;
}
function limparDisplay(){
    $('#display').html('');
}
function processarEntrada(str){
    switch(str){
        case '+':
        var op='add';
        break;
        case '-':
        var op='sub';
        break;
        case '/':
        var op='div';
        break;
        case 'x':
        var op='mul';
        break;
        default:
        var op=false;
        break;
    }
    if(op){
        setMode('b');
        setOp(op);
    }else{
        if(str=='='){
            enviarProServidor(getA(),getB(),getOp());
        }else{
            if(getMode()=='a'){
                appendToA(str);
            }else{
                appendToB(str);
            }
        }
    }
}
function enviarProServidor(a,b,op){
    setA(false);
    setB(false);
    setOp(false);
    setMode('a');
    var url='/calc?a='+a+'&b='+b+'&op='+op;
    $.getJSON( url, function( data ) {
        if(data.error==true){
            exibirErro();
        }else{
            limparDisplay();
            exibirNoDisplay(data.result);
        }
    });
}
function setA(str){
    a=str;
}
function setB(str){
    b=str;
}
function setMode(str){
    mode=str;
}
function setOp(str){
    op=str;
}
