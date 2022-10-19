'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];
  let i = 0
  let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23]
  
  while(num>1){
    let mod = num%primos[i]
    if(mod === 0){
      factores.push(primos[i])
      num = num/primos[i]
    } else {
      i++
    }
  }
  return factores;

}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true
  while(swap){
    swap = false
    for(let i = 0; i < array.length - 1; i++){
      let a = array[i];
      let b = array[i + 1]

      if(b < a){
        swap = true
        array[i] = b
        array[i + 1] = a
      }
    }
  }
  return array

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for( let i = 1; i < array.length; i++){ 
    let current = array[i];
    let swapB = true
    let j = i-1
    while(swapB && j>=0){
      swapB = false
      let b = array[j]
      if(current<b){
        array[j+1] = b
        array[j] = current
        swapB = true
        j--
      } else{
        array[j+1] = current
      }
      if(j+1 === i) swapB=false
    }
  }

return array

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 0; i < array.length-1; i++){
    let current = array[i];
    let index = i
    let min = array[i]    
    for(let j = i+1; j < array.length; j++){
      let b = array[j]
      if(b < min){
        min = b;
        index = j
      }      
    }
    array[i] = min
    array[index] = current
    
  }
  return array

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
