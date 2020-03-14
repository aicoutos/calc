var a=false;
var b=false;
var mode='a';
var op;
$("#buttons td").on("click",function(e){
    var str=$(this).html();
    processarEntrada(str);
    playSoundFx('/audio/button-35.mp3');
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
    resetarTudo();
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
function playSoundFx(sound){
    var audio_element = document.createElement('audio');
    var audiotypes={
        "mp3": "audio/mpeg",
        "mp4": "audio/mp4",
        "ogg": "audio/ogg",
        "wav": "audio/wav"
    }
    if (audio_element.canPlayType){
        for (var i=0; i<arguments.length; i++){
            var source_element = document.createElement('source');
            source_element.setAttribute('src', arguments[i]);
            if (arguments[i].match(/\.(\w+)$/i)){
                source_element.setAttribute('type', audiotypes[RegExp.$1]);
                audio_element.appendChild(source_element);
            }
        }
        audio_element.load();
        audio_element.playclip=function(){
            audio_element.pause();
            audio_element.currentTime=0;
            audio_element.play();
        }
        return audio_element.playclip();
    }
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
        }else if($('#display').html().length==8){
            exibirErro();
        }else if(getMode()=='a'){
            appendToA(str);
        }else{
            appendToB(str);
        }
    }
}
function enviarProServidor(a,b,op){
    resetarTudo();
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
function resetarTudo(){
    setA(false);
    setB(false);
    setOp(false);
    setMode('a');
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
