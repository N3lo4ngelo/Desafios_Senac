function numeroPar(){

for(let i = 0; i <= 1000; i++){
    let p = document.createElement('p')

    if(i % 2 == 0){
        p.innerHTML = `${i}`
    }else{
        continue
    }

    document.getElementById('resultado').appendChild(p)
}

}