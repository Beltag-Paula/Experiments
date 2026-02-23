// Title: Tree Traversal (Expert)
// Goal: Recursive generator to flatten a nested tree.
// Input: Tree {val: 1, children: [{val: 2}]}.
// Output: Flat sequence 1, 2 via yield and yield*.

/**
 * Recursive Tree Flattener
 * @param {Object} node - { val: any, children: [] }
 */
function* flattenTree(node) {
  if (!node) return;

  // 1. Yield the current node value
  yield node.val;

  // 2. If children exist, delegate to the same generator for each child
  if (node.children) {
    for (const child of node.children) {
      yield* flattenTree(child); // The "Expert" delegation move
    }
  }
}

// --- Test Case ---
const tree = {
  val: 1,
  children: [
    { 
      val: 2, 
      children: [{ val: 4 }, { val: 5 }] 
    },
    { val: 3 }
  ]
};

// Consumption
const sequence = [...flattenTree(tree)]; 
console.log(sequence); // [1, 2, 4, 5, 3]