function calcular(){
    let mult = Number(document.querySelector("#multiplicador").value)
    let tab = document.querySelector("#tabuada")
    let saida = document.querySelector("#saida")
    tab.innerHTML=''
    for (let i = 0; i < 10; i++) {
        let res = mult * i
        let item = document.createElement('option')
        item.text = `${mult} x ${i} = ${res}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }
    saida.style.display="flex"
}