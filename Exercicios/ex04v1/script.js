function calcular(){
    let mult = Number(document.querySelector("#multiplicador").value)
    let li = document.querySelector("#resultado")
    let saida = document.querySelector("#saida")
    let t_res = document.querySelector("#t-res")
    t_res.innerHTML = `Tabuada do ${mult}`
    for (let i = 0; i < 10; i++) {
        let res = mult * i
        li.innerHTML += `${res} </br>`
    }
    saida.style.display="block"
}