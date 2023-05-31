function verificar(){
    var data = new Date(), ano = data.getFullYear()
    var form_ano = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#resultado')
    if (form_ano.value.length ==0 || form_ano.value > ano){
        window.alert('Verifique os dados inseridos!')
    }else{
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var form_sex = document.getElementsByName('radsex')
        var idade = ano - Number(form_ano.value)
        var genero = ''
        if (form_sex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 13){
                img.setAttribute('src', '1b.png')
            }else if(idade < 19){
                img.setAttribute('src', '2b.png')
            }else if(idade < 31){
                img.setAttribute('src', '3b.png')
            }else if(idade < 61){
                img.setAttribute('src', '4b.png')
            }else{
                img.setAttribute('src', '5b.png')
            }
        }else{
            genero = 'Mulher'
            if (idade >=0 && idade < 13){
                img.setAttribute('src', '1a.png')
            }else if(idade < 19){
                img.setAttribute('src', '2a.png')
            }else if(idade < 31){
                img.setAttribute('src', '3a.png')
            }else if(idade < 61){
                img.setAttribute('src', '4a.png')
            }else{
                img.setAttribute('src', '5a.png')
            }
        }
        resultado.appendChild(img)
        resultado.innerHTML = `${genero} com ${idade} anos.`
    }
}