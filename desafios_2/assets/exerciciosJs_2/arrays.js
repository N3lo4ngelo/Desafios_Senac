function criarNovoArray(array1, array2) {
  const newArray = [...array1, ...array2];
  return newArray;
}

console.log(criarNovoArray([10,9,8,], [7,6,5]))

