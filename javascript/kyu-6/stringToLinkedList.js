// parse accepts a string representing a Linked List
// Example: "1 -> 2 -> 3 -> null"
// parse will return a linked list containing each value from the string
// if the only value is null, parse will return null
// the string items are guaranteed to consist of non-negative integers or null
function parse(string) {
  // check for input only null
  if (string === "null") return null;
  // convert string into list of items
  let itemArray = string.split(" -> ");
  // previous stores the last node created
  let previous = null;
  // iterate through itemArray creating a new node for each item.
  for (let i = itemArray.length - 2; i >= 0; i--) {
    // pass in previous as second parameter to assign pointer for this node
    let node = new Node(Number(itemArray[i]), previous);
    // move previous to current node before next iteration
    previous = node;
  }
  // return the head of the linked list!
  return previous;
}
