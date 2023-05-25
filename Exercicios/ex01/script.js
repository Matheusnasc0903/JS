function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 5 && hora < 12){
        img.src = "../Imagens/manha.png"
    }
    else if(hora >= 12 && hora <= 18){
        img.src = "../Imagens/tarde.png"
    }
    else{
        img.src = "../Imagens/noite.png"
    }
}
