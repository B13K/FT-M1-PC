'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0
  for(let i=0; i<num.length; i++){
    decimal = decimal + Math.pow(2,num.length-1-i)*num[i]
  }
  return decimal

}

function DecimalABinario(num) {
  // tu codigo aca
  let residuo = num;
  let binario =''

  while(residuo>1){
    binario += residuo%2;
    residuo = Math.floor(residuo/2)
  }
  if(residuo==1){
    binario += 1
  }
  
  let bin = binario.split('').reverse().join('')
  return bin;

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}