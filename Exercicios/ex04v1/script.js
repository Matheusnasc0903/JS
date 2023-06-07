function calcular(){
    let mult = Number(document.querySelector("#multiplicador").value)
    let tab = document.querySelector("#tabuada")
    let saida = document.querySelector("#saida")
    tab.innerHTML=''
    for (let i = 0; i < 10; i++) {
        let res = mult * i
        let item = document.createElement('li')
        item.innerHTML = `${mult} x ${i} = ${res}`
        item.value = `tab${i}`
        tab.appendChild(item)
        item.style.listStyle="none"
    }
    saida.style.display="flex"
}