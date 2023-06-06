function contar(){
    let comeco = Number(document.querySelector("#num-inicio").value)
    let fim = Number(document.querySelector("#num-fim").value)
    let passos = Number(document.querySelector("#passos").value)
    let saida = document.querySelector("#saida")
    if (passos <= 0){
        alert("Passos Inválidos!")
    }else{
        if (comeco < fim){
            for (let i = comeco; i <= fim; i += passos){
                saida.innerHTML += `${i} `
            }
        }else{
            for (let i = comeco; i >= fim; i -= passos) {
                saida.innerHTML += `${i} `
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }
}
