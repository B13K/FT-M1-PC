"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*
  - size: retorna la cantidad total de nodos del árbol
*/
BinarySearchTree.prototype.size = function(){
  // caso base cuando es nodo hoja, no hay derecha ni izquierda
  if(!this.right && !this.left) return 1;

  // caso base cuando hay uno solo nodo hijo
  if(!this.right && this.left) return 1 + this.left.size()
  if(this.right && !this.left) return 1 +this.right.size()

  return 1 + this.left.size() + this.right.size();
}

/*
  - insert: agrega un nodo en el lugar correspondiente
*/

BinarySearchTree.prototype.insert = function(value){

  if(value < this.value){
    // insert izquierda
    if(this.left===null){
      this.left = new BinarySearchTree(value)
    } else{
      this.left.insert(value)
    }
  }

  if(value > this.value) {
    //insert derecha
    if(this.right===null){
      this.right = new BinarySearchTree(value)
    } else{
      this.right.insert(value)
    }
  }
}

/*
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
*/

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;

  if(value<this.value){
    if(!this.left) return false
    else return this.left.contains(value)
    
  }
  if(value>this.value){
    if(!this.right) return false
    else return this.right.contains(value)
  }
  return false;
}

/*
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS)
   en cualquiera de sus variantes, según se indique por parámetro 
   ("post-order", "pre-order", o "in-order"). 
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
*/

BinarySearchTree.prototype.depthFirstForEach = function(cb, recorrido){
  if(recorrido === "in-order" || !recorrido){
    // nodo izq --> nodo padre --> nodo der
    this.left && this.left.depthFirstForEach(cb, recorrido);
    // if(this.left){
    //   this.left.depthFirstForEach(cb, recorrido)
    // } este if es lo mismo que la linea 88
    cb(this.value);
    this.right && this.right.depthFirstForEach(cb, recorrido);
    
  }
  if(recorrido ==='post-order'){
    // nodo izq --> nodo der --> nodo padre
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
    cb(this.value);
  }
  if(recorrido === 'pre-order') {
    // nodo padre --> nodo izq --> nodo der
    cb(this.value);
    this.left && this.left.depthFirstForEach(cb, recorrido);
    this.right && this.right.depthFirstForEach(cb, recorrido);
  }
}

/*
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
*/

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
  //const arr = []
  cb(this.value)
  this.left && arr.push(this.left);
  this.right && arr.push(this.right)

  arr.length && arr.shift().breadthFirstForEach(cb, arr)
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
