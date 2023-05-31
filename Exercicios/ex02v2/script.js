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

            }else if(idade < 19){

            }else if(idade < 31){

            }else if(idade < 61){

            }else{

            }
        }else{
            genero = 'Mulher'
        }
    }
}