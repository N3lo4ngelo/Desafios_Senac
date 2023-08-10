function verificarAnoBissexto(ano) {
  if (ano % 4 === 0) {
    if (ano % 100 === 0) {
      return ano % 400 === 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}
console.log(verificarAnoBissexto(1992))
