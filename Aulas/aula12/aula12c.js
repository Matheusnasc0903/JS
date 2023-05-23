var agora = new Date()
var diasem = agora.getDay()
var dia = 0
switch (diasem) {
    case 0:
        dia = 'Domingo'
        break;
    case 1:
        dia = 'Segunda'
        break;
    case 2:
        dia = 'Terça'
        break;
    case 3:
        dia = 'Quarta'
        break;
    case 4: 
        dia = 'Quinta'
        break;
    case 5:
        dia = 'Sexta'
        break;
    default:
        dia = 'Sábado'
        break;
}
console.log(`Hoje é ${dia}`)