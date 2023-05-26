function relogio(){
    var date = new Date()
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var clock = document.getElementById('clock')
    var image = document.getElementById('image')
    var main = document.getElementById('main')
    var seconds = date.getSeconds()

    hours < 10 ? hours = `0${hours}` : hours
    minutes < 10 ? minutes = `0${minutes}` : minutes
    seconds < 10 ? seconds = `0${seconds}` : seconds
    
    clock.innerHTML = `${hours}:${minutes} <sup>${seconds}</sup>`
    if (hours >= 5 && hours < 12){
       image.src = "imagens/manha.png"
       document.body.style.backgroundColor ='rgb(255, 200, 150)'
    } else if (hours <= 18){
        image.src = "imagens/dia.png"
        document.body.style.backgroundColor ='rgb(150, 200, 255)'
        image.style.background = 'linear-gradient(180deg, rgb(100, 150, 255), rgb(255, 200, 150), rgb(100, 200, 255))'
        main.style.backgroundColor = 'rgb(100, 150, 255)'
    }else{
        image.src = "imagens/noite.png"
        document.body.style.backgroundColor ='rgb(150, 100, 255)'
        document.body.style.color = 'white'
        image.style.background = 'linear-gradient(180deg, rgb(200, 100, 255), rgb(100, 50, 150), rgb(0, 0, 0))'
        main.style.backgroundColor = 'rgb(0, 20, 80)'
    }
}
window.setInterval(relogio, 1000);