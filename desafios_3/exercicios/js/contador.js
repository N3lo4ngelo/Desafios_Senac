function calcular(){

    let numero = document.getElementById("numero").value

for(let i = 0; i<=1000; i++){
    let resultado = 0
    let p = document.createElement('p')
    resultado = i 

    p.innerHTML = `${resultado}`

    document.getElementById("result").appendChild(p)
 
}
}