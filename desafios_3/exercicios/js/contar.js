let num = 1

function sub() {
    num -=1
    document.getElementById("valor").innerHTML = `${num}`
}

function somar() {
    num +=1
    document.getElementById("valor").innerHTML = `${num}`
}