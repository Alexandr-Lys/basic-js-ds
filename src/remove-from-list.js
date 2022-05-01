const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
// function removeKFromList(/* l, k */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function removeKFromList(l, k) {
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
    removeAt(indexArr) {
      let current = this.head;
      for (let i = 0; i < indexArr.length; i++) {
        if (indexArr[i] === 0) {
          this.head = current.next;
        } else {
          let prev = null;
          let index = 0;

          while (index < indexArr[i]) {
            prev = current;
            current = current.next;
            index++;
          }
          prev.next = current.next;
        }
        this.length--;
      }

    }
    indexOfArrays(k) {
      let current = this.head
      let index = 0
      let indexArr = []

      while (current) {
        if (current.value === k) {
          indexArr.push(index)
        }
        current = current.next;
        index++;
      }
      return indexArr
    }
  }
  l.removeAt(this.indexOf(k))
  return l


}

module.exports = {
  removeKFromList
};
