


function calcular(){

    let numero = document.getElementById("numero").value

for(let i = 0; i<=10; i++){
    let resultado = 0
    let p = document.createElement('p')
    resultado = i * numero

    p.innerHTML = `${numero} x ${i} = ${resultado}`

    document.getElementById("result").appendChild(p)
 
}
}