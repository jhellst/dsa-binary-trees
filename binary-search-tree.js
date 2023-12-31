"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (this.val === val) {
      return this;
    }

    if (val > this.val) {
      if (this.right) {
        return this.right.findRecursively(val);
      } else {
        return;
      }
    } else {
      if (this.left) {
        return this.left.findRecursively(val);
      } else {
        return;
      }
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (val > this.val) {
      // Go right
      if (this.right) {
        return this.right.insertRecursively(val);
      } else {
        this.right = new Node(val);
        return this;
      }
    } else {
      if (this.left) {
        return this.left.insertRecursively(val);
      } else {
        this.left = new Node(val);
        return this;
      }
    }
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this) return [];

    let nodes = [this.val];
    if (this.left) nodes = nodes.concat(this.left.dfsPreOrder());
    if (this.right) nodes = nodes.concat(this.right.dfsPreOrder());

    return nodes;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this) return [];

    let nodes = [];

    if (this.left) nodes = nodes.concat(this.left.dfsInOrder());
    nodes.push(this.val);
    if (this.right) nodes = nodes.concat(this.right.dfsInOrder());

    return nodes;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this) return [];

    let nodes = [];

    if (this.left) nodes = nodes.concat(this.left.dfsPostOrder());
    if (this.right) nodes = nodes.concat(this.right.dfsPostOrder());
    nodes.push(this.val);

    return nodes;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  //     [4]
  //  [2,     6]  -> 8
  // [1, 3] [5, 7]

  insert(val) {

    if (!this.root) {
      this.root = new Node(val);
      return this.root;
    }

    const stack = [this.root];

    while (stack.length) {
      let current = stack.pop();
      if (current.val < val) {
        if (current.right) {
          stack.push(current.right);
        } else {
          current.right = new Node(val);
          return this.root;
        }
      } else {
        if (current.left) {
          stack.push(current.left);
        } else {
          current.left = new Node(val);
          return this.root;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      this.root.insertRecursively(val);
    }

    return this.root;
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return;

    const stack = [this.root];

    while (stack.length) {
      const current = stack.pop();

      if (current.val === val) {
        return current;
      }
      else {
        if (current.val < val) {
          if (current.right) {
            stack.push(current.right);
          }
          else {
            return;
          }
        }
        else {
          if (current.left) {
            stack.push(current.left);
          }
          else {
            return;
          }
        }
      }
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (!this.root) {
      return;
    } else {
      return this.root.findRecursively(val);
    }
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (!this.root) {
      return [];
    }

    let results = [];
    const queue = [this.root];

    while (queue.length) {
      let current = queue.shift();
      results.push(current.val);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return results;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    if (!this.root) return null;
    if (!this.root.findRecursively(val)) return null;

    const stack = [this.root];

    while (stack.length){
      const current = stack.pop();
      if(val === current.val){
        //handles grabbing children to pass to this.parent
      }
      else {
        if (val < current.val){
          stack.push(this.left)
        }
        else {
          stack.push(this.right)
        }
      }
    }


  }
}

module.exports = {
  BinarySearchTree,
  Node,
};
