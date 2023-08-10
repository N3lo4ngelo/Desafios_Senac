function verificar(){
    const verifyAge = (i) => i>=18? "De Maior":"De Menor"
    // const divResultado = document.getElementById("resultado")

    document.getElementById("resultado").innerHTML = verifyAge(idade)

    
}