// basic implementation of a linked list using a Node constructor giving each node a data point and a pointer to the next node
function Node(data) {
  this.data = data;
  this.next = null;
}

// getNth returns Nth node in linked list or throws error for invalid index or head node
function getNth(node, index) {
  if (!node) throw new Error('Invalid') // check if inputted node exists
  return index === 0 ? node:getNth(node.next, index - 1) // checks if current node is at the given index, recursively calls getNth until index is found
}
