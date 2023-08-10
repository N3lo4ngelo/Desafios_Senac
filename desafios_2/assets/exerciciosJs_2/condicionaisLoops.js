let resultado = document.getElementById('showResultado')
let r = document.getElementById('resultado')

resultado.addEventListener('click', (e) => {
  let num = document.getElementById('num').value
  let p = document.createElement("p")

  if (num % 3 === 0 && num % 5 === 0){
    p.innerHTML = `FizzBuzz`
    r.appendChild(p)
  }else if(num % 3 === 0){
    p.innerHTML = `Fizz`
    r.appendChild(p)
  }else if(num % 5 === 0){
    p.innerHTML = `Buzz`
    r.appendChild(p)
  }else{
    console.log("Teste")
  }

})



