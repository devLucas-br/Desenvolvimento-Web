function ligar(){
    document.getElementById("imagem").src = "imagens/pic_bulbon.gif";
    document.getElementById("corpo").style.backgroundColor = "white";
    document.getElementById("criador").style.color = "black"
}

function desligar(){
    document.getElementById("imagem").src = "imagens/pic_bulboff.gif";
    document.getElementById("corpo").style.backgroundColor = "black";
    document.getElementById("criador").style.color = "white"
}