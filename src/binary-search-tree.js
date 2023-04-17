const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  
  constructor(){
    this.rootElement = null
  }
  root() {
    return this.rootElement;
  }

  add(data) {
    this.rootElement = addValue(this.rootElement ,data)

    function addValue(node, data){

      if(node === null){
        return new Node(data);
      }
      if(node.data === data){
        return node;
      }
      if(node.data > data){
        node.left = addValue(node.left , data);
      }
      else if(data > node.data){
        node.right = addValue(node.right , data);
      }
      return node;
    }
 
  }

  has(data) {
    return hasValue(this.rootElement , data);

    function hasValue(node , data){
      if(!node){
        return false;
      }
      if(node.data === data){
        return true
      }
      if(node.data > data){
       return hasValue(node.left , data);
      }
      else{
       return hasValue(node.right , data);
      }
    }
  }

  find(data) {
      return findValue(this.rootElement , data);

    function findValue(node , data){
      if(!node){
        return null;
      }
      if(node.data === data){
        return node
      }
      if(data < node.data){
       return findValue(node.left , data);
      }
      else{
       return findValue(node.right , data);
      }
    }
  }

  remove(data) {
    return removeNode(this.rootElement , data);

    function removeNode(node , data){
      if(!node){
        return null
      }
       else if(node.data > data){
        node.left = removeNode(node.left , data)
        return node
      }
      else if(node.data < data){
        node.right = removeNode(node.right , data)
        return node
      }
      else{
        if(!node.left && !node.right){
          return null
        }

        if(!node.left){
          return node.right
        }
        if(!node.right){
          return node.left;
        }

        let rightMinValue = node.right

        while(rightMinValue.left !== null){
          rightMinValue = rightMinValue.left
        }
        node.data = rightMinValue.data;
        node.right = removeNode(node.right , rightMinValue.data)
        return node;
      }
    }
  }

  min(node = this.rootElement) {
    if(!this.rootElement){
      return;
    }

    while(node.left !== null){
      node = node.left
    }
    return node.data
  }

  max(node = this.rootElement) {
    if(!this.rootElement){
      return;
    }

    while(node.right !== null){
      node = node.right
    }
    return node.data
  }
}
module.exports = {
  BinarySearchTree
};